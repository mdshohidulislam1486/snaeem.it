"use client";

import { motion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHeading } from "./Section";
import {
  IconAi,
  IconCloud,
  IconCode,
  IconRocket,
  IconScale,
  IconSearch,
} from "./Icons";

const services = [
  {
    icon: IconSearch,
    title: "Programmatic SEO",
    lead: "Traffic engineered, not guessed.",
    points: [
      "Keyword × entity matrices turned into thousands of intent-matched pages",
      "Templated route generation with unique, non-thin content models",
      "Sitemap sharding, internal-link graphs, canonical & schema automation",
      "Index-coverage monitoring and content refresh pipelines",
    ],
  },
  {
    icon: IconCode,
    title: "MERN Application Development",
    lead: "MongoDB · Express · React · Node.",
    points: [
      "Next.js App Router front-ends with SSR/ISR where it actually pays off",
      "REST and typed API layers, auth, roles, payments, dashboards",
      "Admin panels, multi-tenant portals, marketplaces and booking systems",
      "TypeScript end to end, tested and documented",
    ],
  },
  {
    icon: IconScale,
    title: "Web Application Scaling",
    lead: "From first user to heavy traffic.",
    points: [
      "Query profiling, indexing strategy and N+1 elimination",
      "Caching layers, CDN rules, image and asset optimisation",
      "Load testing, bottleneck tracing, Core Web Vitals repair",
      "Horizontal scale-out with process managers and load balancing",
    ],
  },
  {
    icon: IconCloud,
    title: "Cloud Hosting & Infrastructure",
    lead: "Your stack, hardened and owned.",
    points: [
      "Linux VPS / cloud provisioning, nginx reverse proxies, TLS automation",
      "PM2 & container process supervision with restart-on-boot",
      "Database backups, retention policies and restore drills",
      "DNS, subdomains, mail routing and certificate expiry alerting",
    ],
  },
  {
    icon: IconAi,
    title: "AI Integration",
    lead: "LLM features that ship.",
    points: [
      "Chat assistants, copilots and support bots grounded in your data",
      "RAG pipelines: embeddings, vector search, retrieval and guardrails",
      "AI content, summarisation, tagging and enrichment workflows",
      "Cost controls, caching, streaming responses and fallbacks",
    ],
  },
  {
    icon: IconRocket,
    title: "Deployment & DevOps",
    lead: "Repeatable releases, zero drama.",
    points: [
      "CI/CD pipelines, build automation and one-command deploys",
      "Staging → production promotion with rollback paths",
      "Environment and secret management done properly",
      "Uptime monitoring, log aggregation and alerting",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What <span className="gradient-text">SNaeem IT</span> delivers
            </>
          }
          copy="Six disciplines, one engineer accountable for all of them. No hand-offs between an SEO agency, a dev shop and a sysadmin — the same person owns the traffic, the app and the server it runs on."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="card card-hover group h-full"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-400/20 to-accent-500/20 text-brand-300 transition-colors duration-300 group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand-300/90">{s.lead}</p>

                <ul className="mt-4 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[13.5px] leading-relaxed text-slate-400">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400/70" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
