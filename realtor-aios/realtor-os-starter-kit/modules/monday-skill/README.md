# Monday Skill

*Your weekly ritual: pick who you're focused on this week, then match new
listings against what each of them actually wants.*

**Requires:** `context-os` and `client-profiles` installed. `brain-clone` is
optional — if it's installed, this module can also draft the client-facing
email presenting the matches, in your voice; if not, it just shows you the
research and you write the email yourself.

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
   If the `market-research` module is installed and you have a current
   price read for the area, each match also gets a price-position line:
   under, at, or above what comparable homes actually sold for.
4. **Cheap re-runs.** Each profile keeps a dated search log. Next time you
   run this for the same client, it only analyzes what's new since last
   time — previously-shown listings get a one-line "still active" reminder,
   not a full re-analysis, unless something material changed (a price drop
   gets surfaced even on a repeat listing — that's real news, not noise). If
   something you showed before doesn't turn up in a fresh search, it's
   flagged as likely sold or delisted rather than silently disappearing.
5. **An email, in your voice — optional.** If `brain-clone` is installed, it
   can draft the client email presenting the matches: subject line, body,
   in your voice, same truth rules as everywhere else. If a Gmail connector
   happens to be available in your Claude session, it'll offer to create it
   as a real **draft** in your Gmail — staged for you to review and send,
   never sent automatically. Most installs won't have that connector, and
   that's fine: it just shows you the email as text to copy and paste
   instead, same as the rest of this product.
6. **A PDF, optional.** A client-ready report — their criteria, this week's
   matches with reasoning, borderline mentions kept separate, anything
   delisted, and a closing note in your voice. Saved to `clients/reports/`.

## What it creates

`clients/reports/` (only if you use the PDF export) — otherwise nothing new
on install; it mainly reads and writes to `clients/profiles/*.md`
(specifically each profile's `## Search log` section).

## Commands it adds

- `/weekly-match` — the whole ritual: manage your focus list, search, match,
  optionally draft the email and export a PDF, update the logs. (Call it
  whatever day you actually run it.)

## A note on listing data

MLS data isn't public or freely scrapable — it's licensed to you through
your board, and automated scraping can violate MLS Terms of Service and
board conduct rules. This module never scrapes anything itself. Pasting in
your own MLS export is the default and the recommended path; the live
web-search option only ever touches public-facing listing sites and always
comes with a reminder to verify against your MLS before you act on it.

## A note on the Gmail draft

This module does not connect to Gmail (or any email account) by default —
that's a deliberate choice, same as the no-CRM, no-scraping stance above.
Handing an AI real access to draft or send from your inbox is a bigger
trust step than anything else in this product, and most realtors will
never need it: copying a drafted email into whatever you already use to
send mail takes seconds. If your Claude setup happens to have a Gmail
connector available, `/weekly-match` will offer to use it — but only to
create a **draft**, never to send, and only when you say yes each time.

## Before you start

Have at least one client profile built (`/build-profile`, from the
`client-profiles` module) and, ideally, a recent listing export from your
MLS search handy for your first run.
