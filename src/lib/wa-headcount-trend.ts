/**
 * Detail Headcount Trend — turunan kartu "Headcount Trend" pada Workforce
 * Analytics. Memecah satu garis 36 bulan menjadi: pertumbuhan YoY, komposisi
 * status kerja, arus masuk-keluar bulanan, kontribusi per subholding, proyeksi
 * 7 bulan ke depan, dan tabel rekonsiliasi bulanan.
 *
 * Basis angka = `headcountTrend` di wa-data.ts, sehingga titik akhir (70.142
 * per 31 Mei 2026) selalu sama dengan kartu ringkas.
 */

import { headcountTrend } from "./wa-data";

export interface TrendPoint {
  name: string;
  /** Headcount aktual; kosong pada periode proyeksi. */
  value?: number;
  /** Headcount proyeksi; Mei 2026 diisi juga sebagai titik sambung garis. */
  forecast?: number;
  /** Rentang keyakinan proyeksi [bawah, atas]. */
  band?: [number, number];
}

const FORECAST: TrendPoint[] = [
  { name: "Mei 2026", forecast: 70142, band: [70142, 70142] },
  { name: "Jun 2026", forecast: 70410, band: [70180, 70640] },
  { name: "Jul 2026", forecast: 70685, band: [70320, 71050] },
  { name: "Agu 2026", forecast: 70912, band: [70430, 71394] },
  { name: "Sep 2026", forecast: 71184, band: [70590, 71778] },
  { name: "Okt 2026", forecast: 71425, band: [70710, 72140] },
  { name: "Nov 2026", forecast: 71688, band: [70850, 72526] },
  { name: "Des 2026", forecast: 71950, band: [70980, 72920] },
];

/** 36 bulan aktual disambung 7 bulan proyeksi. */
export const headcountTrendDetail: TrendPoint[] = [
  ...headcountTrend.slice(0, -1).map((p) => ({ name: p.name, value: p.value })),
  { name: "Mei 2026", value: 70142, forecast: 70142, band: [70142, 70142] as [number, number] },
  ...FORECAST.slice(1),
];

/** Peristiwa yang menjelaskan patahan garis — ditandai di chart utama. */
export const trendEvents = [
  {
    month: "Des 2025",
    label: "Integrasi PTPN I",
    delta: "+2.689",
    note: "Konsolidasi 2.689 pekerja eks regional ke struktur holding",
  },
  {
    month: "Mar 2025",
    label: "Rasionalisasi",
    delta: "-140",
    note: "Efisiensi fungsi pendukung di 4 unit",
  },
  {
    month: "Jul 2025",
    label: "Rekrutmen panen",
    delta: "+546",
    note: "Penambahan tenaga panen musim puncak",
  },
];

/* ── Rekonsiliasi bulanan (24 bulan terakhir) ─────────────────────── */

export interface MonthlyRow {
  month: string;
  awal: number;
  newHire: number;
  mobilityIn: number;
  rehire: number;
  turnover: number;
  mobilityOut: number;
  lainnya: number;
  akhir: number;
  net: number;
  /** Pertumbuhan bulanan (%). */
  mom: number;
  /** Pertumbuhan tahunan (%); kosong bila data 12 bulan sebelumnya tak ada. */
  yoy: number | null;
}

/**
 * Arus keluar diturunkan dari rasio turnover bulanan ~0,55% headcount awal,
 * lalu arus masuk dihitung mundur agar total selalu menutup selisih aktual.
 */
function buildMonthly(): MonthlyRow[] {
  const rows: MonthlyRow[] = [];
  for (let i = 1; i < headcountTrend.length; i++) {
    const awal = headcountTrend[i - 1].value;
    const akhir = headcountTrend[i].value;
    const net = akhir - awal;

    const keluarTotal = Math.round(awal * 0.0055);
    const turnover = Math.round(keluarTotal * 0.78);
    const mobilityOut = Math.round(keluarTotal * 0.14);
    const lainnya = keluarTotal - turnover - mobilityOut;

    const masukTotal = net + keluarTotal;
    const rehire = Math.round(masukTotal * 0.06);
    const mobilityIn = Math.round(masukTotal * 0.21);
    const newHire = masukTotal - rehire - mobilityIn;

    const yoyBase = i >= 12 ? headcountTrend[i - 12].value : null;

    rows.push({
      month: headcountTrend[i].name,
      awal,
      newHire,
      mobilityIn,
      rehire,
      turnover,
      mobilityOut,
      lainnya,
      akhir,
      net,
      mom: Number(((net / awal) * 100).toFixed(2)),
      yoy: yoyBase ? Number((((akhir - yoyBase) / yoyBase) * 100).toFixed(1)) : null,
    });
  }
  return rows;
}

export const monthlyHeadcount: MonthlyRow[] = buildMonthly();

/** 24 bulan terakhir, terbaru di atas — dipakai tabel rekonsiliasi. */
export const monthlyRecent = [...monthlyHeadcount].slice(-24).reverse();

export const trendYears = [...new Set(monthlyRecent.map((r) => r.month.split(" ")[1]))];

/** Seri pertumbuhan YoY untuk bar chart (24 bulan). */
export const yoyGrowth = monthlyHeadcount
  .filter((r) => r.yoy !== null)
  .slice(-24)
  .map((r) => ({ name: r.month, yoy: r.yoy as number }));

/** Arus masuk vs keluar 12 bulan terakhir + garis net. */
export const flowLast12 = monthlyHeadcount.slice(-12).map((r) => ({
  name: r.month.replace(" 20", " "),
  masuk: r.newHire + r.mobilityIn + r.rehire,
  keluar: -(r.turnover + r.mobilityOut + r.lainnya),
  net: r.net,
}));

/* ── Komposisi status kerja (12 bulan) ────────────────────────────── */

export const compositionTrend = [
  { name: "Jun 25", tetap: 48120, pkwt: 7480, bhl: 6020, magang: 962, lainnya: 870 },
  { name: "Jul 25", tetap: 48310, pkwt: 7690, bhl: 6180, magang: 968, lainnya: 850 },
  { name: "Agu 25", tetap: 48460, pkwt: 7820, bhl: 6240, magang: 951, lainnya: 850 },
  { name: "Sep 25", tetap: 48690, pkwt: 8010, bhl: 6320, magang: 1012, lainnya: 860 },
  { name: "Okt 25", tetap: 48820, pkwt: 8140, bhl: 6390, magang: 1010, lainnya: 850 },
  { name: "Nov 25", tetap: 49080, pkwt: 8320, bhl: 6520, magang: 1042, lainnya: 850 },
  { name: "Des 25", tetap: 51240, pkwt: 8460, bhl: 6690, magang: 1181, lainnya: 930 },
  { name: "Jan 26", tetap: 51410, pkwt: 8520, bhl: 6710, magang: 1162, lainnya: 930 },
  { name: "Feb 26", tetap: 51680, pkwt: 8580, bhl: 6760, magang: 1152, lainnya: 930 },
  { name: "Mar 26", tetap: 51820, pkwt: 8610, bhl: 6790, magang: 1165, lainnya: 930 },
  { name: "Apr 26", tetap: 52010, pkwt: 8680, bhl: 6850, magang: 1172, lainnya: 1030 },
  { name: "Mei 26", tetap: 52146, pkwt: 8732, bhl: 6891, magang: 1243, lainnya: 1130 },
];

export const COMPOSITION_SERIES = [
  { key: "tetap", label: "Karyawan Tetap", color: "#1a9c5b" },
  { key: "pkwt", label: "PKWT", color: "#3b7ded" },
  { key: "bhl", label: "Buruh Harian Lepas", color: "#f5a524" },
  { key: "magang", label: "Magang", color: "#8b5cf6" },
  { key: "lainnya", label: "Lainnya", color: "#94a3b8" },
];

/* ── Kontribusi pertumbuhan YTD per subholding ────────────────────── */

export interface ContributionRow {
  name: string;
  des2025: number;
  mei2026: number;
  net: number;
  /** Pertumbuhan YTD (%). */
  growth: number;
}

const CONTRIB: [string, number, number][] = [
  ["PTPN IV", 22900, 23512],
  ["PTPN III", 17253, 17642],
  ["PTPN II", 11758, 11982],
  ["PTPN I", 7476, 7654],
  ["PTPN V", 4089, 4231],
  ["PTPN VI", 2137, 2201],
  ["Lainnya", 888, 920],
];

export const growthContribution: ContributionRow[] = CONTRIB.map(([name, des2025, mei2026]) => ({
  name,
  des2025,
  mei2026,
  net: mei2026 - des2025,
  growth: Number((((mei2026 - des2025) / des2025) * 100).toFixed(1)),
}));

/* ── KPI ──────────────────────────────────────────────────────────── */

const first = headcountTrend[0].value;
const last = headcountTrend[headcountTrend.length - 1].value;
const yearAgo = headcountTrend[headcountTrend.length - 13].value;
const ytdBase = 68501;

export const cagr3y = Number((((last / first) ** (1 / 3) - 1) * 100).toFixed(1));
export const yoyNow = Number((((last - yearAgo) / yearAgo) * 100).toFixed(1));
export const ytdNet = last - ytdBase;

export interface TrendKpi {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  share?: string;
  delta: string;
  trend: "up" | "down" | "flat";
  tone: "neutral" | "red" | "amber" | "green";
  compare: string;
}

export const trendKpi: TrendKpi[] = [
  {
    label: "Headcount Mei 2026",
    value: last.toLocaleString("id-ID"),
    delta: "+400",
    trend: "up",
    tone: "neutral",
    compare: "vs Apr 2026 (69.742)",
  },
  {
    label: "Pertumbuhan YoY",
    value: yoyNow.toString().replace(".", ","),
    suffix: "%",
    delta: "+2,1 pp",
    trend: "up",
    tone: "amber",
    compare: `vs Mei 2025 (${yearAgo.toLocaleString("id-ID")})`,
  },
  {
    label: "CAGR 3 Tahun",
    value: cagr3y.toString().replace(".", ","),
    suffix: "%",
    delta: "+0,4 pp",
    trend: "up",
    tone: "neutral",
    compare: "Jun 2023 – Mei 2026",
  },
  {
    label: "Net Growth YTD",
    value: `+${ytdNet.toLocaleString("id-ID")}`,
    share: "+2,4%",
    delta: "+1.180",
    trend: "up",
    tone: "green",
    compare: "vs YTD 2025 (+461)",
  },
  {
    label: "Rasio Masuk : Keluar",
    value: "1,74",
    suffix: "x",
    delta: "+0,21x",
    trend: "up",
    tone: "amber",
    compare: "4.437 masuk · 2.796 keluar (12 bln)",
  },
  {
    label: "Proyeksi Des 2026",
    value: "71.950",
    share: "+2,6%",
    delta: "+1.808",
    trend: "up",
    tone: "neutral",
    compare: "rentang 70.980 – 72.920",
  },
];

/* ── Catatan analitik ─────────────────────────────────────────────── */

export const trendNotes = [
  {
    title: "Lonjakan Des 2025 bukan rekrutmen organik",
    detail:
      "2.689 dari 2.851 penambahan Desember 2025 berasal dari integrasi PTPN I. Pertumbuhan organik bulan itu hanya +162.",
    tone: "amber" as const,
  },
  {
    title: "Pertumbuhan terkonsentrasi di 2 subholding",
    detail:
      "PTPN IV dan PTPN III menyumbang 61% net growth YTD (1.001 dari 1.641), sejalan dengan ekspansi area tanam.",
    tone: "blue" as const,
  },
  {
    title: "Porsi tenaga tidak tetap naik",
    detail:
      "PKWT + BHL naik dari 21,4% (Jun 2025) menjadi 22,3% (Mei 2026) — perlu ditinjau terhadap batas biaya tenaga kerja.",
    tone: "red" as const,
  },
];
