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

  ---

## v17 — Animated Pixel Avatar & UI Polish  
**Date:** 21 October 2025  
**Focus:** Bringing the blacksmith avatar to life + refinements to presentation and accessibility.

### ⚙️ Avatar Animation
- Created first animated avatar (`Wig-Idle-Anim.gif`) from four idle PNGs.  
- Replaced static `Wig-Idle-01.png` avatar with animated GIF version.  
- Embedded in **bottom-left corner** using fixed positioning.  
- Scaled from 32×32 → **128×128** with `image-rendering: pixelated` for crisp pixels.  
- Made avatar **borderless** and **shadowless** for clean integration with site background.  
- Confirmed alignment across desktop and mobile breakpoints.

### 🧱 Structure & CSS
- Maintained consistent syntax with previous `.avatar` block.  
- Bumped stylesheet to `v=19` for cache refresh.  
- Retained existing accessibility hierarchy and layering (`z-index:5000`).  
- Confirmed correct relative paths (`assets/sprites/Wig-Idle-Anim.gif`) and case sensitivity for GitHub Pages.

### ♿ Accessibility & WCAG Alignment
- Verified avatar is **decorative** (`alt="" aria-hidden="true"`) to prevent unnecessary screen reader output.  
- Maintains full **WCAG 2.2 AA** and **BS EN 301 549** compliance with respect to motion and visibility preferences.  
- Added plan to include a *reduced-motion* CSS query to pause animation for users with motion sensitivity.

### 📸 Visuals & Testing
- Avatar successfully displayed on live site (`https://danforgedframeworks.github.io/blacksmith-safety/`).  
- Verified smooth scaling and no colour distortion.  
- Hard refresh confirmed cache behaviour fixed with updated query string.  

### 🔮 Next Steps (v18)
- Implement `prefers-reduced-motion` media query for avatar pause.  
- Add “wave” and “smithing” animation states to be triggered via JavaScript on user interaction.  
- Document animation pipeline workflow (PNG → GIF → integration).  
- Explore sprite sheet conversion (for lighter load and smoother frame blending).  

---

