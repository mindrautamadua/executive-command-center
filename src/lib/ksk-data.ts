/**
 * Data statis halaman Simulasi Keuangan (/keuangan/simulasi-keuangan).
 * Periode acuan: 31 Mei 2026 (YTD); baseline FY = forecast kba-data
 * (pendapatan Rp 59,1 T · EBITDA Rp 15,6 T · laba Rp 6,3 T).
 */

/* ── 1. Baseline Full-Year ────────────────────────────────────────── */

export interface KskBaseline {
  label: string;
  value: string;
  sub: string;
}

export const kskBaseline: KskBaseline[] = [
  { label: "EBITDA FY (Base)", value: "Rp 15,6 T", sub: "102,6% RKAP Rp 15,2 T" },
  { label: "Laba Bersih FY (Base)", value: "Rp 6,3 T", sub: "103,3% RKAP Rp 6,1 T" },
  { label: "Net Debt / EBITDA FY", value: "1,3x", sub: "Covenant ≤ 2,5x" },
];

/* ── 2. Panel Asumsi (mock slider) ────────────────────────────────── */

export interface ScenarioAssumption {
  label: string;
  min: number;
  max: number;
  /** Nilai asumsi base case. */
  baseValue: number;
  unit: string;
}

export const assumptions: ScenarioAssumption[] = [
  { label: "Harga CPO", min: 11000, max: 16000, baseValue: 13500, unit: "Rp/kg" },
  { label: "Kurs USD/IDR", min: 15500, max: 17500, baseValue: 16250, unit: "Rp" },
  { label: "Volume Produksi CPO FY", min: 2.28, max: 2.72, baseValue: 2.53, unit: "jt ton" },
  { label: "Indeks Harga Pupuk", min: 90, max: 130, baseValue: 100, unit: "% vs asumsi RKAP" },
];

/* ── 3. Scenario Comparison ───────────────────────────────────────── */

export interface ScenarioDef {
  name: "Konservatif" | "Base" | "Optimis";
  /** EBITDA FY (Rp T). */
  ebitdaRpT: number;
  /** Laba bersih FY (Rp T). */
  labaRpT: number;
  /** Net Debt / EBITDA akhir tahun (x). */
  netDebtEbitda: number;
  /** Ringkasan asumsi utama. */
  asumsi: string;
  tone: "bad" | "neutral" | "good";
  recommended?: boolean;
}

export const scenarios: ScenarioDef[] = [
  {
    name: "Konservatif",
    ebitdaRpT: 13.1,
    labaRpT: 4.9,
    netDebtEbitda: 1.6,
    asumsi: "CPO Rp 12.200 · kurs Rp 17.000 · pupuk +15% · giling SGN terganggu",
    tone: "bad",
  },
  {
    name: "Base",
    ebitdaRpT: 15.6,
    labaRpT: 6.3,
    netDebtEbitda: 1.3,
    asumsi: "CPO Rp 13.500 · kurs Rp 16.250 · volume & biaya sesuai RKAP",
    tone: "neutral",
    recommended: true,
  },
  {
    name: "Optimis",
    ebitdaRpT: 17.8,
    labaRpT: 7.6,
    netDebtEbitda: 1.1,
    asumsi: "CPO Rp 14.800 · kurs Rp 16.000 · yield +3% · rendemen gula 7,8%",
    tone: "good",
  },
];

/* ── 4. Sensitivity Tornado (dampak ke EBITDA FY, Rp T) ───────────── */

export interface TornadoDriver {
  driver: string;
  /** Rentang pergerakan asumsi yang diuji. */
  range: string;
  /** Dampak skenario buruk (Rp T; negatif). */
  low: number;
  /** Dampak skenario baik (Rp T; positif). */
  high: number;
}

/** Diurut dari dampak terbesar; CPO konsisten sensitivitas ±Rp 1,9 T (krk-data). */
export const tornado: TornadoDriver[] = [
  { driver: "Harga CPO", range: "±Rp 1.000/kg", low: -1.9, high: 1.9 },
  { driver: "Volume TBS / yield", range: "±5%", low: -0.9, high: 0.9 },
  { driver: "Kurs USD/IDR", range: "±5%", low: -0.6, high: 0.6 },
  { driver: "Harga gula", range: "±Rp 1.000/kg", low: -0.5, high: 0.5 },
  { driver: "Harga pupuk", range: "±15%", low: -0.4, high: 0.4 },
  { driver: "Suku bunga", range: "±100 bps", low: -0.09, high: 0.09 },
];

/* ── 5. Stress Test Case ──────────────────────────────────────────── */

export const stressCase = {
  title: "Stress: CPO Rp 11.500/kg (H2 2026)",
  asumsi: "Harga CPO jatuh ke Rp 11.500 mulai Juli; volume & biaya bertahan sesuai base.",
  hasil: [
    { label: "EBITDA FY", value: "Rp 11,2 T", sub: "73,7% RKAP; turun Rp 4,4 T vs base" },
    { label: "Laba Bersih FY", value: "Rp 3,4 T", sub: "55,7% RKAP" },
    { label: "Net Debt / EBITDA", value: "2,1x", sub: "Covenant 2,5x — masih aman" },
    { label: "Posisi Kas Terendah", value: "Rp 4,2 T", sub: "Di atas minimum cash Rp 3,5 T" },
  ] as { label: string; value: string; sub: string }[],
  kesimpulan:
    "Covenant dan likuiditas tetap aman pada stress CPO Rp 11.500 — buffer utama adalah leverage rendah; mitigasi yang diperlukan bersifat P&L (hedging), bukan solvabilitas.",
} as const;

/* ── 6. EBITDA Outcome Range (fan chart, kumulatif 2026, Rp T) ────── */

export interface OutcomeRangePoint {
  month: string;
  /** Persentil 10 (kumulatif Rp T). */
  p10: number;
  /** Persentil 50 / median (kumulatif Rp T). */
  p50: number;
  /** Persentil 90 (kumulatif Rp T). */
  p90: number;
}

/**
 * Jan–Mei = realisasi (p10 = p50 = p90, kumulatif YTD 6,82);
 * Jun–Des menyebar ke ujung tahun: p10 13,1 · p50 15,6 · p90 17,8
 * (konsisten skenario Konservatif/Base/Optimis).
 */
export const outcomeRange: OutcomeRangePoint[] = [
  { month: "Jan", p10: 1.14, p50: 1.14, p90: 1.14 },
  { month: "Feb", p10: 2.36, p50: 2.36, p90: 2.36 },
  { month: "Mar", p10: 3.74, p50: 3.74, p90: 3.74 },
  { month: "Apr", p10: 5.22, p50: 5.22, p90: 5.22 },
  { month: "Mei", p10: 6.82, p50: 6.82, p90: 6.82 },
  { month: "Jun", p10: 7.8, p50: 8.2, p90: 8.5 },
  { month: "Jul", p10: 8.8, p50: 9.6, p90: 10.2 },
  { month: "Agu", p10: 9.8, p50: 11.0, p90: 11.9 },
  { month: "Sep", p10: 10.7, p50: 12.4, p90: 13.6 },
  { month: "Okt", p10: 11.6, p50: 13.6, p90: 15.2 },
  { month: "Nov", p10: 12.4, p50: 14.6, p90: 16.5 },
  { month: "Des", p10: 13.1, p50: 15.6, p90: 17.8 },
];

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

export interface KskDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

export const kskDecisions: KskDecision[] = [
  {
    title: "Adopsi Base Case sebagai Outlook Resmi H2",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Fan chart menunjukkan rentang EBITDA FY Rp 13,1-17,8 T; outlook resmi menentukan basis dividen interim & pagu capex H2.",
    rekomendasi:
      "Tetapkan Base (Rp 15,6 T) sebagai outlook resmi dengan trigger review bila CPO < Rp 12.500 selama 30 hari.",
    due: "Q3 2026",
  },
  {
    title: "Pra-otorisasi Paket Mitigasi Skenario Konservatif",
    impact: "High Impact",
    tone: "red",
    context:
      "Bila skenario Konservatif terwujud, penghematan harus berjalan cepat: penundaan capex non-kritis Rp 1,2 T & akselerasi program efisiensi.",
    rekomendasi:
      "Approve playbook mitigasi sekarang agar eksekusi otomatis saat trigger harga tersentuh.",
    due: "Q3 2026",
  },
];

/* ── 8. Insight & Metodologi ──────────────────────────────────────── */

export interface KskInsight {
  insight: string;
  rekomendasi: string;
}

export const kskInsights: KskInsight[] = [
  {
    insight:
      "Rentang hasil didominasi satu driver: harga CPO menyumbang ±Rp 1,9 T dari total spread ±Rp 2,4 T EBITDA — driver lain relatif kecil.",
    rekomendasi:
      "Keputusan hedging CPO (halaman Risiko Keuangan) efektif memangkas separuh lebar fan chart.",
  },
  {
    insight:
      "Downside skenario Konservatif (Rp −2,5 T) lebih besar daripada upside Optimis (Rp +2,2 T) — profil payoff sedikit asimetris negatif.",
    rekomendasi:
      "Prioritaskan proteksi downside (forward & efisiensi) di atas mengejar upside volume.",
  },
];

/** Footnote metodologi untuk halaman simulasi. */
export const kskMetodologiNote =
  "Simulasi statis berbasis elastisitas driver tunggal (asumsi lain ceteris paribus); fan chart p10/p50/p90 dari 1.000 iterasi Monte Carlo atas harga CPO, kurs & volume. Bukan guidance resmi perusahaan.";
