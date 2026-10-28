# Research and Reference

**Project:** Tamseel Production landing page  
**Source review date:** 27 October 2026

This document records facts and source assets for the build. Use the official pages below as the source for current logos, image assets, video embeds, and published wording. Client-confirmed landing-page choices in the PRD take precedence over existing website sections that the client chose to omit.

## Revision 4 implementation sources

- The hero uses licensed illustrative filmmaking photography by Cemrecan Yurtman: [original Unsplash photograph](https://unsplash.com/photos/film-crew-working-with-a-professional-camera-on-set-NAoSEZonwZY), under the [Unsplash License](https://unsplash.com/license). Local file: Assets/Images/cinema-camera.jpg. This image is not claimed to depict Tamseel's crew or a named client project. The latest client instruction permits outside imagery for design.
- About retains the supplied Assets/Images/About.webp. All 23 supplied client marks are used on a dark surface. Hover reveals the colors present in each source file and adds a small zoom. The strip is titled “Our Clients,” has no CTA, and can be dragged.
- The nine supplied YouTube IDs are recorded in Assets/Video-Embeds/Tamseel_Production_Video_Showreels.md. Their official thumbnail images are saved locally in Assets/Video-Posters/. Films remain hosted on YouTube.
- Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis), version 1.3.27, bundled locally in Assets/Vendor/ with its MIT license.
- [YouTube's official player requirements](https://developers.google.com/youtube/terms/required-minimum-functionality) require a real HTTP referrer. Use VS Code Live Server for local embedded playback. Per the latest client instruction, local file mode never substitutes an outgoing video link.

## Official pages reviewed

- [Homepage](https://tamseelproduction.com/)
- [Services](https://tamseelproduction.com/services/)
- [Projects](https://tamseelproduction.com/projects/)
- [About](https://tamseelproduction.com/about/)
- [Contact](https://tamseelproduction.com/contact/)
- [Privacy Policy](https://tamseelproduction.com/privacy-policy/)
- [Terms & Conditions](https://tamseelproduction.com/terms-and-conditions)

## Business and positioning notes

The site presents Tamseel as a Dubai video production company focused on cinematic storytelling and production support across the project lifecycle. Its About and Services pages mention creative direction/planning, cinematic lighting, professional audio, cinema cameras, editing, and production for different formats. The landing page's studio copy and proof points use these details; avoid unsupported superlatives or numerical claims.

The landing page is intended for international clients. It can say “Dubai-based” and speak to international projects, but do not claim a specific number of countries, years, clients, or completed productions unless that exact fact is visible on the official site and relevant to the page.

## Services — use all six

Use the source site’s service names and cover all of these:

1. Personal Branding Video Production
2. Documentary Filmmaking
3. Corporate Video & Photography Services
4. Advertisement Video Production
5. Livestream Production Services
6. Podcast

The descriptions should be freshly written for this landing page, short, factual, and specific to each service. The full individual service pages linked from the Services page can provide detail if needed. Do not paste long SEO paragraphs or keyword-stuffed website copy.

## Projects — use all nine titles and existing embeds

The official Projects page lists these nine pieces in this order:

1. Showreel | Tamseel Media Production
2. Music Video Showreel | Tamseel Production
3. Interview showreel
4. LaLiga & EA Sports | Dubai Football Academy Promo
5. Event L'ecole Videography Dubai
6. Lamprell | Day & Night Livestream
7. School Rugby Mini Documentary
8. Golf Promo Video | Emirates Golf Club
9. Dubai Events Highlights | DWTC | 2025

Use the actual player/embed source attached to each project on the official Projects page. Preserve the titles. Do not replace a project with a different Vimeo/YouTube result that happens to have a similar name. Give each embedded player an accessible title and use responsive sizing and lazy loading.

## Client logos

The homepage and Services page show the company’s Clients logo strip. Use every logo image displayed there, without omissions, additions, or text substitutions. Source the actual logo image assets from the official site, preserve their proportions, and use one consistent visual treatment that keeps logos legible. Do not recreate an image logo as typed text. The strip should loop continuously as requested; account for reduced-motion preferences and avoid duplicate screen-reader announcements.

## Published reviews — preserve exactly

The homepage currently displays these three Google reviews. Keep each quote in its original language and wording; do not translate, paraphrase, “correct,” or shorten it. The client explicitly requested a five-star visual beside each reviewer name. Treat that as a presentation requirement for these review cards; do not add an aggregate rating, review count, or other numerical rating claim.

### Houda Berrada

> I had a fantastic experience with Tamseel. They were incredibly supportive and had a customer-oriented approach. They made sure to thoroughly understand the brief and executed the tasks outlined in it perfectly. Whether it was for videography or podcasting services, they consistently delivered high-quality and professional work. I highly recommend their services for anyone looking for top-notch video and podcast production.

### Sarah Leither

> Wir haben unser Firmenvideo mit Tamseel Production erstellen lassen und sind absolut begeistert! So ein kompetentes und verlässliches Team! Auch die Qualität des Videos ist perfekt – genau so wie wir es haben wollten! Bereits jetzt konnten wir zahlreiche neue leads durch Tamseel Production‘s Arbeit erreichen! Ich kann diese Firma jedem nur wärmstens empfehlen

### Diana Iskaf

> شكراً ع التعاون الجميل من حضرتكم وإتقان شغلكم واهتمامكن بكل التفاصيل، أكيد رح نشتغل مع بعض بالمستقبل

Keep the reviewer names as displayed. Do not invent job titles, company names, profile photos, or other profile details.

## Social and legal links

Use verified official destinations in the footer. The current site’s Privacy Policy footer links to the following profiles:

- YouTube: [Tamseel Production](https://www.youtube.com/@tamseelproduction.official)
- Facebook: [Tamseel Production](https://www.facebook.com/@tamseelproduction)
- Instagram: [Tamseel Production](https://www.instagram.com/tamseelproduction.official/)
- Vimeo: [Bilal Ismat](https://vimeo.com/bilalismat)
- LinkedIn company page, verified from the company’s Vimeo description: [Tamseel Production](https://www.linkedin.com/company/tamseelproduction)

The existing site’s WhatsApp link points to +971 56 468 6107, while the client supplied a different call number for this landing page. Do not include that WhatsApp link or any WhatsApp CTA unless the destination is updated and approved. No official TikTok profile URL was verified during this research; do not invent one. The client’s use of TikTok Ads does not mean a TikTok profile link or TikTok tracking pixel should be added.

Link the footer to the same [Privacy Policy](https://tamseelproduction.com/privacy-policy/) and [Terms & Conditions](https://tamseelproduction.com/terms-and-conditions) as the official site.

## Contact-number discrepancy

The current official website displays +971-564686107 in its footer and contact information. The client has instructed us to use 052 302 5251 for this landing page. Use the client-supplied number only, encoded as +971523025251 in the tel link. Never display the number as visible page text. The developer should make one test call/link check with the client’s approved destination before release.

## Source and content rules

- Download/reuse visuals and logo files from Tamseel’s official website; use official embeds for the nine videos.
- Write original, concise landing-page copy based on verified company details and client direction.
- Do not reuse the source website’s FAQ, contact form, pricing, old phone number, or long SEO copy.
- Do not invent performance statistics, awards, guarantees, client endorsements, social profiles, or service promises.
- The reference screenshot informs final-CTA hierarchy only; its blue color scheme, particle graphics, and portfolio-template content are not brand requirements.
