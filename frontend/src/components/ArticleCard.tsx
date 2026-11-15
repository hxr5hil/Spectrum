import React, { useState } from "react";
import { 
  ExternalLink, 
  AlertTriangle, 
  FileText, 
  Send, 
  Clock, 
  CheckCircle2, 
  ThumbsUp, 
  ThumbsDown, 
  Minus, 
  Tag 
} from "lucide-react";

export interface ArticleItem {
  id: number;
  Title: string;
  Heading?: string;
  Body: string;
  FullBody?: string;
  Category: string;
  Ministry: string;
  MinistryCode: string;
  NodalOfficer: string;
  URL: string;
  Sentiment: "positive" | "negative" | "neutral" | string;
  Sentiment_Score: string;
  Scores?: {
    positive: number;
    negative: number;
    neutral: number;
  };
  Severity: "Critical" | "Moderate" | "Normal" | string;
  Source: string;
  Language: string;
  PublishedAt: string;
  ReadTime: string;
}

interface ArticleCardProps {
  article: ArticleItem;
  onOpenRebuttal: (article: ArticleItem) => void;
  onDispatchAlert: (article: ArticleItem) => void;
}

export default function ArticleCard({
  article,
  onOpenRebuttal,
  onDispatchAlert,
}: ArticleCardProps) {
  const [dispatched, setDispatched] = useState(false);
  const [showFull, setShowFull] = useState(false);

  const rawParts = article.Sentiment_Score ? article.Sentiment_Score.split(" ") : ["0.5", "0.2", "0.3"];
  const posScore = parseFloat(rawParts[0]) || 0;
  const negScore = parseFloat(rawParts[1]) || 0;
  const neuScore = parseFloat(rawParts[2]) || 0;

  const isCritical = article.Severity === "Critical" || negScore >= 0.50;

  const handleDispatch = () => {
    setDispatched(true);
    onDispatchAlert(article);
  };

  const getSentimentPill = () => {
    if (article.Sentiment === "negative" || negScore >= 0.50) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[13px] font-extrabold bg-[#FEECEC] text-[#D91022] whitespace-nowrap">
          <ThumbsDown className="w-3.5 h-3.5" />
          Negative {Math.round(negScore * 100)}%
        </span>
      );
    }
    if (article.Sentiment === "neutral") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[13px] font-extrabold bg-[#EFEFEF] text-[#222222] whitespace-nowrap">
          <Minus className="w-3.5 h-3.5" />
          Neutral {Math.round(neuScore * 100)}%
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[13px] font-extrabold bg-[#E8F8EE] text-[#008030] whitespace-nowrap">
        <ThumbsUp className="w-3.5 h-3.5" />
        Positive {Math.round(posScore * 100)}%
      </span>
    );
  };

  return (
    <div
      className={`eleven-card p-7 sm:p-8 flex flex-col justify-between min-h-[420px] transition-all ${
        isCritical ? "border-2 border-[#D91022] shadow-md" : "border border-black/[0.1]"
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-[#F0EEEB] text-[#000000] text-[13px] font-bold border border-black/[0.08] whitespace-nowrap">
              {article.Source || "Digital Media"}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#E8F2FD] text-[#0A59D2] text-[13px] font-bold whitespace-nowrap">
              <Tag className="w-3.5 h-3.5" />
              {article.Category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isCritical && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-extrabold bg-[#D91022] text-white whitespace-nowrap">
                <AlertTriangle className="w-3.5 h-3.5" />
                Adverse
              </span>
            )}
            {getSentimentPill()}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#000000] mb-2.5 leading-snug hover:text-[#0A59D2] transition cursor-pointer">
          <a href={article.URL} target="_blank" rel="noopener noreferrer">
            {article.Title || article.Heading}
          </a>
        </h3>

        {/* Domain Topic */}
        <p className="text-[14px] font-bold text-[#333333] mb-3">
          Sector Domain: <span className="text-[#000000] font-black underline decoration-black/20 underline-offset-4">{article.Ministry || article.Category}</span>
        </p>

        {/* Excerpt */}
        <p className="text-[15px] sm:text-[16px] text-[#222222] leading-relaxed mb-5 font-normal">
          {showFull ? (article.FullBody || article.Body) : article.Body}
          {article.Body && article.Body.length > 180 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="ml-1 text-[#000000] hover:underline text-[14px] font-black inline-block"
            >
              {showFull ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-black/[0.08] space-y-3">
        {/* Metadata row: Date/Read time on left, Source link on right */}
        <div className="flex items-center justify-between text-[13px] text-[#444444]">
          <div className="flex items-center space-x-2 font-semibold whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-[#000000]" />
            <span>{article.PublishedAt || "2026-11-15"}</span>
            <span>•</span>
            <span>{article.ReadTime || "2 min"}</span>
          </div>

          <a
            href={article.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F3F1] hover:bg-[#EAE7E2] text-[#000000] font-bold text-[13px] border border-black/[0.1] transition whitespace-nowrap"
          >
            <span>Source</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#000000]" />
          </a>
        </div>

        {/* Action Buttons for Critical / Adverse articles: clean 2-column row */}
        {isCritical && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/[0.06]">
            <button
              onClick={() => onOpenRebuttal(article)}
              className="eleven-pill-outline text-[13px] h-9 px-3 font-bold w-full justify-center whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 mr-1 shrink-0" />
              <span>Draft Rebuttal</span>
            </button>

            <button
              onClick={handleDispatch}
              disabled={dispatched}
              className={`eleven-pill-btn text-[13px] h-9 px-3 font-bold w-full justify-center whitespace-nowrap ${
                dispatched ? "bg-[#EFEFEF] text-[#000000] border border-black/[0.1] cursor-default" : ""
              }`}
            >
              {dispatched ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#000000] mr-1 shrink-0" />
                  <span>Notified</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5 mr-1 shrink-0" />
                  <span>Notify Liaison</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
