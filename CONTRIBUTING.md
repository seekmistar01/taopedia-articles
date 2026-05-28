# Contributing To Taopedia Articles

Thanks for improving Taopedia. This repository is for article content only. Website code, UI, routing, and deployment config belong in:

https://github.com/e35ventura/taopedia

## Quick Start

1. Fork or branch from `main`.
2. Add or edit an article under `content/pages/<slug>/index.mdx`.
3. Use the required front matter.
4. Keep the article factual, concise, and Bittensor-focused.
5. Open a pull request.

## File Layout

```txt
content/pages/<slug>/index.mdx
```

Use lowercase slugs with words separated by underscores when possible:

```txt
content/pages/yuma_consensus/index.mdx
content/pages/dynamic_tao/index.mdx
```

Place images beside the article and reference them with relative paths:

```txt
content/pages/dynamic_tao/
  index.mdx
  emission-flow.png
```

```mdx
![Emission flow](./emission-flow.png)
```

## Required Front Matter

```mdx
---
title: "Dynamic TAO"
summary: "How Dynamic TAO changes subnet tokenomics and incentive allocation in Bittensor."
category: "Tokenomics"
tags: ["Bittensor", "TAO", "Subnets"]
---
```

Required fields:

- `title`: Human-readable article title.
- `summary`: One sentence, preferably under 180 characters.
- `category`: One primary category.
- `tags`: Zero to three topical tags.

Optional fields:

- `featured`: `true` for especially important pages.
- `draft`: `true` to keep unfinished work out of normal publication.
- `infoboxTitle`: Title shown in the article infobox.
- `infoboxCaption`: Short caption below the infobox image.
- `infoboxImage`: URL or local image path.
- `infoboxRows`: List of short `{ label, value }` rows.

## Bittensor Scope

Taopedia is Bittensor-centric. Good topics include:

- TAO
- wallets, coldkeys, and hotkeys
- staking and delegation
- validators and miners
- Yuma Consensus
- Dynamic TAO
- subnets and incentive mechanisms
- Bittensor governance, emissions, and operations

The Taopedia app currently publishes articles when:

- the slug is `taopedia`;
- `tags` includes `Bittensor`;
- or `category` is one of `Bittensor`, `Consensus`, `Staking`, `Subnets`, `Tokenomics`, or `Wallets`.

## Writing Style

- Write for builders, validators, miners, and TAO holders.
- Be factual and direct.
- Define terms before using jargon heavily.
- Prefer short sections with clear headings.
- Use `[[Article Title]]` for internal links.
- Cite official docs or primary sources when making claims.
- Avoid price predictions, investment advice, hype, or unsupported claims.

## Internal Links

Use wiki-style links:

```mdx
See [[Yuma Consensus]] and [[Dynamic TAO]].
```

The app resolves these links to Taopedia article pages and uses them to build backlinks.

## Infobox Example

```yaml
infoboxTitle: Dynamic TAO
infoboxCaption: Subnet tokenomics and emissions.
infoboxRows:
  - label: Network
    value: Bittensor
  - label: Asset
    value: TAO
  - label: Related
    value: "[[Subnets]]"
```

Keep infobox values short. Use the main article body for explanation.

## Pull Request Checklist

- Required front matter is present.
- The article is in `content/pages/<slug>/index.mdx`.
- The topic is Bittensor-related or intentionally marked as a sample/reference page.
- Internal links use `[[...]]`.
- Sources are included for technical or factual claims.
- Images are local or from trusted sources.
- Spelling and grammar have been checked.
- `npm run build:index` succeeds if dependencies are installed.

## Deployment

Merging to `main` updates the article index. Once the Taopedia site rebuild finishes, the live site reflects the new article content.
