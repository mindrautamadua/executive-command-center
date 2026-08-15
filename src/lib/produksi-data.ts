/**
 * Data statis dimensi Produksi & Operasi — core + halaman Executive Overview
 * (/produksi-operasi), Produksi Komoditas (/produksi-operasi/produksi-komoditas)
 * dan Produktivitas Kebun (/produksi-operasi/produktivitas-kebun).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 */

import type { DimensionDataTrust } from "./dimension-menu";
import { BASELINE_TRUST, PRODUKSI } from "./group-baseline";

/* ── Data Trust ───────────────────────────────────────────────────── */

export const prodDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "95,4%",
  quality: "94,1%",
  sources: ["SAP PM", "Mill Excellence", "e-Kebun", "AMDAL/Lab"],
};

/* ── Tipe bersama dimensi Produksi ────────────────────────────────── */

/** Insight naratif kecil di footer kartu — dipakai lintas halaman produksi. */
export interface ProdInsight {
  title: string;
  text: string;
  tone: "red" | "amber" | "green" | "blue";
}

export type ProdRiskLevel = "Ekstrem" | "Tinggi" | "Sedang" | "Rendah";

/* ── 1. KPI Strip Overview (mirror HcKpi) ─────────────────────────── */

export interface ProdKpi {
  label: string;
  value: string;
  sub: string;
  delta: string;
  trend: "up" | "down";
  deltaTone: "good" | "bad";
  compare: string;
  icon: "tbs" | "cpo" | "oer" | "gula" | "karet" | "hpp";
  tone: "blue" | "green" | "pink" | "red" | "teal" | "amber";
  /** Nama kanonik metrik untuk tooltip definisi. */
  metric: string;
}

export const prodKpi: ProdKpi[] = [
  {
    label: "TBS Diolah",
    value: "4,42",
    sub: "Jt Ton · Target YTD 4,39",
    delta: "5,0%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "tbs",
    tone: "green",
    metric: "TBS Diolah",
  },
  {
    label: "Produksi CPO",
    value: "0,99",
    sub: "Jt Ton · FY RKAP 2,53",
    delta: "7,1%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "cpo",
    tone: "blue",
    metric: "Produksi CPO",
  },
  {
    label: "OER (Rendemen CPO)",
    value: "22,4%",
    sub: "Target RKAP 22,8%",
    delta: "-0,4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target RKAP",
    icon: "oer",
    tone: "amber",
    metric: "Oil Extraction Rate",
  },
  {
    label: "Produksi Gula",
    value: "92",
    sub: "Rb Ton · Musim giling mulai Mei",
    delta: "-6,1%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Target Giling Mei",
    icon: "gula",
    tone: "teal",
    metric: "Produksi Gula",
  },
  {
    label: "Produksi Karet",
    value: "47,6",
    sub: "Rb Ton · FY RKAP 118",
    delta: "2,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Mei 2025",
    icon: "karet",
    tone: "pink",
    metric: "Produksi Karet Kering",
  },
  {
    label: "HPP CPO",
    value: "Rp 8.950",
    sub: "/kg · Target 8.700",
    delta: "+2,9%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs Target RKAP",
    icon: "hpp",
    tone: "red",
    metric: "HPP CPO per Kg",
  },
];

/* ── 2. Executive Intelligence (3 narasi) ─────────────────────────── */

export interface ProdSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const prodIntelCounts = [
  { label: "Critical Signals", value: 2, tone: "red" },
  { label: "Opportunities", value: 2, tone: "green" },
  { label: "Decisions Pending", value: 3, tone: "amber" },
] as { label: string; value: number; tone: "red" | "green" | "amber" }[];

export const prodIntelligence: ProdSignal[] = [
  {
    no: "01",
    title: "Produksi On-Track",
    text: "TBS diolah YTD 4,42 jt ton = 100,8% target; CPO 100,5%. Momentum ditopang Regional 1–3 (capaian >101%).",
    impactLabel: "Status FY",
    impactValue: "On Track",
    tone: "green",
  },
  {
    no: "02",
    title: "Gap OER vs Target",
    text: "OER 22,4% vs target 22,8% (-0,4 ppt) — didorong FFA restan & losses pabrik tua. Potensi nilai hilang ± Rp 180 M/bln pada volume puncak.",
    impactLabel: "Potential Impact",
    impactValue: "Rp 180 M/bln",
    tone: "amber",
  },
  {
    no: "03",
    title: "Risiko El Nino H2 2026",
    text: "Probabilitas El Nino semester II 62% (BMKG/NOAA). Skenario moderat memangkas produksi H2 hingga -6% dan EBITDA -Rp 1,9 T.",
    impactLabel: "Probabilitas",
    impactValue: "62%",
    tone: "red",
  },
];

export const prodRecommendation =
  "Amankan hulu sebelum H2: percepat revitalisasi 6 pabrik prioritas, kunci kontrak pupuk H2, dan disiplinkan rotasi panen ≤7 hari untuk menahan gap OER.";

/* ── 3. Risk Matrix (6 risiko produksi) ───────────────────────────── */

export interface ProdRisk {
  name: string;
  /** Kemungkinan terjadi, skala 1-5. */
  likelihood: number;
  /** Dampak bila terjadi, skala 1-5. */
  impact: number;
  level: ProdRiskLevel;
  mitigation: string;
}

export const prodRisks: ProdRisk[] = [
  {
    name: "Cuaca / El Nino H2",
    likelihood: 4,
    impact: 5,
    level: "Ekstrem",
    mitigation: "Water management kebun, asuransi parametrik, revisi outlook produksi H2.",
  },
  {
    name: "Kenaikan Harga Pupuk",
    likelihood: 4,
    impact: 4,
    level: "Tinggi",
    mitigation: "Kontrak pusat H2 + substitusi kompos tankos & aplikasi presisi.",
  },
  {
    name: "Keandalan Pabrik Tua",
    likelihood: 3,
    impact: 4,
    level: "Tinggi",
    mitigation: "Capex revitalisasi 6 pabrik prioritas, preventive maintenance berbasis SAP PM.",
  },
  {
    name: "Restan TBS",
    likelihood: 3,
    impact: 3,
    level: "Sedang",
    mitigation: "Optimasi armada & rotasi panen ≤7 hari; monitoring restan harian per afdeling.",
  },
  {
    name: "Pasokan TBS Plasma",
    likelihood: 3,
    impact: 4,
    level: "Tinggi",
    mitigation: "Penguatan kemitraan & harga kompetitif untuk menekan side-selling.",
  },
  {
    name: "Keamanan TBS (Pencurian)",
    likelihood: 3,
    impact: 2,
    level: "Sedang",
    mitigation: "Patroli terpadu, CCTV titik rawan, kerja sama aparat wilayah.",
  },
];

/* ── 4. Komoditas Scoreboard ──────────────────────────────────────── */

export interface KomoditasProduksi {
  komoditas: string;
  satuan: string;
  targetFy: string;
  targetYtd: string;
  realisasiYtd: string;
  /** Capaian vs target YTD (%), dihitung dari angka belum dibulatkan. */
  capaianPct: number;
  status: "On Track" | "Waspada" | "Tertinggal";
  /** Catatan konteks, mis. musim giling. */
  note?: string;
}

export const komoditasScoreboard: KomoditasProduksi[] = [
  {
    komoditas: "TBS Diolah",
    satuan: "jt ton",
    targetFy: "11,3",
    targetYtd: "4,39",
    realisasiYtd: "4,42",
    capaianPct: 100.8,
    status: "On Track",
  },
  {
    komoditas: "CPO",
    satuan: "jt ton",
    targetFy: "2,53",
    targetYtd: "0,99",
    realisasiYtd: "0,99",
    capaianPct: 100.5,
    status: "On Track",
  },
  {
    komoditas: "Gula (GKP)",
    satuan: "rb ton",
    targetFy: "780",
    targetYtd: "98",
    realisasiYtd: "92",
    capaianPct: 93.9,
    status: "Waspada",
    note: "Musim giling baru mulai Mei — YTD kecil sesuai kurva ramp-up giling.",
  },
  {
    komoditas: "Karet Kering",
    satuan: "rb ton",
    targetFy: "118",
    targetYtd: "48,4",
    realisasiYtd: "47,6",
    capaianPct: 98.3,
    status: "Waspada",
  },
  {
    komoditas: "Teh Kering",
    satuan: "rb ton",
    targetFy: "24,5",
    targetYtd: "10,4",
    realisasiYtd: "10,2",
    capaianPct: 98.1,
    status: "Waspada",
  },
];

/* ── 5. Produksi Bulanan 2026 vs 2025 (TBS & CPO) ─────────────────── */

export interface ProduksiBulanan {
  bulan: string;
  /** TBS diolah (jt ton); 2026 terisi Jan–Mei (YTD). */
  tbs2026?: number;
  tbs2025: number;
  /** CPO (jt ton); 2026 terisi Jan–Mei (YTD). */
  cpo2026?: number;
  cpo2025: number;
}

/**
 * Konsistensi: jumlah Jan–Mei 2026 = YTD baseline (TBS 4,42 jt ton, CPO 0,99
 * jt ton). Jumlah 2025 setahun penuh ± 11,0 jt ton TBS / 2,42 jt ton CPO.
 */
export const produksiBulanan: ProduksiBulanan[] = [
  { bulan: "Jan", tbs2026: 0.82, tbs2025: 0.78, cpo2026: 0.182, cpo2025: 0.171 },
  { bulan: "Feb", tbs2026: 0.8, tbs2025: 0.76, cpo2026: 0.178, cpo2025: 0.166 },
  { bulan: "Mar", tbs2026: 0.88, tbs2025: 0.84, cpo2026: 0.197, cpo2025: 0.184 },
  { bulan: "Apr", tbs2026: 0.94, tbs2025: 0.9, cpo2026: 0.211, cpo2025: 0.198 },
  { bulan: "Mei", tbs2026: 0.98, tbs2025: 0.93, cpo2026: 0.222, cpo2025: 0.205 },
  { bulan: "Jun", tbs2025: 0.95, cpo2025: 0.209 },
  { bulan: "Jul", tbs2025: 0.99, cpo2025: 0.218 },
  { bulan: "Agu", tbs2025: 1.02, cpo2025: 0.225 },
  { bulan: "Sep", tbs2025: 1.04, cpo2025: 0.23 },
  { bulan: "Okt", tbs2025: 1.01, cpo2025: 0.223 },
  { bulan: "Nov", tbs2025: 0.92, cpo2025: 0.203 },
  { bulan: "Des", tbs2025: 0.85, cpo2025: 0.187 },
];

/* ── 6. BOD Decision Center ───────────────────────────────────────── */

export interface ProdDecision {
  title: string;
  situation: string;
  decision: string;
  exposure: string;
  due: string;
  tone: "red" | "amber";
}

export const prodDecisions: ProdDecision[] = [
  {
    title: "Capex Revitalisasi PKS",
    situation:
      "6 pabrik prioritas (3 PG + 3 PKS) menyumbang 41% downtime tak terencana; OER PKS tua tertinggal 1,6 ppt dari rata-rata grup.",
    decision:
      "Setujui percepatan capex revitalisasi Rp 2,2 T (bagian RKAP pabrik) untuk eksekusi mulai Q3 2026.",
    exposure: "Rp 180 M/bln",
    due: "Q3 2026",
    tone: "red",
  },
  {
    title: "Percepatan Replanting",
    situation:
      "27% areal berumur tua/renta menahan yield di 21,9 t/ha vs benchmark swasta 24,0; realisasi replanting YTD 4.180 ha (33,4% target 12.500 ha).",
    decision:
      "Setujui akselerasi replanting H2 + realokasi kontraktor ke Regional 6–7 agar target FY tercapai.",
    exposure: "Yield -0,84 t/ha",
    due: "Q3 2026",
    tone: "amber",
  },
  {
    title: "Kontrak Pupuk H2 2026",
    situation:
      "Harga NPK naik 25% YoY; realisasi pemupukan S1 baru 84,3% rencana. Kebutuhan H2 415 rb ton belum terkunci kontrak.",
    decision:
      "Setujui kontrak pengadaan pupuk terpusat H2 dengan skema volume-lock sebelum eskalasi harga lanjutan.",
    exposure: "Rp 320 M",
    due: "Jul 2026",
    tone: "amber",
  },
];

/* ── 7. Regional Heat Strip (7 regional PalmCo) ───────────────────── */

export interface RegionalHeat {
  regional: string;
  /** Capaian produksi TBS vs target YTD (%). */
  capaianPct: number;
}

/** Rata-rata tertimbang luas = 100,8% — selaras capaian TBS grup. */
export const regionalHeat: RegionalHeat[] = [
  { regional: "Regional 1 (Sumut)", capaianPct: 104.1 },
  { regional: "Regional 2 (Sumut)", capaianPct: 102.6 },
  { regional: "Regional 3 (Riau)", capaianPct: 101.9 },
  { regional: "Regional 4 (Jambi–Sumbar)", capaianPct: 99.8 },
  { regional: "Regional 5 (Sumsel–Lampung)", capaianPct: 101.2 },
  { regional: "Regional 6 (Kalimantan)", capaianPct: 98.1 },
  { regional: "Regional 7 (Sulawesi–Papua)", capaianPct: 95.4 },
];

/* ── 8. Yield per Regional (quadrant yield × umur) ────────────────── */

export interface RegionalYield {
  regional: string;
  /** Luas tertanam inti (rb ha) — jumlah 7 regional = 508,7. */
  luasRbHa: number;
  /** Yield TBS (ton/ha/tahun, annualized). */
  yieldTonHa: number;
  /** Umur rata-rata tanaman (tahun) — sumbu X quadrant scatter. */
  umurRataThn: number;
}

/** Rata-rata grup tertimbang luas = 21,9 t/ha; benchmark swasta 24,0 t/ha. */
export const YIELD_GRUP_TON_HA = PRODUKSI.yieldTbsTonHa; // 21,9
export const YIELD_BENCHMARK_SWASTA_TON_HA = 24.0;

export const regionalYield: RegionalYield[] = [
  { regional: "Regional 1 (Sumut)", luasRbHa: 74.2, yieldTonHa: 23.8, umurRataThn: 13.8 },
  { regional: "Regional 2 (Sumut)", luasRbHa: 86.5, yieldTonHa: 23.4, umurRataThn: 14.6 },
  { regional: "Regional 3 (Riau)", luasRbHa: 88.4, yieldTonHa: 23.0, umurRataThn: 12.4 },
  { regional: "Regional 4 (Jambi–Sumbar)", luasRbHa: 62.8, yieldTonHa: 21.6, umurRataThn: 15.2 },
  { regional: "Regional 5 (Sumsel–Lampung)", luasRbHa: 71.3, yieldTonHa: 21.2, umurRataThn: 13.1 },
  { regional: "Regional 6 (Kalimantan)", luasRbHa: 76.0, yieldTonHa: 20.2, umurRataThn: 16.4 },
  { regional: "Regional 7 (Sulawesi–Papua)", luasRbHa: 49.5, yieldTonHa: 18.4, umurRataThn: 17.2 },
];

/* ── 9. Top & Bottom Kebun ────────────────────────────────────────── */

export interface KebunYield {
  kebun: string;
  regional: string;
  yieldTonHa: number;
  /** Faktor dominan pencapaian/ketertinggalan yield. */
  driver: string;
}

export const topKebun: KebunYield[] = [
  { kebun: "Dolok Ilir", regional: "Regional 2", yieldTonHa: 28.4, driver: "Areal prima 68%, rotasi panen 6,5 hari" },
  { kebun: "Bah Jambi", regional: "Regional 2", yieldTonHa: 27.9, driver: "Pemupukan presisi + kastrasi disiplin" },
  { kebun: "Sei Rokan", regional: "Regional 3", yieldTonHa: 27.2, driver: "Komposisi umur ideal, curah hujan cukup" },
  { kebun: "Adolina", regional: "Regional 1", yieldTonHa: 26.8, driver: "Best practice panen, losses lapangan rendah" },
  { kebun: "Tandun", regional: "Regional 3", yieldTonHa: 26.4, driver: "Mekanisasi angkut buah, restan <1%" },
];

export const bottomKebun: KebunYield[] = [
  { kebun: "Keera", regional: "Regional 7", yieldTonHa: 12.8, driver: "Areal renta 31%, defisit pemupukan 2 musim" },
  { kebun: "Ngabang", regional: "Regional 6", yieldTonHa: 13.4, driver: "Kekeringan lokal + rotasi panen 9,2 hari" },
  { kebun: "Gunung Meliau", regional: "Regional 6", yieldTonHa: 14.1, driver: "Infrastruktur jalan rusak, restan tinggi" },
  { kebun: "Ophir", regional: "Regional 4", yieldTonHa: 14.6, driver: "Tanaman tua dominan, menunggu replanting" },
  { kebun: "Tambarangan", regional: "Regional 6", yieldTonHa: 15.0, driver: "Side-selling area sekitar & keamanan TBS" },
];

/* ── 10. Protas Trend 5 Tahun ─────────────────────────────────────── */

export interface ProtasPoint {
  tahun: string;
  /** Yield TBS (ton/ha); 2026 = annualized YTD. */
  yieldTonHa: number;
}

export const protasTrend: ProtasPoint[] = [
  { tahun: "2022", yieldTonHa: 19.6 },
  { tahun: "2023", yieldTonHa: 20.3 },
  { tahun: "2024", yieldTonHa: 20.9 },
  { tahun: "2025", yieldTonHa: 21.4 },
  { tahun: "2026*", yieldTonHa: 21.9 },
];

export const protasNote = "*2026 = annualized YTD Mei. CAGR 4 tahun +2,8%/tahun.";

/* ── 11. Gap Analysis Yield vs Benchmark ──────────────────────────── */

export interface GapDriver {
  faktor: string;
  /** Kontribusi terhadap total gap (%), jumlah = 100. */
  kontribusiPct: number;
  /** Setara gap yield (t/ha), jumlah = 2,10. */
  gapTonHa: number;
  aksi: string;
}

/** Dekomposisi gap yield grup 21,9 vs benchmark swasta 24,0 = 2,1 t/ha. */
export const gapAnalysis: GapDriver[] = [
  { faktor: "Profil umur tanaman (tua/renta 27%)", kontribusiPct: 40, gapTonHa: 0.84, aksi: "Percepatan replanting 12.500 ha/thn" },
  { faktor: "Pemupukan (dosis & ketepatan waktu)", kontribusiPct: 25, gapTonHa: 0.53, aksi: "Kontrak pupuk H2 + aplikasi presisi" },
  { faktor: "Kualitas panen & losses lapangan", kontribusiPct: 20, gapTonHa: 0.42, aksi: "Disiplin rotasi ≤7 hari, brondolan terkutip" },
  { faktor: "Cuaca / defisit air", kontribusiPct: 15, gapTonHa: 0.31, aksi: "Water management & konservasi lembab tanah" },
];

/* ── 12. Sawit Production Waterfall (TBS → CPO/PK) ────────────────── */

export interface WaterfallStep {
  label: string;
  /** Volume (jt ton); negatif = pengurang. */
  value: number;
  type: "in" | "out" | "total";
  note?: string;
}

export const sawitWaterfall: WaterfallStep[] = [
  { label: "TBS Kebun Inti", value: 3.71, type: "in" },
  { label: "TBS Plasma & Pihak III", value: 0.84, type: "in", note: "Plasma 0,59 + pihak III 0,25" },
  { label: "Restan / Tidak Terolah", value: -0.13, type: "in", note: "Restan rata-rata 1,8% + reject sortasi" },
  { label: "TBS Diolah", value: 4.42, type: "total" },
  { label: "CPO", value: 0.99, type: "out", note: "OER 22,4%" },
  { label: "Palm Kernel", value: 0.203, type: "out", note: "KER 4,6%" },
];

/* ── 13. Gula: Kurva Musim Giling (Mei–Nov) ───────────────────────── */

export interface GulaGilingPoint {
  bulan: string;
  /** Tebu digiling (jt ton); jumlah kurva = 10,5 jt ton FY. */
  tebuJtTon: number;
  /** Rendemen (%), garis overlay — rata-rata tertimbang 7,45%. */
  rendemenPct: number;
  /** Produksi gula (rb ton) = tebu × rendemen. */
  gulaRbTon: number;
  /** true = realisasi; false = proyeksi RKAP giling. */
  aktual: boolean;
}

/**
 * Musim giling dimulai Mei — YTD gula baru 92 rb ton (bulan pertama giling).
 * Jumlah kurva: tebu 10,5 jt ton, gula ±780 rb ton FY (rendemen 7,45%).
 */
export const gulaGiling: GulaGilingPoint[] = [
  { bulan: "Mei", tebuJtTon: 1.25, rendemenPct: 7.36, gulaRbTon: 92.0, aktual: true },
  { bulan: "Jun", tebuJtTon: 1.55, rendemenPct: 7.42, gulaRbTon: 115.0, aktual: false },
  { bulan: "Jul", tebuJtTon: 1.65, rendemenPct: 7.48, gulaRbTon: 123.4, aktual: false },
  { bulan: "Agu", tebuJtTon: 1.7, rendemenPct: 7.52, gulaRbTon: 127.8, aktual: false },
  { bulan: "Sep", tebuJtTon: 1.65, rendemenPct: 7.5, gulaRbTon: 123.8, aktual: false },
  { bulan: "Okt", tebuJtTon: 1.5, rendemenPct: 7.45, gulaRbTon: 111.8, aktual: false },
  { bulan: "Nov", tebuJtTon: 1.2, rendemenPct: 7.4, gulaRbTon: 88.8, aktual: false },
];

export const gulaGilingNote =
  "Musim giling dimulai Mei; produksi YTD 92 rb ton adalah bulan pertama kurva ramp-up menuju FY 780 rb ton (tebu 10,5 jt ton, rendemen rata-rata 7,45%).";

/* ── 14. Karet & Teh Bulanan 2026 ─────────────────────────────────── */

export interface KaretTehPoint {
  bulan: string;
  /** Karet kering (rb ton) — jumlah Jan–Mei = 47,6. */
  karetRbTon: number;
  /** Teh kering (rb ton) — jumlah Jan–Mei = 10,2. */
  tehRbTon: number;
}

export const karetTehSeries: KaretTehPoint[] = [
  { bulan: "Jan", karetRbTon: 9.2, tehRbTon: 2.0 },
  { bulan: "Feb", karetRbTon: 9.0, tehRbTon: 1.9 },
  { bulan: "Mar", karetRbTon: 9.6, tehRbTon: 2.1 },
  { bulan: "Apr", karetRbTon: 9.8, tehRbTon: 2.1 },
  { bulan: "Mei", karetRbTon: 10.0, tehRbTon: 2.1 },
];

export const karetTehNote =
  "Karet YTD 47,6 rb ton (98,3% target; FY 118) — tertekan curah hujan rendah di Sumsel. Teh YTD 10,2 rb ton (FY 24,5).";

/* ── 15. Seasonality CPO 3 Tahun ──────────────────────────────────── */

export interface SeasonalityPoint {
  bulan: string;
  /** CPO (jt ton) per tahun; 2026 terisi Jan–Mei. */
  y2024: number;
  y2025: number;
  y2026?: number;
}

/** 2026 identik dengan produksiBulanan (jumlah Jan–Mei = 0,99 jt ton). */
export const seasonality3Tahun: SeasonalityPoint[] = [
  { bulan: "Jan", y2024: 0.168, y2025: 0.171, y2026: 0.182 },
  { bulan: "Feb", y2024: 0.161, y2025: 0.166, y2026: 0.178 },
  { bulan: "Mar", y2024: 0.178, y2025: 0.184, y2026: 0.197 },
  { bulan: "Apr", y2024: 0.19, y2025: 0.198, y2026: 0.211 },
  { bulan: "Mei", y2024: 0.199, y2025: 0.205, y2026: 0.222 },
  { bulan: "Jun", y2024: 0.204, y2025: 0.209 },
  { bulan: "Jul", y2024: 0.211, y2025: 0.218 },
  { bulan: "Agu", y2024: 0.219, y2025: 0.225 },
  { bulan: "Sep", y2024: 0.224, y2025: 0.23 },
  { bulan: "Okt", y2024: 0.216, y2025: 0.223 },
  { bulan: "Nov", y2024: 0.196, y2025: 0.203 },
  { bulan: "Des", y2024: 0.181, y2025: 0.187 },
];

/* ── 16. Insights ─────────────────────────────────────────────────── */

export const prodInsights: ProdInsight[] = [
  {
    title: "Puncak Panen Agu–Okt",
    text: "Pola musiman 3 tahun konsisten: puncak produksi CPO Agustus–Oktober. Pastikan keandalan pabrik & armada sebelum puncak — bertepatan dengan risiko El Nino H2.",
    tone: "amber",
  },
  {
    title: "Yield Naik 5 Tahun Beruntun",
    text: "Protas naik dari 19,6 (2022) ke 21,9 t/ha (2026 annualized), tetapi masih 2,1 t/ha di bawah benchmark swasta; 40% gap berasal dari profil umur tanaman.",
    tone: "blue",
  },
  {
    title: "Regional 6–7 Tertinggal",
    text: "Capaian produksi 98,1% dan 95,4% dengan yield 20,2 & 18,4 t/ha — prioritas replanting, perbaikan jalan produksi, dan pengawalan keamanan TBS.",
    tone: "red",
  },
  {
    title: "Gula Sesuai Kurva Giling",
    text: "Capaian gula 93,9% target Mei adalah bulan pertama giling; keandalan 17 PG (jam berhenti giling) menjadi penentu FY 780 rb ton.",
    tone: "green",
  },
];
