/* Tamseel interactions. No analytics, ad pixels, forms or call tracking. */
(() => {
  "use strict";

  // Shared destination. Static hrefs also work if JavaScript is unavailable.
  const CALL_TARGET = "tel:+971523025251";
  document.querySelectorAll("[data-call]").forEach((link) => {
    link.href = CALL_TARGET;
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.querySelector(".site-header");
  const menu = document.querySelector("#navigation");
  const menuToggle = document.querySelector(".menu-toggle");
  const dialog = document.querySelector(".film-dialog");
  let lenis = null;

  // Normalize wheel input and retain a stable floating-point scroll position.
  // Touch retains native momentum; OS motion preference changes apply live.
  function configureScroll() {
    lenis?.destroy();
    lenis = null;
    if (!reducedMotion.matches && window.Lenis) {
      lenis = new window.Lenis({
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.95,
        stopInertiaOnNavigate: true,
        prevent: (node) => node.hasAttribute("data-lenis-prevent"),
      });
      if (dialog.open) lenis.stop();
    }
  }
  configureScroll();

  function closeMenu(restoreFocus = false) {
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open"))
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeMenu();
  });
  window
    .matchMedia("(min-width: 901px)")
    .addEventListener("change", () => closeMenu());

  // Anchor links work without JS. Keyboard focus follows the chosen section.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      const hash = link.getAttribute("href");
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      closeMenu();
      const destination =
        target.id === "top"
          ? 0
          : Math.max(
              0,
              target.getBoundingClientRect().top +
                window.scrollY -
                header.offsetHeight -
                16,
            );
      const focusTarget = () => {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      };
      if (lenis)
        lenis.scrollTo(destination, {
          duration: 1.15,
          onComplete: focusTarget,
        });
      else {
        window.scrollTo({
          top: destination,
          behavior: reducedMotion.matches ? "instant" : "smooth",
        });
        focusTarget();
      }
      try {
        window.history.replaceState(null, "", hash);
      } catch {
        /* file URLs can reject history updates. */
      }
    });
  });

  // Clone the source list for a seamless, draggable loop; hide the duplicate from AT.
  const marquee = document.querySelector(".logo-marquee");
  const logoList = marquee.querySelector(".logo-list");
  const logoTrack = marquee.querySelector(".logo-marquee__track");
  const clone = logoList.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  clone.querySelectorAll("img").forEach((img) => {
    img.alt = "";
  });
  logoTrack.append(clone);

  let logoOffset = 0;
  let logoLoopWidth = logoList.getBoundingClientRect().width;
  let logoFrame = 0;
  let previousLogoFrame = 0;
  let dragStartX = 0;
  let dragStartOffset = 0;
  let draggingLogos = false;

  function drawLogoTrack() {
    if (!logoLoopWidth) return;
    logoOffset = ((logoOffset % logoLoopWidth) + logoLoopWidth) % logoLoopWidth;
    logoTrack.style.transform = `translate3d(${-logoOffset}px, 0, 0)`;
  }

  function measureLogoTrack() {
    logoLoopWidth = logoList.getBoundingClientRect().width;
    drawLogoTrack();
  }

  function animateLogoTrack(timestamp) {
    if (previousLogoFrame && !draggingLogos)
      logoOffset += ((timestamp - previousLogoFrame) / 1000) * 34;
    previousLogoFrame = timestamp;
    drawLogoTrack();
    logoFrame = window.requestAnimationFrame(animateLogoTrack);
  }

  function syncLogoMotion() {
    window.cancelAnimationFrame(logoFrame);
    previousLogoFrame = 0;
    configureScroll();
    if (!reducedMotion.matches)
      logoFrame = window.requestAnimationFrame(animateLogoTrack);
    else {
      logoOffset = 0;
      logoTrack.style.transform = "none";
      marquee.scrollLeft = 0;
    }
  }

  marquee.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    draggingLogos = true;
    dragStartX = event.clientX;
    dragStartOffset = reducedMotion.matches ? marquee.scrollLeft : logoOffset;
    marquee.classList.add("is-dragging");
    marquee.setPointerCapture(event.pointerId);
    event.preventDefault();
  });
  marquee.addEventListener("pointermove", (event) => {
    if (!draggingLogos) return;
    if (reducedMotion.matches) {
      marquee.scrollLeft = dragStartOffset + dragStartX - event.clientX;
    } else {
      logoOffset = dragStartOffset + dragStartX - event.clientX;
      drawLogoTrack();
    }
  });
  function endLogoDrag(event) {
    if (!draggingLogos) return;
    draggingLogos = false;
    marquee.classList.remove("is-dragging");
    if (marquee.hasPointerCapture(event.pointerId))
      marquee.releasePointerCapture(event.pointerId);
  }
  marquee.addEventListener("pointerup", endLogoDrag);
  marquee.addEventListener("pointercancel", endLogoDrag);
  marquee.addEventListener("lostpointercapture", () => {
    draggingLogos = false;
    marquee.classList.remove("is-dragging");
  });
  marquee.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const distance = event.key === "ArrowRight" ? 72 : -72;
    if (reducedMotion.matches) marquee.scrollBy({ left: distance });
    else {
      logoOffset += distance;
      drawLogoTrack();
    }
  });
  window.addEventListener("resize", measureLogoTrack, { passive: true });
  reducedMotion.addEventListener("change", syncLogoMotion);
  syncLogoMotion();

  // A real YouTube embed is loaded only when a visitor chooses a film.
  // HTTP/HTTPS supplies YouTube's required Referer. Never spoof the company domain.
  const screen = document.querySelector("#film-screen");
  const filmTitle = document.querySelector("#film-title");
  const closeButton = document.querySelector(".dialog-close");
  let lastVideoTrigger = null;
  let activeInlineFilm = null;

  // Video controls never navigate away. Gallery embeds replace their own poster.
  function createPlayer(trigger) {
    const id = trigger.dataset.video;
    if (!/^[\w-]{11}$/.test(id)) return null;

    if (window.location.protocol === "file:") {
      // Developer-only local-file guidance. Do not substitute an outgoing video link.
      const message = document.createElement("div");
      message.className = "film-unavailable";
      const text = document.createElement("p");
      text.textContent =
        "Open Preview.cmd from the project folder to play videos here.";
      message.append(text);
      return message;
    }

    const iframe = document.createElement("iframe");
    const src = new URL("https://www.youtube.com/embed/" + id);
    src.searchParams.set("autoplay", "1");
    src.searchParams.set("playsinline", "1");
    src.searchParams.set("rel", "0");
    src.searchParams.set("origin", window.location.origin);
    iframe.src = src.href;
    iframe.title = trigger.dataset.title;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    // Keep the embedded player from opening new tabs or navigating the parent page.
    iframe.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation",
    );
    return iframe;
  }

  function stopInlineFilm(restoreFocus = false) {
    if (!activeInlineFilm) return;
    const { card, media, trigger } = activeInlineFilm;
    media.replaceChildren(trigger); // Removing the iframe stops its audio immediately.
    card.classList.remove("is-playing");
    card.querySelector(".project__stop").hidden = true;
    activeInlineFilm = null;
    if (restoreFocus) trigger.focus({ preventScroll: true });
  }

  function playInlineFilm(trigger) {
    const player = createPlayer(trigger);
    if (!player) return;
    stopInlineFilm();
    const card = trigger.closest(".project");
    const media = card.querySelector(".project__media");
    activeInlineFilm = { card, media, trigger };
    media.replaceChildren(player);
    card.classList.add("is-playing");
    card.querySelector(".project__stop").hidden = false;
    if (player.tagName === "IFRAME") player.focus({ preventScroll: true });
  }

  function openFilm(trigger) {
    const player = createPlayer(trigger);
    if (!player) return;
    stopInlineFilm();
    lastVideoTrigger = trigger;
    filmTitle.textContent = trigger.dataset.title;
    screen.replaceChildren(player);
    dialog.showModal();
    document.body.classList.add("dialog-open");
    lenis?.stop();
    closeButton.focus();
  }

  document.querySelectorAll("[data-video]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (trigger.closest(".project")) playInlineFilm(trigger);
      else openFilm(trigger);
    });
  });
  document.querySelectorAll(".project__stop").forEach((button) => {
    button.addEventListener("click", () => stopInlineFilm(true));
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    screen.replaceChildren();
    document.body.classList.remove("dialog-open");
    lenis?.start();
    lastVideoTrigger?.focus({ preventScroll: true });
  });

  // Track the current section without attaching expensive work to every scroll tick.
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...menu.querySelectorAll("a")];
  let navFrame = 0;
  function updateNavigation() {
    const offset = header.offsetHeight + 120;
    const active = sections
      .filter((section) => section.getBoundingClientRect().top <= offset)
      .at(-1);
    navLinks.forEach((link) => {
      if (active && link.hash === "#" + active.id)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    navFrame = 0;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!navFrame) navFrame = requestAnimationFrame(updateNavigation);
    },
    { passive: true },
  );
  updateNavigation();
  document.querySelector("#year").textContent = String(
    new Date().getFullYear(),
  );
})();
