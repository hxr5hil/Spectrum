import React, { useState } from "react";
import { Send, CheckCircle2, ShieldAlert, Mail, Tag, ExternalLink } from "lucide-react";
import { ArticleItem } from "./ArticleCard";
import { TRANSLATIONS, SupportedLanguage, localizeArticle } from "../utils/translations";

interface AlertsCenterProps {
  alerts: ArticleItem[];
  apiUrl: string;
  onOpenRebuttal: (article: ArticleItem) => void;
  selectedLanguage?: string;
}

export default function AlertsCenter({
  alerts,
  apiUrl,
  onOpenRebuttal,
  selectedLanguage = "English",
}: AlertsCenterProps) {
  const [dispatchedMap, setDispatchedMap] = useState<Record<number, boolean>>({});
  const lang = (selectedLanguage as SupportedLanguage) || "English";
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;

  const handleDispatch = (article: ArticleItem) => {
    setDispatchedMap((prev) => ({ ...prev, [article.id]: true }));
    fetch(`${apiUrl}/api/alerts/dispatch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        article_id: article.id,
        recipient: article.NodalOfficer,
        reason: "Adverse Media Sentiment Alert",
      }),
    }).catch(console.error);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner Card */}
      <div className="eleven-card p-10 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-[#FEECEC] flex items-center justify-center text-[#D91022] shrink-0 border border-red-200">
            <ShieldAlert className="w-7 h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="eleven-headline text-[32px] text-[#000000] tracking-tight">
                {t.alertsHubTitle}
              </h2>
              <span className="px-4 py-1 rounded-full text-[15px] bg-[#D91022] text-white font-extrabold shadow-sm">
                {alerts.length} {t.urgentIncidents}
              </span>
            </div>
            <p className="text-[18px] text-[#333333] font-semibold mt-2 max-w-4xl">
              {t.alertsHubSubtitle}
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            alerts.slice(0, 5).forEach((a) => handleDispatch(a));
          }}
          className="eleven-pill-btn min-h-[52px] px-8 text-[17px] font-bold shrink-0 self-start md:self-auto shadow-md"
        >
          <Send className="w-5 h-5 mr-2" />
          <span>{t.dispatchAllPending}</span>
        </button>
      </div>

      {/* Escalation Incidents List */}
      <div className="eleven-card overflow-hidden">
        <div className="px-8 py-5 border-b border-black/[0.1] text-[16px] font-extrabold text-[#000000] uppercase tracking-wider flex items-center justify-between bg-[#F5F3F1]">
          <span>{t.alertsHubTitle} Dossier</span>
          <span className="hidden md:inline">Assigned Lead & Action</span>
        </div>

        <div className="divide-y divide-black/[0.1]">
          {alerts.map((article) => {
            const localized = localizeArticle(article, lang);
            const rawParts = article.Sentiment_Score ? article.Sentiment_Score.split(" ") : ["0", "0.8", "0.2"];
            const negScore = parseFloat(rawParts[1]) || 0.8;
            const isSent = dispatchedMap[article.id];

            return (
              <div
                key={article.id}
                className="p-8 sm:p-10 hover:bg-[#FAF9F7] transition flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full bg-[#FEECEC] text-[#D91022] text-[15px] font-black border border-red-300">
                      {t.sentNegative}: {Math.round(negScore * 100)}%
                    </span>
                    <span className="px-4 py-1.5 rounded-full bg-[#EFEFEF] text-[#000000] text-[15px] font-bold border border-black/[0.1] flex items-center gap-1.5">
                      <Tag className="w-4 h-4 text-[#000000]" />
                      {localized.Category}
                    </span>
                    <span className="text-[#333333] text-[16px] font-bold">{article.Source}</span>
                  </div>

                  <h4 className="eleven-headline text-[24px] sm:text-[26px] text-[#000000] font-extrabold leading-snug">
                    <a
                      href={article.URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2 group"
                    >
                      <span>{localized.Title || localized.Heading}</span>
                      <ExternalLink className="w-5 h-5 opacity-40 group-hover:opacity-100 transition inline-block shrink-0" />
                    </a>
                  </h4>

                  <p className="text-[17px] text-[#222222] font-medium leading-relaxed max-w-4xl">
                    {localized.Body}
                  </p>
                </div>

                {/* Right Action */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-black/[0.08]">
                  <div className="text-left lg:text-right">
                    <p className="text-[16px] text-[#000000] flex items-center lg:justify-end gap-1.5 font-bold">
                      <Mail className="w-4 h-4 text-[#000000]" />
                      {article.NodalOfficer}
                    </p>
                    <p className="text-[15px] text-[#444444] font-semibold mt-0.5">{t.filterTopic} {localized.Category}</p>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <button
                      onClick={() => onOpenRebuttal(article)}
                      className="eleven-pill-outline min-h-[48px] px-6 text-[15px] font-bold flex-1 sm:flex-initial"
                    >
                      {t.draftRebuttal}
                    </button>

                    <button
                      onClick={() => handleDispatch(article)}
                      disabled={isSent}
                      className={`eleven-pill-btn min-h-[48px] px-6 text-[15px] font-bold flex-1 sm:flex-initial ${
                        isSent ? "bg-[#EFEFEF] text-[#000000] border border-black/[0.1] cursor-default" : ""
                      }`}
                    >
                      {isSent ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-[#000000] mr-2" />
                          <span>{t.notified}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          <span>{t.notifyLiaison}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
