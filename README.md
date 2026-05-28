# Taopedia Articles

This repository contains the public MDX article source for Taopedia, a Bittensor-focused knowledge base.

Website app:

https://github.com/e35ventura/taopedia

Live site:

https://taopedia.org

## How This Repo Works

- Contributors add and edit articles in this repository.
- Articles are stored as MDX files under `content/pages`.
- The Taopedia app syncs Bittensor-focused articles from this repo during its Netlify build.
- When changes land on `main`, the Taopedia site is rebuilt from the latest approved content.

## Article Layout

Each article gets its own folder:

```txt
content/pages/<slug>/index.mdx
```

Optional images or supporting files can live beside the article:

```txt
content/pages/<slug>/
  index.mdx
  diagram.png
```

Reference local assets with relative paths such as `./diagram.png`.

## Required Front Matter

```mdx
---
title: "Your Article Title"
summary: "One clear sentence describing the article."
category: "Bittensor"
tags: ["Bittensor", "Wallets"]
---
```

Required fields:

- `title`: Display title.
- `summary`: Short description used in listings and search.
- `category`: One primary category.
- `tags`: Zero to three topical tags.

Optional fields:

- `featured`
- `draft`
- `infoboxTitle`
- `infoboxCaption`
- `infoboxImage`
- `infoboxRows`

## What Gets Published

Taopedia is Bittensor-centric. The app currently publishes articles when:

- the slug is `taopedia`;
- `tags` includes `Bittensor`;
- or `category` is one of `Bittensor`, `Consensus`, `Staking`, `Subnets`, `Tokenomics`, or `Wallets`.

General sample articles may stay in this repo, but they will not appear on Taopedia unless they match the sync rules above.

## Local Checks

Install dependencies:

```bash
npm install
```

Build the article index:

```bash
npm run build:index
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).
