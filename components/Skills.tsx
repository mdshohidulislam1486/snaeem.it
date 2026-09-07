"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./Section";

const groups = [
  {
    label: "Search & Growth Engineering",
    skills: [
      { name: "Programmatic SEO architecture", level: 96 },
      { name: "Technical SEO & Core Web Vitals", level: 93 },
      { name: "Structured data & schema automation", level: 90 },
      { name: "Analytics, GSC & index monitoring", level: 88 },
    ],
  },
  {
    label: "Application Engineering",
    skills: [
      { name: "Next.js / React / TypeScript", level: 95 },
      { name: "Node.js & Express APIs", level: 92 },
      { name: "MongoDB data modelling & indexing", level: 91 },
      { name: "Performance & scaling work", level: 89 },
    ],
  },
  {
    label: "Cloud, AI & Operations",
    skills: [
      { name: "Linux VPS, nginx, TLS, PM2", level: 93 },
      { name: "CI/CD & release automation", level: 88 },
      { name: "AI / LLM & RAG integration", level: 87 },
      { name: "Monitoring, backups & IT support", level: 90 },
    ],
  },
];

const chips = [
  "Multi-tenant SaaS", "Headless CMS", "Stripe & local gateways", "Auth & RBAC",
  "Cron & queues", "Webhooks", "Sitemap sharding", "Edge caching",
  "Vector search", "Prompt engineering", "Log aggregation", "Zero-downtime deploys",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="gradient-text">capability stack</span>
            </>
          }
          copy="Client work stays private, so instead of screenshots here is exactly what I can be handed on day one — depth rated honestly, not rounded up to 100%."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 0.1}>
              <div className="card h-full">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs font-bold text-brand-400">
                    0{gi + 1}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">{g.label}</h3>
                </div>

                <div className="mt-6 space-y-5">
                  {g.skills.map((s, si) => (
                    <div key={s.name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[13.5px] text-slate-300">{s.name}</p>
                        <span className="font-mono text-[11px] text-brand-300">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 1.1,
                            delay: 0.15 + si * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <StaggerGroup className="mt-8 flex flex-wrap justify-center gap-2.5">
          {chips.map((c) => (
            <StaggerItem key={c}>
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/40 hover:text-brand-200">
                {c}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
