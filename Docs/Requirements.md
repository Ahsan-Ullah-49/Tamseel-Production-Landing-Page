# Requirements

**Project:** Tamseel Production landing page  
**Implementation:** Static HTML, CSS and vanilla JavaScript, with locally bundled Lenis for scrolling

## Revision 10 refinements

The latest client feedback keeps call labels short (“Let’s Talk”, “Contact Us” and “Call Us”), uses “Testimonials” in navigation, removes “Dubai based. Globally minded.”, moves recognition above the closing CTA, and changes the fixed bottom-right shortcut to WhatsApp using the supplied mobile number. Mobile hero copy remains left-aligned and vertically centered with both controls in one row; reduce unused hero space and separate it from the client logo strip. About order, Work heading CTA placement and Reviews CTA placement remain as previously defined. Revision 9 SEO metadata remains in place; Designing and Prototyping describes the visual implementation.

- Display all nine actual video posters in a 3×3 desktop grid and two mobile columns. Clicking a gallery thumbnail replaces it with the matching embedded player inside that card. Only one video plays at a time. Close video restores the poster. On mobile the playing card spans both columns. The hero showreel uses an on-page dialog.
- All 23 supplied client logos sit on a dark background under an “Our Clients” heading, with their source colors shown at rest. Remove “In good company”, the CTA, and the pause button. The strip loops continuously and supports pointer/touch dragging and arrow-key browsing. Hover adds a small zoom; normalize visible logo sizes without clipping. Reduced-motion mode turns off autoplay and keeps manual scrolling available.
- On dark call buttons, change the phone icon color when the button fills orange. The fixed WhatsApp shortcut uses WhatsApp green with the standard white WhatsApp mark; on hover, the background changes to Tamseel orange while the white mark remains visible.
- The fixed bottom-right icon-only WhatsApp shortcut opens `https://wa.me/971523025251` in a new tab. Give it the accessible name “Chat with Tamseel Production on WhatsApp.” Do not use the old WhatsApp destination from the source website.
- Use plain, repeated labels where appropriate: “Let’s Talk”, “Contact Us” and “Call Us”. Each call action displays a phone icon and uses the same tel destination.
- Add a compact, CTA-free recognition section after Reviews and immediately before the final call area. Link each of the four supplied Dubai’s Best, Trustpilot and Clutch images to the client-provided profile URL; display each image completely without cropping.
- Licensed stock imagery is allowed by the latest instruction, with provenance recorded. Do not identify another production crew as Tamseel's team.
- Lenis 1.3.27 is the sole runtime helper. Retain native touch momentum and respect reduced-motion preference changes.
- Use VS Code Live Server for local HTTP preview. Video controls are buttons, never outgoing YouTube links. No “Watch on YouTube” or external playback fallback is included. A local file URL may not supply YouTube's required web origin. Embedded players are sandboxed against popup and parent-page navigation.

### SEO and AI search visibility

- Use the page title “Video Production Company in Dubai | Tamseel Production”, a concise factual meta description, matching Open Graph/Twitter title and description, and the visible Dubai video-production context.
- Keep one descriptive H1, a logical H2/H3 hierarchy, meaningful text content, descriptive image alternatives where images convey information, and fast responsive layouts.
- Include Organization JSON-LD only for facts supported by the visible page and official company identity. Do not add LocalBusiness address/coordinates, opening-hour schema, AggregateRating/Review schema, or service-area claims until verified and consistent with the official Business Profile. Do not mark up the business's own testimonials as aggregate ratings.
- Do not add hidden keyword text, FAQ content/schema, or AI-only files/markup. AI discovery uses ordinary crawlable, helpful page content; it has no guaranteed ranking shortcut.
- The campaign URL is still unconfirmed. Add the exact self-canonical and `og:url` only after the public URL is set. Ensure the share image is accessible over HTTPS. Add the URL to the live sitemap, confirm robots/CDN allow crawling, then verify through Search Console and Google's structured-data tools.

## Functional requirements

### Call conversion

- The primary action is a phone call. Every major content section has a clear, short call CTA; the fixed WhatsApp shortcut is an additional contact route.
- Every call CTA points to the same destination: tel:+971523025251, based on the client-provided number 052 302 5251.
- Render the phone number nowhere as visible text. The user should see a button label, tap it, and get the device’s dialer/calling app with the number ready. Do not try to place a call automatically.
- Include the call action in the header, hero, work section, every service card, About section, Reviews, and final CTA. Keep an icon-only WhatsApp shortcut fixed at the bottom right. The logo strip has no CTA.
- Suggested labels:
  - Header: “Let’s Talk”
  - Hero: “Contact Us”
  - Work: “Call Us”
  - Every service card: “Call Us”
  - About: “Contact Us”
  - Reviews: “Call Us”
  - Final CTA: “Contact Us”
  - Floating WhatsApp shortcut: icon-only with an accessible “Chat with Tamseel Production on WhatsApp” label.
- All button labels must be concise and clearly lead to a call.

### Navigation and page sections

- Provide four working same-page navigation links: Work, Services, About, Testimonials.
- Use matching section IDs and ensure links work from desktop and mobile navigation.
- Keep the sequence: header, hero, separated client-logo strip, nine-video work section, services, combined About/why section, reviews, recognition badges, final call area, footer branding/legal links.
- The logo strip includes every client logo on the source website and loops continuously. It has only the “Our Clients” heading, no CTA or pause button; it is manually draggable and keyboard browsable. Use a static, scrollable reduced-motion fallback.
- The Work section embeds all nine official projects listed in Research and Reference, in the same title order.
- Services includes all six source-site services, each with a concise description and full-card “Call Us” telephone action. The section heading is “Our Video Services.”
- Combine About and why-Tamseel content in one image-plus-short-points section; show copy before image on phones.
- Reviews use the three published quotes and names in their original languages and wording. Use larger type, large names, five client-requested stars, a Google-colored wordmark, and a contrasting card treatment. Put “Call Us” beside the heading on desktop and below the cards, centered, on mobile.

### Footer and outbound links

- Do not include social-media links or icons.
- Include official Privacy Policy and Terms & Conditions links.
- Use WhatsApp only for the approved fixed floating contact shortcut at `https://wa.me/971523025251`; do not add social-profile links or inline WhatsApp buttons. Do not fabricate a TikTok profile URL.
- Do not show email as a call substitute.

## Content and experience constraints

- Page language: English. Preserve source languages for the reviews.
- Audience: international clients; present Tamseel as Dubai-based without inventing coverage statistics.
- Calls are available 24/7; the business handles missed-call follow-up. This is operational context, not a reason to print a phone number.
- No lead form, contact form, FAQ, pricing table, embedded chat widget, email CTA, or additional contact path beyond the call CTAs and approved floating WhatsApp shortcut.
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
- [ ] Every call CTA uses a short, clear label and one shared correct tel destination.
- [ ] The page never prints the phone number visibly.
- [ ] All six services and all nine titled project embeds are present.
- [ ] Every logo from the source Clients strip appears; loop has no CTA/pause control, supports dragging and arrow keys, and respects reduced motion.
- [ ] All four supplied recognition images appear after Reviews and before the final call area, link to their approved profiles, and remain uncropped.
- [ ] Search title, concise description, social preview metadata, visible service/location terms and valid Organization JSON-LD are present; no unsupported local or review schema is present.
- [ ] All three reviews remain exact and untranslated.
- [ ] Review cards show large names, five stars and the Google wordmark; the fixed icon-only WhatsApp shortcut opens the approved chat destination.
- [ ] Privacy Policy and Terms & Conditions use their verified destinations; social profile links and the old WhatsApp destination are absent.
- [ ] No form, FAQ, tracking script, pixel, visible phone number, placeholder, or unverified claim is present.
- [ ] Mobile, tablet, and desktop layouts are readable and usable; no horizontal overflow.
- [ ] HTML/CSS/JS are cleanly separated and commented where useful.

## Deferred items

- Final public campaign URL, self-canonical, `og:url`, sitemap entry and Search Console submission.
- Verified physical address/coordinates and Google Business Profile details before adding LocalBusiness markup.
- Ad pixels or analytics if specifically requested in a later phase.
- None for the WhatsApp destination; the floating shortcut uses the client-approved number. Verify the deployed chat destination on mobile and desktop.
