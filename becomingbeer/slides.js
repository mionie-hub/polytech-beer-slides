const editorialTheme = {
  accent: "#e2322a",
  soft: "#f5f5f2",
  ink: "#000",
};

const slides = [
  {
    kind: "cover",
    theme: "memory",
    code: "SPECIAL LECTURE",
    ko: "맥주는 어떻게\n‘맥주’가 되었나",
    en: "HOW BEER BECAME “BEER”",
    enHtml: 'HOW BEER BECAME “<span class="cover-beer-accent">BEER</span>”',
    sub: "TECHNOLOGY · INDUSTRY · CULTURE",
    posterMode: "cover",
  },
  {
    kind: "question",
    theme: "memory",
    code: "FG EVIDENCE 01 / MEMORY",
    ko: '“맥주”\n뭐가 떠오르시나요?',
    followup: '우리는 <span class="accent-word">왜</span>\n맥주를 이렇게 기억할까요?',
    keywords: ["황금색", "투명함", "강한 탄산", "차가움"],
    visual: "",
    posterMode: "question",
  },
  {
    kind: "two",
    theme: "saison",
    code: "FIELD / WALLONIA / HOUSE YEAST",
    ko: "계절은 바뀌고,\n효모는 이어진다.",
    sub: "TASTE 01 · Saison Dupont",
    tasteNumber: 1,
    tasteName: "Saison Dupont",
    tasteFirst: true,
    visual: "",
  },
  {
    kind: "statement",
    theme: "saison",
    code: "FIELD / YEAST / LINEAGE",
    ko: "한 집의 맛은,\n한 세대보다 오래 산다.",
    sub: "살아 있는 미생물 문화로서의 맥주",
    visual: "FARM-BREWERY / FAMILY / HOUSE YEAST",
  },
  {
    kind: "two",
    theme: "archive",
    code: "ARCHIVE / LONDON / PORTER",
    act: "ACT I",
    actTitle: "맥주가 산업이 되다",
    actThesis: "지역의 음료가 대규모 산업과 상품으로 변한다.",
    ko: "금빛 라거가 오기 전,\n런던을 휩쓴 맥주는\n검은 Porter였다.",
    visual: "INDUSTRIAL SCALE / HORSE SHOE BREWERY / 1830",
  },
  {
    kind: "two",
    theme: "archive",
    code: "ARCHIVE / LONDON / 1814",
    ko: "1814.\n그리고 어느 날,\n맥주가 사람을 덮쳤다.",
    visual: "BEER FLOOD / 22FT (≈6.7M) VAT",
    tasteNumber: 2,
    tasteName: "Porter Descendant",
    tasteReveal: 1,
    tastePrompt: "먼저 한 모금. 이름은 잠시 뒤에.",
  },
  {
    kind: "giant",
    theme: "archive",
    code: "ST. JAMES'S GATE / DUBLIN / 1759",
    codeReveal: 2,
    value: "9,000",
    valueClass: "mori-lease",
    posterMode: "number-cobalt",
    revealUnit: "YEARS.",
    sub: "첫 계약부터,\n시간의 단위가 달랐다.",
    subReveal: 3,
    tasteNumber: 2,
    tasteName: "Guinness Original / Extra Stout",
    tasteReveal: 2,
  },
  {
    kind: "compare",
    theme: "archive",
    code: "BRAND / DUBLIN / HARP",
    ko: "브랜드가 먼저 쓴 하프.\n국가는 반대 방향을 택했다.",
    left: "GUINNESS LABEL",
    right: "IRISH STATE HARP",
  },
  {
    kind: "student",
    theme: "archive",
    code: "LAB / DUBLIN / STATISTICS",
    value: "Student's\nT-Test",
    revealSecond: "‘Student’는 학생이 아니었다.",
    revealThird: "Guinness brewer.",
    pivot: "그런데,\n우리가 아는 ‘맥주’는\n아직 등장하지 않았다.",
    pivotMedia: "./assets/media/memory-lager.webp",
    pivotAlt: "첫 질문에서 떠올렸던 투명한 황금빛 라거",
  },
  {
    kind: "two",
    theme: "pilsner",
    code: "PRODUCT / PLZEŇ / 1842",
    ko: "너무 익숙해서,\n혁명인 줄 모른다.",
    visual: "GOLDEN STANDARD / RADICAL HISTORY",
    revealTitle: true,
  },
  {
    kind: "giant",
    theme: "pilsner",
    code: "ARCHIVE / PLZEŇ / 36 BARRELS",
    value: "36",
    valueClass: "mori-barrels",
    posterMode: "number-vermilion",
    layoutMode: "number-action",
    sub: "BARRELS.\n도시는 나쁜 맥주를 광장에 쏟아버렸다.",
    subLeadMori: true,
    visual: "PLZEŇ / MAIN SQUARE / 19TH C.",
  },
  {
    kind: "compare",
    theme: "pilsner",
    code: "MATERIAL / GLASS / VISIBILITY",
    act: "ACT II",
    actTitle: "자연을 통제하다",
    actThesis: "기술은 계절과 거리를 지우고, 같은 맛을 만든다.",
    ko: "맥주가 처음으로,\n‘보이기’ 시작했다.",
    left: "STONEWARE TANKARD / LONDON / 1671–1703",
    right: "CLEAR GLASS",
    tasteNumber: 3,
    tasteName: "Pilsner Urquell",
    tasteReveal: 2,
    tastePrompt: "맛보다 먼저, 잔을 빛에 들어보세요.",
  },
  {
    kind: "two",
    theme: "pilsner",
    code: "FIELD / PLZEŇ / USER PHOTO",
    ko: "같은 필스너도,\n지하에서는 다르게 보인다.",
    visual: "UNFILTERED CELLAR POUR / PLZEŇ",
    layoutMode: "evidence-wide",
  },
  {
    kind: "statement",
    theme: "pilsner",
    code: "FIELD / PLZEŇ / BENCHMARK",
    ko: "과거를 전시하지 않는다.\n기준으로 쓴다.",
    visual: "PARALLEL BREWING / BARREL",
  },
  {
    kind: "statement",
    theme: "system",
    code: "M&A / ASAHI / TEASER",
    ko: "왜 Asahi였을까요?",
    sub: "PILSNER URQUELL → ASAHI",
    revealStatement: "인수에서 가장 어려운 결정은,\n무엇을 바꾸지 않을 것인가.",
    visual: "",
    posterMode: "question-teaser",
  },
  {
    kind: "two",
    theme: "lab",
    code: "SYSTEM / ICE / SEASON",
    ko: "라거에는,\n겨울이 필요했다.",
    visual: "ICE HARVESTING / CELLAR",
    layoutMode: "evidence-wide",
  },
  {
    kind: "statement",
    theme: "lab",
    code: "ENGINEERING / MUNICH / c.1875",
    ko: "여름에도 라거를 만들고 싶었다.\n그래서 <span class=\"mustard-word\">‘겨울’</span>을 기계로 만들었다.",
    visual: "CARL LINDE / INDUSTRIAL REFRIGERATION",
    posterMode: "thesis-winter",
  },
  {
    kind: "statement",
    theme: "lab",
    code: "LAB / COPENHAGEN / PURE YEAST",
    ko: "독점하지 않았다.\n산업을 바꿨다.",
    visual: "HANSEN / PURE YEAST / CARLSBERG LAB",
  },
  {
    kind: "giant",
    theme: "lab",
    code: "LAB / COPENHAGEN / 1909",
    value: "pH",
    valueClass: "medium mori-ph",
    posterMode: "number-ph",
    sub: "맥주를 연구하던 곳에서,\n과학의 공용어가 태어났다.",
    visual: "CARLSBERG LAB / SORENSEN",
  },
  {
    kind: "statement",
    theme: "lab",
    code: "LAB / COPENHAGEN / NOBEL",
    ko: "효모. pH.\n그리고 노벨상.",
    sub: "이곳은 맥주회사의 연구소였다.",
    visual: "PURE YEAST → pH → CLICK CHEMISTRY",
    keywords: ["PURE YEAST", "pH", "NOBEL PRIZE"],
    layoutMode: "research-triad",
  },
  {
    kind: "blind",
    theme: "system",
    code: "TASTE / 04 / BLIND",
    ko: "이 맥주,\n뭘까요?",
    tasteNumber: 4,
    tasteName: "Blind Tasting",
    posterMode: "blind-pause",
  },
  {
    kind: "giant",
    theme: "system",
    code: "SYSTEM / ST. LOUIS / 850 REEFERS",
    act: "ACT III",
    actTitle: "표준이 세계가 되다",
    actThesis: "맥주는 인프라·자본·브랜드의 시스템이 된다.",
    value: "850",
    valueClass: "mori-reefers",
    posterMode: "number-reefers",
    sub: "REFRIGERATED RAILCARS",
    subLeadMori: true,
    visual: "COLD CHAIN AS PRODUCT",
    tasteNumber: 4,
    tasteName: "Budweiser",
    tasteReveal: 2,
    tastePrompt: "BLIND REVEAL",
  },
  {
    kind: "system-diagram",
    theme: "system",
    code: "SYSTEM / ST. LOUIS / COLD CHAIN",
    ko: "맥주는 병 안에서\n완성되지 않았다.",
    systemSteps: ["BREWERY", "PASTEURIZATION", "REFRIGERATED RAIL", "ICE HOUSE", "NATIONAL MARKET"],
  },
  {
    kind: "compare",
    theme: "system",
    code: "M&A / GLOBAL / 2016",
    ko: "세계 1위가,\n세계 2위를 샀다.",
    left: "AB INBEV",
    right: "SABMILLER",
  },
  {
    kind: "statement",
    theme: "system",
    code: "M&A / GLOBAL / DIVESTITURE",
    ko: "너무 커져서,\n맥주를 다시 팔아야 했다.",
    visual: "REGULATORY REMEDY / ASAHI FLOW",
  },
  {
    kind: "brandwall",
    theme: "system",
    code: "M&A / KOREA / CONVENIENCE",
    ko: "우리는 몇 개의 회사에서\n맥주를 고르고 있을까요?",
    conclusion: "생각보다 적습니다.",
  },
  {
    kind: "giant",
    theme: "system",
    code: "DATA / GLOBAL / TOP FOUR",
    value: "50.4%",
    valueClass: "mori-share",
    posterMode: "number-share",
    sub: "WORLD BEER PRODUCTION\n세계 맥주의 절반.\n네 개의 그룹.",
    subLeadMori: true,
    visual: "TOP 4 PRODUCERS / 2024",
  },
  {
    kind: "meaning-threshold",
    theme: "culture",
    code: "BRAND / THRESHOLD",
    ko: "같은 맥주를\n어디서나 만들 수 있게 된 다음,\n무엇으로 경쟁할까?",
    transition: "FROM SCALE → TO MEANING",
  },
  {
    kind: "two",
    theme: "culture",
    code: "AD / DUBLIN / 1929",
    ko: "170년 무광고.\n그다음부터가 더 놀랍다.",
    visual: "FIRST NATIONAL AD / 7 FEB 1929",
  },
  {
    kind: "statement",
    theme: "culture",
    code: "AD / DUBLIN / GILROY",
    ko: "광고를 하려면,\n맥주만큼 좋아야 했다.",
    sub: "판매 촉진물이 아니라, 품질을 가진 ‘문화적 생산물’",
    subClass: "cultural-production-note",
    visual: "GILROY / MENAGERIE / 1935–",
  },
  {
    kind: "video",
    theme: "culture",
    code: "AD / DUBLIN / 1999",
    ko: "광고를 시작하자,\n광고가 문화가 됐다.",
    visual: "GUINNESS SURFER / 60 SEC",
    revealTitle: true,
  },
  {
    kind: "two",
    theme: "culture",
    code: "CRAFT / CHICO / STARTUP",
    act: "ACT IV",
    actTitle: "다시 차이를 선택하다",
    actThesis: "표준의 시대, 다시 ‘다름’을 선택한다.",
    ko: "맥주를 만들기 전에,\n양조장부터 만들었다.",
    visual: "SCRAP BREWHOUSE / KEN GROSSMAN",
  },
  {
    kind: "giant",
    theme: "culture",
    code: "CRAFT / CHICO / 90:10",
    value: "90:10",
    valueHtml: '<span class="ratio-major">90</span><span class="ratio-colon">:</span><span class="ratio-minor">10</span>',
    valueClass: "mori-ratio",
    posterMode: "number-ratio",
    tasteNumber: 5,
    tasteName: "Sierra Nevada Pale Ale",
    tasteReveal: 1,
  },
  {
    kind: "craft-data",
    theme: "culture",
    code: "CRAFT / UNITED STATES / 2025",
    ko: '그 <span class="craft-data-accent">10%</span>는,\n하나의 산업이 되었다.',
    stats: [
      { value: "9,578", label: "breweries" },
      { value: "13.4%", label: "volume share" },
      { value: "24.8%", label: "retail dollar share" },
    ],
  },
  {
    kind: "craft-ecosystem",
    theme: "culture",
    code: "CRAFT / DENVER / COMMUNITY",
    prelude: "수천 개의 양조장.\n수만 명의 사람들.\n하나의 문화.",
    ko: "취향은,\n결국 생태계가 된다.",
    media: "./assets/media/gabf-crowd-2019.jpg",
    mediaAlt: "A dense crowd of brewers and beer drinkers filling the Great American Beer Festival hall",
    mediaPosition: "50% 50%",
    credit: "GABF 2019 / DENVER / PHOTO © BREWERS ASSOCIATION",
  },
  {
    kind: "lambic-threshold",
    theme: "lambic",
    code: "LAMBIC / THRESHOLD",
    ko: "더 다르게 만드는 것과,\n애초에 같아지기를 거부하는 것은\n다른 이야기다.",
    place: "Belgium — Pajottenland / Senne Valley",
    media: "./assets/media/fonteinen-coolship-steam.jpeg",
    mediaAlt: "Steam rising from a lambic coolship as wort cools in the winter air",
    mediaPosition: "50% 50%",
  },
  {
    kind: "video",
    theme: "lambic",
    code: "FIELD / PAJOTTENLAND / WINTER",
    visual: "WINTER NIGHT → COOLSHIP STEAM → BARREL",
  },
  {
    kind: "giant",
    theme: "lambic",
    code: "FIELD / LAMBIC / NO STANDARD",
    value: "WE CANNOT MAKE\nSTANDARD LAMBIC.",
    valueClass: "statement mori-statement mori-statement-heavy",
    visual: "3 FONTEINEN STATEMENT",
    tasteNumber: 6,
    tasteName: "Boon Oude Geuze",
    tasteReveal: 1,
    tastePrompt: "마지막 잔입니다.",
  },
  {
    kind: "statement",
    theme: "lambic",
    code: "FIELD / LAMBIC / BLENDING",
    ko: "정답을 고정하지 않는다.\n매년 다시 균형을 찾는다.",
    visual: "BARREL / BLENDING / JUDGEMENT",
  },
  {
    kind: "two",
    theme: "lambic",
    code: "FIELD / LAMBIC / 2009",
    ko: "“우린 파산했다.”",
    sub: "2009 thermostat disaster",
    visual: "BROKEN BOTTLES / CELLAR",
  },
  {
    kind: "system-contrast",
    theme: "lambic",
    code: "SCALE / CONTRAST / TODAY",
    ko: "둘 다,\n오늘의 맥주다.",
    left: "500+ BRANDS",
    leftSub: "STANDARDIZED GLOBAL LAGER ECOSYSTEM",
    right: "ONE WINTER NIGHT",
    rightSub: "COOLSHIP · AIR · WEATHER · TIME",
  },
  {
    kind: "statement",
    theme: "lambic",
    code: "FIELD / LAMBIC / PAYOFF",
    ko: "산업은 일관성을 만들었고,\n람빅은 변이를 가치로 만들었다.",
    visual: "COOLSHIP / CELLAR HERO",
  },
  {
    kind: "return-question",
    theme: "return",
    code: "RETURN / TASTE / FOUR GLASSES",
    act: "RETURN",
    actTitle: "다시, 같은 질문",
    ko: "지금 가장\n‘맥주다운 맥주’는\n어느 것일까요?",
    choices: ["Lager", "Saison", "Stout", "American Pale Ale", "Gueuze"],
  },
  {
    kind: "finale",
    theme: "return",
    code: "END / THESIS",
    leadFirstLine: "‘맥주답다’는 <span class=\"act-key-accent\">감각</span>도,",
    leadSecondLine: "역사가 만든다.",
    leadSub: "시대, 광고, 제품, 기술, 유통",
    firstLine: "우리가 당연하다고 믿는 <span class=\"end-key-accent\">표준</span>은,",
    secondLine: "누군가가 만든 역사다.",
    signature: "Fermented Ghost / 김미연",
    contact: "mionie@fermentedghost.com",
  },
];

const brandGroups = [
  {
    parent: "OB / AB INBEV",
    brands: [
      { name: "Cass", logo: "./assets/media/logos/cass.png" },
      { name: "Budweiser", logo: "./assets/media/logos/budweiser.svg" },
      { name: "Hoegaarden", logo: "./assets/media/logos/hoegaarden.svg" },
      { name: "Stella Artois", logo: "./assets/media/logos/stella-artois.svg" },
      { name: "Corona Extra", logo: "./assets/media/logos/corona-extra.svg" },
      { name: "Goose Island", logo: "./assets/media/logos/goose-island.svg" },
      { name: "Leffe", logo: "./assets/media/logos/leffe.svg" },
      { name: "Beck's", logo: "./assets/media/logos/becks.svg" },
    ],
  },
  {
    parent: "HEINEKEN",
    brands: [
      { name: "Heineken", logo: "./assets/media/logos/heineken.svg" },
      { name: "Tiger", logo: "./assets/media/logos/tiger-beer.svg" },
      { name: "Birra Moretti", logo: "./assets/media/logos/birra-moretti.svg" },
    ],
  },
  {
    parent: "ASAHI GROUP",
    brands: [
      { name: "Asahi", logo: "./assets/media/logos/asahi.svg" },
      { name: "Pilsner Urquell", logo: "./assets/media/logos/pilsner-urquell.svg" },
      { name: "Peroni", logo: "./assets/media/logos/peroni.png" },
      { name: "Grolsch", logo: "./assets/media/logos/grolsch.svg" },
      { name: "Velkopopovický Kozel", logo: "./assets/media/logos/kozel-user.jpeg" },
    ],
  },
  {
    parent: "CARLSBERG GROUP",
    brands: [
      { name: "1664 Blanc", logo: "./assets/media/logos/kronenbourg.svg" },
      { name: "Carlsberg", logo: "./assets/media/logos/carlsberg.png" },
      { name: "Tuborg", logo: "./assets/media/logos/tuborg-clean.svg" },
    ],
  },
];

const globalBrandLogos = [
  { name: "Budweiser", logo: "./assets/media/logos/budweiser.svg" },
  { name: "Stella Artois", logo: "./assets/media/logos/stella-artois.svg" },
  { name: "Corona Extra", logo: "./assets/media/logos/corona-extra.svg" },
  { name: "Hoegaarden", logo: "./assets/media/logos/hoegaarden.svg" },
  { name: "Beck's", logo: "./assets/media/logos/becks.svg" },
  { name: "Leffe", logo: "./assets/media/logos/leffe.svg" },
  { name: "Michelob Ultra", logo: "./assets/media/logos/michelob-ultra.svg" },
  { name: "Modelo Especial", logo: "./assets/media/logos/modelo-especial.svg" },
  { name: "Heineken", logo: "./assets/media/logos/heineken.svg" },
  { name: "Tiger", logo: "./assets/media/logos/tiger-beer.svg" },
  { name: "Birra Moretti", logo: "./assets/media/logos/birra-moretti.svg" },
  { name: "Asahi", logo: "./assets/media/logos/asahi.svg" },
  { name: "Pilsner Urquell", logo: "./assets/media/logos/pilsner-urquell.svg" },
  { name: "Peroni", logo: "./assets/media/logos/peroni.png" },
  { name: "Velkopopovický Kozel", logo: "./assets/media/logos/kozel-user.jpeg" },
  { name: "Carlsberg", logo: "./assets/media/logos/carlsberg.png" },
  { name: "1664 Blanc", logo: "./assets/media/logos/kronenbourg.svg" },
  { name: "Guinness", logo: "./assets/media/logos/guinness.png" },
];

const mediaBySlide = {
  1: {
    media: "./assets/media/memory-lager.webp",
    mediaAlt: "A cold, transparent golden lager with a dense white head and condensation on the glass",
    mediaPosition: "50% 50%",
  },
  2: {
    videoSrc: "./assets/media/s04-saison-dupont-extended.mp4",
    videoType: "video/mp4",
    videoTitle: "Saison Dupont — Wallonia, Farmhouse and House Yeast",
    poster: "./assets/media/s04-saison-dupont-poster.jpg",
    posterAlt: "Winter fields and the Tourpes village sign in Wallonia",
  },
  3: {
    pairMedia: [
      {
        src: "./assets/media/dupont-farm-brewery-c1920.jpg",
        alt: "Workers and family members outside the historic Dupont farm-brewery in Tourpes",
        label: "FARM-BREWERY / TOURPES / c.1920",
        position: "50% 50%",
      },
      {
        src: "./assets/media/saison-dupont-house-yeast.webp",
        alt: "A brewer handling the Saison Dupont house yeast culture kept alive from batch to batch",
        label: "HOUSE YEAST / PRESENT",
        position: "50% 50%",
      },
    ],
  },
  4: {
    media: "./assets/media/porter-horseshoe.jpg",
    mediaAlt: "Historic illustration of the Horse Shoe Brewery in London",
    mediaPosition: "68% 50%",
    mediaLayout: "is-landscape-evidence",
    archive: true,
  },
  5: {
    tripleMedia: [
      { src: "./assets/media/porter-giant-vats-engraving.jpg", alt: "Engraving of giant brewery vats and workers" },
      { src: "./assets/media/porter-wartime-vats.webp", alt: "Workers beside giant wooden brewery vats" },
      { src: "./assets/media/porter-flood-ruins.jpg", alt: "Historic photograph of industrial flood ruins" },
    ],
    montageTone: "archive",
  },
  8: {
    portraitMedia: "./assets/media/william-sealy-gosset.jpg",
    portraitAlt: "Portrait of Guinness brewer and statistician William Sealy Gosset",
    graphMedia: "./assets/media/guinness-students-t-test-distribution.png",
    graphAlt: "A Student's t-test distribution diagram",
  },
  7: {
    leftMedia: "./assets/media/guinness-label-1862.png",
    leftAlt: "The 1862 Guinness Extra Stout trade mark and bottle label",
    leftFit: "contain",
    leftClass: "is-guinness-1862",
    leftBadge: "1862",
    rightMedia: "./assets/media/irish-state-harp-user.png",
    rightAlt: "The official Irish state harp facing the opposite direction",
    rightFit: "contain",
  },
  9: {
    media: "./assets/media/pilsner-urquell-golden-glass.jpg",
    mediaAlt: "A bright golden Pilsner Urquell mug with a dense white head",
    mediaPosition: "54% 52%",
    overlayMedia: "./assets/media/pilsner-urquell-can-cropped.png",
    overlayAlt: "A familiar Pilsner Urquell can",
  },
  10: {
    media: "./assets/media/pilsen-main-square-19c.jpg",
    mediaAlt: "A nineteenth-century view of the main square in Plzen",
    mediaPosition: "50% 50%",
    archive: true,
    mediaLayout: "is-landscape-evidence",
  },
  11: {
    leftMedia: "./assets/media/london-stoneware-tankard.jpg",
    leftAlt: "An opaque London stoneware tankard dated 1671 to 1703",
    rightMedia: "./assets/media/pilsner-urquell-clear-glass.webp",
    rightAlt: "A clear Pilsner Urquell glass showing the golden beer and dense foam",
    leftFit: "contain",
    rightFit: "cover",
    rightPosition: "50% 88%",
  },
  12: {
    media: "./assets/media/pilsner-cellar-pour.jpg",
    mediaAlt: "Cloudy unfiltered Pilsner Urquell poured directly in the cellar",
    mediaPosition: "50% 68%",
    userAsset: true,
  },
  13: {
    media: "./assets/media/pilsner-cellar-vats-close.jpg",
    mediaAlt: "Open wooden lagering vessels in the Pilsner Urquell cellar",
    mediaPosition: "50% 62%",
    userAsset: true,
  },
  14: {
    media: "./assets/media/pilsner-cellar-vats-wide.jpg",
    mediaAlt: "Historic parallel brewing vessels in the Pilsner Urquell cellar",
    mediaPosition: "50% 72%",
    userAsset: true,
  },
  15: {
    media: "./assets/media/ice-harvest.jpg",
    mediaAlt: "Historic photograph of workers sawing natural ice",
    mediaLayout: "is-ice-crop",
    archive: true,
  },
  17: {
    media: "./assets/media/emil-hansen-archive.jpg",
    mediaAlt: "Archival portrait of Emil Christian Hansen published in 1909",
    mediaPosition: "50% 34%",
    archive: true,
  },
  19: {
    media: "./assets/media/carlsberg-lab.png",
    mediaAlt: "Historic Carlsberg Research Laboratory",
    archive: true,
  },
  21: {
    media: "./assets/media/bud-railcar.jpg",
    mediaAlt: "Anheuser-Busch refrigerated railcar",
    mediaPosition: "52% 50%",
    archive: true,
  },
  23: {
    leftMedia: "./assets/media/logos/ab-inbev.svg",
    leftAlt: "AB InBev corporate logo",
    rightMedia: "./assets/media/logos/sabmiller.svg",
    rightAlt: "SABMiller corporate logo",
    leftFit: "contain",
    rightFit: "contain",
    leftClass: "is-corporate-logo",
    rightClass: "is-corporate-logo",
  },
  28: {
    media: "./assets/media/guinness-first-national-ad-1929.jpg",
    mediaAlt: "The first national Guinness newspaper advertisement, published in the Daily Chronicle on 7 February 1929",
    mediaLayout: "is-first-ad",
    archive: true,
  },
  29: {
    tripleMedia: [
      { src: "./assets/media/guinness-gilroy-goodness.jpeg", alt: "John Gilroy's My Goodness My Guinness sea lion poster" },
      { src: "./assets/media/guinness-gilroy-woolworth.jpg", alt: "John Gilroy's Guinness toucan poster for Woolworth Building" },
    ],
    montageTone: "gilroy-pair",
  },
  30: {
    embed: "https://www.youtube-nocookie.com/embed/w9ogzVyTtcw?rel=0",
    embedTitle: "Guinness Surfer, 1999",
    poster: "./assets/media/guinness-surfer-poster.jpg",
    posterAlt: "Black-and-white still of horses in breaking waves from Guinness Surfer",
  },
  31: {
    media: "./assets/media/sierra-ken.jpg",
    mediaAlt: "Ken Grossman and early Sierra Nevada beer and brewhouse",
    archive: true,
    mediaLayout: "is-landscape-three-two",
  },
  36: {
    embed: "https://www.youtube-nocookie.com/embed/2zuRczRs7U4?rel=0",
    embedTitle: "Lambic: About Time and Passion — trailer",
    poster: "./assets/media/lambic-film-poster.jpg",
    posterAlt: "Lambic About Time and Passion title over ageing barrels",
  },
  37: {
    media: "./assets/media/3fonteinen-barrel-glass.jpg",
    mediaAlt: "A glass of 3 Fonteinen lambic held in front of wooden barrels",
    mediaPosition: "50% 50%",
    mediaLayout: "is-landscape-three-two",
  },
  38: {
    media: "./assets/media/fonteinen-tasting.jpg",
    mediaAlt: "Hands tasting and blending lambic at 3 Fonteinen",
    mediaPosition: "55% 50%",
  },
  39: {
    media: "./assets/media/fonteinen-history-08.jpg",
    mediaAlt: "Broken bottles after the 2009 3 Fonteinen thermostat disaster",
    mediaPosition: "50% 60%",
    archive: true,
  },
  40: {
    rightMedia: "./assets/media/fonteinen-coolship-steam.jpeg",
    rightAlt: "Steam rising from a 3 Fonteinen coolship as wort cools in open air",
  },
  41: {
    media: "./assets/media/fonteinen-barrels.jpg",
    mediaAlt: "Rows of lambic barrels at 3 Fonteinen",
    mediaPosition: "58% 50%",
  },
};

Object.entries(mediaBySlide).forEach(([index, media]) => {
  Object.assign(slides[Number(index)], media);
});

const harpIndex = slides.findIndex((slide) => slide.code === "BRAND / DUBLIN / HARP");
const firstGuinnessAdIndex = slides.findIndex((slide) => slide.code === "AD / DUBLIN / 1929");
if (harpIndex >= 0 && firstGuinnessAdIndex >= 0) {
  const [harpSlide] = slides.splice(harpIndex, 1);
  const destination = slides.findIndex((slide) => slide.code === "BRAND / THRESHOLD");
  slides.splice(destination, 0, harpSlide);
}

slides.splice(2, 0, {
  kind: "profile",
  theme: "memory",
  code: "FG PROFILE / SEOUL / BEER CULTURE",
  eyebrow: "YOUR GUIDE",
  ko: "김미연",
  sub: "맥주를 읽고, 가르치고, 연결합니다.",
  roles: [
    ["Korean Beer Sommelier Champion", "대한민국 비어 소믈리에 챔피언"],
    ["Beer Educator · Competition Judge", "맥주 전문 교육자 · 국제 맥주대회 심사위원"],
    ["Founder, Fermented Ghost", "퍼멘티드 고스트 설립자 · 대표"],
  ],
  studio: "Beer Culture Studio",
  studioSub: "",
  studioPrograms: [
    ["Beer Education", "맥주 전문 교육 과정"],
    ["Sensory Training", "관능 & 감각 훈련"],
    ["Curated Beer Experiences", "맥주 경험 디자인"],
  ],
  media: "./assets/media/mionie-your-guide.jpg",
  mediaAlt: "맥주잔을 들고 Fermented Ghost 공간에 선 김미연",
  overlayMedia: "./assets/media/fermented-ghost-wset-tasting-mat.jpg",
  overlayAlt: "Fermented Ghost WSET Beer 테이스팅 매트와 시음 잔",
});

const deck = document.querySelector("#deck");
const count = document.querySelector("#slide-count");
let current = 0;

document.body.classList.toggle(
  "is-export",
  new URLSearchParams(window.location.search).get("export") === "1",
);

function applyTheme(section) {
  section.style.setProperty("--accent", editorialTheme.accent);
  section.style.setProperty("--accent-soft", editorialTheme.soft);
  section.style.setProperty("--accent-ink", editorialTheme.ink);
}

function chrome(slide) {
  const codeRevealClass = slide.codeReveal ? " reveal-item" : "";
  const codeRevealAttr = slide.codeReveal ? ` data-reveal="${slide.codeReveal}"` : "";
  return `
    ${wordmark()}
    <div class="chrome">
      <div class="code${codeRevealClass}"${codeRevealAttr}>${slide.code}</div>
    </div>
  `;
}

function wordmark() {
  return `<span class="brand-wordmark" aria-label="Fermented Ghost"></span>`;
}

function actCue(slide) {
  if (!slide.act) return "";
  const tone = {
    "ACT I": "vermilion",
    "ACT II": "mustard",
    "ACT III": "indigo",
    "ACT IV": "green",
    RETURN: "cobalt",
  }[slide.act] ?? "cobalt";
  const hasThesis = Boolean(slide.actThesis);
  return `
    <aside class="act-cue act-cue-${tone}${hasThesis ? "" : " act-cue-compact"}" aria-label="${slide.act}: ${slide.actTitle}">
      <span>${slide.act}</span>
      <strong>${slide.actTitle}</strong>
      ${hasThesis
        ? slide.actSub
          ? `<div class="act-cue-thesis"><small>${slide.actThesisHtml ?? slide.actThesis}</small><em>${slide.actSub}</em></div>`
          : `<small>${slide.actThesisHtml ?? slide.actThesis}</small>`
        : ""}
    </aside>
  `;
}

const narrativeSections = [
  { start: 1, end: 5, label: "OPEN", mode: "DEFAULT", tone: "cobalt", title: "우리가 알고 있는 맥주" },
  { start: 6, end: 11, label: "ACT I", mode: "SCALE", tone: "vermilion", title: "맥주가 산업이 되다" },
  { start: 12, end: 21, label: "ACT II", mode: "CONTROL", tone: "mustard", title: "자연을 통제하다" },
  { start: 22, end: 32, label: "ACT III", mode: "SYSTEM", tone: "indigo", title: "표준이 세계가 되다" },
  { start: 33, end: 43, label: "ACT IV", mode: "DIFFERENCE", tone: "green", title: "다시 차이를 선택하다" },
  { start: 44, end: 45, label: "RETURN", mode: "AGAIN", tone: "cobalt", title: "다시, 같은 질문" },
];

function microCue(index) {
  const number = index + 1;
  const section = narrativeSections.find(({ start, end }) => number >= start && number <= end);
  if (!section) return "";
  const label = `${section.label} / ${section.mode} / ${section.title}`;

  return `
    <div class="micro-cue cue-${section.tone}" aria-label="${label}">
      <span class="micro-cue-code">${section.label} / ${section.mode}</span>
      <span class="micro-cue-divider" aria-hidden="true">/</span>
      <span class="micro-cue-ko">${section.title}</span>
    </div>
  `;
}

function progressRail(index) {
  const progress = Math.min(100, ((index + 1) / slides.length) * 100);
  return `
    <div class="progress-rail" style="--progress:${progress}%;" aria-hidden="true">
      <div class="progress-fill"></div>
    </div>
  `;
}

function nl(text = "") {
  return text.replaceAll("\n", "<br>");
}

function isEnglishLine(text = "") {
  return /[A-Za-z]/.test(text) && !/[가-힣]/.test(text);
}

function bodyText(text = "") {
  return text
    .split("\n")
    .map((line) => `<span class="${isEnglishLine(line) ? "mori-body" : ""}">${line}</span>`)
    .join("<br>");
}

function giantSub(slide) {
  const [lead, ...rest] = slide.sub.split("\n");
  const formatLine = (line, forceMori = false) => {
    const className = forceMori || isEnglishLine(line) ? "mori-sub" : "";
    return `<span class="${className}">${line}</span>`;
  };
  return [formatLine(lead, slide.subLeadMori), ...rest.map((line) => formatLine(line))].join("<br>");
}

function tastingCue(slide) {
  const number = String(slide.tasteNumber).padStart(2, "0");
  return `
    <div class="tasting-cue tasting-cue-${slide.tasteNumber}" aria-label="Taste ${number}: ${slide.tasteName}">
      <span class="tasting-mark" aria-hidden="true"></span>
      <span class="tasting-copy">
        <strong>TASTE ${number}</strong>
        <span>${slide.tasteName}</span>
      </span>
    </div>
  `;
}

function evidence(label = "EVIDENCE / PENDING") {
  return `
    <div class="evidence-frame">
      <div class="evidence-label">${label}</div>
    </div>
  `;
}

function picture(asset, label = "", className = "") {
  if (!asset) return evidence(label);
  const archiveClass = asset.archive ? "is-archive" : "";
  const userClass = asset.userAsset ? "is-user-asset" : "";
  const layoutClass = asset.mediaLayout ?? "";
  const position = asset.mediaPosition ?? "50% 50%";
  return `
    <figure class="media-frame ${className} ${archiveClass} ${userClass} ${layoutClass}">
      <img src="${asset.media}" alt="${asset.mediaAlt ?? ""}" style="object-position:${position};" />
      ${asset.overlayMedia ? `<img class="media-product-overlay" src="${asset.overlayMedia}" alt="${asset.overlayAlt ?? ""}" />` : ""}
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function embed(asset, label = "", className = "") {
  const embedUrl = asset.embed.replaceAll("&", "&amp;");
  return `
    <figure class="media-frame video-media ${className}">
      <button
        class="video-launch"
        type="button"
        data-embed="${embedUrl}"
        data-embed-title="${asset.embedTitle ?? label}"
        aria-label="Play ${asset.embedTitle ?? label}"
      >
        <img src="${asset.poster}" alt="${asset.posterAlt ?? ""}" />
        <span class="video-play" aria-hidden="true"></span>
      </button>
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function localVideo(asset, label = "", className = "") {
  return `
    <figure class="media-frame video-media local-video ${className}">
      <video controls preload="metadata" playsinline poster="${asset.poster}" aria-label="${asset.videoTitle ?? label}">
        <source src="${asset.videoSrc}" type="${asset.videoType ?? "video/mp4"}" />
      </video>
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function primaryMedia(slide, className = "") {
  if (slide.videoSrc) return localVideo(slide, slide.visual ?? "", className);
  if (slide.embed) return embed(slide, slide.visual ?? "", className);
  return picture(slide, slide.visual ?? "", className);
}

function comparisonPanel(label, media, alt, side, fit = "cover", extraClass = "", position = "50% 50%", badge = "") {
  if (!media) {
    return `<div class="panel panel-type panel-${side}"><p>${label}</p></div>`;
  }
  return `
    <figure class="panel panel-image panel-${side} is-fit-${fit} ${extraClass}">
      <img src="${media}" alt="${alt ?? ""}" style="object-position:${position};" />
      ${badge ? `<span class="panel-badge">${badge}</span>` : ""}
      <figcaption>${label}</figcaption>
    </figure>
  `;
}

function lineagePair(items, label = "") {
  return `
    <figure class="lineage-pair">
      ${items.map((item) => `
        <div class="lineage-item">
          <img src="${item.src}" alt="${item.alt ?? ""}" style="object-position:${item.position ?? "50% 50%"};" />
          <span>${item.label}</span>
        </div>
      `).join("")}
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function returnGrid(items) {
  return `
    <div class="return-grid">
      ${items.map((item) => `
        <figure>
          <img src="${item.src}" alt="${item.label}" />
          <figcaption>${item.label}</figcaption>
        </figure>
      `).join("")}
    </div>
  `;
}

function archiveMontage(items, label = "", tone = "archive") {
  return `
    <figure class="archive-montage is-${tone}">
      ${items.map((item) => `
        <div class="montage-item">
          <img src="${item.src}" alt="${item.alt ?? ""}" />
        </div>
      `).join("")}
      ${label ? `<figcaption>${label}</figcaption>` : ""}
    </figure>
  `;
}

function brandWall() {
  const scattered = brandGroups.flatMap((group) => group.brands);
  const positions = [
    [2, 3, -4, 19], [20, 1, 2, 21], [42, 5, -2, 20], [62, 2, 4, 18], [79, 6, -3, 17],
    [2, 26, 3, 21], [23, 29, -4, 19], [43, 24, 2, 20], [64, 28, -2, 19], [80, 25, 3, 17],
    [3, 50, -2, 20], [23, 47, 4, 21], [45, 53, -3, 19], [65, 48, 2, 19], [80, 52, -4, 16],
    [3, 75, 4, 21], [28, 77, -2, 21], [53, 74, 3, 20], [77, 78, -3, 20],
  ];
  return `
    <button class="brand-stage" type="button" aria-label="브랜드를 모회사별로 묶기" aria-pressed="false">
      <div class="logo-cloud">
        ${scattered.map((brand, index) => {
          const [x, y, rotate, width] = positions[index];
          return `<img src="${brand.logo}" alt="${brand.name}" style="--x:${x}%; --y:${y}%; --r:${rotate}deg; --w:${width}%;" />`;
        }).join("")}
      </div>
      <div class="logo-groups" aria-hidden="true">
        ${brandGroups.map((group) => `
          <div class="logo-group is-group-size-${Math.min(group.brands.length, 5)}">
            <p>${group.parent}</p>
            <div>
              ${group.brands.map((brand) => `<img src="${brand.logo}" alt="" />`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    </button>
  `;
}

function globalLogoCloud() {
  return globalBrandLogos
    .map((brand) => `<img src="${brand.logo}" alt="${brand.name}" />`)
    .join("");
}

function renderSlide(slide, index) {
  const section = document.createElement("section");
  section.className = [
    "slide",
    `kind-${slide.kind}`,
    slide.kind === "cover" ? "is-cover" : "",
    slide.posterMode ? `poster-${slide.posterMode}` : "",
    slide.layoutMode ? `layout-${slide.layoutMode}` : "",
    slide.tasteNumber ? "has-tasting-cue" : "",
    slide.act ? "has-act-cue" : "",
    slide.media || slide.embed || slide.videoSrc || slide.tripleMedia || slide.pairMedia || slide.portraitMedia ? "has-media" : "",
    slide.archive ? "has-archive" : "",
    index === slides.length - 1 ? "is-final" : "",
  ].filter(Boolean).join(" ");
  section.dataset.index = String(index);
  applyTheme(section);

  let html = "";
  const hideChrome = slide.kind === "end" && index === slides.length - 1;
  if (slide.kind !== "cover" && !hideChrome) html += chrome(slide);
  html += actCue(slide);
  const bodyStart = html.length;

  if (slide.kind === "cover") {
    html += `
      ${wordmark()}
      ${slide.media ? `<div class="cover-media"><img src="${slide.media}" alt="${slide.mediaAlt ?? ""}" style="object-position:${slide.mediaPosition ?? "50% 50%"};" /></div>` : ""}
      <div class="safe cover-copy ${slide.media ? "" : "cover-copy-solo"}">
        <p class="kicker">${slide.code}</p>
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <p class="title-en cover-en">${slide.enHtml ?? slide.en}</p>
        <p class="caption cover-sub">${slide.sub}</p>
      </div>
    `;
  } else if (slide.kind === "question") {
    html += `
      <div class="safe question-layout">
        <div class="question-copy">
          <h1 class="title-ko question-first">${nl(slide.ko)}</h1>
          <h2 class="title-ko question-followup reveal-item" data-reveal="1">${nl(slide.followup)}</h2>
          <div class="question-keywords reveal-item" data-reveal="1">
            ${slide.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}
          </div>
        </div>
        <div class="question-visual reveal-item" data-reveal="1">${picture(slide, "", "question-photo")}</div>
      </div>
    `;
  } else if (slide.kind === "two") {
    const visual = slide.quadMedia
      ? returnGrid(slide.quadMedia)
      : slide.tripleMedia
        ? archiveMontage(slide.tripleMedia, slide.visual ?? "", slide.montageTone)
        : primaryMedia(slide);
    const revealClass = slide.revealTogether ? " reveal-item" : "";
    const revealAttr = slide.revealTogether ? ` data-reveal="1"` : "";
    if (slide.tasteFirst) {
      html += `
        <div class="safe taste-first-layout">
          <div class="taste-first-cue">${tastingCue(slide)}</div>
          <div class="taste-first-body reveal-item" data-reveal="1">
            <div class="two-col">
              <div class="copy-col">
                <h1 class="title-ko">${nl(slide.ko)}</h1>
                ${tastingCue(slide)}
              </div>
              ${visual}
            </div>
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="safe two-col">
          <div class="copy-col">
            <h1 class="title-ko${slide.revealTitle ? " reveal-item" : ""}"${slide.revealTitle ? ' data-reveal="1"' : ""}>${nl(slide.ko)}</h1>
            ${slide.tasteNumber && !slide.tasteReveal
              ? tastingCue(slide)
              : slide.sub
                ? `<p class="sub${revealClass}"${revealAttr}>${bodyText(slide.sub)}</p>`
                : ""}
          </div>
          ${slide.revealTogether ? `<div class="reveal-media reveal-item" data-reveal="1">${visual}</div>` : visual}
        </div>
      `;
    }
  } else if (slide.kind === "profile") {
    html += `
      <div class="safe profile-layout">
        <div class="profile-copy">
          <p class="profile-eyebrow mori-body">${slide.eyebrow}</p>
          <h1 class="profile-name">${slide.ko}</h1>
          <p class="profile-intro">${slide.sub}</p>
          ${slide.progression ? `<p class="profile-progression mori-body">${slide.progression}</p>` : ""}
          <div class="profile-roles">
            ${slide.roles.map(([en, ko], index) => `
              <div class="profile-role">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <div><strong>${en}</strong><small>${ko}</small></div>
              </div>
            `).join("")}
          </div>
          <div class="profile-studio reveal-item" data-reveal="1">
            <div class="profile-studio-head">
              <strong>${slide.studio}</strong>
              ${slide.studioSub ? `<span>${slide.studioSub}</span>` : ""}
            </div>
            <div class="profile-studio-programs">
              ${slide.studioPrograms.map(([en, ko], index) => `
                <div class="profile-studio-program">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <div><strong>${en}</strong><small>${ko}</small></div>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
        <div class="profile-visual">
          <figure class="profile-photo"><img src="${slide.media}" alt="${slide.mediaAlt}" /></figure>
          <figure class="profile-wset reveal-item" data-reveal="1"><img src="${slide.overlayMedia}" alt="${slide.overlayAlt}" /><figcaption>WSET BEER / SENSORY PRACTICE</figcaption></figure>
        </div>
      </div>
    `;
  } else if (slide.kind === "statement") {
    if (slide.media || slide.embed || slide.tripleMedia || slide.pairMedia) {
      const visual = slide.pairMedia
        ? lineagePair(slide.pairMedia)
        : slide.tripleMedia
          ? archiveMontage(slide.tripleMedia, slide.visual ?? "", slide.montageTone)
          : primaryMedia(slide);
      html += `
        <div class="safe statement-grid">
          <div class="copy-col">
            <h1 class="title-ko">${nl(slide.ko)}</h1>
            ${slide.sub ? `<p class="sub ${slide.subClass ?? ""}">${bodyText(slide.sub)}</p>` : ""}
            ${slide.revealStatement ? `<p class="statement-reveal reveal-item" data-reveal="1">${nl(slide.revealStatement)}</p>` : ""}
            ${slide.keywords ? `<div class="research-keywords">${slide.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>` : ""}
          </div>
          ${visual}
        </div>
      `;
    } else {
      html += `
        <div class="safe copy-col statement-only">
          <h1 class="title-ko">${nl(slide.ko)}</h1>
          ${slide.sub ? `<p class="sub ${slide.subClass ?? ""}">${bodyText(slide.sub)}</p>` : ""}
          ${slide.revealStatement ? `<p class="statement-reveal reveal-item" data-reveal="1">${nl(slide.revealStatement)}</p>` : ""}
          ${slide.keywords ? `<div class="research-keywords">${slide.keywords.map((keyword) => `<span>${keyword}</span>`).join("")}</div>` : ""}
        </div>
        ${slide.visual ? `<p class="bottom-caption caption">${slide.visual}</p>` : ""}
      `;
    }
  } else if (slide.kind === "student") {
    html += `
      <div class="safe student-layout">
        <div class="student-copy">
          <h1>${nl(slide.value)}</h1>
          <p class="student-reveal student-reveal-second reveal-item" data-reveal="1">${slide.revealSecond}</p>
          <p class="student-reveal student-reveal-third reveal-item" data-reveal="2">${slide.revealThird}</p>
          ${slide.tasteNumber ? `<div class="student-taste reveal-item" data-reveal="2">${tastingCue(slide)}</div>` : ""}
        </div>
        <div class="student-evidence">
          <figure class="student-graph reveal-item" data-reveal="1">
            <img src="${slide.graphMedia}" alt="${slide.graphAlt}" />
            <figcaption>STUDENT’S T-DISTRIBUTION</figcaption>
          </figure>
          <figure class="student-portrait reveal-item" data-reveal="2">
            <img src="${slide.portraitMedia}" alt="${slide.portraitAlt}" />
            <figcaption>W. S. GOSSET / GUINNESS BREWER</figcaption>
          </figure>
        </div>
        ${slide.pivot ? `
          <div class="student-pivot reveal-item" data-reveal="3">
            <figure><img src="${slide.pivotMedia}" alt="${slide.pivotAlt}" /></figure>
            <p>${nl(slide.pivot)}</p>
          </div>
        ` : ""}
      </div>
    `;
  } else if (slide.kind === "blind") {
    html += `
      <div class="safe blind-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        ${tastingCue(slide)}
      </div>
    `;
  } else if (slide.kind === "system-diagram") {
    html += `
      <div class="safe system-diagram-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <div class="system-flow" aria-label="Cold chain system">
          ${slide.systemSteps.map((step, index) => `
            <div class="system-node">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <strong>${step}</strong>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else if (slide.kind === "giant") {
    const giantMedia = slide.media ? primaryMedia(slide, "giant-media") : "";
    html += `
      <div class="giant ${slide.media ? "giant-with-media" : ""}">
        <div class="giant-copy">
          <h1 class="giant-value ${slide.valueClass ?? ""}"${slide.valueHtml ? ` aria-label="${slide.value}"` : ""}>${slide.valueHtml ?? nl(slide.value)}</h1>
          ${slide.revealUnit ? `<p class="giant-unit reveal-item" data-reveal="1">${slide.revealUnit}</p>` : ""}
          ${slide.sub ? `<p class="giant-sub${slide.subReveal ? " reveal-item" : ""}"${slide.subReveal ? ` data-reveal="${slide.subReveal}"` : ""}>${giantSub(slide)}</p>` : ""}
        </div>
        ${giantMedia}
      </div>
      ${slide.media || !slide.visual ? "" : `<p class="bottom-caption caption">${slide.visual}</p>`}
    `;
  } else if (slide.kind === "craft-data") {
    html += `
      <div class="safe craft-data-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <div class="craft-data-values" aria-label="9,578 craft breweries, 13.4 percent volume share, 24.8 percent retail dollar share">
          ${slide.stats.map((stat) => `
            <div class="craft-data-stat">
              <strong>${stat.value}</strong>
              <span>${stat.label}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else if (slide.kind === "craft-ecosystem") {
    html += `
      <figure class="craft-ecosystem-visual">
        <img src="${slide.media}" alt="${slide.mediaAlt}" style="object-position:${slide.mediaPosition};" />
      </figure>
      <div class="craft-ecosystem-shade" aria-hidden="true"></div>
      <div class="safe craft-ecosystem-copy">
        <p class="craft-ecosystem-prelude">${nl(slide.prelude)}</p>
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <p>${slide.credit}</p>
      </div>
    `;
  } else if (slide.kind === "lambic-threshold") {
    html += `
      <figure class="lambic-threshold-fragment" aria-hidden="true">
        <img src="${slide.media}" alt="" style="object-position:${slide.mediaPosition};" />
      </figure>
      <div class="safe lambic-threshold-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <p class="lambic-threshold-place">${slide.place}</p>
      </div>
    `;
  } else if (slide.kind === "meaning-threshold") {
    html += `
      <div class="safe meaning-threshold-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <p class="meaning-threshold-transition">${slide.transition.replace("→", '<span aria-hidden="true">→</span>')}</p>
      </div>
    `;
  } else if (slide.kind === "compare") {
    html += `
      <div class="safe">
        <div class="split-comparison">
          ${comparisonPanel(slide.left, slide.leftMedia, slide.leftAlt, "left", slide.leftFit, slide.leftClass, slide.leftPosition, slide.leftBadge)}
          ${comparisonPanel(slide.right, slide.rightMedia, slide.rightAlt, "right", slide.rightFit, slide.rightClass, slide.rightPosition, slide.rightBadge)}
        </div>
        <h1 class="title-ko compare-title">${nl(slide.ko)}</h1>
      </div>
    `;
  } else if (slide.kind === "system-contrast") {
    html += `
      <div class="safe system-contrast-layout">
        <div class="system-contrast-grid">
          <section class="contrast-scale">
            <strong>${slide.left}</strong>
            <span>${slide.leftSub}</span>
            <div class="contrast-logo-cloud">${globalLogoCloud()}</div>
          </section>
          <figure class="contrast-winter">
            <img src="${slide.rightMedia}" alt="${slide.rightAlt}" />
            <figcaption><strong>${slide.right}</strong><span>${slide.rightSub}</span></figcaption>
          </figure>
        </div>
        <h1 class="title-ko">${nl(slide.ko)}</h1>
      </div>
    `;
  } else if (slide.kind === "brandwall") {
    html += `
      <div class="safe brandwall-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        ${brandWall()}
        <p class="brandwall-conclusion reveal-item" data-reveal="2">${slide.conclusion}</p>
      </div>
    `;
  } else if (slide.kind === "video") {
    html += `
      <div class="safe video-layout">
        ${slide.embed ? embed(slide, slide.visual ?? "", "video-hero") : `<div class="video-placeholder"><p>${slide.visual}</p></div>`}
        ${slide.ko ? `<h1 class="title-ko video-title${slide.revealTitle ? " reveal-item" : ""}"${slide.revealTitle ? ` data-reveal="1"` : ""}>${nl(slide.ko)}</h1>` : ""}
      </div>
    `;
  } else if (slide.kind === "return-question") {
    html += `
      <div class="safe return-question-layout">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
        <div class="return-choices">
          ${slide.choices.map((choice, index) => `<span><small>0${index + 1}</small>${choice}</span>`).join("")}
        </div>
      </div>
    `;
  } else if (slide.kind === "end") {
    html += `
      ${index === slides.length - 1 ? wordmark() : ""}
      <div class="safe center end-copy">
        <h1 class="title-ko">${nl(slide.ko)}</h1>
      </div>
      ${slide.en ? `<p class="bottom-caption caption mori-end">${slide.en}</p>` : ""}
    `;
  } else if (slide.kind === "finale") {
    html += `
      <div class="safe finale-layout">
        <div class="finale-intro">
          <h1 class="title-ko finale-thesis">
            <span>${slide.leadFirstLine}</span>
            <span>${slide.leadSecondLine}</span>
          </h1>
          <p class="finale-context">${slide.leadSub}</p>
        </div>
        <div class="finale-conclusion reveal-item" data-reveal="1">
          <h1 class="title-ko finale-thesis">
            <span class="finale-line-one">${slide.firstLine}</span>
            <span class="finale-line-two">${slide.secondLine}</span>
          </h1>
        </div>
        <div class="finale-contact reveal-item" data-reveal="2">
          <p class="finale-signature">${slide.signature}</p>
          <a class="finale-email" href="mailto:${slide.contact}">${slide.contact}</a>
        </div>
      </div>
    `;
  }

  if (slide.tasteReveal) {
    html += `
      <aside class="taste-moment reveal-item" data-reveal="${slide.tasteReveal}" aria-label="Taste ${String(slide.tasteNumber).padStart(2, "0")}: ${slide.tasteName}">
        ${tastingCue(slide)}
        ${slide.tastePrompt ? `<p>${slide.tastePrompt}</p>` : ""}
      </aside>
    `;
  }

  if (slide.act) {
    const prelude = html.slice(0, bodyStart);
    const body = html.slice(bodyStart);
    html = `${prelude}<div class="act-stage reveal-item" data-reveal="1">${body}</div>`;
  }

  html += microCue(index);
  html += progressRail(index);
  section.innerHTML = html;
  return section;
}

const revealState = new Map();
let finaleTimer;

function maxReveal(index) {
  const slide = document.querySelector(`.slide[data-index="${index}"]`);
  const values = [...(slide?.querySelectorAll("[data-reveal]") ?? [])]
    .map((item) => Number(item.dataset.reveal))
    .filter(Number.isFinite);
  return values.length ? Math.max(...values) : 0;
}

function applyRevealState(index) {
  const state = revealState.get(index) ?? 0;
  const slide = document.querySelector(`.slide[data-index="${index}"]`);
  slide?.querySelectorAll("[data-reveal]").forEach((item) => {
    item.classList.toggle("is-revealed", Number(item.dataset.reveal) <= state);
  });
  slide?.classList.toggle("has-question-followup", state >= 1);
  slide?.classList.toggle("has-question-keywords", state >= 1);
  slide?.classList.toggle("has-question-image", state >= 1);
  slide?.classList.toggle("has-taste-body", state >= 1);

  const brandStage = slide?.querySelector(".brand-stage");
  if (brandStage) {
    const grouped = state >= 1;
    brandStage.classList.toggle("is-grouped", grouped);
    brandStage.setAttribute("aria-pressed", String(grouped));
  }

  const isFinale = slide?.classList.contains("kind-finale");
  slide?.classList.toggle("has-conclusion", isFinale && state >= 1);
  const hasFinalSignature = isFinale && state >= 2;
  slide?.classList.toggle("has-signature", hasFinalSignature);
  if (hasFinalSignature) slide?.classList.add("has-auto-line");
  document.body.classList.toggle("is-final-signature", Boolean(hasFinalSignature));
}

function scheduleFinaleLine() {
  clearTimeout(finaleTimer);
  const slide = document.querySelector(`.slide[data-index="${current}"]`);
  if (!slide?.classList.contains("kind-finale")) return;
  slide.classList.remove("has-auto-line");
  const state = revealState.get(current) ?? 0;
  if (state < 1) return;
  if (state >= 2) {
    slide.classList.add("has-auto-line");
    return;
  }
  const finaleIndex = current;
  finaleTimer = setTimeout(() => {
    if (current === finaleIndex) slide.classList.add("has-auto-line");
  }, 1000);
}

function show(index) {
  clearTimeout(finaleTimer);
  current = Math.max(0, Math.min(index, slides.length - 1));
  document.querySelectorAll(".slide").forEach((slide, i) => {
    slide.classList.toggle("is-active", i === current);
  });
  count.textContent = `${String(current + 1).padStart(2, "0")} / ${slides.length}`;
  location.hash = String(current + 1).padStart(2, "0");
  applyRevealState(current);
  scheduleFinaleLine();
}

function advance(delta) {
  const state = revealState.get(current) ?? 0;
  const maximum = maxReveal(current);
  if (delta > 0 && state < maximum) {
    revealState.set(current, state + 1);
    applyRevealState(current);
    scheduleFinaleLine();
    return;
  }
  if (delta < 0 && state > 0) {
    revealState.set(current, state - 1);
    applyRevealState(current);
    scheduleFinaleLine();
    return;
  }
  show(current + delta);
}

slides.forEach((slide, index) => deck.appendChild(renderSlide(slide, index)));

deck.querySelectorAll(".local-video video").forEach((video) => {
  video.addEventListener("play", () => {
    if (document.fullscreenElement) return;
    if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
    else video.webkitEnterFullscreen?.();
  });
});

deck.addEventListener("click", (event) => {
  const brandStage = event.target.closest?.(".brand-stage");
  if (brandStage) {
    const state = revealState.get(current) ?? 0;
    revealState.set(current, state >= 1 ? 0 : 1);
    applyRevealState(current);
    return;
  }

  const launch = event.target.closest?.(".video-launch");
  if (!launch) return;

  const iframe = document.createElement("iframe");
  const url = launch.dataset.embed;
  iframe.src = `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
  iframe.title = launch.dataset.embedTitle;
  iframe.allow = "autoplay; fullscreen; picture-in-picture";
  iframe.setAttribute("allowfullscreen", "");
  launch.replaceWith(iframe);
});

const initial = Number(location.hash.replace("#", ""));
show(Number.isFinite(initial) && initial > 0 ? initial - 1 : 0);

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    advance(1);
  }
  if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
    event.preventDefault();
    advance(-1);
  }
  if (event.key === "Home") show(0);
  if (event.key === "End") show(slides.length - 1);
  if (event.key.toLowerCase() === "r") {
    revealState.set(current, 0);
    applyRevealState(current);
    scheduleFinaleLine();
  }
  if (event.key.toLowerCase() === "f") {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  }
});

window.addEventListener("hashchange", () => {
  const hashIndex = Number(location.hash.replace("#", ""));
  if (Number.isFinite(hashIndex) && hashIndex > 0 && hashIndex - 1 !== current) {
    show(hashIndex - 1);
  }
});
