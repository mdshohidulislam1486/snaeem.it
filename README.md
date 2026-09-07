# SNaeem IT — single-page landing site

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.
One page, no contact form, no phone number — email is the only contact channel.

## Run

```bash
npm install
npm run dev     # http://localhost:3100
npm run build && npm start
```

## Where to edit

| What | File |
|---|---|
| Name, domain, email, social URLs | `lib.ts` |
| Hero headline, sub-copy, proof points | `components/Hero.tsx` |
| Deploy-terminal animation lines | `components/TerminalCard.tsx` |
| Tech marquee | `components/Marquee.tsx` |
| Six service cards | `components/Services.tsx` |
| Concerns (thetoletbd / garirentbd) | `lib.ts` → `concerns`, rendered by `components/Concerns.tsx` |
| Skill groups + percentages | `components/Skills.tsx` |
| Four process steps | `components/Process.tsx` |
| Stats counters + IT-support blocks | `components/Support.tsx` |
| Contact block | `components/Contact.tsx` |
| Colors, keyframes | `tailwind.config.ts` |

**Before going live:** the four counters in `components/Support.tsx` (`8+ years`,
`12k+ pages`, `99.9% uptime`, `24/7`) are placeholders — set them to real figures.

Social: GitHub only (`lib.ts` → `site.social.github`, currently
`mdshohidulislam1486`). Add more by extending that object and the `socials`
array in `components/Footer.tsx`.

## Concerns (sister companies)

`thetoletbd.com` and `garirentbd.com` are presented as platforms owned and operated
by SNaeem IT — the section exists so the trade licence and a single payment-gateway
merchant account can cover both sites.

- Copy, tags and links live in `lib.ts` → `concerns`.
- Card screenshots are `public/concern-thetoletbd.png` and `public/concern-garirentbd.png`
  (1280×820). Retake them whenever those sites are redesigned.
- Once the trade licence is issued, set `site.tradeLicense` in `lib.ts` — the number then
  renders inside the "Ownership & billing" note, which is what a gateway reviewer looks for.
- Ownership is also declared in structured data (`owns` / `subOrganization` in the
  JSON-LD in `app/layout.tsx`).

## Optional profile photo

Drop a square photo at `public/profile.jpg`, then in `lib.ts` set
`profileImage: "/profile.jpg"`. It appears as a circular badge on the hero visual.
Leave it empty to hide it.

## Brand assets (`public/`)

| File | Use |
|---|---|
| `logo-mark.svg` | Rounded-square mark only |
| `logo-round.svg` | Circular mark — profile avatars |
| `logo-horizontal.svg` / `-dark.svg` | Header lockup, light text / dark text |
| `logo-vertical.svg` / `-dark.svg` | Stacked lockup, light text / dark text |
| `social-avatar.png` | 1080×1080 round avatar (transparent background) |
| `social-banner.png` | 1500×500 cover / header image |
| `og-image.png` | 1200×630 Open Graph / Twitter card |
| `app/icon.svg`, `app/apple-icon.png` | Favicon + iOS icon (auto-wired by Next) |

Brand colors: ink `#05070d` / `#0a0f1c`, cyan `#22d3ee` → `#0891b2`, indigo `#6366f1`.

## SEO

`app/robots.ts`, `app/sitemap.ts`, canonical URL, Open Graph, Twitter card and
`ProfessionalService` JSON-LD are all wired from `lib.ts`. Update `site.url` if the
domain changes.

## Deploying to the VPS (same conventions as the other sites)

Ports 3000–3006 are taken, so this app defaults to **3100**.

```bash
# on the server
git clone <repo> /var/www/snaeem-it && cd /var/www/snaeem-it
npm ci && npm run build
pm2 start npm --name snaeem-it -- start && pm2 save
# nginx: /etc/nginx/sites-available/snaeem-it -> proxy_pass http://127.0.0.1:3100
certbot --nginx -d snaeemit.xyz -d www.snaeemit.xyz
```
# snaeem.it
