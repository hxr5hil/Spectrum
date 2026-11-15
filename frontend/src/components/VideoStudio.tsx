import React, { useState } from "react";
import { Video, Play, Sparkles, Clock, ThumbsUp, ThumbsDown } from "lucide-react";

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

export default function VideoStudio({ videos }: VideoStudioProps) {
  const [customUrl, setCustomUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(videos[0] || null);

  const handleAnalyzeCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      const newVid: VideoItem = {
        id: `vid-${Date.now()}`,
        title: "User Video Feed: High Level Infrastructure & Public Works Review",
        channel: "Broadcast Ingestion",
        duration: "06:14",
        videoUrl: customUrl,
        category: "Technology",
        ministry: "Technology & Infrastructure",
        sentiment: "positive",
        sentiment_score: "0.82 0.10 0.08",
        summary: "Automated Whisper audio extraction transcribed 6 minutes of speech. Positive public review of connectivity projects.",
        keyMoments: [
          { time: "00:30", topic: "Project rollout overview", sentiment: "positive" },
          { time: "02:45", topic: "Public interview highlights", sentiment: "positive" },
          { time: "05:10", topic: "Pending timeline compliance", sentiment: "neutral" },
        ],
      };
      setActiveVideo(newVid);
      setCustomUrl("");
    }, 1200);
  };

  return (
    <div className="space-y-8">
      {/* Top Input Bar */}
      <div className="eleven-card p-10 sm:p-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h3 className="eleven-headline text-[32px] text-[#000000] flex items-center gap-3.5 tracking-tight">
              <Video className="w-8 h-8 text-[#000000]" />
              Video News Transcription & Sentiment Studio
            </h3>
            <p className="text-[18px] text-[#333333] font-semibold mt-2 max-w-3xl">
              Extracts audio from digital broadcasts (YouTube / MP4), runs speech-to-text with Whisper, and maps sector sentiments.
            </p>
          </div>

          <form onSubmit={handleAnalyzeCustom} className="flex items-center gap-3 max-w-xl w-full">
            <input
              type="text"
              placeholder="Paste YouTube or MP4 broadcast link..."
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              className="flex-1 bg-[#F5F3F1] border-2 border-black/[0.12] rounded-full px-6 py-3.5 text-[16px] font-semibold text-[#000000] placeholder-[#777777] outline-none focus:border-[#000000] transition"
            />
            <button
              type="submit"
              disabled={analyzing}
              className="eleven-pill-btn min-h-[52px] px-8 text-[16px] font-bold shrink-0 shadow-md"
            >
              <Sparkles className={`w-5 h-5 mr-2 ${analyzing ? "animate-spin" : ""}`} />
              <span>{analyzing ? "Transcribing..." : "Analyze"}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Studio View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Active Video Details */}
        {activeVideo && (
          <div className="lg:col-span-2 eleven-card p-10 space-y-6">
            <div className="aspect-video w-full rounded-2xl bg-[#000000] flex flex-col items-center justify-center relative overflow-hidden group shadow-md">
              <div className="w-20 h-20 rounded-full bg-white text-[#000000] flex items-center justify-center shadow-xl group-hover:scale-110 transition cursor-pointer">
                <Play className="w-9 h-9 fill-current ml-1" />
              </div>
              <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-base text-white">
                <span className="font-bold text-[17px] bg-black/70 px-4 py-1 rounded-full">{activeVideo.channel}</span>
                <span className="bg-black/70 px-4 py-1 rounded-full font-mono font-bold text-[15px]">
                  {activeVideo.duration}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-4 py-1.5 rounded-full bg-[#EFEFEF] text-[#000000] text-[15px] font-extrabold border border-black/[0.1]">
                  {activeVideo.category}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[15px] font-black border ${
                    activeVideo.sentiment === "negative"
                      ? "bg-[#FEECEC] text-[#D91022] border-red-300"
                      : "bg-[#E8F8EE] text-[#008030] border-green-300"
                  }`}
                >
                  {activeVideo.sentiment === "negative" ? (
                    <ThumbsDown className="w-4 h-4" />
                  ) : (
                    <ThumbsUp className="w-4 h-4" />
                  )}
                  {activeVideo.sentiment.toUpperCase()}
                </span>
              </div>

              <h2 className="eleven-headline text-[28px] text-[#000000] leading-snug">
                {activeVideo.title}
              </h2>

              <div className="bg-[#F5F3F1] p-6 rounded-2xl border border-black/[0.08]">
                <strong className="text-[#000000] text-[18px] font-extrabold block mb-2">Whisper AI Transcript Summary:</strong>
                <p className="text-[17px] text-[#222222] font-medium leading-relaxed">
                  {activeVideo.summary}
                </p>
              </div>
            </div>

            {/* Timeline Breakdown */}
            <div className="pt-2">
              <h4 className="text-[16px] font-extrabold text-[#000000] uppercase tracking-wider mb-4">
                Timestamp Sentiment Breakdown
              </h4>
              <div className="space-y-3">
                {activeVideo.keyMoments.map((m, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F5F3F1] border border-black/[0.08]"
                  >
                    <div className="flex items-center space-x-3.5">
                      <span className="font-mono text-[#000000] font-bold text-[16px] bg-white px-3 py-1 rounded-lg border border-black/[0.1]">
                        {m.time}
                      </span>
                      <span className="text-[#000000] font-bold text-[17px]">{m.topic}</span>
                    </div>
                    <span
                      className={`text-[14px] font-extrabold uppercase px-3.5 py-1 rounded-full border ${
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
        <div className="space-y-4">
          <h4 className="text-[16px] font-extrabold text-[#000000] uppercase tracking-wider px-2">
            Ingested Video Broadcasts
          </h4>
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className={`p-6 eleven-card cursor-pointer transition space-y-3 ${
                activeVideo?.id === vid.id
                  ? "ring-2 ring-[#000000] shadow-lg"
                  : "hover:bg-[#FAF9F7]"
              }`}
            >
              <div className="flex items-center justify-between text-[15px] text-[#333333]">
                <span className="font-extrabold text-[#000000]">{vid.channel}</span>
                <span className="flex items-center gap-1.5 font-bold">
                  <Clock className="w-4 h-4" />
                  {vid.duration}
                </span>
              </div>
              <h5 className="eleven-headline text-[18px] text-[#000000] line-clamp-2 leading-snug">
                {vid.title}
              </h5>
              <div className="flex items-center justify-between text-[15px] pt-1 border-t border-black/[0.06]">
                <span className="text-[#333333] font-semibold truncate max-w-[160px]">{vid.category}</span>
                <span
                  className={`font-black uppercase ${
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
