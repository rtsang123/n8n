# How to Add a New Assessment

**Time needed: 20–30 minutes** (most of it writing your questions).

Adding a new lead magnet = duplicating one file + adding two short lines
to a list. That's the whole job.

## Step 1 — Duplicate an existing assessment file

1. On GitHub, open `data/assessments/` and click the file most similar to
   your idea:
   - Score-style quiz → copy `ai-readiness.json`
   - Calculator with dollar amounts → copy `time-leak.json`
2. Select all the text in the file and copy it
3. Go back to the `data/assessments` folder → **Add file → Create new file**
4. Name it something short with hyphens, e.g. `referral-readiness.json`
5. Paste, then edit (see Step 2)

## Step 2 — Make it yours

Edit these parts (full editing rules are in
[HOW-TO-CHANGE-QUESTIONS.md](HOW-TO-CHANGE-QUESTIONS.md)):

1. `"id"` at the very top — **must exactly match the file name without
   `.json`**, e.g. `"referral-readiness"`
2. `"title"`, `"tagline"`, `"description"`, `"icon"` — what visitors see
3. `"categories"` — the 2–8 areas you'll score, each with its own
   low-score recommendation
4. `"questions"` — your questions (each `"category"` must match a category `"id"`)
5. `"bands"` — the result text, estimates and 30-day plan for low /
   medium / high scorers
6. `"tools"` — the AI tools you recommend

**Shortcut:** paste a whole existing file into ChatGPT or Claude and say:
*"Using this exact JSON structure, create a 12-question assessment called
'Referral Readiness Score' for service businesses, with 4 categories and
3 score bands."* Then paste the result into your new file.

## Step 3 — Register it (the only 2 lines of "code")

1. Open the file `lib/assessments.ts` and click the pencil ✏️
2. You'll see a block of lines like this — **copy one line and change the
   two names**:

```ts
import customerExperience from '@/data/assessments/customer-experience.json';
// add yours below it:
import referralReadiness from '@/data/assessments/referral-readiness.json';
```

3. Just below, there's a list. Add your name to it (mind the comma):

```ts
	marketingEfficiency,
	customerExperience,
	referralReadiness,
];
```

4. **Commit changes.** Netlify rebuilds and your new assessment appears
   on the homepage automatically, with its own page, scoring, PDF report
   and lead capture. Nothing else to configure.

## Removing an assessment

Do the reverse: delete its import line and its name from the list in
`lib/assessments.ts`. (You can leave the JSON file in place — it's simply
ignored.)
