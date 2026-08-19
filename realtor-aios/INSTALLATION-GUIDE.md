# Your Realtor AIOS — Setup Guide

Welcome! This guide walks you from a normal computer to a working AI
assistant that knows your business, writes in your voice, and drafts your
weekly marketing. No technical experience needed — if you can install an app
and type a message, you can do this.

**Time needed:** about 2 hours total, and you don't have to do it in one
sitting. The natural break points are marked.

**If you get stuck at any point,** stop and contact your consultant at
TsangAIConsulting — that's what we're here for. Nothing you can type will
break anything.

---

## What you're setting up (30 seconds of background)

Your AIOS ("AI Operating System") is a folder on your computer plus an app
called **Claude Code**. The folder holds your AI's memory of your business;
the app is where you talk to it. You'll install four "modules" — think of
them as training courses your AI takes:

1. **Context OS** — it interviews you and learns your business.
2. **Brain Clone** — it learns to write the way *you* write.
3. **Marketing Engine** — it researches topics and drafts your weekly
   Facebook and LinkedIn content.
4. **Lead Engine** — it captures every inquiry the moment it arrives,
   drafts your reply in your voice, and makes sure no follow-up slips.

The order matters, and the system enforces it — so you can't get it wrong.

## Before you start — your checklist

- [ ] Your computer (Mac or Windows), connected to the internet.
- [ ] Your **Claude account** login. Your consultant set this up with you —
      if you don't have it, stop and ask before going further.
- [ ] The **`realtor-aios` folder** your consultant gave you, copied
      somewhere easy to find — your Desktop or Documents folder is perfect.
      Inside it you should see this guide, a folder called
      `realtor-os-starter-kit`, a folder called `dashboard`, and a README file.
- [ ] For Step 5 you'll want **5–10 pieces of your past content** — old
      Facebook posts, Instagram captions, emails to clients, your website
      bio. You can gather these later, but grabbing them now saves a trip.

---

## Step 1 — Install Claude Code (10 minutes)

1. Open your web browser and go to **claude.com/claude-code**.
2. Click the **Download** button for the desktop app and choose your
   computer type (Mac or Windows) if asked.
3. Open the downloaded file and follow the installer — the same clicks as
   installing any app (Next, Next, Finish / drag to Applications on a Mac).
4. Open Claude Code from your Applications (Mac) or Start menu (Windows).

**What you'll see:** a welcome screen asking you to sign in.

**If something looks wrong:** the download page looking different from this
description is fine — pages change; just look for a Claude Code download for
Mac/Windows. If the app won't open, restart your computer and try once more,
then call your consultant.

## Step 2 — Sign in (2 minutes)

1. Click **Sign in** and log in with your Claude account (the one from your
   checklist).
2. Approve anything it asks in your browser, then return to the app.

**What you'll see:** after signing in, Claude Code asks you to **open a
folder** (it may say "Open project" or show a recent-folders list).

**If something looks wrong:** wrong account or forgotten password — contact
your consultant rather than creating a new account; your subscription is
attached to the right one.

## Step 3 — Open your AIOS workspace (2 minutes)

1. In Claude Code, choose **Open folder / Open project**.
2. Navigate to where you copied the `realtor-aios` folder, open it, and
   select the folder inside it called **`realtor-os-starter-kit`**. That exact
   folder — not `realtor-aios` itself, and not anything inside
   `realtor-os-starter-kit`.
3. If Claude Code asks whether you trust this folder, say **yes/trust** —
   it's your folder, from your consultant.

**What you'll see:** a chat window, like a messaging app. There's a box at
the bottom where you type. This is where everything happens from now on.

**If something looks wrong:** the most common mistake in this whole guide is
opening the wrong folder. If anything in the next step says it can't find a
module, close and reopen — and pick `realtor-os-starter-kit` this time.

## Step 4 — Install Context OS and do your interview (45–60 minutes)

*Block out proper time for this one — it's the foundation. Grab a coffee.*

1. Click in the typing box, type exactly this, and press Enter:

   ```
   /install-module context-os
   ```

   (When you type `/`, a little menu may pop up suggesting commands — you
   can click `install-module` from there too. Same thing.)

2. Claude will describe what it's doing in plain English, and may ask
   permission to create files — that's it building your AI's memory folder.
   Click **Yes / Allow** when asked.

3. It will then offer to start your interview. Say yes when you're ready.

4. Answer the questions like you're talking to a new assistant on their
   first day. There are no wrong answers, and you can type **skip** for
   anything you want to come back to. It covers your brokerage, your market
   and farm area, your clients, how you handle listings and buyers, your
   past posting, and how you want to come across.

**What you'll see:** one question at a time, and every so often a note like
"Saved — that's your market profile done." That's your answers being written
into your AI's memory.

**If something looks wrong:** if the interview gets interrupted — computer
sleeps, you close the app, life happens — nothing is lost. Reopen, type
`/context-interview`, and it picks up where you left off. If typing
`/install-module` gets a confused response instead of an install, you're in
the wrong folder — back to Step 3.

*☕ Natural break point. Everything is saved.*

## Step 5 — Install Brain Clone and capture your voice (30–45 minutes)

*Have your 5–10 pieces of past content ready (checklist item). Don't clean
them up — the unpolished you is the one it needs to learn.*

1. Type:

   ```
   /install-module brain-clone
   ```

2. When it's done installing, it will offer to start the voice capture. Type:

   ```
   /brain-dump
   ```

3. **First it collects your samples:** paste in your past posts and emails
   one at a time — just copy from Facebook/your email and paste into the
   chat box.
4. **Then the brain-dump interview:** this one is about opinions, not facts —
   your hot takes on your market, stories you always tell, phrases you use,
   what makes you cringe in other agents' marketing. Be honest; the spice is
   the point.
5. **Then it shows you a test post** and asks "does this sound like you?"
   **Be picky.** Every correction you give makes your clone sharper. Keep
   going until you read one and think "…I'd post that."

**What you'll see:** at the end, confirmation that your voice profile is
saved. From now on, everything it writes for your clients or audience uses
that profile.

**If something looks wrong:** if it says it needs Context OS first, Step 4
didn't finish — type `/context-interview` and complete it. If the test posts
don't sound like you even after corrections, that's a conversation for your
consultant — it usually means it needs a few more samples.

*☕ Natural break point.*

## Step 6 — Install the Marketing Engine (5 minutes)

1. Type:

   ```
   /install-module marketing-engine
   ```

2. Approve the file creations it asks for. This one has no interview — it's
   quick.

**What you'll see:** confirmation that the marketing engine is ready, and a
suggestion to run `/content-week`. Resist for one moment — two quick steps
first, they're worth it.

**If something looks wrong:** if it refuses to install because there's no
voice profile, Step 5 didn't finish — run `/brain-dump` and complete the
calibration.

## Step 7 — Install the Lead Engine (10 minutes)

1. Type:

   ```
   /install-module lead-engine
   ```

2. Approve the file creations. It will then offer to **practice once** —
   take it up on that: paste in any real inquiry you've received (an old
   one is fine), and watch it capture the lead and draft your reply in
   your voice.

**What you'll see:** a tidy "lead card" made from your pasted inquiry, a
ready-to-send reply, and a follow-up schedule. From now on, the habit is:
inquiry arrives → paste it into `/log-lead` → copy the reply and send it.
Each morning, type `/lead-check` — it tells you exactly who's due for a
follow-up and writes the messages for you. Five minutes.

**If something looks wrong:** same as Step 6 — if it refuses to install,
finish `/brain-dump` first.

## Step 8 — Your first `/prime` (2 minutes)

`/prime` is how you'll start every session from now on. Type:

```
/prime
```

**What you'll see:** it greets you by name and gives you a short status
report — your four modules installed, what your AI knows about you, any
follow-ups due today, and three suggested next actions. This is your daily
front door: open Claude Code, `/prime`, go.

## Step 9 — Your first content (15–30 minutes)

Type:

```
/content-week
```

Here's what happens, in order:

1. It researches what's working in your niche right now (it may show you
   topics and ask you to approve them, or ask you to paste in posts you've
   seen doing well — your feed counts as research).
2. It proposes a simple week: **Monday** market insight, **Wednesday**
   story, **Friday** educational post — each written for both Facebook and
   LinkedIn, in your voice.
3. It shows you the drafts. Tweak anything by just telling it ("make Monday's
   shorter", "I'd never say 'folks'").
4. Anywhere it needed a number it didn't have, you'll see a placeholder like
   `[YOUR STAT: …]` — fill those in; it will never make numbers up.

**Posting is copy-and-paste:** on each planned day, copy the post, paste it
into Facebook or LinkedIn, post it, and tell Claude "posted" so it files it
away in your archive.

**That's your routine now:** each morning, two minutes — `/prime`, then
`/lead-check` if anything's due. Once a week, 15–30 minutes —
`/content-week`, review, done. If three posts a week is too much, say so —
it will shrink the plan. The rhythm you keep beats the rhythm you quit.

---

## Your dashboard

Inside the `realtor-aios` folder there's a folder called `dashboard` with a
file called **`dashboard.html`**. Double-click it — it opens in your web
browser and shows your AIOS at a glance: modules, voice profile status, and
your content week. (It's a companion view with example data your consultant
tailors for you — your real work always lives in Claude Code.)

## Quick answers

- **"I closed everything — did I lose my work?"** No. Everything is saved as
  files in your folder the moment it happens. Reopen Claude Code, `/prime`.
- **"It's asking permission to create/edit a file."** Normal — that's it
  writing to your AIOS folder. Allow it.
- **"A command does nothing / isn't recognized."** You're almost certainly
  in the wrong folder — Step 3, choose `realtor-os-starter-kit`.
- **"My business changed — new brokerage, new focus."** Just type
  `/context-update` and tell it what changed.
- **"The content is starting to sound off."** Type `/voice-check` and be
  picky again. Voices drift; two minutes re-tunes it.
- **"A lead just came in and I'm busy."** That's exactly the moment: paste
  it into `/log-lead` — thirty seconds now beats a lost lead tonight.
- **Anything else:** your consultant at TsangAIConsulting. Seriously — that's
  part of what you're paying for.
