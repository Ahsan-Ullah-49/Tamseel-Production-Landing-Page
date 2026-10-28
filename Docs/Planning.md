# Planning

**Project:** Tamseel Production landing page  
**Build scope:** Static single-page site; domain and deployment later

## Revision 10 local review and handoff

Open `index.html` through the VS Code Live Server extension for local preview. A local HTTP origin supports YouTube's embedded player; opening the file directly may not. Python and project-specific preview scripts are not required. All nine gallery films play inside their cards; video controls must never redirect to YouTube.

Production files are index.html, styles.css, script.js and Assets/. Assets/Vendor/ contains Lenis 1.3.27 and its license; Assets/Video-Posters/ contains the official video thumbnails; Assets/Recognition/ contains the client-supplied proof badges. Docs/ contains five Markdown documents.

Follow the Revision 10 Designing and Prototyping document for the current compact layout, colors, typography, call-button hover states, video dialog and logo-loop interaction. Recognition badges now precede the final call area, remain clickable and uncropped. The fixed WhatsApp shortcut uses the client-approved number. SEO metadata and Organization JSON-LD are in `index.html`; keep their claims aligned with visible content. Earlier examples below are implementation planning notes, not instructions to restore the rejected first design.

## Build sequence

### 1. Set up the static project

Prepare a simple structure such as:

- index.html
- styles.css
- script.js
- assets/ for the logo, client marks, photos, and approved local image files

Do not add a framework, package manager, CMS, backend, analytics library, or pixel manager.

### 2. Collect and map official assets

- From the official website, collect the Tamseel logo, every logo in the Clients strip, and suitable company/production stills. Keep the client-supplied recognition images under Assets/Recognition/.
- From the official Projects page, identify the exact video embed URL for each of the nine titles in Research and Reference. Keep the title-to-player mapping in the same order.
- Keep social-profile links off the landing page; add only the approved fixed WhatsApp contact shortcut.
- Use actual policy and terms links from the source site.
- Keep assets named descriptively and avoid duplicate files.

### 3. Build the semantic page structure

Create the header and anchor navigation, then the hero, separated logo strip, work section, six service cards, combined About/why section, reviews, recognition section, final call area, and logo/legal footer. Use semantic headings and landmarks. Add each call link as a real telephone anchor using the client-approved destination.

### 4. Add content and media

- Use the proposed hero and final-CTA copy direction from the PRD; refine only for natural phrasing and accuracy.
- Write concise, service-specific descriptions based on the official Services page.
- Add every logo and all nine official video embeds.
- Copy the three exact reviews from Research and Reference without edits or translations.
- Add the existing legal pages; do not add social-media links or icons.
- Keep the text CTAs as calls; the icon-only floating WhatsApp control is the sole additional contact route. Do not add forms, email, or other contact options.

### 5. Apply the visual system

Use the palette, typography, spacing, and motion guidance in Designing and Prototyping. Make the final CTA visually clear while keeping its colors and artwork original to Tamseel. Keep the film work prominent without making every section dark or animated.

### 6. Add minimal interaction

Use JavaScript only for behavior that needs it, such as the mobile menu, seamless draggable logo loop, and video embeds. Keep navigation functional without JavaScript where practical. Respect reduced-motion preferences. Add no analytics or click tracking.

### 7. Review against the requirements

- Confirm all page sections, six services, nine videos, client logos, recognition badges, reviews, and policy links are present; social links and icons are absent.
- Confirm all text call buttons use the same tel destination, use short labels such as Call Us or Contact Us, and display no number. Confirm the floating WhatsApp shortcut opens the approved number.
- Open a call link on a phone to confirm it opens the dialer with the supplied number ready; ask the client to verify the destination before launch.
- Check the page at mobile, tablet, and desktop widths; check anchor offsets, keyboard navigation, focus visibility, image crops, hover states, logo dragging, video controls, and Arabic RTL rendering.
- Confirm no FAQ, form, visible number, old WhatsApp link, tracking code, unverified claim, or placeholder remains.
- Keep comments concise and useful. A developer should be able to identify section structure, shared call target, logo loop, and mobile-menu behavior quickly.

### 8. Finish search setup after the public URL is chosen

- Set the page's self-referencing canonical and `og:url` to the exact deployed landing-page URL. Do not point them at the main homepage unless the landing page replaces that homepage.
- Confirm the Open Graph thumbnail returns successfully over HTTPS and renders in social preview debuggers.
- Add the landing URL to the existing sitemap (or create/update the sitemap at the site's canonical host); confirm Googlebot is not blocked by robots.txt, CDN rules or hosting settings.
- Validate the Organization JSON-LD and inspect the live page in Google Search Console. Request indexing after deployment; indexing and search placement are not guaranteed.
- Confirm the Business Profile name, phone, address and hours with the client before adding LocalBusiness markup or local business facts not visible on the landing page.

## Handoff notes

- The client has not chosen a domain or publishing location; settle those after the page is ready.
- Google, Meta, and TikTok are planned ad channels, but this version has no tracking requirement.
- The supplied number is different from the number currently visible on the company website. The landing page must use the client-supplied number and must not print it visibly.
- The WhatsApp shortcut uses the current client-approved number, not the older WhatsApp destination on the official website.
- Social profiles were researched as references but are intentionally omitted from this landing page by client request.

## Definition of done

The static page follows the PRD flow, uses official source assets, client-supplied recognition badges and exact reviews, provides simple call CTAs plus the approved WhatsApp shortcut, follows the visual system, works responsively and accessibly, contains accurate on-page metadata and Organization structured data, and contains no unapproved tracking. Final URL-dependent canonical, sitemap and Search Console work happens after the client chooses the public URL.
