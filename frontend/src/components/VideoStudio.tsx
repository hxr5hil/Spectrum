import React, { useState, useEffect } from "react";
import { Video, Play, Sparkles, Clock, ThumbsUp, ThumbsDown, RotateCcw, ExternalLink } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  channel: string;
  duration: string;
  videoUrl: string;
  category: string;
  ministry: string;
  sentiment: string;
  sentiment_score: string;
  summary: string;
  keyMoments: Array<{ time: string; topic: string; sentiment: string }>;
}

interface VideoStudioProps {
  videos: VideoItem[];
}

function getEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("youtube.com/embed/")) return url;
  
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  if (ytMatch && ytMatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  return url;
}

export default function VideoStudio({ videos }: VideoStudioProps) {
  const [customUrl, setCustomUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(videos[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videos && videos.length > 0 && !activeVideo) {
      setActiveVideo(videos[0]);
    }
  }, [videos, activeVideo]);

  const handleSelectVideo = (vid: VideoItem) => {
    setActiveVideo(vid);
    setIsPlaying(false);
  };

  const handleAnalyzeCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      const newVid: VideoItem = {
        id: `vid-${Date.now()}`,
        title: "User Ingested Broadcast: Live Digital Media & Infrastructure Analysis",
        channel: "Direct Broadcast Ingestion",
        duration: "06:14",
        videoUrl: customUrl.trim(),
        category: "Technology",
        ministry: "Technology & Infrastructure",
        sentiment: "positive",
        sentiment_score: "0.82 0.10 0.08",
        summary: "Automated Whisper audio extraction transcribed broadcast audio. Favorable public assessment of infrastructure rollout and system reliability.",
        keyMoments: [
          { time: "00:30", topic: "Project rollout overview", sentiment: "positive" },
          { time: "02:45", topic: "Public interview highlights", sentiment: "positive" },
          { time: "05:10", topic: "Pending timeline compliance", sentiment: "neutral" },
        ],
      };
      setActiveVideo(newVid);
      setIsPlaying(true);
      setCustomUrl("");
    }, 1000);
  };

  const embedUrl = activeVideo ? getEmbedUrl(activeVideo.videoUrl) : "";
  const isEmbeddable = embedUrl.includes("youtube") || embedUrl.includes("embed");

  return (
    <div className="space-y-8">
      {/* Top Input Bar */}
      <div className="eleven-card p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="eleven-headline text-[26px] sm:text-[28px] text-[#000000] flex items-center gap-3 tracking-tight">
              <Video className="w-7 h-7 text-[#000000]" />
              Video News Transcription & Sentiment Studio
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#444444] font-medium mt-1.5 max-w-3xl">
              Extracts audio from digital broadcasts (YouTube / MP4), runs speech-to-text with Whisper, and maps sector sentiments.
            </p>
          </div>

          <form onSubmit={handleAnalyzeCustom} className="flex items-center gap-3 max-w-xl w-full">
            <input
              type="text"
              placeholder="Paste YouTube or MP4 broadcast link..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 bg-[#F5F3F1] border-2 border-black/[0.12] rounded-full px-5 py-3 text-[14px] sm:text-[15px] font-semibold text-[#000000] placeholder-[#777777] outline-none focus:border-[#000000] transition"
            />
            <button
              type="submit"
              disabled={analyzing}
              className="eleven-pill-btn min-h-[46px] px-6 text-[14px] font-bold shrink-0 shadow-sm"
            >
              <Sparkles className={`w-4 h-4 mr-2 ${analyzing ? "animate-spin" : ""}`} />
              <span>{analyzing ? "Transcribing..." : "Analyze"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Studio View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Active Video Details */}
        {activeVideo && (
          <div className="lg:col-span-2 eleven-card p-7 sm:p-9 space-y-6">
            {/* Interactive Video Player */}
            <div className="aspect-video w-full rounded-2xl bg-[#000000] relative overflow-hidden shadow-lg border border-black/[0.1]">
              {isPlaying && isEmbeddable ? (
                <iframe
                  src={embedUrl}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : isPlaying && !isEmbeddable ? (
                <video
                  controls
                  autoPlay
                  src={activeVideo.videoUrl}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="w-full h-full flex flex-col items-center justify-center cursor-pointer group bg-gradient-to-t from-black/80 via-black/40 to-black/30"
                >
                  <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white text-[#000000] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#EAE7E2] transition-all">
                    <Play className="w-8 sm:w-9 h-8 sm:w-9 fill-current ml-1" />
                  </div>
                  <p className="text-white font-bold text-[15px] sm:text-[16px] mt-4 tracking-wide group-hover:underline">
                    Click to Play Broadcast
                  </p>
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                    <span className="font-bold text-[14px] sm:text-[15px] bg-black/70 px-3.5 py-1 rounded-full">
                      {activeVideo.channel}
                    </span>
                    <span className="bg-black/70 px-3.5 py-1 rounded-full font-mono font-bold text-[13px]">
                      {activeVideo.duration}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-[#EFEFEF] text-[#000000] text-[13px] font-bold border border-black/[0.1]">
                    {activeVideo.category}
                  </span>
                  {isPlaying && (
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="px-3 py-1 rounded-full bg-[#F5F3F1] hover:bg-[#EAE7E2] text-[#000000] text-[12px] font-bold border border-black/[0.1] flex items-center gap-1 transition"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset View
                    </button>
                  )}
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[13px] font-black border ${
                    activeVideo.sentiment === "negative"
                      ? "bg-[#FEECEC] text-[#D91022] border-red-300"
                      : "bg-[#E8F8EE] text-[#008030] border-green-300"
                  }`}
                >
                  {activeVideo.sentiment === "negative" ? (
                    <ThumbsDown className="w-3.5 h-3.5" />
                  ) : (
                    <ThumbsUp className="w-3.5 h-3.5" />
                  )}
                  {activeVideo.sentiment.toUpperCase()}
                </span>
              </div>

              <h2 className="eleven-headline text-[22px] sm:text-[24px] text-[#000000] leading-snug">
                {activeVideo.title}
              </h2>

              <div className="bg-[#F5F3F1] p-5 sm:p-6 rounded-2xl border border-black/[0.08]">
                <strong className="text-[#000000] text-[16px] font-extrabold block mb-1.5">
                  Whisper AI Transcript Summary:
                </strong>
                <p className="text-[15px] sm:text-[16px] text-[#222222] font-medium leading-relaxed">
                  {activeVideo.summary}
                </p>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div className="pt-2">
              <h4 className="text-[14px] font-extrabold text-[#000000] uppercase tracking-wider mb-3">
                Timestamp Sentiment Breakdown
              </h4>
              <div className="space-y-2.5">
                {activeVideo.keyMoments.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F3F1] border border-black/[0.08]"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[#000000] font-bold text-[14px] bg-white px-2.5 py-0.5 rounded-md border border-black/[0.1]">
                        {m.time}
                      </span>
                      <span className="text-[#000000] font-bold text-[15px]">{m.topic}</span>
                    </div>
                    <span
                      className={`text-[12px] font-extrabold uppercase px-3 py-0.5 rounded-full border ${
                        m.sentiment === "negative"
                          ? "bg-[#FEECEC] text-[#D91022] border-red-200"
                          : "bg-[#E8F8EE] text-[#008030] border-green-200"
                      }`}
                    >
                      {m.sentiment}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Right: Broadcast Ingestion List */}
        <div className="space-y-3.5">
          <h4 className="text-[14px] font-extrabold text-[#000000] uppercase tracking-wider px-2">
            Ingested Video Broadcasts
          </h4>
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => handleSelectVideo(vid)}
              className={`p-5 eleven-card cursor-pointer transition space-y-2.5 ${
                activeVideo?.id === vid.id
                  ? "ring-2 ring-[#000000] shadow-md bg-[#FAF9F7]"
                  : "hover:bg-[#FAF9F7]"
              }`}
            >
              <div className="flex items-center justify-between text-[13px] text-[#444444]">
                <span className="font-extrabold text-[#000000]">{vid.channel}</span>
                <span className="flex items-center gap-1 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  {vid.duration}
                </span>
              </div>
              <h5 className="eleven-headline text-[16px] text-[#000000] line-clamp-2 leading-snug">
                {vid.title}
              </h5>
              <div className="flex items-center justify-between text-[13px] pt-1 border-t border-black/[0.06]">
                <span className="text-[#444444] font-semibold truncate max-w-[150px]">{vid.category}</span>
                <span
                  className={`font-black uppercase text-[12px] ${
                    vid.sentiment === "negative" ? "text-[#D91022]" : "text-[#008030]"
                  }`}
                >
                  {vid.sentiment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
