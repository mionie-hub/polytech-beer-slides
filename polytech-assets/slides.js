const slides = Array.from(document.querySelectorAll(".slide"));
const progress = document.querySelector(".progress");
const counter = document.querySelector(".slide-counter");

function updateViewportMetrics() {
  const root = document.documentElement;
  const mapSize = Math.min(window.innerHeight * 0.5, window.innerWidth * 0.7, 610);
  root.style.setProperty("--deck-viewport-height", `${window.innerHeight}px`);
  root.style.setProperty("--association-map-size", `${mapSize}px`);
}

function alignHashSlide() {
  if (!window.location.hash) return;
  const slide = document.getElementById(window.location.hash.slice(1));
  if (slide) window.scrollTo({ top: slide.offsetTop, behavior: "auto" });
}

function currentIndex() {
  const center = window.scrollY + window.innerHeight / 2;
  let active = 0;

  slides.forEach((slide, index) => {
    if (slide.offsetTop <= center) active = index;
  });

  return active;
}

function updateUi() {
  if (!slides.length) return;

  const index = currentIndex();
  const ratio = slides.length === 1 ? 1 : (index + 1) / slides.length;

  if (progress) progress.style.transform = `scaleX(${ratio})`;
  if (counter) {
    counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  }
}

function goToSlide(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  const slide = slides[next];
  if (slide) window.scrollTo({ top: slide.offsetTop, behavior: "auto" });
  if (slide?.id) history.replaceState(null, "", `#${slide.id}`);
}

function revealState(slide) {
  return Number.parseInt(slide?.dataset.revealState || "0", 10);
}

function setRevealState(slide, state) {
  if (!slide?.matches("[data-sequence-reveal]")) return;

  const max = Number.parseInt(slide.dataset.revealCount || "0", 10);
  const next = Math.max(0, Math.min(max, state));
  slide.dataset.revealState = String(next);

  slide.querySelectorAll("[data-reveal-step]").forEach((item) => {
    const step = Number.parseInt(item.dataset.revealStep || "0", 10);
    item.classList.toggle("is-revealed", step <= next);
  });
}

function advanceReveal(slide) {
  if (!slide?.matches("[data-sequence-reveal]")) return false;
  const state = revealState(slide);
  const max = Number.parseInt(slide.dataset.revealCount || "0", 10);
  if (state >= max) return false;
  setRevealState(slide, state + 1);
  return true;
}

function retreatReveal(slide) {
  if (!slide?.matches("[data-sequence-reveal]")) return false;
  const state = revealState(slide);
  if (state <= 0) return false;
  setRevealState(slide, state - 1);
  return true;
}

document.addEventListener("keydown", (event) => {
  const keys = ["ArrowRight", "ArrowDown", "PageDown", " "];
  const backKeys = ["ArrowLeft", "ArrowUp", "PageUp", "Backspace"];

  if (keys.includes(event.key)) {
    event.preventDefault();
    const index = currentIndex();
    if (!advanceReveal(slides[index])) goToSlide(index + 1);
  }

  if (backKeys.includes(event.key)) {
    event.preventDefault();
    const index = currentIndex();
    if (!retreatReveal(slides[index])) goToSlide(index - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    goToSlide(slides.length - 1);
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    setRevealState(slides[currentIndex()], 0);
  }

  if (event.key.toLowerCase() === "f") {
    event.preventDefault();
    if (document.fullscreenElement) document.exitFullscreen();
    else {
      try {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } catch {
        // Fullscreen may be blocked by an embedded browser or projector policy.
      }
    }
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reveal-target]");
  if (button) {
    const target = document.getElementById(button.dataset.revealTarget);
    if (!target) return;

    target.hidden = !target.hidden;
    button.setAttribute("aria-pressed", String(!target.hidden));
    return;
  }

  const slide = event.target.closest("[data-sequence-reveal]");
  if (slide && !event.target.closest("a, button, input, select, textarea")) {
    advanceReveal(slide);
  }
});

let touchStartY = null;

document.addEventListener("touchstart", (event) => {
  touchStartY = event.changedTouches[0]?.clientY ?? null;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  if (touchStartY === null) return;

  const endY = event.changedTouches[0]?.clientY ?? touchStartY;
  const delta = touchStartY - endY;

  if (Math.abs(delta) > 48) {
    const index = currentIndex();
    if (delta > 0) {
      if (!advanceReveal(slides[index])) goToSlide(index + 1);
    } else if (!retreatReveal(slides[index])) {
      goToSlide(index - 1);
    }
  }
  touchStartY = null;
}, { passive: true });

document.addEventListener("scroll", updateUi, { passive: true });
window.addEventListener("resize", () => {
  updateViewportMetrics();
  updateUi();
  requestAnimationFrame(alignHashSlide);
});
window.addEventListener("load", () => {
  updateViewportMetrics();
  requestAnimationFrame(alignHashSlide);
});
updateViewportMetrics();
slides.forEach((slide) => setRevealState(slide, 0));

if (window.location.hash) {
  alignHashSlide();
  requestAnimationFrame(alignHashSlide);
}

updateUi();
