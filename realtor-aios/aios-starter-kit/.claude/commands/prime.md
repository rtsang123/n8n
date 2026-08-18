---
description: Load the AIOS context and start a working session
---

# /prime

Load the whole workspace and open the session. Steps:

1. Read `CLAUDE.md` (workspace rules) and `system/modules.md` (what's
   installed).
2. Read every file in `context/`, including subfolders (skip `context/samples/`
   contents — just note how many samples exist). Pay special attention to
   `context/voice-profile.md` if present.
3. If the `marketing-engine` module is installed, also read
   `content/calendar.md` and list the files in `content/queue/`.
4. If the `lead-engine` module is installed, also read `leads/pipeline.md`
   and note any follow-ups due or overdue today.
5. If the `transaction-coordinator` module is installed, also read
   `deals/pipeline.md` and note any key dates due or overdue today.
6. If the `client-profiles` module is installed, note how many files are in
   `clients/profiles/`.
7. If the `monday-skill` module is installed, also read
   `clients/focus-list.md` and note who's on it.

Then greet the owner **by name** (from `context/business-profile.md`) with a
short status report — plain language, no file paths:

- **Modules:** which of the modules are installed, and which (if any) are
  still waiting to be installed.
- **Your AI's memory:** which parts of their context exist (business profile,
  market, clients, processes, content history, positioning, voice profile)
  and anything that looks empty or stale.
- **Content:** if marketing-engine is installed — what's queued, what's
  planned this week, and whether the week's content has been generated yet.
- **Leads:** if lead-engine is installed — how many follow-ups are due or
  overdue today (overdue first; suggest `/lead-check` if any).
- **Deals:** if transaction-coordinator is installed — how many key dates
  are due or overdue today (suggest `/deal-check` if any).
- **Clients:** if client-profiles is installed — how many buyer profiles
  exist. If monday-skill is also installed, who's on this week's focus list
  (suggest `/weekly-match` if it's been a while or the list is empty).
- **Suggested next actions:** exactly 3, ranked, based on the state above.
  Examples: finish an unfinished interview, add past-content samples, run
  `/content-week` because nothing is planned for this week, or review a
  queued draft.

Keep the whole report under ~15 lines. End by asking what they'd like to do.
