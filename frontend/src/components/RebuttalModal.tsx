import React, { useState, useEffect } from "react";
import { X, Copy, Check, Send, Sparkles, Tag } from "lucide-react";
import { ArticleItem } from "./ArticleCard";
import { TRANSLATIONS, SupportedLanguage, localizeArticle } from "../utils/translations";

interface RebuttalModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  apiUrl: string;
  selectedLanguage?: string;
}

export default function RebuttalModal({
  article,
  onClose,
  apiUrl,
  selectedLanguage = "English",
}: RebuttalModalProps) {
  const [rebuttalText, setRebuttalText] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  const lang = (selectedLanguage as SupportedLanguage) || "English";
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;
  const localized = article ? localizeArticle(article, lang) : null;

  useEffect(() => {
    if (!article) return;
    setLoading(true);
    setCopied(false);
    setDispatched(false);

    fetch(`${apiUrl}/api/rebuttal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: article.Title || article.Heading,
        ministry: article.Ministry || article.Category,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRebuttalText(data.rebuttal_draft || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error generating rebuttal:", err);
        setRebuttalText(
          `OFFICIAL MEDIA CLARIFICATION - ${(article.Ministry || article.Category).toUpperCase()}\n\n` +
          `Subject: Clarification on media reports regarding "${article.Title || article.Heading}"\n\n` +
          `The organization has taken cognizance of recent coverage. Necessary corrective measures and formal verifications are actively underway.`
        );
        setLoading(false);
      });
  }, [article, apiUrl]);

  if (!article || !localized) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(rebuttalText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDispatch = () => {
    setDispatched(true);
    fetch(`${apiUrl}/api/alerts/dispatch`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        article_id: article.id,
        recipient: article.NodalOfficer,
        reason: "Official Media Rebuttal Statement Dispatched",
      }),
    }).catch(console.error);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
      <div className="bg-[#FFFFFF] border-2 border-black/[0.14] w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-black/[0.1] flex items-center justify-between bg-[#FAF9F7]">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EFEFEF] flex items-center justify-center text-[#000000] border border-black/[0.1]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="eleven-headline text-[24px] text-[#000000]">
                {t.rebuttalTitle}
              </h3>
              <p className="text-[15px] text-[#333333] font-bold flex items-center gap-1.5 mt-0.5">
                <Tag className="w-4 h-4 text-[#000000]" />
                {localized.Category}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#EFEFEF] hover:bg-[#E5E2DC] flex items-center justify-center text-[#000000] transition border border-black/[0.1]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Target Headline */}
        <div className="px-8 py-4 bg-[#F5F3F1] border-b border-black/[0.08] text-[16px]">
          <span className="text-[#444444] font-semibold">{t.rebuttalSubtitle}: </span>
          <span className="font-extrabold text-[#000000]">{localized.Title || localized.Heading}</span>
        </div>

        {/* Body / Textarea */}
        <div className="p-8 flex-1 overflow-y-auto">
          {loading ? (
            <div className="py-20 text-center space-y-3">
              <Sparkles className="w-10 h-10 text-[#000000] animate-spin mx-auto" />
              <p className="text-[18px] text-[#000000] font-bold">Synthesizing factual rebuttal statement...</p>
            </div>
          ) : (
            <textarea
              rows={11}
              value={rebuttalText}
              onChange={(e) => setRebuttalText(e.target.value)}
              className="w-full bg-[#FAF9F7] border-2 border-black/[0.12] rounded-2xl p-6 text-[17px] font-medium text-[#000000] outline-none focus:border-[#000000] transition resize-none leading-relaxed font-mono"
            />
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-5 border-t border-black/[0.1] bg-[#FAF9F7] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[15px] text-[#444444] font-medium">
            Liaison: <strong className="text-[#000000] font-bold">{article.NodalOfficer}</strong>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleCopy}
              className="eleven-pill-outline min-h-[48px] px-6 text-[15px] font-bold"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2 text-[#008030]" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  <span>{t.copyStatement}</span>
                </>
              )}
            </button>

            <button
              onClick={handleDispatch}
              disabled={dispatched}
              className={`eleven-pill-btn min-h-[48px] px-7 text-[15px] font-bold ${
                dispatched ? "bg-[#EFEFEF] text-[#000000] border border-black/[0.1] cursor-default" : ""
              }`}
            >
              {dispatched ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  <span>{t.notified}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>{t.dispatchPressDesk}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
