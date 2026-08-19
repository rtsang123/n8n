---
description: Test and tune your voice profile with a quick sample post
---

# /voice-check

Quick calibration loop for the voice profile.

1. Read `context/voice-profile.md`. If it doesn't exist, stop and point the
   owner to `/brain-dump`.
2. Ask what to test with, or if `$ARGUMENTS` has a topic, use it. If they
   don't care, pick something current from `context/market.md`.
3. Write ONE short Facebook-style post on that topic, following the profile
   exactly.
4. Ask: "Does this sound like you? Be picky — tell me the exact words or
   lines that feel off."
5. For every correction, fix the PROFILE, not just the post: adjust the
   relevant tone dial, add/remove a signature phrase, extend the never-do
   list. Show them what you changed in plain language.
6. Regenerate the post with the updated profile. Loop until they're happy.
7. Update the `Last tuned:` date at the bottom of the profile.
