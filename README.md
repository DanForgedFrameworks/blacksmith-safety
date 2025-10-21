# Blacksmith Safety 🔥
*A GitHub-hosted, accessible learning resource demonstrating forge safety and awareness through interactive web design.*

---

## 🧩 Accessibility & Inclusive Design Statement

The **Blacksmith Safety** site is designed and developed in accordance with **WCAG 2.2 AA** and **BS EN 301 549:2021**, following the POUR principles — **Perceivable, Operable, Understandable, Robust**.

### Accessibility Objectives
- Provide clear, readable text using Montserrat (headings) and Lato (body).
- Maintain sufficient colour contrast and full keyboard operability.
- Use semantic HTML (`<nav>`, `<main>`, `<header>`, `<footer>`, `<button>`).
- Reflow correctly at 200% zoom (responsive layouts, relative units).
- Supply descriptive alternative text for images (no essential info by colour alone).
- Announce dynamic feedback via `role="status"` and `aria-live="polite"`.

### Ongoing Evaluation
Accessibility is checked with:
- **Keyboard-only navigation**
- **NVDA / VoiceOver** screen readers
- **Lighthouse** (Chrome DevTools) Accessibility audits
- **WebAIM Contrast Checker**

*Conformance goal: WCAG 2.2 AA / BS EN 301 549 clauses 9–13.*

---

## 🧭 Table of Contents
1. [Overview](#overview)
2. [Purpose & Learning Intent](#purpose--learning-intent)
3. [Features](#features)
4. [Technology Stack](#technology-stack)
5. [Repository Structure](#repository-structure)
6. [Setup & Deployment](#setup--deployment)
7. [Accessibility & Compliance](#accessibility--compliance)
8. [Testing & Evaluation](#testing--evaluation)
9. [User Experience & Design](#user-experience--design)
10. [Contribution Guidelines](#contribution-guidelines)
11. [Credits & Acknowledgements](#credits--acknowledgements)
12. [Licence](#licence)
13. [CPD Reflection](#cpd-reflection)
14. [Version History](#version-history)

---

## Overview
**Blacksmith Safety** is a micro-learning web project modelling *inclusive, responsive, standards-compliant* learning design.  
It hosts safety awareness content for apprentice blacksmiths, including an interactive micro-scenario.

---

## Purpose & Learning Intent
- Reinforce safe practice through interactive design.
- Embed **accessibility-by-default** and UDL principles.
- Act as a public CPD exercise aligned to **BS EN 301 549**.
- Provide a working demo for apprenticeship-style safety modules.

> **Author learning outcome:** Apply accessibility, UI and UX principles using real code hosted on GitHub Pages.

---

## Features
- **Responsive card layout** (mobile-first)
- **Burger drawer menu** (keyboard operable)
- **Toast feedback** with live region announcements
- **Mini-game** “Careful — Don’t Get Burnt!” (plain JS)
- **Pixel avatar** branding
- **Accessibility documentation** (this README)

---

## Technology Stack
- **HTML5**, **CSS3**, **JavaScript (vanilla)**
- **GitHub Pages** for hosting
- **Lighthouse** for audits

---

## Repository Structure
assets/
│ styles.css # Theme & layout
│ site.js # Nav + toast behaviour
│ game.js # Mini-game logic
│ img/ # Avatars / pixel art
pages/
│ careful-dont-get-burnt.html
│ forge-setup.html
│ ppe.html
│ fire.html
│ ...
index.html
README.md


---

## Setup & Deployment
**Local:** open `index.html` in a browser.  
**Deploy:** push to `main` (Pages set to “Deploy from branch → main → /(root)”).

> If CSS/JS changes don’t appear, hard-refresh or add `?v=2` to the file URL in HTML.

---

## Accessibility & Compliance
| Criterion | Implementation |
|----------|-----------------|
| **1.1.1 Non-text Content** | Descriptive `alt` text on images |
| **1.4.3 Contrast (Minimum)** | Palette tested for ≥ 4.5:1 body text |
| **2.1.1 Keyboard** | Full keyboard navigation (menu, links, buttons) |
| **2.4.7 Focus Visible** | Custom focus outlines |
| **4.1.3 Status Messages** | Toasts with `role="status"` / `aria-live="polite"` |
| **BS 301 549 Clause 12** | Regular manual evaluation logged in CPD |

---

## Testing & Evaluation
- **Lighthouse** Accessibility audits (target ≥ 95)
- **Keyboard-only** walkthrough (Tab/Shift-Tab/Enter/Space)
- **Screen reader** spot checks (NVDA/VoiceOver)
- **Contrast** verification (WebAIM)
- Issues tracked via GitHub as needed

---

## User Experience & Design
- **Fonts:** Montserrat (headings 32, bold) / Lato (body 16)
- **Palette:** copper `#b87333`, charcoal `#2e2e2e`, cream `#fdf6ec`, orange `#e56b2d`
- **Breakpoints:** 480 / 900 / 1200 px
- **Interactions:** clear hover/focus states; visual toasts

---

## Contribution Guidelines
1. Fork → create a feature branch  
2. Update HTML/CSS/JS and README as needed  
3. Open a Pull Request with a brief description

---

## Credits & Acknowledgements
- **Author:** Wig (Daniel Boyland)  
- **Standards:** WCAG 2.2 / BS EN 301 549:2021  
- **Tools:** Canva, GitHub Pages, Lighthouse, WebAIM  
- **Fonts:** Montserrat & Lato (Google Fonts)  
- **Thanks:** Open-source community resources

---

## Licence
MIT — reuse/adapt for educational purposes with attribution.

---

## CPD Reflection
| Area | What I learned | Next steps |
|------|-----------------|-----------|
| GitHub Pages | Hosting & structure | Automate checks |
| Accessibility | Applying POUR in code | Add high-contrast toggle |
| UI/UX | Drawer nav & feedback | Improve mini-game UI |
| Workflow | External JS/CSS | Introduce simple animation |

---

## Version History
| Version | Date | Summary |
|--------:|------|---------|
| **v15** | 2025-10-20 | Major UI redesign — header simplification, centred logo, accessible navigation, and emoji-enhanced menus |
| **v16-preview** | 2025-10-20 | README integration + public roadmap for upcoming accessibility and avatar features |
| **v17** | 2025-10-21 | Animated pixel avatar (Wig-Idle-Anim.gif) added to bottom-left corner; borderless styling, WCAG/BS 301 549 alignment verified |

🔗 **Full details:** See [`CHANGELOG.md`](CHANGELOG.md) for comprehensive notes and technical updates.

---


