/**
 * Data statis halaman Kontrak & Komitmen (/pemasaran-penjualan/kontrak-komitmen)
 * dan Ekspor & Buyer (/pemasaran-penjualan/ekspor-buyer).
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik dari src/lib/group-baseline.ts
 * (ekspor 22% volume CPO = 213 rb ton dari 968 rb ton terjual).
 */

import { PEMASARAN } from "./group-baseline";

/* ═══════════════════ KONTRAK & KOMITMEN ═══════════════════ */

/* ── 1. KPI ───────────────────────────────────────────────────────── */

export interface KontrakKpi {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "teal";
}

export const kontrakKpi: KontrakKpi[] = [
  { label: "Kontrak Aktif", value: "214", sub: "Seluruh komoditas", tone: "blue" },
  { label: "Committed H2 2026", value: "32%", sub: "Dari proyeksi produksi CPO H2 (batas maks 40%)", tone: "amber" },
  { label: "Tender KPBN Diikuti", value: "62", sub: "YTD 2026", tone: "teal" },
  { label: "Premium Rata-rata", value: "+Rp 45/kg", sub: "ASP vs benchmark KPBN YTD", tone: "green" },
];

/* ── 2. Forward Coverage H2 (Jul–Des) ─────────────────────────────── */

export interface ForwardCoverPoint {
  bulan: string;
  /** Volume CPO committed (ribu ton). */
  committed: number;
  /** Volume belum terjual/terkontrak (ribu ton). */
  uncommitted: number;
  /** Proyeksi produksi CPO (ribu ton) = committed + uncommitted. */
  produksi: number;
}

/** Total H2: produksi 1.334 rb ton, committed 427 rb ton = 32,0%. */
export const forwardCoverage: ForwardCoverPoint[] = [
  { bulan: "Jul", committed: 118, uncommitted: 114, produksi: 232 },
  { bulan: "Agu", committed: 96, uncommitted: 145, produksi: 241 },
  { bulan: "Sep", committed: 82, uncommitted: 156, produksi: 238 },
  { bulan: "Okt", committed: 62, uncommitted: 164, produksi: 226 },
  { bulan: "Nov", committed: 41, uncommitted: 167, produksi: 208 },
  { bulan: "Des", committed: 28, uncommitted: 161, produksi: 189 },
];

export const forwardCoverageSummary = {
  committedPct: 32.0,
  committedRbTon: 427,
  produksiH2RbTon: 1334,
  batasMaksPct: 40,
} as const;

/* ── 3. Tender KPBN terakhir ──────────────────────────────────────── */

export interface TenderRow {
  tanggal: string;
  /** Volume ditenderkan (ribu ton). */
  volumeRbTon: number;
  /** Harga dasar KPBN, Rp/kg. */
  hargaDasar: number;
  /** Harga terbentuk, Rp/kg. */
  hargaTerbentuk: number;
  /** Premium terbentuk vs harga dasar, Rp/kg. */
  premium: number;
}

export const tenderKpbn: TenderRow[] = [
  { tanggal: "27 Mei 2026", volumeRbTon: 12.5, hargaDasar: 13560, hargaTerbentuk: 13680, premium: 120 },
  { tanggal: "20 Mei 2026", volumeRbTon: 15.0, hargaDasar: 13340, hargaTerbentuk: 13415, premium: 75 },
  { tanggal: "13 Mei 2026", volumeRbTon: 12.5, hargaDasar: 13180, hargaTerbentuk: 13240, premium: 60 },
  { tanggal: "6 Mei 2026", volumeRbTon: 10.0, hargaDasar: 13020, hargaTerbentuk: 13105, premium: 85 },
  { tanggal: "29 Apr 2026", volumeRbTon: 12.5, hargaDasar: 12480, hargaTerbentuk: 12530, premium: 50 },
  { tanggal: "22 Apr 2026", volumeRbTon: 15.0, hargaDasar: 12310, hargaTerbentuk: 12395, premium: 85 },
];

/* ── 4. Maturity kontrak per kuartal ──────────────────────────────── */

export interface MaturityRow {
  kuartal: string;
  /** Jumlah kontrak jatuh delivery pada kuartal tsb. */
  kontrak: number;
  /** Nilai kontrak (Rp T). */
  nilaiRpT: number;
}

/** Total 214 kontrak aktif. */
export const kontrakMaturity: MaturityRow[] = [
  { kuartal: "Q3 2026", kontrak: 92, nilaiRpT: 5.8 },
  { kuartal: "Q4 2026", kontrak: 68, nilaiRpT: 4.3 },
  { kuartal: "Q1 2027", kontrak: 36, nilaiRpT: 2.2 },
  { kuartal: "Q2 2027", kontrak: 18, nilaiRpT: 1.1 },
];

/* ── 5. Counterparty Exposure ─────────────────────────────────────── */

export type RatingInternal = "A" | "A−" | "BBB" | "BB";

export interface CounterpartyRow {
  counterparty: string;
  /** Eksposur outstanding (piutang + delivery in-transit). */
  nilai: string;
  rating: RatingInternal | "—";
  catatan: string;
}

export const counterpartyExposure: CounterpartyRow[] = [
  { counterparty: "Wilmar Group", nilai: "Rp 1,42 T", rating: "A", catatan: "Dalam batas limit; pembayaran L/C sight" },
  { counterparty: "Musim Mas", nilai: "Rp 1,08 T", rating: "A", catatan: "Dalam batas limit" },
  { counterparty: "Louis Dreyfus (Rotterdam)", nilai: "Rp 0,94 T", rating: "A−", catatan: "Ekspor; CIF Rotterdam, hedging kurs aktif" },
  { counterparty: "ID Food", nilai: "Rp 0,86 T", rating: "BBB", catatan: "Tenor pembayaran 45 hari — monitor DSO" },
  { counterparty: "Bulog", nilai: "Rp 0,71 T", rating: "BBB", catatan: "Penugasan gula; jaminan pemerintah" },
  { counterparty: "Lainnya (32 counterparty)", nilai: "Rp 1,21 T", rating: "—", catatan: "Terdiversifikasi, limit individual < Rp 150 M" },
];

/* ── 6. Hedging / kebijakan forward ───────────────────────────────── */

export const hedgingPolicy = {
  batasForwardPct: 40,
  posisiPct: 32,
  headroomPct: 8,
  instrumen: ["Forward fisik (tender KPBN & bilateral)", "Kontrak jangka panjang buyer hilir", "Lindung nilai kurs penerimaan ekspor (Treasury)"],
  catatan:
    "Kebijakan komite pemasaran: forward selling maksimal 40% dari proyeksi produksi 6 bulan ke depan; tanpa instrumen derivatif komoditas spekulatif.",
} as const;

/* ── 7. Insight kontrak ───────────────────────────────────────────── */

export interface KontrakInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const kontrakInsights: KontrakInsight[] = [
  {
    title: "Headroom forward 8 pts",
    text: "Posisi committed 32% vs batas 40% — masih ada ruang ± 107 rb ton CPO H2 untuk dikunci pada rally harga saat ini.",
    tone: "green",
  },
  {
    title: "Premium tender menguat",
    text: "Premium harga terbentuk vs harga dasar naik dari +Rp 50-85/kg (April) menjadi +Rp 120/kg pada tender akhir Mei — permintaan fisik ketat.",
    tone: "blue",
  },
  {
    title: "Konsentrasi delivery Q3",
    text: "92 dari 214 kontrak (Rp 5,8 T) jatuh delivery di Q3 2026 — pastikan kesiapan logistik terminal & armada di puncak produksi.",
    tone: "amber",
  },
];

/* ═══════════════════ EKSPOR & BUYER ═══════════════════ */

/* ── 8. KPI Buyer ─────────────────────────────────────────────────── */

export interface BuyerKpi {
  label: string;
  value: string;
  sub: string;
  tone: "blue" | "green" | "amber" | "red";
}

export const buyerKpi: BuyerKpi[] = [
  { label: "Porsi Ekspor", value: `${PEMASARAN.eksporPctVolCpo}%`, sub: "Volume CPO YTD (213 rb ton)", tone: "blue" },
  { label: "Konsentrasi Top-5 Buyer", value: "61%", sub: "Dari nilai penjualan CPO & turunan", tone: "red" },
  { label: "Negara Tujuan Ekspor", value: "14", sub: "5 negara utama + 9 lainnya", tone: "green" },
  { label: "Kepatuhan DMO", value: "100%", sub: "Kewajiban pasok minyak goreng domestik", tone: "green" },
];

/* ── 9. Tren ekspor vs domestik (12 bulan, stacked) ───────────────── */

export interface EksporTrendPoint {
  bulan: string;
  /** Volume CPO domestik (ribu ton). */
  domestik: number;
  /** Volume CPO ekspor (ribu ton). */
  ekspor: number;
}

/** Jun 25 – Mei 26; Jan-Mei 26: ekspor 213 dari 968 rb ton = 22,0%. */
export const eksporDomestikTrend: EksporTrendPoint[] = [
  { bulan: "Jun 25", domestik: 166, ekspor: 39 },
  { bulan: "Jul 25", domestik: 181, ekspor: 45 },
  { bulan: "Agu 25", domestik: 187, ekspor: 47 },
  { bulan: "Sep 25", domestik: 184, ekspor: 45 },
  { bulan: "Okt 25", domestik: 175, ekspor: 43 },
  { bulan: "Nov 25", domestik: 164, ekspor: 40 },
  { bulan: "Des 25", domestik: 153, ekspor: 37 },
  { bulan: "Jan 26", domestik: 143, ekspor: 41 },
  { bulan: "Feb 26", domestik: 147, ekspor: 42 },
  { bulan: "Mar 26", domestik: 152, ekspor: 44 },
  { bulan: "Apr 26", domestik: 152, ekspor: 42 },
  { bulan: "Mei 26", domestik: 161, ekspor: 44 },
];

/* ── 10. Top Buyers ───────────────────────────────────────────────── */

export interface BuyerRow {
  nama: string;
  tipe: "Domestik" | "Ekspor";
  /** Volume serapan (ribu ton, CPO & turunan). */
  volumeRbTon: number;
  nilai: string;
  /** Porsi dari nilai penjualan CPO & turunan (Rp 15,02 T); total baris = 82%. */
  sharePct: number;
  tren: "up" | "down" | "flat";
}

/** Top-5 = 61% (16+13+12+11+9); sisanya buyer kecil 18%. */
export const topBuyers: BuyerRow[] = [
  { nama: "Wilmar Group", tipe: "Domestik", volumeRbTon: 192, nilai: "Rp 2,40 T", sharePct: 16, tren: "up" },
  { nama: "Musim Mas", tipe: "Domestik", volumeRbTon: 156, nilai: "Rp 1,95 T", sharePct: 13, tren: "flat" },
  { nama: "ID Food", tipe: "Domestik", volumeRbTon: 118, nilai: "Rp 1,80 T", sharePct: 12, tren: "up" },
  { nama: "Louis Dreyfus (Rotterdam)", tipe: "Ekspor", volumeRbTon: 106, nilai: "Rp 1,65 T", sharePct: 11, tren: "up" },
  { nama: "Bulog", tipe: "Domestik", volumeRbTon: 88, nilai: "Rp 1,35 T", sharePct: 9, tren: "flat" },
  { nama: "Apical Group", tipe: "Domestik", volumeRbTon: 84, nilai: "Rp 1,05 T", sharePct: 7, tren: "up" },
  { nama: "Adani Wilmar (India)", tipe: "Ekspor", volumeRbTon: 48, nilai: "Rp 0,75 T", sharePct: 5, tren: "up" },
  { nama: "Mewah International (SG)", tipe: "Ekspor", volumeRbTon: 34, nilai: "Rp 0,60 T", sharePct: 4, tren: "flat" },
  { nama: "Emami Agrotech (India)", tipe: "Ekspor", volumeRbTon: 25, nilai: "Rp 0,45 T", sharePct: 3, tren: "down" },
  { nama: "KPN Corp", tipe: "Domestik", volumeRbTon: 24, nilai: "Rp 0,30 T", sharePct: 2, tren: "flat" },
];

export const topBuyersLainnya = {
  label: "Lainnya (27 buyer)",
  nilai: "Rp 2,72 T",
  sharePct: 18,
} as const;

/* ── 11. Destinasi ekspor ─────────────────────────────────────────── */

export interface DestinasiRow {
  negara: string;
  /** Volume CPO ekspor (ribu ton); total 213. */
  volumeRbTon: number;
  sharePct: number;
}

export const destinasiEkspor: DestinasiRow[] = [
  { negara: "India", volumeRbTon: 72, sharePct: 34 },
  { negara: "Tiongkok", volumeRbTon: 47, sharePct: 22 },
  { negara: "Pakistan", volumeRbTon: 30, sharePct: 14 },
  { negara: "Belanda", volumeRbTon: 23, sharePct: 11 },
  { negara: "Bangladesh", volumeRbTon: 17, sharePct: 8 },
  { negara: "Lainnya (9 negara)", volumeRbTon: 24, sharePct: 11 },
];

/* ── 12. Konsentrasi buyer (HHI) ──────────────────────────────────── */

export const hhi = {
  /** Herfindahl–Hirschman Index atas share nilai buyer. */
  value: 1884,
  status: "Konsentrasi Moderat–Tinggi",
  target: "< 1.700 (akhir 2027)",
  ambang: [
    { label: "Rendah", batas: "< 1.500" },
    { label: "Moderat", batas: "1.500 – 2.500" },
    { label: "Tinggi", batas: "> 2.500" },
  ],
  catatan:
    "HHI dihitung dari share nilai penjualan CPO & turunan per buyer. Top-5 buyer = 61%; penambahan 3-4 buyer menengah menurunkan HHI di bawah 1.700.",
} as const;

/* ── 13. Regulasi pasar ───────────────────────────────────────────── */

export interface RegulasiRow {
  regulasi: string;
  status: string;
  dampak: string;
  tone: "red" | "amber" | "green";
}

export const regulasiPasar: RegulasiRow[] = [
  {
    regulasi: "DMO Minyak Goreng",
    status: "Patuh 100%",
    dampak: "Kewajiban pasok domestik terpenuhi; menopang izin ekspor (PE).",
    tone: "green",
  },
  {
    regulasi: "Pungutan Ekspor BPDPKS",
    status: "Berlaku — tarif progresif",
    dampak: "Beban pungutan Rp 0,64 T YTD atas volume ekspor; mengurangi net-back FOB.",
    tone: "amber",
  },
  {
    regulasi: "Bea Keluar CPO",
    status: "Berlaku — USD 124/ton (band harga saat ini)",
    dampak: "Selisih paritas ekspor–domestik menyempit; evaluasi bulanan tujuan penjualan.",
    tone: "amber",
  },
  {
    regulasi: "HET Gula Konsumsi",
    status: "Berlaku — dikaji pemerintah",
    dampak: "Membatasi upside harga lelang gula SGN; potensi revisi naik di H2.",
    tone: "amber",
  },
  {
    regulasi: "EUDR (Uni Eropa)",
    status: "Enforcement Des 2026 — readiness 78/100",
    dampak: "Ekspor tujuan Belanda (11%) wajib geolokasi & due diligence penuh.",
    tone: "red",
  },
];

/* ── 14. Insight buyer ────────────────────────────────────────────── */

export interface BuyerInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const buyerInsights: BuyerInsight[] = [
  {
    title: "Ketergantungan top-5 masih 61%",
    text: "Wilmar, Musim Mas, ID Food, LDC, dan Bulog menyerap 61% nilai. Kehilangan satu buyer besar berarti realokasi 9-16% volume dalam waktu singkat.",
    tone: "red",
  },
  {
    title: "Ekspor naik ke 22% volume",
    text: "Paritas ekspor membaik seiring kenaikan Rotterdam (+8,0% vs Des). India & Tiongkok menyerap 56% ekspor — pasar non-EUDR yang lebih fleksibel.",
    tone: "blue",
  },
  {
    title: "Eksposur Belanda vs EUDR",
    text: "23 rb ton (11% ekspor) menuju Belanda; tanpa kesiapan traceability penuh sebelum Des 2026, volume ini berisiko dialihkan dengan diskon harga.",
    tone: "amber",
  },
];
