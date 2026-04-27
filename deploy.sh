#!/usr/bin/env bash
# Nona — combined push + Cloudflare Pages deploy.
# CF Pages is in Direct Upload mode (NOT git-connected),
# so a plain `git push` does NOT update https://nonna-profile.pages.dev/.
# Always run this script after committing.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

# 1. Refuse to deploy with uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "✗ Uncommitted changes present." >&2
  echo "  Commit (or stash) before running ./deploy.sh." >&2
  exit 1
fi

# 2. Refuse on non-main branches
CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "✗ Not on main (current: $CURRENT_BRANCH)." >&2
  echo "  CF Pages production branch is main." >&2
  exit 1
fi

# 3. Push if local is ahead of origin
git fetch origin main --quiet
LOCAL="$(git rev-parse HEAD)"
REMOTE="$(git rev-parse origin/main)"
if [[ "$LOCAL" != "$REMOTE" ]]; then
  echo "→ Pushing to origin/main..."
  git push origin main
else
  echo "✓ origin/main already in sync, skipping push."
fi

# 4. Deploy to Cloudflare Pages
echo ""
echo "→ Deploying to Cloudflare Pages (Direct Upload)..."
npx wrangler pages deploy "$REPO_ROOT" \
  --project-name=nonna-profile \
  --branch=main \
  --commit-dirty=true

echo ""
echo "✓ Live → https://nonna-profile.pages.dev/"
