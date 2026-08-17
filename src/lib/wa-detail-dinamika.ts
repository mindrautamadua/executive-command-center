/**
 * Data detail dinamika workforce — turunan kartu "Turnover Rate Trend",
 * "Headcount Movement (YTD)", dan "Insight & Rekomendasi" pada Workforce
 * Analytics. Titik akhir tiap seri dikunci ke angka kartu ringkas: turnover
 * 6,8% dan headcount 70.142 per 31 Mei 2026.
 */

import type { DetailKpi, DetailNote } from "@/components/wa/detail/parts";
import { PALETTE } from "./chart-palette";

/* ══ 1. Turnover ══════════════════════════════════════════════════ */

export interface TurnoverOrgRow {
  name: string;
  headcount: number;
  exits: number;
  rate: number;
  voluntary: number;
  involuntary: number;
  criticalExits: number;
  /** Biaya turnover 12 bulan (Rp miliar). */
  cost: number;
  trend: "up" | "down" | "flat";
}

export const turnoverByOrg: TurnoverOrgRow[] = [
  { name: "PTPN IV", headcount: 23512, exits: 1458, rate: 6.2, voluntary: 4.9, involuntary: 1.3, criticalExits: 42, cost: 48.6, trend: "down" },
  { name: "PTPN III", headcount: 17642, exits: 1200, rate: 6.8, voluntary: 5.4, involuntary: 1.4, criticalExits: 36, cost: 38.2, trend: "down" },
  { name: "PTPN I Regional 1", headcount: 11982, exits: 887, rate: 7.4, voluntary: 6.1, involuntary: 1.3, criticalExits: 28, cost: 26.4, trend: "flat" },
  { name: "PTPN I", headcount: 7654, exits: 605, rate: 7.9, voluntary: 6.4, involuntary: 1.5, criticalExits: 21, cost: 18.1, trend: "up" },
  { name: "PTPN IV Regional 3", headcount: 4231, exits: 258, rate: 6.1, voluntary: 4.8, involuntary: 1.3, criticalExits: 9, cost: 8.4, trend: "down" },
  { name: "PTPN IV Regional 4", headcount: 2201, exits: 185, rate: 8.4, voluntary: 7.0, involuntary: 1.4, criticalExits: 8, cost: 6.2, trend: "up" },
  { name: "Lainnya", headcount: 920, exits: 50, rate: 5.4, voluntary: 4.2, involuntary: 1.2, criticalExits: 2, cost: 2.7, trend: "flat" },
];

/** Alasan keluar 12 bulan terakhir. */
export const exitReasons = [
  { reason: "Pindah ke perusahaan lain", count: 1284, pct: 27.6, color: PALETTE.red },
  { reason: "Pensiun", count: 968, pct: 20.8, color: PALETTE.slate },
  { reason: "Kontrak berakhir", count: 842, pct: 18.1, color: PALETTE.amber },
  { reason: "Alasan pribadi & keluarga", count: 618, pct: 13.3, color: PALETTE.blue },
  { reason: "Kompensasi tidak sesuai", count: 486, pct: 10.4, color: "#f97316" },
  { reason: "Pemutusan hubungan kerja", count: 312, pct: 6.7, color: PALETTE.purple },
  { reason: "Lainnya", count: 133, pct: 3.1, color: "#c3ced9" },
];

/** Turnover berdasarkan lama masa kerja. */
export const turnoverByTenure = [
  { band: "< 1 tahun", rate: 18.4, exits: 946 },
  { band: "1 - 3 tahun", rate: 11.2, exits: 1128 },
  { band: "3 - 5 tahun", rate: 7.6, exits: 742 },
  { band: "5 - 10 tahun", rate: 5.1, exits: 861 },
  { band: "> 10 tahun", rate: 3.2, exits: 966 },
];

export const turnoverKpi: DetailKpi[] = [
  { label: "Turnover Rate", value: "6,8", suffix: "%", delta: "-1,4 pp", trend: "down", tone: "green", compare: "vs Mei 2025 (8,2%)" },
  { label: "Voluntary", value: "5,4", suffix: "%", share: "79%", delta: "-1,1 pp", trend: "down", tone: "green", compare: "3.669 dari 4.643 keluar" },
  { label: "Involuntary", value: "1,4", suffix: "%", share: "21%", delta: "-0,3 pp", trend: "down", tone: "neutral", compare: "termasuk kontrak berakhir" },
  { label: "Turnover Posisi Kritis", value: "9,1", suffix: "%", share: "146 orang", delta: "+2,1 pp", trend: "up", tone: "red", compare: "di atas rata-rata grup" },
  { label: "Retensi Tahun Pertama", value: "81,6", suffix: "%", delta: "+2,4 pp", trend: "up", tone: "amber", compare: "target grup 88%" },
  { label: "Biaya Turnover", prefix: "Rp ", value: "148,6", suffix: "M", delta: "-12,4 M", trend: "down", tone: "green", compare: "rekrutmen ulang + kurva belajar" },
];

export const turnoverNotes: DetailNote[] = [
  {
    title: "Angka grup membaik, posisi kritis memburuk",
    detail: "Turnover total turun 1,4 pp, tetapi posisi kritis naik 2,1 pp menjadi 9,1% — 146 pemegang peran kunci keluar dalam 12 bulan.",
    tone: "red",
  },
  {
    title: "Tahun pertama paling rawan",
    detail: "Turnover masa kerja di bawah 1 tahun 18,4%, hampir 6x kelompok di atas 10 tahun. Onboarding dan penempatan awal jadi titik perbaikan.",
    tone: "amber",
  },
  {
    title: "Kompetitor menjadi tujuan utama",
    detail: "27,6% keluar karena pindah ke perusahaan lain, dengan 10,4% menyebut kompensasi — sejalan dengan compa-ratio 0,88 terhadap pasar.",
    tone: "blue",
  },
];

/* ══ 2. Headcount Movement ════════════════════════════════════════ */

export interface MovementOrgRow {
  name: string;
  awal: number;
  newHire: number;
  mobilityIn: number;
  rehire: number;
  turnover: number;
  mobilityOut: number;
  lainnya: number;
  akhir: number;
}

/* [nama, awal, newHire, mobilityIn, rehire, turnover, mobilityOut, lainnya, akhir] */
const MOVE: [string, number, number, number, number, number, number, number, number][] = [
  ["PTPN IV", 22900, 986, 428, 118, 782, 92, 46, 23512],
  ["PTPN III", 17253, 742, 318, 86, 668, 61, 28, 17642],
  ["PTPN I Regional 1", 11758, 498, 214, 54, 462, 44, 36, 11982],
  ["PTPN I", 7476, 342, 136, 42, 288, 36, 18, 7654],
  ["PTPN IV Regional 3", 4089, 186, 78, 24, 118, 18, 10, 4231],
  ["PTPN IV Regional 4", 2137, 96, 42, 12, 68, 24, 4, 2201],
  ["Lainnya", 888, 46, 15, 6, 26, 12, 3, 920],
];

export const movementByOrg: MovementOrgRow[] = MOVE.map(
  ([name, awal, newHire, mobilityIn, rehire, turnover, mobilityOut, lainnya, akhir]) => ({
    name,
    awal,
    newHire,
    mobilityIn,
    rehire,
    turnover,
    mobilityOut,
    lainnya,
    akhir,
  }),
);

/** Sumber pemenuhan posisi YTD. */
export const hiringSources = [
  { source: "Experienced hire", count: 1284, pct: 44.8, color: PALETTE.blue },
  { source: "Fresh graduate", count: 862, pct: 30.1, color: PALETTE.green },
  { source: "Internal mobility", count: 1231, pct: 0, color: PALETTE.teal },
  { source: "Rehire (alumni)", count: 342, pct: 11.9, color: PALETTE.purple },
  { source: "Konversi PKWT / BHL", count: 718, pct: 25.1, color: PALETTE.amber },
];

export const movementKpi: DetailKpi[] = [
  { label: "Net Movement YTD", value: "+1.641", share: "+2,4%", delta: "+1.180", trend: "up", tone: "green", compare: "Des 2025 → Mei 2026" },
  { label: "New Hire", value: "2.864", delta: "+842", trend: "up", tone: "neutral", compare: "44,8% experienced hire" },
  { label: "Turnover (Keluar)", value: "2.345", delta: "-186", trend: "down", tone: "green", compare: "termasuk 968 pensiun" },
  { label: "Internal Mobility", value: "1.231", share: "masuk", delta: "+284", trend: "up", tone: "green", compare: "287 keluar antar entitas" },
  { label: "Time to Fill", value: "68", suffix: "hari", delta: "-9 hari", trend: "down", tone: "green", compare: "target grup 60 hari" },
  { label: "Rasio Masuk : Keluar", value: "1,74", suffix: "x", delta: "+0,21x", trend: "up", tone: "amber", compare: "4.437 masuk · 2.796 keluar" },
];

export const movementNotes: DetailNote[] = [
  {
    title: "Mobilitas internal menopang seperempat pemenuhan",
    detail: "1.231 perpindahan internal setara 27,7% total arus masuk — menekan biaya rekrutmen sekaligus menjaga pengetahuan tetap di grup.",
    tone: "green",
  },
  {
    title: "Pensiun mendominasi arus keluar",
    detail: "968 dari 2.345 keluar (41,3%) adalah pensiun — dapat direncanakan, sehingga kaderisasi seharusnya bisa mendahului.",
    tone: "blue",
  },
  {
    title: "Time to fill masih di atas target",
    detail: "68 hari vs target 60 hari; posisi teknis pabrik rata-rata 94 hari dan menjadi penyumbang utama keterlambatan.",
    tone: "amber",
  },
];

/* ══ 3. Insight & Rekomendasi ═════════════════════════════════════ */

export type InsightStatus = "Berjalan" | "Perlu Keputusan" | "Rencana" | "Selesai";
export type InsightUrgency = "Tinggi" | "Sedang" | "Rendah";

export interface InsightRow {
  id: string;
  title: string;
  finding: string;
  action: string;
  category: string;
  /** Dampak finansial atau eksposur (Rp miliar). */
  impactRp: number;
  urgency: InsightUrgency;
  owner: string;
  forum: string;
  due: string;
  status: InsightStatus;
  /** Keyakinan analitik terhadap temuan (%). */
  confidence: number;
}

export const insightRows: InsightRow[] = [
  { id: "INS-01", title: "Headcount di bawah requirement RKAP", finding: "Headcount +2,4% vs Des 2025, namun masih -2.176 FTE di bawah requirement RKAP 72.318.", action: "Tutup lewat internal mobility 600 + targeted hiring 1.200 + offset otomasi 376.", category: "Kapasitas", impactRp: 62.4, urgency: "Tinggi", owner: "Group CHRO", forum: "Rapat Direksi", due: "30 Jun 2026", status: "Perlu Keputusan", confidence: 88 },
  { id: "INS-02", title: "Turnover posisi kritis di atas rata-rata", finding: "Turnover grup turun 1,4 pp, tetapi posisi kritis naik 2,1 pp menjadi 9,1%.", action: "Retensi 32 talenta kritis: tinjau kompensasi ke P50 pasar dan ikat program pengembangan.", category: "Retensi", impactRp: 48.2, urgency: "Tinggi", owner: "Group CHRO", forum: "Komite SDM", due: "31 Jul 2026", status: "Berjalan", confidence: 84 },
  { id: "INS-03", title: "Gelombang pensiun teknis 2029 – 2031", finding: "4.036 pensiun dalam tiga tahun, 1.011 di antaranya posisi teknis kritis PKS.", action: "Mulai transfer pengetahuan dan pipeline suksesi teknis pada 2026, jangan menunggu 2028.", category: "Suksesi", impactRp: 34.6, urgency: "Sedang", owner: "Dir. Produksi", forum: "Komite SDM", due: "30 Sep 2026", status: "Rencana", confidence: 91 },
  { id: "INS-04", title: "Kekurangan kapabilitas AI & Data", finding: "Proyeksi shortage 830 kapabilitas AI & Data pada 2028; laju reskilling 6% vs target 12%.", action: "Naikkan reskilling ke 12% per tahun (±400 pekerja) + rekrutmen strategis 3 skill teratas.", category: "Kapabilitas", impactRp: 28.9, urgency: "Sedang", owner: "Group CIO", forum: "Komite Digital", due: "31 Des 2026", status: "Berjalan", confidence: 76 },
  { id: "INS-05", title: "Kesenjangan produktivitas Palm Oil Ops", finding: "Biaya tenaga kerja +8,2% sementara produktivitas hanya +2,1% di Palm Oil Operations.", action: "Tinjau model produktivitas workforce — agenda BOD Q3 2026.", category: "Produktivitas", impactRp: 48.0, urgency: "Tinggi", owner: "Dir. Operasi", forum: "Rapat Direksi", due: "30 Sep 2026", status: "Perlu Keputusan", confidence: 82 },
  { id: "INS-06", title: "Porsi tenaga tidak tetap melewati batas", finding: "PKWT + BHL 22,3% terhadap batas kebijakan 20%; turnover BHL 21,6%.", action: "Konversi bertahap 900 PKWT berkinerja baik + penataan ulang beban musiman.", category: "Komposisi", impactRp: 21.4, urgency: "Sedang", owner: "Group CHRO", forum: "Komite SDM", due: "31 Agu 2026", status: "Berjalan", confidence: 79 },
  { id: "INS-07", title: "Retensi tahun pertama di bawah target", finding: "Retensi 12 bulan pertama 81,6% vs target 88%; turnover masa kerja < 1 tahun 18,4%.", action: "Rombak onboarding 90 hari + penugasan mentor untuk seluruh rekrutan baru.", category: "Retensi", impactRp: 16.8, urgency: "Sedang", owner: "Group CHRO", forum: "Komite SDM", due: "31 Jul 2026", status: "Berjalan", confidence: 86 },
  { id: "INS-08", title: "Keragaman gender tertahan di lapis atas", finding: "Perempuan 27,0% di grup, tetapi hanya 12,1% di Direktur & SVP.", action: "Targetkan 30% kandidat perempuan pada setiap daftar pendek posisi manajerial.", category: "Keragaman", impactRp: 0, urgency: "Rendah", owner: "Group CHRO", forum: "Komite SDM", due: "31 Des 2026", status: "Rencana", confidence: 72 },
  { id: "INS-09", title: "Kepatuhan disabilitas belum tercapai", finding: "Porsi pekerja disabilitas 1,25% terhadap kewajiban regulasi 2% — kurang 527 orang.", action: "Buka jalur rekrutmen khusus + penyesuaian tempat kerja di 12 unit percontohan.", category: "Kepatuhan", impactRp: 12.4, urgency: "Tinggi", owner: "Group Legal", forum: "Komite Risiko", due: "31 Des 2026", status: "Perlu Keputusan", confidence: 94 },
  { id: "INS-10", title: "Time to fill posisi teknis melar", finding: "Rata-rata 94 hari untuk posisi teknis pabrik vs target grup 60 hari.", action: "Bangun kumpulan kandidat siap pakai + kerja sama 4 politeknik pemasok utama.", category: "Kapasitas", impactRp: 9.6, urgency: "Rendah", owner: "Group CHRO", forum: "Komite SDM", due: "30 Nov 2026", status: "Selesai", confidence: 81 },
];

export const insightCategories = [...new Set(insightRows.map((i) => i.category))];

export const totalInsightExposure = Number(
  insightRows.reduce((s, i) => s + i.impactRp, 0).toFixed(1),
);

export const insightKpi: DetailKpi[] = [
  { label: "Total Insight Aktif", value: String(insightRows.length), delta: "+3", trend: "up", tone: "neutral", compare: "siklus analitik Mei 2026" },
  { label: "Perlu Keputusan", value: String(insightRows.filter((i) => i.status === "Perlu Keputusan").length), share: "3 forum", delta: "+1", trend: "up", tone: "red", compare: "2 di antaranya agenda Rapat Direksi" },
  { label: "Eksposur Gabungan", prefix: "Rp ", value: totalInsightExposure.toString().replace(".", ","), suffix: "M", delta: "+38,4 M", trend: "up", tone: "red", compare: "dampak 12 bulan ke depan" },
  { label: "Urgensi Tinggi", value: String(insightRows.filter((i) => i.urgency === "Tinggi").length), delta: "+1", trend: "up", tone: "amber", compare: "tenggat sebelum akhir Q3" },
  { label: "Sedang Berjalan", value: String(insightRows.filter((i) => i.status === "Berjalan").length), share: "40%", delta: "+2", trend: "up", tone: "green", compare: "mitigasi sudah dieksekusi" },
  { label: "Keyakinan Rata-rata", value: "83", suffix: "%", delta: "+4 pp", trend: "up", tone: "green", compare: "kualitas data membaik" },
];

export const insightNotes: DetailNote[] = [
  {
    title: "Dua pertiga eksposur ada di tiga insight",
    detail: "Kapasitas RKAP, produktivitas Palm Oil, dan retensi posisi kritis menyumbang Rp 158,6 M dari total Rp 282,3 M.",
    tone: "red",
  },
  {
    title: "Empat insight menunggu forum",
    detail: "Tanpa keputusan sebelum akhir Q3, eksposur Rp 122,8 M berpindah ke tahun anggaran berikutnya.",
    tone: "amber",
  },
  {
    title: "Keyakinan analitik naik",
    detail: "Rata-rata 83% seiring skor kualitas data HRIS naik ke 91,2% — temuan berbasis data manual tinggal dua.",
    tone: "green",
  },
];

export const dinamikaDefinitions = [
  { term: "Turnover Rate", text: "Jumlah pekerja keluar 12 bulan terakhir dibagi rata-rata headcount periode yang sama." },
  { term: "Voluntary", text: "Pengunduran diri atas inisiatif pekerja, tidak termasuk pensiun dan kontrak berakhir." },
  { term: "Net Movement", text: "Selisih seluruh arus masuk (hire, mobility in, rehire) dan arus keluar sepanjang YTD." },
  { term: "Sumber", text: "HRIS konsolidasi 7 subholding, tarikan 01 Jun 2026 pukul 02.00 WIB." },
];
