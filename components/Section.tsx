import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title mt-5">{title}</h2>
      </Reveal>
      {copy ? (
        <Reveal delay={0.16}>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-400 sm:text-base">{copy}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
