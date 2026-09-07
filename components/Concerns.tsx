"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { concerns, site } from "@/lib";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";
import { IconArrow, IconGlobe, IconShield } from "./Icons";

export function Concerns() {
  return (
    <section id="concerns" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our concerns"
          title={
            <>
              Platforms <span className="gradient-text">owned & operated</span> by us
            </>
          }
          copy="Alongside client work, SNaeem IT builds and runs its own products. These two live marketplaces are sister concerns of SNaeem IT — built, hosted, maintained and commercially operated by the company."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {concerns.map((c, i) => (
            <Reveal key={c.domain} delay={i * 0.12}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="card card-hover group h-full !p-0"
              >
                <div className="relative aspect-[1280/820] overflow-hidden border-b border-white/10">
                  <Image
                    src={c.shot}
                    alt={`${c.name} homepage`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-ink-950/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-300 backdrop-blur">
                    <IconShield className="h-3.5 w-3.5" />
                    Sister concern
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-white">{c.name}</h3>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
                    >
                      <IconGlobe className="h-4 w-4" />
                      {c.domain}
                    </a>
                  </div>

                  <p className="mt-1 text-sm font-medium text-accent-400">{c.category}</p>

                  <p className="mt-4 text-[14px] leading-relaxed text-slate-400">{c.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12.5px] text-slate-300"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-300"
                  >
                    Visit {c.domain}
                    <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-brand-400/20 bg-brand-400/[0.05] p-6 sm:flex-row sm:items-center sm:gap-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-brand-400/30 bg-brand-400/10 text-brand-300">
              <IconShield className="h-5 w-5" />
            </span>
            <p className="text-[14px] leading-relaxed text-slate-300">
              <span className="font-semibold text-white">Ownership &amp; billing.</span>{" "}
              thetoletbd.com and garirentbd.com are both wholly owned and operated by{" "}
              {site.name}. Development, hosting, support and commercial operation of both
              platforms sit with the company, and payment processing for both runs through a
              single {site.name} merchant account.
              {site.tradeLicense ? (
                <> Trade licence no. {site.tradeLicense}.</>
              ) : null}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
