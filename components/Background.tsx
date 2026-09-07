"use client";

import { motion } from "framer-motion";

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="grid-bg mask-fade absolute inset-0 animate-gridDrift opacity-70" />

      <motion.div
        className="absolute -left-40 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-500/20 blur-[130px]"
        animate={{ x: [0, 70, -30, 0], y: [0, 50, 20, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-[18%] h-[30rem] w-[30rem] rounded-full bg-accent-500/20 blur-[140px]"
        animate={{ x: [0, -60, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.12, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-400/10 blur-[130px]"
        animate={{ x: [0, 50, -40, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/50 to-transparent" />
    </div>
  );
}
