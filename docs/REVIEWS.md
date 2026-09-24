# Reviews

## Round 3 — React rewrite + content (2026-09-24)

One reviewer (code, accessibility, facts, hygiene) after the Vite + React + TypeScript
rewrite, the Resources tab and 19 new design languages. All checks passed before review
(typecheck, lint, tests, validate, build); findings and what was done:

| # | Severity | Finding | Outcome |
|---|---|---|---|
| 1 | High | `/compare?ids=` looped forever (unstable `setCompare` → effect re-fired; ~2,300 localStorage writes in 3 s) | Fixed: stable `useCallback` that keeps the same array when unchanged; regression test `tests/compare.test.tsx` |
| 2 | High | Focus and scroll reset on every query change (each Compare add/remove) | Fixed: reset on path change only |
| 3 | Med | Notes on removed items stayed in the brief and shipped in share links | Fixed in `toggled` and `cleanBrief`; tests added |
| 4 | Med | "Save as my brief" overwrote a non-empty brief silently | Fixed: confirmation |
| 5 | Med | Corrupt `?s=` link silently showed your own brief | Fixed: "This share link is broken" banner |
| 6 | Med | Section not highlighted on detail pages (NavLink overrode `aria-current`) | Fixed: explicit `aria-current` logic |
| 7 | Med | Duplicate ids in `?ids=` duplicated columns | Fixed: de-duplicated |
| 8 | Med | Resources filters not in the URL; `?focus=` hidden by filters | Fixed: filters in search params, validated; focus shows all |
| 9 | Med | Route announcement read the previous title; NotFound had none | Fixed: pages announce via `useDocumentTitle` |
| 10 | Med | 968 KB entry chunk hidden by a raised warning limit | Fixed: data/react split into cached chunks (largest 312 KB), limit restored. CSS (198 KB, 40 KB gzip) still ships all 47 language sheets |
| 11 | Low | Mobile nav lacked Escape; empty search never showed Purposes | Fixed |
| 12 | Low | Identical "Replay" buttons | Fixed: labelled per demo |
| 13 | Low | In-page `#anchor` links clashed with hash routing | Fixed: `?sec=` routes / buttons |
| 14 | Low | Duplicate React key in language typeface rows | Fixed |
| 15 | Low | Node globals enabled for browser code in ESLint | Fixed: scoped to tools/tests/config |
| 16 | Low | No git / CI; no component tests | Component test added; git/CI left to the owner |
| 17–23 | Facts | Motion listed as fully free; React Bits licence; Penpot plans; Risograph date | Fixed: Motion → free tier; React Bits not open source (MIT + Commons Clause); Penpot → free tier; Risograph → 1980. Google Sans licence, Rotato trial and Plex Condensed year left as they are (unverified) |

## Rounds 1–2 (vanilla version)

Scored by three critics (visual designer, front-end developer, typographer). The per-round
scores were not kept; the round-2 plan is what `docs/SCHEMA.md` lists as "Round 2 additions",
all of which shipped in round 3.
