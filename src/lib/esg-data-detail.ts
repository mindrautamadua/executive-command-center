/**
 * Data statis dimensi ESG & Sustainability — lanjutan esg-data.ts.
 * Halaman: Deforestasi & EUDR, Air/Limbah & Biodiversitas, Sosial & Plasma,
 * Rating & Sustainable Finance. Periode acuan: 31 Mei 2026 (YTD).
 */

import { PALETTE } from "./chart-palette";
import type { EsgDecision, EsgInsight, EsgPageKpi } from "./esg-data";

/* ══════════════════════════════════════════════════════════════════════
   5. DEFORESTASI & EUDR (/esg-sustainability/deforestasi-eudr)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const eudrKpi: EsgPageKpi[] = [
  {
    label: "EUDR Readiness",
    value: "78",
    valueSuffix: "/100",
    sub: "Komposit 4 pilar kesiapan",
    delta: "+6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Traceability to Plantation",
    value: "92,4%",
    sub: "Volume CPO tertelusur ke kebun (TTP)",
    delta: "+4,1 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Polygon Geolokasi",
    value: "87,6%",
    sub: "Areal terpetakan polygon EUDR-compliant",
    delta: "+9,2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Alert Satelit Aktif",
    value: "2",
    sub: "Dalam investigasi lapangan · 14 alert YTD",
    delta: "-1",
    trend: "down",
    deltaTone: "good",
    tone: "red",
  },
  {
    label: "Grievance NDPE Terbuka",
    value: "9",
    sub: "Dari 24 grievance YTD · 15 selesai",
    delta: "-3",
    trend: "down",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Ekspor Terpapar EU",
    value: "18%",
    sub: "Volume CPO · nilai setahun Rp 4,1 T",
    tone: "teal",
  },
];

/* ── 5b. Pilar Kesiapan EUDR ──────────────────────────────────────── */

export interface EudrPillar {
  pilar: string;
  /** Skor kesiapan 0-100; rata-rata 4 pilar = 78 (readiness). */
  skor: number;
  target: number;
  catatan: string;
}

export const eudrPillars: EudrPillar[] = [
  { pilar: "Geolokasi & Polygon", skor: 84, target: 100, catatan: "87,6% areal terpetakan; gap di plasma & pihak ketiga" },
  { pilar: "Legalitas Lahan", skor: 88, target: 95, catatan: "HGU & SHM plasma terverifikasi mayoritas" },
  { pilar: "Due-Diligence Statement", skor: 68, target: 90, catatan: "Prosedur DDS per shipment baru pilot 2 terminal" },
  { pilar: "Sistem IT Traceability", skor: 72, target: 90, catatan: "Integrasi SIML–timbangan PKS tahap rollout" },
];

/* ── 5c. Traceability Funnel TTB → TTP ────────────────────────────── */

export interface TraceabilityRow {
  sumber: string;
  /** % volume tertelusur ke PKS (Traceability to Mill/Bulking). */
  ttbPct: number;
  /** % volume tertelusur ke kebun (Traceability to Plantation). */
  ttpPct: number;
}

/** TTP grup tertimbang volume = 92,4% (PalmCo dominan). */
export const traceabilityFunnel: TraceabilityRow[] = [
  { sumber: "PalmCo (inti)", ttbPct: 99.2, ttpPct: 94.6 },
  { sumber: "SupportingCo (inti)", ttbPct: 97.4, ttpPct: 88.2 },
  { sumber: "Plasma & pihak ketiga", ttbPct: 94.8, ttpPct: 81.4 },
];

/* ── 5d. Log Alert Satelit ────────────────────────────────────────── */

export interface SatelliteAlertSummary {
  ytdTotal: number;
  falsePositiveClosed: number;
  investigasi: number;
  /** Rata-rata waktu verifikasi lapangan (hari). */
  avgVerifikasiHari: number;
}

export const satelliteAlertSummary: SatelliteAlertSummary = {
  ytdTotal: 14,
  falsePositiveClosed: 12,
  investigasi: 2,
  avgVerifikasiHari: 9,
};

export interface SatelliteAlert {
  id: string;
  lokasi: string;
  tanggal: string;
  luasHa: number;
  sumber: "GFW/GLAD" | "Sentinel-2" | "RADD";
  status: "Investigasi lapangan" | "Closed — false positive";
}

export const satelliteAlerts: SatelliteAlert[] = [
  { id: "SAT-2026-014", lokasi: "Regional 3 (Riau) — sekitar Kebun Sei Baruhur", tanggal: "18 Mei 2026", luasHa: 4.2, sumber: "RADD", status: "Investigasi lapangan" },
  { id: "SAT-2026-013", lokasi: "Regional 5 (Kalbar) — koridor HCV", tanggal: "11 Mei 2026", luasHa: 2.8, sumber: "GFW/GLAD", status: "Investigasi lapangan" },
  { id: "SAT-2026-011", lokasi: "Regional 4 (Sumsel) — batas konsesi", tanggal: "27 Apr 2026", luasHa: 3.6, sumber: "Sentinel-2", status: "Closed — false positive" },
  { id: "SAT-2026-009", lokasi: "Regional 1 (Sumut) — areal replanting", tanggal: "14 Apr 2026", luasHa: 6.1, sumber: "GFW/GLAD", status: "Closed — false positive" },
  { id: "SAT-2026-006", lokasi: "Regional 3 (Riau) — tumbang alam pasca-badai", tanggal: "22 Mar 2026", luasHa: 1.9, sumber: "RADD", status: "Closed — false positive" },
];

/* ── 5e. Grievance NDPE ───────────────────────────────────────────── */

export interface NdpeGrievanceRow {
  kategori: string;
  terbuka: number;
  selesai: number;
}

/** Total YTD 24 grievance: 9 terbuka · 15 selesai. */
export const ndpeGrievances: NdpeGrievanceRow[] = [
  { kategori: "Sengketa lahan komunitas", terbuka: 4, selesai: 6 },
  { kategori: "Dugaan deforestasi pihak ketiga", terbuka: 2, selesai: 3 },
  { kategori: "Ketenagakerjaan pemasok", terbuka: 2, selesai: 4 },
  { kategori: "Lingkungan (air & debu)", terbuka: 1, selesai: 2 },
];

/* ── 5f. Eksposur Ekspor per Destinasi ────────────────────────────── */

export interface ExportExposureSlice {
  name: string;
  /** % volume CPO & turunan berdasarkan destinasi akhir. */
  pct: number;
  color: string;
}

export const exportExposure: ExportExposureSlice[] = [
  { name: "Domestik", pct: 31, color: PALETTE.slate },
  { name: "India", pct: 24, color: PALETTE.amber },
  { name: "China", pct: 21, color: PALETTE.blue },
  { name: "Uni Eropa", pct: 18, color: PALETTE.red },
  { name: "Lainnya", pct: 6, color: PALETTE.teal },
];

/**
 * Nilai ekspor terpapar EU setahunkan Rp 4,1 T. Donut memakai destinasi
 * AKHIR volume CPO & turunan (termasuk via refinery/trader mitra) —
 * berbeda dari ekspor langsung 22% volume CPO di group-baseline.
 */
export const exportExposureNote =
  "Destinasi akhir volume CPO & produk turunan (termasuk penjualan via refinery/trader mitra). Ekspor langsung PTPN = 22% volume CPO (group-baseline). Nilai terpapar EU ±Rp 4,1 T setahun.";

/* ── 5g. Timeline Tenggat EUDR ────────────────────────────────────── */

export interface EudrMilestone {
  tanggal: string;
  milestone: string;
  status: "Selesai" | "Berlaku" | "Mendatang";
}

export const deadlineTimeline: EudrMilestone[] = [
  { tanggal: "31 Des 2020", milestone: "Cut-off date deforestasi (basis analisis satelit)", status: "Selesai" },
  { tanggal: "29 Jun 2023", milestone: "Regulasi EUDR resmi berlaku (entry into force)", status: "Selesai" },
  { tanggal: "30 Des 2025", milestone: "Enforcement operator besar — DDS wajib per shipment", status: "Berlaku" },
  { tanggal: "30 Jun 2026", milestone: "Enforcement UKM", status: "Berlaku" },
  { tanggal: "31 Des 2026", milestone: "Target internal: 100% polygon & DDS otomatis via SIML", status: "Mendatang" },
];

/* ── 5h. Insight & Rekomendasi ────────────────────────────────────── */

export const eudrInsights: EsgInsight[] = [
  {
    insight:
      "Enforcement EUDR sudah berlaku; gap polygon 12,4% terkonsentrasi di pasokan plasma & pihak ketiga (TTP 81,4%) — segmen tersulit dipetakan.",
    rekomendasi:
      "Jalankan sensus polygon plasma bersama koperasi; kaitkan insentif harga TBS dengan kelengkapan geolokasi.",
  },
  {
    insight:
      "Pilar terlemah readiness adalah DDS (68/100) — prosedur per shipment baru pilot di 2 terminal dari 23.",
    rekomendasi:
      "Percepat rollout modul DDS SIML ke seluruh terminal ekspor sebelum kontrak Q4 2026.",
  },
  {
    insight:
      "12 dari 14 alert satelit YTD terbukti false positive (replanting/tumbang alam) dengan verifikasi rata-rata 9 hari — protokol berjalan baik.",
    rekomendasi:
      "Dokumentasikan protokol verifikasi sebagai bukti due diligence dalam dosier EUDR ke buyer EU.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   6. AIR, LIMBAH & BIODIVERSITAS (/esg-sustainability/lingkungan-hayati)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 6a. KPI Strip ────────────────────────────────────────────────── */

export const lhKpi: EsgPageKpi[] = [
  {
    label: "Intensitas Air",
    value: "1,18",
    valueSuffix: " m³/ton TBS",
    sub: "PalmCo · target ≤1,10 pada 2028",
    delta: "-2,5%",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Kepatuhan Effluent",
    value: "96,2%",
    sub: "Uji baku mutu IPAL · 2 regional <95%",
    delta: "+1,1 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Limbah B3 Terkelola",
    value: "100%",
    sub: "Melalui pengelola berizin KLHK",
    tone: "green",
  },
  {
    label: "Kawasan HCV Dikelola",
    value: "46,8 rb",
    valueSuffix: " ha",
    sub: "High Conservation Value · 6 regional",
    tone: "purple",
  },
  {
    label: "Spesies Dilindungi",
    value: "128",
    sub: "Teridentifikasi di kawasan HCV (IUCN/P.106)",
    delta: "+6",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
];

/* ── 6b. Tren Intensitas Air per Subholding ───────────────────────── */

export interface WaterTrendPoint {
  year: string;
  /** m³/ton TBS. */
  palmco: number;
  /** m³/ton tebu. */
  sgn: number;
  /** m³/ton produk utama (karet/teh). */
  supporting: number;
}

/** Satuan berbeda per komoditas — bandingkan tren, bukan level antar-seri. */
export const waterTrend: WaterTrendPoint[] = [
  { year: "2022", palmco: 1.32, sgn: 1.05, supporting: 1.45 },
  { year: "2023", palmco: 1.28, sgn: 1.01, supporting: 1.41 },
  { year: "2024", palmco: 1.24, sgn: 0.97, supporting: 1.36 },
  { year: "2025", palmco: 1.21, sgn: 0.94, supporting: 1.33 },
  { year: "2026", palmco: 1.18, sgn: 0.92, supporting: 1.3 },
];

/* ── 6c. Kepatuhan Effluent per Regional ──────────────────────────── */

export interface EffluentComplianceRow {
  regional: string;
  /** % uji effluent memenuhi baku mutu (12 bulan berjalan). */
  compliancePct: number;
  status: "Hijau" | "Amber";
}

/** Rata-rata tertimbang volume grup = 96,2%; ambang internal 95%. */
export const effluentCompliance: EffluentComplianceRow[] = [
  { regional: "Regional 1 (Sumut)", compliancePct: 97.8, status: "Hijau" },
  { regional: "Regional 2 (Sumut)", compliancePct: 98.4, status: "Hijau" },
  { regional: "Regional 3 (Riau)", compliancePct: 94.2, status: "Amber" },
  { regional: "Regional 4 (Sumsel–Lampung)", compliancePct: 96.2, status: "Hijau" },
  { regional: "Regional 5 (Kalimantan)", compliancePct: 93.6, status: "Amber" },
  { regional: "Regional 6 (Jawa)", compliancePct: 96.8, status: "Hijau" },
  { regional: "Regional 7 (Sulawesi–IBT)", compliancePct: 98.1, status: "Hijau" },
];

/* ── 6d. Sirkularitas Limbah ──────────────────────────────────────── */

export interface WasteCircularityRow {
  jalur: string;
  pemanfaatan: string;
  /** % volume termanfaatkan. */
  pct: number;
  color: string;
}

export const wasteCircularity: WasteCircularityRow[] = [
  { jalur: "Tankos (EFB)", pemanfaatan: "Kompos & mulsa kebun", pct: 74, color: PALETTE.green },
  { jalur: "Cangkang (PKS)", pemanfaatan: "Bahan bakar boiler & penjualan biomassa", pct: 88, color: PALETTE.amber },
  { jalur: "POME", pemanfaatan: "Biogas & land application (21/36 PKS)", pct: 58, color: PALETTE.teal },
];

/* ── 6e. Kawasan HCV per Regional ─────────────────────────────────── */

export interface HcvArea {
  regional: string;
  /** Luas kawasan HCV dikelola (rb ha). */
  luasRbHa: number;
  patroli: "Rutin (bulanan)" | "Rutin (triwulanan)" | "Perlu intensifikasi";
  /** Temuan gangguan (perambahan/perburuan) YTD. */
  temuanYtd: number;
}

/** Total 46,8 rb ha. */
export const hcvAreas: HcvArea[] = [
  { regional: "Regional 1 (Sumut)", luasRbHa: 8.4, patroli: "Rutin (bulanan)", temuanYtd: 2 },
  { regional: "Regional 2 (Sumut)", luasRbHa: 6.2, patroli: "Rutin (bulanan)", temuanYtd: 1 },
  { regional: "Regional 3 (Riau)", luasRbHa: 9.6, patroli: "Rutin (triwulanan)", temuanYtd: 4 },
  { regional: "Regional 4 (Sumsel–Lampung)", luasRbHa: 5.8, patroli: "Rutin (bulanan)", temuanYtd: 1 },
  { regional: "Regional 5 (Kalimantan)", luasRbHa: 12.4, patroli: "Perlu intensifikasi", temuanYtd: 5 },
  { regional: "Regional 6 (Jawa)", luasRbHa: 4.4, patroli: "Rutin (triwulanan)", temuanYtd: 0 },
];

/* ── 6f. Insiden Lingkungan Signifikan ────────────────────────────── */

export interface InsidenLingkungan {
  tanggal: string;
  lokasi: string;
  jenis: string;
  dampak: string;
  status: string;
}

/** 2 insiden signifikan YTD — keduanya closed (selaras KPI overview). */
export const insidenList: InsidenLingkungan[] = [
  {
    tanggal: "9 Feb 2026",
    lokasi: "PKS Regional 3 (Riau)",
    jenis: "Overflow kolam limbah (curah hujan ekstrem)",
    dampak: "Effluent melewati ambang di badan air ±36 jam",
    status: "Selesai — tanggul diperkuat, kapasitas kolam ditambah 20%",
  },
  {
    tanggal: "17 Apr 2026",
    lokasi: "Buffer HCV Regional 5 (Kalbar)",
    jenis: "Kebakaran lahan pihak ketiga merambat 12 ha",
    dampak: "12 ha semak buffer; tidak menyentuh blok inti HCV",
    status: "Selesai — padam <48 jam, berita acara bersama Manggala Agni",
  },
];

/* ── 6g. Footnote PROPER ──────────────────────────────────────────── */

/** 12 + 61 + 3 = 76 unit — selaras basis unit sertifikasi (certMatrix). */
export const properFootnote =
  "Peringkat PROPER KLHK siklus 2025/2026: 12 unit Hijau, 61 Biru, 3 Merah (total 76 unit dinilai — basis yang sama dengan unit sertifikasi ISPO/RSPO). 3 unit Merah menjalani rencana perbaikan IPAL dengan tenggat Desember 2026.";

/* ── 6h. Insight & Rekomendasi ────────────────────────────────────── */

export const lhInsights: EsgInsight[] = [
  {
    insight:
      "2 regional amber effluent (Riau 94,2%, Kalimantan 93,6%) beririsan dengan 3 unit PROPER Merah — akar masalah sama: kapasitas IPAL musim hujan.",
    rekomendasi:
      "Gabungkan capex perbaikan IPAL dengan program belt press POME agar beban organik masuk kolam turun.",
  },
  {
    insight:
      "Kawasan HCV Regional 5 (12,4 rb ha) mencatat 5 temuan gangguan dan patroli belum intensif — area risiko biodiversitas tertinggi.",
    rekomendasi:
      "Tambah tim patroli bersama masyarakat (kemitraan konservasi) dan pasang camera trap di koridor satwa.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   7. SOSIAL & PLASMA (/esg-sustainability/sosial-plasma)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 7a. KPI Strip ────────────────────────────────────────────────── */

/**
 * Catatan cakupan: areal kemitraan 82 rb ha mencakup plasma + PSR binaan +
 * kemitraan swadaya — lebih luas dari 338 kebun plasma (78,3 rb ha skema
 * inti-plasma) pada data produksi. PSR 14,2 rb ha adalah KUMULATIF
 * multi-tahun; realisasi 2026 saja 6.200 ha (selaras agro-data).
 */
export const sosialKpi: EsgPageKpi[] = [
  {
    label: "Petani Plasma Binaan",
    value: "61.400",
    valueSuffix: " KK",
    sub: "Areal kemitraan 82 rb ha",
    delta: "+3,1%",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Pendapatan Rata-rata Plasma",
    value: "Rp 5,8 jt",
    valueSuffix: "/bln",
    sub: "±1,6x UMP rata-rata wilayah operasi",
    delta: "+7,4%",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "PSR Plasma Terealisasi",
    value: "14,2 rb",
    valueSuffix: " ha",
    sub: "Kumulatif multi-tahun · 2026: 6.200 ha",
    delta: "+6.200 ha",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Penyaluran TJSL",
    value: "Rp 186 M",
    sub: "YTD · 4 pilar TJSL BUMN",
    delta: "+12,4%",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "UMK Binaan",
    value: "3.240",
    sub: "Pendanaan & pendampingan UMK aktif",
    delta: "+280",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 7b. Tren Kesejahteraan Plasma vs UMP ─────────────────────────── */

export interface WelfareTrendPoint {
  year: string;
  /** Pendapatan bersih rata-rata petani plasma (Rp jt/bln). */
  plasma: number;
  /** UMP rata-rata tertimbang wilayah operasi (Rp jt/bln). */
  ump: number;
}

export const welfareTrend: WelfareTrendPoint[] = [
  { year: "2022", plasma: 4.2, ump: 2.9 },
  { year: "2023", plasma: 4.6, ump: 3.1 },
  { year: "2024", plasma: 5.0, ump: 3.3 },
  { year: "2025", plasma: 5.4, ump: 3.5 },
  { year: "2026", plasma: 5.8, ump: 3.7 },
];

/* ── 7c. Progres PSR per Regional (kumulatif) ─────────────────────── */

export interface PsrProgressRow {
  regional: string;
  /** Target kumulatif program (rb ha). */
  targetRbHa: number;
  /** Realisasi kumulatif (rb ha) — total 14,2. */
  realisasiRbHa: number;
}

export const psrProgress: PsrProgressRow[] = [
  { regional: "Regional 1 (Sumut)", targetRbHa: 3.5, realisasiRbHa: 2.9 },
  { regional: "Regional 2 (Sumut)", targetRbHa: 3.0, realisasiRbHa: 2.6 },
  { regional: "Regional 3 (Riau)", targetRbHa: 4.0, realisasiRbHa: 3.8 },
  { regional: "Regional 4 (Sumsel–Lampung)", targetRbHa: 2.5, realisasiRbHa: 2.4 },
  { regional: "Regional 5 (Kalimantan)", targetRbHa: 2.0, realisasiRbHa: 1.6 },
  { regional: "Regional 6 (Jawa & lainnya)", targetRbHa: 1.2, realisasiRbHa: 0.9 },
];

/* ── 7d. Alokasi TJSL per Pilar (donut) ───────────────────────────── */

export interface TjslSlice {
  pilar: string;
  /** Rp M — total 186 (YTD). */
  rpM: number;
  color: string;
}

export const tjslAllocation: TjslSlice[] = [
  { pilar: "Ekonomi & UMK", rpM: 60, color: PALETTE.green },
  { pilar: "Pendidikan", rpM: 52, color: PALETTE.blue },
  { pilar: "Lingkungan", rpM: 41, color: PALETTE.teal },
  { pilar: "Sosial & Kesehatan", rpM: 33, color: PALETTE.amber },
];

/* ── 7e. Community Grievance ──────────────────────────────────────── */

export interface GrievanceSummary {
  total: number;
  selesai: number;
  proses: number;
  /** Rata-rata penyelesaian (hari); target SLA 30 hari. */
  avgSlaHari: number;
  targetSlaHari: number;
}

export const grievanceSummary: GrievanceSummary = {
  total: 22,
  selesai: 18,
  proses: 4,
  avgSlaHari: 21,
  targetSlaHari: 30,
};

export interface GrievanceCategoryRow {
  kategori: string;
  jumlah: number;
  selesai: number;
}

export const grievanceCategories: GrievanceCategoryRow[] = [
  { kategori: "Infrastruktur & akses jalan", jumlah: 8, selesai: 7 },
  { kategori: "Kemitraan & harga TBS", jumlah: 6, selesai: 5 },
  { kategori: "Lingkungan (debu, air)", jumlah: 5, selesai: 4 },
  { kategori: "Ketenagakerjaan lokal", jumlah: 3, selesai: 2 },
];

/* ── 7f. Human Rights Scorecard ───────────────────────────────────── */

export interface HumanRightsRow {
  indikator: string;
  nilai: string;
  status: "Terpenuhi" | "Dalam penguatan";
}

/** Cakupan HRDD 84,6% — selaras Training Compliance 84,6% (rc-data). */
export const humanRights: HumanRightsRow[] = [
  { indikator: "Pekerja anak", nilai: "0 kasus terverifikasi", status: "Terpenuhi" },
  { indikator: "Kerja paksa", nilai: "0 kasus terverifikasi", status: "Terpenuhi" },
  { indikator: "Cakupan HRDD (human rights due diligence)", nilai: "84,6% unit", status: "Dalam penguatan" },
  { indikator: "Kebebasan berserikat", nilai: "100% unit ber-PKB/SP aktif", status: "Terpenuhi" },
  { indikator: "Mekanisme pengaduan pekerja & komunitas", nilai: "100% unit tersedia", status: "Terpenuhi" },
];

/* ── 7g. Konflik Lahan Komunitas (kompak) ─────────────────────────── */

export interface LandConflictSummary {
  /** Titik konflik bersinggungan komunitas — subset 214 kasus sengketa (Aset). */
  titik: number;
  luasRbHa: number;
  mediasiAktif: number;
  selesaiYtd: number;
}

export const landConflictSummary: LandConflictSummary = {
  titik: 12,
  luasRbHa: 6.9,
  mediasiAktif: 7,
  selesaiYtd: 3,
};

export interface LandConflictRow {
  lokasi: string;
  luasHa: number;
  status: "Mediasi aktif" | "Proses hukum" | "Kesepakatan tercapai";
}

export const landConflictCompact: LandConflictRow[] = [
  { lokasi: "Regional 3 (Riau) — enclave desa", luasHa: 1840, status: "Mediasi aktif" },
  { lokasi: "Regional 5 (Kalbar) — klaim adat", luasHa: 1420, status: "Mediasi aktif" },
  { lokasi: "Regional 1 (Sumut) — okupasi eks-HGU", luasHa: 1180, status: "Proses hukum" },
  { lokasi: "Regional 4 (Sumsel) — batas plasma", luasHa: 760, status: "Kesepakatan tercapai" },
];

export const landConflictNote =
  "12 titik konflik komunitas adalah subset dari 214 kasus sengketa lahan grup (82,4 rb ha — dimensi Aset & Investasi / Risiko); dipantau di ESG karena berdampak NDPE & grievance.";

/* ── 7h. Insight & Rekomendasi ────────────────────────────────────── */

export const sosialInsights: EsgInsight[] = [
  {
    insight:
      "Pendapatan plasma Rp 5,8 jt/bln (1,6x UMP) tumbuh 7,4% — namun gap yield plasma vs inti masih menahan potensi pendapatan ±20%.",
    rekomendasi:
      "Perluas PSR dan program intensifikasi plasma (bibit unggul & pemupukan berimbang) di regional realisasi rendah.",
  },
  {
    insight:
      "SLA grievance 21 hari lebih baik dari target 30 — namun 4 kasus terbuka semuanya kategori kemitraan/lahan yang bereskalasi ke NDPE bila lambat.",
    rekomendasi:
      "Prioritaskan mediasi 2 titik konflik terbesar (Riau & Kalbar) dengan fasilitator independen.",
  },
  {
    insight:
      "HRDD 84,6% unit adalah satu-satunya indikator HAM berstatus 'dalam penguatan' — material bagi rating Sustainalytics dan buyer NDPE.",
    rekomendasi:
      "Selesaikan HRDD 100% unit + pemasok TBS inti sebelum asesmen rating 2027.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   8. RATING & SUSTAINABLE FINANCE (/esg-sustainability/rating-pendanaan)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 8a. KPI Strip ────────────────────────────────────────────────── */

export const ratingKpi: EsgPageKpi[] = [
  {
    label: "Skor GCG (SK-16 BUMN)",
    value: "92,1",
    valueSuffix: "/100",
    sub: "Kategori: Sangat Baik",
    delta: "+0,7 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Sustainalytics ESG Risk",
    value: "26,4",
    sub: "Medium Risk · makin rendah makin baik",
    delta: "-1,4 pts",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "S&P Global CSA",
    value: "58",
    valueSuffix: "/100",
    sub: "Persentil 71 industri food products",
    delta: "+3 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "SLL Outstanding",
    value: "Rp 6,5 T",
    sub: "Sustainability-linked loan · 3 KPI",
    tone: "amber",
  },
  {
    label: "Step-down Margin",
    value: "12,5",
    valueSuffix: " bps",
    sub: "Tercapai · efektif Jun 2026 (±Rp 8 M/thn)",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 8b. Tren Rating Multi-Agensi ─────────────────────────────────── */

export interface RatingTrendPoint {
  year: string;
  /** Skor GCG SK-16 (0-100, makin tinggi makin baik). */
  gcg: number;
  /** Sustainalytics ESG Risk (makin rendah makin baik). */
  sustainalytics: number;
  /** S&P Global CSA (0-100, makin tinggi makin baik). */
  csa: number;
}

export const ratingTrend: RatingTrendPoint[] = [
  { year: "2023", gcg: 89.4, sustainalytics: 31.2, csa: 46 },
  { year: "2024", gcg: 90.6, sustainalytics: 29.5, csa: 51 },
  { year: "2025", gcg: 91.4, sustainalytics: 27.8, csa: 55 },
  { year: "2026", gcg: 92.1, sustainalytics: 26.4, csa: 58 },
];

/* ── 8c. Benchmark Peer (Sustainalytics ESG Risk) ─────────────────── */

export interface PeerBenchRow {
  perusahaan: string;
  /** Sustainalytics ESG Risk — makin rendah makin baik. */
  skor: number;
  band: "Low Risk" | "Medium Risk" | "High Risk";
  isPtpn?: boolean;
}

export const peerBench: PeerBenchRow[] = [
  { perusahaan: "SD Guthrie (SIME)", skor: 24.1, band: "Medium Risk" },
  { perusahaan: "IOI Corporation", skor: 25.6, band: "Medium Risk" },
  { perusahaan: "PTPN Group", skor: 26.4, band: "Medium Risk", isPtpn: true },
  { perusahaan: "Astra Agro Lestari", skor: 29.3, band: "Medium Risk" },
  { perusahaan: "Golden Agri (GAR)", skor: 32.8, band: "High Risk" },
];

/* ── 8d. SLL KPI Tracker ──────────────────────────────────────────── */

export interface SllKpi {
  kpi: string;
  target: string;
  actual: string;
  status: "On-track" | "Tercapai" | "At-risk";
}

export const sllKpis: SllKpi[] = [
  {
    kpi: "Cakupan ISPO areal inti",
    target: "≥ 90% pada 2027",
    actual: "88,2% · pipeline 12 unit",
    status: "On-track",
  },
  {
    kpi: "Intensitas emisi Scope 1+2",
    target: "≤ 1,78 tCO2e/ton CPO (2027)",
    actual: "1,82 · tren -4,2%/thn",
    status: "On-track",
  },
  {
    kpi: "Zero deforestation lahan inti",
    target: "0 insiden terverifikasi",
    actual: "0 insiden (14 alert = false positive/investigasi)",
    status: "Tercapai",
  },
];

/* ── 8e. Green Finance Pipeline ───────────────────────────────────── */

export interface GreenPipelineRow {
  instrumen: string;
  nilai: string;
  timeline: string;
  status: string;
}

export const greenPipeline: GreenPipelineRow[] = [
  {
    instrumen: "Green bond (biogas & solar)",
    nilai: "Rp 2 T",
    timeline: "Penerbitan 2027",
    status: "Framework & second party opinion disusun",
  },
  {
    instrumen: "KUR Plasma & PSR",
    nilai: "Rp 0,9 T",
    timeline: "2026 berjalan",
    status: "Tersalur Rp 0,4 T YTD via bank Himbara",
  },
  {
    instrumen: "Refinancing format sustainability-linked",
    nilai: "Rp 4 T",
    timeline: "Q3 2026",
    status: "Dievaluasi bersama rencana refinancing dimensi Keuangan",
  },
];

/* ── 8f. Disclosure Calendar ──────────────────────────────────────── */

export interface DisclosureItem {
  dokumen: string;
  standar: string;
  due: string;
  status: "Terbit" | "Disampaikan" | "Berjalan" | "Persiapan";
}

export const disclosureCalendar: DisclosureItem[] = [
  { dokumen: "Sustainability Report 2025", standar: "GRI Universal 2021", due: "Apr 2026", status: "Terbit" },
  { dokumen: "Laporan Keberlanjutan OJK", standar: "POJK 51/2017", due: "Jun 2026", status: "Disampaikan" },
  { dokumen: "CDP Climate Change", standar: "CDP", due: "Sep 2026", status: "Persiapan" },
  { dokumen: "CSRD readiness assessment", standar: "ESRS (double materiality)", due: "Q4 2026", status: "Berjalan" },
];

/* ── 8g. Decision Center ──────────────────────────────────────────── */

export const ratingDecisions: EsgDecision[] = [
  {
    title: "Upgrade Assurance SR: Limited → Reasonable",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "SLL Rp 6,5 T dan rencana green bond Rp 2 T menuntut kredibilitas data emisi & sertifikasi; assurance saat ini limited.",
    rekomendasi:
      "Setujui penunjukan assurance reasonable untuk SR 2026 (terbit 2027), mulai dari indikator emisi & ISPO.",
    due: "Q4 2026",
  },
  {
    title: "Persetujuan Green Bond Framework Rp 2 T",
    impact: "Medium Impact",
    tone: "green",
    context:
      "Use of proceeds biogas batch-3/4 & solar 30 MWp; SPO dalam penyusunan — jendela pasar obligasi hijau 2027 kondusif.",
    rekomendasi:
      "Sahkan framework di BOD lalu ajukan registrasi ke OJK pada Q1 2027.",
    due: "Q1 2027",
  },
];

/* ── 8h. Insight & Rekomendasi ────────────────────────────────────── */

export const ratingInsights: EsgInsight[] = [
  {
    insight:
      "Posisi Sustainalytics 26,4 sudah di depan Astra Agro & GAR namun masih di belakang SD Guthrie (24,1) — gap terbesar di pilar rantai pasok & HAM.",
    rekomendasi:
      "Fokuskan perbaikan pada HRDD 100% dan traceability pihak ketiga — dua isu yang sama dengan agenda EUDR.",
  },
  {
    insight:
      "Seluruh 3 KPI SLL on-track/tercapai; step-down 12,5 bps menghemat ±Rp 8 M/thn — bukti konkret ESG menurunkan biaya dana.",
    rekomendasi:
      "Replikasi struktur sustainability-linked pada refinancing Rp 4 T (Keuangan) untuk memperbesar penghematan bunga.",
  },
];
