# Designing and Prototyping

**Project:** Tamseel Production landing page  
**Revision:** 10 — updated 28 October 2026; ready for review

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
2. **Hero:** licensed cinema-camera photography with a dark readability overlay; “Videos that make people stop.”; a concise description identifying video production in Dubai and the service range; a “Contact Us” call button and a separate showreel play control. Do not add the vertical creative-direction caption, “Explore our films” or “Dubai based. Globally minded.” On phones, keep the copy left-aligned and vertically centered, with the two actions in one row. The stock crew is never identified as Tamseel's team.
3. **Clients:** all 23 supplied logos in a dark strip under an “Our Clients” heading. Keep a subtle divider above the strip and reduce the space below the mobile hero so these remain distinct sections without the large empty gap. Remove the old “In good company” label and CTA. The loop runs continuously; visitors can drag or use arrow keys to browse. Show each source file’s colors at rest and zoom slightly on hover. Normalize the visible marks to a consistent size without clipping. Reduced-motion preference disables autoplay while leaving manual navigation available.
4. **Work:** ivory section, “The work speaks.” with “speaks.” in orange. Nine real thumbnails in a consistent 3×3 desktop grid and two mobile columns. Preserve all source titles. Each plays the matching embedded video directly inside its card. The active card spans both columns on mobile to provide a usable player size. On phones, align the “Call Us” CTA beside the section title.
5. **Services:** “Our Video Services.” heading and six compact cards in a 3×2 desktop grid. The short descriptions are grounded in Tamseel’s published services; cards gain an orange border on hover. Every full card is a “Call Us” telephone action.
6. **About:** one landscape production image beside “Small details. A bigger picture.” with the second line in orange. Copy and proof points reference Tamseel’s published creative direction, cinema cameras, lighting, professional audio, and production workflow. On phones, place the text before the image, then the centered “Contact Us” button.
7. **Reviews:** three original, unabridged quotes, larger type, large reviewer names, Google’s colored wordmark, and the five-star visual requested by the client. No portraits or “Client review” captions. Arabic remains RTL; German and English retain their languages. The third card uses an orange treatment. Keep “Call Us” beside the heading on desktop and centered below the cards on phones.
8. **Recognition:** place the four supplied Dubai’s Best, Trustpilot and Clutch badges after Reviews and directly before the closing CTA. Keep the existing compact design, fully visible images and profile links.
9. **Closing and footer:** “Discuss your project.” with a “Contact Us” telephone CTA and availability. Keep “project” in the same natural heading flow and preserve the current design. Finish with the original logo, legal links and copyright. Social profile links remain omitted. A fixed icon-only WhatsApp link opens a chat to the client-approved mobile number.

## Search presentation

The document title and description use the main service and location plainly. Open Graph and X/Twitter metadata use the same factual service summary and the official showreel thumbnail. A small Organization JSON-LD record identifies Tamseel using its verified public website; it does not claim an unverified street address, business hours, service radius, or self-serving review rating. The recognition row stays two lines at all widths. Canonical and `og:url` await the final campaign URL.

## Simple telephone labels

| Placement | Label |
|---|---|
| Header | Let’s Talk |
| Hero | Contact Us |
| Work | Call Us |
| Every service card | Call Us |
| About | Contact Us |
| Reviews | Call Us |
| Closing | Contact Us |

Every text call button has the same tel destination, with no visible phone number. The separate floating WhatsApp icon opens a chat using the approved destination. The showreel control opens media and is clearly distinguished by its play icon.

## Motion

Use locally bundled Lenis for eased wheel and anchor movement. Keep native touch scrolling. Respect live changes to prefers-reduced-motion. No cursor trails, particles or autoplay audio. Only the open video dialog pauses page scrolling; closing restores it.

The logo loop is continuously moving and supports pointer dragging, touch gestures, and arrow-key navigation. It does not pause on hover and has no pause control. Reduced-motion mode disables the automatic loop and permits manual horizontal scrolling. Original source colors are visible at rest; hover adds a small zoom while keeping logos inside the strip.

Orange call buttons reverse to ivory on hover. Dark call buttons fill orange and change the phone glyph to copper for contrast; the reviews button fills orange. The fixed WhatsApp shortcut uses a standard white WhatsApp mark on WhatsApp green; it fills Tamseel orange on hover while keeping the white mark visible and animating it slightly.

## Playback

Use local video thumbnails for a complete first view. Clicking a gallery thumbnail replaces it with a real YouTube iframe for the supplied ID. Close video restores the poster; starting another video stops the previous one. The hero showreel remains in an accessible on-page dialog with Escape/close support. Video triggers are buttons, with no outgoing watch links or external playback fallback. Sandbox embedded players against popup/parent-page navigation. Preview through HTTP with VS Code Live Server; local file URLs may not provide the referrer YouTube requires.

## Code and handoff

Use readable, consistently formatted HTML/CSS/JavaScript with comments at section and behavior boundaries. Keep shared call configuration obvious. The production page remains static; preview locally with VS Code Live Server. No form, FAQ, custom analytics or ad pixels are introduced.

## Image provenance

The hero photo is licensed illustrative stock photography; its source and license are recorded in Research and Reference. The company image, client logos, client-supplied recognition badges, video titles, posters and videos remain the supplied Tamseel assets.
