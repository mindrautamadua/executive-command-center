/**
 * Data statis halaman Replanting & Pemeliharaan (/aset-investasi/replanting).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (sawit tertanam 508,7 rb ha) dan agro-data.ts (replantingRoadmap target
 * 2026 12.500 ha / realisasi YTD 4.180 ha, ageProfile TBM 61,0 rb ha).
 *
 * Catatan konsistensi: seluruh angka target/realisasi replanting diturunkan
 * dari replantingRoadmap — halaman ini menambahkan sudut pandang aset
 * (biaya per ha, pendanaan, backlog pemeliharaan), bukan angka tandingan.
 */

import { PRODUKSI } from "./group-baseline";
import type { AstInsight, AstKpi } from "./ast-core";
import { psrProgress, replantingRoadmap } from "./agro-data";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const arpKpi: AstKpi[] = [
  {
    label: "Target Replanting 2026",
    value: "12.500",
    sub: "Ha · roadmap 2030 naik ke 22.000 ha",
    delta: "+20,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs realisasi 2025 (10.400 ha)",
    icon: "land",
    tone: "blue",
  },
  {
    label: "Realisasi YTD",
    value: "4.180",
    sub: "Ha · 33,4% target FY",
    delta: "-8,3 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    icon: "land",
    tone: "amber",
  },
  {
    label: "Biaya Replanting",
    value: "Rp 68 jt",
    sub: "/Ha · kebutuhan FY Rp 850 M",
    delta: "+6,3%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs 2025 (Rp 64 jt/ha)",
    icon: "nilai",
    tone: "red",
  },
  {
    label: "Areal TBM",
    value: "61,0",
    sub: "Rb Ha · 12% areal tertanam 508,7 rb ha",
    delta: "+4,2 rb ha",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "land",
    tone: "green",
  },
  {
    label: "Capex Pemeliharaan",
    value: "Rp 1,1 T",
    sub: "RKAP FY · 11,5% total capex Rp 9,6 T",
    delta: "Rp 0,42 T",
    trend: "up",
    deltaTone: "good",
    compare: "realisasi YTD (38,2%)",
    icon: "nilai",
    tone: "teal",
  },
  {
    label: "Backlog Pemeliharaan",
    value: "Rp 420 M",
    sub: "5 kategori · jalan produksi terbesar",
    delta: "+Rp 34 M",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "sengketa",
    tone: "pink",
  },
];

export const ARP_TARGET_2026_HA = 12500;
export const ARP_REALISASI_YTD_HA = 4180;
export const ARP_CAPAIAN_PCT = 33.4;
export const ARP_PRORATA_PCT = 41.7;
export const ARP_BIAYA_PER_HA_RP_JT = 68;
/** 12.500 ha × Rp 68 jt/ha = Rp 850 M kebutuhan dana replanting inti FY 2026. */
export const ARP_KEBUTUHAN_FY_RP_M = 850;
/** TBM 61,0 rb ha = 12% × 508,7 rb ha (ageProfile agro-data). */
export const ARP_TBM_RB_HA = 61.0;
export const ARP_TBM_PCT = 12;
export const ARP_MAINTENANCE_CAPEX_RP_T = 1.1;

/* ── 2. Progress Replanting per Regional ──────────────────────────── */

export interface ReplantingProgressRow {
  regional: string;
  /** Target tanam ulang 2026 (ha) — jumlah = 12.500. */
  target2026Ha: number;
  /** Rencana prorata s.d. Mei (41,7% target) — jumlah ≈ 5.212 ha. */
  planYtdHa: number;
  /** Realisasi YTD (ha) — jumlah = 4.180. */
  aktualYtdHa: number;
  /** Capaian terhadap target FY (%). */
  capaianPct: number;
  /** Serapan biaya YTD (Rp M) = aktual × Rp 68 jt/ha. */
  biayaYtdRpM: number;
}

/** Diturunkan langsung dari replantingRoadmap (agro-data.ts). */
export const progressPerRegional: ReplantingProgressRow[] = replantingRoadmap.map((r) => ({
  regional: r.regional,
  target2026Ha: r.target2026Ha,
  planYtdHa: Math.round((r.target2026Ha * ARP_PRORATA_PCT) / 100),
  aktualYtdHa: r.realisasiYtdHa,
  capaianPct: +((r.realisasiYtdHa / r.target2026Ha) * 100).toFixed(1),
  biayaYtdRpM: +((r.realisasiYtdHa * ARP_BIAYA_PER_HA_RP_JT) / 1000).toFixed(1),
}));

export const progressNote =
  "Seluruh regional berada di bawah prorata 41,7%; deviasi terbesar Regional 2 & 4 (32,5%). Serapan biaya YTD ±Rp 284 M dari kebutuhan FY Rp 850 M — beban H2 menjadi 2,0x run-rate H1.";

/* ── 3. Kurva-S Replanting 2024–2030 ──────────────────────────────── */

export interface ReplantingSCurvePoint {
  tahun: string;
  /** Target tanam ulang tahun berjalan (ha) — selaras roadmap agro-data. */
  targetHa: number;
  /** Realisasi tahun berjalan (ha); 2026 = YTD Mei, null = belum berjalan. */
  aktualHa: number | null;
  /** Kumulatif target sejak 2024 (ha). */
  kumulatifTargetHa: number;
  /** Kumulatif realisasi (ha); null setelah 2026. */
  kumulatifAktualHa: number | null;
}

/**
 * Target tahunan mengikuti replantingRoadmap: 2026 12.500 · 2027 15.000 ·
 * 2028 18.000 · 2029 20.000 · 2030 22.000 ha (kumulatif 2024–2030 106.100 ha).
 * Kumulatif realisasi s.d. Mei 2026 = 21.640 ha, tertinggal 9.460 ha (30,4%).
 */
export const replantingSCurve: ReplantingSCurvePoint[] = [
  { tahun: "2024", targetHa: 8200, aktualHa: 7640, kumulatifTargetHa: 8200, kumulatifAktualHa: 7640 },
  { tahun: "2025", targetHa: 10400, aktualHa: 9820, kumulatifTargetHa: 18600, kumulatifAktualHa: 17460 },
  { tahun: "2026*", targetHa: 12500, aktualHa: 4180, kumulatifTargetHa: 31100, kumulatifAktualHa: 21640 },
  { tahun: "2027", targetHa: 15000, aktualHa: null, kumulatifTargetHa: 46100, kumulatifAktualHa: null },
  { tahun: "2028", targetHa: 18000, aktualHa: null, kumulatifTargetHa: 64100, kumulatifAktualHa: null },
  { tahun: "2029", targetHa: 20000, aktualHa: null, kumulatifTargetHa: 84100, kumulatifAktualHa: null },
  { tahun: "2030", targetHa: 22000, aktualHa: null, kumulatifTargetHa: 106100, kumulatifAktualHa: null },
];

export const REPLANTING_DEFISIT_KUMULATIF_HA = 9460;

export const replantingSCurveNote =
  "*2026 = realisasi YTD Mei (4.180 ha). Defisit kumulatif 9.460 ha sejak 2024; pada laju saat ini roadmap 106.100 ha (2030) meleset ±18%, menunda pemulihan profil umur ke 2032.";

/* ── 4. Proyeksi Profil Umur 2026–2035 ────────────────────────────── */

export interface AgeProjectionPoint {
  tahun: string;
  /** Porsi areal tua & renta (%) bila roadmap replanting dieksekusi penuh. */
  denganTuaRentaPct: number;
  /** Porsi areal tua & renta (%) bila replanting bertahan di laju 2026. */
  tanpaTuaRentaPct: number;
  /** Porsi areal prima (%) dengan roadmap penuh. */
  denganPrimaPct: number;
  /** Porsi areal prima (%) tanpa akselerasi. */
  tanpaPrimaPct: number;
}

/**
 * Titik awal 2026 = ageProfile agro-data (tua 19% + renta 8% = 27%; prima 43%).
 * Skenario "dengan" mengasumsikan roadmap 12.500 → 22.000 ha/tahun tercapai;
 * skenario "tanpa" mengasumsikan realisasi bertahan ±10.000 ha/tahun.
 */
export const ageProjection: AgeProjectionPoint[] = [
  { tahun: "2026", denganTuaRentaPct: 27, tanpaTuaRentaPct: 27, denganPrimaPct: 43, tanpaPrimaPct: 43 },
  { tahun: "2027", denganTuaRentaPct: 27, tanpaTuaRentaPct: 29, denganPrimaPct: 43, tanpaPrimaPct: 42 },
  { tahun: "2028", denganTuaRentaPct: 26, tanpaTuaRentaPct: 31, denganPrimaPct: 44, tanpaPrimaPct: 41 },
  { tahun: "2029", denganTuaRentaPct: 25, tanpaTuaRentaPct: 34, denganPrimaPct: 45, tanpaPrimaPct: 39 },
  { tahun: "2030", denganTuaRentaPct: 23, tanpaTuaRentaPct: 36, denganPrimaPct: 46, tanpaPrimaPct: 38 },
  { tahun: "2031", denganTuaRentaPct: 22, tanpaTuaRentaPct: 39, denganPrimaPct: 47, tanpaPrimaPct: 36 },
  { tahun: "2032", denganTuaRentaPct: 20, tanpaTuaRentaPct: 41, denganPrimaPct: 48, tanpaPrimaPct: 35 },
  { tahun: "2033", denganTuaRentaPct: 18, tanpaTuaRentaPct: 43, denganPrimaPct: 49, tanpaPrimaPct: 33 },
  { tahun: "2034", denganTuaRentaPct: 16, tanpaTuaRentaPct: 45, denganPrimaPct: 50, tanpaPrimaPct: 32 },
  { tahun: "2035", denganTuaRentaPct: 14, tanpaTuaRentaPct: 47, denganPrimaPct: 51, tanpaPrimaPct: 30 },
];

export const ageProjectionNote =
  "Selisih 2035 mencapai 33 ppt areal tua/renta (14% vs 47%). Pada kurva yield ageProfile (prima 26,0 vs renta 13,2 t/ha), selisih itu setara ±1,9 jt ton TBS/tahun — nilai riil dari disiplin replanting hari ini.";

/* ── 5. Backlog Pemeliharaan ──────────────────────────────────────── */

export interface MaintenanceBacklogRow {
  kategori: string;
  /** Nilai backlog (Rp M) — jumlah 5 kategori = 420. */
  nilaiRpM: number;
  /** Porsi terhadap total (%), jumlah = 100. */
  porsiPct: number;
  /** Umur backlog tertua dalam kategori. */
  umurBacklog: string;
  dampak: string;
}

export const maintenanceBacklog: MaintenanceBacklogRow[] = [
  {
    kategori: "Jalan & Jembatan Produksi",
    nilaiRpM: 148,
    porsiPct: 35.2,
    umurBacklog: "> 3 tahun",
    dampak: "Rotasi panen melebar & restan naik di Regional 6–7 (2,2–2,4%).",
  },
  {
    kategori: "Drainase & Konservasi Air",
    nilaiRpM: 86,
    porsiPct: 20.5,
    umurBacklog: "2–3 tahun",
    dampak: "Memperbesar kerentanan yield terhadap skenario El Nino H2 2026.",
  },
  {
    kategori: "Emplasemen & Perumahan Karyawan",
    nilaiRpM: 74,
    porsiPct: 17.6,
    umurBacklog: "> 5 tahun",
    dampak: "Menekan retensi tenaga panen di wilayah remote.",
  },
  {
    kategori: "Instalasi Listrik & Air Kebun",
    nilaiRpM: 62,
    porsiPct: 14.8,
    umurBacklog: "2–4 tahun",
    dampak: "Gangguan operasi afdeling & biaya genset tambahan.",
  },
  {
    kategori: "Alat Berat & Bengkel",
    nilaiRpM: 50,
    porsiPct: 11.9,
    umurBacklog: "1–2 tahun",
    dampak: "Ketersediaan alat angkut turun; biaya sewa armada naik.",
  },
];

export const MAINTENANCE_BACKLOG_TOTAL_RP_M = 420;

export const maintenanceBacklogNote =
  "Backlog Rp 420 M setara 38% capex pemeliharaan FY Rp 1,1 T. Jalan produksi (Rp 148 M) memberi imbal hasil tercepat: memangkas restan 0,4 ppt di Regional 6–7 setara ±Rp 95 M/tahun.";

/* ── 6. Sumber Pendanaan Replanting ───────────────────────────────── */

export interface ReplantingFundingRow {
  sumber: string;
  segmen: "Inti" | "Plasma";
  /** Nilai pendanaan 2026 (Rp M) — jumlah = 1.222. */
  nilaiRpM: number;
  /** Porsi terhadap total (%), jumlah = 100,0 (pembulatan). */
  porsiPct: number;
  /** Luas yang didanai (ha). */
  luasHa: number;
  note?: string;
}

/**
 * Inti: 12.500 ha × Rp 68 jt/ha = Rp 850 M (kas internal + pinjaman investasi).
 * Plasma: PSR 6.200 ha × Rp 60 jt/ha hibah BPDPKS = Rp 372 M
 * (psrProgress.totalDanaRpM). Total program 2026 = Rp 1.222 M / 18.700 ha.
 */
export const replantingFunding: ReplantingFundingRow[] = [
  {
    sumber: "Kas Internal PalmCo",
    segmen: "Inti",
    nilaiRpM: 620,
    porsiPct: 50.7,
    luasHa: 9118,
    note: "Bagian RKAP capex tanaman; realisasi YTD ±Rp 284 M.",
  },
  {
    sumber: "Pinjaman Investasi Perbankan",
    segmen: "Inti",
    nilaiRpM: 230,
    porsiPct: 18.8,
    luasHa: 3382,
    note: "Fasilitas investasi tenor 8 tahun, grace period selaras umur TBM.",
  },
  {
    sumber: "Hibah BPDPKS (PSR Plasma)",
    segmen: "Plasma",
    nilaiRpM: 372,
    porsiPct: 30.5,
    luasHa: 6200,
    note: "Rp 60 jt/ha untuk 6.200 ha; tersalur YTD Rp 128,4 M (34,5%).",
  },
];

export const REPLANTING_FUNDING_TOTAL_RP_M = 1222;
export const REPLANTING_FUNDING_TOTAL_HA = 18700;
export const PSR_TARGET_HA = psrProgress.target2026Ha; // 6.200

export const replantingFundingNote =
  "30,5% pendanaan program berasal dari hibah BPDPKS dan tidak membebani neraca; hambatannya legalitas lahan plasma — sama dengan hambatan traceability EUDR.";

/* ── 7. Insights ──────────────────────────────────────────────────── */

export const arpInsights: AstInsight[] = [
  {
    title: "Defisit Kumulatif 9.460 Ha",
    text: `Sejak 2024 realisasi tertinggal ${REPLANTING_DEFISIT_KUMULATIF_HA.toLocaleString("id-ID")} ha dari rencana. Setiap tahun penundaan menambah ±1,5 ppt areal tua/renta yang harus dikejar dengan biaya lebih tinggi.`,
    tone: "red",
  },
  {
    title: "Beban H2 Menjadi 2,0x",
    text: "Realisasi 33,4% pada 41,7% waktu berjalan berarti 8.320 ha harus ditanam dalam 7 bulan. Ketersediaan kontraktor & bibit siap tanam menjadi jalur kritis, bukan anggaran.",
    tone: "amber",
  },
  {
    title: "Jendela Pemulihan Profil Umur",
    text: `Dengan roadmap penuh, areal tua/renta turun ${27 - 14} ppt ke 14% pada 2035; tanpa akselerasi justru naik ke 47%. Selisihnya setara ±1,9 jt ton TBS/tahun.`,
    tone: "blue",
  },
  {
    title: "Backlog Pemeliharaan Menggerus Yield Hari Ini",
    text: "Rp 420 M backlog — 35% di jalan produksi — langsung menaikkan restan & FFA. Belanja pemeliharaan berimbal hasil lebih cepat daripada replanting, tetapi paling sering ditunda.",
    tone: "amber",
  },
  {
    title: "Biaya Replanting Naik 6,3%",
    text: `Rp ${ARP_BIAYA_PER_HA_RP_JT} jt/ha (dari Rp 64 jt) didorong harga bibit unggul & upah borongan. Menunda satu tahun menambah beban ±Rp 53 M pada volume target 12.500 ha dari areal tertanam ${PRODUKSI.sawitTertanamRbHa} rb ha.`,
    tone: "red",
  },
];
