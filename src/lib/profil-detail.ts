/**
 * Data mockup halaman detail kartu profil karyawan (Rizky Putra).
 * Konsisten dengan profil spotlight di `profil-data.ts`.
 */
import type { DetailKpi, BarRow, DetailNote } from "@/components/wa/detail/parts";

/* ── Detail Kinerja ──────────────────────────────────────── */

export const kinerjaKpi: DetailKpi[] = [
  { label: "Skor Kinerja 2025", value: "4,8", suffix: "/ 5,0", delta: "0,4", trend: "up", tone: "green", compare: "vs 4,4 (2024)" },
  { label: "Rata-rata 3 Tahun", value: "4,5", suffix: "/ 5,0", delta: "0,2", trend: "up", tone: "green", compare: "vs kohort grade G7 4,1" },
  { label: "Pencapaian KPI", value: "96", suffix: "%", delta: "3 pt", trend: "up", tone: "green", compare: "8 dari 9 KPI tercapai" },
  { label: "Ranking di Unit", value: "#2", suffix: "dari 18", delta: "naik 1", trend: "up", tone: "green", compare: "asisten afdeling Regional 1" },
  { label: "Kalibrasi Nine-Box", value: "HiPo", delta: "tetap", trend: "flat", tone: "neutral", compare: "kuadran kanan-atas, 2 siklus" },
];

export const kinerjaKpiRows = [
  { kpi: "Produksi TBS Afdeling", bobot: "20%", target: "31.200 ton", realisasi: "32.450 ton", capaian: "104%", skor: "4,9", status: "Melampaui" },
  { kpi: "Yield per Hektar", bobot: "15%", target: "21,4 ton/ha", realisasi: "22,1 ton/ha", capaian: "103%", skor: "4,8", status: "Melampaui" },
  { kpi: "Biaya Panen per Kg", bobot: "15%", target: "Rp 118/kg", realisasi: "Rp 112/kg", capaian: "105%", skor: "4,9", status: "Melampaui" },
  { kpi: "Kualitas Sortasi (ALB)", bobot: "10%", target: "≤ 2,8%", realisasi: "2,6%", capaian: "102%", skor: "4,7", status: "Melampaui" },
  { kpi: "Kehadiran & Disiplin Tim", bobot: "10%", target: "≥ 96%", realisasi: "97,2%", capaian: "101%", skor: "4,6", status: "Tercapai" },
  { kpi: "Zero Accident (K3)", bobot: "10%", target: "0 LTI", realisasi: "0 LTI", capaian: "100%", skor: "5,0", status: "Tercapai" },
  { kpi: "Program Efisiensi Pupuk", bobot: "8%", target: "Hemat 4%", realisasi: "Hemat 5,2%", capaian: "108%", skor: "4,8", status: "Melampaui" },
  { kpi: "Pengembangan 2 Mandor", bobot: "7%", target: "2 orang", realisasi: "2 orang", capaian: "100%", skor: "4,5", status: "Tercapai" },
  { kpi: "Digitalisasi Pencatatan Panen", bobot: "5%", target: "100% blok", realisasi: "92% blok", capaian: "92%", skor: "3,9", status: "Hampir" },
];

export const kinerjaTren: BarRow[] = [
  { label: "2021", value: 3.9, valueLabel: "3,9" },
  { label: "2022", value: 4.1, valueLabel: "4,1" },
  { label: "2023", value: 4.3, valueLabel: "4,3" },
  { label: "2024", value: 4.4, valueLabel: "4,4" },
  { label: "2025", value: 4.8, valueLabel: "4,8", color: "#1a9c5b" },
];

export const kinerjaNotes: DetailNote[] = [
  { title: "Konsisten di kuartil atas", detail: "Lima tahun berturut skor naik; 2025 masuk 3 besar dari 18 asisten afdeling di Regional 1.", tone: "green" },
  { title: "Satu KPI di bawah target", detail: "Digitalisasi pencatatan panen 92% — terkendala jaringan di 2 blok terpencil; target tuntas Q3 2026.", tone: "amber" },
  { title: "Dampak kalibrasi", detail: "Hasil kalibrasi komite talenta menguatkan rekomendasi suksesi Afdeling Manager 1–2 tahun.", tone: "blue" },
];

export const kinerjaDefs = [
  { term: "Skor Kinerja", text: "Rata-rata tertimbang capaian KPI individu, skala 1–5, hasil kalibrasi komite." },
  { term: "Capaian", text: "Realisasi dibagi target KPI; dibatasi 110% untuk mencegah distorsi bobot." },
  { term: "Sumber", text: "Sistem Manajemen Kinerja (SMK) PTPN, siklus penilaian FY 2025." },
];

/* ── Semua Kompetensi ────────────────────────────────────── */

export const kompetensiKpi: DetailKpi[] = [
  { label: "Rata-rata Level", value: "4,5", suffix: "/ 5,0", delta: "0,3", trend: "up", tone: "green", compare: "vs asesmen 2023" },
  { label: "Di Atas Standar Grade", value: "9", suffix: "dari 12", delta: "2", trend: "up", tone: "green", compare: "standar grade G7" },
  { label: "Gap Kritis", value: "0", delta: "tetap", trend: "flat", tone: "neutral", compare: "tidak ada gap ≥ 1,0" },
  { label: "Persentil di Unit", value: "P92", delta: "4 pt", trend: "up", tone: "green", compare: "kohort asisten Regional 1" },
  { label: "Kesiapan Jabatan Target", value: "87", suffix: "%", delta: "6 pt", trend: "up", tone: "green", compare: "profil Afdeling Manager" },
];

export const kompetensiRows = [
  { kompetensi: "Manajemen Kebun", kategori: "Teknis", aktual: "4,8", standar: "4,0", gap: "+0,8", metode: "Asesmen panel + observasi", tanggal: "Mar 2025" },
  { kompetensi: "Kerja Sama Tim", kategori: "Perilaku", aktual: "4,7", standar: "4,0", gap: "+0,7", metode: "360° feedback", tanggal: "Mar 2025" },
  { kompetensi: "Kepemimpinan", kategori: "Kepemimpinan", aktual: "4,6", standar: "4,0", gap: "+0,6", metode: "Assessment center", tanggal: "Mar 2025" },
  { kompetensi: "Problem Solving", kategori: "Kognitif", aktual: "4,5", standar: "4,0", gap: "+0,5", metode: "Studi kasus", tanggal: "Mar 2025" },
  { kompetensi: "Komunikasi", kategori: "Perilaku", aktual: "4,4", standar: "4,0", gap: "+0,4", metode: "360° feedback", tanggal: "Mar 2025" },
  { kompetensi: "Agronomi Kelapa Sawit", kategori: "Teknis", aktual: "4,4", standar: "4,0", gap: "+0,4", metode: "Uji kompetensi", tanggal: "Feb 2025" },
  { kompetensi: "Manajemen K3", kategori: "Teknis", aktual: "4,3", standar: "4,0", gap: "+0,3", metode: "Sertifikasi + observasi", tanggal: "Feb 2025" },
  { kompetensi: "Perencanaan & Penganggaran", kategori: "Manajerial", aktual: "4,1", standar: "4,0", gap: "+0,1", metode: "Asesmen panel", tanggal: "Mar 2025" },
  { kompetensi: "Coaching & Pembinaan", kategori: "Kepemimpinan", aktual: "4,0", standar: "4,0", gap: "0,0", metode: "360° feedback", tanggal: "Mar 2025" },
  { kompetensi: "Analitik Data Operasional", kategori: "Digital", aktual: "3,8", standar: "4,0", gap: "-0,2", metode: "Uji praktik", tanggal: "Mar 2025" },
  { kompetensi: "Manajemen Perubahan", kategori: "Manajerial", aktual: "3,7", standar: "4,0", gap: "-0,3", metode: "Assessment center", tanggal: "Mar 2025" },
  { kompetensi: "Negosiasi & Stakeholder", kategori: "Perilaku", aktual: "3,6", standar: "4,0", gap: "-0,4", metode: "Studi kasus", tanggal: "Mar 2025" },
];

export const kompetensiNotes: DetailNote[] = [
  { title: "Kekuatan utama teknis-kebun", detail: "Manajemen kebun & agronomi jauh di atas standar; jadi rujukan praktik untuk asisten baru.", tone: "green" },
  { title: "3 area pengembangan", detail: "Analitik data, manajemen perubahan, dan negosiasi masih di bawah standar grade — sudah masuk IDP 2026.", tone: "amber" },
  { title: "Syarat jabatan target", detail: "Profil Afdeling Manager mensyaratkan seluruh kompetensi manajerial ≥ 4,0; dua item tersisa diproyeksikan tuntas Q4 2026.", tone: "blue" },
];

export const kompetensiDefs = [
  { term: "Standar Grade", text: "Level minimum kompetensi untuk grade G7 sesuai kamus kompetensi PTPN." },
  { term: "Gap", text: "Level aktual dikurangi standar grade; negatif berarti area pengembangan." },
  { term: "Sumber", text: "Talent Management System — siklus asesmen kompetensi 2025." },
];

/* ── Riwayat Pelatihan & Sertifikasi ─────────────────────── */

export const pelatihanKpi: DetailKpi[] = [
  { label: "Total Pelatihan", value: "14", suffix: "program", delta: "3", trend: "up", tone: "green", compare: "sejak bergabung 2018" },
  { label: "Jam Belajar 2025", value: "86", suffix: "jam", delta: "12 jam", trend: "up", tone: "green", compare: "target tahunan 72 jam" },
  { label: "Sertifikasi Aktif", value: "4", delta: "1", trend: "up", tone: "green", compare: "profesional & wajib" },
  { label: "Akan Kadaluarsa", value: "1", suffix: "< 12 bln", delta: "perlu resertifikasi", trend: "flat", tone: "amber", compare: "ISPO Auditor Internal" },
  { label: "Compliance Wajib", value: "100", suffix: "%", delta: "tetap", trend: "flat", tone: "neutral", compare: "K3 & AK3 lengkap" },
];

export const pelatihanRows = [
  { nama: "Advanced Estate Management", kategori: "Manajerial", penyelenggara: "LPP Agri Nusantara", durasi: "40 jam", tanggal: "Mar 2025", hasil: "Skor 91 — Lulus" },
  { nama: "Data Analytics for Plantation", kategori: "Digital", penyelenggara: "PTPN Learning Center", durasi: "24 jam", tanggal: "Jan 2025", hasil: "Skor 84 — Lulus" },
  { nama: "Supervisory Development Program", kategori: "Kepemimpinan", penyelenggara: "PTPN Learning Center", durasi: "32 jam", tanggal: "Sep 2024", hasil: "Peringkat 3 dari 28" },
  { nama: "Manajemen Kebun Kelapa Sawit", kategori: "Teknis", penyelenggara: "LPP Agri Nusantara", durasi: "40 jam", tanggal: "Okt 2023", hasil: "Skor 93 — Lulus" },
  { nama: "Ahli K3 Umum (AK3U)", kategori: "Wajib", penyelenggara: "Kemnaker RI", durasi: "120 jam", tanggal: "Mei 2023", hasil: "Tersertifikasi" },
  { nama: "Basic Leadership Program", kategori: "Kepemimpinan", penyelenggara: "PTPN Learning Center", durasi: "24 jam", tanggal: "Jun 2022", hasil: "Skor 88 — Lulus" },
  { nama: "ISPO Auditor Internal", kategori: "Teknis", penyelenggara: "ISPO Training Center", durasi: "32 jam", tanggal: "Mar 2022", hasil: "Tersertifikasi" },
  { nama: "Good Agricultural Practices (GAP)", kategori: "Teknis", penyelenggara: "ISPO Training Center", durasi: "16 jam", tanggal: "Feb 2021", hasil: "Skor 90 — Lulus" },
];

export const sertifikasiRows = [
  { nama: "Ahli K3 Umum (AK3U)", lembaga: "Kemnaker RI", terbit: "Mei 2023", berlaku: "Mei 2026", status: "Aktif" },
  { nama: "ISPO Auditor Internal", lembaga: "Komisi ISPO", terbit: "Mar 2022", berlaku: "Mar 2027", status: "Aktif — resertifikasi Q1 2027" },
  { nama: "Manajer Kebun Madya (BNSP)", lembaga: "LSP Perkebunan", terbit: "Nov 2024", berlaku: "Nov 2027", status: "Aktif" },
  { nama: "First Aid & Emergency Response", lembaga: "PMI", terbit: "Agu 2024", berlaku: "Agu 2026", status: "Aktif" },
];

export const pelatihanNotes: DetailNote[] = [
  { title: "Jalur suksesi terpenuhi", detail: "Sertifikasi Manajer Kebun Madya (BNSP) adalah syarat formal jabatan Afdeling Manager — sudah dikantongi Nov 2024.", tone: "green" },
  { title: "Resertifikasi ISPO", detail: "Berlaku sampai Mar 2027; jadwalkan refreshment H2 2026 agar tidak bentrok musim panen puncak.", tone: "amber" },
];

export const pelatihanDefs = [
  { term: "Jam Belajar", text: "Total jam pelatihan terverifikasi LMS dalam satu tahun kalender." },
  { term: "Compliance Wajib", text: "Kepatuhan pelatihan yang dipersyaratkan regulasi (K3, ISPO) untuk jabatan berjalan." },
  { term: "Sumber", text: "LMS PTPN & registri sertifikasi SDM, per 31 Mei 2026." },
];

/* ── Semua Penghargaan ───────────────────────────────────── */

export const penghargaanKpi: DetailKpi[] = [
  { label: "Total Penghargaan", value: "6", delta: "1", trend: "up", tone: "green", compare: "sejak 2020" },
  { label: "Tingkat Korporat/Nasional", value: "2", delta: "1", trend: "up", tone: "green", compare: "sisanya tingkat regional" },
  { label: "Penghargaan Terakhir", value: "2024", delta: "Best Employee", trend: "flat", tone: "neutral", compare: "Kebun Tanah Jawa" },
  { label: "Basis Prestasi", value: "4", suffix: "kinerja", delta: "2 inovasi", trend: "flat", tone: "neutral", compare: "komposisi 6 penghargaan" },
  { label: "Dampak Terdokumentasi", value: "Rp 1,2 M", delta: "efisiensi", trend: "flat", tone: "green", compare: "program efisiensi pupuk 2023" },
];

export const penghargaanRows = [
  { nama: "Best Employee — Kebun Tanah Jawa", tingkat: "Unit", pemberi: "PTPN IV Regional 1", tahun: "2024", dasar: "Skor kinerja tertinggi #1 di kebun, pencapaian KPI 104%" },
  { nama: "Inisiator Program Efisiensi Pupuk", tingkat: "Regional", pemberi: "PTPN IV Regional 1", tahun: "2023", dasar: "Efisiensi biaya pupuk 5,2% ≈ Rp 1,2 M/tahun tanpa penurunan yield" },
  { nama: "Karyawan Teladan", tingkat: "Regional", pemberi: "PTPN IV Regional 1", tahun: "2022", dasar: "Disiplin, kepemimpinan tim panen, zero accident 24 bulan" },
  { nama: "Kontributor Data Produksi Terbaik", tingkat: "Unit", pemberi: "Kebun Tanah Jawa", tahun: "2021", dasar: "Akurasi & ketepatan waktu pelaporan produksi harian 99,4%" },
  { nama: "Juara 2 Inovasi Muda Perkebunan", tingkat: "Korporat", pemberi: "Holding PTPN III", tahun: "2021", dasar: "Aplikasi sederhana pencatatan panen berbasis ponsel" },
  { nama: "Lulusan Terbaik Program Orientasi", tingkat: "Korporat", pemberi: "PTPN Learning Center", tahun: "2020", dasar: "Peringkat 1 dari 64 peserta batch orientasi asisten" },
];

export const penghargaanNotes: DetailNote[] = [
  { title: "Pola prestasi konsisten", detail: "Minimal satu penghargaan per tahun sejak 2020 — indikator kinerja berkelanjutan, bukan capaian sesaat.", tone: "green" },
  { title: "Nilai bisnis terukur", detail: "Dua penghargaan berbasis inovasi dengan dampak finansial terdokumentasi; layak dibawa ke forum talent review.", tone: "blue" },
];

export const penghargaanDefs = [
  { term: "Tingkat", text: "Unit (kebun), Regional (subholding regional), Korporat (holding PTPN)." },
  { term: "Dasar", text: "Justifikasi resmi pada surat keputusan penghargaan." },
  { term: "Sumber", text: "Registri penghargaan HRIS, diverifikasi bagian SDM Regional 1." },
];

/* ── Riwayat Pendidikan ──────────────────────────────────── */

export const pendidikanKpi: DetailKpi[] = [
  { label: "Jenjang Tertinggi", value: "S1", suffix: "Agronomi", delta: "IPK 3,45", trend: "flat", tone: "neutral", compare: "Universitas Sumatera Utara" },
  { label: "Predikat", value: "Cumlaude", delta: "peringkat 5 fakultas", trend: "flat", tone: "green", compare: "lulus 4 tahun tepat waktu" },
  { label: "Pendidikan Non-Gelar", value: "3", suffix: "program", delta: "1", trend: "up", tone: "green", compare: "sejak 2021" },
  { label: "Beasiswa", value: "1", delta: "penuh", trend: "flat", tone: "neutral", compare: "PPA semester 5–8" },
  { label: "Rencana Pengembangan", value: "S2", suffix: "2027", delta: "diusulkan", trend: "flat", tone: "amber", compare: "Magister Manajemen Agribisnis" },
];

export const pendidikanFormalRows = [
  { jenjang: "S1 — Agronomi", institusi: "Universitas Sumatera Utara", periode: "2012 – 2016", hasil: "IPK 3,45 / 4,00 — Cumlaude", keterangan: "Skripsi: optimasi pemupukan TBM kelapa sawit; beasiswa PPA" },
  { jenjang: "SMA — IPA", institusi: "SMAN 2 Pematang Siantar", periode: "2009 – 2012", hasil: "Nilai akhir 88,4", keterangan: "Ketua OSIS 2011; olimpiade biologi tingkat provinsi" },
  { jenjang: "SMP", institusi: "SMPN 1 Pematang Siantar", periode: "2006 – 2009", hasil: "Lulus", keterangan: "—" },
];

export const pendidikanNonGelarRows = [
  { program: "Executive Course: Plantation Business", institusi: "IPB University", periode: "2024", hasil: "Sertifikat kelulusan", keterangan: "Sponsor perusahaan — 5 hari intensif" },
  { program: "Micro-credential Data Analytics", institusi: "PTPN Learning Center × Coursera", periode: "2023", hasil: "Skor 88", keterangan: "Mandiri, di luar jam kerja" },
  { program: "Kursus Bahasa Inggris Bisnis", institusi: "LIA Medan", periode: "2021", hasil: "CEFR B2", keterangan: "Persiapan program pengembangan korporat" },
];

export const pendidikanNotes: DetailNote[] = [
  { title: "Usulan S2 2027", detail: "Masuk daftar kandidat beasiswa Magister Manajemen Agribisnis holding; keputusan komite beasiswa Q1 2027.", tone: "amber" },
  { title: "Relevansi tinggi", detail: "Latar agronomi + micro-credential analitik selaras kebutuhan digitalisasi kebun pada jalur suksesi manajerial.", tone: "blue" },
];

export const pendidikanDefs = [
  { term: "Pendidikan Non-Gelar", text: "Program terstruktur tanpa gelar akademik: kursus eksekutif, micro-credential, kursus bahasa." },
  { term: "Sumber", text: "Dokumen ijazah/transkrip terverifikasi HRIS + registri pengembangan SDM." },
];

/* ── Riwayat Jabatan ─────────────────────────────────────── */

export const riwayatJabatanKpi: DetailKpi[] = [
  { label: "Total Masa Kerja", value: "8", suffix: "thn 4 bln", delta: "sejak Jan 2018", trend: "flat", tone: "neutral", compare: "seluruhnya di PTPN IV" },
  { label: "Jumlah Jabatan", value: "4", delta: "1 unit kerja", trend: "flat", tone: "neutral", compare: "seluruhnya Kebun Tanah Jawa" },
  { label: "Promosi", value: "3", delta: "terakhir Jan 2023", trend: "flat", tone: "green", compare: "rata-rata 20 bulan/promosi" },
  { label: "Tenure Jabatan Ini", value: "3", suffix: "thn 4 bln", delta: "Asisten Afdeling", trend: "flat", tone: "neutral", compare: "median promosi grade G7: 3 thn" },
  { label: "Mobilitas Lintas Unit", value: "0", delta: "area pengembangan", trend: "flat", tone: "amber", compare: "syarat lunak jabatan manajer" },
];

export const riwayatJabatanRows = [
  { jabatan: "Asisten Afdeling", unit: "Kebun Tanah Jawa, Regional 1", grade: "G7", periode: "Jan 2023 – Sekarang", durasi: "3 thn 4 bln", jenis: "Promosi", atasan: "Ahmad Fauzi (Afdeling Manager)" },
  { jabatan: "Asisten Mandor", unit: "Kebun Tanah Jawa, Regional 1", grade: "G6", periode: "Jan 2021 – Des 2022", durasi: "2 thn", jenis: "Promosi", atasan: "Budi Hartono (Asisten Afdeling)" },
  { jabatan: "Mandor Panen", unit: "Kebun Tanah Jawa, Regional 1", grade: "G5", periode: "Jul 2019 – Des 2020", durasi: "1 thn 6 bln", jenis: "Promosi", atasan: "Budi Hartono (Asisten Afdeling)" },
  { jabatan: "Management Trainee (Planter)", unit: "Kebun Tanah Jawa, Regional 1", grade: "G4", periode: "Jan 2018 – Jun 2019", durasi: "1 thn 6 bln", jenis: "Rekrutmen MT", atasan: "Rudi Simanjuntak (Afdeling Manager)" },
];

export const riwayatDurasi: BarRow[] = [
  { label: "Asisten Afdeling (aktif)", value: 40, valueLabel: "40 bln", color: "#1a9c5b" },
  { label: "Asisten Mandor", value: 24, valueLabel: "24 bln" },
  { label: "Mandor Panen", value: 18, valueLabel: "18 bln" },
  { label: "Management Trainee", value: 18, valueLabel: "18 bln" },
];

export const riwayatJabatanNotes: DetailNote[] = [
  { title: "Jalur cepat konsisten", detail: "Tiga promosi dalam 8 tahun — lebih cepat dari median kohort MT 2018 (2 promosi).", tone: "green" },
  { title: "Belum lintas unit", detail: "Seluruh karier di satu kebun. Rotasi ke kebun lain atau kantor regional disarankan sebelum promosi Afdeling Manager.", tone: "amber" },
  { title: "Rekomendasi komite", detail: "Masuk rencana suksesi Afdeling Manager (siap 1–2 thn); rotasi pengayaan diusulkan mulai Q1 2027.", tone: "blue" },
];

export const riwayatJabatanDefs = [
  { term: "Jenis Perubahan", text: "Promosi (naik grade), mutasi (pindah unit level sama), atau rekrutmen." },
  { term: "Tenure", text: "Lama menjabat pada satu posisi; pembanding = median grade yang sama." },
  { term: "Sumber", text: "Riwayat SK kepegawaian HRIS, per 31 Mei 2026." },
];

/* ── Mutasi & Penugasan ──────────────────────────────────── */

export const mutasiKpi: DetailKpi[] = [
  { label: "Total Mutasi", value: "3", delta: "seluruhnya promosi", trend: "flat", tone: "neutral", compare: "dalam 1 unit kebun" },
  { label: "Penugasan Khusus", value: "4", delta: "1", trend: "up", tone: "green", compare: "2 masih berjalan" },
  { label: "Mutasi Lintas Unit", value: "0", delta: "area pengembangan", trend: "flat", tone: "amber", compare: "syarat lunak Afdeling Manager" },
  { label: "Penugasan Aktif", value: "2", delta: "tim korporat & regional", trend: "flat", tone: "neutral", compare: "di luar tugas pokok" },
  { label: "SK Terdokumentasi", value: "100", suffix: "%", delta: "tetap", trend: "flat", tone: "green", compare: "7 dari 7 tervalidasi" },
];

export const mutasiRows = [
  { jenis: "Penugasan", deskripsi: "Tim Transformasi Digital Kebun — Regional 1", peran: "Anggota — pilot pencatatan panen digital", periode: "Feb 2025 – Sekarang", status: "Berjalan", sk: "SK-114/R1/2025" },
  { jenis: "Penugasan", deskripsi: "Mentor Program Orientasi Asisten Baru", peran: "Mentor 3 asisten batch 2024", periode: "Sep 2024 – Sekarang", status: "Berjalan", sk: "SK-236/R1/2024" },
  { jenis: "Penugasan", deskripsi: "Tim Panen Raya — Divisi Operasional", peran: "Koordinator lapangan Afdeling I", periode: "Okt 2023 – Des 2023", status: "Selesai", sk: "SK-301/KTJ/2023" },
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Asisten Afdeling", peran: "Afdeling I — Kebun Tanah Jawa", periode: "Efektif 01 Jan 2023", status: "Selesai", sk: "SK-002/R1/2023" },
  { jenis: "Penugasan", deskripsi: "Tim Percepatan Produksi PPKS", peran: "Anggota — uji coba bibit unggul", periode: "Jul 2022 – Jun 2023", status: "Selesai", sk: "SK-178/R1/2022" },
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Asisten Mandor", peran: "Afdeling I — Kebun Tanah Jawa", periode: "Efektif 01 Jan 2021", status: "Selesai", sk: "SK-004/KTJ/2021" },
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Mandor Panen", peran: "Afdeling I — Kebun Tanah Jawa", periode: "Efektif 01 Jul 2019", status: "Selesai", sk: "SK-089/KTJ/2019" },
];

export const mutasiNotes: DetailNote[] = [
  { title: "Penugasan lintas fungsi aktif", detail: "Dua penugasan berjalan (transformasi digital & mentoring) memperluas eksposur di luar tugas pokok afdeling.", tone: "green" },
  { title: "Belum ada mutasi lintas unit", detail: "Seluruh karier di Kebun Tanah Jawa; rotasi ke kebun lain diusulkan Q1 2027 sebagai pengayaan pra-promosi.", tone: "amber" },
];

export const mutasiDefs = [
  { term: "Mutasi", text: "Perpindahan penempatan/jabatan berdasarkan SK penempatan." },
  { term: "Penugasan", text: "Tugas tambahan di luar jabatan struktural, berbasis SK tim/proyek." },
  { term: "Sumber", text: "Registri SK kepegawaian HRIS, per 31 Mei 2026." },
];

/* ── Perubahan Data Kepegawaian ──────────────────────────── */

export const perubahanKpi: DetailKpi[] = [
  { label: "Total Perubahan", value: "9", delta: "2 di 2023", trend: "flat", tone: "neutral", compare: "sejak bergabung 2018" },
  { label: "Perubahan Struktural", value: "6", delta: "grade, jabatan, unit", trend: "flat", tone: "neutral", compare: "3 sisanya administratif" },
  { label: "Kenaikan Grade", value: "3", delta: "terakhir Jan 2023", trend: "flat", tone: "green", compare: "G4 → G7" },
  { label: "Menunggu Persetujuan", value: "0", delta: "tidak ada antrean", trend: "flat", tone: "green", compare: "seluruh pengajuan tuntas" },
  { label: "Terverifikasi Berkas", value: "100", suffix: "%", delta: "tetap", trend: "flat", tone: "green", compare: "audit dokumen Mar 2026" },
];

export const perubahanRows = [
  { perubahan: "Grade", dari: "G6", menjadi: "G7", tipe: "Kenaikan Grade", tanggal: "01 Jan 2023", oleh: "HR Regional 1", dasar: "SK-002/R1/2023" },
  { perubahan: "Jabatan", dari: "Asisten Mandor", menjadi: "Asisten Afdeling", tipe: "Promosi Jabatan", tanggal: "01 Jan 2023", oleh: "HR Regional 1", dasar: "SK-002/R1/2023" },
  { perubahan: "Unit Kerja", dari: "Kebun Tanah Jawa", menjadi: "Afdeling I — Kebun Tanah Jawa", tipe: "Perubahan Unit", tanggal: "01 Jan 2023", oleh: "HR Regional 1", dasar: "SK-002/R1/2023" },
  { perubahan: "Grade", dari: "G5", menjadi: "G6", tipe: "Kenaikan Grade", tanggal: "01 Jan 2021", oleh: "HR Regional 1", dasar: "SK-004/KTJ/2021" },
  { perubahan: "Jabatan", dari: "Mandor Panen", menjadi: "Asisten Mandor", tipe: "Promosi Jabatan", tanggal: "01 Jan 2021", oleh: "HR Regional 1", dasar: "SK-004/KTJ/2021" },
  { perubahan: "Grade", dari: "G4", menjadi: "G5", tipe: "Kenaikan Grade", tanggal: "01 Jul 2019", oleh: "HR Kebun Tanah Jawa", dasar: "SK-089/KTJ/2019" },
  { perubahan: "Status Pernikahan", dari: "Belum Menikah", menjadi: "Menikah", tipe: "Data Pribadi", tanggal: "20 Mei 2019", oleh: "Self-service (verifikasi HR)", dasar: "Akta nikah" },
  { perubahan: "Status Kepegawaian", dari: "Management Trainee", menjadi: "Karyawan Tetap", tipe: "Perubahan Status", tanggal: "12 Jan 2018", oleh: "HR Regional 1", dasar: "SK-011/R1/2018" },
  { perubahan: "Domisili", dari: "Medan", menjadi: "Pematang Siantar", tipe: "Data Pribadi", tanggal: "05 Feb 2018", oleh: "Self-service (verifikasi HR)", dasar: "KTP terbaru" },
];

export const perubahanNotes: DetailNote[] = [
  { title: "Jejak audit lengkap", detail: "Seluruh perubahan struktural berbasis SK resmi; perubahan data pribadi lewat self-service dengan verifikasi HR.", tone: "green" },
  { title: "Tidak ada antrean", detail: "Tidak ada pengajuan perubahan data yang menunggu persetujuan per 31 Mei 2026.", tone: "blue" },
];

export const perubahanDefs = [
  { term: "Perubahan Struktural", text: "Grade, jabatan, unit kerja, status kepegawaian — wajib berbasis SK." },
  { term: "Data Pribadi", text: "Perubahan administratif (alamat, status keluarga) via self-service HRIS." },
  { term: "Sumber", text: "Audit trail HRIS modul kepegawaian, per 31 Mei 2026." },
];

/* ── Rekomendasi Pengembangan (IDP) ──────────────────────── */

export const rekomendasiKpi: DetailKpi[] = [
  { label: "Gap Teridentifikasi", value: "5", suffix: "kompetensi", delta: "2 prioritas tinggi", trend: "flat", tone: "amber", compare: "asesmen skills gap 2025" },
  { label: "Program Direkomendasikan", value: "8", delta: "3 sudah berjalan", trend: "flat", tone: "neutral", compare: "pola 70:20:10" },
  { label: "Estimasi Jam Belajar", value: "128", suffix: "jam", delta: "12 bulan", trend: "flat", tone: "neutral", compare: "di dalam kuota IDP 2026" },
  { label: "Proyeksi Gap Tertutup", value: "80", suffix: "%", delta: "Q4 2026", trend: "up", tone: "green", compare: "4 dari 5 gap" },
  { label: "Keselarasan Suksesi", value: "Tinggi", delta: "Afdeling Manager", trend: "flat", tone: "green", compare: "seluruh program menunjang kesiapan" },
];

export const rekomendasiRows = [
  { kompetensi: "Analisis Data", gap: "-2", intervensi: "10 — Formal Learning", program: "Data Analytics for Plantation (lanjutan)", metode: "Kelas + praktik dataset kebun", durasi: "32 jam", mulai: "Jul 2026", prioritas: "Tinggi", status: "Dijadwalkan" },
  { kompetensi: "Analisis Data", gap: "-2", intervensi: "70 — On the Job", program: "Pilot dashboard produksi Afdeling I", metode: "Penugasan proyek nyata", durasi: "3 bulan", mulai: "Agu 2026", prioritas: "Tinggi", status: "Diusulkan" },
  { kompetensi: "Inovasi & Kreativitas", gap: "-1", intervensi: "70 — On the Job", program: "Lead inisiatif improvement panen", metode: "Proyek kaizen lintas mandor", durasi: "4 bulan", mulai: "Sep 2026", prioritas: "Tinggi", status: "Diusulkan" },
  { kompetensi: "Kepemimpinan", gap: "-1", intervensi: "20 — Social Learning", program: "Mentoring oleh Afdeling Manager senior", metode: "Sesi bulanan terstruktur", durasi: "6 bulan", mulai: "Berjalan", prioritas: "Sedang", status: "Berjalan" },
  { kompetensi: "Kepemimpinan", gap: "-1", intervensi: "10 — Formal Learning", program: "Situational Leadership II", metode: "Workshop 2 hari + asesmen ulang", durasi: "16 jam", mulai: "Okt 2026", prioritas: "Sedang", status: "Dijadwalkan" },
  { kompetensi: "Manajemen Proyek", gap: "-1", intervensi: "10 — Formal Learning", program: "Project Management Fundamental", metode: "Blended learning LMS", durasi: "24 jam", mulai: "Nov 2026", prioritas: "Sedang", status: "Dijadwalkan" },
  { kompetensi: "Komunikasi Presentasi", gap: "-1", intervensi: "20 — Social Learning", program: "Presentasi rutin forum kinerja regional", metode: "Praktik + umpan balik atasan", durasi: "Berkelanjutan", mulai: "Berjalan", prioritas: "Sedang", status: "Berjalan" },
  { kompetensi: "Komunikasi Presentasi", gap: "-1", intervensi: "10 — Formal Learning", program: "Business Presentation Skills", metode: "Workshop 1 hari", durasi: "8 jam", mulai: "Jan 2027", prioritas: "Rendah", status: "Diusulkan" },
];

export const rekomendasiKomposisi: BarRow[] = [
  { label: "70 — On the Job (proyek/penugasan)", value: 70, valueLabel: "3 program", color: "#1a9c5b" },
  { label: "20 — Social (mentoring/forum)", value: 20, valueLabel: "2 program", color: "#2f6fe4" },
  { label: "10 — Formal (kelas/workshop)", value: 10, valueLabel: "3 program", color: "#d98b06" },
];

export const rekomendasiNotes: DetailNote[] = [
  { title: "Fokus 2026: analisis data", detail: "Gap terbesar (-2) dan paling relevan dengan transformasi digital kebun; dua intervensi berjalan paralel Jul–Nov 2026.", tone: "amber" },
  { title: "Tiga program sudah berjalan", detail: "Mentoring kepemimpinan dan forum presentasi regional dimulai lebih awal karena tanpa biaya tambahan.", tone: "green" },
  { title: "Tinjauan tengah tahun", detail: "Progress IDP direview komite talenta Des 2026; asesmen ulang kompetensi dijadwalkan Mar 2027.", tone: "blue" },
];

export const rekomendasiDefs = [
  { term: "Pola 70:20:10", text: "70% belajar lewat pengalaman kerja, 20% lewat interaksi sosial (mentoring), 10% pelatihan formal." },
  { term: "Prioritas", text: "Tinggi = gap ≥ 2 atau prasyarat jabatan target; Sedang = gap 1 relevan suksesi; Rendah = pelengkap." },
  { term: "Sumber", text: "Individual Development Plan (IDP) 2026 — Talent Management System." },
];

/* ── People Factors (People Math) ────────────────────────── */

export const peopleFactorsKpi: DetailKpi[] = [
  { label: "People Math Score", value: "87", suffix: "/100", delta: "3 pt", trend: "up", tone: "green", compare: "vs siklus 2024 (84)" },
  { label: "Faktor Turunan Dinilai", value: "19", delta: "8 dimensi utama", trend: "flat", tone: "neutral", compare: "formula People Math (21 skor)" },
  { label: "Kekuatan (skor ≥ 88)", value: "7", suffix: "faktor", delta: "2", trend: "up", tone: "green", compare: "terbanyak di Leadership" },
  { label: "Area Pantau (skor < 85)", value: "3", suffix: "faktor", delta: "-1", trend: "up", tone: "amber", compare: "Inisiatif, Umpan Balik, Kolaborasi" },
  { label: "Persentil Kohort", value: "P90", delta: "5 pt", trend: "up", tone: "green", compare: "asisten afdeling grade G7 Regional 1" },
];

/** Rata-rata kohort grade G7 per dimensi — pembanding tabel faktor. */
export const peopleFactorsBenchmark: Record<string, number> = {
  Leadership: 82,
  Character: 84,
  Motivation: 81,
  Skill: 82,
  Knowledge: 80,
  "Learning Agility": 79,
  "Job Fit": 83,
  "Environment Fit": 81,
};

export const peopleFactorsNotes: DetailNote[] = [
  { title: "Kekuatan menonjol: Leadership", detail: "Ketiga faktor (Nagih, Nata, Nuntun) di atas 89 — tertinggi di kohort; fondasi utama rekomendasi suksesi Afdeling Manager.", tone: "green" },
  { title: "Tiga faktor di bawah 85", detail: "Inisiatif (84), Terbuka thd Umpan Balik (84), dan Tim & Kolaborasi (83) — selaras dengan gap IDP; intervensi mentoring sudah berjalan.", tone: "amber" },
  { title: "Skor naik konsisten", detail: "People Math Score naik 84 → 87 dalam satu siklus; kenaikan terbesar di Learning Agility (+4).", tone: "blue" },
];

export const peopleFactorsDefs = [
  { term: "Derivative Score", text: "Skor turunan per faktor (0–100) hasil agregasi asesmen, kinerja, dan umpan balik multi-sumber." },
  { term: "Benchmark G7", text: "Rata-rata kohort grade yang sama di Regional 1 pada siklus berjalan." },
  { term: "Sumber", text: "Mesin People Math — Talent Management System, siklus 2025." },
];

/* ── Job Profile & Target Role ───────────────────────────── */

export const jobProfileKpi: DetailKpi[] = [
  { label: "Role Fit Jabatan Ini", value: "94", suffix: "%", delta: "3 pt", trend: "up", tone: "green", compare: "vs asesmen 2024" },
  { label: "Akuntabilitas Dikuasai", value: "4", suffix: "dari 5", delta: "RKAP berkembang", trend: "flat", tone: "neutral", compare: "jabatan Asisten Afdeling" },
  { label: "Syarat Jabatan Terpenuhi", value: "4", suffix: "dari 5", delta: "1 dalam proses", trend: "flat", tone: "amber", compare: "siklus RKAP penuh Q4 2026" },
  { label: "Fit Jabatan Target", value: "92", suffix: "%", delta: "Afdeling Manager", trend: "up", tone: "green", compare: "Succession Fit komite talenta" },
  { label: "Syarat Target Terpenuhi", value: "5", suffix: "dari 8", delta: "3 dalam proses", trend: "up", tone: "amber", compare: "profil jabatan Afdeling Manager" },
];

export const targetRoleRows = [
  { syarat: "Grade minimum G8", kategori: "Struktural", status: "Proses", keterangan: "Saat ini G7; kenaikan seiring promosi" },
  { syarat: "Kompetensi manajerial ≥ 4,0 seluruh item", kategori: "Kompetensi", status: "Proses", keterangan: "2 item tersisa, proyeksi tuntas Q4 2026" },
  { syarat: "Kompetensi teknis kebun ≥ 4,2", kategori: "Kompetensi", status: "Terpenuhi", keterangan: "Aktual 4,8 — jauh di atas ambang" },
  { syarat: "Sertifikasi BNSP Manajer Kebun Madya", kategori: "Sertifikasi", status: "Terpenuhi", keterangan: "Dikantongi Nov 2024" },
  { syarat: "Sertifikasi AK3U aktif", kategori: "Sertifikasi", status: "Terpenuhi", keterangan: "Berlaku s.d. Mei 2026 — resertifikasi terjadwal" },
  { syarat: "Pengalaman memimpin ≥ 2 asisten/mandor senior", kategori: "Pengalaman", status: "Terpenuhi", keterangan: "Mentor 3 asisten batch 2024" },
  { syarat: "Memimpin 1 siklus RKAP afdeling penuh", kategori: "Pengalaman", status: "Proses", keterangan: "Siklus RKAP 2027 dimulai Sep 2026" },
  { syarat: "Eksposur lintas unit/kebun", kategori: "Pengalaman", status: "Belum", keterangan: "Rotasi pengayaan diusulkan Q1 2027" },
];

export const jobProfileNotes: DetailNote[] = [
  { title: "Hampir penuh di jabatan sekarang", detail: "4 dari 5 akuntabilitas dikuasai; RKAP jadi satu-satunya area berkembang dan sudah difasilitasi penugasan siklus 2027.", tone: "green" },
  { title: "Jalur ke Afdeling Manager jelas", detail: "5 dari 8 syarat target terpenuhi; 3 sisanya semuanya sudah punya rencana dengan tanggal (kompetensi Q4 2026, RKAP Sep 2026, rotasi Q1 2027).", tone: "blue" },
  { title: "Ketergantungan pada rotasi", detail: "Eksposur lintas unit satu-satunya syarat berstatus Belum — konsisten dengan Primary Talent Risk.", tone: "amber" },
];

export const jobProfileDefs = [
  { term: "Role Fit", text: "Kecocokan kompetensi + pengalaman aktual terhadap tuntutan jabatan, dihitung mesin People Math." },
  { term: "Akuntabilitas", text: "Hasil utama yang dipertanggungjawabkan jabatan, dari kamus jabatan PTPN." },
  { term: "Sumber", text: "Kamus jabatan & profil suksesi — Talent Management System, per 31 Mei 2026." },
];

/* ── Perbandingan kandidat suksesi Afdeling Manager ──────── */

export const perbandinganKpi: DetailKpi[] = [
  { label: "Posisi Target", value: "AM", suffix: "Afdeling Manager", delta: "1 lowongan 2027", trend: "flat", tone: "neutral", compare: "Kebun Tanah Jawa / Regional 1" },
  { label: "Kandidat di Pool", value: "3", delta: "hasil komite Mar 2026", trend: "flat", tone: "neutral", compare: "seluruhnya internal Regional 1" },
  { label: "Succession Fit Tertinggi", value: "92", suffix: "%", delta: "Rizky Putra", trend: "up", tone: "green", compare: "kandidat lain 88% & 76%" },
  { label: "Ready Now", value: "1", suffix: "kandidat", delta: "Andi Prasetyo", trend: "flat", tone: "amber", compare: "Rizky siap 1–2 tahun" },
  { label: "Rekomendasi Komite", value: "Rizky", delta: "primary successor", trend: "flat", tone: "green", compare: "Andi sebagai cadangan siap pakai" },
];

export interface KandidatBanding {
  nama: string;
  jabatan: string;
  seed: number;
  utama?: boolean;
  nilai: Record<string, string>;
  tone: Record<string, "green" | "amber" | "red" | "slate">;
}

export const dimensiBanding = [
  { key: "performance", label: "Performance (FY 2025)" },
  { key: "potential", label: "Potential" },
  { key: "leadership", label: "Leadership (asesmen)" },
  { key: "peopleMath", label: "People Math Score" },
  { key: "readiness", label: "Readiness" },
  { key: "mobility", label: "Mobilitas" },
  { key: "pengalaman", label: "Pengalaman Lintas Unit" },
  { key: "fit", label: "Succession Fit" },
];

export const kandidatBanding: KandidatBanding[] = [
  {
    nama: "Rizky Putra",
    jabatan: "Asisten Afdeling — Kebun Tanah Jawa",
    seed: 9,
    utama: true,
    nilai: {
      performance: "4,8 / 5,0",
      potential: "High",
      leadership: "4,6",
      peopleMath: "87",
      readiness: "1–2 tahun",
      mobility: "High — bersedia relokasi",
      pengalaman: "Belum (rotasi Q1 2027)",
      fit: "92%",
    },
    tone: {
      performance: "green", potential: "green", leadership: "green", peopleMath: "green",
      readiness: "amber", mobility: "green", pengalaman: "amber", fit: "green",
    },
  },
  {
    nama: "Andi Prasetyo",
    jabatan: "Asisten Afdeling Senior — Kebun Dolok Ilir",
    seed: 31,
    nilai: {
      performance: "4,6 / 5,0",
      potential: "High",
      leadership: "4,8",
      peopleMath: "84",
      readiness: "Ready Now",
      mobility: "Medium — preferensi Regional 1",
      pengalaman: "2 kebun",
      fit: "88%",
    },
    tone: {
      performance: "green", potential: "green", leadership: "green", peopleMath: "green",
      readiness: "green", mobility: "amber", pengalaman: "green", fit: "green",
    },
  },
  {
    nama: "Maya Lestari",
    jabatan: "Asisten Afdeling — Kebun Bah Jambi",
    seed: 22,
    nilai: {
      performance: "4,7 / 5,0",
      potential: "Medium",
      leadership: "4,4",
      peopleMath: "81",
      readiness: "2–3 tahun",
      mobility: "High — bersedia relokasi",
      pengalaman: "1 kebun",
      fit: "76%",
    },
    tone: {
      performance: "green", potential: "amber", leadership: "amber", peopleMath: "amber",
      readiness: "amber", mobility: "green", pengalaman: "amber", fit: "amber",
    },
  },
];

export const perbandinganNotes: DetailNote[] = [
  { title: "Rizky unggul menyeluruh", detail: "Fit tertinggi (92%), performance & People Math terbaik; satu-satunya kelemahan relatif: belum lintas unit — sudah dijadwalkan Q1 2027.", tone: "green" },
  { title: "Andi opsi cepat", detail: "Ready Now dengan leadership tertinggi (4,8); cocok bila posisi harus diisi sebelum 2027, dengan trade-off potensi jangka panjang.", tone: "blue" },
  { title: "Maya dikembangkan dulu", detail: "Trajectory baik tapi butuh 2–3 tahun; tetap dipertahankan di pool untuk lowongan berikutnya.", tone: "amber" },
];

export const perbandinganDefs = [
  { term: "Succession Fit", text: "Kecocokan komposit terhadap profil jabatan target, dihitung mesin People Math dan dikalibrasi komite." },
  { term: "Pool", text: "Daftar kandidat resmi hasil sidang komite suksesi; urutan bukan penetapan final." },
  { term: "Sumber", text: "Komite Talenta Regional 1 — Mar 2026; Talent Management System." },
];
