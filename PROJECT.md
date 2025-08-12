# Eka Corp Website Specification

## Overview
Eka Corp is a professional game development company. The goal is to build a modern, mobile-friendly website showcasing our games, team, and vision.

## Pages

### 1. Home
- Full-width hero section with:
  - Company name: Eka Corp
  - Tagline: "Crafting Games That Inspire"
  - Call-to-action button linking to the Games page
- Featured Games section: 3 games from src/data/games.json
- About preview: short mission statement with a "Learn More" button
- Footer with copyright and social links (LinkedIn, Play Store, YouTube)

### 2. Games
- Grid/list of all games from src/data/games.json
- Each card shows cover image, title, short description
- Cards link to individual game detail pages

### 3. Game Detail
- Dynamic route: /games/[slug]
- Displays:
  - Game cover image
  - Title, description
  - Screenshot carousel
  - YouTube trailer embed (if exists)
  - Download links for platforms (Play Store, Steam, etc.)

### 4. About
- Full mission statement
- Team bios (placeholder for now)

### 5. Contact
- Contact form (name, email, message)
- Uses Formspree for email submissions
- Social media links

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel

## Branding
- Dark Gray: #1a1a1a
- Bright Red: #ff3b3b
- White: #ffffff

## Performance Goals
- Lighthouse score: 90+
- All images optimized
- Responsive on mobile, tablet, and desktop

## Accessibility
- ARIA labels where needed
- Proper heading hierarchy
- Alt text for all images