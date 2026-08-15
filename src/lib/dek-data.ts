/**
 * Data statis dimensi Dewan Komisaris (/dewan-komisaris).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * Dimensi ini melayani organ PENGAWASAN, bukan organ eksekusi. Karena itu
 * tidak ada "BOD Decision Center" di sini: yang ada adalah agenda & risalah
 * rapat, rekomendasi Dekom beserta tindak lanjut Direksi, kerja komite,
 * evaluasi kinerja Direksi, dan persetujuan/tanggapan tertulis atas aksi
 * korporasi yang melampaui kewenangan Direksi. Bahasa data sengaja bernada
 * pemantauan, permintaan penjelasan, dan pertanyaan pengawasan.
 *
 * File ini memuat halaman Executive Overview, Agenda & Risalah Rapat, dan
 * Rekomendasi & Tindak Lanjut; tiga halaman lain (Komite, Evaluasi Kinerja
 * Direksi, Persetujuan & Kewenangan) ada di dek-data-detail.ts.
 *
 * Angka kanonik mengutip src/lib/group-baseline.ts (DEKOM, STRATEGI).
 * Angka milik dimensi lain TIDAK diduplikasi — hanya ditautkan lewat route
 * string pada dekCrossLinks / committeeFindings / approvalRegister.
 */

import { BASELINE_TRUST } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { DimensionDataTrust } from "./dimension-menu";

/* ══════════════════════════════════════════════════════════════════════
   TIPE BERSAMA ANTAR-HALAMAN DEWAN KOMISARIS
   ══════════════════════════════════════════════════════════════════════ */

export type DekTone = "green" | "blue" | "teal" | "amber" | "red" | "purple";

/** KPI mini untuk strip tiap halaman (bentuk mengikuti EsgPageKpi). */
export interface DekKpi {
  label: string;
  value: string;
  /** Sufiks kecil di samping nilai, mis. "/100" atau " hari". */
  valueSuffix?: string;
  sub: string;
  delta?: string;
  trend?: "up" | "down";
  deltaTone?: "good" | "bad";
  tone: DekTone;
}

/** Pasangan temuan pengawasan → tindak pengawasan di kartu bawah halaman. */
export interface DekInsight {
  insight: string;
  /** Bernada pengawasan: minta penjelasan, pantau, tegaskan tenggat. */
  tindakPengawasan: string;
}

/** Status baku tindak lanjut rekomendasi & butir risalah. */
export type DekFollowUpStatus = "Selesai" | "Berjalan" | "Overdue";

/** Bidang pengawasan baku — dipakai radar fokus, tema agenda, tema rekomendasi. */
export type DekOversightArea =
  | "Kinerja & Strategi"
  | "Keuangan"
  | "Manajemen Risiko"
  | "Kepatuhan & GCG"
  | "SDM & Suksesi"
  | "Keberlanjutan";

/** Direktorat pengelola tindak lanjut (selaras struktur Direksi Holding). */
export type DekDirektorat =
  | "Operasi"
  | "Keuangan"
  | "SDM & Umum"
  | "Digital & TI"
  | "Hukum & Manajemen Aset"
  | "Pemasaran";

/** Tautan silang ke dimensi lain — UI merender sebagai next/link. */
export interface DekCrossLink {
  label: string;
  href: string;
  /** Alasan tautan dari sudut pandang pengawasan. */
  konteks: string;
}

export const DEK_STATUS_COLOR: Record<DekFollowUpStatus, string> = {
  Selesai: PALETTE.green,
  Berjalan: PALETTE.amber,
  Overdue: PALETTE.red,
};

/* ══════════════════════════════════════════════════════════════════════
   1. EXECUTIVE OVERVIEW (/dewan-komisaris)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 1a. Data Trust ───────────────────────────────────────────────── */

export const dekDataTrust: DimensionDataTrust = {
  asOf: BASELINE_TRUST.asOf,
  lastRefresh: BASELINE_TRUST.lastRefresh,
  coverage: "95,2%",
  quality: "94,4%",
  sources: ["Sekretariat Dewan Komisaris", "e-Risalah", "Portal GCG", "Laporan Manajemen"],
};

/* ── 1b. KPI Strip — 7 indikator pengawasan ───────────────────────── */

export const dekKpi: DekKpi[] = [
  {
    label: "Rapat Dewan Komisaris",
    value: "12", // = DEKOM.rapatDekomYtd
    valueSuffix: " rapat",
    sub: "YTD · ditambah 5 rapat gabungan dengan Direksi",
    delta: "+2 rapat",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Kehadiran Anggota",
    value: "94%", // = DEKOM.kehadiranRataPct
    sub: "Rata-rata 6 anggota · rapat Dekom & komite (113/120 kehadiran)",
    delta: "+3 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Rekomendasi Diterbitkan",
    value: "68", // = DEKOM.rekomendasiYtd
    sub: "YTD · 51 selesai · 8 berjalan · 9 overdue",
    delta: "+11",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Tindak Lanjut Tepat Waktu",
    value: "75%",
    sub: "51 dari 68 rekomendasi ditutup dalam tenggat",
    delta: "-4 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Skor Evaluasi Direksi",
    value: "87,4", // = DEKOM.skorEvaluasiDireksi = STRATEGI.skorKpiKorporat
    valueSuffix: "/100",
    sub: "Kategori Baik · basis 32 KPI korporat, 4 berstatus merah",
    delta: "+0,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Persetujuan Menunggu",
    value: "4", // = DEKOM.persetujuanMenunggu
    valueSuffix: " dari 22",
    sub: "Permohonan YTD · 2 telah melewati SLA tanggapan 14 hari",
    delta: "+2",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Skor GCG",
    value: "92,1", // = DEKOM.skorGcg
    valueSuffix: "/100",
    sub: "Asesmen SK-16 BUMN · aspek Dewan Komisaris 93,4",
    delta: "+1,2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
];

/* ── 1c. Oversight Intelligence — 3 narasi bernada pengawasan ─────── */

export interface DekIntelligenceItem {
  title: string;
  narasi: string;
  /** Langkah pengawasan yang menyusul, bukan keputusan eksekusi. */
  tindakPengawasan: string;
  /** Route tujuan bila narasi merujuk data dimensi lain. */
  href?: string;
  tone: "red" | "amber" | "blue";
}

export const dekIntelligence: DekIntelligenceItem[] = [
  {
    title: "Konsentrasi Rekomendasi Overdue di Direktorat Operasi",
    narasi:
      "9 rekomendasi overdue terkonsentrasi pada Direktorat Operasi (4 dari 9, rata-rata 47 hari melewati tenggat) — perlu penegasan tenggat pada Radirkom Juli.",
    tindakPengawasan:
      "Mintakan penjelasan tertulis Direktur Operasi atas hambatan tiap butir dan tetapkan tenggat baru yang mengikat dalam risalah Radirkom Juli.",
    tone: "red",
  },
  {
    title: "Keputusan Direksi Overdue Belum Berbalas Laporan",
    narasi:
      "3 keputusan Direksi overdue di /strategi-kinerja/keputusan-bod belum berbalas laporan tindak lanjut kepada Dewan Komisaris, padahal dua di antaranya beririsan dengan persetujuan yang pernah diberikan Dekom.",
    tindakPengawasan:
      "Agendakan pembahasan khusus pada rapat gabungan Juni dan minta Direksi menyampaikan laporan progres tertulis paling lambat 10 hari sebelum rapat.",
    href: "/strategi-kinerja/keputusan-bod",
    tone: "amber",
  },
  {
    title: "Antrean Tanggapan Tertulis atas Aksi Korporasi",
    narasi:
      "Empat usulan aksi korporasi menunggu tanggapan tertulis Dewan Komisaris, dua di antaranya melewati SLA 14 hari (21 dan 17 hari berjalan) — keterlambatan Dekom sendiri, bukan Direksi.",
    tindakPengawasan:
      "Percepat sirkulasi kertas kerja komite terkait dan tetapkan rapat sirkuler untuk dua permohonan yang telah lewat SLA.",
    tone: "red",
  },
];

/* ── 1d. Oversight Focus Radar — 6 bidang pengawasan ──────────────── */

export interface DekFocusAxis {
  axis: DekOversightArea;
  /** Skor perhatian pengawasan 0-100 (bobot perhatian Dekom periode berjalan). */
  perhatian: number;
  /** Intensitas pembahasan 0-100 (porsi waktu & jumlah agenda rapat). */
  intensitas: number;
}

/**
 * Perhatian tinggi + intensitas rendah = bidang yang perlu ditambah porsi
 * agendanya; sebaliknya menandakan pembahasan sudah proporsional.
 */
export const oversightFocusRadar: DekFocusAxis[] = [
  { axis: "Kinerja & Strategi", perhatian: 92, intensitas: 88 },
  { axis: "Keuangan", perhatian: 88, intensitas: 84 },
  { axis: "Manajemen Risiko", perhatian: 84, intensitas: 72 },
  { axis: "Kepatuhan & GCG", perhatian: 80, intensitas: 76 },
  { axis: "SDM & Suksesi", perhatian: 68, intensitas: 54 },
  { axis: "Keberlanjutan", perhatian: 62, intensitas: 46 },
];

/* ── 1e. Follow-Up Trend — 12 bulan terbit vs ditindaklanjuti ─────── */

export interface DekFollowUpPoint {
  bulan: string;
  /** Rekomendasi baru diterbitkan Dewan Komisaris pada bulan tersebut. */
  terbit: number;
  /** Rekomendasi ditutup (tindak lanjut Direksi diterima & memadai). */
  ditindaklanjuti: number;
}

/**
 * Jan–Mei 2026 menjumlah tepat 68 terbit dan 51 ditindaklanjuti
 * (= DEKOM.rekomendasiYtd & DEKOM.rekomendasiSelesai). Jun–Des 2025
 * adalah sisa siklus pengawasan tahun buku 2025.
 */
export const followUpTrend: DekFollowUpPoint[] = [
  { bulan: "Jun 25", terbit: 6, ditindaklanjuti: 5 },
  { bulan: "Jul 25", terbit: 7, ditindaklanjuti: 6 },
  { bulan: "Agu 25", terbit: 5, ditindaklanjuti: 6 },
  { bulan: "Sep 25", terbit: 6, ditindaklanjuti: 5 },
  { bulan: "Okt 25", terbit: 7, ditindaklanjuti: 7 },
  { bulan: "Nov 25", terbit: 6, ditindaklanjuti: 8 },
  { bulan: "Des 25", terbit: 5, ditindaklanjuti: 9 },
  { bulan: "Jan 26", terbit: 14, ditindaklanjuti: 12 },
  { bulan: "Feb 26", terbit: 15, ditindaklanjuti: 11 },
  { bulan: "Mar 26", terbit: 13, ditindaklanjuti: 10 },
  { bulan: "Apr 26", terbit: 14, ditindaklanjuti: 10 },
  { bulan: "Mei 26", terbit: 12, ditindaklanjuti: 8 },
];

/* ── 1f. Kehadiran per Anggota Dewan Komisaris ────────────────────── */

export interface DekMemberAttendance {
  /** Jabatan generik — identitas orang tidak ditampilkan di dashboard. */
  nama: string;
  /** Penugasan komite; "—" bila tidak merangkap. */
  komite: string;
  hadirDekom: number;
  totalDekom: number;
  hadirKomite: number;
  totalKomite: number;
  /** Kehadiran gabungan Dekom + komite (string ber-format Indonesia). */
  kehadiranPct: string;
  tone: "green" | "amber" | "red";
}

/**
 * Gabungan 113 kehadiran dari 120 undangan = 94,2% ≈ DEKOM.kehadiranRataPct
 * (94%). Total rapat komite 24 = 10 Audit + 8 MR & GCG + 6 Nomrem.
 */
export const attendanceByMember: DekMemberAttendance[] = [
  {
    nama: "Komisaris Utama",
    komite: "Anggota Komite Nominasi & Remunerasi",
    hadirDekom: 12,
    totalDekom: 12,
    hadirKomite: 6,
    totalKomite: 6,
    kehadiranPct: "100%",
    tone: "green",
  },
  {
    nama: "Komisaris Independen 1",
    komite: "Ketua Komite Audit",
    hadirDekom: 12,
    totalDekom: 12,
    hadirKomite: 10,
    totalKomite: 10,
    kehadiranPct: "100%",
    tone: "green",
  },
  {
    nama: "Komisaris Independen 2",
    komite: "Ketua Komite Manajemen Risiko & GCG",
    hadirDekom: 11,
    totalDekom: 12,
    hadirKomite: 8,
    totalKomite: 8,
    kehadiranPct: "95,0%",
    tone: "green",
  },
  {
    nama: "Komisaris 1",
    komite: "Ketua Komite Nominasi & Remunerasi",
    hadirDekom: 11,
    totalDekom: 12,
    hadirKomite: 6,
    totalKomite: 6,
    kehadiranPct: "94,4%",
    tone: "green",
  },
  {
    nama: "Komisaris 2",
    komite: "Anggota Komite Audit",
    hadirDekom: 11,
    totalDekom: 12,
    hadirKomite: 9,
    totalKomite: 10,
    kehadiranPct: "90,9%",
    tone: "amber",
  },
  {
    nama: "Komisaris 3",
    komite: "Anggota Komite Manajemen Risiko & GCG",
    hadirDekom: 10,
    totalDekom: 12,
    hadirKomite: 7,
    totalKomite: 8,
    kehadiranPct: "85,0%",
    tone: "amber",
  },
];

/* ── 1g. Alerts Pengawasan ────────────────────────────────────────── */

export interface DekAlert {
  title: string;
  text: string;
  time: string;
  tone: "red" | "amber" | "green" | "blue";
}

export const dekAlerts: DekAlert[] = [
  {
    title: "Dua Permohonan Persetujuan Lewat SLA Dekom",
    text: "Divestasi aset non-produktif PTPN I (21 hari) dan refinancing Rp 4 T (17 hari) melewati SLA tanggapan tertulis 14 hari — keterlambatan berada di sisi Dewan Komisaris.",
    time: "Hari ini",
    tone: "red",
  },
  {
    title: "9 Rekomendasi Melewati Tenggat",
    text: "Empat di Direktorat Operasi, dua di Keuangan, sisanya tersebar; rata-rata keterlambatan 47 hari dengan dua butir di atas 90 hari.",
    time: "1 hari yang lalu",
    tone: "red",
  },
  {
    title: "Risalah Rapat Gabungan Mei Belum Terbit",
    text: "Dua risalah masih berstatus tertunda melewati batas 14 hari kerja; kepatuhan penerbitan risalah turun ke 89%.",
    time: "3 hari yang lalu",
    tone: "amber",
  },
  {
    title: "Laporan Manajemen Triwulan I Diterima Tepat Waktu",
    text: "Laporan Direksi triwulan I beserta lampiran KPI korporat diterima Sekretariat Dekom sesuai tenggat; kepatuhan pelaporan Direksi YTD 96%.",
    time: "1 minggu yang lalu",
    tone: "green",
  },
];

/* ── 1h. Agenda Pengawasan Terdekat ───────────────────────────────── */

export interface DekAgendaNextItem {
  tanggal: string;
  forum: string;
  agenda: string;
  /** Materi yang diminta Dewan Komisaris dari Direksi sebelum rapat. */
  materiDiminta: string;
  tone: "red" | "amber" | "blue";
}

export const dekAgendaNext: DekAgendaNextItem[] = [
  {
    tanggal: "18 Jun 2026",
    forum: "Rapat Gabungan Dekom–Direksi",
    agenda: "Evaluasi kinerja semester I & pembahasan 4 KPI korporat berstatus merah",
    materiDiminta: "Laporan manajemen Mei, scorecard KPI korporat, dan rencana perbaikan per KPI merah",
    tone: "red",
  },
  {
    tanggal: "25 Jun 2026",
    forum: "Rapat Dewan Komisaris",
    agenda: "Tanggapan tertulis atas empat permohonan persetujuan yang menunggu",
    materiDiminta: "Kertas kerja Komite Audit & Komite Manajemen Risiko atas keempat usulan",
    tone: "red",
  },
  {
    tanggal: "02 Jul 2026",
    forum: "Komite Audit",
    agenda: "Pemantauan tindak lanjut temuan BPK & SPI yang overdue",
    materiDiminta: "Matriks tindak lanjut temuan per unit beserta bukti penyelesaian",
    tone: "amber",
  },
  {
    tanggal: "09 Jul 2026",
    forum: "Radirkom (Rapat Direksi–Komisaris)",
    agenda: "Penegasan tenggat baru 9 rekomendasi overdue",
    materiDiminta: "Penjelasan tertulis per direktorat atas hambatan dan usulan tenggat baru",
    tone: "red",
  },
  {
    tanggal: "16 Jul 2026",
    forum: "Komite Nominasi & Remunerasi",
    agenda: "Review peta suksesi manajemen kunci & talent pool",
    materiDiminta: "Daftar posisi kritikal, kesiapan kandidat, dan rencana pengembangan",
    tone: "blue",
  },
];

/* ── 1i. Insight & Tindak Pengawasan ──────────────────────────────── */

export const dekInsights: DekInsight[] = [
  {
    insight:
      "Tingkat penyelesaian rekomendasi 75% dengan rata-rata umur penyelesaian 32 hari, namun 17 butir masih terbuka dan lima di antaranya berumur lebih dari 60 hari — pola keterlambatan terkonsentrasi, bukan menyebar.",
    tindakPengawasan:
      "Fokuskan pemantauan pada Direktorat Operasi dan Keuangan; minta laporan progres dua mingguan sampai backlog di bawah 5 butir.",
  },
  {
    insight:
      "Intensitas pembahasan bidang SDM & Suksesi (54) dan Keberlanjutan (46) tertinggal jauh dari skor perhatian pengawasannya (68 dan 62) — dua bidang ini kurang porsi agenda dibanding bobot risikonya.",
    tindakPengawasan:
      "Alokasikan satu sesi khusus per triwulan untuk suksesi dan keberlanjutan pada kalender rapat semester II.",
  },
  {
    insight:
      "Kepatuhan penerbitan risalah 89% dan dua risalah tertunda menghambat mulainya penghitungan tenggat tindak lanjut — keterlambatan administratif ikut memperlambat siklus pengawasan.",
    tindakPengawasan:
      "Tegaskan tenggat internal 10 hari kerja bagi Sekretariat Dekom dan laporkan status penerbitan risalah pada setiap pembukaan rapat.",
  },
  {
    insight:
      "Kehadiran gabungan 94% sehat, tetapi dua anggota di bawah 91% dan keduanya merangkap keanggotaan komite dengan kadensi rapat terpadat.",
    tindakPengawasan:
      "Tinjau ulang penjadwalan rapat komite agar tidak berimpit dan pantau kehadiran per anggota tiap triwulan.",
  },
];

/* ── 1j. Tautan Silang ke Dimensi Lain ────────────────────────────── */

export const dekCrossLinks: DekCrossLink[] = [
  {
    label: "Keputusan Direksi & Dewan Komisaris",
    href: "/strategi-kinerja/keputusan-bod",
    konteks:
      "Register 46 keputusan BOD YTD beserta 3 keputusan overdue dan agenda Radirkom — sumber pemantauan tindak lanjut Direksi.",
  },
  {
    label: "KPI Korporat & Scorecard",
    href: "/strategi-kinerja/kpi-korporat",
    konteks:
      "32 KPI korporat dengan 4 berstatus merah — menjadi dasar penilaian kinerja Direksi oleh Dewan Komisaris.",
  },
  {
    label: "Audit & Temuan",
    href: "/risiko-kepatuhan/audit-temuan",
    konteks:
      "Temuan BPK & SPI beserta status tindak lanjutnya — bahan pemantauan Komite Audit.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   2. AGENDA & RISALAH RAPAT (/dewan-komisaris/agenda-risalah)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 2a. KPI Strip ────────────────────────────────────────────────── */

export const agendaKpi: DekKpi[] = [
  {
    label: "Rapat Dewan Komisaris",
    value: "12", // = DEKOM.rapatDekomYtd
    valueSuffix: " rapat",
    sub: "YTD · rata-rata 2,4 rapat per bulan",
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Rapat Gabungan dengan Direksi",
    value: "5", // = DEKOM.rapatGabunganDireksiYtd
    valueSuffix: " rapat",
    sub: "Radirkom · forum penyampaian rekomendasi & laporan Direksi",
    delta: "+1",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Rapat Komite",
    value: "24", // = DEKOM.rapatKomiteYtd
    valueSuffix: " rapat",
    sub: "10 Komite Audit · 8 Manajemen Risiko & GCG · 6 Nomrem",
    delta: "+4",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Kehadiran Rata-rata",
    value: "94%", // = DEKOM.kehadiranRataPct
    sub: "6 anggota · 113 kehadiran dari 120 undangan",
    delta: "+3 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Risalah Terbit ≤ 14 Hari",
    value: "89%",
    sub: "32 dari 36 risalah terbit tepat waktu · 5 belum terbit",
    delta: "-5 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Agenda Mendatang",
    value: "5",
    valueSuffix: " agenda",
    sub: "Hingga 16 Jul 2026 · 3 memerlukan materi dari Direksi",
    tone: "blue",
  },
];

/* ── 2b. Kalender Rapat 2026 ──────────────────────────────────────── */

export type DekMeetingType = "Dekom" | "Gabungan" | "Komite";
export type DekRisalahStatus = "Terbit" | "Draft" | "Tertunda";

export interface DekMeetingRow {
  tanggal: string;
  jenis: DekMeetingType;
  agendaUtama: string;
  /** Kehadiran rapat tersebut (format Indonesia). */
  kehadiran: string;
  statusRisalah: DekRisalahStatus;
  /** Hari kerja dari tanggal rapat sampai risalah terbit; null bila belum. */
  hariTerbit: number | null;
}

/**
 * 12 rapat terpilih dari 41 rapat YTD 2026 (12 Dekom + 5 gabungan +
 * 24 komite) — mewakili tiap jenis forum dan tiap bulan berjalan.
 */
export const meetingCalendar: DekMeetingRow[] = [
  { tanggal: "15 Jan 2026", jenis: "Dekom", agendaUtama: "Penetapan program kerja pengawasan & rencana kerja komite 2026", kehadiran: "100%", statusRisalah: "Terbit", hariTerbit: 7 },
  { tanggal: "29 Jan 2026", jenis: "Komite", agendaUtama: "Komite Audit — rencana kerja SPI 2026 & cakupan PKPT", kehadiran: "100%", statusRisalah: "Terbit", hariTerbit: 6 },
  { tanggal: "12 Feb 2026", jenis: "Gabungan", agendaUtama: "Radirkom — pembahasan RKAP 2026 & asumsi harga CPO", kehadiran: "91,7%", statusRisalah: "Terbit", hariTerbit: 9 },
  { tanggal: "26 Feb 2026", jenis: "Dekom", agendaUtama: "Penetapan KPI Direksi 2026 & bobot per perspektif", kehadiran: "100%", statusRisalah: "Terbit", hariTerbit: 8 },
  { tanggal: "12 Mar 2026", jenis: "Komite", agendaUtama: "Komite Manajemen Risiko & GCG — review risk appetite dan limit breach aktif", kehadiran: "100%", statusRisalah: "Terbit", hariTerbit: 10 },
  { tanggal: "26 Mar 2026", jenis: "Dekom", agendaUtama: "Tanggapan tertulis atas usulan divestasi aset non-produktif PTPN I", kehadiran: "83,3%", statusRisalah: "Terbit", hariTerbit: 12 },
  { tanggal: "09 Apr 2026", jenis: "Gabungan", agendaUtama: "Radirkom — laporan manajemen triwulan I & capaian KPI korporat", kehadiran: "100%", statusRisalah: "Terbit", hariTerbit: 11 },
  { tanggal: "23 Apr 2026", jenis: "Komite", agendaUtama: "Komite Audit — tindak lanjut temuan BPK & SPI berstatus terbuka", kehadiran: "87,5%", statusRisalah: "Terbit", hariTerbit: 9 },
  { tanggal: "07 Mei 2026", jenis: "Dekom", agendaUtama: "Evaluasi tindak lanjut rekomendasi berstatus overdue", kehadiran: "91,7%", statusRisalah: "Terbit", hariTerbit: 13 },
  { tanggal: "14 Mei 2026", jenis: "Komite", agendaUtama: "Komite Nominasi & Remunerasi — struktur remunerasi & indikator penilaian Direksi", kehadiran: "100%", statusRisalah: "Draft", hariTerbit: null },
  { tanggal: "21 Mei 2026", jenis: "Gabungan", agendaUtama: "Radirkom — usulan refinancing Rp 4 T & dampaknya pada struktur permodalan", kehadiran: "91,7%", statusRisalah: "Tertunda", hariTerbit: null },
  { tanggal: "28 Mei 2026", jenis: "Dekom", agendaUtama: "Pembahasan usulan JV bioetanol & permintaan penjelasan asumsi kelayakan", kehadiran: "83,3%", statusRisalah: "Tertunda", hariTerbit: null },
];

/* ── 2c. Distribusi Tema Agenda ───────────────────────────────────── */

export interface DekAgendaThemeRow {
  tema: DekOversightArea | "Lain-lain";
  /** Jumlah butir agenda YTD. */
  jumlah: number;
  /** Porsi terhadap 96 butir agenda (format Indonesia). */
  porsi: string;
  color: string;
}

/** Total 96 butir agenda dari 41 rapat YTD. */
export const agendaByTheme: DekAgendaThemeRow[] = [
  { tema: "Kinerja & Strategi", jumlah: 28, porsi: "29,2%", color: PALETTE.green },
  { tema: "Keuangan", jumlah: 21, porsi: "21,9%", color: PALETTE.blue },
  { tema: "Manajemen Risiko", jumlah: 17, porsi: "17,7%", color: PALETTE.amber },
  { tema: "Kepatuhan & GCG", jumlah: 12, porsi: "12,5%", color: PALETTE.purple },
  { tema: "SDM & Suksesi", jumlah: 10, porsi: "10,4%", color: PALETTE.teal },
  { tema: "Keberlanjutan", jumlah: 5, porsi: "5,2%", color: PALETTE.pink },
  { tema: "Lain-lain", jumlah: 3, porsi: "3,1%", color: PALETTE.slate },
];

/* ── 2d. Status Risalah & SLA ─────────────────────────────────────── */

export interface DekRisalahStatusRow {
  status: DekRisalahStatus;
  jumlah: number;
  porsi: string;
  /** Keterangan SLA penerbitan risalah (14 hari kerja sejak rapat). */
  catatanSla: string;
  color: string;
}

/** 41 risalah = 36 terbit + 3 draft + 2 tertunda. */
export const risalahStatus: DekRisalahStatusRow[] = [
  {
    status: "Terbit",
    jumlah: 36,
    porsi: "87,8%",
    catatanSla: "32 terbit ≤ 14 hari kerja (89%); 4 terbit terlambat 15–21 hari",
    color: PALETTE.green,
  },
  {
    status: "Draft",
    jumlah: 3,
    porsi: "7,3%",
    catatanSla: "Masih dalam sirkulasi tanda tangan, seluruhnya di bawah batas 14 hari",
    color: PALETTE.amber,
  },
  {
    status: "Tertunda",
    jumlah: 2,
    porsi: "4,9%",
    catatanSla: "Melewati 14 hari kerja — menahan mulainya penghitungan tenggat tindak lanjut",
    color: PALETTE.red,
  },
];

/* ── 2e. Butir Tindak Lanjut dari Risalah ─────────────────────────── */

export interface DekActionItemRow {
  periode: string;
  total: number;
  selesai: number;
  terbuka: number;
  /** Persentase penyelesaian (format Indonesia). */
  penyelesaian: string;
}

/** Total 214 butir = 168 selesai + 46 terbuka. */
export const actionItemsFromMinutes: DekActionItemRow[] = [
  { periode: "Q3 2025", total: 46, selesai: 44, terbuka: 2, penyelesaian: "95,7%" },
  { periode: "Q4 2025", total: 52, selesai: 48, terbuka: 4, penyelesaian: "92,3%" },
  { periode: "Q1 2026", total: 62, selesai: 50, terbuka: 12, penyelesaian: "80,6%" },
  { periode: "Q2 2026 (s.d. Mei)", total: 54, selesai: 26, terbuka: 28, penyelesaian: "48,1%" },
];

export const actionItemsNote =
  "214 butir tindak lanjut lahir dari risalah rapat: 168 selesai, 46 terbuka. Butir Q2 2026 masih berjalan wajar karena tenggat rata-rata 45 hari; yang perlu diawasi adalah 6 butir sisa dari Q3–Q4 2025 yang telah berumur lebih dari dua triwulan.";

/* ── 2f. Agenda Mendatang & Materi yang Diminta ───────────────────── */

export interface DekUpcomingAgendaRow {
  tanggal: string;
  forum: string;
  agenda: string;
  /** Materi yang diminta dari Direksi beserta tenggat penyerahan. */
  materiDiminta: string;
  tenggatMateri: string;
  statusMateri: "Diterima" | "Menunggu" | "Terlambat";
}

export const upcomingAgenda: DekUpcomingAgendaRow[] = [
  {
    tanggal: "18 Jun 2026",
    forum: "Rapat Gabungan Dekom–Direksi",
    agenda: "Evaluasi kinerja semester I & pembahasan 4 KPI korporat berstatus merah",
    materiDiminta: "Laporan manajemen Mei, scorecard KPI korporat, rencana perbaikan per KPI merah",
    tenggatMateri: "08 Jun 2026",
    statusMateri: "Menunggu",
  },
  {
    tanggal: "25 Jun 2026",
    forum: "Rapat Dewan Komisaris",
    agenda: "Tanggapan tertulis atas empat permohonan persetujuan yang menunggu",
    materiDiminta: "Kertas kerja komite, kajian kelayakan, dan opini konsultan independen",
    tenggatMateri: "15 Jun 2026",
    statusMateri: "Terlambat",
  },
  {
    tanggal: "02 Jul 2026",
    forum: "Komite Audit",
    agenda: "Pemantauan tindak lanjut temuan BPK & SPI yang masih terbuka",
    materiDiminta: "Matriks tindak lanjut temuan per unit beserta bukti penyelesaian",
    tenggatMateri: "24 Jun 2026",
    statusMateri: "Menunggu",
  },
  {
    tanggal: "09 Jul 2026",
    forum: "Radirkom (Rapat Direksi–Komisaris)",
    agenda: "Penegasan tenggat baru atas 9 rekomendasi berstatus overdue",
    materiDiminta: "Penjelasan tertulis per direktorat atas hambatan dan usulan tenggat baru",
    tenggatMateri: "01 Jul 2026",
    statusMateri: "Menunggu",
  },
  {
    tanggal: "16 Jul 2026",
    forum: "Komite Nominasi & Remunerasi",
    agenda: "Review peta suksesi manajemen kunci & kesiapan talent pool",
    materiDiminta: "Daftar posisi kritikal, kesiapan kandidat, dan rencana pengembangan",
    tenggatMateri: "08 Jul 2026",
    statusMateri: "Diterima",
  },
];

/* ── 2g. Tren Kehadiran 12 Bulan ──────────────────────────────────── */

export interface DekAttendancePoint {
  bulan: string;
  /** Kehadiran rapat Dekom & gabungan (%). */
  dekom: number;
  /** Kehadiran rapat komite (%). */
  komite: number;
}

/** Rata-rata YTD 2026 gabungan kedua seri ≈ 94% (DEKOM.kehadiranRataPct). */
export const attendanceTrend: DekAttendancePoint[] = [
  { bulan: "Jun 25", dekom: 88, komite: 90 },
  { bulan: "Jul 25", dekom: 90, komite: 92 },
  { bulan: "Agu 25", dekom: 89, komite: 88 },
  { bulan: "Sep 25", dekom: 91, komite: 92 },
  { bulan: "Okt 25", dekom: 92, komite: 94 },
  { bulan: "Nov 25", dekom: 90, komite: 93 },
  { bulan: "Des 25", dekom: 93, komite: 95 },
  { bulan: "Jan 26", dekom: 100, komite: 100 },
  { bulan: "Feb 26", dekom: 96, komite: 96 },
  { bulan: "Mar 26", dekom: 92, komite: 100 },
  { bulan: "Apr 26", dekom: 96, komite: 92 },
  { bulan: "Mei 26", dekom: 89, komite: 96 },
];

/* ── 2h. Insight & Tindak Pengawasan ──────────────────────────────── */

export const agendaInsights: DekInsight[] = [
  {
    insight:
      "Dua risalah Mei berstatus tertunda melewati batas 14 hari kerja, keduanya untuk rapat yang membahas aksi korporasi bernilai besar — tenggat tindak lanjut Direksi belum dapat mulai dihitung.",
    tindakPengawasan:
      "Minta Sekretariat Dekom menuntaskan kedua risalah sebelum rapat 18 Juni dan laporkan status penerbitan pada setiap pembukaan rapat.",
  },
  {
    insight:
      "Bidang keberlanjutan hanya menempati 5 dari 96 butir agenda (5,2%) dan tidak pernah menjadi mata agenda utama, padahal risiko regulasi pasar ekspor terus menguat.",
    tindakPengawasan:
      "Tetapkan mata agenda keberlanjutan tersendiri minimal satu kali per triwulan pada kalender rapat semester II.",
  },
  {
    insight:
      "Materi rapat 25 Juni berstatus terlambat, sedangkan agendanya adalah tanggapan atas empat permohonan yang dua di antaranya sudah lewat SLA — keterlambatan materi memperpanjang keterlambatan tanggapan.",
    tindakPengawasan:
      "Sampaikan surat permintaan materi kepada Direksi dengan tenggat tegas dan salinan kepada Sekretaris Perusahaan.",
  },
  {
    insight:
      "Kehadiran rapat Dekom Mei turun ke 89%, titik terendah dalam enam bulan, bertepatan dengan tiga rapat dalam satu bulan yang berimpit dengan jadwal komite.",
    tindakPengawasan:
      "Sebarkan jadwal rapat semester II lebih awal dan hindari penumpukan lebih dari dua forum dalam satu pekan.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   3. REKOMENDASI & TINDAK LANJUT (/dewan-komisaris/rekomendasi)
   ══════════════════════════════════════════════════════════════════════ */

/* ── 3a. KPI Strip ────────────────────────────────────────────────── */

export const rekomendasiKpi: DekKpi[] = [
  {
    label: "Rekomendasi Diterbitkan",
    value: "68", // = DEKOM.rekomendasiYtd
    sub: "YTD · lahir dari 12 rapat Dekom, 5 gabungan, dan 24 rapat komite",
    delta: "+11",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Selesai Ditindaklanjuti",
    value: "51", // = DEKOM.rekomendasiSelesai
    valueSuffix: " (75%)",
    sub: "Tindak lanjut Direksi diterima dan dinilai memadai",
    delta: "+9",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Sedang Berjalan",
    value: "8",
    sub: "Masih dalam tenggat · rata-rata sisa waktu 19 hari",
    tone: "blue",
  },
  {
    label: "Melewati Tenggat",
    value: "9", // = DEKOM.rekomendasiOverdue
    sub: "Rata-rata 47 hari terlambat · 4 di Direktorat Operasi",
    delta: "+3",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Rata Umur Penyelesaian",
    value: "32",
    valueSuffix: " hari",
    sub: "Dari terbit rekomendasi sampai tindak lanjut dinilai memadai",
    delta: "-4 hari",
    trend: "down",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 3b. Register Rekomendasi ─────────────────────────────────────── */

export interface DekRecommendationRow {
  id: string;
  tanggal: string;
  bidang: DekOversightArea;
  /** Isi rekomendasi diringkas satu kalimat, bernada pengawasan. */
  isi: string;
  pic: DekDirektorat;
  tenggat: string;
  status: DekFollowUpStatus;
  /** Hari melewati tenggat; null bila belum/tidak overdue. */
  terlambatHari: number | null;
}

/** 15 rekomendasi terkini dari 68 YTD (4 selesai, 3 berjalan, 8 overdue di sampel). */
export const recommendationRegister: DekRecommendationRow[] = [
  { id: "REK-2026-068", tanggal: "28 Mei 2026", bidang: "Kinerja & Strategi", isi: "Sampaikan penjelasan tertulis atas asumsi kelayakan JV bioetanol sebelum tanggapan Dekom diberikan", pic: "Keuangan", tenggat: "18 Jun 2026", status: "Berjalan", terlambatHari: null },
  { id: "REK-2026-065", tanggal: "21 Mei 2026", bidang: "Keuangan", isi: "Uraikan dampak refinancing terhadap struktur permodalan dan kovenan pinjaman berjalan", pic: "Keuangan", tenggat: "12 Jun 2026", status: "Berjalan", terlambatHari: null },
  { id: "REK-2026-061", tanggal: "14 Mei 2026", bidang: "SDM & Suksesi", isi: "Lengkapi peta suksesi posisi kritikal beserta kesiapan kandidat pengganti", pic: "SDM & Umum", tenggat: "30 Jun 2026", status: "Berjalan", terlambatHari: null },
  { id: "REK-2026-058", tanggal: "07 Mei 2026", bidang: "Kinerja & Strategi", isi: "Laporkan rencana perbaikan atas KPI rendemen gula yang berstatus merah dua triwulan berturut", pic: "Operasi", tenggat: "31 Mei 2026", status: "Overdue", terlambatHari: 15 },
  { id: "REK-2026-054", tanggal: "23 Apr 2026", bidang: "Kepatuhan & GCG", isi: "Percepat penutupan temuan audit yang telah melewati tenggat tindak lanjut", pic: "Keuangan", tenggat: "24 Mei 2026", status: "Overdue", terlambatHari: 22 },
  { id: "REK-2026-051", tanggal: "16 Apr 2026", bidang: "Manajemen Risiko", isi: "Sampaikan rencana pemulihan atas limit risk appetite yang terlampaui beserta tenggatnya", pic: "Keuangan", tenggat: "20 Mei 2026", status: "Overdue", terlambatHari: 26 },
  { id: "REK-2026-047", tanggal: "09 Apr 2026", bidang: "Kinerja & Strategi", isi: "Jelaskan penyebab deviasi capaian RKAP triwulan I dan langkah pengejaran semester II", pic: "Operasi", tenggat: "10 Mei 2026", status: "Overdue", terlambatHari: 36 },
  { id: "REK-2026-044", tanggal: "02 Apr 2026", bidang: "Manajemen Risiko", isi: "Perkuat pengendalian kepatuhan SLA patching sistem inti dan laporkan progres bulanan", pic: "Digital & TI", tenggat: "05 Mei 2026", status: "Overdue", terlambatHari: 41 },
  { id: "REK-2026-040", tanggal: "26 Mar 2026", bidang: "Kinerja & Strategi", isi: "Laporkan progres restrukturisasi pabrik gula non-kompetitif beserta dampak sosialnya", pic: "Operasi", tenggat: "24 Apr 2026", status: "Overdue", terlambatHari: 52 },
  { id: "REK-2026-036", tanggal: "19 Mar 2026", bidang: "Kepatuhan & GCG", isi: "Tuntaskan inventarisasi legalitas aset yang menjadi prasyarat tanggapan Dekom atas divestasi", pic: "Hukum & Manajemen Aset", tenggat: "17 Apr 2026", status: "Overdue", terlambatHari: 59 },
  { id: "REK-2026-031", tanggal: "12 Mar 2026", bidang: "Kinerja & Strategi", isi: "Sampaikan laporan bulanan capaian produksi per regional dengan format yang seragam", pic: "Operasi", tenggat: "10 Apr 2026", status: "Overdue", terlambatHari: 66 },
  { id: "REK-2026-027", tanggal: "26 Feb 2026", bidang: "Keuangan", isi: "Perbaiki disiplin penyerapan capex agar tidak menumpuk pada semester II", pic: "Keuangan", tenggat: "27 Mar 2026", status: "Selesai", terlambatHari: null },
  { id: "REK-2026-021", tanggal: "12 Feb 2026", bidang: "Keberlanjutan", isi: "Laporkan kesiapan pemenuhan persyaratan keberlanjutan pasar ekspor utama", pic: "Pemasaran", tenggat: "13 Mar 2026", status: "Selesai", terlambatHari: null },
  { id: "REK-2026-014", tanggal: "29 Jan 2026", bidang: "Kepatuhan & GCG", isi: "Selaraskan rencana kerja audit internal dengan peta risiko korporat 2026", pic: "Keuangan", tenggat: "27 Feb 2026", status: "Selesai", terlambatHari: null },
  { id: "REK-2026-006", tanggal: "15 Jan 2026", bidang: "SDM & Suksesi", isi: "Sampaikan struktur organisasi pasca-integrasi beserta rentang kendali tiap direktorat", pic: "SDM & Umum", tenggat: "16 Feb 2026", status: "Selesai", terlambatHari: null },
];

/* ── 3c. Distribusi per Direktorat ────────────────────────────────── */

export interface DekByDirektoratRow {
  direktorat: DekDirektorat;
  selesai: number;
  berjalan: number;
  overdue: number;
  total: number;
  /** Tingkat penyelesaian (format Indonesia). */
  penyelesaian: string;
}

/** Kolom menjumlah tepat 51 selesai + 8 berjalan + 9 overdue = 68. */
export const byDirektorat: DekByDirektoratRow[] = [
  { direktorat: "Operasi", selesai: 12, berjalan: 2, overdue: 4, total: 18, penyelesaian: "66,7%" },
  { direktorat: "Keuangan", selesai: 11, berjalan: 2, overdue: 2, total: 15, penyelesaian: "73,3%" },
  { direktorat: "SDM & Umum", selesai: 8, berjalan: 1, overdue: 1, total: 10, penyelesaian: "80,0%" },
  { direktorat: "Hukum & Manajemen Aset", selesai: 8, berjalan: 1, overdue: 1, total: 10, penyelesaian: "80,0%" },
  { direktorat: "Digital & TI", selesai: 6, berjalan: 1, overdue: 1, total: 8, penyelesaian: "75,0%" },
  { direktorat: "Pemasaran", selesai: 6, berjalan: 1, overdue: 0, total: 7, penyelesaian: "85,7%" },
];

/* ── 3d. Distribusi per Tema Pengawasan ───────────────────────────── */

export interface DekByThemeRow {
  tema: DekOversightArea;
  jumlah: number;
  porsi: string;
  color: string;
}

/** Menjumlah 68 rekomendasi YTD. */
export const byTheme: DekByThemeRow[] = [
  { tema: "Kinerja & Strategi", jumlah: 18, porsi: "26,5%", color: PALETTE.green },
  { tema: "Manajemen Risiko", jumlah: 14, porsi: "20,6%", color: PALETTE.amber },
  { tema: "Kepatuhan & GCG", jumlah: 12, porsi: "17,6%", color: PALETTE.purple },
  { tema: "Keuangan", jumlah: 10, porsi: "14,7%", color: PALETTE.blue },
  { tema: "SDM & Suksesi", jumlah: 8, porsi: "11,8%", color: PALETTE.teal },
  { tema: "Keberlanjutan", jumlah: 6, porsi: "8,8%", color: PALETTE.pink },
];

/* ── 3e. Rincian 9 Rekomendasi Overdue ────────────────────────────── */

export interface DekOverdueRow {
  id: string;
  isi: string;
  pic: DekDirektorat;
  tenggat: string;
  terlambatHari: number;
  /** Dampak keterlambatan dari sudut pandang pengawasan. */
  dampak: string;
  /** Langkah eskalasi Dekom, bukan langkah eksekusi Direksi. */
  eskalasi: string;
}

/** Sembilan butir ini = DEKOM.rekomendasiOverdue. */
export const overdueDetail: DekOverdueRow[] = [
  {
    id: "REK-2026-031",
    isi: "Sampaikan laporan bulanan capaian produksi per regional dengan format yang seragam",
    pic: "Operasi",
    tenggat: "10 Apr 2026",
    terlambatHari: 66,
    dampak: "Pemantauan kinerja operasional Dekom masih bertumpu pada format berbeda antar regional sehingga tidak dapat diperbandingkan.",
    eskalasi: "Surat teguran kepada Direktur Operasi dengan tembusan Direktur Utama; tenggat baru ditetapkan dalam Radirkom Juli.",
  },
  {
    id: "REK-2026-036",
    isi: "Tuntaskan inventarisasi legalitas aset yang menjadi prasyarat tanggapan Dekom atas divestasi",
    pic: "Hukum & Manajemen Aset",
    tenggat: "17 Apr 2026",
    terlambatHari: 59,
    dampak: "Menahan tanggapan tertulis Dekom atas permohonan divestasi yang kini sudah 21 hari berjalan.",
    eskalasi: "Jadikan agenda tetap rapat Dekom sampai tuntas; minta laporan progres dua mingguan.",
  },
  {
    id: "REK-2026-040",
    isi: "Laporkan progres restrukturisasi pabrik gula non-kompetitif beserta dampak sosialnya",
    pic: "Operasi",
    tenggat: "24 Apr 2026",
    terlambatHari: 52,
    dampak: "Dekom tidak memiliki dasar memadai untuk menilai kelayakan usulan restrukturisasi yang akan diajukan.",
    eskalasi: "Minta paparan khusus Direktur Operasi pada rapat gabungan 18 Juni.",
  },
  {
    id: "REK-2026-044",
    isi: "Perkuat pengendalian kepatuhan SLA patching sistem inti dan laporkan progres bulanan",
    pic: "Digital & TI",
    tenggat: "05 Mei 2026",
    terlambatHari: 41,
    dampak: "Risiko siber tetap berada di atas ambang selera risiko tanpa laporan progres berkala kepada Dekom.",
    eskalasi: "Limpahkan pemantauan ke Komite Manajemen Risiko & GCG dengan laporan bulanan.",
  },
  {
    id: "REK-2026-047",
    isi: "Jelaskan penyebab deviasi capaian RKAP triwulan I dan langkah pengejaran semester II",
    pic: "Operasi",
    tenggat: "10 Mei 2026",
    terlambatHari: 36,
    dampak: "Penilaian kinerja Direksi semester I berjalan tanpa penjelasan resmi atas deviasi triwulan I.",
    eskalasi: "Jadikan prasyarat pembahasan evaluasi semester I pada rapat gabungan 18 Juni.",
  },
  {
    id: "REK-2026-051",
    isi: "Sampaikan rencana pemulihan atas limit risk appetite yang terlampaui beserta tenggatnya",
    pic: "Keuangan",
    tenggat: "20 Mei 2026",
    terlambatHari: 26,
    dampak: "Limit yang terlampaui berjalan tanpa rencana pemulihan yang disetujui, memperpanjang paparan risiko.",
    eskalasi: "Komite Manajemen Risiko & GCG memanggil pemilik risiko pada rapat Juli.",
  },
  {
    id: "REK-2026-054",
    isi: "Percepat penutupan temuan audit yang telah melewati tenggat tindak lanjut",
    pic: "Keuangan",
    tenggat: "24 Mei 2026",
    terlambatHari: 22,
    dampak: "Temuan berulang berpotensi muncul kembali pada pemeriksaan berikutnya dan menekan skor GCG.",
    eskalasi: "Komite Audit menetapkan pemantauan dua mingguan sampai temuan overdue nihil.",
  },
  {
    id: "REK-2026-058",
    isi: "Laporkan rencana perbaikan atas KPI rendemen gula yang berstatus merah dua triwulan berturut",
    pic: "Operasi",
    tenggat: "31 Mei 2026",
    terlambatHari: 15,
    dampak: "Salah satu dari 4 KPI merah berjalan tanpa rencana perbaikan tertulis yang dapat dipantau Dekom.",
    eskalasi: "Masukkan sebagai butir wajib pada evaluasi kinerja Direksi semester I.",
  },
  {
    id: "REK-2026-024",
    isi: "Lengkapi laporan pemantauan penyelesaian sengketa lahan beserta target penyelesaian per regional",
    pic: "SDM & Umum",
    tenggat: "15 Apr 2026",
    terlambatHari: 61,
    dampak: "Kemajuan penyelesaian sengketa tidak dapat diukur terhadap target, padahal KPI terkait berstatus merah.",
    eskalasi: "Minta laporan gabungan dengan Direktorat Hukum & Manajemen Aset pada rapat Juli.",
  },
];

/* ── 3f. Aging Rekomendasi Terbuka ────────────────────────────────── */

export interface DekAgingBucket {
  bucket: "< 30 hari" | "30–60 hari" | "60–90 hari" | "> 90 hari";
  jumlah: number;
  porsi: string;
  color: string;
}

/** 17 rekomendasi terbuka = 8 berjalan + 9 overdue. */
export const agingBuckets: DekAgingBucket[] = [
  { bucket: "< 30 hari", jumlah: 7, porsi: "41,2%", color: PALETTE.green },
  { bucket: "30–60 hari", jumlah: 5, porsi: "29,4%", color: PALETTE.amber },
  { bucket: "60–90 hari", jumlah: 3, porsi: "17,6%", color: PALETTE.red },
  { bucket: "> 90 hari", jumlah: 2, porsi: "11,8%", color: PALETTE.navy },
];

/* ── 3g. Tren Penyelesaian Kumulatif 12 Bulan ─────────────────────── */

export interface DekClosurePoint {
  bulan: string;
  /** Kumulatif rekomendasi terbit dalam tahun buku berjalan. */
  terbitKumulatif: number;
  /** Kumulatif rekomendasi selesai dalam tahun buku berjalan. */
  selesaiKumulatif: number;
}

/**
 * Kumulatif direset per tahun buku: Des 2025 menutup siklus 2025
 * (74 terbit / 66 selesai), lalu Jan 2026 mulai dari nol. Titik Mei 2026
 * = 68 / 51, tepat sama dengan DEKOM.rekomendasiYtd & rekomendasiSelesai.
 */
export const closureTrend: DekClosurePoint[] = [
  { bulan: "Jun 25", terbitKumulatif: 38, selesaiKumulatif: 26 },
  { bulan: "Jul 25", terbitKumulatif: 45, selesaiKumulatif: 32 },
  { bulan: "Agu 25", terbitKumulatif: 50, selesaiKumulatif: 38 },
  { bulan: "Sep 25", terbitKumulatif: 56, selesaiKumulatif: 43 },
  { bulan: "Okt 25", terbitKumulatif: 63, selesaiKumulatif: 50 },
  { bulan: "Nov 25", terbitKumulatif: 69, selesaiKumulatif: 58 },
  { bulan: "Des 25", terbitKumulatif: 74, selesaiKumulatif: 66 },
  { bulan: "Jan 26", terbitKumulatif: 14, selesaiKumulatif: 12 },
  { bulan: "Feb 26", terbitKumulatif: 29, selesaiKumulatif: 23 },
  { bulan: "Mar 26", terbitKumulatif: 42, selesaiKumulatif: 33 },
  { bulan: "Apr 26", terbitKumulatif: 56, selesaiKumulatif: 43 },
  { bulan: "Mei 26", terbitKumulatif: 68, selesaiKumulatif: 51 },
];

/* ── 3h. Insight & Tindak Pengawasan ──────────────────────────────── */

export const rekomendasiInsights: DekInsight[] = [
  {
    insight:
      "Direktorat Operasi menyumbang 18 dari 68 rekomendasi dengan tingkat penyelesaian terendah (66,7%) dan 4 dari 9 butir overdue — beban pengawasan dan keterlambatan berada pada direktorat yang sama.",
    tindakPengawasan:
      "Tetapkan Direktorat Operasi sebagai fokus pemantauan semester II dengan laporan progres dua mingguan kepada Sekretariat Dekom.",
  },
  {
    insight:
      "Selisih kumulatif terbit dan selesai melebar dari 2 butir (Januari) menjadi 17 butir (Mei); laju penerbitan rekomendasi 13,6 per bulan melampaui laju penutupan 10,2 per bulan.",
    tindakPengawasan:
      "Batasi penerbitan rekomendasi baru pada butir bermateri signifikan dan prioritaskan penutupan backlog sebelum menambah beban baru.",
  },
  {
    insight:
      "Dua rekomendasi terbuka telah melewati 90 hari dan keduanya menjadi prasyarat bagi tanggapan Dekom atas permohonan persetujuan yang sedang menunggu — keterlambatan tindak lanjut berantai ke keterlambatan persetujuan.",
    tindakPengawasan:
      "Tautkan pemantauan kedua butir dengan antrean persetujuan agar penutupannya dijadwalkan sebelum rapat 25 Juni.",
  },
  {
    insight:
      "Rata-rata umur penyelesaian membaik ke 32 hari (dari 36 hari), menandakan butir yang mudah memang ditutup cepat sementara butir sulit menua di bucket 60 hari ke atas.",
    tindakPengawasan:
      "Bedakan pemantauan butir rutin dan butir struktural; butir struktural dipantau langsung di forum komite terkait.",
  },
];
