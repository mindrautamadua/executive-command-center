/**
 * Data statis dimensi Risiko & Kepatuhan (ENTERPRISE) — /risiko-kepatuhan.
 * Bagian 1: Executive Overview, Risk Register Korporat, Risk Appetite & Limit,
 * Risiko Komoditas & Iklim. Halaman Kepatuhan/Audit/WBS/ERM/Legal ada di
 * risk-data-detail.ts.
 *
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 * Scope ENTERPRISE — berbeda dari /people-risk-radar (prr-data.ts) dan
 * /risk-compliance (rc-data.ts) yang ber-scope tenaga kerja; risiko people
 * masuk register ini sebagai 1 baris agregat dan di-cross-link, bukan diduplikasi.
 *
 * Guard konsistensi lintas dimensi:
 * - El Nino H2 62% (RISIKO.elNinoProbabilitasPct, BMKG/NOAA) — sama dengan agro-data.
 * - Skenario El Nino moderat: EBITDA -Rp 1,9 T — identik elNinoScenarios agro-data.
 * - Harga CPO avg YTD Rp 12.482 vs asumsi RKAP Rp 13.500 — selaras krk-data
 *   (ASUMSI_RKAP_CPO_RP_KG) & PEMASARAN.cpoAvgYtdRpKg.
 * - Leverage 1,38x vs limit ≤2,5x — KEUANGAN.netDebtEbitda.
 * - HPP CPO Rp 8.950/kg — PRODUKSI.hppCpoRpKg.
 */

import { PALETTE } from "./chart-palette";
import {
  BASELINE_TRUST,
  KEUANGAN,
  PEMASARAN,
  PRODUKSI,
  RISIKO,
} from "./group-baseline";
import { ASUMSI_RKAP_CPO_RP_KG } from "./krk-data";

/* ══════════════════════════════════════════════════════════════════════
   TIPE & SKALA BERSAMA (dipakai juga oleh risk-data-detail.ts)
   ══════════════════════════════════════════════════════════════════════ */

export type RiskCategory =
  | "Strategis"
  | "Keuangan"
  | "Operasional"
  | "Kepatuhan"
  | "Reputasi"
  | "Proyek";

export type RiskLevel = "Ekstrem" | "Tinggi" | "Menengah" | "Rendah";

/** Warna kanonik per level risiko (skor 5×5 = likelihood × impact, 1–25). */
export const RISK_LEVEL_BAND: Record<RiskLevel, string> = {
  Ekstrem: PALETTE.red,
  Tinggi: "#f0662d",
  Menengah: PALETTE.amber,
  Rendah: PALETTE.green,
};

/**
 * Konversi skor matriks 5×5 (likelihood × impact, 1–25) ke level —
 * clone pola statusOfScore (rc-data) / levelOfScore (prr-data).
 * Band: Ekstrem 20–25, Tinggi 12–19, Menengah 6–11, Rendah 1–5.
 */
export const levelOfScore = (score: number): RiskLevel =>
  score >= 20 ? "Ekstrem" : score >= 12 ? "Tinggi" : score >= 6 ? "Menengah" : "Rendah";

/** Insight + rekomendasi — bentuk seragam untuk seluruh halaman dimensi ini. */
export interface RiskInsight {
  insight: string;
  rekomendasi: string;
}

/** KPI kecil per halaman detail (di bawah header). */
export interface RiskPageKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  subDanger?: boolean;
  tone: "green" | "red" | "amber" | "teal" | "blue";
}

/* ══════════════════════════════════════════════════════════════════════
   #region OVERVIEW — /risiko-kepatuhan
   ══════════════════════════════════════════════════════════════════════ */

/** Footer sidebar + DataTrustStrip dimensi Risiko & Kepatuhan. */
export const riskDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "93,6%",
  quality: "92,2%",
  sources: ["ERM System", "e-Audit", "WBS", "Legal Tracker"],
  domain: "Risiko",
  // Timeliness terendah se-grup: register risiko & status perkara diinput manual.
  qualityBreakdown: [
    { label: "Completeness", value: "95%" },
    { label: "Accuracy", value: "96%" },
    { label: "Timeliness", value: "87%" },
    { label: "Consistency", value: "91%" },
    { label: "Reconciliation", value: "90%" },
    { label: "Certification", value: "85%" },
  ],
};

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface RiskKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100". */
  valueSuffix?: string;
  sub: string;
  /** Sub berwarna merah (mis. "Di Atas Appetite"). */
  subDanger?: boolean;
  /** Kosong = tampilkan `compare` saja. */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "eri" | "highrisk" | "limit" | "compliance" | "audit" | "maturity" | "legal";
  tone: "green" | "red" | "amber" | "teal" | "blue";
}

export const riskKpi: RiskKpi[] = [
  {
    label: "Enterprise Risk Index",
    value: "64",
    valueSuffix: "/100",
    sub: "Band: Elevated (60–74)",
    delta: "-2 pts",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q1 2026 — membaik",
    icon: "eri",
    tone: "green",
  },
  {
    label: "Risiko Ekstrem & Tinggi",
    value: "17",
    sub: `4 Ekstrem · 13 Tinggi dari ${RISIKO.registerTotal} Risiko`,
    subDanger: true,
    delta: "-2",
    trend: "down",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "highrisk",
    tone: "red",
  },
  {
    label: "Limit Breach",
    value: "4",
    valueSuffix: "/28",
    sub: "6 Near-Limit · Eskalasi Aktif 2",
    subDanger: true,
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Apr 2026",
    icon: "limit",
    tone: "amber",
  },
  {
    label: "Skor Kepatuhan Grup",
    value: "89",
    valueSuffix: "/100",
    sub: "386 Kewajiban Enterprise · Patuh 91,2%",
    delta: "+1 pt",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "compliance",
    tone: "blue",
  },
  {
    label: "Temuan Audit Overdue",
    value: "11",
    sub: "Dari 49 Temuan Terbuka (BPK · SPI · KAP)",
    delta: "-3",
    trend: "down",
    deltaTone: "good",
    compare: "vs Apr 2026",
    icon: "audit",
    tone: "amber",
  },
  {
    label: "ERM Maturity",
    value: "3,42",
    valueSuffix: "/5",
    sub: "Level Managed · Target 4,0 (2027)",
    delta: "+0,18",
    trend: "up",
    deltaTone: "good",
    compare: "vs Asesmen 2025",
    icon: "maturity",
    tone: "teal",
  },
  {
    label: "Eksposur Legal",
    value: "Rp 4,2 T",
    sub: `${RISIKO.perkaraAktif} Perkara Aktif · Provisi Rp 380 M`,
    delta: "+Rp 0,3 T",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "legal",
    tone: "red",
  },
];

/* ── Risk Intelligence (narasi eksekutif) ─────────────────────────── */

export interface RiskIntelligenceItem {
  title: string;
  text: string;
  tone: "red" | "amber" | "blue";
}

export const riskIntelligence: RiskIntelligenceItem[] = [
  {
    title: "El Nino H2 2026 — probabilitas 62%",
    text: "BMKG/NOAA menaikkan probabilitas El Nino H2 menjadi 62%. Skenario moderat memangkas produksi H2 -6% dan EBITDA -Rp 1,9 T. Mitigasi water management baru mencakup 34 kebun; asuransi parametrik iklim masih pilot 2 regional.",
    tone: "red",
  },
  {
    title: "Harga CPO di bawah asumsi RKAP",
    text: "Rata-rata YTD Rp 12.482/kg vs asumsi RKAP Rp 13.500/kg (-7,5%). Spot KPBN Rp 13.680 sudah pulih, namun forward curve H2 melandai. Hedging coverage baru 12% dari volume — usulan kenaikan ke 20% menunggu keputusan BOD.",
    tone: "amber",
  },
  {
    title: "Sengketa HGU — eksposur legal terkonsentrasi",
    text: "52 dari 87 perkara aktif adalah sengketa lahan/HGU dengan eksposur terbesar Rp 1,1 T (Regional 3 Riau). Perpanjangan 23 sertifikat HGU berjalan; keterlambatan berisiko melebarkan okupasi 18,4 rb ha yang sudah berperkara.",
    tone: "blue",
  },
];

/* ── Enterprise Heatmap 5×5 ───────────────────────────────────────── */

export interface HeatmapCell {
  /** 1 (Jarang) – 5 (Hampir Pasti). */
  likelihood: number;
  /** 1 (Minor) – 5 (Katastropik). */
  impact: number;
  /** Jumlah risiko register pada sel ini. */
  count: number;
}

/**
 * Distribusi 142 risiko register pada matriks 5×5 (25 sel).
 * Level sel = levelOfScore(likelihood × impact).
 * Rekap: Ekstrem 4 · Tinggi 13 · Menengah 52 · Rendah 73 = 142.
 */
export const heatmapCells: HeatmapCell[] = [
  // Ekstrem (skor 20–25) = 4
  { likelihood: 4, impact: 5, count: 2 },
  { likelihood: 5, impact: 4, count: 1 },
  { likelihood: 5, impact: 5, count: 1 },
  // Tinggi (12–19) = 13
  { likelihood: 3, impact: 4, count: 4 },
  { likelihood: 4, impact: 3, count: 3 },
  { likelihood: 3, impact: 5, count: 2 },
  { likelihood: 5, impact: 3, count: 2 },
  { likelihood: 4, impact: 4, count: 2 },
  // Menengah (6–11) = 52
  { likelihood: 2, impact: 3, count: 9 },
  { likelihood: 3, impact: 2, count: 8 },
  { likelihood: 2, impact: 4, count: 7 },
  { likelihood: 4, impact: 2, count: 6 },
  { likelihood: 2, impact: 5, count: 5 },
  { likelihood: 5, impact: 2, count: 3 },
  { likelihood: 3, impact: 3, count: 14 },
  // Rendah (1–5) = 73
  { likelihood: 1, impact: 1, count: 6 },
  { likelihood: 1, impact: 2, count: 8 },
  { likelihood: 2, impact: 1, count: 9 },
  { likelihood: 1, impact: 3, count: 7 },
  { likelihood: 3, impact: 1, count: 8 },
  { likelihood: 1, impact: 4, count: 6 },
  { likelihood: 4, impact: 1, count: 7 },
  { likelihood: 2, impact: 2, count: 12 },
  { likelihood: 1, impact: 5, count: 5 },
  { likelihood: 5, impact: 1, count: 5 },
];

/* ── Top 10 Risks ─────────────────────────────────────────────────── */

export interface TopRisk {
  name: string;
  category: RiskCategory;
  /** Skor matriks 5×5 sebelum kontrol. */
  inherent: number;
  /** Skor tersisa setelah kontrol berjalan. */
  residual: number;
  trend: "up" | "down" | "flat";
  owner: string;
}

/** 4 teratas = risiko Ekstrem register (residual ≥ 20). */
export const top10Risks: TopRisk[] = [
  { name: "Volatilitas harga CPO di bawah asumsi RKAP", category: "Keuangan", inherent: 25, residual: 20, trend: "flat", owner: "Direktorat Keuangan & MR" },
  { name: "El Nino H2 2026 — defisit air & koreksi yield", category: "Operasional", inherent: 25, residual: 20, trend: "up", owner: "Direktorat Produksi & Operasi" },
  { name: "Sengketa lahan & perpanjangan HGU", category: "Kepatuhan", inherent: 24, residual: 20, trend: "flat", owner: "Direktorat Hukum & Manajemen Aset" },
  { name: "Serangan siber pada sistem operasional & ERP", category: "Operasional", inherent: 25, residual: 20, trend: "up", owner: "Direktorat Digital & TI" },
  { name: "Tekanan likuiditas SGN pada puncak musim giling", category: "Keuangan", inherent: 20, residual: 16, trend: "down", owner: "Direktorat Keuangan & MR" },
  { name: "Harga gula & kebijakan impor menekan margin SGN", category: "Strategis", inherent: 20, residual: 15, trend: "up", owner: "Direktorat Pemasaran" },
  { name: "Kegagalan pabrik tua (PG & PKS >30 tahun)", category: "Operasional", inherent: 20, residual: 15, trend: "flat", owner: "Direktorat Produksi & Operasi" },
  { name: "Fraud pengadaan & benturan kepentingan", category: "Kepatuhan", inherent: 16, residual: 12, trend: "down", owner: "SPI & Kepatuhan" },
  { name: "Kesiapan EUDR untuk ekspor pasar Uni Eropa", category: "Strategis", inherent: 16, residual: 12, trend: "flat", owner: "Direktorat Pemasaran" },
  { name: "Attrition talenta kritis & suksesi (agregat people risk)", category: "Strategis", inherent: 16, residual: 12, trend: "down", owner: "Direktorat SDM" },
];

/** Cross-link: detail people risk (10 kategori, skor 68/100) di scope SDM. */
export const PEOPLE_RISK_HREF = "/people-risk-radar";

/* ── Category Radar (5 sumbu vs appetite) ─────────────────────────── */

export interface CategoryRadarAxis {
  /** 5 sumbu; Reputasi & Proyek digabung agar radar tetap terbaca. */
  kategori: string;
  /** Skor komposit residual 0–100 per kategori. */
  residual: number;
  /** Ambang appetite 0–100 — di atasnya berarti melampaui selera risiko. */
  appetite: number;
}

export const categoryRadar: CategoryRadarAxis[] = [
  { kategori: "Strategis", residual: 58, appetite: 55 },
  { kategori: "Keuangan", residual: 66, appetite: 50 },
  { kategori: "Operasional", residual: 62, appetite: 55 },
  { kategori: "Kepatuhan", residual: 54, appetite: 45 },
  { kategori: "Reputasi & Proyek", residual: 48, appetite: 50 },
];

/* ── Early Warning Indicators (6 KRI) ─────────────────────────────── */

export interface EarlyWarningKri {
  indikator: string;
  nilai: string;
  ambang: string;
  status: "Merah" | "Kuning" | "Hijau";
  trend: "up" | "down" | "flat";
  /** Naik = memburuk atau membaik, tergantung KRI. */
  trendTone: "good" | "bad" | "neutral";
  /** Cross-link halaman detail (internal atau scope SDM). */
  href?: string;
}

export const earlyWarnings: EarlyWarningKri[] = [
  {
    indikator: "Anomali curah hujan (regional terdampak)",
    nilai: "-12% vs normal",
    ambang: "Merah bila ≤ -15%",
    status: "Kuning",
    trend: "down",
    trendTone: "bad",
    href: "/risiko-kepatuhan/komoditas-iklim",
  },
  {
    indikator: "Harga CPO KPBN (rata-rata 30 hari)",
    nilai: "Rp 13.680/kg",
    ambang: "Merah bila < Rp 11.500/kg",
    status: "Hijau",
    trend: "up",
    trendTone: "good",
    href: "/risiko-kepatuhan/komoditas-iklim",
  },
  {
    indikator: "DSCR proyeksi 12 bulan",
    nilai: "2,8x",
    ambang: "Merah bila < 1,5x",
    status: "Hijau",
    trend: "flat",
    trendTone: "neutral",
  },
  {
    indikator: "Turnover talenta kritis (scope SDM)",
    nilai: "6,8% YTD",
    ambang: "Merah bila > 8%",
    status: "Kuning",
    trend: "up",
    trendTone: "bad",
    href: PEOPLE_RISK_HREF,
  },
  {
    indikator: "Restan TBS (buah tidak terangkut)",
    nilai: "1,8%",
    ambang: "Merah bila > 2,0%",
    status: "Kuning",
    trend: "up",
    trendTone: "bad",
  },
  {
    indikator: "Limit risk appetite breach aktif",
    nilai: "4 limit",
    ambang: "Merah bila > 2",
    status: "Merah",
    trend: "up",
    trendTone: "bad",
    href: "/risiko-kepatuhan/risk-appetite",
  },
];

/* ── BOD Risk Decision Center ─────────────────────────────────────── */

export interface RiskDecision {
  title: string;
  situation: string;
  decision: string;
  exposure: string;
  due: string;
  tone: "red" | "amber";
}

export const riskDecisions: RiskDecision[] = [
  {
    title: "Kebijakan Hedging CPO 20% Volume",
    situation: "Rata-rata harga YTD Rp 12.482 vs asumsi RKAP Rp 13.500; hedging coverage baru 12% dari volume produksi H2.",
    decision: "Setujui kenaikan lindung nilai bertahap hingga 20% volume produksi H2 2026 (forward/futures via KPBN).",
    exposure: "±Rp 1,9 T EBITDA per Rp 1.000/kg",
    due: "Jul 2026",
    tone: "red",
  },
  {
    title: "Asuransi Parametrik El Nino",
    situation: "Probabilitas El Nino H2 62%; pilot asuransi indeks iklim baru mencakup 2 regional dari rencana 6 regional prioritas.",
    decision: "Setujui perluasan asuransi parametrik curah hujan ke 6 regional prioritas sebelum musim kering.",
    exposure: "Rp 1,9 T (skenario moderat)",
    due: "Agu 2026",
    tone: "red",
  },
  {
    title: "Eskalasi 2 Limit Breach",
    situation: "4 limit breach aktif; 2 di antaranya (HPP CPO dan piutang plasma) telah melewati SLA remediasi 60 hari.",
    decision: "Eskalasi ke Komite Risiko: rencana pemulihan HPP ≤ Rp 8.700/kg dan restrukturisasi piutang plasma.",
    exposure: "Rp 680 M piutang · Rp 250/kg HPP",
    due: "Jul 2026",
    tone: "amber",
  },
];

/* ── Insights Overview ────────────────────────────────────────────── */

export const riskInsights: RiskInsight[] = [
  {
    insight:
      "ERI 64/100 membaik 2 pts QoQ, tetapi dua risiko ekstrem (harga CPO & El Nino) berkorelasi — bila keduanya terealisasi bersamaan, dampak EBITDA melebihi Rp 4 T.",
    rekomendasi:
      "Perlakukan hedging CPO dan asuransi parametrik sebagai satu paket keputusan mitigasi, bukan dua usulan terpisah.",
  },
  {
    insight:
      "Kategori Keuangan (residual 66) dan Kepatuhan (54) melampaui appetite masing-masing (50 & 45) — dua-duanya digerakkan risiko harga dan sengketa HGU.",
    rekomendasi:
      "Prioritaskan 23 perpanjangan HGU berjalan; tiap sertifikat yang selesai menurunkan residual kategori Kepatuhan.",
  },
  {
    insight:
      "6 KRI early warning: 1 merah (limit breach) dan 3 kuning — semuanya leading indicator risiko top-10, belum ada yang lagging.",
    rekomendasi:
      "Review KRI bulanan di Komite Risiko; turunkan ambang eskalasi restan TBS dari 2,0% ke 1,9% selama musim kering.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region RISK-REGISTER — /risiko-kepatuhan/risk-register
   ══════════════════════════════════════════════════════════════════════ */

/**
 * Register korporat 142 risiko (RISIKO.registerTotal):
 * per kategori 12 Strategis + 28 Keuangan + 44 Operasional + 31 Kepatuhan
 * + 15 Reputasi + 12 Proyek = 142;
 * per level 4 Ekstrem + 13 Tinggi + 52 Menengah + 73 Rendah = 142.
 * Catatan: 31 risiko Kepatuhan enterprise ≠ 31 laporan WBS labor (kebetulan
 * angka sama, entitas berbeda).
 */
export const registerStats = {
  total: RISIKO.registerTotal,
  byCategory: {
    strategis: 12,
    keuangan: 28,
    operasional: 44,
    kepatuhan: 31,
    reputasi: 15,
    proyek: 12,
  },
  byLevel: { ekstrem: RISIKO.ekstrem, tinggi: RISIKO.tinggi, menengah: 52, rendah: 73 },
} as const;

export const registerKpi: RiskPageKpi[] = [
  {
    label: "Total Risiko Register",
    value: "142",
    sub: "12 Strategis · 28 Keuangan · 44 Operasional · 31 Kepatuhan · 15 Reputasi · 12 Proyek",
    tone: "blue",
  },
  {
    label: "Ekstrem & Tinggi",
    value: "17",
    sub: "4 Ekstrem · 13 Tinggi — wajib mitigasi aktif",
    subDanger: true,
    tone: "red",
  },
  { label: "Menengah", value: "52", sub: "Dipantau via KRI & review triwulanan", tone: "amber" },
  { label: "Rendah", value: "73", sub: "Diterima dalam appetite · review tahunan", tone: "green" },
];

/* ── Register per kategori × subholding (stacked) ─────────────────── */

export interface CategoryBySubholding {
  category: RiskCategory;
  palmco: number;
  sgn: number;
  ptpn1: number;
  holding: number;
  total: number;
}

/** Baris menjumlah ke total kategori; kolom: PalmCo 50 · SGN 39 · PTPN I 23 · Holding 30 = 142. */
export const byCategory: CategoryBySubholding[] = [
  { category: "Strategis", palmco: 3, sgn: 2, ptpn1: 1, holding: 6, total: 12 },
  { category: "Keuangan", palmco: 9, sgn: 7, ptpn1: 4, holding: 8, total: 28 },
  { category: "Operasional", palmco: 19, sgn: 14, ptpn1: 8, holding: 3, total: 44 },
  { category: "Kepatuhan", palmco: 11, sgn: 8, ptpn1: 6, holding: 6, total: 31 },
  { category: "Reputasi", palmco: 4, sgn: 3, ptpn1: 3, holding: 5, total: 15 },
  { category: "Proyek", palmco: 4, sgn: 5, ptpn1: 1, holding: 2, total: 12 },
];

/* ── Inherent vs Residual (dumbbell, 15 pasang) ───────────────────── */

export interface InherentResidualPair {
  name: string;
  category: RiskCategory;
  inherent: number;
  residual: number;
}

/** 10 pertama identik top10Risks; 5 tambahan risiko Tinggi/Menengah terpilih. */
export const inherentVsResidual: InherentResidualPair[] = [
  ...top10Risks.map(({ name, category, inherent, residual }) => ({ name, category, inherent, residual })),
  { name: "Volatilitas kurs USD/IDR pada utang & input impor", category: "Keuangan", inherent: 15, residual: 10 },
  { name: "Kenaikan harga pupuk & energi", category: "Operasional", inherent: 15, residual: 10 },
  { name: "Kampanye negatif deforestasi/NDPE", category: "Reputasi", inherent: 12, residual: 9 },
  { name: "Keterlambatan proyek revitalisasi PG", category: "Proyek", inherent: 12, residual: 9 },
  { name: "Ketidakpatuhan lingkungan (limbah & emisi)", category: "Kepatuhan", inherent: 12, residual: 8 },
];

/* ── Movement QoQ ─────────────────────────────────────────────────── */

export const riskMovement = {
  naik: 5,
  turun: 9,
  baru: 3,
  ditutup: 6,
  periode: "Q2 2026 vs Q1 2026",
} as const;

export interface RiskMover {
  name: string;
  arah: "naik" | "turun" | "baru" | "ditutup";
  dari?: RiskLevel;
  ke: RiskLevel;
  catatan: string;
}

export const riskMovers: RiskMover[] = [
  { name: "El Nino H2 2026", arah: "naik", dari: "Tinggi", ke: "Ekstrem", catatan: "Probabilitas BMKG/NOAA naik ke 62%" },
  { name: "Serangan siber ERP/OT", arah: "naik", dari: "Tinggi", ke: "Ekstrem", catatan: "Insiden phishing meningkat; patch SLA 78%" },
  { name: "Likuiditas SGN musim giling", arah: "turun", dari: "Ekstrem", ke: "Tinggi", catatan: "Fasilitas modal kerja committed Rp 2,4 T efektif" },
  { name: "Fraud pengadaan", arah: "turun", dari: "Tinggi", ke: "Tinggi", catatan: "Skor turun 14→12; e-procurement fase 2 live" },
  { name: "Kesiapan EUDR", arah: "baru", ke: "Tinggi", catatan: "Masuk register Q2; due diligence geolokasi 78/100" },
  { name: "Gagal panen tebu rakyat mitra", arah: "ditutup", dari: "Menengah", ke: "Rendah", catatan: "Musim tanam selesai; realisasi di atas RKAP" },
];

/* ── Owner Matrix per direktorat ──────────────────────────────────── */

export interface OwnerMatrixRow {
  direktorat: string;
  ekstrem: number;
  tinggi: number;
  menengah: number;
  rendah: number;
  total: number;
}

/** Kolom menjumlah ke 4 / 13 / 52 / 73; total baris = 142. */
export const ownerMatrix: OwnerMatrixRow[] = [
  { direktorat: "Dit. Keuangan & Manajemen Risiko", ekstrem: 1, tinggi: 3, menengah: 9, rendah: 12, total: 25 },
  { direktorat: "Dit. Produksi & Operasi", ekstrem: 1, tinggi: 3, menengah: 14, rendah: 18, total: 36 },
  { direktorat: "Dit. Pemasaran", ekstrem: 0, tinggi: 2, menengah: 7, rendah: 10, total: 19 },
  { direktorat: "Dit. SDM & Umum", ekstrem: 0, tinggi: 1, menengah: 6, rendah: 9, total: 16 },
  { direktorat: "Dit. Hukum & Manajemen Aset", ekstrem: 1, tinggi: 2, menengah: 6, rendah: 8, total: 17 },
  { direktorat: "Dit. Digital & TI", ekstrem: 1, tinggi: 1, menengah: 4, rendah: 6, total: 12 },
  { direktorat: "Sekretariat Korporat & Kepatuhan", ekstrem: 0, tinggi: 1, menengah: 6, rendah: 10, total: 17 },
];

/* ── Top Risk Detail (expandable, 8) ──────────────────────────────── */

export interface TopRiskDetail {
  name: string;
  category: RiskCategory;
  level: RiskLevel;
  deskripsi: string;
  kri: string;
  mitigasi: string;
  due: string;
  owner: string;
}

export const topRiskDetail: TopRiskDetail[] = [
  {
    name: "Volatilitas harga CPO di bawah asumsi RKAP",
    category: "Keuangan",
    level: "Ekstrem",
    deskripsi: "Rata-rata YTD Rp 12.482/kg vs asumsi RKAP Rp 13.500/kg; sensitivitas ±Rp 1.000/kg ≈ ±Rp 1,9 T EBITDA setahun.",
    kri: "Harga KPBN 30 hari < Rp 11.500/kg",
    mitigasi: "Hedging bertahap ke 20% volume H2; diversifikasi kontrak forward buyer utama.",
    due: "Jul 2026",
    owner: "Dit. Keuangan & MR",
  },
  {
    name: "El Nino H2 2026",
    category: "Operasional",
    level: "Ekstrem",
    deskripsi: "Probabilitas 62% (BMKG/NOAA); skenario moderat memangkas produksi H2 -6% dan EBITDA -Rp 1,9 T.",
    kri: "Anomali curah hujan ≤ -15% vs normal",
    mitigasi: "Water management 34 kebun, embung & biopori, perluasan asuransi parametrik ke 6 regional.",
    due: "Agu 2026",
    owner: "Dit. Produksi & Operasi",
  },
  {
    name: "Sengketa lahan & perpanjangan HGU",
    category: "Kepatuhan",
    level: "Ekstrem",
    deskripsi: "52 perkara lahan aktif (subset 214 kasus sengketa Aset, 82,4 rb ha); eksposur terbesar HGU Regional 3 Riau Rp 1,1 T.",
    kri: "Perkara baru lahan > 3 per triwulan",
    mitigasi: "Task force perpanjangan 23 sertifikat HGU; mediasi prioritas 10 kasus eksposur terbesar.",
    due: "Des 2026",
    owner: "Dit. Hukum & Manajemen Aset",
  },
  {
    name: "Serangan siber pada ERP & sistem operasional",
    category: "Operasional",
    level: "Ekstrem",
    deskripsi: "Insiden phishing naik; patch compliance 78% vs SLA ≥95% (limit breach). Downtime ERP >48 jam mengganggu penjualan & payroll.",
    kri: "Patch SLA < 95% · insiden P1 > 0",
    mitigasi: "Program uplift keamanan TI, asuransi cyber (line baru 2026), tabletop exercise BOD.",
    due: "Sep 2026",
    owner: "Dit. Digital & TI",
  },
  {
    name: "Tekanan likuiditas SGN pada puncak giling",
    category: "Keuangan",
    level: "Tinggi",
    deskripsi: "Kebutuhan modal kerja tebu terkonsentrasi Mei–Sep; mismatch dengan penerimaan penjualan gula.",
    kri: "Kas SGN < 1 bulan opex",
    mitigasi: "Fasilitas committed Rp 2,4 T + cash pooling grup.",
    due: "Berjalan",
    owner: "Dit. Keuangan & MR",
  },
  {
    name: "Harga gula & kebijakan impor",
    category: "Strategis",
    level: "Tinggi",
    deskripsi: "Realisasi lelang Rp 14.850/kg di bawah asumsi RKAP Rp 15.200/kg; tambahan kuota impor berisiko menekan harga H2.",
    kri: "Harga lelang < HAP + 3%",
    mitigasi: "Advokasi kebijakan via holding; kontrak jangka menengah dengan industri mamin.",
    due: "Okt 2026",
    owner: "Dit. Pemasaran",
  },
  {
    name: "Kegagalan pabrik tua (PG & PKS >30 tahun)",
    category: "Operasional",
    level: "Tinggi",
    deskripsi: "11 PG berkinerja merah; downtime tak terencana menahan utilisasi PKS di 78,4%.",
    kri: "Downtime tak terencana > 5%",
    mitigasi: "Capex revitalisasi 5 PG Rp 3,1 T; predictive maintenance pilot 8 PKS.",
    due: "2027",
    owner: "Dit. Produksi & Operasi",
  },
  {
    name: "Fraud pengadaan & benturan kepentingan",
    category: "Kepatuhan",
    level: "Tinggi",
    deskripsi: "14 laporan WBS terkait pengadaan YTD (dari 47 laporan enterprise); kerugian teridentifikasi Rp 18,6 M.",
    kri: "Laporan WBS pengadaan > 3/bulan",
    mitigasi: "E-procurement fase 2, deklarasi konflik kepentingan digital, audit forensik terarah.",
    due: "Sep 2026",
    owner: "SPI & Kepatuhan",
  },
];

export const registerFootnote =
  "Risk register korporat disusun mengikuti kerangka Permen BUMN No. PER-2/MBU/03/2023 tentang Tata Kelola dan Kegiatan Korporasi Signifikan BUMN (klasifikasi risk taxonomy, appetite, dan pelaporan ke Dewan Komisaris). Skor = likelihood × impact pada matriks 5×5; Ekstrem 20–25, Tinggi 12–19, Menengah 6–11, Rendah 1–5. Risiko people (turnover, suksesi, skill) diagregasi sebagai satu risiko strategis — detailnya dikelola di People Risk Radar (scope SDM).";

export const registerInsights: RiskInsight[] = [
  {
    insight:
      "44 risiko operasional (31% register) terkonsentrasi di PalmCo & SGN — mayoritas terkait iklim, pabrik tua, dan logistik panen.",
    rekomendasi:
      "Gabungkan mitigasi iklim & pabrik dalam satu program capex prioritas agar tidak berebut anggaran H2.",
  },
  {
    insight:
      "Gap inherent→residual terkecil justru pada 4 risiko ekstrem (rata-rata -4,5 poin) — kontrol eksisting belum menurunkan level.",
    rekomendasi:
      "Untuk risiko ekstrem, tambah kontrol transfer risiko (hedging, asuransi) — kontrol preventif internal sudah mentok.",
  },
  {
    insight:
      "3 risiko baru Q2 semuanya regulasi/eksternal (EUDR, revisi pungutan ekspor, formula UMP) — register makin didorong faktor luar.",
    rekomendasi:
      "Perkuat regulatory change radar; tetapkan owner tunggal per regulasi baru dalam 30 hari sejak terbit.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region RISK-APPETITE — /risiko-kepatuhan/risk-appetite
   ══════════════════════════════════════════════════════════════════════ */

export const appetiteKpi: RiskPageKpi[] = [
  { label: "Limit Risk Appetite", value: "28", sub: "Limit kuantitatif lintas 6 kategori", tone: "blue" },
  { label: "Limit Breach", value: "4", sub: "2 melewati SLA remediasi 60 hari", subDanger: true, tone: "red" },
  { label: "Near-Limit", value: "6", sub: "Utilisasi ≥ 85% dari limit", tone: "amber" },
  { label: "Review Terakhir", value: "Feb 2026", sub: "Pernyataan appetite disetujui Dekom", tone: "teal" },
];

/* ── Gauges per kategori ──────────────────────────────────────────── */

export type AppetiteStatus = "Aman" | "Near-Limit" | "Breach" | "Zero-Tolerance";

export interface AppetiteGauge {
  kategori: RiskCategory;
  metric: string;
  limitLabel: string;
  aktualLabel: string;
  /** Utilisasi terhadap limit (%); >100 = breach. */
  utilisasiPct: number;
  status: AppetiteStatus;
}

/**
 * 8 limit representatif dari 28. Breach pada gauges = 4 — identik breachLog.
 * Leverage aktual 1,38x = KEUANGAN.netDebtEbitda; HPP aktual Rp 8.950 =
 * PRODUKSI.hppCpoRpKg.
 */
export const appetiteGauges: AppetiteGauge[] = [
  {
    kategori: "Keuangan",
    metric: "Leverage (Net Debt / EBITDA)",
    limitLabel: "≤ 2,5x",
    aktualLabel: `${String(KEUANGAN.netDebtEbitda).replace(".", ",")}x`,
    utilisasiPct: 55,
    status: "Aman",
  },
  {
    kategori: "Keuangan",
    metric: "Likuiditas (minimum cash)",
    limitLabel: "≥ Rp 3,5 T",
    aktualLabel: "Rp 7,9 T",
    utilisasiPct: 44,
    status: "Aman",
  },
  {
    kategori: "Operasional",
    metric: "Biaya pokok CPO",
    limitLabel: `≤ Rp 8.700/kg`,
    aktualLabel: `Rp ${PRODUKSI.hppCpoRpKg.toLocaleString("id-ID")}/kg`,
    utilisasiPct: 103,
    status: "Breach",
  },
  {
    kategori: "Strategis",
    metric: "Harga gula vs asumsi RKAP",
    limitLabel: "≥ Rp 15.200/kg (asumsi RKAP)",
    aktualLabel: `Rp ${PEMASARAN.gulaLelangRpKg.toLocaleString("id-ID")}/kg`,
    utilisasiPct: 102,
    status: "Breach",
  },
  {
    kategori: "Keuangan",
    metric: "Piutang plasma > 90 hari",
    limitLabel: "≤ Rp 600 M",
    aktualLabel: "Rp 680 M",
    utilisasiPct: 113,
    status: "Breach",
  },
  {
    kategori: "Operasional",
    metric: "Cyber patch compliance",
    limitLabel: "≥ 95% dalam SLA",
    aktualLabel: "78%",
    utilisasiPct: 122,
    status: "Breach",
  },
  {
    kategori: "Operasional",
    metric: "Downtime pabrik tak terencana",
    limitLabel: "≤ 5,0%",
    aktualLabel: "4,6%",
    utilisasiPct: 92,
    status: "Near-Limit",
  },
  {
    kategori: "Kepatuhan",
    metric: "Fraud terbukti",
    limitLabel: "Zero tolerance",
    aktualLabel: "18 kasus substantiated YTD",
    utilisasiPct: 100,
    status: "Zero-Tolerance",
  },
];

/* ── Breach Log (4) ───────────────────────────────────────────────── */

export interface BreachLogRow {
  limit: string;
  kategori: RiskCategory;
  deviasi: string;
  sejak: string;
  tindakLanjut: string;
  eskalasi: "Komite Risiko" | "Direksi" | "Unit";
}

export const breachLog: BreachLogRow[] = [
  {
    limit: "Harga gula vs asumsi RKAP",
    kategori: "Strategis",
    deviasi: "Realisasi lelang Rp 14.850/kg vs asumsi Rp 15.200/kg (-2,3%)",
    sejak: "Mar 2026",
    tindakLanjut: "Kontrak jangka menengah industri mamin; advokasi kebijakan impor",
    eskalasi: "Direksi",
  },
  {
    limit: "Biaya pokok CPO",
    kategori: "Operasional",
    deviasi: "HPP Rp 8.950/kg vs target ≤ Rp 8.700/kg (+2,9%)",
    sejak: "Jan 2026",
    tindakLanjut: "Program efisiensi pupuk & panen — melewati SLA 60 hari, dieskalasi",
    eskalasi: "Komite Risiko",
  },
  {
    limit: "Piutang plasma > 90 hari",
    kategori: "Keuangan",
    deviasi: "Rp 680 M vs limit Rp 600 M (+13,3%)",
    sejak: "Feb 2026",
    tindakLanjut: "Restrukturisasi piutang 12 koperasi — melewati SLA 60 hari, dieskalasi",
    eskalasi: "Komite Risiko",
  },
  {
    limit: "Cyber patch SLA",
    kategori: "Operasional",
    deviasi: "Patch compliance 78% vs limit ≥ 95%",
    sejak: "Apr 2026",
    tindakLanjut: "Sprint patching 90 hari + segmentasi jaringan OT",
    eskalasi: "Unit",
  },
];

/* ── Limit Trend 6 bulan ──────────────────────────────────────────── */

export interface LimitTrendPoint {
  bulan: string;
  breach: number;
  nearLimit: number;
}

export const limitTrend: LimitTrendPoint[] = [
  { bulan: "Des 25", breach: 2, nearLimit: 4 },
  { bulan: "Jan 26", breach: 2, nearLimit: 5 },
  { bulan: "Feb 26", breach: 3, nearLimit: 5 },
  { bulan: "Mar 26", breach: 3, nearLimit: 6 },
  { bulan: "Apr 26", breach: 3, nearLimit: 7 },
  { bulan: "Mei 26", breach: 4, nearLimit: 6 },
];

/* ── Tolerance Matrix (pernyataan appetite) ───────────────────────── */

export interface ToleranceStatement {
  kategori: RiskCategory;
  appetite: "Rendah" | "Moderat" | "Tinggi";
  statement: string;
  jumlahLimit: number;
}

/** jumlahLimit menjumlah ke 28. */
export const toleranceMatrix: ToleranceStatement[] = [
  {
    kategori: "Strategis",
    appetite: "Moderat",
    statement: "Grup bersedia mengambil risiko terukur untuk hilirisasi dan swasembada gula, sepanjang tidak menurunkan rating kredit di bawah investment grade.",
    jumlahLimit: 4,
  },
  {
    kategori: "Keuangan",
    appetite: "Rendah",
    statement: "Leverage dijaga ≤ 2,5x Net Debt/EBITDA dan kas minimum Rp 3,5 T; tidak ada toleransi pelanggaran covenant kreditur.",
    jumlahLimit: 7,
  },
  {
    kategori: "Operasional",
    appetite: "Moderat",
    statement: "Deviasi produksi & biaya ditoleransi dalam band RKAP ±5%; keselamatan jiwa (fatality) zero tolerance.",
    jumlahLimit: 8,
  },
  {
    kategori: "Kepatuhan",
    appetite: "Rendah",
    statement: "Kepatuhan regulasi wajib ≥ 90%; fraud, korupsi, dan gratifikasi zero tolerance tanpa memandang nilai.",
    jumlahLimit: 5,
  },
  {
    kategori: "Reputasi",
    appetite: "Rendah",
    statement: "Tidak ada toleransi pelanggaran NDPE/deforestasi yang terverifikasi; isu media nasional dieskalasi ≤ 24 jam.",
    jumlahLimit: 2,
  },
  {
    kategori: "Proyek",
    appetite: "Moderat",
    statement: "Overrun biaya proyek strategis ditoleransi ≤ 10% dengan persetujuan Direksi; keterlambatan milestone kritis ≤ 1 triwulan.",
    jumlahLimit: 2,
  },
];

/* ── Jalur eskalasi ───────────────────────────────────────────────── */

export interface EscalationStep {
  level: number;
  trigger: string;
  forum: string;
  sla: string;
}

export const eskalasiPath: EscalationStep[] = [
  { level: 1, trigger: "Utilisasi limit ≥ 85% (near-limit)", forum: "Unit pemilik risiko + Divisi MR", sla: "Rencana aksi ≤ 14 hari" },
  { level: 2, trigger: "Limit breach", forum: "Komite Risiko (bulanan)", sla: "Remediasi ≤ 60 hari" },
  { level: 3, trigger: "Breach > 60 hari atau berdampak covenant", forum: "Rapat Direksi", sla: "Keputusan ≤ 30 hari" },
  { level: 4, trigger: "Breach material berkepanjangan / zero tolerance", forum: "Komite Pemantau Risiko Dekom", sla: "Pelaporan ≤ 7 hari" },
];

export const appetiteInsights: RiskInsight[] = [
  {
    insight:
      "4 breach aktif seluruhnya berada di sisi harga & biaya (gula, HPP CPO, piutang plasma) plus satu teknologi (patch SLA) — leverage & likuiditas justru sangat longgar (utilisasi ≤ 55%).",
    rekomendasi:
      "Gunakan headroom neraca untuk mendanai remediasi breach operasional (efisiensi HPP, restrukturisasi plasma) tanpa menunggu siklus RKAP.",
  },
  {
    insight:
      "Tren 6 bulan menunjukkan breach naik 2→4 dan near-limit 4→6 — deteriorasi gradual, bukan kejadian tunggal.",
    rekomendasi:
      "Naikkan frekuensi monitoring limit near-limit dari bulanan ke dwi-mingguan selama H2 2026.",
  },
  {
    insight:
      "2 breach telah melewati SLA remediasi 60 hari (HPP CPO sejak Jan, piutang plasma sejak Feb) — sesuai jalur eskalasi wajib naik ke Direksi.",
    rekomendasi:
      "Jadwal eskalasi Juli 2026 telah terlewat — agendakan pada Radirsus terdekat sebagai item overdue dengan opsi keputusan yang sudah dikuantifikasi.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region KOMODITAS-IKLIM — /risiko-kepatuhan/komoditas-iklim
   ══════════════════════════════════════════════════════════════════════ */

/** Angka harga kanonik — jangan hardcode tandingan. */
export const kiStats = {
  cpoAvgYtdRpKg: PEMASARAN.cpoAvgYtdRpKg, // 12.482
  cpoSpotRpKg: PEMASARAN.cpoKpbnSpotRpKg, // 13.680
  asumsiRkapCpoRpKg: ASUMSI_RKAP_CPO_RP_KG, // 13.500 — selaras krk-data
  gulaLelangRpKg: PEMASARAN.gulaLelangRpKg, // 14.850
  elNinoProbabilitasPct: RISIKO.elNinoProbabilitasPct, // 62
} as const;

export const kiKpi: RiskPageKpi[] = [
  {
    label: "Harga CPO Avg YTD",
    value: "Rp 12.482",
    valueSuffix: "/kg",
    sub: "Vs asumsi RKAP Rp 13.500/kg (-7,5%) · spot KPBN Rp 13.680",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Probabilitas El Nino H2",
    value: "62%",
    sub: "Konsensus BMKG/NOAA · ONI proyeksi +1,5 Sep 2026",
    subDanger: true,
    tone: "amber",
  },
  {
    label: "Potensi Dampak TBS",
    value: "-6,8%",
    sub: "Blend skenario moderat–kuat H2 2026",
    tone: "amber",
  },
  {
    label: "Hedging Coverage",
    value: "12%",
    sub: "Dari volume produksi H2 · usulan naik ke 20%",
    tone: "blue",
  },
  {
    label: "Harga Gula Lelang",
    value: "Rp 14.850",
    valueSuffix: "/kg",
    sub: "Di atas HAP Rp 14.500 · di bawah asumsi RKAP Rp 15.200",
    tone: "teal",
  },
];

/* ── CPO Price Band 24 bulan + forward curve ──────────────────────── */

export interface CpoPricePoint {
  month: string;
  /** Harga KPBN aktual (Rp/kg) — seri historis identik krk-data. */
  cpo?: number;
  /** Forward curve proyeksi (Rp/kg); Mei'26 diisi sebagai titik sambung. */
  forward?: number;
  /** Confidence band forward [bawah, atas]. */
  band?: [number, number];
}

export const cpoPriceBand: CpoPricePoint[] = [
  { month: "Jun'24", cpo: 11250 },
  { month: "Jul'24", cpo: 11480 },
  { month: "Agu'24", cpo: 11620 },
  { month: "Sep'24", cpo: 11540 },
  { month: "Okt'24", cpo: 11780 },
  { month: "Nov'24", cpo: 11930 },
  { month: "Des'24", cpo: 12140 },
  { month: "Jan'25", cpo: 12080 },
  { month: "Feb'25", cpo: 12210 },
  { month: "Mar'25", cpo: 12340 },
  { month: "Apr'25", cpo: 12460 },
  { month: "Mei'25", cpo: 12380 },
  { month: "Jun'25", cpo: 12290 },
  { month: "Jul'25", cpo: 12420 },
  { month: "Agu'25", cpo: 12550 },
  { month: "Sep'25", cpo: 12480 },
  { month: "Okt'25", cpo: 12690 },
  { month: "Nov'25", cpo: 12820 },
  { month: "Des'25", cpo: 12960 },
  { month: "Jan'26", cpo: 11980 },
  { month: "Feb'26", cpo: 12160 },
  { month: "Mar'26", cpo: 12450 },
  { month: "Apr'26", cpo: 12980 },
  { month: "Mei'26", cpo: 13680, forward: 13680, band: [13680, 13680] },
  { month: "Jun'26", forward: 13400, band: [13050, 13750] },
  { month: "Jul'26", forward: 13150, band: [12650, 13650] },
  { month: "Agu'26", forward: 12900, band: [12250, 13550] },
  { month: "Sep'26", forward: 12700, band: [11950, 13450] },
  { month: "Okt'26", forward: 12600, band: [11750, 13450] },
  { month: "Nov'26", forward: 12550, band: [11600, 13500] },
  { month: "Des'26", forward: 12500, band: [11450, 13550] },
];

/* ── Skenario El Nino ─────────────────────────────────────────────── */

export interface ElNinoRiskScenario {
  skenario: "Lemah" | "Moderat" | "Kuat";
  probabilitasPct: number;
  dampakProduksiH2Pct: number;
  dampakEbitdaRpT: number;
  respons: string;
}

/**
 * Total probabilitas El Nino = 62% (kiStats.elNinoProbabilitasPct); sisanya
 * 38% netral. Skenario Moderat (-6% / -Rp 1,9 T) identik agro-data;
 * "Kuat" adalah pecahan ekor dari skenario moderat agro (28% = 22% + 6%).
 * Blend moderat–kuat = (22×6,0 + 6×10,0) / 28 ≈ -6,8% (kiKpi).
 */
export const elNinoScenarios: ElNinoRiskScenario[] = [
  {
    skenario: "Lemah",
    probabilitasPct: 34,
    dampakProduksiH2Pct: -2,
    dampakEbitdaRpT: -0.6,
    respons: "Monitoring KRI curah hujan; prioritas air pada blok TBM & tanaman muda.",
  },
  {
    skenario: "Moderat",
    probabilitasPct: 22,
    dampakProduksiH2Pct: -6,
    dampakEbitdaRpT: -1.9,
    respons: "Aktivasi penuh water management 34 kebun; klaim asuransi parametrik regional pilot.",
  },
  {
    skenario: "Kuat",
    probabilitasPct: 6,
    dampakProduksiH2Pct: -10,
    dampakEbitdaRpT: -3.2,
    respons: "Revisi guidance produksi FY; realokasi capex non-kritis ke mitigasi air.",
  },
];

/* ── Anomali curah hujan per regional ─────────────────────────────── */

export interface RainfallAnomaly {
  regional: string;
  lokasi: string;
  /** Deviasi curah hujan 3 bulan terakhir vs normal (%). */
  anomaliPct: number;
  status: "Normal" | "Waspada" | "Defisit";
}

export const rainfallAnomaly: RainfallAnomaly[] = [
  { regional: "Regional 1", lokasi: "Sumut", anomaliPct: -8, status: "Waspada" },
  { regional: "Regional 2", lokasi: "Sumut & Aceh", anomaliPct: -6, status: "Waspada" },
  { regional: "Regional 3", lokasi: "Riau & Sumbar", anomaliPct: -14, status: "Defisit" },
  { regional: "Regional 4", lokasi: "Sumsel & Jambi", anomaliPct: -11, status: "Defisit" },
  { regional: "Regional 5", lokasi: "Kalimantan", anomaliPct: -4, status: "Normal" },
  { regional: "Regional 6", lokasi: "Sulawesi & Papua", anomaliPct: -2, status: "Normal" },
  { regional: "Regional 7", lokasi: "Jawa (tebu)", anomaliPct: -9, status: "Waspada" },
];

/* ── Tabel sensitivitas skenario komoditas ────────────────────────── */

export interface CommodityScenarioRow {
  variabel: string;
  pergerakan: string;
  dampak: string;
  catatan: string;
}

export const scenarioTable: CommodityScenarioRow[] = [
  {
    variabel: "Harga CPO internasional",
    pergerakan: "-USD 50/ton",
    dampak: "-Rp 2,3 T pendapatan/tahun",
    catatan: "Termasuk efek turunan PK & produk hilir; kurs Rp 16.250.",
  },
  {
    variabel: "Harga CPO KPBN",
    pergerakan: "-Rp 1.000/kg",
    dampak: "-Rp 1,9 T EBITDA/tahun",
    catatan: "Selaras sensitivitas risiko keuangan (krk-data).",
  },
  {
    variabel: "Harga gula lelang",
    pergerakan: "-Rp 500/kg",
    dampak: "-Rp 0,39 T pendapatan/tahun",
    catatan: "Basis produksi FY 780 rb ton.",
  },
  {
    variabel: "Kurs USD/IDR",
    pergerakan: "+Rp 500",
    dampak: "+Rp 0,31 T EBITDA/tahun (neto)",
    catatan: "Ekspor 22% vol CPO; sebagian teroffset input impor & utang USD 26%.",
  },
  {
    variabel: "Harga pupuk",
    pergerakan: "+10%",
    dampak: "-Rp 0,42 T EBITDA/tahun",
    catatan: "Pupuk ±18% dari HPP; kontrak semester belum full-year.",
  },
];

/* ── Risiko impor gula (compact) ──────────────────────────────────── */

export const sugarImportRisk = {
  kuotaImporNasionalJtTon: 4.6,
  tambahanDiusulkanJtTon: 0.7,
  potensiTekananHargaPct: -4.5,
  note: "Tambahan kuota impor H2 2026 sedang dibahas; bila terealisasi penuh, harga lelang berisiko turun ke kisaran Rp 14.200/kg — di bawah HAP.",
} as const;

/* ── Adaptasi iklim ───────────────────────────────────────────────── */

export interface ClimateAdaptationRow {
  program: string;
  cakupan: string;
  status: "Berjalan" | "Pilot" | "Perencanaan";
  investasi: string;
}

export const climateAdaptation: ClimateAdaptationRow[] = [
  { program: "Water management (embung, biopori, mulsa)", cakupan: "34 kebun prioritas", status: "Berjalan", investasi: "Rp 210 M" },
  { program: "Varietas/klon toleran kekeringan", cakupan: "Replanting 2026–2028", status: "Berjalan", investasi: "Dalam capex replanting" },
  { program: "Asuransi parametrik indeks curah hujan", cakupan: "2 regional pilot → usulan 6", status: "Pilot", investasi: "Premi Rp 28 M/tahun" },
  { program: "Stasiun cuaca & irigasi presisi tebu", cakupan: "17 PG (HGU tebu Jawa)", status: "Perencanaan", investasi: "Rp 85 M" },
];

/* ── Decision & insights ──────────────────────────────────────────── */

export const kiDecisions: RiskDecision[] = [
  {
    title: "Kebijakan Hedging CPO",
    situation: "Coverage 12% vs praktik peer 25–40%; forward curve H2 melandai di bawah asumsi RKAP.",
    decision: "Tetapkan kebijakan lindung nilai 20% volume produksi H2 dengan pagu biaya premi 0,8% nilai kontrak.",
    exposure: "±Rp 1,9 T EBITDA per Rp 1.000/kg",
    due: "Jul 2026",
    tone: "red",
  },
  {
    title: "Perluasan Asuransi Parametrik Iklim",
    situation: "Pilot 2 regional berjalan baik; 4 regional defisit/waspada belum tercakup menjelang puncak musim kering.",
    decision: "Setujui perluasan ke 6 regional prioritas dengan premi total Rp 28 M/tahun.",
    exposure: "Rp 1,9 T (skenario moderat)",
    due: "Agu 2026",
    tone: "amber",
  },
];

export const kiInsights: RiskInsight[] = [
  {
    insight:
      "Spot KPBN Rp 13.680 sudah di atas asumsi RKAP, tetapi rata-rata YTD masih Rp 12.482 — defisit harga H1 tidak bisa dikejar tanpa harga H2 bertahan > Rp 14.200.",
    rekomendasi:
      "Kunci sebagian harga saat spot tinggi: eksekusi hedging bertahap mulai Juli, jangan menunggu keputusan sekaligus 20%.",
  },
  {
    insight:
      "Regional 3 & 4 (defisit hujan -14% dan -11%) menyumbang porsi terbesar TBS grup — dampak El Nino tidak merata dan terkonsentrasi di aset produktif.",
    rekomendasi:
      "Prioritaskan alokasi water management & asuransi parametrik ke Regional 3–4 sebelum regional lain.",
  },
  {
    insight:
      "Risiko gula bersifat ganda: harga lelang di bawah asumsi RKAP dan usulan tambahan kuota impor 0,7 jt ton berpotensi menekan -4,5% lagi.",
    rekomendasi:
      "Amankan kontrak volume dengan industri mamin sebelum keputusan kuota impor H2 terbit.",
  },
];

/* #endregion */
