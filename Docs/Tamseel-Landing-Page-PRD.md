# Tamseel Production — Landing Page PRD

**Status:** Revision 10 client changes implemented; final URL-dependent launch settings pending
**Updated:** 28 October 2026  
**Primary outcome:** Turn paid-ad visitors into phone calls to Tamseel Production.

This is the master build brief. The other four files provide source research, functional requirements, visual direction, and implementation planning. When a source website conflicts with an instruction in this brief, follow the client-confirmed landing-page decisions below.

## Product summary

Create a focused, single-page English landing page for Tamseel Production, a Dubai-based video production company targeting clients internationally. The page should show the range and quality of the company’s work, make the services easy to understand, establish trust with client logos and reviews, and make calling the obvious next step.

The page should feel art-directed for a real production company: specific, composed, and visual. Use real Tamseel work and factual company details. Avoid generic agency slogans, fabricated results, filler copy, and template-like effects.

## Audience and conversion

- **Audience:** International businesses, brands, organizations, creators, and professionals looking for video production.
- **Primary conversion:** Visitors use the call buttons to open their dialer with Tamseel’s number ready. A persistent WhatsApp shortcut is an additional contact option.
- **Call target:** Client-supplied UAE mobile number 052 302 5251, encoded internationally as +971523025251 in the telephone link.
- **Visibility:** Do not print the phone number as page text. Use contextual button labels; all call buttons use the same telephone link.
- **Availability:** Calls are handled 24/7. The company will return missed calls.
- **WhatsApp shortcut:** The bottom-right icon opens a WhatsApp chat with the same client-supplied UAE mobile number.
- **CTA rule:** Use short, clear labels such as “Let’s Talk”, “Contact Us” and “Call Us”. Every one of these buttons initiates the same call action.

## Locked client decisions

- Write the page in English for an international audience.
- Include all six services listed in the source website’s Services page.
- Include all nine projects/showreels listed on the source Projects page, using the existing titles and official embedded videos.
- Include every client logo displayed in the source website’s Clients strip.
- Reuse the existing reviews exactly as published, each in its original language.
- Include a four-link anchor navigation: Work, Services, About, Testimonials. Add a separate call button in the header.
- Use short, easy-to-understand call labels; never show the phone number as visible text.
- Include the existing Privacy Policy and Terms & Conditions links. Do not include social-media links or icons.
- Do not add a lead form, FAQ section, email CTA, analytics, tag manager, or advertising pixels in this version.
- Use plain HTML, CSS, and JavaScript. Keep the code organized, readable, and commented where it clarifies section behavior or decisions.
- The shared screenshot is a reference for a confident final CTA and clear visual hierarchy only. Do not reproduce its blue palette, particle background, personal-portfolio content, or template layout.
- Domain and deployment are deferred until the page itself is ready.

## Page structure and content direction

1. **Header:** Tamseel logo; anchor links Work, Services, About, Testimonials; call button labelled “Let’s Talk”. Use the supplied `Assets/Brand/Tab Favicon.png` as the browser-tab icon. Keep tablet and mobile navigation usable and the call action easy to reach.
2. **Hero:** Strong original headline, concise service summary, one call CTA, and a real Tamseel production still or approved showreel visual. On phones, left-align the text, vertically center the content, and keep the call button and showreel control on one row. Do not show “Dubai based. Globally minded.” Copy starting point:

   - Eyebrow: “VIDEO PRODUCTION, FROM DUBAI TO THE WORLD”
   - Headline: “Videos that make people stop.”
   - Supporting copy: “Video production in Dubai for brands, businesses and people. From corporate videos and commercials to documentaries, podcasts and live productions.”
   - Call CTA: “Contact Us”

   Treat this as proposed landing-page copy, not a quote from the existing website. Keep it natural and edit only to improve clarity or factual accuracy.

3. **Client-logo strip:** Continuously loop every logo in the source Clients strip under the heading “Our Clients.” Remove the “In good company” label, CTA, and pause control. Allow manual horizontal dragging; show source colors at rest and add a small zoom on hover. Normalize visible logo sizes.
4. **Work/showreels:** Embed all nine official videos from the Projects page, retaining the titles listed in Research and Reference. Use responsive video frames and a “Call Us” CTA. Emphasize “speaks.” in orange and omit the secondary sentence under the title. On phones, keep the CTA on the same line as the section title, aligned to the opposite side.
5. **Services:** Title the section “Our Video Services.” Use six compact cards with official service titles and short, source-verified descriptions. Make each full card a telephone link labelled “Call Us” with an orange border on hover.
6. **About / why Tamseel:** One combined section, not two. Pair a production image with “Small details. A bigger picture.” and color “A bigger picture.” orange. Keep the copy grounded in published details about creative direction, cinematic lighting, professional audio, cinema cameras, and production workflow. On phones, show the text first, image below it, and a centered “Contact Us” button below the image. Do not add unsupported performance metrics.
7. **Reviews:** Show the three published reviews exactly as captured in Research and Reference, in English, German, and Arabic. Preserve spelling, language, and meaning; do not translate or rewrite. Use larger quote text, large reviewer names, a Google-colored wordmark, and the client-requested five-star visual. Place the “Call Us” CTA at the top right on desktop and centered below the cards on phones.
8. **Recognition:** Place the four supplied Dubai’s Best, Trustpilot and Clutch badges after Reviews and immediately before the final CTA. Keep their images fully visible and linked to their supplied profiles; do not add claims or awards.
9. **Final CTA and footer:** Use “Discuss your project.” in a natural text flow, with plain supporting copy and a “Contact Us” button. Keep the current design and footer content. The recognition section now comes before this CTA. Retain the icon-only WhatsApp contact shortcut fixed at bottom right.

## Visual direction

Revision 10 reduces the mobile hero height to remove excess space before the client strip and adds a subtle divider so the logo strip reads as its own section. Recognition moves above “Discuss your project.”; its design and linked badges stay unchanged. The bottom-right floating button now opens WhatsApp at the client-supplied number. Earlier revisions established the page structure, SEO metadata, Organization JSON-LD, exact reviews and all other current styles and interactions.

## Search and AI discovery

Use a concise, accurate title and description, descriptive visible copy, semantic headings, useful image alternatives, crawlable HTML, and Organization structured data that matches the page. The page names the company, its Dubai base, and the services visible in the service cards. Do not add keyword lists, hidden text, fake ratings, unsupported address/coverage details, FAQ markup, or an `llms.txt` file. Google's published guidance says its AI Search features use the same foundational SEO practices and do not require special AI markup.

The final campaign URL is not selected. Before publication, set the self-referencing canonical URL and `og:url` to that exact URL, and make sure the Open Graph image is publicly fetchable. Add the landing URL to the site's sitemap (or create a sitemap if needed), keep it allowed by robots/CDN rules, then verify the deployed page in Search Console and test its structured data. Crawling, indexing, ranking and AI feature inclusion are not guaranteed.

## Latest playback decision

All nine gallery videos must play directly inside the landing-page cards on click. Use button controls and real embedded players; remove outgoing watch links and external video fallbacks. Only the hero showreel uses an on-page dialog. On phones, the gallery uses a single column. Use VS Code Live Server for local preview; project-specific preview scripts are not part of the site. Deploy the HTML, CSS, JavaScript and Assets directory to the chosen host.

## Out of scope

- Forms, lead capture fields, FAQs, pricing tables, email buttons, chat widgets, or inline WhatsApp CTAs. The approved icon-only floating WhatsApp shortcut is the sole exception.
- Google Analytics, Google Tag Manager, Meta Pixel, TikTok Pixel, call-click tracking, or any other analytics instrumentation.
- A CMS, backend, framework, build system, or deployment/domain work in this phase.
- Social-media links or icons, new claims, made-up numbers, invented client relationships, fabricated reviews, or social-account URLs.

## Acceptance criteria

- The agreed page sections and content appear in the specified order and work as a coherent, concise sales page.
- Each content section except the intentionally CTA-free logo and recognition badges has a clear call-button label. All text call buttons use the correct tel destination; the floating WhatsApp shortcut opens the client-supplied number. No phone number is visible as page text.
- Each service card is a call target across its full area and visibly says “Call Us”.
- All six services, nine videos, all client-strip logos, and all approved reviews are included.
- Video embeds and visual assets come from Tamseel’s official website or verified official profiles; no placeholders remain.
- Testimonials remain in their source languages and wording.
- Four navigation links jump to the intended page sections; the Testimonials link targets the reviews section, and the mobile menu works by keyboard and touch.
- The page works at common mobile, tablet, and desktop widths; embeds, draggable logo loop, and text do not overflow. Logo hover zoom does not clip the marks.
- Legal links resolve to the official destinations. Social profile links are absent; the fixed WhatsApp CTA uses only the newly approved number, not the old website destination.
- No form, FAQ, tracking code, pixels, or visible phone number has been added.
- HTML, CSS, and JavaScript are separated cleanly and include useful comments without clutter.

## Related documents

- [Research and Reference](Research-and-Reference.md)
- [Requirements](Requirements.md)
- [Designing and Prototyping](Designing-and-Prototyping.md)
- [Planning](Planning.md)
