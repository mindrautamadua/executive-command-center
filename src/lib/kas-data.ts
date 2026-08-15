/**
 * Data statis halaman Arus Kas & Likuiditas (/keuangan/arus-kas).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export interface KasKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  tone: "blue" | "green" | "teal" | "amber" | "red";
}

export const kasKpi: KasKpi[] = [
  {
    label: "Posisi Kas",
    value: "Rp 7,9 T",
    sub: "2,3x minimum cash Rp 3,5 T",
    delta: "6,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    tone: "blue",
  },
  {
    label: "Arus Kas Operasi (OCF)",
    value: "Rp 4,6 T",
    sub: "YTD · 67% konversi EBITDA",
    delta: "11,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    tone: "green",
  },
  {
    label: "Free Cash Flow",
    value: "Rp 1,5 T",
    sub: "YTD · setelah capex Rp 3,1 T",
    delta: "8,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    tone: "teal",
  },
  {
    label: "Cash Conversion Cycle",
    value: "18 hari",
    sub: "DIO 39 · DSO 31 · DPO 52",
    delta: "-3 hari",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    tone: "amber",
  },
  {
    label: "DSO",
    value: "31 hari",
    sub: "Days Sales Outstanding",
    delta: "+2 hari",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Des 2025",
    tone: "red",
  },
  {
    label: "DPO",
    value: "52 hari",
    sub: "Days Payables Outstanding",
    delta: "+1 hari",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    tone: "green",
  },
];

/* ── 2. Cashflow Waterfall YTD (Rp T) ─────────────────────────────── */

export interface CashflowStep {
  label: string;
  /** Nilai langkah (Rp T); negatif = arus keluar. */
  value: number;
  type: "start" | "plus" | "minus" | "subtotal" | "total";
}

/** 6,8 + 4,6 − 3,1 (FCF 1,5) − 0,4 = saldo akhir 7,9. */
export const cashflowWaterfall: CashflowStep[] = [
  { label: "Saldo Awal (Des'25)", value: 6.8, type: "start" },
  { label: "Arus Kas Operasi", value: 4.6, type: "plus" },
  { label: "Arus Kas Investasi", value: -3.1, type: "minus" },
  { label: "Free Cash Flow", value: 1.5, type: "subtotal" },
  { label: "Arus Kas Pendanaan", value: -0.4, type: "minus" },
  { label: "Saldo Akhir (Mei'26)", value: 7.9, type: "total" },
];

/* ── 3. Liquidity Runway 13 Minggu ────────────────────────────────── */

/** Ambang minimum cash kebijakan treasury (Rp T). */
export const MINIMUM_CASH_RPT = 3.5;

export interface RunwayPoint {
  week: string;
  /** Proyeksi saldo kas akhir minggu (Rp T). */
  proyeksi: number;
}

/** Proyeksi 13 minggu ke depan dari posisi Rp 7,9 T; selalu di atas 3,5 T. */
export const liquidityRunway: RunwayPoint[] = [
  { week: "W+1", proyeksi: 7.6 },
  { week: "W+2", proyeksi: 7.2 },
  { week: "W+3", proyeksi: 6.8 },
  { week: "W+4", proyeksi: 6.5 },
  { week: "W+5", proyeksi: 6.9 },
  { week: "W+6", proyeksi: 6.4 },
  { week: "W+7", proyeksi: 6.0 },
  { week: "W+8", proyeksi: 5.7 },
  { week: "W+9", proyeksi: 6.1 },
  { week: "W+10", proyeksi: 5.8 },
  { week: "W+11", proyeksi: 5.5 },
  { week: "W+12", proyeksi: 5.9 },
  { week: "W+13", proyeksi: 6.3 },
];

export const runwayNote =
  "Titik terendah W+11 (Rp 5,5 T) — headroom Rp 2,0 T di atas minimum cash; pembayaran capex & pupuk H2 jadi penekan utama.";

/* ── 4. Working Capital Trend 12 bulan ────────────────────────────── */

export interface WorkingCapitalPoint {
  month: string;
  dso: number;
  dpo: number;
  dio: number;
}

/** Jun'25–Mei'26; berakhir DSO 31 · DPO 52 · DIO 39 (CCC 18 hari). */
export const workingCapitalTrend: WorkingCapitalPoint[] = [
  { month: "Jun'25", dso: 28, dpo: 49, dio: 43 },
  { month: "Jul'25", dso: 29, dpo: 50, dio: 42 },
  { month: "Agu'25", dso: 28, dpo: 50, dio: 41 },
  { month: "Sep'25", dso: 30, dpo: 51, dio: 42 },
  { month: "Okt'25", dso: 29, dpo: 51, dio: 40 },
  { month: "Nov'25", dso: 30, dpo: 50, dio: 41 },
  { month: "Des'25", dso: 29, dpo: 51, dio: 43 },
  { month: "Jan'26", dso: 30, dpo: 51, dio: 42 },
  { month: "Feb'26", dso: 31, dpo: 52, dio: 41 },
  { month: "Mar'26", dso: 30, dpo: 52, dio: 40 },
  { month: "Apr'26", dso: 31, dpo: 52, dio: 40 },
  { month: "Mei'26", dso: 31, dpo: 52, dio: 39 },
];

/* ── 5. Receivables Aging ─────────────────────────────────────────── */

export interface AgingBucket {
  bucket: string;
  /** Saldo piutang (Rp T). */
  valueRpT: number;
  /** Porsi terhadap total piutang (%). */
  pct: number;
  tone: "good" | "warn" | "bad";
}

/** Total piutang usaha Rp 3,4 T; bucket > 90 hari Rp 0,68 T (Rp 680 M). */
export const receivablesAging: AgingBucket[] = [
  { bucket: "Belum jatuh tempo (< 30 hari)", valueRpT: 1.62, pct: 47.6, tone: "good" },
  { bucket: "31-60 hari", valueRpT: 0.68, pct: 20.0, tone: "good" },
  { bucket: "61-90 hari", valueRpT: 0.42, pct: 12.4, tone: "warn" },
  { bucket: "> 90 hari", valueRpT: 0.68, pct: 20.0, tone: "bad" },
];

export interface TopDebtor {
  name: string;
  /** Saldo piutang (Rp M). */
  saldoRpM: number;
  /** Porsi bucket > 90 hari dari saldo debitur (%). */
  overduePct: number;
  keterangan: string;
}

export const topDebtors: TopDebtor[] = [
  { name: "Perum Bulog", saldoRpM: 620, overduePct: 34, keterangan: "Penyaluran gula SPHP; menunggu verifikasi tagihan." },
  { name: "ID Food Group", saldoRpM: 480, overduePct: 28, keterangan: "Offtake gula & tetes; renegosiasi termin berjalan." },
  { name: "Trader CPO Domestik A", saldoRpM: 390, overduePct: 12, keterangan: "Termin 30 hari, historis lancar." },
  { name: "Industri Refinery B", saldoRpM: 340, overduePct: 8, keterangan: "Kontrak jangka panjang CPO, jaminan bank garansi." },
  { name: "Distributor Gula C", saldoRpM: 260, overduePct: 41, keterangan: "Overdue tertinggi; opsi stop suplai sedang dikaji." },
];

/* ── 6. Payables Maturity ─────────────────────────────────────────── */

export interface PayableBucket {
  bucket: string;
  /** Kewajiban jatuh tempo (Rp T). */
  valueRpT: number;
  keterangan: string;
}

/** Utang usaha & akrual Rp 4,1 T menurut jadwal jatuh tempo. */
export const payablesMaturity: PayableBucket[] = [
  { bucket: "< 30 hari", valueRpT: 1.7, keterangan: "Pupuk, angkutan & upah borongan" },
  { bucket: "31-60 hari", valueRpT: 1.2, keterangan: "Kontraktor capex & sparepart pabrik" },
  { bucket: "61-90 hari", valueRpT: 0.7, keterangan: "Vendor jasa & pengadaan umum" },
  { bucket: "> 90 hari", valueRpT: 0.5, keterangan: "Retensi proyek & termin kontraktual" },
];

/* ── 7. Insight & Rekomendasi ─────────────────────────────────────── */

export interface KasInsight {
  insight: string;
  rekomendasi: string;
}

export const kasInsights: KasInsight[] = [
  {
    insight:
      "Konversi EBITDA ke OCF 67% — sehat, namun tergerus kenaikan piutang gula (DSO naik 2 hari sejak Des'25).",
    rekomendasi:
      "Eskalasi penagihan Bulog & ID Food ke level direksi; target DSO kembali ≤ 29 hari sebelum Q4.",
  },
  {
    insight:
      "Piutang > 90 hari Rp 680 M (20% total) terkonsentrasi di 3 debitur gula; risiko impairment bila melewati 180 hari.",
    rekomendasi:
      "Berlakukan credit limit & jaminan untuk distributor dengan overdue > 30%; bentuk provisi bertahap.",
  },
  {
    insight:
      "Runway 13 minggu tidak pernah menyentuh minimum cash, tetapi titik terendah (Rp 5,5 T) bertepatan dengan puncak pembayaran capex H2.",
    rekomendasi:
      "Jadwalkan penarikan fasilitas refinancing sebelum W+10 agar pembayaran capex tidak menekan kas operasional.",
  },
];
