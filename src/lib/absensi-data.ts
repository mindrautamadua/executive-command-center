import type { Trend } from "./data";
import { PALETTE, SEMANTIC, SEQ_GREEN } from "./chart-palette";

/* ── KPI strip ───────────────────────────────────────────── */

export type KpiChipTone =
  | "green"
  | "blue"
  | "teal"
  | "amber"
  | "red"
  | "purple"
  | "pink"
  | "slate";

export interface AbsensiKpi {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  /** Arah panah delta. */
  trend: Trend;
  /** Warna delta: "good" hijau, "bad" merah. Turunnya absenteeism itu kabar baik. */
  deltaTone: "good" | "bad";
  compare: string;
  icon: "health" | "kehadiran" | "absen" | "ontime" | "lembur" | "jam";
  tone: KpiChipTone;
  line: string;
  series: number[];
  /** Definisi/metodologi metrik — tampil sebagai tooltip ⓘ (data dictionary). */
  info: string;
}

export const absensiKpi: AbsensiKpi[] = [
  {
    label: "Attendance Health",
    value: "84",
    unit: "/100",
    delta: "2 pts",
    trend: "up",
    deltaTone: "good",
    compare: "Komposit 7 sinyal · Status: Waspada",
    icon: "health",
    tone: "green",
    line: PALETTE.green,
    series: [38, 40, 39, 41, 40, 42, 41, 43, 42, 44, 45, 46, 47, 48, 50],
    info: "Indeks komposit: kehadiran, absenteeism, ketepatan waktu, lembur, sakit, alpha, kepatuhan jadwal. Skala: ≥85 Sehat · 70–84 Waspada · <70 Kritis.",
  },
  {
    label: "Tingkat Kehadiran",
    value: "96,2%",
    delta: "2,8%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026: 93,4%",
    icon: "kehadiran",
    tone: "blue",
    line: PALETTE.blue,
    series: [34, 32, 36, 33, 37, 34, 38, 35, 39, 36, 41, 38, 44, 47, 52],
    info: "Attendance Rate: hari kerja hadir ÷ hari kerja terjadwal = 96,2%. Berbeda dari Presence Rate: 17.162 karyawan hadir ÷ 18.642 populasi = 92,1% (snapshot orang, bukan hari kerja).",
  },
  {
    label: "Absenteeism (Unplanned)",
    value: "4,8%",
    delta: "0,3%",
    trend: "down",
    deltaTone: "good",
    compare: "Alpha 3,6% · Sakit 1,2% · 902 karyawan",
    icon: "absen",
    tone: "red",
    line: PALETTE.red,
    series: [46, 48, 45, 47, 44, 46, 43, 45, 42, 44, 41, 43, 40, 41, 39],
    info: "Absen tak terencana (alpha + sakit) ÷ hari kerja terjadwal. Izin terencana (3,1%) tidak termasuk — dihitung sebagai planned leave. Kehilangan kapasitas ±895 FTE.",
  },
  {
    label: "Tepat Waktu (On Time)",
    value: "87,5%",
    delta: "3,6%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026: 83,9%",
    icon: "ontime",
    tone: "green",
    line: PALETTE.green,
    series: [28, 31, 29, 33, 31, 35, 32, 37, 34, 39, 36, 42, 45, 49, 54],
    info: "Check-in ≤ jadwal shift ÷ total check-in. Terlambat 1.234 karyawan: 268 di antaranya >30 menit, 72 >60 menit; 1.124 tergolong terlambat kronis (≥8×/kuartal).",
  },
  {
    label: "Lembur",
    value: "12,4%",
    delta: "1,2%",
    trend: "down",
    deltaTone: "bad",
    compare: "Target <8% · Gap +4,4 pts",
    icon: "lembur",
    tone: "amber",
    line: PALETTE.amber,
    series: [44, 41, 45, 42, 46, 43, 45, 42, 44, 41, 43, 40, 42, 39, 41],
    info: "Jam lembur ÷ jam kerja reguler. vs Apr 2026: 13,6%. 2.314 karyawan lembur >40 jam/bulan; top 10% karyawan menyerap 41% total jam lembur (Rp 21,4 M/bulan).",
  },
  {
    label: "Rata-rata Jam Kerja",
    value: "8j 12m",
    delta: "0j 18m",
    trend: "up",
    deltaTone: "good",
    compare: "vs Apr 2026: 7j 54m",
    icon: "jam",
    tone: "purple",
    line: PALETTE.purple,
    series: [36, 33, 38, 35, 40, 36, 41, 37, 42, 38, 43, 40, 45, 42, 47],
    info: "Rata-rata jam kerja efektif per karyawan per hari kerja, termasuk lembur, tidak termasuk istirahat.",
  },
];

/* ── Ringkasan kehadiran (donat) ─────────────────────────── */

export interface StatusSlice {
  name: string;
  jumlah: number;
  label: string;
  pct: string;
  color: string;
}

export const totalKaryawan = 18642;

/**
 * Irisan donat harus mutually exclusive agar totalnya 100%.
 * Terlambat & WFH adalah subset dari Hadir — ditampilkan sebagai
 * sub-statistik terpisah, bukan irisan donat.
 */
export const ringkasanKehadiran: StatusSlice[] = [
  { name: "Hadir", jumlah: 17162, label: "17.162", pct: "(92,1%)", color: SEMANTIC.good },
  { name: "Izin", jumlah: 578, label: "578", pct: "(3,1%)", color: PALETTE.blue },
  { name: "Sakit", jumlah: 224, label: "224", pct: "(1,2%)", color: PALETTE.teal },
  { name: "Alpha", jumlah: 678, label: "678", pct: "(3,6%)", color: PALETTE.red },
];

/** Subset dari "Hadir" — bukan bagian donat. */
export const subStatusKehadiran: StatusSlice[] = [
  {
    name: "Terlambat",
    jumlah: 1234,
    label: "1.234",
    pct: "7,2% dari hadir",
    color: PALETTE.amber,
  },
  { name: "WFH", jumlah: 856, label: "856", pct: "5,0% dari hadir", color: PALETTE.purple },
];

/* ── Tren tingkat kehadiran ──────────────────────────────── */

export const trenKehadiran = [
  { name: "Des 2025", value: 92.1 },
  { name: "Jan 2026", value: 92.8 },
  { name: "Feb 2026", value: 93.4 },
  { name: "Mar 2026", value: 94.1 },
  { name: "Apr 2026", value: 93.4 },
  { name: "Mei 2026", value: 96.2 },
];

/* ── Kehadiran per unit organisasi ───────────────────────── */

export interface UnitKehadiran {
  nama: string;
  value: number;
  label: string;
}

export const kehadiranUnit: UnitKehadiran[] = [
  { nama: "PTPN IV", value: 97.8, label: "97,8%" },
  { nama: "PTPN III (Persero)", value: 96.9, label: "96,9%" },
  { nama: "PTPN I", value: 96.4, label: "96,4%" },
  { nama: "PalmCo", value: 96.1, label: "96,1%" },
  { nama: "PTPN V", value: 95.8, label: "95,8%" },
  { nama: "PTPN II", value: 95.2, label: "95,2%" },
  { nama: "Holding & Supporting Co", value: 94.9, label: "94,9%" },
  { nama: "PTPN Regional 1", value: 94.1, label: "94,1%" },
  { nama: "PTPN Regional 2", value: 93.7, label: "93,7%" },
  { nama: "PTPN Regional 3", value: 92.8, label: "92,8%" },
];

/* ── Kehadiran per lokasi (peta) ─────────────────────────── */

export interface LokasiPin {
  nama: string;
  value: number;
  label: string;
  /** Posisi label dalam persen terhadap kotak peta. */
  x: number;
  y: number;
}

export const kehadiranLokasi: LokasiPin[] = [
  { nama: "Sumatera", value: 96.1, label: "96,1%", x: 17, y: 30 },
  { nama: "Kalimantan", value: 95.7, label: "95,7%", x: 45, y: 18 },
  { nama: "Sulawesi", value: 95.9, label: "95,9%", x: 69, y: 22 },
  { nama: "Jawa", value: 96.6, label: "96,6%", x: 32, y: 74 },
  { nama: "Bali & Nusa", value: 95.4, label: "95,4%", x: 58, y: 76 },
  { nama: "Papua", value: 94.2, label: "94,2%", x: 84, y: 62 },
];

/** Warna pin lokasi mengikuti ramp hijau sekuensial (rendah → tinggi). */
export const warnaLokasi = (v: number) => {
  if (v >= 96.4) return SEQ_GREEN[4];
  if (v >= 95.8) return SEQ_GREEN[3];
  if (v >= 95.0) return SEQ_GREEN[2];
  return SEQ_GREEN[1];
};

/* ── Pola kehadiran per hari ─────────────────────────────── */

export const polaHarian = [
  { name: "Senin", value: 96.1, label: "96,1%" },
  { name: "Selasa", value: 96.3, label: "96,3%" },
  { name: "Rabu", value: 96.4, label: "96,4%" },
  { name: "Kamis", value: 96.0, label: "96,0%" },
  { name: "Jumat", value: 95.6, label: "95,6%" },
  { name: "Sabtu", value: 78.2, label: "78,2%" },
  { name: "Minggu", value: 42.7, label: "42,7%" },
];

/* ── Keterlambatan ───────────────────────────────────────── */

export const totalTerlambat = 1234;

/**
 * Ramp ordinal keparahan keterlambatan (ringan → berat).
 * Ramp sekuensial khusus severity — berujung merah, bukan kategorikal.
 */
const SEVERITY_RAMP = ["#fbd9a1", PALETTE.amber, "#f0742e", PALETTE.red];

export const keterlambatan: StatusSlice[] = [
  { name: "1 - 15 menit", jumlah: 642, label: "642", pct: "(52,0%)", color: SEVERITY_RAMP[0] },
  { name: "16 - 30 menit", jumlah: 324, label: "324", pct: "(26,3%)", color: SEVERITY_RAMP[1] },
  { name: "31 - 60 menit", jumlah: 196, label: "196", pct: "(15,9%)", color: SEVERITY_RAMP[2] },
  { name: "> 60 menit", jumlah: 72, label: "72", pct: "(5,8%)", color: SEVERITY_RAMP[3] },
];

/* ── Status kehadiran hari ini ───────────────────────────── */

export interface StatusHariIniRow {
  nama: string;
  jumlah: string;
  pct: string;
  color: string;
}

/** Warna status seragam dengan Ringkasan Kehadiran. */
export const statusHariIni: StatusHariIniRow[] = [
  { nama: "Hadir", jumlah: "16.842", pct: "(90,3%)", color: SEMANTIC.good },
  { nama: "Terlambat", jumlah: "842", pct: "(4,5%)", color: PALETTE.amber },
  { nama: "Izin", jumlah: "428", pct: "(2,3%)", color: PALETTE.blue },
  { nama: "Sakit", jumlah: "162", pct: "(0,9%)", color: PALETTE.teal },
  { nama: "Alpha", jumlah: "214", pct: "(1,1%)", color: PALETTE.red },
  { nama: "WFH", jumlah: "368", pct: "(2,0%)", color: PALETTE.purple },
];

/**
 * Status "hari ini" adalah stream live — terpisah dari periode pelaporan
 * (Mei 2026). Mengikuti lastRefresh pada dataTrust global.
 */
export const stempelRealtime = "15 Agu 2026";

/* ── Rekap kehadiran karyawan ────────────────────────────── */

export type RisikoLevel = "Rendah" | "Waspada" | "Tinggi";

export interface RekapRow {
  unit: string;
  karyawan: string;
  kehadiran: string;
  tepatWaktu: string;
  lembur: string;
  izin: string;
  sakit: string;
  alpha: string;
  /**
   * Risiko komposit: kehadiran × alpha × lembur × on-time.
   * Kehadiran tinggi + lembur tinggi tetap bisa berisiko (indikasi understaffed).
   */
  risiko: RisikoLevel;
}

export const rekapKehadiran: RekapRow[] = [
  {
    unit: "PTPN IV",
    karyawan: "4.125",
    kehadiran: "97,8%",
    tepatWaktu: "89,2%",
    lembur: "13,1%",
    izin: "2,6%",
    sakit: "0,9%",
    alpha: "3,2%",
    risiko: "Waspada",
  },
  {
    unit: "PTPN III (Persero)",
    karyawan: "3.860",
    kehadiran: "96,9%",
    tepatWaktu: "87,6%",
    lembur: "12,4%",
    izin: "3,0%",
    sakit: "1,1%",
    alpha: "3,3%",
    risiko: "Rendah",
  },
  {
    unit: "PTPN I",
    karyawan: "2.987",
    kehadiran: "96,4%",
    tepatWaktu: "88,3%",
    lembur: "11,8%",
    izin: "2,9%",
    sakit: "1,2%",
    alpha: "3,6%",
    risiko: "Rendah",
  },
  {
    unit: "PalmCo",
    karyawan: "1.963",
    kehadiran: "96,1%",
    tepatWaktu: "87,1%",
    lembur: "12,7%",
    izin: "3,2%",
    sakit: "1,3%",
    alpha: "3,7%",
    risiko: "Rendah",
  },
  {
    unit: "PTPN V",
    karyawan: "1.872",
    kehadiran: "95,8%",
    tepatWaktu: "86,5%",
    lembur: "12,2%",
    izin: "3,1%",
    sakit: "1,0%",
    alpha: "4,0%",
    risiko: "Waspada",
  },
  {
    unit: "PTPN Regional 1",
    karyawan: "1.428",
    kehadiran: "94,1%",
    tepatWaktu: "84,2%",
    lembur: "14,8%",
    izin: "3,4%",
    sakit: "1,3%",
    alpha: "4,2%",
    risiko: "Waspada",
  },
  {
    unit: "PTPN Regional 2",
    karyawan: "1.245",
    kehadiran: "93,7%",
    tepatWaktu: "83,6%",
    lembur: "15,4%",
    izin: "3,5%",
    sakit: "1,4%",
    alpha: "4,5%",
    risiko: "Waspada",
  },
  {
    unit: "PTPN Regional 3",
    karyawan: "1.162",
    kehadiran: "92,8%",
    tepatWaktu: "82,1%",
    lembur: "16,2%",
    izin: "3,7%",
    sakit: "1,5%",
    alpha: "4,8%",
    risiko: "Tinggi",
  },
];

/* ── Insight AI ──────────────────────────────────────────── */

export interface AbsensiInsight {
  isi: string;
  tone: "success" | "info" | "warning" | "neutral";
}

/**
 * Format diagnosis, bukan reporting: sinyal → kemungkinan akar masalah →
 * rekomendasi → estimasi dampak. Hindari lompat ke kesimpulan disiplin.
 */
export const absensiInsight: AbsensiInsight[] = [
  {
    isi: "Kehadiran naik 2,8 pts MoM ke 96,2% — tren positif 5 bulan beruntun. Attendance Health 84/100 (Waspada, membaik dari 82).",
    tone: "success",
  },
  {
    isi: "Regional 3: alpha 4,8% + lembur 16,2% + gap kapasitas −218 FTE. Pola konsisten dengan understaffing struktural, bukan semata indisipliner. Review kecukupan staffing & alokasi shift sebelum intervensi disiplin. Estimasi dampak: alpha −1,5 pts, lembur −3 pts.",
    tone: "warning",
  },
  {
    isi: "Top 10% karyawan menyerap 41% jam lembur (Rp 21,4 M/bulan). Rekrut 120 FTE diestimasi lebih hemat ± Rp 3,3 M/bulan — uji di Scenario Simulation.",
    tone: "info",
  },
  {
    isi: "Input manual masih 4,8% (912 karyawan) — risiko kualitas data absensi. Percepat enrollment face recognition; keterlambatan terkonsentrasi di hari Senin.",
    tone: "neutral",
  },
];

/* ── Metode pencatatan kehadiran ─────────────────────────── */

export const metodePencatatan: StatusSlice[] = [
  {
    name: "Face Recognition",
    jumlah: 12842,
    label: "12.842",
    pct: "68,9%",
    color: PALETTE.blue,
  },
  {
    name: "Mobile",
    jumlah: 3642,
    label: "3.642",
    pct: "19,6%",
    color: PALETTE.green,
  },
  { name: "Web", jumlah: 1246, label: "1.246", pct: "6,7%", color: PALETTE.amber },
  { name: "Manual", jumlah: 912, label: "912", pct: "4,8%", color: PALETTE.purple },
];

/* ── Kalender kehadiran (heatmap 13 minggu) ──────────────── */

export interface KalenderSel {
  /** contoh: "12 Mei" */
  tanggal: string;
  pct: number;
  weekend: boolean;
}

const BULAN = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/**
 * Data deterministik: LCG bilangan bulat (bukan Math.random) supaya hasil
 * server dan client identik — aman dari hydration mismatch.
 */
function buatKalender(): KalenderSel[][] {
  let s = 20260510;
  const acak = () => {
    s = (s * 1103515245 + 12345) % 2147483648;
    return s / 2147483648;
  };
  // Basis per hari kerja mengikuti polaHarian (Senin..Minggu).
  const basis = [96.1, 96.3, 96.4, 96.0, 95.6, 78.2, 42.7];
  const mulai = new Date(2026, 1, 9); // Senin 9 Feb 2026 → 13 minggu s.d. 10 Mei 2026
  const minggu: KalenderSel[][] = [];
  for (let w = 0; w < 13; w++) {
    const hari: KalenderSel[] = [];
    for (let d = 0; d < 7; d++) {
      const tgl = new Date(mulai.getTime());
      tgl.setDate(mulai.getDate() + w * 7 + d);
      const weekend = d >= 5;
      const jitter = (acak() - 0.5) * (weekend ? 8 : 3);
      const pct = Math.round((basis[d] + jitter) * 10) / 10;
      hari.push({
        tanggal: `${tgl.getDate()} ${BULAN[tgl.getMonth()]}`,
        pct: Math.min(99.5, Math.max(30, pct)),
        weekend,
      });
    }
    minggu.push(hari);
  }
  return minggu;
}

export const kalenderKehadiran: KalenderSel[][] = buatKalender();

/** Warna sel heatmap — ramp hijau (rendah → tinggi), khusus hari kerja. */
export const warnaKalender = (pct: number) => {
  if (pct >= 96.5) return SEQ_GREEN[4];
  if (pct >= 95.5) return SEQ_GREEN[3];
  if (pct >= 94.5) return SEQ_GREEN[2];
  if (pct >= 93.0) return SEQ_GREEN[1];
  return SEQ_GREEN[0];
};

/* ── Ekonomi absensi & lembur ────────────────────────────── */

/**
 * Konversi absensi ke eksposur ekonomi (estimasi Mei 2026):
 * hari hilang × biaya tenaga kerja rata-rata/hari + lembur pengganti +
 * kerugian produktivitas. Semua angka bulanan.
 */
export const ekonomiAbsensi = {
  hariHilang: "18.790",
  biayaAbsensi: "Rp 7,2 M",
  jamLembur: "312.400",
  biayaLembur: "Rp 21,4 M",
  lemburPerPayroll: "6,8%",
  produktivitasLoss: "Rp 6,2 M",
  totalEksposur: "Rp 34,8 M",
  konsentrasi: "Top 10% karyawan = 41% jam lembur",
  skenario: {
    current: "Status quo: lembur Rp 21,4 M/bln, fatigue naik",
    alternatif: "Rekrut 120 FTE: Rp 8,6 M/bln, lembur −35%",
    verdict: "Rekrutmen lebih ekonomis — hemat ± Rp 3,3 M/bln",
  },
};

/* ── Early warning kehadiran ─────────────────────────────── */

export interface EarlyWarningRow {
  label: string;
  value: string;
  pct: string;
  tone: "amber" | "red";
}

/** Rolling 12 bulan; sinyal gabungan = absen + telat + lembur simultan. */
export const earlyWarningAbsensi: EarlyWarningRow[] = [
  { label: "Absensi kronis (≥10 hari/12 bln)", value: "1.482", pct: "7,9%", tone: "amber" },
  { label: "Absensi berat (≥15 hari/12 bln)", value: "642", pct: "3,4%", tone: "red" },
  { label: "Terlambat kronis (≥8×/kuartal)", value: "1.124", pct: "6,0%", tone: "amber" },
  { label: "Lembur tinggi (>40 jam/bln)", value: "2.314", pct: "12,4%", tone: "amber" },
  { label: "Sinyal gabungan (absen+telat+lembur)", value: "486", pct: "2,6%", tone: "red" },
];

export const paretoAbsen = "214 karyawan (1,1%) menyumbang 18% total hari absen";

/* ── Kapasitas workforce efektif ─────────────────────────── */

export const kapasitasWorkforce = {
  required: "18.470",
  tersedia: "17.748",
  gap: "−722",
  gapPct: "3,9%",
  spotlight: {
    unit: "PTPN Regional 3",
    butuh: "1.280 FTE",
    efektif: "1.062 FTE",
    gap: "−218 FTE",
    lembur: "16,2%",
    diagnosis:
      "Lembur 16,2% menutup gap kapasitas — indikasi understaffing, bukan indisipliner.",
  },
  asosiasiProduktivitas:
    "Unit dengan kehadiran <93% menunjukkan produktivitas 17% lebih rendah (asosiasi, bukan hubungan kausal).",
};
