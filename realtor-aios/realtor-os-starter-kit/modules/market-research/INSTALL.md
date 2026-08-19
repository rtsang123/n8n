# INSTALL — Market Research

Module: market-research
Version: 1.0.0
Requires: context-os
Installs commands: /price-check

## Install steps

1. Verify `context/market.md` exists (context-os installed and the market
   part of the interview done). If it doesn't, STOP — do not install — and
   tell the owner to run `/context-interview` first: a price read needs to
   know what market it's reading.

2. Create `market/price-reads/` with a one-line `README.md`: "One dated
   price read per property or area — created by /price-check."

3. Copy `modules/market-research/commands/price-check.md` into
   `.claude/commands/`.

4. Update the registry (`system/modules.md`) per the `/install-module`
   procedure.

5. Tell the owner how it connects: run `/price-check` before a pricing
   conversation or when a client's area feels like it's moving. If
   `monday-skill` is installed, `/weekly-match` will automatically use any
   current read covering a match's area — no extra step.

## After install

Try it on the area you know best: run `/price-check`, paste 3–5 recent
sold comps from www.searchhomelistings.ca, and sanity-check the read
against your own gut. If they disagree, trust your gut and tell Claude
why — it'll sharpen the analysis.
