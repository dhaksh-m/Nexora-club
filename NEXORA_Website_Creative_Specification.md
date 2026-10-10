# NEXORA Website — Creative Direction & Build Specification

**Project:** NEXORA — CSE Technical Club  
**Tagline:** Think Beyond. Solve Smarter. Build the Future.  
**Status:** Implementation started.

## 1. Creative Direction

Create a distinctive, modern website for NEXORA that feels like a real student-led coding and hackathon community—not a generic AI-generated landing page or conventional college-club template.

- Dark, cinematic, high-contrast.
- Purple, violet, electric blue, white, and near-black.
- Selective glow, gradients, circuit traces, orbital arcs, stars, geometric rings, code symbols, and subtle grid patterns inspired by the logo.
- Strong typography, editorial scale changes, layered composition, and meaningful visual rhythm.
- Prefer real club photos, real members, and real event content over generic stock imagery.
- Make the site interesting through a few memorable visual moments, not effects everywhere.

## 2. Colour System

| Token | Suggested value | Use |
|---|---|---|
| `--bg` | `#05060B` | Main near-black background |
| `--surface` | `#0C1020` | Raised panels and navigation |
| `--surface-soft` | `#11162A` | Secondary panels |
| `--text` | `#F7F8FF` | Primary text |
| `--text-muted` | `#A7AEC5` | Secondary copy |
| `--purple` | `#8B35FF` | Primary accent |
| `--violet` | `#C15BFF` | Gradient highlight |
| `--electric-blue` | `#168BFF` | Secondary accent |
| `--cyan` | `#55D8FF` | Occasional bright detail |
| `--border` | `rgba(153, 139, 255, 0.22)` | Fine outlines and separators |

## 3. Typography

- **Display / hero:** Space Grotesk — bold, contemporary, geometric.
- **Body / UI:** Inter — readable at different sizes.
- **Technical labels, metadata, ASCII art:** IBM Plex Mono — developer-oriented.

## 4. Site Structure & Navigation

Items in top dock:
1. Home
2. About
3. Team
4. Events
5. Gallery

Inspired by ThreeUI Sable animated top dock reference: https://threeui.com/css/animated-top-dock/sable

## 5. Home Page — Cinematic First Impression

- Video/Canvas hero background with dark overlay for legibility.
- Tagline: **Think Beyond. Solve Smarter. Build the Future.**
- CTA: "Explore NEXORA"
- Orbital rings, circuit line details, small tech labels (`CSE / TECHNICAL CLUB`, `THINK → SOLVE → BUILD`).
- THINK / SOLVE / BUILD core pillars.
- Activity & real project previews.
- Team teaser.

## 6. About Page

- About NEXORA overview.
- Vision & Mission.
- Objectives (Critical Thinking, Problem Solving, Implementation, Innovation, Collaboration).
- Core Pillars (THINK, SOLVE, BUILD).
- Activities & Initiatives.
- Values & Club Spirit.

## 7. Events Page

- CRT background effect (ThreeUI Nintendo CRT effect reference: https://threeui.com/backgrounds/crt/nintendo).
- Display **UNDER CONSTRUCTION** message on CRT retro screen.
- Configurable to switch to real active events seamlessly when confirmed.

## 8. Team Page — ASCII Portraits

- Alternating layout (Left/Right alternating photo/ASCII portrait & info).
- Detailed ASCII art portrait generator/renderer from photos/character matrix.
- Role, Name, Department, Year, LinkedIn.

## 9. Gallery Page

- Same Nintendo CRT retro screen background effect from ThreeUI.
- Displays exact message: **MEMORIES UNDER CONSTRUCTION**.

## 10. Technical Stack & Architecture

- Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion / Canvas CRT effects, Lucide icons.
- Responsive, Accessible, Clean modular component structure.
