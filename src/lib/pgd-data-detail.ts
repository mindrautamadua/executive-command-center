/**
 * Data statis dimensi Pengadaan — bagian detail (/pengadaan/*).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * Memuat empat halaman: Manajemen Vendor, Kontrak Pengadaan,
 * Proses & Tender, serta TKDN & Integritas. Tiga halaman pertama
 * (Overview, Analitik Belanja, Kategori & Komoditas) ada di pgd-data.ts,
 * yang juga menjadi sumber tipe bersama dimensi ini.
 *
 * Jangkar konsistensi:
 * - PENGADAAN (group-baseline.ts): 3.482 vendor · 128 kritikal · 1.246 kontrak
 *   aktif · 87 jatuh tempo 90 hari · siklus 42 vs 35 hari · e-Proc 84% ·
 *   TKDN 68,4% vs 65% · 14 laporan integritas.
 * - risk-data-detail.ts: caseByType "Fraud Pengadaan" = 14 dan tahapan
 *   investigationFunnel (telaah awal → investigasi → terbukti → sanksi/APH).
 * - kcx-data.ts & inv-data.ts: paket konstruksi/capex 42 proyek investasi.
 */

import { PENGADAAN } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type {
  PgdInsight,
  PgdKategori,
  PgdPageKpi,
  PgdStatus,
} from "./pgd-data";

/* ══════════════════════════════════════════════════════════════════════
   4. MANAJEMEN VENDOR (/pengadaan/manajemen-vendor)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const vendorKpi: PgdPageKpi[] = [
  {
    label: "Vendor Aktif",
    value: "3.482",
    sub: "Terdaftar & lolos kualifikasi di Vendor Portal",
    delta: "+124",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Vendor Kritikal",
    value: "128",
    sub: "3,7% populasi · memasok kategori bottleneck",
    delta: "+6",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Vendor Baru YTD",
    value: "214",
    sub: "Dari 1.284 registrasi masuk (konversi 16,7%)",
    delta: "+38",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Skor Kinerja Rata-rata",
    value: "82,4",
    valueSuffix: "/100",
    sub: "Kualitas · ketepatan waktu · responsivitas",
    delta: "+1,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Vendor Bersanksi",
    value: "26",
    sub: "18 sanksi administratif · 8 daftar hitam",
    delta: "+9",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Vendor Lokal & UMKM",
    value: "64,2%",
    sub: "2.236 vendor · belanja Rp 3,28 T (26,5%)",
    delta: "+3,4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 4b. Segmentasi Vendor ────────────────────────────────────────── */

export interface PgdVendorSegment {
  segmen: "Strategis" | "Kritikal" | "Leverage" | "Rutin";
  /** Jumlah vendor pada segmen. */
  jumlah: number;
  /** Belanja YTD segmen (Rp T). */
  valueRpT: number;
  /** Porsi belanja (%). */
  pct: number;
  /** Model relasi yang diterapkan. */
  pendekatan: string;
  color: string;
}

/**
 * Jumlah menjumlah 3.482 = PENGADAAN.vendorAktif (segmen Kritikal = 128
 * = PENGADAAN.vendorKritikal); nilai menjumlah 12,40 T.
 */
export const vendorSegmentation: PgdVendorSegment[] = [
  {
    segmen: "Strategis",
    jumlah: 86,
    valueRpT: 4.86,
    pct: 39.2,
    pendekatan: "Kemitraan jangka panjang & joint improvement",
    color: PALETTE.green,
  },
  {
    segmen: "Kritikal",
    jumlah: 128,
    valueRpT: 2.42,
    pct: 19.5,
    pendekatan: "Amankan pasokan, dual sourcing wajib",
    color: PALETTE.red,
  },
  {
    segmen: "Leverage",
    jumlah: 642,
    valueRpT: 3.18,
    pct: 25.6,
    pendekatan: "Tender kompetitif & konsolidasi volume",
    color: PALETTE.blue,
  },
  {
    segmen: "Rutin",
    jumlah: 2626,
    valueRpT: 1.94,
    pct: 15.7,
    pendekatan: "Otomatisasi via e-Catalog",
    color: PALETTE.slate,
  },
];

/* ── 4c. Kinerja Vendor (top & bottom) ────────────────────────────── */

export interface PgdVendorScoreRow {
  vendor: string;
  kategori: PgdKategori;
  /** Skor kualitas barang/jasa 0-100. */
  kualitas: number;
  /** Skor ketepatan waktu pengiriman 0-100. */
  ketepatanWaktu: number;
  /** Skor responsivitas & layanan purna 0-100. */
  responsivitas: number;
  /** Skor total tertimbang 0-100. */
  skorTotal: number;
  /** Belanja YTD dengan vendor ini (Rp M). */
  spendRpM: number;
}

/** Rata-rata populasi 82,4 — lima peringkat teratas. */
export const vendorPerformanceTop: PgdVendorScoreRow[] = [
  { vendor: "PT Energi Solar Andalan", kategori: "BBM & Energi", kualitas: 96, ketepatanWaktu: 95, responsivitas: 92, skorTotal: 94.6, spendRpM: 520, },
  { vendor: "PT Pupuk Nusantara Kimia", kategori: "Pupuk & Agrokimia", kualitas: 94, ketepatanWaktu: 92, responsivitas: 90, skorTotal: 92.4, spendRpM: 600 },
  { vendor: "PT Mesin Sawit Teknika", kategori: "Suku Cadang & Pemeliharaan", kualitas: 93, ketepatanWaktu: 90, responsivitas: 91, skorTotal: 91.6, spendRpM: 420 },
  { vendor: "PT Sistem Informasi Agro", kategori: "TI & Lisensi", kualitas: 91, ketepatanWaktu: 89, responsivitas: 94, skorTotal: 91.2, spendRpM: 200 },
  { vendor: "PT Logistik Angkut Sawit", kategori: "Jasa Borongan & Panen", kualitas: 88, ketepatanWaktu: 92, responsivitas: 89, skorTotal: 89.8, spendRpM: 250 },
];

/** Lima peringkat terbawah di antara vendor bernilai > Rp 50 M. */
export const vendorPerformanceBottom: PgdVendorScoreRow[] = [
  { vendor: "PT Karya Bangun Perkasa", kategori: "Konstruksi & Proyek", kualitas: 68, ketepatanWaktu: 52, responsivitas: 64, skorTotal: 60.8, spendRpM: 420 },
  { vendor: "CV Tani Makmur Agro", kategori: "Pupuk & Agrokimia", kualitas: 64, ketepatanWaktu: 58, responsivitas: 62, skorTotal: 61.4, spendRpM: 86 },
  { vendor: "PT Alat Berat Prima", kategori: "Alat Berat & Kendaraan", kualitas: 72, ketepatanWaktu: 56, responsivitas: 66, skorTotal: 64.2, spendRpM: 270 },
  { vendor: "CV Borongan Panen Sejahtera", kategori: "Jasa Borongan & Panen", kualitas: 66, ketepatanWaktu: 68, responsivitas: 61, skorTotal: 65.4, spendRpM: 64 },
  { vendor: "PT Suku Cadang Global", kategori: "Suku Cadang & Pemeliharaan", kualitas: 74, ketepatanWaktu: 62, responsivitas: 68, skorTotal: 68.6, spendRpM: 220 },
];

/* ── 4d. Konsentrasi 10 Vendor Terbesar ───────────────────────────── */

export interface PgdVendorConcentrationRow {
  rank: number;
  vendor: string;
  kategori: PgdKategori;
  /** Belanja YTD (Rp T). */
  valueRpT: number;
  /** Porsi terhadap total belanja grup (%). */
  sharePct: number;
  /** Tingkat ketergantungan bila vendor gagal memasok. */
  risiko: "Tinggi" | "Sedang" | "Rendah";
  /** Ada tidaknya vendor pengganti terkualifikasi. */
  substitusi: "Tersedia" | "Terbatas" | "Tidak Ada";
}

/**
 * Total 10 vendor = Rp 3,67 T (29,6% belanja) — konsisten dengan titik
 * "Top 10" pada spendPareto di pgd-data.ts; Top-20 tetap 43,0%.
 */
export const vendorConcentration: PgdVendorConcentrationRow[] = [
  { rank: 1, vendor: "PT Pupuk Nusantara Kimia", kategori: "Pupuk & Agrokimia", valueRpT: 0.6, sharePct: 4.8, risiko: "Tinggi", substitusi: "Terbatas" },
  { rank: 2, vendor: "PT Energi Solar Andalan", kategori: "BBM & Energi", valueRpT: 0.52, sharePct: 4.2, risiko: "Tinggi", substitusi: "Tidak Ada" },
  { rank: 3, vendor: "PT Agrokimia Sentra Jaya", kategori: "Pupuk & Agrokimia", valueRpT: 0.45, sharePct: 3.6, risiko: "Tinggi", substitusi: "Terbatas" },
  { rank: 4, vendor: "PT Mesin Sawit Teknika", kategori: "Suku Cadang & Pemeliharaan", valueRpT: 0.42, sharePct: 3.4, risiko: "Sedang", substitusi: "Tersedia" },
  { rank: 5, vendor: "PT Karya Bangun Perkasa", kategori: "Konstruksi & Proyek", valueRpT: 0.42, sharePct: 3.4, risiko: "Tinggi", substitusi: "Tersedia" },
  { rank: 6, vendor: "PT Niaga Bahan Kimia Pabrik", kategori: "Pupuk & Agrokimia", valueRpT: 0.32, sharePct: 2.6, risiko: "Sedang", substitusi: "Terbatas" },
  { rank: 7, vendor: "PT Alat Berat Prima", kategori: "Alat Berat & Kendaraan", valueRpT: 0.27, sharePct: 2.2, risiko: "Sedang", substitusi: "Terbatas" },
  { rank: 8, vendor: "PT Logistik Angkut Sawit", kategori: "Jasa Borongan & Panen", valueRpT: 0.25, sharePct: 2.0, risiko: "Rendah", substitusi: "Tersedia" },
  { rank: 9, vendor: "PT Suku Cadang Global", kategori: "Suku Cadang & Pemeliharaan", valueRpT: 0.22, sharePct: 1.8, risiko: "Sedang", substitusi: "Tersedia" },
  { rank: 10, vendor: "PT Sistem Informasi Agro", kategori: "TI & Lisensi", valueRpT: 0.2, sharePct: 1.6, risiko: "Sedang", substitusi: "Terbatas" },
];

/* ── 4e. Vendor Risk Watchlist ────────────────────────────────────── */

export interface PgdVendorWatchRow {
  vendor: string;
  isu: string;
  /** Nilai kontrak berjalan yang terpapar (Rp M). */
  eksposurRpM: number;
  tindakan: string;
  status: "Peringatan" | "Sanksi Administratif" | "Daftar Hitam" | "Dalam Investigasi";
  tone: "red" | "amber" | "green";
}

/** Lima vendor prioritas dari 26 vendor bersanksi/dalam pengawasan. */
export const vendorRiskWatch: PgdVendorWatchRow[] = [
  {
    vendor: "PT Karya Bangun Perkasa",
    isu: "Keterlambatan 3 paket konstruksi pabrik (rata-rata 68 hari); skor ketepatan waktu 52.",
    eksposurRpM: 420,
    tindakan: "Denda keterlambatan diterapkan; kontrak baru ditahan sampai kurva-S kembali on-track.",
    status: "Peringatan",
    tone: "amber",
  },
  {
    vendor: "CV Tani Makmur Agro",
    isu: "Selisih spesifikasi kadar hara pupuk pada 2 pengiriman; menjadi objek laporan integritas PGD-05.",
    eksposurRpM: 86,
    tindakan: "Uji laboratorium pihak ketiga & penghentian sementara PO baru.",
    status: "Dalam Investigasi",
    tone: "red",
  },
  {
    vendor: "PT Alat Berat Prima",
    isu: "Ketepatan waktu 56 akibat lead time impor 96 hari; menahan kesiapan alat panen Regional 4.",
    eksposurRpM: 270,
    tindakan: "Kualifikasi dua vendor alternatif; klausul buffer stock lokal masuk kontrak berikutnya.",
    status: "Peringatan",
    tone: "amber",
  },
  {
    vendor: "CV Mitra Sarana Teknik",
    isu: "Terbukti mengatur penawaran bersama afiliasi pada 1 paket suku cadang (kasus PGD-08).",
    eksposurRpM: 42,
    tindakan: "Pemutusan kontrak dan masuk daftar hitam 2 tahun; diteruskan ke APH.",
    status: "Daftar Hitam",
    tone: "red",
  },
  {
    vendor: "CV Borongan Panen Sejahtera",
    isu: "Kepatuhan K3 & upah tenaga borongan di bawah standar pada 4 afdeling.",
    eksposurRpM: 64,
    tindakan: "Sanksi administratif dan audit kepatuhan ketenagakerjaan sebelum perpanjangan.",
    status: "Sanksi Administratif",
    tone: "amber",
  },
];

/* ── 4f. Funnel Onboarding Vendor ─────────────────────────────────── */

export interface PgdOnboardingStage {
  stage: string;
  count: number;
  /** Konversi dari tahap sebelumnya (%); null untuk tahap pertama. */
  konversiPct: number | null;
  /** Rata-rata waktu di tahap ini (hari). */
  rataHari: number;
}

/** Berakhir 214 vendor aktif baru YTD — sama dengan KPI "Vendor Baru YTD". */
export const vendorOnboarding: PgdOnboardingStage[] = [
  { stage: "Registrasi Vendor Portal", count: 1284, konversiPct: null, rataHari: 2 },
  { stage: "Verifikasi Dokumen Legal", count: 968, konversiPct: 75.4, rataHari: 6 },
  { stage: "Kualifikasi Teknis & Keuangan", count: 642, konversiPct: 66.3, rataHari: 12 },
  { stage: "Aktif (Terdaftar DPT)", count: 214, konversiPct: 33.3, rataHari: 8 },
];

/* ── 4g. Komposisi Vendor Lokal & UMKM ────────────────────────────── */

export interface PgdLocalVendorRow {
  kelompok: "UMKM (Lokal Daerah)" | "Lokal/Daerah Non-UMKM" | "Nasional" | "Asing / Prinsipal Impor";
  jumlah: number;
  /** Porsi jumlah vendor (%). */
  jumlahPct: number;
  /** Belanja YTD (Rp T). */
  valueRpT: number;
  /** Porsi nilai belanja (%). */
  valuePct: number;
  color: string;
}

/**
 * Jumlah menjumlah 3.482; nilai menjumlah 12,40 T. Lokal + UMKM = 2.236
 * vendor (64,2%) dengan belanja Rp 3,28 T (26,5%) — mendukung agenda
 * belanja PDN & UMKM BUMN.
 */
export const localVendorMix: PgdLocalVendorRow[] = [
  { kelompok: "UMKM (Lokal Daerah)", jumlah: 1842, jumlahPct: 52.9, valueRpT: 1.86, valuePct: 15.0, color: PALETTE.green },
  { kelompok: "Lokal/Daerah Non-UMKM", jumlah: 394, jumlahPct: 11.3, valueRpT: 1.42, valuePct: 11.5, color: PALETTE.teal },
  { kelompok: "Nasional", jumlah: 1186, jumlahPct: 34.1, valueRpT: 8.18, valuePct: 66.0, color: PALETTE.blue },
  { kelompok: "Asing / Prinsipal Impor", jumlah: 60, jumlahPct: 1.7, valueRpT: 0.94, valuePct: 7.6, color: PALETTE.slate },
];

/* ── 4h. Insight & Rekomendasi ────────────────────────────────────── */

export const vendorInsights: PgdInsight[] = [
  {
    insight:
      "86 vendor strategis (2,5% populasi) menguasai 39,2% belanja sementara 2.626 vendor rutin hanya 15,7% — biaya administrasi tersebar pada segmen bernilai terkecil.",
    rekomendasi:
      "Pindahkan seluruh segmen rutin ke e-Catalog dan konsolidasi ke maksimal 1.500 vendor pada 2027; realokasikan kapasitas ke pengelolaan 86 vendor strategis.",
  },
  {
    insight:
      "Konversi onboarding hanya 16,7% (1.284 registrasi → 214 aktif) dengan penyusutan terbesar di kualifikasi teknis; kategori bottleneck justru kekurangan vendor alternatif.",
    rekomendasi:
      "Jalankan kualifikasi tertarget untuk 40 calon vendor pupuk/BBM dengan pendampingan dokumen, bukan menunggu registrasi mandiri.",
  },
  {
    insight:
      "UMKM & vendor lokal 64,2% dari jumlah vendor tetapi hanya 26,5% nilai belanja — dan justru segmen paling terdampak lag pembayaran 11 hari.",
    rekomendasi:
      "Tetapkan target belanja UMKM 32% nilai pada 2027 disertai jalur pembayaran cepat ≤ 14 hari untuk paket UMKM.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   5. KONTRAK PENGADAAN (/pengadaan/kontrak)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const kontrakKpi: PgdPageKpi[] = [
  {
    label: "Kontrak Aktif",
    value: "1.246",
    sub: "Seluruh subholding · 5 jenis kontrak",
    delta: "+68",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Nilai Kontrak Aktif",
    value: "Rp 18,6 T",
    sub: "Termasuk komitmen multi-tahun",
    delta: "+Rp 1,8 T",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Jatuh Tempo ≤ 90 Hari",
    value: "87",
    sub: "Nilai Rp 2,86 T · 32 di antaranya Juni 2026",
    delta: "+21",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Porsi Kontrak Payung",
    value: "34,0%",
    sub: "42 kontrak payung · nilai Rp 6,32 T",
    delta: "+6,4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Tingkat Addendum",
    value: "18,4%",
    sub: "229 addendum dari 1.246 kontrak aktif",
    delta: "+2,2 pts",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Siklus Penyusunan Kontrak",
    value: "26",
    valueSuffix: " hari",
    sub: "Penetapan pemenang → kontrak tertandatangani",
    delta: "-4 hari",
    trend: "down",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 5b. Kontrak per Status ───────────────────────────────────────── */

export interface PgdContractStatusRow {
  status: "Berjalan Normal" | "Perlu Perpanjangan ≤90 Hari" | "Dalam Proses Addendum" | "Bermasalah / Dispute";
  jumlah: number;
  /** Nilai kontrak (Rp T). */
  valueRpT: number;
  tone: "green" | "amber" | "red" | "blue";
}

/** Menjumlah 1.246 = PENGADAAN.kontrakAktif; nilai menjumlah 18,60 T. */
export const contractByStatus: PgdContractStatusRow[] = [
  { status: "Berjalan Normal", jumlah: 1024, valueRpT: 14.62, tone: "green" },
  { status: "Perlu Perpanjangan ≤90 Hari", jumlah: 87, valueRpT: 2.86, tone: "red" },
  { status: "Dalam Proses Addendum", jumlah: 89, valueRpT: 0.86, tone: "amber" },
  { status: "Bermasalah / Dispute", jumlah: 46, valueRpT: 0.26, tone: "blue" },
];

/* ── 5c. Kontrak per Jenis ────────────────────────────────────────── */

export interface PgdContractTypeRow {
  jenis: "Kontrak Payung" | "Kontrak Satuan (Unit Price)" | "Lump Sum Konstruksi" | "Jasa Berkala / Retainer" | "Sewa & Lisensi";
  jumlah: number;
  /** Nilai kontrak (Rp T). */
  valueRpT: number;
  /** Porsi nilai (%). */
  pct: number;
  color: string;
}

/** Menjumlah 1.246 kontrak dan 18,60 T nilai. */
export const contractByJenis: PgdContractTypeRow[] = [
  { jenis: "Kontrak Payung", jumlah: 42, valueRpT: 6.32, pct: 34.0, color: PALETTE.green },
  { jenis: "Kontrak Satuan (Unit Price)", jumlah: 486, valueRpT: 5.14, pct: 27.6, color: PALETTE.blue },
  { jenis: "Lump Sum Konstruksi", jumlah: 214, valueRpT: 4.28, pct: 23.0, color: PALETTE.amber },
  { jenis: "Jasa Berkala / Retainer", jumlah: 318, valueRpT: 1.86, pct: 10.0, color: PALETTE.teal },
  { jenis: "Sewa & Lisensi", jumlah: 186, valueRpT: 1.0, pct: 5.4, color: PALETTE.slate },
];

/* ── 5d. Timeline Jatuh Tempo 12 Bulan ────────────────────────────── */

export interface PgdExpiryPoint {
  month: string;
  /** Jumlah kontrak berakhir pada bulan tsb. */
  jumlah: number;
  /** Nilai kontrak berakhir (Rp T). */
  valueRpT: number;
  /** Sudah ada paket pengganti di pipeline tender? */
  penggantiSiap: number;
}

/** Jun–Agu 2026 menjumlah 87 kontrak = PENGADAAN.kontrakJatuhTempo90Hari. */
export const expiryTimeline: PgdExpiryPoint[] = [
  { month: "Jun'26", jumlah: 32, valueRpT: 1.12, penggantiSiap: 18 },
  { month: "Jul'26", jumlah: 28, valueRpT: 0.94, penggantiSiap: 12 },
  { month: "Agu'26", jumlah: 27, valueRpT: 0.8, penggantiSiap: 9 },
  { month: "Sep'26", jumlah: 41, valueRpT: 1.24, penggantiSiap: 11 },
  { month: "Okt'26", jumlah: 38, valueRpT: 1.06, penggantiSiap: 8 },
  { month: "Nov'26", jumlah: 46, valueRpT: 1.38, penggantiSiap: 6 },
  { month: "Des'26", jumlah: 62, valueRpT: 2.18, penggantiSiap: 14 },
  { month: "Jan'27", jumlah: 34, valueRpT: 0.92, penggantiSiap: 4 },
  { month: "Feb'27", jumlah: 29, valueRpT: 0.74, penggantiSiap: 3 },
  { month: "Mar'27", jumlah: 33, valueRpT: 0.88, penggantiSiap: 2 },
  { month: "Apr'27", jumlah: 31, valueRpT: 0.82, penggantiSiap: 2 },
  { month: "Mei'27", jumlah: 26, valueRpT: 0.64, penggantiSiap: 1 },
];

/* ── 5e. Kontrak Payung per Kategori ──────────────────────────────── */

export interface PgdFrameworkRow {
  kategori: PgdKategori;
  /** Jumlah kontrak payung aktif. */
  jumlah: number;
  /** Porsi belanja kategori yang tercakup kontrak payung (%). */
  cakupanPct: number;
  /** Penghematan YTD dari kontrak payung kategori ini (Rp M). */
  hematRpM: number;
  berlakuSampai: string;
}

/**
 * Jumlah menjumlah 42 kontrak payung; penghematan menjumlah Rp 168 M —
 * subset dari total Rp 386 M (savingsByCategory di pgd-data.ts) dan
 * tidak pernah melampaui realisasi per kategori.
 */
export const frameworkAgreements: PgdFrameworkRow[] = [
  { kategori: "Pupuk & Agrokimia", jumlah: 8, cakupanPct: 62.4, hematRpM: 68, berlakuSampai: "Des 2026" },
  { kategori: "BBM & Energi", jumlah: 4, cakupanPct: 78.2, hematRpM: 38, berlakuSampai: "Des 2026" },
  { kategori: "Suku Cadang & Pemeliharaan", jumlah: 11, cakupanPct: 44.6, hematRpM: 26, berlakuSampai: "Jun 2027" },
  { kategori: "Jasa Borongan & Panen", jumlah: 9, cakupanPct: 32.8, hematRpM: 14, berlakuSampai: "Sep 2026" },
  { kategori: "Alat Berat & Kendaraan", jumlah: 5, cakupanPct: 51.2, hematRpM: 12, berlakuSampai: "Mar 2027" },
  { kategori: "TI & Lisensi", jumlah: 5, cakupanPct: 68.4, hematRpM: 10, berlakuSampai: "Des 2027" },
];

/* ── 5f. 10 Kontrak Bernilai Terbesar ─────────────────────────────── */

export interface PgdTopContractRow {
  rank: number;
  kontrak: string;
  vendor: string;
  /** Nilai kontrak total, termasuk multi-tahun (Rp T). */
  nilaiRpT: number;
  jenis: "Kontrak Payung" | "Kontrak Satuan (Unit Price)" | "Lump Sum Konstruksi" | "Jasa Berkala / Retainer" | "Sewa & Lisensi";
  berakhir: string;
  status: PgdStatus;
}

/** Sepuluh kontrak terbesar menjumlah Rp 5,84 T dari total Rp 18,6 T. */
export const contractValueTop: PgdTopContractRow[] = [
  { rank: 1, kontrak: "Kontrak Payung Pupuk NPK & Urea 2026", vendor: "PT Pupuk Nusantara Kimia", nilaiRpT: 1.24, jenis: "Kontrak Payung", berakhir: "Des 2026", status: "At Risk" },
  { rank: 2, kontrak: "Kontrak Payung Solar Industri Grup", vendor: "PT Energi Solar Andalan", nilaiRpT: 1.08, jenis: "Kontrak Payung", berakhir: "Des 2026", status: "On Track" },
  { rank: 3, kontrak: "Revitalisasi PKS Regional 3 (EPC)", vendor: "PT Karya Bangun Perkasa", nilaiRpT: 0.86, jenis: "Lump Sum Konstruksi", berakhir: "Sep 2027", status: "Off Track" },
  { rank: 4, kontrak: "Kontrak Payung Agrokimia & Herbisida", vendor: "PT Agrokimia Sentra Jaya", nilaiRpT: 0.62, jenis: "Kontrak Payung", berakhir: "Jun 2027", status: "On Track" },
  { rank: 5, kontrak: "Suku Cadang Pabrik Multi-Regional", vendor: "PT Mesin Sawit Teknika", nilaiRpT: 0.58, jenis: "Kontrak Satuan (Unit Price)", berakhir: "Jun 2027", status: "On Track" },
  { rank: 6, kontrak: "Jasa Angkut TBS Regional 1 & 3", vendor: "PT Logistik Angkut Sawit", nilaiRpT: 0.42, jenis: "Jasa Berkala / Retainer", berakhir: "Agu 2026", status: "On Track" },
  { rank: 7, kontrak: "Pengadaan Alat Berat & Traktor 2026", vendor: "PT Alat Berat Prima", nilaiRpT: 0.38, jenis: "Kontrak Satuan (Unit Price)", berakhir: "Mar 2027", status: "At Risk" },
  { rank: 8, kontrak: "Bahan Kimia Pengolahan PKS", vendor: "PT Niaga Bahan Kimia Pabrik", nilaiRpT: 0.32, jenis: "Kontrak Payung", berakhir: "Des 2026", status: "On Track" },
  { rank: 9, kontrak: "Suku Cadang Impor & Spare Kritis", vendor: "PT Suku Cadang Global", nilaiRpT: 0.2, jenis: "Kontrak Satuan (Unit Price)", berakhir: "Nov 2026", status: "At Risk" },
  { rank: 10, kontrak: "Lisensi ERP & Layanan Aplikasi Inti", vendor: "PT Sistem Informasi Agro", nilaiRpT: 0.14, jenis: "Sewa & Lisensi", berakhir: "Des 2027", status: "On Track" },
];

/* ── 5g. Analisis Addendum ────────────────────────────────────────── */

export interface PgdAddendumRow {
  penyebab: string;
  jumlah: number;
  /** Porsi terhadap 229 addendum (%). */
  pct: number;
  /** Dampak nilai terhadap kontrak awal (Rp M). */
  dampakRpM: number;
  tone: "red" | "amber" | "green";
}

/** Menjumlah 229 addendum = 18,4% dari 1.246 kontrak aktif. */
export const addendumAnalysis: PgdAddendumRow[] = [
  { penyebab: "Perubahan volume / kebutuhan unit", jumlah: 78, pct: 34.1, dampakRpM: 268, tone: "amber" },
  { penyebab: "Eskalasi harga input (pupuk & BBM)", jumlah: 54, pct: 23.6, dampakRpM: 214, tone: "red" },
  { penyebab: "Perpanjangan waktu pelaksanaan", jumlah: 46, pct: 20.1, dampakRpM: 62, tone: "amber" },
  { penyebab: "Perubahan spesifikasi teknis", jumlah: 32, pct: 14.0, dampakRpM: 96, tone: "red" },
  { penyebab: "Penyesuaian regulasi & perpajakan", jumlah: 19, pct: 8.3, dampakRpM: 34, tone: "green" },
];

/* ── 5h. Cek Kepatuhan Administratif Kontrak ──────────────────────── */

export interface PgdComplianceRow {
  aspek: string;
  /** Kontrak yang memenuhi. */
  patuh: number;
  /** Basis pemeriksaan (kontrak aktif). */
  basis: number;
  /** Tingkat kepatuhan (%). */
  patuhPct: number;
  status: PgdStatus;
  catatan: string;
}

/** Basis 1.246 kontrak aktif (basis berbeda untuk aspek yang bersyarat). */
export const complianceCheck: PgdComplianceRow[] = [
  { aspek: "Kelengkapan dokumen kontrak", patuh: 1188, basis: 1246, patuhPct: 95.3, status: "On Track", catatan: "58 kontrak kekurangan lampiran teknis/BAST awal." },
  { aspek: "Jaminan pelaksanaan diserahkan", patuh: 682, basis: 746, patuhPct: 91.4, status: "At Risk", catatan: "Basis 746 kontrak bernilai > Rp 200 jt; 64 jaminan belum diterima." },
  { aspek: "Klausul denda keterlambatan", patuh: 1214, basis: 1246, patuhPct: 97.4, status: "On Track", catatan: "Denda tertagih YTD Rp 18,4 M, mayoritas dari paket konstruksi." },
  { aspek: "Pakta integritas ditandatangani", patuh: 1152, basis: 1246, patuhPct: 92.4, status: "At Risk", catatan: "94 kontrak belum lengkap — target 100% pada Q3 2026." },
  { aspek: "Klausul TKDN & sanksi", patuh: 1064, basis: 1246, patuhPct: 85.4, status: "At Risk", catatan: "182 kontrak lama belum memuat komitmen TKDN terukur." },
  { aspek: "Klausul ESG & K3 pemasok", patuh: 892, basis: 1246, patuhPct: 71.6, status: "Off Track", catatan: "Prioritas penambahan pada kontrak jasa borongan & konstruksi." },
];

/* ── 5i. Insight & Rekomendasi ────────────────────────────────────── */

export const kontrakInsights: PgdInsight[] = [
  {
    insight:
      "87 kontrak senilai Rp 2,86 T jatuh tempo dalam 90 hari, tetapi hanya 39 memiliki paket pengganti di pipeline — dengan siklus 42 hari, sebagian akan kedaluwarsa sebelum tender selesai.",
    rekomendasi:
      "Mulai proses tender T-120 hari secara wajib dan terbitkan perpanjangan sementara terbatas 3 bulan untuk 48 kontrak tanpa pengganti.",
  },
  {
    insight:
      "Kontrak payung baru 42 kontrak (34,0% nilai) namun menyumbang Rp 168 M dari Rp 386 M penghematan — instrumen paling produktif per kontrak yang dikelola.",
    rekomendasi:
      "Konversi 18 kontrak satuan bernilai besar menjadi kontrak payung pada H2 2026, dimulai dari suku cadang pabrik dan jasa angkut.",
  },
  {
    insight:
      "Tingkat addendum 18,4% dengan penyebab dominan perubahan volume (78) dan eskalasi harga (54) — indikasi perencanaan kebutuhan dan asumsi harga RKAP yang belum tajam.",
    rekomendasi:
      "Wajibkan demand plan 12 bulan berbasis rencana kerja kebun/pabrik dan sematkan formula indeksasi harga agar eskalasi tidak lagi memicu addendum.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   6. PROSES & TENDER (/pengadaan/proses-tender)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 6a. KPI Strip ────────────────────────────────────────────────── */

export const prosesKpi: PgdPageKpi[] = [
  {
    label: "Siklus Pengadaan",
    value: "42",
    valueSuffix: " hari",
    sub: "Permintaan → PO · target 35 hari",
    delta: "+7 hari",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Tender Berjalan",
    value: "186",
    sub: "Nilai Rp 6,70 T · 41 paket di tahap evaluasi",
    delta: "+24",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Tingkat Kompetisi",
    value: "3,4",
    valueSuffix: " peserta/paket",
    sub: "Rata-rata tertimbang · target ≥ 4",
    delta: "-0,3",
    trend: "down",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Tender Gagal / Ulang",
    value: "11,2%",
    sub: "30 dari 268 tender selesai YTD",
    delta: "+1,8 pts",
    trend: "up",
    deltaTone: "bad",
    tone: "purple",
  },
  {
    label: "Cakupan e-Procurement",
    value: "84%",
    sub: "Nilai transaksi via e-Proc · target 95%",
    delta: "+6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
];

/* ── 6b. Waktu Siklus per Tahap ───────────────────────────────────── */

export interface PgdCycleStageRow {
  tahap: string;
  /** Waktu aktual rata-rata (hari). */
  aktualHari: number;
  /** SLA target (hari). */
  targetHari: number;
  /** Selisih terhadap target (hari); positif = terlambat. */
  gapHari: number;
  bottleneck: boolean;
}

/** Aktual menjumlah 42 hari (PENGADAAN.siklusRataHari); target 35 hari. */
export const cycleTimeByStage: PgdCycleStageRow[] = [
  { tahap: "Permintaan & Persetujuan Anggaran", aktualHari: 6, targetHari: 5, gapHari: 1, bottleneck: false },
  { tahap: "Penyusunan Spesifikasi & HPS", aktualHari: 9, targetHari: 7, gapHari: 2, bottleneck: true },
  { tahap: "Pengumuman & Pemasukan Penawaran", aktualHari: 8, targetHari: 8, gapHari: 0, bottleneck: false },
  { tahap: "Evaluasi & Klarifikasi", aktualHari: 11, targetHari: 7, gapHari: 4, bottleneck: true },
  { tahap: "Penetapan Pemenang & Kontrak", aktualHari: 5, targetHari: 5, gapHari: 0, bottleneck: false },
  { tahap: "Penerbitan PO", aktualHari: 3, targetHari: 3, gapHari: 0, bottleneck: false },
];

/* ── 6c. Pipeline Tender Aktif ────────────────────────────────────── */

export interface PgdTenderStageRow {
  tahap: string;
  /** Jumlah paket pada tahap ini. */
  paket: number;
  /** Nilai paket (Rp T). */
  valueRpT: number;
  /** Rata-rata umur paket di tahap ini (hari). */
  umurHari: number;
  tone: "green" | "blue" | "amber" | "red";
}

/** Menjumlah 186 paket aktif senilai Rp 6,70 T. */
export const tenderPipeline: PgdTenderStageRow[] = [
  { tahap: "Persiapan & HPS", paket: 62, valueRpT: 1.84, umurHari: 9, tone: "blue" },
  { tahap: "Pengumuman & Penawaran", paket: 48, valueRpT: 1.42, umurHari: 8, tone: "green" },
  { tahap: "Evaluasi", paket: 41, valueRpT: 1.96, umurHari: 11, tone: "red" },
  { tahap: "Klarifikasi & Negosiasi", paket: 21, valueRpT: 0.86, umurHari: 7, tone: "amber" },
  { tahap: "Penetapan Pemenang", paket: 14, valueRpT: 0.62, umurHari: 5, tone: "green" },
];

/* ── 6d. Tingkat Kompetisi per Paket ──────────────────────────────── */

export interface PgdCompetitionRow {
  bucket: "1 peserta (tunggal)" | "2 peserta" | "3-4 peserta" | "≥ 5 peserta";
  paket: number;
  /** Porsi dari 186 paket aktif (%); pembulatan 1 desimal. */
  pct: number;
  /** Nilai paket (Rp T). */
  valueRpT: number;
  /** Rata-rata selisih harga penawaran menang terhadap HPS (%). */
  hematVsHpsPct: number;
  bendera: "Merah" | "Kuning" | "Hijau";
}

/**
 * Menjumlah 186 paket aktif; rata-rata tertimbang 3,4 peserta/paket.
 * Paket berpeserta tunggal adalah bendera merah integritas dan menjadi
 * populasi awal telaah kasus PGD (lihat integrityCases).
 */
export const competitionLevel: PgdCompetitionRow[] = [
  { bucket: "1 peserta (tunggal)", paket: 34, pct: 18.3, valueRpT: 0.86, hematVsHpsPct: 1.2, bendera: "Merah" },
  { bucket: "2 peserta", paket: 52, pct: 28.0, valueRpT: 1.94, hematVsHpsPct: 3.6, bendera: "Kuning" },
  { bucket: "3-4 peserta", paket: 61, pct: 32.8, valueRpT: 2.42, hematVsHpsPct: 6.8, bendera: "Hijau" },
  { bucket: "≥ 5 peserta", paket: 39, pct: 21.0, valueRpT: 1.48, hematVsHpsPct: 9.4, bendera: "Hijau" },
];

/* ── 6e. Penyebab Tender Gagal / Ulang ────────────────────────────── */

export interface PgdFailedTenderRow {
  penyebab: string;
  jumlah: number;
  /** Porsi dari 30 tender gagal (%). */
  pct: number;
  /** Tambahan waktu akibat tender ulang (hari). */
  tambahanHari: number;
  tone: "red" | "amber" | "green";
}

/** Menjumlah 30 tender gagal/ulang = 11,2% dari 268 tender selesai YTD. */
export const failedTenderCauses: PgdFailedTenderRow[] = [
  { penyebab: "Peserta < 2 atau tidak memenuhi syarat", jumlah: 11, pct: 36.7, tambahanHari: 28, tone: "red" },
  { penyebab: "Seluruh penawaran di atas HPS", jumlah: 8, pct: 26.7, tambahanHari: 32, tone: "red" },
  { penyebab: "Spesifikasi tidak jelas / sanggah diterima", jumlah: 6, pct: 20.0, tambahanHari: 24, tone: "amber" },
  { penyebab: "Anggaran dibatalkan atau ditunda unit", jumlah: 3, pct: 10.0, tambahanHari: 0, tone: "amber" },
  { penyebab: "Lainnya (administratif)", jumlah: 2, pct: 6.7, tambahanHari: 18, tone: "green" },
];

/* ── 6f. Adopsi e-Procurement per Unit ────────────────────────────── */

export interface PgdEprocRow {
  unit: string;
  /** Belanja unit YTD (Rp T) — selaras maverickSpend di pgd-data.ts. */
  spendRpT: number;
  /** Porsi nilai transaksi lewat e-Proc (%). */
  eprocPct: number;
  /** Porsi paket yang seluruh prosesnya daring (%). */
  fullDigitalPct: number;
  status: PgdStatus;
}

/** Rata-rata tertimbang 84% = PENGADAAN.eProcCoveragePct. */
export const eProcAdoption: PgdEprocRow[] = [
  { unit: "PalmCo Regional 1", spendRpT: 1.9, eprocPct: 88, fullDigitalPct: 74, status: "On Track" },
  { unit: "PalmCo Regional 3", spendRpT: 2.2, eprocPct: 86, fullDigitalPct: 71, status: "On Track" },
  { unit: "PalmCo Regional 4", spendRpT: 2.1, eprocPct: 82, fullDigitalPct: 64, status: "At Risk" },
  { unit: "PalmCo Regional 5", spendRpT: 1.9, eprocPct: 80, fullDigitalPct: 58, status: "Off Track" },
  { unit: "SGN", spendRpT: 2.9, eprocPct: 85, fullDigitalPct: 68, status: "On Track" },
  { unit: "PTPN I", spendRpT: 1.4, eprocPct: 82, fullDigitalPct: 62, status: "At Risk" },
];

/* ── 6g. Insight & Rekomendasi ────────────────────────────────────── */

export const prosesInsights: PgdInsight[] = [
  {
    insight:
      "Tahap evaluasi memakan 11 hari (target 7) dan menahan 41 paket senilai Rp 1,96 T — penyumbang terbesar dari kelebihan 7 hari pada siklus 42 hari.",
    rekomendasi:
      "Bentuk panel evaluator tetap per kategori dengan SLA 7 hari dan eskalasi otomatis di hari ke-8; potensi pemangkasan siklus 4 hari tanpa tambahan biaya.",
  },
  {
    insight:
      "Paket dengan ≥ 5 peserta menghasilkan selisih 9,4% di bawah HPS, sedangkan paket berpeserta tunggal hanya 1,2% — kompetisi bernilai ±Rp 71 M pada 34 paket tunggal.",
    rekomendasi:
      "Wajibkan perpanjangan masa penawaran dan undangan aktif bila peserta < 3, serta jadikan paket tunggal objek review HPS oleh unit independen.",
  },
  {
    insight:
      "Adopsi e-Proc 84% tetapi hanya 66% paket sepenuhnya daring; unit dengan adopsi terendah (Regional 5, 80%) juga mencatat maverick spend tertinggi (10,6%).",
    rekomendasi:
      "Targetkan e-Proc 95% dan full-digital 85% pada 2027 dengan penonaktifan jalur manual di atas Rp 50 jt mulai Q4 2026.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   7. TKDN & INTEGRITAS (/pengadaan/tkdn-integritas)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 7a. KPI Strip ────────────────────────────────────────────────── */

export const tkdnKpi: PgdPageKpi[] = [
  {
    label: "TKDN Belanja",
    value: "68,4%",
    sub: "Tertimbang nilai · target pemerintah 65%",
    delta: "+3,4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Nilai Belanja TKDN",
    value: "Rp 8,48 T",
    sub: "68,4% dari belanja YTD Rp 12,4 T",
    delta: "+Rp 0,86 T",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Laporan Integritas Pengadaan",
    value: "14",
    sub: "Kategori WBS terbesar dari 47 laporan grup",
    delta: "+4",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Vendor Bersanksi",
    value: "26",
    sub: "18 sanksi administratif · 8 daftar hitam",
    delta: "+9",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Cakupan Pakta Integritas",
    value: "92,4%",
    sub: "1.152 dari 1.246 kontrak aktif · target 100%",
    delta: "+5,2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
];

/* ── 7b. TKDN per Kategori ────────────────────────────────────────── */

export interface PgdTkdnCategoryRow {
  kategori: PgdKategori;
  /** Belanja kategori (Rp T) — selaras spendByCategory di pgd-data.ts. */
  valueRpT: number;
  /** Tingkat komponen dalam negeri kategori (%). */
  tkdnPct: number;
  /** Nilai komponen dalam negeri (Rp T). */
  tkdnValueRpT: number;
  status: PgdStatus;
}

/**
 * Rata-rata tertimbang nilai = 68,4% = PENGADAAN.tkdnPct; belanja
 * menjumlah 12,40 T dan nilai TKDN menjumlah ±8,48 T.
 */
export const tkdnByCategory: PgdTkdnCategoryRow[] = [
  { kategori: "Jasa Borongan & Panen", valueRpT: 1.72, tkdnPct: 96.2, tkdnValueRpT: 1.65, status: "On Track" },
  { kategori: "BBM & Energi", valueRpT: 2.15, tkdnPct: 88.6, tkdnValueRpT: 1.9, status: "On Track" },
  { kategori: "Konstruksi & Proyek", valueRpT: 1.64, tkdnPct: 74.2, tkdnValueRpT: 1.22, status: "On Track" },
  { kategori: "Pupuk & Agrokimia", valueRpT: 3.6, tkdnPct: 68.2, tkdnValueRpT: 2.46, status: "At Risk" },
  { kategori: "Suku Cadang & Pemeliharaan", valueRpT: 1.86, tkdnPct: 42.8, tkdnValueRpT: 0.8, status: "At Risk" },
  { kategori: "Alat Berat & Kendaraan", valueRpT: 0.96, tkdnPct: 35.2, tkdnValueRpT: 0.34, status: "Off Track" },
  { kategori: "TI & Lisensi", valueRpT: 0.47, tkdnPct: 24.8, tkdnValueRpT: 0.12, status: "Off Track" },
];

/* ── 7c. Tren TKDN 8 Kuartal ──────────────────────────────────────── */

export interface PgdTkdnTrendPoint {
  kuartal: string;
  /** TKDN aktual (%). */
  aktual: number;
  /** Target regulasi (%). */
  target: number;
}

/** Berakhir 68,4% vs target 65% (PENGADAAN.tkdnPct & tkdnTargetPct). */
export const tkdnTrend: PgdTkdnTrendPoint[] = [
  { kuartal: "Q3 2024", aktual: 62.1, target: 65 },
  { kuartal: "Q4 2024", aktual: 63.4, target: 65 },
  { kuartal: "Q1 2025", aktual: 64.2, target: 65 },
  { kuartal: "Q2 2025", aktual: 65.1, target: 65 },
  { kuartal: "Q3 2025", aktual: 65.8, target: 65 },
  { kuartal: "Q4 2025", aktual: 66.7, target: 65 },
  { kuartal: "Q1 2026", aktual: 67.6, target: 65 },
  { kuartal: "Q2 2026", aktual: 68.4, target: 65 },
];

/* ── 7d. Kasus Integritas Pengadaan (14 laporan) ──────────────────── */

export type PgdIntegrityStage =
  | "Telaah Awal"
  | "Investigasi Penuh"
  | "Terbukti (Substantiated)"
  | "Sanksi / APH";

export interface PgdIntegrityCase {
  kode: string;
  jenis:
    | "Mark-up Harga / HPS"
    | "Pengaturan Tender / Persekongkolan"
    | "Konflik Kepentingan Vendor"
    | "Gratifikasi Proses Pengadaan";
  unit: string;
  tahap: PgdIntegrityStage;
  /** Nilai indikasi kerugian/eksposur (Rp M). */
  indikasiRpM: number;
  tone: "red" | "amber" | "green";
}

/**
 * 14 kasus = PENGADAAN.laporanIntegritasYtd dan caseByType "Fraud
 * Pengadaan" di risk-data-detail.ts. Distribusi tahap mengikuti
 * investigationFunnel: Telaah Awal 3 · Investigasi Penuh 5 ·
 * Terbukti 4 · Sanksi/APH 2.
 */
export const integrityCases: PgdIntegrityCase[] = [
  { kode: "PGD-01", jenis: "Mark-up Harga / HPS", unit: "PalmCo Regional 4", tahap: "Terbukti (Substantiated)", indikasiRpM: 2.4, tone: "red" },
  { kode: "PGD-02", jenis: "Mark-up Harga / HPS", unit: "SGN", tahap: "Investigasi Penuh", indikasiRpM: 1.8, tone: "amber" },
  { kode: "PGD-03", jenis: "Mark-up Harga / HPS", unit: "PalmCo Regional 5", tahap: "Investigasi Penuh", indikasiRpM: 1.2, tone: "amber" },
  { kode: "PGD-04", jenis: "Mark-up Harga / HPS", unit: "PalmCo Regional 3", tahap: "Sanksi / APH", indikasiRpM: 3.6, tone: "red" },
  { kode: "PGD-05", jenis: "Mark-up Harga / HPS", unit: "PTPN I", tahap: "Telaah Awal", indikasiRpM: 0.6, tone: "green" },
  { kode: "PGD-06", jenis: "Pengaturan Tender / Persekongkolan", unit: "PalmCo Regional 4", tahap: "Terbukti (Substantiated)", indikasiRpM: 1.9, tone: "red" },
  { kode: "PGD-07", jenis: "Pengaturan Tender / Persekongkolan", unit: "SGN", tahap: "Investigasi Penuh", indikasiRpM: 1.4, tone: "amber" },
  { kode: "PGD-08", jenis: "Pengaturan Tender / Persekongkolan", unit: "PalmCo Regional 1", tahap: "Sanksi / APH", indikasiRpM: 2.2, tone: "red" },
  { kode: "PGD-09", jenis: "Pengaturan Tender / Persekongkolan", unit: "PalmCo Regional 5", tahap: "Telaah Awal", indikasiRpM: 0.4, tone: "green" },
  { kode: "PGD-10", jenis: "Konflik Kepentingan Vendor", unit: "SGN", tahap: "Terbukti (Substantiated)", indikasiRpM: 0.9, tone: "red" },
  { kode: "PGD-11", jenis: "Konflik Kepentingan Vendor", unit: "PTPN I", tahap: "Investigasi Penuh", indikasiRpM: 0.7, tone: "amber" },
  { kode: "PGD-12", jenis: "Konflik Kepentingan Vendor", unit: "PalmCo Regional 3", tahap: "Telaah Awal", indikasiRpM: 0.3, tone: "green" },
  { kode: "PGD-13", jenis: "Gratifikasi Proses Pengadaan", unit: "PalmCo Regional 1", tahap: "Terbukti (Substantiated)", indikasiRpM: 0.5, tone: "red" },
  { kode: "PGD-14", jenis: "Gratifikasi Proses Pengadaan", unit: "PalmCo Regional 4", tahap: "Investigasi Penuh", indikasiRpM: 0.4, tone: "amber" },
];

/** Ringkasan tahap — menjumlah 14 laporan. */
export interface PgdIntegrityStageRow {
  tahap: PgdIntegrityStage;
  jumlah: number;
  color: string;
}

export const integrityByStage: PgdIntegrityStageRow[] = [
  { tahap: "Telaah Awal", jumlah: 3, color: PALETTE.slate },
  { tahap: "Investigasi Penuh", jumlah: 5, color: PALETTE.amber },
  { tahap: "Terbukti (Substantiated)", jumlah: 4, color: PALETTE.red },
  { tahap: "Sanksi / APH", jumlah: 2, color: PALETTE.purple },
];

/* ── 7e. Efektivitas Kontrol Pengadaan ────────────────────────────── */

export interface PgdControlRow {
  kontrol: string;
  /** Cakupan penerapan kontrol (%). */
  cakupanPct: number;
  /** Skor efektivitas hasil pengujian 0-100. */
  efektivitas: number;
  /** Jumlah temuan audit terkait kontrol ini YTD. */
  temuan: number;
  status: PgdStatus;
  catatan: string;
}

/** Empat kontrol kunci; temuan menjumlah 24 temuan audit kategori pengadaan. */
export const controlEffectiveness: PgdControlRow[] = [
  {
    kontrol: "Segregation of Duties (peminta ≠ pemesan ≠ penerima)",
    cakupanPct: 88.6,
    efektivitas: 82,
    temuan: 6,
    status: "At Risk",
    catatan: "11,4% unit kecil masih merangkap peran peminta dan penerima barang.",
  },
  {
    kontrol: "e-Catalog & harga referensi terkunci",
    cakupanPct: 74.2,
    efektivitas: 78,
    temuan: 5,
    status: "At Risk",
    catatan: "Cakupan terbatas pada kategori rutin; maverick spend 8,4% lolos kontrol.",
  },
  {
    kontrol: "Review HPS oleh unit independen",
    cakupanPct: 62.4,
    efektivitas: 64,
    temuan: 9,
    status: "Off Track",
    catatan: "Akar utama 5 kasus mark-up; paket berpeserta tunggal belum wajib direview.",
  },
  {
    kontrol: "Audit pengadaan berbasis risiko (SPI)",
    cakupanPct: 92.8,
    efektivitas: 86,
    temuan: 4,
    status: "On Track",
    catatan: "24 temuan kategori pengadaan YTD; 19 sudah ditindaklanjuti tuntas.",
  },
];

/* ── 7f. Insight & Rekomendasi ────────────────────────────────────── */

export const tkdnInsights: PgdInsight[] = [
  {
    insight:
      "TKDN 68,4% sudah 3,4 pts di atas kewajiban 65%, namun capaian ditopang jasa borongan (96,2%) dan BBM (88,6%); tiga kategori impor-intensif masih 24,8-42,8%.",
    rekomendasi:
      "Kunci posisi di atas 65% dengan menaikkan TKDN suku cadang ke 50% lewat kualifikasi manufaktur lokal, bukan dengan menambah porsi jasa.",
  },
  {
    insight:
      "Review HPS oleh unit independen hanya mencakup 62,4% paket dengan efektivitas 64 — kontrol terlemah sekaligus akar dari 5 kasus mark-up harga.",
    rekomendasi:
      "Wajibkan review HPS independen untuk seluruh paket > Rp 500 jt dan semua paket berpeserta tunggal (34 paket) mulai Q3 2026.",
  },
  {
    insight:
      "14 laporan integritas menjadikan pengadaan kategori WBS terbesar grup; 6 kasus terkonsentrasi di PalmCo Regional 4 dan Regional 5 — unit yang juga terendah adopsi e-Proc dan tertinggi maverick spend.",
    rekomendasi:
      "Jalankan audit tematik pengadaan di Regional 4 & 5 dan jadikan cakupan e-Proc plus pakta integritas 100% sebagai syarat pencabutan status pengawasan.",
  },
];

/* ── Ringkasan integritas untuk kartu konteks ─────────────────────── */

export const integritySummary = {
  laporanPengadaan: PENGADAAN.laporanIntegritasYtd,
  laporanWbsGrup: 47,
  terbukti: 4,
  sanksiAph: 2,
  vendorSanksiAdministratif: 18,
  vendorDaftarHitam: 8,
  temuanAuditPengadaan: 24,
  note: "14 dari 47 laporan WBS grup adalah dugaan fraud pengadaan (risk-data-detail.ts); 4 terbukti dan 2 telah masuk tahap sanksi/APH.",
} as const;
