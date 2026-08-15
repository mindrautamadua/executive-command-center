/**
 * Data statis dimensi K3 & Keamanan — lanjutan hse-data.ts.
 * Halaman: Kebakaran Lahan & Tanggap Darurat, Keamanan Aset & Kebun.
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik dari group-baseline.ts.
 *
 * Batas scope — jangan duplikasi:
 * - Insiden lingkungan & PROPER → /esg-sustainability/lingkungan-hayati
 * - Sengketa/penyerobotan lahan sebagai perkara → /aset-investasi/sengketa-lahan
 * - Register risiko enterprise (karhutla, keamanan aset) → /risiko-kepatuhan/risk-register
 * - Restan panen & logistik TBS → /produksi-operasi/panen-logistik
 * - Curah hujan & prakiraan El Nino → modul Agronomi & Iklim
 */

import { PALETTE } from "./chart-palette";
import type {
  HseCrossLink,
  HseDecision,
  HseInsight,
  HsePageKpi,
  HseRagStatus,
  HseRiskLevel,
} from "./hse-data";

/* ══════════════════════════════════════════════════════════════════════
   4. KEBAKARAN LAHAN & TANGGAP DARURAT (/k3-keamanan/karhutla)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const karhutlaKpi: HsePageKpi[] = [
  {
    label: "Hotspot Terdeteksi",
    value: "214", // = HSE.hotspotYtd
    valueSuffix: " titik",
    sub: "12 bulan · confidence ≥80% (VIIRS/MODIS)",
    delta: "+22",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Kejadian Kebakaran",
    value: "18", // = HSE.titikKebakaranYtd
    valueSuffix: " kejadian",
    sub: "Terverifikasi lapangan · 8,4% dari hotspot",
    delta: "+4",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Luas Terbakar",
    value: "142", // = HSE.luasTerbakarHa
    valueSuffix: " ha",
    sub: "0,013% areal tertanam · rata 7,9 ha/kejadian",
    delta: "+31 ha",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Waktu Respons Rata-rata",
    value: "42",
    valueSuffix: " menit",
    sub: "Deteksi → regu di lokasi · target ≤60 menit",
    delta: "-6 menit",
    trend: "down",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Regu Pemadam Kebakaran",
    value: "96", // = HSE.reguPemadam
    valueSuffix: " regu",
    sub: "1.144 personel terlatih · 15 personel/regu inti",
    delta: "+8",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Menara Pantau",
    value: "84", // = HSE.menaraPantau
    valueSuffix: " menara",
    sub: "Cakupan 71% blok rawan · usulan +18 menara",
    delta: "+6",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 4b. Tren Hotspot & Kejadian 12 Bulan ─────────────────────────── */

export interface HotspotTrendPoint {
  bulan: string;
  /** Hotspot terdeteksi satelit; total 12 bulan = 214. */
  hotspot: number;
  /** Kejadian kebakaran terverifikasi; total = 18. */
  kejadian: number;
  /** Luas terbakar bulan tersebut (ha); total = 142. */
  luasHa: number;
  /** Curah hujan rata-rata grup (mm) — pendorong utama risiko. */
  curahHujanMm: number;
}

/**
 * Rolling 12 bulan Jun 2025 – Mei 2026. Puncak musim kering Jul–Sep 2025
 * menyumbang 91 dari 214 hotspot (42,5%) dan 9 dari 18 kejadian.
 * Kenaikan Mar–Mei 2026 sejalan dengan pengeringan awal H2 2026;
 * probabilitas El Nino H2 sebesar 62% (RISIKO.elNinoProbabilitasPct).
 */
export const hotspotTrend: HotspotTrendPoint[] = [
  { bulan: "Jun 25", hotspot: 8, kejadian: 1, luasHa: 4, curahHujanMm: 148 },
  { bulan: "Jul 25", hotspot: 26, kejadian: 3, luasHa: 22, curahHujanMm: 92 },
  { bulan: "Agu 25", hotspot: 34, kejadian: 3, luasHa: 28, curahHujanMm: 64 },
  { bulan: "Sep 25", hotspot: 31, kejadian: 3, luasHa: 26, curahHujanMm: 78 },
  { bulan: "Okt 25", hotspot: 18, kejadian: 1, luasHa: 8, curahHujanMm: 136 },
  { bulan: "Nov 25", hotspot: 9, kejadian: 0, luasHa: 0, curahHujanMm: 214 },
  { bulan: "Des 25", hotspot: 5, kejadian: 0, luasHa: 0, curahHujanMm: 268 },
  { bulan: "Jan 26", hotspot: 6, kejadian: 0, luasHa: 0, curahHujanMm: 246 },
  { bulan: "Feb 26", hotspot: 11, kejadian: 1, luasHa: 6, curahHujanMm: 198 },
  { bulan: "Mar 26", hotspot: 16, kejadian: 1, luasHa: 9, curahHujanMm: 172 },
  { bulan: "Apr 26", hotspot: 22, kejadian: 2, luasHa: 14, curahHujanMm: 141 },
  { bulan: "Mei 26", hotspot: 28, kejadian: 3, luasHa: 25, curahHujanMm: 118 },
];

export const hotspotFootnote =
  "Prakiraan El Nino H2 2026 dengan probabilitas 62% dan pola historis Jul–Sep membuat jendela Juli–September 2026 sebagai periode risiko tertinggi; prakiraan curah hujan detail ada pada modul Agronomi & Iklim.";

/* ── 4c. Kebakaran per Regional ───────────────────────────────────── */

export interface FireRegionalRow {
  regional: string;
  /** Hotspot 12 bulan; total = 214. */
  hotspot: number;
  /** Kejadian terverifikasi; total = 18. */
  kejadian: number;
  /** Luas terbakar (ha); total = 142. */
  luasHa: number;
  /** Waktu respons rata-rata regional (menit). */
  responsMenit: number;
  risiko: HseRiskLevel;
}

/** Total: 214 hotspot · 18 kejadian · 142 ha (= HSE). */
export const fireByRegional: FireRegionalRow[] = [
  { regional: "Regional 1 (Sumut)", hotspot: 12, kejadian: 1, luasHa: 6, responsMenit: 32, risiko: "Rendah" },
  { regional: "Regional 2 (Sumut)", hotspot: 14, kejadian: 1, luasHa: 8, responsMenit: 34, risiko: "Rendah" },
  { regional: "Regional 3 (Riau)", hotspot: 58, kejadian: 5, luasHa: 42, responsMenit: 48, risiko: "Sangat Tinggi" },
  { regional: "Regional 4 (Jambi–Sumbar)", hotspot: 22, kejadian: 2, luasHa: 14, responsMenit: 41, risiko: "Sedang" },
  { regional: "Regional 5 (Sumsel–Lampung)", hotspot: 46, kejadian: 4, luasHa: 32, responsMenit: 44, risiko: "Tinggi" },
  { regional: "Regional 6 (Kalimantan)", hotspot: 48, kejadian: 4, luasHa: 34, responsMenit: 52, risiko: "Tinggi" },
  { regional: "Regional 7 (Sulawesi–Papua)", hotspot: 14, kejadian: 1, luasHa: 6, responsMenit: 46, risiko: "Sedang" },
];

/* ── 4d. Penyebab Kebakaran ───────────────────────────────────────── */

export interface FireCauseRow {
  penyebab: string;
  /** Kejadian; total = 18. */
  kejadian: number;
  /** Luas terbakar (ha); total = 142. */
  luasHa: number;
  pct: number;
  color: string;
  /** Rute pendalaman bila penyebab beririsan dimensi lain. */
  href?: string;
  hrefLabel?: string;
  catatan: string;
}

/** Total 18 kejadian & 142 ha (= HSE.titikKebakaranYtd, HSE.luasTerbakarHa). */
export const fireCauses: FireCauseRow[] = [
  {
    penyebab: "Pembukaan Lahan Masyarakat",
    kejadian: 7,
    luasHa: 62,
    pct: 38.9,
    color: PALETTE.red,
    catatan: "Api rambatan dari pembukaan lahan di areal berbatasan; ditangani via program Masyarakat Peduli Api.",
  },
  {
    penyebab: "Puntung Rokok & Kelalaian",
    kejadian: 4,
    luasHa: 24,
    pct: 22.2,
    color: PALETTE.amber,
    catatan: "Kelalaian di jalur akses & area istirahat pekerja; mitigasi melalui rambu dan patroli internal.",
  },
  {
    penyebab: "Konflik Lahan",
    kejadian: 3,
    luasHa: 34,
    pct: 16.7,
    color: "#f97316",
    href: "/aset-investasi/sengketa-lahan",
    hrefLabel: "Sengketa Lahan",
    catatan: "Terjadi di blok yang berstatus sengketa; penyelesaian akar masalah ada pada dimensi Aset & Investasi.",
  },
  {
    penyebab: "Alam / Petir",
    kejadian: 2,
    luasHa: 11,
    pct: 11.1,
    color: PALETTE.blue,
    catatan: "Sambaran petir pada areal gambut kering; tidak dapat dicegah, fokus pada kecepatan respons.",
  },
  {
    penyebab: "Tidak Diketahui",
    kejadian: 2,
    luasHa: 11,
    pct: 11.1,
    color: PALETTE.slate,
    catatan: "Investigasi tidak menemukan penyebab konklusif; ditandai untuk penguatan pemantauan blok terkait.",
  },
];

/* ── 4e. Kapabilitas Respons per Regional ─────────────────────────── */

export interface ResponseCapabilityRow {
  regional: string;
  /** Regu pemadam; total = 96. */
  regu: number;
  /** Menara pantau; total = 84. */
  menara: number;
  /** Embung & sumber air siaga; total = 121. */
  embung: number;
  /** Personel terlatih pemadaman; total = 1.144. */
  personel: number;
  /** Unit peralatan utama (pompa, selang, mobil damkar); total = 486. */
  peralatan: number;
  /** Rasio kecukupan terhadap kebutuhan blok rawan (%). */
  kecukupanPct: number;
  status: HseRagStatus;
}

/** Total: 96 regu · 84 menara (= HSE.reguPemadam, HSE.menaraPantau). */
export const responseCapability: ResponseCapabilityRow[] = [
  { regional: "Regional 1 (Sumut)", regu: 11, menara: 9, embung: 14, personel: 128, peralatan: 56, kecukupanPct: 92, status: "Hijau" },
  { regional: "Regional 2 (Sumut)", regu: 13, menara: 11, embung: 16, personel: 152, peralatan: 64, kecukupanPct: 94, status: "Hijau" },
  { regional: "Regional 3 (Riau)", regu: 20, menara: 18, embung: 26, personel: 240, peralatan: 108, kecukupanPct: 68, status: "Merah" },
  { regional: "Regional 4 (Jambi–Sumbar)", regu: 11, menara: 10, embung: 13, personel: 132, peralatan: 58, kecukupanPct: 84, status: "Amber" },
  { regional: "Regional 5 (Sumsel–Lampung)", regu: 15, menara: 14, embung: 20, personel: 180, peralatan: 82, kecukupanPct: 72, status: "Amber" },
  { regional: "Regional 6 (Kalimantan)", regu: 17, menara: 15, embung: 22, personel: 204, peralatan: 88, kecukupanPct: 66, status: "Merah" },
  { regional: "Regional 7 (Sulawesi–Papua)", regu: 9, menara: 7, embung: 10, personel: 108, peralatan: 30, kecukupanPct: 74, status: "Amber" },
];

/* ── 4f. Tingkat Kesiapsiagaan per Regional ───────────────────────── */

export type SiagaStatus = "Normal" | "Waspada" | "Siaga" | "Tanggap Darurat";

export const SIAGA_COLOR: Record<SiagaStatus, string> = {
  Normal: PALETTE.green,
  Waspada: PALETTE.amber,
  Siaga: "#f97316",
  "Tanggap Darurat": PALETTE.red,
};

export interface PreparednessRow {
  regional: string;
  /** Skor kesiapsiagaan komposit 0-100 (SDM, alat, prosedur, latihan). */
  skor: number;
  status: SiagaStatus;
  /** Simulasi tanggap darurat terakhir. */
  drillTerakhir: string;
  catatan: string;
}

/** Skor komposit grup 76 (rata-rata tertimbang luas areal). */
export const preparednessLevel: PreparednessRow[] = [
  { regional: "Regional 1 (Sumut)", skor: 86, status: "Normal", drillTerakhir: "Apr 2026", catatan: "Cakupan menara & embung memadai" },
  { regional: "Regional 2 (Sumut)", skor: 88, status: "Normal", drillTerakhir: "Mar 2026", catatan: "Respons tercepat grup (34 menit)" },
  { regional: "Regional 3 (Riau)", skor: 64, status: "Siaga", drillTerakhir: "Mei 2026", catatan: "Hotspot & luas terbakar tertinggi; blok gambut luas" },
  { regional: "Regional 4 (Jambi–Sumbar)", skor: 78, status: "Waspada", drillTerakhir: "Apr 2026", catatan: "Cukup, namun akses blok selatan terbatas" },
  { regional: "Regional 5 (Sumsel–Lampung)", skor: 70, status: "Siaga", drillTerakhir: "Mei 2026", catatan: "Areal kering luas, kecukupan alat 72%" },
  { regional: "Regional 6 (Kalimantan)", skor: 66, status: "Siaga", drillTerakhir: "Mei 2026", catatan: "Respons terlama (52 menit); jarak antar-blok jauh" },
  { regional: "Regional 7 (Sulawesi–Papua)", skor: 74, status: "Waspada", drillTerakhir: "Feb 2026", catatan: "Risiko rendah namun peralatan paling terbatas" },
];

/* ── 4g. Simulasi Tanggap Darurat ─────────────────────────────────── */

export interface EmergencyDrillRow {
  jenis: string;
  /** Jumlah simulasi YTD; total = 196. */
  jumlah: number;
  /** Unit yang tercakup dari 76 unit. */
  unitTercakup: number;
  /** Peserta simulasi YTD. */
  peserta: number;
  /** Rata-rata waktu evakuasi/penanganan hasil simulasi. */
  hasil: string;
  status: HseRagStatus;
}

/** Total 196 simulasi YTD; basis unit 76. */
export const emergencyDrills: EmergencyDrillRow[] = [
  { jenis: "Simulasi Kebakaran Lahan & Kebun", jumlah: 96, unitTercakup: 76, peserta: 4820, hasil: "Regu tiba di titik uji rata-rata 38 menit", status: "Amber" },
  { jenis: "Simulasi Evakuasi Pabrik", jumlah: 58, unitTercakup: 67, peserta: 3240, hasil: "Evakuasi tuntas rata-rata 6,4 menit (target ≤8)", status: "Hijau" },
  { jenis: "Simulasi Kebocoran Bahan Kimia", jumlah: 42, unitTercakup: 52, peserta: 1680, hasil: "Isolasi area rata-rata 11,2 menit (target ≤10)", status: "Amber" },
];

export const drillFootnote =
  "Simulasi evakuasi pabrik mencakup 67 pabrik aktif dan tidak aktif (36 PKS, 17 PG, 9 pabrik karet, 5 pabrik teh); simulasi bahan kimia terbatas pada unit dengan gudang B3 bersertifikat.";

/* ── 4h. Kemitraan Masyarakat Peduli Api ──────────────────────────── */

export interface CommunityFireRow {
  regional: string;
  /** Kelompok Masyarakat Peduli Api (MPA) binaan; total = 148. */
  kelompok: number;
  /** Desa binaan; total = 214. */
  desa: number;
  /** Anggota MPA aktif; total = 2.960. */
  anggota: number;
  /** Anggaran pembinaan YTD (Rp juta); total = 6.840. */
  anggaranRpJt: number;
}

/** Total: 148 kelompok · 214 desa · 2.960 anggota · Rp 6,84 M YTD. */
export const communityFirePartnership: CommunityFireRow[] = [
  { regional: "Regional 1 (Sumut)", kelompok: 16, desa: 22, anggota: 320, anggaranRpJt: 680 },
  { regional: "Regional 2 (Sumut)", kelompok: 18, desa: 26, anggota: 360, anggaranRpJt: 780 },
  { regional: "Regional 3 (Riau)", kelompok: 34, desa: 51, anggota: 680, anggaranRpJt: 1720 },
  { regional: "Regional 4 (Jambi–Sumbar)", kelompok: 17, desa: 24, anggota: 340, anggaranRpJt: 720 },
  { regional: "Regional 5 (Sumsel–Lampung)", kelompok: 28, desa: 41, anggota: 560, anggaranRpJt: 1380 },
  { regional: "Regional 6 (Kalimantan)", kelompok: 26, desa: 36, anggota: 520, anggaranRpJt: 1180 },
  { regional: "Regional 7 (Sulawesi–Papua)", kelompok: 9, desa: 14, anggota: 180, anggaranRpJt: 380 },
];

export const communityFireMeta = {
  kelompokTotal: 148,
  desaTotal: 214,
  anggotaTotal: 2960,
  anggaranYtdRpJt: 6840,
  catatan:
    "Pendanaan pembinaan MPA merupakan bagian dari program TJSL; efektivitas terlihat dari turunnya api rambatan di desa binaan (7 dari 18 kejadian berasal dari pembukaan lahan masyarakat, mayoritas di desa non-binaan).",
} as const;

/* ── 4i. Keputusan Terkait Karhutla ───────────────────────────────── */

export const karhutlaDecisions: HseDecision[] = [
  {
    title: "Aktivasi Status Siaga Karhutla Jul–Sep 2026",
    impact: "High Impact",
    tone: "red",
    context:
      "Probabilitas El Nino H2 62% dan pola historis (91 dari 214 hotspot pada Jul–Sep) menempatkan kuartal berjalan sebagai jendela risiko tertinggi; kecukupan alat Regional 3 dan 6 baru 68% dan 66%.",
    rekomendasi:
      "Aktifkan status Siaga grup per 1 Juli 2026, mobilisasi regu lintas regional ke Regional 3, 5, 6, dan siapkan anggaran tanggap darurat Rp 18 M.",
    due: "Q3 2026",
  },
  {
    title: "Perluasan Masyarakat Peduli Api ke 60 Desa Baru",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Penyebab terbesar kebakaran adalah rambatan dari pembukaan lahan masyarakat (7 kejadian, 62 ha); 148 kelompok MPA saat ini belum menjangkau seluruh desa berbatasan blok rawan.",
    rekomendasi:
      "Tambah 60 desa binaan (anggaran TJSL Rp 2,4 M) dengan prioritas desa berbatasan blok gambut Regional 3 dan 6.",
    due: "Q4 2026",
  },
];

/* ── 4j. Insight & Rekomendasi ────────────────────────────────────── */

export const karhutlaInsights: HseInsight[] = [
  {
    insight:
      "Regional 3, 5, dan 6 menyumbang 152 dari 214 hotspot (71%), 13 dari 18 kejadian, dan 108 dari 142 ha luas terbakar — namun justru memiliki kecukupan peralatan terendah (66–72%).",
    rekomendasi:
      "Realokasi peralatan dan tambahan 18 menara pantau ke tiga regional tersebut sebelum Juli 2026; jangan sebar merata.",
  },
  {
    insight:
      "Waktu respons grup 42 menit sudah di bawah target ≤60 menit, tetapi Regional 6 (52 menit) dan Regional 3 (48 menit) menahan perbaikan dan berkorelasi dengan luas terbakar per kejadian tertinggi.",
    rekomendasi:
      "Tetapkan target respons diferensial ≤35 menit untuk blok gambut & areal kering, didukung pos regu maju dan embung tambahan.",
  },
  {
    insight:
      "Hanya 8,4% hotspot berujung kebakaran terverifikasi — sistem deteksi bekerja, namun verifikasi lapangan atas 196 hotspot non-kejadian menyerap kapasitas regu.",
    rekomendasi:
      "Integrasikan kamera termal menara pantau dengan feed satelit agar verifikasi awal dilakukan jarak jauh dan patroli hanya untuk alert terkonfirmasi.",
  },
  {
    insight:
      "Simulasi kebocoran bahan kimia baru menjangkau 52 dari 76 unit dengan waktu isolasi 11,2 menit di atas target 10 menit.",
    rekomendasi:
      "Perluas simulasi B3 ke seluruh unit bergudang bahan kimia dan tetapkan ulang prosedur isolasi sebelum audit SMK3 berikutnya.",
  },
];

/* ── 4k. Cross-Link Halaman Karhutla ──────────────────────────────── */

export const karhutlaCrossLinks: HseCrossLink[] = [
  {
    label: "Sengketa Lahan",
    href: "/aset-investasi/sengketa-lahan",
    catatan: "3 kejadian kebakaran (34 ha) terjadi di blok berstatus sengketa; penyelesaian status lahan ada di dimensi Aset & Investasi.",
  },
  {
    label: "Air, Limbah & Biodiversitas",
    href: "/esg-sustainability/lingkungan-hayati",
    catatan: "Dampak lingkungan kebakaran dan peringkat PROPER unit terdampak dilaporkan pada dimensi ESG.",
  },
  {
    label: "Risk Register Korporat",
    href: "/risiko-kepatuhan/risk-register",
    catatan: "Kebakaran lahan terdaftar sebagai risiko enterprise dengan pemilik risiko dan rencana mitigasi formal.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   5. KEAMANAN ASET & KEBUN (/k3-keamanan/keamanan-aset)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const keamananKpi: HsePageKpi[] = [
  {
    label: "Pencurian TBS",
    value: "312", // = HSE.pencurianTbsKasus
    valueSuffix: " kasus",
    sub: "YTD · 76,5% dari seluruh insiden keamanan",
    delta: "+11,4%",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Nilai Kerugian",
    value: "Rp 8,4 M", // = HSE.kerugianPencurianRpM
    sub: "YTD · rata-rata Rp 26,9 juta per kasus",
    delta: "+14,8%",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Personel Pengamanan",
    value: "1.240", // = HSE.personelPengamanan
    valueSuffix: " personel",
    sub: "Satpam & pengamanan kebun · rasio 2,44/1.000 ha",
    delta: "+62",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Kasus Terselesaikan",
    value: "68,0%",
    sub: "277 dari 408 laporan tuntas · target 80%",
    delta: "+5,2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Gangguan Keamanan Lain",
    value: "96",
    valueSuffix: " kasus",
    sub: "Pencurian aset, perusakan, penyerobotan, demo",
    delta: "+7",
    trend: "up",
    deltaTone: "bad",
    tone: "purple",
  },
  {
    label: "Area Rawan",
    value: "34",
    valueSuffix: " blok",
    sub: "Blok prioritas patroli · 62% di Regional 3, 5, 6",
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
];

/* ── 5b. Tren Pencurian TBS 12 Bulan ──────────────────────────────── */

export interface TheftTrendPoint {
  bulan: string;
  /** Kasus pencurian TBS; total 12 bulan = 312. */
  kasus: number;
  /** Nilai kerugian (Rp miliar); total = 8,4. */
  kerugianRpM: number;
  /** Harga TBS rata-rata (Rp/kg) — pendorong insentif pencurian. */
  hargaTbsRpKg: number;
}

/** Rolling 12 bulan Jun 2025 – Mei 2026; total 312 kasus & Rp 8,4 M. */
export const theftTrend: TheftTrendPoint[] = [
  { bulan: "Jun 25", kasus: 22, kerugianRpM: 0.58, hargaTbsRpKg: 2680 },
  { bulan: "Jul 25", kasus: 24, kerugianRpM: 0.63, hargaTbsRpKg: 2740 },
  { bulan: "Agu 25", kasus: 26, kerugianRpM: 0.69, hargaTbsRpKg: 2810 },
  { bulan: "Sep 25", kasus: 28, kerugianRpM: 0.76, hargaTbsRpKg: 2890 },
  { bulan: "Okt 25", kasus: 30, kerugianRpM: 0.81, hargaTbsRpKg: 2940 },
  { bulan: "Nov 25", kasus: 27, kerugianRpM: 0.72, hargaTbsRpKg: 2870 },
  { bulan: "Des 25", kasus: 24, kerugianRpM: 0.64, hargaTbsRpKg: 2790 },
  { bulan: "Jan 26", kasus: 21, kerugianRpM: 0.56, hargaTbsRpKg: 2760 },
  { bulan: "Feb 26", kasus: 23, kerugianRpM: 0.62, hargaTbsRpKg: 2820 },
  { bulan: "Mar 26", kasus: 27, kerugianRpM: 0.73, hargaTbsRpKg: 2960 },
  { bulan: "Apr 26", kasus: 29, kerugianRpM: 0.78, hargaTbsRpKg: 3040 },
  { bulan: "Mei 26", kasus: 31, kerugianRpM: 0.88, hargaTbsRpKg: 3120 },
];

/* ── 5c. Pencurian per Regional vs Restan Panen ───────────────────── */

export interface TheftRegionalRow {
  regional: string;
  /** Kasus pencurian TBS; total = 312. */
  kasus: number;
  /** Kerugian (Rp miliar); total = 8,4. */
  kerugianRpM: number;
  /** Restan panen regional (%) — sumber: /produksi-operasi/panen-logistik. */
  restanPct: number;
  /** Personel pengamanan regional (selaras securityCoverage). */
  personel: number;
  risiko: HseRiskLevel;
}

/**
 * Total 312 kasus & Rp 8,4 M. Kolom restanPct dikutip dari data panen &
 * logistik (norma <2%) untuk menunjukkan korelasi TBS menginap di TPH
 * dengan peluang kehilangan — pendalaman restan di dimensi Produksi.
 */
export const theftByRegional: TheftRegionalRow[] = [
  { regional: "Regional 1 (Sumut)", kasus: 28, kerugianRpM: 0.72, restanPct: 1.2, personel: 168, risiko: "Rendah" },
  { regional: "Regional 2 (Sumut)", kasus: 34, kerugianRpM: 0.88, restanPct: 1.4, personel: 194, risiko: "Sedang" },
  { regional: "Regional 3 (Riau)", kasus: 74, kerugianRpM: 2.04, restanPct: 1.6, personel: 246, risiko: "Sangat Tinggi" },
  { regional: "Regional 4 (Jambi–Sumbar)", kasus: 26, kerugianRpM: 0.66, restanPct: 1.9, personel: 142, risiko: "Sedang" },
  { regional: "Regional 5 (Sumsel–Lampung)", kasus: 68, kerugianRpM: 1.86, restanPct: 2.1, personel: 198, risiko: "Tinggi" },
  { regional: "Regional 6 (Kalimantan)", kasus: 62, kerugianRpM: 1.72, restanPct: 2.4, personel: 190, risiko: "Tinggi" },
  { regional: "Regional 7 (Sulawesi–Papua)", kasus: 20, kerugianRpM: 0.52, restanPct: 2.2, personel: 102, risiko: "Rendah" },
];

export const theftRestanFootnote =
  "Regional 5 dan 6 menggabungkan restan di atas norma (2,1% dan 2,4%) dengan kasus pencurian tinggi; Regional 3 memiliki kasus tertinggi meski restan 1,6% karena kepadatan akses jalan umum ke blok. Data restan panen bersumber dari /produksi-operasi/panen-logistik.";

/* ── 5d. Jenis Insiden Keamanan ───────────────────────────────────── */

export interface SecurityIncidentRow {
  jenis: string;
  /** Jumlah kasus; total 4 jenis non-TBS = 96, dengan TBS = 408. */
  kasus: number;
  pct: number;
  /** Nilai kerugian (Rp miliar). */
  kerugianRpM: number;
  color: string;
  href?: string;
  hrefLabel?: string;
  catatan: string;
}

/**
 * Total 408 insiden keamanan YTD = 312 pencurian TBS + 96 gangguan lain
 * (= HSE.pencurianTbsKasus + gangguan keamanan lain).
 * Total kerugian Rp 12,7 M (Rp 8,4 M di antaranya dari pencurian TBS).
 */
export const securityIncidentType: SecurityIncidentRow[] = [
  {
    jenis: "Pencurian TBS",
    kasus: 312,
    pct: 76.5,
    kerugianRpM: 8.4,
    color: PALETTE.red,
    catatan: "Dominan pada blok berbatasan jalan umum dan TPH dengan restan tinggi.",
  },
  {
    jenis: "Pencurian Aset & Suku Cadang",
    kasus: 38,
    pct: 9.3,
    kerugianRpM: 2.1,
    color: PALETTE.amber,
    catatan: "Kabel, komponen pabrik, dan suku cadang alat berat; sebagian melibatkan orang dalam.",
  },
  {
    jenis: "Penyerobotan Lahan",
    kasus: 22,
    pct: 5.4,
    kerugianRpM: 1.4,
    color: "#f97316",
    href: "/aset-investasi/sengketa-lahan",
    hrefLabel: "Sengketa Lahan",
    catatan: "Penguasaan fisik areal tanpa hak; aspek legal & perkara ditangani dimensi Aset & Investasi.",
  },
  {
    jenis: "Perusakan Aset",
    kasus: 21,
    pct: 5.1,
    kerugianRpM: 0.6,
    color: PALETTE.purple,
    catatan: "Perusakan pagar, pos jaga, dan tanaman; kerap menyertai konflik lahan.",
  },
  {
    jenis: "Gangguan Operasional / Demonstrasi",
    kasus: 15,
    pct: 3.7,
    kerugianRpM: 0.2,
    color: PALETTE.slate,
    catatan: "Pemblokiran akses & unjuk rasa; penanganan hubungan industrial di /industrial-relations.",
  },
];

/* ── 5e. Cakupan Pengamanan per Regional ──────────────────────────── */

export interface SecurityCoverageRow {
  regional: string;
  /** Personel pengamanan; total = 1.240. */
  personel: number;
  /** Rasio personel per 1.000 ha areal tertanam. */
  rasioPer1000Ha: number;
  /** Pos jaga aktif; total = 312. */
  posJaga: number;
  /** Kamera CCTV terpasang; total = 632. */
  cctv: number;
  /** Timbangan digital terintegrasi (smart weighbridge). */
  timbanganDigital: number;
  status: HseRagStatus;
}

/** Total: 1.240 personel (= HSE.personelPengamanan) · 312 pos · 632 CCTV. */
export const securityCoverage: SecurityCoverageRow[] = [
  { regional: "Regional 1 (Sumut)", personel: 168, rasioPer1000Ha: 2.26, posJaga: 42, cctv: 86, timbanganDigital: 6, status: "Hijau" },
  { regional: "Regional 2 (Sumut)", personel: 194, rasioPer1000Ha: 2.24, posJaga: 48, cctv: 98, timbanganDigital: 7, status: "Hijau" },
  { regional: "Regional 3 (Riau)", personel: 246, rasioPer1000Ha: 2.78, posJaga: 62, cctv: 124, timbanganDigital: 8, status: "Amber" },
  { regional: "Regional 4 (Jambi–Sumbar)", personel: 142, rasioPer1000Ha: 2.26, posJaga: 36, cctv: 72, timbanganDigital: 4, status: "Hijau" },
  { regional: "Regional 5 (Sumsel–Lampung)", personel: 198, rasioPer1000Ha: 2.78, posJaga: 50, cctv: 102, timbanganDigital: 5, status: "Amber" },
  { regional: "Regional 6 (Kalimantan)", personel: 190, rasioPer1000Ha: 2.5, posJaga: 48, cctv: 96, timbanganDigital: 4, status: "Amber" },
  { regional: "Regional 7 (Sulawesi–Papua)", personel: 102, rasioPer1000Ha: 2.06, posJaga: 26, cctv: 54, timbanganDigital: 2, status: "Amber" },
];

export const securityCoverageFootnote =
  "Timbangan digital terintegrasi (smart weighbridge, 36 unit) menutup celah manipulasi berat TBS di jembatan timbang; program penggelarannya dikelola di /produksi-operasi/operational-excellence.";

/* ── 5f. Funnel Penyelesaian Kasus ────────────────────────────────── */

export interface ResolutionStageRow {
  tahap: string;
  jumlah: number;
  /** % terhadap total laporan (408). */
  pct: number;
  /** Rata-rata durasi tahap (hari). */
  durasiHari: number;
  color: string;
  catatan: string;
}

/**
 * Basis 408 laporan insiden keamanan YTD; 277 tuntas = 67,9% (≈68%,
 * selaras KPI "Kasus Terselesaikan").
 */
export const resolutionFunnel: ResolutionStageRow[] = [
  { tahap: "Laporan Diterima", jumlah: 408, pct: 100.0, durasiHari: 1, color: PALETTE.blue, catatan: "Laporan dari satpam, mandor, dan kanal pengaduan unit" },
  { tahap: "Penyelidikan Internal", jumlah: 356, pct: 87.3, durasiHari: 9, color: PALETTE.teal, catatan: "52 laporan tidak dilanjutkan karena bukti tidak memadai" },
  { tahap: "Penyelesaian Internal / Limpah APH", jumlah: 298, pct: 73.0, durasiHari: 21, color: PALETTE.amber, catatan: "214 diselesaikan internal · 84 dilimpahkan ke aparat penegak hukum" },
  { tahap: "Tuntas", jumlah: 277, pct: 67.9, durasiHari: 38, color: PALETTE.green, catatan: "131 kasus masih berproses atau tidak dapat dituntaskan" },
];

/* ── 5g. Kerugian & Pemulihan ─────────────────────────────────────── */

export interface LossRecoveryRow {
  kategori: string;
  /** Nilai kerugian (Rp miliar). */
  kerugianRpM: number;
  /** Nilai yang dipulihkan (barang kembali, ganti rugi, klaim). */
  pemulihanRpM: number;
  /** Tingkat pemulihan (%). */
  pemulihanPct: number;
  color: string;
}

/**
 * Total kerugian Rp 12,7 M (8,4 di antaranya pencurian TBS) dengan
 * pemulihan Rp 3,94 M (31,0%).
 */
export const lossRecovery: LossRecoveryRow[] = [
  { kategori: "Pencurian TBS", kerugianRpM: 8.4, pemulihanRpM: 2.35, pemulihanPct: 28.0, color: PALETTE.red },
  { kategori: "Pencurian Aset & Suku Cadang", kerugianRpM: 2.1, pemulihanRpM: 0.84, pemulihanPct: 40.0, color: PALETTE.amber },
  { kategori: "Penyerobotan Lahan", kerugianRpM: 1.4, pemulihanRpM: 0.56, pemulihanPct: 40.0, color: "#f97316" },
  { kategori: "Perusakan Aset", kerugianRpM: 0.6, pemulihanRpM: 0.17, pemulihanPct: 28.3, color: PALETTE.purple },
  { kategori: "Gangguan Operasional", kerugianRpM: 0.2, pemulihanRpM: 0.02, pemulihanPct: 10.0, color: PALETTE.slate },
];

export const lossRecoveryMeta = {
  kerugianTotalRpM: 12.7,
  pemulihanTotalRpM: 3.94,
  pemulihanPct: 31.0,
  catatan:
    "Pemulihan mencakup barang yang berhasil diamankan kembali, ganti rugi dari pelaku, dan klaim asuransi aset; kerugian pencurian TBS paling sulit dipulihkan karena buah cepat berpindah tangan.",
} as const;

/* ── 5h. Kerja Sama Aparat & Pemda ────────────────────────────────── */

export interface CollaborationRow {
  mitra: string;
  /** Nota kesepahaman aktif. */
  mou: number;
  /** Patroli bersama YTD. */
  patroliBersama: number;
  /** Kasus yang ditangani bersama YTD. */
  kasusDitangani: number;
  cakupan: string;
  status: HseRagStatus;
}

/** Total 34 MoU aktif · 486 patroli bersama · 84 kasus dilimpahkan ke APH. */
export const collaborationAparat: CollaborationRow[] = [
  { mitra: "Kepolisian (Polda/Polres)", mou: 14, patroliBersama: 268, kasusDitangani: 62, cakupan: "7 regional · fokus pencurian TBS & aset", status: "Hijau" },
  { mitra: "TNI (Kodim/Koramil)", mou: 11, patroliBersama: 164, kasusDitangani: 14, cakupan: "Blok rawan & pengamanan panen puncak", status: "Hijau" },
  { mitra: "Pemerintah Daerah", mou: 6, patroliBersama: 38, kasusDitangani: 6, cakupan: "Penertiban akses & koordinasi desa berbatasan", status: "Amber" },
  { mitra: "BPBD & Manggala Agni", mou: 3, patroliBersama: 16, kasusDitangani: 2, cakupan: "Dukungan pemadaman & tanggap darurat karhutla", status: "Amber" },
];

/* ── 5i. Keputusan Terkait Keamanan Aset ──────────────────────────── */

export const keamananDecisions: HseDecision[] = [
  {
    title: "Satgas Pengamanan Terpadu Panen Puncak Sep–Nov 2026",
    impact: "High Impact",
    tone: "amber",
    context:
      "Puncak panen bertepatan dengan harga TBS tertinggi 12 bulan (Rp 3.120/kg pada Mei 2026); pola 2025 menunjukkan kasus memuncak Sep–Okt (58 kasus dalam 2 bulan).",
    rekomendasi:
      "Bentuk satgas gabungan pengamanan–panen di Regional 3, 5, 6 dengan patroli bersama aparat, percepatan evakuasi TBS, dan penambahan 8 pos jaga sementara.",
    due: "Q3 2026",
  },
  {
    title: "Percepatan Smart Weighbridge ke 12 PKS Berikutnya",
    impact: "Medium Impact",
    tone: "green",
    context:
      "Baru 36 dari 76 unit memiliki timbangan digital terintegrasi; unit tanpa integrasi menunjukkan selisih berat TBS lebih tinggi dan tingkat pemulihan kerugian lebih rendah.",
    rekomendasi:
      "Prioritaskan 12 PKS di Regional 3, 5, 6 pada gelombang berikutnya; koordinasikan dengan program Operational Excellence agar capex tidak terduplikasi.",
    due: "Q4 2026",
  },
];

/* ── 5j. Insight & Rekomendasi ────────────────────────────────────── */

export const keamananInsights: HseInsight[] = [
  {
    insight:
      "Regional 3, 5, dan 6 menyumbang 204 dari 312 kasus (65,4%) dan Rp 5,62 M dari Rp 8,4 M kerugian, sementara rasio personel di ketiganya (2,50–2,78 per 1.000 ha) sudah di atas rata-rata grup 2,44 — penambahan personel saja tidak menyelesaikan masalah.",
    rekomendasi:
      "Alihkan strategi dari penambahan personel ke pengurangan peluang: percepatan evakuasi TBS, penutupan akses tidak resmi, dan CCTV di titik keluar blok.",
  },
  {
    insight:
      "Kasus naik seiring harga TBS (korelasi jelas Mar–Mei 2026: harga +13,0% dari Jan, kasus +47,6%) — pencurian bersifat oportunistik dan sensitif harga.",
    rekomendasi:
      "Naikkan intensitas patroli secara otomatis ketika harga TBS melewati ambang Rp 3.000/kg, bukan menunggu lonjakan kasus.",
  },
  {
    insight:
      "Tingkat penyelesaian 68% tertahan di tahap penyelidikan (52 laporan gugur karena bukti tidak memadai) dan pemulihan kerugian hanya 31%.",
    rekomendasi:
      "Standarkan protokol pengumpulan bukti awal oleh satpam unit (dokumentasi, berita acara, rantai bukti) agar kasus layak dilimpahkan ke APH.",
  },
  {
    insight:
      "22 kasus penyerobotan lahan dan 21 perusakan aset saling terkait dan berhimpit dengan 3 kejadian kebakaran di blok sengketa — masalah tunggal yang tampil di tiga dimensi berbeda.",
    rekomendasi:
      "Bentuk penanganan terpadu blok sengketa lintas fungsi (Keamanan, Legal, Aset) dengan satu rencana aksi per blok, bukan penanganan per insiden.",
  },
];

/* ── 5k. Cross-Link Halaman Keamanan Aset ─────────────────────────── */

export const keamananCrossLinks: HseCrossLink[] = [
  {
    label: "Panen & Logistik",
    href: "/produksi-operasi/panen-logistik",
    catatan: "Restan panen sebagai pendorong utama peluang pencurian TBS; norma restan <2% dikelola di dimensi Produksi.",
  },
  {
    label: "Operational Excellence",
    href: "/produksi-operasi/operational-excellence",
    catatan: "Program smart weighbridge dan integrasi jembatan timbang menutup celah kehilangan berat TBS.",
  },
  {
    label: "Sengketa Lahan",
    href: "/aset-investasi/sengketa-lahan",
    catatan: "Penyerobotan lahan dan perusakan aset di blok sengketa ditangani secara legal pada dimensi Aset & Investasi.",
  },
  {
    label: "Risk Register Korporat",
    href: "/risiko-kepatuhan/risk-register",
    catatan: "Keamanan aset terdaftar sebagai risiko enterprise dengan pemilik risiko dan mitigasi formal.",
  },
];
