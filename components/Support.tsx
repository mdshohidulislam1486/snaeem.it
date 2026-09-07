"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./Section";
import { IconBolt, IconCheck, IconGlobe, IconShield } from "./Icons";

// Adjust these figures to match reality before going live.
const stats = [
  { value: 8, suffix: "+", label: "Years shipping for the web" },
  { value: 12, suffix: "k+", label: "Programmatic pages generated" },
  { value: 99.9, suffix: "%", label: "Uptime target on managed hosts", decimals: 1 },
  { value: 24, suffix: "/7", label: "Monitoring on supported stacks" },
];

const supportPoints = [
  {
    icon: IconShield,
    title: "Managed maintenance",
    body: "Dependency and security patching, certificate renewals, database backups with tested restores, and log review before small issues become outages.",
  },
  {
    icon: IconBolt,
    title: "Incident response",
    body: "Site down, deploy broken, database misbehaving or traffic spiking — a defined response path instead of a support ticket that ages for a week.",
  },
  {
    icon: IconGlobe,
    title: "Ongoing improvement",
    body: "Monthly performance, SEO health and cost reports, plus a running backlog of improvements shipped in small, low-risk releases.",
  },
];

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(value * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-extrabold text-white sm:text-4xl">
      {n.toFixed(decimals)}
      <span className="gradient-text">{suffix}</span>
    </span>
  );
}

export function Support() {
  return (
    <section id="support" className="relative py-24 sm:py-28">
      <div className="container-x">
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="card card-hover h-full text-center">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-20">
          <SectionHeading
            eyebrow="IT Support"
            title={
              <>
                We also <span className="gradient-text">keep it running</span>
              </>
            }
            copy="Launching is the easy half. SNaeem IT provides continuing IT support for the systems we build — and for stacks someone else left behind."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {supportPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card card-hover group h-full">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-400/20 to-accent-500/20 text-brand-300">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
              {[
                "Emergency fixes",
                "Server migrations",
                "Legacy stack rescue",
                "Security hardening",
                "Retainer or hourly",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-[13.5px] text-slate-300">
                  <IconCheck className="h-4 w-4 text-brand-400" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
