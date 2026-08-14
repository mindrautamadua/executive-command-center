/**
 * Data statis halaman Talent Intelligence (/talent-intelligence).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 */

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface TiKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "users" | "hipo" | "coverage" | "succession" | "flight" | "retention" | "density";
  tone: "blue" | "green" | "teal" | "indigo" | "red" | "amber" | "purple";
}

export const tiKpi: TiKpi[] = [
  {
    label: "Total Talenta Aktif",
    value: "3.742",
    sub: "Orang",
    delta: "6,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "users",
    tone: "blue",
  },
  {
    label: "High Potential (HiPo)",
    value: "1.068",
    sub: "Orang (28,5%)",
    delta: "8,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "hipo",
    tone: "green",
  },
  {
    label: "Critical Role Coverage",
    value: "68%",
    sub: "Ready Now & Ready in 1–2 Yrs",
    delta: "4,5 ppts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "coverage",
    tone: "teal",
  },
  {
    label: "Succession Ready Now",
    value: "412",
    sub: "Orang (11%)",
    delta: "7,3%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "succession",
    tone: "indigo",
  },
  {
    label: "Talent at Flight Risk",
    value: "186",
    sub: "Orang (5,0%) • 86 High Risk",
    delta: "1,2 ppts",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Mei 2025",
    icon: "flight",
    tone: "red",
  },
  {
    label: "Internal Retention Rate",
    value: "91%",
    sub: "YTD",
    delta: "2,1 ppts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "retention",
    tone: "amber",
  },
  {
    label: "Talent Intelligence Index",
    value: "74",
    sub: "Composite 7 komponen (0–100)",
    delta: "6 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "density",
    tone: "purple",
  },
];

/* ── 1. Talent Portfolio (9 Box Grid) ─────────────────────────────── */

export interface NineBoxCell {
  value: string;
  pct: string;
  /** Kunci warna sel — dipetakan ke tint di komponen. */
  tone: "lavender" | "greenSoft" | "green" | "amber" | "amberSoft" | "red";
}

/**
 * Baris dari Potential High → Low; kolom Performance Low → High.
 * Invariant: jumlah seluruh sel = Total Talenta Aktif (3.742) dan
 * sel High/High = KPI HiPo (1.068).
 */
export const tiNineBox: NineBoxCell[][] = [
  [
    { value: "108", pct: "2,9%", tone: "lavender" },
    { value: "248", pct: "6,6%", tone: "greenSoft" },
    { value: "1.068", pct: "28,5%", tone: "green" },
  ],
  [
    { value: "242", pct: "6,5%", tone: "amber" },
    { value: "762", pct: "20,4%", tone: "amberSoft" },
    { value: "945", pct: "25,3%", tone: "greenSoft" },
  ],
  [
    { value: "115", pct: "3,1%", tone: "red" },
    { value: "160", pct: "4,3%", tone: "red" },
    { value: "94", pct: "2,5%", tone: "red" },
  ],
];

export const tiNineBoxLegend: { label: string; color: string }[] = [
  { label: "High Performance High Potential", color: "#1a9c5b" },
  { label: "High Performance Moderate Potential", color: "#7ac943" },
  { label: "Moderate Performance High Potential", color: "#f2c53d" },
  { label: "Moderate Performance Moderate Potential", color: "#f7dc8a" },
  { label: "Low Performance High Potential", color: "#f08c8c" },
  { label: "Low Performance Moderate Potential", color: "#f4a9a9" },
  { label: "Low Performance Low Potential", color: "#f8c6c6" },
];

/* ── 2. Talent Pipeline by Readiness ──────────────────────────────── */

export interface PipelineStage {
  label: string;
  value: string;
  pct: string;
  color: string;
  /** Lebar relatif bar funnel (persen). */
  width: number;
}

export const tiPipeline: PipelineStage[] = [
  { label: "Ready Now", value: "412", pct: "11%", color: "#0f7a44", width: 42 },
  { label: "Ready in 1 – 2 Years", value: "656", pct: "17,5%", color: "#3cae6a", width: 58 },
  { label: "Ready in 3 – 5 Years", value: "1.124", pct: "30,0%", color: "#f2c53d", width: 76 },
  { label: "Future Potential", value: "1.550", pct: "41,5%", color: "#cbd5e1", width: 94 },
];

export const tiPipelineFokus = [
  "Tingkatkan jumlah Ready Now untuk posisi kritikal",
  "Percepat pengembangan talenta Ready in 1-2 Years",
  "Perluas exposure & pengalaman strategis",
];

/* ── 3. Top Talent by Potential ───────────────────────────────────── */

/** Taxonomy readiness seragam dengan pipeline & coverage: Now / 1-2 Yrs / 3-5 Yrs. */
export type Readiness = "Ready Now" | "Ready in 1-2 Yrs" | "Ready in 3-5 Yrs";

export interface TopTalent {
  nama: string;
  jabatan: string;
  unit: string;
  score: string;
  readiness: Readiness;
}

export const tiTopTalent: TopTalent[] = [
  { nama: "Rizky Putra", jabatan: "Asisten Afdeling", unit: "PTPN IV", score: "9,4", readiness: "Ready in 1-2 Yrs" },
  { nama: "Agung Setiawan", jabatan: "Kepala Kebun", unit: "PTPN III", score: "9,2", readiness: "Ready Now" },
  { nama: "Dewi Kartika", jabatan: "Manajer Keuangan", unit: "PTPN I", score: "9,1", readiness: "Ready in 1-2 Yrs" },
  { nama: "Fajar Nugroho", jabatan: "Manajer Pabrik", unit: "PTPN V", score: "8,9", readiness: "Ready Now" },
  { nama: "Yudi Prasetyo", jabatan: "Manajer HR", unit: "PTPN II", score: "8,8", readiness: "Ready in 1-2 Yrs" },
  { nama: "Nadia Arifah", jabatan: "Manajer Sustainability", unit: "PTPN VI", score: "8,7", readiness: "Ready in 3-5 Yrs" },
  { nama: "Budi Santoso", jabatan: "Kepala Engineering", unit: "PTPN IV", score: "8,6", readiness: "Ready Now" },
  { nama: "Maya Sari", jabatan: "Manajer Komersial", unit: "PTPN III", score: "8,6", readiness: "Ready in 3-5 Yrs" },
  { nama: "Andi Kurniawan", jabatan: "Kepala Tanaman", unit: "PTPN V", score: "8,5", readiness: "Ready in 3-5 Yrs" },
  { nama: "Rina Ekawati", jabatan: "Manajer QA/QC", unit: "PTPN I", score: "8,5", readiness: "Ready in 1-2 Yrs" },
];

/* ── 4. Talent Risk Overview ──────────────────────────────────────── */

export const tiRiskDonut = [
  { name: "High Risk", value: 86, pctLabel: "46%", color: "#ef4444" },
  { name: "Medium Risk", value: 72, pctLabel: "39%", color: "#f2a93d" },
  { name: "Low Risk", value: 28, pctLabel: "15%", color: "#1a9c5b" },
];

export interface FlightRisk {
  nama: string;
  jabatan: string;
  score: number;
  /** Faktor kontributor risk score (arah: up = memperburuk naik, down = memperburuk turun). */
  factors: { label: string; arah: "up" | "down" }[];
  /** Eksposur bisnis bila talenta keluar. */
  exposure: { critical: boolean; leadTime: string; impact: "High" | "Medium" };
  action: string;
}

export const tiTopFlightRisk: FlightRisk[] = [
  {
    nama: "Andi Wijaya",
    jabatan: "Manajer Pabrik – PTPN V",
    score: 85,
    factors: [
      { label: "Engagement", arah: "down" },
      { label: "Compensation percentile", arah: "down" },
      { label: "Career mobility", arah: "down" },
      { label: "External demand", arah: "up" },
    ],
    exposure: { critical: true, leadTime: "8–12 bulan", impact: "High" },
    action: "Retensi intervensi + aktifkan backup suksesi (Fajar Nugroho, match 87%).",
  },
  {
    nama: "Dimas Pratama",
    jabatan: "Kepala Kebun – PTPN IV",
    score: 82,
    factors: [
      { label: "Manager effectiveness", arah: "down" },
      { label: "Career mobility", arah: "down" },
      { label: "External demand", arah: "up" },
    ],
    exposure: { critical: true, leadTime: "6–9 bulan", impact: "High" },
    action: "Retensi targeted + percepat 2 kandidat pool Ready in 1-2 Years.",
  },
  {
    nama: "Siti Rahmawati",
    jabatan: "Manajer Keuangan – PTPN III",
    score: 80,
    factors: [
      { label: "Compensation percentile", arah: "down" },
      { label: "Engagement", arah: "down" },
      { label: "External demand", arah: "up" },
    ],
    exposure: { critical: true, leadTime: "8–12 bulan", impact: "High" },
    action: "Prioritas retensi tertinggi — coverage Manajer Keuangan terendah (58%).",
  },
  {
    nama: "Hendra Saputra",
    jabatan: "Asisten Teknik – PTPN II",
    score: 78,
    factors: [
      { label: "Career mobility", arah: "down" },
      { label: "Workload", arah: "up" },
    ],
    exposure: { critical: false, leadTime: "3–6 bulan", impact: "Medium" },
    action: "Career path review + tawarkan rotasi/penugasan proyek.",
  },
  {
    nama: "Ratna Dewi",
    jabatan: "Supervisor QC – PTPN I",
    score: 76,
    factors: [
      { label: "Compensation percentile", arah: "down" },
      { label: "External demand", arah: "up" },
    ],
    exposure: { critical: false, leadTime: "3–6 bulan", impact: "Medium" },
    action: "Penyesuaian kompensasi + program development targeted.",
  },
];

export const tiRiskNote =
  "86 talenta berisiko tinggi. Perlu tindakan retensi segera.";

/* ── 5. Talent Attributes Insight ─────────────────────────────────── */

export interface TalentAttribute {
  label: string;
  icon: "leadership" | "agility" | "learning" | "technical" | "digital" | "business";
  score: string;
  benchmark: string;
  gap: string;
  gapTone: "good" | "bad";
}

export const tiAttributes: TalentAttribute[] = [
  { label: "Leadership", icon: "leadership", score: "4,2", benchmark: "4,0", gap: "+0,2", gapTone: "good" },
  { label: "Agility & Adaptability", icon: "agility", score: "4,0", benchmark: "3,8", gap: "+0,2", gapTone: "good" },
  { label: "Learning Agility", icon: "learning", score: "4,1", benchmark: "4,0", gap: "+0,1", gapTone: "good" },
  { label: "Technical Expertise", icon: "technical", score: "3,9", benchmark: "4,1", gap: "-0,2", gapTone: "bad" },
  { label: "Digital Literacy", icon: "digital", score: "3,8", benchmark: "4,0", gap: "-0,2", gapTone: "bad" },
  { label: "Business Acumen", icon: "business", score: "4,0", benchmark: "4,1", gap: "-0,1", gapTone: "bad" },
];

export const tiAttributesNote =
  "Perkuat Technical Expertise & Digital Literacy melalui program development targeted.";

/* ── 6. Critical Role Coverage ────────────────────────────────────── */

export interface RoleCoverage {
  posisi: string;
  total: number;
  coverage: string;
  /** Komposisi bar (persen): Ready Now / 1-2 Yrs / 3-5 Yrs / No Successor. */
  split: [number, number, number, number];
}

export const tiRoleCoverage: RoleCoverage[] = [
  { posisi: "General Manager", total: 18, coverage: "72%", split: [39, 33, 17, 11] },
  { posisi: "Kepala Kebun", total: 64, coverage: "66%", split: [34, 32, 22, 12] },
  { posisi: "Manajer Pabrik", total: 42, coverage: "71%", split: [38, 33, 18, 11] },
  { posisi: "Manajer Keuangan", total: 26, coverage: "58%", split: [28, 30, 26, 16] },
  { posisi: "Manajer HR", total: 22, coverage: "64%", split: [32, 32, 22, 14] },
  { posisi: "Manajer Sustainability", total: 16, coverage: "75%", split: [41, 34, 15, 10] },
  { posisi: "Manajer Komersial", total: 20, coverage: "60%", split: [30, 30, 25, 15] },
];

export const tiCoverageLegend = [
  { label: "Ready Now", color: "#0f7a44" },
  { label: "Ready in 1-2 Years", color: "#3cae6a" },
  { label: "Ready in 3-5 Years", color: "#f2c53d" },
  { label: "No Successor", color: "#cbd5e1" },
];

/* ── 7. Talent Development Focus ──────────────────────────────────── */

export interface DevFocus {
  label: string;
  value: string;
  icon: "leadership" | "technical" | "cross" | "strategic";
  tone: "blue" | "purple" | "green" | "teal";
}

export const tiDevFocus: DevFocus[] = [
  { label: "Leadership Acceleration", value: "812", icon: "leadership", tone: "blue" },
  { label: "Technical & Digital Capability", value: "1.245", icon: "technical", tone: "purple" },
  { label: "Cross Functional Exposure", value: "643", icon: "cross", tone: "green" },
  { label: "Strategic Project Assignment", value: "528", icon: "strategic", tone: "teal" },
];

export const tiInvestment = {
  label: "Investment Development (YTD)",
  value: "Rp 24,8 M",
  delta: "12,4%",
  compare: "vs Mei 2025",
  trend: [14, 16, 15, 18, 20, 19, 22, 24, 25] as number[],
};

/* ── 8. Talent Mobility Overview ──────────────────────────────────── */

export interface MobilityRow {
  label: string;
  value: number;
  pct: string;
}

export const tiMobility: MobilityRow[] = [
  { label: "Promosi", value: 128, pct: "38%" },
  { label: "Rotasi Lateral", value: 96, pct: "29%" },
  { label: "Penugasan Proyek", value: 64, pct: "19%" },
  { label: "Transfer Unit", value: 48, pct: "14%" },
];

export const tiMobilityImpact = [
  {
    value: "+0,36 pts",
    text: "Peningkatan Performance rata-rata setelah mobilitas",
    icon: "target" as const,
  },
  {
    value: "87%",
    text: "Mobilitas yang memberikan dampak positif",
    icon: "award" as const,
  },
];

/* ── 9. Executive Talent Intelligence ─────────────────────────────── */

export interface TiExecSignal {
  no: string;
  tone: "red" | "amber" | "green";
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
}

export const tiExecCounts = [
  { label: "Kritis", value: "2", tone: "red" as const },
  { label: "Perhatian", value: "1", tone: "amber" as const },
  { label: "Peluang", value: "1", tone: "green" as const },
];

/**
 * Sinyal sintesis lintas widget — angka harus konsisten dengan widget sumber:
 * 86 (risk donut), 27 (agregat No Successor tiRoleCoverage), −0,2 (tiAttributes),
 * 87% / +0,36 pts (tiMobilityImpact).
 */
export const tiExecSignals: TiExecSignal[] = [
  {
    no: "S1",
    tone: "red",
    title: "86 talenta kritikal berisiko tinggi",
    text: "5 di antaranya memegang posisi kritikal tanpa backup suksesor aktif. Lead time penggantian 8–12 bulan.",
    impactLabel: "Exposure",
    impactValue: "Kontinuitas operasi",
  },
  {
    no: "S2",
    tone: "red",
    title: "27 posisi kritikal tanpa suksesor",
    text: "13% dari 208 posisi kritikal belum punya kandidat pada pipeline manapun; terkonsentrasi di Manajer Keuangan & Komersial.",
    impactLabel: "Exposure",
    impactValue: "Risiko 12 bulan",
  },
  {
    no: "S3",
    tone: "amber",
    title: "Gap kapabilitas Technical & Digital −0,2",
    text: "Technical Expertise 3,9 vs benchmark 4,1; Digital Literacy 3,8 vs 4,0. 1.245 talenta sedang dalam program terkait.",
    impactLabel: "Dampak",
    impactValue: "Readiness pipeline",
  },
  {
    no: "S4",
    tone: "green",
    title: "87% mobilitas berdampak positif",
    text: "Performance naik rata-rata +0,36 pts pasca mobilitas. Mobilitas internal terbukti efektif sebagai lever pengembangan.",
    impactLabel: "Peluang",
    impactValue: "Internal-first",
  },
];

export const tiExecRecommendation =
  "Lindungi 86 talenta kritikal berisiko tinggi melalui retensi targeted, sambil mengakselerasi pool Ready in 1-2 Years (656 orang) untuk menutup 27 posisi kritikal tanpa suksesor.";

/* ── 10. Role–Talent–Skill Match ──────────────────────────────────── */

export interface RoleMatch {
  posisi: string;
  unit: string;
  /** Skill wajib beserta level minimal (skala 1–5). */
  requiredSkills: { label: string; level: string }[];
  kandidat: string;
  score: string;
  match: number;
  /** Skill gap terbesar kandidat vs requirement. */
  gap: string;
  readiness: Readiness;
  flightRisk: "Low" | "Medium" | "High";
  rekomendasi: string;
}

/** Kandidat & readiness diambil dari tiTopTalent; posisi dari tiRoleCoverage. */
export const tiRoleMatch: RoleMatch[] = [
  {
    posisi: "Kepala Kebun",
    unit: "PTPN III",
    requiredSkills: [
      { label: "Agronomy", level: "4,3" },
      { label: "Leadership", level: "4,2" },
      { label: "Digital Agriculture", level: "4,0" },
    ],
    kandidat: "Agung Setiawan",
    score: "9,2",
    match: 91,
    gap: "Digital Agriculture −0,4",
    readiness: "Ready Now",
    flightRisk: "Low",
    rekomendasi: "Siap suksesi",
  },
  {
    posisi: "Manajer Pabrik",
    unit: "PTPN V",
    requiredSkills: [
      { label: "Operations", level: "4,4" },
      { label: "Leadership", level: "4,1" },
      { label: "Financial Acumen", level: "4,0" },
    ],
    kandidat: "Fajar Nugroho",
    score: "8,9",
    match: 87,
    gap: "Financial Acumen −0,3",
    readiness: "Ready Now",
    flightRisk: "Low",
    rekomendasi: "Siap suksesi",
  },
  {
    posisi: "Manajer Keuangan",
    unit: "PTPN I",
    requiredSkills: [
      { label: "Finance", level: "4,5" },
      { label: "Leadership", level: "4,2" },
      { label: "Digital Finance", level: "4,0" },
    ],
    kandidat: "Dewi Kartika",
    score: "9,1",
    match: 84,
    gap: "Leadership −0,5",
    readiness: "Ready in 1-2 Yrs",
    flightRisk: "Medium",
    rekomendasi: "Akselerasi development",
  },
  {
    posisi: "Manajer Komersial",
    unit: "PTPN III",
    requiredSkills: [
      { label: "Commercial", level: "4,3" },
      { label: "Business Acumen", level: "4,2" },
      { label: "Negotiation", level: "4,0" },
    ],
    kandidat: "Maya Sari",
    score: "8,6",
    match: 78,
    gap: "Business Acumen −0,6",
    readiness: "Ready in 3-5 Yrs",
    flightRisk: "Low",
    rekomendasi: "Development jangka menengah",
  },
];

/* ── 11. Talent Decisions ─────────────────────────────────────────── */

export interface TalentDecision {
  tone: "red" | "amber" | "green";
  kicker: string;
  title: string;
  text: string;
  rekomendasi: string;
  pill: string;
}

export const tiDecisions: TalentDecision[] = [
  {
    tone: "red",
    kicker: "Decision Required",
    title: "27 posisi kritikal tanpa suksesor",
    text: "Terbesar pada Manajer Keuangan (16% posisi) dan Manajer Komersial (15%). Lead time penggantian eksternal 8–12 bulan.",
    rekomendasi: "Akselerasi 54 kandidat dari pool Ready in 1-2 Years (656 orang).",
    pill: "Kontinuitas",
  },
  {
    tone: "amber",
    kicker: "Action Required",
    title: "86 talenta high flight risk",
    text: "5 di antaranya pada posisi kritikal — termasuk Manajer Pabrik PTPN V (risk 85) dan Kepala Kebun PTPN IV (risk 82).",
    rekomendasi: "Program retensi targeted + siapkan backup suksesi paralel.",
    pill: "Retensi",
  },
  {
    tone: "green",
    kicker: "Opportunity",
    title: "47 HiPo match lowongan kritikal",
    text: "Skill profile 47 talenta HiPo cocok (match ≥80%) dengan lowongan posisi kritikal yang sedang dibuka.",
    rekomendasi: "Prioritaskan mobilitas internal sebelum hiring eksternal.",
    pill: "Efisiensi",
  },
];

/* ── 12. Talent Development ROI Chain ─────────────────────────────── */

export interface RoiStep {
  label: string;
  value: string;
  sub: string;
}

/**
 * Rantai outcome development — "estimated contribution", bukan causal ROI,
 * sampai model atribusi tersedia.
 */
export const tiDevRoi: RoiStep[] = [
  { label: "Investment", value: "Rp 24,8 M", sub: "YTD 2026" },
  { label: "Completion", value: "87%", sub: "3.228 program" },
  { label: "Capability Uplift", value: "+12%", sub: "vs baseline asesmen" },
  { label: "Promotion Readiness", value: "+8%", sub: "naik kelas readiness" },
  { label: "Performance Uplift", value: "+4,3%", sub: "peserta vs non-peserta" },
];

export const tiDevRoiNote =
  "Estimated contribution — atribusi kausal penuh membutuhkan model evaluasi dampak (fase berikutnya).";

/* ── 13. Talent Intelligence Index ────────────────────────────────── */

export interface IndexComponent {
  label: string;
  score: number;
  tone: "good" | "warn" | "bad";
}

/**
 * Komposit 7 komponen, rata-rata sederhana = 74 (selaras KPI Talent
 * Intelligence Index). Skor komponen selaras widget sumber:
 * Critical Role Coverage 68 (KPI), Talent Risk dari flight-risk profile, dst.
 */
export const tiIndexScore = 74;

export const tiIndexComponents: IndexComponent[] = [
  { label: "Talent Quality", score: 82, tone: "good" },
  { label: "Development Effectiveness", score: 79, tone: "good" },
  { label: "Internal Mobility", score: 76, tone: "good" },
  { label: "Talent Risk", score: 74, tone: "warn" },
  { label: "Critical Skills", score: 71, tone: "warn" },
  { label: "Leadership Readiness", score: 68, tone: "warn" },
  { label: "Critical Role Coverage", score: 68, tone: "warn" },
];

export const tiIndexNote =
  "Terlemah: Leadership Readiness & Critical Role Coverage — konsisten dengan 27 posisi tanpa suksesor.";
