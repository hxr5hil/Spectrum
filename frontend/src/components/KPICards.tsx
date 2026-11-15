import React from "react";
import { Newspaper, ThumbsUp, AlertTriangle, Layers, ArrowUpRight } from "lucide-react";

interface KPICardsProps {
  totalArticles: number;
  sentimentDistribution: {
    positive: number;
    positive_pct: number;
    negative: number;
    negative_pct: number;
    neutral: number;
    neutral_pct: number;
  };
  criticalCount: number;
  ministriesCount: number;
}

export default function KPICards({
  totalArticles,
  sentimentDistribution,
  criticalCount,
  ministriesCount,
}: KPICardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* 1. Monitored News */}
      <div className="eleven-card p-7 flex flex-col justify-between min-h-[185px]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[16px] font-extrabold text-[#000000] tracking-tight">
            Ingested Stories
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#F0EEEB] flex items-center justify-center text-[#000000] border border-black/[0.08]">
            <Newspaper className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="text-[48px] font-black text-[#000000] leading-none mb-2.5">
            {totalArticles.toLocaleString()}
          </div>
          <p className="text-[14px] text-[#222222] font-bold flex items-center gap-1.5">
            <ArrowUpRight className="w-4 h-4 text-[#000000]" />
            <span>Autonomous cross-media crawl</span>
          </p>
        </div>
      </div>

      {/* 2. Positive Coverage */}
      <div className="eleven-card p-7 flex flex-col justify-between min-h-[185px]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[16px] font-extrabold text-[#000000] tracking-tight">
            Positive Sentiment
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#E8F8EE] flex items-center justify-center text-[#008030] border border-green-200">
            <ThumbsUp className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="text-[48px] font-black text-[#008030] leading-none mb-2.5">
            {sentimentDistribution.positive_pct}%
          </div>
          <p className="text-[14px] text-[#222222] font-semibold">
            <strong className="text-[#000000] font-black">{sentimentDistribution.positive}</strong> favorable stories
          </p>
        </div>
      </div>

      {/* 3. Critical Alerts */}
      <div className="eleven-card p-7 flex flex-col justify-between min-h-[185px]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[16px] font-extrabold text-[#000000] tracking-tight">
            Adverse Incidents
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#FEECEC] flex items-center justify-center text-[#D91022] border border-red-200">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="text-[48px] font-black text-[#D91022] leading-none mb-2.5 flex items-center gap-2.5">
            {criticalCount}
            {criticalCount > 0 && (
              <span className="px-3 py-1 rounded-full text-[13px] font-black bg-[#D91022] text-white">
                Urgent
              </span>
            )}
          </div>
          <p className="text-[14px] text-[#222222] font-bold">
            Negative score ≥ 0.50
          </p>
        </div>
      </div>

      {/* 4. Monitored Sectors */}
      <div className="eleven-card p-7 flex flex-col justify-between min-h-[185px]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[16px] font-extrabold text-[#000000] tracking-tight">
            Monitored Sectors
          </span>
          <div className="w-11 h-11 rounded-2xl bg-[#F0EEEB] flex items-center justify-center text-[#000000] border border-black/[0.08]">
            <Layers className="w-5 h-5" />
          </div>
        </div>
        <div>
          <div className="text-[48px] font-black text-[#000000] leading-none mb-2.5">
            {ministriesCount}
          </div>
          <p className="text-[14px] text-[#222222] font-semibold">
            Automated topic taxonomy
          </p>
        </div>
      </div>
    </div>
  );
}
