# Contributing
- One folder per article: content/pages/<slug>/index.mdx
- Co-locate images and reference with relative paths (./image.jpg).


## Quick Start (TL;DR)

- **Create a folder**: `content/pages/<slug>/index.mdx`
- **Add front matter (required)**: `title`, `summary`, `category` (single string), `tags` (0–3 strings)
- **Optional**: `featured`, `draft`, `infoboxTitle`, `infoboxCaption`, `infoboxImage`, `infoboxRows`
- **Write content** below the front matter in Markdown/MDX
- **Link internally** using `[[Page Title]]`

## File Layout

- **Article path**: `content/pages/<slug>/index.mdx`
- **Assets**: place alongside `index.mdx` and reference via `./image.png`

## Required Front Matter (Schema)

- **title**: string — Article title displayed on the page
- **summary**: string — One-sentence description used in lists/previews
- **category**: string — Single category that best fits (e.g., `"Wallets"`)
- **tags**: array of strings (0–3) — Topical tags (e.g., `["Bittensor", "Operations"]`)

Minimal required example:

---
title: "Your Article Title"
summary: "One-sentence summary describing the article."
category: "One clear category"
tags: ["Up to", "Three", "Tags"]
---

## Infobox Rows (Optional)

- `infoboxRows` is a list of `{ label, value }` pairs.
- Keep values short; links and brief phrases are best.

Example:

infoboxRows:
  - label: "Purpose"
    value: "What this is used for"
  - label: "Docs"
    value: "https://docs.example.com"

## Content Style Guide

- **Be factual and concise**; avoid opinion unless clearly marked as such
- **Use internal links** with `[[Page Title]]` to connect topics
- **Use headings** (`##`) to structure sections (Overview, Concepts, References)
- **Cite sources** in a References section when applicable
- **Use code fences** for commands or code; keep lines readable

## Pull Request Checklist

- **Front matter present**: `title`, `summary`, `category` (single), `tags` (0–3)
- **No broken links**; internal links use `[[...]]`
- **Images local or trusted URLs**; local assets referenced via `./`
- **Infobox (if present)** uses concise labels/values
- **Spelling/grammar** pass completed
