#!/usr/bin/env bash
set -euo pipefail

# Find the repository root so changes beside this script are included too.
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
cd -- "$(git rev-parse --show-toplevel)"

if [[ "$(git branch --show-current)" != "development" ]]; then
  echo "Please switch to the development branch before running this script." >&2
  exit 1
fi

git add .
git status --short

if git diff --cached --quiet; then
  echo "No new changes to commit. Pushing any existing commits."
else
  # gc.auto=0 stops OneDrive-related cleanup errors from aborting the script
  git -c gc.auto=0 commit -m "${1:-committing code}"
fi

git -c gc.auto=0 push origin development

# Verify the push actually landed
git fetch origin development --quiet
if [[ -n "$(git log origin/development..development --oneline)" ]]; then
  echo "WARNING: some commits are still not pushed." >&2
  exit 1
fi
echo "Done: development is up to date with origin."