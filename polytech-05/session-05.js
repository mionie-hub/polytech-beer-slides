const asset = (name) => `./assets/${name}`;
const reveal = (step, html, cls = "") => `<div class="story-reveal ${cls}" data-reveal-step="${step}">${html}</div>`;
const title = (eye, main, sub = "") => `<div class="s5-title"><p class="eyebrow">${eye}</p><h1>${main}</h1>${sub ? `<p class="s5-sub">${sub}</p>` : ""}</div>`;
const note = (text) => `<p class="s5-note">${text}</p>`;

const compass = [
  ["BALANCE", "힘을 맞춘다", "서로 버틸 수 있는가?"],
  ["BRIDGE", "공통 풍미로 잇는다", "둘 사이의 연결고리는 무엇인가?"],
  ["CONTRAST", "다름으로 서로를 살린다", "반대되는 감각이 더 흥미롭게 만드는가?"],
  ["CUT", "입안을 다시 깨끗하게 만든다", "탄산·쓴맛·산미가 무게감을 정리하는가?"],
];
const outcomes = [
  ["↑", "STRONGER", "더 강해졌다", "ACCENTUATED"],
  ["↓", "SOFTER", "부드러워졌다", "SOFTENED"],
  ["○", "FADED", "덜 느껴졌다", "CANCELED"],
  ["✦", "NEW", "없던 풍미가 생겼다", "NEW FLAVOUR"],
  ["×", "CLASH", "불편하게 충돌했다", "CLASHED"],
];
const steps = [
  ["READ", "각각을 먼저 읽는다"],
  ["CONNECT", "어떤 관계가 가능할지 예상한다"],
  ["WATCH", "함께 먹었을 때 무엇이 변하는지 본다"],
  ["DECIDE", "더 좋아졌는지, 왜 그런지 설명한다"],
];
const sets = [
  {
    number: "01", tone: "blue", food: "TRIPLE CRÈME", foodKo: "트리플 크림 치즈", brand: "Petit d’Affinois",
    a: { name: "HELLE WEISSE", ko: "헬레 바이스", styleKo: "헤페바이젠", abv: "5.4", brewery: "Weltenburger Kloster", img: "weltenburger-helle-weisse.png" },
    b: { name: "SAISON DUPONT", ko: "세종 듀퐁", styleKo: "세종", abv: "6.5", brewery: "Brasserie Dupont", img: "Beer_SaisonDupont_Product.png" },
    question: "이 치즈에는 어느 맥주가<br>더 잘 어울렸나요?",
    anchors: ["크리미함", "버터 풍미", "진한 지방감", "부드러운 질감", "순한 풍미"],
    anchorEnglish: ["Creaminess", "Buttery flavour", "Full-fat richness", "Soft texture", "Mild flavour"],
    foodImage: "Cheese_PetitDAffinois_TripleCream.png",
    foodImageAlt: "Petit d’Affinois 트리플 크림 치즈와 제품 상자, 곁들인 꿀과 베리",
    reading: [
      { profile: "부드러운 밀 · 바나나 향<br>풍성한 질감 · 활발한 탄산", links: [["BALANCE", "순한 치즈와 밀맥주가 서로를 압도하지 않는다."], ["BRIDGE", "밀·과일 향이 버터·우유의 둥근 감각을 잇는다."], ["CUT", "탄산이 지방 코팅감을 걷어낸다."]], watch: ["치즈의 지방감은 더 가볍고 부드럽게.", "바나나·효모 향은 더 둥글고 달콤하게.", "탄산이 크림의 여운을 산뜻하게 정리한다."] },
      { profile: "드라이함 · 향신료 · 시트러스<br>또렷한 쓴맛 · 활발한 탄산", links: [["CONTRAST", "버터의 진함과 드라이·쓴맛·향신료가 대비된다."], ["CUT", "쓴맛과 탄산이 지방감을 더 적극적으로 정리한다."], ["BRIDGE", "효모의 향신료·시트러스가 순한 치즈에 향을 더한다."]], watch: ["치즈의 지방감이 더 분명하게 가벼워진다.", "시트러스·향신료·쓴맛이 더 또렷해진다.", "전체 인상은 더 밝고 드라이하며 산뜻해진다."] },
    ],
    axis: ["HARMONY", "REFRESH"], axisKo: ["부드럽게 이어진다", "정리하고 다시 밝힌다"],
    axisRules: ["BALANCE · BRIDGE · CUT", "CONTRAST · CUT · BRIDGE"],
    axisQuestion: "헤페바이젠에서는 더 부드럽게,<br>세종에서는 더 가볍게 느껴졌나요?",
  },
  {
    number: "02", tone: "green", food: "EXTRA MATURE CHEDDAR", foodKo: "엑스트라 머추어 체더", brand: "Wyke Farms",
    a: { name: "DALE’S PALE ALE", ko: "데일스 페일 에일", styleKo: "아메리칸 페일에일", abv: "6.5", brewery: "Oskar Blues", img: "Beer_Dales_PaleAle.png" },
    b: { name: "HAZY DAY SUE", ko: "헤이지 데이 수", styleKo: "헤이지 IPA", abv: "6.5", brewery: "Toppling Goliath", img: "Beer_HazyDaySue.png" },
    question: "이 치즈에는 어느 맥주가<br>더 잘 어울렸나요?",
    anchors: ["짠맛", "톡 쏘는 맛", "감칠맛", "진한 풍미", "지방감"],
    anchorEnglish: ["Saltiness", "Tanginess", "Umami", "Rich flavour", "Fatty mouthfeel"],
    foodImage: "Cheese_Wyke_Cheddar_Range.jpeg",
    foodImageAlt: "Wyke Farms 체더 제품군, 보라색 Extra Mature 포장",
    reading: [
      { profile: "캐러멜 몰트 · 솔·시트러스 홉<br>단단한 쓴맛 · 활발한 탄산", links: [["CUT", "탄산과 쓴맛이 치즈의 지방 코팅감을 걷어낸다."], ["BRIDGE", "캐러멜·구운 몰트가 체더의 견과·감칠맛을 잇는다."]], watch: ["홉의 쓴맛과 솔·시트러스가 더 또렷해진다.", "캐러멜·몰트의 단맛이 조금 더 드러난다.", "치즈의 진함은 줄고, 여운은 더 깔끔해진다."] },
      { profile: "시트러스·열대과일 홉<br>부드러운 바디 · 둥근 쓴맛", links: [["CONTRAST", "짭짤하고 톡 쏘는 치즈와 과일 향이 대비된다."], ["SOFTENING", "지방감과 부드러운 질감이 쓴맛의 모서리를 둥글게 한다."]], watch: ["시트러스·열대과일 향이 앞으로 나온다.", "체더의 날카로움은 줄고 더 크리미해진다.", "정리하기보다 부드럽고 풍성하게 감싼다."] },
    ],
    axis: ["CUT", "SOFTEN"], axisKo: ["치즈를 정리한다", "감싸고 과일 향을 더한다"],
    axisRules: ["CUT · BRIDGE", "CONTRAST · SOFTENING"],
    axisQuestion: "같은 체더가 한쪽에서는 더 깔끔하게,<br>다른 쪽에서는 더 둥글게 느껴졌나요?",
  },
  {
    number: "03", tone: "rose", food: "70% DARK CHOCOLATE", foodKo: "70% 다크 초콜릿", brand: "Lindt Excellence",
    a: { name: "MADURO BROWN ALE", ko: "마두로 브라운 에일", styleKo: "잉글리시 브라운 에일", abv: "5.5", brewery: "Cigar City", img: "cigar-city-maduro.png" },
    b: { name: "OBSIDIAN STOUT", ko: "옵시디언 스타우트", styleKo: "스타우트", abv: "6.4", brewery: "Deschutes", img: "Beer_Obsidian_Stout.webp" },
    question: "이 초콜릿에는 어느 맥주가<br>더 잘 어울렸나요?",
    anchors: ["코코아·구운 향", "쓴맛", "진한 풍미", "코코아 버터의 질감", "낮은 단맛"],
    anchorEnglish: ["Cocoa & roast", "Bitterness", "Rich flavour", "Cocoa butter texture", "Low sweetness"],
    foodImage: "Chocolate_Lindt_Excellence70.webp",
    foodImageAlt: "Lindt Excellence 70% Cocoa 다크 초콜릿 포장과 초콜릿 조각",
    reading: [
      { profile: "토피·초콜릿 · 아몬드<br>흑설탕·커피 · 몰트의 진함", links: [["BALANCE", "진한 코코아와 몰트의 풍미가 힘을 맞춘다."], ["BRIDGE", "초콜릿·견과·커피의 공통 풍미가 이어진다."], ["SOFTENING", "몰트의 단맛과 코코아 버터가 쓴맛을 둥글게 한다."]], watch: ["초콜릿의 쓴맛은 더 둥글고 부드럽게.", "토피·견과·커피의 풍미는 더 또렷하게.", "겹치는 초콜릿 향 너머 주변 풍미가 드러난다."] },
      { profile: "에스프레소 · 다크 초콜릿<br>로스팅 · 단단한 쓴맛 · 드라이함", links: [["BRIDGE", "코코아·초콜릿·로스팅 풍미가 직접 이어진다."], ["CUT", "탄산과 드라이한 쓴맛이 코코아 버터를 정리한다."], ["ACCENTUATING", "초콜릿과 스타우트의 쓴맛·로스팅이 겹쳐 커진다."]], watch: ["코코아·로스팅은 더 진하고 강렬하게.", "에스프레소·쓴맛이 더 또렷해진다.", "쓴맛에 민감하다면 거칠게 느껴질 수도 있다."] },
    ],
    axis: ["ROUND", "INTENSE"], axisKo: ["둥글게, 견과·토피로 잇는다", "로스팅·쓴맛을 더 강렬하게"],
    axisRules: ["BALANCE · BRIDGE · SOFTENING", "BRIDGE · CUT · ACCENTUATING"],
    axisQuestion: "같은 다크 초콜릿이 마두로에서는 더 둥글게,<br>옵시디언에서는 더 강렬하게 느껴졌나요?",
  },
];

const slides = [];
function slide(id, header, body, { count = 0, cls = "", footer = "Session 05 · Beyond the Glass" } = {}) {
  slides.push(`<section class="slide ${cls}" id="${id}"${count ? ` data-sequence-reveal data-reveal-count="${count}"` : ""}>
    <header class="slide-header"><span class="slide-brand">Fermented Ghost</span><span>${header}</span></header>
    <div class="slide-body">${body}</div>
    <footer class="slide-footer"><span>${footer}</span></footer>
  </section>`);
}
const cells = (items, cls = "s5-grid", start = 1) => `<div class="${cls}">${items.map((html, i) => reveal(start + i, html)).join("")}</div>`;
const entry = (en, ko, detail = "") => `<article class="s5-cell"><strong>${en}</strong><p>${ko}</p>${detail ? `<small>${detail}</small>` : ""}</article>`;
const choiceRow = () => `<div class="s5-choice"><span>A</span><span>B</span><span>BOTH <small>둘 다</small></span><span>NEITHER <small>둘 다 아님</small></span></div>`;
const outcomeStrip = () => `<div class="s5-outcome-strip">${outcomes.map(([symbol,en,ko])=>`<p><b>${symbol}</b><strong>${en}</strong><span>${ko}</span></p>`).join("")}</div>`;

slide("S00", "Beer Pairing Lab", `
  <img class="s5-cover-photo" src="${asset("Pairing_Allagash_Tripel_DinnerParty.jpg")}" alt="음식이 차려진 식탁에서 Allagash Tripel을 잔에 따르는 모습">
  <div class="s5-cover-copy">${title("SESSION 05 · BEYOND THE GLASS", "BEER<br>PAIRING LAB")}
  ${reveal(1, `<p class="s5-cover-count">3 SETS · 3 FOODS · 6 BEERS</p>`)}</div>`, {count: 1, cls: "s5-cover"});

slide("S01", "Today, You Are the Curator", `${title("TODAY, YOU ARE THE CURATOR", "이제 한 잔을<br>식탁 위에 놓습니다.")}
  ${cells([entry("TASTER", "맛보는 사람"), entry("MAKER", "만드는 사람"), entry("CURATOR", "연결하는 사람")], "s5-role-grid")}
  ${reveal(4, note("같이 먹었을 때 무엇이 달라졌고, 더 좋아졌는가?"))}`, {count:4, cls:"s5-with-note"});

slide("S02", "Before There Were Rules", `${title("BEFORE THERE WERE RULES", "PEOPLE ALREADY KNEW<br>WHAT WORKED.", "사람들은 이미, 잘 어울리는 조합을 알고 있었습니다.")}
  ${reveal(1, `<p class="s5-editorial">지역 음식과 지역 맥주는<br>오랜 반복 경험 속에서<br>함께 자리 잡기도 했습니다.</p>`)}
  ${reveal(2, note("좋은 출발점, 문화적 힌트."))}`, {count:2, cls:"s5-editorial-slide s5-with-note"});

slide("S03", "Regional Pairing", `${title("WHAT GROWS TOGETHER", "함께 먹어온 조합에는<br>어떤 이유가 있을까요?")}
  <div class="s5-region-grid">
    <div class="s5-region-slot is-bavaria">
      ${reveal(1, `<article><span>BAVARIA · 바이에른</span><h2>WEISSWURST<br>BREZEL · WEISSBIER</h2><p>하얀 소시지 · 프레즐 · 바이에른 밀맥주</p><p class="s5-region-question">왜 하필 Weissbier였을까요?</p>${reveal(2, `<div class="s5-region-answer"><strong>BALANCE · BRIDGE · CUT</strong><p>힘을 맞추고 · 잇고 · 입안을 정리</p></div>`)}</article>`, "s5-region-copy")}
      <figure class="s5-region-photo s5-region-photo-cheddar"><img src="${asset("Cheese_VintageCheddar_WheelWedges.webp")}" alt="숙성 치즈 휠과 잘라 놓은 치즈 조각"></figure>
    </div>
    <div class="s5-region-slot is-somerset">
      ${reveal(3, `<article><span>SOMERSET · 서머싯</span><h2>MATURE CHEDDAR<br>NUTTY BROWN ALE</h2><p>숙성 체더 · 고소한 브라운 에일</p><p class="s5-region-question">함께 먹어온 조합에는 이유가 있을까요?</p>${reveal(4, `<div class="s5-region-answer"><strong>BALANCE · BRIDGE</strong><p>견과 · 캐러멜 · 감칠맛의 연결</p></div>`)}</article>`, "s5-region-copy")}
      <figure class="s5-region-photo s5-region-photo-bavaria"><img src="${asset("Pairing_SchneiderWeisse_BavarianBreakfast.jpg")}" alt="슈나이더 바이세 밀맥주와 하얀 소시지, 프레첼"></figure>
    </div>
  </div>${reveal(5, note("왜 이런 조합은 오래 살아남았을까요?"))}`, {count:5, cls:"s5-regional s5-with-note"});

slide("S04", "Classics That Survived · 01", `${title("CLASSIC 01", "OYSTERS<br><span class=\"s5-times\">×</span> IRISH STOUT", "굴 × 아이리시 스타우트")}
  <div class="s5-classic-body"><p class="s5-question">서로 닮지 않았는데,<br>왜 클래식이 되었을까요?</p>
  <div class="s5-oyster-explain"><img class="s5-oyster-photo" src="${asset("Pairing_Guinness_Oysters.jpg")}" alt="기네스 스타우트와 굴, 레몬">
  ${reveal(1, `<div class="s5-principle"><strong>CONTRAST</strong><p>바다의 짠맛 · 감칠맛 ↔ 드라이함 · 로스팅</p><small>BRINY / UMAMI ↔ DRY / ROAST</small></div>`)}
  ${reveal(2, `<div class="s5-color-note"><strong>COLOR ≠ INTENSITY</strong><p>색이 진하다고, 맛의 강도까지 같지는 않습니다.</p><span>드라이 아이리시 스타우트는 검은색에 비해 드라이하고 편하게 마실 수 있습니다.</span></div>`)}</div></div>`, {count:2, cls:"s5-classic"});

slide("S05", "Classics That Survived · 02", `${title("THREE CLASSICS · THREE CONNECTIONS", "무엇이 이 둘을 이어줄까요?")}
  <div class="s5-classic-rows">
    <article><div><span>01</span><h2>MUSSELS × WITBIER</h2><p>홍합 × 위트비어</p></div>${reveal(1, `<div><strong>BALANCE + BRIDGE</strong><p>섬세함 · 바다 풍미 ↔ 가벼운 밀 · 시트러스 · 향신료</p></div>`)}</article>
    <article>${reveal(2, `<div><span>02</span><h2>BLUE CHEESE × BARLEYWINE</h2><p>블루치즈 × 발리와인</p></div>`)}${reveal(3, `<div><strong>BALANCE + CONTRAST</strong><p>짠맛 · 톡 쏘는 향 ↔ 단맛 · 진함 · 과실 풍미</p></div>`)}</article>
    <article>${reveal(4, `<div><span>03</span><h2>FISH &amp; CHIPS × PALE ALE</h2><p>피시 앤 칩스 × 페일 에일</p></div>`)}${reveal(5, `<div><strong>CUT</strong><p>튀김 · 기름진 맛 ↔ 탄산 · 쓴맛</p></div>`)}</article>
  </div>`, {count:5, cls:"s5-classic-trio"});

slide("S07", "The Pairing Method", `${title("THE PAIRING METHOD", "그렇다면 좋은 페어링을<br>어떻게 직접 찾아낼까요?")}
  ${cells(steps.map(([en,ko],i)=>`<article class="s5-step"><span>0${i+1}</span><strong>${en}</strong><p>${ko}</p>${i < steps.length - 1 ? reveal(5, '<span aria-hidden="true">→</span>', 's5-method-arrow') : ''}</article>`), "s5-method-grid")}
  ${reveal(5, note("함께 먹었을 때 무엇이 달라지는지 관찰하는 실험입니다."))}`, {count:5, cls:"s5-method-slide s5-with-note"});

slide("S08", "Step 1 · Read", `${title("STEP 1 · READ", "READ BOTH SIDES", "각각 혼자 있을 때 어떤 맥주와 음식인가?")}
  ${cells([
    `<article class="s5-read"><strong>BEER <span>맥주</span></strong><dl><div><dt>INTENSITY</dt><dd>강도</dd></div><div><dt>AROMA</dt><dd>향</dd></div><div><dt>TASTE</dt><dd>맛</dd></div><div><dt>TEXTURE</dt><dd>질감</dd></div></dl></article>`,
    `<article class="s5-read"><strong>FOOD <span>음식</span></strong><dl><div><dt>INTENSITY</dt><dd>강도</dd></div><div><dt>FLAVOUR</dt><dd>풍미</dd></div><div><dt>TASTE</dt><dd>맛</dd></div><div><dt>TEXTURE</dt><dd>질감</dd></div></dl></article>`
  ], "s5-two")}
  ${reveal(3, `<div class="s5-intensity"><p>LIGHT <span>가벼움</span></p><p>MEDIUM <span>중간</span></p><p>BOLD <span>강함</span></p></div>`)}`, {count:3, cls:"s5-with-note"});

slide("S09", "Step 2 · Connect", `${title("STEP 2 · CONNECT", "FIND A DIRECTION", "이 조합에서는 무엇이 가장 크게 작동할 것 같나요?")}
  ${cells(compass.map(([en,ko,q],i)=>`<article class="s5-compass"><span>0${i+1}</span><div><strong>${en}</strong><p>${ko}</p><small>${q}</small></div></article>`), "s5-compass-grid")}`, {count:4});

slide("S10", "Step 3 · Watch", `${title("STEP 3 · WATCH", "WHAT CHANGED?", "함께 먹으니, 무엇이 달라졌나요?")}
  ${cells(outcomes.map(([symbol,en,ko,term])=>`<article class="s5-outcome"><span>${symbol}</span><strong>${en}</strong><p>${ko}</p><small>${term}</small></article>`), "s5-outcomes")}
  ${reveal(6, `<p class="s5-observe">향 · 단맛 · 쓴맛 · 진한 느낌 · 바디 · 여운</p>`)}`, {count:6, cls:"s5-with-note"});

slide("S11", "Step 4 · Decide", `${title("STEP 4 · DECIDE", "BETTER TOGETHER?", "함께 먹었을 때 더 좋아졌나요?")}
  ${cells([entry("BEER GOT BETTER", "맥주가 더 좋아졌다"),entry("FOOD GOT BETTER", "음식이 더 좋아졌다"),entry("BOTH", "둘 다 좋아졌다"),entry("NOT FOR ME", "내게는 더 좋지 않았다")], "s5-decide-grid")}
  ${reveal(5, `<p class="s5-note"><strong>WHY?</strong> 관찰한 변화 한 가지로 설명합니다.</p>`)}`, {count:5, cls:"s5-with-note"});

const tastingSteps = [
  ["FOOD", "음식만 한 입"], ["BEER A", "A만 한 모금"], ["FOOD + A", "음식 다음 A"],
  ["RESET", "물로 입안 정리"], ["BEER B", "B만 한 모금"], ["FOOD + B", "음식 다음 B"], ["COMPARE", "A/B 차이 비교"],
];
slide("S12", "How to Taste", `${title("HOW TO TASTE", "SAME FOOD · TWO BEERS", "음식은 같게, 맥주는 다르게.")}
  <div class="s5-taste-sequence">${tastingSteps.map(([en,ko],i)=>reveal(i+1, `<article><span>0${i+1}</span><strong>${en}</strong><p>${ko}</p></article>`)).join("")}</div>
  ${reveal(8, note("예상 → 변화 관찰 → A / B / 둘 다 / 둘 다 아님 → 이유 한 문장"))}`, {count:8, cls:"s5-taste-guide s5-with-note"});

slide("S13", "Today's Three Sets", `${title("TODAY’S THREE SETS", "3 SETS · 6 EXPERIENCES", "같은 음식이, 맥주에 따라 어떻게 달라질까요?")}
  <div class="s5-set-board">${sets.map((s,i)=>reveal(i+1, `<article data-tone="${s.tone}"><span>SET ${s.number}</span><div><strong>${s.food}</strong><p>${s.foodKo}</p></div><div class="s5-board-beers">${[["A",s.a],["B",s.b]].map(([letter,beer])=>`<p><b>${letter}</b><span class="s5-board-name">${beer.name} <small>${beer.styleKo}</small></span></p>`).join("")}</div></article>`)).join("")}</div>`, {count:3});

function beerPanel(beer, letter) {
  return `<article class="s5-beer"><div class="s5-beer-name"><span>${letter}</span><div><h2>${beer.name}</h2><p>${beer.ko}</p></div><div class="s5-beer-spec"><span>${beer.styleKo}</span><strong><small>ABV</small> ${beer.abv}%</strong></div></div><figure${beer.photo ? ' class="is-photo"' : ""}><img src="${asset(beer.img)}" alt="${beer.brewery} · ${beer.name}"></figure><p class="s5-brewery">${beer.brewery}</p></article>`;
}
function setSlide(id, set) {
  slide(id, `Set ${set.number} · A vs B`, `<div class="s5-set-heading">${title(`SET ${set.number} · 02 TASTE`, set.foodKo)}<p class="s5-food-brand"><span>FIXED FOOD · 음식은 같게</span>${set.brand}</p></div>
    <div class="s5-set-stage" data-tone="${set.tone}">${reveal(1,beerPanel(set.a,"A"))}
    ${reveal(2,beerPanel(set.b,"B"))}</div>
    ${reveal(3, note("A만 → 음식 + A → 물로 입안 정리 → B만 → 음식 + B"))}`, {count:3, cls:"s5-set-slide s5-with-note", footer:"02 · A/B 시음"});
}

function foodFirst(id, set) {
  slide(`${id}-food`, `Set ${set.number} · Food First`, `${title(`SET ${set.number} · 01 FOOD FIRST`, set.foodKo, set.brand)}
    <div class="story-reveal s5-food-workspace${set.foodImage ? " has-photo" : ""}" data-reveal-step="1"><div class="s5-food-questions">
      <p><span class="s5-question-mark" aria-hidden="true">?</span>어떤 맛이 가장 먼저 느껴지나요?</p><p><span class="s5-question-mark" aria-hidden="true">?</span>질감은 어떤가요?</p>
      <div class="s5-intensity-question"><p><span class="s5-question-mark" aria-hidden="true">?</span>강도는 어디에 가깝나요?</p>
        <fieldset class="s5-intensity-options" aria-label="SET ${set.number} 음식 강도 선택">
          ${[["LIGHT", "가벼움"], ["MEDIUM", "중간"], ["BOLD", "강함"]].map(([en, ko]) => `<label class="s5-intensity-option"><input type="radio" name="food-intensity-${set.number}" value="${en.toLowerCase()}"><span class="s5-intensity-tile"><strong>${en}</strong><small>${ko}</small></span></label>`).join("")}
        </fieldset>
      </div>
    </div></div>${set.foodImage ? `<figure class="s5-food-photo" data-food-set="${set.number}"><img src="${asset(set.foodImage)}" alt="${set.foodImageAlt}"></figure>` : ""}
    ${reveal(2, `<div class="s5-food-anchors${set.anchorEnglish ? " is-bilingual" : ""}" data-tone="${set.tone}">${set.anchors.map((word, i)=>`<span>${word}${set.anchorEnglish ? `<small lang="en">${set.anchorEnglish[i]}</small>` : ""}</span>`).join("")}</div>`)}`, {count:2, cls:`s5-food-first s5-with-note${set.foodImage ? " s5-food-photo-slide" : ""}`, footer:"01 · 음식만 먼저 맛봅니다"});
}

function askSet(id, set) {
  slide(id, `Set ${set.number} · What Changed?`, `${title(`SET ${set.number} · 03 WHAT CHANGED?`, set.question)}
    <div class="s5-set-discussion">${choiceRow()}
      ${reveal(1, `<p class="s5-quick-prompt">함께 먹으니 무엇이 달라졌나요?</p>${outcomeStrip()}`)}
      ${reveal(2, `<p class="s5-discussion-why">왜 그렇게 느꼈나요?<span>관찰한 변화 한 가지로 설명해봅시다.</span></p>`)}
    </div>`, {count:2, cls:"s5-quick-hierarchy s5-set-ask", footer:"03 · 선택 → 변화 → 이유"});
}

function analysisPanel(set, index) {
  const beer = index ? set.b : set.a;
  const reading = set.reading[index];
  const start = index * 3;
  return `<div class="s5-analysis-panel is-${index ? 'b' : 'a'}">
    ${title(`SET ${set.number} · 04 HOW WE CAN READ IT`, `${index ? 'B' : 'A'} · ${beer.ko}`)}
    <div class="s5-analysis-core"><div class="s5-analysis-profile"><img src="${asset(beer.img)}" alt="${beer.name}"><p>${reading.profile}</p></div>
    <div class="s5-analysis-explain">${reveal(start + 1, `<div class="s5-analysis-links">${reading.links.map(([term,text])=>`<p><strong>${term}${term === 'SOFTENING' ? '<small>상호작용 · 부드러워짐</small>' : term === 'ACCENTUATING' ? '<small>상호작용 · 강해짐</small>' : ''}</strong><span>${text}</span></p>`).join("")}</div>`)}
    ${reveal(start + 2, `<div class="s5-analysis-watch"><strong>WATCH · 관찰을 정리하면</strong>${reading.watch.map(text=>`<p>${text}</p>`).join("")}</div>`)}</div></div>
  </div>`;
}

function finalSetReveal(id, set) {
  slide(`${id}-analysis`, `Set ${set.number} · Final Reveal`, `<div class="s5-analysis-panels">
    ${analysisPanel(set, 0)}${analysisPanel(set, 1)}
    <div class="s5-analysis-panel is-axis">${title(`SET ${set.number} · CORE CONTRAST`, `${set.axis[0]} ↔ ${set.axis[1]}`)}
      <div class="s5-axis-pair">${[set.a,set.b].map((beer,i)=>`<article><span>${i ? 'B' : 'A'} · ${beer.ko}</span><strong>${set.axis[i]}</strong><h2>${set.axisKo[i]}</h2><p>${set.axisRules[i]}</p></article>`).join("")}</div>
      ${reveal(7, note(set.axisQuestion))}
    </div>
  </div>`, {count:7, cls:"s5-set-analysis", footer:"04 · 분석 모델 · 실제로 느낀 차이와 비교합니다"});
}

function pairingSet(tasteId, askId, set) {
  foodFirst(tasteId, set);
  setSlide(tasteId, set);
  askSet(askId, set);
  finalSetReveal(askId, set);
}

pairingSet("S14", "S15", sets[0]);
pairingSet("S16", "S17", sets[1]);

slide("S18", "Reset", `${title("RESET", "잠깐, 입안도<br>쉬어갑니다.")}
  <div class="s5-reset"><strong>10<span>MIN</span></strong><div>${reveal(1, `<p>물 한 잔</p>`)}${reveal(2, `<p>입안 정리</p>`)}${reveal(3, `<p>테이블 정리</p>`)}</div></div>
  <p class="s5-note">잠시 후, SET 03에서 다시 만납니다.</p>`, {count:3, cls:"s5-reset-slide s5-with-note"});

pairingSet("S19", "S20", sets[2]);

slide("S21", "Read the Results", `${title("READ THE RESULTS", "THREE FOODS · SIX BEERS", "나의 기록에서, 가장 선명한 조합을 찾습니다.")}
  ${cells([entry("★ BEST PAIR", "가장 좋았던 조합"),entry("! SURPRISE PAIR", "가장 의외였던 조합"),entry("WHAT REPEATED?", "가장 자주 관찰한 변화 하나")],"s5-three")}`, {count:3});

slide("S22", "Compass ≠ Answer", `${title("COMPASS ≠ ANSWER", "PAIRING IS<br>AN INTERACTION", "같은 pairing에서도 여러 방향이 동시에 작동할 수 있습니다.")}
  ${reveal(1, outcomeStrip())}
  ${reveal(2, note("우리가 관찰한 변화는 어느 쪽이었나요?"))}`, {count:2, cls:"s5-with-note"});

slide("S23", "Curator Challenge", `${title("CURATOR CHALLENGE", "NOW, RECOMMEND IT", "오늘 발견한 연결을, 우리가 만든 맥주에도 적용해봅니다.")}
  ${cells([["WHO?","누구에게"],["WHEN?","어떤 상황에서"],["WHAT?","어떤 조합을"],["WHY?","어떤 이유로"]].map(([en,ko])=>entry(en,ko)),"s5-four")}`, {count:4});

slide("S25", "Our Beer · Your Recommendation", `${title("OUR BEER · YOUR RECOMMENDATION", "우리가 만든 맥주로<br>추천 조합을 생각해봅시다.")}
  <div class="s5-team-share">${[entry("TEAM PINK","헤페바이젠팀"),entry("TEAM GREEN","아메리칸 페일 에일팀"),entry("TEAM YELLOW","잉글리시 브라운 에일팀")].map(html=>`<div>${html}</div>`).join("")}</div>
  ${note("어떤 음식과 함께, 누구에게 권하고 싶나요?")}`, {cls:"s5-with-note"});

slide("S24", "Build Your Recommendation", `${title("BUILD YOUR RECOMMENDATION", "우리 맥주, 이렇게 추천합니다.")}
  <div class="s5-recommendation">
    ${reveal(1, `<p><b>누구에게</b><span class="s5-blank"></span>에게 권하고 싶습니다.</p>`)}
    ${reveal(2, `<p><b>언제</b><span class="s5-blank"></span>할 때 즐겨보세요.</p>`)}
    ${reveal(3, `<p><b>무엇과</b>우리 맥주에 <span class="s5-blank"></span>을 곁들여보세요.</p>`)}
    ${reveal(4, `<p><b>왜</b>함께 먹으면 <span class="s5-blank is-long"></span>.</p>`)}
  </div>`, {count:4});

slide("S26", "Look How Far You Came", `${title("LOOK HOW FAR YOU CAME", "TASTER → MAKER<br>→ CURATOR")}
  ${cells([entry("TASTER", "차이를 발견한다"),entry("MAKER", "직접 만든다"),entry("CURATOR", "사람과 음식에 연결한다")],"s5-role-grid")}
  ${reveal(4,note("BEER CULINARY LAB · 2026"))}`, {count:4, cls:"s5-with-note s5-journey-close"});

slide("S27", "Final Callback", `${title("NOW, WHAT DOES BEER MEAN TO YOU?", "맥주")}
  ${reveal(1, `<p class="s5-callback-question">이제 여러분에게<br>맥주는 어떤 의미인가요?</p>`)}`, {count:1, cls:"s5-callback"});

slide("S29", "Five Sessions · One Journey", `<div class="s5-finale-intro">
    <p class="eyebrow">BEER CULINARY LAB · THE FINAL POUR</p>
    <h1>다섯 번의 수업,<br>맥주를 보는 눈이 달라졌습니다.</h1>
  </div>
  ${reveal(1, `<div class="s5-finale-path">
    <p><span>01</span><strong>TASTE</strong><small>맛보다</small></p>
    <p><span>02</span><strong>READ</strong><small>읽다</small></p>
    <p><span>03</span><strong>BREW</strong><small>만들다</small></p>
    <p><span>04</span><strong>SHARE</strong><small>나누다</small></p>
    <p><span>05</span><strong>PAIR</strong><small>연결하다</small></p>
  </div>`)}
  <div class="s5-finale-message">
    ${reveal(2, `<p>우리가 만든 것은 맥주만이 아닙니다.</p>`)}
    ${reveal(3, `<p>한 잔을 이해하고, 설명하고, 함께 나누는 감각.</p>`)}
    ${reveal(4, `<strong>이제, 여러분의 다음 잔이 시작됩니다.</strong>`)}
  </div>`, {count:4, cls:"s5-final"});


document.querySelector("[data-session05-deck]").innerHTML = slides.join("");
document.querySelector("[data-session05-deck]").addEventListener("click", (event) => {
  if (event.target.closest(".s5-intensity-option")) event.stopPropagation();
});
document.querySelector("[data-session05-deck]").addEventListener("keydown", (event) => {
  if (event.target.matches(".s5-intensity-option input") && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)) event.stopPropagation();
});
await import("../polytech-assets/slides.js?v=20260823-47");
