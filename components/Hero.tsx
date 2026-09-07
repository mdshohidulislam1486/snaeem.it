"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mailto, site } from "@/lib";
import { IconArrow, IconBolt, IconCheck, IconMail } from "./Icons";
import { TerminalCard } from "./TerminalCard";

const headline = ["MERN", "web", "apps,", "AI", "automation", "&", "cloud-scale", "delivery."];

const proof = [
  "MERN / Next.js product engineering",
  "AI automation, assistants & RAG pipelines",
  "Programmatic SEO at 10k+ page scale",
  "Cloud hosting, CI & 24/7 IT support",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-brand-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <h1 className="mt-6 max-w-[15ch] font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[3.4rem] lg:text-[3.6rem]">
            {headline.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.65, delay: 0.12 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-[0.28em] inline-block ${
                  ["AI", "automation", "cloud-scale"].includes(word) ? "gradient-text" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {site.name} is a one-desk engineering studio. I design search engines that
            generate traffic programmatically, ship MERN and Next.js applications, host and
            scale them on hardened cloud infrastructure, wire AI and automation into the
            product — then keep it all running.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.88 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href={mailto()} className="btn-primary group">
              <IconMail className="h-4 w-4" />
              {site.email}
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-ghost">
              What I build
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-9 grid gap-2.5 text-sm text-slate-400"
          >
            {proof.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <IconCheck className="h-4 w-4 shrink-0 text-brand-400" />
                {p}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float">
            <TerminalCard />
          </div>

          <motion.div
            className="absolute -left-8 -top-10 hidden rounded-2xl border border-white/10 bg-ink-900/85 px-4 py-3 shadow-2xl backdrop-blur sm:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-widest text-slate-500">Lighthouse</p>
            <p className="font-display text-2xl font-bold text-brand-300">98 / 100</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-9 -right-4 hidden items-center gap-3 rounded-2xl border border-white/10 bg-ink-900/85 px-4 py-3 shadow-2xl backdrop-blur sm:flex"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-500 text-ink-950">
              <IconBolt className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-slate-500">Uptime</p>
              <p className="font-display text-sm font-bold text-white">99.9% monitored</p>
            </div>
          </motion.div>

          {site.profileImage ? (
            <div className="absolute -right-3 -top-6 hidden h-24 w-24 overflow-hidden rounded-full border-2 border-brand-400/60 shadow-[0_0_50px_-10px_rgba(34,211,238,0.8)] lg:block">
              <Image src={site.profileImage} alt={site.name} fill className="object-cover" />
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
