/**
 * Data statis halaman Keuangan — Executive Overview (/keuangan).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface KeuKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "revenue" | "ebitda" | "profit" | "cash" | "leverage" | "capex";
  tone: "blue" | "green" | "teal" | "amber" | "red" | "pink";
}

export const keuKpi: KeuKpi[] = [
  {
    label: "Pendapatan YTD",
    value: "Rp 24,6 T",
    sub: "42,1% RKAP FY Rp 58,4 T",
    delta: "9,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "revenue",
    tone: "blue",
  },
  {
    label: "EBITDA YTD",
    value: "Rp 6,82 T",
    sub: "Margin 27,7%",
    delta: "12,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "ebitda",
    tone: "green",
  },
  {
    label: "Laba Bersih YTD",
    value: "Rp 2,94 T",
    sub: "48,2% RKAP FY Rp 6,1 T",
    delta: "14,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "profit",
    tone: "teal",
  },
  {
    label: "Posisi Kas",
    value: "Rp 7,9 T",
    sub: "Minimum cash Rp 3,5 T",
    delta: "6,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "cash",
    tone: "amber",
  },
  {
    label: "Net Debt / EBITDA",
    value: "1,38x",
    sub: "Covenant ≤ 2,5x",
    delta: "-0,14x",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "leverage",
    tone: "red",
  },
  {
    label: "Realisasi Capex",
    value: "32,1%",
    sub: "Rp 3,08 T dari RKAP Rp 9,6 T",
    delta: "-9,6 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    icon: "capex",
    tone: "pink",
  },
];

/* ── 2. Finance Intelligence ──────────────────────────────────────── */

export interface FinanceSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const financeIntelCounts = [
  { label: "Critical Signals", value: 2, tone: "red" },
  { label: "Opportunities", value: 2, tone: "green" },
  { label: "Decisions Pending", value: 3, tone: "amber" },
] as { label: string; value: number; tone: "red" | "green" | "amber" }[];

export const financeIntelligence: FinanceSignal[] = [
  {
    no: "01",
    title: "EBITDA di Atas RKAP YTD",
    /*
     * Basis surplus WAJIB RKAP YTD phased (Rp 6,60 T — sama dengan KPI strip
     * homepage), bukan prorata FY 41,7% (basis kalender rata): dua basis
     * dengan label sama pernah menghasilkan +0,52 T vs +0,22 T di dua kartu.
     * Prorata boleh disebut sebagai konteks, jangan jadi basis angka dampak.
     */
    text: "EBITDA YTD Rp 6,82 T vs RKAP YTD phased Rp 6,60 T (+3,3%); vs prorata kalender 41,7% bahkan 3,2 pts lebih tinggi. Ditopang harga CPO KPBN Rp 13.680/kg dan efisiensi biaya panen-angkut.",
    impactLabel: "Surplus vs RKAP YTD",
    impactValue: "+Rp 0,22 T",
    tone: "green",
  },
  {
    no: "02",
    title: "SGN Drag Margin Grup",
    text: "Margin EBITDA SGN 14,1% vs PalmCo 31,2%; 11 dari 17 PG masih merugi. Musim giling baru mulai Mei — Juni–Sep menentukan pemulihan margin.",
    impactLabel: "Gap Margin ke Grup",
    impactValue: "-13,6 pts",
    tone: "red",
  },
  {
    no: "03",
    title: "Capex Replanting Tertinggal",
    text: "Realisasi capex 32,1% vs prorata 41,7%; kategori replanting baru 26,9% dari plafon Rp 3,2 T. Risiko carry-over ke 2027 dan mundurnya kurva yield.",
    impactLabel: "Ketertinggalan YTD",
    impactValue: "Rp 0,92 T",
    tone: "amber",
  },
  {
    no: "04",
    title: "Ruang Refinancing Terbuka",
    text: "Leverage rendah (Net Debt/EBITDA 1,38x) dan ICR 4,6x membuka ruang refinancing Rp 4 T jatuh tempo 2027 dengan tenor lebih panjang dan kupon lebih rendah.",
    impactLabel: "Potensi Penghematan Bunga",
    impactValue: "Rp 68 M/thn",
    tone: "green",
  },
];

export const financeRecommendation =
  "Amankan momentum harga: kunci sebagian margin CPO via forward, akselerasi capex replanting sebelum Q4, dan eksekusi refinancing selagi leverage rendah.";

/* ── 3. Revenue & EBITDA Trend (combo 12 bulan) ───────────────────── */

export interface RevenueEbitdaPoint {
  month: string;
  /** Pendapatan bulanan (Rp T) — bar. */
  revenue: number;
  /** EBITDA bulanan (Rp T) — line. */
  ebitda: number;
}

/** Jun'25–Mei'26. Jan–Mei 2026 menjumlah ke YTD: pendapatan 24,6 · EBITDA 6,82. */
export const revenueEbitdaMonthly: RevenueEbitdaPoint[] = [
  { month: "Jun'25", revenue: 4.3, ebitda: 1.05 },
  { month: "Jul'25", revenue: 4.5, ebitda: 1.12 },
  { month: "Agu'25", revenue: 4.7, ebitda: 1.19 },
  { month: "Sep'25", revenue: 4.6, ebitda: 1.15 },
  { month: "Okt'25", revenue: 4.8, ebitda: 1.23 },
  { month: "Nov'25", revenue: 4.4, ebitda: 1.08 },
  { month: "Des'25", revenue: 4.9, ebitda: 1.26 },
  { month: "Jan'26", revenue: 4.4, ebitda: 1.14 },
  { month: "Feb'26", revenue: 4.6, ebitda: 1.22 },
  { month: "Mar'26", revenue: 5.0, ebitda: 1.38 },
  { month: "Apr'26", revenue: 5.2, ebitda: 1.48 },
  { month: "Mei'26", revenue: 5.4, ebitda: 1.6 },
];

/* ── 4. Finance Risk Radar ────────────────────────────────────────── */

export interface FinRiskAxis {
  axis: string;
  /** Tingkat risiko saat ini (0-100). */
  level: number;
  /** Ambang toleransi. */
  tolerance: number;
}

export const finRiskRadar: FinRiskAxis[] = [
  { axis: "Harga Komoditas", level: 72, tolerance: 60 },
  { axis: "FX / Kurs", level: 58, tolerance: 60 },
  { axis: "Likuiditas", level: 35, tolerance: 65 },
  { axis: "Leverage", level: 40, tolerance: 65 },
  { axis: "Piutang", level: 52, tolerance: 60 },
  { axis: "Budget Overrun", level: 45, tolerance: 60 },
];

/* ── 5. Posisi Kas Mingguan ───────────────────────────────────────── */

export interface WeeklyCashPoint {
  week: string;
  /** Saldo kas akhir minggu (Rp T). */
  cash: number;
}

/** 12 minggu terakhir s.d. 31 Mei 2026; berakhir di posisi kas Rp 7,9 T. */
export const weeklyCash: WeeklyCashPoint[] = [
  { week: "W-11", cash: 7.2 },
  { week: "W-10", cash: 7.4 },
  { week: "W-9", cash: 7.3 },
  { week: "W-8", cash: 7.6 },
  { week: "W-7", cash: 7.5 },
  { week: "W-6", cash: 7.8 },
  { week: "W-5", cash: 7.7 },
  { week: "W-4", cash: 8.0 },
  { week: "W-3", cash: 7.8 },
  { week: "W-2", cash: 7.6 },
  { week: "W-1", cash: 7.8 },
  { week: "W-0", cash: 7.9 },
];

/* ── 6. Strategic Alignment (target RKAP) ─────────────────────────── */

export interface KeuAlignmentTarget {
  label: string;
  /** Realisasi YTD (string berformat). */
  realisasi: string;
  /** Target full-year RKAP (string berformat). */
  targetFy: string;
  /** Progress terhadap RKAP FY (%). */
  progressPct: number;
  /** Prorata waktu berjalan (%), pembanding progress. */
  prorataPct: number;
  tone: "good" | "warn" | "bad";
}

export const keuAlignment: KeuAlignmentTarget[] = [
  {
    label: "Pendapatan",
    realisasi: "Rp 24,6 T",
    targetFy: "Rp 58,4 T",
    progressPct: 42.1,
    prorataPct: 41.7,
    tone: "good",
  },
  {
    label: "EBITDA",
    realisasi: "Rp 6,82 T",
    targetFy: "Rp 15,2 T",
    progressPct: 44.9,
    prorataPct: 41.7,
    tone: "good",
  },
  {
    label: "Laba Bersih",
    realisasi: "Rp 2,94 T",
    targetFy: "Rp 6,1 T",
    progressPct: 48.2,
    prorataPct: 41.7,
    tone: "good",
  },
  {
    label: "Capex",
    realisasi: "Rp 3,08 T",
    targetFy: "Rp 9,6 T",
    progressPct: 32.1,
    prorataPct: 41.7,
    tone: "warn",
  },
];

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

export interface KeuDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  /** Konteks singkat masalah/peluang. */
  context: string;
  /** Rekomendasi tindakan untuk BOD. */
  rekomendasi: string;
  due: string;
}

export const keuDecisions: KeuDecision[] = [
  {
    title: "Refinancing Utang Rp 4 T",
    impact: "High Impact",
    tone: "red",
    context:
      "Jatuh tempo utang memuncak 2027 (Rp 8,2 T); jendela suku bunga & leverage 1,38x saat ini menguntungkan.",
    rekomendasi:
      "Approve refinancing Rp 4 T tenor 5-7 tahun; target penghematan bunga Rp 68 M/thn.",
    due: "Q3 2026",
  },
  {
    title: "Capex Tambahan Revitalisasi PG",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "11 PG merugi menekan margin SGN (14,1%); revitalisasi 5 PG prioritas butuh tambahan di luar plafon berjalan.",
    rekomendasi:
      "Setujui realokasi capex Rp 0,6 T ke revitalisasi PG dengan gate review per kuartal.",
    due: "Q3 2026",
  },
  {
    title: "Dividen Interim 2026",
    impact: "Medium Impact",
    tone: "green",
    context:
      "Laba bersih YTD Rp 2,94 T (48,2% RKAP) dan kas Rp 7,9 T di atas minimum; pemegang saham meminta indikasi dividen interim.",
    rekomendasi:
      "Kaji dividen interim maks 20% laba YTD dengan menjaga headroom kas untuk capex H2.",
    due: "Q4 2026",
  },
];

/* ── 8. Alerts & Notifications ────────────────────────────────────── */

export interface KeuAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const keuAlerts: KeuAlert[] = [
  {
    title: "Piutang > 90 Hari Menembus Rp 680 M",
    text: "Aging piutang bucket > 90 hari naik; terkonsentrasi di 5 debitur besar gula.",
    time: "Today",
    tone: "red",
  },
  {
    title: "Capex di Bawah Prorata",
    text: "Realisasi capex 32,1% vs prorata 41,7%; replanting kategori paling tertinggal.",
    time: "1 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Deviasi Harga Pupuk",
    text: "Harga NPK aktual di atas asumsi RKAP; tekanan ke HPP semester II.",
    time: "2 hari yang lalu",
    tone: "amber",
  },
  {
    title: "EBITDA Mei Rekor YTD",
    text: "EBITDA Mei Rp 1,60 T — tertinggi 12 bulan terakhir, margin 29,6%.",
    time: "3 hari yang lalu",
    tone: "green",
  },
];

/* ── 9. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KeuInsight {
  insight: string;
  rekomendasi: string;
  /** Metadata analitik (jenis klaim, keyakinan, bukti) — lihat shared/AiMeta. */
  meta?: import("@/components/shared/AiMeta").AiMetaInfo;
}

export const keuInsights: KeuInsight[] = [
  {
    insight:
      "Laba bersih 48,2% RKAP jauh di atas prorata — kualitas laba ditopang operasional (EBITDA), bukan item non-recurring.",
    rekomendasi:
      "Pertahankan disiplin biaya; hindari revisi target ke bawah agar momentum FY 101% RKAP terjaga.",
    meta: {
      jenis: "Kausal",
      confidencePct: 84,
      evidence: "Dekomposisi laba GL · rekonsiliasi EBITDA vs non-recurring",
    },
  },
  {
    insight:
      "Kas Rp 7,9 T = 2,3x minimum cash, namun 60% terkonsentrasi di PalmCo sementara kebutuhan capex terbesar H2 ada di SGN.",
    rekomendasi:
      "Optimalkan cash pooling antar subholding sebelum menarik fasilitas kredit baru.",
    meta: {
      jenis: "Rekomendasi",
      confidencePct: 78,
      evidence: "Posisi kas per subholding · jadwal capex H2",
    },
  },
  {
    insight:
      "Sensitivitas harga CPO ±Rp 1.000/kg setara ±Rp 1,9 T EBITDA setahun — risiko tunggal terbesar terhadap RKAP.",
    rekomendasi:
      "Eksekusi program lindung nilai CPO bertahap hingga 20% volume produksi H2 2026.",
    meta: {
      jenis: "Prediksi",
      confidencePct: 72,
      evidence: "Model sensitivitas volume belum terjual × pergerakan harga",
    },
  },
];
