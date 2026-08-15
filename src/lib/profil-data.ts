/* ── Profil karyawan (Employee Spotlight) ────────────────── */

export const profil = {
  nama: "Rizky Putra",
  badge: "Rising Star",
  jabatan: "Asisten Afdeling",
  unit: "PTPN IV Regional 1",
  lokasi: "Kebun Tanah Jawa",
  seed: 9,
  meta: {
    statusKaryawan: "Karyawan Tetap",
    sejak: "Sejak 12 Jan 2018",
    nik: "1801123400987001",
    ttl: "Medan, 12 Mar 1994",
    email: "rizky.putra@ptpn4.co.id",
    telepon: "0812-3456-7890",
  },
  singkat: {
    usia: "31 tahun",
    status: "Aktif",
    pendidikan: "S1 - Agronomi",
    domisili: "Pematang Siantar",
  },
};

export const TABS = [
  "Overview",
  "Informasi Pribadi",
  "Pekerjaan",
  "Kinerja",
  "Kompetensi",
  "Pengembangan",
  "People Math",
  "HPI BEM",
  "Riwayat",
  "Dokumen",
];

export const kinerja = {
  skor: "4.8",
  maks: "/ 5.0",
  pct: 96,
  label: "Kinerja Sangat Baik",
  deskripsi: "Konsisten melebihi ekspektasi",
  delta: "0.4 dari tahun lalu",
};

export const jabatanSaatIni = [
  { label: "Jabatan", value: "Asisten Afdeling", icon: "briefcase" },
  { label: "Departemen", value: "Operasional - Tanaman", icon: "building" },
  { label: "Atasan Langsung", value: "Ahmad Fauzi", sub: "Afdeling Manager", icon: "user" },
  { label: "Lokasi Kerja", value: "Kebun Tanah Jawa", icon: "mapPin" },
  { label: "Grade", value: "G7", icon: "award" },
  { label: "Tenure di Jabatan Ini", value: "2 tahun 4 bulan", icon: "clock" },
];

/* Nine-box: baris = potensial (tinggi → rendah), kolom = kinerja (rendah → tinggi). */
export const nineBox = {
  /* Kelas warna sel (punya pasangan gelap di globals.css), bukan hex inline. */
  warna: [
    ["nb-c-amber-2", "nb-c-green-2", "nb-c-green-3"],
    ["nb-c-red-1", "nb-c-amber-1", "nb-c-green-2"],
    ["nb-c-red-3", "nb-c-red-2", "nb-c-amber-1"],
  ],
  posisi: { row: 0, col: 2 },
  kategori: "High Potential",
  kandidatSiap: "Siap dalam 1–2 tahun",
  rekomendasi: "Dapat dipertimbangkan untuk posisi Afdeling Manager",
};

export const kompetensi = [
  { label: "Kepemimpinan", value: 4.6 },
  { label: "Manajemen Kebun", value: 4.8 },
  { label: "Problem Solving", value: 4.5 },
  { label: "Komunikasi", value: 4.4 },
  { label: "Kerja Sama Tim", value: 4.7 },
];

export const pelatihan = [
  {
    nama: "Manajemen Kebun Kelapa Sawit",
    penyelenggara: "LPP Agri Nusantara",
    tanggal: "10 Okt 2023",
  },
  {
    nama: "Basic Leadership Program",
    penyelenggara: "PTPN Learning Center",
    tanggal: "22 Jun 2022",
  },
  {
    nama: "Good Agricultural Practices (GAP)",
    penyelenggara: "ISPO Training Center",
    tanggal: "14 Feb 2021",
  },
];

export const pendidikan = {
  jenjang: "S1 - Agronomi",
  institusi: "Universitas Sumatera Utara",
  periode: "2012 - 2016",
  ipk: "IPK 3.45 / 4.00",
};

export const riwayatJabatan = [
  {
    jabatan: "Asisten Afdeling",
    unit: "Kebun Tanah Jawa, PTPN IV Regional 1",
    periode: "Jan 2023 - Sekarang",
    durasi: "2 thn 4 bln",
    aktif: true,
  },
  {
    jabatan: "Asisten Mandor",
    unit: "Kebun Tanah Jawa, PTPN IV Regional 1",
    periode: "Jan 2021 - Des 2022",
    durasi: "2 thn",
    aktif: false,
  },
  {
    jabatan: "Mandor",
    unit: "Kebun Tanah Jawa, PTPN IV Regional 1",
    periode: "Jan 2018 - Des 2020",
    durasi: "3 thn",
    aktif: false,
  },
];

export const penghargaan = [
  { nama: "Best Employee - Kebun Tanah Jawa", unit: "PTPN IV Regional 1", tahun: "2024" },
  { nama: "Inisiator Program Efisiensi", unit: "PTPN IV Regional 1", tahun: "2023" },
  { nama: "Karyawan Teladan", unit: "PTPN IV Regional 1", tahun: "2022" },
  { nama: "Kontributor Data Produksi Terbaik", unit: "Kebun Tanah Jawa", tahun: "2021" },
];

/* ── Tab: Informasi Pribadi ──────────────────────────────── */

export const dataPribadi = {
  kiri: [
    { icon: "user", label: "Nama Lengkap", value: "Rizky Putra" },
    { icon: "contact", label: "Nama Panggilan", value: "Rizky" },
    { icon: "users", label: "Jenis Kelamin", value: "Laki-laki" },
    { icon: "book", label: "Agama", value: "Islam" },
    { icon: "heart", label: "Status Pernikahan", value: "Menikah" },
    { icon: "globe", label: "Kewarganegaraan", value: "Warga Negara Indonesia" },
    { icon: "baby", label: "Jumlah Anak", value: "1" },
  ],
  kanan: [
    { icon: "mapPin", label: "Tempat Lahir", value: "Medan" },
    { icon: "calendar", label: "Tanggal Lahir", value: "12 Maret 1994" },
    { icon: "clock", label: "Usia", value: "31 tahun" },
    { icon: "droplet", label: "Golongan Darah", value: "O" },
    { icon: "file", label: "NPWP", value: "12.345.678.9-123.000" },
    { icon: "heartPulse", label: "No. BPJS\nKesehatan", value: "0001234567890" },
    { icon: "shield", label: "No. BPJS\nKetenagakerjaan", value: "1901234567890001" },
  ],
};

export const kontakAlamat = {
  alamat: [
    {
      judul: "Alamat Domisili",
      baris: ["Jl. Merdeka No. 45", "Pematang Siantar, Sumatera Utara 21111", "Indonesia"],
    },
    {
      judul: "Alamat KTP",
      baris: ["Jl. Merdeka No. 45", "Pematang Siantar, Sumatera Utara 21111", "Indonesia"],
    },
  ],
  kontak: [
    { label: "Email Pribadi", value: "rizky.putra94@gmail.com" },
    { label: "No. Handphone", value: "0812-3456-7890", badge: "WhatsApp" },
    { label: "No. Telepon Rumah", value: "(0622) 123456" },
  ],
};

export const dokumenIdentitas = [
  { label: "Nomor KTP", value: "1273041203940001" },
  { label: "Nomor SIM", value: "1203-9403-000123" },
  { label: "Paspor", value: "C7234567" },
  { label: "No. Kartu Keluarga", value: "1273041203940001" },
  { label: "No. Kartu Prakerja", value: "-" },
];

export const kontakDarurat = [
  { label: "Nama", value: "Siti Aisyah" },
  { label: "Hubungan", value: "Istri" },
  { label: "No. Handphone", value: "0813-9876-5432" },
  { label: "Alamat", value: "Jl. Merdeka No. 45, Pematang Siantar, Sumatera Utara 21111" },
];

export const informasiTambahan = {
  kiri: [
    { label: "Hobi", value: "Bersepeda, Membaca" },
    { label: "Bahasa", value: "Indonesia (Aktif)\nInggris (Dasar)" },
    { label: "Organisasi", value: "Anggota Koperasi Karyawan" },
  ],
  kanan: [
    { label: "Kondisi Kesehatan", value: "Sehat" },
    { label: "Kebutuhan Khusus", value: "-" },
  ],
};

export const terakhirDiperbarui = "14 Agu 2026 22:14 WIB";

/* ── Tab: Pekerjaan ──────────────────────────────────────── */

export const kepegawaian = [
  { label: "Status Karyawan", value: "Karyawan Tetap" },
  { label: "TMT Masuk", value: "12 Jan 2018" },
  { label: "Masa Kerja", value: "7 tahun 7 bulan" },
  { label: "Grade / Golongan", value: "G7 / III-B" },
  { label: "Kelompok Jabatan", value: "Operasional - Tanaman" },
  { label: "Jenis Jabatan", value: "Struktural" },
];

export const penempatan = [
  { label: "Perusahaan", value: "PTPN IV" },
  { label: "Unit", value: "Regional 1" },
  { label: "Lokasi Kerja", value: "Kebun Tanah Jawa" },
  { label: "Afdeling", value: "Afdeling II" },
  { label: "Atasan Langsung", value: "Ahmad Fauzi (Afdeling Manager)" },
  { label: "Span of Control", value: "4 mandor · 120 pemanen" },
];

export const payroll = [
  { label: "No. Payroll", value: "PYR-004521" },
  { label: "Bank", value: "Bank Mandiri" },
  { label: "No. Rekening", value: "•••• •••• 4521" },
  { label: "Status PTKP", value: "K/1" },
];

export const fasilitas = [
  { label: "Rumah Dinas", value: "Tipe G-2, Emplasmen Tanah Jawa", status: "Ditempati" },
  { label: "Kendaraan Operasional", value: "Sepeda motor dinas", status: "Aktif" },
  { label: "Asuransi Tambahan", value: "Inhealth Silver", status: "Aktif" },
];

export const pekerjaanSaatIni = [
  { label: "Jabatan", value: "Asisten Afdeling", icon: "briefcase" },
  { label: "Departemen", value: "Operasional - Tanaman", icon: "building" },
  { label: "Unit Kerja", value: "Kebun Tanah Jawa", icon: "network" },
  { label: "Lokasi Kerja", value: "Medan, Sumatera Utara", icon: "mapPin" },
  { label: "Atasan Langsung", value: "Ahmad Fauzi", sub: "Afdeling Manager", icon: "user" },
  { label: "Tipe Karyawan", value: "Karyawan Tetap", icon: "idCard" },
  { label: "Tanggal Mulai Jabatan", value: "1 Jan 2023", icon: "calendar" },
  { label: "Masa Kerja di Jabatan", value: "2 tahun 4 bulan", icon: "clock" },
  { label: "Grade", value: "G7", icon: "award" },
  { label: "Level Jabatan", value: "Officer", icon: "layers" },
  { label: "Status Probation", value: "Selesai (1 Jan 2023 - 30 Jun 2023)", icon: "checkCircle" },
  { label: "Shift Kerja", value: "Shift Pagi", icon: "sun" },
  { label: "Jam Kerja", value: "07:00 - 16:00", icon: "timer" },
  { label: "Lokasi Penugasan", value: "Kebun Tanah Jawa - Afdeling II", icon: "map" },
];

/* Riwayat jabatan + periode magang, khusus timeline tab Pekerjaan. */
export const riwayatJabatanLengkap = [
  ...riwayatJabatan,
  {
    jabatan: "Asisten Mandor (Magang)",
    unit: "Kebun Tanah Jawa, PTPN IV Regional 1",
    periode: "Jul 2017 - Des 2017",
    durasi: "6 bln",
    aktif: false,
  },
];

export const kompensasiBenefit = [
  { label: "Grade", value: "G7", icon: "award" },
  { label: "Level Jabatan", value: "Officer", icon: "layers" },
  { label: "Skala Gaji", value: "G7 - Officer", icon: "wallet" },
  { label: "Tunjangan Jabatan", value: "Asisten Afdeling", icon: "badgeCheck" },
  { label: "Tunjangan Lokasi", value: "Wilayah 1", icon: "mapPin" },
  { label: "BPJS Kesehatan", value: "Aktif - 0001 2345 6789", icon: "heartPulse" },
  { label: "BPJS Ketenagakerjaan", value: "Aktif - 1902 3456 7890", icon: "shield" },
];

export const strukturOrganisasi = [
  { jabatan: "Direktur Operasional", nama: "PTPN IV Regional 1", aktif: false },
  { jabatan: "Manager Kebun", nama: "Kebun Tanah Jawa", aktif: false },
  { jabatan: "Afdeling Manager", nama: "Ahmad Fauzi", aktif: false },
  { jabatan: "Asisten Afdeling", nama: "Rizky Putra", aktif: true },
];

export const ringkasanMasaKerja = {
  total: "7 thn",
  totalSub: "7 bln",
  tanggalMasuk: "12 Jan 2018",
  masaPerusahaan: "7 tahun 7 bulan",
  segmen: [
    { label: "Masa Kerja di Perusahaan", value: "7 thn 7 bln", bulan: 91, warna: "#1a9c5b" },
    { label: "Masa Kerja di Jabatan", value: "2 thn 4 bln", bulan: 28, warna: "#3b7ded" },
    { label: "Masa Kerja di Unit", value: "2 thn 4 bln", bulan: 28, warna: "#f5a524" },
  ],
};

export const pendidikanRelevan = [
  {
    jenjang: "S1",
    institusi: "Universitas Sumatera Utara",
    jurusan: "Agronomi",
    tahunLulus: "2016",
    ipk: "3.45 / 4.00",
    keterangan: "-",
  },
];

/* ── Tab: Kinerja ────────────────────────────────────────── */

export const kinerjaTahunan = [
  { tahun: "2021", skor: 4.4 },
  { tahun: "2022", skor: 4.6 },
  { tahun: "2023", skor: 4.6 },
  { tahun: "2024", skor: 4.4 },
  { tahun: "2025", skor: 4.8 },
];

export const kategoriPenilaian = [
  { rentang: "4.51 - 5.00", label: "Sangat Baik", warna: "#16a34a" },
  { rentang: "3.51 - 4.50", label: "Baik", warna: "#84cc16" },
  { rentang: "2.51 - 3.50", label: "Cukup", warna: "#eab308" },
  { rentang: "1.51 - 2.50", label: "Kurang", warna: "#f97316" },
  { rentang: "≤ 1.50", label: "Sangat Kurang", warna: "#ef4444" },
];

export const skorKomponen = [
  { label: "KPI / Hasil Kerja", skor: 4.9 },
  { label: "Perilaku / Kompetensi", skor: 4.7 },
  { label: "Kontribusi Perusahaan", skor: 4.8 },
];

export const perilakuKompetensi = [
  { label: "Integritas", deskripsi: "Jujur, konsisten dan dapat dipercaya", rating: "5.0", ikon: "shield" },
  { label: "Kerja Sama", deskripsi: "Membangun kolaborasi yang efektif", rating: "4.5", ikon: "users" },
  { label: "Orientasi Hasil", deskripsi: "Fokus pada pencapaian target", rating: "4.5", ikon: "target" },
  { label: "Komunikasi", deskripsi: "Menyampaikan informasi dengan jelas", rating: "4.5", ikon: "message" },
  { label: "Pengembangan Diri", deskripsi: "Terus belajar dan berkembang", rating: "4.5", ikon: "book" },
];

export const feedbackPenilaian = [
  {
    judul: "Penilaian Atasan Langsung",
    tanggal: "15 Jan 2026",
    isi: "Rizky menunjukkan kinerja yang sangat baik. Target produksi tercapai di atas ekspektasi dan memiliki inisiatif tinggi dalam perbaikan proses panen.",
    nama: "Ahmad Fauzi",
    jabatan: "Afdeling Manager",
    ikon: "user",
  },
  {
    judul: "Penilaian Komite",
    tanggal: "24 Jan 2026",
    isi: "Komite menilai Rizky konsisten memberikan kontribusi positif dan direkomendasikan untuk pengembangan ke jenjang yang lebih tinggi.",
    nama: "Komite Penilaian Kinerja",
    jabatan: "PTPN IV Regional 1",
    ikon: "komite",
  },
];

export const riwayatPenilaian = [
  { tahun: "2025", periode: "Januari - Desember 2025", skor: "4.8 / 5.0", rating: "Sangat Baik", atasan: "Ahmad Fauzi (Afdeling Manager)", tanggal: "15 Jan 2026" },
  { tahun: "2024", periode: "Januari - Desember 2024", skor: "4.4 / 5.0", rating: "Baik", atasan: "Ahmad Fauzi (Afdeling Manager)", tanggal: "10 Jan 2025" },
  { tahun: "2023", periode: "Januari - Desember 2023", skor: "4.6 / 5.0", rating: "Sangat Baik", atasan: "Ahmad Fauzi (Afdeling Manager)", tanggal: "12 Jan 2024" },
  { tahun: "2022", periode: "Januari - Desember 2022", skor: "4.6 / 5.0", rating: "Sangat Baik", atasan: "Ahmad Fauzi (Afdeling Manager)", tanggal: "11 Jan 2023" },
  { tahun: "2021", periode: "Januari - Desember 2021", skor: "4.4 / 5.0", rating: "Baik", atasan: "Ahmad Fauzi (Asisten Kepala)", tanggal: "14 Jan 2022" },
];

export const kpi2025 = [
  { sasaran: "Produktivitas TBS (Ton/Ha)", bobot: "25%", target: "22.00", realisasi: "24.80", capaian: "112.7%", skor: "5.0" },
  { sasaran: "Efisiensi Panen (%)", bobot: "20%", target: "90%", realisasi: "92.5%", capaian: "102.8%", skor: "4.5" },
  { sasaran: "Kualitas TBS (% Buah Matang)", bobot: "20%", target: "85%", realisasi: "88.3%", capaian: "103.9%", skor: "4.5" },
  { sasaran: "Disiplin & Kepatuhan", bobot: "15%", target: "100%", realisasi: "100%", capaian: "100%", skor: "5.0" },
  { sasaran: "Inisiatif & Inovasi", bobot: "10%", target: "-", realisasi: "Baik", capaian: "-", skor: "4.5" },
  { sasaran: "Pengendalian Biaya Operasional", bobot: "10%", target: "≤ 100%", realisasi: "97%", capaian: "103.0%", skor: "4.5" },
];

export const kpiTotal = { bobot: "100%", skor: "4.9 / 5.0" };

/* ── Tab: Kompetensi ─────────────────────────────────────── */

export const ringkasanKompetensi = {
  skor: "4.5",
  maks: "/ 5.0",
  distribusi: [
    { label: "Kekuatan Utama", pct: 70, warna: "#1a9c5b" },
    { label: "Kompeten", pct: 20, warna: "#3b7ded" },
    { label: "Perlu Pengembangan", pct: 10, warna: "#f4a81d" },
  ],
};

export const kompetensiInti = [
  { label: "Integritas", ikon: "shield", skor: 5.0, level: "Sangat Kuat" as const, gap: 0.0 },
  { label: "Orientasi Hasil", ikon: "target", skor: 4.6, level: "Sangat Kuat" as const, gap: 0.4 },
  { label: "Kerja Sama", ikon: "users", skor: 4.5, level: "Sangat Kuat" as const, gap: 0.5 },
  { label: "Inovasi", ikon: "lightbulb", skor: 4.0, level: "Kompeten" as const, gap: 1.0 },
  { label: "Komunikasi", ikon: "message", skor: 4.5, level: "Sangat Kuat" as const, gap: 0.5 },
  { label: "Disiplin", ikon: "clock", skor: 4.8, level: "Sangat Kuat" as const, gap: 0.2 },
  { label: "Customer Focus", ikon: "heart", skor: 4.2, level: "Kompeten" as const, gap: 0.8 },
];

export const kompetensiTeknisFungsional = [
  { label: "Budidaya Kelapa Sawit", skor: 4.8, level: "Sangat Kuat" as const, dinilai: "15 Jan 2026" },
  { label: "Manajemen Kebun", skor: 4.6, level: "Sangat Kuat" as const, dinilai: "15 Jan 2026" },
  { label: "Panen & Pasca Panen", skor: 4.5, level: "Sangat Kuat" as const, dinilai: "15 Jan 2026" },
  { label: "Pengendalian Hama & Penyakit", skor: 4.2, level: "Kompeten" as const, dinilai: "15 Jan 2026" },
  { label: "Keselamatan & Kesehatan Kerja (K3)", skor: 4.7, level: "Sangat Kuat" as const, dinilai: "15 Jan 2026" },
  { label: "Analisis Data Produksi", skor: 4.0, level: "Kompeten" as const, dinilai: "15 Jan 2026" },
  { label: "Pengelolaan SDM di Kebun", skor: 4.3, level: "Kompeten" as const, dinilai: "15 Jan 2026" },
];

/* Perbandingan kompetensi terhadap standar jabatan saat ini. */
export const pemetaanKompetensi = [
  { label: "Kompetensi Inti", pct: 95 },
  { label: "Kompetensi Kepemimpinan", pct: 90 },
  { label: "Kompetensi Teknis", pct: 88 },
  { label: "Kompetensi Fungsional", pct: 92 },
  { label: "Kompetensi Digital", pct: 75 },
];

export const rataRataKesesuaian = "88%";

export const kompetensiPerilaku = {
  kekuatan: [
    "Menunjukkan integritas tinggi dalam setiap pekerjaan.",
    "Mampu bekerja sama dan membangun hubungan yang baik dengan tim.",
    "Berorientasi pada hasil dan target produksi.",
  ],
  pengembangan: [
    "Meningkatkan kemampuan inovasi dalam proses kerja.",
    "Memperkuat analisis data untuk pengambilan keputusan.",
    "Mengembangkan kemampuan komunikasi presentasi.",
  ],
};

export const sertifikasiRelevan = [
  { nama: "Advanced Palm Oil Cultivation", penyelenggara: "LPP Agri Nusantara", tahun: "2023" },
  { nama: "Good Agricultural Practices (GAP)", penyelenggara: "ISPO Training Center", tahun: "2022" },
  { nama: "K3 Perkebunan Sawit", penyelenggara: "Kemnaker RI", tahun: "2021" },
  { nama: "Basic Leadership Program", penyelenggara: "PTPN Learning Center", tahun: "2020" },
];

export const rencanaPengembanganKompetensi = [
  {
    kompetensi: "Inovasi",
    tujuan: "Mampu menghasilkan ide inovatif untuk peningkatan efisiensi proses",
    metode: "Pelatihan + Project Inovasi",
    targetLevel: 4,
    targetWaktu: "Q4 2026",
    status: "On Progress" as const,
  },
  {
    kompetensi: "Analisis Data",
    tujuan: "Meningkatkan kemampuan analisis data produksi dan biaya",
    metode: "Pelatihan + Mentoring",
    targetLevel: 4,
    targetWaktu: "Q4 2026",
    status: "On Progress" as const,
  },
  {
    kompetensi: "Komunikasi Presentasi",
    tujuan: "Mampu menyampaikan presentasi yang efektif",
    metode: "Workshop + Coaching",
    targetLevel: 4,
    targetWaktu: "Q1 2026",
    status: "Planned" as const,
  },
];

export const rekomendasiKompetensi =
  "Rizky memiliki potensi untuk berkembang ke posisi Afdeling Manager dalam 1–2 tahun ke depan dengan fokus pengembangan pada area kepemimpinan dan pengambilan keputusan strategis.";

/* ── Tab: Pengembangan ───────────────────────────────────── */

export const ringkasanPengembangan = {
  indeks: 76,
  items: [
    { label: "Pelatihan Selesai", value: "12", icon: "graduation" },
    { label: "Jam Pelatihan", value: "128 jam", icon: "clock" },
    { label: "Sertifikasi Dimiliki", value: "4", icon: "fileBadge" },
    { label: "Rencana Aktif", value: "3", icon: "clipboard" },
    { label: "Kompetensi dalam Pengembangan", value: "5", icon: "trendingUp" },
  ],
};

export const idpAktif = [
  {
    judul: "Meningkatkan Kemampuan Kepemimpinan",
    kategori: "Leadership & People Management",
    progress: 80,
    target: "30 Sep 2026",
    icon: "users",
    warna: "#3b7ded",
    tone: "tone-blue",
  },
  {
    judul: "Penguasaan Analisis Data Produksi",
    kategori: "Data Analytics",
    progress: 60,
    target: "30 Nov 2026",
    icon: "chart",
    warna: "#16a34a",
    tone: "tone-green",
  },
  {
    judul: "Efisiensi Proses Panen dan Pasca Panen",
    kategori: "Operational Excellence",
    progress: 40,
    target: "31 Des 2026",
    icon: "settings",
    warna: "#d97706",
    tone: "tone-amber",
  },
];

export const riwayatPelatihan = [
  { nama: "Advanced Palm Oil Cultivation", penyelenggara: "LPP Agri Nusantara", tanggal: "15 Mei 2024", jam: 24, status: "Selesai" },
  { nama: "Leadership for Supervisors", penyelenggara: "PTPN Learning Center", tanggal: "10 Jan 2024", jam: 16, status: "Selesai" },
  { nama: "Good Agricultural Practices (GAP)", penyelenggara: "ISPO Training Center", tanggal: "20 Sep 2023", jam: 16, status: "Selesai" },
  { nama: "Manajemen Kebun Berkelanjutan", penyelenggara: "LPP Agri Nusantara", tanggal: "18 Jul 2023", jam: 24, status: "Selesai" },
  { nama: "Basic Excel for Work", penyelenggara: "Digital Learning ID", tanggal: "05 Jun 2023", jam: 8, status: "Selesai" },
];

export const skillsGap = [
  { kompetensi: "Kepemimpinan", saatIni: 3, diharapkan: 4 },
  { kompetensi: "Analisis Data", saatIni: 2, diharapkan: 4 },
  { kompetensi: "Manajemen Proyek", saatIni: 3, diharapkan: 4 },
  { kompetensi: "Komunikasi Presentasi", saatIni: 3, diharapkan: 4 },
  { kompetensi: "Inovasi & Kreativitas", saatIni: 2, diharapkan: 3 },
];

export const rekomendasiPelatihan = [
  {
    nama: "Effective Leadership Essentials",
    penyelenggara: "PTPN Learning Center",
    jam: "16 jam",
    level: "Menengah",
    icon: "presentation",
    tone: "tone-blue",
  },
  {
    nama: "Data Analytics for Beginners",
    penyelenggara: "Digital Learning ID",
    jam: "12 jam",
    level: "Pemula",
    icon: "barChart",
    tone: "tone-green",
  },
  {
    nama: "Smart Farming & Digital Agriculture",
    penyelenggara: "LPP Agri Nusantara",
    jam: "20 jam",
    level: "Menengah",
    icon: "sprout",
    tone: "tone-amber",
  },
];

export const sertifikasiDimiliki = [
  { nama: "GAP - Good Agricultural Practices", penerbit: "ISPO", tanggal: "20 Sep 2023", berlaku: "19 Sep 2026", status: "Aktif" },
  { nama: "Ahli Panen Kelapa Sawit (APKASINDO)", penerbit: "APKASINDO", tanggal: "10 Apr 2022", berlaku: "09 Apr 2028", status: "Aktif" },
  { nama: "K3 Umum", penerbit: "Kemnaker RI", tanggal: "15 Jan 2021", berlaku: "14 Jan 2026", status: "Aktif" },
  { nama: "Basic First Aid", penerbit: "PMI", tanggal: "12 Nov 2020", berlaku: "11 Nov 2023", status: "Kadaluarsa" },
];

export const jalurKarier = [
  {
    jabatan: "Asisten Afdeling",
    tag: "( Saat Ini )",
    unit: "PTPN IV Regional 1",
    waktu: "Jan 2023 - Sekarang",
    icon: "user",
    tone: "blue",
    aktif: true,
  },
  {
    jabatan: "Afdeling Manager",
    tag: "(Target)",
    unit: "PTPN IV Regional 1",
    waktu: "Target: 2026 - 2027",
    icon: "shield",
    tone: "green",
    aktif: false,
  },
  {
    jabatan: "Senior Afdeling Manager",
    tag: "(Target)",
    unit: "PTPN IV Regional 1",
    waktu: "Target: 2028 - 2029",
    icon: "briefcase",
    tone: "amber",
    aktif: false,
  },
  {
    jabatan: "Kepala Kebun",
    tag: "(Target)",
    unit: "PTPN IV Regional 1",
    waktu: "Target: 2030+",
    icon: "crown",
    tone: "purple",
    aktif: false,
  },
];

export const fokusPengembangan =
  "Fokus pengembangan saat ini: Leadership, Analisis Data, dan Operational Excellence untuk mencapai posisi Afdeling Manager.";

export const catatanPengembangan = [
  {
    inisial: "AF",
    nama: "Ahmad Fauzi",
    jabatan: "Afdeling Manager",
    tanggal: "15 Jan 2026",
    isi: "Rizky menunjukkan perkembangan yang sangat baik dalam pengelolaan tim dan produktivitas. Disarankan untuk fokus pada penguatan kompetensi analisis data dan manajemen proyek.",
    nextReview: "Okt 2026",
  },
];

/* ── Tab: Riwayat ────────────────────────────────────────── */

export const riwayatPendidikanLengkap = [
  {
    jenjang: "S1 - Agronomi",
    institusi: "Universitas Sumatera Utara",
    periode: "2012 - 2016",
    ipk: "IPK: 3.45 / 4.00",
  },
  { jenjang: "SMA Negeri 1 Medan", institusi: "Jurusan IPA", periode: "2009 - 2012" },
  { jenjang: "SMP Negeri 5 Medan", periode: "2006 - 2009" },
  { jenjang: "SD Negeri 064994 Medan", periode: "2000 - 2006" },
];

export const riwayatPelatihanSertifikasi = [
  { nama: "Advanced Palm Oil Cultivation", penyelenggara: "LPP Agri Nusantara", tanggal: "15 Mei 2024" },
  { nama: "Good Agricultural Practices (GAP)", penyelenggara: "ISPO Training Center", tanggal: "20 Sep 2023" },
  { nama: "Leadership for Supervisors", penyelenggara: "PTPN Learning Center", tanggal: "10 Jan 2023" },
  { nama: "Basic First Aid", penyelenggara: "PMI", tanggal: "12 Nov 2020" },
];

export const riwayatMutasiPenugasan = [
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Asisten Afdeling", sub: "di Kebun Tanah Jawa", tanggal: "01 Jan 2023" },
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Asisten Mandor", sub: "di Kebun Tanah Jawa", tanggal: "01 Jan 2021" },
  { jenis: "Mutasi", deskripsi: "Penempatan sebagai Mandor", sub: "di Kebun Tanah Jawa", tanggal: "01 Jan 2018" },
  { jenis: "Penugasan", deskripsi: "Tim Panen Raya - Divisi Operasional", tanggal: "15 Okt 2023" },
  { jenis: "Penugasan", deskripsi: "Tim Percepatan Produksi PPKS", tanggal: "10 Jul 2022" },
];

export const riwayatPerubahanData = [
  {
    perubahan: "Status Kepegawaian",
    dari: "Magang",
    menjadi: "Karyawan Tetap",
    tipe: "Perubahan Status",
    tanggal: "12 Jan 2018",
    oleh: "HR Regional 1",
  },
  {
    perubahan: "Grade",
    dari: "G6",
    menjadi: "G7",
    tipe: "Kenaikan Grade",
    tanggal: "01 Jan 2023",
    oleh: "HR Regional 1",
  },
  {
    perubahan: "Unit Kerja",
    dari: "Kebun Tanah Jawa",
    menjadi: "Afdeling I - Kebun Tanah Jawa",
    tipe: "Perubahan Unit",
    tanggal: "01 Jan 2023",
    oleh: "HR Regional 1",
  },
  {
    perubahan: "Jabatan",
    dari: "Asisten Mandor",
    menjadi: "Asisten Afdeling",
    tipe: "Promosi Jabatan",
    tanggal: "01 Jan 2023",
    oleh: "HR Regional 1",
  },
];

export const informasiKepegawaianTambahan = [
  { label: "Nomor NPWP", value: "12.345.678.9-123.000" },
  { label: "No. BPJS Kesehatan", value: "0001234567890" },
  { label: "No. BPJS Ketenagakerjaan", value: "1901234567890001" },
  { label: "Tanggal Bergabung Perusahaan", value: "12 Jan 2018" },
  { label: "Masa Kerja di Perusahaan", value: "7 tahun 7 bulan" },
];

/* ── Tab: Dokumen ────────────────────────────────────────── */

export const kategoriDokumen = [
  {
    nama: "Dokumen Pribadi",
    jumlah: 8,
    deskripsi: "Dokumen identitas, keluarga, dan informasi pribadi lainnya.",
  },
  {
    nama: "Kepegawaian",
    jumlah: 10,
    deskripsi: "Surat keputusan, kontrak kerja, mutasi, dan dokumen kepegawaian lainnya.",
  },
  {
    nama: "Pendidikan & Sertifikasi",
    jumlah: 6,
    deskripsi: "Ijazah, sertifikat pelatihan, sertifikasi profesional, dan dokumen pendidikan.",
  },
  {
    nama: "Kinerja",
    jumlah: 2,
    deskripsi: "Penilaian kinerja, KPI, dan dokumen terkait performa.",
  },
  {
    nama: "Lainnya",
    jumlah: 2,
    deskripsi: "Dokumen lainnya yang tidak termasuk dalam kategori di atas.",
  },
];

export const dokumenTerbaru = [
  {
    nama: "Sertifikat GAP - Good Agricultural Practices",
    jenis: "Sertifikat",
    kategori: "Pendidikan & Sertifikasi",
    tanggal: "20 Sep 2023",
    oleh: "Rizky Putra",
  },
  {
    nama: "SK Kenaikan Grade G7",
    jenis: "Surat Keputusan",
    kategori: "Kepegawaian",
    tanggal: "01 Jan 2023",
    oleh: "HR Regional 1",
  },
  {
    nama: "Penilaian Kinerja 2024",
    jenis: "Dokumen Kinerja",
    kategori: "Kinerja",
    tanggal: "10 Jan 2025",
    oleh: "Ahmad Fauzi",
  },
  {
    nama: "Ijazah S1 Agronomi",
    jenis: "Pendidikan",
    kategori: "Pendidikan & Sertifikasi",
    tanggal: "12 Jan 2016",
    oleh: "Rizky Putra",
  },
  {
    nama: "KTP - Rizky Putra",
    jenis: "Dokumen Pribadi",
    kategori: "Dokumen Pribadi",
    tanggal: "12 Jan 2018",
    oleh: "Rizky Putra",
  },
];

export const ketentuanDokumen = [
  "Pastikan dokumen yang diunggah jelas dan tidak buram.",
  "Gunakan format file yang sesuai untuk kemudahan verifikasi.",
  "Dokumen bersifat rahasia dan hanya dapat diakses oleh pihak yang berwenang.",
  "Jika ada dokumen yang kedaluwarsa, harap perbarui secara berkala.",
];

/* Kelas tone (globals.css) — bg + warna teks sekaligus, sudah punya pasangan gelap. */
export const KATEGORI_DOKUMEN_STYLE: Record<string, string> = {
  "Dokumen Pribadi": "tone-purple",
  Kepegawaian: "tone-blue",
  "Pendidikan & Sertifikasi": "tone-green",
  Kinerja: "tone-amber",
  Lainnya: "tone-slate",
};

/* ── People Math ─────────────────────────────────────────── */

export const peopleMathOverall = {
  skor: 87,
  maks: "/100",
  ringkasan: [
    { label: "Potential", value: "High Potential", badge: true },
    { label: "Performance", value: "4.8 / 5.0" },
    { label: "Readiness", value: "Ready in 1–2 Years", badge: true },
    { label: "Growth Index", value: "82 / 100" },
  ],
  catatan:
    "People Math mengukur potensi dan performa individu secara menyeluruh berdasarkan formula People Math pak ADH (21 Skor).",
};

export const peopleMathCore = [
  {
    label: "People Capability",
    skor: 88,
    deskripsi: "Kapasitas individu untuk melakukan pekerjaan",
  },
  {
    label: "People Performance",
    skor: 86,
    deskripsi: "Hasil kerja dan kontribusi terhadap organisasi",
  },
];

/* Posisi pada kuadran: capability & performance dalam skala 0-100. */
export const peopleMathPosisi = { capability: 88, performance: 86, nama: "Rizky Putra" };

export const peopleMathRadar = [
  { label: "Leadership", skor: 91 },
  { label: "Character", skor: 89 },
  { label: "Motivation", skor: 86 },
  { label: "Learning Agility", skor: 85 },
  { label: "Environment Fit", skor: 84 },
  { label: "Job Fit", skor: 88 },
  { label: "Skill", skor: 87 },
  { label: "Knowledge", skor: 85 },
];

export const peopleMathDimensi = [
  {
    label: "Leadership",
    skor: 91,
    ikon: "users",
    tone: "green",
    rincian: [
      { label: "Nagih", skor: 92 },
      { label: "Nata", skor: 89 },
      { label: "Nuntun", skor: 93 },
    ],
  },
  {
    label: "Character",
    skor: 89,
    ikon: "heart",
    tone: "rose",
    rincian: [
      { label: "Integritas", skor: 91 },
      { label: "Tanggung Jawab", skor: 90 },
      { label: "Konsistensi", skor: 87 },
    ],
  },
  {
    label: "Motivation",
    skor: 86,
    ikon: "flame",
    tone: "amber",
    rincian: [
      { label: "Dorongan Berprestasi", skor: 88 },
      { label: "Komitmen", skor: 85 },
      { label: "Inisiatif", skor: 84 },
    ],
  },
  {
    label: "Skill",
    skor: 87,
    ikon: "wrench",
    tone: "blue",
    rincian: [
      { label: "Teknis", skor: 88 },
      { label: "Manajerial", skor: 86 },
      { label: "Interpersonal", skor: 87 },
    ],
  },
  {
    label: "Knowledge",
    skor: 85,
    ikon: "book",
    tone: "purple",
    rincian: [
      { label: "Pengetahuan Pekerjaan", skor: 86 },
      { label: "Pengetahuan Industri", skor: 84 },
      { label: "Pengetahuan Organisasi", skor: 85 },
    ],
  },
  {
    label: "Learning Agility",
    skor: 85,
    ikon: "bookOpen",
    tone: "blue",
    rincian: [
      { label: "Belajar Cepat", skor: 86 },
      { label: "Adaptif", skor: 85 },
      { label: "Terbuka thd Umpan Balik", skor: 84 },
    ],
  },
  {
    label: "Job Fit",
    skor: 88,
    ikon: "userCheck",
    tone: "rose",
    rincian: [
      { label: "Kesesuaian Peran", skor: 89 },
      { label: "Kompleksitas Pekerjaan", skor: 87 },
    ],
  },
  {
    label: "Environment Fit",
    skor: 84,
    ikon: "leaf",
    tone: "green",
    rincian: [
      { label: "Budaya Organisasi", skor: 85 },
      { label: "Tim & Kolaborasi", skor: 83 },
    ],
  },
  {
    label: "Lainnya (6 Dimensi)",
    skor: 85,
    skorLabel: "Avg 85/100",
    ikon: "circle",
    tone: "slate",
    deskripsi:
      "Disiplin, Komunikasi, Analitis, Problem Solving, Kreativitas, Resiliensi",
    rincian: [],
  },
];

export const peopleMathInsight = {
  aiInsight:
    "Rizky menunjukkan kekuatan tinggi pada aspek Nuntun dan Nagih, yang mengindikasikan kemampuan mendorong pencapaian sekaligus membimbing orang lain.",
  developmentFocus:
    "Perkuat dimensi Nata (menata) melalui pengembangan kemampuan manajemen prioritas, perencanaan, dan sistem kerja.",
  strength: [
    "Nuntun – Membimbing & Mengembangkan",
    "Nagih – Menegakkan & Mendorong",
    "Integritas – Konsisten & Dapat Dipercaya",
  ],
  opportunity: [
    "Nata – Menata & Mengorganisasi",
    "Kepemimpinan Strategis",
    "Analisis Data untuk Keputusan",
  ],
  rekomendasi: [
    "Mengikuti pelatihan Project Management dalam 6 bulan ke depan",
    "Coaching dengan Afdeling Manager terkait manajemen prioritas dan delegasi",
    "Terlibat dalam improvement project berbasis data di kebun",
  ],
  kutipan:
    "Score menunjukkan pola, konteks dan perjalanan individu menjelaskan maknanya.",
};

export const peopleMathTalent = {
  ringkasan: [
    { label: "People Math Score", value: "87/100" },
    { label: "Performance Rating", value: "4.8 / 5.0" },
    { label: "Potential", value: "High Potential" },
    { label: "Readiness", value: "Ready in 1–2 Years" },
    { label: "Risk of Loss", value: "Low", dot: "#16a34a" },
  ],
  jalurKarier: [
    { jabatan: "Asisten Afdeling", peran: "Current Role", periode: "Jan 2023 – Sekarang", aktif: true },
    { jabatan: "Afdeling Manager", peran: "Next Role", periode: "Target: 1–2 Tahun" },
    { jabatan: "Senior Afdeling Manager", peran: "", periode: "Target: 3–4 Tahun" },
    { jabatan: "Kepala Kebun", peran: "", periode: "Target: 5+ Tahun", highlight: true },
  ],
  catatan:
    "Rizky memiliki potensi kuat untuk berkembang pada jalur manajerial di PTPN IV. Fokus pengembangan: Leadership Strategis, Nata, dan Analisis Data.",
  alasan: [
    { label: "Performance", value: "4.8 / 5.0", pct: 96 },
    { label: "People Math", value: "87 / 100", pct: 87 },
    { label: "Leadership", value: "91 / 100", pct: 91 },
    { label: "Technical Competency", value: "88 / 100", pct: 88 },
    { label: "Learning Agility", value: "85 / 100", pct: 85 },
    { label: "Environment Fit", value: "84 / 100", pct: 84 },
  ],
  criticalGap: "Data Analytics",
  tren: [
    { tahun: "2021", skor: 72 },
    { tahun: "2022", skor: 76 },
    { tahun: "2023", skor: 80 },
    { tahun: "2024", skor: 84 },
    { tahun: "2025", skor: 87 },
  ],
  trenCatatan:
    "Trend positif menunjukkan perkembangan yang konsisten dari waktu ke waktu.",
};

/* ── HPI BEM ─────────────────────────────────────────────── */

export const hpiBemGap = {
  aktual: { label: "Performance Aktual (2025)", skor: "4.8", maks: "/ 5.0", pct: 96 },
  potensial: { label: "Performance Potensial", skor: "5.0", maks: "/ 5.0", pct: 100 },
  gap: {
    pct: "12%",
    level: "(Medium)",
    catatan: "Masih terdapat peluang peningkatan performance yang signifikan.",
  },
};

export const hpiBemDiagnostic = {
  skor: 82,
  status: "Good",
  tanggal: "10 Mei 2026",
  assessor: "Ahmad Fauzi (HC BP)",
  dimensi: [
    {
      inisial: "B",
      label: "Behavior",
      sub: "Perilaku & Kebiasaan Kerja",
      skor: 88,
      status: "Good",
      warna: "#16a34a",
      tone: "green",
      rincian: [
        { label: "Disiplin & Konsistensi", skor: 90 },
        { label: "Kolaborasi", skor: 88 },
        { label: "Inisiatif", skor: 87 },
        { label: "Tanggung Jawab", skor: 91 },
        { label: "Fokus pada Hasil", skor: 86 },
      ],
    },
    {
      inisial: "E",
      label: "Environment",
      sub: "Lingkungan & Sistem Kerja",
      skor: 76,
      status: "Needs Attention",
      warna: "#3b7ded",
      tone: "blue",
      rincian: [
        { label: "Proses & Sistem", skor: 72 },
        { label: "Tools & Teknologi", skor: 70 },
        { label: "Data & Informasi", skor: 68 },
        { label: "Sumber Daya", skor: 77 },
        { label: "Leadership Support", skor: 82 },
      ],
    },
    {
      inisial: "M",
      label: "Mindset",
      sub: "Pola Pikir & Motivasi",
      skor: 84,
      status: "Good",
      warna: "#8b5cf6",
      tone: "purple",
      rincian: [
        { label: "Growth Mindset", skor: 86 },
        { label: "Ownership", skor: 85 },
        { label: "Motivasi Intrinsik", skor: 83 },
        { label: "Resiliensi", skor: 84 },
        { label: "Adaptabilitas", skor: 83 },
      ],
    },
  ],
  interpretasi:
    "Rizky memiliki perilaku kerja yang sangat baik dan mindset yang kuat. Namun lingkungan kerja (Environment) masih menjadi faktor penghambat utama untuk mencapai performance optimal.",
  fokus: ["Data & Informasi", "Tools & Teknologi", "Proses & Sistem"],
};

export const hpiBemRootCause = {
  items: [
    {
      judul: "Data Produksi Belum Terintegrasi",
      deskripsi: "Data dari lapangan, pabrik, dan gudang belum terintegrasi real-time.",
      dampak: "High",
      impact: "-5% s.d -7%",
    },
    {
      judul: "Proses Approval Masih Manual",
      deskripsi: "Banyak proses persetujuan masih menggunakan dokumen & tanda tangan.",
      dampak: "Medium",
      impact: "-3% s.d -4%",
    },
    {
      judul: "Akses Analytical Tools Terbatas",
      deskripsi: "Belum semua karyawan memiliki akses ke tools analitik yang memadai.",
      dampak: "Medium",
      impact: "-2% s.d -3%",
    },
  ],
  total: "+8% s.d +12%",
  catatan:
    "Analisis berdasarkan framework HPI BEM (Behavior, Environment, Mindset) dan data performance tahun berjalan.",
};

export const hpiBemIntervensi = {
  items: [
    {
      judul: "Integrasi Data Produksi Kebun",
      deskripsi: "Membangun dashboard produksi real-time terintegrasi dari hulu ke hilir.",
      kategori: "Environment",
      owner: "IT PTPN IV",
      target: "Q4 2026",
      impact: "+5% s.d +6%",
    },
    {
      judul: "Digitalisasi Approval Workflow",
      deskripsi: "Implementasi e-Workflow untuk approval dan disposisi kerja.",
      kategori: "Environment",
      owner: "Operational",
      target: "Q3 2026",
      impact: "+2% s.d +3%",
    },
    {
      judul: "Penyediaan Tools Analitik",
      deskripsi: "Memberikan akses Power BI dan training dasar analitik data.",
      kategori: "Environment",
      owner: "HC Learning",
      target: "Q3 2026",
      impact: "+1% s.d +2%",
    },
    {
      judul: "Coaching for Performance Excellence",
      deskripsi: "Coaching 1-on-1 untuk penguatan mindset & ownership.",
      kategori: "Mindset",
      owner: "HC BP",
      target: "Q2 2026",
      impact: "+1%",
    },
    {
      judul: "Penguatan Feedback & Recognition",
      deskripsi: "Program feedback rutin dan recognition atas pencapaian.",
      kategori: "Behavior",
      owner: "Atasan Langsung",
      target: "Q2 2026",
      impact: "+1%",
    },
  ],
  total: "+8% s.d +12%",
  catatan: "Implementasi intervensi yang konsisten akan membantu menutup performance gap.",
};

/* Kelas tone (globals.css) — punya pasangan gelap. */
export const HPI_BEM_KATEGORI_STYLE: Record<string, string> = {
  Behavior: "tone-green",
  Environment: "tone-blue",
  Mindset: "tone-purple",
};

export const hpiBemProyeksi = {
  performance: [
    { label: "Apr 2026 (Actual)", nilai: 4.8 },
    { label: "Q3 2026 (Target)", nilai: 4.9, target: true },
    { label: "Q4 2026 (Target)", nilai: 5.0, target: true },
  ],
  performanceCatatan:
    "Setelah intervensi dijalankan, performance potensial diproyeksikan meningkat hingga level optimal.",
  tren: [
    { label: "2023", skor: 68 },
    { label: "2024", skor: 72 },
    { label: "Q1 2026", skor: 79 },
    { label: "Mei 2026", skor: 82 },
  ],
  trenCatatan:
    "Konsistensi perilaku & mindset yang baik menjadi fondasi untuk peningkatan performance jangka panjang.",
};

export const hpiBemFooter =
  "adalah proses berkelanjutan. Review dan update dilakukan minimal setiap 6 bulan atau ketika ada perubahan signifikan pada peran / lingkungan kerja.";
