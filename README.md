# The Man of The Gun Archive (TMOTG)

This repository contains the MkDocs source for the TMOTG Archive (Story & Lore), served at https://tmotg.mindshield.ai.

## Branches

- `master`: MkDocs source content (this branch).
- `gh-pages`: Generated static site output (built by CI).

## Build locally

```bash
pip install mkdocs mkdocs-simple-blog mkdocs-redirects
mkdocs serve
```

## Deploy

```bash
mkdocs gh-deploy --clean
```

Deployment is handled automatically from `master` via GitHub Actions and publishes to `gh-pages`. Avoid committing generated site files directly.
