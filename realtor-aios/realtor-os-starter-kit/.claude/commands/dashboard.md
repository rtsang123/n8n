---
description: Your AIOS front door — see every skill, what it does, and launch any of them
---

# /dashboard

The front door. Show the owner everything their AIOS can do and launch
whatever they pick — no command-hunting.

## 1 — Read the state

Read `system/modules.md` (what's installed) and glance at the workspace
folders that exist (`clients/`, `leads/`, `deals/`, `content/`, `market/`)
for a sense of what's in use.

## 2 — Show the board

Present every module in the package as a tight, scannable list, grouped —
plain language, no file paths:

- **Foundation** — Context OS (your AI learns your business), Brain Clone
  (it learns your voice)
- **Every day** — Lead Engine (catch and answer every inquiry), Client
  Profiles (turn a conversation into a client profile + CRM block + follow-up)
- **Every week** — Monday Skill (match listings to your clients), Marketing
  Engine (your week of content), Market Research (what homes actually sell
  for)
- **Per deal** — Listing Prep (walk in ready), Listing Marketing (description
  + social package for one listing), Transaction Coordinator (offer to
  keys, nothing slips)

Mark each as ✓ installed or ○ not yet installed (from the registry). For
installed ones show the command(s) to run; for uninstalled ones show
`/install-module <name>` and the one-line reason they'd want it.

There's also a visual version of this page — `dashboard.html` in this
folder, openable in any browser — mention it once, don't push it.

## 3 — Launch

Ask what they want to do. When they pick:
- An installed skill → run that command's procedure right now, in this
  conversation.
- An uninstalled one → offer to run `/install-module` for it (respecting
  its prerequisites — never bypass the install flow).
- "What should I do?" → look at the state from step 1 and suggest the one
  thing most worth doing today (overdue follow-ups beat new content; an
  unfinished interview beats everything).

Keep the whole board under ~20 lines. This is a menu, not a manual.
