"use client";

const stack = [
  "Next.js", "React", "Node.js", "Express", "MongoDB", "TypeScript",
  "Tailwind CSS", "Redis", "PostgreSQL", "Nginx", "PM2", "Docker",
  "Linux VPS", "Vercel", "AWS", "Cloudflare", "OpenAI / Claude API",
  "LangChain", "Vector Search", "GA4", "Search Console", "Schema.org",
];

export function Marquee() {
  return (
    <section aria-label="Technology stack" className="border-y border-white/[0.07] bg-white/[0.02] py-6">
      <div className="mask-edges flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-3 pr-3">
          {[...stack, ...stack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-ink-900/60 px-4 py-2 text-[13px] font-medium text-slate-400 transition-colors hover:border-brand-400/40 hover:text-brand-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
