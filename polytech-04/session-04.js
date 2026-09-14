const asset = (name) => `./assets/${name}`;

const teams = [
  { key: "pink", team: "TEAM PINK", style: "HEFEWEIZEN", ko: "헤페바이젠", stats: "OG 1.051 · FG 1.008 · 19L · ABV 5.64%" },
  { key: "green", team: "TEAM GREEN", style: "AMERICAN PALE ALE", ko: "아메리칸 페일 에일", stats: "OG 1.068 · FG 1.008 · 14.5L · ABV 7.8%" },
  { key: "yellow", team: "TEAM YELLOW", style: "ENGLISH BROWN ALE", ko: "잉글리시 브라운 에일", stats: "OG 1.050 · FG 1.008 · 19L · RECORDED ABV 5.64%" },
];

const pairs = [
  {
    number: 1, chapter: "HEFEWEIZEN", own: "OUR HEFEWEIZEN", reference: "WELTENBURGER KLOSTER HELLE WEISSE",
    image: asset("weltenburger-helle-weisse.png"), team: "pink",
    action: "먼저 우리가 만든 맥주만 맛봅니다.",
    ownPrompts: ["가장 먼저 느껴진 향은?", "탄산과 질감은 어떻게 느껴지나요?", "지금 이 맥주를 한 문장으로 말한다면?"],
    question: "두 잔의 가장 큰 차이는 무엇인가요?",
    prompts: ["향은 어느 쪽이 더 선명한가?", "탄산은 어느 쪽이 더 활발한가?", "질감은 어느 쪽이 더 부드러운가?"],
    traceQ: "이 차이에 가장 크게 남은 흔적은 무엇일까요?", clues: [["YEAST", "효모"], ["CARBONATION", "탄산화"], ["TIME", "시간"]],
    axes: [["YEAST", "QUIET", "EXPRESSIVE"], ["CARBONATION", "SOFT", "LIVELY"], ["BODY", "LIGHT", "FULL"]],
  },
  {
    number: 2, chapter: "AMERICAN PALE ALE", own: "OUR AMERICAN PALE ALE", reference: "SIERRA NEVADA PALE ALE",
    image: asset("sierra-nevada-pale-ale.png"), team: "green",
    action: "먼저 우리가 만든 맥주만 맛봅니다.",
    ownPrompts: ["향의 세기와 방향은?", "쓴맛은 어디서 시작해 얼마나 남나요?", "알코올과 바디는 어떻게 느껴지나요?"],
    question: "두 잔의 방향은 어디에서 갈라지나요?",
    prompts: ["향은 어느 쪽이 더 또렷한가?", "쓴맛은 어느 쪽이 더 길게 남는가?", "알코올과 바디는 어느 쪽이 더 크게 느껴지는가?"],
    traceQ: "더 적은 물은 한 잔에 무엇을 남겼을까요?", clues: [["CONCENTRATION", "농도"], ["ALCOHOL", "알코올"], ["HOP BALANCE", "홉과의 균형"]],
    axes: [["AROMA", "QUIET", "BRIGHT"], ["BITTERNESS", "SOFT", "FIRM"], ["BODY", "LIGHT", "FULL"]],
    fact: "14.5L · OG 1.068",
  },
  {
    number: 3, chapter: "ENGLISH BROWN ALE", own: "OUR ENGLISH BROWN ALE", reference: "CIGAR CITY MADURO BROWN ALE",
    image: asset("cigar-city-maduro.png"), team: "yellow",
    action: "먼저 우리가 만든 맥주만 맛봅니다.",
    ownPrompts: ["몰트에서 가장 먼저 떠오른 단어는?", "단맛과 구운 풍미의 균형은?", "마무리는 짧은가, 길게 남는가?"],
    question: "두 잔의 몰트는 어떻게 다르게 말하나요?",
    prompts: ["단맛은 어느 쪽이 더 둥근가?", "토스트와 로스팅의 깊이는 어느 쪽이 더 큰가?", "마무리는 어느 쪽이 더 길게 남는가?"],
    traceQ: "이 잔의 깊이는 어디에서 왔을까요?", clues: [["MALT", "맥아"], ["FERMENTATION", "발효"], ["CARBONATION", "탄산화"], ["TIME", "시간"]],
    axes: [["MALT", "GRAINY", "ROASTED"], ["SWEETNESS", "DRY", "ROUND"], ["BODY", "LIGHT", "FULL"]],
  },
];

const reveal = (step, html, cls = "") => `<div class="story-reveal ${cls}" data-reveal-step="${step}">${html}</div>`;
const title = (eye, main, sub = "") => `<div class="s4-title"><p class="eyebrow">${eye}</p><h1 class="type-display">${main}</h1>${sub ? `<p>${sub}</p>` : ""}</div>`;
const cardGrid = (items, cls = "") => `<div class="s4-card-grid ${cls}">${items.join("")}</div>`;

function slide(id, header, body, { count = 0, cls = "", footer = "Reading the Glass" } = {}) {
  return `<section class="slide ${cls}" id="${id}"${count ? ` data-sequence-reveal data-reveal-count="${count}"` : ""}>
    <header class="slide-header"><span class="slide-brand">Fermented Ghost</span><span>${header}</span></header>
    <div class="slide-body">${body}</div>
    <footer class="slide-footer"><span>${footer}</span></footer>
  </section>`;
}

const slides = [];

slides.push(slide("S00", "Session 04 · Entry", `${title("THREE BATCHES · ONE RETURN", "FIND YOUR BATCH", "지난주 팀으로 모여 우리 배치의 기록을 다시 확인합니다.")}${cardGrid(teams.map((t, i) => reveal(i + 1, `<article class="s4-team-card" data-team="${t.key}"><span>${t.team}</span><h2>${t.style}</h2><em>${t.ko}</em><p>${t.stats}</p></article>`)))}<p class="s4-memory">병 속에서 보낸 7일. 이제 숫자를 맛으로 읽습니다.</p>`, { count: 3, cls: "s4-entry" }));

slides.push(slide("S01", "Session 04 · 09:00–11:50", `${title("SESSION 04", "READING<br>THE GLASS", "우리 맥주 읽기")}${reveal(1, `<p class="s4-big-question">우리가 한 일은,<br>이 한 잔에 어떻게 남았을까요?</p>`)}${reveal(2, `<p class="s4-banner">오늘은 결과를 판정하지 않고, 흔적을 읽습니다.</p>`)}`, { count: 2, cls: "s4-cover" }));

slides.push(slide("S02", "Young Beer", `${title("SEVEN DAYS IN THE BOTTLE", "WHAT CHANGED?", "병 속의 7일은 무엇을 바꾸었을까요?")}${reveal(1, cardGrid([["CO₂", "탄산"], ["PRESSURE", "압력"], ["SEDIMENT", "침전"], ["AROMA", "향"], ["TEXTURE", "질감"]].map(([a,b]) => `<article><strong>${a}</strong><em>${b}</em></article>`), "s4-five"))}${reveal(2, `<p class="s4-banner">완성품이 아니라, 변화 중인 <strong>YOUNG BEER</strong>입니다.</p>`)}`, { count: 2 }));

slides.push(slide("S03", "Today's Tasting Board", `${title("THREE PAIRS · SAME RHYTHM", "OUR BEER FIRST.", "우리 맥주를 먼저 읽고, 기준 맥주와 비교합니다.")}${cardGrid([1,2,3].map((n) => `<article class="s4-pair-board"><span>PAIR ${n}</span><div><b>A<small>OUR BATCH</small></b><b>B<small>REFERENCE</small></b></div></article>`), "s4-three")}`));

slides.push(slide("S04", "Tasting Lens", `${title("FIVE SECONDS, AGAIN", "마시기 전에,<br>다시 5초만.")}${cardGrid([["LOOK","색 · 투명도 · 거품"],["SMELL","향의 세기 · 방향"],["TASTE","단맛 · 산미 · 쓴맛"],["FEEL","탄산 · 바디 · 마무리"]].map(([a,b],i)=>reveal(i+1,`<article class="s4-lens"><span>0${i+1}</span><strong>${a}</strong><em>${b}</em></article>`)),"s4-four")}${reveal(5,`<p class="s4-flavour">FLAVOUR <span>풍미</span></p>`)}`, { count: 5 }));

slides.push(slide("S05", "Evidence Before Verdict", `${title("THREE DIFFERENT SENTENCES", "느낀 것과 판단한 것은<br>같은 말일까요?")}${cardGrid([["OBSERVATION","무엇을 느꼈는가"],["INFERENCE","왜 그랬을 가능성이 있는가"],["PREFERENCE","나는 이것을 좋아하는가"]].map(([a,b],i)=>reveal(i+1,`<article><span>0${i+1}</span><strong>${a}</strong><em>${b}</em></article>`)),"s4-three")}${reveal(4,`<p class="s4-banner">먼저 관찰하고, 그다음 추론합니다.</p>`)}`, { count: 4 }));

function addPair(pair, start) {
  slides.push(slide(`S${String(start).padStart(2,"0")}`, `Pair ${pair.number} · Taste A`, `${title(`PAIR ${pair.number} · A · OUR BATCH`, pair.own, pair.action)}<div class="s4-solo-stage"><div class="s4-pet"></div><div class="s4-solo-label"><strong>A</strong><span>YOUNG BEER · 우리의 실습 맥주</span></div></div><p class="s4-timer">90 SECONDS</p>`, { cls: `s4-taste s4-taste-solo is-${pair.team}` }));
  slides.push(slide(`S${String(start+1).padStart(2,"0")}`, `Pair ${pair.number} · Share A`, `${title("SHARE A FIRST", "우리 맥주는<br>어떻게 느껴졌나요?", "정답 대신, 각자의 첫인상을 모읍니다.")}${cardGrid(pair.ownPrompts.map((p,i)=>reveal(i+1,`<article><span>0${i+1}</span><p>${p}</p></article>`)),"s4-three")}`, { count: 3 }));
  slides.push(slide(`S${String(start+2).padStart(2,"0")}`, `Pair ${pair.number} · Taste B`, `${title(`PAIR ${pair.number} · B · COMMERCIAL REFERENCE`, pair.reference, "이제 기준 맥주 B를 맛봅니다.")}<div class="s4-reference-stage"><figure><img src="${pair.image}" alt="${pair.reference}"></figure><div><strong>B</strong><span>상업 기준 맥주</span><p>기준 맥주는 정답이 아니라 비교 좌표입니다.</p></div></div><p class="s4-timer">90 SECONDS</p>`, { cls: "s4-reference-taste" }));
  slides.push(slide(`S${String(start+3).padStart(2,"0")}`, `Pair ${pair.number} · Compare A/B`, `${title("COMPARE A / B", pair.question, "방금 말한 A의 인상을 기준으로 B와 나란히 봅니다.")}${cardGrid(pair.prompts.map((p,i)=>reveal(i+1,`<article><span>0${i+1}</span><p>${p}</p></article>`)),"s4-three")}${pair.fact ? reveal(4,`<p class="s4-banner">ACTUAL CLUE · ${pair.fact}</p>`) : ""}`, { count: pair.fact ? 4 : 3 }));
  slides.push(slide(`S${String(start+4).padStart(2,"0")}`, `Pair ${pair.number} · Discuss`, `${title("DISCUSS THE DIFFERENCE", pair.traceQ, "하나의 원인으로 단정하지 않고, 가능한 흔적을 함께 찾습니다.")}${cardGrid(pair.clues.map(([a,b],i)=>reveal(i+1,`<article><span>0${i+1}</span><strong>${a}</strong><em>${b}</em></article>`)), pair.clues.length === 4 ? "s4-four" : "s4-three")}`, { count: pair.clues.length }));
}

addPair(pairs[0], 6);
addPair(pairs[1], 11);
addPair(pairs[2], 16);

slides.push(slide("S21", "Three Batches · Three Results", `${title("BRING THE THREE TOGETHER", "세 잔에서 가장 선명하게<br>갈라진 감각은?")}${cardGrid(teams.map((t,i)=>reveal(i+1,`<article class="s4-result" data-team="${t.key}"><span>${t.team}</span><strong>${t.style}</strong><em>${["YEAST-LED · 효모","HOP-LED · 홉","MALT-LED · 맥아"][i]}</em></article>`)),"s4-three")}${reveal(4,`<p class="s4-banner">발효 · 농도 · 탄산화 · 시간</p>`)}`, { count: 4 }));

slides.push(slide("S22", "A Clue, Not a Verdict", `${title("READ THE SIGNAL", "낯선 맛은 결론이 아니라<br>단서입니다.")}${cardGrid([["LOW CO₂","아직 조용한 탄산"],["YEASTY","가라앉는 중인 효모"],["SWEET / DRY","남은 당과 발효도의 인상"],["PAPER-LIKE","산화 가능성"],["UNEXPECTED SOURNESS","오염 또는 발효 특성 확인"]].map(([a,b],i)=>reveal(i+1,`<article><strong>${a}</strong><em>${b}</em></article>`)),"s4-five")}${reveal(6,`<p class="s4-banner">하나의 감각만으로 원인을 확정하지 않습니다.</p>`)}`, { count: 6 }));

slides.push(slide("S23", "Time in the Bottle", `${title("WHAT WILL TIME DO NEXT?", "일주일을 더 기다리면,<br>무엇이 달라질까요?")}${cardGrid([["MORE CO₂?","탄산"],["SETTLING YEAST?","효모"],["CLEARER AROMA?","향"],["SMOOTHER TEXTURE?","질감"]].map(([a,b],i)=>reveal(i+1,`<article><strong>${a}</strong><em>${b}</em></article>`)),"s4-four")}${reveal(5,`<p class="s4-fill-line">우리 맥주는 다음 주에 <span>________________</span>해질 것이다.</p>`)}`, { count: 5 }));

slides.push(slide("S24", "From Instinct to Method", `${title("YOU JUST USED A METHOD", "방금 우리는 맥주를<br>그냥 마신 걸까요?")}${reveal(1,`<p class="s4-method">LOOK → SMELL → TASTE → FEEL</p>`)}${reveal(2,`<p class="s4-method is-dark">OBSERVE → DESCRIBE → CONCLUDE</p>`)}${reveal(3,`<p class="s4-banner">감각을 순서대로 기록하면, 취향은 설명이 됩니다.</p>`)}`, { count: 3 }));

slides.push(slide("S25", "Beer Qualifications", `${title("THREE PATHS INTO BEER", "맥주를 더 배우고 싶다면,<br>어떤 길이 있을까요?")}<div class="s4-path-grid">${reveal(1,`<article><figure class="is-wset"><img src="${asset("wset-global-drinks-education-beer-clean.png")}" alt="WSET Global Drinks Education · 맥주 시음"></figure><div><strong>WSET</strong><em>단계별 학습 · 체계적 시음</em><p>맥주를 구조적으로 배우는 길</p></div></article>`)}${reveal(2,`<article><figure class="is-cicerone"><img src="${asset("cicerone-path.jpeg")}" alt="Cicerone Certification Program"></figure><div><strong>CICERONE</strong><em>서비스 · 현장 전문성</em><p>업계 현장의 전문성을 증명하는 길</p></div></article>`)}${reveal(3,`<article><figure class="is-bjcp"><img src="${asset("bjcp-certified.png")}" alt="BJCP Certified Beer Judge"></figure><div><strong>BJCP</strong><em>스타일 · 대회 심사</em><p>대회 맥주를 평가하고 조언하는 길</p></div></article>`)}</div>${reveal(4,`<p class="s4-banner">좋은 자격은 서열이 아니라 목적에 맞는 도구입니다.</p>`)}`, { count: 4, cls: "s4-paths-slide" }));

slides.push(slide("S26", "WSET Beer", `${title("TWO LEVELS · ONE METHOD", "WSET BEER", "감으로 좋아하는 데서, 근거로 설명하는 사람으로.")}<div class="s4-wset-level-grid">${reveal(1,`<article><figure><img class="s4-level-photo" src="${asset("wset-level1-photo.jpg")}" alt="WSET Level 1 Award in Beer"></figure><div><span>START HERE</span><strong>LEVEL 1</strong><h2>맥주의 기본을<br>읽는 자신감</h2><p>원료 · 양조 · 주요 스타일<br>서비스 · 페어링 · 시음</p></div></article>`)}${reveal(2,`<article><figure><img class="s4-level-photo" src="${asset("wset-level2-photo.jpg")}" alt="WSET Level 2 Award in Beer"></figure><div><span>GO DEEPER</span><strong>LEVEL 2</strong><h2>스타일과 품질을<br>더 깊게 분석하기</h2><p>원료와 공정의 영향 · 폭넓은 스타일<br>품질 · 서비스 · 페어링</p></div></article>`)}</div>${reveal(3,`<p class="s4-banner">오늘의 비교 시음은 이 학습 방식의 작은 시작입니다.</p>`)}`, { count: 3, cls: "s4-wset-levels" }));

slides.push(slide("S27", "Learning with WSET", `${title("BUILT FOR LEARNING", "처음 배우는 사람에게는,<br>배울 순서가 필요합니다.")}${cardGrid([["교재","배움의 기준"],["단계별 교육과정","기초부터 차근차근"],["강사 지도","질문하고 함께 확인"],["SAT","감각을 기록하는 방법"]].map(([a,b],i)=>reveal(i+1,`<article><span>0${i+1}</span><strong>${a}</strong><em>${b}</em></article>`)),"s4-four")}${reveal(5,`<p class="s4-banner">읽고, 맛보고, 질문하며 쌓아갑니다.</p>`)}`, { count: 5, cls: "s4-learning" }));

slides.push(slide("S28", "WSET Systematic Approach to Tasting", `${title("FROM OBSERVATION TO QUALITY", "이 맥주가 잘 만들어졌다고,<br>어떻게 설명할까요?")}${cardGrid([["외관","APPEARANCE"],["향","NOSE"],["입안의 맛과 질감","PALATE"],["품질 판단","CONCLUSIONS"]].map(([a,b],i)=>reveal(i+1,`<article><span>0${i+1}</span><strong>${a}</strong><em>${b}</em></article>`)),"s4-four")}${reveal(5,`<a class="s4-wset-link" href="https://www.wsetglobal.com/media/16358/wset_l2beer_sat_en_dec2023_issue1.pdf" target="_blank" rel="noopener noreferrer">SAT · 체계적인 시음 접근법 <span>↗</span></a>`)}`, { count: 5, cls: "s4-learning" }));

const satPdf = "https://www.wsetglobal.com/media/16358/wset_l2beer_sat_en_dec2023_issue1.pdf";
slides.push(slide("S29", "SAT · Quality", `${title("THE EVIDENCE IN YOUR GLASS", "관찰한 감각이,<br>품질 판단의 근거가 됩니다.")}<div class="s4-document-stage"><figure class="s4-document-full"><img src="${asset("wset-beer-1.png")}" alt="WSET Level 2 SAT 공식 원본 전체"></figure>${reveal(1,`<figure class="s4-document-zoom is-quality"><img src="${asset("wset-beer-1.png")}" alt="SAT Conclusions와 Quality 부분 확대"></figure>`, "s4-document-layer")}</div><a class="s4-document-source" href="${satPdf}" target="_blank" rel="noopener noreferrer">WSET Level 2 SAT · 원본 PDF ↗</a>`, { count: 1, cls: "s4-document-slide" }));

slides.push(slide("S30", "Beer Lexicon", `${title("FIND THE WORD", "“향이 좋아요”에서,<br>한 단어 더.", "방금 느낀 향을 어떻게 표현할까요?")}<div class="s4-document-stage"><div class="s4-lexicon-categories">${reveal(1,`<p>맥아·곡물</p><p>홉</p><p>효모·박테리아</p>`)}</div>${reveal(2,`<figure class="s4-document-full"><img src="${asset("wset-beer-2.png")}" alt="WSET Level 2 Beer-Lexicon 전체"></figure>`, "s4-document-layer")}${reveal(3,`<figure class="s4-document-zoom is-malt"><img src="${asset("wset-beer-2.png")}" alt="Beer-Lexicon 맥아와 곡물의 향 표현 확대"></figure>`, "s4-document-layer")}</div><a class="s4-document-source" href="${satPdf}#page=2" target="_blank" rel="noopener noreferrer">WSET Level 2 Beer-Lexicon · 향 표현 용어집 ↗</a>`, { count: 3, cls: "s4-document-slide" }));

const pairingSlide = (id, eyebrow, heading, body, count, cls = "") =>
  slide(id, "Beer & Food · Pairing", `${title(eyebrow, heading)}${body}`, {count, cls: `s4-pairing ${cls}`, footer: "Reading the Glass · Pairing"});
slides.push(pairingSlide("S33", "FROM YOUR TABLE", "맥주와 함께 먹으면<br>더 맛있었던 음식은?",
  reveal(1, '<p class="s4-pair-statement">음식 하나, 이유 한 가지.</p>'), 1, "s4-pair-opening"));
slides.push(pairingSlide("S34", "WHY PAIR?", "맥주와 음식이 만나면,<br>둘 다 달라집니다.",
  '<div class="s4-pair-lines">' + reveal(1, '<p>맥주가 <strong>음식을</strong> 바꾸고</p>') + reveal(2, '<p>음식이 <strong>맥주를</strong> 바꾼다.</p>') + '</div>' +
  reveal(3, '<p class="s4-pair-note">WHEN BEER MEETS FOOD, BOTH CAN CHANGE.</p>'), 3));
slides.push(pairingSlide("S35", "MATCH THE INTENSITY", "강도부터 맞춥니다.",
  '<div class="s4-pair-duo">' + reveal(1, '<article><span>LIGHT ↔ LIGHT</span><strong>가벼움과 가벼움</strong></article>') +
  reveal(2, '<article><span>RICH ↔ RICH</span><strong>진함과 진함</strong></article>') + '</div>' +
  reveal(3, '<p class="s4-pair-statement">한쪽이 다른 쪽을 삼키지 않게.</p>'), 3));
slides.push(pairingSlide("S36", "PAIRING COMPASS", "조합을 찾는 네 가지 방향",
  '<div class="s4-pair-compass">' + [
    ["BALANCE","힘을 맞춘다","서로 버틸 수 있는가?"],
    ["BRIDGE","공통 풍미로 잇는다","둘 사이의 연결고리는 무엇인가?"],
    ["CONTRAST","다름으로 서로를 살린다","반대되는 감각이 더 흥미롭게 만드는가?"],
    ["CUT","입안을 다시 깨끗하게 만든다","탄산·쓴맛·산미가 무게감을 정리하는가?"]
  ].map(([en,ko,question],i)=>reveal(i+1,`<article><span>0${i+1}</span><div><strong>${en}</strong><p>${ko}</p><em>${question}</em></div></article>`)).join("") + '</div>', 4));
slides.push(pairingSlide("S37", "THREE QUESTIONS · 먹기 전", "음식 앞에서, 세 가지 질문",
  '<div class="s4-pair-questions">' + [["HOW STRONG?","강도는?"],["WHAT ECHOES?","이어지는 풍미는?"],["WHAT NEEDS RELIEF?","무엇을 덜고, 무엇을 대비할까?"]].map(([en,ko],i)=>reveal(i+1,`<p><span>0${i+1} · ${en}</span><strong>${ko}</strong></p>`)).join("") + '</div>' +
  reveal(4, '<p class="s4-pair-note">지방감 · 매운 자극 · 짠맛 · 단맛</p>'), 4));
slides.push(pairingSlide("S38", "WHAT CHANGED? · 먹은 뒤", "함께 먹으니,<br>무엇이 달라졌나요?",
  '<div class="s4-pair-changes">' + ["강해졌다","부드러워졌다","가려졌다","오래 남았다"].map((word,i)=>reveal(i+1,`<p>${word}</p>`)).join("") + '</div>' +
  reveal(5, '<p class="s4-pair-note">맥주에서도, 음식에서도.</p>'), 5));
slides.push(pairingSlide("S39", "TASTE · COMPARE · RECORD", "따로 맛보고, 함께 맛보고,<br>다시 비교합니다.",
  '<div class="s4-pair-method">' + [["맥주 단독","BEER"],["음식 단독","FOOD"],["함께","TOGETHER"],["변화 기록","RECORD"]].map(([ko,en],i)=>reveal(i+1,`<article><span>0${i+1}</span><strong>${ko}</strong><small>${en}</small></article>`)).join("") + '</div>', 4));
slides.push(pairingSlide("S40", "BUILD A FOOD HYPOTHESIS", "이 맥주와 어떤 음식이<br>잘 어울릴지 상상해봅시다.",
  '<div class="s4-pair-choice">' +
  reveal(1, '<p class="s4-pair-combination">우리 맥주 <span>______</span><b>+</b>음식 <span>______</span></p>') +
  reveal(2, '<div class="s4-pair-reasons"><h2>선택한 이유는?</h2><ul><li>강도가 비슷해서</li><li>풍미가 이어져서</li><li>대비가 재미있어서</li><li>무거움을 덜어줄 것 같아서</li></ul></div>') + '</div>' +
  reveal(3, '<p class="s4-pair-statement">함께 먹으면 무엇이 달라질까요?</p>'), 3));

slides.push(slide("S41", "Session 05 · Beyond the Glass", `${title("AFTER LUNCH, TEST IT", "가설은 세웠습니다.<br>오후에는 직접 확인합니다.")}${reveal(1,`<p class="s4-method">BEER → FOOD</p>`)}${reveal(2,`<p class="s4-method">FOOD → BEER</p>`)}${reveal(3,`<p class="s4-method is-dark">WHAT CHANGED?</p>`)}${reveal(4,`<p class="s4-big-question">맥주는 음식과 만났을 때<br>어떻게 더 맛있어질까요?</p>`)}`, { count: 4, cls: "s4-closing", footer: "Next · Session 05 · Beyond the Glass" }));


document.querySelector("[data-session04-deck]").innerHTML = slides.join("");
await import("../polytech-assets/slides.js?v=20260823-47");
