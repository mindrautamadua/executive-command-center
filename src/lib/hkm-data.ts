/**
 * Data statis dimensi Hukum & Sekretariat Korporat (/hukum).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * File ini memuat halaman Executive Overview, Manajemen Kontrak, dan
 * Perizinan & Lisensi; dua halaman lain (Korporasi & Anak Usaha, Litigasi
 * & Advokasi) ada di hkm-data-detail.ts. Angka kanonik mengutip
 * src/lib/group-baseline.ts (konstanta HUKUM, RISIKO, ASET, PENGADAAN).
 *
 * DE-DUPLIKASI — dimensi ini TIDAK mengulang cakupan modul lain:
 *  · Detail litigasi (funnel tahapan, top eksposur, provisi, konsentrasi
 *    geografis) ada di /risiko-kepatuhan/legal-portfolio (risk-data-detail.ts).
 *    Di sini litigasi hanya ringkasan kompak + tautan.
 *  · Pelacakan 386 kewajiban regulasi & regulatory change radar ada di
 *    /risiko-kepatuhan/kepatuhan-regulasi (risk-data.ts). Di sini yang
 *    dikelola adalah SISI DOKUMEN HUKUM-nya (izin, lisensi, akta).
 *  · Populasi sengketa lahan 214 kasus / 82,4 rb ha adalah milik dimensi
 *    Aset (asg-data.ts) — dirujuk, bukan diklaim ulang.
 */

import { HUKUM, PENGADAAN, BASELINE_TRUST } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   #region TIPE BERSAMA ANTAR-HALAMAN HUKUM
   ══════════════════════════════════════════════════════════════════════ */

/** Nada warna standar kartu/serie pada dimensi Hukum. */
export type HkmTone = "green" | "blue" | "teal" | "amber" | "red" | "purple" | "slate";

/** KPI mini untuk strip halaman detail (bukan overview). */
export interface HkmPageKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100" atau " hari". */
  valueSuffix?: string;
  sub: string;
  /** Tandai sub sebagai peringatan (dirender merah oleh UI). */
  subDanger?: boolean;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  /** Sumber/tautan silang bila angka berasal dari modul lain. */
  href?: string;
  hrefLabel?: string;
  tone: HkmTone;
}

/** Pasangan insight → rekomendasi di kartu bawah tiap halaman. */
export interface HkmInsight {
  insight: string;
  rekomendasi: string;
}

/** Item keputusan BOD (dipakai overview & korporasi). */
export interface HkmDecision {
  title: string;
  impact: "High Impact" | "Medium Impact" | "Low Impact";
  tone: "red" | "amber" | "green";
  context: string;
  rekomendasi: string;
  due: string;
}

/** Status proses dokumen hukum (izin, akta, perpanjangan kontrak). */
export type HkmProcessStatus =
  | "Belum Diproses"
  | "Dalam Proses"
  | "Menunggu Instansi"
  | "Terbit"
  | "Terlambat";

export const HKM_STATUS_COLOR: Record<HkmProcessStatus, string> = {
  "Belum Diproses": PALETTE.slate,
  "Dalam Proses": PALETTE.blue,
  "Menunggu Instansi": PALETTE.amber,
  Terbit: PALETTE.green,
  Terlambat: PALETTE.red,
};

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 1. EXECUTIVE OVERVIEW — /hukum
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const hkmDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "92,8%",
  quality: "91,6%",
  sources: ["Legal Tracker", "e-Kontrak", "SIMAK Perizinan", "Sekretariat Korporat"],
};

/* ── 1b. KPI Strip ────────────────────────────────────────────────── */

export interface HkmKpi {
  label: string;
  value: string;
  valueSuffix?: string;
  sub: string;
  subDanger?: boolean;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  compare: string;
  icon: "kontrak" | "expiry" | "izin" | "perkara" | "entitas" | "permintaan" | "spend";
  /** Bila angka bersumber dari modul lain, UI merender tautan sumber. */
  href?: string;
  hrefLabel?: string;
  tone: HkmTone;
}

export const hkmKpi: HkmKpi[] = [
  {
    label: "Kontrak Aktif",
    value: "1.842", // = HUKUM.kontrakAktif
    sub: `Nilai agregat Rp 34,6 T · ${PENGADAAN.kontrakAktif.toLocaleString("id-ID")} di antaranya kontrak pengadaan`,
    delta: "+6,4%",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "kontrak",
    tone: "blue",
  },
  {
    label: "Kontrak Jatuh Tempo ≤90 Hari",
    value: "112", // = HUKUM.kontrakJatuhTempo90Hari
    sub: "87 kontrak pengadaan · 25 non-pengadaan · menumpuk di Jul–Agu",
    subDanger: true,
    delta: "+18",
    trend: "up",
    deltaTone: "bad",
    compare: "vs kuartal lalu",
    icon: "expiry",
    tone: "amber",
  },
  {
    label: "Izin & Lisensi Aktif",
    value: "612", // = HUKUM.izinAktif
    sub: "43 berakhir ≤6 bulan · 84 tergolong kritikal operasi",
    subDanger: true,
    delta: "+14",
    trend: "up",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "izin",
    tone: "teal",
  },
  {
    label: "Perkara Aktif",
    value: "87", // = RISIKO.perkaraAktif
    sub: "Eksposur Rp 4,2 T · 52 sengketa lahan/HGU",
    subDanger: true,
    delta: "+14 perkara baru",
    trend: "up",
    deltaTone: "bad",
    compare: "YTD 2026",
    icon: "perkara",
    href: "/risiko-kepatuhan/legal-portfolio",
    hrefLabel: "Sumber: Legal Case Portfolio",
    tone: "red",
  },
  {
    label: "Entitas Anak & Afiliasi",
    value: "24", // = HUKUM.entitasAnak
    sub: "Di luar 3 subholding · 18 aktif, 4 dorman, 2 proses likuidasi",
    delta: "-1",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "entitas",
    tone: "purple",
  },
  {
    label: "Permintaan Legal",
    value: "348", // = HUKUM.permintaanLegalYtd
    sub: "YTD · SLA 5 hari kerja · on-time 82%",
    delta: "-4 pts on-time",
    trend: "down",
    deltaTone: "bad",
    compare: "vs YTD 2025",
    icon: "permintaan",
    tone: "slate",
  },
  {
    label: "Legal Spend",
    value: "Rp 96 M", // = HUKUM.legalSpendYtdRpM
    sub: "YTD · 44,4% pagu FY Rp 216 M",
    delta: "+8,6%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs YTD 2025",
    icon: "spend",
    tone: "green",
  },
];

/* ── 1c. Legal Intelligence ───────────────────────────────────────── */

export interface HkmSignal {
  no: string;
  title: string;
  text: string;
  impactLabel: string;
  impactValue: string;
  tone: "red" | "amber" | "green";
  /** Tautan silang ke halaman pendalaman. */
  href?: string;
}

export const hkmIntelligence: HkmSignal[] = [
  {
    no: "01",
    title: "Tumpukan Kedaluwarsa Q3: 112 Kontrak + 43 Izin",
    text: "112 kontrak jatuh tempo ≤90 hari (puncak Juli 41 dan Agustus 37) bertepatan dengan 43 izin yang berakhir ≤6 bulan — 20 di antaranya juga jatuh pada Juli–Agustus. Kapasitas legal & unit teknis akan berebut sumber daya pada jendela yang sama.",
    impactLabel: "Nilai Kontrak Terpapar",
    impactValue: "Rp 5,8 T",
    tone: "red",
    href: "/hukum/kontrak",
  },
  {
    no: "02",
    title: "Sengketa Lahan Tetap Eksposur Legal Terbesar",
    text: "52 dari 87 perkara aktif (60%) adalah sengketa lahan/HGU dengan ±70% dari eksposur Rp 4,2 T. Populasi induknya 214 kasus / 82,4 rb ha dikelola dimensi Aset; pekerjaan hukum yang paling bernilai adalah pencegahan — penuntasan perpanjangan HGU dan sertipikasi sebelum kasus berperkara.",
    impactLabel: "Eksposur Litigasi Lahan",
    impactValue: "±Rp 2,96 T",
    tone: "amber",
    href: "/risiko-kepatuhan/legal-portfolio",
  },
  {
    no: "03",
    title: "SLA Legal 82% Tertekan Volume Review Kontrak Pengadaan",
    text: "Dari 348 permintaan legal YTD, 214 (61,5%) adalah review kontrak pengadaan. Rata-rata waktu review 6,2 hari melampaui SLA 5 hari kerja, menahan on-time di 82% dan menjadi hambatan siklus pengadaan yang saat ini 42 hari.",
    impactLabel: "Permintaan Melewati SLA",
    impactValue: "63 dari 348",
    tone: "amber",
    href: "/hukum/kontrak",
  },
];

/* ── 1d. Legal Risk Radar ─────────────────────────────────────────── */

export interface HkmRiskAxis {
  axis: string;
  /** Skor kesehatan 0-100 (makin tinggi makin baik). */
  score: number;
  /** Target internal 2027. */
  target: number;
}

export const hkmRiskRadar: HkmRiskAxis[] = [
  { axis: "Kontrak", score: 74, target: 86 },
  { axis: "Perizinan", score: 79, target: 88 },
  { axis: "Litigasi", score: 62, target: 75 },
  { axis: "Pertanahan & HGU", score: 55, target: 72 },
  { axis: "Korporasi & GCG", score: 91, target: 94 },
  { axis: "Kepatuhan Hukum Baru", score: 68, target: 82 },
];

/* ── 1e. Expiry Heatmap Gabungan (6 bulan ke depan) ───────────────── */

export interface HkmExpiryHeatCell {
  bulan: string;
  /** Kontrak jatuh tempo pada bulan tsb. */
  kontrak: number;
  /** Izin & lisensi berakhir pada bulan tsb. */
  izin: number;
}

/**
 * Jun–Agu = 112 kontrak (HUKUM.kontrakJatuhTempo90Hari) dan seluruh
 * Jun–Nov = 43 izin (HUKUM.izinBerakhir6Bulan).
 */
export const expiryHeatmap: HkmExpiryHeatCell[] = [
  { bulan: "Jun 2026", kontrak: 34, izin: 5 },
  { bulan: "Jul 2026", kontrak: 41, izin: 9 },
  { bulan: "Agu 2026", kontrak: 37, izin: 11 },
  { bulan: "Sep 2026", kontrak: 29, izin: 7 },
  { bulan: "Okt 2026", kontrak: 24, izin: 6 },
  { bulan: "Nov 2026", kontrak: 31, izin: 5 },
];

/* ── 1f. Beban Kerja Legal 12 Bulan ───────────────────────────────── */

export interface HkmWorkloadPoint {
  bulan: string;
  /** Permintaan legal masuk. */
  masuk: number;
  /** Permintaan legal diselesaikan. */
  selesai: number;
}

/** Jan–Mei 2026 berjumlah 348 = HUKUM.permintaanLegalYtd. */
export const legalWorkloadTrend: HkmWorkloadPoint[] = [
  { bulan: "Jun 25", masuk: 52, selesai: 50 },
  { bulan: "Jul 25", masuk: 58, selesai: 54 },
  { bulan: "Agu 25", masuk: 54, selesai: 53 },
  { bulan: "Sep 25", masuk: 61, selesai: 56 },
  { bulan: "Okt 25", masuk: 57, selesai: 55 },
  { bulan: "Nov 25", masuk: 63, selesai: 58 },
  { bulan: "Des 25", masuk: 70, selesai: 61 },
  { bulan: "Jan 26", masuk: 74, selesai: 62 },
  { bulan: "Feb 26", masuk: 68, selesai: 58 },
  { bulan: "Mar 26", masuk: 72, selesai: 60 },
  { bulan: "Apr 26", masuk: 66, selesai: 54 },
  { bulan: "Mei 26", masuk: 68, selesai: 58 },
];

/* ── 1g. Alerts & Notifications ───────────────────────────────────── */

export interface HkmAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
  href?: string;
}

export const hkmAlerts: HkmAlert[] = [
  {
    title: "3 Kontrak Payung Kritikal Jatuh Tempo Juli",
    text: "Kontrak payung pupuk, angkutan CPO, dan jasa keamanan (agregat Rp 1,84 T/tahun) berakhir 31 Juli 2026 dan belum masuk tahap persetujuan perpanjangan.",
    time: "Hari ini",
    tone: "red",
    href: "/hukum/kontrak",
  },
  {
    title: "11 Izin Berakhir Agustus, 4 Belum Diproses",
    text: "Termasuk izin pembuangan air limbah 2 PKS Regional 3 dan izin operasional boiler Regional 5 — kategori kritikal operasi dengan lead time instansi 60–90 hari.",
    time: "1 hari yang lalu",
    tone: "red",
    href: "/hukum/perizinan",
  },
  {
    title: "Putusan Banding HGU Riau Dijadwalkan Q4",
    text: "Perkara eksposur tunggal terbesar (Rp 1,10 T, 26% total eksposur) memasuki agenda putusan banding; skenario settlement perlu disiapkan.",
    time: "3 hari yang lalu",
    tone: "amber",
    href: "/risiko-kepatuhan/legal-portfolio",
  },
  {
    title: "Akta Perubahan 2 Entitas Dorman Telah Terbit",
    text: "Akta pembubaran PT Agro Sarana Nusantara dan PT Nusa Logistik Prima terbit; tahap likuidasi masuk pengumuman kreditur.",
    time: "6 hari yang lalu",
    tone: "green",
    href: "/hukum/korporasi",
  },
];

/* ── 1h. BOD Decision Center ──────────────────────────────────────── */

export const hkmDecisions: HkmDecision[] = [
  {
    title: "Perpanjangan 3 Kontrak Payung Kritikal Rp 1,84 T",
    impact: "High Impact",
    tone: "red",
    context:
      "Kontrak payung pupuk, angkutan CPO, dan jasa keamanan berakhir 31 Juli 2026. Tanpa keputusan, unit terpaksa penunjukan langsung darurat dengan risiko harga dan temuan audit.",
    rekomendasi:
      "Setujui perpanjangan 12 bulan dengan klausul penyesuaian harga terindeks, sambil menjalankan tender terbuka untuk periode berikutnya.",
    due: "Jul 2026",
  },
  {
    title: "Strategi Penyelesaian Sengketa Lahan Prioritas",
    impact: "High Impact",
    tone: "amber",
    context:
      "52 perkara lahan menyerap ±70% eksposur Rp 4,2 T; sebagian dapat diselesaikan lewat mediasi/kemitraan plasma dengan biaya jauh di bawah nilai gugatan.",
    rekomendasi:
      "Tetapkan mandat settlement bertingkat (batas nilai per level) untuk 12 perkara prioritas dan alokasikan tim litigasi khusus lahan.",
    due: "Q3 2026",
  },
  {
    title: "Restrukturisasi 2 Entitas Anak Dorman",
    impact: "Medium Impact",
    tone: "green",
    context:
      "6 entitas non-operasional (4 dorman + 2 dalam proses likuidasi) menanggung biaya kepatuhan (audit, pajak, RUPS) ±Rp 3,4 M/tahun tanpa kontribusi pendapatan.",
    rekomendasi:
      "Tuntaskan likuidasi 2 entitas yang telah berakta pembubaran dan setujui merger 2 dari 4 entitas dorman ke induk subholding pada RUPS-LB Q4 2026.",
    due: "Q4 2026",
  },
];

/* ── 1i. Insight & Rekomendasi ────────────────────────────────────── */

export const hkmInsights: HkmInsight[] = [
  {
    insight:
      "Beban kedaluwarsa terkonsentrasi: 112 kontrak dan 20 izin jatuh pada jendela Juli–Agustus yang sama, sementara kapasitas legal sudah melewati SLA (6,2 hari vs 5 hari).",
    rekomendasi:
      "Aktifkan kalender kedaluwarsa terpadu 180 hari dengan pemicu otomatis T-120/T-90/T-60 dan bentuk gugus tugas perpanjangan lintas fungsi untuk Q3.",
  },
  {
    insight:
      "61,5% permintaan legal adalah review kontrak pengadaan berulang, namun kepatuhan template baru 88% — sumber utama antrean dan variasi klausul.",
    rekomendasi:
      "Wajibkan template terstandar untuk kontrak pengadaan di bawah Rp 5 M dengan jalur review cepat 2 hari; alihkan kapasitas senior ke kontrak bernilai tinggi.",
  },
  {
    insight:
      "Profil risiko hukum grup pada dasarnya agraria (60% perkara, ±70% eksposur), tetapi belanja legal masih dominan reaktif (Rp 29 M litigasi vs Rp 14 M notaris/akta).",
    rekomendasi:
      "Geser bauran legal spend ke preventif: perbesar anggaran sertipikasi, perpanjangan HGU, dan mediasi dini pada RKAP 2027.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 2. MANAJEMEN KONTRAK — /hukum/kontrak
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const kontrakKpi: HkmPageKpi[] = [
  {
    label: "Kontrak Aktif",
    value: "1.842",
    sub: "6 kategori · seluruh subholding & anak usaha",
    delta: "+6,4%",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Nilai Kontrak Agregat",
    value: "Rp 34,6 T",
    sub: "Nilai kontrak multi-tahun, bukan realisasi tahunan",
    tone: "green",
  },
  {
    label: "Jatuh Tempo ≤90 Hari",
    value: "112",
    sub: "Nilai terpapar Rp 5,8 T · puncak Juli (41)",
    subDanger: true,
    delta: "+18",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Kontrak Berisiko Tinggi",
    value: "68",
    sub: "Klausul bermasalah dan/atau nilai ≥Rp 100 M tanpa jaminan memadai",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Rata-rata Waktu Review",
    value: "6,2",
    valueSuffix: " hari",
    sub: "SLA 5 hari kerja · on-time 82%",
    subDanger: true,
    delta: "+0,8 hari",
    trend: "up",
    deltaTone: "bad",
    tone: "purple",
  },
  {
    label: "Kepatuhan Template",
    value: "88%",
    sub: "Kontrak memakai template & klausul standar korporat",
    delta: "+5 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 2b. Kontrak per Kategori ─────────────────────────────────────── */

export interface HkmContractType {
  tipe: string;
  count: number;
  /** Nilai kontrak agregat (Rp Triliun). */
  nilaiRpT: number;
  color: string;
  /** Tautan ke modul pemilik proses bisnisnya. */
  href?: string;
  hrefLabel?: string;
}

/**
 * Jumlah = 1.842 (HUKUM.kontrakAktif); nilai = Rp 34,6 T
 * (HUKUM.nilaiKontrakRpT). Kategori pengadaan 1.246 selaras
 * PENGADAAN.kontrakAktif di group-baseline.
 */
export const contractByType: HkmContractType[] = [
  {
    tipe: "Pengadaan Barang & Jasa",
    count: 1246,
    nilaiRpT: 14.8,
    color: PALETTE.blue,
    href: "/pengadaan/kontrak",
    hrefLabel: "Dimensi Pengadaan",
  },
  {
    tipe: "Kerjasama Usaha / KSO",
    count: 184,
    nilaiRpT: 6.4,
    color: PALETTE.green,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
  },
  {
    tipe: "Penjualan & Off-take",
    count: 216,
    nilaiRpT: 9.2,
    color: PALETTE.amber,
    href: "/pemasaran-penjualan/kontrak-komitmen",
    hrefLabel: "Kontrak & Komitmen",
  },
  { tipe: "Pembiayaan & Perbankan", count: 68, nilaiRpT: 3.1, color: PALETTE.teal },
  { tipe: "Lisensi & Teknologi Informasi", count: 74, nilaiRpT: 0.7, color: PALETTE.purple },
  { tipe: "Lain-lain (sewa, keanggotaan, MoU)", count: 54, nilaiRpT: 0.4, color: PALETTE.slate },
];

/* ── 2c. Top 10 Kontrak Bernilai Terbesar ─────────────────────────── */

export interface HkmContractValueRow {
  kontrak: string;
  pihak: string;
  kategori: string;
  nilai: string;
  berakhir: string;
  status: "Aktif" | "Perpanjangan Berjalan" | "Perlu Keputusan";
}

/** Top-10 = Rp 18,4 T dari total nilai kontrak Rp 34,6 T (53,2%). */
export const contractValueTop: HkmContractValueRow[] = [
  { kontrak: "Off-take CPO tahunan multi-buyer", pihak: "5 buyer domestik", kategori: "Penjualan & Off-take", nilai: "Rp 4,20 T", berakhir: "31 Des 2026", status: "Aktif" },
  { kontrak: "Kontrak payung pupuk majemuk 2025–2026", pihak: "Konsorsium pupuk BUMN", kategori: "Pengadaan", nilai: "Rp 2,86 T", berakhir: "31 Jul 2026", status: "Perlu Keputusan" },
  { kontrak: "Fasilitas kredit sindikasi refinancing", pihak: "Sindikasi 6 bank Himbara", kategori: "Pembiayaan", nilai: "Rp 2,40 T", berakhir: "30 Jun 2029", status: "Aktif" },
  { kontrak: "EPC revitalisasi 5 pabrik gula", pihak: "Kontraktor EPC nasional", kategori: "Pengadaan", nilai: "Rp 1,95 T", berakhir: "31 Des 2027", status: "Aktif" },
  { kontrak: "Kontrak angkutan & storage CPO", pihak: "3 penyedia logistik", kategori: "Pengadaan", nilai: "Rp 1,64 T", berakhir: "31 Jul 2026", status: "Perlu Keputusan" },
  { kontrak: "KSO pengembangan kawasan industri", pihak: "Mitra strategis kawasan", kategori: "Kerjasama Usaha", nilai: "Rp 1,42 T", berakhir: "31 Des 2031", status: "Aktif" },
  { kontrak: "Kontrak pasokan gula rafinasi industri", pihak: "4 industri makanan-minuman", kategori: "Penjualan & Off-take", nilai: "Rp 1,28 T", berakhir: "30 Sep 2026", status: "Perpanjangan Berjalan" },
  { kontrak: "Sustainability-linked loan", pihak: "Konsorsium bank & lembaga multilateral", kategori: "Pembiayaan", nilai: "Rp 1,05 T", berakhir: "31 Des 2030", status: "Aktif" },
  { kontrak: "KSO plasma & kemitraan petani", pihak: "62 koperasi petani plasma", kategori: "Kerjasama Usaha", nilai: "Rp 0,86 T", berakhir: "31 Des 2028", status: "Aktif" },
  { kontrak: "Lisensi ERP & layanan cloud grup", pihak: "Vendor ERP global", kategori: "Lisensi & TI", nilai: "Rp 0,74 T", berakhir: "31 Mar 2027", status: "Aktif" },
];

/* ── 2d. Timeline Kedaluwarsa 12 Bulan ────────────────────────────── */

export interface HkmExpiryPoint {
  bulan: string;
  /** Jumlah kontrak berakhir. */
  jumlah: number;
  /** Nilai kontrak yang berakhir (Rp Triliun). */
  nilaiRpT: number;
}

/** Jun–Agu 2026 = 112 kontrak (HUKUM.kontrakJatuhTempo90Hari), nilai Rp 5,8 T. */
export const expiryTimeline: HkmExpiryPoint[] = [
  { bulan: "Jun 2026", jumlah: 34, nilaiRpT: 0.94 },
  { bulan: "Jul 2026", jumlah: 41, nilaiRpT: 3.42 },
  { bulan: "Agu 2026", jumlah: 37, nilaiRpT: 1.44 },
  { bulan: "Sep 2026", jumlah: 29, nilaiRpT: 1.68 },
  { bulan: "Okt 2026", jumlah: 24, nilaiRpT: 0.72 },
  { bulan: "Nov 2026", jumlah: 31, nilaiRpT: 0.88 },
  { bulan: "Des 2026", jumlah: 46, nilaiRpT: 4.86 },
  { bulan: "Jan 2027", jumlah: 38, nilaiRpT: 1.12 },
  { bulan: "Feb 2027", jumlah: 27, nilaiRpT: 0.64 },
  { bulan: "Mar 2027", jumlah: 33, nilaiRpT: 1.28 },
  { bulan: "Apr 2027", jumlah: 25, nilaiRpT: 0.58 },
  { bulan: "Mei 2027", jumlah: 22, nilaiRpT: 0.46 },
];

/* ── 2e. Pipeline Perpanjangan ────────────────────────────────────── */

export interface HkmRenewalStage {
  tahap: "Identifikasi" | "Negosiasi" | "Persetujuan" | "Tanda Tangan";
  jumlah: number;
  nilaiRpT: number;
  /** Rata-rata umur berkas di tahap ini (hari). */
  rataHari: number;
  color: string;
}

/** Populasi = 112 kontrak jatuh tempo ≤90 hari. */
export const renewalPipeline: HkmRenewalStage[] = [
  { tahap: "Identifikasi", jumlah: 112, nilaiRpT: 5.8, rataHari: 6, color: PALETTE.slate },
  { tahap: "Negosiasi", jumlah: 74, nilaiRpT: 4.6, rataHari: 21, color: PALETTE.blue },
  { tahap: "Persetujuan", jumlah: 41, nilaiRpT: 2.9, rataHari: 17, color: PALETTE.amber },
  { tahap: "Tanda Tangan", jumlah: 23, nilaiRpT: 1.4, rataHari: 9, color: PALETTE.green },
];

/* ── 2f. Risk Clause Watch ────────────────────────────────────────── */

export interface HkmRiskClauseRow {
  klausul: string;
  /** Jumlah kontrak aktif yang bermasalah pada klausul ini. */
  kontrakTerdampak: number;
  /** Nilai kontrak terdampak (Rp Triliun). */
  nilaiRpT: number;
  isu: string;
  severity: "Tinggi" | "Sedang" | "Rendah";
}

export const riskClauseWatch: HkmRiskClauseRow[] = [
  {
    klausul: "Jaminan Pelaksanaan & Pemeliharaan",
    kontrakTerdampak: 96,
    nilaiRpT: 3.4,
    isu: "Nilai jaminan di bawah 5% atau masa berlaku tidak menutup masa pemeliharaan.",
    severity: "Tinggi",
  },
  {
    klausul: "Force Majeure",
    kontrakTerdampak: 142,
    nilaiRpT: 6.2,
    isu: "Definisi belum mencakup gangguan iklim ekstrem, larangan ekspor, dan gangguan siber.",
    severity: "Sedang",
  },
  {
    klausul: "Arbitrase & Pilihan Forum",
    kontrakTerdampak: 58,
    nilaiRpT: 4.8,
    isu: "Klausul ganda/ambigu (pengadilan vs BANI) berpotensi memicu sengketa yurisdiksi.",
    severity: "Tinggi",
  },
  {
    klausul: "Indemnity & Batas Tanggung Jawab",
    kontrakTerdampak: 84,
    nilaiRpT: 5.1,
    isu: "Tanpa cap tanggung jawab atau indemnity satu arah yang merugikan perusahaan.",
    severity: "Sedang",
  },
];

/* ── 2g. Tren SLA Review Kontrak ──────────────────────────────────── */

export interface HkmReviewSlaPoint {
  bulan: string;
  /** Rata-rata waktu review (hari). */
  rataHari: number;
  /** Persentase review selesai dalam SLA 5 hari kerja. */
  onTimePct: number;
  /** Jumlah dokumen direview. */
  volume: number;
}

/** SLA target 5 hari kerja (HUKUM.slaLegalHari); on-time YTD 82%. */
export const reviewSlaTrend: HkmReviewSlaPoint[] = [
  { bulan: "Jun 25", rataHari: 5.1, onTimePct: 89, volume: 41 },
  { bulan: "Jul 25", rataHari: 5.3, onTimePct: 88, volume: 46 },
  { bulan: "Agu 25", rataHari: 5.2, onTimePct: 88, volume: 43 },
  { bulan: "Sep 25", rataHari: 5.6, onTimePct: 86, volume: 49 },
  { bulan: "Okt 25", rataHari: 5.4, onTimePct: 87, volume: 45 },
  { bulan: "Nov 25", rataHari: 5.8, onTimePct: 85, volume: 51 },
  { bulan: "Des 25", rataHari: 6.1, onTimePct: 84, volume: 57 },
  { bulan: "Jan 26", rataHari: 6.0, onTimePct: 84, volume: 58 },
  { bulan: "Feb 26", rataHari: 6.1, onTimePct: 83, volume: 54 },
  { bulan: "Mar 26", rataHari: 6.3, onTimePct: 82, volume: 56 },
  { bulan: "Apr 26", rataHari: 6.5, onTimePct: 80, volume: 52 },
  { bulan: "Mei 26", rataHari: 6.2, onTimePct: 82, volume: 55 },
];

/* ── 2h. Insight & Rekomendasi ────────────────────────────────────── */

export const kontrakInsights: HkmInsight[] = [
  {
    insight:
      "Nilai kontrak yang berakhir tidak merata: Juli 2026 (Rp 3,42 T) dan Desember 2026 (Rp 4,86 T) menampung 24% seluruh nilai kontrak grup dalam dua bulan.",
    rekomendasi:
      "Ratakan jadwal berakhir dengan perpanjangan berdurasi ganjil (15/18 bulan) untuk kontrak payung agar puncak kedaluwarsa terpecah.",
  },
  {
    insight:
      "Funnel perpanjangan menyempit tajam: dari 112 kontrak jatuh tempo, hanya 23 sampai tahap tanda tangan — 41 tertahan di persetujuan dengan rata-rata 17 hari.",
    rekomendasi:
      "Delegasikan kewenangan persetujuan perpanjangan tanpa perubahan materiil di bawah Rp 25 M ke level direktur operasional subholding.",
  },
  {
    insight:
      "58 kontrak senilai Rp 4,8 T memuat klausul forum ganda/ambigu — risiko sengketa yurisdiksi yang mahal dan tidak perlu, sekaligus 12% kontrak masih di luar template standar.",
    rekomendasi:
      "Jalankan program remediasi klausul: addendum forum tunggal untuk 58 kontrak prioritas dan kunci template wajib di e-Kontrak pada Q4 2026.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 3. PERIZINAN & LISENSI — /hukum/perizinan
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const perizinanKpi: HkmPageKpi[] = [
  {
    label: "Izin & Lisensi Aktif",
    value: "612",
    sub: "6 domain · 7 regional + kantor pusat",
    delta: "+14",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Berakhir ≤6 Bulan",
    value: "43",
    sub: "Puncak Agustus (11) · 10 belum diproses sama sekali",
    subDanger: true,
    delta: "+7",
    trend: "up",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Izin dalam Proses",
    value: "34",
    sub: "27 perpanjangan · 7 izin baru · 6 menunggu keputusan instansi",
    tone: "purple",
  },
  {
    label: "Ketepatan Waktu Perpanjangan",
    value: "91%",
    sub: "Perpanjangan terbit sebelum tanggal berakhir (12 bulan terakhir)",
    delta: "-2 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "teal",
  },
  {
    label: "Izin Kritikal Operasi",
    value: "84",
    sub: "Kadaluwarsa = penghentian operasi unit · 19 berakhir ≤6 bulan",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Denda & Sanksi Perizinan",
    value: "Rp 2,4 M",
    sub: "YTD · 6 sanksi administratif, tidak ada pembekuan izin",
    delta: "-38%",
    trend: "down",
    deltaTone: "good",
    tone: "green",
  },
];

/* ── 3b. Izin per Domain ──────────────────────────────────────────── */

export interface HkmPermitDomain {
  domain: string;
  count: number;
  /** Bagian yang tergolong kritikal operasi. */
  kritikal: number;
  /** Berakhir ≤6 bulan. */
  berakhir6Bulan: number;
  color: string;
  href?: string;
  hrefLabel?: string;
}

/** Jumlah = 612 (HUKUM.izinAktif); kritikal = 84; berakhir ≤6 bln = 43. */
export const permitByDomain: HkmPermitDomain[] = [
  {
    domain: "Lingkungan (AMDAL, PROPER, Limbah)",
    count: 168,
    kritikal: 26,
    berakhir6Bulan: 14,
    color: PALETTE.green,
    href: "/esg-sustainability/lingkungan-hayati",
    hrefLabel: "Air, Limbah & Biodiversitas",
  },
  {
    domain: "Pertanahan & HGU",
    count: 142,
    kritikal: 21,
    berakhir6Bulan: 9,
    color: PALETTE.amber,
    href: "/risiko-kepatuhan/kepatuhan-regulasi",
    hrefLabel: `Kepatuhan Regulasi · ${HUKUM.sertifikatHgu} sertifikat HGU`,
  },
  { domain: "Operasional Pabrik & K3", count: 136, kritikal: 24, berakhir6Bulan: 11, color: PALETTE.red },
  { domain: "Perdagangan & Ekspor", count: 74, kritikal: 8, berakhir6Bulan: 5, color: PALETTE.blue },
  { domain: "Ketenagakerjaan", count: 58, kritikal: 3, berakhir6Bulan: 3, color: PALETTE.purple },
  { domain: "Teknologi Informasi & Frekuensi", count: 34, kritikal: 2, berakhir6Bulan: 1, color: PALETTE.slate },
];

/* ── 3c. Kalender Kedaluwarsa 43 Izin ─────────────────────────────── */

export interface HkmPermitExpiryRow {
  izin: string;
  unit: string;
  domain: string;
  berakhir: string;
  status: HkmProcessStatus;
  /** Kadaluwarsa menghentikan operasi unit. */
  kritikal: boolean;
}

/**
 * 43 baris = HUKUM.izinBerakhir6Bulan. Distribusi bulanan selaras
 * expiryHeatmap (Jun 5, Jul 9, Agu 11, Sep 7, Okt 6, Nov 5).
 */
export const expiryCalendar: HkmPermitExpiryRow[] = [
  /* Juni 2026 — 5 */
  { izin: "Izin Pembuangan Air Limbah PKS", unit: "Regional 1 — Kebun Sei Rokan", domain: "Lingkungan", berakhir: "12 Jun 2026", status: "Terbit", kritikal: true },
  { izin: "Izin Penyimpanan Sementara Limbah B3", unit: "Regional 2 — PKS Adolina", domain: "Lingkungan", berakhir: "18 Jun 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Sertifikat Laik Operasi Genset", unit: "Regional 4 — PKS Bunut", domain: "Operasional Pabrik & K3", berakhir: "22 Jun 2026", status: "Terbit", kritikal: true },
  { izin: "Angka Pengenal Importir Produsen", unit: "Kantor Pusat — Pengadaan", domain: "Perdagangan & Ekspor", berakhir: "26 Jun 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Penggunaan Frekuensi Radio Kebun", unit: "Regional 6 — Kalbar", domain: "TI & Frekuensi", berakhir: "30 Jun 2026", status: "Menunggu Instansi", kritikal: false },

  /* Juli 2026 — 9 */
  { izin: "Izin Lingkungan Perluasan Kapasitas PKS", unit: "Regional 3 — PKS Sei Galuh", domain: "Lingkungan", berakhir: "03 Jul 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Izin Operasional Boiler", unit: "Regional 5 — PG Bunga Mayang", domain: "Operasional Pabrik & K3", berakhir: "08 Jul 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Izin Pemanfaatan Air Permukaan", unit: "Regional 2 — Kebun Pabatu", domain: "Lingkungan", berakhir: "11 Jul 2026", status: "Menunggu Instansi", kritikal: false },
  { izin: "Sertifikat HGU Perpanjangan Tahap I", unit: "Regional 1 — Kebun Sei Baruhur", domain: "Pertanahan & HGU", berakhir: "15 Jul 2026", status: "Menunggu Instansi", kritikal: true },
  { izin: "Izin Usaha Perkebunan (IUP-B)", unit: "Regional 6 — Kebun Danau Salak", domain: "Pertanahan & HGU", berakhir: "19 Jul 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Sertifikat Laik Operasi Bejana Tekan", unit: "Regional 3 — PKS Tandun", domain: "Operasional Pabrik & K3", berakhir: "23 Jul 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Nomor Identitas Kepabeanan Ekspor", unit: "Kantor Pusat — Pemasaran", domain: "Perdagangan & Ekspor", berakhir: "25 Jul 2026", status: "Terbit", kritikal: false },
  { izin: "Izin Penggunaan TKA Konsultan Teknis", unit: "Kantor Pusat — SDM", domain: "Ketenagakerjaan", berakhir: "28 Jul 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Pembuangan Air Limbah PG", unit: "Regional 7 — PG Takalar", domain: "Lingkungan", berakhir: "31 Jul 2026", status: "Belum Diproses", kritikal: true },

  /* Agustus 2026 — 11 */
  { izin: "Izin Pembuangan Air Limbah PKS", unit: "Regional 3 — PKS Sei Rokan Hilir", domain: "Lingkungan", berakhir: "04 Agu 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Izin Pembuangan Air Limbah PKS", unit: "Regional 3 — PKS Sei Intan", domain: "Lingkungan", berakhir: "06 Agu 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Izin Operasional Boiler & Turbin", unit: "Regional 5 — PKS Talang Sawit", domain: "Operasional Pabrik & K3", berakhir: "09 Agu 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Izin Emisi Cerobong (Baku Mutu Udara)", unit: "Regional 5 — PKS Betung", domain: "Lingkungan", berakhir: "11 Agu 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Sertifikat HGU Perpanjangan Tahap I", unit: "Regional 4 — Kebun Ophir", domain: "Pertanahan & HGU", berakhir: "13 Agu 2026", status: "Menunggu Instansi", kritikal: true },
  { izin: "Sertifikat Laik Operasi Instalasi Listrik", unit: "Regional 2 — PKS Sawit Langkat", domain: "Operasional Pabrik & K3", berakhir: "17 Agu 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Izin Pengangkutan Limbah B3", unit: "Regional 1 — Sumut", domain: "Lingkungan", berakhir: "20 Agu 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Gudang Berikat CPO", unit: "Regional 2 — Terminal Belawan", domain: "Perdagangan & Ekspor", berakhir: "22 Agu 2026", status: "Terbit", kritikal: false },
  { izin: "Izin Panitia Pembina K3 (P2K3)", unit: "Regional 6 — Kalteng", domain: "Ketenagakerjaan", berakhir: "25 Agu 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Usaha Perkebunan Pengolahan", unit: "Regional 7 — PKS Luwu", domain: "Pertanahan & HGU", berakhir: "27 Agu 2026", status: "Terlambat", kritikal: false },
  { izin: "Sertifikat Kalibrasi Timbangan Jembatan", unit: "Regional 4 — PKS Jambi", domain: "Operasional Pabrik & K3", berakhir: "31 Agu 2026", status: "Dalam Proses", kritikal: false },

  /* September 2026 — 7 */
  { izin: "Izin Lingkungan Pabrik Biogas", unit: "Regional 3 — PKS Terantam", domain: "Lingkungan", berakhir: "05 Sep 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Sertifikat Laik Operasi Boiler", unit: "Regional 1 — PKS Torgamba", domain: "Operasional Pabrik & K3", berakhir: "09 Sep 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Sertifikat HGU Perpanjangan Tahap II", unit: "Regional 5 — Kebun Cinta Manis", domain: "Pertanahan & HGU", berakhir: "14 Sep 2026", status: "Menunggu Instansi", kritikal: true },
  { izin: "Izin Pemanfaatan Air Tanah", unit: "Regional 4 — Kebun Sungai Bahar", domain: "Lingkungan", berakhir: "18 Sep 2026", status: "Belum Diproses", kritikal: false },
  { izin: "Persetujuan Ekspor CPO & Turunan", unit: "Kantor Pusat — Pemasaran", domain: "Perdagangan & Ekspor", berakhir: "22 Sep 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Izin Penggunaan Frekuensi Data Kebun", unit: "Regional 7 — Sulsel", domain: "TI & Frekuensi", berakhir: "26 Sep 2026", status: "Terbit", kritikal: false },
  { izin: "Izin Penyelenggaraan Klinik Perusahaan", unit: "Regional 2 — RS Kebun", domain: "Ketenagakerjaan", berakhir: "30 Sep 2026", status: "Dalam Proses", kritikal: false },

  /* Oktober 2026 — 6 */
  { izin: "Izin Pembuangan Air Limbah PG", unit: "Regional 5 — PG Kedaton", domain: "Lingkungan", berakhir: "06 Okt 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Sertifikat Laik Operasi Ketel Uap", unit: "Regional 6 — PKS Pelaihari", domain: "Operasional Pabrik & K3", berakhir: "10 Okt 2026", status: "Dalam Proses", kritikal: true },
  { izin: "Sertifikat HGU Perpanjangan Tahap II", unit: "Regional 3 — Kebun Sei Garo", domain: "Pertanahan & HGU", berakhir: "15 Okt 2026", status: "Menunggu Instansi", kritikal: false },
  { izin: "Izin Penyimpanan Sementara Limbah B3", unit: "Regional 7 — PKS Malili", domain: "Lingkungan", berakhir: "19 Okt 2026", status: "Belum Diproses", kritikal: false },
  { izin: "Registrasi Produk Pangan (Gula Kristal)", unit: "SGN — PG Djatiroto", domain: "Perdagangan & Ekspor", berakhir: "24 Okt 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Instalasi Petir & Proteksi Kebakaran", unit: "Regional 1 — PKS Sei Meranti", domain: "Operasional Pabrik & K3", berakhir: "29 Okt 2026", status: "Dalam Proses", kritikal: false },

  /* November 2026 — 5 */
  { izin: "Izin Lingkungan Perluasan Kapasitas PG", unit: "SGN — PG Glenmore", domain: "Lingkungan", berakhir: "04 Nov 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Sertifikat HGU Perpanjangan Tahap II", unit: "Regional 6 — Kebun Rantau", domain: "Pertanahan & HGU", berakhir: "10 Nov 2026", status: "Belum Diproses", kritikal: true },
  { izin: "Sertifikat Laik Operasi Instalasi Listrik", unit: "Regional 4 — PKS Rejosari", domain: "Operasional Pabrik & K3", berakhir: "16 Nov 2026", status: "Belum Diproses", kritikal: false },
  { izin: "Izin Penggunaan TKA Ahli Pabrik Gula", unit: "SGN — Kantor Pusat", domain: "Ketenagakerjaan", berakhir: "22 Nov 2026", status: "Dalam Proses", kritikal: false },
  { izin: "Izin Pemanfaatan Air Permukaan", unit: "Regional 5 — Kebun Tulung Buyut", domain: "Lingkungan", berakhir: "28 Nov 2026", status: "Dalam Proses", kritikal: false },
];

/* ── 3d. Funnel Perpanjangan Izin ─────────────────────────────────── */

export interface HkmPermitFunnelStage {
  tahap: string;
  jumlah: number;
  /** Rata-rata durasi tahap (hari kalender). */
  rataHari: number;
  color: string;
}

/**
 * Populasi = 43 izin berakhir ≤6 bulan (HUKUM.izinBerakhir6Bulan); angka
 * bersifat kumulatif "telah mencapai minimal tahap ini" dan selaras
 * status pada expiryCalendar (10 belum diproses, 5 telah terbit).
 */
export const renewalFunnel: HkmPermitFunnelStage[] = [
  { tahap: "Teridentifikasi", jumlah: 43, rataHari: 4, color: PALETTE.slate },
  { tahap: "Kelengkapan Dokumen Teknis", jumlah: 33, rataHari: 22, color: PALETTE.blue },
  { tahap: "Pengajuan ke Instansi", jumlah: 27, rataHari: 14, color: PALETTE.purple },
  { tahap: "Verifikasi & Inspeksi Lapangan", jumlah: 14, rataHari: 31, color: PALETTE.amber },
  { tahap: "Terbit", jumlah: 5, rataHari: 11, color: PALETTE.green },
];

/* ── 3e. Matriks Risiko Perizinan ─────────────────────────────────── */

export interface HkmPermitRiskPoint {
  izin: string;
  unit: string;
  /** Dampak terhadap operasi 1–5 (5 = penghentian operasi unit). */
  dampakOperasi: number;
  /** Sisa waktu sampai berakhir (hari). */
  sisaHari: number;
  /** Jumlah izin dengan profil serupa (ukuran bubble). */
  jumlah: number;
  tone: "red" | "amber" | "green";
}

export const permitRiskMatrix: HkmPermitRiskPoint[] = [
  { izin: "Izin Pembuangan Air Limbah", unit: "Regional 3 (2 PKS)", dampakOperasi: 5, sisaHari: 66, jumlah: 2, tone: "red" },
  { izin: "Izin Operasional Boiler & Turbin", unit: "Regional 5 (PKS Talang Sawit)", dampakOperasi: 5, sisaHari: 71, jumlah: 1, tone: "red" },
  { izin: "Izin Pembuangan Air Limbah PG", unit: "Regional 7 (PG Takalar)", dampakOperasi: 5, sisaHari: 62, jumlah: 1, tone: "red" },
  { izin: "Sertifikat Laik Operasi Bejana Tekan", unit: "Regional 3 (PKS Tandun)", dampakOperasi: 4, sisaHari: 54, jumlah: 1, tone: "red" },
  { izin: "Sertifikat HGU Perpanjangan", unit: "4 kebun lintas regional", dampakOperasi: 4, sisaHari: 108, jumlah: 4, tone: "amber" },
  { izin: "Persetujuan Ekspor CPO & Turunan", unit: "Kantor Pusat", dampakOperasi: 4, sisaHari: 115, jumlah: 1, tone: "amber" },
  { izin: "Izin Emisi & Limbah B3", unit: "Lintas regional", dampakOperasi: 3, sisaHari: 96, jumlah: 6, tone: "amber" },
  { izin: "Izin Ketenagakerjaan & K3 Administratif", unit: "Lintas unit", dampakOperasi: 2, sisaHari: 132, jumlah: 5, tone: "green" },
  { izin: "Izin Frekuensi & Registrasi Produk", unit: "Lintas unit", dampakOperasi: 2, sisaHari: 148, jumlah: 4, tone: "green" },
];

/* ── 3f. Kepatuhan Perizinan per Regional ─────────────────────────── */

export interface HkmPermitRegionRow {
  regional: string;
  izinAktif: number;
  berakhir6Bulan: number;
  /** % izin berlaku & lengkap dokumennya. */
  kepatuhanPct: number;
  /** Sanksi administratif YTD. */
  sanksiYtd: number;
}

/** Jumlah izinAktif = 612 (HUKUM.izinAktif); berakhir6Bulan = 43. */
export const complianceByRegion: HkmPermitRegionRow[] = [
  { regional: "Regional 1 (Sumut)", izinAktif: 96, berakhir6Bulan: 6, kepatuhanPct: 95.8, sanksiYtd: 0 },
  { regional: "Regional 2 (Sumut)", izinAktif: 104, berakhir6Bulan: 6, kepatuhanPct: 96.2, sanksiYtd: 1 },
  { regional: "Regional 3 (Riau)", izinAktif: 112, berakhir6Bulan: 9, kepatuhanPct: 91.4, sanksiYtd: 2 },
  { regional: "Regional 4 (Jambi–Sumbar)", izinAktif: 78, berakhir6Bulan: 6, kepatuhanPct: 93.6, sanksiYtd: 1 },
  { regional: "Regional 5 (Sumsel–Lampung)", izinAktif: 92, berakhir6Bulan: 7, kepatuhanPct: 92.1, sanksiYtd: 1 },
  { regional: "Regional 6 (Kalimantan)", izinAktif: 74, berakhir6Bulan: 5, kepatuhanPct: 94.5, sanksiYtd: 1 },
  { regional: "Regional 7 (Sulawesi–Papua)", izinAktif: 56, berakhir6Bulan: 4, kepatuhanPct: 89.3, sanksiYtd: 0 },
];

/* ── 3g. Log Sanksi & Denda Perizinan ─────────────────────────────── */

export interface HkmSanctionRow {
  tanggal: string;
  instansi: string;
  unit: string;
  jenis: string;
  nilai: string;
  status: "Selesai" | "Dalam Remediasi" | "Banding";
}

/** Total denda YTD = Rp 2,4 M (6 sanksi administratif). */
export const sanctionLog: HkmSanctionRow[] = [
  { tanggal: "18 Feb 2026", instansi: "Dinas Lingkungan Hidup Prov. Riau", unit: "Regional 3 — PKS Sei Galuh", jenis: "Teguran & denda baku mutu effluent", nilai: "Rp 750 jt", status: "Selesai" },
  { tanggal: "06 Mar 2026", instansi: "Dinas LH Kab. Musi Banyuasin", unit: "Regional 5 — PKS Betung", jenis: "Denda keterlambatan pelaporan limbah B3", nilai: "Rp 420 jt", status: "Selesai" },
  { tanggal: "22 Mar 2026", instansi: "Disnaker Prov. Sumut", unit: "Regional 2 — PKS Adolina", jenis: "Sanksi administratif riksa-uji K3", nilai: "Rp 180 jt", status: "Selesai" },
  { tanggal: "14 Apr 2026", instansi: "Dinas LH Prov. Riau", unit: "Regional 3 — PKS Terantam", jenis: "Peringatan emisi cerobong", nilai: "Rp 320 jt", status: "Dalam Remediasi" },
  { tanggal: "29 Apr 2026", instansi: "Dinas PUPR Prov. Jambi", unit: "Regional 4 — Kebun Sungai Bahar", jenis: "Denda pemanfaatan air tanah tanpa perpanjangan", nilai: "Rp 460 jt", status: "Dalam Remediasi" },
  { tanggal: "20 Mei 2026", instansi: "Balai Besar Wilayah Sungai", unit: "Regional 6 — PKS Pelaihari", jenis: "Teguran pemanfaatan air permukaan", nilai: "Rp 270 jt", status: "Banding" },
];

/* ── 3h. Insight & Rekomendasi ────────────────────────────────────── */

export const perizinanInsights: HkmInsight[] = [
  {
    insight:
      "19 dari 43 izin yang berakhir tergolong kritikal operasi; 10 berkas belum diproses sama sekali (7 di antaranya kritikal) padahal lead time instansi 60–90 hari — konsentrasi terbesar di Regional 3 dan 5 pada Juli–Agustus.",
    rekomendasi:
      "Naikkan pemicu perpanjangan izin kritikal ke T-180 hari dan tempatkan penanggung jawab perizinan tunggal per regional dengan eskalasi mingguan ke direksi subholding.",
  },
  {
    insight:
      "Funnel perpanjangan bocor di tahap kelengkapan dokumen teknis (43 → 33, rata-rata 22 hari) dan verifikasi lapangan (27 → 14, rata-rata 31 hari) — hambatan bersifat teknis, bukan hukum.",
    rekomendasi:
      "Siapkan paket dokumen teknis standar per jenis izin (uji laboratorium, riksa-uji, as-built) yang diperbarui rutin agar berkas siap sebelum jendela pengajuan dibuka.",
  },
  {
    insight:
      "Seluruh 6 sanksi YTD (Rp 2,4 M) bersumber dari domain lingkungan dan air — bukan dari izin usaha; kepatuhan Regional 7 (89,3%) dan Regional 3 (91,4%) terendah.",
    rekomendasi:
      "Sinkronkan pemantauan izin lingkungan dengan program PROPER & IPAL di /esg-sustainability/lingkungan-hayati agar remediasi teknis dan perpanjangan izin berjalan dalam satu rencana.",
  },
];

/* #endregion */
