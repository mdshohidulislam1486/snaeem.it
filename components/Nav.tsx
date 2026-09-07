"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { mailto } from "@/lib";
import { IconMail } from "./Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#concerns", label: "Concerns" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#support", label: "IT Support" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-brand-400 to-accent-500"
        style={{ scaleX: progress }}
      />
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-[72px] items-center justify-between">
          <a href="#top" className="group flex items-center gap-3" aria-label="SNaeem IT home">
            <Image
              src="/logo-horizontal.svg"
              alt="SNaeem IT"
              width={268}
              height={64}
              priority
              className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.03] sm:h-10"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.06] opacity-0 transition-all duration-300 hover:scale-100 hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={mailto()} className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex">
              <IconMail className="h-4 w-4" />
              Email me
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/[0.05] md:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <motion.span
                  className="absolute left-0 top-0 h-[2px] w-full rounded bg-slate-200"
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="absolute left-0 top-1.5 h-[2px] w-full rounded bg-slate-200"
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] w-full rounded bg-slate-200"
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.06]"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href={mailto()} onClick={() => setOpen(false)} className="btn-primary mt-2">
                <IconMail className="h-4 w-4" />
                snaeem.wd@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
