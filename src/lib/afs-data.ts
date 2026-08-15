/**
 * Data statis halaman Fasilitas Produksi (/aset-investasi/fasilitas-produksi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (36 PKS, 17 PG, 9 karet, 5 teh, utilisasi PKS 78,4%) dan ast-core.ts
 * (facilitySummary: terpasang 2.145 / efektif 1.905 ton TBS/jam).
 *
 * Catatan konsistensi: nama & jumlah PG identik dengan pgReadiness di
 * pabrik-data.ts (17 unit). Sudut pandang halaman ini adalah aset (kapasitas,
 * kondisi, laba-rugi unit), bukan operasi harian — angkanya sama.
 */

import { PRODUKSI } from "./group-baseline";
import type { AstInsight, AstKpi } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const afsKpi: AstKpi[] = [
  {
    label: "Kapasitas Olah PKS",
    value: "1.905",
    sub: "Ton TBS/Jam Efektif · 36 PKS (terpasang 2.145)",
    delta: "-11,2%",
    trend: "down",
    deltaTone: "bad",
    compare: "derating vs kapasitas terpasang",
    icon: "pabrik",
    tone: "blue",
  },
  {
    label: "Kapasitas Giling PG",
    value: "82,5",
    sub: "Rb TCD · 17 PG · musim giling ±180 hari",
    delta: "0,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs musim giling 2025",
    icon: "pabrik",
    tone: "teal",
  },
  {
    label: "Utilisasi Rata-Rata",
    value: "78,4%",
    sub: "PKS · throughput agregat 1.680 ton TBS/jam",
    delta: "-3,6 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target RKAP 82,0%",
    icon: "pabrik",
    tone: "amber",
  },
  {
    label: "Availability Pabrik",
    value: "91,0%",
    sub: "Downtime 11.000 jam YTD (semua jenis)",
    delta: "-1,4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target ≥93,0%",
    icon: "nilai",
    tone: "red",
  },
  {
    label: "PG Merugi",
    value: "11/17",
    sub: "Kerugian agregat proyeksi FY Rp -0,6 T",
    delta: "0 unit",
    trend: "up",
    deltaTone: "bad",
    compare: "vs musim giling 2025",
    icon: "pabrik",
    tone: "red",
  },
  {
    label: "Pabrik Karet & Teh",
    value: "9 + 5",
    sub: "412 ton KK/hari · 186 ton pucuk/hari",
    delta: "1 idle",
    trend: "down",
    deltaTone: "bad",
    compare: "1 pabrik karet non-operasi",
    icon: "pabrik",
    tone: "green",
  },
];

/**
 * Availability 91,0% = 100% − downtime tak terencana 4,2% − pemeliharaan
 * terencana 4,8% (selaras pabKpi & downtimePareto pabrik-data.ts).
 */
export const AFS_AVAILABILITY_PCT = 91.0;
export const AFS_AVAILABILITY_TARGET_PCT = 93.0;
export const AFS_KAPASITAS_PKS_TERPASANG = 2145;
export const AFS_KAPASITAS_PKS_EFEKTIF = 1905;
export const AFS_KAPASITAS_PG_TCD = 82500;

/* ── 2. Utilisasi PKS per Regional ─────────────────────────────── */

export interface MillUtilizationRow {
  regional: string;
  /** Jumlah PKS di regional — jumlah 7 baris = 36 (PRODUKSI.pks). */
  unitPks: number;
  /** Kapasitas terpasang (ton TBS/jam) — jumlah = 2.145. */
  kapasitasTerpasang: number;
  /** Kapasitas efektif setelah derating (ton TBS/jam) — jumlah = 1.905. */
  kapasitasEfektif: number;
  /** Utilisasi terhadap kapasitas terpasang (%); rata tertimbang = 78,4. */
  utilisasiPct: number;
  targetPct: number;
}

/**
 * Rata-rata tertimbang kapasitas terpasang = 78,4% (PRODUKSI.utilisasiPksPct);
 * throughput agregat 2.145 × 78,4% ≈ 1.680 ton TBS/jam (selaras pabKpi).
 */
export const millUtilization: MillUtilizationRow[] = [
  { regional: "Regional 1 (Sumut)", unitPks: 5, kapasitasTerpasang: 320, kapasitasEfektif: 295, utilisasiPct: 84.2, targetPct: 82.0 },
  { regional: "Regional 2 (Sumut)", unitPks: 6, kapasitasTerpasang: 390, kapasitasEfektif: 360, utilisasiPct: 85.6, targetPct: 82.0 },
  { regional: "Regional 3 (Riau)", unitPks: 6, kapasitasTerpasang: 400, kapasitasEfektif: 360, utilisasiPct: 83.4, targetPct: 82.0 },
  { regional: "Regional 4 (Jambi–Sumbar)", unitPks: 4, kapasitasTerpasang: 230, kapasitasEfektif: 200, utilisasiPct: 75.0, targetPct: 82.0 },
  { regional: "Regional 5 (Sumsel–Lampung)", unitPks: 5, kapasitasTerpasang: 290, kapasitasEfektif: 255, utilisasiPct: 77.5, targetPct: 82.0 },
  { regional: "Regional 6 (Kalimantan)", unitPks: 6, kapasitasTerpasang: 330, kapasitasEfektif: 285, utilisasiPct: 68.5, targetPct: 82.0 },
  { regional: "Regional 7 (Sulawesi–Papua)", unitPks: 4, kapasitasTerpasang: 185, kapasitasEfektif: 150, utilisasiPct: 65.8, targetPct: 82.0 },
];

export const millUtilizationNote =
  "Derating 240 ton TBS/jam (11,2%) terkonsentrasi di Regional 4–7 — pabrik tua dengan sterilizer & press di luar spesifikasi. Regional 6–7 menggabungkan utilisasi terendah dengan derating terbesar.";

/* ── 3. Sugar Mill Health (17 PG) ────────────────────────────────── */

export type SugarMillStatus = "Sehat" | "Waspada" | "Merah";

export interface SugarMillRow {
  /** Nama identik dengan pgReadiness di pabrik-data.ts. */
  nama: string;
  wilayah: string;
  /** Kapasitas giling terpasang (TCD) — jumlah 17 PG = 82.500. */
  kapasitasTcd: number;
  /** Utilisasi kapasitas giling (%); rata tertimbang = 71,2. */
  utilisasiPct: number;
  /** Rendemen gula (%); rata tertimbang tebu digiling = 7,45. */
  rendemenPct: number;
  /** Proyeksi laba/rugi unit FY 2026 (Rp M); negatif = merugi. */
  labaRugiRpM: number;
  status: SugarMillStatus;
}

/**
 * 11 PG merugi (labaRugiRpM < 0) dengan kerugian agregat Rp -600 M
 * (= Rp -0,6 T, selaras assetIntelligence #02 di ast-data.ts); 6 PG untung
 * agregat Rp +434 M → net portofolio PG Rp -166 M.
 * Utilisasi tertimbang 71,2% (selaras utilizationSnapshot ast-data) dan
 * rendemen tertimbang 7,45% (PRODUKSI.rendemenGulaPct).
 * Tebu digiling FY = 58.740 TCD efektif × ±179 hari ≈ 10,5 jt ton →
 * gula ±780 rb ton (PRODUKSI.gulaFyRbTon).
 */
export const sugarMillHealth: SugarMillRow[] = [
  { nama: "PG Sei Semayang", wilayah: "Sumut", kapasitasTcd: 4000, utilisasiPct: 66, rendemenPct: 7.1, labaRugiRpM: -62, status: "Merah" },
  { nama: "PG Kwala Madu", wilayah: "Sumut", kapasitasTcd: 4000, utilisasiPct: 64, rendemenPct: 7.05, labaRugiRpM: -58, status: "Merah" },
  { nama: "PG Cinta Manis", wilayah: "Sumsel", kapasitasTcd: 6500, utilisasiPct: 58, rendemenPct: 6.85, labaRugiRpM: -130, status: "Merah" },
  { nama: "PG Bungamayang", wilayah: "Lampung", kapasitasTcd: 8000, utilisasiPct: 76, rendemenPct: 7.62, labaRugiRpM: 58, status: "Sehat" },
  { nama: "PG Gempolkrep", wilayah: "Jatim", kapasitasTcd: 7000, utilisasiPct: 72, rendemenPct: 7.36, labaRugiRpM: 18, status: "Waspada" },
  { nama: "PG Ngadiredjo", wilayah: "Jatim", kapasitasTcd: 6500, utilisasiPct: 84, rendemenPct: 8.05, labaRugiRpM: 112, status: "Sehat" },
  { nama: "PG Pesantren Baru", wilayah: "Jatim", kapasitasTcd: 5500, utilisasiPct: 77, rendemenPct: 7.62, labaRugiRpM: 46, status: "Sehat" },
  { nama: "PG Tjoekir", wilayah: "Jatim", kapasitasTcd: 4500, utilisasiPct: 69, rendemenPct: 7.28, labaRugiRpM: -28, status: "Merah" },
  { nama: "PG Modjopanggoong", wilayah: "Jatim", kapasitasTcd: 3800, utilisasiPct: 68, rendemenPct: 7.22, labaRugiRpM: -24, status: "Merah" },
  { nama: "PG Meritjan", wilayah: "Jatim", kapasitasTcd: 3200, utilisasiPct: 64, rendemenPct: 7.08, labaRugiRpM: -38, status: "Merah" },
  { nama: "PG Kremboong", wilayah: "Jatim", kapasitasTcd: 2800, utilisasiPct: 65, rendemenPct: 7.12, labaRugiRpM: -32, status: "Merah" },
  { nama: "PG Gending", wilayah: "Jatim", kapasitasTcd: 2400, utilisasiPct: 59, rendemenPct: 6.9, labaRugiRpM: -44, status: "Merah" },
  { nama: "PG Semboro", wilayah: "Jatim", kapasitasTcd: 7000, utilisasiPct: 82, rendemenPct: 7.88, labaRugiRpM: 96, status: "Sehat" },
  { nama: "PG Djatiroto", wilayah: "Jatim", kapasitasTcd: 8500, utilisasiPct: 80, rendemenPct: 7.9, labaRugiRpM: 104, status: "Sehat" },
  { nama: "PG Asembagus", wilayah: "Jatim", kapasitasTcd: 3400, utilisasiPct: 66, rendemenPct: 7.15, labaRugiRpM: -46, status: "Merah" },
  { nama: "PG Pradjekan", wilayah: "Jatim", kapasitasTcd: 2900, utilisasiPct: 62, rendemenPct: 7.0, labaRugiRpM: -58, status: "Merah" },
  { nama: "PG Wonolangan", wilayah: "Jatim", kapasitasTcd: 2500, utilisasiPct: 56, rendemenPct: 6.75, labaRugiRpM: -80, status: "Merah" },
];

export const SUGAR_MILL_MERAH = 11;
export const SUGAR_MILL_RUGI_AGREGAT_RP_M = -600;
export const SUGAR_MILL_NET_RP_M = -166;

export const sugarMillNote =
  "11 dari 17 PG merugi (Rp -600 M agregat); 5 PG masuk program revitalisasi Rp 3,1 T, 6 PG kecil sisanya (kapasitas <3.500 TCD, utilisasi <66%) menjadi kandidat konsolidasi giling sebelum musim 2027.";

/* ── 4. Umur vs Kondisi Pabrik (scatter) ───────────────────────── */

export interface AgeConditionPoint {
  pabrik: string;
  jenis: "PKS" | "PG";
  /** Umur pabrik (tahun sejak commissioning/overhaul mayor). */
  umurThn: number;
  /** Indeks kondisi aset 0–100; <60 = perlu intervensi capex. */
  kondisiIndex: number;
  utilisasiPct: number;
}

/** Ambang indeks kondisi: ≥75 baik, 60–74 waspada, <60 kritis. */
export const KONDISI_AMBANG_KRITIS = 60;
export const KONDISI_AMBANG_BAIK = 75;

export const ageCondition: AgeConditionPoint[] = [
  { pabrik: "PKS Sei Mangkei", jenis: "PKS", umurThn: 8, kondisiIndex: 92, utilisasiPct: 86.2 },
  { pabrik: "PKS Sei Rokan", jenis: "PKS", umurThn: 11, kondisiIndex: 88, utilisasiPct: 85.4 },
  { pabrik: "PKS Sosa", jenis: "PKS", umurThn: 14, kondisiIndex: 84, utilisasiPct: 82.1 },
  { pabrik: "PKS Terantam", jenis: "PKS", umurThn: 19, kondisiIndex: 79, utilisasiPct: 78.6 },
  { pabrik: "PKS Adolina", jenis: "PKS", umurThn: 22, kondisiIndex: 78, utilisasiPct: 84.8 },
  { pabrik: "PKS Tandun", jenis: "PKS", umurThn: 24, kondisiIndex: 76, utilisasiPct: 80.4 },
  { pabrik: "PKS Dolok Ilir", jenis: "PKS", umurThn: 26, kondisiIndex: 74, utilisasiPct: 83.5 },
  { pabrik: "PKS Sei Galuh", jenis: "PKS", umurThn: 27, kondisiIndex: 72, utilisasiPct: 76.8 },
  { pabrik: "PKS Bah Jambi", jenis: "PKS", umurThn: 29, kondisiIndex: 70, utilisasiPct: 79.2 },
  { pabrik: "PKS Parindu", jenis: "PKS", umurThn: 16, kondisiIndex: 66, utilisasiPct: 62.7 },
  { pabrik: "PKS Ngabang", jenis: "PKS", umurThn: 21, kondisiIndex: 61, utilisasiPct: 60.5 },
  { pabrik: "PKS Kertajaya", jenis: "PKS", umurThn: 31, kondisiIndex: 59, utilisasiPct: 61.4 },
  { pabrik: "PKS Rejosari", jenis: "PKS", umurThn: 34, kondisiIndex: 58, utilisasiPct: 63.8 },
  { pabrik: "PKS Ophir", jenis: "PKS", umurThn: 38, kondisiIndex: 52, utilisasiPct: 58.2 },
  { pabrik: "PG Ngadiredjo", jenis: "PG", umurThn: 48, kondisiIndex: 74, utilisasiPct: 84 },
  { pabrik: "PG Djatiroto", jenis: "PG", umurThn: 41, kondisiIndex: 62, utilisasiPct: 80 },
  { pabrik: "PG Gempolkrep", jenis: "PG", umurThn: 52, kondisiIndex: 64, utilisasiPct: 72 },
  { pabrik: "PG Cinta Manis", jenis: "PG", umurThn: 55, kondisiIndex: 56, utilisasiPct: 58 },
  { pabrik: "PG Wonolangan", jenis: "PG", umurThn: 63, kondisiIndex: 48, utilisasiPct: 56 },
];

export const ageConditionNote =
  "Korelasi umur–kondisi melemah di atas 30 tahun: yang menentukan bukan usia melainkan riwayat overhaul. PG Ngadiredjo (48 thn, indeks 74) mengungguli PKS Rejosari (34 thn, indeks 58) — 6 unit berada di bawah ambang kritis 60.";

/* ── 5. Downtime per Penyebab (stacked) ─────────────────────────── */

export interface DowntimeStackRow {
  jenis: string;
  /** Jam downtime YTD per penyebab; baris PKS identik downtimePareto pabrik-data. */
  mekanikalJam: number;
  pasokanJam: number;
  boilerJam: number;
  listrikJam: number;
  lainnyaJam: number;
  /** Total baris (jam) — jumlah 4 baris = 11.000. */
  totalJam: number;
}

/** Baris PKS = downtimePareto (2.432/1.664/1.024/768/512 = 6.400 jam). */
export const downtimeByCause: DowntimeStackRow[] = [
  { jenis: "PKS (36 unit)", mekanikalJam: 2432, pasokanJam: 1664, boilerJam: 1024, listrikJam: 768, lainnyaJam: 512, totalJam: 6400 },
  { jenis: "PG (17 unit)", mekanikalJam: 1180, pasokanJam: 720, boilerJam: 940, listrikJam: 310, lainnyaJam: 210, totalJam: 3360 },
  { jenis: "Pabrik Karet (9 unit)", mekanikalJam: 380, pasokanJam: 210, boilerJam: 90, listrikJam: 120, lainnyaJam: 70, totalJam: 870 },
  { jenis: "Pabrik Teh (5 unit)", mekanikalJam: 160, pasokanJam: 90, boilerJam: 40, listrikJam: 50, lainnyaJam: 30, totalJam: 370 },
];

export const DOWNTIME_TOTAL_JAM = 11000;

export const downtimeNote =
  "Kerusakan mekanikal (37,8%) dan kekurangan pasokan (24,4%) menyumbang 62% dari 11.000 jam downtime. Pada PG, boiler menjadi penyebab kedua terbesar (940 jam) — akar dari indeks kondisi rendah PG Wonolangan & Cinta Manis.";

/* ── 6. Kapasitas vs Pasokan 2026–2030 ─────────────────────────── */

export interface CapacitySupplyPoint {
  tahun: string;
  /** Kapasitas olah PKS setahun (jt ton TBS) pada basis kapasitas terpasang. */
  kapasitasSawitJtTon: number;
  /** Proyeksi pasokan TBS inti + plasma + pihak III (jt ton). */
  pasokanSawitJtTon: number;
  /** Kapasitas giling PG setahun (jt ton tebu) pada musim ±180 hari. */
  kapasitasTebuJtTon: number;
  /** Proyeksi pasokan tebu (jt ton). */
  pasokanTebuJtTon: number;
}

/**
 * Basis 2026: kapasitas sawit 11,3 jt ton ÷ utilisasi 78,4% ≈ 14,4 jt ton
 * (PRODUKSI.tbsDiolahFyJtTon); kapasitas tebu 82.500 TCD × 180 hari ≈ 14,9 jt
 * ton vs pasokan 10,5 jt ton (kurva giling produksi-data).
 * Kenaikan kapasitas 2028 & 2030 berasal dari revitalisasi 5 PG dan upgrade
 * kapasitas 6 PKS di pipeline investasi.
 */
export const capacityVsSupply: CapacitySupplyPoint[] = [
  { tahun: "2026", kapasitasSawitJtTon: 14.4, pasokanSawitJtTon: 11.3, kapasitasTebuJtTon: 14.9, pasokanTebuJtTon: 10.5 },
  { tahun: "2027", kapasitasSawitJtTon: 14.4, pasokanSawitJtTon: 11.6, kapasitasTebuJtTon: 14.9, pasokanTebuJtTon: 11.0 },
  { tahun: "2028", kapasitasSawitJtTon: 14.8, pasokanSawitJtTon: 11.9, kapasitasTebuJtTon: 15.4, pasokanTebuJtTon: 11.6 },
  { tahun: "2029", kapasitasSawitJtTon: 14.8, pasokanSawitJtTon: 12.4, kapasitasTebuJtTon: 15.4, pasokanTebuJtTon: 12.2 },
  { tahun: "2030", kapasitasSawitJtTon: 15.2, pasokanSawitJtTon: 13.1, kapasitasTebuJtTon: 15.8, pasokanTebuJtTon: 12.8 },
];

export interface CapacityGapRow {
  komoditas: string;
  /** Kelebihan kapasitas 2026 (jt ton). */
  gap2026JtTon: number;
  /** Kelebihan kapasitas 2030 (jt ton). */
  gap2030JtTon: number;
  implikasi: string;
}

export const capacityGap: CapacityGapRow[] = [
  {
    komoditas: "Sawit (PKS)",
    gap2026JtTon: 3.1,
    gap2030JtTon: 2.1,
    implikasi:
      "Kapasitas berlebih 21,5% pada 2026 menyusut jadi 13,8% pada 2030 — tambahan kapasitas baru tidak diperlukan; fokus debottlenecking & konsolidasi PKS kecil.",
  },
  {
    komoditas: "Tebu (PG)",
    gap2026JtTon: 4.4,
    gap2030JtTon: 3.0,
    implikasi:
      "Kapasitas berlebih 29,5% adalah akar rugi 11 PG (biaya tetap tinggi per ton). Solusi utama pasokan tebu, bukan penambahan mesin.",
  },
];

export const capacityGapNote =
  "Grup memiliki kelebihan kapasitas di kedua komoditas; masalah utilisasi adalah masalah pasokan bahan baku (yield & areal), bukan kekurangan kapasitas pabrik.";

/* ── 7. Insights ──────────────────────────────────────────────────── */

export const afsInsights: AstInsight[] = [
  {
    title: "Kelebihan Kapasitas, Bukan Kekurangan",
    text: `Kapasitas olah ${AFS_KAPASITAS_PKS_TERPASANG} ton TBS/jam melebihi pasokan 21,5%; PG bahkan 29,5%. Capex tambahan kapasitas hanya memperburuk biaya tetap — prioritaskan pasokan bahan baku dan debottlenecking.`,
    tone: "red",
  },
  {
    title: "Derating 240 Ton TBS/Jam",
    text: "Selisih terpasang 2.145 vs efektif 1.905 ton TBS/jam terkonsentrasi di Regional 4–7. Memulihkan separuh derating setara tambahan olah ±0,7 jt ton TBS/tahun tanpa pabrik baru.",
    tone: "amber",
  },
  {
    title: "6 Unit di Bawah Ambang Kondisi Kritis",
    text: "PKS Ophir, Rejosari, Kertajaya serta PG Wonolangan, Cinta Manis & Djatiroto berindeks kondisi <65. Empat sudah masuk program revitalisasi; dua sisanya belum beranggaran.",
    tone: "red",
  },
  {
    title: "Umur Bukan Takdir",
    text: "PG Ngadiredjo (48 thn) berindeks 74 dan untung Rp 112 M, sementara PKS Rejosari (34 thn) berindeks 58. Disiplin overhaul terbukti lebih menentukan daripada usia aset.",
    tone: "green",
  },
  {
    title: "11 PG Merugi Rp 600 M",
    text: `Utilisasi 6 PG terkecil di bawah 66% dengan rendemen <7,15%. Konsolidasi giling ke ${PRODUKSI.pg - 6} PG efisien dapat menghapus sebagian besar kerugian tanpa kehilangan volume gula.`,
    tone: "amber",
  },
];
