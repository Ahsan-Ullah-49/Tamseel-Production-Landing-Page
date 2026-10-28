# Planning

**Project:** Tamseel Production landing page  
**Build scope:** Static single-page site; domain and deployment later

## Revision 4 local review and handoff

Open `index.html` through the VS Code Live Server extension for local preview. A local HTTP origin supports YouTube's embedded player; opening the file directly may not. Python and project-specific preview scripts are not required. All nine gallery films play inside their cards; video controls must never redirect to YouTube.

Production files are index.html, styles.css, script.js and Assets/. The Python file is a preview convenience, not a production backend. Assets/Vendor/ contains Lenis 1.3.27 and its license; Assets/Video-Posters/ contains the official video thumbnails. Docs/ still contains exactly five Markdown documents.

Follow the Revision 4 Designing and Prototyping document for the current compact layout, colors, typography, call-button hover states, video dialog and logo-loop interaction. Earlier examples below are implementation planning notes, not instructions to restore the rejected first design.

## Build sequence

### 1. Set up the static project

Prepare a simple structure such as:

- index.html
- styles.css
- script.js
- assets/ for the logo, client marks, photos, and approved local image files

Do not add a framework, package manager, CMS, backend, analytics library, or pixel manager.

### 2. Collect and map official assets

- From the official website, collect the Tamseel logo, every logo in the Clients strip, and suitable company/production stills.
- From the official Projects page, identify the exact video embed URL for each of the nine titles in Research and Reference. Keep the title-to-player mapping in the same order.
- Verify each official social destination in the Research document. Exclude the old WhatsApp link and any unverified profile.
- Use actual policy and terms links from the source site.
- Keep assets named descriptively and avoid duplicate files.

### 3. Build the semantic page structure

Create the header and anchor navigation, then the hero, logo strip, work section, six service cards, combined About/why section, reviews, and final CTA/footer. Use semantic headings and landmarks. Add each call link as a real telephone anchor using the client-approved destination.

### 4. Add content and media

- Use the proposed hero and final-CTA copy direction from the PRD; refine only for natural phrasing and accuracy.
- Write concise, service-specific descriptions based on the official Services page.
- Add every logo and all nine official video embeds.
- Copy the three exact reviews from Research and Reference without edits or translations.
- Add verified social profiles and existing legal pages.
- Keep all conversion actions as calls; do not add forms, email, WhatsApp, or other contact routes.

### 5. Apply the visual system

Use the palette, typography, spacing, and motion guidance in Designing and Prototyping. Make the final CTA visually clear while keeping its colors and artwork original to Tamseel. Keep the film work prominent without making every section dark or animated.

### 6. Add minimal interaction

Use JavaScript only for behavior that needs it, such as the mobile menu, seamless draggable logo loop, and video embeds. Keep navigation functional without JavaScript where practical. Respect reduced-motion preferences. Add no analytics or click tracking.

### 7. Review against the requirements

- Confirm all page sections, six services, nine videos, client logos, reviews, social links, and policy links are present.
- Confirm all call buttons use the same tel destination, have different contextual labels, and display no number.
- Open a call link on a phone to confirm it opens the dialer with the supplied number ready; ask the client to verify the destination before launch.
- Check the page at mobile, tablet, and desktop widths; check anchor offsets, keyboard navigation, focus visibility, image crops, hover states, logo dragging, video controls, and Arabic RTL rendering.
- Confirm no FAQ, form, visible number, old WhatsApp link, tracking code, unverified claim, or placeholder remains.
- Keep comments concise and useful. A developer should be able to identify section structure, shared call target, logo loop, and mobile-menu behavior quickly.

## Handoff notes

- The client has not chosen a domain or publishing location; settle those after the page is ready.
- Google, Meta, and TikTok are planned ad channels, but this version has no tracking requirement.
- The supplied number is different from the number currently visible on the company website. The landing page must use the client-supplied number and must not print it visibly.
- Existing official WhatsApp currently points to the old number. Do not reuse that link without an updated approved destination.
- TikTok profile URL was not verified. Add no TikTok social icon until an official destination is supplied or confirmed.

## Definition of done

The static page follows the PRD flow, uses official source assets and exact reviews, provides distinct call-only CTAs throughout, follows the visual system, works responsively and accessibly, contains no unapproved tracking, and is ready for the later domain/deployment decision.
