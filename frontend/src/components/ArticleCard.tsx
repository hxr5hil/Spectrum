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
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[14px] font-extrabold bg-[#FEECEC] text-[#D91022]">
          <ThumbsDown className="w-4 h-4" />
          Negative {Math.round(negScore * 100)}%
        </span>
      );
    }
    if (article.Sentiment === "neutral") {
      return (
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[14px] font-extrabold bg-[#EFEFEF] text-[#222222]">
          <Minus className="w-4 h-4" />
          Neutral {Math.round(neuScore * 100)}%
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[14px] font-extrabold bg-[#E8F8EE] text-[#008030]">
        <ThumbsUp className="w-4 h-4" />
        Positive {Math.round(posScore * 100)}%
      </span>
    );
  };

  return (
    <div
      className={`eleven-card p-9 flex flex-col justify-between min-h-[440px] ${
        isCritical ? "border-2 border-[#D91022] shadow-lg" : "border border-black/[0.12]"
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center space-x-2.5">
            <span className="px-4 py-1.5 rounded-full bg-[#F0EEEB] text-[#000000] text-[14px] font-bold border border-black/[0.1]">
              {article.Source || "Digital Media"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F2FD] text-[#0A59D2] text-[14px] font-bold">
              <Tag className="w-4 h-4" />
              {article.Category}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {isCritical && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-extrabold bg-[#D91022] text-white">
                <AlertTriangle className="w-4 h-4" />
                Adverse Alert
              </span>
            )}
            {getSentimentPill()}
          </div>
        </div>

        {/* Title - Large, Bold (Visible from far away) */}
        <h3 className="text-[24px] font-extrabold text-[#000000] mb-3 leading-snug hover:text-[#0A59D2] transition cursor-pointer">
          <a href={article.URL} target="_blank" rel="noopener noreferrer">
            {article.Title || article.Heading}
          </a>
        </h3>

        {/* Domain Topic */}
        <p className="text-[16px] font-bold text-[#222222] mb-4">
          Sector Domain: <span className="text-[#000000] font-extrabold underline decoration-black/25 underline-offset-4">{article.Ministry || article.Category}</span>
        </p>

        {/* Excerpt - 17px Dark Readable Text */}
        <p className="text-[17px] text-[#111111] leading-relaxed mb-6 font-normal">
          {showFull ? (article.FullBody || article.Body) : article.Body}
          {article.Body && article.Body.length > 200 && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="ml-1 text-[#000000] hover:underline text-[15px] font-extrabold inline-block"
            >
              {showFull ? "Show less" : "Read more"}
            </button>
          )}
        </p>
      </div>

      {/* Card Footer */}
      <div className="pt-6 border-t border-black/[0.1] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[15px]">
        <div className="flex items-center space-x-2.5 text-[#333333] font-bold">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#000000]" />
            {article.PublishedAt || "Today"}
          </span>
          <span>•</span>
          <span>{article.ReadTime || "2 min"}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2.5">
          {isCritical && (
            <button
              onClick={() => onOpenRebuttal(article)}
              className="eleven-pill-outline text-[14px] h-11 px-5 font-bold"
            >
              <FileText className="w-4 h-4 mr-1.5" />
              <span>Draft Rebuttal</span>
            </button>
          )}

          {isCritical && (
            <button
              onClick={handleDispatch}
              disabled={dispatched}
              className={`eleven-pill-btn text-[14px] h-11 px-5 font-bold ${
                dispatched ? "bg-[#EFEFEF] text-[#000000] cursor-default" : ""
              }`}
            >
              {dispatched ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#000000] mr-1.5" />
                  <span>Notified</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-1.5" />
                  <span>Notify Liaison</span>
                </>
              )}
            </button>
          )}

          <a
            href={article.URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eleven-pill-outline text-[14px] h-11 px-5 text-[#000000] font-bold"
          >
            <span>Source</span>
            <ExternalLink className="w-4 h-4 ml-1.5 text-[#000000]" />
          </a>
        </div>
      </div>
    </div>
  );
}
