"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Copy, Check, Flame, CreditCard, Layers, Languages } from "lucide-react";
import { REAL_TEMPLATES } from "@/data/realTemplates";

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [activeCategory, setActiveCategory] = useState("All");

  const categoriesEn = ["All", "Banner Poster", "Character & People", "Cinematic & Realism", "E-Commerce Suite"];
  const categoriesZh = ["全部", "Banner 横幅", "角色与人物", "摄影与写实", "电商主图"];

  const handleCopy = (text: string, index: number) => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(text);
    }
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
        <div className="flex items-center gap-3">
          {/* 中英文切换开关 */}
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-all"
          >
            <Languages className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === "en" ? "中文 / EN" : "English / 中文"}</span>
          </button>
          
          <Link
            href="/pricing/"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "Unlock All 14,720+ Prompts" : "解锁全库 14,720+ 模板"}</span>
          </Link>
        </div>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs md:text-sm mb-6 animate-pulse">
        <Flame className="w-4 h-4 text-orange-400" />
        <span>{lang === "en" ? "Curated 14,720+ Production-Ready Midjourney & Flux Prompts" : "精选 14,720+ 个商业可落地 Midjourney / Flux 提示词"}</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold text-center tracking-tight text-white mb-6">
        {lang === "en" ? (
          <>Free <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Midjourney & Flux Prompts</span></>
        ) : (
          <>免费 <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500 bg-clip-text text-transparent">Midjourney / Flux 提示词模板库</span></>
        )}
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mb-8">
        {lang === "en" 
          ? "Full production-grade Midjourney & Flux prompts extracted from the verified 14,720 template library. Click to copy full prompts with negative parameters, aspect ratios, and model version tags."
          : "完整收录自已验证的 14,720 模板库。点击即可完整复制含负向提示词、画幅比例与模型版本的全量商业级 Prompt。"}
      </p>

      {/* 真实 14720 模板网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        {REAL_TEMPLATES.map((t, idx) => (
          <div key={idx} className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-zinc-700 transition-all">
            <div className="h-64 overflow-hidden relative group bg-zinc-950">
              <img 
                src={t.img} 
                alt={lang === "en" ? t.titleEn : t.titleZh} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-black/80 backdrop-blur-md text-indigo-400 font-mono text-[11px] px-2.5 py-1 rounded-full font-bold">
                  {t.no}
                </span>
                <span className="bg-black/80 backdrop-blur-md text-zinc-300 text-[11px] px-2.5 py-1 rounded-full">
                  {lang === "en" ? t.tagEn : t.tagZh}
                </span>
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-bold text-white text-base mb-2">
                  {lang === "en" ? t.titleEn : t.titleZh}
                </h3>
                <div className="bg-zinc-950 p-3.5 rounded-xl border border-zinc-800/80 mb-4 max-h-36 overflow-y-auto">
                  <p className="text-xs text-zinc-300 font-mono leading-relaxed whitespace-pre-wrap select-all">
                    {t.prompt}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(t.prompt, idx)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-750 hover:from-indigo-600 hover:to-purple-600 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-md active:scale-98"
              >
                {copiedIndex === idx ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">{lang === "en" ? "Copied to Clipboard!" : "已复制完整提示词！"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-indigo-400" />
                    <span>{lang === "en" ? `Copy Full Prompt (${t.no})` : `复制完整提示词 (${t.no})`}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 转化卡片 */}
      <div className="w-full bg-gradient-to-br from-indigo-950/40 via-zinc-900 to-purple-950/40 border border-indigo-500/30 rounded-2xl p-8 text-center mb-12 shadow-2xl">
        <h3 className="text-2xl font-extrabold text-white mb-2">
          {lang === "en" ? "Want All 14,720 Production Prompts?" : "需要全部 14,720 套全量商业提示词库？"}
        </h3>
        <p className="text-xs md:text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
          {lang === "en" 
            ? "Get lifetime instant access to our raw JSON database, e-commerce suites, character consistency presets, and high-converting negative prompt dictionaries."
            : "一次性永久解锁全量原始 JSON 数据底库、电商一键套图、多机位角色一致性参数与高转化反向词库。"}
        </p>
        <Link
          href="/pricing/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all transform active:scale-95"
        >
          <span>{lang === "en" ? "Unlock Complete 14,720 Library ($9.90)" : "解锁全量 14,720 词库 ($9.90)"}</span>
          <Sparkles className="w-4 h-4" />
        </Link>
      </div>

      <footer className="mt-12 text-center text-xs text-zinc-600">
        © 2026 PromptHub Pro. Built on verified 14,720 prompt dataset.
      </footer>
    </main>
  );
}
