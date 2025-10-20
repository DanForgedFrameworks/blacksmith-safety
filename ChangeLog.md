# 🧾 CHANGELOG  
**Project:** Blacksmith Safety — Wig’s Wonky Forge  
**Repository:** danforgedframeworks/blacksmith-safety  
**Standard:** Semantic versioning (v13 → v16-preview)  
**Date:** 20 October 2025  

---

## v16-preview — README Integration & Forward Planning  
**Focus:** Public-facing documentation and future development roadmap.  

### 🗂 Documentation Enhancements  
- Added **“Latest Updates”** section to `README.md` for public visibility.  
- Linked to full [`CHANGELOG.md`](CHANGELOG.md) to improve transparency for project followers.  
- Included a **summary of highlights** and a **v16 roadmap** outlining upcoming milestones.  

### 🎨 Brand Consistency  
- Planned addition of branded badges using the Forged Frameworks palette:  
  - Copper (`#b87333`)  
  - Deep Purple (`#370C75`)  
- Badge set will include:
  - **Version badge** – showing current site version (`v15`)  
  - **Accessibility badge** – indicating WCAG 2.2 AA alignment  
  - **Status badge** – showing active development  

### 🧩 Upcoming Development Goals (for v16)  
- [ ] Expand the homepage card grid to include **all 11 modules** from navigation.  
- [ ] Implement the **interactive pixel avatar** using sprite sheets (`idle`, `wave`).  
- [ ] Add a standalone **Accessibility Statement** page in markdown and HTML.  
- [ ] Conduct **Lighthouse audit** for performance and accessibility validation.  
- [ ] Optimise mobile layout for smaller viewports (< 480 px).  

### 📅 Expected Release  
- Target window: **Late October – Early November 2025**  

---

## v15 — Structural Refinement & UI Enhancements  
**Focus:** Front-page redesign, accessible navigation, visual polish, and avatar groundwork.  

### 🧱 Structural & Visual Refinements  
- **Header redesign:**  
  - Removed redundant text (`Wig’s Wonky Forge · Blacksmithing Starter — Safety & Setup`).  
  - Retained a single, **centred logo** above the navigation.  
  - Adjusted gradient flow and spacing for improved balance.  

- **Navigation bar updates:**  
  - Added accessible ARIA-labelled links and modern **pill-style hover states**.  
  - Ensured even spacing across the nav (`justify-content: space-evenly`).  
  - Introduced `aria-current="page"` for active link identification.  
  - Version bump: **CSS → v12 → v13** to force cache refresh.  

- **Gradient underbar:**  
  - Added subtle reversed gradient divider below navigation for visual anchoring.  

---

### 🎯 Hero Section  
- Removed duplicate logo from hero area (to avoid layout conflict).  
- Simplified structure with main title + strapline:  
  _“Pitfalls and trip hazards from Wig’s Wonky Forge”_.  
- Responsive scaling via `clamp()` for text size.  

---

### 🔥 Corner-Badge Video  
- Added **bottom-right corner video badge** (`.corner-badge`).  
- JavaScript ensures video:  
  - Autoplays once, then pauses.  
  - Reverts cleanly to poster image (`wig-round-logo.png`).  
- Responsive sizing with `--badge-size` variable and media queries.  
- Added `prefers-reduced-motion` fallback for accessibility.  

---

### 🧩 Cards Grid (Module Links)  
- Converted feature boxes into **fully clickable `<a>` cards**.  
- Added hover animation (`scale(1.02)`) and refined shadows for tactile feedback.  
- Retained accessible keyboard focus outlines.  
- Prepared grid to expand to all 11 modules (to match navigation).  

---

### 😎 Emoji Navigation Enhancement  
- Introduced **dual emoji icons** using `data-ico` attributes for each nav item.  
- Implemented via CSS pseudo-elements (`::before` and `::after`).  
- Hidden from screen readers to preserve ARIA readability.  
- Minor CSS helper:  
  ```css
  .site-nav a { display:inline-flex; align-items:center; gap:.25rem; }
