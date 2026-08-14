/**
 * Data statis halaman AI HR Assistant (/ai-hr-assistant).
 * Percakapan contoh memakai data periode Mei 2026 (YTD).
 */

import {
  BookA,
  BookOpen,
  BrainCircuit,
  FileSpreadsheet,
  FileText,
  HelpCircle,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  Star,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/* ── Banner sambutan & saran pertanyaan ──────────────────────────── */

export interface WelcomePrompt {
  icon: LucideIcon;
  text: string;
}

export const welcomePrompts: WelcomePrompt[] = [
  { icon: UsersRound, text: "Berapa headcount PTPN Group saat ini?" },
  { icon: TrendingUp, text: "Tampilkan tren turnover 12 bulan terakhir" },
  { icon: FileText, text: "Kebijakan WFH PTPN Group" },
  { icon: Star, text: "Siapa talent dengan potensi tinggi?" },
];

/* ── Percakapan contoh ────────────────────────────────────────────── */

export const userQuestion = {
  text: "Berapa total headcount PTPN Group per 31 Mei 2026?",
  time: "10:24",
};

export interface HeadcountSegment {
  label: string;
  value: string;
  pct: number;
  color: string;
}

export const headcountAnswer = {
  time: "10:24",
  intro: "Berikut adalah total headcount PTPN Group per 31 Mei 2026.",
  cardTitle: "Total Headcount PTPN Group",
  period: "Per 31 Mei 2026",
  total: "70.142",
  unit: "Orang",
  delta: "2,8% dibandingkan April 2026 (68.213 orang)",
  segments: [
    { label: "Pegawai Tetap", value: "42.561", pct: 60.7, color: "#1a9c5b" },
    { label: "Pegawai Kontrak", value: "19.823", pct: 28.3, color: "#2196f3" },
    { label: "Buruh Harian Lepas", value: "7.758", pct: 11.0, color: "#f6a723" },
  ] as HeadcountSegment[],
};

export const followUpPrompts = [
  "Tampilkan headcount per holding",
  "Tren headcount 5 tahun terakhir",
  "Komposisi headcount berdasarkan generasi",
  "Perbandingan headcount vs bulan lalu",
];

/* ── Ringkasan insight hari ini ───────────────────────────────────── */

export interface DailyInsight {
  title: string;
  desc: string;
  icon: LucideIcon;
  tone: "green" | "blue" | "amber";
}

export const dailyInsights: DailyInsight[] = [
  {
    title: "Workforce",
    desc: "Headcount meningkat 2,8% dibandingkan bulan lalu, terutama pada pegawai tetap.",
    icon: UsersRound,
    tone: "green",
  },
  {
    title: "Turnover Rate",
    desc: "Turnover rate YTD sebesar 3,2%, turun 0,4% dari periode yang sama tahun lalu.",
    icon: TrendingUp,
    tone: "blue",
  },
  {
    title: "Talent Pipeline",
    desc: "Terdapat 286 posisi kritis dengan pipeline siap dalam 3 bulan ke depan.",
    icon: Star,
    tone: "amber",
  },
];

/* ── Akses cepat ──────────────────────────────────────────────────── */

export interface QuickAccessItem {
  label: string;
  icon: LucideIcon;
  tone: "green" | "blue" | "teal" | "purple" | "amber" | "sky";
}

export const quickAccessItems: QuickAccessItem[] = [
  { label: "Kebijakan & Peraturan", icon: ShieldCheck, tone: "green" },
  { label: "Panduan HR", icon: BookOpen, tone: "blue" },
  { label: "Formulir & Template", icon: FileSpreadsheet, tone: "teal" },
  { label: "Struktur Organisasi", icon: Network, tone: "purple" },
  { label: "FAQ", icon: HelpCircle, tone: "amber" },
  { label: "Glossary", icon: BookA, tone: "sky" },
];

/* ── Riwayat percakapan ───────────────────────────────────────────── */

export interface ChatHistoryItem {
  title: string;
  desc: string;
  when: string;
}

export const chatHistory: ChatHistoryItem[] = [
  {
    title: "Headcount PTPN Group",
    desc: "Berapa total headcount PTPN Group per 31 Mei 2026?",
    when: "10:24",
  },
  {
    title: "Kebijakan WFH",
    desc: "Apa kebijakan Work From Home di PTPN Group?",
    when: "Kemarin",
  },
  {
    title: "Tren Turnover",
    desc: "Tampilkan tren turnover 12 bulan terakhir",
    when: "30 Mei",
  },
  {
    title: "Talent Potensial",
    desc: "Siapa talent dengan potensi tinggi di Divisi Operasional?",
    when: "29 Mei",
  },
];

/* ── Strip fitur & catatan ────────────────────────────────────────── */

export interface AihrFeature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const aihrFeatures: AihrFeature[] = [
  {
    title: "Gunakan bahasa alami",
    desc: "Tanyakan apa saja seperti berbicara dengan rekan kerja Anda.",
    icon: MessageSquareText,
  },
  {
    title: "Data akurat & terpercaya",
    desc: "Dilengkapi data terkini dari sistem resmi PTPN Group.",
    icon: ShieldCheck,
  },
  {
    title: "Insight & rekomendasi",
    desc: "Dapatkan insight mendalam dan rekomendasi terbaik untuk keputusan.",
    icon: BrainCircuit,
  },
  {
    title: "Privasi terjamin",
    desc: "Data Anda aman dan hanya digunakan untuk kebutuhan bisnis.",
    icon: LockKeyhole,
  },
];

export const aihrDisclaimer = "AI dapat membuat kesalahan. Selalu verifikasi informasi penting.";
