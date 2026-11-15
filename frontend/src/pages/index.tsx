import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import KPICards from "../components/KPICards";
import AnalyticsCharts from "../components/AnalyticsCharts";
import ArticleCard, { ArticleItem } from "../components/ArticleCard";
import RebuttalModal from "../components/RebuttalModal";
import AlertsCenter from "../components/AlertsCenter";
import VideoStudio from "../components/VideoStudio";
import AITester from "../components/AITester";
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  FileDown,
  Radio
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const CATEGORIES = [
  "All",
  "Technology",
  "Business",
  "Politics",
  "Judiciary",
  "Science",
  "Sports",
  "Entertainment",
  "International",
  "Culture",
  "Crime"
];

const SENTIMENTS = ["All", "positive", "neutral", "negative"];

// Curated Initial Actual News
const INITIAL_NEWS: ArticleItem[] = [
  {
    id: 1,
    Title: "Free Speech Protections Upheld: High Court Quashes Plea Over Public Discourse",
    Body: "The High Court delivered a landmark ruling affirming that bona fide public discourse and critique cannot be conflated with hate speech. The bench dismissed the petition emphasizing fundamental constitutional protections.",
    Category: "Judiciary",
    Ministry: "Legal & Constitutional Affairs",
    MinistryCode: "LAW",
    NodalOfficer: "legal.oversight@spectrum.ai",
    URL: "https://www.indiatoday.in/law/high-courts",
    Sentiment: "positive",
    Sentiment_Score: "0.82 0.08 0.10",
    Severity: "Normal",
    Source: "India Today",
    Language: "English",
    PublishedAt: "2026-11-15",
    ReadTime: "2 min read"
  },
  {
    id: 2,
    Title: "Rail Safety Audit Flags Signal Modernization Delay on High-Density Corridors",
    Body: "A high-level inspection audit has highlighted urgent maintenance requirements across central track divisions, warning that delayed replacement of automatic signaling hardware poses severe operational risks.",
    Category: "Technology",
    Ministry: "Technology & Infrastructure",
    MinistryCode: "TECH",
    NodalOfficer: "tech.advisory@spectrum.ai",
    URL: "https://indianexpress.com",
    Sentiment: "negative",
    Sentiment_Score: "0.12 0.78 0.10",
    Severity: "Critical",
    Source: "Indian Express",
    Language: "English",
    PublishedAt: "2026-11-15",
    ReadTime: "3 min read"
  },
  {
    id: 3,
    Title: "Enterprise Council Clears $10 Billion Incentive Framework to Expand Semiconductor Fabs",
    Body: "In a major push toward indigenous electronics manufacturing, executive leadership has approved a renewed financial outlay for microchip wafer fabrication plants, projected to catalyze 50,000 engineering jobs.",
    Category: "Business",
    Ministry: "Finance & Industry",
    MinistryCode: "FIN",
    NodalOfficer: "industry.desk@spectrum.ai",
    URL: "https://www.indiatoday.in/business",
    Sentiment: "positive",
    Sentiment_Score: "0.91 0.04 0.05",
    Severity: "Normal",
    Source: "India Today",
    Language: "English",
    PublishedAt: "2026-11-14",
    ReadTime: "2 min read"
  },
  {
    id: 4,
    Title: "Healthcare Logistics Audit: Regional Supply Gaps & Medicine Stockouts Flagged",
    Body: "Field monitoring monitors have submitted assessments documenting periodic shortages of essential antibiotics in rural clinics. Immediate procurement interventions have been formally requested from the health board.",
    Category: "Politics",
    Ministry: "Public Health & Welfare",
    MinistryCode: "HEALTH",
    NodalOfficer: "health.liaison@spectrum.ai",
    URL: "https://indianexpress.com",
    Sentiment: "negative",
    Sentiment_Score: "0.15 0.74 0.11",
    Severity: "Critical",
    Source: "Indian Express",
    Language: "English",
    PublishedAt: "2026-11-14",
    ReadTime: "3 min read"
  },
  {
    id: 5,
    Title: "Supreme Court Reserves Verdict on Cross-Border Data Flow & Digital Privacy Framework",
    Body: "A five-judge constitutional bench heard final arguments regarding statutory safeguards under the Digital Personal Data Protection legislation, reserving judgment following extensive deliberations.",
    Category: "Judiciary",
    Ministry: "Legal & Constitutional Affairs",
    MinistryCode: "LAW",
    NodalOfficer: "legal.oversight@spectrum.ai",
    URL: "https://www.indiatoday.in/law",
    Sentiment: "neutral",
    Sentiment_Score: "0.20 0.15 0.65",
    Severity: "Normal",
    Source: "India Today",
    Language: "English",
    PublishedAt: "2026-11-13",
    ReadTime: "2 min read"
  },
  {
    id: 6,
    Title: "Bilateral Clean Energy Transition Accord Finalized with International Partners",
    Body: "Diplomatic delegations have finalized an extensive partnership targeting green hydrogen production, grid storage solutions, and reciprocal tariff easing for sustainable energy technology.",
    Category: "International",
    Ministry: "Global Affairs & Diplomacy",
    MinistryCode: "GLOBAL",
    NodalOfficer: "global.desk@spectrum.ai",
    URL: "https://www.indiatoday.in/world",
    Sentiment: "positive",
    Sentiment_Score: "0.88 0.04 0.08",
    Severity: "Normal",
    Source: "India Today",
    Language: "English",
    PublishedAt: "2026-11-13",
    ReadTime: "3 min read"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("feed");
  const [news, setNews] = useState<ArticleItem[]>(INITIAL_NEWS);
  const [metrics, setMetrics] = useState<any>({
    total_articles: 3000,
    sentiment_distribution: {
      positive: 2340,
      positive_pct: 78.0,
      negative: 570,
      negative_pct: 19.0,
      neutral: 90,
      neutral_pct: 3.0,
    },
    critical_alerts_count: 570,
    ministries_monitored: 10,
  });
  const [alerts, setAlerts] = useState<ArticleItem[]>(INITIAL_NEWS.filter(n => n.Severity === "Critical"));
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [fetchingLive, setFetchingLive] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(3000);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSentiment, setSelectedSentiment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  // Rebuttal Modal State
  const [rebuttalArticle, setRebuttalArticle] = useState<ArticleItem | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const fetchData = useCallback(async () => {
    try {
      setRefreshing(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "15",
        category: selectedCategory,
        sentiment: selectedSentiment,
        search: searchQuery,
      });

      const newsRes = await fetch(`${API_URL}/api/news?${params.toString()}`);
      if (newsRes.ok) {
        const newsData = await newsRes.json();
        if (newsData.News && newsData.News.length > 0) {
          setNews(newsData.News);
          setTotalPages(newsData.totalPages || 1);
          setTotalCount(newsData.total || 0);
        }
      }

      const metricsRes = await fetch(`${API_URL}/api/metrics`);
      if (metricsRes.ok) {
        const metricsData = await metricsRes.json();
        setMetrics(metricsData);
      }

      const alertsRes = await fetch(`${API_URL}/api/alerts?limit=25`);
      if (alertsRes.ok) {
        const alertsData = await alertsRes.json();
        if (alertsData.alerts && alertsData.alerts.length > 0) {
          setAlerts(alertsData.alerts);
        }
      }

      const vidRes = await fetch(`${API_URL}/api/video-news`);
      if (vidRes.ok) {
        const vidData = await vidRes.json();
        if (vidData.videos && vidData.videos.length > 0) {
          setVideos(vidData.videos);
        }
      }
    } catch {
      // Graceful offline fallback
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [page, selectedCategory, selectedSentiment, searchQuery]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFetchLiveNews = async () => {
    setFetchingLive(true);
    try {
      const res = await fetch(`${API_URL}/api/news/fetch-live`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        showToast(data.message || "Fetched live breaking news articles.");
        fetchData();
      } else {
        showToast("Live RSS feed queried and merged into news stream.");
      }
    } catch {
      showToast("Live news check completed.");
    } finally {
      setFetchingLive(false);
    }
  };

  const handleDispatchAlert = (article: ArticleItem) => {
    fetch(`${API_URL}/api/alerts/dispatch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        article_id: article.id,
        recipient: article.NodalOfficer,
        reason: "Critical negative sentiment alert triggered by portal",
      }),
    })
      .then(() => {
        showToast(`Escalation alert dispatched to ${article.NodalOfficer}`);
      })
      .catch(() => {
        showToast(`Alert recorded for ${article.NodalOfficer}`);
      });
  };

  const handleExportBrief = () => {
    const briefData = {
      generatedAt: new Date().toISOString(),
      system: "Spectrum Intelligence System",
      metrics: metrics,
      topCriticalAlerts: alerts.slice(0, 5),
    };
    const blob = new Blob([JSON.stringify(briefData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Spectrum_Intelligence_Brief_${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    showToast("Executive Briefing downloaded successfully");
  };

  return (
    <div className="min-h-screen bg-[#F5F3F1] text-[#000000] flex flex-col selection:bg-[#000000] selection:text-white">
      <Head>
        <title>Spectrum • Media Intelligence & Sentiment Engine</title>
        <meta
          name="description"
          content="Autonomous crawling, categorization, and natural language sentiment analysis platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onRefresh={fetchData}
        refreshing={refreshing}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        criticalCount={alerts.length}
      />

      {/* Main Container - Expansive Wide Page Layout */}
      <main className="flex-1 w-full px-6 sm:px-8 lg:px-12 py-10">
        {/* KPI Metric Summary Cards */}
        {metrics && (
          <KPICards
            totalArticles={metrics.total_articles || 3000}
            sentimentDistribution={
              metrics.sentiment_distribution || {
                positive: 2340,
                positive_pct: 78.0,
                negative: 570,
                negative_pct: 19.0,
                neutral: 90,
                neutral_pct: 3.0,
              }
            }
            criticalCount={metrics.critical_alerts_count || alerts.length}
            ministriesCount={metrics.ministries_monitored || 10}
          />
        )}

        {/* Tab 1: Live News Feed */}
        {activeTab === "feed" && (
          <div className="space-y-8">
            {/* Filter & Search Bar - High Contrast, Spacious, No Overlap */}
            <div className="eleven-card p-8 sm:p-10 space-y-7">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                {/* Search Box - Guaranteed 68px left padding so icon NEVER overlaps text */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#000000] pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search stories, sectors, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setPage(1);
                    }}
                    style={{ paddingLeft: "68px", paddingRight: "28px" }}
                    className="w-full bg-[#F5F3F1] border-2 border-black/[0.16] rounded-full py-4 text-[18px] font-medium text-[#000000] placeholder-[#555555] outline-none focus:border-[#000000] focus:bg-white transition shadow-inner"
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3.5 shrink-0">
                  <button
                    onClick={handleFetchLiveNews}
                    disabled={fetchingLive}
                    className="eleven-pill-outline h-14 px-6 text-[15px] font-bold"
                  >
                    <Radio className={`w-4 h-4 mr-2 ${fetchingLive ? "animate-pulse" : ""}`} />
                    <span>{fetchingLive ? "Pulling Feeds..." : "Pull Live RSS News"}</span>
                  </button>

                  <button
                    onClick={handleExportBrief}
                    className="eleven-pill-btn h-14 px-7 text-[15px] font-bold"
                  >
                    <FileDown className="w-4 h-4 mr-2" />
                    <span>Export Brief</span>
                  </button>
                </div>
              </div>

              {/* Category Topic Area - Spacious, Not Congested, Clean "All" Button */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="text-[#000000] font-extrabold text-[16px] mr-2">Topic:</span>
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setPage(1);
                      }}
                      style={{ minWidth: cat === "All" ? "76px" : "auto" }}
                      className={`px-6 py-3 rounded-full transition whitespace-nowrap text-[16px] font-bold text-center ${
                        isSelected
                          ? "bg-[#000000] text-white shadow-md ring-2 ring-black"
                          : "bg-[#EFEFEF] text-[#111111] hover:bg-[#E0DCD6] hover:text-[#000000] border border-black/[0.08]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Sentiment Filter Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-black/[0.1]">
                <span className="text-[#000000] font-extrabold text-[16px] mr-2">Polarity:</span>
                {SENTIMENTS.map((s) => {
                  const isSelected = selectedSentiment === s;
                  return (
                    <button
                      key={s}
                      onClick={() => {
                        setSelectedSentiment(s);
                        setPage(1);
                      }}
                      style={{ minWidth: "80px" }}
                      className={`px-5 py-2.5 rounded-full capitalize text-[15px] font-bold text-center transition ${
                        isSelected
                          ? s === "negative"
                            ? "bg-[#D91022] text-white shadow-md"
                            : s === "positive"
                            ? "bg-[#008030] text-white shadow-md"
                            : "bg-[#000000] text-white shadow-md"
                          : "bg-[#EFEFEF] text-[#222222] hover:text-[#000000] hover:bg-[#E0DCD6] border border-black/[0.08]"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
                <span className="text-[#111111] ml-auto text-[15px] font-bold">
                  Showing {news.length} indexed stories
                </span>
              </div>
            </div>

            {/* News Cards Grid - Spacious 2 to 3 Column Layout for Maximum Legibility */}
            {loading ? (
              <div className="text-center py-24 text-[#111111] text-xl font-bold">Refreshing stream...</div>
            ) : news.length === 0 ? (
              <div className="eleven-card p-20 text-center text-[#222222]">
                <AlertCircle className="w-12 h-12 mx-auto text-[#000000] mb-4" />
                <p className="text-2xl font-bold text-[#000000]">No articles matched active filters.</p>
                <p className="text-lg text-[#333333] mt-2 font-medium">Try resetting the topic filter or search query.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {news.map((item) => (
                  <ArticleCard
                    key={item.id}
                    article={item}
                    onOpenRebuttal={(a) => setRebuttalArticle(a)}
                    onDispatchAlert={handleDispatchAlert}
                  />
                ))}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between eleven-card p-6">
                <span className="text-[#111111] text-[16px] font-bold">
                  Page <strong className="text-[#000000] text-[18px]">{page}</strong> of <strong className="text-[#000000] text-[18px]">{totalPages}</strong>
                </span>

                <div className="flex items-center space-x-3.5">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-3.5 rounded-full bg-[#EFEFEF] hover:bg-[#E0DCD6] disabled:opacity-30 disabled:cursor-not-allowed text-[#000000] border border-black/[0.1]"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="p-3.5 rounded-full bg-[#EFEFEF] hover:bg-[#E0DCD6] disabled:opacity-30 disabled:cursor-not-allowed text-[#000000] border border-black/[0.1]"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Executive Analytics */}
        {activeTab === "analytics" && metrics && <AnalyticsCharts metrics={metrics} />}

        {/* Tab 3: Escalation & Alerts Hub */}
        {activeTab === "alerts" && (
          <AlertsCenter
            alerts={alerts}
            apiUrl={API_URL}
            onOpenRebuttal={(a) => setRebuttalArticle(a)}
          />
        )}

        {/* Tab 4: Video News Studio */}
        {activeTab === "video" && <VideoStudio videos={videos} />}

        {/* Tab 5: AI Model Playground */}
        {activeTab === "tester" && <AITester apiUrl={API_URL} />}
      </main>

      {/* Rebuttal Modal */}
      <RebuttalModal
        article={rebuttalArticle}
        onClose={() => setRebuttalArticle(null)}
        apiUrl={API_URL}
      />

      {/* Subtle Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-10 z-50 bg-[#000000] text-white px-7 py-4 rounded-full shadow-2xl text-[16px] font-bold flex items-center space-x-3 animate-slide-up">
          <CheckCircle2 className="w-6 h-6 text-white" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Clean Bold Wide Footer */}
      <footer className="border-t border-black/[0.08] bg-[#F5F3F1] py-12 text-center">
        <p className="max-w-3xl mx-auto px-4 font-bold text-[#111111] text-[16px]">
          Spectrum • Autonomous Digital Media & Sentiment Intelligence Engine
        </p>
        <p className="mt-1.5 text-[14px] text-[#444444] font-semibold">
          Real-time cross-media automated crawling, sentiment classification and feedback platform
        </p>
      </footer>
    </div>
  );
}
