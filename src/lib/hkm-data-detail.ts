/**
 * Data statis dimensi Hukum & Sekretariat Korporat — halaman lanjutan.
 * Periode acuan: Mei 2026 (YTD), data per 31 Mei 2026.
 *
 * Memuat halaman Korporasi & Anak Usaha (/hukum/korporasi) dan Litigasi &
 * Advokasi (/hukum/litigasi). Tiga halaman lain ada di hkm-data.ts.
 *
 * CATATAN DE-DUPLIKASI — halaman Litigasi di sini SENGAJA RINGKAS. Detail
 * portofolio perkara (funnel tahapan, top-10 eksposur, kecukupan provisi,
 * konsentrasi geografis) tetap menjadi milik Legal Case Portfolio di
 * /risiko-kepatuhan/legal-portfolio (src/lib/risk-data-detail.ts).
 * Populasi sengketa lahan 214 kasus / 82,4 rb ha adalah milik dimensi Aset
 * (src/lib/asg-data.ts) — dirujuk sebagai populasi induk, bukan diklaim ulang.
 */

import { ASET, HUKUM, RISIKO } from "./group-baseline";
import { PALETTE } from "./chart-palette";
import type { HkmDecision, HkmInsight, HkmPageKpi } from "./hkm-data";

/* ══════════════════════════════════════════════════════════════════════
   #region 4. KORPORASI & ANAK USAHA — /hukum/korporasi
   ══════════════════════════════════════════════════════════════════════ */

/* ── 4a. KPI Strip ────────────────────────────────────────────────── */

export const korporasiKpi: HkmPageKpi[] = [
  {
    label: "Entitas Anak & Afiliasi",
    value: "24", // = HUKUM.entitasAnak
    sub: "Di luar 3 subholding (PalmCo, SGN, SupportingCo)",
    delta: "-1",
    trend: "down",
    deltaTone: "good",
    tone: "blue",
  },
  {
    label: "Entitas Aktif vs Non-Operasional",
    value: "18 / 6",
    sub: "18 aktif · 4 dorman · 2 dalam proses likuidasi",
    subDanger: true,
    tone: "amber",
  },
  {
    label: "RUPS Terselenggara",
    value: "14",
    sub: "YTD · 11 RUPS Tahunan · 3 RUPS Luar Biasa",
    delta: "+2",
    trend: "up",
    deltaTone: "good",
    tone: "purple",
  },
  {
    label: "Aksi Korporasi Berjalan",
    value: "6",
    sub: "1 pembentukan JV · 2 likuidasi · 3 restrukturisasi",
    tone: "teal",
  },
  {
    label: "Skor GCG",
    value: "92,1",
    valueSuffix: "/100",
    sub: "Asesmen KBUMN 2025 · kategori Sangat Baik",
    delta: "+1,4 pts",
    trend: "up",
    deltaTone: "good",
    href: "/esg-sustainability/rating-pendanaan",
    hrefLabel: "Sumber: Rating & Sustainable Finance",
    tone: "green",
  },
  {
    label: "Kepatuhan Pelaporan Korporat",
    value: "96%",
    sub: "Laporan wajib terkirim tepat waktu · 2 laporan terlambat YTD",
    delta: "+3 pts",
    trend: "up",
    deltaTone: "good",
    tone: "slate",
  },
];

/* ── 4b. Portofolio Entitas (24 entitas) ──────────────────────────── */

export type HkmEntityStatus = "Aktif" | "Dorman" | "Proses Likuidasi";

export interface HkmEntityRow {
  entitas: string;
  /** Subholding induk / pemegang saham pengendali di dalam grup. */
  induk: string;
  bidang: string;
  /** Kepemilikan grup (%). */
  kepemilikanPct: number;
  status: HkmEntityStatus;
  /** Kontribusi pendapatan/nilai bagi grup. */
  kontribusi: string;
}

/** 24 baris = HUKUM.entitasAnak (18 Aktif, 4 Dorman, 2 Proses Likuidasi). */
export const entityPortfolio: HkmEntityRow[] = [
  { entitas: "PT Sarana Sawit Nusantara", induk: "PalmCo", bidang: "Perkebunan & pengolahan sawit", kepemilikanPct: 99.0, status: "Aktif", kontribusi: "Pendapatan Rp 1,84 T" },
  { entitas: "PT Nusantara Refinery Indonesia", induk: "PalmCo", bidang: "Refinery & hilirisasi CPO", kepemilikanPct: 95.0, status: "Aktif", kontribusi: "Pendapatan Rp 1,26 T" },
  { entitas: "PT Agro Kimia Nusantara", induk: "PalmCo", bidang: "Oleokimia & turunan sawit", kepemilikanPct: 70.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,74 T" },
  { entitas: "PT Bio Energi Nusantara", induk: "PalmCo", bidang: "Biogas & energi terbarukan", kepemilikanPct: 90.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,21 T" },
  { entitas: "PT Benih Unggul Nusantara", induk: "PalmCo", bidang: "Kecambah & bibit unggul", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,18 T" },
  { entitas: "PT Sawit Plasma Mandiri", induk: "PalmCo", bidang: "Pengelolaan kemitraan plasma", kepemilikanPct: 85.0, status: "Aktif", kontribusi: "82 rb ha areal kemitraan" },
  { entitas: "PT Nusantara Trading Internasional", induk: "PalmCo", bidang: "Perdagangan & ekspor CPO", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "22% volume ekspor CPO" },
  { entitas: "PT Palma Riset Teknologi", induk: "PalmCo", bidang: "Riset agronomi & laboratorium", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Layanan internal grup" },
  { entitas: "PT Gula Nusantara Distribusi", induk: "SGN", bidang: "Distribusi & perdagangan gula", kepemilikanPct: 99.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,96 T" },
  { entitas: "PT Bioetanol Nusantara Energi", induk: "SGN", bidang: "Produksi bioetanol (proyek strategis)", kepemilikanPct: 60.0, status: "Aktif", kontribusi: "Proyek Rp 2,8 T tahap konstruksi" },
  { entitas: "PT Tebu Rakyat Mandiri", induk: "SGN", bidang: "Kemitraan petani tebu", kepemilikanPct: 80.0, status: "Aktif", kontribusi: "Pasokan 38% tebu giling" },
  { entitas: "PT Sarana Giling Nusantara", induk: "SGN", bidang: "Jasa perawatan & rekayasa PG", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Layanan internal grup" },
  { entitas: "PT Nusantara Logistik Terpadu", induk: "SupportingCo (PTPN I)", bidang: "Logistik, terminal & pergudangan", kepemilikanPct: 99.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,58 T" },
  { entitas: "PT Karet Nusantara Industri", induk: "SupportingCo (PTPN I)", bidang: "Pengolahan karet & barang jadi", kepemilikanPct: 92.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,44 T" },
  { entitas: "PT Teh Nusantara Prima", induk: "SupportingCo (PTPN I)", bidang: "Pengolahan & pemasaran teh", kepemilikanPct: 95.0, status: "Aktif", kontribusi: "Pendapatan Rp 0,26 T" },
  { entitas: "PT Nusantara Properti Optimal", induk: "SupportingCo (PTPN I)", bidang: "Optimalisasi aset & properti", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Sewa & KSO Rp 0,19 T" },
  { entitas: "PT Nusantara Medika Utama", induk: "SupportingCo (PTPN I)", bidang: "Rumah sakit & klinik perkebunan", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Layanan 21 fasilitas kesehatan" },
  { entitas: "PT Nusantara Digital Solusi", induk: "SupportingCo (PTPN I)", bidang: "Layanan TI & shared service", kepemilikanPct: 100.0, status: "Aktif", kontribusi: "Layanan internal grup" },
  { entitas: "PT Nusantara Wisata Agro", induk: "SupportingCo (PTPN I)", bidang: "Agrowisata & perhotelan", kepemilikanPct: 100.0, status: "Dorman", kontribusi: "Tidak beroperasi sejak 2023" },
  { entitas: "PT Kemasan Nusantara Jaya", induk: "SGN", bidang: "Kemasan produk gula", kepemilikanPct: 75.0, status: "Dorman", kontribusi: "Tidak beroperasi sejak 2024" },
  { entitas: "PT Nusantara Kontraktor Mandiri", induk: "SupportingCo (PTPN I)", bidang: "Jasa konstruksi kebun", kepemilikanPct: 88.0, status: "Dorman", kontribusi: "Tidak beroperasi sejak 2024" },
  { entitas: "PT Agro Niaga Sejahtera", induk: "PalmCo", bidang: "Perdagangan sarana produksi", kepemilikanPct: 65.0, status: "Dorman", kontribusi: "Tidak beroperasi sejak 2023" },
  { entitas: "PT Agro Sarana Nusantara", induk: "PalmCo", bidang: "Jasa penyewaan alat berat", kepemilikanPct: 100.0, status: "Proses Likuidasi", kontribusi: "Akta pembubaran terbit Mei 2026" },
  { entitas: "PT Nusa Logistik Prima", induk: "SupportingCo (PTPN I)", bidang: "Angkutan darat komoditas", kepemilikanPct: 90.0, status: "Proses Likuidasi", kontribusi: "Akta pembubaran terbit Mei 2026" },
];

export const entityStats = {
  total: HUKUM.entitasAnak, // 24
  aktif: 18,
  dorman: 4,
  likuidasi: 2,
  biayaKepatuhanNonOperasionalRpM: 3.4,
  note: "6 entitas non-operasional menanggung biaya kepatuhan ±Rp 3,4 M/tahun (audit, pajak, RUPS, sekretariat) tanpa kontribusi pendapatan.",
} as const;

/* ── 4c. Aksi Korporasi 2026 ──────────────────────────────────────── */

export interface HkmCorporateAction {
  aksi: string;
  jenis: "Pembentukan JV" | "Likuidasi" | "Restrukturisasi" | "Akuisisi" | "Divestasi";
  entitas: string;
  tahap: string;
  /** Progres tahapan hukum 0-100. */
  progresPct: number;
  target: string;
  status: "On Track" | "Perlu Perhatian" | "Terlambat";
  /** Tautan silang ke modul pemilik substansi bisnisnya. */
  href?: string;
  hrefLabel?: string;
}

export const corporateActions: HkmCorporateAction[] = [
  {
    aksi: "Pembentukan JV Bioetanol SGN (Glenmore–Djatiroto)",
    jenis: "Pembentukan JV",
    entitas: "PT Bioetanol Nusantara Energi",
    tahap: "Perjanjian pemegang saham & persetujuan KBUMN",
    progresPct: 72,
    target: "Q4 2026",
    status: "On Track",
    href: "/aset-investasi/portofolio-investasi",
    hrefLabel: "Proyek Bioetanol SGN Rp 2,8 T",
  },
  {
    aksi: "Likuidasi PT Agro Sarana Nusantara",
    jenis: "Likuidasi",
    entitas: "PT Agro Sarana Nusantara",
    tahap: "Pengumuman kreditur & pemberesan harta",
    progresPct: 55,
    target: "Q1 2027",
    status: "On Track",
  },
  {
    aksi: "Likuidasi PT Nusa Logistik Prima",
    jenis: "Likuidasi",
    entitas: "PT Nusa Logistik Prima",
    tahap: "Pengumuman kreditur & pemberesan harta",
    progresPct: 48,
    target: "Q1 2027",
    status: "On Track",
  },
  {
    aksi: "Restrukturisasi anak usaha SGN (konsolidasi 2 entitas)",
    jenis: "Restrukturisasi",
    entitas: "PT Gula Nusantara Distribusi & PT Kemasan Nusantara Jaya",
    tahap: "Kajian hukum & valuasi inbreng",
    progresPct: 34,
    target: "Q4 2026",
    status: "Perlu Perhatian",
  },
  {
    aksi: "Restrukturisasi permodalan PT Nusantara Refinery Indonesia",
    jenis: "Restrukturisasi",
    entitas: "PT Nusantara Refinery Indonesia",
    tahap: "Penyusunan akta penambahan modal",
    progresPct: 61,
    target: "Q3 2026",
    status: "On Track",
    href: "/pemasaran-penjualan/hilirisasi",
    hrefLabel: "Program Hilirisasi",
  },
  {
    aksi: "Divestasi bertahap PT Nusantara Wisata Agro",
    jenis: "Divestasi",
    entitas: "PT Nusantara Wisata Agro",
    tahap: "Penilaian aset & persetujuan pemegang saham",
    progresPct: 22,
    target: "Q2 2027",
    status: "Terlambat",
    href: "/aset-investasi/optimalisasi-aset",
    hrefLabel: "Optimalisasi Aset",
  },
];

/* ── 4d. Kalender RUPS ────────────────────────────────────────────── */

export interface HkmRupsRow {
  tanggal: string;
  entitas: string;
  jenis: "RUPS Tahunan" | "RUPS Luar Biasa";
  agenda: string;
  status: "Terselenggara" | "Terjadwal" | "Perlu Penjadwalan";
}

/** 14 RUPS YTD (11 Tahunan + 3 Luar Biasa) + agenda sisa tahun 2026. */
export const rupsCalendar: HkmRupsRow[] = [
  { tanggal: "12 Mar 2026", entitas: "PT Sarana Sawit Nusantara", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025, penetapan dividen & RKAP 2026", status: "Terselenggara" },
  { tanggal: "18 Mar 2026", entitas: "PT Nusantara Refinery Indonesia", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & perubahan susunan direksi", status: "Terselenggara" },
  { tanggal: "25 Mar 2026", entitas: "PT Gula Nusantara Distribusi", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & RKAP 2026", status: "Terselenggara" },
  { tanggal: "02 Apr 2026", entitas: "PT Nusantara Logistik Terpadu", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & rencana investasi terminal", status: "Terselenggara" },
  { tanggal: "09 Apr 2026", entitas: "PT Karet Nusantara Industri", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & restrukturisasi biaya", status: "Terselenggara" },
  { tanggal: "16 Apr 2026", entitas: "PT Bioetanol Nusantara Energi", jenis: "RUPS Luar Biasa", agenda: "Penambahan modal disetor & perjanjian pemegang saham JV", status: "Terselenggara" },
  { tanggal: "23 Apr 2026", entitas: "PT Agro Kimia Nusantara", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & perpanjangan masa jabatan komisaris", status: "Terselenggara" },
  { tanggal: "30 Apr 2026", entitas: "PT Teh Nusantara Prima", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & strategi pemasaran teh", status: "Terselenggara" },
  { tanggal: "07 Mei 2026", entitas: "PT Nusantara Properti Optimal", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & mandat KSO aset non-produktif", status: "Terselenggara" },
  { tanggal: "14 Mei 2026", entitas: "PT Agro Sarana Nusantara", jenis: "RUPS Luar Biasa", agenda: "Pembubaran perseroan & pengangkatan likuidator", status: "Terselenggara" },
  { tanggal: "14 Mei 2026", entitas: "PT Nusa Logistik Prima", jenis: "RUPS Luar Biasa", agenda: "Pembubaran perseroan & pengangkatan likuidator", status: "Terselenggara" },
  { tanggal: "21 Mei 2026", entitas: "PT Nusantara Medika Utama", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & rencana pengembangan fasilitas", status: "Terselenggara" },
  { tanggal: "28 Mei 2026", entitas: "PT Nusantara Digital Solusi", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & tarif layanan shared service", status: "Terselenggara" },
  { tanggal: "29 Mei 2026", entitas: "PT Benih Unggul Nusantara", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 & target produksi kecambah", status: "Terselenggara" },
  { tanggal: "11 Agu 2026", entitas: "PT Nusantara Refinery Indonesia", jenis: "RUPS Luar Biasa", agenda: "Penambahan modal & perubahan anggaran dasar", status: "Terjadwal" },
  { tanggal: "24 Sep 2026", entitas: "PT Sawit Plasma Mandiri", jenis: "RUPS Tahunan", agenda: "Persetujuan LK 2025 (tertunda) & skema kemitraan baru", status: "Terjadwal" },
  { tanggal: "12 Nov 2026", entitas: "PT Bioetanol Nusantara Energi", jenis: "RUPS Luar Biasa", agenda: "Persetujuan struktur pendanaan proyek & jaminan korporat", status: "Terjadwal" },
  { tanggal: "Q4 2026", entitas: "4 entitas dorman", jenis: "RUPS Luar Biasa", agenda: "Keputusan merger/likuidasi entitas dorman", status: "Perlu Penjadwalan" },
];

/* ── 4e. Dokumen Tata Kelola ──────────────────────────────────────── */

export interface HkmGovernanceDoc {
  dokumen: string;
  versiTerakhir: string;
  siklusReviu: string;
  status: "Mutakhir" | "Perlu Pemutakhiran" | "Dalam Revisi";
  catatan: string;
}

export const governanceDocs: HkmGovernanceDoc[] = [
  { dokumen: "Anggaran Dasar Holding", versiTerakhir: "Nov 2025", siklusReviu: "Sesuai kebutuhan", status: "Mutakhir", catatan: "Telah menyesuaikan struktur Danantara & kewenangan RUPS." },
  { dokumen: "Anggaran Dasar Anak Usaha (24 entitas)", versiTerakhir: "Mei 2026", siklusReviu: "Sesuai kebutuhan", status: "Perlu Pemutakhiran", catatan: "5 entitas belum menyesuaikan klausul kuorum & kewenangan pasca-restrukturisasi." },
  { dokumen: "Board Manual (Direksi & Komisaris)", versiTerakhir: "Feb 2026", siklusReviu: "2 tahun", status: "Mutakhir", catatan: "Mencakup pembagian tugas dan tata cara rapat gabungan." },
  { dokumen: "Pedoman GCG Korporat", versiTerakhir: "Des 2025", siklusReviu: "2 tahun", status: "Mutakhir", catatan: "Selaras parameter asesmen KBUMN; skor 92,1." },
  { dokumen: "Pedoman Etika & Perilaku (Code of Conduct)", versiTerakhir: "Jan 2026", siklusReviu: "2 tahun", status: "Mutakhir", catatan: "Terhubung sistem WBS di /risiko-kepatuhan/fraud-wbs." },
  { dokumen: "Piagam Komite Audit & Komite Risiko", versiTerakhir: "Jul 2024", siklusReviu: "2 tahun", status: "Dalam Revisi", catatan: "Revisi menyesuaikan struktur ERM terbaru; target terbit Q3 2026." },
  { dokumen: "Pedoman Benturan Kepentingan & Gratifikasi", versiTerakhir: "Mar 2026", siklusReviu: "2 tahun", status: "Mutakhir", catatan: "Sinkron dengan UPG dan pelaporan LHKPN." },
  { dokumen: "Kebijakan Pengelolaan Anak Usaha & Afiliasi", versiTerakhir: "Sep 2023", siklusReviu: "3 tahun", status: "Perlu Pemutakhiran", catatan: "Belum mengatur ambang keputusan untuk entitas dorman & likuidasi." },
];

/* ── 4f. Peta Kepemilikan ─────────────────────────────────────────── */

export interface HkmShareholdingNode {
  level: 1 | 2 | 3;
  nama: string;
  /** Induk langsung; kosong untuk simpul puncak. */
  induk?: string;
  /** Kepemilikan induk atas simpul ini (%). */
  kepemilikanPct?: number;
  keterangan: string;
}

export const shareholdingMap: HkmShareholdingNode[] = [
  { level: 1, nama: "PTPN III (Persero) — Holding Perkebunan", keterangan: "Pemegang saham: Negara RI melalui Danantara; induk seluruh subholding." },
  { level: 2, nama: "PalmCo (PTPN IV)", induk: "PTPN III (Persero)", kepemilikanPct: 99.99, keterangan: "Subholding sawit; membawahi 10 entitas anak & afiliasi." },
  { level: 2, nama: "SGN (SugarCo)", induk: "PTPN III (Persero)", kepemilikanPct: 99.99, keterangan: "Subholding gula & bioetanol; membawahi 5 entitas anak & afiliasi." },
  { level: 2, nama: "SupportingCo (PTPN I)", induk: "PTPN III (Persero)", kepemilikanPct: 99.99, keterangan: "Subholding karet, teh, aneka tanaman & jasa penunjang; membawahi 9 entitas." },
  { level: 3, nama: "10 entitas di bawah PalmCo", induk: "PalmCo (PTPN IV)", keterangan: "8 aktif · 1 dorman · 1 proses likuidasi." },
  { level: 3, nama: "5 entitas di bawah SGN", induk: "SGN (SugarCo)", keterangan: "4 aktif · 1 dorman." },
  { level: 3, nama: "9 entitas di bawah SupportingCo", induk: "SupportingCo (PTPN I)", keterangan: "6 aktif · 2 dorman · 1 proses likuidasi." },
];

/* ── 4g. Kewajiban Pelaporan Korporat ─────────────────────────────── */

export interface HkmReportingRow {
  laporan: string;
  penerima: string;
  frekuensi: string;
  jatuhTempo: string;
  status: "Terkirim" | "Dalam Penyusunan" | "Terlambat";
}

/** 96% tepat waktu YTD; 2 laporan tercatat terlambat. */
export const complianceReporting: HkmReportingRow[] = [
  { laporan: "Laporan Keuangan Konsolidasi Audited 2025", penerima: "Kementerian BUMN / Danantara", frekuensi: "Tahunan", jatuhTempo: "31 Mar 2026", status: "Terkirim" },
  { laporan: "Laporan Manajemen Triwulanan", penerima: "Kementerian BUMN / Danantara", frekuensi: "Triwulanan", jatuhTempo: "30 Apr 2026", status: "Terkirim" },
  { laporan: "Laporan Penerapan GCG (Asesmen & Tindak Lanjut)", penerima: "Kementerian BUMN / Danantara", frekuensi: "Tahunan", jatuhTempo: "30 Jun 2026", status: "Dalam Penyusunan" },
  { laporan: "Laporan Keberlanjutan (Sustainability Report)", penerima: "Kementerian BUMN / publik", frekuensi: "Tahunan", jatuhTempo: "30 Jun 2026", status: "Dalam Penyusunan" },
  { laporan: "Laporan Kepatuhan Obligasi & Sukuk (Wali Amanat)", penerima: "OJK & wali amanat", frekuensi: "Semesteran", jatuhTempo: "31 Jul 2026", status: "Dalam Penyusunan" },
  { laporan: "Keterbukaan Informasi Aksi Korporasi Material", penerima: "OJK", frekuensi: "Insidental", jatuhTempo: "2 hari kerja sejak kejadian", status: "Terkirim" },
  { laporan: "Laporan Perubahan Data Perseroan (Akta & Pengurus)", penerima: "Kemenkumham (AHU)", frekuensi: "Insidental", jatuhTempo: "30 hari sejak akta", status: "Terlambat" },
  { laporan: "Laporan Realisasi TJSL & Program Kemitraan", penerima: "Kementerian BUMN", frekuensi: "Semesteran", jatuhTempo: "31 Jul 2026", status: "Dalam Penyusunan" },
  { laporan: "Laporan Kegiatan Penanaman Modal (LKPM)", penerima: "BKPM/OSS", frekuensi: "Triwulanan", jatuhTempo: "10 Apr 2026", status: "Terlambat" },
];

/* ── 4h. Keputusan Korporat ───────────────────────────────────────── */

export const korporasiDecisions: HkmDecision[] = [
  {
    title: "Rasionalisasi 4 Entitas Dorman",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "4 entitas dorman + 2 dalam likuidasi menanggung biaya kepatuhan ±Rp 3,4 M/tahun; kebijakan pengelolaan anak usaha belum mengatur ambang keputusannya.",
    rekomendasi:
      "Setujui merger 2 entitas dorman ke induk subholding dan mulai likuidasi 2 sisanya; perbarui Kebijakan Pengelolaan Anak Usaha sebelum RUPS-LB Q4 2026.",
    due: "Q4 2026",
  },
  {
    title: "Struktur Hukum & Jaminan Korporat JV Bioetanol",
    impact: "High Impact",
    tone: "red",
    context:
      "Perjanjian pemegang saham JV bioetanol (proyek Rp 2,8 T) menuntut kejelasan porsi jaminan korporat holding dan hak veto atas keputusan strategis.",
    rekomendasi:
      "Kunci batas jaminan korporat proporsional 60% dan daftar reserved matters sebelum penandatanganan; ajukan persetujuan RUPS-LB November 2026.",
    due: "Q4 2026",
  },
  {
    title: "Percepatan Divestasi PT Nusantara Wisata Agro",
    impact: "Low Impact",
    tone: "green",
    context:
      "Divestasi tertinggal jadwal (progres 22%) karena penilaian aset belum tuntas; entitas berstatus dorman sejak 2023.",
    rekomendasi:
      "Tetapkan tenggat penilaian aset Q3 2026 dan opsi likuidasi bila tidak ada peminat pada akhir Q1 2027.",
    due: "Q1 2027",
  },
];

/* ── 4i. Insight & Rekomendasi ────────────────────────────────────── */

export const korporasiInsights: HkmInsight[] = [
  {
    insight:
      "6 dari 24 entitas (25%) tidak beroperasi namun tetap menyerap biaya kepatuhan ±Rp 3,4 M/tahun dan kapasitas sekretariat korporat untuk RUPS serta pelaporan.",
    rekomendasi:
      "Jadwalkan RUPS-LB gabungan Q4 2026 untuk memutuskan merger/likuidasi seluruh entitas dorman dalam satu paket keputusan.",
  },
  {
    insight:
      "Skor GCG 92,1 (Sangat Baik) kontras dengan 2 laporan terlambat dan 2 dokumen tata kelola kedaluwarsa — kelemahan ada pada disiplin administrasi, bukan pada kerangka.",
    rekomendasi:
      "Terapkan kalender kepatuhan korporat terpusat dengan pemilik tunggal per laporan dan pemicu T-30 hari; tuntaskan revisi Piagam Komite dan Kebijakan Anak Usaha di Q3 2026.",
  },
  {
    insight:
      "5 anggaran dasar anak usaha belum menyesuaikan klausul kuorum & kewenangan pasca-restrukturisasi, berpotensi mencacatkan keputusan RUPS aksi korporasi 2026.",
    rekomendasi:
      "Selesaikan penyesuaian anggaran dasar 5 entitas sebelum RUPS-LB Agustus 2026, khususnya entitas yang terlibat JV bioetanol dan restrukturisasi refinery.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region 5. LITIGASI & ADVOKASI — /hukum/litigasi
   ══════════════════════════════════════════════════════════════════════

   HALAMAN RINGKAS. Detail portofolio perkara (top-10 eksposur, funnel
   tahapan, kecukupan provisi, konsentrasi geografis) TIDAK diulang di
   sini — lihat /risiko-kepatuhan/legal-portfolio.
   ══════════════════════════════════════════════════════════════════════ */

/** Tautan kanonik ke halaman detail portofolio perkara. */
export const LEGAL_PORTFOLIO_HREF = "/risiko-kepatuhan/legal-portfolio";

/* ── 5a. KPI Strip ────────────────────────────────────────────────── */

export const litigasiKpi: HkmPageKpi[] = [
  {
    label: "Perkara Aktif",
    value: String(RISIKO.perkaraAktif), // 87
    sub: "Seluruh forum: PN, PTUN, arbitrase, PHI",
    href: LEGAL_PORTFOLIO_HREF,
    hrefLabel: "Detail: Legal Case Portfolio",
    tone: "blue",
  },
  {
    label: "Sengketa Lahan Berperkara",
    value: "52",
    sub: `Subset dari ${ASET.sengketaKasus} kasus sengketa lahan (dimensi Aset)`,
    href: "/aset-investasi/sengketa-lahan",
    hrefLabel: "Populasi induk: Sengketa Lahan",
    tone: "amber",
  },
  {
    label: "Eksposur Legal",
    value: "Rp 4,2 T",
    sub: "Nilai gugatan agregat · ±70% berasal dari perkara lahan/HGU",
    subDanger: true,
    href: LEGAL_PORTFOLIO_HREF,
    hrefLabel: "Detail eksposur per perkara",
    tone: "red",
  },
  {
    label: "Provisi Perkara",
    value: "Rp 380 M",
    sub: "Kecukupan 92,7% terhadap expected loss Rp 410 M",
    subDanger: true,
    href: LEGAL_PORTFOLIO_HREF,
    hrefLabel: "Detail kecukupan provisi",
    tone: "purple",
  },
  {
    label: "Win Rate 3 Tahun",
    value: "71%",
    sub: "41 menang dari 58 putusan inkracht 2023–2026",
    tone: "green",
  },
  {
    label: "Legal Spend",
    value: "Rp 96 M", // = HUKUM.legalSpendYtdRpM
    sub: "YTD · Rp 29 M di antaranya biaya litigasi & perkara",
    delta: "+8,6%",
    trend: "up",
    deltaTone: "bad",
    tone: "teal",
  },
];

/* ── 5b. Ringkasan Perkara per Tipe (kompak) ──────────────────────── */

export interface HkmCaseSummaryRow {
  tipe: string;
  count: number;
  /** Eksposur agregat (Rp Miliar). */
  eksposurRpM: number;
  color: string;
  /** Modul yang memiliki substansi bisnisnya. */
  href?: string;
  hrefLabel?: string;
}

/**
 * Jumlah = 87 perkara aktif (RISIKO.perkaraAktif); eksposur = Rp 4,2 T.
 * Ringkasan ini SENGAJA kompak — pendalaman per perkara, tahapan, dan
 * provisi ada di /risiko-kepatuhan/legal-portfolio.
 */
export const caseSummaryByType: HkmCaseSummaryRow[] = [
  { tipe: "Sengketa Lahan / HGU", count: 52, eksposurRpM: 2960, color: PALETTE.red, href: "/aset-investasi/sengketa-lahan", hrefLabel: "Sengketa Lahan" },
  { tipe: "Komersial & Kontrak", count: 17, eksposurRpM: 820, color: PALETTE.blue, href: "/hukum/kontrak", hrefLabel: "Manajemen Kontrak" },
  { tipe: "Ketenagakerjaan (PHI)", count: 9, eksposurRpM: 110, color: PALETTE.amber, href: "/industrial-relations", hrefLabel: "Industrial Relations" },
  { tipe: "Pajak & Bea", count: 6, eksposurRpM: 260, color: PALETTE.teal },
  { tipe: "Lainnya", count: 3, eksposurRpM: 50, color: PALETTE.slate },
];

export const caseSummaryNote =
  "Ringkasan tingkat portofolio. Rincian per perkara, tahapan litigasi, prognosis, kecukupan provisi, dan konsentrasi geografis tersedia di Legal Case Portfolio (/risiko-kepatuhan/legal-portfolio).";

/* ── 5c. Firma Hukum Eksternal ────────────────────────────────────── */

export interface HkmExternalCounselRow {
  firma: string;
  spesialisasi: string;
  perkaraDitangani: number;
  /** Biaya YTD (Rp Miliar). */
  biayaRpM: number;
  /** Skor kinerja internal 0-100 (ketepatan waktu, kualitas, hasil). */
  skorKinerja: number;
  /** Putusan yang menguntungkan dari perkara selesai. */
  hasil: string;
}

/**
 * Total biaya firma eksternal Rp 38 M = komponen "Retainer & Firma
 * Eksternal" pada legalSpendBreakdown.
 */
export const externalCounsel: HkmExternalCounselRow[] = [
  { firma: "Firma A — Litigasi Pertanahan", spesialisasi: "Agraria, PTUN, eksekusi putusan", perkaraDitangani: 24, biayaRpM: 12.4, skorKinerja: 84, hasil: "8 menang dari 11 putusan" },
  { firma: "Firma B — Korporasi & Komersial", spesialisasi: "Kontrak, M&A, arbitrase BANI", perkaraDitangani: 14, biayaRpM: 9.6, skorKinerja: 88, hasil: "5 menang dari 6 putusan" },
  { firma: "Firma C — Arbitrase Internasional", spesialisasi: "Sengketa perdagangan & SIAC", perkaraDitangani: 4, biayaRpM: 7.2, skorKinerja: 91, hasil: "2 menang dari 2 putusan" },
  { firma: "Firma D — Ketenagakerjaan", spesialisasi: "PHI, hubungan industrial", perkaraDitangani: 11, biayaRpM: 4.8, skorKinerja: 76, hasil: "6 menang dari 9 putusan" },
  { firma: "Firma E — Perpajakan", spesialisasi: "Sengketa & banding pajak", perkaraDitangani: 6, biayaRpM: 4.0, skorKinerja: 82, hasil: "3 menang dari 4 putusan" },
];

export const externalCounselStats = {
  jumlahFirma: 5,
  perkaraDitangani: 59,
  perkaraInHouse: 28,
  biayaTotalRpM: 38,
  skorRataRata: 84.2,
  note: "59 dari 87 perkara aktif ditangani firma eksternal; 28 sisanya ditangani in-house (umumnya perkara bernilai <Rp 5 M).",
} as const;

/* ── 5d. Rincian Legal Spend ──────────────────────────────────────── */

export interface HkmLegalSpendRow {
  komponen: string;
  /** Realisasi YTD (Rp Miliar). */
  ytdRpM: number;
  /** Pagu FY 2026 (Rp Miliar). */
  paguFyRpM: number;
  color: string;
  keterangan: string;
}

/** Jumlah ytdRpM = 96 = HUKUM.legalSpendYtdRpM; pagu FY = Rp 216 M. */
export const legalSpendBreakdown: HkmLegalSpendRow[] = [
  { komponen: "Retainer & Firma Hukum Eksternal", ytdRpM: 38, paguFyRpM: 84, color: PALETTE.blue, keterangan: "5 firma retainer; mencakup 59 perkara aktif." },
  { komponen: "Biaya Litigasi & Perkara", ytdRpM: 29, paguFyRpM: 66, color: PALETTE.red, keterangan: "Biaya perkara, ahli, saksi, eksekusi, dan pengamanan objek sengketa." },
  { komponen: "Notaris, Akta & Legalisasi", ytdRpM: 14, paguFyRpM: 32, color: PALETTE.green, keterangan: "Akta korporasi, RUPS, sertipikasi aset, dan perpanjangan HGU." },
  { komponen: "Konsultasi Khusus (M&A, EUDR, Pajak)", ytdRpM: 11, paguFyRpM: 24, color: PALETTE.purple, keterangan: "Pendapat hukum JV bioetanol, kepatuhan EUDR, dan due diligence." },
  { komponen: "Operasional Legal Lainnya", ytdRpM: 4, paguFyRpM: 10, color: PALETTE.slate, keterangan: "Langganan basis data hukum, pelatihan, dan biaya administrasi." },
];

export const legalSpendStats = {
  ytdRpM: HUKUM.legalSpendYtdRpM, // 96
  paguFyRpM: 216,
  serapanPct: 44.4,
  porsiPreventifPct: 26.0, // notaris & akta 14 + sebagian konsultasi
  porsiReaktifPct: 69.8, // retainer 38 + litigasi 29
  note: "Bauran belanja masih dominan reaktif (Rp 67 M dari Rp 96 M) meski profil risiko grup bersifat agraria dan paling efektif dicegah lewat sertipikasi & perpanjangan HGU.",
} as const;

/* ── 5e. Jalur Hukum Sengketa Lahan ───────────────────────────────── */

export interface HkmLandTrackRow {
  jalur: string;
  jumlahKasus: number;
  /** Luas areal terdampak (ribu ha). */
  luasRbHa: number;
  rataDurasiBulan: number;
  tingkatKeberhasilan: string;
  /** Perkiraan biaya rata-rata per kasus (Rp Miliar). */
  biayaRataRpM: number;
  color: string;
}

/**
 * Populasi induk 214 kasus / 82,4 rb ha sengketa lahan adalah milik
 * dimensi Aset (ASET.sengketaKasus / ASET.sengketaRbHa). Yang berperkara
 * dan masuk jalur hukum berjumlah 52 kasus — jumlah baris di bawah = 52.
 */
export const landDisputeLegalTrack: HkmLandTrackRow[] = [
  { jalur: "Mediasi & Penyelesaian Non-Litigasi", jumlahKasus: 11, luasRbHa: 3.2, rataDurasiBulan: 8, tingkatKeberhasilan: "64% tercapai kesepakatan", biayaRataRpM: 0.4, color: PALETTE.green },
  { jalur: "Proses Pengadilan (PN, PTUN, Banding, Kasasi)", jumlahKasus: 34, luasRbHa: 12.6, rataDurasiBulan: 34, tingkatKeberhasilan: "68% putusan menguntungkan", biayaRataRpM: 1.8, color: PALETTE.amber },
  { jalur: "Eksekusi Putusan Inkracht", jumlahKasus: 7, luasRbHa: 2.6, rataDurasiBulan: 19, tingkatKeberhasilan: "3 dari 7 telah dieksekusi", biayaRataRpM: 2.6, color: PALETTE.red },
];

export const landDisputeStats = {
  populasiKasus: ASET.sengketaKasus, // 214
  populasiRbHa: ASET.sengketaRbHa, // 82,4
  berperkara: 52,
  berperkaraRbHa: 18.4,
  nonLitigasi: 162,
  href: "/aset-investasi/sengketa-lahan",
  note: "52 dari 214 kasus sengketa lahan berada di jalur hukum (18,4 rb ha dari 82,4 rb ha); 162 kasus sisanya ditangani non-litigasi lewat sertipikasi, pengamanan aset, dan kemitraan — pengelolaannya ada di dimensi Aset.",
} as const;

/* ── 5f. Pustaka Preseden & Pelajaran ─────────────────────────────── */

export interface HkmPrecedentRow {
  putusan: string;
  forum: string;
  tahun: string;
  hasil: "Menguntungkan" | "Sebagian" | "Merugikan";
  pelajaran: string;
  /** Perkara aktif yang mengacu preseden ini. */
  perkaraTerkait: number;
}

export const precedentLibrary: HkmPrecedentRow[] = [
  { putusan: "Sengketa tata batas HGU vs kawasan hutan", forum: "Mahkamah Agung (Kasasi)", tahun: "2024", hasil: "Menguntungkan", pelajaran: "Peta tata batas terpadu dan berita acara tata batas yang lengkap menjadi bukti penentu; wajib disiapkan sejak awal perkara.", perkaraTerkait: 9 },
  { putusan: "Gugatan pembatalan HGU oleh kelompok penggarap", forum: "PTUN (Banding)", tahun: "2025", hasil: "Sebagian", pelajaran: "Bukti penguasaan fisik berkelanjutan menentukan; area tanpa patroli & dokumentasi rutin paling rentan dibatalkan.", perkaraTerkait: 14 },
  { putusan: "Wanprestasi kontraktor proyek pabrik", forum: "BANI (Arbitrase)", tahun: "2024", hasil: "Menguntungkan", pelajaran: "Jaminan pelaksanaan yang masa berlakunya menutup masa pemeliharaan mempercepat pemulihan kerugian tanpa eksekusi berlarut.", perkaraTerkait: 6 },
  { putusan: "Klaim kualitas pada kontrak ekspor CPO", forum: "SIAC (Arbitrase)", tahun: "2025", hasil: "Menguntungkan", pelajaran: "Klausul forum tunggal dan rujukan standar mutu yang eksplisit menutup ruang sengketa yurisdiksi.", perkaraTerkait: 4 },
  { putusan: "Sengketa PHK massal pasca-restrukturisasi unit", forum: "Mahkamah Agung (Kasasi)", tahun: "2023", hasil: "Merugikan", pelajaran: "Prosedur perundingan bipartit yang tidak terdokumentasi membuat dalil efisiensi gugur; dokumentasi proses wajib sejak awal.", perkaraTerkait: 5 },
  { putusan: "Koreksi pajak atas biaya replanting", forum: "Pengadilan Pajak", tahun: "2025", hasil: "Menguntungkan", pelajaran: "Konsistensi kebijakan akuntansi & dokumentasi teknis agronomi menjadi dasar kuat menolak koreksi biaya.", perkaraTerkait: 4 },
];

/* ── 5g. Agenda Advokasi Kebijakan ────────────────────────────────── */

export interface HkmAdvocacyRow {
  isu: string;
  regulasi: string;
  posisiPerusahaan: string;
  /** Dampak finansial/operasional bila kebijakan tidak berubah. */
  dampak: string;
  kanal: string;
  status: "Aktif" | "Menunggu Respons" | "Selesai";
  tone: "red" | "amber" | "green";
  href?: string;
  hrefLabel?: string;
}

export const advocacyAgenda: HkmAdvocacyRow[] = [
  {
    isu: "EUDR — Penundaan & Pengakuan Skema Nasional",
    regulasi: "EU Deforestation Regulation (EU) 2023/1115",
    posisiPerusahaan: "Mendorong pengakuan ISPO sebagai bukti kepatuhan dan penyederhanaan due-diligence statement per pengapalan.",
    dampak: "Nilai ekspor terpapar EU ±Rp 4,1 T setahun",
    kanal: "GAPKI, Kemendag, Kementerian LH, delegasi UE",
    status: "Aktif",
    tone: "red",
    href: "/esg-sustainability/deforestasi-eudr",
    hrefLabel: "Deforestasi & EUDR",
  },
  {
    isu: "DMO & DPO Minyak Goreng",
    regulasi: "Permendag kewajiban pasokan dalam negeri",
    posisiPerusahaan: "Mendorong formula harga yang mencerminkan biaya produksi dan mekanisme kompensasi rasio ekspor yang stabil.",
    dampak: "Selisih harga DMO menekan margin ±Rp 240 M setahun",
    kanal: "Kemendag, BPDPKS, asosiasi industri",
    status: "Menunggu Respons",
    tone: "amber",
    href: "/risiko-kepatuhan/kepatuhan-regulasi",
    hrefLabel: "Kepatuhan Regulasi",
  },
  {
    isu: "Percepatan Perpanjangan & Penyelesaian HGU",
    regulasi: "Peraturan pertanahan & tata ruang (ATR/BPN)",
    posisiPerusahaan: "Mendorong jalur khusus perpanjangan HGU BUMN perkebunan dan mekanisme penyelesaian okupasi yang berkepastian hukum.",
    dampak: "212 rb ha HGU berakhir dalam 5 tahun; 82,4 rb ha areal bersengketa",
    kanal: "ATR/BPN, Kementerian BUMN, Danantara",
    status: "Aktif",
    tone: "red",
    href: "/aset-investasi/land-bank",
    hrefLabel: "Land Bank & HGU",
  },
  {
    isu: "Insentif Bioetanol & Mandatori Pencampuran",
    regulasi: "Kebijakan energi terbarukan & mandatori E5/E10",
    posisiPerusahaan: "Mendorong kepastian offtaker dan skema harga jangka panjang sebagai dasar keekonomian proyek bioetanol.",
    dampak: "Keekonomian proyek Rp 2,8 T bergantung kepastian offtake",
    kanal: "Kementerian ESDM, Pertamina, Kementerian BUMN",
    status: "Aktif",
    tone: "amber",
    href: "/aset-investasi/portofolio-investasi",
    hrefLabel: "Portofolio Investasi",
  },
  {
    isu: "Harmonisasi Perizinan Lingkungan Daerah",
    regulasi: "Perda & peraturan pelaksana perizinan lingkungan",
    posisiPerusahaan: "Mendorong standardisasi persyaratan teknis antar-daerah agar lead time perpanjangan izin dapat diprediksi.",
    dampak: "19 izin kritikal berakhir ≤6 bulan dengan lead time 60–90 hari",
    kanal: "Pemda, Kementerian LH, asosiasi",
    status: "Menunggu Respons",
    tone: "amber",
    href: "/hukum/perizinan",
    hrefLabel: "Perizinan & Lisensi",
  },
];

/* ── 5h. Insight & Rekomendasi ────────────────────────────────────── */

export const litigasiInsights: HkmInsight[] = [
  {
    insight:
      "Hanya 52 dari 214 kasus sengketa lahan yang masuk jalur hukum, tetapi jalur pengadilan (34 kasus) rata-rata memakan 34 bulan — jauh lebih lambat dan mahal dibanding mediasi (8 bulan, biaya Rp 0,4 M per kasus).",
    rekomendasi:
      "Wajibkan tahap mediasi terstruktur dengan mandat settlement bernilai sebelum perkara didaftarkan, kecuali pada kasus okupasi terorganisir.",
  },
  {
    insight:
      "Bauran legal spend masih 70% reaktif (retainer + litigasi Rp 67 M dari Rp 96 M), padahal preseden menunjukkan kemenangan ditentukan oleh kualitas dokumen (tata batas, penguasaan fisik, jaminan) yang dibangun sebelum sengketa.",
    rekomendasi:
      "Alihkan porsi anggaran ke notaris/sertipikasi & dokumentasi lapangan pada RKAP 2027 dengan target bauran preventif minimal 40%.",
  },
  {
    insight:
      "Kinerja firma eksternal timpang: Firma D (ketenagakerjaan) skor 76 dengan win rate 67%, sementara Firma C (arbitrase) skor 91 — tanpa mekanisme evaluasi berkala, alokasi perkara tidak optimal.",
    rekomendasi:
      "Terapkan panel firma dengan evaluasi semesteran berbasis skor kinerja dan alokasi perkara baru mengikuti hasil evaluasi; kaji penanganan in-house untuk perkara PHI berulang.",
  },
];

/* #endregion */
