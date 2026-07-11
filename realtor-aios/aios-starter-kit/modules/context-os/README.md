# Context OS — Realtor Edition

*Interviews you about your real estate business and builds your AI's memory —
your market, your clients, your processes, and how you want to be seen.*

This is the foundation module of your AIOS. **Install it first.** Everything
that comes after — your voice profile, your marketing content — is built on
what this module learns about you.

## What it does

Context OS runs a guided interview (30–45 minutes, one question at a time, in
plain conversation) covering seven areas of your business:

1. **You and your brokerage** — name, brokerage, team, years in the business,
   designations, where people can find you online.
2. **Your market and farm area** — the cities and neighbourhoods you work,
   the price bands and property types you actually sell, what's happening in
   your market right now.
3. **Your niche and clients** — who you serve best (first-time buyers,
   downsizers, investors, families moving up…), who your ideal client is, and
   where your business actually comes from.
4. **Your listing process** — how you take a seller from first conversation
   to sold, and what you do differently from other agents.
5. **Your buyer process** — how you guide a buyer from first call to keys in
   hand.
6. **Your past content** — where you've posted before, what worked, what
   flopped, and how much posting you've realistically kept up with.
7. **Your positioning** — how you want to be seen in your market, who you're
   up against, and the things you would never say or do in your marketing.

Your answers are saved as plain-text files in the `context/` folder — your
AI's memory. Every module installed after this one reads these files so that
everything it produces is about *your* business, not a generic realtor's.

## What it creates

`context/business-profile.md`, `context/market.md`, `context/clients.md`,
`context/listing-process.md`, `context/buyer-process.md`,
`context/content-history.md`, `context/positioning.md`

## Commands it adds

- `/context-interview` — run the interview (or resume it if you stopped
  partway; it picks up where you left off).
- `/context-update` — quick way to tell your AI something changed ("I moved
  brokerages", "I'm farming Willoughby now") and have the right file updated.

## Before you start

Nothing to prepare. Just block out 30–45 minutes and answer like you're
talking to a new assistant on their first day. You can say "skip" to any
question and come back later.
