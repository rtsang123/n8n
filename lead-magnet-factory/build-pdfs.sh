#!/usr/bin/env bash
# TsangAI Lead Magnet Factory — PDF builder
# Renders every magnet in magnets/ to a print-ready PDF in dist/.
#
# Usage:   ./build-pdfs.sh              (build all)
#          ./build-pdfs.sh magnets/01-business-ai-scorecard.html   (build one)
#
# Requires Chrome or Chromium. Override the binary with:  CHROME=/path/to/chrome ./build-pdfs.sh
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
  for candidate in chromium chromium-browser google-chrome google-chrome-stable \
    "/opt/pw-browsers/chromium" \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
    if command -v "$candidate" >/dev/null 2>&1 || [ -x "$candidate" ]; then
      CHROME="$candidate"
      break
    fi
  done
fi
if [ -z "$CHROME" ]; then
  echo "Error: Chrome/Chromium not found. Set CHROME=/path/to/chrome" >&2
  exit 1
fi

mkdir -p dist
files=("${@:-}")
if [ -z "${files[0]:-}" ]; then
  files=(magnets/*.html)
fi

for f in "${files[@]}"; do
  name="$(basename "$f" .html)"
  "$CHROME" --headless --disable-gpu --no-sandbox \
    --print-to-pdf="dist/$name.pdf" --no-pdf-header-footer \
    "file://$PWD/$f" >/dev/null 2>&1
  echo "built dist/$name.pdf"
done
