# Tamseel Production — Landing Page

A static, responsive landing page for Tamseel Production. It presents the company’s work, services, studio and client reviews, with phone calls as the primary action.

## Project contents

```text
Tamseel Production/
├── index.html                 # Page content and structure
├── styles.css                 # Visual design and responsive layouts
├── script.js                  # Navigation, scrolling, logo loop and video players
├── Assets/
│   ├── Brand/                  # Tamseel logo and browser-tab favicon
│   ├── Clint-Logos/             # Client logo images used in the page
│   ├── Images/                  # Production and studio images
│   ├── Recognition/              # Supplied Dubai's Best, Trustpilot and Clutch badges
│   ├── Video-Posters/           # Posters shown before a video is played
│   ├── Video-Embeds/            # Reference list of the official showreel links
│   └── Vendor/                  # Local Lenis files and their license
└── Docs/                        # Project brief and supporting documentation
```

The browser loads `index.html`, `styles.css`, `script.js` and the referenced files under `Assets/`. `Docs/` is supporting project documentation and is not required for the live site.

## Preview in VS Code

Use the **Live Server** extension so the page opens over HTTP:

1. Open this project folder in VS Code.
2. If needed, install the **Live Server** extension.
3. Open `index.html`, then select **Go Live** in the VS Code status bar (or right-click the file and choose **Open with Live Server**).

YouTube’s embedded player may reject a page opened directly as a `file://` URL. Live Server provides the local web origin needed for reliable video playback. Python and project-specific preview scripts are not needed.

## Deploy

No build step, package installation, backend or server-side runtime is required. Deploy to any static host that serves HTML, CSS, JavaScript and image files over HTTPS.

1. Upload `index.html`, `styles.css`, `script.js` and the complete `Assets/` directory to the host’s public web root.
2. Keep the folder names and file paths unchanged. Paths are case-sensitive on many hosts.
3. Set `index.html` as the site’s default document if the host does not do that automatically.
4. Open the HTTPS URL and confirm that the page, local images, favicon and embedded videos load.

Do not upload `Docs/` unless you want the project documentation publicly accessible. There are no `Preview.cmd` or `preview.py` files in the deployable project.

## Calls and videos

- All call buttons open the visitor’s dialer using `tel:+971523025251` (the supplied UAE number, 052 302 5251). The number is not printed as page text.
- Keep the `CALL_TARGET` constant in `script.js` and the telephone `href` values in `index.html` aligned if the client changes the number. The HTML links remain usable if JavaScript is unavailable.
- The nine gallery videos use YouTube’s embedded player inside the landing page. Clicking a poster loads the player in place; the page does not navigate to a separate YouTube watch page.
- Video playback needs an internet connection and the source videos must allow embedding. The hero showreel uses the same on-page player approach in a dialog.
- Call labels use plain wording such as “Let’s Talk”, “Contact Us” and “Call Us” so visitors immediately understand that each action opens their dialer.

## Updating the page

- Edit page copy, section order, navigation, telephone links and video IDs in `index.html`.
- Edit colors, typography, spacing, hover effects and breakpoints in `styles.css`.
- Edit interactive behavior, the shared call destination, embedded-player setup and smooth scrolling in `script.js`.
- Replace images in `Assets/` while preserving the referenced paths, or update the corresponding `src` values in `index.html`.
- The browser-tab icon is `Assets/Brand/Tab Favicon.png`; the in-page brand mark uses `Assets/Brand/Tamseel Logo.webp`.
- Smooth scrolling uses the locally stored Lenis files in `Assets/Vendor/`; no package manager or remote JavaScript library is required.

## External services

- **YouTube:** embedded video playback; requires internet access and embedding to be allowed on the source videos.
- **Google Fonts:** DM Sans, Manrope and Instrument Serif. System-font fallbacks are provided if Google Fonts are unavailable.
- **Tamseel links:** Privacy Policy and Terms & Conditions point to their existing public destinations. Social media links and icons are intentionally omitted per the latest client direction.

This page does not include forms, analytics, advertising pixels, call-click tracking or a backend.
