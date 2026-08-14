/**
 * Data statis halaman Data Dictionary (/data-dictionary).
 * Katalog definisi metrik HC yang dipakai seluruh modul dashboard.
 */

/* ── Ringkasan katalog ────────────────────────────────────────────── */

export interface DdStat {
  label: string;
  value: string;
  sub: string;
  icon: "terms" | "category" | "source" | "updated";
  tone: "green" | "blue" | "teal" | "amber";
}

export const ddStats: DdStat[] = [
  {
    label: "Total Istilah & Metrik",
    value: "128",
    sub: "Terdokumentasi dan tervalidasi",
    icon: "terms",
    tone: "green",
  },
  {
    label: "Kategori",
    value: "8",
    sub: "Domain metrik HC",
    icon: "category",
    tone: "blue",
  },
  {
    label: "Sumber Sistem",
    value: "6",
    sub: "SAP HCM, SuccessFactors, e-Absensi, dll",
    icon: "source",
    tone: "teal",
  },
  {
    label: "Pembaruan Terakhir",
    value: "31 Mei 2026",
    sub: "Review triwulanan oleh Data Governance",
    icon: "updated",
    tone: "amber",
  },
];

/* ── Kategori ─────────────────────────────────────────────────────── */

export interface DdCategory {
  name: string;
  count: number;
  color: string;
}

export const ddCategories: DdCategory[] = [
  { name: "Demografi & Headcount", count: 24, color: "#1a9c5b" },
  { name: "Produktivitas", count: 19, color: "#3b7ded" },
  { name: "Biaya SDM", count: 16, color: "#f5a524" },
  { name: "Talenta & Suksesi", count: 18, color: "#8b5cf6" },
  { name: "Risiko & Kepatuhan", count: 15, color: "#ef4444" },
  { name: "Rekrutmen", count: 13, color: "#0d9488" },
  { name: "Pembelajaran", count: 12, color: "#ec4899" },
  { name: "Hubungan Industrial", count: 11, color: "#94a3b8" },
];

/* ── Entri kamus (contoh 12 teratas) ──────────────────────────────── */

export interface DdEntry {
  term: string;
  category: string;
  definition: string;
  formula: string;
  source: string;
  frequency: "Harian" | "Bulanan" | "Triwulanan";
}

export const ddEntries: DdEntry[] = [
  {
    term: "Headcount",
    category: "Demografi & Headcount",
    definition: "Jumlah karyawan aktif pada tanggal cut-off, semua status kepegawaian",
    formula: "Σ karyawan aktif per tanggal cut-off",
    source: "SAP HCM",
    frequency: "Harian",
  },
  {
    term: "FTE (Full-Time Equivalent)",
    category: "Demografi & Headcount",
    definition: "Headcount setara penuh waktu; paruh waktu dikonversi proporsional",
    formula: "Σ (jam kerja karyawan / jam kerja standar)",
    source: "SAP HCM",
    frequency: "Bulanan",
  },
  {
    term: "Turnover Rate",
    category: "Demografi & Headcount",
    definition: "Laju karyawan keluar (semua sebab) terhadap rata-rata headcount",
    formula: "(Σ keluar YTD / rata-rata headcount) × 100%",
    source: "SAP HCM",
    frequency: "Bulanan",
  },
  {
    term: "Voluntary Attrition",
    category: "Demografi & Headcount",
    definition: "Turnover atas inisiatif karyawan (resign), di luar pensiun dan PHK",
    formula: "(Σ resign YTD / rata-rata headcount) × 100%",
    source: "SAP HCM",
    frequency: "Bulanan",
  },
  {
    term: "HC Cost to Revenue",
    category: "Biaya SDM",
    definition: "Porsi total biaya SDM terhadap pendapatan perusahaan",
    formula: "(Total biaya SDM / pendapatan) × 100%",
    source: "SAP FI-CO",
    frequency: "Bulanan",
  },
  {
    term: "Human Productivity Index (HPI)",
    category: "Produktivitas",
    definition: "Indeks komposit output per karyawan relatif terhadap baseline dan target",
    formula: "Rata-rata tertimbang (revenue/FTE, output/FTE, kualitas)",
    source: "Data Warehouse HC",
    frequency: "Bulanan",
  },
  {
    term: "Span of Control",
    category: "Produktivitas",
    definition: "Rata-rata jumlah bawahan langsung per atasan",
    formula: "Σ karyawan / Σ posisi atasan aktif",
    source: "SAP OM",
    frequency: "Bulanan",
  },
  {
    term: "Bench Strength",
    category: "Talenta & Suksesi",
    definition: "Ketersediaan suksesor siap (Ready Now / 1-2 thn) untuk posisi kritis",
    formula: "(Posisi kritis dengan suksesor siap / total posisi kritis) × 100%",
    source: "SuccessFactors",
    frequency: "Triwulanan",
  },
  {
    term: "Time to Fill",
    category: "Rekrutmen",
    definition: "Rata-rata hari dari permintaan rekrutmen disetujui hingga kandidat diterima",
    formula: "Σ hari pengisian / Σ posisi terisi",
    source: "SuccessFactors RCM",
    frequency: "Bulanan",
  },
  {
    term: "Engagement Score",
    category: "Talenta & Suksesi",
    definition: "Skor survei keterikatan karyawan skala 0-100",
    formula: "Rata-rata tertimbang dimensi survei tahunan/pulse",
    source: "Survei Engagement",
    frequency: "Triwulanan",
  },
  {
    term: "Compliance Score",
    category: "Risiko & Kepatuhan",
    definition: "Indeks komposit kepatuhan regulasi ketenagakerjaan 0-100",
    formula: "Rata-rata tertimbang 8 area kepatuhan",
    source: "GRC System",
    frequency: "Bulanan",
  },
  {
    term: "Indeks Hubungan Industrial",
    category: "Hubungan Industrial",
    definition: "Indeks komposit iklim hubungan industrial 0-100",
    formula: "Komposit (kasus, aksi, PKB, aktivitas bipartit)",
    source: "Modul HI",
    frequency: "Bulanan",
  },
];

export const ddFootnote =
  "Data Dictionary menjadi acuan tunggal definisi metrik HC di seluruh dashboard sehingga setiap angka dibaca dengan pemahaman yang sama. Perubahan definisi dikelola Data Governance Committee melalui review triwulanan.";
