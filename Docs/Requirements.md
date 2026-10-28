# Requirements

**Project:** Tamseel Production landing page  
**Implementation:** Static HTML, CSS and vanilla JavaScript, with locally bundled Lenis for scrolling

## Revision 4 refinements

The latest client feedback calls for a compact cinematic redesign, new headlines, polished telephone buttons, actual social icons and smoother scrolling. Designing and Prototyping now describes the implemented design and supersedes earlier visual examples. The main conversion/content requirements below remain applicable.

- Display all nine actual video posters in a 3×3 desktop grid and two mobile columns. Clicking a gallery thumbnail replaces it with the matching embedded player inside that card. Only one film plays at a time. Close film restores the poster. On mobile the playing card spans both columns. The hero showreel uses an on-page dialog.
- All 23 supplied client logos sit on a dark background under an “Our Clients” heading. Remove “In good company”, the CTA, and the pause button. The strip loops continuously and supports pointer/touch dragging and arrow-key browsing. Hover reveals source colors and adds a small zoom; normalize visible logo sizes without clipping. Reduced-motion mode turns off autoplay and keeps manual scrolling available.
- On dark call buttons, change the phone icon color when the button fills orange. The bottom-right call shortcut changes from orange to charcoal on hover; its icon changes to a contrasting light color.
- Call labels may be edited creatively; each remains distinct, displays a phone icon and uses the same tel destination.
- Licensed stock imagery is allowed by the latest instruction, with provenance recorded. Do not identify another production crew as Tamseel's team.
- Lenis 1.3.27 is the sole runtime helper. Retain native touch momentum and respect reduced-motion preference changes.
- Use VS Code Live Server for local HTTP preview. Video controls are buttons, never outgoing YouTube links. No “Watch on YouTube” or external playback fallback is included. A local file URL may not supply YouTube's required web origin. Embedded players are sandboxed against popup and parent-page navigation.

## Functional requirements

### Call conversion

- The primary action is a phone call. Every major content section has a call CTA with its own context-specific label.
- Every call CTA points to the same destination: tel:+971523025251, based on the client-provided number 052 302 5251.
- Render the phone number nowhere as visible text. The user should see a button label, tap it, and get the device’s dialer/calling app with the number ready. Do not try to place a call automatically.
- Include the call action in the header, hero, work section, every service card, About section, Reviews, and final CTA. Keep an icon-only call shortcut fixed at the bottom right. The logo strip has no CTA.
- Suggested labels:
  - Header: “Let’s Talk”
  - Hero: “Let’s Talk About Your Film”
  - Work: “Make Your Next Film”
  - Personal branding: “Plan My Brand Film”
  - Documentary: “Discuss My Documentary”
  - Corporate video and photography: “Talk Corporate Content”
  - Advertisement: “Plan My Campaign”
  - Livestream: “Discuss My Live Event”
  - Podcast: “Talk About My Podcast”
  - About: “Meet Your Production Team”
  - Reviews: “Let’s Create Together”
  - Final CTA: “Call & Start Your Project”
  - Floating call shortcut: icon-only with an accessible “Call Tamseel Production” label.
- All button labels are editable copy, but each should remain distinct and clearly lead to a call.

### Navigation and page sections

- Provide four working same-page navigation links: Work, Services, About, Reviews.
- Use matching section IDs and ensure links work from desktop and mobile navigation.
- Keep the sequence: header, hero, client-logo strip, nine-video work section, services, combined About/why section, reviews, final CTA/footer.
- The logo strip includes every client logo on the source website and loops continuously. It has only the “Our Clients” heading, no CTA or pause button; it is manually draggable and keyboard browsable. Use a static, scrollable reduced-motion fallback.
- The Work section embeds all nine official projects listed in Research and Reference, in the same title order.
- Services includes all six source-site services, each with a concise description and its own telephone CTA.
- Combine About and why-Tamseel content in one image-plus-short-points section.
- Reviews use the three published quotes and names in their original languages and wording. Use larger type, large names, five client-requested stars, a Google-colored wordmark, and a contrasting card treatment.

### Footer and outbound links

- Include the verified official social links listed in Research and Reference, with accessible names for icon-only links.
- Include official Privacy Policy and Terms & Conditions links.
- Do not include WhatsApp until its destination is confirmed against the new phone instruction. Do not fabricate a TikTok profile URL.
- Do not show email as a call substitute.

## Content and experience constraints

- Page language: English. Preserve source languages for the reviews.
- Audience: international clients; present Tamseel as Dubai-based without inventing coverage statistics.
- Calls are available 24/7; the business handles missed-call follow-up. This is operational context, not a reason to print a phone number.
- No lead form, contact form, FAQ, pricing table, chat widget, email CTA, or extra secondary conversion path.
- Write specific, natural, concise copy from actual services, production methods, and portfolio. No generic filler, fabricated claims, or unsupported “best/leading/award-winning” statements.

## Ads and tracking

- The landing page may receive traffic from Google Ads, Meta Ads, and TikTok Ads.
- Do not add Google Analytics, Google Tag Manager, Meta Pixel, TikTok Pixel, call-click tracking, or other analytics in this version.
- No tracking setup is required now. Revisit only if the client requests it later.

## Visual assets and media

- Use the Tamseel logo, client logos, photographs, stills, and other visual assets from the official website.
- Use the nine official video embeds linked from the Projects page; do not substitute unrelated videos.
- Avoid placeholders in a finished page. Keep image aspect ratios; crop deliberately, not by stretching.
- Load heavy video embeds efficiently, preferably lazy-loaded below the fold, while keeping controls accessible.

## Technical and code quality requirements

- Use semantic HTML, separate CSS and JavaScript files, and vanilla JavaScript only.
- Keep the implementation readable and small. Organize styles by tokens/base, layout, component, and responsive rules; organize JavaScript around clearly named behaviors.
- Add brief comments to explain section structure, repeated call-link configuration, logo-loop behavior, and mobile-navigation behavior. Avoid comments that simply narrate obvious markup.
- Keep the telephone destination in one clearly discoverable configuration point or consistent shared markup, so it can be updated without hunting through the page.
- Use real anchor links for calls and navigation; support keyboard focus and visible focus styles.
- Provide responsive layouts, touch-sized controls, useful image alt text, accessible names, and reduced-motion support.
- Avoid unnecessary dependencies, external scripts, trackers, and decorative animation that competes with the film work.
- Domain, hosting, and deployment are deferred; build the page so it can be opened as a static page and later placed at an agreed URL.

## Acceptance checklist

- [ ] Every specified major section is present in the agreed order.
- [ ] Four navigation links target the correct sections.
- [ ] Every call CTA has a section-specific label and one shared correct tel destination.
- [ ] The page never prints the phone number visibly.
- [ ] All six services and all nine titled project embeds are present.
- [ ] Every logo from the source Clients strip appears; loop has no CTA/pause control, supports dragging and arrow keys, and respects reduced motion.
- [ ] All three reviews remain exact and untranslated.
- [ ] Review cards show large names, five stars and the Google wordmark; the fixed icon-only call shortcut is available at bottom right.
- [ ] Social and legal links use verified destinations; old WhatsApp link is absent.
- [ ] No form, FAQ, tracking script, pixel, visible phone number, placeholder, or unverified claim is present.
- [ ] Mobile, tablet, and desktop layouts are readable and usable; no horizontal overflow.
- [ ] HTML/CSS/JS are cleanly separated and commented where useful.

## Deferred items

- Final domain/path and publishing/hosting instructions.
- Ad pixels or analytics if specifically requested in a later phase.
- WhatsApp link if the client supplies and approves the correct destination.
