"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { mailto, site } from "@/lib";
import { Reveal } from "./Reveal";
import { IconArrow, IconCheck, IconMail } from "./Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = mailto();
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent px-6 py-14 text-center sm:px-12 sm:py-20">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-[110px]"
              animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-accent-500/25 blur-[110px]"
              animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative">
              <span className="eyebrow">Start a project</span>

              <h2 className="section-title mt-6">
                One inbox. <span className="gradient-text">One engineer.</span>
                <br className="hidden sm:block" /> Straight answer.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400 sm:text-base">
                No contact form, no phone queue, no sales sequence. Email what you are trying
                to build or fix — include the stack and the deadline if you know them — and
                you get a real technical reply, usually within one business day.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <motion.a
                  href={mailto()}
                  whileHover={{ scale: 1.035 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary group !px-8 !py-4 text-base"
                >
                  <IconMail className="h-5 w-5" />
                  {site.email}
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                <button type="button" onClick={copy} className="btn-ghost !py-4">
                  {copied ? (
                    <>
                      <IconCheck className="h-4 w-4 text-brand-400" />
                      Copied
                    </>
                  ) : (
                    "Copy address"
                  )}
                </button>
              </div>

              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-500">
                Email only · Worldwide, remote · {site.domain}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
