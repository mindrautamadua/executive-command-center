/**
 * Data halaman detail kartu People Risk Radar (heatmap organisasi & risk treatment).
 * Angka jangkar mengikuti `prr-data.ts`: overall risk score 68, risk appetite 50,
 * 5 risiko tinggi / 3 menengah / 2 rendah, 12.842 karyawan terdampak, dan
 * potensi dampak finansial Rp 128,6 M.
 */

import { orgRiskHeatmap } from "./prr-data";
import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";

export const orgHighTotal = orgRiskHeatmap.reduce((a, o) => a + o.high, 0); // 11
export const orgMediumTotal = orgRiskHeatmap.reduce((a, o) => a + o.medium, 0); // 12
export const orgLowTotal = orgRiskHeatmap.reduce((a, o) => a + o.low, 0); // 5

/* ══════════════════════════════════════════════════════════════════
   Risk Heatmap by Organization
   ══════════════════════════════════════════════════════════════════ */

export const heatmapKpi: DetailKpi[] = [
  { label: "Overall Risk Score", value: "68", suffix: "/100", delta: "-4 pts", trend: "down", tone: "green", compare: "Risk appetite ≤ 50" },
  { label: "Organisasi di Atas Appetite", value: "6", suffix: "/6", delta: "Tetap", trend: "flat", tone: "red", compare: "Skor terendah 54 (PTPN VI)" },
  { label: "Instans Risiko Tinggi", value: "11", share: "39,3%", delta: "-2", trend: "down", tone: "red", compare: "dari 28 instans risiko" },
  { label: "Skor Tertinggi", value: "76", delta: "+8 pts", trend: "up", tone: "red", compare: "PTPN IV — memburuk tercepat" },
  { label: "Skor Terendah", value: "54", delta: "-3 pts", trend: "down", tone: "green", compare: "PTPN VI" },
  { label: "Organisasi Memburuk", value: "3", suffix: "/6", delta: "+1", trend: "up", tone: "amber", compare: "Δ 3 bulan bertanda positif" },
];

/** Tren skor risiko empat entitas ekstrem sepanjang semester. */
export const heatmapTrend = [
  { name: "Jan", ptpn4: 66, ptpn3: 64, ptpn1: 57, ptpn6: 59 },
  { name: "Feb", ptpn4: 68, ptpn3: 66, ptpn1: 58, ptpn6: 58 },
  { name: "Mar", ptpn4: 70, ptpn3: 67, ptpn1: 59, ptpn6: 57 },
  { name: "Apr", ptpn4: 73, ptpn3: 69, ptpn1: 61, ptpn6: 56 },
  { name: "Mei", ptpn4: 75, ptpn3: 70, ptpn1: 62, ptpn6: 55 },
  { name: "Jun", ptpn4: 76, ptpn3: 71, ptpn1: 62, ptpn6: 54 },
];

export const heatmapScoreBars = orgRiskHeatmap.map((o) => ({
  label: o.name,
  value: o.score,
  note: o.trajectory > 0 ? `+${o.trajectory} pts 3 bln` : `${o.trajectory} pts 3 bln`,
}));

export interface HeatmapDetailRow {
  org: string;
  high: number;
  medium: number;
  low: number;
  total: number;
  score: number;
  trajectory: number;
  drivers: string;
  karyawan: string;
  exposure: string;
  status: "Kritis" | "Waspada" | "Terkendali";
}

export const heatmapRows: HeatmapDetailRow[] = [
  { org: "PTPN IV", high: 3, medium: 2, low: 0, total: 5, score: 76, trajectory: 8, drivers: "Turnover, Vacancy, Succession", karyawan: "3.184", exposure: "Rp 34,2 M", status: "Kritis" },
  { org: "PTPN III", high: 2, medium: 2, low: 1, total: 5, score: 71, trajectory: 5, drivers: "Turnover, Skill Gap", karyawan: "2.746", exposure: "Rp 28,7 M", status: "Kritis" },
  { org: "PTPN V", high: 2, medium: 1, low: 1, total: 4, score: 65, trajectory: -4, drivers: "Vacancy, Beban Kerja", karyawan: "1.892", exposure: "Rp 18,4 M", status: "Waspada" },
  { org: "PTPN I", high: 2, medium: 2, low: 1, total: 5, score: 62, trajectory: 3, drivers: "Succession, Skill Gap", karyawan: "2.104", exposure: "Rp 21,6 M", status: "Waspada" },
  { org: "PTPN II", high: 1, medium: 3, low: 1, total: 5, score: 58, trajectory: -2, drivers: "Leadership, Succession", karyawan: "1.638", exposure: "Rp 15,1 M", status: "Waspada" },
  { org: "PTPN VI", high: 1, medium: 2, low: 1, total: 4, score: 54, trajectory: -3, drivers: "Engagement, Aging", karyawan: "1.278", exposure: "Rp 10,6 M", status: "Terkendali" },
];

/** Komposisi instans risiko per organisasi untuk bar bertumpuk. */
export const heatmapStack = orgRiskHeatmap.map((o) => ({
  name: o.name,
  high: o.high,
  medium: o.medium,
  low: o.low,
}));

export const heatmapNotes: DetailNote[] = [
  {
    title: "Tidak ada entitas di dalam appetite",
    detail:
      "Seluruh enam organisasi berada di atas risk appetite 50, dengan skor terendah 54 pada PTPN VI. Toleransi grup perlu ditinjau atau mitigasi dipercepat.",
    tone: "red",
  },
  {
    title: "PTPN IV memburuk paling cepat",
    detail:
      "Naik 8 pts dalam tiga bulan dengan 3 instans risiko tinggi — kombinasi turnover, kekosongan posisi kritis, dan suksesi menumpuk pada satu entitas.",
    tone: "amber",
  },
  {
    title: "Tiga entitas mulai membaik",
    detail: "PTPN V, PTPN VI, dan PTPN II mencatat trajektori negatif; keduanya menjalankan retention program lebih dulu sejak Q1 2026.",
    tone: "green",
  },
];

export const heatmapDefinitions = [
  { term: "Skor organisasi", text: "Rata-rata tertimbang skor risiko people pada entitas tersebut, skala 0–100; makin tinggi makin berisiko." },
  { term: "Risk appetite", text: "Ambang toleransi grup ≤ 50 sesuai kebijakan manajemen risiko PTPN 2026." },
  { term: "Δ 3 bulan", text: "Perubahan skor dibanding tiga bulan lalu; nilai positif berarti risiko memburuk." },
  { term: "Sumber", text: "People Risk Register · HRIS konsolidasi · data per 31 Mei 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   Rekomendasi Tindakan / Risk Treatment
   ══════════════════════════════════════════════════════════════════ */

/** Total penurunan skor bila seluruh treatment tuntas — dihitung dari tabel di bawah. */
export const totalPenurunan = 111;

export const tindakanKpi: DetailKpi[] = [
  { label: "Tindakan Mitigasi", value: "8", delta: "+3", trend: "up", tone: "neutral", compare: "Portofolio treatment 2026" },
  { label: "Sedang Berjalan", value: "3", share: "37,5%", delta: "+1", trend: "up", tone: "green", compare: "Sisanya masih Planned" },
  { label: "Menyasar Risiko Tinggi", value: "5", share: "62,5%", delta: "Tetap", trend: "flat", tone: "red", compare: "5 risiko tinggi terdaftar" },
  { label: "Total Penurunan Skor", value: "111", suffix: "pts", delta: "+33", trend: "up", tone: "green", compare: "Bila seluruh treatment tuntas" },
  { label: "Estimasi Skor Grup", value: "54", delta: "68 → 54", trend: "down", tone: "amber", compare: "Masih 4 pts di atas appetite" },
  { label: "Anggaran Treatment", value: "Rp 42,8", suffix: "M", delta: "+18,4%", trend: "up", tone: "neutral", compare: "33% dari eksposur Rp 128,6 M" },
];

export interface TindakanRow {
  tindakan: string;
  risiko: string;
  level: "High" | "Medium" | "Low";
  owner: string;
  before: number;
  after: number;
  status: "In Progress" | "Planned";
  quarter: string;
  progress: number;
  anggaran: string;
  ukuran: string;
}

export const tindakanRows: TindakanRow[] = [
  { tindakan: "Accelerated Succession Program", risiko: "Critical Position Vacancy", level: "High", owner: "HC & Bisnis", before: 82, after: 61, status: "In Progress", quarter: "Q3 2026", progress: 64, anggaran: "Rp 9,4 M", ukuran: "24 posisi kritis terisi" },
  { tindakan: "Retention Program Karyawan Kunci", risiko: "Turnover Risk", level: "High", owner: "HC Holding", before: 74, after: 58, status: "In Progress", quarter: "Q3 2026", progress: 58, anggaran: "Rp 11,2 M", ukuran: "Turnover talenta kritis < 8%" },
  { tindakan: "Upskilling Program Digital & Agronomi", risiko: "Critical Skill Gap", level: "High", owner: "HC & Learning Center", before: 72, after: 55, status: "Planned", quarter: "Q4 2026", progress: 12, anggaran: "Rp 7,6 M", ukuran: "Adopsi digital tools ≥ 70%" },
  { tindakan: "Leadership Development Program", risiko: "Leadership Gap", level: "Medium", owner: "Talent Management", before: 61, after: 48, status: "Planned", quarter: "Q4 2026", progress: 8, anggaran: "Rp 5,1 M", ukuran: "320 manajer tersertifikasi" },
  { tindakan: "Review Struktur & Beban Kerja", risiko: "Beban Kerja Berlebih", level: "Medium", owner: "SDM & Organisasi", before: 58, after: 47, status: "Planned", quarter: "Q4 2026", progress: 5, anggaran: "Rp 2,8 M", ukuran: "Rasio span of control 1:8" },
  { tindakan: "Emergency Cover Posisi Kritis", risiko: "Critical Position Vacancy", level: "High", owner: "HC Holding", before: 82, after: 70, status: "In Progress", quarter: "Q3 2026", progress: 71, anggaran: "Rp 1,9 M", ukuran: "27 posisi punya pengganti darurat" },
  { tindakan: "Benchmark & Perbaikan Kompensasi", risiko: "Kompensasi Tidak Kompetitif", level: "High", owner: "HC Reward", before: 76, after: 62, status: "Planned", quarter: "Q1 2027", progress: 0, anggaran: "Rp 3,4 M", ukuran: "Posisi kritis di P50 pasar" },
  { tindakan: "Program Engagement & Budaya", risiko: "Engagement Rendah", level: "Low", owner: "HC Culture", before: 47, after: 40, status: "Planned", quarter: "Q1 2027", progress: 0, anggaran: "Rp 1,4 M", ukuran: "Engagement index ≥ 78" },
];

/** Penurunan skor risiko per tindakan (pts). */
export const tindakanDampak = tindakanRows.map((r) => ({
  label: r.tindakan,
  value: r.before - r.after,
  note: `${r.before} → ${r.after}`,
}));

/** Proyeksi overall risk score bila treatment berjalan sesuai jadwal. */
export const tindakanProyeksi = [
  { name: "Jun 2026", aktual: 68, proyeksi: 68, appetite: 50 },
  { name: "Sep 2026", aktual: 64, proyeksi: 63, appetite: 50 },
  { name: "Des 2026", aktual: 61, proyeksi: 58, appetite: 50 },
  { name: "Mar 2027", aktual: 58, proyeksi: 55, appetite: 50 },
  { name: "Jun 2027", aktual: 56, proyeksi: 54, appetite: 50 },
];

export const tindakanProgres = tindakanRows.map((r) => ({
  label: r.tindakan,
  value: r.progress,
  note: r.quarter,
  kesehatan: (r.progress >= 55 ? "on-track" : r.progress >= 10 ? "at-risk" : "behind") as
    | "on-track"
    | "at-risk"
    | "behind",
}));

export const tindakanNotes: DetailNote[] = [
  {
    title: "Treatment belum cukup mencapai appetite",
    detail:
      "Seluruh delapan tindakan tuntas hanya membawa skor grup ke 54 — masih 4 pts di atas appetite 50. Perlu tindakan tambahan pada driver suksesi.",
    tone: "red",
  },
  {
    title: "Lima tindakan belum bergerak",
    detail:
      "Progres di bawah 15% pada lima treatment yang seluruhnya berstatus Planned; tiga di antaranya menyasar risiko tinggi dengan tenggat Q4 2026.",
    tone: "amber",
  },
  {
    title: "Anggaran sepertiga eksposur",
    detail: "Rp 42,8 M untuk menurunkan eksposur Rp 128,6 M — rasio biaya-mitigasi masih dalam batas wajar kebijakan risiko grup.",
    tone: "green",
  },
];

export const tindakanDefinitions = [
  { term: "Risk treatment", text: "Tindakan mitigasi yang disetujui forum risiko untuk menurunkan skor risiko people tertentu." },
  { term: "Before → After", text: "Skor risiko saat ini dan ekspektasi skor setelah treatment berjalan penuh." },
  { term: "Progres", text: "Realisasi milestone treatment terhadap rencana, per 31 Mei 2026." },
  { term: "Sumber", text: "People Risk Register · Program Management Office SDM · RKAP mitigasi 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   Profil Risiko (radar 10 risiko)
   ══════════════════════════════════════════════════════════════════ */

export const profilKpi: DetailKpi[] = [
  { label: "Risiko Terdaftar", value: "10", delta: "Tetap", trend: "flat", tone: "neutral", compare: "Register people risk 2026" },
  { label: "Risiko Tinggi", value: "4", share: "40,0%", delta: "-1", trend: "down", tone: "red", compare: "Skor ≥ 70" },
  { label: "Skor Tertinggi", value: "82", delta: "-3 pts", trend: "down", tone: "red", compare: "Critical Position Vacancy" },
  { label: "Skor Terendah", value: "28", delta: "Tetap", trend: "flat", tone: "green", compare: "Industrial Relation Risk" },
  { label: "Risiko Memburuk", value: "4", share: "40,0%", delta: "+1", trend: "up", tone: "amber", compare: "Velocity bertanda positif" },
  { label: "Di Atas Appetite 50", value: "7", share: "70,0%", delta: "-1", trend: "down", tone: "red", compare: "Hanya 3 risiko dalam toleransi" },
];

export interface ProfilRow {
  risiko: string;
  score: number;
  level: "High" | "Medium" | "Low";
  velocity: number;
  impacted: string;
  kategori: string;
  owner: string;
  treatment: string;
}

export const profilRows: ProfilRow[] = [
  { risiko: "Critical Position Vacancy", score: 82, level: "High", velocity: -3, impacted: "1.245", kategori: "Struktural", owner: "HC & Bisnis", treatment: "Accelerated Succession Program" },
  { risiko: "Succession Risk", score: 78, level: "High", velocity: 5, impacted: "892", kategori: "Struktural", owner: "Talent Management", treatment: "Talent pool & pengembangan suksesor" },
  { risiko: "Turnover Risk", score: 74, level: "High", velocity: 8, impacted: "3.678", kategori: "Retensi", owner: "HC Holding", treatment: "Retention Program Karyawan Kunci" },
  { risiko: "Critical Skill Gap", score: 72, level: "High", velocity: -5, impacted: "2.341", kategori: "Kapabilitas", owner: "HC & Learning Center", treatment: "Upskilling digital & agronomi" },
  { risiko: "Leadership Gap", score: 61, level: "Medium", velocity: 4, impacted: "1.156", kategori: "Kapabilitas", owner: "Talent Management", treatment: "Leadership Development Program" },
  { risiko: "Performance Risk", score: 60, level: "Medium", velocity: -2, impacted: "2.987", kategori: "Kinerja", owner: "HC Performance", treatment: "Kalibrasi & PIP terarah" },
  { risiko: "Engagement Risk", score: 58, level: "Medium", velocity: -3, impacted: "4.210", kategori: "Budaya", owner: "HC Culture", treatment: "Program engagement & budaya" },
  { risiko: "Aging Workforce", score: 53, level: "Medium", velocity: 2, impacted: "6.385", kategori: "Demografi", owner: "Workforce Planning", treatment: "Regenerasi & transfer pengetahuan" },
  { risiko: "Labor Cost Risk", score: 35, level: "Low", velocity: -4, impacted: "—", kategori: "Biaya", owner: "HC Reward", treatment: "Kendali biaya tenaga kerja" },
  { risiko: "Industrial Relation Risk", score: 28, level: "Low", velocity: 0, impacted: "—", kategori: "Hubungan Industrial", owner: "Industrial Relations", treatment: "Forum bipartit rutin" },
];

export const profilBars = profilRows.map((r) => ({
  label: r.risiko,
  value: r.score,
  note: r.velocity > 0 ? `+${r.velocity} pts` : `${r.velocity} pts`,
}));

/** Pergerakan empat risiko utama sepanjang semester. */
export const profilTrend = [
  { name: "Jan", vacancy: 86, succession: 71, turnover: 63, skill: 79 },
  { name: "Feb", vacancy: 85, succession: 73, turnover: 66, skill: 78 },
  { name: "Mar", vacancy: 85, succession: 74, turnover: 68, skill: 76 },
  { name: "Apr", vacancy: 84, succession: 75, turnover: 70, skill: 75 },
  { name: "Mei", vacancy: 83, succession: 77, turnover: 72, skill: 73 },
  { name: "Jun", vacancy: 82, succession: 78, turnover: 74, skill: 72 },
];

export const profilNotes: DetailNote[] = [
  {
    title: "Turnover memburuk paling cepat",
    detail:
      "Naik 8 pts dalam sebulan dan 11 pts sejak Januari — satu-satunya risiko dengan velocity dua digit sepanjang semester.",
    tone: "red",
  },
  {
    title: "Tujuh risiko di luar appetite",
    detail: "Hanya Labor Cost dan Industrial Relation yang berada dalam toleransi ≤ 50; Aging Workforce persis di ambang atas.",
    tone: "amber",
  },
  {
    title: "Skill gap mulai turun",
    detail: "Turun 7 pts sejak Januari berkat program upskilling gelombang awal — bukti kontrol berjalan dapat menggeser skor.",
    tone: "green",
  },
];

export const profilDefinitions = [
  { term: "Skor risiko", text: "Kombinasi likelihood dan impact pada skala 0–100 sesuai matriks risiko people PTPN 2026." },
  { term: "Velocity", text: "Perubahan skor dibanding bulan lalu; positif berarti risiko memburuk." },
  { term: "Karyawan terdampak", text: "Estimasi populasi yang terkena dampak langsung bila risiko terealisasi." },
  { term: "Sumber", text: "People Risk Register · forum risiko bulanan · HRIS konsolidasi." },
];

/* ══════════════════════════════════════════════════════════════════
   Tren & Forecast Risiko
   ══════════════════════════════════════════════════════════════════ */

export const trenRisikoKpi: DetailKpi[] = [
  { label: "Skor Saat Ini", value: "68", suffix: "/100", delta: "-4 pts", trend: "down", tone: "green", compare: "Mei 2026 vs April" },
  { label: "Puncak 12 Bulan", value: "76", delta: "Agu 2025", trend: "flat", tone: "red", compare: "Turun 8 pts sejak puncak" },
  { label: "Rata-rata 12 Bulan", value: "71,3", delta: "-1,2", trend: "down", tone: "amber", compare: "Jun 2025 – Mei 2026" },
  { label: "Proyeksi Des 2026", value: "57", delta: "-11 pts", trend: "down", tone: "green", compare: "Titik tengah forecast" },
  { label: "Rentang Keyakinan", value: "51–63", delta: "±6 pts", trend: "flat", tone: "amber", compare: "Confidence band Des 2026" },
  { label: "Estimasi Masuk Appetite", value: "Q3", suffix: "2027", delta: "Skenario optimistis", trend: "flat", tone: "red", compare: "Batas bawah band menyentuh 50" },
];

export interface TrenRisikoRow {
  periode: string;
  skor: string;
  delta: string;
  band: string;
  penggerak: string;
  status: "Aktual" | "Forecast";
}

export const trenRisikoRows: TrenRisikoRow[] = [
  { periode: "Agu 2025", skor: "76", delta: "+4", band: "—", penggerak: "Puncak kekosongan posisi kritis pasca-restrukturisasi", status: "Aktual" },
  { periode: "Des 2025", skor: "68", delta: "-8", band: "—", penggerak: "Rekrutmen massal dan mobilitas internal berjalan", status: "Aktual" },
  { periode: "Feb 2026", skor: "72", delta: "+4", band: "—", penggerak: "Lonjakan turnover talenta kritis awal tahun", status: "Aktual" },
  { periode: "Apr 2026", skor: "72", delta: "0", band: "—", penggerak: "Perbaikan skill gap tertahan kenaikan suksesi", status: "Aktual" },
  { periode: "Mei 2026", skor: "68", delta: "-4", band: "—", penggerak: "Retention program mulai menekan turnover risk", status: "Aktual" },
  { periode: "Agu 2026", skor: "63", delta: "-5", band: "59 – 67", penggerak: "Succession program menutup 24 posisi kritis", status: "Forecast" },
  { periode: "Okt 2026", skor: "60", delta: "-3", band: "54 – 65", penggerak: "Upskilling digital & agronomi berjalan penuh", status: "Forecast" },
  { periode: "Des 2026", skor: "57", delta: "-3", band: "51 – 63", penggerak: "Leadership program dan review beban kerja", status: "Forecast" },
];

export const trenRisikoBanding = [
  { label: "Skenario Eksekusi Penuh", value: 51, note: "Batas bawah band Des 2026" },
  { label: "Titik Tengah Forecast", value: 57, note: "Skenario dasar" },
  { label: "Skenario Tertunda", value: 63, note: "Batas atas band Des 2026" },
  { label: "Risk Appetite", value: 50, note: "Ambang toleransi grup" },
];

export const trenRisikoNotes: DetailNote[] = [
  {
    title: "Forecast belum menyentuh appetite",
    detail:
      "Titik tengah proyeksi berhenti di 57 pada Des 2026; hanya batas bawah band (51) yang mendekati appetite 50, dan itu pun menuntut seluruh treatment tuntas tepat waktu.",
    tone: "red",
  },
  {
    title: "Pola musiman awal tahun",
    detail: "Skor naik pada Jan–Feb dua tahun berturut-turut seiring siklus pengunduran diri pasca-bonus; antisipasi perlu dijadwalkan sejak Desember.",
    tone: "amber",
  },
  {
    title: "Tren struktural menurun",
    detail: "Dari puncak 76 (Agu 2025) ke 68 — penurunan 8 pts dalam sembilan bulan menunjukkan kontrol eksisting bekerja, meski lambat.",
    tone: "green",
  },
];

export const trenRisikoDefinitions = [
  { term: "Overall risk score", text: "Agregasi tertimbang sepuluh risiko people pada register, skala 0–100." },
  { term: "Forecast", text: "Proyeksi model deret waktu dengan asumsi treatment berjalan sesuai jadwal." },
  { term: "Confidence band", text: "Rentang keyakinan 80% atas proyeksi; melebar seiring jarak horizon." },
  { term: "Sumber", text: "People Risk Register · model forecast HC Analytics · data per 31 Mei 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   Early Warning Indicators
   ══════════════════════════════════════════════════════════════════ */

export const ewKpi: DetailKpi[] = [
  { label: "Sinyal Aktif", value: "14", delta: "+3", trend: "up", tone: "amber", compare: "Leading indicator terpantau" },
  { label: "Sinyal Merah", value: "6", share: "42,9%", delta: "+2", trend: "up", tone: "red", compare: "Melewati ambang kritis" },
  { label: "Risiko Terpicu", value: "3", delta: "Tetap", trend: "flat", tone: "red", compare: "Turnover, Succession, Skill Gap" },
  { label: "Talenta Kritis Berisiko", value: "47", delta: "+9", trend: "up", tone: "red", compare: "Menunjukkan ≥ 3 sinyal prekursor" },
  { label: "Prediksi Attrition 12 Bln", value: "72", suffix: "%", delta: "+6 ppts", trend: "up", tone: "red", compare: "Pada kelompok 47 talenta" },
  { label: "Lead Time Rata-rata", value: "4,5", suffix: "bln", delta: "-0,5", trend: "down", tone: "amber", compare: "Jarak sinyal ke materialisasi" },
];

export interface EwRow {
  sinyal: string;
  risiko: string;
  nilai: string;
  ambang: string;
  arah: "Memburuk" | "Membaik" | "Stabil";
  leadTime: string;
  status: "Merah" | "Kuning" | "Hijau";
  tindakan: string;
}

export const ewRows: EwRow[] = [
  { sinyal: "Engagement index", risiko: "Turnover Risk", nilai: "68", ambang: "≥ 75", arah: "Memburuk", leadTime: "6 bln", status: "Merah", tindakan: "Pulse survey bulanan pada unit terdampak" },
  { sinyal: "Absensi tidak terencana", risiko: "Turnover Risk", nilai: "4,8%", ambang: "≤ 3,5%", arah: "Memburuk", leadTime: "4 bln", status: "Merah", tindakan: "Audit beban kerja & pola shift" },
  { sinyal: "Mobilitas internal", risiko: "Turnover Risk", nilai: "6,2%", ambang: "≥ 9%", arah: "Memburuk", leadTime: "5 bln", status: "Merah", tindakan: "Buka jalur karier lintas entitas" },
  { sinyal: "Daya saing kompensasi", risiko: "Turnover Risk", nilai: "P38", ambang: "≥ P50", arah: "Memburuk", leadTime: "6 bln", status: "Merah", tindakan: "Benchmark & perbaikan kompensasi" },
  { sinyal: "Pensiun incumbent < 18 bulan", risiko: "Succession Risk", nilai: "31 posisi", ambang: "≤ 20", arah: "Memburuk", leadTime: "12 bln", status: "Merah", tindakan: "Percepat nominasi & knowledge transfer" },
  { sinyal: "Pipeline suksesor Ready-Now", risiko: "Succession Risk", nilai: "5 dari 12", ambang: "≥ 9", arah: "Memburuk", leadTime: "9 bln", status: "Merah", tindakan: "Akselerasi kandidat prioritas" },
  { sinyal: "Adopsi digital tools", risiko: "Critical Skill Gap", nilai: "66%", ambang: "≥ 85%", arah: "Membaik", leadTime: "6 bln", status: "Kuning", tindakan: "Pendampingan pasca-pelatihan" },
  { sinyal: "Training completion rate", risiko: "Critical Skill Gap", nilai: "74%", ambang: "≥ 85%", arah: "Membaik", leadTime: "5 bln", status: "Kuning", tindakan: "Blokir jadwal belajar wajib" },
  { sinyal: "Rasio lembur", risiko: "Beban Kerja Berlebih", nilai: "12,4%", ambang: "≤ 10%", arah: "Stabil", leadTime: "3 bln", status: "Kuning", tindakan: "Redistribusi beban kerja unit padat" },
  { sinyal: "Keluhan hubungan industrial", risiko: "Industrial Relation Risk", nilai: "8 kasus", ambang: "≤ 12", arah: "Membaik", leadTime: "4 bln", status: "Hijau", tindakan: "Pertahankan forum bipartit rutin" },
];

export const ewBars = [
  { label: "Turnover Risk", value: 4, note: "4 sinyal merah" },
  { label: "Succession Risk", value: 2, note: "2 sinyal merah" },
  { label: "Critical Skill Gap", value: 2, note: "2 sinyal kuning" },
  { label: "Beban Kerja Berlebih", value: 1, note: "1 sinyal kuning" },
  { label: "Industrial Relation", value: 1, note: "1 sinyal hijau" },
];

export const ewTrend = [
  { name: "Jan", merah: 2, kuning: 5, hijau: 4 },
  { name: "Feb", merah: 3, kuning: 5, hijau: 4 },
  { name: "Mar", merah: 4, kuning: 4, hijau: 4 },
  { name: "Apr", merah: 4, kuning: 5, hijau: 3 },
  { name: "Mei", merah: 6, kuning: 5, hijau: 3 },
];

export const ewNotes: DetailNote[] = [
  {
    title: "Empat sinyal turnover menyala bersamaan",
    detail:
      "Engagement, absensi, mobilitas internal, dan daya saing kompensasi semuanya melewati ambang — pola yang secara historis mendahului lonjakan attrition dalam 4–6 bulan.",
    tone: "red",
  },
  {
    title: "47 talenta kritis di zona bahaya",
    detail: "Menunjukkan minimal tiga sinyal prekursor sekaligus dengan prediksi attrition 72% dalam 12 bulan; kehilangan mereka langsung memukul pipeline suksesi.",
    tone: "red",
  },
  {
    title: "Sinyal kapabilitas mulai membaik",
    detail: "Adopsi digital tools dan training completion bergerak naik dua bulan berturut-turut, meski keduanya masih di bawah ambang.",
    tone: "green",
  },
];

export const ewDefinitions = [
  { term: "Early warning indicator", text: "Metrik prekursor yang bergerak lebih dulu sebelum risiko terealisasi." },
  { term: "Ambang", text: "Batas yang memicu status sinyal; ditetapkan dari data historis dua tahun." },
  { term: "Lead time", text: "Jarak rata-rata antara sinyal melewati ambang dan risiko benar-benar terealisasi." },
  { term: "Sumber", text: "HC Analytics · survei engagement · payroll & absensi · Learning Management System." },
];

/* ══════════════════════════════════════════════════════════════════
   Efektivitas Kontrol
   ══════════════════════════════════════════════════════════════════ */

export const kontrolKpi: DetailKpi[] = [
  { label: "Kontrol Terdaftar", value: "12", delta: "+2", trend: "up", tone: "neutral", compare: "Menutup 5 risiko utama" },
  { label: "Efektivitas Rata-rata", value: "53", suffix: "%", delta: "+5 ppts", trend: "up", tone: "amber", compare: "Target minimum 70%" },
  { label: "Kontrol Efektif (≥ 60%)", value: "2", suffix: "/5", delta: "+1", trend: "up", tone: "green", compare: "Leadership & Skill Gap" },
  { label: "Kontrol Lemah (< 50%)", value: "2", suffix: "/5", delta: "-1", trend: "down", tone: "red", compare: "Vacancy & Turnover" },
  { label: "Penurunan Inherent→Residual", value: "54", suffix: "pts", delta: "+8", trend: "up", tone: "green", compare: "Total lima risiko utama" },
  { label: "Risiko Residual Tertinggi", value: "82", delta: "-8 dari inherent", trend: "down", tone: "red", compare: "Critical Position Vacancy" },
];

export interface KontrolRow {
  risiko: string;
  inherent: number;
  residual: number;
  penurunan: number;
  kontrol: string;
  efektivitas: number;
  uji: string;
  gap: string;
  status: "Efektif" | "Cukup" | "Lemah";
}

export const kontrolRows: KontrolRow[] = [
  { risiko: "Critical Position Vacancy", inherent: 90, residual: 82, penurunan: 8, kontrol: "Succession program, mobilitas internal", efektivitas: 45, uji: "Mei 2026", gap: "Pipeline internal tidak menutup 24 posisi", status: "Lemah" },
  { risiko: "Succession Risk", inherent: 88, residual: 78, penurunan: 10, kontrol: "Talent pool, pengembangan suksesor", efektivitas: 52, uji: "Mei 2026", gap: "Kesiapan kandidat rata-rata masih > 12 bulan", status: "Cukup" },
  { risiko: "Turnover Risk", inherent: 84, residual: 74, penurunan: 10, kontrol: "Retention program, engagement survey", efektivitas: 48, uji: "Apr 2026", gap: "Kompensasi belum menyentuh P50 pasar", status: "Lemah" },
  { risiko: "Critical Skill Gap", inherent: 85, residual: 72, penurunan: 13, kontrol: "Upskilling digital & agronomi", efektivitas: 58, uji: "Mei 2026", gap: "Pendampingan pasca-pelatihan belum terstruktur", status: "Cukup" },
  { risiko: "Leadership Gap", inherent: 74, residual: 61, penurunan: 13, kontrol: "Leadership development program", efektivitas: 62, uji: "Mar 2026", gap: "Cakupan baru 46% populasi manajerial", status: "Efektif" },
];

export const kontrolBars = kontrolRows.map((r) => ({
  label: r.risiko,
  value: r.efektivitas,
  note: `${r.inherent} → ${r.residual}`,
}));

export const kontrolTrend = [
  { name: "Q3 2025", vacancy: 34, succession: 41, turnover: 38, skill: 44, leadership: 51 },
  { name: "Q4 2025", vacancy: 38, succession: 45, turnover: 41, skill: 48, leadership: 55 },
  { name: "Q1 2026", vacancy: 42, succession: 49, turnover: 45, skill: 53, leadership: 58 },
  { name: "Q2 2026", vacancy: 45, succession: 52, turnover: 48, skill: 58, leadership: 62 },
];

export const kontrolNotes: DetailNote[] = [
  {
    title: "Kontrol terlemah pada risiko terbesar",
    detail:
      "Critical Position Vacancy berskor residual tertinggi (82) namun efektivitas kontrolnya paling rendah (45%) — kombinasi paling berbahaya di register.",
    tone: "red",
  },
  {
    title: "Tidak ada kontrol mencapai target 70%",
    detail: "Tertinggi 62% pada Leadership Development; artinya seluruh risiko utama masih menyisakan residual di atas appetite.",
    tone: "amber",
  },
  {
    title: "Efektivitas naik konsisten",
    detail: "Seluruh lima kontrol membaik empat kuartal berturut-turut, rata-rata +5 ppts per kuartal.",
    tone: "green",
  },
];

export const kontrolDefinitions = [
  { term: "Inherent risk", text: "Skor risiko sebelum kontrol mitigasi diperhitungkan." },
  { term: "Residual risk", text: "Skor risiko tersisa setelah kontrol berjalan — sama dengan skor register saat ini." },
  { term: "Efektivitas kontrol", text: "Porsi risiko inherent yang berhasil ditekan kontrol, hasil pengujian desain dan implementasi." },
  { term: "Sumber", text: "People Risk Register · uji kontrol Satuan Pengawasan Intern · data per 31 Mei 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   Interdependensi Risiko
   ══════════════════════════════════════════════════════════════════ */

export const interdepKpi: DetailKpi[] = [
  { label: "Rantai Amplifikasi", value: "3", delta: "+1", trend: "up", tone: "amber", compare: "Teridentifikasi forum risiko" },
  { label: "Simpul dalam Rantai Utama", value: "7", delta: "Tetap", trend: "flat", tone: "neutral", compare: "Skill Gap → Business Risk" },
  { label: "Tingkat Amplifikasi", value: "HIGH", delta: "Naik", trend: "up", tone: "red", compare: "Rantai skill gap–turnover" },
  { label: "Risiko Simpul Ganda", value: "4", delta: "+1", trend: "up", tone: "red", compare: "Muncul di ≥ 2 rantai" },
  { label: "Efek Berantai ke Skor", value: "+11", suffix: "pts", delta: "+2", trend: "up", tone: "red", compare: "Kontribusi amplifikasi ke skor 68" },
  { label: "Titik Putus Terbaik", value: "Beban Kerja", delta: "-7 pts", trend: "down", tone: "green", compare: "Simpul dengan leverage tertinggi" },
];

export interface RantaiRow {
  rantai: string;
  jalur: string;
  pemicu: string;
  dampakAkhir: string;
  amplifikasi: "High" | "Medium" | "Low";
  kontribusi: string;
  titikPutus: string;
  kontrol: string;
}

export const rantaiRows: RantaiRow[] = [
  { rantai: "Rantai 1 — Kapabilitas", jalur: "Skill Gap → Produktivitas ↓ → Beban Kerja ↑ → Turnover ↑ → Succession Risk ↑", pemicu: "Critical Skill Gap (72)", dampakAkhir: "Business Risk ↑", amplifikasi: "High", kontribusi: "+11 pts", titikPutus: "Beban Kerja ↑", kontrol: "Review struktur & redistribusi beban kerja" },
  { rantai: "Rantai 2 — Regenerasi", jalur: "Aging Workforce → Pensiun massal → Vacancy ↑ → Knowledge loss → Produktivitas ↓", pemicu: "Aging Workforce (53)", dampakAkhir: "Produktivitas ↓", amplifikasi: "Medium", kontribusi: "+6 pts", titikPutus: "Knowledge loss", kontrol: "Knowledge transfer & shadowing incumbent" },
  { rantai: "Rantai 3 — Retensi Biaya", jalur: "Kompensasi tidak kompetitif → Engagement ↓ → Turnover ↑ → Labor cost rekrutmen ↑", pemicu: "Kompensasi Tidak Kompetitif (76)", dampakAkhir: "Labor Cost Risk ↑", amplifikasi: "Medium", kontribusi: "+5 pts", titikPutus: "Engagement ↓", kontrol: "Program engagement & benchmark kompensasi" },
];

export const interdepSimpul = [
  { label: "Turnover Risk", value: 3, note: "Muncul di 3 rantai" },
  { label: "Beban Kerja Berlebih", value: 2, note: "Muncul di 2 rantai" },
  { label: "Engagement Risk", value: 2, note: "Muncul di 2 rantai" },
  { label: "Critical Position Vacancy", value: 2, note: "Muncul di 2 rantai" },
  { label: "Critical Skill Gap", value: 1, note: "Pemicu rantai utama" },
  { label: "Aging Workforce", value: 1, note: "Pemicu rantai regenerasi" },
];

export const interdepNotes: DetailNote[] = [
  {
    title: "Turnover jadi simpul persilangan",
    detail:
      "Muncul pada ketiga rantai amplifikasi; menahan turnover memberi efek ganda karena memutus tiga jalur sekaligus.",
    tone: "red",
  },
  {
    title: "Amplifikasi menyumbang 11 pts",
    detail:
      "Skor grup 68 mengandung sekitar 11 pts yang berasal dari efek berantai, bukan dari risiko yang berdiri sendiri — mitigasi terpisah per risiko tidak akan menghapusnya.",
    tone: "amber",
  },
  {
    title: "Beban kerja titik putus termurah",
    detail: "Memutus simpul beban kerja diperkirakan menurunkan skor 7 pts dengan anggaran Rp 2,8 M — leverage tertinggi di antara seluruh titik putus.",
    tone: "green",
  },
];

export const interdepDefinitions = [
  { term: "Rantai amplifikasi", text: "Urutan risiko yang saling menguatkan sehingga dampak gabungannya melebihi jumlah dampak masing-masing." },
  { term: "Titik putus", text: "Simpul yang paling murah dan paling efektif diintervensi untuk menghentikan rantai." },
  { term: "Kontribusi", text: "Estimasi porsi overall risk score yang berasal dari efek amplifikasi rantai tersebut." },
  { term: "Sumber", text: "Analisis kausal forum risiko Q2 2026 · People Risk Register." },
];

/* ══════════════════════════════════════════════════════════════════
   Eksposur per Lini Bisnis
   ══════════════════════════════════════════════════════════════════ */

export const eksposurKpi: DetailKpi[] = [
  { label: "Total Eksposur", value: "Rp 128,6", suffix: "M", delta: "+6,2%", trend: "up", tone: "red", compare: "vs Apr 2026" },
  { label: "Lini Tertinggi", value: "Rp 68,4", suffix: "M", share: "53%", delta: "+7,8%", trend: "up", tone: "red", compare: "Palm Oil" },
  { label: "Skor Risiko Tertinggi", value: "74", delta: "+3 pts", trend: "up", tone: "red", compare: "Palm Oil" },
  { label: "Skor Risiko Terendah", value: "42", delta: "-2 pts", trend: "down", tone: "green", compare: "Supporting & Corporate" },
  { label: "Eksposur per Karyawan", value: "Rp 10,0", suffix: "jt", delta: "+2,1%", trend: "up", tone: "amber", compare: "12.842 karyawan terdampak" },
  { label: "Konsentrasi Dua Teratas", value: "72", suffix: "%", delta: "+1 ppts", trend: "up", tone: "amber", compare: "Palm Oil & Rubber" },
];

export interface EksposurRow {
  bisnis: string;
  skor: number;
  eksposur: string;
  share: number;
  karyawan: string;
  driver: string;
  kontribusiEbitda: string;
  status: "Kritis" | "Waspada" | "Terkendali";
}

export const eksposurRows: EksposurRow[] = [
  { bisnis: "Palm Oil", skor: 74, eksposur: "Rp 68,4 M", share: 53, karyawan: "6.842", driver: "Turnover, Vacancy posisi kebun", kontribusiEbitda: "61%", status: "Kritis" },
  { bisnis: "Rubber", skor: 61, eksposur: "Rp 24,2 M", share: 19, karyawan: "2.318", driver: "Aging workforce, skill gap", kontribusiEbitda: "14%", status: "Waspada" },
  { bisnis: "Sugar", skor: 58, eksposur: "Rp 18,6 M", share: 14, karyawan: "1.874", driver: "Beban kerja musim giling", kontribusiEbitda: "12%", status: "Waspada" },
  { bisnis: "Tea", skor: 49, eksposur: "Rp 10,3 M", share: 8, karyawan: "1.096", driver: "Engagement, kompensasi", kontribusiEbitda: "7%", status: "Terkendali" },
  { bisnis: "Supporting & Corporate", skor: 42, eksposur: "Rp 7,1 M", share: 6, karyawan: "712", driver: "Skill gap digital", kontribusiEbitda: "6%", status: "Terkendali" },
];

export const eksposurBars = eksposurRows.map((r) => ({
  label: r.bisnis,
  value: Number(r.eksposur.replace("Rp ", "").replace(" M", "").replace(",", ".")),
  note: `${r.share}% · skor ${r.skor}`,
}));

export const eksposurTrend = [
  { name: "Jan", palm: 58.2, rubber: 21.4, sugar: 16.8, tea: 9.6 },
  { name: "Feb", palm: 60.1, rubber: 22.0, sugar: 17.2, tea: 9.8 },
  { name: "Mar", palm: 62.8, rubber: 22.6, sugar: 17.6, tea: 10.0 },
  { name: "Apr", palm: 65.3, rubber: 23.4, sugar: 18.1, tea: 10.1 },
  { name: "Mei", palm: 68.4, rubber: 24.2, sugar: 18.6, tea: 10.3 },
];

export const eksposurNotes: DetailNote[] = [
  {
    title: "Eksposur menumpuk di penyumbang laba utama",
    detail:
      "Palm Oil menanggung 53% eksposur people risk sekaligus menyumbang 61% EBITDA grup — gangguan tenaga kerja di lini ini langsung memukul kinerja konsolidasi.",
    tone: "red",
  },
  {
    title: "Konsentrasi naik terus",
    detail: "Dua lini teratas kini 72% dari total eksposur, naik 1 ppts dalam sebulan; diversifikasi risiko tidak terjadi.",
    tone: "amber",
  },
  {
    title: "Tea dan korporat terkendali",
    detail: "Skor 49 dan 42 dengan eksposur gabungan Rp 17,4 M; keduanya sudah mendekati risk appetite grup.",
    tone: "green",
  },
];

export const eksposurDefinitions = [
  { term: "Eksposur finansial", text: "Estimasi kerugian bila risiko people terealisasi: biaya penggantian, kehilangan produktivitas, dan gangguan operasi." },
  { term: "Skor lini bisnis", text: "Agregasi risiko people pada unit-unit yang mendukung lini bisnis tersebut." },
  { term: "Kontribusi EBITDA", text: "Porsi lini bisnis terhadap EBITDA grup 2026 — dipakai menilai materialitas eksposur." },
  { term: "Sumber", text: "People Risk Register · Corporate Performance Dashboard · RKAP 2026." },
];
