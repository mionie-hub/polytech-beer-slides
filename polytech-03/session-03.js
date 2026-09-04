import { session03Data } from "./session-03-data.js?v=20260904-01";

const teamOrder = ["pink", "green", "yellow"];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function teamCard(team, key, compact = false) {
  return `
    <article class="s3-batch-card${compact ? " is-compact" : ""}" data-team="${key}">
      <span>TEAM ${escapeHtml(team.color)}</span>
      <h2>${escapeHtml(team.style)}</h2>
      <em>${escapeHtml(team.korean)}</em>
      <div class="s3-batch-metrics">
        <p><small>VOLUME</small><strong>${team.volume}L</strong></p>
        <p><small>OG</small><strong>${team.og.toFixed(3)}</strong></p>
      </div>
    </article>`;
}

function renderBatchEntry() {
  const root = document.querySelector("[data-batch-entry]");
  if (!root) return;
  root.innerHTML = teamOrder.map((key) => teamCard(session03Data.teams[key], key)).join("");
}

function calculateAbv(og, fg) {
  if (!Number.isFinite(fg) || fg < 0.98 || fg > og) return "—";
  return `${((og - fg) * 131.25).toFixed(1)}%`;
}

function renderBatchLab() {
  const root = document.querySelector("[data-batch-lab]");
  if (!root) return;

  root.innerHTML = teamOrder.map((key) => {
    const team = session03Data.teams[key];
    const saved = "";
    return `
      <article class="s3-lab-card" data-team="${key}">
        <header><span>TEAM ${escapeHtml(team.color)}</span><h2>${escapeHtml(team.style)}</h2><em>${escapeHtml(team.korean)}</em></header>
        <div class="s3-lab-known"><p><small>ACTUAL VOLUME</small><strong>${team.volume}L</strong></p><p><small>ACTUAL OG</small><strong>${team.og.toFixed(3)}</strong></p></div>
        <div class="s3-fg-entry">
          <label for="fg-${key}">TODAY'S FG</label>
          <input id="fg-${key}" data-fg-input="${key}" inputmode="decimal" maxlength="5" placeholder="1.0__" value="${escapeHtml(saved)}" aria-label="${escapeHtml(team.style)} 오늘의 FG">
        </div>
        <div class="s3-abv-result"><span>EST. ABV</span><strong data-abv-output="${key}">${calculateAbv(team.og, Number.parseFloat(saved))}</strong></div>
        <p class="s3-fg-reference">REFERENCE FG · ${escapeHtml(team.expectedFg)}</p>
      </article>`;
  }).join("");

  root.querySelectorAll("[data-fg-input]").forEach((input) => {
    input.addEventListener("keydown", (event) => event.stopPropagation());
    input.addEventListener("input", () => {
      const key = input.dataset.fgInput;
      const team = session03Data.teams[key];
      const output = root.querySelector(`[data-abv-output="${key}"]`);
      output.textContent = calculateAbv(team.og, Number.parseFloat(input.value));
    });
  });
}

function renderPrimeCards() {
  const root = document.querySelector("[data-prime-cards]");
  if (!root) return;
  root.innerHTML = teamOrder.map((key) => {
    const team = session03Data.teams[key];
    return `
      <article data-team="${key}">
        <span>TEAM ${escapeHtml(team.color)}</span>
        <h2>${escapeHtml(team.style)}</h2>
        <strong>${team.prime.toFixed(1)}g</strong>
        <em>DEXTROSE / 500mL PET</em>
        <p>예상 ${escapeHtml(team.bottleEstimate)}병</p>
      </article>`;
  }).join("");
}

function renderRoles() {
  const root = document.querySelector("[data-role-cards]");
  if (!root) return;
  root.innerHTML = session03Data.roles.map((role, index) => `
    <article class="story-reveal" data-reveal-step="${index + 1}">
      <span>${escapeHtml(role.number)}</span>
      <strong>${escapeHtml(role.title)}</strong>
      <em>${escapeHtml(role.korean)}</em>
      <p>${escapeHtml(role.responsibility)}</p>
    </article>`).join("");
}

function renderTastingReveal() {
  const root = document.querySelector("[data-tasting-reveal]");
  if (!root) return;
  const beers = [session03Data.tasting.tribute, session03Data.tasting.saison];
  root.innerHTML = beers.map((beer, index) => `
    <article class="s3-tasting-beer story-reveal" data-reveal-step="${index + 2}">
      <span>BEER ${beer.code}</span>
      <h2>${escapeHtml(beer.name)}</h2>
      <strong>${escapeHtml(beer.abv)}</strong>
      <p>${escapeHtml(beer.cues)}</p>
      <em>${escapeHtml(beer.process)}</em>
    </article>`).join("");
}

function setupLiveBoard() {
  const slide = document.querySelector("[data-live-board]");
  if (!slide) return;

  const fields = {
    code: slide.querySelector("[data-live-code]"),
    label: slide.querySelector("[data-live-label]"),
    now: slide.querySelector("[data-live-now]"),
    detail: slide.querySelector("[data-live-detail]"),
    next: slide.querySelector("[data-live-next]"),
    teams: slide.querySelector("[data-live-teams]"),
  };

  const getIndex = () => Math.min(
    session03Data.liveStates.length - 1,
    Math.max(0, Number.parseInt(slide.dataset.revealState || "0", 10) || 0),
  );

  const setIndex = (index) => {
    slide.dataset.revealState = String(Math.min(session03Data.liveStates.length - 1, Math.max(0, index)));
  };

  const render = () => {
    const state = session03Data.liveStates[getIndex()];
    fields.code.textContent = state.code;
    fields.label.textContent = state.label;
    fields.now.textContent = state.now;
    fields.detail.textContent = state.detail;
    fields.next.textContent = state.next;
    fields.teams.innerHTML = teamOrder.map((key, index) => {
      const team = session03Data.teams[key];
      return `
        <div class="s3-live-team" data-team="${key}">
          <div><strong>${escapeHtml(team.color)} · ${escapeHtml(team.style)}</strong><small>${team.volume}L · OG ${team.og.toFixed(3)}</small></div>
          <span>${escapeHtml(state.statuses[index])}</span>
        </div>`;
    }).join("");
  };

  slide.querySelectorAll("[data-live-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      setIndex(getIndex() + (button.dataset.liveAction === "next" ? 1 : -1));
      render();
    });
  });

  new MutationObserver(render).observe(slide, {
    attributes: true,
    attributeFilter: ["data-reveal-state"],
  });
  render();
}

renderBatchEntry();
renderBatchLab();
renderPrimeCards();
renderRoles();
renderTastingReveal();
setupLiveBoard();
