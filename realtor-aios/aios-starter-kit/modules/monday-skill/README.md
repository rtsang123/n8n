# Monday Skill

*Your weekly ritual: pick who you're focused on this week, then match new
listings against what each of them actually wants.*

**Requires:** `context-os` and `client-profiles` installed. `brain-clone` is
optional — if it's installed, this module can also draft the client-facing
message presenting the matches, in your voice; if not, it just shows you the
research and you write the message yourself.

## What it does

Run it any day — "Monday" is the habit, not a requirement. One command:

1. **Your focus list.** Shows who you're currently following up with (it
   remembers from last time), and asks if anyone should be added or dropped.
   Add anyone with a profile in `clients/profiles/`.
2. **New listings, your way.** For each person on the list, you choose how
   to search: **paste in a listing export** from your own MLS search (the
   default — no integration, no accounts, just paste), or **a live web
   search of public listing sites** when your Claude session has web access
   (clearly labeled as public-facing results, not real MLS data — always
   verify against your board's system before acting on anything).
3. **Matches, with reasoning.** For each client, it shows which new listings
   fit their profile and *why* — which criteria matched, which are close but
   not exact. It never invents a detail that wasn't in what you gave it.
4. **Cheap re-runs.** Each profile keeps a dated search log. Next time you
   run this for the same client, it only analyzes what's new since last
   time — previously-shown listings get a one-line "still active" reminder,
   not a full re-analysis, unless something material changed (a price drop
   gets surfaced even on a repeat listing — that's real news, not noise). If
   something you showed before doesn't turn up in a fresh search, it's
   flagged as likely sold or delisted rather than silently disappearing.

## What it creates

Nothing new on install — it reads and writes to `clients/profiles/*.md`
(specifically each profile's `## Search log` section).

## Commands it adds

- `/weekly-match` — the whole ritual: manage your focus list, search, match,
  update the logs. (Call it whatever day you actually run it.)

## A note on listing data

MLS data isn't public or freely scrapable — it's licensed to you through
your board, and automated scraping can violate MLS Terms of Service and
board conduct rules. This module never scrapes anything itself. Pasting in
your own MLS export is the default and the recommended path; the live
web-search option only ever touches public-facing listing sites and always
comes with a reminder to verify against your MLS before you act on it.

## Before you start

Have at least one client profile built (`/build-profile`, from the
`client-profiles` module) and, ideally, a recent listing export from your
MLS search handy for your first run.
