# Sunaulo Agrifarm

Marketing site for **Sunaulo Agrifarm**, a family-run farm in Ghorahi-11, Dang, Nepal,
selling rice, lentils, mustard oil, seasonal vegetables, eggs, dairy, goat meat and honey
from its own fields.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
app/
  layout.tsx          Root layout, global metadata
  page.tsx             Composes all page sections
  globals.css          Tailwind import + design tokens (@theme)
  actions/
    order.ts            Server action: emails order form submissions

components/
  layout/
    Header.tsx         Sticky nav with mobile menu (client component)
    Footer.tsx          Site footer with link groups
  sections/
    Hero.tsx
    About.tsx
    Team.tsx            Staff list with posts (data-driven)
    HarvestCalendar.tsx Signature 12-month crop calendar
    Products.tsx
    Practices.tsx
    Gallery.tsx
    Visit.tsx           Contact details + map embed
    Contact.tsx         Order form (OrderForm) + FAQ accordion
    OrderForm.tsx       Order form client component (useActionState)
  ui/
    Container.tsx       Max-width content wrapper
    Button.tsx          Primary/ghost pill buttons
    SectionHeading.tsx  Shared kicker + title + intro pattern
  icons/
    PaddyFieldIllustration.tsx

data/                   All copy and content as typed arrays/constants
  site.ts               Nav links, contact details, hero stats, footer links
  products.ts           Product catalogue + order form options
  harvest.ts            12-month harvest calendar
  practices.ts          Farming practices
  gallery.ts            Gallery image metadata
  faq.ts                FAQ entries
  team.ts               Staff names and posts

types/index.ts          Shared content types (Product, HarvestMonth, etc.)
lib/utils.ts             `cn()` class-merging helper

public/images/farm/      Gallery illustrations (SVG placeholders)
```

## Order form emails

The "Send order request" form on the Contact section emails submissions to
**sunauloagrifarm@gmail.com** via Gmail SMTP.

- `app/actions/order.ts` — server action (`submitOrder`) that sends the email with
  [nodemailer](https://nodemailer.com), using `GMAIL_USER` / `GMAIL_APP_PASSWORD` from
  the environment as the *sending* account.
- `components/sections/OrderForm.tsx` — client component wiring the form to the action
  via `useActionState`, with pending/success/error states.

### Setup

1. Copy `.env.local.example` to `.env`.
2. Enable 2-Step Verification on the Gmail account you'll send from (this can be the
   farm's own account), then create an [App Password](https://myaccount.google.com/apppasswords).
3. Set `GMAIL_USER` to that Gmail address and `GMAIL_APP_PASSWORD` to the generated app
   password in `.env.local`.
4. To change the recipient address, edit `RECIPIENT_EMAIL` in `app/actions/order.ts`.

If the environment variables aren't set, or sending fails, the form shows a friendly
error asking the visitor to call or WhatsApp instead — no crash, no silent failure.

## Customizing content

Everything text-based — nav links, products, the harvest calendar, FAQs, contact
details — lives in `data/*.ts` as typed arrays. Edit those files; the components
re-render automatically.

## Design tokens

Colors, fonts, and the content max-width are defined as Tailwind v4 `@theme` tokens in
`app/globals.css`:

- `cream`, `paper`, `ink`, `ink-soft`, `green`, `green-deep`, `gold`, `gold-soft`,
  `terracotta`, `line`
- `font-display`, `font-body`, `font-mono`
- `container-content` (1180px max content width → `max-w-content`)

### Fonts

`font-display`, `font-body`, and `font-mono` currently point at system font stacks so the
project builds without network access. For the originally-intended pairing, load fonts
via `next/font/google` in `app/layout.tsx` (e.g. Fraunces, Source Sans 3, Space Mono) and
point the theme variables at the generated `--font-*` variables.

## Gallery images

`public/images/farm/*.svg` are illustrated placeholders. Replace them with real farm
photos (matching filenames, or update `src` in `data/gallery.ts`) — the `<img>` tags in
`components/sections/Gallery.tsx` will pick them up automatically. Swap to `next/image`
once real raster photos are in place for automatic optimization.

## Editable placeholders

- `data/site.ts` — phone number, email, and exact ward address are placeholders.
- `components/sections/Visit.tsx` — OpenStreetMap embed uses an approximate bounding box
  for Ghorahi-11; adjust the `bbox`/`marker` query params to your exact coordinates.
- `components/sections/Contact.tsx` — the order form posts to `#`; wire it up to your
  backend, a form service (e.g. Formspree), or a Next.js API route / server action.
