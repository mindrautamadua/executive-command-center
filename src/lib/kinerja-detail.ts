/**
 * Data halaman detail kartu Kinerja Karyawan.
 * Seluruh angka diturunkan/konsisten dengan `kinerja-data.ts` (kartu ringkas
 * pada dashboard) sehingga total dan persentase tidak berbeda antar halaman.
 */

import { KATEGORI_COLOR, distribusiKinerja, dimensi, levelJabatan, unitOrganisasi } from "./kinerja-data";
import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";

/** Total karyawan yang dinilai pada siklus Q2 2026. */
export const totalDinilai = distribusiKinerja.reduce((a, d) => a + d.jumlahNum, 0); // 68.142

const fmt = (n: number) => n.toLocaleString("id-ID");

/* ══════════════════════════════════════════════════════════════════
   1. Distribusi Kinerja
   ══════════════════════════════════════════════════════════════════ */

export const distribusiKpi: DetailKpi[] = [
  {
    label: "Karyawan Dinilai",
    value: fmt(totalDinilai),
    delta: "+1,8%",
    trend: "up",
    tone: "neutral",
    compare: "vs Q1 2026 (66.941)",
  },
  {
    label: "Outstanding",
    value: "12.742",
    share: "18,7%",
    delta: "+2,4 ppts",
    trend: "up",
    tone: "green",
    compare: "Q1 2026: 16,3%",
  },
  {
    label: "Above Target",
    value: "36.507",
    share: "53,6%",
    delta: "+1,1 ppts",
    trend: "up",
    tone: "green",
    compare: "Q1 2026: 52,5%",
  },
  {
    label: "On Target",
    value: "13.969",
    share: "20,5%",
    delta: "-2,2 ppts",
    trend: "down",
    tone: "neutral",
    compare: "Q1 2026: 22,7%",
  },
  {
    label: "Below Target + Poor",
    value: "4.924",
    share: "7,2%",
    delta: "-1,3 ppts",
    trend: "down",
    tone: "green",
    compare: "Q1 2026: 8,5%",
  },
  {
    label: "Coverage Penilaian",
    value: "96,4",
    suffix: "%",
    delta: "+2,1 ppts",
    trend: "up",
    tone: "amber",
    compare: "2.548 karyawan belum dinilai",
  },
];

export const distribusiDonut = distribusiKinerja.map((d) => ({
  name: d.name,
  value: d.jumlahNum,
  pctLabel: d.pct,
  color: d.color,
}));

/** Pergeseran komposisi kategori 4 kuartal terakhir (persen). */
export const distribusiTrend = [
  { name: "Q3 2025", outstanding: 14.2, above: 50.1, on: 25.4, below: 8.2, poor: 2.1 },
  { name: "Q4 2025", outstanding: 15.1, above: 51.3, on: 23.8, below: 7.9, poor: 1.9 },
  { name: "Q1 2026", outstanding: 16.3, above: 52.5, on: 22.7, below: 6.9, poor: 1.6 },
  { name: "Q2 2026", outstanding: 18.7, above: 53.6, on: 20.5, below: 6.0, poor: 1.2 },
];

/** Porsi Below Target + Poor per entitas — makin tinggi makin butuh intervensi. */
export const distribusiUnderperform = [
  { label: "PTPN I Regional 5", value: 11.4, note: "612 orang" },
  { label: "Supporting Co", value: 10.8, note: "388 orang" },
  { label: "PalmCo", value: 9.2, note: "744 orang" },
  { label: "PTPN Holding", value: 7.6, note: "196 orang" },
  { label: "PTPN IV Regional 2", value: 7.1, note: "521 orang" },
  { label: "PTPN II", value: 6.8, note: "489 orang" },
  { label: "PTPN V", value: 6.2, note: "455 orang" },
  { label: "PTPN I Regional 3", value: 5.4, note: "402 orang" },
  { label: "PTPN III (Persero)", value: 4.9, note: "631 orang" },
  { label: "PTPN IV Regional 1", value: 4.1, note: "486 orang" },
];

export interface DistribusiRow {
  entitas: string;
  dinilai: number;
  outstanding: number;
  above: number;
  on: number;
  below: number;
  poor: number;
  score: string;
  status: "Sehat" | "Perlu Kalibrasi" | "Intervensi";
}

export const distribusiRows: DistribusiRow[] = [
  { entitas: "PTPN IV Regional 1", dinilai: 11854, outstanding: 24.1, above: 55.2, on: 16.6, below: 3.3, poor: 0.8, score: "91,2", status: "Sehat" },
  { entitas: "PTPN III (Persero)", dinilai: 12876, outstanding: 21.8, above: 55.1, on: 18.2, below: 4.0, poor: 0.9, score: "89,1", status: "Sehat" },
  { entitas: "PTPN I Regional 3", dinilai: 7441, outstanding: 19.6, above: 54.3, on: 20.7, below: 4.3, poor: 1.1, score: "87,8", status: "Sehat" },
  { entitas: "PTPN V", dinilai: 7338, outstanding: 18.2, above: 54.0, on: 21.6, below: 5.0, poor: 1.2, score: "85,6", status: "Sehat" },
  { entitas: "PTPN II", dinilai: 7191, outstanding: 17.4, above: 53.1, on: 22.7, below: 5.5, poor: 1.3, score: "84,3", status: "Perlu Kalibrasi" },
  { entitas: "PTPN IV Regional 2", dinilai: 7338, outstanding: 16.9, above: 52.4, on: 23.6, below: 5.7, poor: 1.4, score: "83,7", status: "Perlu Kalibrasi" },
  { entitas: "PTPN Holding", dinilai: 2579, outstanding: 16.1, above: 51.8, on: 24.5, below: 6.1, poor: 1.5, score: "82,1", status: "Perlu Kalibrasi" },
  { entitas: "PalmCo", dinilai: 8087, outstanding: 14.3, above: 50.6, on: 25.9, below: 7.3, poor: 1.9, score: "80,5", status: "Intervensi" },
  { entitas: "PTPN I Regional 5", dinilai: 5368, outstanding: 12.8, above: 49.2, on: 26.6, below: 9.1, poor: 2.3, score: "79,9", status: "Intervensi" },
  { entitas: "Supporting Co", dinilai: 3592, outstanding: 12.1, above: 48.5, on: 28.6, below: 8.6, poor: 2.2, score: "78,6", status: "Intervensi" },
];

export const distribusiNotes: DetailNote[] = [
  {
    title: "Kurva bergeser ke kanan",
    detail:
      "Outstanding naik 2,4 ppts dalam satu kuartal sementara Below Target + Poor turun 1,3 ppts. Pergeseran secepat ini perlu diverifikasi kalibrasi agar bukan efek rating inflation.",
    tone: "amber",
  },
  {
    title: "3 entitas di luar pola grup",
    detail:
      "PalmCo, PTPN I Regional 5, dan Supporting Co memiliki porsi Below Target + Poor di atas 9% — 1.744 karyawan masuk kandidat Performance Improvement Plan.",
    tone: "red",
  },
  {
    title: "Coverage penilaian belum penuh",
    detail:
      "2.548 karyawan (3,6%) belum memiliki hasil penilaian Q2 2026, mayoritas pada unit kebun dengan siklus panen tinggi.",
    tone: "blue",
  },
];

export const distribusiDefinitions = [
  { term: "Kategori kinerja", text: "Outstanding (90–100), Above Target (75–89), On Target (60–74), Below Target (40–59), Poor (0–39)." },
  { term: "Karyawan dinilai", text: "Karyawan aktif dengan form penilaian Q2 2026 berstatus final dan tervalidasi atasan langsung." },
  { term: "Coverage penilaian", text: "Karyawan dinilai dibagi total karyawan aktif akhir periode (70.690 orang)." },
  { term: "Sumber", text: "Performance Management System · HRIS konsolidasi · data per 31 Mei 2026." },
];

/* ══════════════════════════════════════════════════════════════════
   2. Tren Overall Score
   ══════════════════════════════════════════════════════════════════ */

export const trenKpi: DetailKpi[] = [
  { label: "Overall Score Jun 2026", value: "87,6", delta: "+3,4", trend: "up", tone: "green", compare: "vs Mei 2026 (84,2)" },
  { label: "Kenaikan YTD", value: "+11,2", suffix: "poin", delta: "+14,7%", trend: "up", tone: "green", compare: "dari 76,4 (Jan 2026)" },
  { label: "Gap ke Target 85", value: "+2,6", delta: "Tercapai", trend: "flat", tone: "green", compare: "Target grup 85,0" },
  { label: "Bulan di Atas Target", value: "2", suffix: "/6", delta: "+2", trend: "up", tone: "amber", compare: "Mei & Jun 2026" },
  { label: "Unit di Atas Target", value: "5", suffix: "/10", delta: "+2 unit", trend: "up", tone: "amber", compare: "vs Q1 2026 (3 unit)" },
  { label: "Proyeksi Des 2026", value: "89,1", delta: "+1,5", trend: "up", tone: "neutral", compare: "Regresi linear 6 bulan" },
];

/** Tren bulanan lengkap dengan garis target dan skor unit terbaik/terendah. */
export const trenSeries = [
  { name: "Jan 2026", grup: 76.4, tertinggi: 84.1, terendah: 68.2 },
  { name: "Feb 2026", grup: 78.1, tertinggi: 85.6, terendah: 70.1 },
  { name: "Mar 2026", grup: 80.3, tertinggi: 87.2, terendah: 72.4 },
  { name: "Apr 2026", grup: 82.8, tertinggi: 88.9, terendah: 74.6 },
  { name: "Mei 2026", grup: 84.2, tertinggi: 90.1, terendah: 76.3 },
  { name: "Jun 2026", grup: 87.6, tertinggi: 91.2, terendah: 78.6 },
];

/** Kenaikan score (poin) per entitas sepanjang Jan–Jun 2026. */
export const trenDelta = [
  { label: "PTPN IV Regional 1", value: 13.4, note: "77,8 → 91,2" },
  { label: "PTPN III (Persero)", value: 12.7, note: "76,4 → 89,1" },
  { label: "PTPN V", value: 12.1, note: "73,5 → 85,6" },
  { label: "PTPN I Regional 3", value: 11.6, note: "76,2 → 87,8" },
  { label: "PTPN IV Regional 2", value: 10.8, note: "72,9 → 83,7" },
  { label: "PTPN II", value: 10.2, note: "74,1 → 84,3" },
  { label: "PTPN Holding", value: 9.4, note: "72,7 → 82,1" },
  { label: "PalmCo", value: 8.6, note: "71,9 → 80,5" },
  { label: "PTPN I Regional 5", value: 7.8, note: "72,1 → 79,9" },
  { label: "Supporting Co", value: 6.9, note: "71,7 → 78,6" },
];

export interface TrenRow {
  bulan: string;
  score: string;
  delta: string;
  gap: string;
  dinilai: string;
  penggerak: string;
}

export const trenRows: TrenRow[] = [
  { bulan: "Jan 2026", score: "76,4", delta: "—", gap: "-8,6", dinilai: "64.128", penggerak: "Baseline siklus baru, kalibrasi belum berjalan" },
  { bulan: "Feb 2026", score: "78,1", delta: "+1,7", gap: "-6,9", dinilai: "65.014", penggerak: "Penetapan KPI kaskade selesai di 7 entitas" },
  { bulan: "Mar 2026", score: "80,3", delta: "+2,2", gap: "-4,7", dinilai: "65.902", penggerak: "Check-in bulanan wajib mulai berlaku" },
  { bulan: "Apr 2026", score: "82,8", delta: "+2,5", gap: "-2,2", dinilai: "66.744", penggerak: "Coaching manajerial gelombang 1 (1.240 manajer)" },
  { bulan: "Mei 2026", score: "84,2", delta: "+1,4", gap: "-0,8", dinilai: "67.418", penggerak: "Perbaikan mutu bukti dukung KPI operasional" },
  { bulan: "Jun 2026", score: "87,6", delta: "+3,4", gap: "+2,6", dinilai: "68.142", penggerak: "Panen produktivitas kebun + kalibrasi lintas unit" },
];

export const trenNotes: DetailNote[] = [
  {
    title: "Lonjakan Juni perlu diuji",
    detail:
      "Kenaikan 3,4 poin pada Jun 2026 dua kali lipat rata-rata bulanan (1,9 poin). Sebagian bersumber dari kalibrasi akhir siklus, bukan perbaikan kinerja riil.",
    tone: "amber",
  },
  {
    title: "Target grup tercapai",
    detail: "Skor 87,6 melampaui target 85,0 untuk pertama kali sejak siklus dimulai; 5 dari 10 unit sudah berada di atas target.",
    tone: "green",
  },
  {
    title: "Sebaran unit melebar",
    detail:
      "Jarak unit tertinggi dan terendah tetap 12,6 poin sepanjang semester — perbaikan grup belum merata ke unit papan bawah.",
    tone: "red",
  },
];

export const trenDefinitions = [
  { term: "Overall score", text: "Rata-rata tertimbang lima dimensi penilaian pada seluruh karyawan yang dinilai." },
  { term: "Target grup", text: "85,0 — ditetapkan dalam RKAP 2026 dan dikaskade ke seluruh entitas." },
  { term: "Proyeksi", text: "Regresi linear atas enam titik bulanan; tidak memperhitungkan musim panen semester dua." },
  { term: "Sumber", text: "Performance Management System · agregasi bulanan berjalan." },
];

/* ══════════════════════════════════════════════════════════════════
   3. Kinerja per Dimensi
   ══════════════════════════════════════════════════════════════════ */

export const dimensiKpi: DetailKpi[] = dimensi.map((d) => ({
  label: d.label,
  value: d.score,
  delta: `+${d.delta}`,
  trend: "up" as const,
  tone: (d.pct >= 88 ? "green" : d.pct >= 84 ? "neutral" : "amber") as DetailKpi["tone"],
  compare: `Q1 2026: ${d.prev.toFixed(1).replace(".", ",")}`,
}));

export const dimensiRadar = dimensi.map((d) => ({
  label: d.short,
  kini: d.pct,
  lalu: d.prev,
}));

/** Tren tiap dimensi per kuartal. */
export const dimensiTrend = [
  { name: "Q3 2025", target: 79.8, kompetensi: 78.4, perilaku: 77.1, inovasi: 74.2, kolaborasi: 79.6 },
  { name: "Q4 2025", target: 81.6, kompetensi: 80.2, perilaku: 78.8, inovasi: 76.1, kolaborasi: 81.4 },
  { name: "Q1 2026", target: 84.1, kompetensi: 82.9, perilaku: 80.9, inovasi: 78.7, kolaborasi: 83.9 },
  { name: "Q2 2026", target: 89.2, kompetensi: 86.7, perilaku: 84.1, inovasi: 81.6, kolaborasi: 88.3 },
];

/** Selisih dimensi terhadap rata-rata grup (86,0) — sorotan gap. */
export const dimensiGap = [
  { label: "Inovasi & Improvement", value: 81.6, note: "-4,4 vs rata-rata" },
  { label: "Perilaku & Budaya", value: 84.1, note: "-1,9 vs rata-rata" },
  { label: "Kompetensi", value: 86.7, note: "+0,7 vs rata-rata" },
  { label: "Kerjasama & Kolaborasi", value: 88.3, note: "+2,3 vs rata-rata" },
  { label: "Pencapaian Target (KPI)", value: 89.2, note: "+3,2 vs rata-rata" },
];

export interface DimensiRow {
  dimensi: string;
  bobot: string;
  q2: string;
  q1: string;
  delta: string;
  tertinggi: string;
  terendah: string;
  status: "Kuat" | "Stabil" | "Perlu Fokus";
}

export const dimensiRows: DimensiRow[] = [
  { dimensi: "Pencapaian Target (KPI)", bobot: "40%", q2: "89,2", q1: "84,1", delta: "+5,1", tertinggi: "PTPN IV Regional 1 (93,4)", terendah: "Supporting Co (79,1)", status: "Kuat" },
  { dimensi: "Kompetensi", bobot: "20%", q2: "86,7", q1: "82,9", delta: "+3,8", tertinggi: "PTPN III (90,8)", terendah: "PTPN I Regional 5 (78,4)", status: "Stabil" },
  { dimensi: "Perilaku & Budaya", bobot: "15%", q2: "84,1", q1: "80,9", delta: "+3,2", tertinggi: "PTPN IV Regional 1 (88,6)", terendah: "PalmCo (77,2)", status: "Stabil" },
  { dimensi: "Inovasi & Improvement", bobot: "10%", q2: "81,6", q1: "78,7", delta: "+2,9", tertinggi: "PTPN Holding (87,1)", terendah: "PTPN II (74,8)", status: "Perlu Fokus" },
  { dimensi: "Kerjasama & Kolaborasi", bobot: "15%", q2: "88,3", q1: "83,9", delta: "+4,4", tertinggi: "PTPN III (91,6)", terendah: "Supporting Co (80,3)", status: "Kuat" },
];

export const dimensiNotes: DetailNote[] = [
  {
    title: "Inovasi tertinggal dua siklus",
    detail:
      "Inovasi & Improvement bertahan sebagai dimensi terendah sejak Q3 2025 dengan kenaikan terkecil (+2,9). Program idea-to-impact baru berjalan di 3 entitas.",
    tone: "red",
  },
  {
    title: "KPI mendominasi kenaikan",
    detail:
      "Dimensi berbobot 40% ini menyumbang 2,0 dari 3,4 poin kenaikan overall score Juni — perbaikan grup masih bertumpu pada output, belum pada perilaku.",
    tone: "amber",
  },
  {
    title: "Kolaborasi jadi kekuatan",
    detail: "Skor 88,3 dengan sebaran antar unit tersempit (11,3 poin) menandakan praktik kerja lintas unit relatif seragam.",
    tone: "green",
  },
];

export const dimensiDefinitions = [
  { term: "Bobot dimensi", text: "Ketentuan Pedoman Manajemen Kinerja PTPN Group 2026; total bobot 100%." },
  { term: "Skor dimensi", text: "Rata-rata skor dimensi seluruh karyawan yang dinilai, skala 0–100." },
  { term: "Status", text: "Kuat ≥ 88 · Stabil 84–87,9 · Perlu Fokus < 84." },
  { term: "Sumber", text: "Performance Management System — modul penilaian multi-dimensi." },
];

/* ══════════════════════════════════════════════════════════════════
   4. Kinerja per Unit Organisasi
   ══════════════════════════════════════════════════════════════════ */

export const unitKpi: DetailKpi[] = [
  { label: "Unit Tertinggi", value: "91,2", delta: "+13,4", trend: "up", tone: "green", compare: "PTPN IV Regional 1" },
  { label: "Unit Terendah", value: "78,6", delta: "+6,9", trend: "up", tone: "red", compare: "Supporting Co" },
  { label: "Spread Antar Unit", value: "12,6", suffix: "poin", delta: "-0,8", trend: "down", tone: "amber", compare: "Q1 2026: 13,4 poin" },
  { label: "Median Grup", value: "83,9", delta: "+2,6", trend: "up", tone: "neutral", compare: "vs Q1 2026 (81,3)" },
  { label: "Unit ≥ Target 85", value: "5", suffix: "/10", delta: "+2 unit", trend: "up", tone: "green", compare: "Target grup 85,0" },
  { label: "Unit < 80", value: "2", suffix: "/10", delta: "-1 unit", trend: "down", tone: "amber", compare: "Prioritas intervensi" },
];

export const unitRanking = unitOrganisasi.map((u) => ({
  label: u.nama,
  value: u.pct,
  valueLabel: u.score,
}));

/** Tren empat unit ekstrem sepanjang semester. */
export const unitTrend = [
  { name: "Jan", r1: 77.8, ptpn3: 76.4, r5: 72.1, supporting: 71.7 },
  { name: "Feb", r1: 80.2, ptpn3: 78.6, r5: 73.4, supporting: 72.8 },
  { name: "Mar", r1: 83.4, ptpn3: 81.2, r5: 74.9, supporting: 74.1 },
  { name: "Apr", r1: 86.9, ptpn3: 84.4, r5: 76.6, supporting: 75.6 },
  { name: "Mei", r1: 89.1, ptpn3: 86.8, r5: 78.2, supporting: 77.2 },
  { name: "Jun", r1: 91.2, ptpn3: 89.1, r5: 79.9, supporting: 78.6 },
];

export interface UnitRow {
  unit: string;
  karyawan: number;
  score: string;
  delta: string;
  outstanding: string;
  below: string;
  pencapaian: string;
  kalibrasi: "Selesai" | "Berjalan" | "Tertunda";
  status: "Di atas target" | "Mendekati target" | "Di bawah target";
}

export const unitRows: UnitRow[] = [
  { unit: "PTPN IV Regional 1", karyawan: 11854, score: "91,2", delta: "+13,4", outstanding: "24,1%", below: "4,1%", pencapaian: "84,6%", kalibrasi: "Selesai", status: "Di atas target" },
  { unit: "PTPN III (Persero)", karyawan: 12876, score: "89,1", delta: "+12,7", outstanding: "21,8%", below: "4,9%", pencapaian: "82,1%", kalibrasi: "Selesai", status: "Di atas target" },
  { unit: "PTPN I Regional 3", karyawan: 7441, score: "87,8", delta: "+11,6", outstanding: "19,6%", below: "5,4%", pencapaian: "80,4%", kalibrasi: "Selesai", status: "Di atas target" },
  { unit: "PTPN V", karyawan: 7338, score: "85,6", delta: "+12,1", outstanding: "18,2%", below: "6,2%", pencapaian: "78,2%", kalibrasi: "Selesai", status: "Di atas target" },
  { unit: "PTPN II", karyawan: 7191, score: "84,3", delta: "+10,2", outstanding: "17,4%", below: "6,8%", pencapaian: "76,9%", kalibrasi: "Berjalan", status: "Mendekati target" },
  { unit: "PTPN IV Regional 2", karyawan: 7338, score: "83,7", delta: "+10,8", outstanding: "16,9%", below: "7,1%", pencapaian: "76,1%", kalibrasi: "Berjalan", status: "Mendekati target" },
  { unit: "PTPN Holding", karyawan: 2579, score: "82,1", delta: "+9,4", outstanding: "16,1%", below: "7,6%", pencapaian: "75,4%", kalibrasi: "Selesai", status: "Mendekati target" },
  { unit: "PalmCo", karyawan: 8087, score: "80,5", delta: "+8,6", outstanding: "14,3%", below: "9,2%", pencapaian: "72,8%", kalibrasi: "Berjalan", status: "Di bawah target" },
  { unit: "PTPN I Regional 5", karyawan: 5368, score: "79,9", delta: "+7,8", outstanding: "12,8%", below: "11,4%", pencapaian: "70,3%", kalibrasi: "Tertunda", status: "Di bawah target" },
  { unit: "Supporting Co", karyawan: 3592, score: "78,6", delta: "+6,9", outstanding: "12,1%", below: "10,8%", pencapaian: "69,1%", kalibrasi: "Tertunda", status: "Di bawah target" },
];

export const unitNotes: DetailNote[] = [
  {
    title: "Kalibrasi tertunda di dua unit terbawah",
    detail:
      "PTPN I Regional 5 dan Supporting Co belum menyelesaikan kalibrasi lintas unit — skor keduanya berpotensi bergeser saat kalibrasi rampung.",
    tone: "red",
  },
  {
    title: "Konvergensi berjalan lambat",
    detail: "Spread antar unit hanya menyempit 0,8 poin dalam satu kuartal; pada laju ini butuh 6 kuartal untuk turun ke bawah 10 poin.",
    tone: "amber",
  },
  {
    title: "Ukuran unit bukan penentu",
    detail: "PTPN III dengan 12.876 karyawan tetap mencapai 89,1 — skala populasi tidak menjelaskan skor rendah unit lain.",
    tone: "blue",
  },
];

export const unitDefinitions = [
  { term: "Skor unit", text: "Rata-rata overall score seluruh karyawan unit yang dinilai pada Q2 2026." },
  { term: "Pencapaian", text: "Rata-rata realisasi KPI unit terhadap target RKAP 2026 (year to date)." },
  { term: "Status", text: "Di atas target ≥ 85 · Mendekati 82–84,9 · Di bawah < 82." },
  { term: "Sumber", text: "Performance Management System · konsolidasi entitas & regional." },
];

/* ══════════════════════════════════════════════════════════════════
   5. Kinerja per Level Jabatan
   ══════════════════════════════════════════════════════════════════ */

export const levelKpi: DetailKpi[] = [
  { label: "Direktur", value: "90,4", share: "28% OS", delta: "+2,8", trend: "up", tone: "green", compare: "142 pejabat dinilai" },
  { label: "General Manager", value: "88,7", share: "23% OS", delta: "+3,1", trend: "up", tone: "green", compare: "486 pejabat dinilai" },
  { label: "Manager", value: "85,6", share: "17% OS", delta: "+3,4", trend: "up", tone: "neutral", compare: "2.184 pejabat dinilai" },
  { label: "Supervisor", value: "83,1", share: "13% OS", delta: "+3,6", trend: "up", tone: "amber", compare: "8.472 pejabat dinilai" },
  { label: "Staff", value: "82,0", share: "12% OS", delta: "+3,8", trend: "up", tone: "amber", compare: "56.858 karyawan dinilai" },
  { label: "Gap Direktur–Staff", value: "8,4", suffix: "poin", delta: "-1,0", trend: "down", tone: "green", compare: "Q1 2026: 9,4 poin" },
];

export const levelStack = levelJabatan.map((r) => ({
  name: r.level,
  outstanding: r.seg[0],
  above: r.seg[1],
  on: r.seg[2],
  below: r.seg[3],
  poor: r.seg[4],
}));

export const levelSeries = [
  { key: "outstanding", label: "Outstanding", color: KATEGORI_COLOR.Outstanding },
  { key: "above", label: "Above Target", color: KATEGORI_COLOR["Above Target"] },
  { key: "on", label: "On Target", color: KATEGORI_COLOR["On Target"] },
  { key: "below", label: "Below Target", color: KATEGORI_COLOR["Below Target"] },
  { key: "poor", label: "Poor", color: KATEGORI_COLOR.Poor },
];

export const levelScoreBars = levelJabatan.map((r) => ({
  label: r.level,
  value: Number(r.score.replace(",", ".")),
  valueLabel: r.score,
}));

export interface LevelRow {
  level: string;
  karyawan: string;
  score: string;
  delta: string;
  outstanding: string;
  below: string;
  rentang: string;
  span: string;
  catatan: string;
}

export const levelRows: LevelRow[] = [
  { level: "Direktur", karyawan: "142", score: "90,4", delta: "+2,8", outstanding: "28%", below: "4%", rentang: "84,1 – 96,2", span: "6,4", catatan: "Penilaian oleh Dewan Komisaris & Holding" },
  { level: "General Manager", karyawan: "486", score: "88,7", delta: "+3,1", outstanding: "23%", below: "8%", rentang: "78,4 – 95,1", span: "8,2", catatan: "Kalibrasi lintas regional sudah berjalan" },
  { level: "Manager", karyawan: "2.184", score: "85,6", delta: "+3,4", outstanding: "17%", below: "5%", rentang: "72,6 – 94,3", span: "9,1", catatan: "Lapis terbesar kandidat suksesi" },
  { level: "Supervisor", karyawan: "8.472", score: "83,1", delta: "+3,6", outstanding: "13%", below: "13%", rentang: "64,2 – 93,8", span: "12,4", catatan: "Porsi Below Target + Poor tertinggi" },
  { level: "Staff", karyawan: "56.858", score: "82,0", delta: "+3,8", outstanding: "12%", below: "13%", rentang: "58,7 – 93,1", span: "—", catatan: "Menyumbang 83% populasi dinilai" },
];

export const levelNotes: DetailNote[] = [
  {
    title: "Supervisor titik lemah struktural",
    detail:
      "13% Below Target + Poor pada 8.472 supervisor setara 1.101 orang — lapis ini yang menerjemahkan target ke pelaksana lapangan.",
    tone: "red",
  },
  {
    title: "Gradien level menyempit",
    detail: "Selisih Direktur–Staff turun dari 9,4 ke 8,4 poin; kenaikan terbesar justru di level Staff (+3,8).",
    tone: "green",
  },
  {
    title: "Sebaran melebar ke bawah",
    detail: "Rentang skor Supervisor dan Staff mencapai 29,6 dan 34,4 poin — konsistensi penilaian atasan langsung perlu diaudit.",
    tone: "amber",
  },
];

export const levelDefinitions = [
  { term: "Level jabatan", text: "Struktur jabatan PTPN Group 2026 setelah harmonisasi grading pasca-holdingisasi." },
  { term: "Rentang", text: "Persentil 5 hingga persentil 95 skor individu pada level tersebut." },
  { term: "Span", text: "Selisih rata-rata skor terhadap level satu tingkat di bawahnya." },
  { term: "Sumber", text: "Performance Management System · master jabatan HRIS." },
];

/* ══════════════════════════════════════════════════════════════════
   6. KPI Strategis / Pencapaian Target
   ══════════════════════════════════════════════════════════════════ */

export const kpiStrategisKpi: DetailKpi[] = [
  { label: "Rata-rata Pencapaian", value: "76,8", suffix: "%", delta: "+6,3%", trend: "up", tone: "amber", compare: "vs Q1 2026 (70,5%)" },
  { label: "KPI ≥ 80%", value: "1", suffix: "/5", delta: "+1", trend: "up", tone: "amber", compare: "Pertumbuhan Pendapatan" },
  { label: "KPI Tertinggi", value: "82", suffix: "%", delta: "+7 ppts", trend: "up", tone: "green", compare: "Pertumbuhan Pendapatan" },
  { label: "KPI Terendah", value: "73", suffix: "%", delta: "+4 ppts", trend: "up", tone: "red", compare: "Produktivitas Kebun" },
  { label: "Pencapaian Tertimbang", value: "77,9", suffix: "%", delta: "+6,1 ppts", trend: "up", tone: "amber", compare: "Setelah bobot RKAP" },
  { label: "Sisa Gap ke 100%", value: "23,2", suffix: "ppts", delta: "-6,3", trend: "down", tone: "neutral", compare: "2 kuartal tersisa" },
];

export const kpiBars = [
  { label: "Pertumbuhan Pendapatan", value: 82, note: "Bobot 30%" },
  { label: "Kepuasan Pelanggan", value: 78, note: "Bobot 10%" },
  { label: "Efisiensi Operasional", value: 75, note: "Bobot 25%" },
  { label: "Sustainability Index", value: 74, note: "Bobot 10%" },
  { label: "Produktivitas Kebun", value: 73, note: "Bobot 25%" },
];

export const kpiTrend = [
  { name: "Q3 2025", pendapatan: 64, efisiensi: 61, produktivitas: 62, pelanggan: 68, sustainability: 63 },
  { name: "Q4 2025", pendapatan: 70, efisiensi: 66, produktivitas: 66, pelanggan: 71, sustainability: 67 },
  { name: "Q1 2026", pendapatan: 75, efisiensi: 71, produktivitas: 69, pelanggan: 74, sustainability: 70 },
  { name: "Q2 2026", pendapatan: 82, efisiensi: 75, produktivitas: 73, pelanggan: 78, sustainability: 74 },
];

export interface KpiRow {
  kpi: string;
  bobot: string;
  target: string;
  realisasi: string;
  pencapaian: number;
  delta: string;
  pemilik: string;
  status: "On Track" | "Perlu Perhatian" | "Berisiko";
}

export const kpiRows: KpiRow[] = [
  { kpi: "Pertumbuhan Pendapatan", bobot: "30%", target: "Rp 62,4 T", realisasi: "Rp 51,2 T", pencapaian: 82, delta: "+7 ppts", pemilik: "Direktorat Pemasaran", status: "On Track" },
  { kpi: "Efisiensi Operasional", bobot: "25%", target: "Biaya/ton -8%", realisasi: "-6,0%", pencapaian: 75, delta: "+4 ppts", pemilik: "Direktorat Operasi", status: "Perlu Perhatian" },
  { kpi: "Produktivitas Kebun", bobot: "25%", target: "22,4 ton TBS/ha", realisasi: "16,4 ton/ha", pencapaian: 73, delta: "+4 ppts", pemilik: "Direktorat Produksi", status: "Berisiko" },
  { kpi: "Kepuasan Pelanggan", bobot: "10%", target: "Indeks 4,50", realisasi: "3,51", pencapaian: 78, delta: "+4 ppts", pemilik: "Direktorat Pemasaran", status: "Perlu Perhatian" },
  { kpi: "Sustainability Index", bobot: "10%", target: "Skor 78,0", realisasi: "57,7", pencapaian: 74, delta: "+4 ppts", pemilik: "Direktorat ESG", status: "Perlu Perhatian" },
];

export const kpiNotes: DetailNote[] = [
  {
    title: "Dua KPI berbobot besar tertinggal",
    detail:
      "Efisiensi Operasional dan Produktivitas Kebun menguasai 50% bobot RKAP namun berada di 75% dan 73% — penentu utama gap 23,2 ppts.",
    tone: "red",
  },
  {
    title: "Produktivitas kebun berisiko",
    detail:
      "Realisasi 16,4 ton TBS/ha terhadap target 22,4 ton/ha; replanting tertunda pada 8.400 ha menahan capaian hingga 2027.",
    tone: "amber",
  },
  {
    title: "Momentum pendapatan positif",
    detail: "Naik 7 ppts dalam satu kuartal, laju tercepat di antara lima KPI, ditopang harga CPO dan perbaikan kontrak jangka menengah.",
    tone: "green",
  },
];

export const kpiDefinitions = [
  { term: "Pencapaian", text: "Realisasi dibagi target RKAP 2026 year to date, dibatasi maksimum 120%." },
  { term: "Pencapaian tertimbang", text: "Rata-rata pencapaian setelah dikalikan bobot RKAP tiap KPI." },
  { term: "Status", text: "On Track ≥ 80% · Perlu Perhatian 74–79% · Berisiko < 74%." },
  { term: "Sumber", text: "Corporate Performance Dashboard · RKAP 2026 · data per 31 Mei 2026." },
];
