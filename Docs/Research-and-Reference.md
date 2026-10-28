# Research and Reference

**Project:** Tamseel Production landing page  
**Source review date:** 27 October 2026

This document records facts and source assets for the build. Use the official pages below as the source for current logos, image assets, video embeds, and published wording. Client-confirmed landing-page choices in the PRD take precedence over existing website sections that the client chose to omit.

## Revision 10 implementation sources

- The hero uses licensed illustrative filmmaking photography by Cemrecan Yurtman: [original Unsplash photograph](https://unsplash.com/photos/film-crew-working-with-a-professional-camera-on-set-NAoSEZonwZY), under the [Unsplash License](https://unsplash.com/license). Local file: Assets/Images/cinema-camera.jpg. This image is not claimed to depict Tamseel's crew or a named client project. The latest client instruction permits outside imagery for design.
- About retains the supplied Assets/Images/About.webp. All 23 supplied client marks are used on a dark surface with the colors present in each source file visible at rest; hover adds a small zoom. The strip is titled “Our Clients,” has no CTA, and can be dragged.
- The client supplied four recognition images in `Assets/Recognition/`: `Dubai Best.webp`, `truspilot.webp`, `Clutch.svg` and `Clutch reviews.png`. Place them after Reviews and before the final call area, link them to the client-approved Dubai’s Best, Trustpilot or Clutch profiles, and display each image with `object-fit: contain` so no badge is cropped. Do not add awards, ratings or platform claims beyond these supplied badge images.
- The nine supplied YouTube IDs are recorded in Assets/Video-Embeds/Tamseel_Production_Video_Showreels.md. Their official thumbnail images are saved locally in Assets/Video-Posters/. Videos remain hosted on YouTube.
- Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis), version 1.3.27, bundled locally in Assets/Vendor/ with its MIT license.
- [YouTube's official player requirements](https://developers.google.com/youtube/terms/required-minimum-functionality) require a real HTTP referrer. Use VS Code Live Server for local embedded playback. Per the latest client instruction, local file mode never substitutes an outgoing video link.

## Search and AI-search references

- Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) recommends concise, accurate page titles and useful descriptions, descriptive image alternatives, and content written for people.
- Google's [AI features website guidance](https://developers.google.com/search/docs/appearance/ai-features) says normal SEO foundations apply; the page must be indexable and useful, and there is no special AI schema or AI text file required.
- Google's [Generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) advises people-first, distinctive content and says `llms.txt`, forced content chunking, and other proposed AEO/GEO shortcuts do not improve Google Search visibility.
- Google's [Organization structured-data guidance](https://developers.google.com/search/docs/appearance/structured-data/organization) supports using accurate organization identity details. LocalBusiness markup is deliberately not added because this landing-page brief does not establish the company's full physical address or verified Business Profile values.
- The official company's homepage is [tamseelproduction.com](https://tamseelproduction.com/). Use it as the organization website entity; do not treat it as the landing page's canonical URL unless the campaign actually publishes at that exact URL.

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

The current website exposes the following official profiles. This list is source research only; per the latest client direction, do not display social-media links or icons on the landing page:

- YouTube: [Tamseel Production](https://www.youtube.com/@tamseelproduction.official)
- Facebook: [Tamseel Production](https://www.facebook.com/@tamseelproduction)
- Instagram: [Tamseel Production](https://www.instagram.com/tamseelproduction.official/)
- Vimeo: [Bilal Ismat](https://vimeo.com/bilalismat)
- LinkedIn company page, verified from the company’s Vimeo description: [Tamseel Production](https://www.linkedin.com/company/tamseelproduction)

The existing site's WhatsApp link points to an older number. The client has now approved the phone number supplied for the landing page as the destination of its fixed WhatsApp shortcut. Use `https://wa.me/971523025251`; do not reuse the source site's older WhatsApp URL. Do not add WhatsApp social-profile links or any other social profiles. No official TikTok profile URL was verified during this research; do not invent one. The client's use of TikTok Ads does not mean a TikTok profile link or TikTok tracking pixel should be added.

Link the footer to the same [Privacy Policy](https://tamseelproduction.com/privacy-policy/) and [Terms & Conditions](https://tamseelproduction.com/terms-and-conditions) as the official site.

## Contact-number discrepancy

The current official website displays +971-564686107 in its footer and contact information. The client has instructed us to use 052 302 5251 for this landing page. Use the client-supplied number only, encoded as +971523025251 in the tel link. Never display the number as visible page text. The developer should make one test call/link check with the client’s approved destination before release.

## Source and content rules

- Download/reuse visuals and logo files from Tamseel’s official website; use official embeds for the nine videos.
- Write original, concise landing-page copy based on verified company details and client direction.
- Do not reuse the source website’s FAQ, contact form, pricing, old phone number, or long SEO copy.
- Do not invent performance statistics, awards, guarantees, client endorsements, social profiles, or service promises. The supplied recognition badges are the only exception and must be displayed as supplied.
- The reference screenshot informs final-CTA hierarchy only; its blue color scheme, particle graphics, and portfolio-template content are not brand requirements.
