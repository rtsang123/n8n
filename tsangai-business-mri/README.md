# TsangAI Business MRI™

A lead-generation website that turns visitors into booked AI Audit calls.

One website. **10 built-in assessments.** Every visitor gets a score, a
personalized PDF report, and a big button to book a call with you. Every
name and email is saved for you automatically.

**👉 New here? Open [`docs/START-HERE.md`](docs/START-HERE.md) first.**

## What's inside

| Assessment | What it does |
|---|---|
| 🩺 Business MRI™ | Full business checkup across 8 areas (flagship) |
| 🤖 AI Readiness Score™ | How ready the business is to profit from AI |
| ⏳ AI Time Leak Calculator™ | Calculates hours and dollars lost to manual work |
| 📈 AI ROI Calculator™ | Estimates the dollar return AI could generate |
| 🖥️ Website Conversion Score™ | 20 smart questions about their website |
| 💼 LinkedIn Authority Score™ | Scores their LinkedIn profile |
| 🔑 Founder Dependency Score™ | Can the business run without the owner? |
| ⚡ Lead Response Score™ | Estimates revenue lost to slow follow-up |
| 📣 Marketing Efficiency Score™ | Scores 7 marketing channels |
| 💛 Customer Experience Score™ | Scores the client experience |

## The guides (in the `docs` folder)

1. [START HERE](docs/START-HERE.md) — read this first
2. [Installation](docs/INSTALLATION.md) — get the project onto GitHub
3. [Netlify Deployment](docs/NETLIFY-DEPLOYMENT.md) — put it live on the internet
4. [How to change questions](docs/HOW-TO-CHANGE-QUESTIONS.md)
5. [How to change the logo](docs/HOW-TO-CHANGE-LOGO.md)
6. [How to change colors](docs/HOW-TO-CHANGE-COLORS.md)
7. [How to add a new assessment](docs/HOW-TO-ADD-A-NEW-ASSESSMENT.md)
8. [Common problems](docs/COMMON-PROBLEMS.md)

## How it works (30-second version)

- All questions live in simple text files in `data/assessments/` — edit them like a document, no coding.
- Your business name, email, booking link and colors live in `data/config.json`.
- Leads (name + email + score) are collected by **Netlify Forms** — free, built in, visible in your Netlify dashboard.
- PDF reports are generated right in the visitor's browser — no server, no monthly fees.

## For developers (optional)

```bash
npm install
npm run dev    # local development at http://localhost:3000
npm run build  # static export to ./out
```

Stack: Next.js (static export) + React + TypeScript + Tailwind CSS. No database. No paid APIs.
