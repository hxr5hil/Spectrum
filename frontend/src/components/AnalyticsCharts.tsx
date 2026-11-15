import React from "react";
import { BarChart2, PieChart, ShieldAlert } from "lucide-react";

interface AnalyticsChartsProps {
  metrics: {
    total_articles: number;
    sentiment_distribution: {
      positive: number;
      positive_pct: number;
      negative: number;
      negative_pct: number;
      neutral: number;
      neutral_pct: number;
    };
    ministry_breakdown: Record<
      string,
      {
        code: string;
        category: string;
        total: number;
        positive: number;
        negative: number;
        neutral: number;
        negative_ratio: number;
      }
    >;
  };
}

export default function AnalyticsCharts({ metrics }: AnalyticsChartsProps) {
  if (!metrics || !metrics.sentiment_distribution) {
    return (
      <div className="eleven-card p-16 text-center text-[#111111] text-xl font-bold">
        Loading analytics engine...
      </div>
    );
  }

  const { sentiment_distribution, ministry_breakdown } = metrics;
  const sectors = Object.entries(ministry_breakdown || {}).map(([name, data]) => ({
    name,
    ...data,
  }));

  const sortedByRisk = [...sectors].sort((a, b) => b.negative_ratio - a.negative_ratio);

  return (
    <div className="space-y-10">
      {/* 1. Global Sentiment Polarity */}
      <div className="eleven-card p-10 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-[32px] font-extrabold text-[#000000] flex items-center gap-3.5 tracking-tight">
              <PieChart className="w-8 h-8 text-[#000000]" />
              Sentiment Polarity Distribution
            </h3>
            <p className="text-[18px] font-semibold text-[#333333] mt-2">
              Aggregate distribution across <strong className="text-[#000000]">{metrics.total_articles.toLocaleString()}</strong> digital media stories
            </p>
          </div>
          <span className="text-[15px] font-bold px-5 py-2.5 rounded-full bg-[#EFEFEF] text-[#000000] border border-black/[0.14] self-start sm:self-auto">
            Live Stream
          </span>
        </div>

        {/* Multi-segment Bar (Thick & Visible) */}
        <div className="h-7 w-full rounded-full bg-[#E5E2DC] overflow-hidden flex shadow-inner">
          <div
            style={{ width: `${sentiment_distribution.positive_pct}%` }}
            className="bg-[#008030] transition-all"
            title={`Positive: ${sentiment_distribution.positive_pct}%`}
          />
          <div
            style={{ width: `${sentiment_distribution.neutral_pct}%` }}
            className="bg-[#444444] transition-all"
            title={`Neutral: ${sentiment_distribution.neutral_pct}%`}
          />
          <div
            style={{ width: `${sentiment_distribution.negative_pct}%` }}
            className="bg-[#D91022] transition-all"
            title={`Negative: ${sentiment_distribution.negative_pct}%`}
          />
        </div>

        {/* Legend / KPI summary boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-black/[0.12]">
          <div className="p-7 rounded-3xl bg-[#F5F3F1] border border-black/[0.1]">
            <div className="flex items-center gap-2.5 text-[17px] text-[#008030] font-extrabold">
              <span className="w-3.5 h-3.5 rounded-full bg-[#008030]"></span>
              Positive / Favorable
            </div>
            <div className="text-[48px] font-black text-[#000000] mt-3 leading-none">
              {sentiment_distribution.positive.toLocaleString()}
            </div>
            <p className="text-[17px] font-bold text-[#333333] mt-2.5">{sentiment_distribution.positive_pct}% of total coverage</p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F5F3F1] border border-black/[0.1]">
            <div className="flex items-center gap-2.5 text-[17px] text-[#222222] font-extrabold">
              <span className="w-3.5 h-3.5 rounded-full bg-[#444444]"></span>
              Neutral / Objective
            </div>
            <div className="text-[48px] font-black text-[#000000] mt-3 leading-none">
              {sentiment_distribution.neutral.toLocaleString()}
            </div>
            <p className="text-[17px] font-bold text-[#333333] mt-2.5">{sentiment_distribution.neutral_pct}% of total coverage</p>
          </div>

          <div className="p-7 rounded-3xl bg-[#F5F3F1] border border-black/[0.1]">
            <div className="flex items-center gap-2.5 text-[17px] text-[#D91022] font-extrabold">
              <span className="w-3.5 h-3.5 rounded-full bg-[#D91022]"></span>
              Adverse / Critical
            </div>
            <div className="text-[48px] font-black text-[#000000] mt-3 leading-none">
              {sentiment_distribution.negative.toLocaleString()}
            </div>
            <p className="text-[17px] font-bold text-[#333333] mt-2.5">{sentiment_distribution.negative_pct}% of total coverage</p>
          </div>
        </div>
      </div>

      {/* 2. Sector Risk & Sentiment Matrix */}
      <div className="eleven-card p-10 sm:p-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-[32px] font-extrabold text-[#000000] flex items-center gap-3.5 tracking-tight">
              <BarChart2 className="w-8 h-8 text-[#000000]" />
              Sector Exposure & Vulnerability Matrix
            </h3>
            <p className="text-[18px] font-semibold text-[#333333] mt-2">
              Comparative sentiment breakdown across monitored domains and topics
            </p>
          </div>
          <span className="text-[16px] font-extrabold text-[#D91022] bg-[#FEECEC] px-5 py-2.5 rounded-full flex items-center gap-2 self-start sm:self-auto border border-red-300">
            <ShieldAlert className="w-5 h-5" />
            Ranked by Adverse Exposure
          </span>
        </div>

        <div className="space-y-5">
          {sortedByRisk.map((item) => {
            const posPct = item.total > 0 ? Math.round((item.positive / item.total) * 100) : 0;
            const negPct = item.total > 0 ? Math.round((item.negative / item.total) * 100) : 0;
            const neuPct = 100 - posPct - negPct;
            const isHighRisk = item.negative_ratio > 20;

            return (
              <div
                key={item.code}
                className="p-6 sm:p-7 rounded-3xl bg-[#F5F3F1] border border-black/[0.1] transition hover:bg-[#EFECE6]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1.5 rounded-lg bg-white text-[#000000] text-[15px] font-mono font-bold border border-black/[0.14] shadow-sm">
                      {item.code}
                    </span>
                    <span className="font-extrabold text-[22px] text-[#000000]">{item.category}</span>
                    <span className="text-[#333333] text-[16px] font-semibold">({item.name})</span>
                  </div>

                  <div className="flex items-center space-x-6 text-[17px] font-extrabold">
                    <span className="text-[#222222]">{item.total} stories</span>
                    <span className="text-[#008030]">{posPct}% Pos</span>
                    <span className={`${isHighRisk ? "text-[#D91022]" : "text-[#222222]"}`}>
                      {negPct}% Adverse
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-4 w-full rounded-full bg-[#E5E2DC] overflow-hidden flex shadow-inner">
                  <div style={{ width: `${posPct}%` }} className="bg-[#008030] transition-all" />
                  <div style={{ width: `${neuPct}%` }} className="bg-[#444444] transition-all" />
                  <div style={{ width: `${negPct}%` }} className="bg-[#D91022] transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
