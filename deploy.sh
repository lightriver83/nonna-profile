#!/usr/bin/env bash
# Nana — deploy is now automatic via Cloudflare Pages git-connected.
# `git push origin main` triggers a CF Pages build and deploy.
# This script is kept only as a manual fallback.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$REPO_ROOT"

echo "Cloudflare Pages is git-connected to lightriver83/nonna-profile."
echo "Just commit + 'git push origin main' — CF will build automatically."
echo ""
echo "Live URL: https://nonna-profile.pages.dev/"
echo "Dashboard: https://dash.cloudflare.com/?to=/:account/pages/view/nonna-profile"
