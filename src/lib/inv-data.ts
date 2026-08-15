/**
 * Data statis halaman Portofolio Investasi (/aset-investasi/portofolio-investasi).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts
 * (pipeline Rp 21,8 T · 42 proyek aktif) dan ast-core.ts.
 *
 * Catatan konsistensi: nilai proyek bioetanol SGN Rp 2,8 T & revitalisasi
 * 5 PG Rp 3,1 T identik dengan astDecisions/assetIntelligence (ast-data.ts);
 * program biogas 18 PKS selaras agenda dekarbonisasi dimensi ESG.
 */

import { ASET, KEUANGAN } from "./group-baseline";
import type { AstDecision, AstInsight, AstKpi, AstRiskLevel } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const invKpi: AstKpi[] = [
  {
    label: "Proyek Aktif",
    value: "42",
    sub: "5 tahap pipeline · 6 berstatus PSN",
    delta: "+7 proyek",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "investasi",
    tone: "blue",
  },
  {
    label: "Nilai Pipeline",
    value: "Rp 21,8 T",
    sub: "16,5% total aset Rp 132,4 T",
    delta: "+Rp 2,4 T",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "nilai",
    tone: "green",
  },
  {
    label: "Proyek Strategis Nasional",
    value: "6",
    sub: "Nilai Rp 12,1 T · 56% pipeline",
    delta: "+1 proyek",
    trend: "up",
    deltaTone: "good",
    compare: "penetapan PSN 2026",
    icon: "investasi",
    tone: "pink",
  },
  {
    label: "On Schedule",
    value: "71%",
    sub: "30 dari 42 proyek sesuai kurva-S",
    delta: "-4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "pabrik",
    tone: "amber",
  },
  {
    label: "IRR Rata-Rata",
    value: "14,2%",
    sub: "Hurdle rate korporat 12,0%",
    delta: "+2,2 ppt",
    trend: "up",
    deltaTone: "good",
    compare: "vs hurdle rate",
    icon: "nilai",
    tone: "teal",
  },
  {
    label: "Realisasi Capex",
    value: "Rp 3,08 T",
    sub: "32,1% RKAP FY Rp 9,6 T",
    delta: "-9,6 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    icon: "nilai",
    tone: "red",
  },
];

export const INV_PROYEK_AKTIF = ASET.proyekAktif; // 42
export const INV_PIPELINE_RP_T = ASET.pipelineInvestasiRpT; // 21,8
export const INV_PSN_COUNT = 6;
/** 6 PSN = 5 proyek pada topProjects (Rp 11,4 T) + 1 proyek Rp 0,7 T. */
export const INV_PSN_NILAI_RP_T = 12.1;
export const INV_ON_SCHEDULE_PCT = 71;
export const INV_IRR_RATA_PCT = 14.2;
export const INV_HURDLE_RATE_PCT = 12.0;
export const INV_CAPEX_RKAP_RP_T = KEUANGAN.capexRkapFy; // 9,6

/* ── 2. Pipeline Funnel ───────────────────────────────────────────── */

export interface PipelineStage {
  tahap: string;
  /** Jumlah proyek — jumlah 5 tahap = 42. */
  jumlahProyek: number;
  /** Nilai investasi pada tahap tsb (Rp T) — jumlah = 21,8. */
  nilaiRpT: number;
  /** Rata-rata lama proses di tahap ini. */
  leadTime: string;
  note?: string;
}

export const pipelineFunnel: PipelineStage[] = [
  { tahap: "Kajian Awal", jumlahProyek: 11, nilaiRpT: 2.6, leadTime: "2–4 bulan" },
  { tahap: "Feasibility Study", jumlahProyek: 9, nilaiRpT: 3.1, leadTime: "4–8 bulan" },
  {
    tahap: "Persetujuan (BOD/RUPS)",
    jumlahProyek: 7,
    nilaiRpT: 4.7,
    leadTime: "3–9 bulan",
    note: "Seluruhnya menunggu keputusan BOD — lihat Decision Center.",
  },
  { tahap: "Konstruksi", jumlahProyek: 10, nilaiRpT: 9.8, leadTime: "18–36 bulan" },
  { tahap: "Onstream & Commissioning", jumlahProyek: 5, nilaiRpT: 1.6, leadTime: "3–6 bulan" },
];

export const pipelineFunnelNote =
  "Rp 4,7 T (21,6% pipeline) tertahan di tahap persetujuan dengan lead time 3–9 bulan — titik sumbat terbesar pipeline berada di ruang keputusan, bukan di lapangan.";

/* ── 3. Top 8 Proyek ──────────────────────────────────────────────── */

export type ProjectStatus = "On Track" | "Waspada" | "Terlambat";

export interface TopProject {
  id: string;
  nama: string;
  sektor: string;
  /** Nilai investasi (Rp T) — jumlah 8 proyek = 15,0 (68,8% pipeline). */
  nilaiRpT: number;
  tahap: string;
  /** Progress fisik (%). */
  progress: number;
  /** IRR proyek (%); hurdle rate korporat 12,0%. */
  irr: number;
  isPsn: boolean;
  status: ProjectStatus;
}

/**
 * 5 dari 6 PSN grup ada di daftar ini (bioetanol, revitalisasi 5 PG, refinery,
 * kawasan industri, oleokimia); 1 PSN sisanya (jalan & pelabuhan pendukung
 * Rp 0,7 T) berada di tahap konstruksi di luar top 8.
 * IRR tertimbang top 8 = 14,1% vs rata portofolio 14,2%.
 */
export const topProjects: TopProject[] = [
  {
    id: "INV-01",
    nama: "Revitalisasi 5 Pabrik Gula SGN",
    sektor: "Revitalisasi",
    nilaiRpT: 3.1,
    tahap: "Konstruksi",
    progress: 42,
    irr: 12.6,
    isPsn: true,
    status: "On Track",
  },
  {
    id: "INV-02",
    nama: "Bioetanol SGN (Glenmore–Djatiroto)",
    sektor: "Hilirisasi",
    nilaiRpT: 2.8,
    tahap: "Persetujuan (FID)",
    progress: 18,
    irr: 13.8,
    isPsn: true,
    status: "Waspada",
  },
  {
    id: "INV-03",
    nama: "Refinery & Pabrik Minyak Goreng Sei Mangkei",
    sektor: "Hilirisasi",
    nilaiRpT: 2.4,
    tahap: "Konstruksi",
    progress: 58,
    irr: 15.4,
    isPsn: true,
    status: "On Track",
  },
  {
    id: "INV-04",
    nama: "Kawasan Industri PTPN I (Fase II)",
    sektor: "Infrastruktur",
    nilaiRpT: 1.9,
    tahap: "Konstruksi",
    progress: 26,
    irr: 11.8,
    isPsn: true,
    status: "Terlambat",
  },
  {
    id: "INV-05",
    nama: "Biogas & Co-Firing 18 PKS",
    sektor: "EBT",
    nilaiRpT: 1.6,
    tahap: "Persetujuan (BOD)",
    progress: 12,
    irr: 16.2,
    isPsn: false,
    status: "On Track",
  },
  {
    id: "INV-06",
    nama: "Upgrade Kapasitas & Debottlenecking 6 PKS",
    sektor: "Revitalisasi",
    nilaiRpT: 1.4,
    tahap: "Konstruksi",
    progress: 47,
    irr: 17.1,
    isPsn: false,
    status: "On Track",
  },
  {
    id: "INV-07",
    nama: "Hilirisasi Oleokimia PalmCo",
    sektor: "Hilirisasi",
    nilaiRpT: 1.2,
    tahap: "Feasibility Study",
    progress: 8,
    irr: 14.6,
    isPsn: true,
    status: "On Track",
  },
  {
    id: "INV-08",
    nama: "Digitalisasi & ERP Terpadu Grup",
    sektor: "Digital",
    nilaiRpT: 0.6,
    tahap: "Konstruksi",
    progress: 63,
    irr: 12.4,
    isPsn: false,
    status: "On Track",
  },
];

export const TOP_PROJECTS_NILAI_RP_T = 15.0;
export const TOP_PROJECTS_PORSI_PCT = 68.8;

/* ── 4. Project Risk Matrix (nilai × risiko eksekusi) ─────────────── */

export interface ProjectRiskPoint {
  proyek: string;
  /** Nilai investasi (Rp T) — sumbu Y. */
  nilaiRpT: number;
  /** Skor risiko eksekusi 1–5 — sumbu X. */
  risikoEksekusi: number;
  level: AstRiskLevel;
  mitigasi: string;
}

/** Ambang kuadran: nilai Rp 1,5 T × skor risiko 3,0. */
export const INV_RISIKO_AMBANG = 3.0;
export const INV_NILAI_AMBANG_RP_T = 1.5;

export const projectRiskMatrix: ProjectRiskPoint[] = [
  {
    proyek: "Bioetanol SGN",
    nilaiRpT: 2.8,
    risikoEksekusi: 4.4,
    level: "Ekstrem",
    mitigasi: "Kunci offtake ≥70% kapasitas & kontrak pasok molases/tebu 5 tahun sebelum FID.",
  },
  {
    proyek: "Kawasan Industri PTPN I",
    nilaiRpT: 1.9,
    risikoEksekusi: 4.1,
    level: "Tinggi",
    mitigasi: "Percepat pembebasan & sertifikasi lahan; renegosiasi jadwal dengan mitra anchor.",
  },
  {
    proyek: "Revitalisasi 5 PG",
    nilaiRpT: 3.1,
    risikoEksekusi: 3.2,
    level: "Tinggi",
    mitigasi: "Jendela pekerjaan di luar musim giling; penalti keterlambatan pada kontraktor EPC.",
  },
  {
    proyek: "Refinery & Minyak Goreng",
    nilaiRpT: 2.4,
    risikoEksekusi: 2.4,
    level: "Sedang",
    mitigasi: "Kunci harga peralatan impor & jadwal commissioning bersama offtaker.",
  },
  {
    proyek: "Biogas & Co-Firing 18 PKS",
    nilaiRpT: 1.6,
    risikoEksekusi: 2.8,
    level: "Sedang",
    mitigasi: "Skema modular per klaster PKS; kepastian PPA/harga listrik sebelum eksekusi penuh.",
  },
  {
    proyek: "Upgrade Kapasitas 6 PKS",
    nilaiRpT: 1.4,
    risikoEksekusi: 2.1,
    level: "Rendah",
    mitigasi: "Lingkup teknis terbukti; eksekusi bertahap mengikuti musim panen rendah.",
  },
  {
    proyek: "Hilirisasi Oleokimia",
    nilaiRpT: 1.2,
    risikoEksekusi: 3.6,
    level: "Tinggi",
    mitigasi: "Cari mitra teknologi & pasar sebelum FS final; uji sensitivitas harga produk turunan.",
  },
  {
    proyek: "Digitalisasi & ERP Terpadu",
    nilaiRpT: 0.6,
    risikoEksekusi: 3.4,
    level: "Sedang",
    mitigasi: "Fase per proses bisnis; ukur manfaat pada tiap gate sebelum pendanaan lanjutan.",
  },
];

export const projectRiskNote =
  "Tiga proyek bernilai >Rp 1,5 T berada di zona risiko eksekusi >3,0 (Rp 7,8 T, 36% pipeline) — konsentrasi risiko terbesar pada bioetanol, revitalisasi PG dan kawasan industri.";

/* ── 5. Komposisi Investasi per Sektor (donut) ────────────────────── */

export interface InvestmentSectorSlice {
  sektor: string;
  /** Porsi pipeline (%), jumlah = 100. */
  pct: number;
  /** Nilai (Rp T), jumlah = 21,8. */
  nilaiRpT: number;
  jumlahProyek: number;
}

/** Jumlah proyek 5 sektor = 42 (ASET.proyekAktif). */
export const investmentBySector: InvestmentSectorSlice[] = [
  { sektor: "Hilirisasi", pct: 38, nilaiRpT: 8.3, jumlahProyek: 12 },
  { sektor: "Revitalisasi Pabrik", pct: 27, nilaiRpT: 5.9, jumlahProyek: 11 },
  { sektor: "Energi Baru & Terbarukan", pct: 15, nilaiRpT: 3.3, jumlahProyek: 8 },
  { sektor: "Infrastruktur & Kawasan", pct: 12, nilaiRpT: 2.6, jumlahProyek: 6 },
  { sektor: "Digital & Sistem", pct: 8, nilaiRpT: 1.7, jumlahProyek: 5 },
];

export const investmentBySectorNote =
  "Hilirisasi (38%) dan revitalisasi (27%) menyerap dua pertiga pipeline. Porsi EBT 15% adalah tulang punggung target dekarbonisasi grup — biogas 18 PKS menjadi proyek terbesarnya.";

/* ── 6. S-Curve Watch (3 proyek kritis) ───────────────────────────── */

export interface SCurvePoint {
  periode: string;
  rencanaFisikPct: number;
  aktualFisikPct: number;
  rencanaKeuanganPct: number;
  aktualKeuanganPct: number;
}

export interface SCurveProject {
  proyek: string;
  nilaiRpT: number;
  /** Deviasi fisik terhadap rencana pada periode terakhir (ppt). */
  deviasiFisikPpt: number;
  status: ProjectStatus;
  kurva: SCurvePoint[];
}

/** Titik terakhir tiap kurva = posisi 31 Mei 2026 (Q2 2026 berjalan). */
export const sCurveWatch: SCurveProject[] = [
  {
    proyek: "Revitalisasi 5 Pabrik Gula SGN",
    nilaiRpT: 3.1,
    deviasiFisikPpt: -6,
    status: "On Track",
    kurva: [
      { periode: "Q1 2025", rencanaFisikPct: 6, aktualFisikPct: 5, rencanaKeuanganPct: 8, aktualKeuanganPct: 6 },
      { periode: "Q2 2025", rencanaFisikPct: 14, aktualFisikPct: 12, rencanaKeuanganPct: 17, aktualKeuanganPct: 14 },
      { periode: "Q3 2025", rencanaFisikPct: 24, aktualFisikPct: 21, rencanaKeuanganPct: 28, aktualKeuanganPct: 24 },
      { periode: "Q4 2025", rencanaFisikPct: 34, aktualFisikPct: 30, rencanaKeuanganPct: 39, aktualKeuanganPct: 34 },
      { periode: "Q1 2026", rencanaFisikPct: 43, aktualFisikPct: 37, rencanaKeuanganPct: 49, aktualKeuanganPct: 42 },
      { periode: "Q2 2026", rencanaFisikPct: 48, aktualFisikPct: 42, rencanaKeuanganPct: 55, aktualKeuanganPct: 47 },
    ],
  },
  {
    proyek: "Bioetanol SGN (Glenmore–Djatiroto)",
    nilaiRpT: 2.8,
    deviasiFisikPpt: -14,
    status: "Waspada",
    kurva: [
      { periode: "Q1 2025", rencanaFisikPct: 4, aktualFisikPct: 3, rencanaKeuanganPct: 5, aktualKeuanganPct: 3 },
      { periode: "Q2 2025", rencanaFisikPct: 10, aktualFisikPct: 7, rencanaKeuanganPct: 12, aktualKeuanganPct: 7 },
      { periode: "Q3 2025", rencanaFisikPct: 17, aktualFisikPct: 10, rencanaKeuanganPct: 20, aktualKeuanganPct: 11 },
      { periode: "Q4 2025", rencanaFisikPct: 24, aktualFisikPct: 13, rencanaKeuanganPct: 28, aktualKeuanganPct: 15 },
      { periode: "Q1 2026", rencanaFisikPct: 29, aktualFisikPct: 16, rencanaKeuanganPct: 34, aktualKeuanganPct: 18 },
      { periode: "Q2 2026", rencanaFisikPct: 32, aktualFisikPct: 18, rencanaKeuanganPct: 38, aktualKeuanganPct: 20 },
    ],
  },
  {
    proyek: "Kawasan Industri PTPN I (Fase II)",
    nilaiRpT: 1.9,
    deviasiFisikPpt: -19,
    status: "Terlambat",
    kurva: [
      { periode: "Q1 2025", rencanaFisikPct: 7, aktualFisikPct: 5, rencanaKeuanganPct: 9, aktualKeuanganPct: 6 },
      { periode: "Q2 2025", rencanaFisikPct: 16, aktualFisikPct: 11, rencanaKeuanganPct: 19, aktualKeuanganPct: 12 },
      { periode: "Q3 2025", rencanaFisikPct: 26, aktualFisikPct: 16, rencanaKeuanganPct: 30, aktualKeuanganPct: 18 },
      { periode: "Q4 2025", rencanaFisikPct: 34, aktualFisikPct: 20, rencanaKeuanganPct: 39, aktualKeuanganPct: 23 },
      { periode: "Q1 2026", rencanaFisikPct: 41, aktualFisikPct: 23, rencanaKeuanganPct: 47, aktualKeuanganPct: 27 },
      { periode: "Q2 2026", rencanaFisikPct: 45, aktualFisikPct: 26, rencanaKeuanganPct: 52, aktualKeuanganPct: 30 },
    ],
  },
];

export const sCurveWatchNote =
  "Ketiga proyek (Rp 7,8 T) menunjukkan pola sama: realisasi keuangan selalu di atas realisasi fisik — indikasi uang muka & pengadaan berjalan lebih cepat daripada pekerjaan lapangan.";

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

/** Total nilai proposal menunggu persetujuan BOD = Rp 4,7 T (7 proyek). */
export const INV_DECISION_TOTAL_RP_T = 4.7;
export const INV_DECISION_PROYEK = 7;

export const invDecisions: AstDecision[] = [
  {
    title: "FID Bioetanol SGN — Rp 2,8 T",
    impact: "High Impact",
    tone: "red",
    context:
      "Proyek PSN dengan progress 18% (deviasi -14 ppt) menunggu FID; bankability bergantung pada kepastian pasokan molases/tebu dan mandat pencampuran E5.",
    rekomendasi:
      "Putuskan FID bersyarat: kontrak offtake minimal 70% kapasitas + perjanjian pasok tebu 5 tahun sebagai prasyarat pencairan.",
    due: "Agu 2026",
  },
  {
    title: "Persetujuan Biogas & Co-Firing 18 PKS — Rp 1,6 T",
    impact: "High Impact",
    tone: "amber",
    context:
      "IRR 16,2% (tertinggi di antara proyek besar) dan menjadi tulang punggung target dekarbonisasi; menunggu persetujuan sejak Q4 2025.",
    rekomendasi:
      "Setujui eksekusi modular per klaster PKS, dimulai dari 6 PKS berkapasitas terbesar dengan PPA yang sudah terkunci.",
    due: "Q3 2026",
  },
  {
    title: "Paket 5 Proyek Debottlenecking & Sarana — Rp 0,3 T",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Lima proyek kecil bernilai total Rp 0,3 T dengan IRR 15–19% tertahan di antrean persetujuan yang sama dengan proyek besar.",
    rekomendasi:
      "Delegasikan kewenangan persetujuan proyek <Rp 100 M ke Direksi subholding agar antrean BOD fokus pada proyek strategis.",
    due: "Jul 2026",
  },
];

/* ── 8. Insights ──────────────────────────────────────────────────── */

export const invInsights: AstInsight[] = [
  {
    title: "Sumbatan Ada di Ruang Keputusan",
    text: `Rp ${INV_DECISION_TOTAL_RP_T.toString().replace(".", ",")} T pada ${INV_DECISION_PROYEK} proyek menunggu persetujuan dengan lead time 3–9 bulan. Penundaan setahun pada IRR rata 14,2% menghapus ±Rp 0,67 T nilai kini.`,
    tone: "red",
  },
  {
    title: "Realisasi Keuangan Mendahului Fisik",
    text: "Pada tiga proyek kritis, serapan dana konsisten 4–7 ppt di atas progress fisik. Pola ini menyembunyikan keterlambatan riil pada laporan berbasis serapan capex.",
    tone: "amber",
  },
  {
    title: "Capex Baru 32,1% Prorata",
    text: "Realisasi capex Rp 3,08 T dari RKAP Rp 9,6 T pada 41,7% waktu berjalan. Beban H2 menjadi Rp 6,5 T — risiko pengadaan terburu-buru di akhir tahun.",
    tone: "amber",
  },
  {
    title: "IRR di Atas Hurdle, Eksekusi yang Tertinggal",
    text: `IRR rata portofolio 14,2% vs hurdle ${INV_HURDLE_RATE_PCT.toString().replace(".", ",")}% — kualitas seleksi proyek baik. Masalahnya bukan kelayakan, melainkan 29% proyek yang berjalan di bawah kurva-S.`,
    tone: "blue",
  },
  {
    title: "Konsentrasi Risiko Rp 7,8 T",
    text: "Bioetanol, revitalisasi 5 PG & kawasan industri menyerap 36% pipeline sekaligus menempati zona risiko eksekusi tertinggi. Gate review kuartalan dengan opsi realokasi dana perlu diformalkan.",
    tone: "red",
  },
];
