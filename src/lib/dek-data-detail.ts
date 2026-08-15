/**
 * Data statis dimensi Dewan Komisaris — bagian kedua (/dewan-komisaris).
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * File ini memuat halaman Komite Dewan Komisaris, Evaluasi Kinerja Direksi,
 * dan Persetujuan & Kewenangan. Tiga halaman pertama (Executive Overview,
 * Agenda & Risalah, Rekomendasi & Tindak Lanjut) beserta seluruh tipe
 * bersama ada di dek-data.ts.
 *
 * Nada data tetap pengawasan: komite memantau dan mempertanyakan, evaluasi
 * menilai dan meminta penjelasan, persetujuan berupa tanggapan tertulis atas
 * usulan Direksi — bukan instruksi eksekusi.
 *
 * Angka kanonik mengutip src/lib/group-baseline.ts (DEKOM, STRATEGI).
 * Angka milik dimensi lain hanya ditautkan lewat route string.
 */

import { PALETTE } from "./chart-palette";
import type { DekDirektorat, DekInsight, DekKpi } from "./dek-data";

/* ══════════════════════════════════════════════════════════════════════
   4. KOMITE DEWAN KOMISARIS (/dewan-komisaris/komite)
   ══════════════════════════════════════════════════════════════════════ */

/** Tiga komite di bawah Dewan Komisaris (= DEKOM.komite). */
export type DekCommitteeName =
  | "Komite Audit"
  | "Komite Manajemen Risiko & GCG"
  | "Komite Nominasi & Remunerasi";

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const komiteKpi: DekKpi[] = [
  {
    label: "Komite Dewan Komisaris",
    value: "3", // = DEKOM.komite
    valueSuffix: " komite",
    sub: "Audit · Manajemen Risiko & GCG · Nominasi & Remunerasi",
    tone: "blue",
  },
  {
    label: "Rapat Komite",
    value: "24", // = DEKOM.rapatKomiteYtd
    valueSuffix: " rapat",
    sub: "YTD · 10 Audit · 8 Manajemen Risiko & GCG · 6 Nomrem",
    delta: "+4",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
  {
    label: "Kursi Keanggotaan",
    value: "11",
    valueSuffix: " kursi",
    sub: "6 kursi rangkap anggota Dekom · 5 profesional independen non-Dekom",
    tone: "purple",
  },
  {
    label: "Rekomendasi dari Komite",
    value: "39",
    valueSuffix: " dari 68",
    sub: "57,4% rekomendasi Dekom berasal dari kertas kerja komite",
    delta: "+8",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Penyelesaian Program Kerja",
    value: "78%",
    sub: "32 dari 41 program kerja tahunan terealisasi s.d. Mei",
    delta: "-4 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "amber",
  },
];

/* ── 4b. Profil Tiga Komite ───────────────────────────────────────── */

export interface DekCommitteeProfile {
  komite: DekCommitteeName;
  /** Jabatan generik ketua — selalu anggota Dewan Komisaris. */
  ketua: string;
  /** Susunan anggota beserta porsi pihak independen non-Dekom. */
  anggota: string;
  kursi: number;
  anggotaIndependenNonDekom: number;
  rapatYtd: number;
  fokus2026: string;
  output: string;
  color: string;
}

/** Rapat 10 + 8 + 6 = 24 (DEKOM.rapatKomiteYtd); kursi 4 + 4 + 3 = 11. */
export const committees: DekCommitteeProfile[] = [
  {
    komite: "Komite Audit",
    ketua: "Komisaris Independen 1",
    anggota: "Komisaris 2 (anggota Dekom) + 2 profesional independen bidang akuntansi & audit",
    kursi: 4,
    anggotaIndependenNonDekom: 2,
    rapatYtd: 10,
    fokus2026:
      "Pemantauan tindak lanjut temuan pemeriksaan eksternal & internal, kualitas laporan keuangan, dan efektivitas pengendalian internal.",
    output:
      "16 kertas kerja pemantauan temuan, 1 telaah kewajaran laporan keuangan tahunan, dan 18 rekomendasi kepada Dewan Komisaris.",
    color: PALETTE.blue,
  },
  {
    komite: "Komite Manajemen Risiko & GCG",
    ketua: "Komisaris Independen 2",
    anggota: "Komisaris 3 (anggota Dekom) + 2 profesional independen bidang manajemen risiko & tata kelola",
    kursi: 4,
    anggotaIndependenNonDekom: 2,
    rapatYtd: 8,
    fokus2026:
      "Pemantauan selera risiko dan limit yang terlampaui, kesiapan mitigasi risiko komoditas & iklim, serta pemeliharaan skor GCG di atas 90.",
    output:
      "8 kertas kerja telaah risiko, 1 asesmen mandiri penerapan GCG, dan 13 rekomendasi kepada Dewan Komisaris.",
    color: PALETTE.amber,
  },
  {
    komite: "Komite Nominasi & Remunerasi",
    ketua: "Komisaris 1",
    anggota: "Komisaris Utama (anggota Dekom) + 1 profesional independen bidang manajemen SDM",
    kursi: 3,
    anggotaIndependenNonDekom: 1,
    rapatYtd: 6,
    fokus2026:
      "Penelaahan indikator penilaian Direksi, kewajaran struktur remunerasi, dan kesiapan suksesi manajemen kunci.",
    output:
      "6 kertas kerja telaah, 1 usulan indikator penilaian Direksi 2026, dan 8 rekomendasi kepada Dewan Komisaris.",
    color: PALETTE.teal,
  },
];

/* ── 4c. Progres Program Kerja Tahunan ────────────────────────────── */

export interface DekWorkPlanRow {
  komite: DekCommitteeName;
  /** Program kerja yang direncanakan dalam program kerja tahunan komite. */
  rencana: number;
  realisasi: number;
  capaian: string;
  /** Program yang tertinggal beserta alasannya. */
  catatan: string;
  color: string;
}

/** 41 program direncanakan, 32 terealisasi = 78,0% (KPI penyelesaian). */
export const workPlanProgress: DekWorkPlanRow[] = [
  {
    komite: "Komite Audit",
    rencana: 18,
    realisasi: 15,
    capaian: "83,3%",
    catatan: "3 program kunjungan pemantauan lapangan tertunda karena berimpit dengan jadwal pemeriksaan eksternal.",
    color: PALETTE.blue,
  },
  {
    komite: "Komite Manajemen Risiko & GCG",
    rencana: 14,
    realisasi: 10,
    capaian: "71,4%",
    catatan: "4 program telaah risiko tertahan menunggu data mitigasi dari Direktorat terkait.",
    color: PALETTE.amber,
  },
  {
    komite: "Komite Nominasi & Remunerasi",
    rencana: 9,
    realisasi: 7,
    capaian: "77,8%",
    catatan: "2 program telaah suksesi menunggu pemutakhiran peta talenta manajemen kunci.",
    color: PALETTE.teal,
  },
];

export const workPlanNote =
  "Capaian gabungan 32 dari 41 program (78,0%) berada di bawah prorata 41,7% dikali dua siklus; seluruh program yang tertinggal terhambat ketersediaan data dari Direksi, bukan kapasitas komite.";

/* ── 4d. Temuan & Rekomendasi Utama per Komite ────────────────────── */

export interface DekCommitteeFinding {
  komite: DekCommitteeName;
  judul: string;
  /** Uraian temuan/pemantauan komite dengan nada pengawasan. */
  uraian: string;
  /** Pertanyaan atau permintaan yang diajukan komite kepada Direksi. */
  permintaan: string;
  /** Route dimensi sumber datanya — UI merender sebagai next/link. */
  href: string;
  hrefLabel: string;
  tone: "red" | "amber" | "blue";
}

export const committeeFindings: DekCommitteeFinding[] = [
  {
    komite: "Komite Audit",
    judul: "Temuan Pemeriksaan Eksternal & Internal Belum Tuntas",
    uraian:
      "Sebagian temuan pemeriksaan BPK dan SPI masih berstatus terbuka melewati tenggat tindak lanjut, dengan pola temuan berulang pada dokumentasi pengadaan dan rekonsiliasi piutang plasma.",
    permintaan:
      "Komite meminta matriks tindak lanjut per unit beserta bukti penyelesaian dan menetapkan pemantauan dua mingguan sampai temuan overdue nihil.",
    href: "/risiko-kepatuhan/audit-temuan",
    hrefLabel: "Audit & Temuan",
    tone: "red",
  },
  {
    komite: "Komite Audit",
    judul: "Cakupan Rencana Pemeriksaan Internal Tertinggal",
    uraian:
      "Realisasi rencana pemeriksaan internal belum sebanding dengan sisa auditable unit di semester II, sehingga beban pemeriksaan menumpuk bersamaan musim giling.",
    permintaan:
      "Komite meminta penjelasan Kepala SPI atas penjadwalan ulang dan menilai kecukupan sumber daya audit internal.",
    href: "/risiko-kepatuhan/audit-temuan",
    hrefLabel: "Audit & Temuan",
    tone: "amber",
  },
  {
    komite: "Komite Manajemen Risiko & GCG",
    judul: "Empat Limit Selera Risiko Terlampaui",
    uraian:
      "Terdapat 4 limit risk appetite dalam kondisi terlampaui, dua di antaranya telah melewati batas waktu remediasi yang ditetapkan dalam kerangka manajemen risiko.",
    permintaan:
      "Komite meminta rencana pemulihan tertulis per limit beserta tenggatnya, dan memanggil pemilik risiko pada rapat komite berikutnya.",
    href: "/risiko-kepatuhan/risk-appetite",
    hrefLabel: "Risk Appetite & Limit",
    tone: "red",
  },
  {
    komite: "Komite Manajemen Risiko & GCG",
    judul: "Kesenjangan Kematangan Manajemen Risiko",
    uraian:
      "Tingkat kematangan penerapan manajemen risiko korporat masih berada di bawah target internal, terutama pada integrasi risiko ke dalam proses pengambilan keputusan investasi.",
    permintaan:
      "Komite meminta peta jalan peningkatan kematangan beserta indikator kemajuan triwulanan yang dapat dipantau Dewan Komisaris.",
    href: "/risiko-kepatuhan/mitigasi-erm",
    hrefLabel: "Mitigasi & ERM",
    tone: "amber",
  },
  {
    komite: "Komite Nominasi & Remunerasi",
    judul: "Kesiapan Suksesi Posisi Kritikal Belum Memadai",
    uraian:
      "Peta suksesi manajemen kunci belum lengkap untuk seluruh posisi kritikal; sebagian posisi hanya memiliki satu kandidat berkategori siap.",
    permintaan:
      "Komite meminta pemutakhiran peta suksesi beserta rencana pengembangan kandidat sebelum rapat Juli 2026.",
    href: "/succession-planning",
    hrefLabel: "Succession Planning",
    tone: "amber",
  },
  {
    komite: "Komite Nominasi & Remunerasi",
    judul: "Keterkaitan Remunerasi dengan Capaian KPI",
    uraian:
      "Struktur remunerasi variabel Direksi belum sepenuhnya sensitif terhadap KPI yang berstatus merah, sehingga sinyal kinerja belum tercermin penuh pada imbalan.",
    permintaan:
      "Komite meminta simulasi dampak capaian KPI terhadap komponen variabel sebagai bahan telaah Dewan Komisaris.",
    href: "/strategi-kinerja/kpi-korporat",
    hrefLabel: "KPI Korporat & Scorecard",
    tone: "blue",
  },
];

/* ── 4e. Kadensi Rapat Komite 12 Bulan ────────────────────────────── */

export interface DekCadencePoint {
  bulan: string;
  audit: number;
  risikoGcg: number;
  nomrem: number;
}

/**
 * Jan–Mei 2026 menjumlah tepat 10 + 8 + 6 = 24 (DEKOM.rapatKomiteYtd).
 * Jun–Des 2025 adalah sisa siklus 2025.
 */
export const meetingCadence: DekCadencePoint[] = [
  { bulan: "Jun 25", audit: 1, risikoGcg: 1, nomrem: 1 },
  { bulan: "Jul 25", audit: 2, risikoGcg: 1, nomrem: 0 },
  { bulan: "Agu 25", audit: 1, risikoGcg: 1, nomrem: 1 },
  { bulan: "Sep 25", audit: 2, risikoGcg: 1, nomrem: 0 },
  { bulan: "Okt 25", audit: 1, risikoGcg: 2, nomrem: 1 },
  { bulan: "Nov 25", audit: 2, risikoGcg: 1, nomrem: 1 },
  { bulan: "Des 25", audit: 1, risikoGcg: 1, nomrem: 1 },
  { bulan: "Jan 26", audit: 2, risikoGcg: 2, nomrem: 1 },
  { bulan: "Feb 26", audit: 2, risikoGcg: 1, nomrem: 1 },
  { bulan: "Mar 26", audit: 2, risikoGcg: 2, nomrem: 2 },
  { bulan: "Apr 26", audit: 2, risikoGcg: 1, nomrem: 1 },
  { bulan: "Mei 26", audit: 2, risikoGcg: 2, nomrem: 1 },
];

/* ── 4f. Insight & Tindak Pengawasan ──────────────────────────────── */

export const komiteInsights: DekInsight[] = [
  {
    insight:
      "Komite menghasilkan 39 dari 68 rekomendasi Dewan Komisaris (57,4%) — kerja komite, bukan rapat pleno, yang menjadi mesin utama pengawasan.",
    tindakPengawasan:
      "Pertahankan kertas kerja komite sebagai prasyarat pembahasan pleno agar rapat Dekom berfokus pada penetapan sikap, bukan penggalian data.",
  },
  {
    insight:
      "Komite Manajemen Risiko & GCG memiliki capaian program kerja terendah (71,4%) dan empat program yang tertahan seluruhnya menunggu data mitigasi dari Direktorat terkait.",
    tindakPengawasan:
      "Sampaikan permintaan data tertulis dengan tenggat tegas dan laporkan keterlambatan pemenuhan data pada rapat gabungan berikutnya.",
  },
  {
    insight:
      "Lima dari sebelas kursi komite diisi profesional independen non-Dekom, memberi kedalaman teknis pada telaah audit dan risiko tanpa menambah beban anggota Dewan Komisaris.",
    tindakPengawasan:
      "Tinjau kecukupan komposisi keahlian tiap komite pada awal siklus 2027, khususnya keahlian keberlanjutan yang belum terwakili.",
  },
  {
    insight:
      "Kadensi rapat Komite Audit dua kali per bulan sejak Januari sudah padat, sementara Komite Nominasi & Remunerasi hanya enam rapat YTD padahal menyimpan temuan suksesi yang belum tuntas.",
    tindakPengawasan:
      "Tambah satu rapat Komite Nominasi & Remunerasi per triwulan pada semester II khusus untuk pemantauan suksesi.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   5. EVALUASI KINERJA DIREKSI (/dewan-komisaris/evaluasi-direksi)
   ══════════════════════════════════════════════════════════════════════ */

/**
 * Basis penilaian adalah scorecard KPI korporat di /strategi-kinerja/kpi-korporat
 * (32 KPI, 4 berstatus merah). Halaman ini TIDAK menduplikasi matriks KPI —
 * ia menilai, mempertanyakan, dan memantau kepatuhan pelaporan Direksi.
 */
export const evaluasiSumberCatatan =
  "Seluruh angka capaian pada halaman ini bersumber dari scorecard KPI korporat (32 KPI, 4 berstatus merah) di /strategi-kinerja/kpi-korporat. Dewan Komisaris tidak menyusun ukuran tandingan; peran Dekom adalah menilai kewajaran capaian, meminta penjelasan atas deviasi, dan memantau tindak lanjutnya.";

export const evaluasiSumberHref = "/strategi-kinerja/kpi-korporat";

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const evaluasiKpi: DekKpi[] = [
  {
    label: "Skor Kolektif Direksi",
    value: "87,4", // = DEKOM.skorEvaluasiDireksi = STRATEGI.skorKpiKorporat
    valueSuffix: "/100",
    sub: "Kategori Baik · komposit berbobot 4 perspektif scorecard",
    delta: "+0,6 pts",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "KPI Berstatus Merah",
    value: "4",
    valueSuffix: " dari 32",
    sub: "Dua di Direktorat Operasi · masing-masing memerlukan penjelasan tertulis",
    delta: "+1",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Skor Direktorat Terendah",
    value: "84,2",
    valueSuffix: "/100",
    sub: "Direktorat Operasi · mengelola 8 KPI dengan 2 berstatus merah",
    delta: "-1,4 pts",
    trend: "down",
    deltaTone: "bad",
    tone: "amber",
  },
  {
    label: "Capaian RKAP YTD",
    value: "42,1%",
    sub: "Pendapatan Rp 24,6 T dari RKAP FY Rp 58,4 T · prorata 41,7%",
    delta: "+0,4 pts",
    trend: "up",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Kepatuhan Pelaporan Direksi",
    value: "96%",
    sub: "24 dari 25 laporan wajib diterima Dekom tepat waktu",
    delta: "+2 pts",
    trend: "up",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 5b. Scorecard Kolektif — 4 Perspektif ────────────────────────── */

export interface DekPerspectiveRow {
  perspektif: "Keuangan" | "Operasional" | "SDM & Organisasi" | "Stakeholder & ESG";
  skor: number;
  /** Bobot pada skor komposit (%). */
  bobot: number;
  /** Catatan pengawasan Dewan Komisaris atas perspektif ini. */
  catatanPengawasan: string;
  color: string;
}

/**
 * Skor dan bobot identik dengan `perspectives` di skc-data.ts agar tidak ada
 * angka tandingan; komposit berbobot = skor korporat 87,4.
 */
export const collectiveScorecard: DekPerspectiveRow[] = [
  {
    perspektif: "Keuangan",
    skor: 89,
    bobot: 35,
    catatanPengawasan:
      "Capaian pendapatan sedikit di atas prorata, namun penyerapan belanja modal jauh tertinggal — Dekom meminta penjelasan atas risiko penumpukan penyerapan pada semester II.",
    color: PALETTE.green,
  },
  {
    perspektif: "Operasional",
    skor: 86,
    bobot: 30,
    catatanPengawasan:
      "Dua KPI berstatus merah berasal dari perspektif ini dan keduanya berulang dari triwulan sebelumnya — Dekom mempertanyakan efektivitas langkah perbaikan yang telah dijalankan.",
    color: PALETTE.blue,
  },
  {
    perspektif: "SDM & Organisasi",
    skor: 88,
    bobot: 15,
    catatanPengawasan:
      "Capaian memadai, tetapi kesiapan suksesi posisi kritikal belum tercermin sebagai ukuran tersendiri dalam scorecard.",
    color: PALETTE.teal,
  },
  {
    perspektif: "Stakeholder & ESG",
    skor: 85,
    bobot: 20,
    catatanPengawasan:
      "Skor terendah dari empat perspektif; Dekom meminta pemetaan risiko regulasi pasar ekspor dan dampaknya terhadap target tahun berjalan.",
    color: PALETTE.amber,
  },
];

/* ── 5c. Penilaian per Direktorat ─────────────────────────────────── */

export interface DekDirektoratScoreRow {
  direktorat: DekDirektorat;
  skor: number;
  /** Jumlah KPI korporat yang menjadi tanggung jawab direktorat. */
  kpiDikelola: number;
  kpiMerah: number;
  /** Catatan pengawasan — pengamatan, bukan instruksi. */
  catatanPengawasan: string;
  tone: "green" | "amber" | "red";
}

/**
 * Rata-rata enam skor = 87,4 (skor kolektif). KPI dikelola menjumlah 32 dan
 * KPI merah menjumlah 4 — selaras scorecard di /strategi-kinerja/kpi-korporat.
 */
export const byDirektoratScore: DekDirektoratScoreRow[] = [
  {
    direktorat: "Pemasaran",
    skor: 90.3,
    kpiDikelola: 4,
    kpiMerah: 0,
    catatanPengawasan: "Seluruh KPI terpenuhi; Dekom memantau ketahanan capaian terhadap volatilitas harga komoditas pada semester II.",
    tone: "green",
  },
  {
    direktorat: "Keuangan",
    skor: 89.6,
    kpiDikelola: 7,
    kpiMerah: 1,
    catatanPengawasan: "Satu KPI marjin segmen berstatus merah; Dekom meminta penjelasan atas keterkaitannya dengan kinerja operasional hulu.",
    tone: "green",
  },
  {
    direktorat: "SDM & Umum",
    skor: 88.1,
    kpiDikelola: 5,
    kpiMerah: 0,
    catatanPengawasan: "Capaian stabil; Dekom mempertanyakan mengapa kesiapan suksesi belum masuk sebagai KPI korporat.",
    tone: "green",
  },
  {
    direktorat: "Digital & TI",
    skor: 86.4,
    kpiDikelola: 4,
    kpiMerah: 0,
    catatanPengawasan: "Tidak ada KPI merah, namun kepatuhan SLA pengamanan sistem menjadi rekomendasi Dekom yang masih overdue.",
    tone: "amber",
  },
  {
    direktorat: "Hukum & Manajemen Aset",
    skor: 85.8,
    kpiDikelola: 4,
    kpiMerah: 1,
    catatanPengawasan: "KPI penyelesaian sengketa lahan berstatus merah dan sekaligus menahan proses persetujuan divestasi yang menunggu.",
    tone: "amber",
  },
  {
    direktorat: "Operasi",
    skor: 84.2,
    kpiDikelola: 8,
    kpiMerah: 2,
    catatanPengawasan: "Skor terendah dengan dua KPI merah berulang; Dekom meminta paparan khusus pada rapat gabungan Juni.",
    tone: "red",
  },
];

/* ── 5d. Pemantauan 4 KPI Berstatus Merah ─────────────────────────── */

export interface DekRedKpiWatchRow {
  kpi: string;
  direktorat: DekDirektorat;
  /** Ringkas capaian vs target; angka rinci ada di skc-data. */
  ringkasanGap: string;
  /** Pertanyaan pengawasan yang perlu diajukan Dekom — bukan keputusan. */
  pertanyaanPengawasan: string;
  /** Forum tempat pertanyaan diajukan. */
  forum: string;
  /** Sudah berapa triwulan berstatus merah. */
  triwulanMerah: number;
}

/** Empat KPI ini identik dengan `redFocus` di skc-data.ts. */
export const redKpiWatch: DekRedKpiWatchRow[] = [
  {
    kpi: "Rendemen Gula",
    direktorat: "Operasi",
    ringkasanGap: "Di bawah target dengan selisih yang melebar sejak awal musim giling.",
    pertanyaanPengawasan:
      "Sejauh mana perbaikan varietas dan jeda tebang-giling telah dijalankan, dan mengapa dampaknya belum terlihat pada capaian dua triwulan berturut?",
    forum: "Rapat Gabungan Dekom–Direksi, 18 Jun 2026",
    triwulanMerah: 2,
  },
  {
    kpi: "HPP Gula",
    direktorat: "Operasi",
    ringkasanGap: "Melampaui batas atas target biaya pokok yang ditetapkan dalam RKAP.",
    pertanyaanPengawasan:
      "Berapa bagian selisih biaya yang bersifat struktural pada pabrik non-kompetitif, dan kapan hasil kajian restrukturisasi dapat disampaikan kepada Dewan Komisaris?",
    forum: "Rapat Gabungan Dekom–Direksi, 18 Jun 2026",
    triwulanMerah: 3,
  },
  {
    kpi: "EBITDA Margin SGN",
    direktorat: "Keuangan",
    ringkasanGap: "Marjin segmen gula berada jauh di bawah target tahun berjalan.",
    pertanyaanPengawasan:
      "Apakah asumsi pemulihan marjin pada semester II masih realistis mengingat capaian rendemen dan biaya pokok yang belum membaik?",
    forum: "Komite Audit, 02 Jul 2026",
    triwulanMerah: 2,
  },
  {
    kpi: "Penyelesaian Sengketa Lahan",
    direktorat: "Hukum & Manajemen Aset",
    ringkasanGap: "Realisasi penyelesaian kurang dari separuh target semester berjalan.",
    pertanyaanPengawasan:
      "Apa hambatan utama yang membuat laju penyelesaian tertinggal, dan bagaimana dampaknya terhadap usulan divestasi yang kini menunggu tanggapan Dewan Komisaris?",
    forum: "Rapat Dewan Komisaris, 25 Jun 2026",
    triwulanMerah: 4,
  },
];

/* ── 5e. Tren Skor 8 Kuartal ──────────────────────────────────────── */

export interface DekScoreTrendPoint {
  kuartal: string;
  /** Skor kolektif Direksi = skor KPI korporat Group. */
  skor: number;
  /** Ambang kategori "Baik" pada pedoman penilaian. */
  ambangBaik: number;
}

/** Nilai identik kolom `group` pada `scoreTrend` di skc-data.ts. */
export const scoreTrend: DekScoreTrendPoint[] = [
  { kuartal: "Q3 24", skor: 83.1, ambangBaik: 80 },
  { kuartal: "Q4 24", skor: 84.0, ambangBaik: 80 },
  { kuartal: "Q1 25", skor: 84.6, ambangBaik: 80 },
  { kuartal: "Q2 25", skor: 85.2, ambangBaik: 80 },
  { kuartal: "Q3 25", skor: 85.9, ambangBaik: 80 },
  { kuartal: "Q4 25", skor: 86.4, ambangBaik: 80 },
  { kuartal: "Q1 26", skor: 86.8, ambangBaik: 80 },
  { kuartal: "Q2 26", skor: 87.4, ambangBaik: 80 },
];

/* ── 5f. Kepatuhan Pelaporan Direksi kepada Dekom ─────────────────── */

export interface DekReportingRow {
  jenisLaporan: string;
  /** Jumlah laporan yang wajib disampaikan YTD. */
  wajib: number;
  diterima: number;
  tepatWaktu: number;
  ketepatan: string;
  catatan: string;
}

/** 25 laporan wajib, 24 tepat waktu = 96% (KPI kepatuhan pelaporan). */
export const reportingCompliance: DekReportingRow[] = [
  {
    jenisLaporan: "Laporan Manajemen Bulanan",
    wajib: 5,
    diterima: 5,
    tepatWaktu: 5,
    ketepatan: "100%",
    catatan: "Seluruh laporan Januari–Mei diterima sebelum tanggal 15 bulan berikutnya.",
  },
  {
    jenisLaporan: "Laporan Manajemen Triwulanan",
    wajib: 1,
    diterima: 1,
    tepatWaktu: 1,
    ketepatan: "100%",
    catatan: "Laporan triwulan I beserta lampiran scorecard KPI korporat diterima sesuai tenggat.",
  },
  {
    jenisLaporan: "Laporan Khusus atas Permintaan Dekom",
    wajib: 6,
    diterima: 6,
    tepatWaktu: 5,
    ketepatan: "83,3%",
    catatan: "Satu laporan mengenai deviasi capaian RKAP triwulan I terlambat 12 hari.",
  },
  {
    jenisLaporan: "Tanggapan atas Rekomendasi Dewan Komisaris",
    wajib: 13,
    diterima: 13,
    tepatWaktu: 13,
    ketepatan: "100%",
    catatan: "Tanggapan formal selalu tepat waktu; yang tertinggal adalah realisasi tindak lanjutnya.",
  },
];

export const reportingNote =
  "Kepatuhan formal pelaporan tinggi (96%), tetapi ketepatan waktu tanggapan tidak berbanding lurus dengan penyelesaian tindak lanjut — 17 rekomendasi masih terbuka meski seluruh tanggapan formalnya diterima tepat waktu.";

/* ── 5g. Kalender Siklus Evaluasi ─────────────────────────────────── */

export interface DekEvaluationStage {
  tahap: string;
  periode: string;
  /** Keluaran tahap tersebut. */
  keluaran: string;
  status: "Selesai" | "Berjalan" | "Belum Mulai";
  penanggungJawab: string;
}

export const evaluationCalendar: DekEvaluationStage[] = [
  {
    tahap: "Penetapan KPI Direksi",
    periode: "Jan – Feb 2026",
    keluaran: "Kontrak manajemen & bobot 4 perspektif disepakati Dewan Komisaris dan Direksi.",
    status: "Selesai",
    penanggungJawab: "Komite Nominasi & Remunerasi",
  },
  {
    tahap: "Pemantauan Triwulanan I",
    periode: "Apr 2026",
    keluaran: "Telaah capaian triwulan I dan penandaan KPI berisiko merah.",
    status: "Selesai",
    penanggungJawab: "Komite Nominasi & Remunerasi",
  },
  {
    tahap: "Review Tengah Tahun",
    periode: "Jun – Jul 2026",
    keluaran: "Penilaian semester I, penjelasan Direksi atas 4 KPI merah, dan penyesuaian fokus semester II.",
    status: "Berjalan",
    penanggungJawab: "Dewan Komisaris (rapat gabungan)",
  },
  {
    tahap: "Pemantauan Triwulanan III",
    periode: "Okt 2026",
    keluaran: "Telaah capaian triwulan III dan proyeksi capaian akhir tahun.",
    status: "Belum Mulai",
    penanggungJawab: "Komite Nominasi & Remunerasi",
  },
  {
    tahap: "Penilaian Akhir Tahun",
    periode: "Jan – Feb 2027",
    keluaran: "Skor akhir kolektif & individual, rekomendasi remunerasi variabel, dan bahan laporan kepada Pemegang Saham.",
    status: "Belum Mulai",
    penanggungJawab: "Dewan Komisaris",
  },
];

/* ── 5h. Insight & Tindak Pengawasan ──────────────────────────────── */

export const evaluasiInsights: DekInsight[] = [
  {
    insight:
      "Skor kolektif 87,4 naik delapan kuartal berturut, tetapi kenaikan didorong perspektif Keuangan sementara Operasional menyimpan dua KPI merah berulang — skor agregat menutupi masalah yang terkonsentrasi.",
    tindakPengawasan:
      "Nilai Direktorat Operasi secara terpisah pada review tengah tahun dan minta penjelasan mengapa perbaikan dua triwulan belum berdampak.",
  },
  {
    insight:
      "Selisih skor direktorat tertinggi dan terendah mencapai 6,1 poin (90,3 vs 84,2) dan direktorat terendah justru mengelola KPI terbanyak (8 dari 32).",
    tindakPengawasan:
      "Pertanyakan kewajaran distribusi beban KPI antar direktorat pada penetapan kontrak manajemen 2027.",
  },
  {
    insight:
      "Kepatuhan pelaporan formal 96% tidak berbanding lurus dengan penyelesaian tindak lanjut; seluruh tanggapan atas rekomendasi diterima tepat waktu sementara 17 rekomendasi tetap terbuka.",
    tindakPengawasan:
      "Ubah ukuran pemantauan dari ketepatan waktu tanggapan menjadi ketuntasan tindak lanjut, dan laporkan keduanya terpisah pada dashboard Dekom.",
  },
  {
    insight:
      "KPI penyelesaian sengketa lahan telah merah empat triwulan berturut dan sekaligus menahan proses persetujuan divestasi yang kini menunggu — satu masalah kinerja berdampak pada dua jalur pengawasan.",
    tindakPengawasan:
      "Gabungkan pembahasan KPI ini dengan agenda persetujuan divestasi pada rapat 25 Juni agar tidak diperiksa dua kali.",
  },
];

/* ══════════════════════════════════════════════════════════════════════
   6. PERSETUJUAN & KEWENANGAN (/dewan-komisaris/persetujuan)
   ══════════════════════════════════════════════════════════════════════ */

export type DekApprovalStatus = "Disetujui" | "Menunggu" | "Ditolak/Dikembalikan";

export type DekApprovalCategory =
  | "Aksi Korporasi & Investasi"
  | "Aset & Divestasi"
  | "Pendanaan & Keuangan"
  | "Kerja Sama Jangka Panjang"
  | "Organisasi & SDM"
  | "Lainnya";

/* ── 6a. KPI Strip ────────────────────────────────────────────────── */

export const persetujuanKpi: DekKpi[] = [
  {
    label: "Permohonan Masuk",
    value: "22", // = DEKOM.persetujuanYtd
    valueSuffix: " permohonan",
    sub: "YTD · usulan Direksi yang melampaui kewenangannya sendiri",
    delta: "+5",
    trend: "up",
    deltaTone: "bad",
    tone: "blue",
  },
  {
    label: "Disetujui",
    value: "16",
    valueSuffix: " (72,7%)",
    sub: "Tanggapan tertulis persetujuan telah diterbitkan Dewan Komisaris",
    delta: "+4",
    trend: "up",
    deltaTone: "good",
    tone: "green",
  },
  {
    label: "Menunggu Tanggapan",
    value: "4", // = DEKOM.persetujuanMenunggu
    sub: "2 telah melewati SLA 14 hari (21 dan 17 hari berjalan)",
    delta: "+2",
    trend: "up",
    deltaTone: "bad",
    tone: "red",
  },
  {
    label: "Ditolak / Dikembalikan",
    value: "2",
    sub: "Keduanya dikembalikan karena kajian pendukung belum lengkap",
    tone: "amber",
  },
  {
    label: "Rata Waktu Tanggapan",
    value: "11",
    valueSuffix: " hari",
    sub: "18 permohonan tertanggapi · SLA internal 14 hari",
    delta: "-2 hari",
    trend: "down",
    deltaTone: "good",
    tone: "teal",
  },
];

/* ── 6b. Register Permohonan Persetujuan ──────────────────────────── */

export interface DekApprovalRow {
  id: string;
  perihal: string;
  kategori: DekApprovalCategory;
  /** Nilai transaksi/eksposur; "—" bila tidak bernilai rupiah langsung. */
  nilai: string;
  tanggalMasuk: string;
  status: DekApprovalStatus;
  /** Hari sejak permohonan masuk sampai tanggapan terbit, atau s.d. 31 Mei. */
  hariBerjalan: number;
  /** Route dimensi sumber data pendukung — UI merender sebagai next/link. */
  href?: string;
  hrefLabel?: string;
  catatan: string;
}

/**
 * Seluruh 22 permohonan YTD (= DEKOM.persetujuanYtd): 16 disetujui,
 * 4 menunggu (= DEKOM.persetujuanMenunggu), 2 ditolak/dikembalikan.
 * Rata-rata hariBerjalan atas 18 permohonan yang telah tertanggapi = 11 hari.
 */
export const approvalRegister: DekApprovalRow[] = [
  {
    id: "PST-2026-22",
    perihal: "Divestasi aset non-produktif PTPN I tahap I",
    kategori: "Aset & Divestasi",
    nilai: "Rp 1,4 T",
    tanggalMasuk: "11 Mei 2026",
    status: "Menunggu",
    hariBerjalan: 21,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
    catatan: "Menunggu inventarisasi legalitas aset yang menjadi rekomendasi Dekom dan masih overdue 59 hari.",
  },
  {
    id: "PST-2026-21",
    perihal: "Refinancing pinjaman berbunga Rp 4 T",
    kategori: "Pendanaan & Keuangan",
    nilai: "Rp 4,0 T",
    tanggalMasuk: "15 Mei 2026",
    status: "Menunggu",
    hariBerjalan: 17,
    href: "/keuangan/neraca-leverage",
    hrefLabel: "Neraca & Leverage",
    catatan: "Menunggu penjelasan Direksi atas dampak terhadap kovenan pinjaman berjalan dan struktur permodalan.",
  },
  {
    id: "PST-2026-20",
    perihal: "Pembentukan usaha patungan bioetanol berbasis tetes tebu",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "Rp 1,1 T",
    tanggalMasuk: "23 Mei 2026",
    status: "Menunggu",
    hariBerjalan: 9,
    href: "/aset-investasi/portofolio-investasi",
    hrefLabel: "Portofolio Investasi",
    catatan: "Kertas kerja Komite Manajemen Risiko sedang menelaah asumsi kelayakan dan alokasi bahan baku.",
  },
  {
    id: "PST-2026-19",
    perihal: "Skema restrukturisasi 11 pabrik gula non-kompetitif",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "Rp 0,32 T/tahun",
    tanggalMasuk: "27 Mei 2026",
    status: "Menunggu",
    hariBerjalan: 5,
    catatan: "Masih dalam SLA; Dekom meminta kajian dampak sosial-ketenagakerjaan sebagai lampiran wajib.",
  },
  {
    id: "PST-2026-18",
    perihal: "Penghapusbukuan aset tetap rusak berat di 4 regional",
    kategori: "Aset & Divestasi",
    nilai: "Rp 186 M",
    tanggalMasuk: "28 Apr 2026",
    status: "Ditolak/Dikembalikan",
    hariBerjalan: 14,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
    catatan: "Dikembalikan: berita acara pemeriksaan fisik dan penilaian sisa nilai buku belum lengkap.",
  },
  {
    id: "PST-2026-17",
    perihal: "Kerja sama pemanfaatan lahan jangka panjang Regional 5",
    kategori: "Kerja Sama Jangka Panjang",
    nilai: "Rp 240 M",
    tanggalMasuk: "20 Apr 2026",
    status: "Ditolak/Dikembalikan",
    hariBerjalan: 16,
    catatan: "Dikembalikan: status legalitas lahan belum bersih dan proses seleksi mitra kurang terdokumentasi.",
  },
  {
    id: "PST-2026-16",
    perihal: "Penyertaan modal pada entitas anak bidang hilirisasi",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "Rp 620 M",
    tanggalMasuk: "16 Apr 2026",
    status: "Disetujui",
    hariBerjalan: 18,
    href: "/aset-investasi/portofolio-investasi",
    hrefLabel: "Portofolio Investasi",
    catatan: "Disetujui dengan catatan pelaporan progres triwulanan kepada Dewan Komisaris.",
  },
  {
    id: "PST-2026-15",
    perihal: "Perpanjangan fasilitas modal kerja bank himbara",
    kategori: "Pendanaan & Keuangan",
    nilai: "Rp 2,5 T",
    tanggalMasuk: "09 Apr 2026",
    status: "Disetujui",
    hariBerjalan: 14,
    href: "/keuangan/neraca-leverage",
    hrefLabel: "Neraca & Leverage",
    catatan: "Disetujui; Dekom meminta pemantauan rasio utang tetap berada dalam batas selera risiko.",
  },
  {
    id: "PST-2026-14",
    perihal: "Kerja sama operasi terminal penyimpanan minyak sawit",
    kategori: "Kerja Sama Jangka Panjang",
    nilai: "Rp 480 M",
    tanggalMasuk: "02 Apr 2026",
    status: "Disetujui",
    hariBerjalan: 13,
    catatan: "Disetujui untuk jangka 10 tahun dengan klausul evaluasi kinerja mitra setiap 3 tahun.",
  },
  {
    id: "PST-2026-13",
    perihal: "Investasi pabrik biogas tahap lanjutan",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "Rp 420 M",
    tanggalMasuk: "26 Mar 2026",
    status: "Disetujui",
    hariBerjalan: 12,
    href: "/aset-investasi/portofolio-investasi",
    hrefLabel: "Portofolio Investasi",
    catatan: "Disetujui; Dekom meminta laporan realisasi belanja modal per triwulan.",
  },
  {
    id: "PST-2026-12",
    perihal: "Pelepasan lahan idle non-produktif tahap II",
    kategori: "Aset & Divestasi",
    nilai: "Rp 380 M",
    tanggalMasuk: "19 Mar 2026",
    status: "Disetujui",
    hariBerjalan: 12,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
    catatan: "Disetujui setelah penilaian penilai independen dan konfirmasi status bebas sengketa.",
  },
  {
    id: "PST-2026-11",
    perihal: "Perubahan susunan pengurus dua entitas anak",
    kategori: "Organisasi & SDM",
    nilai: "—",
    tanggalMasuk: "12 Mar 2026",
    status: "Disetujui",
    hariBerjalan: 11,
    catatan: "Disetujui atas dasar telaah Komite Nominasi & Remunerasi mengenai kesesuaian kompetensi.",
  },
  {
    id: "PST-2026-10",
    perihal: "Penerbitan jaminan korporat untuk pendanaan entitas anak",
    kategori: "Pendanaan & Keuangan",
    nilai: "Rp 900 M",
    tanggalMasuk: "05 Mar 2026",
    status: "Disetujui",
    hariBerjalan: 11,
    href: "/keuangan/neraca-leverage",
    hrefLabel: "Neraca & Leverage",
    catatan: "Disetujui dengan batas paparan agregat jaminan korporat yang dipantau tiap triwulan.",
  },
  {
    id: "PST-2026-09",
    perihal: "Kerja sama pengembangan kebun plasma jangka panjang",
    kategori: "Kerja Sama Jangka Panjang",
    nilai: "Rp 310 M",
    tanggalMasuk: "26 Feb 2026",
    status: "Disetujui",
    hariBerjalan: 10,
    catatan: "Disetujui; Dekom meminta laporan kepatuhan pola kemitraan setiap semester.",
  },
  {
    id: "PST-2026-08",
    perihal: "Penghapusan piutang macet yang telah dicadangkan penuh",
    kategori: "Lainnya",
    nilai: "Rp 148 M",
    tanggalMasuk: "19 Feb 2026",
    status: "Disetujui",
    hariBerjalan: 10,
    catatan: "Disetujui setelah Komite Audit memastikan upaya penagihan telah ditempuh sampai tuntas.",
  },
  {
    id: "PST-2026-07",
    perihal: "Pembubaran satu entitas anak non-operasional",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "—",
    tanggalMasuk: "12 Feb 2026",
    status: "Disetujui",
    hariBerjalan: 10,
    catatan: "Disetujui untuk diteruskan kepada Pemegang Saham karena melampaui kewenangan Dewan Komisaris.",
  },
  {
    id: "PST-2026-06",
    perihal: "Revisi rencana belanja modal tahun berjalan",
    kategori: "Pendanaan & Keuangan",
    nilai: "Rp 1,2 T",
    tanggalMasuk: "05 Feb 2026",
    status: "Disetujui",
    hariBerjalan: 9,
    href: "/keuangan/neraca-leverage",
    hrefLabel: "Neraca & Leverage",
    catatan: "Disetujui; Dekom mempertanyakan realisme jadwal penyerapan dan meminta laporan bulanan.",
  },
  {
    id: "PST-2026-05",
    perihal: "Sewa jangka panjang bangunan non-inti di tiga kota",
    kategori: "Aset & Divestasi",
    nilai: "Rp 96 M",
    tanggalMasuk: "29 Jan 2026",
    status: "Disetujui",
    hariBerjalan: 9,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
    catatan: "Disetujui dengan catatan penetapan tarif sewa mengacu penilaian independen.",
  },
  {
    id: "PST-2026-04",
    perihal: "Penetapan struktur organisasi holding pasca-integrasi",
    kategori: "Organisasi & SDM",
    nilai: "—",
    tanggalMasuk: "22 Jan 2026",
    status: "Disetujui",
    hariBerjalan: 8,
    catatan: "Disetujui; Dekom meminta evaluasi rentang kendali tiap direktorat setelah enam bulan berjalan.",
  },
  {
    id: "PST-2026-03",
    perihal: "Pengalihan hak atas aset perumahan karyawan tidak terpakai",
    kategori: "Aset & Divestasi",
    nilai: "Rp 74 M",
    tanggalMasuk: "15 Jan 2026",
    status: "Disetujui",
    hariBerjalan: 8,
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
    catatan: "Disetujui setelah konfirmasi tidak ada perkara aktif atas objek aset.",
  },
  {
    id: "PST-2026-02",
    perihal: "Perpanjangan perjanjian pemasaran jangka panjang komoditas karet",
    kategori: "Aksi Korporasi & Investasi",
    nilai: "Rp 260 M/tahun",
    tanggalMasuk: "12 Jan 2026",
    status: "Disetujui",
    hariBerjalan: 7,
    catatan: "Disetujui; Dekom meminta klausul penyesuaian harga mengikuti acuan pasar.",
  },
  {
    id: "PST-2026-01",
    perihal: "Penetapan kebijakan akuntansi baru atas aset biologis",
    kategori: "Lainnya",
    nilai: "—",
    tanggalMasuk: "08 Jan 2026",
    status: "Disetujui",
    hariBerjalan: 6,
    catatan: "Disetujui atas dasar telaah Komite Audit mengenai kesesuaian dengan standar yang berlaku.",
  },
];

/* ── 6c. Matriks Kewenangan (Anggaran Dasar) ──────────────────────── */

export interface DekAuthorityRow {
  jenisAksi: string;
  /** Ambang yang cukup diputuskan Direksi sendiri. */
  cukupDireksi: string;
  /** Ambang yang memerlukan persetujuan/tanggapan tertulis Dewan Komisaris. */
  perluDekom: string;
  /** Ambang yang memerlukan persetujuan Rapat Umum Pemegang Saham. */
  perluRups: string;
  /** Rujukan pasal/dasar dalam Anggaran Dasar & peraturan turunannya. */
  dasar: string;
}

/**
 * Ambang mengacu Anggaran Dasar Perseroan beserta peraturan turunannya;
 * nilai bersifat ilustratif untuk kebutuhan dashboard pengawasan.
 */
export const authorityMatrix: DekAuthorityRow[] = [
  {
    jenisAksi: "Investasi & belanja modal proyek",
    cukupDireksi: "≤ Rp 250 M per proyek",
    perluDekom: "> Rp 250 M s.d. Rp 2,5 T",
    perluRups: "> Rp 2,5 T atau > 25% total aset",
    dasar: "Anggaran Dasar Pasal 12 ayat (2) huruf a",
  },
  {
    jenisAksi: "Divestasi & pelepasan aset tetap",
    cukupDireksi: "≤ Rp 100 M nilai buku",
    perluDekom: "> Rp 100 M s.d. Rp 1,5 T nilai buku",
    perluRups: "> Rp 1,5 T atau aset strategis/land bank inti",
    dasar: "Anggaran Dasar Pasal 12 ayat (2) huruf b",
  },
  {
    jenisAksi: "Perolehan pinjaman & fasilitas pendanaan",
    cukupDireksi: "≤ Rp 500 M dalam satu tahun buku",
    perluDekom: "> Rp 500 M s.d. Rp 5 T",
    perluRups: "> Rp 5 T atau menjaminkan > 50% kekayaan bersih",
    dasar: "Anggaran Dasar Pasal 12 ayat (3)",
  },
  {
    jenisAksi: "Pemberian jaminan korporat",
    cukupDireksi: "Tidak dapat diputuskan Direksi sendiri",
    perluDekom: "≤ Rp 2 T paparan agregat",
    perluRups: "> Rp 2 T paparan agregat",
    dasar: "Anggaran Dasar Pasal 12 ayat (3) huruf c",
  },
  {
    jenisAksi: "Kerja sama jangka panjang & pemanfaatan lahan",
    cukupDireksi: "Jangka ≤ 3 tahun dan nilai ≤ Rp 100 M",
    perluDekom: "Jangka > 3 s.d. 15 tahun atau nilai > Rp 100 M",
    perluRups: "Jangka > 15 tahun atau melibatkan land bank inti",
    dasar: "Anggaran Dasar Pasal 12 ayat (4)",
  },
  {
    jenisAksi: "Penyertaan modal & pembentukan entitas baru",
    cukupDireksi: "Tidak dapat diputuskan Direksi sendiri",
    perluDekom: "≤ Rp 1 T penyertaan",
    perluRups: "> Rp 1 T, atau pendirian/pembubaran entitas anak",
    dasar: "Anggaran Dasar Pasal 12 ayat (5)",
  },
  {
    jenisAksi: "Penghapusbukuan aset & piutang macet",
    cukupDireksi: "≤ Rp 50 M per usulan",
    perluDekom: "> Rp 50 M s.d. Rp 500 M",
    perluRups: "> Rp 500 M",
    dasar: "Anggaran Dasar Pasal 12 ayat (2) huruf d",
  },
];

export const authorityNote =
  "Empat permohonan yang kini menunggu seluruhnya berada pada lapis kewenangan Dewan Komisaris; dua di antaranya (divestasi Rp 1,4 T dan refinancing Rp 4,0 T) akan berlanjut ke Rapat Umum Pemegang Saham apabila nilai final melampaui ambang pada matriks ini.";

/* ── 6d. Rincian 4 Permohonan yang Menunggu ───────────────────────── */

export interface DekPendingRow {
  id: string;
  perihal: string;
  nilai: string;
  hariBerjalan: number;
  /** Selisih terhadap SLA 14 hari; negatif berarti masih dalam SLA. */
  selisihSla: number;
  /** Penyebab tertahannya tanggapan Dewan Komisaris. */
  penyebab: string;
  /** Risiko yang timbul bila tanggapan terus tertunda. */
  risikoKeterlambatan: string;
  tone: "red" | "amber" | "blue";
}

/** Empat baris ini = DEKOM.persetujuanMenunggu. */
export const pendingDetail: DekPendingRow[] = [
  {
    id: "PST-2026-22",
    perihal: "Divestasi aset non-produktif PTPN I tahap I",
    nilai: "Rp 1,4 T",
    hariBerjalan: 21,
    selisihSla: 7,
    penyebab:
      "Inventarisasi legalitas aset yang menjadi rekomendasi Dewan Komisaris masih overdue 59 hari, sehingga kertas kerja komite belum dapat difinalkan.",
    risikoKeterlambatan:
      "Target divestasi tahun berjalan makin sulit dikejar dan beban transaksi menumpuk pada semester II.",
    tone: "red",
  },
  {
    id: "PST-2026-21",
    perihal: "Refinancing pinjaman berbunga Rp 4 T",
    nilai: "Rp 4,0 T",
    hariBerjalan: 17,
    selisihSla: 3,
    penyebab:
      "Penjelasan Direksi atas dampak terhadap kovenan pinjaman berjalan dan struktur permodalan belum diterima lengkap.",
    risikoKeterlambatan:
      "Jendela penawaran suku bunga dari kreditur berpotensi tertutup dan beban bunga tahun berjalan tidak turun sesuai rencana.",
    tone: "red",
  },
  {
    id: "PST-2026-20",
    perihal: "Pembentukan usaha patungan bioetanol berbasis tetes tebu",
    nilai: "Rp 1,1 T",
    hariBerjalan: 9,
    selisihSla: -5,
    penyebab:
      "Kertas kerja Komite Manajemen Risiko & GCG masih menelaah asumsi kelayakan dan alokasi bahan baku sampai 2027.",
    risikoKeterlambatan:
      "Negosiasi lembar ketentuan dengan mitra strategis tertunda dan posisi tawar melemah bila melewati tenggat mitra.",
    tone: "amber",
  },
  {
    id: "PST-2026-19",
    perihal: "Skema restrukturisasi 11 pabrik gula non-kompetitif",
    nilai: "Rp 0,32 T/tahun",
    hariBerjalan: 5,
    selisihSla: -9,
    penyebab:
      "Masih dalam SLA; Dewan Komisaris meminta kajian dampak sosial-ketenagakerjaan sebagai lampiran wajib sebelum bersikap.",
    risikoKeterlambatan:
      "Bila kajian tidak masuk sebelum rapat 25 Juni, tanggapan tertunda ke siklus rapat Juli dan kehilangan satu musim giling.",
    tone: "blue",
  },
];

/* ── 6e. Tren Waktu Tanggapan 12 Bulan ────────────────────────────── */

export interface DekResponseTimePoint {
  bulan: string;
  /** Rata-rata hari sampai tanggapan tertulis terbit. */
  rataHari: number;
  /** SLA internal Dewan Komisaris (hari). */
  sla: number;
  /** Jumlah permohonan tertanggapi pada bulan tersebut. */
  tertanggapi: number;
}

/** Rata-rata tertimbang Jan–Mei 2026 = 11 hari atas 18 permohonan tertanggapi. */
export const responseTimeTrend: DekResponseTimePoint[] = [
  { bulan: "Jun 25", rataHari: 15, sla: 14, tertanggapi: 2 },
  { bulan: "Jul 25", rataHari: 14, sla: 14, tertanggapi: 1 },
  { bulan: "Agu 25", rataHari: 16, sla: 14, tertanggapi: 2 },
  { bulan: "Sep 25", rataHari: 13, sla: 14, tertanggapi: 2 },
  { bulan: "Okt 25", rataHari: 14, sla: 14, tertanggapi: 3 },
  { bulan: "Nov 25", rataHari: 12, sla: 14, tertanggapi: 2 },
  { bulan: "Des 25", rataHari: 13, sla: 14, tertanggapi: 3 },
  { bulan: "Jan 26", rataHari: 7, sla: 14, tertanggapi: 3 },
  { bulan: "Feb 26", rataHari: 9, sla: 14, tertanggapi: 4 },
  { bulan: "Mar 26", rataHari: 12, sla: 14, tertanggapi: 4 },
  { bulan: "Apr 26", rataHari: 15, sla: 14, tertanggapi: 4 },
  { bulan: "Mei 26", rataHari: 11, sla: 14, tertanggapi: 3 },
];

/* ── 6f. Komposisi Permohonan per Kategori ────────────────────────── */

export interface DekApprovalCategoryRow {
  kategori: DekApprovalCategory;
  jumlah: number;
  porsi: string;
  /** Nilai agregat permohonan pada kategori tersebut. */
  nilaiAgregat: string;
  color: string;
}

/** Menjumlah 22 permohonan YTD (= DEKOM.persetujuanYtd). */
export const approvalByCategory: DekApprovalCategoryRow[] = [
  { kategori: "Aksi Korporasi & Investasi", jumlah: 6, porsi: "27,3%", nilaiAgregat: "Rp 2,72 T", color: PALETTE.green },
  { kategori: "Aset & Divestasi", jumlah: 5, porsi: "22,7%", nilaiAgregat: "Rp 2,14 T", color: PALETTE.blue },
  { kategori: "Pendanaan & Keuangan", jumlah: 4, porsi: "18,2%", nilaiAgregat: "Rp 8,60 T", color: PALETTE.amber },
  { kategori: "Kerja Sama Jangka Panjang", jumlah: 3, porsi: "13,6%", nilaiAgregat: "Rp 1,03 T", color: PALETTE.teal },
  { kategori: "Organisasi & SDM", jumlah: 2, porsi: "9,1%", nilaiAgregat: "—", color: PALETTE.purple },
  { kategori: "Lainnya", jumlah: 2, porsi: "9,1%", nilaiAgregat: "Rp 0,15 T", color: PALETTE.slate },
];

/* ── 6g. Insight & Tindak Pengawasan ──────────────────────────────── */

export const persetujuanInsights: DekInsight[] = [
  {
    insight:
      "Rata-rata YTD 11 hari ditopang Januari–Februari yang cepat (7 dan 9 hari); sejak Maret waktu tanggapan naik ke 12 hari dan memuncak 15 hari pada April — di atas SLA 14 hari — sementara empat permohonan yang menunggu belum masuk hitungan rata-rata.",
    tindakPengawasan:
      "Pantau waktu tanggapan bulanan, bukan rata-rata YTD, dan bahas beban antrean persetujuan pada setiap pembukaan rapat Dekom.",
  },
  {
    insight:
      "Dua permohonan yang melewati SLA tertahan oleh sebab berbeda: satu oleh rekomendasi Dekom sendiri yang belum ditindaklanjuti Direksi, satu oleh kelengkapan penjelasan — keterlambatan tidak sepenuhnya berada di satu pihak.",
    tindakPengawasan:
      "Pisahkan pelaporan penyebab keterlambatan menjadi sisi Dekom dan sisi Direksi agar akuntabilitasnya jelas.",
  },
  {
    insight:
      "Kategori Pendanaan & Keuangan hanya 4 dari 22 permohonan tetapi menyumbang nilai agregat terbesar (Rp 8,60 T) — konsentrasi nilai jauh melampaui konsentrasi jumlah.",
    tindakPengawasan:
      "Terapkan telaah berlapis oleh Komite Manajemen Risiko & GCG untuk setiap permohonan pendanaan di atas Rp 1 T sebelum masuk pleno.",
  },
  {
    insight:
      "Dua permohonan dikembalikan karena kelengkapan dokumen dasar, bukan karena substansi usulan ditolak — pola ini berulang pada usulan aset dan kerja sama lahan.",
    tindakPengawasan:
      "Tetapkan daftar periksa kelengkapan dokumen sebagai prasyarat penerimaan permohonan oleh Sekretariat Dewan Komisaris.",
  },
];
