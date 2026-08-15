/**
 * Data statis dimensi Teknologi Informasi (/teknologi-informasi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka kanonik dari src/lib/group-baseline.ts
 * (konstanta TIK, plus KEUANGAN/STRATEGI/RISIKO bila relevan).
 *
 * File ini memuat halaman Executive Overview, Keamanan Siber & PDP, dan
 * Program & Delivery Digital; tiga halaman lain (Portofolio Aplikasi &
 * Infrastruktur, Belanja & Nilai TI, Data & AI Governance) ada di
 * tik-data-detail.ts.
 *
 * Prefix "tik" (bukan "ti") karena src/components/ti/ sudah dipakai modul
 * Talent Intelligence pada dimensi SDM.
 *
 * Guard konsistensi lintas dimensi:
 * - Belanja TI FY Rp 0,92 T = capex 0,5 + opex 0,42 (TIK); capex realisasi
 *   0,16 T (32%) identik kategori "Digital & IT" di kcx-data.ts.
 * - Health program "Digitalisasi & ERP Terpadu Grup" 71/100 dan adopsi digital
 *   68% identik stf-data.ts; adopsi per subholding = digitalMaturity stf-data.
 * - Benefit ERP YTD Rp 0,13 T identik benefitsWaterfall stf-data.ts.
 * - Patch SLA 78% vs limit ≥95% adalah limit breach di risk-data.ts
 *   (/risiko-kepatuhan/risk-appetite); owner risiko "Direktorat Digital & TI".
 * - Cyber Insurance TSI Rp 2,6 T = lini baru 2026 di risk-data-detail.ts.
 * - Temuan audit berulang "Akses user ERP tidak di-review berkala" (Holding TI)
 *   berasal dari risk-data-detail.ts.
 * - Rollout modul kebun mundur ke Q3 2026 = topVariance kcx-data.ts.
 */

import { PALETTE } from "./chart-palette";
import { BASELINE_TRUST, KEUANGAN, TIK } from "./group-baseline";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   TIPE BERSAMA ANTAR-HALAMAN TIK (dipakai juga tik-data-detail.ts)
   ══════════════════════════════════════════════════════════════════════ */

/** KPI mini untuk strip halaman detail (bukan overview). */
export interface TikPageKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100" atau " jam". */
  valueSuffix?: string;
  sub: string;
  /** Tandai sub sebagai peringatan (di bawah target). */
  subDanger?: boolean;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "purple";
}

/** Pasangan insight → rekomendasi di kartu bawah tiap halaman. */
export interface TikInsight {
  insight: string;
  rekomendasi: string;
}

/** Item keputusan BOD (dipakai overview, keamanan siber, program digital). */
export interface TikDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

/** Status RAG program/proyek digital. */
export type TikRagStatus = "Hijau" | "Amber" | "Merah";

export const TIK_RAG_COLOR: Record<TikRagStatus, string> = {
  Hijau: PALETTE.green,
  Amber: PALETTE.amber,
  Merah: PALETTE.red,
};

/** Tautan pendalaman ke dimensi/modul lain. */
export interface TikCrossLink {
  label: string;
  href: string;
  catatan: string;
}

/* ══════════════════════════════════════════════════════════════════════
   #region 1. EXECUTIVE OVERVIEW — /teknologi-informasi
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const tikDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "93,8%",
  quality: "92,4%",
  sources: ["ServiceNow", "SAP S/4HANA", "SOC/SIEM", "e-Proc TI"],
};

/* ── 1b. KPI Strip ────────────────────────────────────────────────── */

export interface TikKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "spend" | "adoption" | "erp" | "uptime" | "incident" | "patch" | "maturity";
  tone: "green" | "blue" | "teal" | "amber" | "red" | "purple";
}

export const tikKpi: TikKpi[] = [
  {
    label: "Belanja TI FY",
    value: "Rp 0,92 T", // = TIK.belanjaTotalFyRpT
    sub: "Capex 0,50 + opex 0,42 · 1,6% pendapatan",
    delta: "+8,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs FY 2025",
    icon: "spend",
    tone: "blue",
  },
  {
    label: "Adopsi Digital",
    value: "68%", // = TIK.adopsiDigitalPct
    sub: "Target 2026: 80% · gap 12 pts",
    delta: "+4 pts",
    trend: "up",
    deltaTone: "good",
    compare: "vs Q1 2026",
    icon: "adoption",
    tone: "amber",
  },
  {
    label: "Health Program ERP",
    value: "71", // = TIK.erpHealth
    valueSuffix: "/100",
    sub: "Digitalisasi & ERP Terpadu Grup · progres 57%",
    delta: "-2 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Q1 2026",
    icon: "erp",
    tone: "teal",
  },
  {
    label: "Ketersediaan Sistem",
    value: "99,2%", // = TIK.ketersediaanSistemPct
    sub: "Layanan kritikal · target 99,5%",
    delta: "-0,1 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs FY 2025",
    icon: "uptime",
    tone: "green",
  },
  {
    label: "Insiden Siber",
    value: "34", // = TIK.insidenSiberYtd
    sub: "YTD · 2 insiden kritis (P1)",
    delta: "+9",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025",
    icon: "incident",
    tone: "red",
  },
  {
    label: "Kepatuhan Patch SLA",
    value: "78%", // = TIK.patchSlaPct
    sub: "Limit enterprise ≥95% · breach aktif",
    delta: "-6 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "patch",
    tone: "red",
  },
  {
    label: "Maturitas Siber",
    value: "3,1", // = TIK.maturitasSiber
    valueSuffix: "/5",
    sub: "NIST CSF · target 4,0 (2027)",
    delta: "+0,2",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2025",
    icon: "maturity",
    tone: "purple",
  },
];

/* ── 1c. TIK Intelligence ─────────────────────────────────────────── */

export interface TikSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
}

export const tikIntelligence: TikSignal[] = [
  {
    no: "01",
    title: "Rollout Modul Kebun Mundur ke Q3 Menahan Benefit ERP",
    text: "Modul Plantation/Kebun (3 sub-modul) belum go-live dan bergeser dari Q1 ke Q3 2026 — sejalan varians capex 'ERP & digital kebun' (realisasi Rp 0,16 T dari Rp 0,50 T). Benefit terealisasi baru Rp 0,13 T dari potensi Rp 1,3 T karena rantai data kebun→pabrik belum tersambung.",
    impactLabel: "Benefit Tertahan",
    impactValue: "Rp 1,17 T",
    tone: "amber",
  },
  {
    no: "02",
    title: "Patch SLA 78% Memicu Limit Breach Enterprise",
    text: "Kepatuhan patch 78% berada di bawah limit risk appetite ≥95% — satu-satunya breach berkategori teknologi di register enterprise. Risiko 'Serangan siber pada ERP & sistem operasional' (Direktorat Digital & TI) bergerak naik ke Ekstrem, sementara Cyber Insurance TSI Rp 2,6 T baru lini baru 2026.",
    impactLabel: "Deviasi ke Limit",
    impactValue: "-17 pts",
    tone: "red",
  },
  {
    no: "03",
    title: "Konektivitas Kebun Terpencil Jadi Penghambat Adopsi",
    text: "Hanya 82% lokasi berkonektivitas memadai; gap terkonsentrasi di Kalimantan (72%) dan Sulawesi/Indonesia Timur (62%). Selama backbone belum tuntas, adopsi digital sulit menembus 80% dan input data kebun tetap manual.",
    impactLabel: "Lokasi Belum Memadai",
    impactValue: "18% jaringan",
    tone: "amber",
  },
];

/* ── 1d. Risk Radar TI (6 sumbu) ──────────────────────────────────── */

export interface TikRiskAxis {
  axis: string;
  /** Skor risiko residual 0-100 (makin tinggi makin berisiko). */
  skor: number;
  /** Ambang toleransi internal 2026. */
  toleransi: number;
}

export const tikRiskRadar: TikRiskAxis[] = [
  { axis: "Keamanan Siber", skor: 78, toleransi: 45 },
  { axis: "Ketersediaan Layanan", skor: 52, toleransi: 40 },
  { axis: "Delivery Program", skor: 66, toleransi: 45 },
  { axis: "Utang Teknis", skor: 68, toleransi: 50 },
  { axis: "Talenta TI", skor: 61, toleransi: 45 },
  { axis: "Kepatuhan Data & PDP", skor: 58, toleransi: 40 },
];

/* ── 1e. Tren Ketersediaan Sistem Kritikal (12 bulan) ─────────────── */

export interface AvailabilityPoint {
  bulan: string;
  /** Uptime blended layanan kritikal (%). */
  uptimePct: number;
  /** Target SLA enterprise (%). */
  targetPct: number;
}

/** Rata-rata 12 bulan = 99,2% (TIK.ketersediaanSistemPct); target 99,5%. */
export const availabilityTrend: AvailabilityPoint[] = [
  { bulan: "Jun 25", uptimePct: 99.4, targetPct: 99.5 },
  { bulan: "Jul 25", uptimePct: 99.5, targetPct: 99.5 },
  { bulan: "Agu 25", uptimePct: 99.3, targetPct: 99.5 },
  { bulan: "Sep 25", uptimePct: 99.1, targetPct: 99.5 },
  { bulan: "Okt 25", uptimePct: 99.4, targetPct: 99.5 },
  { bulan: "Nov 25", uptimePct: 99.2, targetPct: 99.5 },
  { bulan: "Des 25", uptimePct: 98.9, targetPct: 99.5 },
  { bulan: "Jan 26", uptimePct: 99.3, targetPct: 99.5 },
  { bulan: "Feb 26", uptimePct: 99.2, targetPct: 99.5 },
  { bulan: "Mar 26", uptimePct: 98.8, targetPct: 99.5 },
  { bulan: "Apr 26", uptimePct: 99.1, targetPct: 99.5 },
  { bulan: "Mei 26", uptimePct: 99.2, targetPct: 99.5 },
];

/* ── 1f. Snapshot Belanja TI ──────────────────────────────────────── */

export interface TikSpendSnapshot {
  /** Belanja TI FY (Rp T). */
  totalFyRpT: number;
  capexFyRpT: number;
  capexRealisasiYtdRpT: number;
  capexRealisasiPct: number;
  opexFyRpT: number;
  /** Belanja TI terhadap pendapatan RKAP FY (%). */
  pctPendapatan: number;
  benchmarkBawahPct: number;
  benchmarkAtasPct: number;
  /** Pendapatan RKAP FY sebagai penyebut (Rp T). */
  basisPendapatanFyRpT: number;
  catatan: string;
}

export const spendSnapshot: TikSpendSnapshot = {
  totalFyRpT: TIK.belanjaTotalFyRpT,
  capexFyRpT: TIK.capexFyRpT,
  capexRealisasiYtdRpT: TIK.capexRealisasiYtdRpT,
  capexRealisasiPct: 32.0,
  opexFyRpT: TIK.opexFyRpT,
  pctPendapatan: TIK.belanjaPctPendapatan,
  benchmarkBawahPct: 1.2,
  benchmarkAtasPct: 2.0,
  basisPendapatanFyRpT: KEUANGAN.rkapPendapatanFy,
  catatan:
    "Belanja TI Rp 0,92 T (1,6% pendapatan RKAP FY Rp 58,4 T) berada di dalam rentang benchmark agribisnis 1,2–2,0%. Masalahnya bukan besaran, melainkan serapan capex yang baru 32% (Rp 0,16 T dari Rp 0,50 T) akibat rollout modul kebun mundur ke Q3.",
};

/* ── 1g. Alerts & Notifications ───────────────────────────────────── */

export interface TikAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const tikAlerts: TikAlert[] = [
  {
    title: "Limit Breach: Patch Compliance 78% vs ≥95%",
    text: "Breach appetite teknologi masih terbuka; sprint patching 90 hari dan segmentasi jaringan OT berjalan namun belum menutup 412 kerentanan kritis/tinggi berumur >90 hari.",
    time: "Today",
    tone: "red",
  },
  {
    title: "2 Insiden Siber Kritis (P1) YTD",
    text: "Phishing bertarget ke akun keuangan (Feb) dan upaya akses tidak sah ke server ERP non-produksi (Mei); keduanya tertangani, MTTR rata-rata 8,4 jam.",
    time: "1 hari yang lalu",
    tone: "red",
  },
  {
    title: "Go-Live Modul Kebun Bergeser ke Q3 2026",
    text: "Tiga sub-modul Plantation belum go-live; keputusan go/no-go gelombang kebun dijadwalkan pada Radirsus Q3 2026.",
    time: "3 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Cyber Insurance Lini Baru 2026 Aktif",
    text: "Polis cyber TSI Rp 2,6 T (premi Rp 18 M) efektif 2026, belum ada klaim — coverage masih kecil dibanding profil risiko siber Ekstrem.",
    time: "1 minggu yang lalu",
    tone: "blue",
  },
];

/* ── 1h. BOD Decision Center ──────────────────────────────────────── */

export const tikDecisions: TikDecision[] = [
  {
    title: "Uplift Anggaran Keamanan Siber Rp 65 M",
    impact: "High Impact",
    tone: "red",
    context:
      "Patch SLA 78% vs limit ≥95% adalah breach appetite aktif; maturitas siber 3,1/5 dari target 4,0. Anggaran keamanan saat ini Rp 0,11 T (12% belanja TI), di bawah praktik BUMN sejenis (15–18%).",
    rekomendasi:
      "Setujui tambahan Rp 65 M untuk patch automation, EDR seluruh endpoint, dan SOC 24/7 — mendorong porsi keamanan ke 19% belanja TI.",
    due: "Q3 2026",
  },
  {
    title: "Go/No-Go Rollout Modul Kebun Gelombang Q3",
    impact: "High Impact",
    tone: "amber",
    context:
      "Modul Plantation (3 sub-modul) mundur dari Q1 ke Q3 2026; konektivitas memadai baru 82% dan adopsi SGN 58% / PTPN I 61%. Benefit tertahan Rp 1,17 T dari potensi Rp 1,3 T.",
    rekomendasi:
      "Setujui go-live bertahap: 4 regional berkonektivitas ≥84% pada Q3, sisanya Q1 2027 setelah backbone VSAT/fiber tuntas.",
    due: "Q3 2026",
  },
  {
    title: "Konsolidasi 12 Aplikasi Legacy",
    impact: "Medium Impact",
    tone: "green",
    context:
      "12 dari 68 aplikasi inti berstatus Eliminate (umur >8 tahun, vendor support berakhir) dan menyumbang 34% tiket insiden aplikasi serta Rp 38 M lisensi tidak optimal.",
    rekomendasi:
      "Setujui roadmap dekomisioning 12 aplikasi legacy dalam 18 bulan; hemat opex Rp 38 M/tahun untuk mendanai sebagian uplift keamanan.",
    due: "Q4 2026",
  },
];

/* ── 1i. Insight & Rekomendasi ────────────────────────────────────── */

export const tikInsights: TikInsight[] = [
  {
    insight:
      "Belanja TI 1,6% pendapatan sudah setara benchmark, tetapi komposisinya run-heavy (62% run / 38% grow) sehingga kapasitas perubahan terbatas.",
    rekomendasi:
      "Geser bauran ke 55/45 dalam RKAP 2027 dengan mendanai grow dari penghematan lisensi dan dekomisioning legacy.",
  },
  {
    insight:
      "Gap adopsi digital terbesar ada di SGN (58%) dan PTPN I (61%) — pola identik temuan Program Transformasi, jadi ini masalah change management, bukan semata teknologi.",
    rekomendasi:
      "Jadikan adopsi digital KPI Direktur Operasi subholding dengan target minimum 75% pada akhir 2026.",
  },
  {
    insight:
      "Satu-satunya limit breach berkategori teknologi (patch SLA) berumur lebih dari dua kuartal — indikasi kapasitas eksekusi keamanan, bukan kebijakan.",
    rekomendasi:
      "Tautkan ke /risiko-kepatuhan/risk-appetite dan laporkan progres patching bulanan ke Komite Risiko sampai breach tertutup.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 2. KEAMANAN SIBER & PDP — /teknologi-informasi/keamanan-siber
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const siberKpi: TikPageKpi[] = [
  {
    label: "Insiden Siber YTD",
    value: "34",
    sub: "2 kritis (P1) · 11 tinggi · 21 sedang",
    subDanger: true,
    delta: "+9",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Kepatuhan Patch SLA",
    value: "78%",
    sub: "Limit enterprise ≥95% · breach aktif",
    subDanger: true,
    delta: "-6 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Maturitas Siber",
    value: "3,1",
    valueSuffix: "/5",
    sub: "NIST CSF 6 domain · target 4,0",
    delta: "+0,2",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Kesiapan PDP",
    value: "76%",
    sub: "5 pilar UU PDP · terlemah hak subjek data",
    delta: "+8 pts",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Phishing Click Rate",
    value: "6,2%",
    sub: "Simulasi Mei 2026 · ambang internal ≤3%",
    subDanger: true,
    delta: "-1,4 pts",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "MTTR Insiden",
    value: "8,4",
    valueSuffix: " jam",
    sub: "Rata-rata seluruh severity · target ≤6 jam",
    delta: "-1,2 jam",
    trend: "down",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 2b. Tren Insiden per Severity (12 bulan) ─────────────────────── */

export interface IncidentTrendPoint {
  bulan: string;
  kritis: number;
  tinggi: number;
  sedang: number;
}

/**
 * Jan–Mei 2026 berjumlah 34 insiden (TIK.insidenSiberYtd) dengan 2 kritis
 * (TIK.insidenSiberKritis); Jun–Des 2025 adalah pembanding periode berjalan.
 */
export const incidentTrend: IncidentTrendPoint[] = [
  { bulan: "Jun 25", kritis: 0, tinggi: 1, sedang: 2 },
  { bulan: "Jul 25", kritis: 0, tinggi: 1, sedang: 3 },
  { bulan: "Agu 25", kritis: 0, tinggi: 1, sedang: 1 },
  { bulan: "Sep 25", kritis: 1, tinggi: 1, sedang: 3 },
  { bulan: "Okt 25", kritis: 0, tinggi: 1, sedang: 2 },
  { bulan: "Nov 25", kritis: 0, tinggi: 2, sedang: 2 },
  { bulan: "Des 25", kritis: 0, tinggi: 1, sedang: 2 },
  { bulan: "Jan 26", kritis: 0, tinggi: 2, sedang: 4 },
  { bulan: "Feb 26", kritis: 1, tinggi: 2, sedang: 4 },
  { bulan: "Mar 26", kritis: 0, tinggi: 3, sedang: 5 },
  { bulan: "Apr 26", kritis: 0, tinggi: 2, sedang: 4 },
  { bulan: "Mei 26", kritis: 1, tinggi: 2, sedang: 4 },
];

/* ── 2c. Insiden per Vektor Serangan ──────────────────────────────── */

export interface IncidentVectorRow {
  vektor: string;
  /** Jumlah insiden YTD; total 5 vektor = 34. */
  jumlah: number;
  /** Porsi terhadap total insiden YTD (%). */
  pct: number;
  tren: "naik" | "turun" | "stabil";
  color: string;
  catatan: string;
}

export const incidentByVector: IncidentVectorRow[] = [
  {
    vektor: "Phishing & Social Engineering",
    jumlah: 14,
    pct: 41.2,
    tren: "naik",
    color: PALETTE.red,
    catatan: "Termasuk 1 insiden P1 ke akun keuangan; click rate simulasi 6,2%.",
  },
  {
    vektor: "Malware & Ransomware",
    jumlah: 7,
    pct: 20.6,
    tren: "stabil",
    color: PALETTE.amber,
    catatan: "Seluruhnya terkontain di endpoint; belum ada enkripsi data produksi.",
  },
  {
    vektor: "Akses Tidak Sah",
    jumlah: 6,
    pct: 17.6,
    tren: "naik",
    color: PALETTE.purple,
    catatan: "Terkait temuan audit berulang: akses user ERP tidak di-review berkala.",
  },
  {
    vektor: "DDoS & Gangguan Layanan",
    jumlah: 4,
    pct: 11.8,
    tren: "turun",
    color: PALETTE.blue,
    catatan: "Sasaran portal publik & e-Proc; mitigasi WAF/CDN efektif.",
  },
  {
    vektor: "Kebocoran / Paparan Data",
    jumlah: 3,
    pct: 8.8,
    tren: "stabil",
    color: PALETTE.teal,
    catatan: "Skala kecil (misconfig share folder); tidak ada data pribadi masif.",
  },
];

/* ── 2d. Vulnerability Aging (severity × umur) ────────────────────── */

export interface VulnerabilityAgingRow {
  severity: "Kritis" | "Tinggi" | "Sedang";
  /** Kerentanan terbuka <30 hari. */
  kurang30: number;
  /** Kerentanan terbuka 30–90 hari. */
  hari30sd90: number;
  /** Kerentanan terbuka >90 hari (pemicu utama patch SLA 78%). */
  lebih90: number;
  total: number;
  slaHari: number;
}

/** Total kerentanan terbuka 2.184; 412 kritis/tinggi berumur >90 hari. */
export const vulnerabilityAging: VulnerabilityAgingRow[] = [
  { severity: "Kritis", kurang30: 46, hari30sd90: 88, lebih90: 124, total: 258, slaHari: 15 },
  { severity: "Tinggi", kurang30: 132, hari30sd90: 214, lebih90: 288, total: 634, slaHari: 30 },
  { severity: "Sedang", kurang30: 386, hari30sd90: 512, lebih90: 394, total: 1292, slaHari: 90 },
];

/* ── 2e. Kesiapan PDP per Pilar ───────────────────────────────────── */

export interface PdpPillarRow {
  pilar: string;
  /** Skor kesiapan 0-100; rata-rata 5 pilar = 76 (TIK.pdpReadinessPct). */
  skor: number;
  target: number;
  status: "Memadai" | "Perlu Penguatan" | "Kritis";
  catatan: string;
}

export const pdpReadiness: PdpPillarRow[] = [
  {
    pilar: "Inventaris Data Pribadi (ROPA)",
    skor: 82,
    target: 90,
    status: "Memadai",
    catatan: "12 domain data terpetakan; sisa gap di aplikasi legacy unit kebun.",
  },
  {
    pilar: "Dasar Pemrosesan & Persetujuan",
    skor: 78,
    target: 90,
    status: "Perlu Penguatan",
    catatan: "Klausul PDP sudah masuk kontrak vendor baru, belum di 1/3 kontrak lama.",
  },
  {
    pilar: "Hak Subjek Data",
    skor: 68,
    target: 90,
    status: "Kritis",
    catatan: "Kanal permintaan subjek data belum terotomasi; SLA respons belum diukur.",
  },
  {
    pilar: "Notifikasi Insiden 3×24 Jam",
    skor: 80,
    target: 95,
    status: "Memadai",
    catatan: "Prosedur eskalasi ada; uji simulasi notifikasi baru sekali dilakukan.",
  },
  {
    pilar: "Struktur DPO & Tata Kelola",
    skor: 72,
    target: 90,
    status: "Perlu Penguatan",
    catatan: "DPO holding ditunjuk; PIC PDP subholding belum lengkap (2 dari 3).",
  },
];

/* ── 2f. Maturitas NIST CSF (6 domain) ────────────────────────────── */

export interface MaturityAxis {
  domain: string;
  /** Skor 1-5; rata-rata 6 domain = 3,1 (TIK.maturitasSiber). */
  skor: number;
  /** Target 2027 = 4,0 (TIK.maturitasSiberTarget). */
  target: number;
}

export const maturitySpider: MaturityAxis[] = [
  { domain: "Identify", skor: 3.2, target: 4.0 },
  { domain: "Protect", skor: 3.0, target: 4.0 },
  { domain: "Detect", skor: 3.4, target: 4.0 },
  { domain: "Respond", skor: 3.1, target: 4.0 },
  { domain: "Recover", skor: 2.8, target: 4.0 },
  { domain: "Govern", skor: 3.1, target: 4.0 },
];

/* ── 2g. Program Awareness & Simulasi Phishing ────────────────────── */

export interface AwarenessProgramRow {
  program: string;
  /** Peserta terlatih YTD. */
  peserta: number;
  /** Cakupan terhadap populasi sasaran (%). */
  cakupanPct: number;
  populasiSasaran: number;
  frekuensi: string;
  hasil: string;
}

/** Populasi sasaran = pengguna akun aktif TI (24.600 dari 70.142 karyawan). */
export const awarenessProgram: AwarenessProgramRow[] = [
  {
    program: "e-Learning Keamanan Informasi Dasar",
    peserta: 19_188,
    cakupanPct: 78.0,
    populasiSasaran: 24_600,
    frekuensi: "Tahunan",
    hasil: "Skor pasca-tes rata-rata 81/100",
  },
  {
    program: "Simulasi Phishing Terjadwal",
    peserta: 24_600,
    cakupanPct: 100.0,
    populasiSasaran: 24_600,
    frekuensi: "Kuartalan",
    hasil: "Click rate 6,2% (Q1: 7,6%) · ambang ≤3%",
  },
  {
    program: "Pelatihan Secure Coding & Admin",
    peserta: 214,
    cakupanPct: 62.0,
    populasiSasaran: 345,
    frekuensi: "Semesteran",
    hasil: "62% personel TI & vendor pengembang tersertifikasi internal",
  },
  {
    program: "Tabletop Exercise Krisis Siber",
    peserta: 48,
    cakupanPct: 84.0,
    populasiSasaran: 57,
    frekuensi: "Semesteran",
    hasil: "BOD & pimpinan unit; 1 sesi terlaksana, 1 dijadwalkan Q4",
  },
];

/* ── 2h. Uji DRP & Kesiapan Pemulihan ─────────────────────────────── */

export interface DrTestRow {
  sistem: string;
  ujiTerakhir: string;
  rtoTargetJam: number;
  rtoAktualJam: number;
  rpoTargetJam: number;
  rpoAktualJam: number;
  status: "Lulus" | "Lulus Bersyarat" | "Belum Diuji";
}

export const drTest: DrTestRow[] = [
  {
    sistem: "SAP S/4HANA (ERP inti)",
    ujiTerakhir: "Feb 2026",
    rtoTargetJam: 4,
    rtoAktualJam: 6.5,
    rpoTargetJam: 1,
    rpoAktualJam: 1,
    status: "Lulus Bersyarat",
  },
  {
    sistem: "Sistem Penjualan & Lelang",
    ujiTerakhir: "Mar 2026",
    rtoTargetJam: 4,
    rtoAktualJam: 3.2,
    rpoTargetJam: 1,
    rpoAktualJam: 0.5,
    status: "Lulus",
  },
  {
    sistem: "Payroll & HCM",
    ujiTerakhir: "Apr 2026",
    rtoTargetJam: 8,
    rtoAktualJam: 7.4,
    rpoTargetJam: 4,
    rpoAktualJam: 2,
    status: "Lulus",
  },
  {
    sistem: "Sistem Operasi Pabrik (OT/SCADA)",
    ujiTerakhir: "Belum",
    rtoTargetJam: 2,
    rtoAktualJam: 0,
    rpoTargetJam: 1,
    rpoAktualJam: 0,
    status: "Belum Diuji",
  },
  {
    sistem: "Data Platform & BI",
    ujiTerakhir: "Jan 2026",
    rtoTargetJam: 12,
    rtoAktualJam: 14.6,
    rpoTargetJam: 8,
    rpoAktualJam: 8,
    status: "Lulus Bersyarat",
  },
];

/* ── 2i. Keputusan & Tautan Risiko ────────────────────────────────── */

export const siberDecisions: TikDecision[] = [
  {
    title: "Sprint Patching 90 Hari untuk Menutup Limit Breach",
    impact: "High Impact",
    tone: "red",
    context:
      "412 kerentanan kritis/tinggi berumur >90 hari menahan patch compliance di 78% vs limit ≥95%. Breach ini adalah satu-satunya deviasi appetite berkategori teknologi.",
    rekomendasi:
      "Setujui freeze perubahan non-kritis selama 90 hari, patch automation untuk 1.800 endpoint, dan pelaporan mingguan ke Komite Risiko sampai ≥95%.",
    due: "Q3 2026",
  },
  {
    title: "Percepatan Kesiapan Hak Subjek Data (UU PDP)",
    impact: "High Impact",
    tone: "amber",
    context:
      "Pilar hak subjek data baru 68/100 dan kanal permintaan belum terotomasi — eksposur sanksi administratif serta reputasi bila ada permintaan massal.",
    rekomendasi:
      "Bangun portal permintaan subjek data dengan SLA 14 hari kerja dan tunjuk PIC PDP di 3 subholding sebelum akhir Q4 2026.",
    due: "Q4 2026",
  },
  {
    title: "Uji DRP Sistem OT/SCADA Pabrik",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Sistem operasi pabrik belum pernah diuji DRP padahal RTO target 2 jam; downtime OT langsung memotong olah TBS di 36 PKS.",
    rekomendasi:
      "Jadwalkan uji DRP OT terbatas pada 3 PKS percontohan di luar musim puncak panen, lalu replikasi ke seluruh pabrik 2027.",
    due: "Q4 2026",
  },
];

export const siberRiskLink: TikCrossLink = {
  label: "Risk Appetite & Limit — Cyber Patch SLA",
  href: "/risiko-kepatuhan/risk-appetite",
  catatan:
    "Patch compliance 78% vs limit ≥95% tercatat sebagai limit breach aktif pada dimensi Risiko & Kepatuhan; owner mitigasi Direktorat Digital & TI dengan tindak lanjut sprint patching 90 hari + segmentasi jaringan OT.",
};

export const siberInsights: TikInsight[] = [
  {
    insight:
      "41% insiden berasal dari phishing sementara click rate simulasi 6,2% masih dua kali ambang internal — faktor manusia, bukan perimeter, yang paling rapuh.",
    rekomendasi:
      "Naikkan frekuensi simulasi phishing menjadi bulanan untuk 3.200 pengguna berisiko tinggi (keuangan, pengadaan, direksi).",
  },
  {
    insight:
      "Domain Recover adalah skor NIST terendah (2,8) dan konsisten dengan RTO ERP aktual 6,5 jam vs target 4 jam serta OT yang belum pernah diuji.",
    rekomendasi:
      "Prioritaskan investasi replikasi DR aktif-aktif untuk ERP dan masukkan uji DRP OT ke KPI Direktorat Digital & TI 2026.",
  },
  {
    insight:
      "Vektor akses tidak sah (6 insiden) beririsan langsung dengan temuan audit berulang 'Akses user ERP tidak di-review berkala' di Holding TI.",
    rekomendasi:
      "Otomasi user access review triwulanan di SAP dan tutup temuan audit sebagai satu paket dengan mitigasi risiko siber.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 3. PROGRAM & DELIVERY DIGITAL — /teknologi-informasi/program-digital
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const programKpi: TikPageKpi[] = [
  {
    label: "Health Program ERP",
    value: "71",
    valueSuffix: "/100",
    sub: "Digitalisasi & ERP Terpadu Grup · progres 57%",
    delta: "-2 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "teal",
  },
  {
    label: "Adopsi Digital",
    value: "68%",
    sub: "Target 2026: 80% · gap 12 pts",
    subDanger: true,
    delta: "+4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Modul Go-Live",
    value: "14",
    valueSuffix: "/21",
    sub: "66,7% modul · 3 modul kebun mundur ke Q3",
    subDanger: true,
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Benefit Terealisasi",
    value: "Rp 0,13 T",
    sub: "10% dari potensi Rp 1,3 T",
    subDanger: true,
    delta: "+Rp 0,04 T",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Proyek Digital Aktif",
    value: "9",
    sub: "4 Hijau · 3 Amber · 2 Merah",
    delta: "+1",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
];

/* ── 3b. Status Modul ERP ─────────────────────────────────────────── */

export interface ErpModuleRow {
  modul: string;
  ruangLingkup: string;
  /** Jumlah sub-modul dalam scope; total 7 baris = 21 sub-modul. */
  subModul: number;
  /** Sub-modul yang sudah go-live; total 7 baris = 14. */
  subModulLive: number;
  status: "Live" | "Rollout" | "Tertunda" | "Desain";
  goLive: string;
  /** Adopsi pengguna modul (%). */
  adopsiPct: number;
  rag: TikRagStatus;
}

/** Total 21 sub-modul, 14 go-live — selaras KPI "Modul Go-Live 14/21". */
export const erpModuleStatus: ErpModuleRow[] = [
  {
    modul: "FI/CO — Keuangan & Pengendalian",
    ruangLingkup: "GL, AP/AR, Aset Tetap, Costing",
    subModul: 4,
    subModulLive: 4,
    status: "Live",
    goLive: "Q3 2024",
    adopsiPct: 92,
    rag: "Hijau",
  },
  {
    modul: "MM — Pengadaan & Persediaan",
    ruangLingkup: "PR/PO, Gudang, Kontrak",
    subModul: 3,
    subModulLive: 3,
    status: "Live",
    goLive: "Q1 2025",
    adopsiPct: 86,
    rag: "Hijau",
  },
  {
    modul: "SD — Penjualan & Distribusi",
    ruangLingkup: "Kontrak jual, Pengapalan, Penagihan",
    subModul: 3,
    subModulLive: 3,
    status: "Live",
    goLive: "Q3 2025",
    adopsiPct: 81,
    rag: "Hijau",
  },
  {
    modul: "PM — Pemeliharaan Pabrik",
    ruangLingkup: "Work order, Preventive, Spare part",
    subModul: 3,
    subModulLive: 2,
    status: "Rollout",
    goLive: "Q2 2026",
    adopsiPct: 64,
    rag: "Amber",
  },
  {
    modul: "HCM — SDM & Payroll",
    ruangLingkup: "Payroll, Absensi, Organisasi",
    subModul: 3,
    subModulLive: 2,
    status: "Rollout",
    goLive: "Q4 2026",
    adopsiPct: 71,
    rag: "Amber",
  },
  {
    modul: "Plantation — Operasi Kebun",
    ruangLingkup: "Blok & afdeling, Panen, Pupuk",
    subModul: 3,
    subModulLive: 0,
    status: "Tertunda",
    goLive: "Q3 2026 (dari Q1)",
    adopsiPct: 0,
    rag: "Merah",
  },
  {
    modul: "BI & Analytics",
    ruangLingkup: "Data platform, Dashboard eksekutif",
    subModul: 2,
    subModulLive: 0,
    status: "Desain",
    goLive: "Q1 2027",
    adopsiPct: 0,
    rag: "Amber",
  },
];

/* ── 3c. Timeline Rollout per Subholding & Gelombang ──────────────── */

export interface RolloutWaveRow {
  gelombang: string;
  entitas: string;
  modul: string;
  rencanaAwal: string;
  rencanaKini: string;
  /** Progres persiapan/eksekusi gelombang (%). */
  progressPct: number;
  rag: TikRagStatus;
  catatan: string;
}

export const rolloutTimeline: RolloutWaveRow[] = [
  {
    gelombang: "Wave 1",
    entitas: "Holding",
    modul: "FI/CO, MM, SD",
    rencanaAwal: "Q1 2026",
    rencanaKini: "Q1 2026",
    progressPct: 100,
    rag: "Hijau",
    catatan: "Selesai; stabilisasi pasca go-live tuntas.",
  },
  {
    gelombang: "Wave 2",
    entitas: "PalmCo",
    modul: "MM, SD, PM",
    rencanaAwal: "Q2 2026",
    rencanaKini: "Q2 2026",
    progressPct: 88,
    rag: "Hijau",
    catatan: "PM tersisa 1 sub-modul spare part di 8 PKS.",
  },
  {
    gelombang: "Wave 3",
    entitas: "PalmCo & PTPN I",
    modul: "Plantation (Kebun)",
    rencanaAwal: "Q1 2026",
    rencanaKini: "Q3 2026",
    progressPct: 42,
    rag: "Merah",
    catatan: "Mundur 2 kuartal: master data blok/afdeling & konektivitas kebun.",
  },
  {
    gelombang: "Wave 4",
    entitas: "SGN",
    modul: "MM, SD, Plantation Tebu",
    rencanaAwal: "Q3 2026",
    rencanaKini: "Q4 2026",
    progressPct: 26,
    rag: "Amber",
    catatan: "Menunggu selesainya musim giling; adopsi SGN masih 58%.",
  },
  {
    gelombang: "Wave 5",
    entitas: "Seluruh Grup",
    modul: "HCM & BI",
    rencanaAwal: "Q4 2026",
    rencanaKini: "Q1 2027",
    progressPct: 14,
    rag: "Amber",
    catatan: "Bergantung penyelesaian Wave 3 sebagai sumber data operasional.",
  },
];

/* ── 3d. Adopsi per Subholding ────────────────────────────────────── */

export interface AdoptionRow {
  entitas: string;
  /** Maturitas digital 1-5 — identik digitalMaturity (stf-data.ts). */
  maturitas: number;
  /** Adopsi tools digital (%) — blended grup 68%. */
  adopsiPct: number;
  target2026Pct: number;
  penggunaAktif: number;
  hambatanUtama: string;
}

/** Nilai maturitas & adopsi identik digitalMaturity pada stf-data.ts. */
export const adoptionBySubholding: AdoptionRow[] = [
  {
    entitas: "Holding",
    maturitas: 3.7,
    adopsiPct: 79,
    target2026Pct: 85,
    penggunaAktif: 1_840,
    hambatanUtama: "Proses lintas direktorat belum sepenuhnya paperless.",
  },
  {
    entitas: "PalmCo",
    maturitas: 3.4,
    adopsiPct: 74,
    target2026Pct: 82,
    penggunaAktif: 13_260,
    hambatanUtama: "Konektivitas kebun terpencil & modul Plantation belum live.",
  },
  {
    entitas: "PTPN I",
    maturitas: 2.9,
    adopsiPct: 61,
    target2026Pct: 75,
    penggunaAktif: 5_420,
    hambatanUtama: "Aplikasi legacy karet/teh belum terintegrasi ke ERP.",
  },
  {
    entitas: "SGN",
    maturitas: 2.6,
    adopsiPct: 58,
    target2026Pct: 75,
    penggunaAktif: 4_080,
    hambatanUtama: "Siklus musim giling menyempitkan jendela pelatihan & rollout.",
  },
];

/* ── 3e. Waterfall Benefit ERP ────────────────────────────────────── */

export interface BenefitWaterfallStep {
  komponen: string;
  /** Benefit terealisasi YTD (Rp T); jumlah 4 komponen = 0,13. */
  realisasiRpT: number;
  /** Potensi benefit penuh pasca rollout tuntas (Rp T); jumlah = 1,3. */
  potensiRpT: number;
  color: string;
  catatan: string;
}

/**
 * Realisasi total 0,13 T identik benefitsWaterfall "Digitalisasi & ERP"
 * pada stf-data.ts; potensi penuh 1,3 T pasca seluruh modul live.
 */
export const benefitWaterfall: BenefitWaterfallStep[] = [
  {
    komponen: "Efisiensi Proses Operasional",
    realisasiRpT: 0.05,
    potensiRpT: 0.52,
    color: PALETTE.green,
    catatan: "Siklus PR-to-PO turun dari 42 ke 34 hari di unit yang sudah live.",
  },
  {
    komponen: "Akurasi Data & Pengendalian Susut",
    realisasiRpT: 0.03,
    potensiRpT: 0.44,
    color: PALETTE.blue,
    catatan: "Potensi terbesar ada di modul Plantation yang belum go-live.",
  },
  {
    komponen: "Penghematan Lisensi & Legacy",
    realisasiRpT: 0.03,
    potensiRpT: 0.18,
    color: PALETTE.teal,
    catatan: "Baru 3 dari 12 aplikasi legacy didekomisioning.",
  },
  {
    komponen: "Otomasi Pelaporan",
    realisasiRpT: 0.02,
    potensiRpT: 0.16,
    color: PALETTE.purple,
    catatan: "Tutup buku bulanan turun 3 hari; benefit penuh menunggu modul BI.",
  },
];

/* ── 3f. Risiko Delivery & Mitigasi ───────────────────────────────── */

export interface DeliveryRiskRow {
  risiko: string;
  dampak: "Tinggi" | "Sedang" | "Rendah";
  probabilitas: "Tinggi" | "Sedang" | "Rendah";
  mitigasi: string;
  owner: string;
  status: "Terbuka" | "Dalam Mitigasi" | "Terkendali";
}

export const deliveryRisks: DeliveryRiskRow[] = [
  {
    risiko: "Master data blok & afdeling kebun belum bersih",
    dampak: "Tinggi",
    probabilitas: "Tinggi",
    mitigasi: "Data cleansing 1.243 afdeling dengan tim gabungan agronomi-TI; gate kualitas ≥95% sebelum go-live.",
    owner: "Direktorat Digital & TI",
    status: "Dalam Mitigasi",
  },
  {
    risiko: "Konektivitas kebun terpencil belum memadai",
    dampak: "Tinggi",
    probabilitas: "Sedang",
    mitigasi: "Backbone VSAT/fiber bertahap; mode offline-first pada aplikasi mandor.",
    owner: "Direktorat Digital & TI",
    status: "Dalam Mitigasi",
  },
  {
    risiko: "Change management & adopsi pengguna rendah",
    dampak: "Tinggi",
    probabilitas: "Tinggi",
    mitigasi: "Jaringan 420 champion unit, KPI adopsi di Direktur Operasi subholding, pelatihan berbasis peran.",
    owner: "Direktorat SDM & Digital",
    status: "Terbuka",
  },
  {
    risiko: "Ketergantungan pada 2 vendor implementor kunci",
    dampak: "Sedang",
    probabilitas: "Sedang",
    mitigasi: "Klausul knowledge transfer, sertifikasi 214 personel internal, dual-sourcing untuk Wave 4-5.",
    owner: "Direktorat Digital & TI",
    status: "Dalam Mitigasi",
  },
  {
    risiko: "Serapan capex rendah memicu rekomposisi anggaran",
    dampak: "Sedang",
    probabilitas: "Tinggi",
    mitigasi: "Rebaseline jadwal & kurva-S capex ke Rp 0,50 T; review bulanan bersama Direktorat Keuangan.",
    owner: "Direktorat Keuangan & MR",
    status: "Terbuka",
  },
];

/* ── 3g. Portofolio 9 Proyek Digital Aktif ────────────────────────── */

export interface DigitalProjectRow {
  proyek: string;
  /** Nilai proyek (Rp M). */
  nilaiRpM: number;
  progressPct: number;
  status: TikRagStatus;
  selesai: string;
  sponsor: string;
}

/** 9 proyek aktif — 4 Hijau, 3 Amber, 2 Merah; total nilai Rp 620 M. */
export const projectPortfolio: DigitalProjectRow[] = [
  { proyek: "ERP Wave 3 — Modul Kebun", nilaiRpM: 168, progressPct: 42, status: "Merah", selesai: "Q3 2026", sponsor: "Direktur Digital & TI" },
  { proyek: "Backbone Konektivitas Kebun & Pabrik", nilaiRpM: 124, progressPct: 56, status: "Amber", selesai: "Q1 2027", sponsor: "Direktur Digital & TI" },
  { proyek: "Data Platform & BI Eksekutif", nilaiRpM: 86, progressPct: 38, status: "Amber", selesai: "Q1 2027", sponsor: "Direktur Perencanaan" },
  { proyek: "Uplift Keamanan Siber & SOC 24/7", nilaiRpM: 65, progressPct: 34, status: "Merah", selesai: "Q4 2026", sponsor: "Direktur Digital & TI" },
  { proyek: "Aplikasi Mandor Mobile (offline-first)", nilaiRpM: 48, progressPct: 72, status: "Hijau", selesai: "Q4 2026", sponsor: "Direktur Produksi" },
  { proyek: "e-Procurement Terintegrasi Tahap 2", nilaiRpM: 42, progressPct: 78, status: "Hijau", selesai: "Q3 2026", sponsor: "Direktur Keuangan & MR" },
  { proyek: "AI Prediksi Yield & Rekomendasi Pupuk", nilaiRpM: 38, progressPct: 61, status: "Hijau", selesai: "Q4 2026", sponsor: "Direktur Produksi" },
  { proyek: "Modernisasi Data Center & Cloud Migration", nilaiRpM: 32, progressPct: 47, status: "Amber", selesai: "Q2 2027", sponsor: "Direktur Digital & TI" },
  { proyek: "Portal Layanan Karyawan & AI HR Assistant", nilaiRpM: 17, progressPct: 84, status: "Hijau", selesai: "Q3 2026", sponsor: "Direktur SDM" },
];

/* ── 3h. Insight & Rekomendasi ────────────────────────────────────── */

export const programInsights: TikInsight[] = [
  {
    insight:
      "Benefit ERP baru 10% dari potensi (Rp 0,13 T dari Rp 1,3 T) karena 46% potensi (Rp 0,60 T) justru melekat pada modul Plantation & BI yang belum go-live.",
    rekomendasi:
      "Perlakukan Wave 3 sebagai jalur kritis tunggal program; alihkan sumber daya dari Wave 5 sampai modul kebun live.",
  },
  {
    insight:
      "Health program turun 2 poin ke 71 sepenuhnya disebabkan dimensi jadwal — dimensi anggaran justru longgar karena serapan capex hanya 32%.",
    rekomendasi:
      "Rebaseline kurva-S capex dan kunci kontrak implementor Wave 3 sebelum Q3 agar serapan tidak menumpuk di Q4.",
  },
  {
    insight:
      "Adopsi grup 68% adalah rata-rata tertimbang yang menutupi sebaran nyata: Holding 79% vs SGN 58% — 21 poin selisih antar-entitas.",
    rekomendasi:
      "Terapkan program champion 420 orang lebih padat di SGN & PTPN I, dan ukur adopsi bulanan per entitas, bukan hanya blended grup.",
  },
];

/* #endregion */
