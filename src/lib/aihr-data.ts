/**
 * Data statis halaman AI HR Assistant (/ai-hr-assistant).
 * Percakapan contoh memakai data periode Mei 2026 (YTD).
 */

import {
  AlertOctagon,
  BookA,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  Eye,
  FileSpreadsheet,
  FileText,
  HelpCircle,
  LockKeyhole,
  MessageSquareText,
  Network,
  Radar,
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
  { icon: Star, text: "Buatkan Executive Brief untuk Direksi" },
];

/* ── Mode penalaran AI ────────────────────────────────────────────── */

export const reasoningModes = [
  "Ask",
  "Analyze",
  "Diagnose",
  "Predict",
  "Simulate",
  "Recommend",
  "Brief",
] as const;

export type ReasoningMode = (typeof reasoningModes)[number];

/** Mode aktif pada percakapan contoh (pertanyaan diagnosis turnover). */
export const activeReasoningMode: ReasoningMode = "Diagnose";

/* ── Percakapan contoh 1 — factual retrieval (Ask) ────────────────── */

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

/** Evidence card — grounding jawaban factual. */
export const headcountEvidence = {
  source: "SAP HCM → HC Data Hub",
  asOf: "31 Mei 2026",
  refreshed: "1 Jun 2026 05:30 WIB",
  quality: "96,4%",
  confidence: "98%",
  formula: "42.561 + 19.823 + 7.758 = 70.142",
};

/* ── Percakapan contoh 2 — root-cause (Diagnose, lintas modul) ────── */

export const turnoverQuestion = {
  text: "Mengapa turnover di Regional 3 tinggi?",
  time: "10:26",
};

export type ReasoningBlockKind = "FACT" | "INSIGHT" | "HYPOTHESIS" | "RECOMMENDATION";

export interface ReasoningBlock {
  kind: ReasoningBlockKind;
  text: string;
}

export const turnoverAnswer = {
  time: "10:27",
  mode: "Diagnose" as ReasoningMode,
  intro:
    "Saya menganalisis 5 modul ECC untuk mendiagnosis turnover Regional 3. Berikut hasil penalarannya.",
  blocks: [
    {
      kind: "FACT",
      text: "Turnover Regional 3 sebesar 6,2% YTD — 3,0 pts di atas rata-rata grup (3,2%).",
    },
    {
      kind: "INSIGHT",
      text: "Attrisi terkonsentrasi pada pegawai kontrak bermasa kerja < 3 tahun. Overtime Regional 3 12,4% — tertinggi di seluruh grup.",
    },
    {
      kind: "HYPOTHESIS",
      text: "Tekanan kapasitas workforce adalah driver paling mungkin. Sinyal berkorelasi: vacancy +2,1%, absensi +1,4%, engagement 74 vs 82 rata-rata grup.",
    },
    {
      kind: "RECOMMENDATION",
      text: "Review desain dan alokasi workforce Regional 3, lalu validasi hipotesis dengan jadwal produksi dan data staffing. Keputusan akhir tetap pada manajemen.",
    },
  ] as ReasoningBlock[],
  drivers: [
    "Tekanan beban kerja / kapasitas",
    "Kesempatan karier",
    "Daya saing kompensasi",
    "Efektivitas manajer",
  ],
  confidence: "81%",
  modulesConsulted: [
    "Attendance",
    "Engagement",
    "Compensation",
    "Industrial Relations",
    "Workforce Planning",
  ],
  searchMeta: "5 modul · 3 tabel data · riwayat 12 bulan",
};

export const followUpPrompts = [
  "Simulasikan dampak realokasi 120 pekerja",
  "Bandingkan engagement vs turnover per PTPN",
  "Tren turnover Regional 3 selama 24 bulan",
  "Brief me: risiko HC terbesar minggu ini",
];

/* ── HC Intelligence Feed ─────────────────────────────────────────── */

export type FeedTier = "Critical" | "Watch" | "Emerging" | "Positive";

export interface FeedItem {
  tier: FeedTier;
  text: string;
  icon: LucideIcon;
}

export const intelligenceFeed: FeedItem[] = [
  {
    tier: "Critical",
    text: "2 lokasi Industrial Relations naik ke status eskalasi (kasus upah & lembur).",
    icon: AlertOctagon,
  },
  {
    tier: "Watch",
    text: "Absensi Regional 3 memburuk 3 minggu berturut-turut (+1,4 pts).",
    icon: Eye,
  },
  {
    tier: "Emerging",
    text: "Perempuan di level manajemen 22,4% — di bawah trajektori target 25%.",
    icon: Radar,
  },
  {
    tier: "Positive",
    text: "Engagement grup +4,6 pts; kasus IR turun 12 kasus dibanding kuartal lalu.",
    icon: CheckCircle2,
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

/* ── Riwayat percakapan + Decision Memory ─────────────────────────── */

export type HistoryStatusTone = "green" | "amber" | "blue";

export interface ChatHistoryItem {
  title: string;
  desc: string;
  when: string;
  status?: { label: string; tone: HistoryStatusTone };
}

export const chatHistory: ChatHistoryItem[] = [
  {
    title: "Turnover Regional 3",
    desc: "AI merekomendasikan review workforce Regional 3.",
    when: "10:27",
    status: { label: "Tindakan berjalan", tone: "amber" },
  },
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
    title: "Talent Potensial",
    desc: "Siapa talent dengan potensi tinggi di Divisi Operasional?",
    when: "29 Mei",
    status: { label: "Perlu validasi HC", tone: "blue" },
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
    title: "Jawaban ber-evidence",
    desc: "Setiap jawaban menyertakan sumber, tanggal data, formula, dan tingkat confidence.",
    icon: ShieldCheck,
  },
  {
    title: "Penalaran lintas modul",
    desc: "Diagnosis dan rekomendasi menggabungkan sinyal dari 20+ modul ECC.",
    icon: BrainCircuit,
  },
  {
    title: "Enterprise Data Protection",
    desc: "Role-based access, masking atribut sensitif, audit log — tanpa training model eksternal.",
    icon: LockKeyhole,
  },
];

export const aihrDisclaimer =
  "AI dapat membuat kesalahan. Selalu verifikasi informasi penting. Keputusan SDM berdampak tinggi memerlukan persetujuan manusia.";
