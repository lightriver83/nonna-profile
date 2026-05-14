# Nana — Company Profile (Classroom Example)

A one-page scrollytelling website that plays the role of a **textbook-correct company profile** for an English-course group project.

The "company" is fictional. Everything on the page is designed to be a concrete, teachable example of the rules covered in `2026-04-13_Company_Profile_Complete.md` (Part 1: Company Profile, Part 2: Mission & Vision, Part 3: Public Speaking).

**Live:** [nanakitchen.it](https://nanakitchen.it/) · [www.nanakitchen.it](https://www.nanakitchen.it/) · backup canonical [nonna-profile.pages.dev](https://nonna-profile.pages.dev/)

---

## What's inside

| File | Purpose |
|---|---|
| `index.html` | The full one-page profile + a didactic "debrief" section at the bottom that names every rule it applies. |
| `styles.css` | Editorial design system — Fraunces + Newsreader + Cormorant Garamond, warm terracotta + cream palette, film grain, no generic UI. |
| `script.js` | GSAP + ScrollTrigger + Lenis. Hero title reveal, parallax, word-by-word mission/vision, counter animations, image clip-reveals. |
| `speech-script.md` | The full **10–15 minute** in-class speech, with body-language and voice cues. Built around the 7 C's and the 55 / 38 / 7 rule. |
| `images/` | Image assets. Every `<img>` has a working Unsplash fallback, so the page never breaks. |

---

## How to open it

Double-click `index.html`. It runs in any modern browser, 100 % offline once fonts + GSAP have loaded once (they're cached).

For live presentation in class:
1. Open `index.html` in **Chrome or Safari**, full-screen (F11 / Cmd-Ctrl-F).
2. Make sure the `speech-script.md` is open on your phone, *not* on the projector.
3. Scroll **slowly**. The animations are tuned to the human reading pace, not to yours when you're nervous.

---

## How this is a textbook company profile

The last section of the webpage — **Classroom debrief** (dark background) — is a guided tour of every rule applied, with the exact quote from the page and its reference in the course slides. Use it as a checklist when your group builds its own profile.

Rules covered on-page:

- ✓ Must-have content: company name, address, established date, contact, sector.
- ✓ **Mission** (identity) vs **Vision** (journey), each one sentence long.
- ✓ Storytelling opening (Starbucks / Tesla template): person first, product second.
- ✓ Strong action words: *preserve, rescue, rebuild, ship, capture, turn*.
- ✓ Impressive nouns: *a memory company*, *the Living Cookbook*, *an heirloom*.
- ✓ Comparatives / superlatives used with dignity.
- ✓ Concrete stats (ARR, gross margin, NPS) — **no vague claims**.
- ✓ The **7 C's** applied, each one mapped to a specific section.
- ✓ Warm, authoritative culture vibe (not funky / tech-bro).
- ✓ Public-speaking rules inside `speech-script.md`: 55/38/7, K.I.S.S., repeat the main idea three times, breathe on the dots.

---

## Customising for your group

If another group wants to reuse this scaffolding:

1. Open `index.html`. Search-replace `Nana`, `Bologna`, `tortellini`, the founders' names.
2. Replace the 7 images in `/images/` with your own (or let the Unsplash fallbacks render).
3. Edit the 10 debrief cards at the bottom to reflect **your** rule-by-rule choices.
4. Rewrite `speech-script.md` — keep the structure, change the story.

**Don't change the typography system or palette.** They were chosen to avoid the six "non-negotiable" AI-slop patterns (Inter / Roboto / Arial, purple-on-white gradient, centered hero + subtitle + CTA, etc.). If you rebrand, rebrand hard — don't half-swap.

---

## Credits & honesty

- **Company name, story, people, numbers:** invented for classroom use.
- **Photographs:** AI-generated for the hero set, Unsplash for fallbacks.
- **Quotations from the Financial Times / Monocle / Kinfolk:** fictional. Declare this explicitly in Q&A if asked (see `speech-script.md` section 10).

This is a teaching artefact, not a real pitch. But it is built to the quality level a real pitch would need — which is the whole point.
