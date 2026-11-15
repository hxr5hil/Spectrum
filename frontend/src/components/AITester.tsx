import React, { useState } from "react";
import { Sparkles, Brain, AlertTriangle, Layers } from "lucide-react";

interface AITesterProps {
  apiUrl: string;
}

export default function AITester({ apiUrl }: AITesterProps) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const sampleArticles = [
    {
      label: "Sample 1: Rail Logistics (Adverse)",
      title: "Express Freight Train Derails Near Nagpur; Signal Glitch Blamed for Delay",
      body: "An express freight transit suffered a minor derailment early this morning. Industry trade associations have strongly criticized maintenance lapses and persistent signaling failures across central divisions.",
    },
    {
      label: "Sample 2: Microchip Mega Hub (Positive)",
      title: "Enterprise Board Approves $15B Mega Semiconductor Fabrication Hub",
      body: "Consortium leadership cleared incentives for advanced semiconductor and microchip plants, promising over 40,000 skilled engineering jobs and driving indigenous manufacturing growth.",
    },
    {
      label: "Sample 3: Constitutional Hearing (Legal/Neutral)",
      title: "Supreme Court Reserves Verdict on Digital Data Privacy Petitions",
      body: "A constitutional bench heard arguments on cross-border data transfers and scheduled the final pronouncement for next Tuesday following detailed submissions.",
    },
  ];

  const handleTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !body.trim()) return;

    setLoading(true);
    fetch(`${apiUrl}/api/analyze`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Inference error:", err);
        setLoading(false);
      });
  };

  const loadSample = (sample: { title: string; body: string }) => {
    setTitle(sample.title);
    setBody(sample.body);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Top Description Card */}
      <div className="eleven-card p-10 sm:p-12">
        <div className="flex items-start space-x-5">
          <div className="w-14 h-14 rounded-2xl bg-[#EFEFEF] flex items-center justify-center text-[#000000] shrink-0 border border-black/[0.1]">
            <Brain className="w-7 h-7" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="eleven-headline text-[32px] text-[#000000] tracking-tight">
                AI Inference Playground
              </h2>
              <span className="px-4 py-1 rounded-full text-[15px] bg-[#EFEFEF] text-[#000000] font-bold border border-black/[0.1]">
                Real-Time NLP Model
              </span>
            </div>
            <p className="text-[18px] text-[#333333] font-semibold mt-2 max-w-4xl">
              Input any custom article headline or text to evaluate real-time domain classification, sentiment confidence, severity assessment, and mitigation workflows.
            </p>
          </div>
        </div>

        {/* Quick Samples */}
        <div className="mt-8 pt-6 border-t border-black/[0.1] flex flex-wrap items-center gap-3 text-[15px]">
          <span className="text-[#000000] font-extrabold mr-1">Quick test samples:</span>
          {sampleArticles.map((s, idx) => (
            <button
              key={idx}
              onClick={() => loadSample(s)}
              className="eleven-pill-outline min-h-[44px] px-5 text-[15px] font-bold"
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Input Form */}
        <form
          onSubmit={handleTest}
          className="eleven-card p-10 space-y-6"
        >
          <div>
            <label className="block text-[18px] font-extrabold text-[#000000] mb-2.5">
              News Headline / Title
            </label>
            <input
              type="text"
              placeholder="e.g. Consortium launches next-generation sustainable mobility initiative..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#F5F3F1] border-2 border-black/[0.12] rounded-2xl px-6 py-4 text-[17px] font-medium text-[#000000] placeholder-[#777777] outline-none focus:border-[#000000] transition"
            />
          </div>

          <div>
            <label className="block text-[18px] font-extrabold text-[#000000] mb-2.5">
              Article Excerpt / Body Content
            </label>
            <textarea
              rows={7}
              placeholder="Paste news body content here to assess sentiment and domain classification..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full bg-[#F5F3F1] border-2 border-black/[0.12] rounded-2xl p-6 text-[17px] font-medium text-[#000000] placeholder-[#777777] outline-none focus:border-[#000000] transition resize-none leading-relaxed"
            />
          </div>

          <button
            type="submit"
            disabled={loading || (!title && !body)}
            className="w-full eleven-pill-btn min-h-[56px] text-[18px] font-bold shadow-md"
          >
            <Sparkles className={`w-5 h-5 mr-2 ${loading ? "animate-spin" : ""}`} />
            <span>{loading ? "Evaluating NLP Models..." : "Run AI Inference"}</span>
          </button>
        </form>

        {/* Right: AI Output Panel */}
        <div className="eleven-card p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-[16px] font-extrabold text-[#000000] uppercase tracking-wider mb-6">
              Real-time Inference Output
            </h3>

            {!result && !loading && (
              <div className="py-28 text-center text-[#444444] text-[18px] font-semibold">
                Enter an article on the left or select a sample to see AI classifications.
              </div>
            )}

            {loading && (
              <div className="py-28 text-center space-y-4">
                <Brain className="w-12 h-12 text-[#000000] animate-pulse mx-auto" />
                <p className="text-[18px] text-[#000000] font-bold">Classifying domain and computing sentiment polarity...</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6">
                {/* Predicted Domain */}
                <div className="p-6 rounded-2xl bg-[#F5F3F1] border border-black/[0.1]">
                  <span className="text-[#333333] text-[15px] font-bold block mb-1">Assigned Sector / Domain</span>
                  <div className="flex items-center justify-between">
                    <span className="eleven-headline text-[26px] text-[#000000] flex items-center gap-2.5">
                      <Layers className="w-6 h-6 text-[#000000]" />
                      {result.predicted_category || result.predicted_ministry}
                    </span>
                    <span className="px-3.5 py-1 rounded-md bg-white text-[#000000] border border-black/[0.12] text-[14px] font-mono font-bold shadow-sm">
                      {result.ministry_code}
                    </span>
                  </div>
                  <p className="text-[16px] text-[#333333] mt-2 font-medium">
                    Assigned Liaison: <span className="text-[#000000] font-bold">{result.nodal_officer}</span>
                  </p>
                </div>

                {/* Sentiment & Severity Meter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-[#F5F3F1] border border-black/[0.1]">
                    <span className="text-[#333333] text-[15px] font-bold block mb-1">Sentiment Polarity</span>
                    <span
                      className={`eleven-headline text-[24px] uppercase font-black ${
                        result.sentiment === "negative"
                          ? "text-[#D91022]"
                          : result.sentiment === "neutral"
                          ? "text-[#333333]"
                          : "text-[#008030]"
                      }`}
                    >
                      {result.sentiment}
                    </span>
                    <div className="flex items-center gap-3 mt-2 text-[15px] text-[#222222] font-bold">
                      <span className="text-[#008030]">Pos: {Math.round(result.scores.positive * 100)}%</span>
                      <span className="text-[#D91022]">Neg: {Math.round(result.scores.negative * 100)}%</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F5F3F1] border border-black/[0.1]">
                    <span className="text-[#333333] text-[15px] font-bold block mb-1">Incident Urgency</span>
                    <span
                      className={`eleven-headline text-[24px] uppercase font-black flex items-center gap-1.5 ${
                        result.severity === "Critical" ? "text-[#D91022]" : "text-[#000000]"
                      }`}
                    >
                      {result.severity === "Critical" && <AlertTriangle className="w-5 h-5" />}
                      {result.severity}
                    </span>
                    <p className="text-[15px] text-[#333333] mt-2 font-semibold">Action: {result.recommended_action}</p>
                  </div>
                </div>

                {/* AI Summary */}
                <div className="p-6 rounded-2xl bg-[#F5F3F1] border border-black/[0.1]">
                  <span className="text-[#000000] text-[17px] block mb-2 font-black">
                    AI Strategic Summary
                  </span>
                  <p className="text-[#222222] text-[17px] font-medium leading-relaxed">{result.ai_summary}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
