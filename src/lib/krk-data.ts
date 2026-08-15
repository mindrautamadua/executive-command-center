/**
 * Data statis halaman Risiko Keuangan (/keuangan/risiko-keuangan).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts;
 * radar konsisten dengan finRiskRadar di keu-data.ts.
 */

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface KrkKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  tone: "blue" | "green" | "teal" | "amber" | "red";
}

export const krkKpi: KrkKpi[] = [
  {
    label: "Skor Risiko Keuangan",
    value: "58",
    valueSuffix: "/100",
    sub: "Level: Sedang-Tinggi",
    delta: "-3 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q1 2026",
    tone: "amber",
  },
  {
    label: "Eksposur FX Neto",
    value: "USD 420 jt",
    sub: "±Rp 6,8 T (kurs Rp 16.250)",
    delta: "-4,5%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    tone: "blue",
  },
  {
    label: "Hedging Ratio",
    value: "62%",
    sub: "Target kebijakan ≥ 70%",
    delta: "+7 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    tone: "teal",
  },
  {
    label: "Sensitivitas Harga CPO",
    value: "±Rp 1,9 T",
    sub: "EBITDA/thn per ±Rp 1.000/kg",
    compare: "Basis volume FY 2,53 jt ton",
    tone: "red",
  },
  {
    label: "VaR Komoditas",
    value: "Rp 840 M",
    sub: "95% · horizon 3 bulan",
    delta: "+6,1%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Q1 2026",
    tone: "green",
  },
];

/* ── 2. Financial Risk Radar (6 kategori) ─────────────────────────── */

export interface KrkRadarAxis {
  axis: string;
  /** Tingkat risiko saat ini (0-100) — konsisten finRiskRadar keu-data. */
  level: number;
  /** Ambang toleransi. */
  tolerance: number;
}

export const krkRadar: KrkRadarAxis[] = [
  { axis: "Harga Komoditas", level: 72, tolerance: 60 },
  { axis: "FX / Kurs", level: 58, tolerance: 60 },
  { axis: "Likuiditas", level: 35, tolerance: 65 },
  { axis: "Leverage", level: 40, tolerance: 65 },
  { axis: "Piutang", level: 52, tolerance: 60 },
  { axis: "Budget Overrun", level: 45, tolerance: 60 },
];

/* ── 3. Commodity Price Series 24 bulan ───────────────────────────── */

/** Asumsi harga CPO RKAP 2026 (Rp/kg). */
export const ASUMSI_RKAP_CPO_RP_KG = 13500;

export interface CommodityPricePoint {
  month: string;
  /** Harga CPO KPBN rata-rata bulanan (Rp/kg). */
  cpo: number;
  /** Harga lelang gula (Rp/kg). */
  gula: number;
}

/** Jun'24–Mei'26 — seri identik dengan unitCostTrend ksb-data (hargaCpo/hargaGula). */
export const commodityPriceSeries: CommodityPricePoint[] = [
  { month: "Jun'24", cpo: 11250, gula: 14100 },
  { month: "Jul'24", cpo: 11480, gula: 14150 },
  { month: "Agu'24", cpo: 11620, gula: 14200 },
  { month: "Sep'24", cpo: 11540, gula: 14250 },
  { month: "Okt'24", cpo: 11780, gula: 14300 },
  { month: "Nov'24", cpo: 11930, gula: 14350 },
  { month: "Des'24", cpo: 12140, gula: 14400 },
  { month: "Jan'25", cpo: 12080, gula: 14420 },
  { month: "Feb'25", cpo: 12210, gula: 14450 },
  { month: "Mar'25", cpo: 12340, gula: 14480 },
  { month: "Apr'25", cpo: 12460, gula: 14500 },
  { month: "Mei'25", cpo: 12380, gula: 14550 },
  { month: "Jun'25", cpo: 12290, gula: 14580 },
  { month: "Jul'25", cpo: 12420, gula: 14600 },
  { month: "Agu'25", cpo: 12550, gula: 14620 },
  { month: "Sep'25", cpo: 12480, gula: 14650 },
  { month: "Okt'25", cpo: 12690, gula: 14680 },
  { month: "Nov'25", cpo: 12820, gula: 14700 },
  { month: "Des'25", cpo: 12960, gula: 14720 },
  { month: "Jan'26", cpo: 11980, gula: 14740 },
  { month: "Feb'26", cpo: 12160, gula: 14760 },
  { month: "Mar'26", cpo: 12450, gula: 14790 },
  { month: "Apr'26", cpo: 12980, gula: 14820 },
  { month: "Mei'26", cpo: 13680, gula: 14850 },
];

export const commodityNote =
  "Rata-rata CPO YTD Rp 12.482/kg masih di bawah asumsi RKAP Rp 13.500; spot Mei Rp 13.680 baru menyusul. Surplus harga di bridge EBITDA ditopang gula & premi kualitas.";

/* ── 4. FX Sensitivity Tornado (IDR ±5%) ──────────────────────────── */

export interface FxTornadoRow {
  driver: string;
  /** Dampak bila rupiah menguat 5% (Rp T; bertanda). */
  apresiasi: number;
  /** Dampak bila rupiah melemah 5% (Rp T; bertanda). */
  depresiasi: number;
  keterangan: string;
}

export const fxTornado: FxTornadoRow[] = [
  {
    driver: "Pendapatan ekspor (EBITDA)",
    apresiasi: -0.31,
    depresiasi: 0.31,
    keterangan: "22% volume CPO diekspor; harga acuan USD.",
  },
  {
    driver: "Revaluasi utang USD",
    apresiasi: 0.34,
    depresiasi: -0.34,
    keterangan: "Utang valas bruto ±USD 455 jt.",
  },
  {
    driver: "Biaya input impor (pupuk, sparepart)",
    apresiasi: 0.12,
    depresiasi: -0.12,
    keterangan: "±18% biaya pupuk terindeks USD.",
  },
];

/* ── 5. Interest Rate Exposure ────────────────────────────────────── */

export const interestSplit = {
  /** Porsi utang bunga tetap (%). */
  fixedPct: 68,
  /** Porsi utang bunga mengambang (%). */
  floatingPct: 32,
  /** Saldo bunga mengambang (Rp T) dari utang berbunga 28,4 T. */
  floatingRpT: 9.1,
  /** Dampak kenaikan suku bunga +100 bps ke beban bunga setahun. */
  dampak100BpsRpM: 91,
  note: "Setiap +100 bps menambah beban bunga ±Rp 91 M/thn; refinancing Rp 4 T direncanakan berbunga tetap.",
} as const;

/* ── 6. Top Financial Risks ───────────────────────────────────────── */

export type FinRiskLevel = "Tinggi" | "Sedang" | "Rendah";

export interface FinRisk {
  name: string;
  level: FinRiskLevel;
  /** Estimasi eksposur (string berformat). */
  exposure: string;
  mitigasi: string;
}

export const topFinancialRisks: FinRisk[] = [
  {
    name: "Penurunan harga CPO di bawah asumsi RKAP",
    level: "Tinggi",
    exposure: "±Rp 1,9 T EBITDA / ±Rp 1.000 per kg",
    mitigasi: "Lindung nilai bertahap 20% volume H2; diversifikasi kontrak forward KPBN.",
  },
  {
    name: "Depresiasi rupiah terhadap USD",
    level: "Sedang",
    exposure: "USD 420 jt neto (hedging 62%)",
    mitigasi: "Naikkan hedging ke ≥ 70% via cross-currency swap; natural hedge ekspor.",
  },
  {
    name: "Kerugian berkelanjutan 11 PG SGN",
    level: "Tinggi",
    exposure: "Drag laba ±Rp 0,4 T/thn",
    mitigasi: "Revitalisasi 5 PG prioritas; konsolidasi giling klaster merah.",
  },
  {
    name: "Piutang macet distributor gula",
    level: "Sedang",
    exposure: "Rp 680 M bucket > 90 hari",
    mitigasi: "Credit limit, bank garansi & provisi bertahap; stop-supply overdue > 30%.",
  },
  {
    name: "Refinancing wall 2027",
    level: "Sedang",
    exposure: "Jatuh tempo Rp 8,2 T",
    mitigasi: "Refinancing dini Rp 4 T di 2026; perpanjang tenor rata-rata utang.",
  },
  {
    name: "Overrun biaya pupuk & BBM",
    level: "Sedang",
    exposure: "+Rp 0,3 T HPP FY bila deviasi berlanjut",
    mitigasi: "Kontrak pengadaan H2 dikunci; program efisiensi Rp 840 M/thn.",
  },
  {
    name: "Kenaikan suku bunga acuan",
    level: "Rendah",
    exposure: "Rp 91 M per +100 bps",
    mitigasi: "Porsi bunga tetap 68%; refinancing berbunga tetap.",
  },
  {
    name: "Keterlambatan capex replanting (opportunity cost)",
    level: "Sedang",
    exposure: "Mundurnya kurva yield 2029-2031",
    mitigasi: "War room percepatan; realokasi ke regional siap tanam.",
  },
];

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

export interface KrkDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

export const krkDecisions: KrkDecision[] = [
  {
    title: "Program Lindung Nilai CPO 20%",
    impact: "High Impact",
    tone: "red",
    context:
      "Harga komoditas adalah risiko keuangan terbesar (skor radar 72); spot Rp 13.680 di atas asumsi RKAP membuka jendela lock-in.",
    rekomendasi:
      "Approve hedging bertahap 20% volume produksi H2 2026 via kontrak forward, dengan pagu biaya premi.",
    due: "Q3 2026",
  },
  {
    title: "Cross-Currency Swap USD 150 jt",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Hedging ratio 62% di bawah kebijakan ≥ 70%; jatuh tempo utang USD 2026-2027 terekspos pelemahan rupiah.",
    rekomendasi:
      "Setujui CCS USD 150 jt untuk menaikkan hedging ratio ke ±72% sebelum akhir Q3.",
    due: "Q3 2026",
  },
];

/* ── 8. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KrkInsight {
  insight: string;
  rekomendasi: string;
}

export const krkInsights: KrkInsight[] = [
  {
    insight:
      "Profil risiko asimetris: likuiditas & leverage jauh di bawah toleransi, namun satu variabel (harga CPO) menyumbang mayoritas volatilitas laba.",
    rekomendasi:
      "Alihkan kapasitas risk-taking dari neraca (yang kuat) ke program hedging komoditas yang selama ini minimal.",
  },
  {
    insight:
      "VaR komoditas Rp 840 M (95%, 3 bulan) ≈ 12% EBITDA YTD — belum termasuk skenario El Nino terhadap volume.",
    rekomendasi:
      "Gabungkan stress harga × volume dalam satu skenario di halaman Simulasi Keuangan untuk keputusan hedging BOD.",
  },
];
