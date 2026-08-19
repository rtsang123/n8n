# Market Research

*Turns comparable sold listings into a current-price read for a property or
area — so your matching and your advice reflect what the market is actually
paying, not just what sellers are asking.*

**Requires:** `context-os` installed. Pairs with `monday-skill` if you have
it: weekly-match reads these price reads automatically when matching
listings for a client.

## What it does

Run `/price-check` with a property or an area ("Willoughby townhomes",
"22045 Old Yale Rd"). It builds a price read from comparable **sold**
listings:

1. **You supply the comps.** Search www.searchhomelistings.ca (or your
   board's sold data) yourself and paste in what you find — the module
   walks you through what makes a good comp: same property type, same
   neighbourhood or at least same city, sold in the last 3–6 months.
2. **It does the analysis.** Which comps are strongest and why, what the
   sold-vs-asking gap looks like, a supported price range for the subject —
   with every number traceable to a comp you gave it. It never invents a
   sale or a price.
3. **It saves the read** to `market/price-reads/` with a date. From then
   on, `/weekly-match` (if monday-skill is installed) checks for a current
   read covering a listing's area and adds a price-position line to each
   match: priced under, at, or above what comparable homes actually sold
   for.

## What it creates

```
market/
└── price-reads/    # one dated file per property or area analyzed
```

## Commands it adds

- `/price-check` — build or refresh a price read for a property or area.

## A note on sold data

Sold prices in BC aren't freely scrapable — sites like
www.searchhomelistings.ca serve them to registered users, and automated
extraction can violate their terms. This module never scrapes anything: you
search the site yourself and paste in the comps, same as this package's
MLS stance everywhere else. If your Claude session happens to have web
access and the site is reachable, `/price-check` can offer a live lookup —
clearly labeled, always verified by you before it's treated as fact.

A price read is your working analysis, not an appraisal — say so if you
share it with a client.
