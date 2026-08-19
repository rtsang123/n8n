# Transaction Coordinator

*Tracks every active deal's key dates and drafts the client updates that
keep buyers and sellers calm between offer and close.*

**Requires:** `context-os` AND `brain-clone` installed. Works standalone,
but if `lead-engine` is installed a deal can link back to the lead it came
from.

## What it does

The gap between an accepted offer and a closed sale is where deals quietly
go sideways — a missed condition date, a buyer who goes quiet and gets
nervous, a seller who hears nothing for two weeks. Transaction Coordinator
runs the same two-command rhythm as Lead Engine, aimed at this later stage:

**`/open-escrow`** — the moment an offer is accepted. Tell it the property,
the parties, and the key dates that apply (condition/subject removal,
financing, inspection, possession — whatever's real for this deal). It
saves a deal record and drafts the "we're in escrow" update for your
client, in your voice.

**`/deal-check`** — your regular sweep. Flags every date due or overdue,
and drafts the client-facing update for each — a status check, a reminder
of what's needed from them, or, on closing, a congratulations message.

This module doesn't generate or check legal documents or contract language
— it tracks the dates you give it and writes the plain-language updates
around them. Paperwork stays with your brokerage's systems.

## What it creates

```
deals/
├── pipeline.md   # every active deal, next key date, one line each
├── active/       # one file per deal in progress
└── closed/       # closed deals, archived
```

## Commands it adds

- `/open-escrow` — start tracking a newly accepted offer.
- `/deal-check` — the regular sweep: what's due, updates drafted.
