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

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: "feed", label: "News Feed", icon: Newspaper },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { 
      id: "alerts", 
      label: "Alerts Hub", 
      icon: ShieldAlert,
      badge: criticalCount > 0 ? criticalCount : undefined 
    },
    { id: "video", label: "Video Studio", icon: Video },
    { id: "tester", label: "AI Playground", icon: Sparkles },
  ];

  const languages = ["English", "Hindi", "Punjabi", "Bengali", "Tamil", "Telugu"];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3F1]/98 backdrop-blur-xl border-b border-black/[0.14] transition-all">
      {/* Top Status Bar */}
      <div className="w-full px-8 sm:px-10 lg:px-14 py-3 flex items-center justify-between text-[15px] text-[#222222] border-b border-black/[0.08]">
        <div className="flex items-center space-x-3.5">
          <span className="w-3 h-3 rounded-full bg-[#000000]"></span>
          <span className="font-extrabold text-[#000000]">
            Autonomous Media Monitoring & Natural Language Sentiment Platform
          </span>
          <span className="hidden sm:inline-block text-[#888888]">•</span>
          <span className="hidden sm:inline-block text-[#333333] font-bold">
            Live Cross-Media Stream
          </span>
        </div>

        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2 text-[#222222] font-semibold">
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-[#000000]" : "text-[#444444]"}`} />
            <span>Sync in <strong className="text-[#000000] font-black">{countdown}s</strong></span>
          </div>

          <button
            onClick={onRefresh}
            disabled={refreshing}
            className="px-5 py-2 rounded-full bg-white hover:bg-[#EFEFEF] text-[#000000] transition text-[15px] font-bold border border-black/[0.14] shadow-sm"
          >
            <span>{refreshing ? "Syncing..." : "Sync"}</span>
          </button>

          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-black/[0.14] shadow-sm">
            <Languages className="w-4 h-4 text-[#000000]" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              aria-label="Select language"
              className="bg-transparent text-[#000000] text-[15px] font-bold outline-none cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang} className="bg-white text-[#000000] font-semibold">
                  {lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Header & Tab Navigation */}
      <div className="w-full px-8 sm:px-10 lg:px-14 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.14] flex items-center justify-center shadow-sm">
            <SpectrumLogo size={32} />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[32px] font-black text-[#000000] tracking-tight">
                Spectrum
              </span>
              <span className="text-[13px] font-extrabold px-3 py-0.5 rounded-full bg-[#E5E2DC] text-[#000000]">
                v2.4
              </span>
            </div>
            <p className="text-[16px] text-[#333333] font-bold">
              Digital Media & Sentiment Intelligence Engine
            </p>
          </div>
        </div>

        {/* Navigation Pills */}
        <nav className="flex items-center space-x-2 p-2 rounded-full bg-[#E8E5DF] border border-black/[0.1] overflow-x-auto scrollbar-none shadow-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2.5 px-6 py-3 rounded-full text-[17px] transition-all whitespace-nowrap font-extrabold ${
                  isActive
                    ? "bg-[#000000] text-white shadow-md scale-[1.02]"
                    : "text-[#222222] hover:text-[#000000] hover:bg-white/70"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-[#000000]"}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span className="ml-1 px-2.5 py-0.5 rounded-full text-[13px] bg-[#D91022] text-white font-black">
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
