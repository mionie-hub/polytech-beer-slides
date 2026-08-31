import { session02Data } from "./session-02-data.js?v=20260825-06";

const teamOrder = ["pink", "green", "yellow"];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const formatClock = (seconds) => {
  const safeSeconds = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
};

function renderTeamRoster() {
  const roster = document.querySelector("[data-team-roster]");
  if (!roster) return;

  roster.innerHTML = teamOrder.map((key) => {
    const team = session02Data.teams[key];
    const members = team.members.map((member) => `<li>${escapeHtml(member)}</li>`).join("");
    return `
      <article class="s2-team-card" data-team="${key}">
        <span>TEAM ${escapeHtml(team.color)}</span>
        <h2>${escapeHtml(team.style)}</h2>
        <ul>${members}</ul>
      </article>`;
  }).join("");
}

function renderHopSchedules() {
  const grid = document.querySelector("[data-hop-schedules]");
  if (!grid) return;

  grid.innerHTML = teamOrder.map((key) => {
    const recipe = session02Data.recipes[key];
    const hops = recipe.hops.map((hop) => `<li>${escapeHtml(hop)}</li>`).join("");
    return `
      <article class="s2-hop-team" data-team="${key}">
        <span>${escapeHtml(recipe.team)}</span>
        <h2>${escapeHtml(recipe.style)}</h2>
        <ul>${hops}</ul>
      </article>`;
  }).join("");
}

function renderRecipePreview() {
  const preview = document.querySelector("[data-recipe-preview]");
  if (!preview) return;

  preview.innerHTML = teamOrder.map((key, index) => {
    const recipe = session02Data.recipes[key];
    return `
      <article class="s2-recipe-preview-card story-reveal" data-team="${key}" data-reveal-step="${index + 1}">
        <span>0${index + 1}</span>
        <div><strong>${escapeHtml(recipe.style)}</strong><em>${escapeHtml(recipe.korean)}</em></div>
        <p>${escapeHtml(recipe.focus)}</p>
      </article>`;
  }).join("");
}

function renderRoles() {
  const grid = document.querySelector("[data-role-cards]");
  if (!grid) return;

  grid.innerHTML = session02Data.roles.map((role, index) => `
    <article class="story-reveal" data-reveal-step="${index + 1}">
      <span>${escapeHtml(role.number)}</span>
      <strong>${escapeHtml(role.title)}</strong>
      <em>${escapeHtml(role.korean)}</em>
      <p>${escapeHtml(role.responsibility)}</p>
    </article>`).join("");
}

function renderRecipes() {
  document.querySelectorAll("[data-recipe-key]").forEach((layout) => {
    const recipe = session02Data.recipes[layout.dataset.recipeKey];
    if (!recipe) return;

    const extract = recipe.extract.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const hops = recipe.hops.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    const targets = recipe.targets.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

    layout.innerHTML = `
      <div class="s2-recipe-heading">
        <p>${escapeHtml(recipe.team)} · 20L RECIPE</p>
        <h1 class="type-display">${escapeHtml(recipe.style)}</h1>
        <div><span>${escapeHtml(recipe.korean)}</span><em>${escapeHtml(recipe.focus)}</em></div>
      </div>
      <div class="s2-recipe-main">
        <section><span>EXTRACT</span><ul>${extract}</ul></section>
        <section><span>HOPS · MASTER CLOCK</span><ul>${hops}</ul></section>
        <section><span>YEAST</span><strong>${escapeHtml(recipe.yeast)}</strong><p class="s2-recipe-volume"><b>START WATER ${escapeHtml(recipe.startWater)}</b>${escapeHtml(recipe.volume)}</p></section>
      </div>
      <div class="s2-recipe-targets">${targets}</div>`;
  });
}

function setupRoleTimer() {
  const root = document.querySelector("[data-role-timer]");
  if (!root) return;

  const output = root.querySelector(".s2-role-timer");
  const toggle = root.querySelector('[data-timer-action="toggle"]');
  const reset = root.querySelector('[data-timer-action="reset"]');
  const duration = 3 * 60;
  let remaining = duration;
  let running = false;
  let deadline = 0;
  let frame = 0;

  const paint = () => {
    output.textContent = formatClock(remaining);
    root.classList.toggle("is-complete", remaining <= 0);
    toggle.textContent = running ? "Ⅱ" : "▶";
  };

  const tick = () => {
    if (!running) return;
    remaining = Math.max(0, (deadline - performance.now()) / 1000);
    if (remaining <= 0) running = false;
    paint();
    if (running) frame = requestAnimationFrame(tick);
  };

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (remaining <= 0) remaining = duration;
    running = !running;
    if (running) {
      deadline = performance.now() + remaining * 1000;
      frame = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(frame);
    }
    paint();
  });

  reset.addEventListener("click", (event) => {
    event.stopPropagation();
    running = false;
    cancelAnimationFrame(frame);
    remaining = duration;
    paint();
  });

  paint();
}

function setupLiveBoard() {
  const slide = document.querySelector("[data-live-board]");
  if (!slide) return;

  const elements = {
    code: slide.querySelector("[data-live-code]"),
    label: slide.querySelector("[data-live-label]"),
    now: slide.querySelector("[data-live-now]"),
    detail: slide.querySelector("[data-live-detail]"),
    next: slide.querySelector("[data-live-next]"),
    teams: slide.querySelector("[data-live-teams]"),
    clock: slide.querySelector("[data-live-clock]"),
    timer: slide.querySelector('[data-live-action="timer"]'),
  };

  const duration = 30 * 60;
  let remaining = duration;
  let running = false;
  let deadline = 0;
  let frame = 0;
  let lastState = -1;
  let alertTimeout = 0;

  const getStateIndex = () => Math.min(
    session02Data.liveStates.length - 1,
    Math.max(0, Number.parseInt(slide.dataset.revealState || "0", 10) || 0),
  );

  const setStateIndex = (index) => {
    const nextIndex = Math.min(session02Data.liveStates.length - 1, Math.max(0, index));
    slide.dataset.revealState = String(nextIndex);
  };

  const paintTimer = () => {
    const state = session02Data.liveStates[getStateIndex()];
    elements.clock.textContent = state.timer ? formatClock(remaining) : state.clock;
    elements.timer.textContent = running ? "Ⅱ" : "▶";
  };

  const renderState = () => {
    const index = getStateIndex();
    const state = session02Data.liveStates[index];
    const stateChanged = index !== lastState;
    elements.code.textContent = state.code;
    elements.label.textContent = state.label;
    elements.now.textContent = state.now;
    elements.detail.textContent = state.detail;
    elements.next.textContent = state.next;
    elements.teams.innerHTML = teamOrder.map((key, teamIndex) => {
      const team = session02Data.teams[key];
      return `<div class="s2-live-team" data-team="${key}"><strong>${escapeHtml(team.color)} · ${escapeHtml(team.style)}</strong><span>${escapeHtml(state.statuses[teamIndex])}</span></div>`;
    }).join("");
    if (state.alert) slide.dataset.liveAlert = state.alert;
    else delete slide.dataset.liveAlert;

    if (stateChanged && state.alert === "t10") {
      clearTimeout(alertTimeout);
      slide.dataset.liveFlash = "t10";
      alertTimeout = window.setTimeout(() => {
        delete slide.dataset.liveFlash;
      }, 6000);
    } else if (stateChanged) {
      clearTimeout(alertTimeout);
      delete slide.dataset.liveFlash;
    }

    if (index === 0 && lastState > 0) {
      running = false;
      cancelAnimationFrame(frame);
      remaining = duration;
    }
    if (stateChanged && !running && index === 3) remaining = duration;
    if (stateChanged && !running && index === 4) remaining = 10 * 60;
    if (stateChanged && index === 5) remaining = 0;
    if (index >= 5 && running) {
      running = false;
      cancelAnimationFrame(frame);
    }
    lastState = index;
    paintTimer();
  };

  const tick = () => {
    if (!running) return;
    remaining = Math.max(0, (deadline - performance.now()) / 1000);
    const seconds = Math.ceil(remaining);
    if (seconds <= 10 * 60 && getStateIndex() === 3) {
      setStateIndex(4);
      renderState();
    }
    if (remaining <= 0) {
      running = false;
      setStateIndex(5);
      renderState();
    }
    paintTimer();
    if (running) frame = requestAnimationFrame(tick);
  };

  slide.querySelectorAll("[data-live-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const action = button.dataset.liveAction;
      if (action === "prev") setStateIndex(getStateIndex() - 1);
      if (action === "next") setStateIndex(getStateIndex() + 1);
      if (action === "reset") {
        running = false;
        cancelAnimationFrame(frame);
        remaining = duration;
        paintTimer();
      }
      if (action === "timer") {
        if (remaining <= 0) remaining = duration;
        running = !running;
        if (running) {
          if (getStateIndex() !== 3 && getStateIndex() < 5) setStateIndex(3);
          deadline = performance.now() + remaining * 1000;
          frame = requestAnimationFrame(tick);
        } else {
          cancelAnimationFrame(frame);
        }
        paintTimer();
      }
    });
  });

  new MutationObserver(renderState).observe(slide, {
    attributes: true,
    attributeFilter: ["data-reveal-state"],
  });

  renderState();
}

renderTeamRoster();
renderHopSchedules();
renderRecipePreview();
renderRoles();
renderRecipes();
setupRoleTimer();
setupLiveBoard();
