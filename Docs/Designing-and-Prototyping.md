# Designing and Prototyping

**Project:** Tamseel Production landing page  
**Revision:** 4 — implemented 27 October 2026; ready for review

## Direction

A cinematic production page with compact sections, real portfolio evidence and an immediate telephone action. The latest client feedback replaces the first oversized, warm-paper layout. Keep the hero visual, the client marks readable, the portfolio complete and the copy brief.

## Implemented visual system

| Role | Value |
|---|---|
| Main charcoal | #111412 |
| Service background | #141813 |
| Service cards | #1B2019 |
| Warm ivory sections | #F5F3ED |
| Copper-orange accent | #F99466 |
| Light text | #FFFEFA |
| Body type | DM Sans |
| Main headings | Manrope |
| Short italic emphasis | Instrument Serif |
| Desktop content width | 1180px; 1320px on large displays |
| Typical section spacing | 70px desktop; 48px mobile |

Use orange selectively on primary call buttons, icons and emphasized words. Pill-shaped call buttons pair readable labels with a circular telephone icon, a small lift and a gentle icon rotation on hover. Focus remains visible.

## Page composition

1. **Header:** compact dark sticky bar with the source logo, four anchors and a call button. Mobile navigation uses an accessible toggle.
2. **Hero:** licensed cinema-camera photography with a dark readability overlay; “Films that make people stop.”; a brief introduction; primary call button and a separate showreel play control. The stock crew is never identified as Tamseel's team.
3. **Clients:** all 23 supplied logos in a dark strip under an “Our Clients” heading. Remove the old “In good company” label and CTA. The loop runs continuously; visitors can drag or use arrow keys to browse. Hover reveals each source file’s colors and zooms slightly. Normalize the visible marks to a consistent size without clipping. Reduced-motion preference disables autoplay while leaving manual navigation available.
4. **Work:** ivory section, “The work speaks.” with “speaks.” in orange. Nine real thumbnails in a consistent 3×3 desktop grid and two mobile columns. Preserve all source titles. Each plays the matching embedded film directly inside its card. The active card spans both columns on mobile to provide a usable player size.
5. **Services:** “Our Services” eyebrow and six compact cards in a 3×2 desktop grid. The short descriptions are grounded in Tamseel’s published services; cards gain an orange border on hover. Each has a contextual telephone action.
6. **About:** one landscape production image beside “Small details. A bigger picture.” with the second line in orange. Copy and proof points reference Tamseel’s published creative direction, cinema cameras, lighting, professional audio, and production workflow.
7. **Reviews:** three original, unabridged quotes, larger type, large reviewer names, Google’s colored wordmark, and the five-star visual requested by the client. No portraits or “Client review” captions. Arabic remains RTL; German and English retain their languages. The third card uses an orange treatment.
8. **Closing/footer:** “Let’s make something matter.” with a telephone CTA, availability, original logo, five recognizable SVG social icons and legal links. A fixed icon-only call button remains at the bottom right.

## Contextual telephone labels

| Placement | Label |
|---|---|
| Header | Let’s Talk |
| Hero | Let’s Talk About Your Film |
| Work | Make Your Next Film |
| Personal branding | Plan My Brand Film |
| Documentary | Discuss My Documentary |
| Corporate | Talk Corporate Content |
| Advertising | Plan My Campaign |
| Livestream | Discuss My Live Event |
| Podcast | Talk About My Podcast |
| About | Meet Your Production Team |
| Reviews | Let’s Create Together |
| Closing | Call & Start Your Project |

Every conversion button has the same tel destination, with no visible phone number. The showreel control opens media and is clearly distinguished by its play icon.

## Motion

Use locally bundled Lenis for eased wheel and anchor movement. Keep native touch scrolling. Respect live changes to prefers-reduced-motion. No cursor trails, particles or autoplay audio. Only the open video dialog pauses page scrolling; closing restores it.

The logo loop is continuously moving and supports pointer dragging, touch gestures, and arrow-key navigation. It does not pause on hover and has no pause control. Reduced-motion mode disables the automatic loop and permits manual horizontal scrolling. Hover reveals the source colors and adds a small zoom while keeping logos inside the strip.

Orange call buttons reverse to ivory on hover. Dark call buttons fill orange and change the phone glyph to copper for contrast; the reviews button fills orange. The fixed orange phone shortcut reverses to charcoal and changes its glyph to ivory while animating it slightly.

## Playback

Use local video thumbnails for a complete first view. Clicking a gallery thumbnail replaces it with a real YouTube iframe for the supplied ID. Close film restores the poster; starting another film stops the previous one. The hero showreel remains in an accessible on-page dialog with Escape/close support. Video triggers are buttons, with no outgoing watch links or external playback fallback. Sandbox embedded players against popup/parent-page navigation. Preview through HTTP with VS Code Live Server; local file URLs may not provide the referrer YouTube requires.

## Code and handoff

Use readable, consistently formatted HTML/CSS/JavaScript with comments at section and behavior boundaries. Keep shared call configuration obvious. The Python script is a local preview utility only; the production page remains static. No form, FAQ, custom analytics or ad pixels are introduced.

## Image provenance

The hero photo is licensed illustrative stock photography; its source and license are recorded in Research and Reference. The company image, client logos, video titles, posters and films remain the supplied Tamseel assets.
