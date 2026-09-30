"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Copy, Check, Flame, CreditCard, Layers, Tag } from "lucide-react";
import { REAL_TEMPLATES } from "@/data/realTemplates";

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Banner 横幅", "角色与人物", "摄影与写实", "电商主图", "商品场景图"];

  const filtered = activeCategory === "All" 
    ? REAL_TEMPLATES 
    : REAL_TEMPLATES.filter(t => t.tag.includes(activeCategory));

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <main className="w-full flex flex-col items-center px-4 py-10 md:py-16 max-w-6xl mx-auto">
      {/* 顶部导航 */}
      <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2 font-bold text-white text-base md:text-lg">
          <Layers className="w-5 h-5 text-indigo-400" />
          <span>PromptHub Pro — 14,720 Vault</span>
        </div>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Unlock All 14,720+ Prompts</span>
        </Link>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs md:text-sm mb-6 animate-pulse">
        <Flame className="w-4 h-4 text-orange-400" />
        <span>Syncing Live from X AI 商业视觉工作站 14,720 模板库</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        Free <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Midjourney & Flux Prompts</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mb-8">
        Full production-grade Midjourney & Flux prompts extracted from the verified 14,720 template library. Click to copy full prompts with negative parameters, aspect ratios, and model version tags.
      </p>

      {/* 分类过滤器 */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeCategory === c
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 真实 14720 模板网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        {filtered.map((t, idx) => (
          <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div className="h-64 overflow-hidden relative group bg-zinc-950">
              <img 
                src={t.img} 
                alt={t.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                onError={(e) => {
                  (e.target as any).src = "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80";
                }}
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-black/80 backdrop-blur-md text-indigo-400 font-mono text-[11px] px-2.5 py-1 rounded-full font-bold">
                  {t.no}
                </span>
                <span className="bg-black/80 backdrop-blur-md text-zinc-300 text-[11px] px-2.5 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-white text-base mb-2">{t.title}</h3>
                <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 mb-4">
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed whitespace-pre-wrap">
                    {t.prompt}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleCopy(t.prompt, idx)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-750 hover:from-indigo-600 hover:to-purple-600 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied Full Prompt!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-400" />
                    <span>Copy Full Prompt ({t.no})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 转化卡片 */}
      <div className="w-full bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-purple-950/40 border border-indigo-500/30 rounded-2xl p-8 text-center mb-12 shadow-2xl">
        <h3 className="text-2xl font-extrabold text-white mb-2">Want All 14,720 Production Prompts?</h3>
        <p className="text-xs md:text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
          Get lifetime instant access to our raw JSON database, e-commerce suites, character consistency presets, and high-converting negative prompt dictionaries.
        </p>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all transform active:scale-95"
        >
          <span>Unlock Complete 14,720 Library ($9.90)</span>
          <Sparkles className="w-4 h-4" />
        </Link>
      </div>

      <footer className="mt-12 text-center text-xs text-zinc-600">
        © 2026 PromptHub Pro. Built on verified 14,720 prompt dataset.
      </footer>
    </main>
  );
}
