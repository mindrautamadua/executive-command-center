/**
 * Data statis halaman Workforce Planning (/workforce-planning).
 * Horizon perencanaan: 2026 - 2028, data per 31 Mei 2026 (YTD).
 */

import { PALETTE } from "./chart-palette";

/* ── KPI Strip ────────────────────────────────────────────────────── */

export interface WpKpi {
  label: string;
  value: string;
  /** Satuan kecil di kanan nilai, mis. "Orang". */
  sub?: string;
  /** Kosong = tampilkan `compare` saja. */
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  /** Titik merah + teks merah pada baris compare (mis. posisi kritis). */
  alertDot?: boolean;
  icon: "users" | "projection" | "net" | "vacant" | "skillgap" | "ready" | "cost";
  tone: "blue" | "green" | "teal" | "red" | "purple" | "amber";
}

export const wpKpi: WpKpi[] = [
  {
    label: "Total Headcount Saat Ini",
    value: "70.142",
    sub: "Orang",
    delta: "3,2%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "users",
    tone: "blue",
  },
  {
    label: "Proyeksi Headcount 2028",
    value: "73.856",
    sub: "Orang",
    delta: "5,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "projection",
    tone: "green",
  },
  {
    label: "Kebutuhan Tambahan (Net)",
    value: "3.714",
    sub: "Orang",
    delta: "5,3%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "net",
    tone: "purple",
  },
  {
    label: "Critical Role Vacant",
    value: "286",
    sub: "Posisi",
    compare: "32 posisi kritis",
    alertDot: true,
    icon: "vacant",
    tone: "red",
  },
  {
    label: "Skill Gap",
    value: "1.245",
    sub: "Gap",
    delta: "-4,1%",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "skillgap",
    tone: "amber",
  },
  {
    label: "Rasio Talent Ready",
    value: "68%",
    delta: "-2,2 pts",
    trend: "down",
    deltaTone: "bad",
    compare: "vs Des 2025",
    icon: "ready",
    tone: "teal",
  },
  {
    label: "Estimated HC Cost 2028",
    value: "Rp 6,82 T",
    delta: "6,7%",
    trend: "up",
    deltaTone: "good",
    compare: "vs 2026",
    icon: "cost",
    tone: "blue",
  },
];

/* ── 1. Proyeksi Headcount 2026 - 2028 ────────────────────────────── */

export const headcountProjection = [
  { name: "2026 (F)", total: 70142, net: 0 },
  { name: "2027 (F)", total: 71892, net: 1750 },
  { name: "2028 (F)", total: 73856, net: 1964 },
];

export const projectionNote =
  "Pertumbuhan headcount terjaga seiring dengan rencana ekspansi dan peningkatan produksi.";

/* ── 2. Kebutuhan Talenta Berdasarkan Jenjang ─────────────────────── */

export interface PlanRow {
  name: string;
  y2026: number;
  y2027: number;
  y2028: number;
  tambahan: number;
}

export const kebutuhanJenjang: PlanRow[] = [
  { name: "Direktur & EVP", y2026: 56, y2027: 58, y2028: 60, tambahan: 4 },
  { name: "Senior Manager", y2026: 512, y2027: 548, y2028: 584, tambahan: 72 },
  { name: "Manager", y2026: 1842, y2027: 1958, y2028: 2095, tambahan: 253 },
  { name: "Assistant Manager", y2026: 3456, y2027: 3678, y2028: 3950, tambahan: 494 },
  { name: "Supervisor", y2026: 9842, y2027: 10355, y2028: 10942, tambahan: 1100 },
  { name: "Staff & Non Staff", y2026: 54434, y2027: 55295, y2028: 56225, tambahan: 1791 },
];

export const jenjangTotal: PlanRow = {
  name: "Total",
  y2026: 70142,
  y2027: 71892,
  y2028: 73856,
  tambahan: 3714,
};

export const jenjangNote =
  "Kebutuhan terbesar terdapat pada level Supervisor dan Staff Operasional.";

/* ── 3. Kebutuhan Talenta Berdasarkan Fungsi Utama ────────────────── */

export interface FungsiRow extends PlanRow {
  icon: "kebun" | "pabrik" | "engineering" | "supply" | "sales" | "keuangan" | "hc" | "lainnya";
}

export const kebutuhanFungsi: FungsiRow[] = [
  { name: "Operasional Kebun", icon: "kebun", y2026: 24812, y2027: 25601, y2028: 26472, tambahan: 1660 },
  { name: "Pabrik & Mill", icon: "pabrik", y2026: 9512, y2027: 9842, y2028: 10236, tambahan: 724 },
  { name: "Engineering & Maintenance", icon: "engineering", y2026: 6245, y2027: 6561, y2028: 6912, tambahan: 667 },
  { name: "Supply Chain & Logistic", icon: "supply", y2026: 5842, y2027: 6153, y2028: 6471, tambahan: 629 },
  { name: "Sales & Marketing", icon: "sales", y2026: 4215, y2027: 4458, y2028: 4701, tambahan: 486 },
  { name: "Keuangan", icon: "keuangan", y2026: 3842, y2027: 4021, y2028: 4188, tambahan: 346 },
  { name: "Human Capital", icon: "hc", y2026: 2145, y2027: 2256, y2028: 2371, tambahan: 226 },
  { name: "Lainnya", icon: "lainnya", y2026: 13527, y2027: 13000, y2028: 12505, tambahan: -1022 },
];

export const fungsiTotal: PlanRow = {
  name: "Total",
  y2026: 70142,
  y2027: 71892,
  y2028: 73856,
  tambahan: 3714,
};

/* ── 4. Gap Talenta Kritis (Top 10 Skill) ─────────────────────────── */

export interface SkillGapRow {
  skill: string;
  supply: number;
  demand: number;
  gap: number;
  gapPct: string;
}

export const skillGaps: SkillGapRow[] = [
  { skill: "Mill & Process Engineering", supply: 412, demand: 612, gap: -200, gapPct: "-32,7%" },
  { skill: "Data Analytics", supply: 248, demand: 428, gap: -180, gapPct: "-42,1%" },
  { skill: "Agronomy Expert", supply: 365, demand: 520, gap: -155, gapPct: "-29,8%" },
  { skill: "Maintenance Reliability", supply: 389, demand: 530, gap: -141, gapPct: "-26,6%" },
  { skill: "Digital Transformation", supply: 206, demand: 318, gap: -112, gapPct: "-35,2%" },
  { skill: "Supply Chain Planning", supply: 278, demand: 376, gap: -98, gapPct: "-26,1%" },
  { skill: "Sustainability Management", supply: 162, demand: 246, gap: -84, gapPct: "-34,1%" },
  { skill: "Leadership & People Mgmt", supply: 454, demand: 522, gap: -68, gapPct: "-13,0%" },
  { skill: "Cost Management", supply: 312, demand: 372, gap: -60, gapPct: "-16,1%" },
  { skill: "Risk Management", supply: 186, demand: 238, gap: -52, gapPct: "-21,8%" },
];

/* ── 5. Sumber Pemenuhan Kebutuhan Talenta (2026-2028) ────────────── */

export interface SumberRow {
  name: string;
  value: number;
  pct: string;
  orang: string;
  color: string;
}

export const sumberPemenuhan: SumberRow[] = [
  {
    name: "Talent Internal (Mobilitas & Promosi)",
    value: 1671,
    pct: "45%",
    orang: "1.671 orang",
    color: PALETTE.green,
  },
  {
    name: "Rekrutmen Eksternal",
    value: 928,
    pct: "25%",
    orang: "928 orang",
    color: PALETTE.greenSoft,
  },
  {
    name: "Reskilling & Upskilling",
    value: 743,
    pct: "20%",
    orang: "743 orang",
    color: PALETTE.amber,
  },
  {
    name: "Outsourcing / Contingent Worker",
    value: 372,
    pct: "10%",
    orang: "372 orang",
    color: PALETTE.purple,
  },
];

export const sumberNote =
  "Fokus pada pengembangan talenta internal dan reskilling untuk efisiensi biaya dan keberlanjutan.";

/* ── 6. Workforce Supply & Demand Balance ─────────────────────────── */

export const supplyDemand = [
  { name: "2026 (F)", supply: 70142, demand: 70986, gap: -844 },
  { name: "2027 (F)", supply: 71892, demand: 72964, gap: -1072 },
  { name: "2028 (F)", supply: 73856, demand: 75427, gap: -1571 },
];

/* ── 7. Scenario Planning Overview ────────────────────────────────── */

export interface Scenario {
  code: string;
  subtitle: string;
  headcount: string;
  cost: string;
  index: string;
  footer: string;
  footerTone: "neutral" | "amber";
  icon: "bau" | "growth" | "automation" | "reskill";
  tone: "blue" | "amber" | "green" | "teal";
}

export const scenarios: Scenario[] = [
  {
    code: "Skenario A",
    subtitle: "Business as Usual (BAU)",
    headcount: "73.856",
    cost: "Rp 6,82 T",
    index: "100",
    footer: "Baseline Plan",
    footerTone: "neutral",
    icon: "bau",
    tone: "blue",
  },
  {
    code: "Skenario B",
    subtitle: "High Growth (+10% Produksi)",
    headcount: "78.924",
    cost: "Rp 7,85 T",
    index: "104",
    footer: "Dampak: Biaya ↑ 15,1%",
    footerTone: "amber",
    icon: "growth",
    tone: "amber",
  },
  {
    code: "Skenario C",
    subtitle: "Efficiency & Automation",
    headcount: "70.215",
    cost: "Rp 5,96 T",
    index: "112",
    footer: "Dampak: Biaya ↓ 12,6%",
    footerTone: "amber",
    icon: "automation",
    tone: "green",
  },
  {
    code: "Skenario D",
    subtitle: "Reskill & Redeploy",
    headcount: "71.102",
    cost: "Rp 6,15 T",
    index: "108",
    footer: "Dampak: Biaya ↓ 9,8%",
    footerTone: "amber",
    icon: "reskill",
    tone: "teal",
  },
];

/* ── 8. Rekomendasi Strategis ─────────────────────────────────────── */

export interface WpRekomendasi {
  title: string;
  text: string;
  icon: "pipeline" | "reskilling" | "produktivitas" | "scenario";
  tone: "green" | "teal" | "blue" | "purple";
}

export const wpRekomendasi: WpRekomendasi[] = [
  {
    title: "Perkuat Talent Pipeline",
    text: "Percepat program pengembangan untuk 286 posisi kritis yang belum memiliki suksesor ready now.",
    icon: "pipeline",
    tone: "green",
  },
  {
    title: "Fokus pada Reskilling",
    text: "Tutup 1.245 skill gap melalui program reskilling & upskilling, terutama di area digital dan teknis.",
    icon: "reskilling",
    tone: "teal",
  },
  {
    title: "Optimalkan Produktivitas",
    text: "Tingkatkan produktivitas per employee minimal 5% per tahun untuk mengimbangi pertumbuhan biaya.",
    icon: "produktivitas",
    tone: "blue",
  },
  {
    title: "Gunakan Scenario Planning",
    text: "Gunakan skenario Efficiency & Automation sebagai alternatif untuk menjaga biaya tetap optimal.",
    icon: "scenario",
    tone: "purple",
  },
];

/* ── Footer quote ─────────────────────────────────────────────────── */

export const wpQuote =
  "Workforce Planning yang tepat memastikan organisasi memiliki talenta yang tepat, di waktu yang tepat, dengan biaya yang optimal untuk mencapai strategi perusahaan.";
