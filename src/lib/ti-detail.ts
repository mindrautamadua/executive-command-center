/**
 * Data statis halaman detail kartu Talent Intelligence
 * (/talent-intelligence/<slug>). Periode acuan: Mei 2026 (YTD),
 * data per 31 Mei 2026.
 *
 * Seluruh angka agregat harus konsisten dengan `ti-data.ts` sebagai sumber
 * ringkasan di halaman utama: total talenta 3.742, HiPo 1.068, Ready Now 412,
 * talenta berisiko 186 (86 high risk), 208 posisi kritikal dengan 27 tanpa
 * suksesor, dan Talent Intelligence Index 74.
 */

import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";

/** Tujuh entitas grup, dipakai sebagai sumbu perbandingan lintas halaman. */
export const tiEntitas = [
  "PTPN I",
  "PTPN I Regional 1",
  "PTPN III",
  "PTPN IV",
  "PTPN IV Regional 3",
  "PTPN IV Regional 4",
  "Holding & SBU",
] as const;

/** Definisi umum yang muncul di hampir semua halaman detail. */
export const tiCommonDefinitions = [
  {
    term: "Talenta Aktif",
    text: "Pekerja tetap yang masuk cakupan siklus talent review 2026 (level Supervisor ke atas dan jalur spesialis kritikal).",
  },
  {
    term: "Sumber Data",
    text: "Talent Management System (siklus review Feb–Apr 2026), HRIS konsolidasi, dan asesmen kapabilitas internal.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   1. Talent Portfolio (9 Box Grid)
   ══════════════════════════════════════════════════════════════════════ */

export const nineBoxKpi: DetailKpi[] = [
  {
    label: "Total Talenta Dipetakan",
    value: "3.742",
    suffix: "orang",
    delta: "6,8%",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Kuadran Atas (Box 7–9)",
    value: "2.261",
    share: "60,4%",
    delta: "3,1 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Star (High/High)",
    value: "1.068",
    share: "28,5%",
    delta: "8,4%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Core Performer",
    value: "762",
    share: "20,4%",
    delta: "1,2 ppts",
    trend: "down",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Zona Perbaikan (Box 1–3)",
    value: "369",
    share: "9,9%",
    delta: "0,8 ppts",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Naik Kelas Kotak (YTD)",
    value: "284",
    share: "7,6%",
    delta: "22 orang",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
];

export interface NineBoxDetail {
  /** Nomor kotak standar 1–9 (1 = performance & potential terendah). */
  box: number;
  name: string;
  value: number;
  pct: string;
  tone: "lavender" | "greenSoft" | "green" | "amber" | "amberSoft" | "red";
  /** Tindakan talenta yang disepakati untuk kotak ini. */
  action: string;
}

/**
 * Urutan mengikuti pembacaan grid: baris Potential High → Low,
 * kolom Performance Low → High (sama dengan `tiNineBox`).
 */
export const nineBoxDetail: NineBoxDetail[][] = [
  [
    { box: 7, name: "Enigma", value: 108, pct: "2,9%", tone: "lavender", action: "Diagnosa hambatan kinerja" },
    { box: 8, name: "Growth Talent", value: 248, pct: "6,6%", tone: "greenSoft", action: "Stretch assignment" },
    { box: 9, name: "Star", value: 1068, pct: "28,5%", tone: "green", action: "Akselerasi suksesi" },
  ],
  [
    { box: 4, name: "Dilemma", value: 242, pct: "6,5%", tone: "amber", action: "Coaching intensif" },
    { box: 5, name: "Core Player", value: 762, pct: "20,4%", tone: "amberSoft", action: "Pengembangan reguler" },
    { box: 6, name: "High Performer", value: 945, pct: "25,3%", tone: "greenSoft", action: "Perluas cakupan peran" },
  ],
  [
    { box: 1, name: "Underperformer", value: 115, pct: "3,1%", tone: "red", action: "Performance improvement plan" },
    { box: 2, name: "Effective", value: 160, pct: "4,3%", tone: "red", action: "Perkuat kompetensi inti" },
    { box: 3, name: "Trusted Professional", value: 94, pct: "2,5%", tone: "red", action: "Pertahankan di peran spesialis" },
  ],
];

export interface NineBoxOrgRow {
  name: string;
  talenta: number;
  star: number;
  kuadranAtas: number;
  core: number;
  zonaPerbaikan: number;
  /** Persentase Star terhadap talenta entitas. */
  starPct: number;
  naikKelas: number;
}

export const nineBoxByOrg: NineBoxOrgRow[] = [
  { name: "PTPN I", talenta: 486, star: 132, kuadranAtas: 292, core: 98, zonaPerbaikan: 52, starPct: 27.2, naikKelas: 34 },
  { name: "PTPN I Regional 1", talenta: 412, star: 104, kuadranAtas: 238, core: 92, zonaPerbaikan: 48, starPct: 25.2, naikKelas: 26 },
  { name: "PTPN III", talenta: 664, star: 198, kuadranAtas: 412, core: 132, zonaPerbaikan: 62, starPct: 29.8, naikKelas: 54 },
  { name: "PTPN IV", talenta: 742, star: 226, kuadranAtas: 462, core: 148, zonaPerbaikan: 68, starPct: 30.5, naikKelas: 62 },
  { name: "PTPN IV Regional 3", talenta: 548, star: 148, kuadranAtas: 328, core: 118, zonaPerbaikan: 58, starPct: 27.0, naikKelas: 38 },
  { name: "PTPN IV Regional 4", talenta: 428, star: 112, kuadranAtas: 254, core: 96, zonaPerbaikan: 44, starPct: 26.2, naikKelas: 28 },
  { name: "Holding & SBU", talenta: 462, star: 148, kuadranAtas: 275, core: 78, zonaPerbaikan: 37, starPct: 32.0, naikKelas: 42 },
];

/** Pergeseran komposisi kuadran 9-box, enam titik semester. */
export const nineBoxTrend = [
  { name: "Nov 23", star: 24.1, highPerformer: 23.4, core: 22.8, zonaPerbaikan: 12.4 },
  { name: "Mei 24", star: 25.0, highPerformer: 23.9, core: 22.4, zonaPerbaikan: 11.8 },
  { name: "Nov 24", star: 25.8, highPerformer: 24.3, core: 22.0, zonaPerbaikan: 11.2 },
  { name: "Mei 25", star: 26.6, highPerformer: 24.6, core: 21.6, zonaPerbaikan: 10.7 },
  { name: "Nov 25", star: 27.5, highPerformer: 25.0, core: 20.9, zonaPerbaikan: 10.2 },
  { name: "Mei 26", star: 28.5, highPerformer: 25.3, core: 20.4, zonaPerbaikan: 9.9 },
];

export const nineBoxNotes: DetailNote[] = [
  {
    title: "Kuadran atas tumbuh konsisten",
    detail:
      "Box 7–9 naik dari 57,3% (Mei 2025) ke 60,4%. Pertumbuhan terbesar di Star (+8,4% orang), didorong siklus asesmen ulang 1.240 talenta.",
    tone: "green",
  },
  {
    title: "108 Enigma perlu diagnosa",
    detail:
      "Potensi tinggi tetapi kinerja rendah. Pola dominan: penempatan tidak sesuai profil (46%) dan efektivitas atasan rendah (31%).",
    tone: "amber",
  },
  {
    title: "Konsentrasi Star tidak merata",
    detail:
      "Holding & SBU 32,0% versus PTPN I Regional 1 25,2%. Selisih 6,8 ppts membuka peluang rotasi silang entitas untuk pemerataan kualitas pipeline.",
    tone: "blue",
  },
  {
    title: "369 talenta di zona perbaikan",
    detail:
      "Box 1–3 setara 9,9% populasi. 115 Underperformer wajib masuk performance improvement plan dengan tinjauan tiap kuartal.",
    tone: "red",
  },
];

export const nineBoxDefinitions = [
  {
    term: "Performance",
    text: "Rata-rata skor kinerja dua siklus terakhir (skala 1–5); High ≥ 4,0, Moderate 3,0–3,9, Low < 3,0.",
  },
  {
    term: "Potential",
    text: "Komposit learning agility, aspirasi, dan kapasitas kepemimpinan hasil asesmen panel talent review.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   2. Talent Pipeline by Readiness
   ══════════════════════════════════════════════════════════════════════ */

export const pipelineKpi: DetailKpi[] = [
  {
    label: "Ready Now",
    value: "412",
    share: "11,0%",
    delta: "7,3%",
    trend: "down",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "Ready in 1–2 Tahun",
    value: "656",
    share: "17,5%",
    delta: "9,1%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Ready in 3–5 Tahun",
    value: "1.124",
    share: "30,0%",
    delta: "5,4%",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Future Potential",
    value: "1.550",
    share: "41,5%",
    delta: "6,2%",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Rasio Pipeline / Posisi Kritikal",
    value: "5,1",
    suffix: "x",
    delta: "0,4x",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Waktu Rata-rata Naik Kelas",
    value: "19",
    suffix: "bln",
    delta: "2 bln",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface PipelineStageDetail {
  label: string;
  value: number;
  pct: string;
  color: string;
  width: number;
  /** Konversi ke tahap berikutnya dalam 12 bulan terakhir. */
  konversi: string;
  keterangan: string;
}

export const pipelineStages: PipelineStageDetail[] = [
  {
    label: "Ready Now",
    value: 412,
    pct: "11,0%",
    color: "#0f7a44",
    width: 42,
    konversi: "68 dipromosikan",
    keterangan: "Siap mengisi posisi kritikal dalam 6 bulan tanpa development tambahan.",
  },
  {
    label: "Ready in 1–2 Tahun",
    value: 656,
    pct: "17,5%",
    color: "#3cae6a",
    width: 58,
    konversi: "142 naik ke Ready Now",
    keterangan: "Butuh satu penugasan penguatan atau satu program akselerasi kepemimpinan.",
  },
  {
    label: "Ready in 3–5 Tahun",
    value: 1124,
    pct: "30,0%",
    color: "#f2c53d",
    width: 76,
    konversi: "218 naik ke 1–2 Tahun",
    keterangan: "Butuh dua sampai tiga siklus pengembangan dan eksposur lintas fungsi.",
  },
  {
    label: "Future Potential",
    value: 1550,
    pct: "41,5%",
    color: "#cbd5e1",
    width: 94,
    konversi: "306 naik ke 3–5 Tahun",
    keterangan: "Talenta muda dengan potensi terverifikasi, belum masuk pool suksesi formal.",
  },
];

export interface PipelineJobFamilyRow {
  family: string;
  talenta: number;
  readyNow: number;
  ready12: number;
  ready35: number;
  future: number;
  /** Posisi kritikal yang dilayani job family ini. */
  posisi: number;
}

export const pipelineByJobFamily: PipelineJobFamilyRow[] = [
  { family: "Operasi Kebun & Tanaman", talenta: 1124, readyNow: 132, ready12: 208, ready35: 342, future: 442, posisi: 82 },
  { family: "Pengolahan & Pabrik", talenta: 786, readyNow: 96, ready12: 142, ready35: 236, future: 312, posisi: 48 },
  { family: "Teknik & Pemeliharaan", talenta: 468, readyNow: 48, ready12: 82, ready35: 142, future: 196, posisi: 22 },
  { family: "Keuangan & Akuntansi", talenta: 386, readyNow: 34, ready12: 68, ready35: 118, future: 166, posisi: 26 },
  { family: "SDM & Umum", talenta: 342, readyNow: 38, ready12: 62, ready35: 104, future: 138, posisi: 14 },
  { family: "Komersial & Pemasaran", talenta: 316, readyNow: 32, ready12: 54, ready35: 96, future: 134, posisi: 10 },
  { family: "Sustainability & QHSE", talenta: 320, readyNow: 32, ready12: 40, ready35: 86, future: 162, posisi: 6 },
];

/** Komposisi readiness (persen populasi talenta) enam semester terakhir. */
export const pipelineTrend = [
  { name: "Nov 23", readyNow: 12.8, ready12: 14.6, ready35: 27.4, future: 45.2 },
  { name: "Mei 24", readyNow: 12.4, ready12: 15.2, ready35: 28.1, future: 44.3 },
  { name: "Nov 24", readyNow: 12.1, ready12: 15.9, ready35: 28.7, future: 43.3 },
  { name: "Mei 25", readyNow: 11.8, ready12: 16.5, ready35: 29.1, future: 42.6 },
  { name: "Nov 25", readyNow: 11.4, ready12: 17.0, ready35: 29.6, future: 42.0 },
  { name: "Mei 26", readyNow: 11.0, ready12: 17.5, ready35: 30.0, future: 41.5 },
];

export const pipelineNotes: DetailNote[] = [
  {
    title: "Ready Now menyusut lima semester berturut",
    detail:
      "Turun dari 12,8% ke 11,0% karena 68 promosi keluar dari pool tidak seimbang dengan 142 kenaikan kelas masuk. Ini penyebab utama Succession Ready Now −7,3%.",
    tone: "red",
  },
  {
    title: "Pool 1–2 tahun menebal",
    detail:
      "656 talenta (+9,1%) menjadi lever tercepat. Akselerasi 54 di antaranya cukup untuk menutup 27 posisi kritikal tanpa suksesor dengan cadangan dua kandidat per posisi.",
    tone: "green",
  },
  {
    title: "Keuangan paling tipis",
    detail:
      "Rasio Ready Now terhadap posisi kritikal hanya 1,3x (34 talenta untuk 26 posisi), terendah dari seluruh job family.",
    tone: "amber",
  },
  {
    title: "Waktu naik kelas membaik",
    detail:
      "Rata-rata 19 bulan dari 21 bulan, efek program akselerasi kepemimpinan yang diikuti 812 talenta.",
    tone: "blue",
  },
];

export const pipelineDefinitions = [
  {
    term: "Readiness",
    text: "Estimasi waktu kesiapan mengisi posisi target satu tingkat di atas, hasil kalibrasi panel talent review.",
  },
  {
    term: "Rasio Pipeline",
    text: "Jumlah kandidat pada pool Ready Now dan Ready 1–2 Tahun dibagi jumlah posisi kritikal (208).",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   3. Top Talent by Potential
   ══════════════════════════════════════════════════════════════════════ */

export const topTalentKpi: DetailKpi[] = [
  {
    label: "Talenta HiPo",
    value: "1.068",
    share: "28,5%",
    delta: "8,4%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Skor Potensi Rata-rata",
    value: "8,4",
    suffix: "/10",
    delta: "0,2",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "HiPo Ready Now",
    value: "268",
    share: "25,1%",
    delta: "4,8%",
    trend: "down",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "HiPo Perempuan",
    value: "312",
    share: "29,2%",
    delta: "2,4 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "HiPo Flight Risk",
    value: "94",
    share: "8,8%",
    delta: "1,1 ppts",
    trend: "up",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "Retensi HiPo (YTD)",
    value: "94,6",
    suffix: "%",
    delta: "1,3 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface TopTalentRow {
  rank: number;
  nama: string;
  jabatan: string;
  unit: string;
  score: string;
  performance: string;
  potential: string;
  readiness: "Ready Now" | "Ready in 1-2 Yrs" | "Ready in 3-5 Yrs";
  posisiTarget: string;
  flightRisk: "Low" | "Medium" | "High";
}

/** 18 talenta skor tertinggi; 10 teratas sama dengan kartu ringkasan. */
export const topTalentRows: TopTalentRow[] = [
  { rank: 1, nama: "Rizky Putra", jabatan: "Asisten Afdeling", unit: "PTPN IV", score: "9,4", performance: "4,6", potential: "4,8", readiness: "Ready in 1-2 Yrs", posisiTarget: "Kepala Kebun", flightRisk: "Low" },
  { rank: 2, nama: "Agung Setiawan", jabatan: "Kepala Kebun", unit: "PTPN III", score: "9,2", performance: "4,7", potential: "4,5", readiness: "Ready Now", posisiTarget: "General Manager", flightRisk: "Low" },
  { rank: 3, nama: "Dewi Kartika", jabatan: "Manajer Keuangan", unit: "PTPN I", score: "9,1", performance: "4,5", potential: "4,6", readiness: "Ready in 1-2 Yrs", posisiTarget: "SVP Keuangan", flightRisk: "Medium" },
  { rank: 4, nama: "Fajar Nugroho", jabatan: "Manajer Pabrik", unit: "PTPN IV Regional 3", score: "8,9", performance: "4,5", potential: "4,4", readiness: "Ready Now", posisiTarget: "General Manager", flightRisk: "Low" },
  { rank: 5, nama: "Yudi Prasetyo", jabatan: "Manajer HR", unit: "PTPN I Regional 1", score: "8,8", performance: "4,4", potential: "4,4", readiness: "Ready in 1-2 Yrs", posisiTarget: "SVP Human Capital", flightRisk: "Low" },
  { rank: 6, nama: "Nadia Arifah", jabatan: "Manajer Sustainability", unit: "PTPN IV Regional 4", score: "8,7", performance: "4,3", potential: "4,4", readiness: "Ready in 3-5 Yrs", posisiTarget: "Head of ESG", flightRisk: "Low" },
  { rank: 7, nama: "Budi Santoso", jabatan: "Kepala Engineering", unit: "PTPN IV", score: "8,6", performance: "4,4", potential: "4,2", readiness: "Ready Now", posisiTarget: "Manajer Pabrik", flightRisk: "Medium" },
  { rank: 8, nama: "Maya Sari", jabatan: "Manajer Komersial", unit: "PTPN III", score: "8,6", performance: "4,2", potential: "4,4", readiness: "Ready in 3-5 Yrs", posisiTarget: "SVP Komersial", flightRisk: "Low" },
  { rank: 9, nama: "Andi Kurniawan", jabatan: "Kepala Tanaman", unit: "PTPN IV Regional 3", score: "8,5", performance: "4,3", potential: "4,2", readiness: "Ready in 3-5 Yrs", posisiTarget: "Kepala Kebun", flightRisk: "Low" },
  { rank: 10, nama: "Rina Ekawati", jabatan: "Manajer QA/QC", unit: "PTPN I", score: "8,5", performance: "4,2", potential: "4,3", readiness: "Ready in 1-2 Yrs", posisiTarget: "Manajer Pabrik", flightRisk: "Low" },
  { rank: 11, nama: "Hendra Gunawan", jabatan: "Asisten Kepala", unit: "PTPN III", score: "8,4", performance: "4,2", potential: "4,2", readiness: "Ready in 1-2 Yrs", posisiTarget: "Kepala Kebun", flightRisk: "Medium" },
  { rank: 12, nama: "Sari Wulandari", jabatan: "Manajer Akuntansi", unit: "Holding & SBU", score: "8,4", performance: "4,1", potential: "4,3", readiness: "Ready in 1-2 Yrs", posisiTarget: "Manajer Keuangan", flightRisk: "Low" },
  { rank: 13, nama: "Teguh Wibowo", jabatan: "Manajer Teknik", unit: "PTPN I Regional 1", score: "8,3", performance: "4,2", potential: "4,1", readiness: "Ready Now", posisiTarget: "Manajer Pabrik", flightRisk: "Low" },
  { rank: 14, nama: "Lestari Ningsih", jabatan: "Manajer SDM", unit: "PTPN IV Regional 4", score: "8,3", performance: "4,1", potential: "4,2", readiness: "Ready in 1-2 Yrs", posisiTarget: "Manajer HR Regional", flightRisk: "Low" },
  { rank: 15, nama: "Bayu Anggara", jabatan: "Kepala Pengolahan", unit: "PTPN IV", score: "8,2", performance: "4,2", potential: "4,0", readiness: "Ready Now", posisiTarget: "Manajer Pabrik", flightRisk: "Medium" },
  { rank: 16, nama: "Putri Amelia", jabatan: "Analis Strategi", unit: "Holding & SBU", score: "8,2", performance: "4,0", potential: "4,2", readiness: "Ready in 3-5 Yrs", posisiTarget: "Manajer Komersial", flightRisk: "Low" },
  { rank: 17, nama: "Rahmat Hidayat", jabatan: "Asisten Afdeling", unit: "PTPN IV Regional 3", score: "8,1", performance: "4,1", potential: "4,0", readiness: "Ready in 3-5 Yrs", posisiTarget: "Asisten Kepala", flightRisk: "Low" },
  { rank: 18, nama: "Intan Permata", jabatan: "Manajer QHSE", unit: "PTPN I", score: "8,1", performance: "4,0", potential: "4,1", readiness: "Ready in 1-2 Yrs", posisiTarget: "Manajer Sustainability", flightRisk: "Low" },
];

export const topTalentByOrg = [
  { label: "PTPN IV", value: 226, note: "30,5% talenta" },
  { label: "PTPN III", value: 198, note: "29,8% talenta" },
  { label: "PTPN IV Regional 3", value: 148, note: "27,0% talenta" },
  { label: "Holding & SBU", value: 148, note: "32,0% talenta" },
  { label: "PTPN I", value: 132, note: "27,2% talenta" },
  { label: "PTPN IV Regional 4", value: 112, note: "26,2% talenta" },
  { label: "PTPN I Regional 1", value: 104, note: "25,2% talenta" },
];

export const topTalentScoreBands = [
  { label: "9,0 – 10,0", value: 68, note: "6,4%" },
  { label: "8,5 – 8,9", value: 186, note: "17,4%" },
  { label: "8,0 – 8,4", value: 342, note: "32,0%" },
  { label: "7,5 – 7,9", value: 298, note: "27,9%" },
  { label: "7,0 – 7,4", value: 174, note: "16,3%" },
];

export const topTalentNotes: DetailNote[] = [
  {
    title: "Hanya 25% HiPo siap sekarang",
    detail:
      "268 dari 1.068 HiPo berstatus Ready Now. Sisanya butuh penugasan penguatan sebelum masuk shortlist suksesi posisi kritikal.",
    tone: "amber",
  },
  {
    title: "94 HiPo berisiko keluar",
    detail:
      "Setara 8,8% populasi HiPo dan 50,5% dari seluruh talenta berisiko. Kehilangan satu HiPo Ready Now setara biaya penggantian 1,6x gaji tahunan.",
    tone: "red",
  },
  {
    title: "Representasi perempuan menguat",
    detail:
      "312 HiPo perempuan (29,2%), naik 2,4 ppts dan sudah melampaui porsi perempuan pada populasi pekerja (27,0%).",
    tone: "green",
  },
  {
    title: "Konsentrasi di dua entitas besar",
    detail:
      "PTPN III dan PTPN IV menyumbang 424 HiPo (39,7%). Rotasi silang perlu didorong agar entitas lain tidak kekurangan kandidat suksesi.",
    tone: "blue",
  },
];

export const topTalentDefinitions = [
  {
    term: "Skor Potensi",
    text: "Komposit 0–10 dari asesmen potensi (60%), kinerja dua siklus (30%), dan penilaian panel talent review (10%).",
  },
  {
    term: "HiPo",
    text: "Talenta pada kuadran Potential High (Box 7–9) hasil kalibrasi 9-box grid.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   4. Talent Risk Overview
   ══════════════════════════════════════════════════════════════════════ */

export const riskKpi: DetailKpi[] = [
  {
    label: "Talenta Berisiko",
    value: "186",
    share: "5,0%",
    delta: "1,2 ppts",
    trend: "up",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "High Risk",
    value: "86",
    share: "46,2%",
    delta: "14 orang",
    trend: "up",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "High Risk di Posisi Kritikal",
    value: "32",
    share: "37,2%",
    delta: "5 orang",
    trend: "up",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "Tanpa Backup Suksesor",
    value: "5",
    share: "kritikal",
    delta: "2 orang",
    trend: "up",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "Retensi Internal",
    value: "91,0",
    suffix: "%",
    delta: "2,1 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Intervensi Berhasil (YTD)",
    value: "48",
    share: "dari 62",
    delta: "77,4%",
    trend: "up",
    tone: "green",
    compare: "tingkat keberhasilan",
  },
];

export const riskDonut = [
  { name: "High Risk", value: 86, pctLabel: "46%", color: "#ef4444" },
  { name: "Medium Risk", value: 72, pctLabel: "39%", color: "#f2a93d" },
  { name: "Low Risk", value: 28, pctLabel: "15%", color: "#1a9c5b" },
];

/** Faktor pendorong risiko, diurutkan dari kontribusi terbesar. */
export const riskDrivers = [
  { label: "Career mobility terbatas", value: 62, note: "33% kasus" },
  { label: "Kompensasi di bawah pasar", value: 54, note: "29% kasus" },
  { label: "Permintaan eksternal tinggi", value: 41, note: "22% kasus" },
  { label: "Engagement menurun", value: 38, note: "20% kasus" },
  { label: "Efektivitas atasan rendah", value: 26, note: "14% kasus" },
  { label: "Beban kerja berlebih", value: 21, note: "11% kasus" },
];

export interface RiskRegisterRow {
  nama: string;
  jabatan: string;
  unit: string;
  score: number;
  kategori: "High" | "Medium";
  kritikal: boolean;
  backup: string;
  leadTime: string;
  faktor: string;
  aksi: string;
}

export const riskRegister: RiskRegisterRow[] = [
  { nama: "Andi Wijaya", jabatan: "Manajer Pabrik", unit: "PTPN IV Regional 3", score: 85, kategori: "High", kritikal: true, backup: "Fajar Nugroho (87%)", leadTime: "8–12 bulan", faktor: "Engagement, kompensasi, mobilitas", aksi: "Retensi intervensi + aktifkan backup suksesi" },
  { nama: "Dimas Pratama", jabatan: "Kepala Kebun", unit: "PTPN IV", score: 82, kategori: "High", kritikal: true, backup: "Belum ada", leadTime: "6–9 bulan", faktor: "Efektivitas atasan, mobilitas", aksi: "Retensi targeted + percepat 2 kandidat pool 1–2 tahun" },
  { nama: "Siti Rahmawati", jabatan: "Manajer Keuangan", unit: "PTPN III", score: 80, kategori: "High", kritikal: true, backup: "Belum ada", leadTime: "8–12 bulan", faktor: "Kompensasi, engagement", aksi: "Prioritas retensi tertinggi — coverage posisi 58%" },
  { nama: "Hendra Saputra", jabatan: "Asisten Teknik", unit: "PTPN I Regional 1", score: 78, kategori: "High", kritikal: false, backup: "Teguh Wibowo (81%)", leadTime: "3–6 bulan", faktor: "Mobilitas, beban kerja", aksi: "Career path review + rotasi penugasan proyek" },
  { nama: "Ratna Dewi", jabatan: "Supervisor QC", unit: "PTPN I", score: 76, kategori: "High", kritikal: false, backup: "Rina Ekawati (84%)", leadTime: "3–6 bulan", faktor: "Kompensasi, permintaan eksternal", aksi: "Penyesuaian kompensasi + development targeted" },
  { nama: "Gilang Ramadhan", jabatan: "Manajer Komersial", unit: "PTPN IV Regional 4", score: 75, kategori: "High", kritikal: true, backup: "Belum ada", leadTime: "8–12 bulan", faktor: "Kompensasi, permintaan eksternal", aksi: "Retensi + buka kandidat lintas entitas" },
  { nama: "Wahyu Saputro", jabatan: "Kepala Pengolahan", unit: "PTPN III", score: 74, kategori: "High", kritikal: true, backup: "Bayu Anggara (82%)", leadTime: "6–9 bulan", faktor: "Mobilitas, beban kerja", aksi: "Rencana suksesi paralel + penyeimbangan beban" },
  { nama: "Anisa Fitriani", jabatan: "Manajer Akuntansi", unit: "PTPN IV Regional 3", score: 72, kategori: "High", kritikal: false, backup: "Sari Wulandari (85%)", leadTime: "3–6 bulan", faktor: "Kompensasi, engagement", aksi: "Review paket + jalur karier spesialis" },
  { nama: "Firman Maulana", jabatan: "Asisten Afdeling", unit: "PTPN IV", score: 68, kategori: "Medium", kritikal: false, backup: "Rahmat Hidayat (79%)", leadTime: "3 bulan", faktor: "Mobilitas", aksi: "Rotasi antar afdeling" },
  { nama: "Citra Larasati", jabatan: "Analis SDM", unit: "Holding & SBU", score: 66, kategori: "Medium", kritikal: false, backup: "Lestari Ningsih (80%)", leadTime: "3 bulan", faktor: "Permintaan eksternal", aksi: "Penugasan proyek strategis" },
  { nama: "Reza Fahlevi", jabatan: "Manajer Teknik", unit: "PTPN I", score: 64, kategori: "Medium", kritikal: true, backup: "Teguh Wibowo (78%)", leadTime: "6 bulan", faktor: "Beban kerja", aksi: "Tambah kapasitas tim + coaching" },
  { nama: "Nurul Hasanah", jabatan: "Supervisor Sustainability", unit: "PTPN IV Regional 4", score: 62, kategori: "Medium", kritikal: false, backup: "Intan Permata (83%)", leadTime: "3 bulan", faktor: "Engagement", aksi: "Program keterlibatan + mentoring" },
];

/** Jumlah talenta berisiko tinggi per bulan, 12 bulan terakhir. */
export const riskTrend = [
  { name: "Jun 25", high: 72, medium: 68, retensi: 88.9 },
  { name: "Jul 25", high: 74, medium: 69, retensi: 89.2 },
  { name: "Agu 25", high: 73, medium: 70, retensi: 89.4 },
  { name: "Sep 25", high: 76, medium: 70, retensi: 89.8 },
  { name: "Okt 25", high: 78, medium: 71, retensi: 90.1 },
  { name: "Nov 25", high: 79, medium: 71, retensi: 90.2 },
  { name: "Des 25", high: 80, medium: 72, retensi: 90.4 },
  { name: "Jan 26", high: 81, medium: 72, retensi: 90.5 },
  { name: "Feb 26", high: 82, medium: 73, retensi: 90.7 },
  { name: "Mar 26", high: 84, medium: 73, retensi: 90.8 },
  { name: "Apr 26", high: 85, medium: 72, retensi: 90.9 },
  { name: "Mei 26", high: 86, medium: 72, retensi: 91.0 },
];

export const riskNotes: DetailNote[] = [
  {
    title: "32 high risk di posisi kritikal",
    detail:
      "Lima di antaranya tanpa suksesor aktif — Kepala Kebun PTPN IV, Manajer Keuangan PTPN III, Manajer Komersial PTPN IV Regional 4, dan dua posisi Manajer Pabrik.",
    tone: "red",
  },
  {
    title: "Mobilitas karier pendorong utama",
    detail:
      "Muncul pada 33% kasus berisiko. Sejalan dengan waktu tunggu promosi 19 bulan pada pool Ready Now yang tidak berkurang.",
    tone: "amber",
  },
  {
    title: "Intervensi terbukti efektif",
    detail:
      "48 dari 62 intervensi retensi YTD berhasil menahan talenta minimal 12 bulan (77,4%). Efektivitas tertinggi pada kombinasi penyesuaian kompensasi dan penugasan baru.",
    tone: "green",
  },
  {
    title: "Retensi naik meski risiko naik",
    detail:
      "Retensi internal 91,0% (+2,1 ppts) sementara jumlah high risk tetap naik. Artinya penanganan berjalan, tetapi populasi berisiko baru terus muncul.",
    tone: "blue",
  },
];

export const riskDefinitions = [
  {
    term: "Flight Risk Score",
    text: "Skor 0–100 dari model prediktif: engagement, kompensasi relatif pasar, mobilitas karier, efektivitas atasan, beban kerja, dan permintaan eksternal. High ≥ 70.",
  },
  {
    term: "Lead Time Penggantian",
    text: "Estimasi waktu mengisi posisi dari sumber eksternal bila tidak ada suksesor internal siap.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   5. Talent Attributes Insight
   ══════════════════════════════════════════════════════════════════════ */

export const attributeKpi: DetailKpi[] = [
  {
    label: "Skor Kapabilitas Rata-rata",
    value: "4,00",
    suffix: "/5",
    delta: "0,08",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Benchmark Industri",
    value: "4,00",
    suffix: "/5",
    delta: "setara",
    trend: "flat",
    tone: "neutral",
    compare: "rata-rata 6 atribut",
  },
  {
    label: "Atribut di Atas Benchmark",
    value: "3",
    suffix: "dari 6",
    delta: "1 atribut",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Gap Terbesar",
    value: "-0,2",
    delta: "Technical & Digital",
    trend: "flat",
    tone: "red",
    compare: "vs benchmark",
  },
  {
    label: "Talenta Diasesmen",
    value: "3.228",
    share: "86,3%",
    delta: "7,2%",
    trend: "up",
    tone: "neutral",
    compare: "vs siklus 2025",
  },
  {
    label: "Dalam Program Penutup Gap",
    value: "1.245",
    share: "38,6%",
    delta: "18,4%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface AttributeDetail {
  label: string;
  score: number;
  benchmark: number;
  gap: number;
  /** Skor per lapis jabatan, dari Direktur & SVP ke Supervisor. */
  perLapis: [number, number, number, number];
  program: number;
  keterangan: string;
}

export const attributeDetail: AttributeDetail[] = [
  { label: "Leadership", score: 4.2, benchmark: 4.0, gap: 0.2, perLapis: [4.5, 4.3, 4.1, 3.9], program: 812, keterangan: "Kekuatan utama; dijaga lewat program akselerasi kepemimpinan." },
  { label: "Agility & Adaptability", score: 4.0, benchmark: 3.8, gap: 0.2, perLapis: [4.2, 4.1, 4.0, 3.8], program: 386, keterangan: "Naik 0,3 sejak transformasi 2024; merata lintas lapis." },
  { label: "Learning Agility", score: 4.1, benchmark: 4.0, gap: 0.1, perLapis: [4.2, 4.1, 4.1, 4.0], program: 428, keterangan: "Prediktor terkuat kenaikan kelas readiness (korelasi 0,62)." },
  { label: "Technical Expertise", score: 3.9, benchmark: 4.1, gap: -0.2, perLapis: [3.8, 3.9, 4.0, 3.9], program: 742, keterangan: "Gap terbesar di lapis senior; regenerasi ahli agronomi tertinggal." },
  { label: "Digital Literacy", score: 3.8, benchmark: 4.0, gap: -0.2, perLapis: [3.6, 3.7, 3.9, 4.0], program: 503, keterangan: "Terbalik dengan lapis: makin senior makin rendah." },
  { label: "Business Acumen", score: 4.0, benchmark: 4.1, gap: -0.1, perLapis: [4.3, 4.1, 3.9, 3.7], program: 314, keterangan: "Tipis di lapis Supervisor; menahan kesiapan peran manajerial." },
];

export const attributeByOrg = [
  { name: "Holding & SBU", leadership: 4.4, technical: 3.8, digital: 4.1, business: 4.3, rata: 4.15 },
  { name: "PTPN IV", leadership: 4.3, technical: 4.1, digital: 3.9, business: 4.0, rata: 4.08 },
  { name: "PTPN III", leadership: 4.2, technical: 4.0, digital: 3.8, business: 4.0, rata: 4.0 },
  { name: "PTPN IV Regional 3", leadership: 4.2, technical: 3.9, digital: 3.8, business: 3.9, rata: 3.95 },
  { name: "PTPN I", leadership: 4.1, technical: 3.9, digital: 3.7, business: 3.9, rata: 3.9 },
  { name: "PTPN IV Regional 4", leadership: 4.1, technical: 3.8, digital: 3.7, business: 3.9, rata: 3.88 },
  { name: "PTPN I Regional 1", leadership: 4.0, technical: 3.8, digital: 3.6, business: 3.8, rata: 3.8 },
];

export const attributeNotes: DetailNote[] = [
  {
    title: "Digital Literacy berbanding terbalik dengan lapis",
    detail:
      "Supervisor 4,0 sementara Direktur & SVP 3,6. Pola ini menghambat adopsi inisiatif digital yang keputusannya ada di lapis atas.",
    tone: "red",
  },
  {
    title: "Technical Expertise tergerus regenerasi",
    detail:
      "3,9 versus benchmark 4,1. Penyebab dominan: 18,7% pekerja berusia di atas 45 tahun memegang keahlian agronomi yang belum tertransfer.",
    tone: "amber",
  },
  {
    title: "Learning Agility prediktor terkuat",
    detail:
      "Korelasi 0,62 terhadap kenaikan kelas readiness dalam 24 bulan — lebih tinggi dari skor kinerja (0,41).",
    tone: "green",
  },
  {
    title: "Business Acumen tipis di lapis bawah",
    detail:
      "Supervisor 3,7 versus Direktur & SVP 4,3. Menjadi penghambat utama promosi dari jalur teknis ke peran manajerial.",
    tone: "blue",
  },
];

export const attributeDefinitions = [
  {
    term: "Skor Atribut",
    text: "Skala 1–5 hasil asesmen kapabilitas gabungan: uji kompetensi, penilaian 360, dan observasi penugasan.",
  },
  {
    term: "Benchmark",
    text: "Median perusahaan agribisnis dan BUMN sejenis pada survei kapabilitas 2025.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   6. Critical Role Coverage
   ══════════════════════════════════════════════════════════════════════ */

export const coverageKpi: DetailKpi[] = [
  {
    label: "Posisi Kritikal",
    value: "208",
    suffix: "posisi",
    delta: "6 posisi",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Coverage Keseluruhan",
    value: "68",
    suffix: "%",
    delta: "4,5 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Ready Now Coverage",
    value: "35",
    suffix: "%",
    delta: "1,8 ppts",
    trend: "down",
    tone: "red",
    compare: "vs Mei 2025",
  },
  {
    label: "Tanpa Suksesor",
    value: "27",
    share: "13,0%",
    delta: "4 posisi",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Rasio Kandidat per Posisi",
    value: "2,4",
    suffix: "x",
    delta: "0,2x",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Posisi Kosong Saat Ini",
    value: "9",
    share: "4,3%",
    delta: "3 posisi",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface CoverageRow {
  posisi: string;
  total: number;
  coverage: number;
  /** Ready Now / Ready 1–2 / Ready 3–5 / No Successor, dalam persen. */
  split: [number, number, number, number];
  tanpaSuksesor: number;
  leadTime: string;
  prioritas: "Tinggi" | "Sedang" | "Rendah";
}

export const coverageRows: CoverageRow[] = [
  { posisi: "General Manager", total: 18, coverage: 72, split: [39, 33, 17, 11], tanpaSuksesor: 2, leadTime: "9–12 bulan", prioritas: "Tinggi" },
  { posisi: "Kepala Kebun", total: 64, coverage: 66, split: [34, 32, 22, 12], tanpaSuksesor: 8, leadTime: "6–9 bulan", prioritas: "Tinggi" },
  { posisi: "Manajer Pabrik", total: 42, coverage: 71, split: [38, 33, 18, 11], tanpaSuksesor: 5, leadTime: "6–9 bulan", prioritas: "Sedang" },
  { posisi: "Manajer Keuangan", total: 26, coverage: 58, split: [28, 30, 26, 16], tanpaSuksesor: 4, leadTime: "8–12 bulan", prioritas: "Tinggi" },
  { posisi: "Manajer HR", total: 22, coverage: 64, split: [32, 32, 22, 14], tanpaSuksesor: 3, leadTime: "6–8 bulan", prioritas: "Sedang" },
  { posisi: "Manajer Sustainability", total: 16, coverage: 75, split: [41, 34, 15, 10], tanpaSuksesor: 2, leadTime: "5–8 bulan", prioritas: "Rendah" },
  { posisi: "Manajer Komersial", total: 20, coverage: 60, split: [30, 30, 25, 15], tanpaSuksesor: 3, leadTime: "8–12 bulan", prioritas: "Tinggi" },
];

export const coverageByOrg = [
  { label: "PTPN IV", value: 74, note: "38 posisi" },
  { label: "PTPN III", value: 72, note: "36 posisi" },
  { label: "Holding & SBU", value: 70, note: "24 posisi" },
  { label: "PTPN IV Regional 3", value: 68, note: "32 posisi" },
  { label: "PTPN I", value: 66, note: "28 posisi" },
  { label: "PTPN IV Regional 4", value: 62, note: "26 posisi" },
  { label: "PTPN I Regional 1", value: 58, note: "24 posisi" },
];

/** Coverage keseluruhan versus Ready Now coverage, enam semester. */
export const coverageTrend = [
  { name: "Nov 23", coverage: 58, readyNow: 31, tanpaSuksesor: 42 },
  { name: "Mei 24", coverage: 60, readyNow: 33, tanpaSuksesor: 38 },
  { name: "Nov 24", coverage: 62, readyNow: 35, tanpaSuksesor: 35 },
  { name: "Mei 25", coverage: 64, readyNow: 37, tanpaSuksesor: 31 },
  { name: "Nov 25", coverage: 66, readyNow: 36, tanpaSuksesor: 29 },
  { name: "Mei 26", coverage: 68, readyNow: 35, tanpaSuksesor: 27 },
];

export const coverageNotes: DetailNote[] = [
  {
    title: "Coverage naik, Ready Now justru turun",
    detail:
      "Coverage total 68% (+4,5 ppts) sementara Ready Now coverage turun ke 35%. Pipeline menebal di lapis 1–2 tahun, bukan di kandidat siap pakai.",
    tone: "amber",
  },
  {
    title: "Keuangan & Komersial paling rapuh",
    detail:
      "Coverage 58% dan 60% dengan lead time eksternal 8–12 bulan. Tujuh posisi tanpa suksesor terkonsentrasi di dua fungsi ini.",
    tone: "red",
  },
  {
    title: "Kepala Kebun terbesar secara volume",
    detail:
      "8 dari 64 posisi tanpa suksesor — jumlah absolut tertinggi. Populasi terbesar sekaligus tumpuan operasional inti.",
    tone: "blue",
  },
  {
    title: "Tren tanpa suksesor membaik",
    detail:
      "Turun dari 42 posisi (Nov 2023) ke 27 posisi. Laju perbaikan melambat dua semester terakhir: −2 posisi per semester.",
    tone: "green",
  },
];

export const coverageDefinitions = [
  {
    term: "Posisi Kritikal",
    text: "Posisi dengan dampak langsung ke kontinuitas operasi atau kinerja keuangan, dan sulit digantikan dalam waktu singkat.",
  },
  {
    term: "Coverage",
    text: "Porsi posisi kritikal yang memiliki minimal satu kandidat berstatus Ready Now atau Ready in 1–2 Tahun.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   7. Role–Talent–Skill Match
   ══════════════════════════════════════════════════════════════════════ */

export const matchKpi: DetailKpi[] = [
  {
    label: "Posisi Dipetakan",
    value: "208",
    suffix: "posisi",
    delta: "6 posisi",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Match Rata-rata",
    value: "82",
    suffix: "%",
    delta: "3 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Match ≥ 85%",
    value: "94",
    share: "45,2%",
    delta: "12 posisi",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Match < 70%",
    value: "31",
    share: "14,9%",
    delta: "5 posisi",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Kandidat HiPo Cocok",
    value: "47",
    share: "match ≥ 80%",
    delta: "9 orang",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Skill Gap Rata-rata",
    value: "-0,38",
    delta: "0,06",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface MatchRow {
  posisi: string;
  unit: string;
  skills: string;
  kandidat: string;
  score: string;
  match: number;
  gap: string;
  readiness: "Ready Now" | "Ready in 1-2 Yrs" | "Ready in 3-5 Yrs";
  flightRisk: "Low" | "Medium" | "High";
  rekomendasi: string;
}

export const matchRows: MatchRow[] = [
  { posisi: "Kepala Kebun", unit: "PTPN III", skills: "Agronomy 4,3 · Leadership 4,2 · Digital Agriculture 4,0", kandidat: "Agung Setiawan", score: "9,2", match: 91, gap: "Digital Agriculture −0,4", readiness: "Ready Now", flightRisk: "Low", rekomendasi: "Siap suksesi" },
  { posisi: "Manajer Pabrik", unit: "PTPN IV Regional 3", skills: "Operations 4,4 · Leadership 4,1 · Financial Acumen 4,0", kandidat: "Fajar Nugroho", score: "8,9", match: 87, gap: "Financial Acumen −0,3", readiness: "Ready Now", flightRisk: "Low", rekomendasi: "Siap suksesi" },
  { posisi: "General Manager", unit: "PTPN IV", skills: "Strategic Leadership 4,5 · Business Acumen 4,3 · Stakeholder 4,2", kandidat: "Budi Santoso", score: "8,6", match: 86, gap: "Business Acumen −0,4", readiness: "Ready Now", flightRisk: "Medium", rekomendasi: "Siap suksesi dengan mentoring" },
  { posisi: "Manajer Keuangan", unit: "PTPN I", skills: "Finance 4,5 · Leadership 4,2 · Digital Finance 4,0", kandidat: "Dewi Kartika", score: "9,1", match: 84, gap: "Leadership −0,5", readiness: "Ready in 1-2 Yrs", flightRisk: "Medium", rekomendasi: "Akselerasi development" },
  { posisi: "Manajer HR", unit: "PTPN I Regional 1", skills: "People Strategy 4,3 · Leadership 4,2 · HR Analytics 3,9", kandidat: "Yudi Prasetyo", score: "8,8", match: 83, gap: "HR Analytics −0,5", readiness: "Ready in 1-2 Yrs", flightRisk: "Low", rekomendasi: "Akselerasi development" },
  { posisi: "Manajer Pabrik", unit: "PTPN I Regional 1", skills: "Operations 4,4 · Maintenance 4,2 · Leadership 4,1", kandidat: "Teguh Wibowo", score: "8,3", match: 82, gap: "Leadership −0,5", readiness: "Ready Now", flightRisk: "Low", rekomendasi: "Siap suksesi dengan coaching" },
  { posisi: "Manajer Sustainability", unit: "PTPN IV Regional 4", skills: "ESG Reporting 4,2 · Certification 4,1 · Stakeholder 4,0", kandidat: "Nadia Arifah", score: "8,7", match: 81, gap: "Certification −0,5", readiness: "Ready in 3-5 Yrs", flightRisk: "Low", rekomendasi: "Development jangka menengah" },
  { posisi: "Manajer QA/QC", unit: "PTPN I", skills: "Quality Systems 4,2 · Analytics 4,0 · Leadership 3,9", kandidat: "Rina Ekawati", score: "8,5", match: 80, gap: "Analytics −0,5", readiness: "Ready in 1-2 Yrs", flightRisk: "Low", rekomendasi: "Akselerasi development" },
  { posisi: "Manajer Komersial", unit: "PTPN III", skills: "Commercial 4,3 · Business Acumen 4,2 · Negotiation 4,0", kandidat: "Maya Sari", score: "8,6", match: 78, gap: "Business Acumen −0,6", readiness: "Ready in 3-5 Yrs", flightRisk: "Low", rekomendasi: "Development jangka menengah" },
  { posisi: "Manajer Keuangan", unit: "PTPN III", skills: "Finance 4,5 · Controllership 4,3 · Digital Finance 4,0", kandidat: "Sari Wulandari", score: "8,4", match: 76, gap: "Controllership −0,7", readiness: "Ready in 1-2 Yrs", flightRisk: "Low", rekomendasi: "Development terarah + rotasi" },
  { posisi: "Kepala Kebun", unit: "PTPN IV", skills: "Agronomy 4,3 · Leadership 4,2 · Cost Control 4,0", kandidat: "Hendra Gunawan", score: "8,4", match: 74, gap: "Cost Control −0,8", readiness: "Ready in 1-2 Yrs", flightRisk: "Medium", rekomendasi: "Development terarah + retensi" },
  { posisi: "Manajer Komersial", unit: "PTPN IV Regional 4", skills: "Commercial 4,3 · Market Analytics 4,1 · Negotiation 4,0", kandidat: "Putri Amelia", score: "8,2", match: 68, gap: "Negotiation −1,0", readiness: "Ready in 3-5 Yrs", flightRisk: "Low", rekomendasi: "Belum layak shortlist — perlu penugasan komersial" },
];

export const matchBands = [
  { label: "≥ 90% (siap penuh)", value: 38, note: "18,3%" },
  { label: "85 – 89%", value: 56, note: "26,9%" },
  { label: "80 – 84%", value: 48, note: "23,1%" },
  { label: "70 – 79%", value: 35, note: "16,8%" },
  { label: "< 70% (gap besar)", value: 31, note: "14,9%" },
];

export const matchSkillGaps = [
  { label: "Business Acumen", value: 42, note: "42 posisi" },
  { label: "Digital / Analytics", value: 38, note: "38 posisi" },
  { label: "Financial Acumen", value: 31, note: "31 posisi" },
  { label: "Leadership", value: 26, note: "26 posisi" },
  { label: "Technical Domain", value: 22, note: "22 posisi" },
  { label: "Negotiation", value: 14, note: "14 posisi" },
];

export const matchNotes: DetailNote[] = [
  {
    title: "47 HiPo cocok lowongan kritikal",
    detail:
      "Match ≥ 80% terhadap posisi kritikal yang sedang dibuka. Mengisi internal memangkas lead time dari 8–12 bulan menjadi 2–3 bulan.",
    tone: "green",
  },
  {
    title: "31 posisi tanpa kandidat memadai",
    detail:
      "Match kandidat terbaik di bawah 70%. Perlu keputusan: percepat development, buka rotasi lintas entitas, atau rekrut eksternal.",
    tone: "red",
  },
  {
    title: "Business Acumen gap paling menyebar",
    detail:
      "Muncul sebagai gap terbesar di 42 posisi, sejalan dengan skor atribut 4,0 versus benchmark 4,1 dan skor Supervisor yang hanya 3,7.",
    tone: "amber",
  },
  {
    title: "Kandidat terbaik belum tentu paling siap",
    detail:
      "Dewi Kartika berskor tertinggi (9,1) tetapi match hanya 84% dengan gap Leadership −0,5 dan berstatus Medium flight risk.",
    tone: "blue",
  },
];

export const matchDefinitions = [
  {
    term: "Match Score",
    text: "Kesesuaian profil skill kandidat terhadap persyaratan posisi, dibobot tingkat kepentingan tiap skill (0–100%).",
  },
  {
    term: "Skill Gap",
    text: "Selisih level skill kandidat terhadap level minimal yang disyaratkan posisi (skala 1–5).",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   8. Talent Mobility Overview
   ══════════════════════════════════════════════════════════════════════ */

export const mobilityKpi: DetailKpi[] = [
  {
    label: "Total Mobilitas (YTD)",
    value: "336",
    share: "9,0% talenta",
    delta: "14,3%",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Promosi",
    value: "128",
    share: "38,1%",
    delta: "11,3%",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Rotasi Lateral",
    value: "96",
    share: "28,6%",
    delta: "18,5%",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Pengisian Internal",
    value: "74",
    suffix: "%",
    delta: "5 ppts",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Uplift Kinerja Pasca Mobilitas",
    value: "+0,36",
    suffix: "pts",
    delta: "0,04",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Mobilitas Berdampak Positif",
    value: "87",
    suffix: "%",
    delta: "3 ppts",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
];

export interface MobilityTypeRow {
  label: string;
  value: number;
  pct: string;
  uplift: string;
  retensi: string;
  color: string;
  keterangan: string;
}

export const mobilityTypes: MobilityTypeRow[] = [
  { label: "Promosi", value: 128, pct: "38,1%", uplift: "+0,42", retensi: "96,1%", color: "#1a9c5b", keterangan: "Kenaikan satu lapis jabatan; 68 di antaranya dari pool Ready Now." },
  { label: "Rotasi Lateral", value: 96, pct: "28,6%", uplift: "+0,34", retensi: "93,8%", color: "#3b7ded", keterangan: "Pindah fungsi pada lapis sama; lever utama menutup gap Business Acumen." },
  { label: "Penugasan Proyek", value: 64, pct: "19,0%", uplift: "+0,31", retensi: "92,2%", color: "#8b5cf6", keterangan: "Penugasan 6–12 bulan pada inisiatif strategis grup." },
  { label: "Transfer Unit", value: 48, pct: "14,3%", uplift: "+0,28", retensi: "89,6%", color: "#0d9488", keterangan: "Pindah entitas; instrumen pemerataan kualitas pipeline antar PTPN." },
];

export interface MobilityOrgRow {
  name: string;
  masuk: number;
  keluar: number;
  promosi: number;
  rotasi: number;
  net: number;
  pengisianInternal: number;
}

export const mobilityByOrg: MobilityOrgRow[] = [
  { name: "PTPN I", masuk: 42, keluar: 38, promosi: 16, rotasi: 12, net: 4, pengisianInternal: 72 },
  { name: "PTPN I Regional 1", masuk: 34, keluar: 41, promosi: 12, rotasi: 10, net: -7, pengisianInternal: 64 },
  { name: "PTPN III", masuk: 62, keluar: 54, promosi: 26, rotasi: 18, net: 8, pengisianInternal: 78 },
  { name: "PTPN IV", masuk: 68, keluar: 58, promosi: 28, rotasi: 20, net: 10, pengisianInternal: 80 },
  { name: "PTPN IV Regional 3", masuk: 48, keluar: 46, promosi: 20, rotasi: 14, net: 2, pengisianInternal: 73 },
  { name: "PTPN IV Regional 4", masuk: 36, keluar: 42, promosi: 12, rotasi: 10, net: -6, pengisianInternal: 66 },
  { name: "Holding & SBU", masuk: 46, keluar: 57, promosi: 14, rotasi: 12, net: -11, pengisianInternal: 76 },
];

/** Mobilitas per bulan YTD 2026. */
export const mobilityTrend = [
  { name: "Jan", promosi: 22, rotasi: 16, proyek: 12, transfer: 8 },
  { name: "Feb", promosi: 24, rotasi: 18, proyek: 11, transfer: 9 },
  { name: "Mar", promosi: 28, rotasi: 21, proyek: 14, transfer: 10 },
  { name: "Apr", promosi: 26, rotasi: 20, proyek: 13, transfer: 11 },
  { name: "Mei", promosi: 28, rotasi: 21, proyek: 14, transfer: 10 },
];

export const mobilityNotes: DetailNote[] = [
  {
    title: "87% mobilitas berdampak positif",
    detail:
      "Kinerja naik rata-rata +0,36 pts dalam dua siklus pasca perpindahan. Promosi memberi uplift tertinggi (+0,42).",
    tone: "green",
  },
  {
    title: "Pengisian internal 74%",
    detail:
      "Naik 5 ppts. Setiap posisi kritikal yang diisi internal memangkas lead time 6–9 bulan dibanding rekrutmen eksternal.",
    tone: "blue",
  },
  {
    title: "Holding & SBU net negatif",
    detail:
      "Net −11 orang; menjadi pemasok talenta ke entitas operasional. Perlu penambahan pipeline masuk agar kapasitas pusat tidak tergerus.",
    tone: "amber",
  },
  {
    title: "PTPN I Regional 1 & PTPN IV Regional 4 kehilangan talenta",
    detail:
      "Net −7 dan −6 dengan pengisian internal terendah (64% dan 66%). Dua entitas ini juga berporsi Star terendah.",
    tone: "red",
  },
];

export const mobilityDefinitions = [
  {
    term: "Mobilitas",
    text: "Perpindahan peran yang tercatat resmi: promosi, rotasi lateral, penugasan proyek, dan transfer antar entitas.",
  },
  {
    term: "Uplift Kinerja",
    text: "Selisih skor kinerja dua siklus setelah perpindahan dibanding siklus terakhir sebelum perpindahan.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   9. Talent Development Focus
   ══════════════════════════════════════════════════════════════════════ */

export const developmentKpi: DetailKpi[] = [
  {
    label: "Investasi Development (YTD)",
    value: "24,8",
    prefix: "Rp",
    suffix: "M",
    delta: "12,4%",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Peserta Program",
    value: "3.228",
    share: "86,3% talenta",
    delta: "7,2%",
    trend: "up",
    tone: "neutral",
    compare: "vs YTD 2025",
  },
  {
    label: "Tingkat Penyelesaian",
    value: "87",
    suffix: "%",
    delta: "4 ppts",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025",
  },
  {
    label: "Capability Uplift",
    value: "+12",
    suffix: "%",
    delta: "2 ppts",
    trend: "up",
    tone: "green",
    compare: "vs baseline asesmen",
  },
  {
    label: "Investasi per Talenta",
    value: "7,7",
    prefix: "Rp",
    suffix: "jt",
    delta: "4,8%",
    trend: "up",
    tone: "neutral",
    compare: "vs YTD 2025",
  },
  {
    label: "Uplift Kinerja Peserta",
    value: "+4,3",
    suffix: "%",
    delta: "0,6 ppts",
    trend: "up",
    tone: "green",
    compare: "peserta vs non-peserta",
  },
];

export interface DevProgramRow {
  fokus: string;
  peserta: number;
  program: number;
  biaya: string;
  completion: number;
  uplift: string;
  naikKelas: number;
  keterangan: string;
}

export const devPrograms: DevProgramRow[] = [
  { fokus: "Leadership Acceleration", peserta: 812, program: 14, biaya: "Rp 9,2 M", completion: 91, uplift: "+0,18", naikKelas: 142, keterangan: "Jalur utama menaikkan pool Ready in 1–2 Tahun ke Ready Now." },
  { fokus: "Technical & Digital Capability", peserta: 1245, program: 22, biaya: "Rp 8,4 M", completion: 84, uplift: "+0,14", naikKelas: 86, keterangan: "Menutup gap Technical Expertise −0,2 dan Digital Literacy −0,2." },
  { fokus: "Cross Functional Exposure", peserta: 643, program: 9, biaya: "Rp 3,8 M", completion: 88, uplift: "+0,21", naikKelas: 74, keterangan: "Rotasi terstruktur 3–6 bulan; berkorelasi dengan Business Acumen." },
  { fokus: "Strategic Project Assignment", peserta: 528, program: 11, biaya: "Rp 3,4 M", completion: 86, uplift: "+0,24", naikKelas: 68, keterangan: "Penugasan proyek grup; uplift kapabilitas tertinggi per rupiah." },
];

export const devRoiChain = [
  { label: "Investment", value: "Rp 24,8 M", sub: "YTD 2026" },
  { label: "Completion", value: "87%", sub: "3.228 peserta" },
  { label: "Capability Uplift", value: "+12%", sub: "vs baseline asesmen" },
  { label: "Promotion Readiness", value: "+8%", sub: "naik kelas readiness" },
  { label: "Performance Uplift", value: "+4,3%", sub: "peserta vs non-peserta" },
];

/** Realisasi investasi development bulanan YTD, dalam miliar rupiah. */
export const devInvestmentTrend = [
  { name: "Jan", investasi: 3.8, peserta: 486 },
  { name: "Feb", investasi: 4.4, peserta: 612 },
  { name: "Mar", investasi: 5.6, peserta: 748 },
  { name: "Apr", investasi: 5.2, peserta: 682 },
  { name: "Mei", investasi: 5.8, peserta: 700 },
];

export const devByOrg = [
  { label: "PTPN IV", value: 5.2, note: "684 peserta" },
  { label: "PTPN III", value: 4.8, note: "612 peserta" },
  { label: "Holding & SBU", value: 4.1, note: "428 peserta" },
  { label: "PTPN IV Regional 3", value: 3.6, note: "486 peserta" },
  { label: "PTPN I", value: 3.1, note: "414 peserta" },
  { label: "PTPN IV Regional 4", value: 2.2, note: "324 peserta" },
  { label: "PTPN I Regional 1", value: 1.8, note: "280 peserta" },
];

export const devNotes: DetailNote[] = [
  {
    title: "Strategic Project paling efisien",
    detail:
      "Uplift +0,24 pts dengan biaya Rp 3,4 M — hasil terbaik per rupiah. Kapasitas program ini layak diperbesar pada semester dua.",
    tone: "green",
  },
  {
    title: "Technical & Digital penyelesaian terendah",
    detail:
      "84% dengan peserta terbanyak (1.245). Penyebab utama: bentrok jadwal operasional pada peserta lapangan.",
    tone: "amber",
  },
  {
    title: "370 talenta naik kelas readiness",
    detail:
      "Setara 8% peserta program. Leadership Acceleration menyumbang 142, terbesar sekaligus paling langsung ke pool suksesi.",
    tone: "blue",
  },
  {
    title: "Alokasi timpang antar entitas",
    detail:
      "PTPN IV menyerap Rp 5,2 M sementara PTPN I Regional 1 hanya Rp 1,8 M — padahal PTPN I Regional 1 berporsi Star terendah (25,2%) dan paling butuh penguatan.",
    tone: "red",
  },
];

export const devDefinitions = [
  {
    term: "Capability Uplift",
    text: "Kenaikan skor asesmen kapabilitas peserta dibanding baseline sebelum program, diukur pada siklus asesmen berikutnya.",
  },
  {
    term: "Estimated Contribution",
    text: "Rantai outcome bersifat kontribusi terestimasi, bukan ROI kausal; atribusi penuh menunggu model evaluasi dampak.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   10. Executive Talent Intelligence
   ══════════════════════════════════════════════════════════════════════ */

export const execKpi: DetailKpi[] = [
  {
    label: "Sinyal Aktif",
    value: "4",
    share: "2 kritis",
    delta: "1 sinyal",
    trend: "down",
    tone: "green",
    compare: "vs Apr 2026",
  },
  {
    label: "Talenta Terdampak",
    value: "1.359",
    share: "36,3% talenta",
    delta: "48 orang",
    trend: "up",
    tone: "amber",
    compare: "vs Apr 2026",
  },
  {
    label: "Posisi Kritikal Terekspos",
    value: "32",
    share: "15,4%",
    delta: "3 posisi",
    trend: "up",
    tone: "red",
    compare: "vs Apr 2026",
  },
  {
    label: "Aksi Berjalan",
    value: "11",
    share: "dari 14",
    delta: "78,6%",
    trend: "up",
    tone: "green",
    compare: "tingkat eksekusi",
  },
  {
    label: "Aksi Terlambat",
    value: "3",
    share: "21,4%",
    delta: "1 aksi",
    trend: "down",
    tone: "amber",
    compare: "vs Apr 2026",
  },
  {
    label: "Talent Intelligence Index",
    value: "74",
    suffix: "/100",
    delta: "6 pts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

export interface ExecSignalDetail {
  no: string;
  tone: "red" | "amber" | "green";
  title: string;
  temuan: string;
  bukti: string;
  eksposur: string;
  aksi: string;
  pemilik: string;
  tenggat: string;
  status: "Berjalan" | "Terlambat" | "Rencana" | "Selesai";
  sumber: string;
}

/** Sinyal sintesis lintas widget, diperluas dengan bukti, aksi, dan pemiliknya. */
export const execSignalDetail: ExecSignalDetail[] = [
  {
    no: "S1",
    tone: "red",
    title: "86 talenta kritikal berisiko tinggi",
    temuan:
      "Populasi high flight risk naik 14 orang dalam 12 bulan; 32 di antaranya memegang posisi kritikal dan 5 tanpa backup suksesor aktif.",
    bukti: "Risk score ≥ 70 pada model prediktif; faktor dominan mobilitas karier (33%) dan kompensasi (29%).",
    eksposur: "Kontinuitas operasi, lead time penggantian 8–12 bulan",
    aksi: "Program retensi targeted untuk 32 talenta kritikal + aktivasi backup suksesi paralel",
    pemilik: "Direktur SDM & Talent Council",
    tenggat: "31 Agu 2026",
    status: "Berjalan",
    sumber: "Talent Risk Overview",
  },
  {
    no: "S2",
    tone: "red",
    title: "27 posisi kritikal tanpa suksesor",
    temuan:
      "13% dari 208 posisi kritikal belum punya kandidat pada pipeline manapun, terkonsentrasi di Manajer Keuangan (4) dan Manajer Komersial (3).",
    bukti: "Coverage Keuangan 58% dan Komersial 60%, terendah dari tujuh kelompok posisi kritikal.",
    eksposur: "Risiko kekosongan peran dalam 12 bulan",
    aksi: "Akselerasi 54 kandidat pool Ready in 1–2 Tahun dengan target dua kandidat per posisi",
    pemilik: "Direktur SDM & GM Entitas",
    tenggat: "31 Des 2026",
    status: "Berjalan",
    sumber: "Critical Role Coverage",
  },
  {
    no: "S3",
    tone: "amber",
    title: "Gap kapabilitas Technical & Digital −0,2",
    temuan:
      "Technical Expertise 3,9 versus benchmark 4,1 dan Digital Literacy 3,8 versus 4,0. Gap terbesar justru di lapis Direktur & SVP (3,6).",
    bukti: "Asesmen kapabilitas 3.228 talenta; 1.245 sedang mengikuti program penguatan terkait.",
    eksposur: "Kesiapan pipeline & adopsi inisiatif digital",
    aksi: "Perluas Technical & Digital Capability ke lapis eksekutif; naikkan completion dari 84%",
    pemilik: "Kepala Learning & Development",
    tenggat: "30 Nov 2026",
    status: "Terlambat",
    sumber: "Talent Attributes Insight",
  },
  {
    no: "S4",
    tone: "green",
    title: "87% mobilitas berdampak positif",
    temuan:
      "336 perpindahan YTD menaikkan kinerja rata-rata +0,36 pts. Promosi memberi uplift tertinggi (+0,42) dengan retensi 96,1%.",
    bukti: "Perbandingan skor kinerja dua siklus sebelum dan sesudah perpindahan.",
    eksposur: "Peluang pengisian internal-first",
    aksi: "Naikkan target pengisian internal dari 74% ke 82% pada semester dua",
    pemilik: "Direktur SDM",
    tenggat: "31 Des 2026",
    status: "Berjalan",
    sumber: "Talent Mobility Overview",
  },
];

export const execWatchlist = [
  { label: "Talenta high flight risk", value: 86, note: "S1" },
  { label: "Peserta program penutup gap", value: 1245, note: "S3" },
  { label: "Kandidat akselerasi 1–2 tahun", value: 54, note: "S2" },
  { label: "Posisi kritikal tanpa suksesor", value: 27, note: "S2" },
  { label: "Perpindahan internal YTD", value: 336, note: "S4" },
];

export const execRecommendation =
  "Lindungi 86 talenta kritikal berisiko tinggi melalui retensi targeted, sambil mengakselerasi pool Ready in 1–2 Tahun (656 orang) untuk menutup 27 posisi kritikal tanpa suksesor.";

export const execNotes: DetailNote[] = [
  {
    title: "Dua sinyal kritis saling mengunci",
    detail:
      "S1 dan S2 beririsan pada lima posisi: talenta berisiko tinggi yang memegang posisi kritikal tanpa suksesor. Ini titik eksposur tertinggi grup.",
    tone: "red",
  },
  {
    title: "Satu aksi terlambat",
    detail:
      "Perluasan program Technical & Digital ke lapis eksekutif belum berjalan; completion program induk juga terendah (84%).",
    tone: "amber",
  },
  {
    title: "Mobilitas internal lever termurah",
    detail:
      "Menaikkan pengisian internal 8 ppts setara menghindari 17 rekrutmen eksternal dengan lead time 8–12 bulan.",
    tone: "green",
  },
  {
    title: "Sinyal dirangkai dari widget sumber",
    detail:
      "Setiap sinyal mengacu angka satu kartu induk, sehingga penelusuran balik ke halaman detail terkait selalu memungkinkan.",
    tone: "blue",
  },
];

export const execDefinitions = [
  {
    term: "Sinyal",
    text: "Temuan sintesis lintas kartu yang melewati ambang materialitas: berdampak ke posisi kritikal, tren memburuk dua periode, atau selisih terhadap target melebihi 10%.",
  },
  {
    term: "Eksposur",
    text: "Konsekuensi bisnis bila sinyal tidak ditangani sampai tenggat aksi.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   11. Tren Total Talenta Aktif
   ══════════════════════════════════════════════════════════════════════ */

export const trenKpi: DetailKpi[] = [
  {
    label: "Talenta Aktif",
    value: "3.742",
    suffix: "orang",
    delta: "6,8%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025: 3.504",
  },
  {
    label: "Penambahan Bersih (12 Bln)",
    value: "+238",
    share: "rata-rata +20/bln",
    delta: "34 orang",
    trend: "up",
    tone: "green",
    compare: "vs periode sebelumnya",
  },
  {
    label: "Masuk Pool (12 Bln)",
    value: "412",
    share: "identifikasi baru",
    delta: "9,6%",
    trend: "up",
    tone: "neutral",
    compare: "vs periode sebelumnya",
  },
  {
    label: "Keluar Pool (12 Bln)",
    value: "174",
    share: "resign, pensiun, keluar kriteria",
    delta: "4,1%",
    trend: "down",
    tone: "green",
    compare: "vs periode sebelumnya",
  },
  {
    label: "Cakupan Talent Review",
    value: "86,3",
    suffix: "%",
    delta: "3,2 ppts",
    trend: "up",
    tone: "green",
    compare: "vs siklus 2025",
  },
  {
    label: "Porsi HiPo",
    value: "28,5",
    suffix: "%",
    delta: "0,4 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
];

/** Talenta aktif dan komposisi HiPo, 12 bulan berjalan (Jun 2025 – Mei 2026). */
export const trenTalentaDetail = [
  { name: "Jun 25", total: 3504, hipo: 986, readyNow: 448 },
  { name: "Jul 25", total: 3521, hipo: 994, readyNow: 444 },
  { name: "Agt 25", total: 3548, hipo: 1002, readyNow: 440 },
  { name: "Sep 25", total: 3562, hipo: 1012, readyNow: 436 },
  { name: "Okt 25", total: 3590, hipo: 1020, readyNow: 432 },
  { name: "Nov 25", total: 3612, hipo: 1028, readyNow: 428 },
  { name: "Des 25", total: 3630, hipo: 1034, readyNow: 426 },
  { name: "Jan 26", total: 3655, hipo: 1042, readyNow: 424 },
  { name: "Feb 26", total: 3678, hipo: 1048, readyNow: 421 },
  { name: "Mar 26", total: 3701, hipo: 1054, readyNow: 418 },
  { name: "Apr 26", total: 3724, hipo: 1062, readyNow: 415 },
  { name: "Mei 26", total: 3742, hipo: 1068, readyNow: 412 },
];

/** Arus masuk dan keluar pool talenta per kuartal. */
export const trenArus = [
  { name: "Q3 25", masuk: 98, keluar: 44 },
  { name: "Q4 25", masuk: 104, keluar: 42 },
  { name: "Q1 26", masuk: 112, keluar: 45 },
  { name: "Q2 26", masuk: 98, keluar: 43 },
];

export const trenMasukKeluar = [
  { label: "Identifikasi siklus talent review", value: 268, note: "masuk" },
  { label: "Promosi masuk kriteria", value: 96, note: "masuk" },
  { label: "Rekrutmen eksternal terpilih", value: 48, note: "masuk" },
  { label: "Resign", value: 74, note: "keluar" },
  { label: "Pensiun", value: 52, note: "keluar" },
  { label: "Keluar kriteria talent review", value: 48, note: "keluar" },
];

export interface TrenOrgRow {
  name: string;
  mei25: number;
  mei26: number;
  growth: number;
  masuk: number;
  keluar: number;
}

export const trenByOrg: TrenOrgRow[] = [
  { name: "PTPN I", mei25: 456, mei26: 486, growth: 6.6, masuk: 52, keluar: 22 },
  { name: "PTPN I Regional 1", mei25: 398, mei26: 412, growth: 3.5, masuk: 38, keluar: 24 },
  { name: "PTPN III", mei25: 618, mei26: 664, growth: 7.4, masuk: 76, keluar: 30 },
  { name: "PTPN IV", mei25: 686, mei26: 742, growth: 8.2, masuk: 88, keluar: 32 },
  { name: "PTPN IV Regional 3", mei25: 514, mei26: 548, growth: 6.6, masuk: 58, keluar: 24 },
  { name: "PTPN IV Regional 4", mei25: 410, mei26: 428, growth: 4.4, masuk: 42, keluar: 24 },
  { name: "Holding & SBU", mei25: 422, mei26: 462, growth: 9.5, masuk: 58, keluar: 18 },
];

export const trenNotes: DetailNote[] = [
  {
    title: "Pertumbuhan berasal dari perluasan cakupan",
    detail:
      "268 dari 412 talenta baru masuk lewat perluasan cakupan talent review ke jalur spesialis kritikal, bukan penambahan pekerja.",
    tone: "blue",
  },
  {
    title: "Populasi naik, Ready Now turun",
    detail:
      "Talenta aktif +238 orang sementara Ready Now turun 36 orang dalam periode yang sama. Pertumbuhan terjadi di lapis pipeline bawah.",
    tone: "amber",
  },
  {
    title: "Holding & SBU tumbuh tercepat",
    detail:
      "+9,5% dengan keluar pool terendah (18 orang), sejalan dengan porsi Star tertinggi 32,0%.",
    tone: "green",
  },
  {
    title: "PTPN I Regional 1 tertinggal",
    detail:
      "Tumbuh 3,5% dengan keluar pool 24 orang. Entitas ini juga terendah pada porsi Star, coverage, dan investasi development.",
    tone: "red",
  },
];

export const trenDefinitions = [
  {
    term: "Masuk / Keluar Pool",
    text: "Perubahan status keanggotaan pool talenta, bukan rekrutmen atau turnover pekerja secara umum.",
  },
  {
    term: "Cakupan Talent Review",
    text: "Porsi talenta yang menjalani siklus asesmen lengkap pada periode berjalan.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   12. Talent Intelligence Index
   ══════════════════════════════════════════════════════════════════════ */

export const indexKpi: DetailKpi[] = [
  {
    label: "Talent Intelligence Index",
    value: "74",
    suffix: "/100",
    delta: "6 pts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Komponen Terkuat",
    value: "82",
    share: "Talent Quality",
    delta: "4 pts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Komponen Terlemah",
    value: "68",
    share: "Leadership Readiness",
    delta: "2 pts",
    trend: "up",
    tone: "amber",
    compare: "vs Mei 2025",
  },
  {
    label: "Komponen di Zona Aman",
    value: "3",
    suffix: "dari 7",
    delta: "1 komponen",
    trend: "up",
    tone: "green",
    compare: "ambang ≥ 75",
  },
  {
    label: "Target Index 2027",
    value: "80",
    suffix: "/100",
    delta: "6 pts",
    trend: "flat",
    tone: "neutral",
    compare: "selisih ke target",
  },
  {
    label: "Laju Perbaikan",
    value: "+3",
    suffix: "pts/smt",
    delta: "0,5 pts",
    trend: "up",
    tone: "green",
    compare: "rata-rata 4 semester",
  },
];

export interface IndexComponentDetail {
  label: string;
  score: number;
  target: number;
  prev: number;
  tone: "good" | "warn" | "bad";
  /** Metrik penyusun komponen beserta nilai terkininya. */
  penyusun: string;
  sumber: string;
}

export const indexComponentDetail: IndexComponentDetail[] = [
  { label: "Talent Quality", score: 82, target: 85, prev: 78, tone: "good", penyusun: "Porsi kuadran atas 60,4% · skor potensi rata-rata 8,4", sumber: "Talent Portfolio" },
  { label: "Development Effectiveness", score: 79, target: 82, prev: 74, tone: "good", penyusun: "Completion 87% · capability uplift +12%", sumber: "Talent Development" },
  { label: "Internal Mobility", score: 76, target: 80, prev: 70, tone: "good", penyusun: "Pengisian internal 74% · 87% mobilitas berdampak positif", sumber: "Talent Mobility" },
  { label: "Talent Risk", score: 74, target: 82, prev: 71, tone: "warn", penyusun: "Retensi internal 91% · 86 talenta high flight risk", sumber: "Talent Risk" },
  { label: "Critical Skills", score: 71, target: 80, prev: 66, tone: "warn", penyusun: "Skor kapabilitas 4,00 · dua atribut di bawah benchmark", sumber: "Talent Attributes" },
  { label: "Leadership Readiness", score: 68, target: 78, prev: 66, tone: "warn", penyusun: "Ready Now 11,0% · 268 HiPo siap dari 1.068", sumber: "Talent Pipeline" },
  { label: "Critical Role Coverage", score: 68, target: 80, prev: 64, tone: "warn", penyusun: "Coverage 68% · 27 posisi tanpa suksesor", sumber: "Critical Role Coverage" },
];

export const indexTrend = [
  { name: "Nov 23", index: 62, target: 80 },
  { name: "Mei 24", index: 65, target: 80 },
  { name: "Nov 24", index: 67, target: 80 },
  { name: "Mei 25", index: 68, target: 80 },
  { name: "Nov 25", index: 71, target: 80 },
  { name: "Mei 26", index: 74, target: 80 },
];

export const indexByOrg = [
  { label: "Holding & SBU", value: 79, note: "+7 pts YoY" },
  { label: "PTPN IV", value: 77, note: "+6 pts YoY" },
  { label: "PTPN III", value: 76, note: "+6 pts YoY" },
  { label: "PTPN IV Regional 3", value: 73, note: "+5 pts YoY" },
  { label: "PTPN I", value: 72, note: "+6 pts YoY" },
  { label: "PTPN IV Regional 4", value: 70, note: "+4 pts YoY" },
  { label: "PTPN I Regional 1", value: 67, note: "+3 pts YoY" },
];

export const indexNotes: DetailNote[] = [
  {
    title: "Empat komponen di bawah ambang aman",
    detail:
      "Talent Risk, Critical Skills, Leadership Readiness, dan Critical Role Coverage berada di bawah 75. Keempatnya bermuara pada kesiapan suksesi.",
    tone: "amber",
  },
  {
    title: "Selisih ke target 2027 enam poin",
    detail:
      "Dengan laju +3 poin per semester, target 80 tercapai pada semester dua 2027 — asalkan komponen coverage tidak stagnan.",
    tone: "blue",
  },
  {
    title: "Coverage penghambat terbesar",
    detail:
      "Selisih 12 poin ke target komponen, terbesar dari tujuh komponen. Menaikkannya ke 80 sendirian mengangkat index 1,7 poin.",
    tone: "red",
  },
  {
    title: "Sebaran antar entitas 12 poin",
    detail:
      "Holding & SBU 79 versus PTPN I Regional 1 67. Pemerataan lewat rotasi silang berdampak ganda: menaikkan entitas lemah tanpa menurunkan yang kuat.",
    tone: "green",
  },
];

export const indexDefinitions = [
  {
    term: "Talent Intelligence Index",
    text: "Rata-rata sederhana tujuh komponen kesehatan talenta pada skala 0–100; tiap komponen dinormalisasi dari metrik kartu sumbernya.",
  },
  {
    term: "Zona Aman",
    text: "Skor komponen minimal 75, ambang internal yang dianggap memadai untuk menopang kontinuitas kepemimpinan.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   13. Talent Density Map
   ══════════════════════════════════════════════════════════════════════ */

export const densityKpi: DetailKpi[] = [
  {
    label: "Density Grup",
    value: "3,5",
    suffix: "%",
    delta: "0,2 ppts",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "HiPo Terpetakan",
    value: "1.068",
    share: "5 region",
    delta: "8,4%",
    trend: "up",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Workforce Cakupan",
    value: "30.900",
    share: "unit operasi utama",
    delta: "1,8%",
    trend: "up",
    tone: "neutral",
    compare: "vs Mei 2025",
  },
  {
    label: "Region Density Rendah",
    value: "2",
    suffix: "region",
    delta: "tetap",
    trend: "flat",
    tone: "amber",
    compare: "vs Mei 2025",
  },
  {
    label: "Selisih Density Tertinggi–Terendah",
    value: "1,6",
    suffix: "ppts",
    delta: "0,1 ppts",
    trend: "down",
    tone: "green",
    compare: "vs Mei 2025",
  },
  {
    label: "Coverage Terendah",
    value: "58",
    suffix: "%",
    delta: "Sulawesi",
    trend: "flat",
    tone: "red",
    compare: "posisi kritikal region",
  },
];

export interface DensityRow {
  name: string;
  hipo: number;
  workforce: number;
  density: number;
  coverage: number;
  flightRisk: number;
  posisiKritikal: number;
  tanpaSuksesor: number;
  level: "Tinggi" | "Sedang" | "Rendah";
}

/** HiPo per region konsisten dengan total 1.068 pada KPI HiPo. */
export const densityRows: DensityRow[] = [
  { name: "Sumatra", hipo: 446, workforce: 11400, density: 3.9, coverage: 72, flightRisk: 4.2, posisiKritikal: 84, tanpaSuksesor: 9, level: "Tinggi" },
  { name: "Kalimantan", hipo: 268, workforce: 7200, density: 3.7, coverage: 70, flightRisk: 4.8, posisiKritikal: 48, tanpaSuksesor: 6, level: "Tinggi" },
  { name: "Jawa & Nusa Tenggara", hipo: 158, workforce: 5800, density: 2.7, coverage: 64, flightRisk: 5.4, posisiKritikal: 38, tanpaSuksesor: 5, level: "Sedang" },
  { name: "Sulawesi", hipo: 78, workforce: 3400, density: 2.3, coverage: 58, flightRisk: 6.1, posisiKritikal: 22, tanpaSuksesor: 4, level: "Rendah" },
  { name: "Papua & Maluku", hipo: 118, workforce: 3100, density: 3.8, coverage: 66, flightRisk: 5.0, posisiKritikal: 16, tanpaSuksesor: 3, level: "Tinggi" },
];

export const densityNotes: DetailNote[] = [
  {
    title: "Sulawesi titik terlemah",
    detail:
      "Density 2,3%, coverage 58%, dan flight risk 6,1% — terburuk pada ketiga metrik sekaligus, dengan 4 dari 22 posisi kritikal tanpa suksesor.",
    tone: "red",
  },
  {
    title: "Density berbanding terbalik dengan flight risk",
    detail:
      "Region dengan density di bawah 3% memiliki flight risk rata-rata 5,8% versus 4,6% pada region density tinggi. Talenta tipis membuat beban dan risiko menumpuk.",
    tone: "amber",
  },
  {
    title: "Papua & Maluku efisien",
    detail:
      "Density 3,8% dengan workforce terkecil (3.100). Pool kecil tetapi berkualitas; cocok sebagai sumber rotasi ke region defisit.",
    tone: "green",
  },
  {
    title: "Sumatra penopang utama",
    detail:
      "446 HiPo atau 41,8% pool grup, melayani 84 posisi kritikal. Konsentrasi ini membuat setiap gangguan di Sumatra berdampak ke seluruh grup.",
    tone: "blue",
  },
];

export const densityDefinitions = [
  {
    term: "Talent Density",
    text: "Jumlah HiPo dibagi workforce pada unit operasi utama di region tersebut.",
  },
  {
    term: "Workforce Cakupan",
    text: "30.900 pekerja pada unit operasi utama yang masuk pemetaan region — subset dari 70.142 headcount grup.",
  },
  ...tiCommonDefinitions,
];

/* ══════════════════════════════════════════════════════════════════════
   14. Talent Decisions
   ══════════════════════════════════════════════════════════════════════ */

export const decisionKpi: DetailKpi[] = [
  {
    label: "Keputusan Diajukan",
    value: "9",
    share: "3 prioritas utama",
    delta: "2 keputusan",
    trend: "up",
    tone: "neutral",
    compare: "vs Apr 2026",
  },
  {
    label: "Menunggu Keputusan BOD",
    value: "3",
    share: "33,3%",
    delta: "1 keputusan",
    trend: "up",
    tone: "amber",
    compare: "vs Apr 2026",
  },
  {
    label: "Disetujui & Berjalan",
    value: "5",
    share: "55,6%",
    delta: "2 keputusan",
    trend: "up",
    tone: "green",
    compare: "vs Apr 2026",
  },
  {
    label: "Talenta Terdampak",
    value: "767",
    share: "20,5% talenta",
    delta: "12,4%",
    trend: "up",
    tone: "neutral",
    compare: "vs Apr 2026",
  },
  {
    label: "Estimasi Anggaran",
    value: "8,6",
    prefix: "Rp",
    suffix: "M",
    delta: "1,2 M",
    trend: "up",
    tone: "neutral",
    compare: "vs Apr 2026",
  },
  {
    label: "Rata-rata Umur Keputusan",
    value: "24",
    suffix: "hari",
    delta: "6 hari",
    trend: "down",
    tone: "green",
    compare: "vs Apr 2026",
  },
];

export interface DecisionRow {
  kode: string;
  tone: "red" | "amber" | "green";
  kicker: string;
  judul: string;
  konteks: string;
  rekomendasi: string;
  dampak: string;
  talenta: number;
  anggaran: string;
  pemilik: string;
  tenggat: string;
  status: "Menunggu BOD" | "Disetujui" | "Berjalan" | "Selesai";
  kategori: string;
}

export const decisionRows: DecisionRow[] = [
  {
    kode: "D1",
    tone: "red",
    kicker: "Decision Required",
    judul: "Akselerasi suksesi 27 posisi kritikal",
    konteks: "27 posisi tanpa suksesor, terbesar pada Manajer Keuangan (4) dan Manajer Komersial (3). Lead time eksternal 8–12 bulan.",
    rekomendasi: "Akselerasi 54 kandidat dari pool Ready in 1–2 Tahun, dua kandidat per posisi.",
    dampak: "Coverage naik dari 68% ke estimasi 79%",
    talenta: 54,
    anggaran: "Rp 2,4 M",
    pemilik: "Direktur SDM",
    tenggat: "31 Des 2026",
    status: "Menunggu BOD",
    kategori: "Kontinuitas",
  },
  {
    kode: "D2",
    tone: "amber",
    kicker: "Action Required",
    judul: "Program retensi 86 talenta high flight risk",
    konteks: "32 di antaranya pada posisi kritikal, termasuk Manajer Pabrik PTPN IV Regional 3 (risk 85) dan Kepala Kebun PTPN IV (risk 82).",
    rekomendasi: "Retensi targeted per individu plus penyiapan backup suksesi paralel.",
    dampak: "Menahan estimasi 66 talenta (77% tingkat keberhasilan intervensi)",
    talenta: 86,
    anggaran: "Rp 3,1 M",
    pemilik: "Direktur SDM & GM Entitas",
    tenggat: "31 Agu 2026",
    status: "Berjalan",
    kategori: "Retensi",
  },
  {
    kode: "D3",
    tone: "green",
    kicker: "Opportunity",
    judul: "Prioritaskan 47 HiPo untuk lowongan kritikal",
    konteks: "Skill profile 47 HiPo cocok (match ≥ 80%) dengan lowongan posisi kritikal yang sedang dibuka.",
    rekomendasi: "Mobilitas internal sebelum membuka rekrutmen eksternal.",
    dampak: "Lead time pengisian turun dari 8–12 bulan ke 2–3 bulan",
    talenta: 47,
    anggaran: "Rp 0,6 M",
    pemilik: "Direktur SDM",
    tenggat: "30 Sep 2026",
    status: "Disetujui",
    kategori: "Efisiensi",
  },
  {
    kode: "D4",
    tone: "amber",
    kicker: "Action Required",
    judul: "Perluas program Digital Literacy ke lapis eksekutif",
    konteks: "Digital Literacy lapis Direktur & SVP 3,6 — terendah dari seluruh kombinasi atribut dan lapis jabatan.",
    rekomendasi: "Modul khusus eksekutif dengan pendampingan, target skor 4,0 pada asesmen 2027.",
    dampak: "Menutup gap −0,2 terhadap benchmark industri",
    talenta: 128,
    anggaran: "Rp 1,4 M",
    pemilik: "Kepala Learning & Development",
    tenggat: "30 Nov 2026",
    status: "Menunggu BOD",
    kategori: "Kapabilitas",
  },
  {
    kode: "D5",
    tone: "amber",
    kicker: "Action Required",
    judul: "Realokasi investasi development ke entitas defisit",
    konteks: "PTPN I Regional 1 menyerap Rp 1,8 M dengan porsi Star terendah (25,2%), sementara PTPN IV menyerap Rp 5,2 M.",
    rekomendasi: "Geser Rp 0,8 M pagu semester dua ke PTPN I Regional 1 dan PTPN IV Regional 4.",
    dampak: "Pemerataan Talent Intelligence Index antar entitas",
    talenta: 312,
    anggaran: "Rp 0,8 M",
    pemilik: "Kepala Learning & Development",
    tenggat: "31 Jul 2026",
    status: "Berjalan",
    kategori: "Alokasi",
  },
  {
    kode: "D6",
    tone: "red",
    kicker: "Decision Required",
    judul: "Aktifkan backup suksesi 5 posisi tanpa cadangan",
    konteks: "Lima talenta high flight risk memegang posisi kritikal tanpa suksesor aktif sama sekali.",
    rekomendasi: "Tunjuk pejabat pendamping dan mulai transfer pengetahuan terstruktur dalam 60 hari.",
    dampak: "Menghilangkan titik eksposur tunggal pada lima posisi",
    talenta: 10,
    anggaran: "Rp 0,3 M",
    pemilik: "Talent Council",
    tenggat: "31 Jul 2026",
    status: "Menunggu BOD",
    kategori: "Kontinuitas",
  },
];

export const decisionByCategory = [
  { label: "Kontinuitas", value: 64, note: "2 keputusan" },
  { label: "Retensi", value: 86, note: "1 keputusan" },
  { label: "Kapabilitas", value: 128, note: "1 keputusan" },
  { label: "Alokasi", value: 312, note: "1 keputusan" },
  { label: "Efisiensi", value: 47, note: "1 keputusan" },
];

export const decisionNotes: DetailNote[] = [
  {
    title: "Tiga keputusan menunggu BOD",
    detail:
      "D1, D4, dan D6 belum diputuskan. D6 paling mendesak: tenggat 31 Juli 2026 dan menyangkut lima titik eksposur tunggal.",
    tone: "red",
  },
  {
    title: "Anggaran terkonsentrasi di retensi",
    detail:
      "Rp 3,1 M dari total Rp 8,6 M (36%) untuk program retensi 86 talenta — nilai terbesar sekaligus paling terukur hasilnya.",
    tone: "amber",
  },
  {
    title: "Keputusan efisiensi bernilai tertinggi",
    detail:
      "D3 hanya butuh Rp 0,6 M tetapi memangkas lead time pengisian hingga 9 bulan untuk 47 posisi.",
    tone: "green",
  },
  {
    title: "Umur keputusan membaik",
    detail:
      "Rata-rata 24 hari dari pengajuan ke keputusan, turun 6 hari dibanding April 2026.",
    tone: "blue",
  },
];

export const decisionDefinitions = [
  {
    term: "Talent Decision",
    text: "Rekomendasi aksi yang membutuhkan keputusan atau persetujuan BOD, diturunkan dari sinyal Executive Talent Intelligence.",
  },
  {
    term: "Umur Keputusan",
    text: "Jumlah hari sejak keputusan diajukan sampai diputuskan atau, bila belum, sampai tanggal data.",
  },
  ...tiCommonDefinitions,
];
