# ClearCo-copy audit: design-system-refresh (Markdown case study)

**File:** [`src/content/caseStudies/design-system-refresh.md`](../../src/content/caseStudies/design-system-refresh.md)  
**Frame node:** N/A (source is Markdown, not Figma)  
**Audited:** 2026-04-16

## Product / design context

**Assumptions (no separate brief provided):** This is a **portfolio case study** for recruiters, hiring managers, or design peers—not in-product UI. The ClearCo standard is written primarily for **UI labels**; this audit applies **plain language**, **sentence case**, **terminology**, and **list** rules where they reasonably extend to marketing/portfolio prose. Headings follow common case-study section titles (single words); link text is treated as **UI-like** because it renders as a clickable label on the site.

## Summary

- Copy units reviewed: ~28 (title, description, link label, tags, 5 section headings, 3 body paragraphs, 11 list items) | **Violations: 3** | **Suggestions: 2**
- [ ] Ready to apply accepted **violation** text changes (edit Markdown directly; no `nodeId` / Figma apply)

> Figma Phase B (`figma_set_text`, version save) does **not** apply to this file.

## Findings (violations only)

| # | Layer / context | nodeId | Current text | Violation | Guideline | Recommended text | Accept |
|---|-----------------|--------|--------------|-----------|-----------|------------------|--------|
| 1 | Outcome — bullet 3 | N/A | `Established a monthly office hours for contributions and deprecations.` | **Grammar / clarity:** "office hours" is plural; **"a monthly office hours"** is not idiomatic English. | ClearCo plain language — clear, simple wording | `Established monthly office hours for contributions and deprecations.` (or `Held monthly office hours…`) | |
| 2 | Frontmatter — link label | N/A | `Figma file (placeholder)` | **Link text:** Placeholder parenthetical is not ship-ready; primary actions favor **verb + object** where the control is link-like. | ClearCo action-verb / label patterns | `View Figma file` or `Open in Figma` (remove “placeholder” when you have a real URL) | |
| 3 | Outcome — bullet 2 | N/A | `…on net-new flows…` | **Jargon:** “net-new” is insider product slang; portfolio copy should stay readable for a general hiring audience. | ClearCo plain language — everyday words | `…on new flows…` or `…on brand-new flows…` (pick the meaning you intend) | |

## Suggestions *(optional)*

| # | Location / element | nodeId | Idea | Rationale (guideline ref) | Accept / do later |
|---|-------------------|--------|------|---------------------------|-------------------|
| S1 | Process — bullet 3 (`codemods`) | N/A | If the audience includes non-engineers, consider a short gloss: e.g. “automated code updates (codemods) where possible” on first use. | Plain language — define necessary technical terms | do later |
| S2 | Tags | N/A | Keep **sentence case** for parity with UI: e.g. `Accessibility` → `Accessibility` is fine as a topic tag; ensure both tags follow the same convention (`Design systems` is already sentence case). | ClearCo §2.1 Capitalization | optional |

## Notes

- **No `nodeId`:** Apply any accepted rows by editing the Markdown file in the repo.
- **Curly quotation marks** around `uses system` are typography for narrative text; straight quotes are typical in UI strings—no change required unless you align with a repo-wide style.
- **Contrast / truncation (Tier C):** Not assessed here; validate in the browser with your deployed CSS (e.g. Stark, WebAIM).
