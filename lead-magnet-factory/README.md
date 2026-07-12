# TsangAI Consulting™ — Lead Magnet Factory v1.0

A repeatable system for producing premium, 5-page micro-resources that position
TsangAI Consulting as the trusted authority for service business owners who want
to reclaim time, improve operations, and grow with AI.

Most AI consultants create PDFs. This factory creates a **collectible library**.

## What's in this folder

```
lead-magnet-factory/
├── README.md                 ← You are here: the factory system
├── MASTER-PROMPT.md          ← Paste into Claude to generate a new magnet
├── QUALITY-SCORECARD.md      ← The 100-point rubric. Under 90 = revise.
├── assets/tsangai.css        ← Brand design system (navy + blue, print-ready)
├── templates/
│   └── lead-magnet-template.html   ← 5-page master template, fill the [brackets]
├── magnets/                  ← Source HTML for each lead magnet
│   ├── 01-business-ai-scorecard.html
│   ├── 02-buy-back-10-hours.html
│   ├── 03-ai-opportunity-finder.html
│   ├── 04-ai-prompt-starter-pack.html
│   └── 05-ai-business-tech-stack.html
├── build-pdfs.sh             ← Renders every magnet to a print-ready PDF
└── dist/                     ← Finished PDFs, ready to share
```

## How to produce a new lead magnet

1. **Pick the topic** from the roadmap below (or the content categories).
2. **Generate the content** — open `MASTER-PROMPT.md`, fill in the topic
   variables at the top, and paste the whole thing into Claude.
3. **Pour it into the template** — copy `templates/lead-magnet-template.html`
   to `magnets/NN-slug.html` and replace every `[bracket]`.
4. **Score it** with `QUALITY-SCORECARD.md`. Under 90/100? Revise before
   publishing. No exceptions.
5. **Build the PDF**: `./build-pdfs.sh magnets/NN-slug.html` → lands in `dist/`.
6. **Update the series tracker** on page 5 of every future magnet (tick the
   new box) — the collection is part of the hook.

### Building the PDFs

```bash
./build-pdfs.sh                      # all magnets
./build-pdfs.sh magnets/01-*.html    # just one
```

Requires Chrome or Chromium (`CHROME=/path/to/chrome ./build-pdfs.sh` to
override). Or open any magnet HTML in Chrome → Print → Save as PDF →
margins "None", background graphics ON.

## The philosophy (the 5 gates)

Every lead magnet must answer **YES** to all five, or it doesn't ship:

1. Can someone finish it in under 15 minutes?
2. Will they get a measurable result today?
3. Is it so useful they'd send it to another business owner?
4. Does it naturally create curiosity for the AI Audit?
5. Does it build trust instead of just showing knowledge?

## The formula (every magnet, same 5 pages)

| Page | Job |
|------|-----|
| 1 — Premium Cover | Title, subtitle, who it's for, time required, outcome |
| 2 — Quick Win | Executive summary, why it matters, ONE idea, example, 10-minute win |
| 3 — Action Plan | Exactly 5 steps + Common Mistakes + Pro Tip |
| 4 — Copy/Paste Assets | Prompts, templates, worksheets, checklists |
| 5 — Continue Your Journey | YouTube → Skool → Discovery Call, series tracker |

**One CTA ladder. Never competing CTAs.**

## Voice and reading level

Target: Dan Martell. Grade 6–8. Short paragraphs, short sentences, no
buzzwords, no theory, no AI history, no definitions.

> ❌ "Leverage artificial intelligence to optimize operational efficiencies."
> ✅ "Use AI to save hours every week."

## The consulting ladder every magnet feeds

Lead Magnet → YouTube → Skool → Newsletter → Discovery Call → AI Audit →
Implementation → Monthly AI Advisor. **Never sell immediately. Always build
trust first.**

## Roadmap — TsangAI Business Growth Series

**Tier 1 — built ✅**

- [x] #01 Business AI Scorecard
- [x] #02 Buy Back 10 Hours Every Week
- [x] #03 AI Opportunity Finder
- [x] #04 AI Prompt Starter Pack
- [x] #05 AI Business Tech Stack

**Tier 2 — next**

- [ ] #06 Automation Playbook
- [ ] Website Audit
- [ ] Business Systems Checklist
- [ ] 30-Day AI Roadmap
- [ ] Client Onboarding Playbook
- [ ] Lead Follow-up Blueprint

**Tier 3 — later**

- [ ] Hiring with AI · Meeting Playbook · Email Playbook · Content Engine ·
  Business Dashboard

**Content categories to mine:** Time (buyback, meetings, email, admin) ·
Marketing (content system, LinkedIn, video, SEO) · Sales (follow-up,
discovery calls, proposals, CRM) · Operations (systems, SOPs, hiring,
delegation, onboarding) · AI (prompt library, tech stack, business OS,
automation playbook, scorecard).

## Before-you-publish checklist

- [ ] Scored 90+ on `QUALITY-SCORECARD.md`
- [ ] All `[placeholders]` replaced (search the HTML for `[`)
- [ ] YouTube / Skool links filled in on page 5
- [ ] Series tracker updated — current guide ticked with `class="current"`
- [ ] PDF built and visually checked at 100% zoom
- [ ] Reading level sanity check: would a busy 8th grader follow every step?
