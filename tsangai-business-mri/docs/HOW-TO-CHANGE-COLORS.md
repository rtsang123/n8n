# How to Change Colors

**Time needed: 3 minutes.**

All the site's colors come from ONE file: `data/config.json`.

## Step by step

1. On GitHub, open `data/config.json` and click the pencil ✏️
2. Find the colors section:

```json
"colors": {
  "brand": "#0A6CFF",
  "brandDark": "#0752C4",
  "brandLight": "#E8F1FF",
  "accent": "#0BBF7A"
}
```

3. Replace the codes with your own (keep the `#` and the quotes)
4. **Commit changes** — done. Buttons, bars, links and the PDF header all update.

## What each color does

| Name | Used for | Tip |
|---|---|---|
| `brand` | Buttons, links, progress bars, PDF header | Your main brand color |
| `brandDark` | Buttons when hovered | A darker version of `brand` |
| `brandLight` | Soft background highlights | A very pale version of `brand` |
| `accent` | Success/"good score" green | Leave as-is unless it clashes |

## How to find your color codes

1. Go to **htmlcolorcodes.com** (free)
2. Pick your color — you'll get a code like `#B45309`
3. For `brandDark`: use the same page to pick a noticeably darker shade
4. For `brandLight`: pick a very pale, almost-white shade of the same color

**Shortcut:** ask ChatGPT or Claude —
*"My brand color is #B45309. Give me a darker shade and a very light background tint as hex codes."*

## Ready-made palettes (copy-paste)

**Trust Blue (default)** — `#0A6CFF` / `#0752C4` / `#E8F1FF` / `#0BBF7A`
**Professional Navy** — `#1E3A8A` / `#172B66` / `#E7ECFA` / `#0BBF7A`
**Modern Emerald** — `#047857` / `#035C43` / `#E2F5EE` / `#0A6CFF`
**Premium Purple** — `#6D28D9` / `#5521A8` / `#F0E9FC` / `#0BBF7A`
**Bold Orange** — `#C2410C` / `#9A3409` / `#FCEDE4` / `#0BBF7A`

(Order: brand / brandDark / brandLight / accent)
