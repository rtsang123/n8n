# 👋 START HERE

Welcome! This guide gets your assessment website live in **under 60 minutes** —
no programming knowledge needed.

## What you're about to launch

A website where visitors:

1. Pick a free assessment (like the Business MRI™)
2. Answer 5 minutes of questions
3. Enter their **name and email** to see results ← *this is how you collect leads*
4. Download a professional PDF report
5. Click **Book a Free AI Audit** ← *this is how you get calls*

## Your 60-minute launch plan

| Step | Time | Guide |
|---|---|---|
| 1. Create free GitHub + Netlify accounts | 10 min | [INSTALLATION.md](INSTALLATION.md) |
| 2. Put this project on GitHub | 10 min | [INSTALLATION.md](INSTALLATION.md) |
| 3. Connect it to Netlify and go live | 15 min | [NETLIFY-DEPLOYMENT.md](NETLIFY-DEPLOYMENT.md) |
| 4. Add YOUR booking link and email | 5 min | below ⬇️ |
| 5. Turn on lead collection | 5 min | [NETLIFY-DEPLOYMENT.md](NETLIFY-DEPLOYMENT.md) |
| 6. Test it yourself | 10 min | below ⬇️ |

## ⚠️ The ONE thing you must change before launch

Open the file `data/config.json`. It looks like this:

```json
"bookingUrl": "https://calendly.com/YOUR-CALENDLY-LINK",
"contactEmail": "raymondtsang.ai@gmail.com",
```

Replace `https://calendly.com/YOUR-CALENDLY-LINK` with **your real booking
link** (Calendly is free at calendly.com). Every "Book a Free AI Audit"
button on the whole site points there.

While you're in that file, you can also change your business name and
tagline. Just edit the words between the quotation marks — nothing else.

## How to test before sharing

1. Open your live website on your **phone** (most visitors will be on phones)
2. Take the Business MRI™ yourself, start to finish
3. Enter your own name and email at the results step
4. Download the PDF and open it
5. Click "Book my free AI Audit" — it should open YOUR calendar
6. Check Netlify → your site → **Forms** → you should see your own name and email

If all six work: **you're live.** Share the link everywhere.

## Want to customize more?

- Change questions → [HOW-TO-CHANGE-QUESTIONS.md](HOW-TO-CHANGE-QUESTIONS.md)
- Change colors → [HOW-TO-CHANGE-COLORS.md](HOW-TO-CHANGE-COLORS.md)
- Change the logo → [HOW-TO-CHANGE-LOGO.md](HOW-TO-CHANGE-LOGO.md)
- Add a brand-new assessment → [HOW-TO-ADD-A-NEW-ASSESSMENT.md](HOW-TO-ADD-A-NEW-ASSESSMENT.md)
- Something broke? → [COMMON-PROBLEMS.md](COMMON-PROBLEMS.md)
