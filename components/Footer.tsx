import Image from "next/image";
import { mailto, site } from "@/lib";
import { IconGithub, IconMail } from "./Icons";

const socials = [{ href: site.social.github, label: "GitHub", Icon: IconGithub }];

const nav = [
  { href: "#services", label: "Services" },
  { href: "#concerns", label: "Concerns" },
  { href: "#skills", label: "Skills" },
  { href: "#process", label: "Process" },
  { href: "#support", label: "IT Support" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink-950/70 py-12">
      <div className="container-x">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <Image
              src="/logo-horizontal.svg"
              alt={site.name}
              width={268}
              height={64}
              className="mx-auto h-10 w-auto md:mx-0"
            />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Programmatic SEO, MERN application development, cloud hosting, AI integration
              and IT support — delivered by one accountable engineer.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 transition-colors hover:text-brand-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href={mailto()}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition-colors hover:text-brand-300"
            >
              <IconMail className="h-4 w-4" />
              {site.email}
            </a>
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-brand-300"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            <a href={site.url} className="transition-colors hover:text-brand-300">
              {site.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
