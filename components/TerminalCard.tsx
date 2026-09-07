"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ snaeem deploy --stack mern --edge", tone: "cmd" },
  { text: "→ building next app ............ done", tone: "ok" },
  { text: "→ generating pSEO routes 12,480 . done", tone: "ok" },
  { text: "→ indexing sitemap shards ...... done", tone: "ok" },
  { text: "→ ai layer: embeddings + rag ... ready", tone: "accent" },
  { text: "→ nginx + pm2 + tls ............ live", tone: "ok" },
  { text: "✓ https://snaeemit.xyz deployed in 42s", tone: "done" },
] as const;

const toneClass: Record<string, string> = {
  cmd: "text-slate-200",
  ok: "text-slate-400",
  accent: "text-accent-400",
  done: "text-brand-300 font-semibold",
};

export function TerminalCard() {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((v) => {
        if (v >= lines.length) {
          clearInterval(id);
          return v;
        }
        return v + 1;
      });
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative rounded-3xl p-[1px] shadow-[0_40px_120px_-40px_rgba(34,211,238,0.5)]">
      <div className="shimmer-border absolute inset-0 animate-shimmer rounded-3xl opacity-70" />
      <div className="relative rounded-3xl border border-white/10 bg-ink-900/95 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <p className="ml-3 font-mono text-xs text-slate-500">snaeem-it — deploy.sh</p>
        </div>

        <div className="min-h-[15.5rem] space-y-2 px-5 py-5 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
          {lines.slice(0, visible).map((l, i) => (
            <motion.p
              key={`${l.text}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={toneClass[l.tone]}
            >
              {l.text}
            </motion.p>
          ))}
          <motion.span
            className="inline-block h-4 w-2 bg-brand-400 align-middle"
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-b-3xl border-t border-white/10 bg-white/[0.04]">
          {[
            { k: "TTFB", v: "0.18s" },
            { k: "Core Web Vitals", v: "Pass" },
            { k: "Indexed", v: "12.4k" },
          ].map((s) => (
            <div key={s.k} className="bg-ink-900 px-3 py-3.5 text-center">
              <p className="text-[10px] uppercase tracking-wider text-slate-500">{s.k}</p>
              <p className="mt-1 font-display text-sm font-bold text-white">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
