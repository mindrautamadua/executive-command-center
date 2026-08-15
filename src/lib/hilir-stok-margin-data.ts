/**
 * Data statis halaman Hilirisasi (/pemasaran-penjualan/hilirisasi),
 * Stok & Inventori (/pemasaran-penjualan/stok-inventori),
 * Margin Komoditas (/pemasaran-penjualan/margin-komoditas), dan
 * Market Intelligence (/pemasaran-penjualan/market-intelligence).
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik dari src/lib/group-baseline.ts:
 * porsi hilir 14,8%, stok CPO 187 rb ton (24 hari jual), margin blended 24,1%,
 * HPP CPO Rp 8.950/kg.
 */

import { PEMASARAN, PRODUKSI } from "./group-baseline";

/* ═══════════════════ HILIRISASI ═══════════════════ */

/* ── 1. KPI Hilir ─────────────────────────────────────────────────── */

export interface HilirKpi {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "teal";
}

export const hilirKpi: HilirKpi[] = [
  {
    label: "Porsi Pendapatan Hilir",
    value: `${PEMASARAN.porsiHilirPct.toLocaleString("id-ID")}%`,
    sub: "Target 25% pada 2030",
    tone: "blue",
  },
  {
    label: "Minyak Goreng Nusakita",
    value: "61 rb ton",
    sub: "Volume YTD (nilai Rp 1,08 T)",
    tone: "green",
  },
  {
    label: "Alokasi FAME B40",
    value: "96 rb kL",
    sub: "FY 2026 · realisasi YTD 35,1 rb kL (87,8% alokasi YTD)",
    tone: "amber",
  },
  {
    label: "Utilisasi Refinery",
    value: "72%",
    sub: "Kapasitas terpasang — ruang ekspansi terbatas 2027",
    tone: "teal",
  },
];

/* ── 2. Tren pendapatan hilir + jalur target 2030 ─────────────────── */

export interface HilirTrendPoint {
  periode: string;
  /** Pendapatan hilir (Rp T). */
  nilaiRpT: number;
  /** Porsi terhadap total penjualan (%). */
  porsiPct: number;
}

export const hilirRevenueTrend: HilirTrendPoint[] = [
  { periode: "FY 2023", nilaiRpT: 4.6, porsiPct: 9.8 },
  { periode: "FY 2024", nilaiRpT: 5.9, porsiPct: 11.4 },
  { periode: "FY 2025", nilaiRpT: 6.7, porsiPct: 13.1 },
  { periode: "YTD Mei 2026", nilaiRpT: 2.94, porsiPct: 14.8 },
];

export interface HilirTargetPoint {
  tahun: string;
  targetPct: number;
}

export const hilirTargetPath: HilirTargetPoint[] = [
  { tahun: "2026", targetPct: 15.5 },
  { tahun: "2027", targetPct: 17.5 },
  { tahun: "2028", targetPct: 20.0 },
  { tahun: "2029", targetPct: 22.5 },
  { tahun: "2030", targetPct: 25.0 },
];

/* ── 3. Produk turunan ────────────────────────────────────────────── */

export interface ProdukTurunanRow {
  produk: string;
  volume: string;
  nilai: string;
  /** Margin unit bisnis hilir standalone (input CPO/PK pada harga pasar). */
  marginPct: number;
  keterangan: string;
}

/**
 * RBD Olein + Stearin + Migor + FAME = Rp 2,94 T (bucket "Produk Hilir");
 * PKO dibukukan pada bucket PK & PKO (Rp 1,54 T) — ditampilkan sebagai
 * referensi rantai turunan. Margin blended hilir = 9,8%.
 */
export const produkTurunan: ProdukTurunanRow[] = [
  { produk: "RBD Olein", volume: "73 rb ton", nilai: "Rp 1,01 T", marginPct: 8.4, keterangan: "Curah, buyer industri" },
  { produk: "RBD Stearin", volume: "31 rb ton", nilai: "Rp 0,38 T", marginPct: 6.2, keterangan: "Bahan baku oleokimia & margarin" },
  { produk: "Minyak Goreng Nusakita", volume: "61 rb ton", nilai: "Rp 1,08 T", marginPct: 13.6, keterangan: "Kemasan branded — margin tertinggi" },
  { produk: "Biodiesel (FAME)", volume: "35,1 rb kL", nilai: "Rp 0,47 T", marginPct: 7.1, keterangan: "Alokasi mandat B40" },
  { produk: "PKO", volume: "78 rb ton", nilai: "Rp 1,23 T", marginPct: 18.4, keterangan: "Dibukukan pada segmen PK & PKO" },
];

/* ── 4. Mandat biodiesel B40 ──────────────────────────────────────── */

export interface BiodieselBulan {
  bulan: string;
  /** Alokasi bulanan (ribu kL). */
  alokasi: number;
  /** Realisasi penyaluran (ribu kL). */
  realisasi: number;
  /** Harga indeks pasar (HIP) FAME, Rp/liter. */
  hipFame: number;
}

/** YTD: alokasi 40,0 rb kL, realisasi 35,1 rb kL (87,8%). */
export const biodieselMandate: BiodieselBulan[] = [
  { bulan: "Jan", alokasi: 8.0, realisasi: 6.8, hipFame: 13180 },
  { bulan: "Feb", alokasi: 8.0, realisasi: 7.0, hipFame: 13260 },
  { bulan: "Mar", alokasi: 8.0, realisasi: 7.2, hipFame: 13340 },
  { bulan: "Apr", alokasi: 8.0, realisasi: 6.9, hipFame: 13410 },
  { bulan: "Mei", alokasi: 8.0, realisasi: 7.2, hipFame: 13520 },
];

export const biodieselSummary = {
  alokasiFyRbKl: 96,
  alokasiYtdRbKl: 40.0,
  realisasiYtdRbKl: 35.1,
  serapanPct: 87.8,
  catatan:
    "Kendala serapan: jadwal uji mutu FAME & antrian loading terminal. Wacana B50 mulai 2027 berpotensi menaikkan alokasi ± 25%.",
} as const;

/* ── 5. Pipeline refinery / hilirisasi ────────────────────────────── */

export interface RefineryProject {
  proyek: string;
  lokasi: string;
  capex: string;
  progressPct: number;
  cod: string;
  status: "On Track" | "Delayed" | "Kajian";
}

export const refineryPipeline: RefineryProject[] = [
  { proyek: "Ekspansi Refinery Dumai", lokasi: "Riau", capex: "Rp 2,4 T", progressPct: 38, cod: "Q4 2027", status: "On Track" },
  { proyek: "Fraksionasi Sei Mangkei", lokasi: "Sumut", capex: "Rp 0,9 T", progressPct: 54, cod: "Q2 2027", status: "On Track" },
  { proyek: "Pabrik Migor Kemasan II", lokasi: "Jawa Barat", capex: "Rp 0,6 T", progressPct: 61, cod: "Q1 2027", status: "On Track" },
  { proyek: "Oleokimia Dasar Kuala Tanjung", lokasi: "Sumut", capex: "Rp 1,8 T", progressPct: 12, cod: "2029", status: "Kajian" },
];

/* ── 6. Margin uplift rantai nilai (Rp/kg) ────────────────────────── */

export interface MarginUpliftRow {
  tahap: string;
  /** ASP Rp/kg. */
  aspRpKg: number;
  /** Total biaya terintegrasi dari HPP CPO kebun (Rp 8.950) + olah/kemas. */
  biayaRpKg: number;
  /** Margin terintegrasi Rp/kg. */
  marginRpKg: number;
  /** Tambahan margin vs CPO curah, Rp/kg. */
  upliftRpKg: number;
}

/**
 * Perspektif terintegrasi (dari HPP CPO kebun Rp 8.950/kg) — berbeda dengan
 * marginPct produkTurunan yang memakai transfer price pasar.
 */
export const marginUplift: MarginUpliftRow[] = [
  { tahap: "CPO Curah", aspRpKg: 12482, biayaRpKg: 8950, marginRpKg: 3532, upliftRpKg: 0 },
  { tahap: "RBD Olein", aspRpKg: 13900, biayaRpKg: 9920, marginRpKg: 3980, upliftRpKg: 448 },
  { tahap: "Migor Kemasan", aspRpKg: 17700, biayaRpKg: 12980, marginRpKg: 4720, upliftRpKg: 1188 },
];

/* ── 7. Insight hilir ─────────────────────────────────────────────── */

export interface DimInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const hilirInsights: DimInsight[] = [
  {
    title: "Uplift migor +Rp 1.188/kg vs CPO curah",
    text: "Setiap kg CPO yang dikonversi ke migor kemasan menambah margin terintegrasi Rp 1.188/kg. Kapasitas kemasan menjadi bottleneck — Pabrik Migor II COD Q1 2027.",
    tone: "green",
  },
  {
    title: "Jalur ke 25% (2030) butuh akselerasi",
    text: "Porsi hilir 14,8% vs jalur target 15,5% akhir 2026. Tanpa COD refinery Dumai tepat waktu, gap terhadap jalur 2027 (17,5%) melebar.",
    tone: "amber",
  },
  {
    title: "Serapan FAME di bawah alokasi",
    text: "Realisasi B40 87,8% dari alokasi YTD karena antrian uji mutu & loading. Perbaikan turnaround terminal menaikkan serapan ± 4 rb kL/kuartal.",
    tone: "amber",
  },
];

/* ═══════════════════ STOK & INVENTORI ═══════════════════ */

/* ── 8. KPI Stok ──────────────────────────────────────────────────── */

export interface StokKpi {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "teal";
}

export const stokKpi: StokKpi[] = [
  {
    label: "Stok CPO",
    value: `${PEMASARAN.stokCpoRbTon} rb ton`,
    sub: `${PEMASARAN.stokCpoHariJual} hari jual (band 15-30 hari)`,
    tone: "blue",
  },
  { label: "Stok Gula", value: "96 rb ton", sub: "Jelang puncak musim giling", tone: "amber" },
  { label: "Stok Karet", value: "12,4 rb ton", sub: "SIR-20 & grade premium", tone: "teal" },
  { label: "Nilai Total Inventori", value: "Rp 4,2 T", sub: "Seluruh komoditas & produk hilir", tone: "green" },
];

/* ── 9. Tren stok CPO vs band hari-jual ───────────────────────────── */

export interface StokTrendPoint {
  minggu: string;
  /** Stok CPO dalam hari jual. */
  hariJual: number;
  /** Band kebijakan. */
  bandMin: number;
  bandMax: number;
}

export const stokTrendHarian: StokTrendPoint[] = [
  { minggu: "M1 Mar", hariJual: 21, bandMin: 15, bandMax: 30 },
  { minggu: "M2 Mar", hariJual: 24, bandMin: 15, bandMax: 30 },
  { minggu: "M3 Mar", hariJual: 26, bandMin: 15, bandMax: 30 },
  { minggu: "M4 Mar", hariJual: 28, bandMin: 15, bandMax: 30 },
  { minggu: "M1 Apr", hariJual: 31, bandMin: 15, bandMax: 30 },
  { minggu: "M2 Apr", hariJual: 29, bandMin: 15, bandMax: 30 },
  { minggu: "M3 Apr", hariJual: 27, bandMin: 15, bandMax: 30 },
  { minggu: "M4 Apr", hariJual: 25, bandMin: 15, bandMax: 30 },
  { minggu: "M1 Mei", hariJual: 26, bandMin: 15, bandMax: 30 },
  { minggu: "M2 Mei", hariJual: 24, bandMin: 15, bandMax: 30 },
  { minggu: "M3 Mei", hariJual: 25, bandMin: 15, bandMax: 30 },
  { minggu: "M4 Mei", hariJual: 24, bandMin: 15, bandMax: 30 },
];

export const stokTrendNote =
  "Stok sempat menembus 31 hari (awal April) saat harga terkoreksi — dinormalkan via tender tambahan. Posisi akhir Mei 24 hari, tengah band kebijakan.";

/* ── 10. Stok by lokasi (23 terminal — baseline PRODUKSI.terminal) ── */

export interface StokLokasiRow {
  regional: string;
  /** Jumlah terminal/tangki timbun; total = 23. */
  terminal: number;
  /** Stok CPO (ribu ton); total = 187. */
  cpoRbTon: number;
  utilisasiPct: number;
}

export const stokByLokasi: StokLokasiRow[] = [
  { regional: "Regional Sumut (incl. Belawan)", terminal: 7, cpoRbTon: 62, utilisasiPct: 74 },
  { regional: "Regional Riau (incl. Dumai)", terminal: 4, cpoRbTon: 41, utilisasiPct: 81 },
  { regional: "Regional Sumbagsel", terminal: 5, cpoRbTon: 38, utilisasiPct: 68 },
  { regional: "Regional Kalimantan", terminal: 3, cpoRbTon: 24, utilisasiPct: 72 },
  { regional: "Terminal Jawa", terminal: 2, cpoRbTon: 14, utilisasiPct: 63 },
  { regional: "Regional Sulawesi", terminal: 2, cpoRbTon: 8, utilisasiPct: 55 },
];

export const stokByLokasiTotal = {
  terminal: PRODUKSI.terminal,
  cpoRbTon: PEMASARAN.stokCpoRbTon,
} as const;

/* ── 11. Aging inventory gula & karet ─────────────────────────────── */

export interface AgingBucket {
  label: string;
  /** Ribu ton. */
  rbTon: number;
  pct: number;
}

export interface AgingRow {
  komoditas: string;
  totalRbTon: number;
  buckets: AgingBucket[];
}

export const agingInventory: AgingRow[] = [
  {
    komoditas: "Gula",
    totalRbTon: 96,
    buckets: [
      { label: "< 30 hari", rbTon: 41, pct: 43 },
      { label: "30-60 hari", rbTon: 28, pct: 29 },
      { label: "60-90 hari", rbTon: 17, pct: 18 },
      { label: "> 90 hari", rbTon: 10, pct: 10 },
    ],
  },
  {
    komoditas: "Karet",
    totalRbTon: 12.4,
    buckets: [
      { label: "< 30 hari", rbTon: 5.2, pct: 42 },
      { label: "30-60 hari", rbTon: 3.8, pct: 31 },
      { label: "60-90 hari", rbTon: 2.1, pct: 17 },
      { label: "> 90 hari", rbTon: 1.3, pct: 10 },
    ],
  },
];

export const agingNote =
  "Gula > 90 hari (10 rb ton) diprioritaskan lepas sebelum puncak giling menekan harga; karet aging didominasi grade menunggu kontrak premium.";

/* ── 12. Stok vs harga (keputusan tahan/lepas) ────────────────────── */

export const stokVsHarga = {
  spotLabel: "Rp 13.680/kg",
  avgYtdLabel: "Rp 12.482/kg (ASP YTD)",
  posisi: "Lepas Bertahap",
  narasi:
    "Spot KPBN Rp 13.680/kg berada Rp 1.198 di atas ASP YTD. Melepas 60 rb ton stok CPO pada level spot memberi tambahan margin ± Rp 72 M vs harga rata-rata, sekaligus menurunkan stok ke ± 16 hari (batas bawah band).",
  skenario: [
    { label: "Lepas 60 rb ton di spot", dampak: "+Rp 72 M margin · stok → 16 hari", tone: "good" },
    { label: "Tahan penuh 1 bulan", dampak: "Upside bila reli lanjut; risiko koreksi −Rp 90 M (bear case)", tone: "bad" },
  ] as { label: string; dampak: string; tone: "good" | "bad" }[],
};

/* ── 13. Dampak working capital ───────────────────────────────────── */

export const workingCapitalImpact = {
  nilaiStok: "Rp 4,2 T",
  bungaPembiayaan: "9,0% p.a.",
  carryingCostPerBulan: "Rp 31,5 M",
  narasi:
    "Inventori Rp 4,2 T menyerap modal kerja dengan carrying cost ± Rp 31,5 M/bulan. Menurunkan stok CPO 5 hari jual (± 39 rb ton) melepas kas ± Rp 0,49 T.",
} as const;

export const stokInsights: DimInsight[] = [
  {
    title: "Stok CPO di tengah band",
    text: "24 hari jual — sehat, namun 33% stok terkonsentrasi di Regional Sumut. Diversifikasi titik lepas mengurangi risiko logistik satu koridor.",
    tone: "blue",
  },
  {
    title: "Gula: jendela lepas menyempit",
    text: "96 rb ton stok gula menghadapi puncak giling Mei-Nov; 10 rb ton berusia > 90 hari. Tunda lepas berisiko diskon Rp 300-450/kg di Q4.",
    tone: "amber",
  },
  {
    title: "Peluang monetisasi rally",
    text: "Melepas 60 rb ton CPO di spot menambah ± Rp 72 M margin dan Rp 0,75 T kas — selaras rekomendasi forward cover 38%.",
    tone: "green",
  },
];

/* ═══════════════════ MARGIN KOMODITAS ═══════════════════ */

/* ── 14. KPI Margin ───────────────────────────────────────────────── */

export interface MarginKpi {
  label: string;
  value: string;
  sub: string;
  tone: "green" | "amber" | "red" | "blue" | "teal";
}

export const marginKpi: MarginKpi[] = [
  { label: "Margin Blended", value: `${PEMASARAN.marginBlendedPct.toLocaleString("id-ID")}%`, sub: "Seluruh komoditas · +1,2 pts YoY", tone: "green" },
  { label: "CPO", value: "28,3%", sub: "ASP 12.482 − HPP 8.950", tone: "green" },
  { label: "Gula", value: "22,8%", sub: "ASP 14.560 − HPP 11.240", tone: "teal" },
  { label: "Karet", value: "3,6%", sub: "Margin tipis — ASP 18.650 vs HPP 17.980", tone: "amber" },
  { label: "Teh", value: "−3,2%", sub: "Merugi — HPP 27.245 > ASP 26.400", tone: "red" },
  { label: "Produk Hilir", value: "9,8%", sub: "Standalone (transfer price pasar)", tone: "blue" },
];

/* ── 15. Margin waterfall per komoditas (Rp/kg) ───────────────────── */

export interface MarginWaterfallRow {
  komoditas: string;
  aspRpKg: number;
  /** HPP kanonik: CPO 8.950 (baseline), gula 11.240, karet 17.980. */
  hppRpKg: number;
  biayaJualRpKg: number;
  /** Margin bersih per kg = ASP − HPP − biaya jual. */
  marginBersihRpKg: number;
  /** Margin bruto (ASP − HPP) / ASP. */
  marginBrutoPct: number;
}

export const marginWaterfall: MarginWaterfallRow[] = [
  { komoditas: "CPO", aspRpKg: 12482, hppRpKg: PRODUKSI.hppCpoRpKg, biayaJualRpKg: 310, marginBersihRpKg: 3222, marginBrutoPct: 28.3 },
  { komoditas: "Gula", aspRpKg: 14560, hppRpKg: 11240, biayaJualRpKg: 380, marginBersihRpKg: 2940, marginBrutoPct: 22.8 },
  { komoditas: "Karet", aspRpKg: 18650, hppRpKg: 17980, biayaJualRpKg: 420, marginBersihRpKg: 250, marginBrutoPct: 3.6 },
  { komoditas: "Teh", aspRpKg: 26400, hppRpKg: 27245, biayaJualRpKg: 610, marginBersihRpKg: -1455, marginBrutoPct: -3.2 },
];

/* ── 16. Tren margin bruto bulanan per komoditas (%) ──────────────── */

export interface MarginTrendPoint {
  bulan: string;
  cpo: number;
  gula: number;
  karet: number;
  hilir: number;
}

/** CPO mengikuti ASP bulanan vs HPP 8.950 — rata-rata tertimbang 28,3%. */
export const marginTrend: MarginTrendPoint[] = [
  { bulan: "Jan", cpo: 23.0, gula: 21.8, karet: 2.8, hilir: 9.2 },
  { bulan: "Feb", cpo: 26.5, gula: 22.1, karet: 3.1, hilir: 9.5 },
  { bulan: "Mar", cpo: 28.8, gula: 22.4, karet: 3.4, hilir: 9.8 },
  { bulan: "Apr", cpo: 27.5, gula: 22.9, karet: 3.6, hilir: 9.9 },
  { bulan: "Mei", cpo: 34.6, gula: 23.8, karet: 4.8, hilir: 10.3 },
];

/* ── 17. Margin matrix (scatter: volume × margin, bubble = nilai) ─── */

export interface MarginMatrixRow {
  komoditas: string;
  volumeRbTon: number;
  marginPct: number;
  /** Nilai penjualan Rp T (ukuran bubble); selaras revenueByKomoditas. */
  nilaiRpT: number;
}

export const marginMatrix: MarginMatrixRow[] = [
  { komoditas: "CPO", volumeRbTon: 968, marginPct: 28.3, nilaiRpT: 12.08 },
  { komoditas: "PK & PKO", volumeRbTon: 226, marginPct: 32.4, nilaiRpT: 1.54 },
  { komoditas: "Gula", volumeRbTon: 117, marginPct: 22.8, nilaiRpT: 1.71 },
  { komoditas: "Tetes", volumeRbTon: 62, marginPct: 45.0, nilaiRpT: 0.09 },
  { komoditas: "Karet", volumeRbTon: 46.1, marginPct: 3.6, nilaiRpT: 0.86 },
  { komoditas: "Teh", volumeRbTon: 10.2, marginPct: -3.2, nilaiRpT: 0.27 },
  { komoditas: "Produk Hilir", volumeRbTon: 196, marginPct: 9.8, nilaiRpT: 2.94 },
];

/* ── 18. Komoditas merugi / margin tipis ──────────────────────────── */

export interface OpsiPenanganan {
  opsi: string;
  dampak: string;
  horizon: string;
}

export interface KomoditasMerugiRow {
  komoditas: string;
  marginPct: number;
  akarMasalah: string[];
  opsi: OpsiPenanganan[];
  rekomendasi: string;
}

export const komoditasMerugi: KomoditasMerugiRow[] = [
  {
    komoditas: "Teh",
    marginPct: -3.2,
    akarMasalah: [
      "HPP Rp 27.245/kg > ASP Rp 26.400/kg — rugi Rp 845/kg sebelum biaya jual",
      "Biaya petik manual ± 55% dari HPP; produktivitas pemetik rendah",
      "Harga teh global lemah, mix grade premium baru 18%",
    ],
    opsi: [
      { opsi: "Efisiensi — mekanisasi petik & konsolidasi pabrik", dampak: "HPP −8% (± Rp 2.180/kg)", horizon: "12-18 bulan" },
      { opsi: "Konversi kebun marginal ke komoditas lain", dampak: "Stop-loss ± Rp 60 M/tahun", horizon: "24-36 bulan" },
      { opsi: "Divestasi / KSO kebun teh non-inti", dampak: "Pelepasan modal + kas masuk", horizon: "18-24 bulan" },
    ],
    rekomendasi: "Kombinasi: mekanisasi petik di kebun inti + KSO selektif 5 kebun non-inti; naikkan mix premium ke 30%.",
  },
  {
    komoditas: "Karet",
    marginPct: 3.6,
    akarMasalah: [
      "Margin bersih hanya Rp 250/kg setelah biaya jual — sangat sensitif harga",
      "HPP Rp 17.980/kg didominasi biaya sadap; hasil per penyadap rendah",
      "Porsi grade premium (SIR-3CV/RSS) baru 21% dari penjualan",
    ],
    opsi: [
      { opsi: "Shift mix ke grade premium SIR-3CV", dampak: "ASP +Rp 600-900/kg pada volume premium", horizon: "6-12 bulan" },
      { opsi: "Efisiensi sadap (stimulan & rute)", dampak: "HPP −4% (± Rp 720/kg)", horizon: "12 bulan" },
      { opsi: "Konversi areal tidak ekonomis ke sawit", dampak: "Realokasi ke margin 28%", horizon: "> 36 bulan" },
    ],
    rekomendasi: "Prioritas mix premium + efisiensi sadap; kaji konversi areal karet tua pada siklus replanting.",
  },
];

/* ── 19. Margin by subholding ─────────────────────────────────────── */

export interface MarginSubholdingRow {
  name: string;
  marginPct: number;
  /** Nilai penjualan Rp T — selaras salesBySubholding. */
  nilaiRpT: number;
  catatan: string;
}

/** Rata-rata tertimbang = 24,1% (margin blended baseline). */
export const marginBySubholding: MarginSubholdingRow[] = [
  { name: "PalmCo", marginPct: 26.8, nilaiRpT: 14.6, catatan: "Ditopang CPO 28,3% & PK/PKO 32,4%; hilir mendilusi" },
  { name: "SGN (SugarCo)", marginPct: 21.6, nilaiRpT: 3.6, catatan: "Gula 22,8%; tetes margin tinggi, volume kecil" },
  { name: "PTPN I (SupportingCo)", marginPct: 5.9, nilaiRpT: 1.7, catatan: "Terbebani teh merugi & karet margin tipis" },
];

export const marginInsights: DimInsight[] = [
  {
    title: "Rally memperlebar margin CPO",
    text: "Margin bruto CPO Mei mencapai 34,6% (ASP 13.687 vs HPP 8.950). Setiap Rp 100/kg kenaikan ASP ± Rp 97 M margin tahunan pada volume saat ini.",
    tone: "green",
  },
  {
    title: "Teh merugi Rp 845/kg",
    text: "Satu-satunya komoditas bermargin negatif; eksposur nilai kecil (Rp 0,27 T) namun menggerus margin PTPN I ke 5,9%. Keputusan struktural diperlukan 2026.",
    tone: "red",
  },
  {
    title: "PK/PKO penyumbang margin tertinggi",
    text: "Margin 32,4% didorong reli harga PKO (+7,5% vs Des). Optimalkan recovery kernel di PKS untuk menambah volume bucket ini.",
    tone: "blue",
  },
];

/* ═══════════════════ MARKET INTELLIGENCE ═══════════════════ */

/* ── 20. KPI MI ───────────────────────────────────────────────────── */

export interface MiKpi {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "red";
}

export const miKpi: MiKpi[] = [
  { label: "Sinyal Aktif", value: "18", sub: "8 ditampilkan — prioritas dampak", tone: "blue" },
  { label: "Sentimen CPO", value: "Bullish", sub: "Konsensus 30 hari", tone: "green" },
  { label: "Stok Global Sawit", value: "4,1 jt ton", sub: "Pelaporan utama · −8% YoY", tone: "amber" },
  { label: "Produksi Malaysia", value: "−3%", sub: "YoY — cuaca kering Semenanjung", tone: "red" },
];

/* ── 21. Signal feed ──────────────────────────────────────────────── */

export interface MiSignal {
  tanggal: string;
  judul: string;
  sumber: string;
  tone: "Bullish" | "Bearish" | "Netral";
  dampak: string;
  kategori: "Kebijakan" | "Cuaca" | "Supply-Demand" | "Regulasi" | "Kompetitor";
}

export const signalFeed: MiSignal[] = [
  {
    tanggal: "29 Mei 2026",
    judul: "India memangkas bea masuk minyak nabati 5 pts",
    sumber: "Solvent Extractors' Association",
    tone: "Bullish",
    dampak: "Permintaan impor India (34% ekspor grup) menguat 2-3 bulan ke depan.",
    kategori: "Kebijakan",
  },
  {
    tanggal: "27 Mei 2026",
    judul: "Curah hujan Semenanjung Malaysia 32% di bawah normal",
    sumber: "MET Malaysia / MPOB",
    tone: "Bullish",
    dampak: "Produksi Malaysia −3% YoY; stok MPOB berisiko turun di bawah 1,6 jt ton.",
    kategori: "Cuaca",
  },
  {
    tanggal: "22 Mei 2026",
    judul: "Kajian resmi B50 mulai 2027 dibuka pemerintah",
    sumber: "Kemenko Perekonomian / ESDM",
    tone: "Bullish",
    dampak: "Serapan domestik naik struktural ± 3 jt ton nasional bila diberlakukan.",
    kategori: "Kebijakan",
  },
  {
    tanggal: "19 Mei 2026",
    judul: "EUDR enforcement penuh dikonfirmasi Desember 2026",
    sumber: "Komisi Eropa",
    tone: "Netral",
    dampak: "Ekspor tujuan UE wajib geolokasi penuh; readiness grup 78/100 — gap dokumen plasma.",
    kategori: "Regulasi",
  },
  {
    tanggal: "15 Mei 2026",
    judul: "Stok pelaporan utama sawit turun ke 4,1 jt ton",
    sumber: "MPOB / GAPKI",
    tone: "Bullish",
    dampak: "Terendah 3 tahun; menopang struktur harga H2 2026.",
    kategori: "Supply-Demand",
  },
  {
    tanggal: "12 Mei 2026",
    judul: "Panen kedelai Brasil rekor 172 jt ton",
    sumber: "CONAB",
    tone: "Bearish",
    dampak: "Spread CPO–soyoil menyempit; membatasi upside Rotterdam di atas USD 1.150.",
    kategori: "Supply-Demand",
  },
  {
    tanggal: "8 Mei 2026",
    judul: "Wacana revisi tarif pungutan ekspor BPDPKS untuk pendanaan B50",
    sumber: "BPDPKS / media",
    tone: "Bearish",
    dampak: "Kenaikan pungutan menekan net-back ekspor; domestik relatif diuntungkan.",
    kategori: "Regulasi",
  },
  {
    tanggal: "5 Mei 2026",
    judul: "HET gula konsumsi dikaji naik oleh Badan Pangan",
    sumber: "Bapanas",
    tone: "Bullish",
    dampak: "Ruang perbaikan harga lelang gula SGN di H2; upside RKAP gula.",
    kategori: "Kebijakan",
  },
];

/* ── 22. Competitor benchmark ─────────────────────────────────────── */

export interface CompetitorRow {
  perusahaan: string;
  /** ASP CPO Rp/kg (YTD, estimasi publik). */
  aspCpoRpKg: number;
  /** Yield TBS ton/ha. */
  yieldTbsTonHa: number;
  /** Margin bruto CPO (%). */
  marginCpoPct: number;
  catatan: string;
}

/** Baris PTPN memakai angka baseline (ASP 12.482, yield 21,9, margin 28,3). */
export const competitorBench: CompetitorRow[] = [
  { perusahaan: "PTPN Group", aspCpoRpKg: 12482, yieldTbsTonHa: PRODUKSI.yieldTbsTonHa, marginCpoPct: 28.3, catatan: "HPP Rp 8.950/kg — kompetitif; yield tertinggal swasta" },
  { perusahaan: "Astra Agro Lestari", aspCpoRpKg: 12560, yieldTbsTonHa: 23.4, marginCpoPct: 26.1, catatan: "Yield unggul; profil kebun lebih tua" },
  { perusahaan: "SMART (Sinar Mas Agro)", aspCpoRpKg: 12610, yieldTbsTonHa: 24.0, marginCpoPct: 24.8, catatan: "Integrasi hilir terdalam — margin hulu terdilusi" },
  { perusahaan: "Lonsum", aspCpoRpKg: 12390, yieldTbsTonHa: 22.6, marginCpoPct: 27.4, catatan: "Basis biaya rendah, skala lebih kecil" },
];

/* ── 23. Global supply-demand ─────────────────────────────────────── */

export interface SupplyDemandRow {
  periode: string;
  /** Produksi minyak sawit global (jt ton). */
  produksi: number;
  /** Konsumsi global (jt ton). */
  konsumsi: number;
  /** Stok akhir pelaporan utama MPOB + GAPKI (jt ton). */
  stokAkhir: number;
}

export const globalSupplyDemand: SupplyDemandRow[] = [
  { periode: "2023/24", produksi: 78.4, konsumsi: 78.0, stokAkhir: 4.9 },
  { periode: "2024/25", produksi: 79.2, konsumsi: 79.6, stokAkhir: 4.5 },
  { periode: "2025/26E", produksi: 80.1, konsumsi: 80.5, stokAkhir: 4.1 },
];

export const globalSupplyDemandNote =
  "Dua musim defisit beruntun (konsumsi > produksi) menurunkan stok pelaporan utama ke 4,1 jt ton — struktur pasar mendukung harga.";

/* ── 24. Policy watch ─────────────────────────────────────────────── */

export interface PolicyWatchRow {
  kebijakan: string;
  status: string;
  dampak: string;
  kesiapan: string;
  tone: "red" | "amber" | "green";
}

export const policyWatch: PolicyWatchRow[] = [
  {
    kebijakan: "Pungutan Ekspor BPDPKS",
    status: "Berlaku — wacana revisi tarif",
    dampak: "Beban Rp 0,64 T YTD; kenaikan tarif menekan net-back ekspor",
    kesiapan: "Skenario tarif +25% telah dimodelkan Treasury",
    tone: "amber",
  },
  {
    kebijakan: "HET Gula Konsumsi",
    status: "Berlaku — dikaji naik",
    dampak: "Membatasi upside lelang; revisi naik = peluang SGN",
    kesiapan: "Stok siap lepas bila HET direvisi",
    tone: "amber",
  },
  {
    kebijakan: "EUDR",
    status: "Enforcement Des 2026",
    dampak: "11% ekspor (Belanda) wajib traceability penuh",
    kesiapan: "Readiness 78/100 — gap geolokasi plasma (link ESG)",
    tone: "red",
  },
  {
    kebijakan: "Mandat B40 → kajian B50",
    status: "B40 berjalan; B50 dikaji 2027",
    dampak: "Alokasi FAME grup 96 rb kL; B50 menambah ± 25%",
    kesiapan: "Kontrak off-take jangka menengah diusulkan ke BOD",
    tone: "green",
  },
];

/* ── 25. Insight MI ───────────────────────────────────────────────── */

export const miInsights: DimInsight[] = [
  {
    title: "Struktur pasar mendukung H2",
    text: "Defisit supply-demand dua musim, stok 4,1 jt ton, dan produksi Malaysia −3% — konsensus bullish. Gunakan momentum untuk menaikkan forward cover ke 38%.",
    tone: "green",
  },
  {
    title: "Kedelai Brasil = pembatas upside",
    text: "Rekor panen 172 jt ton menyempitkan spread CPO–soyoil; skenario bull Rotterdam di atas USD 1.150 berprobabilitas rendah tanpa gangguan supply baru.",
    tone: "amber",
  },
  {
    title: "Regulasi domestik dua arah",
    text: "Wacana kenaikan pungutan BPDPKS (bearish ekspor) datang bersamaan kajian B50 (bullish domestik) — mix penjualan domestik-ekspor perlu direview per kuartal.",
    tone: "blue",
  },
];
