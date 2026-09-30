"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Copy, Check, Flame, CreditCard, BarChart3, Layers, Search, Image as ImageIcon } from "lucide-react";

const TEMPLATES = [
  {
    title: "Vintage Rubber Stamp Travel Poster",
    tag: "Poster & Print",
    prompt: "Rubber Stamp Travel Field Notes Poster — Natural Realism Version, London bus, Big Ben, vintage textured craft paper, lithograph print aesthetic --ar 3:4 --v 6.1",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cinematic Cherry Blossom Portrait",
    tag: "Portrait Photo",
    prompt: "A beautiful young woman standing under blooming cherry blossom trees at golden hour, shallow depth of field, 35mm film photography, soft cinematic lens flare --ar 3:4 --style raw",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cyberpunk Holographic Cathedral",
    tag: "Concept Art",
    prompt: "A lone monk reading an ancient glowing holographic book inside a colossal gothic sci-fi cathedral, dark moody atmosphere, volumetric fog, Octane render 8k --ar 9:16",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Minimalist E-Commerce Product Studio",
    tag: "Commercial Product",
    prompt: "Clean luxury skincare bottle on travertine stone pedestal, natural sunlight shadows, organic dried botanicals, high-end editorial product photography --ar 1:1 --v 6.1",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [stats, setStats] = useState<{ totalVisits: number; generateClicks: number }>({ totalVisits: 0, generateClicks: 0 });

  useEffect(() => {
    try {
      const v = parseInt(localStorage.getItem("mj_visits") || "0", 10) + 1;
      localStorage.setItem("mj_visits", v.toString());
      const c = parseInt(localStorage.getItem("mj_clicks") || "0", 10);
      setStats({ totalVisits: v, generateClicks: c });
    } catch (e) {}
  }, []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);

    try {
      const newClicks = stats.generateClicks + 1;
      localStorage.setItem("mj_clicks", newClicks.toString());
      setStats((prev) => ({ ...prev, generateClicks: newClicks }));
    } catch (e) {}
  };

  return (
    <main className="w-full flex flex-col items-center px-4 py-10 md:py-16 max-w-6xl mx-auto">
      <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>PromptHub Pro</span>
        </div>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Unlock 14,700+ VIP Pack</span>
        </Link>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs md:text-sm mb-6 animate-pulse">
        <Flame className="w-4 h-4 text-orange-400" />
        <span>Curated 14,720+ Production-Ready Midjourney & Flux Prompts</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        Free <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Midjourney Prompt Templates</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-12">
        Stop guessing prompts. Copy battle-tested commercial prompts designed for high-conversion e-commerce, editorial portraits, and cinematic 3D renders.
      </p>

      {/* 模板展示网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        {TEMPLATES.map((t, idx) => (
          <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="h-56 overflow-hidden relative group">
              <img src={t.img} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-zinc-300 text-[11px] px-2.5 py-1 rounded-full">
                {t.tag}
              </span>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-white text-base mb-2">{t.title}</h3>
                <p className="text-xs text-zinc-400 bg-zinc-950 p-3 rounded-lg border border-zinc-800/80 font-mono line-clamp-3 mb-4">
                  {t.prompt}
                </p>
              </div>
              <button
                onClick={() => handleCopy(t.prompt, idx)}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-400" />
                    <span>Copy Full Prompt</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 text-center mb-12">
        <h3 className="text-xl font-bold text-white mb-2">Want the Entire 14,700+ Commercial Library?</h3>
        <p className="text-xs text-zinc-400 mb-6 max-w-lg mx-auto">
          Get lifetime access to our raw JSON database, negative prompt vault, and automatic prompt enhancer tool.
        </p>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all"
        >
          <span>Get Full Access ($9.90)</span>
          <Sparkles className="w-4 h-4" />
        </Link>
      </div>

      <footer className="mt-12 text-center text-xs text-zinc-600">
        © 2026 PromptHub Pro. Built for creators and designers worldwide.
      </footer>
    </main>
  );
}
