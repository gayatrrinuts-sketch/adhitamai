# Deploying the Adhitam AI website

The site lives in this `website/` folder — plain HTML/CSS/JS, no build
step, so "deploying" just means pushing these files to a host and pointing
`adhitamai.com` at it. `firebase.json` at the repo root is already set up
for a second Firebase Hosting *site* alongside the app's own (so this
reuses the same GCP project — no new account needed), but the actual site
creation + domain connection are one-time, account-bound steps only you
can do.

## One-time setup (run once, in order)

```bash
firebase login --reauth
firebase hosting:sites:create adhitam-ai-website
firebase target:apply hosting app upsc-ai-507008
firebase target:apply hosting website adhitam-ai-website
```

If `adhitam-ai-website` is already taken (site IDs are globally unique
across all Firebase projects, not just yours), pick another id, e.g.
`adhitam-ai-site`, and use that same id in both the `sites:create` and
`target:apply hosting website` commands above.

## Every deploy after that

```bash
npm run build:web              # rebuilds the app's own web export into dist/
firebase deploy --only hosting
```

`firebase.json` now has two hosting entries (`app` -> `dist/`, `website` ->
`website/`), so this one command deploys both. To deploy only the
marketing site: `firebase deploy --only hosting:website`.

## Connecting adhitamai.com

In the [Firebase Console](https://console.firebase.google.com) →
Hosting → the `adhitam-ai-website` site → **Add custom domain** →
`adhitamai.com`. Firebase will give you a TXT record to verify ownership
and then A/AAAA (or CNAME) records to point at — add those at wherever
`adhitamai.com` is registered (Namecheap, GoDaddy, Google Domains, etc.).
DNS propagation can take anywhere from minutes to ~48 hours; Firebase
auto-provisions the SSL certificate once it verifies.

## Updating content later

Everything is static — edit the `.html`/`.css`/`.js` files directly and
redeploy with the command above. There's no CMS and no build step by
design (the "fast to load" requirement this site was built around).
