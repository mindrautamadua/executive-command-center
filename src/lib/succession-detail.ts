/**
 * Data halaman detail kartu Succession Planning.
 * Angka jangkar diikat ke `succession-data.ts`: 212 posisi kritis, 158 tercakup
 * (74,5%), 54 tanpa kandidat, 400 kandidat suksesor, 1.245 talenta HiPo,
 * bench strength 1,6, dan 64 kandidat siap < 1 tahun.
 */

import { PALETTE, READINESS, SEMANTIC } from "./chart-palette";
import {
  distribusiKesiapan,
  nineBox,
  pipelineLevel,
  rencanaAksi,
  talentPoolFungsi,
  trenBenchStrength,
} from "./succession-data";
import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";

export const totalHipo = nineBox.reduce((a, v) => a + v, 0); // 1.245
export const totalKandidatSuksesi = pipelineLevel.reduce((a, r) => a + r.total, 0); // 400

const pctOf = (v: number, total: number) => ((v / total) * 100).toFixed(1).replace(".", ",");

/* ══════════════════════════════════════════════════════════════════
   1. Peta Suksesi — 9 Box Talent Grid
   ══════════════════════════════════════════════════════════════════ */

export interface NineBoxCell {
  box: number;
  name: string;
  value: number;
  pct: string;
  action: string;
  tone: "green" | "greenSoft" | "greenPale" | "amber" | "red";
}

/** Urutan kanonik: baris atas = potensi tinggi, kolom kanan = kinerja tinggi. */
export const nineBoxCells: NineBoxCell[] = [
  { box: 7, name: "Enigma", value: nineBox[0], pct: pctOf(nineBox[0], totalHipo), action: "Diagnosa hambatan kinerja", tone: "amber" },
  { box: 8, name: "High Potential", value: nineBox[1], pct: pctOf(nineBox[1], totalHipo), action: "Akselerasi & penugasan menantang", tone: "greenSoft" },
  { box: 9, name: "Star Talent", value: nineBox[2], pct: pctOf(nineBox[2], totalHipo), action: "Nominasi posisi kritis & retensi", tone: "green" },
  { box: 4, name: "Question Mark", value: nineBox[3], pct: pctOf(nineBox[3], totalHipo), action: "Klarifikasi ekspektasi & coaching", tone: "amber" },
  { box: 5, name: "Core Player", value: nineBox[4], pct: pctOf(nineBox[4], totalHipo), action: "Pertahankan & perluas kompetensi", tone: "greenPale" },
  { box: 6, name: "High Performer", value: nineBox[5], pct: pctOf(nineBox[5], totalHipo), action: "Perkaya peran, uji potensi lebih luas", tone: "greenSoft" },
  { box: 1, name: "Low Performer", value: nineBox[6], pct: pctOf(nineBox[6], totalHipo), action: "Performance Improvement Plan", tone: "red" },
  { box: 2, name: "Inconsistent Player", value: nineBox[7], pct: pctOf(nineBox[7], totalHipo), action: "Stabilkan kinerja, evaluasi kecocokan", tone: "amber" },
  { box: 3, name: "Solid Performer", value: nineBox[8], pct: pctOf(nineBox[8], totalHipo), action: "Jaga kontribusi pada peran saat ini", tone: "greenPale" },
];

export const nineBoxKpi: DetailKpi[] = [
  { label: "Talenta Dinilai", value: "1.245", delta: "+5,5%", trend: "up", tone: "neutral", compare: "vs Q1 2026 (1.180)" },
  { label: "Star Talent", value: "307", share: "24,7%", delta: "+38", trend: "up", tone: "green", compare: "Box 9 — prioritas nominasi" },
  { label: "Potensi Tinggi (Box 7-9)", value: "642", share: "51,6%", delta: "+2,4 ppts", trend: "up", tone: "green", compare: "Baris atas grid" },
  { label: "Core Player", value: "211", share: "16,9%", delta: "-12", trend: "down", tone: "neutral", compare: "Box 5 — tulang punggung operasi" },
  { label: "Kinerja Rendah (Box 1-3)", value: "117", share: "9,4%", delta: "-1,1 ppts", trend: "down", tone: "amber", compare: "Baris bawah grid" },
  { label: "Low Performer", value: "39", share: "3,1%", delta: "-8", trend: "down", tone: "red", compare: "Box 1 — kandidat PIP" },
];

/** Pergeseran populasi tiap baris grid antar kuartal (persen populasi). */
export const nineBoxTrend = [
  { name: "Q3 2025", potensiTinggi: 44.8, potensiMenengah: 42.7, potensiRendah: 12.5 },
  { name: "Q4 2025", potensiTinggi: 46.9, potensiMenengah: 41.6, potensiRendah: 11.5 },
  { name: "Q1 2026", potensiTinggi: 49.2, potensiMenengah: 40.3, potensiRendah: 10.5 },
  { name: "Q2 2026", potensiTinggi: 51.6, potensiMenengah: 39.0, potensiRendah: 9.4 },
];

export const nineBoxByFungsi = [
  { label: "Operasional", value: 34.8, note: "135 Star Talent" },
  { label: "Keuangan", value: 26.5, note: "54 Star Talent" },
  { label: "Komersial", value: 24.6, note: "46 Star Talent" },
  { label: "Teknologi & Digital", value: 21.7, note: "28 Star Talent" },
  { label: "SDM & Umum", value: 19.3, note: "23 Star Talent" },
  { label: "Lainnya", value: 9.6, note: "21 Star Talent" },
];

export interface NineBoxRow {
  box: string;
  nama: string;
  jumlah: number;
  pct: string;
  deltaKuartal: string;
  kandidatSuksesi: number;
  tindakan: string;
  pemilik: string;
}

export const nineBoxRows: NineBoxRow[] = [
  { box: "Box 9", nama: "Star Talent", jumlah: 307, pct: "24,7%", deltaKuartal: "+38", kandidatSuksesi: 186, tindakan: "Nominasi posisi kritis, retensi terarah", pemilik: "Direktur SDM Holding" },
  { box: "Box 8", nama: "High Potential", jumlah: 247, pct: "19,8%", deltaKuartal: "+29", kandidatSuksesi: 118, tindakan: "Akselerasi via penugasan menantang", pemilik: "VP Talent Management" },
  { box: "Box 6", nama: "High Performer", jumlah: 160, pct: "12,9%", deltaKuartal: "+11", kandidatSuksesi: 62, tindakan: "Perluas ruang lingkup, uji potensi", pemilik: "SVP Unit terkait" },
  { box: "Box 5", nama: "Core Player", jumlah: 211, pct: "16,9%", deltaKuartal: "-12", kandidatSuksesi: 24, tindakan: "Pertahankan, perkuat kompetensi teknis", pemilik: "SVP Unit terkait" },
  { box: "Box 7", nama: "Enigma", jumlah: 88, pct: "7,1%", deltaKuartal: "+6", kandidatSuksesi: 8, tindakan: "Diagnosa hambatan kinerja, coaching", pemilik: "VP Talent Management" },
  { box: "Box 4", nama: "Question Mark", jumlah: 115, pct: "9,2%", deltaKuartal: "-4", kandidatSuksesi: 2, tindakan: "Klarifikasi ekspektasi & target 6 bulan", pemilik: "Atasan langsung" },
  { box: "Box 3", nama: "Solid Performer", jumlah: 28, pct: "2,2%", deltaKuartal: "-3", kandidatSuksesi: 0, tindakan: "Jaga kontribusi pada peran saat ini", pemilik: "Atasan langsung" },
  { box: "Box 2", nama: "Inconsistent Player", jumlah: 50, pct: "4,0%", deltaKuartal: "-5", kandidatSuksesi: 0, tindakan: "Stabilkan kinerja, evaluasi kecocokan", pemilik: "Atasan langsung" },
  { box: "Box 1", nama: "Low Performer", jumlah: 39, pct: "3,1%", deltaKuartal: "-8", kandidatSuksesi: 0, tindakan: "Performance Improvement Plan 90 hari", pemilik: "HC Business Partner" },
];

export const nineBoxNotes: DetailNote[] = [
  {
    title: "Baris atas menebal empat kuartal",
    detail:
      "Potensi tinggi naik dari 44,8% ke 51,6% populasi dinilai. Perlu dicek apakah kalibrasi potensi masih ketat atau mulai longgar.",
    tone: "amber",
  },
  {
    title: "Enigma tertahan di 88 orang",
    detail:
      "Potensi tinggi dengan kinerja rendah — hanya 8 yang masuk kandidat suksesi. Diagnosa hambatan belum berjalan di 5 entitas.",
    tone: "red",
  },
  {
    title: "Star Talent memasok 46% pipeline",
    detail: "186 dari 400 kandidat suksesi berasal dari Box 9 — konsentrasi wajar, tetapi menandakan ketergantungan pada satu kotak.",
    tone: "blue",
  },
];

export const nineBoxDefinitions = [
  { term: "Sumbu grid", text: "Potensi (skala 1–10, hasil assessment center) terhadap kinerja (skala 1–5, hasil penilaian dua siklus terakhir)." },
  { term: "Populasi dinilai", text: "1.245 talenta yang mengikuti kalibrasi talenta Q2 2026 — bukan seluruh karyawan grup." },
  { term: "Kandidat suksesi", text: "Talenta pada kotak tersebut yang sudah dinominasikan pada minimal satu posisi kritis." },
  { term: "Sumber", text: "Talent Management System · forum kalibrasi talenta Q2 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   2. Posisi Kritis
   ══════════════════════════════════════════════════════════════════ */

export const posisiKritisKpi: DetailKpi[] = [
  { label: "Posisi Kritis", value: "212", delta: "+3,4%", trend: "up", tone: "neutral", compare: "vs Q1 2026 (205)" },
  { label: "Tercakup Suksesor", value: "158", share: "74,5%", delta: "+3,3 ppts", trend: "up", tone: "green", compare: "Q1 2026: 71,2%" },
  { label: "Tanpa Kandidat", value: "54", share: "25,5%", delta: "-5 posisi", trend: "down", tone: "red", compare: "Q1 2026: 59 posisi" },
  { label: "Risiko Tinggi", value: "38", share: "17,9%", delta: "-4 posisi", trend: "down", tone: "red", compare: "Bench < 1,0 & tanpa ready now" },
  { label: "Bench Strength", value: "1,6", delta: "+0,1", trend: "up", tone: "green", compare: "Target ≥ 1,0" },
  { label: "Tanpa Pengganti Darurat", value: "27", share: "12,7%", delta: "-6 posisi", trend: "down", tone: "amber", compare: "Eksposur kontinuitas bisnis" },
];

/** Sebaran posisi kritis dan coverage per entitas. */
export const posisiKritisByUnit = [
  { label: "PTPN III (Persero)", value: 41, coverage: 78.0, tanpaKandidat: 9 },
  { label: "PTPN IV", value: 38, coverage: 81.6, tanpaKandidat: 7 },
  { label: "PTPN I", value: 29, coverage: 72.4, tanpaKandidat: 8 },
  { label: "PTPN IV Regional 3", value: 24, coverage: 79.2, tanpaKandidat: 5 },
  { label: "PalmCo", value: 23, coverage: 69.6, tanpaKandidat: 7 },
  { label: "PTPN I Regional 1", value: 21, coverage: 71.4, tanpaKandidat: 6 },
  { label: "Holding & Supporting Co", value: 36, coverage: 69.4, tanpaKandidat: 11 },
];

/** Tren coverage & posisi berisiko sepanjang semester. */
export const posisiKritisTrend = [
  { name: "Jan", coverage: 68.4, risikoTinggi: 48, tanpaKandidat: 67 },
  { name: "Feb", coverage: 69.8, risikoTinggi: 46, tanpaKandidat: 64 },
  { name: "Mar", coverage: 71.2, risikoTinggi: 42, tanpaKandidat: 59 },
  { name: "Apr", coverage: 72.6, risikoTinggi: 41, tanpaKandidat: 58 },
  { name: "Mei", coverage: 73.4, risikoTinggi: 39, tanpaKandidat: 56 },
  { name: "Jun", coverage: 74.5, risikoTinggi: 38, tanpaKandidat: 54 },
];

export interface PosisiKritisDetailRow {
  posisi: string;
  unit: string;
  level: string;
  risk: "Tinggi" | "Sedang" | "Rendah";
  bench: string;
  kandidat: number;
  readyNow: number;
  estSiap: string;
  pemicu: string;
  darurat: "Emergency Ready" | "Interim Ready" | "Tidak Ada";
}

export const posisiKritisRows: PosisiKritisDetailRow[] = [
  { posisi: "Direktur Operasional", unit: "PTPN III (Persero)", level: "Direktur", risk: "Tinggi", bench: "0,5", kandidat: 0, readyNow: 0, estSiap: "9 bln", pemicu: "Pensiun 8 bln", darurat: "Interim Ready" },
  { posisi: "VP Agronomi", unit: "PTPN IV", level: "VP", risk: "Tinggi", bench: "0,7", kandidat: 1, readyNow: 1, estSiap: "Siap", pemicu: "Pensiun 14 bln", darurat: "Emergency Ready" },
  { posisi: "VP Keuangan", unit: "Holding & Supporting Co", level: "VP", risk: "Tinggi", bench: "0,8", kandidat: 0, readyNow: 0, estSiap: "12 bln", pemicu: "Rotasi terencana", darurat: "Tidak Ada" },
  { posisi: "Kepala Kebun", unit: "PTPN IV Regional 3", level: "Manager", risk: "Tinggi", bench: "0,9", kandidat: 2, readyNow: 2, estSiap: "Siap", pemicu: "Promosi est. Q4 2026", darurat: "Emergency Ready" },
  { posisi: "VP Supply Chain", unit: "PTPN I Regional 1", level: "VP", risk: "Sedang", bench: "1,0", kandidat: 1, readyNow: 1, estSiap: "Siap", pemicu: "Belum terjadwal", darurat: "Emergency Ready" },
  { posisi: "VP Human Capital", unit: "PTPN III (Persero)", level: "VP", risk: "Sedang", bench: "1,2", kandidat: 2, readyNow: 2, estSiap: "Siap", pemicu: "Belum terjadwal", darurat: "Emergency Ready" },
  { posisi: "VP Engineering", unit: "PalmCo", level: "VP", risk: "Sedang", bench: "1,3", kandidat: 1, readyNow: 1, estSiap: "Siap", pemicu: "Rotasi terencana", darurat: "Interim Ready" },
  { posisi: "Kepala Pabrik", unit: "PTPN IV", level: "Manager", risk: "Sedang", bench: "1,4", kandidat: 2, readyNow: 2, estSiap: "Siap", pemicu: "Pensiun 16 bln", darurat: "Emergency Ready" },
  { posisi: "VP IT & Digital", unit: "Holding & Supporting Co", level: "VP", risk: "Sedang", bench: "1,5", kandidat: 2, readyNow: 2, estSiap: "Siap", pemicu: "Belum terjadwal", darurat: "Emergency Ready" },
  { posisi: "Kepala Unit Usaha", unit: "PTPN I", level: "Manager", risk: "Sedang", bench: "1,6", kandidat: 2, readyNow: 2, estSiap: "Siap", pemicu: "Promosi est. 2027", darurat: "Emergency Ready" },
];

export const posisiKritisNotes: DetailNote[] = [
  {
    title: "Dua posisi tanpa kandidat sama sekali",
    detail:
      "Direktur Operasional PTPN III dan VP Keuangan Holding tidak punya suksesor teridentifikasi, padahal keduanya memiliki pemicu transisi < 12 bulan.",
    tone: "red",
  },
  {
    title: "Holding paling rapuh",
    detail: "Coverage 69,4% dengan 11 posisi tanpa kandidat — terendah di grup meski populasi talenta terdekat dengan Direksi.",
    tone: "amber",
  },
  {
    title: "Coverage naik stabil",
    detail: "Naik 6,1 ppts dalam enam bulan (68,4% ke 74,5%); pada laju ini target 80% tercapai sekitar Q1 2027.",
    tone: "green",
  },
];

export const posisiKritisDefinitions = [
  { term: "Posisi kritis", text: "Jabatan dengan dampak strategis tinggi dan/atau kelangkaan kompetensi di pasar, ditetapkan forum Direksi." },
  { term: "Bench strength", text: "Rata-rata suksesor layak per posisi setelah dibobot kualitas dan tingkat kesiapan. Target ≥ 1,0." },
  { term: "Risiko tinggi", text: "Bench < 1,0 dan tidak ada kandidat Ready Now, atau pemicu transisi < 12 bulan." },
  { term: "Sumber", text: "Succession Management System · forum suksesi Q2 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   3. Pipeline Kepemimpinan
   ══════════════════════════════════════════════════════════════════ */

export const pipelineKpi: DetailKpi[] = [
  { label: "Total Kandidat", value: "400", delta: "+8,1%", trend: "up", tone: "neutral", compare: "vs Q1 2026 (370)" },
  { label: "Siap < 1 Tahun", value: "64", share: "16,0%", delta: "+2,3 ppts", trend: "up", tone: "green", compare: "Q1 2026: 13,7%" },
  { label: "Siap 1-2 Tahun", value: "102", share: "25,5%", delta: "+9", trend: "up", tone: "green", compare: "Gelombang berikutnya" },
  { label: "Siap 2-3 Tahun", value: "132", share: "33,0%", delta: "+11", trend: "up", tone: "neutral", compare: "Lapis terbesar pipeline" },
  { label: "> 3 Tahun", value: "102", share: "25,5%", delta: "+4", trend: "up", tone: "amber", compare: "Butuh akselerasi" },
  { label: "Rasio Kandidat/Posisi", value: "1,89", delta: "+0,09", trend: "up", tone: "green", compare: "400 kandidat / 212 posisi" },
];

export const pipelineStack = pipelineLevel.map((r) => ({
  name: r.level,
  s1: r.nilai[0],
  s2: r.nilai[1],
  s3: r.nilai[2],
  s4: r.nilai[3],
}));

export const pipelineSeries = [
  { key: "s1", label: "Siap < 1 Tahun", color: READINESS[0] },
  { key: "s2", label: "Siap 1-2 Tahun", color: READINESS[1] },
  { key: "s3", label: "Siap 2-3 Tahun", color: READINESS[2] },
  { key: "s4", label: "> 3 Tahun", color: READINESS[3] },
];

export const pipelineBars = pipelineLevel.map((r) => ({
  label: r.level,
  value: r.total,
  note: `${r.nilai[0]} siap < 1 th`,
}));

export const pipelineTrend = [
  { name: "Jan", ready1: 48, ready12: 88, ready23: 121, ready3plus: 98 },
  { name: "Feb", ready1: 51, ready12: 91, ready23: 124, ready3plus: 99 },
  { name: "Mar", ready1: 54, ready12: 93, ready23: 126, ready3plus: 100 },
  { name: "Apr", ready1: 58, ready12: 96, ready23: 128, ready3plus: 101 },
  { name: "Mei", ready1: 61, ready12: 99, ready23: 130, ready3plus: 101 },
  { name: "Jun", ready1: 64, ready12: 102, ready23: 132, ready3plus: 102 },
];

export interface PipelineDetailRow {
  level: string;
  posisiKritis: number;
  kandidat: number;
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  bench: string;
  status: "Sehat" | "Tipis" | "Kritis";
}

export const pipelineRows: PipelineDetailRow[] = [
  { level: "Board Level", posisiKritis: 24, kandidat: 15, s1: 2, s2: 3, s3: 4, s4: 6, bench: "0,6", status: "Kritis" },
  { level: "Direktur", posisiKritis: 31, kandidat: 35, s1: 6, s2: 7, s3: 10, s4: 12, bench: "1,1", status: "Tipis" },
  { level: "VP", posisiKritis: 48, kandidat: 70, s1: 11, s2: 17, s3: 22, s4: 20, bench: "1,5", status: "Sehat" },
  { level: "Manager", posisiKritis: 68, kandidat: 163, s1: 26, s2: 44, s3: 55, s4: 38, bench: "2,4", status: "Sehat" },
  { level: "Supervisor", posisiKritis: 41, kandidat: 117, s1: 19, s2: 31, s3: 41, s4: 26, bench: "2,9", status: "Sehat" },
];

export const pipelineNotes: DetailNote[] = [
  {
    title: "Board Level jadi leher botol",
    detail:
      "15 kandidat untuk 24 posisi (bench 0,6) dan hanya 2 yang siap dalam setahun — lapis paling menentukan justru paling tipis.",
    tone: "red",
  },
  {
    title: "Piramida terbalik di lapis bawah",
    detail: "Manager dan Supervisor menyimpan 70% kandidat; masalahnya perpindahan ke lapis VP ke atas rata-rata butuh 3,4 tahun.",
    tone: "amber",
  },
  {
    title: "Gelombang siap 1-2 tahun menebal",
    detail: "102 kandidat akan matang dalam dua tahun — cukup untuk menutup 48 posisi VP bila retensi terjaga.",
    tone: "green",
  },
];

export const pipelineDefinitions = [
  { term: "Kandidat suksesor", text: "Talenta yang dinominasikan formal pada minimal satu posisi kritis dan lolos validasi forum suksesi." },
  { term: "Tingkat kesiapan", text: "Estimasi waktu hingga kandidat layak menempati posisi target, hasil assessment dan penilaian atasan." },
  { term: "Bench per level", text: "Kandidat dibagi jumlah posisi kritis pada level tersebut." },
  { term: "Sumber", text: "Succession Management System · Talent Management System." },
];

/* ══════════════════════════════════════════════════════════════════
   4. Talent Pool per Fungsi
   ══════════════════════════════════════════════════════════════════ */

export const talentPoolKpi: DetailKpi[] = [
  { label: "Talent Pool (HiPo)", value: "1.245", delta: "+5,5%", trend: "up", tone: "neutral", compare: "vs Q1 2026 (1.180)" },
  { label: "Fungsi Terbesar", value: "388", share: "31,2%", delta: "+21", trend: "up", tone: "green", compare: "Operasional" },
  { label: "Konversi ke Kandidat", value: "32,1", suffix: "%", delta: "+1,8 ppts", trend: "up", tone: "amber", compare: "400 dari 1.245 talenta" },
  { label: "Konversi ke Ready Now", value: "5,1", suffix: "%", delta: "+0,6 ppts", trend: "up", tone: "amber", compare: "64 dari 1.245 talenta" },
  { label: "Porsi Perempuan", value: "31", suffix: "%", delta: "+2 ppts", trend: "up", tone: "green", compare: "Target pool 30%" },
  { label: "Usia < 45 Tahun", value: "58", suffix: "%", delta: "+3 ppts", trend: "up", tone: "green", compare: "Target pool 40%" },
];

export const talentPoolDonut = talentPoolFungsi.map((f) => ({
  name: f.name,
  value: f.jumlah,
  pctLabel: f.pct,
  color: f.color,
}));

/** Konversi pool ke kandidat suksesi per fungsi (persen). */
export const talentPoolKonversi = [
  { label: "Keuangan", value: 38.2, note: "78 dari 204" },
  { label: "Teknologi & Digital", value: 35.7, note: "46 dari 129" },
  { label: "Operasional", value: 34.5, note: "134 dari 388" },
  { label: "Komersial", value: 32.1, note: "60 dari 187" },
  { label: "SDM & Umum", value: 29.4, note: "35 dari 119" },
  { label: "Lainnya", value: 21.6, note: "47 dari 218" },
];

export const talentPoolTrend = [
  { name: "Q3 2025", operasional: 341, keuangan: 178, komersial: 162, digital: 96, sdm: 104 },
  { name: "Q4 2025", operasional: 356, keuangan: 187, komersial: 171, digital: 108, sdm: 110 },
  { name: "Q1 2026", operasional: 367, keuangan: 194, komersial: 178, digital: 118, sdm: 114 },
  { name: "Q2 2026", operasional: 388, keuangan: 204, komersial: 187, digital: 129, sdm: 119 },
];

export interface TalentPoolRow {
  fungsi: string;
  pool: number;
  pct: string;
  kandidat: number;
  readyNow: number;
  konversi: string;
  bench: string;
  catatan: string;
}

export const talentPoolRows: TalentPoolRow[] = [
  { fungsi: "Operasional", pool: 388, pct: "31,2%", kandidat: 134, readyNow: 23, konversi: "34,5%", bench: "1,9", catatan: "Pasokan terbesar; gap pada kompetensi digital agriculture" },
  { fungsi: "Keuangan", pool: 204, pct: "16,4%", kandidat: 78, readyNow: 12, konversi: "38,2%", bench: "1,7", catatan: "Konversi tertinggi; treasury group masih tipis" },
  { fungsi: "Komersial", pool: 187, pct: "15,0%", kandidat: 60, readyNow: 9, konversi: "32,1%", bench: "1,5", catatan: "Perlu eksposur pasar ekspor untuk kandidat senior" },
  { fungsi: "Teknologi & Digital", pool: 129, pct: "10,4%", kandidat: 46, readyNow: 8, konversi: "35,7%", bench: "1,4", catatan: "Flight risk tertinggi — kompetisi pasar ketat" },
  { fungsi: "SDM & Umum", pool: 119, pct: "9,6%", kandidat: 35, readyNow: 7, konversi: "29,4%", bench: "1,3", catatan: "Kandidat kuat pada HC Business Partner" },
  { fungsi: "Lainnya", pool: 218, pct: "17,4%", kandidat: 47, readyNow: 5, konversi: "21,6%", bench: "0,9", catatan: "Konversi terendah; sebagian besar peran pendukung" },
];

export const talentPoolNotes: DetailNote[] = [
  {
    title: "Pool besar, konversi tipis",
    detail:
      "Hanya 32,1% talenta HiPo yang berhasil dinominasikan sebagai kandidat suksesi, dan 5,1% mencapai Ready Now — corong menyempit tajam di tahap kesiapan.",
    tone: "amber",
  },
  {
    title: "Fungsi digital paling rapuh",
    detail: "Pool 129 orang dengan bench 1,4 namun flight risk tertinggi di grup — kehilangan 10 orang langsung menurunkan bench ke bawah 1,0.",
    tone: "red",
  },
  {
    title: "Diversitas pool sudah di atas target",
    detail: "Perempuan 31% dan usia < 45 tahun 58%, keduanya melampaui target pool; penyusutan justru terjadi di tahap Ready Now (17%).",
    tone: "blue",
  },
];

export const talentPoolDefinitions = [
  { term: "Talent pool (HiPo)", text: "Talenta berpotensi tinggi hasil kalibrasi Q2 2026 — Box 7, 8, dan 9 pada 9 box talent grid." },
  { term: "Konversi", text: "Kandidat suksesi dibagi jumlah pool fungsi tersebut." },
  { term: "Ready Now", text: "Kandidat dengan estimasi kesiapan kurang dari 1 tahun." },
  { term: "Sumber", text: "Talent Management System · pemetaan fungsi jabatan HRIS." },
];

/* ══════════════════════════════════════════════════════════════════
   5. Tren Bench Strength
   ══════════════════════════════════════════════════════════════════ */

export const benchKpi: DetailKpi[] = [
  { label: "Bench Strength Grup", value: "1,6", delta: "+0,1", trend: "up", tone: "green", compare: "vs Q1 2026 (1,5)" },
  { label: "Kenaikan YTD", value: "+0,4", delta: "+33,3%", trend: "up", tone: "green", compare: "dari 1,2 (Jan 2026)" },
  { label: "Posisi di Bawah Target 1,0", value: "54", share: "25,5%", delta: "-5 posisi", trend: "down", tone: "red", compare: "Target seluruh posisi ≥ 1,0" },
  { label: "Level Terlemah", value: "0,6", delta: "+0,1", trend: "up", tone: "red", compare: "Board Level (15/24)" },
  { label: "Level Terkuat", value: "2,9", delta: "+0,2", trend: "up", tone: "green", compare: "Supervisor (117/41)" },
  { label: "Proyeksi Des 2026", value: "1,8", delta: "+0,2", trend: "up", tone: "neutral", compare: "Ekstrapolasi laju 6 bulan" },
];

export const benchTrend = trenBenchStrength.map((t, i) => ({
  name: t.name,
  grup: t.value,
  board: [0.4, 0.4, 0.5, 0.5, 0.6, 0.6][i],
  vp: [1.1, 1.2, 1.3, 1.4, 1.4, 1.5][i],
  manager: [1.8, 1.9, 2.1, 2.2, 2.3, 2.4][i],
}));

export const benchByLevel = [
  { label: "Supervisor", value: 2.9, note: "117 kandidat / 41 posisi" },
  { label: "Manager", value: 2.4, note: "163 kandidat / 68 posisi" },
  { label: "VP", value: 1.5, note: "70 kandidat / 48 posisi" },
  { label: "Direktur", value: 1.1, note: "35 kandidat / 31 posisi" },
  { label: "Board Level", value: 0.6, note: "15 kandidat / 24 posisi" },
];

export const benchByUnit = [
  { label: "PTPN IV", value: 1.9, note: "38 posisi kritis" },
  { label: "PTPN IV Regional 3", value: 1.8, note: "24 posisi kritis" },
  { label: "PTPN III (Persero)", value: 1.7, note: "41 posisi kritis" },
  { label: "PTPN I", value: 1.5, note: "29 posisi kritis" },
  { label: "PTPN I Regional 1", value: 1.4, note: "21 posisi kritis" },
  { label: "PalmCo", value: 1.3, note: "23 posisi kritis" },
  { label: "Holding & Supporting Co", value: 1.2, note: "36 posisi kritis" },
];

export interface BenchRow {
  bulan: string;
  bench: string;
  kandidat: number;
  posisi: number;
  coverage: string;
  readyNow: number;
  penggerak: string;
}

export const benchRows: BenchRow[] = [
  { bulan: "Jan 2026", bench: "1,2", kandidat: 341, posisi: 205, coverage: "68,4%", readyNow: 48, penggerak: "Baseline pasca-kalibrasi talenta 2025" },
  { bulan: "Feb 2026", bench: "1,3", kandidat: 356, posisi: 206, coverage: "69,8%", readyNow: 51, penggerak: "Nominasi tambahan level Manager" },
  { bulan: "Mar 2026", bench: "1,5", kandidat: 370, posisi: 207, coverage: "71,2%", readyNow: 54, penggerak: "Assessment center gelombang 1 selesai" },
  { bulan: "Apr 2026", bench: "1,5", kandidat: 381, posisi: 209, coverage: "72,6%", readyNow: 58, penggerak: "Penambahan 2 posisi kritis baru menahan rasio" },
  { bulan: "Mei 2026", bench: "1,6", kandidat: 391, posisi: 211, coverage: "73,4%", readyNow: 61, penggerak: "Job rotation gelombang 1 mempercepat kesiapan" },
  { bulan: "Jun 2026", bench: "1,6", kandidat: 400, posisi: 212, coverage: "74,5%", readyNow: 64, penggerak: "Forum suksesi menetapkan 9 nominasi baru" },
];

export const benchNotes: DetailNote[] = [
  {
    title: "Rata-rata grup menutupi lubang di puncak",
    detail:
      "Bench 1,6 terlihat aman, tetapi tertarik naik oleh level Supervisor (2,9). Board Level dan Direktur masih 0,6 dan 1,1.",
    tone: "red",
  },
  {
    title: "Laju melambat sejak April",
    detail: "Bench stagnan dua bulan karena penambahan posisi kritis baru menyerap kandidat baru — pertumbuhan pipeline harus melampaui pertumbuhan posisi.",
    tone: "amber",
  },
  {
    title: "Holding di bawah rata-rata grup",
    detail: "Bench 1,2 dengan 36 posisi kritis; unit ini justru memasok kandidat ke entitas lain sehingga kebutuhan internalnya tertinggal.",
    tone: "blue",
  },
];

export const benchDefinitions = [
  { term: "Bench strength", text: "Rata-rata suksesor layak per posisi kritis, dibobot kualitas dan tingkat kesiapan kandidat. Pipeline mentah 400/212 = 1,89; setelah pembobotan = 1,6." },
  { term: "Target", text: "≥ 1,0 pada seluruh posisi kritis; ≥ 2,0 untuk posisi berdampak grup." },
  { term: "Proyeksi", text: "Ekstrapolasi laju enam bulan terakhir tanpa memperhitungkan penambahan posisi kritis baru." },
  { term: "Sumber", text: "Succession Management System · perhitungan bulanan berjalan." },
];

/* ══════════════════════════════════════════════════════════════════
   6. Distribusi Kesiapan Kandidat
   ══════════════════════════════════════════════════════════════════ */

export const kesiapanKpi: DetailKpi[] = [
  { label: "Total Kandidat", value: "400", delta: "+8,1%", trend: "up", tone: "neutral", compare: "vs Q1 2026 (370)" },
  { label: "Siap < 1 Tahun", value: "64", share: "16,0%", delta: "+2,3 ppts", trend: "up", tone: "green", compare: "Q1 2026: 13,7%" },
  { label: "Siap 1-2 Tahun", value: "102", share: "25,5%", delta: "+9", trend: "up", tone: "green", compare: "Gelombang berikutnya" },
  { label: "Siap 2-3 Tahun", value: "132", share: "33,0%", delta: "+11", trend: "up", tone: "neutral", compare: "Lapis terbesar" },
  { label: "Avg Time-to-Readiness", value: "10", suffix: "bln", delta: "-4 bln", trend: "down", tone: "green", compare: "Jan 2026: 14 bulan" },
  { label: "Kandidat Stagnan", value: "37", share: "9,3%", delta: "+4", trend: "up", tone: "red", compare: "Tanpa perubahan readiness 2 kuartal" },
];

export const kesiapanDonut = distribusiKesiapan.map((d) => ({
  name: d.name,
  value: d.jumlah,
  pctLabel: d.pct,
  color: d.color,
}));

export const kesiapanTrend = [
  { name: "Jan", timeToReady: 14, readyNowPct: 12.4 },
  { name: "Feb", timeToReady: 13, readyNowPct: 13.0 },
  { name: "Mar", timeToReady: 13, readyNowPct: 13.7 },
  { name: "Apr", timeToReady: 12, readyNowPct: 14.6 },
  { name: "Mei", timeToReady: 11, readyNowPct: 15.2 },
  { name: "Jun", timeToReady: 10, readyNowPct: 16.0 },
];

/** Porsi kandidat siap < 1 tahun per fungsi. */
export const kesiapanByFungsi = [
  { label: "Keuangan", value: 15.4, note: "12 dari 78" },
  { label: "Operasional", value: 17.2, note: "23 dari 134" },
  { label: "Teknologi & Digital", value: 17.4, note: "8 dari 46" },
  { label: "Komersial", value: 15.0, note: "9 dari 60" },
  { label: "SDM & Umum", value: 20.0, note: "7 dari 35" },
  { label: "Lainnya", value: 10.6, note: "5 dari 47" },
];

export interface KesiapanRow {
  tahap: string;
  kandidat: number;
  pct: string;
  deltaKuartal: string;
  avgReadiness: string;
  avgSkillMatch: string;
  intervensi: string;
}

export const kesiapanRows: KesiapanRow[] = [
  { tahap: "Siap < 1 Tahun", kandidat: 64, pct: "16,0%", deltaKuartal: "+10", avgReadiness: "89%", avgSkillMatch: "91%", intervensi: "Validasi akhir & penjadwalan penempatan" },
  { tahap: "Siap 1-2 Tahun", kandidat: 102, pct: "25,5%", deltaKuartal: "+9", avgReadiness: "72%", avgSkillMatch: "81%", intervensi: "Penugasan menantang + mentoring eksekutif" },
  { tahap: "Siap 2-3 Tahun", kandidat: 132, pct: "33,0%", deltaKuartal: "+11", avgReadiness: "58%", avgSkillMatch: "70%", intervensi: "Job rotation lintas unit" },
  { tahap: "> 3 Tahun", kandidat: 102, pct: "25,5%", deltaKuartal: "+4", avgReadiness: "41%", avgSkillMatch: "58%", intervensi: "Program kepemimpinan dasar & assessment ulang" },
];

export const kesiapanNotes: DetailNote[] = [
  {
    title: "37 kandidat stagnan dua kuartal",
    detail:
      "Readiness tidak bergerak sejak Q4 2025, mayoritas pada tahap 2-3 tahun. Perlu ditinjau apakah rencana pengembangannya benar-benar berjalan.",
    tone: "red",
  },
  {
    title: "Time-to-readiness turun 4 bulan",
    detail: "Dari 14 ke 10 bulan dalam satu semester, terutama karena job rotation gelombang 1 yang memangkas rata-rata 4 bulan.",
    tone: "green",
  },
  {
    title: "Setengah pipeline masih jauh",
    detail: "234 kandidat (58,5%) baru siap di atas dua tahun — tidak menolong 54 posisi kritis yang kosong sekarang.",
    tone: "amber",
  },
];

export const kesiapanDefinitions = [
  { term: "Tingkat kesiapan", text: "Estimasi waktu hingga kandidat layak menempati posisi target; hasil assessment center dan validasi forum suksesi." },
  { term: "Readiness score", text: "Skor gabungan kompetensi, pengalaman, dan kesiapan perilaku terhadap profil posisi target (0–100%)." },
  { term: "Kandidat stagnan", text: "Readiness score tidak naik lebih dari 2 poin selama dua kuartal berturut-turut." },
  { term: "Sumber", text: "Succession Management System · assessment center Q2 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   7. Rencana Aksi Suksesi
   ══════════════════════════════════════════════════════════════════ */

export const aksiKpi: DetailKpi[] = [
  { label: "Inisiatif Aktif", value: "5", delta: "Tetap", trend: "flat", tone: "neutral", compare: "Program suksesi 2026" },
  { label: "Rata-rata Progres", value: "75,4", suffix: "%", delta: "+11,2 ppts", trend: "up", tone: "green", compare: "vs Q1 2026 (64,2%)" },
  { label: "On Track", value: "3", suffix: "/5", delta: "Tetap", trend: "flat", tone: "green", compare: "Identifikasi, Pengembangan, Assessment" },
  { label: "At Risk", value: "1", suffix: "/5", delta: "+1", trend: "up", tone: "amber", compare: "Job Rotation (62%)" },
  { label: "Behind", value: "1", suffix: "/5", delta: "Tetap", trend: "flat", tone: "red", compare: "Mentoring Program (62%)" },
  { label: "Rata-rata Uplift", value: "+7,5", suffix: "pts", delta: "+1,2", trend: "up", tone: "green", compare: "Kenaikan readiness peserta" },
];

export const aksiBars = rencanaAksi.map((a) => ({
  label: a.inisiatif,
  value: a.progress,
  note: a.target,
  kesehatan: a.kesehatan,
}));

export const aksiTrend = [
  { name: "Jan", identifikasi: 62, pengembangan: 41, rotasi: 28, mentoring: 30, assessment: 44 },
  { name: "Feb", identifikasi: 71, pengembangan: 49, rotasi: 36, mentoring: 37, assessment: 52 },
  { name: "Mar", identifikasi: 79, pengembangan: 58, rotasi: 44, mentoring: 44, assessment: 61 },
  { name: "Apr", identifikasi: 86, pengembangan: 65, rotasi: 51, mentoring: 51, assessment: 69 },
  { name: "Mei", identifikasi: 91, pengembangan: 72, rotasi: 57, mentoring: 57, assessment: 75 },
  { name: "Jun", identifikasi: 95, pengembangan: 78, rotasi: 62, mentoring: 62, assessment: 80 },
];

export interface AksiDetailRow {
  inisiatif: string;
  target: string;
  realisasi: string;
  progress: number;
  status: string;
  kesehatan: "on-track" | "at-risk" | "behind";
  uplift: string;
  deltaWaktu: string;
  pemilik: string;
  tenggat: string;
  hambatan: string;
}

export const aksiRows: AksiDetailRow[] = [
  { inisiatif: "Identifikasi Talent Kritis", target: "100% posisi kritis", realisasi: "201 dari 212 posisi", progress: 95, status: "Hampir Selesai", kesehatan: "on-track", uplift: "—", deltaWaktu: "—", pemilik: "VP Talent Management", tenggat: "Sep 2026", hambatan: "11 posisi baru menunggu penetapan profil" },
  { inisiatif: "Assessment Center", target: "400 orang", realisasi: "320 orang", progress: 80, status: "Berjalan", kesehatan: "on-track", uplift: "+4 pts", deltaWaktu: "−1 bln", pemilik: "VP Talent Management", tenggat: "Nov 2026", hambatan: "Kapasitas asesor internal terbatas" },
  { inisiatif: "Pengembangan Talent", target: "300 orang", realisasi: "234 orang", progress: 78, status: "Berjalan", kesehatan: "on-track", uplift: "+9 pts", deltaWaktu: "−3 bln", pemilik: "Direktur SDM Holding", tenggat: "Des 2026", hambatan: "Jadwal peserta bentrok siklus panen" },
  { inisiatif: "Job Rotation", target: "150 orang", realisasi: "93 orang", progress: 62, status: "Berjalan", kesehatan: "at-risk", uplift: "+11 pts", deltaWaktu: "−4 bln", pemilik: "SVP Operasional", tenggat: "Des 2026", hambatan: "Penolakan pelepasan talenta oleh unit asal" },
  { inisiatif: "Mentoring Program", target: "200 orang", realisasi: "124 orang", progress: 62, status: "Berjalan", kesehatan: "behind", uplift: "+6 pts", deltaWaktu: "−2 bln", pemilik: "VP Learning & Development", tenggat: "Okt 2026", hambatan: "Rasio mentor 1:9, jauh dari standar 1:4" },
];

export const aksiNotes: DetailNote[] = [
  {
    title: "Job rotation paling berdampak, paling tersendat",
    detail:
      "Uplift readiness tertinggi (+11 pts) dan percepatan 4 bulan, namun baru 93 dari 150 orang karena unit asal menahan pelepasan talenta.",
    tone: "red",
  },
  {
    title: "Mentoring kekurangan mentor",
    detail: "Rasio 1:9 terhadap standar 1:4 — menambah 26 mentor bersertifikasi diperlukan untuk mencapai target 200 peserta.",
    tone: "amber",
  },
  {
    title: "Identifikasi hampir tuntas",
    detail: "201 dari 212 posisi kritis sudah punya profil suksesi; sisanya adalah posisi yang baru ditetapkan pada Q2 2026.",
    tone: "green",
  },
];

export const aksiDefinitions = [
  { term: "Progres", text: "Realisasi peserta atau cakupan dibagi target tahunan inisiatif." },
  { term: "Uplift", text: "Kenaikan rata-rata readiness score peserta program dibanding sebelum mengikuti, dalam poin." },
  { term: "Kesehatan", text: "On Track ≥ 75% dan sesuai jadwal · At Risk 60–74% · Behind < 60% atau melewati milestone." },
  { term: "Sumber", text: "Program Management Office SDM · laporan bulanan inisiatif suksesi." },
];

/* ══════════════════════════════════════════════════════════════════
   8. Kandidat Siap Sekarang
   ══════════════════════════════════════════════════════════════════ */

export const kandidatKpi: DetailKpi[] = [
  { label: "Kandidat Ready Now", value: "64", share: "16,0%", delta: "+10", trend: "up", tone: "green", compare: "dari 400 kandidat suksesi" },
  { label: "Posisi Tercakup", value: "42", share: "19,8%", delta: "+6 posisi", trend: "up", tone: "green", compare: "dari 212 posisi kritis" },
  { label: "Rata-rata Readiness", value: "89", suffix: "%", delta: "+3 ppts", trend: "up", tone: "green", compare: "Ambang Ready Now ≥ 85%" },
  { label: "Rata-rata Skill Match", value: "91", suffix: "%", delta: "+2 ppts", trend: "up", tone: "green", compare: "vs profil posisi target" },
  { label: "Flight Risk Sedang-Tinggi", value: "11", share: "17,2%", delta: "+2 orang", trend: "up", tone: "red", compare: "Butuh program retensi" },
  { label: "Penempatan Terjadwal", value: "18", share: "28,1%", delta: "+7", trend: "up", tone: "amber", compare: "12 bulan ke depan" },
];

export interface KandidatDetailRow {
  nama: string;
  jabatan: string;
  posisiTarget: string;
  unit: string;
  readiness: number;
  skillMatch: number;
  performance: string;
  potential: string;
  flightRisk: "Rendah" | "Sedang" | "Tinggi";
  rencana: string;
}

export const kandidatRows: KandidatDetailRow[] = [
  { nama: "Hendra Gunawan", jabatan: "Asisten Kepala — PTPN IV Regional 3", posisiTarget: "Kepala Kebun", unit: "PTPN IV Regional 3", readiness: 95, skillMatch: 93, performance: "4,4", potential: "8,2", flightRisk: "Rendah", rencana: "Penempatan Q3 2026, menunggu validasi akhir" },
  { nama: "Yusuf Maulana", jabatan: "Asisten Kepala — PTPN IV Regional 3", posisiTarget: "Kepala Kebun", unit: "PTPN IV Regional 3", readiness: 91, skillMatch: 90, performance: "4,2", potential: "8,0", flightRisk: "Rendah", rencana: "Menunggu sertifikasi ISPO tuntas" },
  { nama: "Agung Prasetyo", jabatan: "Kepala Kebun Senior — PTPN IV", posisiTarget: "VP Agronomi", unit: "PTPN IV", readiness: 88, skillMatch: 91, performance: "4,5", potential: "9,1", flightRisk: "Rendah", rencana: "Pengembangan terarah gap digital agriculture" },
  { nama: "Fajar Ramadhan", jabatan: "Senior Manager IT — Holding", posisiTarget: "VP IT & Digital", unit: "Holding & Supporting Co", readiness: 90, skillMatch: 92, performance: "4,3", potential: "8,8", flightRisk: "Tinggi", rencana: "Retensi prioritas — tawaran pasar aktif" },
  { nama: "Laras Kusuma", jabatan: "Manager Data & Analytics — Holding", posisiTarget: "VP IT & Digital", unit: "Holding & Supporting Co", readiness: 86, skillMatch: 88, performance: "4,1", potential: "8,5", flightRisk: "Sedang", rencana: "Eksposur proyek transformasi grup" },
  { nama: "Bayu Nugroho", jabatan: "Manager Produksi — PTPN IV", posisiTarget: "Kepala Pabrik", unit: "PTPN IV", readiness: 92, skillMatch: 94, performance: "4,4", potential: "8,3", flightRisk: "Rendah", rencana: "Penempatan Q4 2026 saat incumbent pensiun" },
  { nama: "Ratna Dewi", jabatan: "Manager Teknik — PTPN IV", posisiTarget: "Kepala Pabrik", unit: "PTPN IV", readiness: 87, skillMatch: 89, performance: "4,2", potential: "8,1", flightRisk: "Rendah", rencana: "Shadowing incumbent selama 6 bulan" },
  { nama: "Sigit Prabowo", jabatan: "Manager HC — PTPN III", posisiTarget: "VP Human Capital", unit: "PTPN III (Persero)", readiness: 89, skillMatch: 90, performance: "4,3", potential: "8,4", flightRisk: "Rendah", rencana: "Siap penempatan, menunggu keputusan forum" },
  { nama: "Maya Hartati", jabatan: "Senior Manager HCBP — Holding", posisiTarget: "VP Human Capital", unit: "PTPN III (Persero)", readiness: 86, skillMatch: 87, performance: "4,1", potential: "8,2", flightRisk: "Sedang", rencana: "Mobilitas lintas PTPN perlu persetujuan" },
  { nama: "Irfan Maulana", jabatan: "Manager Logistik — PTPN I Regional 1", posisiTarget: "VP Supply Chain", unit: "PTPN I Regional 1", readiness: 88, skillMatch: 90, performance: "4,2", potential: "8,0", flightRisk: "Rendah", rencana: "Penempatan menunggu penetapan pemicu transisi" },
  { nama: "Dimas Anggara", jabatan: "Manager Engineering — PalmCo", posisiTarget: "VP Engineering", unit: "PalmCo", readiness: 87, skillMatch: 88, performance: "4,1", potential: "7,9", flightRisk: "Sedang", rencana: "Perkuat eksposur proyek investasi besar" },
  { nama: "Nur Aisyah", jabatan: "Manager Unit Usaha — PTPN I", posisiTarget: "Kepala Unit Usaha", unit: "PTPN I", readiness: 90, skillMatch: 91, performance: "4,3", potential: "8,3", flightRisk: "Rendah", rencana: "Penempatan Q1 2027 sesuai rencana promosi" },
];

export const kandidatByLevel = [
  { label: "Manager", value: 26, note: "40,6% dari Ready Now" },
  { label: "Supervisor", value: 19, note: "29,7% dari Ready Now" },
  { label: "VP", value: 11, note: "17,2% dari Ready Now" },
  { label: "Direktur", value: 6, note: "9,4% dari Ready Now" },
  { label: "Board Level", value: 2, note: "3,1% dari Ready Now" },
];

export const kandidatNotes: DetailNote[] = [
  {
    title: "11 kandidat siap berisiko keluar",
    detail:
      "Flight risk sedang hingga tinggi pada 17,2% kandidat Ready Now, terkonsentrasi di fungsi Teknologi & Digital — kehilangan mereka langsung menghapus kesiapan posisi terkait.",
    tone: "red",
  },
  {
    title: "Hanya 18 penempatan terjadwal",
    detail: "46 kandidat siap belum memiliki jadwal penempatan; kesiapan yang tidak dipakai cenderung memicu pengunduran diri dalam 12 bulan.",
    tone: "amber",
  },
  {
    title: "Puncak piramida tetap tipis",
    detail: "Hanya 2 kandidat Ready Now untuk Board Level dan 6 untuk Direktur dari total 64.",
    tone: "blue",
  },
];

export const kandidatDefinitions = [
  { term: "Ready Now", text: "Kandidat dengan readiness score ≥ 85% dan estimasi kesiapan kurang dari 1 tahun." },
  { term: "Skill match", text: "Kecocokan kompetensi kandidat terhadap profil posisi target, hasil assessment center." },
  { term: "Flight risk", text: "Estimasi risiko keluar 12 bulan ke depan dari model retensi HC Analytics." },
  { term: "Sumber", text: "Succession Management System · assessment center · survei retensi Q2 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   9. Rekomendasi Suksesi
   ══════════════════════════════════════════════════════════════════ */

export const rekomendasiKpi: DetailKpi[] = [
  { label: "Rekomendasi Aktif", value: "12", delta: "+3", trend: "up", tone: "neutral", compare: "Siklus Q2 2026" },
  { label: "Prioritas Kritikal", value: "3", share: "25,0%", delta: "+1", trend: "up", tone: "red", compare: "Tenggat < 90 hari" },
  { label: "Menunggu Keputusan BOD", value: "4", share: "33,3%", delta: "+2", trend: "up", tone: "amber", compare: "Agenda forum Juli 2026" },
  { label: "Sudah Dieksekusi", value: "5", share: "41,7%", delta: "+2", trend: "up", tone: "green", compare: "Sejak Q1 2026" },
  { label: "Estimasi Dampak Coverage", value: "+8,2", suffix: "ppts", delta: "74,5% → 82,7%", trend: "up", tone: "green", compare: "Bila seluruhnya dijalankan" },
  { label: "Posisi Terselamatkan", value: "17", delta: "dari 54", trend: "flat", tone: "amber", compare: "Posisi tanpa kandidat" },
];

export interface RekomendasiRow {
  rekomendasi: string;
  pemicu: string;
  prioritas: "Kritikal" | "Tinggi" | "Sedang";
  dampak: string;
  pemilik: string;
  tenggat: string;
  status: "Dieksekusi" | "Menunggu BOD" | "Direncanakan";
}

export const rekomendasiRows: RekomendasiRow[] = [
  { rekomendasi: "Akselerasi kandidat Direktur Operasional PTPN III", pemicu: "Bench 0,5 dengan pensiun incumbent 8 bulan", prioritas: "Kritikal", dampak: "Menutup 1 posisi risiko tertinggi", pemilik: "Direktur SDM Holding", tenggat: "Sep 2026", status: "Menunggu BOD" },
  { rekomendasi: "Nominasi formal + mentoring CFO untuk VP Keuangan", pemicu: "Tanpa kandidat, bench 0,8", prioritas: "Kritikal", dampak: "Menutup 1 posisi tanpa suksesor", pemilik: "Direktur Keuangan Holding", tenggat: "Agu 2026", status: "Menunggu BOD" },
  { rekomendasi: "Program retensi 11 kandidat Ready Now flight risk", pemicu: "17,2% kandidat siap berisiko keluar", prioritas: "Kritikal", dampak: "Mengamankan 11 kesiapan posisi", pemilik: "VP Talent Management", tenggat: "Jul 2026", status: "Direncanakan" },
  { rekomendasi: "Perluas job rotation ke 57 peserta sisa target", pemicu: "Uplift tertinggi (+11 pts) namun baru 62%", prioritas: "Tinggi", dampak: "Percepatan rata-rata 4 bulan", pemilik: "SVP Operasional", tenggat: "Des 2026", status: "Menunggu BOD" },
  { rekomendasi: "Tambah 26 mentor bersertifikasi", pemicu: "Rasio mentor 1:9 vs standar 1:4", prioritas: "Tinggi", dampak: "Membuka 76 slot mentee", pemilik: "VP Learning & Development", tenggat: "Okt 2026", status: "Direncanakan" },
  { rekomendasi: "Bangun pipeline Board Level lintas entitas", pemicu: "Bench 0,6 — level terlemah", prioritas: "Tinggi", dampak: "+0,3 bench Board Level", pemilik: "Komite Nominasi & Remunerasi", tenggat: "Q1 2027", status: "Menunggu BOD" },
  { rekomendasi: "Kurangi konsentrasi suksesor multi-posisi", pemicu: "18 individu ternominasi ≥ 3 posisi", prioritas: "Tinggi", dampak: "Menghapus single-person dependency", pemilik: "VP Talent Management", tenggat: "Nov 2026", status: "Direncanakan" },
  { rekomendasi: "Tinjau ulang 37 kandidat stagnan", pemicu: "Readiness tidak bergerak 2 kuartal", prioritas: "Sedang", dampak: "Realokasi anggaran pengembangan", pemilik: "HC Business Partner", tenggat: "Sep 2026", status: "Direncanakan" },
  { rekomendasi: "Percepat knowledge transfer 3 posisi transisi", pemicu: "Skor transisi Direktur Operasional 61%", prioritas: "Sedang", dampak: "Menurunkan risiko diskontinuitas", pemilik: "SVP Unit terkait", tenggat: "Des 2026", status: "Dieksekusi" },
  { rekomendasi: "Naikkan porsi perempuan pada tahap Ready Now", pemicu: "17% vs target pipeline 30%", prioritas: "Sedang", dampak: "+4 ppts diversitas Ready Now", pemilik: "VP Talent Management", tenggat: "Q2 2027", status: "Dieksekusi" },
  { rekomendasi: "Scan eksternal paralel untuk 2 posisi pasar tipis", pemicu: "Ketersediaan eksternal rendah", prioritas: "Sedang", dampak: "Kontingensi bila internal gagal", pemilik: "VP Talent Acquisition", tenggat: "Nov 2026", status: "Dieksekusi" },
  { rekomendasi: "Lanjutkan identifikasi 11 posisi kritis baru", pemicu: "201 dari 212 posisi berprofil suksesi", prioritas: "Sedang", dampak: "Coverage identifikasi 100%", pemilik: "VP Talent Management", tenggat: "Sep 2026", status: "Dieksekusi" },
];

export const rekomendasiDampak = [
  { label: "Retensi kandidat Ready Now", value: 11, note: "11 posisi diamankan" },
  { label: "Perluasan job rotation", value: 9, note: "+9 kandidat naik tahap" },
  { label: "Akselerasi 2 posisi kritikal", value: 2, note: "2 posisi tertutup" },
  { label: "Pipeline Board Level", value: 5, note: "+5 kandidat baru" },
  { label: "Dekonsentrasi suksesor", value: 8, note: "8 posisi punya cadangan unik" },
];

export const rekomendasiNotes: DetailNote[] = [
  {
    title: "Tiga rekomendasi kritikal bertenggat < 90 hari",
    detail:
      "Dua di antaranya menunggu keputusan BOD pada forum Juli 2026; keterlambatan menggeser penutupan posisi ke 2027.",
    tone: "red",
  },
  {
    title: "Retensi lebih murah daripada akselerasi",
    detail:
      "Mengamankan 11 kandidat Ready Now menutup 11 posisi dengan biaya jauh di bawah membangun kandidat baru dari pool.",
    tone: "amber",
  },
  {
    title: "Dampak agregat +8,2 ppts coverage",
    detail: "Bila 12 rekomendasi dijalankan penuh, coverage posisi kritis naik dari 74,5% ke 82,7% — melampaui target 80%.",
    tone: "green",
  },
];

export const rekomendasiDefinitions = [
  { term: "Prioritas", text: "Kritikal = risiko kekosongan < 12 bulan · Tinggi = dampak struktural pipeline · Sedang = perbaikan mutu proses." },
  { term: "Estimasi dampak", text: "Simulasi coverage posisi kritis bila seluruh rekomendasi dieksekusi sesuai tenggat." },
  { term: "Status", text: "Dieksekusi = sudah berjalan · Menunggu BOD = butuh keputusan forum Direksi · Direncanakan = menunggu alokasi sumber daya." },
  { term: "Sumber", text: "Forum suksesi Q2 2026 · analitik HC · rekomendasi AI Succession Assistant yang divalidasi manusia." },
];

/* ── Warna pendukung yang dipakai lintas halaman detail ──────────── */

export const DETAIL_COLOR = {
  good: SEMANTIC.good,
  warn: SEMANTIC.warn,
  bad: SEMANTIC.bad,
  info: PALETTE.blue,
  neutral: PALETTE.slate,
} as const;
