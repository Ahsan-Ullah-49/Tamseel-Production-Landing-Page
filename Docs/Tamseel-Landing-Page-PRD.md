# Tamseel Production — Landing Page PRD

**Status:** Revision 5 implemented; ready for design review  
**Updated:** 28 October 2026  
**Primary outcome:** Turn paid-ad visitors into phone calls to Tamseel Production.

This is the master build brief. The other four files provide source research, functional requirements, visual direction, and implementation planning. When a source website conflicts with an instruction in this brief, follow the client-confirmed landing-page decisions below.

## Product summary

Create a focused, single-page English landing page for Tamseel Production, a Dubai-based video production company targeting clients internationally. The page should show the range and quality of the company’s work, make the services easy to understand, establish trust with client logos and reviews, and make calling the obvious next step.

The page should feel art-directed for a real production company: specific, composed, and visual. Use real Tamseel work and factual company details. Avoid generic agency slogans, fabricated results, filler copy, and template-like effects.

## Audience and conversion

- **Audience:** International businesses, brands, organizations, creators, and professionals looking for video production.
- **Primary conversion:** A visitor taps a call button and their device opens its dialer with Tamseel’s number ready.
- **Call target:** Client-supplied UAE mobile number 052 302 5251, encoded internationally as +971523025251 in the telephone link.
- **Visibility:** Do not print the phone number as page text. Use contextual button labels; all call buttons use the same telephone link.
- **Availability:** Calls are handled 24/7. The company will return missed calls.
- **CTA rule:** Each major section has a relevant call button with its own label. Every one of these buttons initiates the same call action.

## Locked client decisions

- Write the page in English for an international audience.
- Include all six services listed in the source website’s Services page.
- Include all nine projects/showreels listed on the source Projects page, using the existing titles and official embedded videos.
- Include every client logo displayed in the source website’s Clients strip.
- Reuse the existing reviews exactly as published, each in its original language.
- Include a four-link anchor navigation: Work, Services, About, Reviews. Add a separate call button in the header.
- Use a different, context-matched label for each call button; never show the phone number as visible text.
- Add links to verified company social profiles and the existing Privacy Policy and Terms & Conditions.
- Do not add a lead form, FAQ section, email CTA, analytics, tag manager, or advertising pixels in this version.
- Use plain HTML, CSS, and JavaScript. Keep the code organized, readable, and commented where it clarifies section behavior or decisions.
- The shared screenshot is a reference for a confident final CTA and clear visual hierarchy only. Do not reproduce its blue palette, particle background, personal-portfolio content, or template layout.
- Domain and deployment are deferred until the page itself is ready.

## Page structure and content direction

1. **Header:** Tamseel logo; anchor links Work, Services, About, Reviews; call button labelled “Let’s Talk”. Use the supplied `Assets/Brand/Tab Favicon.png` as the browser-tab icon. Keep tablet and mobile navigation usable and the call action easy to reach.
2. **Hero:** Strong original headline, concise service summary, one call CTA, and a real Tamseel production still or approved showreel visual. Copy starting point:

   - Eyebrow: “VIDEO PRODUCTION, FROM DUBAI TO THE WORLD”
   - Headline: “Films that make people stop.”
   - Supporting copy: “For the brands, people and ideas worth paying attention to. From the first conversation to the final cut.”
   - Call CTA: “Let’s Talk About Your Film”

   Treat this as proposed landing-page copy, not a quote from the existing website. Keep it natural and edit only to improve clarity or factual accuracy.

3. **Client-logo strip:** Continuously loop every logo in the source Clients strip under the heading “Our Clients.” Remove the “In good company” label, CTA, and pause control. Allow manual horizontal dragging; hovering reveals source colors and a small zoom. Normalize visible logo sizes.
4. **Work/showreels:** Embed all nine official videos from the Projects page, retaining the titles listed in Research and Reference. Use responsive video frames and a call CTA labelled “Make Your Next Film”. Emphasize “speaks.” in orange and omit the secondary sentence under the title.
5. **Services:** Six compact cards using the official service titles and short, source-verified descriptions. Make each full card a telephone link with its own contextual call label and an orange border on hover.
6. **About / why Tamseel:** One combined section, not two. Pair a production image with “Small details. A bigger picture.” and color “A bigger picture.” orange. Keep the copy grounded in published details about creative direction, cinematic lighting, professional audio, cinema cameras, and production workflow. Do not add unsupported performance metrics.
7. **Reviews:** Show the three published reviews exactly as captured in Research and Reference, in English, German, and Arabic. Preserve spelling, language, and meaning; do not translate or rewrite. Use larger quote text, large reviewer names, a Google-colored wordmark, and the client-requested five-star visual. Add a call CTA.
8. **Final CTA and footer:** Keep “Let’s make something matter.” with a call button, social links, Privacy Policy, Terms & Conditions, and the copyright line ending “All rights reserved.” Add a persistent bottom-right icon-only call button. Use the screenshot only as inspiration for the CTA hierarchy.

## Visual direction

Revision 5 adds the supplied tab favicon, whole-card service call targets, and tighter tablet and phone layouts. The page retains the cinematic photo hero, charcoal/ivory/orange palette, compact sections, refined call-button hover states, a continuously moving draggable strip with consistently sized client logos, official service copy, more legible orange-accented review cards and a floating call shortcut. Hovering logos reveals their source colors. All nine gallery films play inline inside their cards; the hero showreel uses an on-page dialog. Lenis provides smooth wheel/anchor movement. Licensed stock imagery is allowed for visual design; official projects, logos and reviews remain authentic. The revised Designing and Prototyping document is the visual source of truth and supersedes earlier example labels/layout suggestions above.

## Latest playback decision

All nine gallery videos must play directly inside the landing-page cards on click. Use button controls and real embedded players; remove outgoing watch links and external video fallbacks. Only the hero showreel uses an on-page dialog. On phones, the gallery uses a single column. Use VS Code Live Server for local preview; project-specific preview scripts are not part of the site. Deploy the HTML, CSS, JavaScript and Assets directory to the chosen host.

## Out of scope

- Forms, lead capture fields, FAQs, pricing tables, email buttons, chat widgets, or WhatsApp CTAs.
- Google Analytics, Google Tag Manager, Meta Pixel, TikTok Pixel, call-click tracking, or any other analytics instrumentation.
- A CMS, backend, framework, build system, or deployment/domain work in this phase.
- New claims, made-up numbers, invented client relationships, fabricated reviews, or social-account URLs that cannot be verified.

## Acceptance criteria

- The agreed page sections and content appear in the specified order and work as a coherent, concise sales page.
- Each content section except the intentionally CTA-free logo strip has a relevant, distinct call-button label. The floating call shortcut and all text call buttons use the same correct tel destination; no number is visible on the page.
- Each service card is a call target across its full area and has its own contextual call label.
- All six services, nine videos, all client-strip logos, and all approved reviews are included.
- Video embeds and visual assets come from Tamseel’s official website or verified official profiles; no placeholders remain.
- Testimonials remain in their source languages and wording.
- Four navigation links jump to the intended page sections; the mobile menu works by keyboard and touch.
- The page works at common mobile, tablet, and desktop widths; embeds, draggable logo loop, and text do not overflow. Logo hover zoom does not clip the marks.
- Social and legal links resolve to the official destinations. Do not include the existing WhatsApp link until its old phone destination is confirmed or updated.
- No form, FAQ, tracking code, pixels, or visible phone number has been added.
- HTML, CSS, and JavaScript are separated cleanly and include useful comments without clutter.

## Related documents

- [Research and Reference](Research-and-Reference.md)
- [Requirements](Requirements.md)
- [Designing and Prototyping](Designing-and-Prototyping.md)
- [Planning](Planning.md)
