---
name: CamCard pages built
description: Three CamCard pages built — homepage, sign-in, sign-up — their file locations and key design decisions
type: project
---

Three pages built to match camcard.com:

**Homepage** (`src/app/page.tsx`) — fully server-rendered, all sections inline: hero, stats (15 Years / 60M+ / 4.9/5), AI Lead Capture, CRM Sync, Card Templates (8 designs), Sharing Methods (6 ways), Email Signature, Enterprise CTA, Security certs, Feature Grid, Reviews.

**Sign-In** (`src/app/sign-in/page.tsx`) — two-column layout: form left (email/phone + password + remember me + Google/Microsoft/SSO buttons), decorative card preview banner right.

**Sign-Up** (`src/app/sign-up/page.tsx`) — three-step wizard with live card preview on right side:
- Step 1: Full name → card updates in real-time
- Step 2: Job title, department, company, headline + "Add More Fields" button → Dialog with 5 categories (Social Media, Video Conferencing, Messaging, Professional, Website) — 28+ toggle options
- Step 3: Google/Microsoft OAuth + email + password

**Shared components:**
- `src/components/shared/navbar.tsx` — sticky, responsive with mobile menu
- `src/components/shared/footer.tsx` — 4-column links + inline SVG social icons

**Why:** lucide-react v1.14.0 removed Twitter/LinkedIn/YouTube/Facebook/Instagram icons — inline SVGs used in footer instead.

**How to apply:** Use inline SVGs for any social brand icons; do not import social icons from lucide-react in this project.

Build passes cleanly: `pnpm build` → 4 static routes (/, /_not-found, /sign-in, /sign-up).
