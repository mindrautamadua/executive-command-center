/**
 * Data statis halaman Sengketa Lahan (/aset-investasi/sengketa-lahan).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (sengketa 82,4 rb ha · 214 kasus) dan ast-core.ts (split per subholding).
 * Catatan: eksposur ekonomi sengketa lahan Rp 6,2 T = nilai buku areal +
 * potensi kehilangan pendapatan; lebih luas dari eksposur provisi legal
 * korporat Rp 4,2 T (RISIKO.eksposurLegalRpT) yang hanya mencakup perkara
 * aktif di pengadilan.
 */

import type { AstDecision, AstInsight, AstKpi, AstRiskLevel } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const asgKpi: AstKpi[] = [
  {
    label: "Areal Sengketa",
    value: "82,4",
    sub: "Rb Ha · 7,6% land bank",
    delta: "-7,6%",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "sengketa",
    tone: "red",
  },
  {
    label: "Jumlah Kasus",
    value: "214",
    sub: "PalmCo 112 · SGN 58 · PTPN I 44",
    delta: "-18 kasus",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "sengketa",
    tone: "amber",
  },
  {
    label: "Eksposur Ekonomi",
    value: "Rp 6,2 T",
    sub: "Nilai buku + potensi pendapatan hilang",
    delta: "+Rp 0,3 T",
    trend: "up",
    deltaTone: "bad",
    compare: "revaluasi KJPP YTD",
    icon: "nilai",
    tone: "pink",
  },
  {
    label: "Diselesaikan YTD",
    value: "6,8",
    sub: "Rb Ha · target FY 15 rb ha",
    delta: "45,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs prorata 41,7%",
    icon: "land",
    tone: "green",
  },
  {
    label: "Di Pengadilan",
    value: "47",
    sub: "Kasus · subset 87 perkara legal grup",
    delta: "+5 kasus",
    trend: "up",
    deltaTone: "bad",
    compare: "gugatan baru YTD",
    icon: "hgu",
    tone: "teal",
  },
];

/* ── 2. Sengketa per Tipe (donut) ─────────────────────────────────── */

export interface DisputeTypeSlice {
  tipe: string;
  /** Porsi luas (%), jumlah = 100. */
  pct: number;
  /** Luas (rb ha), jumlah = 82,4. */
  luasRbHa: number;
  /** Jumlah kasus, jumlah = 214. */
  kasus: number;
}

export const byType: DisputeTypeSlice[] = [
  { tipe: "Okupasi Masyarakat", pct: 54, luasRbHa: 44.5, kasus: 118 },
  { tipe: "Klaim Pihak Ketiga", pct: 22, luasRbHa: 18.1, kasus: 47 },
  { tipe: "Tumpang Tindih Izin", pct: 15, luasRbHa: 12.4, kasus: 31 },
  { tipe: "TORA / Reforma Agraria", pct: 9, luasRbHa: 7.4, kasus: 18 },
];

/* ── 3. Sengketa per Subholding (stacked) ─────────────────────────── */

export interface DisputeSubholdingRow {
  subholding: string;
  /** Luas per tipe (rb ha); jumlah baris = split ast-core (44,6 / 21,2 / 16,6). */
  okupasiRbHa: number;
  klaimRbHa: number;
  tumpangTindihRbHa: number;
  toraRbHa: number;
  kasus: number;
}

export const bySubholding: DisputeSubholdingRow[] = [
  { subholding: "PalmCo", okupasiRbHa: 26.4, klaimRbHa: 9.2, tumpangTindihRbHa: 5.6, toraRbHa: 3.4, kasus: 112 },
  { subholding: "SGN (Lahan Tebu)", okupasiRbHa: 12.6, klaimRbHa: 4.3, tumpangTindihRbHa: 2.1, toraRbHa: 2.2, kasus: 58 },
  { subholding: "PTPN I", okupasiRbHa: 5.5, klaimRbHa: 4.6, tumpangTindihRbHa: 4.7, toraRbHa: 1.8, kasus: 44 },
];

/* ── 4. Tren Penyelesaian (kumulatif vs target) ───────────────────── */

export interface ResolutionPoint {
  bulan: string;
  /** Kumulatif areal diselesaikan (rb ha) — Mei = 6,8. */
  kumulatifRbHa: number;
  /** Target kumulatif linear menuju 15 rb ha FY. */
  targetKumulatifRbHa: number;
}

export const resolutionTrend: ResolutionPoint[] = [
  { bulan: "Jan", kumulatifRbHa: 1.1, targetKumulatifRbHa: 1.25 },
  { bulan: "Feb", kumulatifRbHa: 2.3, targetKumulatifRbHa: 2.5 },
  { bulan: "Mar", kumulatifRbHa: 3.6, targetKumulatifRbHa: 3.75 },
  { bulan: "Apr", kumulatifRbHa: 5.2, targetKumulatifRbHa: 5.0 },
  { bulan: "Mei", kumulatifRbHa: 6.8, targetKumulatifRbHa: 6.25 },
];

export const resolutionNote =
  "Penyelesaian YTD 6,8 rb ha (45,3% target FY 15 rb ha) — di atas prorata; didorong mediasi GTRA Cinta Manis & 2 putusan inkracht.";

/* ── 5. Top Dispute Cases (8 kasus) ───────────────────────────────── */

export interface DisputeCase {
  lokasi: string;
  subholding: "PalmCo" | "SGN" | "PTPN I";
  /** Luas sengketa (rb ha). */
  luasRbHa: number;
  tahap: string;
  risiko: AstRiskLevel;
  note?: string;
}

export const topCases: DisputeCase[] = [
  {
    lokasi: "Sei Mencirim–Kutalimbaru, Deli Serdang",
    subholding: "PalmCo",
    luasRbHa: 5.8,
    tahap: "Eksekusi putusan tertunda",
    risiko: "Ekstrem",
    note: "Okupasi masif; eskalasi sosial tinggi — perlu dukungan APH & pemda.",
  },
  {
    lokasi: "Padang Halaban, Labuhanbatu",
    subholding: "PalmCo",
    luasRbHa: 3.9,
    tahap: "Kasasi dimenangkan (inkracht)",
    risiko: "Tinggi",
    note: "Jendela enforcement H2 2026.",
  },
  {
    lokasi: "Cinta Manis, Ogan Ilir",
    subholding: "SGN",
    luasRbHa: 4.6,
    tahap: "Mediasi GTRA berjalan",
    risiko: "Tinggi",
  },
  {
    lokasi: "Bekri, Lampung Tengah",
    subholding: "SGN",
    luasRbHa: 2.8,
    tahap: "Gugatan perdata di PN",
    risiko: "Sedang",
  },
  {
    lokasi: "Eks-HGU Tamiang, Aceh",
    subholding: "PTPN I",
    luasRbHa: 3.2,
    tahap: "Kasasi di MA",
    risiko: "Tinggi",
  },
  {
    lokasi: "Ngabang, Landak",
    subholding: "PalmCo",
    luasRbHa: 2.6,
    tahap: "Mediasi adat/pemda",
    risiko: "Sedang",
  },
  {
    lokasi: "Keera, Wajo",
    subholding: "PalmCo",
    luasRbHa: 2.1,
    tahap: "PTUN sertifikat pihak ketiga",
    risiko: "Sedang",
  },
  {
    lokasi: "Gunung Meliau, Sanggau",
    subholding: "PalmCo",
    luasRbHa: 1.8,
    tahap: "Laporan pidana diproses APH",
    risiko: "Tinggi",
  },
];

/* ── 6. Risk Matrix (probabilitas × dampak) ───────────────────────── */

export interface AsgRisk {
  name: string;
  /** Kemungkinan terjadi, skala 1-5. */
  likelihood: number;
  /** Dampak bila terjadi, skala 1-5. */
  impact: number;
  level: AstRiskLevel;
  mitigation: string;
}

export const asgRiskMatrix: AsgRisk[] = [
  {
    name: "Okupasi Meluas Saat HGU Transisi",
    likelihood: 4,
    impact: 5,
    level: "Ekstrem",
    mitigation: "Percepatan perpanjangan HGU + patroli & pemagaran areal rawan.",
  },
  {
    name: "Eskalasi Konflik Sosial Saat Enforcement",
    likelihood: 3,
    impact: 5,
    level: "Tinggi",
    mitigation: "Protokol eksekusi humanis, keterlibatan pemda/tokoh, opsi kemitraan.",
  },
  {
    name: "Kekalahan Perkara Bernilai Besar",
    likelihood: 2,
    impact: 5,
    level: "Tinggi",
    mitigation: "Kurasi bukti alas hak, KJPP & saksi ahli; provisi memadai.",
  },
  {
    name: "Tumpang Tindih Izin Tambang/Kawasan Hutan",
    likelihood: 3,
    impact: 4,
    level: "Tinggi",
    mitigation: "Rekonsiliasi one-map dengan ATR/BPN, KLHK & ESDM.",
  },
  {
    name: "Pelepasan TORA Melebihi Rencana",
    likelihood: 3,
    impact: 3,
    level: "Sedang",
    mitigation: "Negosiasi kompensasi/ruilslag & prioritas areal non-produktif.",
  },
  {
    name: "Preseden Mediasi Terlalu Longgar",
    likelihood: 2,
    impact: 3,
    level: "Sedang",
    mitigation: "Pedoman mediasi grup satu pintu — syarat & batas kompensasi baku.",
  },
];

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

export const asgDecisions: AstDecision[] = [
  {
    title: "Enforcement Terpadu Okupasi Sumut",
    impact: "High Impact",
    tone: "red",
    context:
      "Okupasi Regional 1–2 mencapai 16,2 rb ha dan meluas; 2 putusan inkracht (termasuk Padang Halaban 3,9 rb ha) belum dieksekusi.",
    rekomendasi:
      "Bentuk joint task force dengan APH & pemda; eksekusi bertahap dimulai dari areal berputusan inkracht.",
    due: "Q3 2026",
  },
  {
    title: "Konversi Okupan Produktif ke Kemitraan",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "±18 rb ha okupasi berusia > 5 tahun sudah ditanami masyarakat; eksekusi paksa berbiaya sosial tinggi dan berlarut.",
    rekomendasi:
      "Setujui skema kemitraan tebu/sawit rakyat di areal okupasi produktif dengan pengakuan aset tetap milik PTPN.",
    due: "Q4 2026",
  },
  {
    title: "Pelepasan Selektif Areal TORA",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "7,4 rb ha berstatus TORA; sebagian tidak mungkin dipulihkan secara ekonomis maupun sosial.",
    rekomendasi:
      "Lepas areal TORA non-produktif dengan kompensasi/ruilslag, prioritaskan pertahankan areal tertanam menghasilkan.",
    due: "Q4 2026",
  },
];

/* ── 8. Insights ──────────────────────────────────────────────────── */

export const asgInsights: AstInsight[] = [
  {
    title: "Okupasi = 54% Masalah",
    text: "44,5 rb ha okupasi masyarakat mendominasi sengketa; korelasi kuat dengan areal HGU menjelang habis — pencegahan lebih murah daripada pemulihan.",
    tone: "red",
  },
  {
    title: "Penyelesaian di Atas Prorata",
    text: "6,8 rb ha selesai YTD (45,3% target) — kombinasi mediasi GTRA dan putusan inkracht bekerja; pertahankan komposisi 70% non-litigasi.",
    tone: "green",
  },
  {
    title: "Eksposur Naik Meski Kasus Turun",
    text: "Kasus turun 18 tetapi eksposur naik Rp 0,3 T karena revaluasi KJPP areal Sumut — nilai tanah naik lebih cepat daripada laju penyelesaian.",
    tone: "amber",
  },
];
