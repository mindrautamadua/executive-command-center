/**
 * Data statis dimensi Teknologi Informasi — lanjutan tik-data.ts.
 * Halaman: Portofolio Aplikasi & Infrastruktur, Belanja & Nilai TI, serta
 * Data & AI Governance. Periode acuan: 31 Mei 2026 (YTD).
 *
 * Angka kanonik dari src/lib/group-baseline.ts (TIK, PRODUKSI, KEUANGAN).
 * Guard konsistensi: total belanja TI Rp 0,92 T (capex 0,50 + opex 0,42),
 * 68 aplikasi inti (12 legacy), 528 kebun & 67 pabrik, konektivitas memadai
 * 82%, ketersediaan 99,2%, kepatuhan PDP 76%.
 */

import { PALETTE } from "./chart-palette";
import { KEUANGAN, PRODUKSI, TIK } from "./group-baseline";
import type { TikCrossLink, TikInsight, TikPageKpi, TikRagStatus } from "./tik-data";

/* ══════════════════════════════════════════════════════════════════════
   #region 4. PORTOFOLIO APLIKASI & INFRASTRUKTUR
   /teknologi-informasi/portofolio-aplikasi
   ══════════════════════════════════════════════════════════════════════ */

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const portofolioKpi: TikPageKpi[] = [
  {
    label: "Aplikasi Inti",
    value: "68",
    sub: "Terdaftar di CMDB · 6 domain bisnis",
    delta: "-4",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Aplikasi Legacy",
    value: "12",
    sub: "Status Eliminate · umur >8 tahun",
    subDanger: true,
    delta: "-3",
    trend: "down",
    deltaTone: "good",
    tone: "red",
  },
  {
    label: "Ketersediaan Layanan",
    value: "99,2%",
    sub: "8 layanan kritikal · target 99,5%",
    subDanger: true,
    delta: "-0,1 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "green",
  },
  {
    label: "Konektivitas Memadai",
    value: "82%",
    sub: "528 kebun & 67 pabrik · 7 regional",
    subDanger: true,
    delta: "+5 pts",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Skor Utang Teknis",
    value: "3,4",
    valueSuffix: "/5",
    sub: "Makin tinggi makin berat · target ≤2,5",
    subDanger: true,
    delta: "-0,2",
    trend: "down",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Tiket Layanan",
    value: "4.180",
    valueSuffix: "/bln",
    sub: "Rata-rata YTD · SLA on-time 88,4%",
    delta: "-6,2%",
    trend: "down",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 4b. Portofolio Aplikasi (TIME Framework) ─────────────────────── */

export type TimeStatus = "Tolerate" | "Invest" | "Migrate" | "Eliminate";

export const TIME_COLOR: Record<TimeStatus, string> = {
  Tolerate: PALETTE.slate,
  Invest: PALETTE.green,
  Migrate: PALETTE.blue,
  Eliminate: PALETTE.red,
};

export interface ApplicationRow {
  aplikasi: string;
  domain: string;
  kritikalitas: "Kritikal" | "Tinggi" | "Sedang" | "Rendah";
  /** Umur aplikasi (tahun). */
  umurTahun: number;
  /** Jumlah pengguna aktif. */
  pengguna: number;
  status: TimeStatus;
  catatan: string;
}

/** 14 aplikasi terpilih dari 68 aplikasi inti (TIK.aplikasiInti). */
export const applicationPortfolio: ApplicationRow[] = [
  { aplikasi: "SAP S/4HANA", domain: "Keuangan & Operasi", kritikalitas: "Kritikal", umurTahun: 2, pengguna: 12_400, status: "Invest", catatan: "Tulang punggung grup; 14 dari 21 modul live." },
  { aplikasi: "Sistem Penjualan & Lelang CPO", domain: "Pemasaran", kritikalitas: "Kritikal", umurTahun: 4, pengguna: 620, status: "Invest", catatan: "Terhubung ke KPBN; uptime 99,6%." },
  { aplikasi: "e-Procurement PTPN", domain: "Pengadaan", kritikalitas: "Kritikal", umurTahun: 5, pengguna: 3_240, status: "Invest", catatan: "Cakupan e-Proc 84% belanja pengadaan." },
  { aplikasi: "HCM & Payroll Terpadu", domain: "SDM", kritikalitas: "Kritikal", umurTahun: 3, pengguna: 9_860, status: "Invest", catatan: "Rollout HCM Wave 5 menunggu data operasional." },
  { aplikasi: "SCADA & Kontrol Pabrik", domain: "Produksi", kritikalitas: "Kritikal", umurTahun: 9, pengguna: 1_180, status: "Migrate", catatan: "Jaringan OT belum tersegmentasi penuh; DRP belum diuji." },
  { aplikasi: "Sistem Timbang Jembatan (WBS)", domain: "Produksi", kritikalitas: "Tinggi", umurTahun: 7, pengguna: 1_540, status: "Migrate", catatan: "Integrasi ke ERP masih batch harian, bukan real-time." },
  { aplikasi: "Aplikasi Mandor Mobile", domain: "Produksi", kritikalitas: "Tinggi", umurTahun: 1, pengguna: 6_820, status: "Invest", catatan: "Mode offline-first untuk kebun berkonektivitas rendah." },
  { aplikasi: "GIS & Pemetaan Kebun", domain: "Aset & Lahan", kritikalitas: "Tinggi", umurTahun: 6, pengguna: 480, status: "Invest", catatan: "Sumber polygon geolokasi untuk kepatuhan EUDR." },
  { aplikasi: "Sistem Manajemen Aset (EAM)", domain: "Aset & Lahan", kritikalitas: "Tinggi", umurTahun: 8, pengguna: 1_260, status: "Migrate", catatan: "Rencana konsolidasi ke modul PM SAP pada 2027." },
  { aplikasi: "Data Platform & BI Eksekutif", domain: "Lintas Domain", kritikalitas: "Tinggi", umurTahun: 1, pengguna: 940, status: "Invest", catatan: "Fondasi single source of truth; go-live Q1 2027." },
  { aplikasi: "Sistem Akuntansi Legacy PTPN I", domain: "Keuangan & Operasi", kritikalitas: "Sedang", umurTahun: 12, pengguna: 340, status: "Eliminate", catatan: "Vendor support berakhir; dekomisioning target Q2 2027." },
  { aplikasi: "Aplikasi Produksi Karet & Teh", domain: "Produksi", kritikalitas: "Sedang", umurTahun: 11, pengguna: 610, status: "Eliminate", catatan: "Belum terintegrasi ERP; penyumbang tiket insiden terbesar." },
  { aplikasi: "Sistem Persediaan Gudang Unit", domain: "Pengadaan", kritikalitas: "Sedang", umurTahun: 10, pengguna: 780, status: "Eliminate", catatan: "Tumpang tindih dengan modul MM; hemat lisensi Rp 6 M/thn." },
  { aplikasi: "Portal Intranet & Kolaborasi", domain: "Lintas Domain", kritikalitas: "Rendah", umurTahun: 6, pengguna: 18_400, status: "Tolerate", catatan: "Berjalan stabil; tidak ada investasi baru direncanakan." },
];

/** Distribusi TIME seluruh 68 aplikasi inti; Eliminate = 12 aplikasi legacy. */
export interface TimeDistributionRow {
  status: TimeStatus;
  jumlah: number;
  pct: number;
  color: string;
}

export const timeDistribution: TimeDistributionRow[] = [
  { status: "Invest", jumlah: 24, pct: 35.3, color: PALETTE.green },
  { status: "Tolerate", jumlah: 22, pct: 32.4, color: PALETTE.slate },
  { status: "Eliminate", jumlah: 12, pct: 17.6, color: PALETTE.red },
  { status: "Migrate", jumlah: 10, pct: 14.7, color: PALETTE.blue },
];

/* ── 4c. Kuadran Siklus Hidup Aplikasi (scatter) ──────────────────── */

export interface AppQuadrantPoint {
  aplikasi: string;
  /** Nilai bisnis 0-100 (sumbu X). */
  nilaiBisnis: number;
  /** Kondisi teknis 0-100 (sumbu Y); makin tinggi makin sehat. */
  kondisiTeknis: number;
  /** Ukuran gelembung = jumlah pengguna aktif. */
  pengguna: number;
  status: TimeStatus;
}

export const appLifecycleQuadrant: AppQuadrantPoint[] = [
  { aplikasi: "SAP S/4HANA", nilaiBisnis: 96, kondisiTeknis: 84, pengguna: 12_400, status: "Invest" },
  { aplikasi: "Sistem Penjualan & Lelang", nilaiBisnis: 92, kondisiTeknis: 78, pengguna: 620, status: "Invest" },
  { aplikasi: "e-Procurement PTPN", nilaiBisnis: 84, kondisiTeknis: 74, pengguna: 3_240, status: "Invest" },
  { aplikasi: "HCM & Payroll", nilaiBisnis: 82, kondisiTeknis: 76, pengguna: 9_860, status: "Invest" },
  { aplikasi: "Aplikasi Mandor Mobile", nilaiBisnis: 78, kondisiTeknis: 88, pengguna: 6_820, status: "Invest" },
  { aplikasi: "GIS & Pemetaan Kebun", nilaiBisnis: 74, kondisiTeknis: 71, pengguna: 480, status: "Invest" },
  { aplikasi: "Data Platform & BI", nilaiBisnis: 88, kondisiTeknis: 82, pengguna: 940, status: "Invest" },
  { aplikasi: "SCADA & Kontrol Pabrik", nilaiBisnis: 90, kondisiTeknis: 42, pengguna: 1_180, status: "Migrate" },
  { aplikasi: "Sistem Timbang Jembatan", nilaiBisnis: 76, kondisiTeknis: 46, pengguna: 1_540, status: "Migrate" },
  { aplikasi: "Sistem Manajemen Aset", nilaiBisnis: 68, kondisiTeknis: 44, pengguna: 1_260, status: "Migrate" },
  { aplikasi: "Portal Intranet", nilaiBisnis: 34, kondisiTeknis: 72, pengguna: 18_400, status: "Tolerate" },
  { aplikasi: "Akuntansi Legacy PTPN I", nilaiBisnis: 28, kondisiTeknis: 22, pengguna: 340, status: "Eliminate" },
  { aplikasi: "Produksi Karet & Teh", nilaiBisnis: 32, kondisiTeknis: 26, pengguna: 610, status: "Eliminate" },
  { aplikasi: "Persediaan Gudang Unit", nilaiBisnis: 26, kondisiTeknis: 31, pengguna: 780, status: "Eliminate" },
];

/* ── 4d. Jejak Infrastruktur ──────────────────────────────────────── */

export interface InfrastructureRow {
  lokasi: string;
  tipe: "Data Center" | "Cloud" | "Edge";
  kapasitas: string;
  /** Utilisasi kapasitas (%). */
  utilisasiPct: number;
  /** Porsi beban kerja grup yang ditopang (%); jumlah = 100. */
  bebanKerjaPct: number;
  status: "Sehat" | "Perlu Perhatian" | "Kritis";
  catatan: string;
}

export const infrastructureFootprint: InfrastructureRow[] = [
  {
    lokasi: "Data Center Utama — Jakarta",
    tipe: "Data Center",
    kapasitas: "180 rak · 42 TB storage",
    utilisasiPct: 82,
    bebanKerjaPct: 38,
    status: "Perlu Perhatian",
    catatan: "Utilisasi mendekati ambang 85%; ekspansi bergantung migrasi cloud.",
  },
  {
    lokasi: "Data Center DR — Surabaya",
    tipe: "Data Center",
    kapasitas: "90 rak · 24 TB storage",
    utilisasiPct: 58,
    bebanKerjaPct: 12,
    status: "Sehat",
    catatan: "Aktif-pasif; replikasi ERP masih asinkron (RTO aktual 6,5 jam).",
  },
  {
    lokasi: "Cloud Publik (IaaS/PaaS)",
    tipe: "Cloud",
    kapasitas: "620 vCPU · 8,4 TB",
    utilisasiPct: 71,
    bebanKerjaPct: 26,
    status: "Sehat",
    catatan: "Menampung data platform, portal publik, dan lingkungan uji.",
  },
  {
    lokasi: "Cloud SaaS (kolaborasi & HR)",
    tipe: "Cloud",
    kapasitas: "24.600 lisensi pengguna",
    utilisasiPct: 76,
    bebanKerjaPct: 9,
    status: "Perlu Perhatian",
    catatan: "24% lisensi tidak aktif 90 hari — sasaran optimasi lisensi.",
  },
  {
    lokasi: "Edge Pabrik (67 pabrik)",
    tipe: "Edge",
    kapasitas: "67 node · SCADA & timbang",
    utilisasiPct: 64,
    bebanKerjaPct: 10,
    status: "Perlu Perhatian",
    catatan: "Segmentasi jaringan OT baru selesai di 41 dari 67 pabrik.",
  },
  {
    lokasi: "Edge Kebun (528 kebun)",
    tipe: "Edge",
    kapasitas: "434 titik terkoneksi memadai",
    utilisasiPct: 52,
    bebanKerjaPct: 5,
    status: "Kritis",
    catatan: "94 kebun belum berkonektivitas memadai; penghambat rollout Wave 3.",
  },
];

/* ── 4e. Konektivitas per Regional ────────────────────────────────── */

export interface ConnectivityRow {
  regional: string;
  wilayah: string;
  /** Jumlah kebun; total 7 regional = 528 (PRODUKSI.kebun). */
  kebun: number;
  /** Jumlah pabrik; total 7 regional = 67 (PRODUKSI.pabrikTotal). */
  pabrik: number;
  /** Lokasi berkonektivitas memadai (%); tertimbang kebun = 82%. */
  konektivitasPct: number;
  tulangPunggung: string;
  status: "Memadai" | "Terbatas" | "Kritis";
}

export const connectivityByRegion: ConnectivityRow[] = [
  { regional: "Regional 1", wilayah: "Sumatera Utara", kebun: 72, pabrik: 8, konektivitasPct: 91, tulangPunggung: "Fiber + radio link", status: "Memadai" },
  { regional: "Regional 2", wilayah: "Sumut & Aceh", kebun: 68, pabrik: 7, konektivitasPct: 88, tulangPunggung: "Fiber + radio link", status: "Memadai" },
  { regional: "Regional 3", wilayah: "Riau & Sumbar", kebun: 84, pabrik: 10, konektivitasPct: 84, tulangPunggung: "Fiber + VSAT", status: "Memadai" },
  { regional: "Regional 4", wilayah: "Sumsel & Jambi", kebun: 79, pabrik: 9, konektivitasPct: 82, tulangPunggung: "Fiber + VSAT", status: "Terbatas" },
  { regional: "Regional 5", wilayah: "Kalimantan", kebun: 96, pabrik: 9, konektivitasPct: 72, tulangPunggung: "VSAT dominan", status: "Terbatas" },
  { regional: "Regional 6", wilayah: "Jawa", kebun: 74, pabrik: 20, konektivitasPct: 93, tulangPunggung: "Fiber", status: "Memadai" },
  { regional: "Regional 7", wilayah: "Sulawesi & Indonesia Timur", kebun: 55, pabrik: 4, konektivitasPct: 62, tulangPunggung: "VSAT & seluler", status: "Kritis" },
];

/* ── 4f. Uptime Layanan Kritikal ──────────────────────────────────── */

export interface ServiceUptimeRow {
  layanan: string;
  /** Uptime YTD (%); blended 8 layanan = 99,2%. */
  uptimePct: number;
  targetPct: number;
  /** Downtime kumulatif YTD (menit). */
  downtimeMenit: number;
  insidenP1: number;
  status: "Memenuhi SLA" | "Di Bawah SLA";
}

export const uptimeByService: ServiceUptimeRow[] = [
  { layanan: "SAP S/4HANA", uptimePct: 99.3, targetPct: 99.5, downtimeMenit: 152, insidenP1: 1, status: "Di Bawah SLA" },
  { layanan: "Sistem Penjualan & Lelang", uptimePct: 99.6, targetPct: 99.5, downtimeMenit: 87, insidenP1: 0, status: "Memenuhi SLA" },
  { layanan: "e-Procurement", uptimePct: 99.4, targetPct: 99.5, downtimeMenit: 130, insidenP1: 0, status: "Di Bawah SLA" },
  { layanan: "HCM & Payroll", uptimePct: 99.5, targetPct: 99.5, downtimeMenit: 109, insidenP1: 0, status: "Memenuhi SLA" },
  { layanan: "SCADA & Kontrol Pabrik", uptimePct: 98.6, targetPct: 99.5, downtimeMenit: 304, insidenP1: 1, status: "Di Bawah SLA" },
  { layanan: "Sistem Timbang Jembatan", uptimePct: 98.9, targetPct: 99.5, downtimeMenit: 239, insidenP1: 0, status: "Di Bawah SLA" },
  { layanan: "Jaringan WAN Kebun & Pabrik", uptimePct: 98.8, targetPct: 99.0, downtimeMenit: 261, insidenP1: 0, status: "Di Bawah SLA" },
  { layanan: "Email & Kolaborasi", uptimePct: 99.7, targetPct: 99.5, downtimeMenit: 65, insidenP1: 0, status: "Memenuhi SLA" },
];

/* ── 4g. Service Desk ─────────────────────────────────────────────── */

export interface ServiceDeskCategoryRow {
  kategori: string;
  /** Tiket per bulan; total 6 kategori = 4.180. */
  tiketPerBulan: number;
  pct: number;
  /** Kepatuhan SLA penyelesaian (%). */
  slaPct: number;
  rataPenyelesaianJam: number;
  color: string;
}

export const serviceDesk: ServiceDeskCategoryRow[] = [
  { kategori: "Akses & Kata Sandi", tiketPerBulan: 1_180, pct: 28.2, slaPct: 96.2, rataPenyelesaianJam: 1.4, color: PALETTE.blue },
  { kategori: "Aplikasi ERP", tiketPerBulan: 940, pct: 22.5, slaPct: 84.6, rataPenyelesaianJam: 9.8, color: PALETTE.green },
  { kategori: "Jaringan & Konektivitas", tiketPerBulan: 760, pct: 18.2, slaPct: 78.4, rataPenyelesaianJam: 14.2, color: PALETTE.amber },
  { kategori: "Perangkat & Endpoint", tiketPerBulan: 620, pct: 14.8, slaPct: 91.0, rataPenyelesaianJam: 6.4, color: PALETTE.teal },
  { kategori: "Email & Kolaborasi", tiketPerBulan: 380, pct: 9.1, slaPct: 94.8, rataPenyelesaianJam: 2.6, color: PALETTE.purple },
  { kategori: "Lainnya", tiketPerBulan: 300, pct: 7.2, slaPct: 89.2, rataPenyelesaianJam: 5.1, color: PALETTE.slate },
];

export interface ServiceDeskSummary {
  tiketPerBulan: number;
  slaOnTimePct: number;
  firstCallResolutionPct: number;
  csatSkor: number;
  agen: number;
}

export const serviceDeskSummary: ServiceDeskSummary = {
  tiketPerBulan: 4_180,
  slaOnTimePct: 88.4,
  firstCallResolutionPct: 62.8,
  csatSkor: 4.1,
  agen: 48,
};

/* ── 4h. Utang Teknis per Kategori ────────────────────────────────── */

export interface TechnicalDebtRow {
  kategori: string;
  /** Skor beban 1-5; rata-rata 6 kategori = 3,4. */
  skor: number;
  target: number;
  /** Estimasi biaya remediasi (Rp M). */
  remediasiRpM: number;
  dampak: string;
}

export const technicalDebt: TechnicalDebtRow[] = [
  { kategori: "Aplikasi Legacy", skor: 4.2, target: 2.0, remediasiRpM: 74, dampak: "12 aplikasi tanpa vendor support; 34% tiket insiden aplikasi." },
  { kategori: "Integrasi Titik-ke-Titik", skor: 3.8, target: 2.5, remediasiRpM: 46, dampak: "128 interface langsung tanpa middleware; perubahan berbiaya tinggi." },
  { kategori: "Kualitas & Duplikasi Data", skor: 3.4, target: 2.5, remediasiRpM: 38, dampak: "Master data kebun & vendor ganda menghambat rollout Wave 3." },
  { kategori: "Infrastruktur Usang", skor: 3.1, target: 2.5, remediasiRpM: 52, dampak: "22% server di luar masa dukungan; utilisasi DC utama 82%." },
  { kategori: "Keamanan & Patch Tertunda", skor: 3.6, target: 2.0, remediasiRpM: 65, dampak: "412 kerentanan kritis/tinggi >90 hari; patch SLA 78%." },
  { kategori: "Dokumentasi & Pengetahuan", skor: 2.3, target: 2.0, remediasiRpM: 12, dampak: "Ketergantungan pada 2 vendor implementor untuk modul inti." },
];

/* ── 4i. Insight & Rekomendasi ────────────────────────────────────── */

export const portofolioInsights: TikInsight[] = [
  {
    insight:
      "Tiga aplikasi berstatus Migrate (SCADA, timbang jembatan, EAM) bernilai bisnis tinggi tetapi kondisi teknis di bawah 50 — kombinasi paling berbahaya di kuadran siklus hidup.",
    rekomendasi:
      "Prioritaskan modernisasi SCADA dan integrasi real-time timbang jembatan ke ERP sebelum menambah aplikasi baru.",
  },
  {
    insight:
      "Konektivitas Regional 7 (62%) dan Regional 5 (72%) menarik rata-rata grup ke 82%; keduanya menampung 151 kebun atau 29% total kebun.",
    rekomendasi:
      "Fokuskan capex backbone Rp 124 M ke dua regional tersebut agar Wave 3 dapat go-live nasional pada Q1 2027.",
  },
  {
    insight:
      "SLA service desk terendah ada di kategori jaringan (78,4%, rata-rata 14,2 jam) — sejalan dengan gap konektivitas lapangan, bukan kapasitas agen.",
    rekomendasi:
      "Tambahkan pengukuran SLA berbasis lokasi dan sediakan spare link seluler untuk 94 kebun berkonektivitas rendah.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 5. BELANJA & NILAI TI — /teknologi-informasi/belanja-nilai
   ══════════════════════════════════════════════════════════════════════ */

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const belanjaKpi: TikPageKpi[] = [
  {
    label: "Belanja TI FY",
    value: "Rp 0,92 T",
    sub: "Capex Rp 0,50 T + opex Rp 0,42 T",
    delta: "+8,2%",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Realisasi Capex TI",
    value: "32,0%",
    sub: "Rp 0,16 T dari Rp 0,50 T",
    subDanger: true,
    delta: "-14 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Opex TI FY",
    value: "Rp 0,42 T",
    sub: "Run the business · 62% total belanja",
    delta: "+4,6%",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Belanja TI / Pendapatan",
    value: "1,6%",
    sub: "Basis RKAP FY Rp 58,4 T",
    delta: "+0,1 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Biaya per Pengguna",
    value: "Rp 37,4 jt",
    valueSuffix: "/thn",
    sub: "24.600 pengguna akun aktif",
    delta: "-2,8%",
    trend: "down",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Benchmark Industri",
    value: "1,2–2,0%",
    sub: "Agribisnis global · PTPN di tengah rentang",
    tone: "green",
  },
];

/* ── 5b. Rincian Belanja TI ───────────────────────────────────────── */

export interface SpendCategoryRow {
  kategori: string;
  /** Nilai FY (Rp T); jumlah 5 kategori = 0,92 (TIK.belanjaTotalFyRpT). */
  nilaiRpT: number;
  pct: number;
  capexRpT: number;
  opexRpT: number;
  color: string;
  catatan: string;
}

/** Jumlah nilai = 0,92 T; jumlah capex = 0,50 T; jumlah opex = 0,42 T. */
export const spendBreakdown: SpendCategoryRow[] = [
  {
    kategori: "Infrastruktur & Jaringan",
    nilaiRpT: 0.26,
    pct: 28.3,
    capexRpT: 0.17,
    opexRpT: 0.09,
    color: PALETTE.blue,
    catatan: "Termasuk backbone konektivitas kebun & pabrik (Rp 124 M).",
  },
  {
    kategori: "Aplikasi & Lisensi",
    nilaiRpT: 0.24,
    pct: 26.1,
    capexRpT: 0.15,
    opexRpT: 0.09,
    color: PALETTE.green,
    catatan: "Dominan implementasi ERP dan pemeliharaan lisensi SAP.",
  },
  {
    kategori: "Layanan & Outsourcing",
    nilaiRpT: 0.17,
    pct: 18.5,
    capexRpT: 0.06,
    opexRpT: 0.11,
    color: PALETTE.teal,
    catatan: "Vendor implementor, service desk, dan dukungan lapangan.",
  },
  {
    kategori: "SDM TI Internal",
    nilaiRpT: 0.14,
    pct: 15.2,
    capexRpT: 0.02,
    opexRpT: 0.12,
    color: PALETTE.purple,
    catatan: "345 personel TI grup termasuk 48 agen service desk.",
  },
  {
    kategori: "Keamanan Siber",
    nilaiRpT: 0.11,
    pct: 11.9,
    capexRpT: 0.1,
    opexRpT: 0.01,
    color: PALETTE.red,
    catatan: "12% belanja TI — di bawah praktik BUMN sejenis 15–18%.",
  },
];

/* ── 5c. Tren Capex vs Opex 5 Tahun ───────────────────────────────── */

export interface CapexOpexPoint {
  tahun: string;
  /** Capex TI (Rp T). */
  capexRpT: number;
  /** Opex TI (Rp T). */
  opexRpT: number;
  totalRpT: number;
  /** Belanja TI terhadap pendapatan (%). */
  pctPendapatan: number;
}

export const capexVsOpexTrend: CapexOpexPoint[] = [
  { tahun: "2022", capexRpT: 0.21, opexRpT: 0.3, totalRpT: 0.51, pctPendapatan: 1.1 },
  { tahun: "2023", capexRpT: 0.28, opexRpT: 0.33, totalRpT: 0.61, pctPendapatan: 1.2 },
  { tahun: "2024", capexRpT: 0.36, opexRpT: 0.36, totalRpT: 0.72, pctPendapatan: 1.4 },
  { tahun: "2025", capexRpT: 0.45, opexRpT: 0.4, totalRpT: 0.85, pctPendapatan: 1.5 },
  { tahun: "2026", capexRpT: 0.5, opexRpT: 0.42, totalRpT: 0.92, pctPendapatan: 1.6 },
];

/* ── 5d. Benchmark Belanja TI ─────────────────────────────────────── */

export interface SpendBenchmarkRow {
  pembanding: string;
  /** Belanja TI terhadap pendapatan (%). */
  pctPendapatan: number;
  keterangan: string;
  color: string;
  isPtpn?: boolean;
}

export const spendBenchmark: SpendBenchmarkRow[] = [
  { pembanding: "PTPN Group", pctPendapatan: 1.6, keterangan: "Rp 0,92 T dari pendapatan RKAP FY Rp 58,4 T", color: PALETTE.green, isPtpn: true },
  { pembanding: "Agribisnis Global — Batas Bawah", pctPendapatan: 1.2, keterangan: "Kuartil bawah pemain perkebunan terintegrasi", color: PALETTE.slate },
  { pembanding: "Agribisnis Global — Batas Atas", pctPendapatan: 2.0, keterangan: "Kuartil atas, umumnya sudah pasca-transformasi ERP", color: PALETTE.slate },
  { pembanding: "BUMN Non-Keuangan Sejenis", pctPendapatan: 1.9, keterangan: "Rata-rata BUMN karya & energi skala setara", color: PALETTE.blue },
  { pembanding: "Manufaktur & Consumer Goods", pctPendapatan: 2.4, keterangan: "Pembanding lintas industri untuk konteks", color: PALETTE.amber },
];

/* ── 5e. Bauran Run vs Grow ───────────────────────────────────────── */

export interface RunGrowRow {
  kategori: "Run" | "Grow";
  /** Porsi belanja (%). */
  pct: number;
  nilaiRpT: number;
  targetPct: number;
  color: string;
  isi: string;
}

/** Run 62% (Rp 0,57 T) + Grow 38% (Rp 0,35 T) = Rp 0,92 T; target 55/45. */
export const runVsGrow: RunGrowRow[] = [
  {
    kategori: "Run",
    pct: 62,
    nilaiRpT: 0.57,
    targetPct: 55,
    color: PALETTE.slate,
    isi: "Pemeliharaan lisensi, service desk, jaringan, SDM operasional TI.",
  },
  {
    kategori: "Grow",
    pct: 38,
    nilaiRpT: 0.35,
    targetPct: 45,
    color: PALETTE.green,
    isi: "Rollout ERP Wave 3-5, data platform, uplift keamanan, backbone baru.",
  },
];

/* ── 5f. Realisasi Nilai (benefit vs belanja) ─────────────────────── */

export interface ValueRealizationRow {
  program: string;
  /** Belanja kumulatif s.d. Mei 2026 (Rp T). */
  belanjaRpT: number;
  /** Benefit terealisasi YTD (Rp T). */
  benefitRpT: number;
  /** Potensi benefit penuh (Rp T). */
  potensiRpT: number;
  /** ROI berbasis potensi penuh terhadap belanja (×). */
  roiPotensiX: number;
  status: TikRagStatus;
}

/** Benefit ERP 0,13 T identik stf-data.ts; potensi penuh 1,3 T. */
export const valueRealization: ValueRealizationRow[] = [
  { program: "Digitalisasi & ERP Terpadu", belanjaRpT: 0.46, benefitRpT: 0.13, potensiRpT: 1.3, roiPotensiX: 2.8, status: "Amber" },
  { program: "Backbone Konektivitas", belanjaRpT: 0.12, benefitRpT: 0.01, potensiRpT: 0.18, roiPotensiX: 1.5, status: "Amber" },
  { program: "Uplift Keamanan Siber", belanjaRpT: 0.11, benefitRpT: 0.0, potensiRpT: 0.09, roiPotensiX: 0.8, status: "Hijau" },
  { program: "Data Platform & BI", belanjaRpT: 0.09, benefitRpT: 0.0, potensiRpT: 0.22, roiPotensiX: 2.4, status: "Amber" },
  { program: "Optimasi Lisensi & Legacy", belanjaRpT: 0.02, benefitRpT: 0.03, potensiRpT: 0.18, roiPotensiX: 9.0, status: "Hijau" },
];

/* ── 5g. Optimasi Lisensi ─────────────────────────────────────────── */

export interface LicenseRow {
  lisensi: string;
  dibeli: number;
  aktif: number;
  tidakTerpakai: number;
  /** Potensi penghematan setahun (Rp M); jumlah 5 baris = 38. */
  potensiHematRpM: number;
  tindakan: string;
}

/** Total potensi penghematan lisensi Rp 38 M/tahun. */
export const licenseOptimization: LicenseRow[] = [
  { lisensi: "SAP Named User", dibeli: 13_400, aktif: 11_620, tidakTerpakai: 1_780, potensiHematRpM: 14, tindakan: "Reklasifikasi ke tipe lisensi lebih rendah saat renewal Q4." },
  { lisensi: "Kolaborasi & Produktivitas", dibeli: 24_600, aktif: 18_700, tidakTerpakai: 5_900, potensiHematRpM: 11, tindakan: "Cabut lisensi tidak aktif 90 hari secara otomatis." },
  { lisensi: "Basis Data & Middleware", dibeli: 86, aktif: 68, tidakTerpakai: 18, potensiHematRpM: 7, tindakan: "Konsolidasi instans seiring dekomisioning aplikasi legacy." },
  { lisensi: "Alat BI & Analytics", dibeli: 1_240, aktif: 940, tidakTerpakai: 300, potensiHematRpM: 4, tindakan: "Terapkan model lisensi berbasis pemakaian pada 2027." },
  { lisensi: "Aplikasi Legacy Unit", dibeli: 1_730, aktif: 1_400, tidakTerpakai: 330, potensiHematRpM: 2, tindakan: "Hilang seluruhnya setelah 12 aplikasi legacy didekomisioning." },
];

/* ── 5h. Insight & Rekomendasi ────────────────────────────────────── */

export const belanjaInsights: TikInsight[] = [
  {
    insight:
      "Belanja TI 1,6% pendapatan sehat secara benchmark, tetapi realisasi capex baru 32% — masalahnya kapasitas eksekusi, bukan alokasi anggaran.",
    rekomendasi:
      "Rebaseline kurva-S capex TI dan tetapkan gate serapan triwulanan minimal 25% agar tidak menumpuk di Q4.",
  },
  {
    insight:
      "Porsi keamanan siber hanya 12% belanja TI sementara satu-satunya limit breach teknologi berada di domain ini.",
    rekomendasi:
      "Naikkan porsi keamanan ke 19% melalui uplift Rp 65 M yang sebagian didanai penghematan lisensi Rp 38 M.",
  },
  {
    insight:
      "Bauran 62% run / 38% grow membuat kapasitas perubahan terbatas; setiap 1 poin pergeseran ke grow setara Rp 9,2 M dana transformasi.",
    rekomendasi:
      "Kejar target 55/45 pada RKAP 2027 dengan dekomisioning legacy dan konsolidasi kontrak layanan.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 6. DATA & AI GOVERNANCE — /teknologi-informasi/data-ai-governance
   ══════════════════════════════════════════════════════════════════════ */

/* ── 6a. KPI Strip ────────────────────────────────────────────────── */

export const dataKpi: TikPageKpi[] = [
  {
    label: "Kualitas Data Grup",
    value: "93,1%",
    sub: "Rata-rata 6 domain terkelola",
    delta: "+1,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Domain Data Terkelola",
    value: "12",
    sub: "Terdaftar di katalog data grup",
    delta: "+3",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "AI Use Case Produksi",
    value: "7",
    sub: "3 produksi · 2 pilot · 2 pengembangan",
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Data Steward",
    value: "34",
    sub: "Tersebar di 12 domain · 4 entitas",
    delta: "+9",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Kepatuhan PDP",
    value: "76%",
    sub: "5 pilar UU PDP · terlemah hak subjek data",
    subDanger: true,
    delta: "+8 pts",
    trend: "up",
    deltaTone: "good",
    tone: "amber",
  },
  {
    label: "Cakupan Single Source of Truth",
    value: "78%",
    sub: "Data kritikal bersumber tunggal",
    delta: "+11 pts",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
];

/* ── 6b. Kualitas Data per Domain ─────────────────────────────────── */

export interface DataQualityRow {
  domain: string;
  /** Skor komposit 0-100; rata-rata 6 domain = 93,1. */
  skor: number;
  kelengkapanPct: number;
  akurasiPct: number;
  ketepatanWaktuPct: number;
  sistemSumber: string;
  status: "Baik" | "Cukup" | "Perlu Perbaikan";
}

/** Rata-rata skor 6 domain = 93,1% (kualitas data grup). */
export const dataQualityByDomain: DataQualityRow[] = [
  { domain: "Keuangan", skor: 96.2, kelengkapanPct: 98.4, akurasiPct: 96.8, ketepatanWaktuPct: 93.4, sistemSumber: "SAP FI/CO", status: "Baik" },
  { domain: "SDM", skor: 94.1, kelengkapanPct: 96.2, akurasiPct: 94.6, ketepatanWaktuPct: 91.5, sistemSumber: "HCM & Payroll", status: "Baik" },
  { domain: "Pemasaran", skor: 93.8, kelengkapanPct: 95.6, akurasiPct: 94.2, ketepatanWaktuPct: 91.6, sistemSumber: "Sistem Penjualan & Lelang", status: "Baik" },
  { domain: "ESG", skor: 92.5, kelengkapanPct: 93.8, akurasiPct: 92.4, ketepatanWaktuPct: 91.3, sistemSumber: "SIML & GIS", status: "Baik" },
  { domain: "Produksi", skor: 92.4, kelengkapanPct: 94.8, akurasiPct: 91.2, ketepatanWaktuPct: 91.2, sistemSumber: "Timbang, SCADA, Mandor Mobile", status: "Cukup" },
  { domain: "Aset & Lahan", skor: 89.6, kelengkapanPct: 91.4, akurasiPct: 88.2, ketepatanWaktuPct: 89.2, sistemSumber: "EAM & GIS", status: "Perlu Perbaikan" },
];

/* ── 6c. Portofolio AI Use Case ───────────────────────────────────── */

export interface AiUseCaseRow {
  useCase: string;
  domain: string;
  tahap: "Produksi" | "Pilot" | "Pengembangan";
  /** Dampak tahunan yang diestimasi (Rp M); null jika belum terukur. */
  dampakRpM: number | null;
  dampakNaratif: string;
  risikoModel: "Rendah" | "Sedang" | "Tinggi";
  /** Tautan internal bila use case punya halaman sendiri. */
  href?: string;
}

/** 7 use case: 3 Produksi, 2 Pilot, 2 Pengembangan. */
export const aiUseCases: AiUseCaseRow[] = [
  {
    useCase: "Prediksi Yield & Rekomendasi Pupuk",
    domain: "Produksi",
    tahap: "Produksi",
    dampakRpM: 84,
    dampakNaratif: "Akurasi prediksi panen 87%; efisiensi dosis pupuk 6,4% di 128 kebun.",
    risikoModel: "Sedang",
  },
  {
    useCase: "Deteksi Anomali Peralatan Pabrik",
    domain: "Produksi",
    tahap: "Produksi",
    dampakRpM: 52,
    dampakNaratif: "Downtime tak terencana PKS turun 11%; berbasis data SCADA 41 pabrik.",
    risikoModel: "Rendah",
  },
  {
    useCase: "AI HR Assistant",
    domain: "SDM",
    tahap: "Produksi",
    dampakRpM: 18,
    dampakNaratif: "Menangani 62% pertanyaan kebijakan SDM tanpa eskalasi ke HC Business Partner.",
    risikoModel: "Sedang",
    href: "/ai-hr-assistant",
  },
  {
    useCase: "Forecasting Harga CPO",
    domain: "Pemasaran",
    tahap: "Pilot",
    dampakRpM: 46,
    dampakNaratif: "MAPE 4,8% pada horizon 1 bulan; dipakai sebagai input rapat harga mingguan.",
    risikoModel: "Tinggi",
  },
  {
    useCase: "Optimasi Rute Logistik & Angkutan TBS",
    domain: "Rantai Pasok",
    tahap: "Pilot",
    dampakRpM: 31,
    dampakNaratif: "Uji di 3 regional; jarak tempuh angkutan turun 7,2% dan restan TBS berkurang.",
    risikoModel: "Rendah",
  },
  {
    useCase: "Deteksi Fraud Pengadaan",
    domain: "Pengadaan",
    tahap: "Pengembangan",
    dampakRpM: null,
    dampakNaratif: "Skoring anomali harga & konsentrasi vendor; melengkapi 14 laporan integritas YTD.",
    risikoModel: "Tinggi",
  },
  {
    useCase: "Chatbot Layanan Internal (Service Desk)",
    domain: "Lintas Domain",
    tahap: "Pengembangan",
    dampakRpM: null,
    dampakNaratif: "Menyasar deflection 30% dari 1.180 tiket akses & kata sandi per bulan.",
    risikoModel: "Rendah",
  },
];

/* ── 6d. Maturitas Tata Kelola Data (DAMA) ────────────────────────── */

export interface GovernanceMaturityRow {
  dimensi: string;
  /** Skor 1-5; rata-rata 5 dimensi = 2,9. */
  skor: number;
  /** Target 2027. */
  target: number;
  catatan: string;
}

export const governanceMaturity: GovernanceMaturityRow[] = [
  { dimensi: "Tata Kelola Data", skor: 3.2, target: 4.0, catatan: "Komite Data grup terbentuk; kebijakan induk sudah disahkan." },
  { dimensi: "Arsitektur & Model Data", skor: 2.8, target: 4.0, catatan: "Model data kanonik baru mencakup 8 dari 12 domain." },
  { dimensi: "Master & Reference Data", skor: 2.6, target: 4.0, catatan: "Master data kebun/vendor masih ganda — penghambat ERP Wave 3." },
  { dimensi: "Kualitas Data", skor: 3.1, target: 4.0, catatan: "Skor grup 93,1%; pengukuran otomatis baru di 6 domain." },
  { dimensi: "Keamanan & Privasi Data", skor: 2.8, target: 4.0, catatan: "Klasifikasi data selesai; hak subjek data PDP baru 68/100." },
];

/* ── 6e. Data Stewardship ─────────────────────────────────────────── */

export interface DataStewardRow {
  peran: string;
  jumlah: number;
  cakupanDomain: string;
  entitas: string;
  tanggungJawab: string;
}

/** Total data steward 34 orang (jumlah kolom `jumlah` = 34). */
export const dataStewardship: DataStewardRow[] = [
  { peran: "Chief Data Officer", jumlah: 1, cakupanDomain: "Seluruh 12 domain", entitas: "Holding", tanggungJawab: "Kebijakan data grup, ketua Komite Data." },
  { peran: "Data Owner (Direktorat)", jumlah: 6, cakupanDomain: "1 domain inti per direktorat", entitas: "Holding", tanggungJawab: "Akuntabilitas kualitas & akses data domain." },
  { peran: "Data Steward Domain", jumlah: 12, cakupanDomain: "12 domain terkelola", entitas: "Holding & Subholding", tanggungJawab: "Definisi, standar, dan remediasi kualitas data harian." },
  { peran: "Data Custodian (TI)", jumlah: 11, cakupanDomain: "Sistem sumber & data platform", entitas: "Direktorat Digital & TI", tanggungJawab: "Pengelolaan teknis, integrasi, dan kontrol akses." },
  { peran: "Data Protection Officer", jumlah: 4, cakupanDomain: "Data pribadi lintas domain", entitas: "Holding & 3 Subholding", tanggungJawab: "Kepatuhan UU PDP; 1 posisi subholding masih kosong." },
];

/* ── 6f. Lanskap Integrasi ────────────────────────────────────────── */

export interface IntegrationRow {
  sistemSumber: string;
  tujuan: string;
  /** Jumlah interface aktif; total = 128 (selaras utang teknis integrasi). */
  interfaceAktif: number;
  metode: "Real-time API" | "Batch Harian" | "Batch Mingguan" | "Manual/Unggah";
  kualitasPct: number;
  status: "Sehat" | "Perlu Perhatian" | "Kritis";
}

/** Total interface aktif 128 — sama dengan angka utang teknis integrasi. */
export const integrationLandscape: IntegrationRow[] = [
  { sistemSumber: "SAP S/4HANA", tujuan: "Data Platform", interfaceAktif: 38, metode: "Real-time API", kualitasPct: 96.4, status: "Sehat" },
  { sistemSumber: "Sistem Penjualan & Lelang", tujuan: "Data Platform", interfaceAktif: 16, metode: "Real-time API", kualitasPct: 94.2, status: "Sehat" },
  { sistemSumber: "e-Procurement", tujuan: "Data Platform", interfaceAktif: 14, metode: "Batch Harian", kualitasPct: 92.8, status: "Sehat" },
  { sistemSumber: "HCM & Payroll", tujuan: "Data Platform", interfaceAktif: 12, metode: "Batch Harian", kualitasPct: 94.6, status: "Sehat" },
  { sistemSumber: "Timbang Jembatan & SCADA", tujuan: "Data Platform", interfaceAktif: 22, metode: "Batch Harian", kualitasPct: 88.4, status: "Perlu Perhatian" },
  { sistemSumber: "GIS & Pemetaan Kebun", tujuan: "Data Platform", interfaceAktif: 9, metode: "Batch Mingguan", kualitasPct: 90.2, status: "Perlu Perhatian" },
  { sistemSumber: "Aplikasi Legacy Unit", tujuan: "Data Platform", interfaceAktif: 17, metode: "Manual/Unggah", kualitasPct: 74.6, status: "Kritis" },
];

/* ── 6g. Guardrail Risiko AI ──────────────────────────────────────── */

export interface AiGuardrailRow {
  guardrail: string;
  status: "Berlaku" | "Draf" | "Belum Ada";
  cakupan: string;
  pemilik: string;
  catatan: string;
}

export const aiRiskGuardrails: AiGuardrailRow[] = [
  {
    guardrail: "Kebijakan Penggunaan AI Grup",
    status: "Berlaku",
    cakupan: "7 use case + penggunaan AI generatif karyawan",
    pemilik: "Direktorat Digital & TI",
    catatan: "Disahkan Q1 2026; mewajibkan registrasi use case sebelum pilot.",
  },
  {
    guardrail: "Review Etik & Bias Model",
    status: "Draf",
    cakupan: "Use case berisiko Tinggi (forecasting harga, deteksi fraud)",
    pemilik: "Komite Data & Manajemen Risiko",
    catatan: "Panel review belum berjalan rutin; target operasional Q4 2026.",
  },
  {
    guardrail: "Human-in-the-Loop untuk Keputusan Material",
    status: "Berlaku",
    cakupan: "Forecasting harga CPO & deteksi fraud pengadaan",
    pemilik: "Direktorat terkait",
    catatan: "Output AI bersifat rekomendasi; keputusan tetap di forum manusia.",
  },
  {
    guardrail: "Perlindungan Data Pribadi dalam Model",
    status: "Draf",
    cakupan: "AI HR Assistant & chatbot layanan",
    pemilik: "DPO Holding",
    catatan: "Menunggu penguatan pilar hak subjek data (skor 68/100).",
  },
  {
    guardrail: "Pemantauan Kinerja & Drift Model",
    status: "Belum Ada",
    cakupan: "Seluruh model produksi",
    pemilik: "Direktorat Digital & TI",
    catatan: "Belum ada MLOps terpusat; pemantauan masih manual per use case.",
  },
];

/* ── 6h. Tautan Pendalaman ────────────────────────────────────────── */

export const dataCrossLinks: TikCrossLink[] = [
  {
    label: "Data & Analytics SDM",
    href: "/data-analytics",
    catatan:
      "Pendalaman kualitas data, katalog, dan analitik untuk lingkup SDM; domain SDM di halaman ini (skor 94,1%) adalah irisan yang sama.",
  },
  {
    label: "AI HR Assistant",
    href: "/ai-hr-assistant",
    catatan:
      "Use case AI produksi dengan dampak Rp 18 M/tahun; dikelola modul SDM namun tercatat di portofolio AI grup.",
  },
  {
    label: "Risk Appetite & Limit",
    href: "/risiko-kepatuhan/risk-appetite",
    catatan:
      "Kepatuhan PDP dan patch SLA masuk sebagai limit teknologi pada dimensi Risiko & Kepatuhan.",
  },
];

/* ── 6i. Insight & Rekomendasi ────────────────────────────────────── */

export const dataInsights: TikInsight[] = [
  {
    insight:
      "Domain Aset & Lahan adalah kualitas data terendah (89,6%) padahal menopang sengketa lahan, HGU, dan kepatuhan EUDR — risiko terbesar justru di data terlemah.",
    rekomendasi:
      "Jadikan remediasi master data lahan sebagai proyek data prioritas 2026 dengan target skor ≥93% sebelum Wave 3 go-live.",
  },
  {
    insight:
      "17 interface dari aplikasi legacy masih manual/unggah dengan kualitas 74,6% — sumber utama selisih angka antar-laporan direktorat.",
    rekomendasi:
      "Ikat dekomisioning 12 aplikasi legacy dengan penggantian interface manual menjadi API sebagai satu paket kerja.",
  },
  {
    insight:
      "Maturitas Master & Reference Data (2,6/5) adalah dimensi terlemah dan persis menjadi penyebab tertundanya rollout modul kebun.",
    rekomendasi:
      "Bentuk gate kualitas master data ≥95% sebagai syarat go-live tiap gelombang ERP, bukan aktivitas paralel.",
  },
  {
    insight:
      "Pemantauan drift model belum ada sementara 3 use case sudah berjalan di produksi dengan dampak Rp 154 M/tahun.",
    rekomendasi:
      "Bangun kapabilitas MLOps minimum (pemantauan akurasi & drift bulanan) sebelum menambah use case baru ke produksi.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   RINGKASAN ANGKA INDUK (guard konsistensi)
   ══════════════════════════════════════════════════════════════════════ */

export interface TikBaselineEcho {
  belanjaTotalFyRpT: number;
  capexFyRpT: number;
  opexFyRpT: number;
  aplikasiInti: number;
  aplikasiLegacy: number;
  konektivitasMemadaiPct: number;
  kebun: number;
  pabrik: number;
  pendapatanRkapFyRpT: number;
}

/** Echo eksplisit ke group-baseline agar drift angka mudah terdeteksi. */
export const tikBaselineEcho: TikBaselineEcho = {
  belanjaTotalFyRpT: TIK.belanjaTotalFyRpT,
  capexFyRpT: TIK.capexFyRpT,
  opexFyRpT: TIK.opexFyRpT,
  aplikasiInti: TIK.aplikasiInti,
  aplikasiLegacy: TIK.aplikasiLegacy,
  konektivitasMemadaiPct: TIK.konektivitasMemadaiPct,
  kebun: PRODUKSI.kebun,
  pabrik: PRODUKSI.pabrikTotal,
  pendapatanRkapFyRpT: KEUANGAN.rkapPendapatanFy,
};

export type { TikRagStatus };
