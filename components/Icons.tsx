import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconSearch = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2M8 11h6M11 8v6" />
  </svg>
);

export const IconCode = (p: P) => (
  <svg {...base} {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

export const IconScale = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 17V9M8.5 17V5M14 17v-6M19.5 17V7M3 21h18" />
  </svg>
);

export const IconCloud = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 18a4 4 0 0 1-.4-7.98A5.5 5.5 0 0 1 17.6 9.5 3.75 3.75 0 0 1 17.5 18H7Z" />
    <path d="M12 13v5m0 0-2-2m2 2 2-2" />
  </svg>
);

export const IconAi = (p: P) => (
  <svg {...base} {...p}>
    <rect x="5" y="6" width="14" height="12" rx="3" />
    <path d="M9 11v2M15 11v2M12 3v3M2.5 12H5M19 12h2.5" />
  </svg>
);

export const IconRocket = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13.5 4.5c3.5-2 6.5-1.5 6.5-1.5s.5 3-1.5 6.5c-1.6 2.8-4.4 5-6.7 6.4L8 12.2C9.4 9.9 10.7 6.1 13.5 4.5Z" />
    <path d="M8 12.2 5 11l1.4-2.8 3.3-.5M11.8 16 13 19l2.8-1.4.5-3.3" />
    <path d="M6.5 17.5 4 20" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconBolt = (p: P) => (
  <svg {...base} {...p}>
    <path d="M13 2 4.5 13.5H11L10 22l8.5-11.5H12L13 2Z" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="3" />
    <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h13m0 0-5-5m5 5-5 5" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const IconGlobe = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
  </svg>
);

export const IconGithub = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.86l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);



