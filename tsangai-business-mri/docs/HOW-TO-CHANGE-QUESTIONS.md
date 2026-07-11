# How to Change Questions

**Time needed: 5 minutes per change. No coding.**

Every assessment lives in ONE file inside the `data/assessments` folder:

| Assessment | File |
|---|---|
| Business MRI™ | `business-mri.json` |
| AI Readiness Score™ | `ai-readiness.json` |
| AI Time Leak Calculator™ | `time-leak.json` |
| AI ROI Calculator™ | `ai-roi.json` |
| Website Conversion Score™ | `website-conversion.json` |
| LinkedIn Authority Score™ | `linkedin-authority.json` |
| Founder Dependency Score™ | `founder-dependency.json` |
| Lead Response Score™ | `lead-response.json` |
| Marketing Efficiency Score™ | `marketing-efficiency.json` |
| Customer Experience Score™ | `customer-experience.json` |

## Editing a file directly on GitHub (easiest way)

1. Open your repository on **github.com**
2. Click into `data` → `assessments` → the file you want
3. Click the **pencil icon** (✏️ top right of the file view)
4. Make your changes (see rules below)
5. Click **Commit changes**
6. Netlify rebuilds your site automatically — live in ~3 minutes

## What a question looks like

```json
{
  "id": "ops-1",
  "category": "operations",
  "text": "How are your day-to-day processes documented?",
  "options": [
    { "label": "They're not — everything lives in people's heads", "points": 0 },
    { "label": "A few notes here and there", "points": 1 },
    { "label": "Key processes are written down", "points": 2 },
    { "label": "Clear, up-to-date checklists for almost everything", "points": 3 }
  ]
}
```

**To change the question:** edit the words after `"text":`
**To change an answer:** edit the words after `"label":`
**Points:** `0` = worst answer, `3` = best answer. The scoring adjusts
automatically — you never need to do math.

## The 3 golden rules (this is 99% of what goes wrong)

1. **Only edit text between quotation marks.** Don't delete the quotes,
   colons, commas or curly braces around them.
2. **Keep the straight quotes** `"` — if you write in Word first, it may
   convert them to curly quotes `“ ”` which break the file. Type directly
   in GitHub instead.
3. **Commas separate items.** Every `{ ... }` block has a comma after it
   **except the last one** in a list.

> **Safety net:** GitHub shows a red ❌ on the file after committing if
> the format is broken, and the Netlify build will fail loudly (your live
> site stays untouched). Fix the file, commit again, and all is well. You
> can also paste the whole file into ChatGPT/Claude and ask
> *"fix the JSON syntax in this file"*.

## Other things you can change in the same file

- `"title"`, `"tagline"`, `"description"` — what visitors see on the cards and intro
- `"icon"` — the emoji (pick any from emojipedia.org)
- `"bands"` — the result texts, hours-saved and revenue estimates per score range
- `"actionPlan"` — the 30-day plan bullets for each score range
- `"tools"` — the recommended AI tools in the report
- `"recommendation"` inside each category — the advice shown when that area scores low

## Adding or removing a question

- **Remove:** delete the whole `{ ... }` block including its trailing comma.
- **Add:** copy an existing question block, paste it after another one
  (mind the commas), give it a new unique `"id"` (e.g. `"ops-4"`), and use
  an existing `"category"` id from the top of the file.

That's it — scores, progress bars and the PDF adapt automatically.
