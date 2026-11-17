import React, { useState, useEffect } from "react";
import { 
  ShieldAlert, 
  BarChart3, 
  Newspaper, 
  Video, 
  Sparkles, 
  RefreshCw, 
  Languages
} from "lucide-react";
import SpectrumLogo from "./SpectrumLogo";
import { TRANSLATIONS, SupportedLanguage } from "../utils/translations";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRefresh: () => void;
  refreshing: boolean;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  criticalCount: number;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  onRefresh,
  refreshing,
  selectedLanguage,
  setSelectedLanguage,
  criticalCount,
}: NavbarProps) {
  const [countdown, setCountdown] = useState(60);
  const lang = (selectedLanguage as SupportedLanguage) || "English";
  const t = TRANSLATIONS[lang] || TRANSLATIONS.English;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: "feed", label: t.tabNewsFeed, icon: Newspaper },
    { id: "analytics", label: t.tabAnalytics, icon: BarChart3 },
    { 
      id: "alerts", 
      label: t.tabAlertsHub, 
      icon: ShieldAlert,
      badge: criticalCount > 0 ? criticalCount : undefined 
    },
    { id: "video", label: t.tabVideoStudio, icon: Video },
    { id: "tester", label: t.tabAiPlayground, icon: Sparkles },
  ];

  const languages = [
    { label: "English", value: "English" },
    { label: "हिन्दी (Hindi)", value: "Hindi" },
    { label: "ਪੰਜਾਬੀ (Punjabi)", value: "Punjabi" },
    { label: "বাংলা (Bengali)", value: "Bengali" },
    { label: "தமிழ் (Tamil)", value: "Tamil" },
    { label: "తెలుగు (Telugu)", value: "Telugu" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3F1]/98 backdrop-blur-xl border-b border-black/[0.1] transition-all">
      {/* Top Status Bar */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-2 flex items-center justify-between text-[13px] text-[#222222] border-b border-black/[0.06]">
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#000000]"></span>
          <span className="font-extrabold text-[#000000]">
            {t.topBanner}
          </span>
          <span className="hidden md:inline-block text-[#888888]">•</span>
          <span className="hidden md:inline-block text-[#333333] font-semibold">
            {t.liveStream}
          </span>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex items-center space-x-1.5 text-[#222222] font-semibold text-[13px]">
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-[#000000]" : "text-[#444444]"}`} />
            <span>{t.syncIn} <strong className="text-[#000000] font-bold">{countdown}s</strong></span>
          </div>

          <button
            onClick={onRefresh}
            disabled={refreshing}
            className="px-3.5 py-1 rounded-full bg-white hover:bg-[#EFEFEF] text-[#000000] transition text-[13px] font-bold border border-black/[0.12] shadow-sm"
          >
            <span>{refreshing ? t.syncing : t.sync}</span>
          </button>

          <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-black/[0.12] shadow-sm">
            <Languages className="w-3.5 h-3.5 text-[#000000]" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Select language"
              className="bg-transparent text-[#000000] text-[13px] font-bold outline-none cursor-pointer"
            >
              {languages.map((l) => (
                <option key={l.value} value={l.value} className="bg-white text-[#000000] font-semibold">
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Header & Tab Navigation */}
      <div className="w-full px-6 sm:px-8 lg:px-12 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center space-x-3.5 shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-white border border-black/[0.12] flex items-center justify-center shadow-sm">
            <SpectrumLogo size={26} />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-[26px] font-black text-[#000000] tracking-tight">
                Spectrum
              </span>
              <span className="text-[12px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#E5E2DC] text-[#000000]">
                v2.4
              </span>
            </div>
            <p className="text-[14px] text-[#333333] font-semibold">
              {t.brandSubtitle}
            </p>
          </div>
        </div>

        {/* Navigation Pills */}
        <nav className="flex items-center space-x-1.5 p-1.5 rounded-full bg-[#E8E5DF] border border-black/[0.08] shadow-sm overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 sm:px-5 py-2 rounded-full text-[14px] sm:text-[15px] transition-all whitespace-nowrap font-bold shrink-0 ${
                  isActive
                    ? "bg-[#000000] text-white shadow-sm"
                    : "text-[#222222] hover:text-[#000000] hover:bg-white/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#000000]"}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="ml-1 px-2 py-0.5 rounded-full text-[11px] bg-[#D91022] text-white font-black">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
