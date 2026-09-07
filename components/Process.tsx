"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

const steps = [
  {
    n: "01",
    title: "Discovery & audit",
    body: "One call, then a written read of your goals, current stack, traffic and infrastructure. You get the plan and the honest risks before anything is billed.",
  },
  {
    n: "02",
    title: "Architecture",
    body: "Data model, route strategy, SEO surface area, hosting topology and AI touchpoints decided up front — so scaling later is a config change, not a rewrite.",
  },
  {
    n: "03",
    title: "Build & iterate",
    body: "Short cycles with a live staging URL from week one. You see progress continuously instead of waiting for a big reveal at the end.",
  },
  {
    n: "04",
    title: "Deploy & operate",
    body: "Production launch on hardened infrastructure with TLS, backups, monitoring and alerting in place — then ongoing support as long as you need it.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title={
            <>
              How work <span className="gradient-text">actually runs</span>
            </>
          }
          copy="A predictable four-stage path from first conversation to a system that runs itself."
        />

        <div className="relative mt-14">
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-400/60 via-accent-500/40 to-transparent md:block" />

          <div className="space-y-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-300 hover:border-brand-400/35 hover:bg-white/[0.06] sm:p-6 md:pl-6"
                >
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-ink-900 font-display text-lg font-extrabold text-brand-300 transition-colors duration-300 group-hover:border-brand-400/50 group-hover:text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-slate-400">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
