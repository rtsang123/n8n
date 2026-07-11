---
description: Update your business context when something changes
---

# /context-update

The owner wants to update their AI's memory. What they said: `$ARGUMENTS`

1. If `$ARGUMENTS` is empty, ask: "What's changed in your business?" —
   otherwise work from what they gave you.
2. Work out which `context/` file(s) the change belongs to (see the table in
   `context/README.md`). Read the current file(s) first.
3. Apply the update surgically: change or add only what's affected. Never
   rewrite a whole file for a one-line change, and never delete existing
   content unless the owner says it's no longer true.
4. Update the `Last updated:` line at the bottom of each touched file.
5. Confirm in plain language what you changed and where it now lives — e.g.
   "Updated your business profile: you're now with [brokerage]. Your market
   and positioning files still look right — say the word if those changed
   too."
6. If the change is big enough to affect their voice or marketing (new
   brokerage, new niche, new farm area), remind them their next generated
   content will reflect it automatically.
