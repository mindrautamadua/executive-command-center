/**
 * Data statis dimensi K3 & Keamanan (/k3-keamanan).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * File ini memuat halaman Executive Overview, Kinerja K3, dan Budaya &
 * Kepatuhan K3; dua halaman lain (Karhutla & Tanggap Darurat, Keamanan Aset
 * & Kebun) ada di hse-data-detail.ts. Angka kanonik mengutip
 * src/lib/group-baseline.ts (konstanta HSE, PRODUKSI, RISIKO).
 *
 * Batas scope — jangan duplikasi:
 * - Kepatuhan K3 sebagai kewajiban hukum ketenagakerjaan → /risk-compliance
 * - Insiden lingkungan & peringkat PROPER → /esg-sustainability/lingkungan-hayati
 * - Register risiko enterprise → /risiko-kepatuhan/risk-register
 * - Hubungan industrial & serikat pekerja → /industrial-relations
 */

import { BASELINE_TRUST, HSE, PRODUKSI, RISIKO } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   TIPE BERSAMA ANTAR-HALAMAN HSE
   ══════════════════════════════════════════════════════════════════════ */

/** KPI mini untuk strip halaman detail (bukan overview). */
export interface HsePageKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/76 unit" atau " hari". */
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "purple";
}

/** Pasangan insight → rekomendasi di kartu bawah tiap halaman. */
export interface HseInsight {
  insight: string;
  rekomendasi: string;
}

/** Item keputusan BOD (dipakai overview dan halaman detail). */
export interface HseDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

/** Tautan pendalaman ke dimensi/modul lain (anti-duplikasi scope). */
export interface HseCrossLink {
  label: string;
  href: string;
  catatan: string;
}

/** Status RAG program HSE. */
export type HseRagStatus = "Hijau" | "Amber" | "Merah";

export const HSE_RAG_COLOR: Record<HseRagStatus, string> = {
  Hijau: PALETTE.green,
  Amber: PALETTE.amber,
  Merah: PALETTE.red,
};

/** Tingkat risiko regional untuk heat strip / peta panas. */
export type HseRiskLevel = "Rendah" | "Sedang" | "Tinggi" | "Sangat Tinggi";

export const HSE_RISK_COLOR: Record<HseRiskLevel, string> = {
  Rendah: PALETTE.green,
  Sedang: PALETTE.amber,
  Tinggi: "#f97316",
  "Sangat Tinggi": PALETTE.red,
};

/**
 * Tujuh regional operasi PalmCo — label identik dengan produksi-data.ts
 * agar heat strip lintas dimensi dapat dijoin per label.
 */
export const HSE_REGIONAL_LABELS = [
  "Regional 1 (Sumut)",
  "Regional 2 (Sumut)",
  "Regional 3 (Riau)",
  "Regional 4 (Jambi–Sumbar)",
  "Regional 5 (Sumsel–Lampung)",
  "Regional 6 (Kalimantan)",
  "Regional 7 (Sulawesi–Papua)",
] as const;

/* ══════════════════════════════════════════════════════════════════════
   1. EXECUTIVE OVERVIEW (/k3-keamanan)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const hseDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "94,1%",
  quality: "92,8%",
  sources: ["SIMK3", "Laporan Insiden", "Satelit Hotspot", "Satuan Pengamanan"],
};

/* ── 1b. KPI Strip ────────────────────────────────────────────────── */

export interface HseKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "ltifr" | "accident" | "fatality" | "manhours" | "fire" | "theft" | "cert";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "purple";
  /** Penanda khusus, mis. komitmen zero fatality. */
  flag?: string;
}

export const hseKpi: HseKpi[] = [
  {
    label: "LTIFR",
    value: "1,42", // = HSE.ltifr
    sub: "Per 1 juta jam kerja · target ≤1,20", // = HSE.ltifrTarget
    delta: "-0,14",
    trend: "down",
    deltaTone: "good",
    compare: "vs FY 2025 (1,56)",
    icon: "ltifr",
    tone: "amber",
  },
  {
    label: "Kecelakaan Kerja",
    value: "84", // = HSE.kecelakaanYtd
    valueSuffix: " kasus",
    sub: "YTD · 52 ringan · 22 sedang · 8 berat · 2 fatal",
    delta: "-9,7%",
    trend: "down",
    deltaTone: "good",
    compare: "vs YTD 2025 (93)",
    icon: "accident",
    tone: "blue",
  },
  {
    label: "Insiden Fatal",
    value: "2", // = HSE.fatalityYtd
    valueSuffix: " kejadian",
    sub: "YTD · investigasi tuntas · rekomendasi berjalan",
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025 (1)",
    icon: "fatality",
    tone: "red",
    flag: "Zero fatality goal",
  },
  {
    label: "Jam Kerja Aman",
    value: "62,4 juta", // = HSE.jamKerjaAmanJt
    valueSuffix: " jam",
    sub: "YTD · basis perhitungan LTIFR & severity rate",
    delta: "+3,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs YTD 2025",
    icon: "manhours",
    tone: "green",
  },
  {
    label: "Titik Kebakaran Lahan",
    value: "18", // = HSE.titikKebakaranYtd
    valueSuffix: " kejadian",
    sub: "YTD · luas terbakar 142 ha · 214 hotspot terdeteksi",
    delta: "+4",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025 (14)",
    icon: "fire",
    tone: "red",
  },
  {
    label: "Pencurian TBS",
    value: "312", // = HSE.pencurianTbsKasus
    valueSuffix: " kasus",
    sub: "YTD · kerugian Rp 8,4 M · 68% kasus tuntas",
    delta: "+11,4%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025 (280)",
    icon: "theft",
    tone: "amber",
  },
  {
    label: "SMK3 Tersertifikasi",
    value: "68", // = HSE.smk3Tersertifikasi
    valueSuffix: "/76 unit", // = HSE.unitTotal
    sub: "89,5% unit · 8 unit dalam proses audit",
    delta: "+4 unit",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "cert",
    tone: "teal",
  },
];

/* ── 1c. HSE Intelligence ─────────────────────────────────────────── */

export interface HseSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const hseIntelligence: HseSignal[] = [
  {
    no: "01",
    title: "Dua Insiden Fatal Terpusat di Rantai Panen–Angkut",
    text: "Kedua insiden fatal YTD terjadi pada aktivitas panen dan transportasi TBS — segmen yang juga menyumbang 31 dari 84 kecelakaan (37%). Investigasi kedua kasus telah tuntas dengan akar masalah teridentifikasi, namun 7 dari 14 rekomendasi korektif belum ditutup, sehingga eksposur berulang masih terbuka.",
    impactLabel: "Rekomendasi Belum Ditutup",
    impactValue: "7 dari 14",
    tone: "red",
  },
  {
    no: "02",
    title: "Risiko Karhutla Naik Menjelang Semester II",
    text: "Probabilitas El Nino H2 2026 sebesar 62% (lih. Agronomi & Iklim) bertepatan dengan puncak musim kering Jul–Sep. Pola 12 bulan terakhir menunjukkan 91 dari 214 hotspot (43%) muncul pada jendela tiga bulan tersebut, terkonsentrasi di Regional 3, 5, dan 6.",
    impactLabel: "Probabilitas El Nino H2",
    impactValue: "62%",
    tone: "amber",
  },
  {
    no: "03",
    title: "Pencurian TBS Berkorelasi dengan Restan Panen",
    text: "Regional 3, 5, dan 6 menyumbang 204 dari 312 kasus (65,4%) dan Rp 5,62 M dari Rp 8,4 M kerugian. Ketiganya juga berada di kuartil atas restan panen (1,6–2,4% vs norma <2%) — TBS yang menginap di TPH memperbesar peluang kehilangan.",
    impactLabel: "Konsentrasi 3 Regional",
    impactValue: "65,4% kasus",
    tone: "amber",
  },
];

/* ── 1d. HSE Risk Radar ───────────────────────────────────────────── */

export interface HseRiskAxis {
  axis: string;
  /** Skor kesehatan 0-100 (makin tinggi makin baik/terkendali). */
  score: number;
  /** Target internal 2027. */
  target: number;
}

/** Enam sumbu eksposur HSE; skor komposit tertimbang 71,0. */
export const hseRiskRadar: HseRiskAxis[] = [
  { axis: "Kecelakaan Kerja", score: 68, target: 82 },
  { axis: "Kebakaran Lahan", score: 62, target: 80 },
  { axis: "Keamanan Aset", score: 64, target: 78 },
  { axis: "Kesehatan Kerja", score: 78, target: 86 },
  { axis: "Kepatuhan SMK3", score: 84, target: 92 },
  { axis: "Kesiapan Tanggap Darurat", score: 72, target: 88 },
];

/* ── 1e. Tren Insiden 12 Bulan ────────────────────────────────────── */

export interface IncidentTrendPoint {
  bulan: string;
  ringan: number;
  sedang: number;
  /**
   * Kecelakaan berat termasuk insiden fatal (kategori keparahan tertinggi);
   * pemisahan berat vs fatal ada di incidentBySeverity.
   */
  berat: number;
  /** LTIFR rolling 12 bulan pada akhir bulan tersebut. */
  ltifr: number;
}

/**
 * Rolling 12 bulan Jun 2025 – Mei 2026. Irisan Jan–Mei 2026 (YTD 2026)
 * berjumlah 52 ringan + 22 sedang + 10 berat/fatal = 84 kasus,
 * konsisten dengan HSE.kecelakaanYtd dan incidentBySeverity.
 */
export const incidentTrend: IncidentTrendPoint[] = [
  { bulan: "Jun 25", ringan: 11, sedang: 5, berat: 2, ltifr: 1.56 },
  { bulan: "Jul 25", ringan: 12, sedang: 5, berat: 2, ltifr: 1.58 },
  { bulan: "Agu 25", ringan: 13, sedang: 6, berat: 3, ltifr: 1.61 },
  { bulan: "Sep 25", ringan: 12, sedang: 5, berat: 2, ltifr: 1.57 },
  { bulan: "Okt 25", ringan: 11, sedang: 4, berat: 2, ltifr: 1.54 },
  { bulan: "Nov 25", ringan: 10, sedang: 4, berat: 1, ltifr: 1.5 },
  { bulan: "Des 25", ringan: 9, sedang: 4, berat: 2, ltifr: 1.56 },
  { bulan: "Jan 26", ringan: 9, sedang: 4, berat: 2, ltifr: 1.52 },
  { bulan: "Feb 26", ringan: 10, sedang: 4, berat: 2, ltifr: 1.49 },
  { bulan: "Mar 26", ringan: 11, sedang: 5, berat: 2, ltifr: 1.47 },
  { bulan: "Apr 26", ringan: 11, sedang: 4, berat: 2, ltifr: 1.44 },
  { bulan: "Mei 26", ringan: 11, sedang: 5, berat: 2, ltifr: 1.42 },
];

/* ── 1f. Heat Strip per Regional ──────────────────────────────────── */

export interface HseRegionalRow {
  regional: string;
  /** Kecelakaan kerja YTD; total 7 regional = 84. */
  kecelakaan: number;
  /** LTIFR regional per 1 juta jam kerja. */
  ltifr: number;
  /** Titik kebakaran lahan YTD; total = 18. */
  titikApi: number;
  /** Kasus pencurian TBS YTD; total = 312. */
  pencurian: number;
  risiko: HseRiskLevel;
}

/** Total kolom: 84 kecelakaan · 18 titik api · 312 pencurian (= HSE). */
export const hseByRegional: HseRegionalRow[] = [
  { regional: "Regional 1 (Sumut)", kecelakaan: 14, ltifr: 1.36, titikApi: 1, pencurian: 28, risiko: "Sedang" },
  { regional: "Regional 2 (Sumut)", kecelakaan: 16, ltifr: 1.41, titikApi: 1, pencurian: 34, risiko: "Sedang" },
  { regional: "Regional 3 (Riau)", kecelakaan: 13, ltifr: 1.48, titikApi: 5, pencurian: 74, risiko: "Sangat Tinggi" },
  { regional: "Regional 4 (Jambi–Sumbar)", kecelakaan: 10, ltifr: 1.29, titikApi: 2, pencurian: 26, risiko: "Sedang" },
  { regional: "Regional 5 (Sumsel–Lampung)", kecelakaan: 12, ltifr: 1.44, titikApi: 4, pencurian: 68, risiko: "Tinggi" },
  { regional: "Regional 6 (Kalimantan)", kecelakaan: 11, ltifr: 1.52, titikApi: 4, pencurian: 62, risiko: "Tinggi" },
  { regional: "Regional 7 (Sulawesi–Papua)", kecelakaan: 8, ltifr: 1.38, titikApi: 1, pencurian: 20, risiko: "Rendah" },
];

/* ── 1g. Alerts & Notifications ───────────────────────────────────── */

export interface HseAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const hseAlerts: HseAlert[] = [
  {
    title: "7 Rekomendasi Investigasi Fatal Belum Ditutup",
    text: "Dari 14 tindakan korektif hasil investigasi dua insiden fatal, 7 masih terbuka — mayoritas terkait rekayasa alat angkut TBS dan pengendalian lalu lintas kebun.",
    time: "Hari ini",
    tone: "red",
  },
  {
    title: "Siaga Karhutla Regional 3 & 5 Dinaikkan",
    text: "Deteksi hotspot Mei 2026 mencapai 28 titik (tertinggi sejak Sep 2025); status kesiapsiagaan Regional 3 dan 5 dinaikkan ke Siaga menjelang puncak kering Jul–Sep.",
    time: "1 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Pencurian TBS Mei Tertinggi 12 Bulan",
    text: "31 kasus pada Mei 2026 dengan kerugian Rp 0,88 M — bertepatan dengan kenaikan harga TBS dan restan panen di Regional 5 & 6.",
    time: "3 hari yang lalu",
    tone: "amber",
  },
  {
    title: "4 Unit Baru Lulus Sertifikasi SMK3",
    text: "Cakupan SMK3 naik menjadi 68 dari 76 unit (89,5%); 8 unit tersisa dijadwalkan audit s.d. Q2 2027.",
    time: "6 hari yang lalu",
    tone: "green",
  },
];

/* ── 1h. BOD Decision Center ──────────────────────────────────────── */

export const hseDecisions: HseDecision[] = [
  {
    title: "Uplift Anggaran APD & Mekanisasi Panen Rp 96 M",
    impact: "High Impact",
    tone: "red",
    context:
      "Aktivitas panen & angkut TBS menyumbang 31 dari 84 kecelakaan dan kedua insiden fatal. Temuan audit terkait APD adalah kategori terbesar (52 dari 214 temuan terbuka).",
    rekomendasi:
      "Setujui uplift Rp 96 M: Rp 34 M pembaruan APD spesifik panen dan Rp 62 M mekanisasi angkut TBS pada 12 kebun dengan LTIFR tertinggi.",
    due: "Q3 2026",
  },
  {
    title: "Penambahan 18 Menara Pantau di Regional Rawan",
    impact: "High Impact",
    tone: "amber",
    context:
      "84 menara pantau saat ini belum menutup blok rawan Regional 3, 5, dan 6 yang menyumbang 13 dari 18 kejadian kebakaran dan 108 ha dari 142 ha luas terbakar.",
    rekomendasi:
      "Setujui capex 18 menara pantau (Rp 21,6 M) plus integrasi kamera termal sebelum puncak kering Jul 2026; target waktu respons turun ke ≤35 menit.",
    due: "Q3 2026",
  },
  {
    title: "Program Pengamanan Terpadu Panen Puncak",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Pencurian TBS Rp 8,4 M YTD terkonsentrasi di 3 regional dengan restan panen tertinggi; puncak panen Sep–Nov berpotensi memperbesar eksposur.",
    rekomendasi:
      "Aktifkan satgas gabungan pengamanan–panen di Regional 3, 5, 6 dengan patroli bersama aparat, percepatan evakuasi TBS, dan penguatan timbangan digital.",
    due: "Q3 2026",
  },
];

/* ── 1i. Insight & Rekomendasi ────────────────────────────────────── */

export const hseInsights: HseInsight[] = [
  {
    insight:
      "LTIFR membaik 9,0% (1,56 → 1,42) namun masih 0,22 poin di atas target ≤1,20 dan 0,32 di atas benchmark industri sawit 1,10 — perbaikan belum menyentuh segmen panen & angkut TBS yang menjadi sumber utama insiden berat.",
    rekomendasi:
      "Fokuskan program penurunan LTIFR 2026 pada rantai panen–angkut: mekanisasi, pengendalian lalu lintas kebun, dan pengawasan mandor per rotasi.",
  },
  {
    insight:
      "Dua insiden fatal menaikkan urgensi penutupan rekomendasi korektif; 7 dari 14 rekomendasi masih terbuka melewati target penutupan internal 90 hari.",
    rekomendasi:
      "Jadikan penutupan rekomendasi investigasi fatal sebagai KPI langsung Direktur Operasi dengan pelaporan bulanan ke Komite Manajemen Risiko.",
  },
  {
    insight:
      "Probabilitas El Nino H2 62% ditambah cakupan menara pantau yang belum merata membuat proyeksi luas terbakar FY dapat melampaui 142 ha YTD bila kapasitas respons tidak ditambah.",
    rekomendasi:
      "Jendela persiapan Juli sudah lewat — percepat pengadaan menara pantau & embung yang tersisa dan perluas Masyarakat Peduli Api selagi puncak musim kering berlangsung.",
  },
  {
    insight:
      "Indeks budaya keselamatan 3,4/5 tertahan oleh dimensi pelaporan (3,1) — near-miss dilaporkan 640 YTD masih di bawah target budaya pelaporan 700.",
    rekomendasi:
      "Terapkan skema pelaporan tanpa sanksi (just culture) dan insentif pelaporan near-miss di seluruh unit.",
  },
];

/* ── 1j. Cross-Link Antar-Dimensi ─────────────────────────────────── */

/** Pendalaman di dimensi lain — scope tidak diduplikasi di sini. */
export const hseCrossLinks: HseCrossLink[] = [
  {
    label: "Risk & Compliance SDM",
    href: "/risk-compliance",
    catatan:
      "Kepatuhan K3 dalam lingkup kewajiban hukum ketenagakerjaan (perizinan, sertifikasi operator, training compliance) dikelola di modul SDM.",
  },
  {
    label: "Air, Limbah & Biodiversitas",
    href: "/esg-sustainability/lingkungan-hayati",
    catatan:
      "Insiden lingkungan signifikan dan peringkat PROPER 76 unit (12 Hijau, 61 Biru, 3 Merah) dibahas pada dimensi ESG.",
  },
  {
    label: "Risk Register Korporat",
    href: "/risiko-kepatuhan/risk-register",
    catatan:
      "Kebakaran lahan dan keamanan aset terdaftar sebagai risiko enterprise dengan mitigasi & pemilik risiko di register korporat.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   2. KINERJA K3 (/k3-keamanan/kinerja-k3)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const kinerjaK3Kpi: HsePageKpi[] = [
  {
    label: "LTIFR",
    value: "1,42",
    sub: "Target ≤1,20 · benchmark industri 1,10",
    delta: "-0,14",
    trend: "down",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Severity Rate",
    value: "38", // = HSE.severityRate
    valueSuffix: " hari/jt jam",
    sub: "Hari kerja hilang per 1 juta jam kerja",
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Kecelakaan Kerja",
    value: "84",
    valueSuffix: " kasus",
    sub: "YTD · 8 berat & 2 fatal",
    delta: "-9",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Insiden Fatal",
    value: "2",
    valueSuffix: " kejadian",
    sub: "Investigasi tuntas · 7 rekomendasi terbuka",
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Near-Miss Dilaporkan",
    value: "640",
    valueSuffix: " laporan",
    sub: "YTD · target budaya pelaporan 700",
    delta: "+18,5%",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Hari Kerja Hilang",
    value: "3.180",
    valueSuffix: " hari",
    sub: "YTD · basis perhitungan severity rate",
    delta: "+6,2%",
    trend: "up",
    deltaTone: "bad",
    tone: "purple",
  },
];

/* ── 2b. Tren LTIFR 24 Bulan ──────────────────────────────────────── */

export interface LtifrTrendPoint {
  bulan: string;
  /** LTIFR rolling 12 bulan. */
  ltifr: number;
  /** Target internal grup. */
  target: number;
  /** Benchmark industri sawit nasional. */
  benchmark: number;
}

/** Jun 2024 – Mei 2026; target 1,20 (= HSE.ltifrTarget), benchmark 1,10. */
export const ltifrTrend: LtifrTrendPoint[] = [
  { bulan: "Jun 24", ltifr: 1.78, target: 1.2, benchmark: 1.1 },
  { bulan: "Jul 24", ltifr: 1.76, target: 1.2, benchmark: 1.1 },
  { bulan: "Agu 24", ltifr: 1.74, target: 1.2, benchmark: 1.1 },
  { bulan: "Sep 24", ltifr: 1.71, target: 1.2, benchmark: 1.1 },
  { bulan: "Okt 24", ltifr: 1.69, target: 1.2, benchmark: 1.1 },
  { bulan: "Nov 24", ltifr: 1.68, target: 1.2, benchmark: 1.1 },
  { bulan: "Des 24", ltifr: 1.66, target: 1.2, benchmark: 1.1 },
  { bulan: "Jan 25", ltifr: 1.64, target: 1.2, benchmark: 1.1 },
  { bulan: "Feb 25", ltifr: 1.62, target: 1.2, benchmark: 1.1 },
  { bulan: "Mar 25", ltifr: 1.6, target: 1.2, benchmark: 1.1 },
  { bulan: "Apr 25", ltifr: 1.58, target: 1.2, benchmark: 1.1 },
  { bulan: "Mei 25", ltifr: 1.57, target: 1.2, benchmark: 1.1 },
  { bulan: "Jun 25", ltifr: 1.56, target: 1.2, benchmark: 1.1 },
  { bulan: "Jul 25", ltifr: 1.58, target: 1.2, benchmark: 1.1 },
  { bulan: "Agu 25", ltifr: 1.61, target: 1.2, benchmark: 1.1 },
  { bulan: "Sep 25", ltifr: 1.57, target: 1.2, benchmark: 1.1 },
  { bulan: "Okt 25", ltifr: 1.54, target: 1.2, benchmark: 1.1 },
  { bulan: "Nov 25", ltifr: 1.5, target: 1.2, benchmark: 1.1 },
  { bulan: "Des 25", ltifr: 1.56, target: 1.2, benchmark: 1.1 },
  { bulan: "Jan 26", ltifr: 1.52, target: 1.2, benchmark: 1.1 },
  { bulan: "Feb 26", ltifr: 1.49, target: 1.2, benchmark: 1.1 },
  { bulan: "Mar 26", ltifr: 1.47, target: 1.2, benchmark: 1.1 },
  { bulan: "Apr 26", ltifr: 1.44, target: 1.2, benchmark: 1.1 },
  { bulan: "Mei 26", ltifr: 1.42, target: 1.2, benchmark: 1.1 },
];

/* ── 2c. Insiden per Tingkat Keparahan ────────────────────────────── */

export interface IncidentSeverityRow {
  kategori: "Ringan" | "Sedang" | "Berat" | "Fatal";
  jumlah: number;
  pct: number;
  /** Rata-rata hari kerja hilang per kasus (fatal tidak dihitung hari). */
  hariHilangRata: number | null;
  color: string;
  keterangan: string;
}

/** Total 84 kasus YTD (= HSE.kecelakaanYtd), termasuk 2 insiden fatal. */
export const incidentBySeverity: IncidentSeverityRow[] = [
  {
    kategori: "Ringan",
    jumlah: 52,
    pct: 61.9,
    hariHilangRata: 3,
    color: PALETTE.greenSoft,
    keterangan: "Perawatan P3K/klinik · kembali bekerja ≤3 hari",
  },
  {
    kategori: "Sedang",
    jumlah: 22,
    pct: 26.2,
    hariHilangRata: 24,
    color: PALETTE.amber,
    keterangan: "Perawatan medis lanjutan · tanpa cacat menetap",
  },
  {
    kategori: "Berat",
    jumlah: 8,
    pct: 9.5,
    hariHilangRata: 312,
    color: "#f97316",
    keterangan: "Cacat menetap sebagian atau rawat inap panjang",
  },
  {
    kategori: "Fatal",
    jumlah: 2,
    pct: 2.4,
    hariHilangRata: null,
    color: PALETTE.red,
    keterangan: "Insiden dengan korban jiwa · investigasi tuntas",
  },
];

/* ── 2d. Insiden per Aktivitas ────────────────────────────────────── */

export interface IncidentActivityRow {
  aktivitas: string;
  jumlah: number;
  pct: number;
  /** Kasus berat + fatal pada aktivitas tersebut. */
  beratFatal: number;
  color: string;
}

/** Total 84 kasus; kolom beratFatal berjumlah 10 (8 berat + 2 fatal). */
export const incidentByActivity: IncidentActivityRow[] = [
  { aktivitas: "Panen & Angkut TBS", jumlah: 31, pct: 36.9, beratFatal: 5, color: PALETTE.red },
  { aktivitas: "Pengolahan Pabrik", jumlah: 18, pct: 21.4, beratFatal: 2, color: PALETTE.amber },
  { aktivitas: "Pemeliharaan Tanaman", jumlah: 13, pct: 15.5, beratFatal: 1, color: PALETTE.blue },
  { aktivitas: "Bengkel & Workshop", jumlah: 9, pct: 10.7, beratFatal: 1, color: PALETTE.teal },
  { aktivitas: "Transportasi", jumlah: 8, pct: 9.5, beratFatal: 1, color: PALETTE.purple },
  { aktivitas: "Lain-lain", jumlah: 5, pct: 6.0, beratFatal: 0, color: PALETTE.slate },
];

/* ── 2e. Insiden per Penyebab Akar ────────────────────────────────── */

export interface IncidentCauseRow {
  penyebab: string;
  jumlah: number;
  pct: number;
  color: string;
  contoh: string;
}

/** Total 84 kasus — klasifikasi penyebab dominan hasil investigasi. */
export const incidentByCause: IncidentCauseRow[] = [
  {
    penyebab: "Tindakan Tidak Aman",
    jumlah: 34,
    pct: 40.5,
    color: PALETTE.red,
    contoh: "Posisi kerja di bawah beban, memotong jalur, mengabaikan aba-aba",
  },
  {
    penyebab: "Kondisi Tidak Aman",
    jumlah: 21,
    pct: 25.0,
    color: PALETTE.amber,
    contoh: "Jalan kebun licin, pelindung mesin lepas, penerangan kurang",
  },
  {
    penyebab: "Alat Pelindung Diri",
    jumlah: 13,
    pct: 15.5,
    color: PALETTE.blue,
    contoh: "APD tidak dipakai, tidak sesuai risiko, atau sudah aus",
  },
  {
    penyebab: "Prosedur",
    jumlah: 11,
    pct: 13.1,
    color: PALETTE.teal,
    contoh: "SOP belum ada, tidak diperbarui, atau tidak disosialisasikan",
  },
  {
    penyebab: "Faktor Eksternal",
    jumlah: 5,
    pct: 5.9,
    color: PALETTE.slate,
    contoh: "Cuaca ekstrem, pihak ketiga di jalan umum, satwa liar",
  },
];

/* ── 2f. Insiden Fatal: Pembelajaran & Tindakan Korektif ──────────── */

/**
 * Disajikan secara faktual untuk keperluan pembelajaran organisasi dan
 * pemantauan tindakan korektif. Tanpa identitas individu dan tanpa detail
 * yang tidak diperlukan untuk pengambilan keputusan.
 */
export interface FatalityCase {
  kode: string;
  periode: string;
  aktivitas: string;
  regional: string;
  /** Kronologi ringkas & faktual, tanpa identitas. */
  kronologi: string;
  akarMasalah: string[];
  rekomendasi: number;
  rekomendasiDitutup: number;
  statusInvestigasi: "Tuntas";
  statusRekomendasi: "Berjalan" | "Tuntas";
  tone: "red" | "amber";
}

/** Dua insiden fatal YTD (= HSE.fatalityYtd); total 14 rekomendasi, 7 ditutup. */
export const fatalityCases: FatalityCase[] = [
  {
    kode: "FAT-2026-01",
    periode: "Februari 2026",
    aktivitas: "Panen TBS",
    regional: "Regional 3 (Riau)",
    kronologi:
      "Insiden terjadi saat pemanenan pada pokok tinggi; korban berada di zona jatuh material panen yang seharusnya steril. Kejadian dilaporkan dan diinvestigasi sesuai prosedur, penanganan medis darurat dijalankan namun korban tidak tertolong.",
    akarMasalah: [
      "Zona aman jatuh material tidak dibatasi secara fisik",
      "Pengawasan rotasi panen pada blok pokok tinggi belum memadai",
      "Sosialisasi SOP panen pokok tinggi belum menjangkau seluruh pemanen borongan",
    ],
    rekomendasi: 8,
    rekomendasiDitutup: 4,
    statusInvestigasi: "Tuntas",
    statusRekomendasi: "Berjalan",
    tone: "red",
  },
  {
    kode: "FAT-2026-02",
    periode: "April 2026",
    aktivitas: "Transportasi TBS",
    regional: "Regional 6 (Kalimantan)",
    kronologi:
      "Insiden terjadi pada kegiatan pengangkutan TBS di jalan kebun; kendaraan angkut kehilangan kendali pada tikungan berkontur saat kondisi jalan basah. Korban merupakan personel yang berada di area manuver kendaraan.",
    akarMasalah: [
      "Pengendalian lalu lintas kebun dan pemisahan jalur pejalan belum diterapkan",
      "Perawatan jalan kebun pada titik rawan tertunda dari jadwal",
      "Pemeriksaan kelaikan kendaraan angkut tidak terdokumentasi lengkap",
    ],
    rekomendasi: 6,
    rekomendasiDitutup: 3,
    statusInvestigasi: "Tuntas",
    statusRekomendasi: "Berjalan",
    tone: "red",
  },
];

export const fatalityFootnote =
  "Data insiden fatal disajikan untuk pembelajaran organisasi dan pemantauan tindakan korektif. Identitas korban tidak ditampilkan; santunan dan pendampingan keluarga ditangani melalui mekanisme jaminan sosial ketenagakerjaan di modul SDM.";

/* ── 2g. Pelaporan Near-Miss ──────────────────────────────────────── */

export interface NearMissPoint {
  bulan: string;
  /** Laporan near-miss diterima. */
  laporan: number;
  /** Target bulanan budaya pelaporan (700 setahun-berjalan/5 bulan = 140). */
  target: number;
  /** % laporan yang ditindaklanjuti dalam 30 hari. */
  tindakLanjutPct: number;
}

/** Jan–Mei 2026; total 640 laporan vs target kumulatif 700. */
export const nearMissReporting: NearMissPoint[] = [
  { bulan: "Jan 26", laporan: 108, target: 140, tindakLanjutPct: 72 },
  { bulan: "Feb 26", laporan: 118, target: 140, tindakLanjutPct: 76 },
  { bulan: "Mar 26", laporan: 128, target: 140, tindakLanjutPct: 79 },
  { bulan: "Apr 26", laporan: 136, target: 140, tindakLanjutPct: 82 },
  { bulan: "Mei 26", laporan: 150, target: 140, tindakLanjutPct: 84 },
];

/** Rasio near-miss terhadap kecelakaan tercatat (640 : 84 ≈ 7,6 : 1). */
export const nearMissRatio = {
  laporanYtd: 640,
  kecelakaanYtd: 84,
  rasio: "7,6 : 1",
  rasioTarget: "10 : 1",
  catatan:
    "Rasio pelaporan near-miss terhadap kecelakaan tercatat masih 7,6:1, di bawah praktik terbaik 10:1 — indikasi under-reporting pada unit dengan indeks pelaporan rendah.",
} as const;

/* ── 2h. Hari Kerja Hilang per Regional ───────────────────────────── */

export interface LostTimeRow {
  regional: string;
  /** Hari kerja hilang YTD; total 7 regional = 3.180 hari. */
  hariHilang: number;
  /** Kecelakaan YTD (selaras hseByRegional). */
  kecelakaan: number;
  /** Severity rate regional (hari hilang per 1 juta jam kerja). */
  severityRate: number;
}

/** Total 3.180 hari kerja hilang · 84 kecelakaan (severity rate grup 38). */
export const lostTimeByRegional: LostTimeRow[] = [
  { regional: "Regional 1 (Sumut)", hariHilang: 520, kecelakaan: 14, severityRate: 35 },
  { regional: "Regional 2 (Sumut)", hariHilang: 610, kecelakaan: 16, severityRate: 36 },
  { regional: "Regional 3 (Riau)", hariHilang: 480, kecelakaan: 13, severityRate: 44 },
  { regional: "Regional 4 (Jambi–Sumbar)", hariHilang: 360, kecelakaan: 10, severityRate: 31 },
  { regional: "Regional 5 (Sumsel–Lampung)", hariHilang: 430, kecelakaan: 12, severityRate: 39 },
  { regional: "Regional 6 (Kalimantan)", hariHilang: 410, kecelakaan: 11, severityRate: 46 },
  { regional: "Regional 7 (Sulawesi–Papua)", hariHilang: 370, kecelakaan: 8, severityRate: 33 },
];

/* ── 2i. Insight & Rekomendasi ────────────────────────────────────── */

export const kinerjaInsights: HseInsight[] = [
  {
    insight:
      "Panen & angkut TBS menyumbang 31 dari 84 kecelakaan (36,9%) dan 5 dari 10 kasus berat/fatal — konsentrasi risiko tertinggi grup pada satu rantai aktivitas.",
    rekomendasi:
      "Jadikan rantai panen–angkut sebagai program prioritas K3 2026: batas fisik zona jatuh, pengendalian lalu lintas kebun, dan pemeriksaan kelaikan kendaraan angkut wajib terdokumentasi.",
  },
  {
    insight:
      "Tindakan tidak aman (40,5%) melampaui kondisi tidak aman (25,0%) sebagai penyebab dominan — masalah perilaku dan pengawasan, bukan semata infrastruktur.",
    rekomendasi:
      "Perkuat behaviour-based safety observation oleh mandor dengan kuota observasi mingguan dan umpan balik langsung di lapangan.",
  },
  {
    insight:
      "Severity rate naik ke 38 hari/juta jam meski jumlah kecelakaan turun — insiden yang tersisa makin berat, terlihat dari 312 hari hilang rata-rata per kasus berat.",
    rekomendasi:
      "Alihkan fokus pengukuran dari frekuensi ke keparahan; tetapkan target severity rate ≤32 pada RKAP 2027.",
  },
  {
    insight:
      "Rasio near-miss terhadap kecelakaan 7,6:1 masih di bawah praktik terbaik 10:1, dan tindak lanjut baru 84% dalam 30 hari.",
    rekomendasi:
      "Terapkan just culture dan SLA tindak lanjut near-miss 30 hari dengan dashboard terbuka per unit.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   3. BUDAYA & KEPATUHAN K3 (/k3-keamanan/budaya-kepatuhan)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const budayaKpi: HsePageKpi[] = [
  {
    label: "SMK3 Tersertifikasi",
    value: "68",
    valueSuffix: "/76 unit",
    sub: "89,5% unit · 8 unit dalam pipeline audit",
    delta: "+4 unit",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Peserta Pelatihan K3",
    value: "12.400", // = HSE.pesertaPelatihanK3Ytd
    valueSuffix: " peserta",
    sub: "YTD · 5 program pelatihan inti",
    delta: "+14,2%",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Inspeksi K3",
    value: "1.860", // = HSE.inspeksiK3Ytd
    valueSuffix: " inspeksi",
    sub: "YTD · 1.374 terjadwal · 486 mendadak",
    delta: "+8,4%",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Temuan Terbuka",
    value: "214", // = HSE.temuanK3Terbuka
    valueSuffix: " temuan",
    sub: "Dari 1.189 temuan · 52 kategori APD",
    delta: "-28",
    trend: "down",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Penutupan Temuan",
    value: "82,0%",
    sub: "975 dari 1.189 temuan ditutup · target 90%",
    delta: "+4,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Indeks Budaya Keselamatan",
    value: "3,4",
    valueSuffix: "/5",
    sub: "Survei 5 dimensi · target 4,0",
    delta: "+0,2",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
];

/* ── 3b. Sertifikasi SMK3 per Jenis Unit ──────────────────────────── */

export interface Smk3UnitRow {
  jenisUnit: string;
  /** Jumlah unit dalam basis sertifikasi. */
  total: number;
  tersertifikasi: number;
  belum: number;
  pct: number;
  status: HseRagStatus;
}

/**
 * Basis 76 unit (= HSE.unitTotal) mengikuti PRODUKSI: 36 PKS, 17 PG,
 * 9 pabrik karet, 5 pabrik teh, dan 9 kantor/unit pendukung.
 * Tersertifikasi berjumlah 68 (= HSE.smk3Tersertifikasi).
 */
export const smk3ByUnit: Smk3UnitRow[] = [
  { jenisUnit: "PKS (Pabrik Kelapa Sawit)", total: 36, tersertifikasi: 34, belum: 2, pct: 94.4, status: "Hijau" },
  { jenisUnit: "PG (Pabrik Gula)", total: 17, tersertifikasi: 15, belum: 2, pct: 88.2, status: "Hijau" },
  { jenisUnit: "Pabrik Karet", total: 9, tersertifikasi: 8, belum: 1, pct: 88.9, status: "Hijau" },
  { jenisUnit: "Pabrik Teh", total: 5, tersertifikasi: 5, belum: 0, pct: 100.0, status: "Hijau" },
  { jenisUnit: "Kantor & Unit Pendukung", total: 9, tersertifikasi: 6, belum: 3, pct: 66.7, status: "Amber" },
];

export const smk3Footnote =
  "Basis 76 unit sertifikasi identik dengan basis sertifikasi keberlanjutan di dimensi ESG (36 PKS + 17 PG + 9 pabrik karet + 5 pabrik teh + 9 kantor/unit pendukung), selaras PRODUKSI pada group-baseline.";

/* ── 3c. Temuan Audit K3 per Kategori ─────────────────────────────── */

export interface AuditFindingRow {
  kategori: string;
  /** Temuan yang masih terbuka; total 6 kategori = 214. */
  terbuka: number;
  /** Temuan yang sudah ditutup; total = 975. */
  tertutup: number;
  /** Temuan terbuka yang melewati SLA 60 hari. */
  overdue: number;
  color: string;
  status: HseRagStatus;
}

/**
 * Total temuan 12 bulan terakhir = 1.189 (975 tertutup + 214 terbuka);
 * tingkat penutupan 82,0%. Temuan terbuka = HSE.temuanK3Terbuka.
 */
export const auditFindings: AuditFindingRow[] = [
  { kategori: "Alat Pelindung Diri", terbuka: 52, tertutup: 238, overdue: 14, color: PALETTE.red, status: "Merah" },
  { kategori: "Housekeeping", terbuka: 41, tertutup: 186, overdue: 8, color: PALETTE.amber, status: "Amber" },
  { kategori: "Kelistrikan", terbuka: 38, tertutup: 172, overdue: 11, color: PALETTE.blue, status: "Amber" },
  { kategori: "Proteksi Kebakaran", terbuka: 34, tertutup: 156, overdue: 9, color: "#f97316", status: "Amber" },
  { kategori: "Bejana Tekan & Boiler", terbuka: 26, tertutup: 118, overdue: 6, color: PALETTE.teal, status: "Amber" },
  { kategori: "Prosedur & Dokumentasi", terbuka: 23, tertutup: 105, overdue: 4, color: PALETTE.purple, status: "Hijau" },
];

/* ── 3d. Program Pelatihan K3 ─────────────────────────────────────── */

export interface TrainingProgramRow {
  program: string;
  /** Peserta YTD; total 5 program = 12.400. */
  peserta: number;
  pct: number;
  /** Jumlah batch penyelenggaraan YTD. */
  batch: number;
  /** Kelulusan/sertifikasi peserta (%). */
  kelulusanPct: number;
  wajib: boolean;
  color: string;
}

/** Total 12.400 peserta YTD (= HSE.pesertaPelatihanK3Ytd). */
export const trainingProgram: TrainingProgramRow[] = [
  { program: "Induksi K3 (Karyawan & Kontraktor)", peserta: 6200, pct: 50.0, batch: 248, kelulusanPct: 98, wajib: true, color: PALETTE.green },
  { program: "P3K di Tempat Kerja", peserta: 2140, pct: 17.3, batch: 86, kelulusanPct: 94, wajib: true, color: PALETTE.blue },
  { program: "Petugas Pemadam Kebakaran", peserta: 1850, pct: 14.9, batch: 74, kelulusanPct: 92, wajib: true, color: "#f97316" },
  { program: "Operator Alat Berat & Angkut", peserta: 1790, pct: 14.4, batch: 62, kelulusanPct: 89, wajib: true, color: PALETTE.teal },
  { program: "Ahli K3 Umum (Sertifikasi Kemnaker)", peserta: 420, pct: 3.4, batch: 14, kelulusanPct: 86, wajib: false, color: PALETTE.purple },
];

export const trainingFootnote =
  "Sertifikasi operator dan kelengkapan APD juga menjadi temuan berulang audit ISPO (prinsip SDM & K3) — pemenuhan kewajiban pelatihan menurut peraturan ketenagakerjaan dipantau di /risk-compliance.";

/* ── 3e. Cakupan Inspeksi K3 per Regional ─────────────────────────── */

export interface InspectionCoverageRow {
  regional: string;
  /** Inspeksi terjadwal; total = 1.374. */
  terjadwal: number;
  /** Inspeksi mendadak (sidak); total = 486. */
  mendadak: number;
  /** Total inspeksi regional; total 7 regional = 1.860. */
  total: number;
  /** Temuan per 100 inspeksi. */
  temuanPer100: number;
}

/** Total 1.860 inspeksi YTD (= HSE.inspeksiK3Ytd). */
export const inspectionCoverage: InspectionCoverageRow[] = [
  { regional: "Regional 1 (Sumut)", terjadwal: 218, mendadak: 78, total: 296, temuanPer100: 58 },
  { regional: "Regional 2 (Sumut)", terjadwal: 238, mendadak: 82, total: 320, temuanPer100: 61 },
  { regional: "Regional 3 (Riau)", terjadwal: 222, mendadak: 80, total: 302, temuanPer100: 74 },
  { regional: "Regional 4 (Jambi–Sumbar)", terjadwal: 176, mendadak: 62, total: 238, temuanPer100: 56 },
  { regional: "Regional 5 (Sumsel–Lampung)", terjadwal: 198, mendadak: 70, total: 268, temuanPer100: 68 },
  { regional: "Regional 6 (Kalimantan)", terjadwal: 188, mendadak: 66, total: 254, temuanPer100: 71 },
  { regional: "Regional 7 (Sulawesi–Papua)", terjadwal: 134, mendadak: 48, total: 182, temuanPer100: 52 },
];

/* ── 3f. Indeks Budaya Keselamatan ────────────────────────────────── */

export interface SafetyCultureRow {
  dimensi: string;
  /** Skor 1-5 hasil survei budaya keselamatan. */
  skor: number;
  /** Target internal 2027. */
  target: number;
  deskripsi: string;
}

/**
 * Rata-rata 5 dimensi = 3,4/5 (17,0 / 5), target 4,0.
 * Survei 2026 · 8.640 responden di 76 unit.
 */
export const safetyCultureIndex: SafetyCultureRow[] = [
  { dimensi: "Kepemimpinan", skor: 3.8, target: 4.0, deskripsi: "Keteladanan & komitmen pimpinan unit terhadap keselamatan" },
  { dimensi: "Pelaporan", skor: 3.1, target: 4.0, deskripsi: "Keterbukaan melaporkan near-miss & kondisi tidak aman" },
  { dimensi: "Pembelajaran", skor: 3.3, target: 4.0, deskripsi: "Investigasi diikuti perbaikan sistem, bukan sekadar sanksi" },
  { dimensi: "Keadilan", skor: 3.5, target: 4.0, deskripsi: "Penanganan pelanggaran konsisten & proporsional (just culture)" },
  { dimensi: "Kesiapan", skor: 3.3, target: 4.0, deskripsi: "Kesiapsiagaan personel menghadapi situasi darurat" },
];

export const safetyCultureMeta = {
  skorKomposit: 3.4,
  target: 4.0,
  responden: 8640,
  unitDisurvei: 76,
  periode: "Survei Maret 2026",
} as const;

/* ── 3g. Surveilans Kesehatan Kerja ───────────────────────────────── */

export interface HealthSurveillanceRow {
  indikator: string;
  nilai: string;
  sub: string;
  status: HseRagStatus;
}

export const healthSurveillance: HealthSurveillanceRow[] = [
  {
    indikator: "Pemeriksaan Kesehatan Berkala",
    nilai: "78,4%",
    sub: "Karyawan terperiksa YTD · target 90% s.d. Des 2026",
    status: "Amber",
  },
  {
    indikator: "Pemeriksaan Khusus Risiko Tinggi",
    nilai: "92,1%",
    sub: "Operator pestisida, boiler, dan laboratorium",
    status: "Hijau",
  },
  {
    indikator: "Penyakit Akibat Kerja (PAK)",
    nilai: "34 kasus",
    sub: "YTD · dominan gangguan pendengaran & dermatitis kontak",
    status: "Amber",
  },
  {
    indikator: "Klinik & Poliklinik Kebun",
    nilai: "112 unit",
    sub: "Melayani 528 kebun · 42 dokter & 268 paramedis",
    status: "Hijau",
  },
  {
    indikator: "Ambulans Siaga",
    nilai: "96 unit",
    sub: "Waktu evakuasi rata-rata 38 menit ke rujukan terdekat",
    status: "Amber",
  },
  {
    indikator: "Pemantauan Lingkungan Kerja",
    nilai: "64 unit",
    sub: "Pengukuran kebisingan, debu, & paparan kimia · dari 76 unit",
    status: "Amber",
  },
];

/* ── 3h. Insight & Rekomendasi ────────────────────────────────────── */

export const budayaInsights: HseInsight[] = [
  {
    insight:
      "Cakupan SMK3 89,5% (68/76) tertahan oleh kantor & unit pendukung (66,7%); seluruh unit produksi utama sudah ≥88%.",
    rekomendasi:
      "Jadwalkan audit SMK3 untuk 3 kantor/unit pendukung tersisa pada Q4 2026 agar cakupan grup mencapai 100% sebelum resertifikasi ISPO 2027.",
  },
  {
    insight:
      "APD adalah kategori temuan terbesar (52 terbuka, 14 overdue) sekaligus penyebab 13 kecelakaan — sinyal konsisten bahwa anggaran dan pengawasan APD belum memadai.",
    rekomendasi:
      "Kaitkan uplift anggaran APD Rp 34 M dengan target penutupan seluruh temuan APD overdue dalam 90 hari.",
  },
  {
    insight:
      "Dimensi pelaporan (3,1) adalah skor terendah budaya keselamatan dan sejalan dengan rasio near-miss 7,6:1 — akar masalah budaya, bukan sistem pelaporan.",
    rekomendasi:
      "Luncurkan kebijakan just culture tertulis, kanal pelaporan anonim, dan pengakuan publik atas pelapor near-miss berkualitas.",
  },
  {
    insight:
      "Pemeriksaan kesehatan berkala baru 78,4% dan pemantauan lingkungan kerja baru di 64 dari 76 unit — deteksi dini PAK belum menyeluruh.",
    rekomendasi:
      "Tuntaskan MCU berkala ke 90% dan perluas pengukuran lingkungan kerja ke 76 unit sebelum akhir 2026.",
  },
];

/* ── Referensi konstanta baseline (mencegah drift angka) ──────────── */

/** Ringkasan angka kanonik yang dipakai halaman 1–3. */
export const hseBaselineRef = {
  ltifr: HSE.ltifr,
  ltifrTarget: HSE.ltifrTarget,
  kecelakaanYtd: HSE.kecelakaanYtd,
  fatalityYtd: HSE.fatalityYtd,
  jamKerjaAmanJt: HSE.jamKerjaAmanJt,
  severityRate: HSE.severityRate,
  smk3Tersertifikasi: HSE.smk3Tersertifikasi,
  unitTotal: HSE.unitTotal,
  pesertaPelatihanK3Ytd: HSE.pesertaPelatihanK3Ytd,
  inspeksiK3Ytd: HSE.inspeksiK3Ytd,
  temuanK3Terbuka: HSE.temuanK3Terbuka,
  kebun: PRODUKSI.kebun,
  pks: PRODUKSI.pks,
  pg: PRODUKSI.pg,
  elNinoProbabilitasPct: RISIKO.elNinoProbabilitasPct,
} as const;
