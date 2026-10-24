#!/usr/bin/env bash
set -euo pipefail

# Find the repository root so changes beside this script are included too.
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
cd -- "$(git rev-parse --show-toplevel)"

if [[ "$(git branch --show-current)" != "main" ]]; then
  echo "Please switch to the main branch before running this script." >&2
  exit 1
fi

git add .
git status

if git diff --cached --quiet; then
  echo "No new changes to commit. Pushing any existing commits."
else
  git commit -m "${1:-committing code}"
fi

git push origin main
