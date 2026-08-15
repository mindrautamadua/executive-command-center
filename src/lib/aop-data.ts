/**
 * Data statis halaman Optimalisasi Aset (/aset-investasi/optimalisasi-aset).
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts dan
 * ast-data.ts (target divestasi FY Rp 1,2 T · realisasi YTD Rp 0,4 T pada
 * astAlignment; paket divestasi Rp 0,8 T pada astDecisions).
 *
 * Rekonsiliasi idle: landUtilization (alb-data.ts) mencatat idle non-produktif
 * 31,2 rb ha di dalam kategori "Okupasi & Idle". Halaman ini memakai definisi
 * lebih luas — 34,0 rb ha = 31,2 rb ha idle non-produktif + 2,8 rb ha
 * emplasemen, eks-pabrik & sarana tidak terpakai yang secara fisik masih
 * tercatat pada kategori "Produktif".
 */

import type { AstDecision, AstInsight, AstKpi } from "./ast-core";

/* ── 1. KPI Strip ─────────────────────────────────────────────────── */

export const aopKpi: AstKpi[] = [
  {
    label: "Lahan Idle",
    value: "34,0",
    sub: "Rb Ha · 3,1% land bank 1,081 jt ha",
    delta: "-1,8 rb ha",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025 (dioptimalkan)",
    icon: "land",
    tone: "amber",
  },
  {
    label: "Bangunan Non-Inti",
    value: "128",
    sub: "Unit · emplasemen, wisma, gudang & eks-pabrik",
    delta: "-9 unit",
    trend: "down",
    deltaTone: "good",
    compare: "vs Des 2025",
    icon: "nilai",
    tone: "blue",
  },
  {
    label: "Potensi Monetisasi",
    value: "Rp 8,9 T",
    sub: "Penilaian indikatif KJPP · 11,4% aset tetap",
    delta: "+Rp 0,6 T",
    trend: "up",
    deltaTone: "good",
    compare: "revaluasi YTD",
    icon: "nilai",
    tone: "pink",
  },
  {
    label: "Pendapatan Kemitraan",
    value: "Rp 310 M",
    sub: "YTD · target FY Rp 780 M",
    delta: "39,7%",
    trend: "up",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    icon: "investasi",
    tone: "teal",
  },
  {
    label: "Target Divestasi 2026",
    value: "Rp 1,2 T",
    sub: "Aset non-inti · 13,5% potensi Rp 8,9 T",
    delta: "+Rp 0,3 T",
    trend: "up",
    deltaTone: "good",
    compare: "vs target 2025",
    icon: "nilai",
    tone: "green",
  },
  {
    label: "Realisasi Divestasi",
    value: "Rp 0,4 T",
    sub: "33,3% target FY · 4 transaksi tuntas",
    delta: "-8,4 ppt",
    trend: "down",
    deltaTone: "bad",
    compare: "vs prorata 41,7%",
    icon: "sengketa",
    tone: "red",
  },
];

export const AOP_IDLE_RB_HA = 34.0;
export const AOP_IDLE_UNIT_BANGUNAN = 128;
export const AOP_POTENSI_RP_M = 8900;
export const AOP_PENDAPATAN_KEMITRAAN_YTD_RP_M = 310;
export const AOP_PENDAPATAN_KEMITRAAN_TARGET_RP_M = 780;
export const AOP_DIVESTASI_TARGET_RP_M = 1200;
export const AOP_DIVESTASI_REALISASI_RP_M = 400;

/* ── 2. Inventarisasi Aset Idle ───────────────────────────────────── */

export interface IdleAssetRow {
  lokasi: string;
  jenis: "Lahan" | "Bangunan & Lahan" | "Bangunan";
  /** Luas areal (ha) — jumlah 8 baris = 34.000 ha. */
  luasHa: number;
  /** Jumlah unit bangunan; 0 untuk aset lahan murni — jumlah = 128 unit. */
  unitBangunan: number;
  /** Nilai indikatif KJPP (Rp M) — jumlah = 8.900 (Rp 8,9 T). */
  nilaiRpM: number;
  opsiMonetisasi: string;
}

export const idleAssetInventory: IdleAssetRow[] = [
  {
    lokasi: "Eks-HGU Tamiang, Aceh (PTPN I)",
    jenis: "Lahan",
    luasHa: 4800,
    unitBangunan: 0,
    nilaiRpM: 1240,
    opsiMonetisasi: "KSO tanaman semusim / ruilslag — terkendala perkara kasasi di MA.",
  },
  {
    lokasi: "Areal Non-Produktif Regional 1–2, Sumut",
    jenis: "Lahan",
    luasHa: 5200,
    unitBangunan: 0,
    nilaiRpM: 1480,
    opsiMonetisasi: "Divestasi selektif; nilai tanah tertinggi karena tekanan urbanisasi.",
  },
  {
    lokasi: "Areal Cadangan Sanggau & Landak (Regional 6)",
    jenis: "Lahan",
    luasHa: 6400,
    unitBangunan: 0,
    nilaiRpM: 1060,
    opsiMonetisasi: "Kerjasama lahan sawit rakyat / penanaman bertahap.",
  },
  {
    lokasi: "Lahan Tebu Idle Ogan Ilir (SGN)",
    jenis: "Lahan",
    luasHa: 3100,
    unitBangunan: 0,
    nilaiRpM: 720,
    opsiMonetisasi: "Kemitraan tebu rakyat — prasyarat penyelesaian sengketa Cinta Manis.",
  },
  {
    lokasi: "Emplasemen & Eks-Pabrik Jatim (SGN)",
    jenis: "Bangunan & Lahan",
    luasHa: 620,
    unitBangunan: 42,
    nilaiRpM: 1380,
    opsiMonetisasi: "BOT kawasan pergudangan & logistik; sebagian cagar budaya.",
  },
  {
    lokasi: "Perumahan & Gudang Eks-Kebun Jabar (PTPN I)",
    jenis: "Bangunan & Lahan",
    luasHa: 380,
    unitBangunan: 51,
    nilaiRpM: 940,
    opsiMonetisasi: "Sewa jangka panjang & divestasi unit terpisah.",
  },
  {
    lokasi: "Rumah Sakit, Wisma & Kantor Non-Inti",
    jenis: "Bangunan & Lahan",
    luasHa: 140,
    unitBangunan: 35,
    nilaiRpM: 780,
    opsiMonetisasi: "Spin-off ke pengelola spesialis atau KSO layanan.",
  },
  {
    lokasi: "Areal Idle Tersebar Lainnya (7 regional)",
    jenis: "Lahan",
    luasHa: 13360,
    unitBangunan: 0,
    nilaiRpM: 1300,
    opsiMonetisasi: "Penanaman kembali, kerjasama lahan, atau pelepasan bertahap.",
  },
];

export const IDLE_TOTAL_HA = 34000;
export const IDLE_TOTAL_UNIT = 128;
export const IDLE_TOTAL_RP_M = 8900;

export const idleAssetNote =
  "Empat klaster lahan terbesar (19,5 rb ha) menyimpan 51% nilai; namun tiga di antaranya terikat sengketa atau perkara aktif — legalitas adalah prasyarat monetisasi, bukan langkah lanjutan.";

/* ── 3. Monetization Pipeline (funnel) ────────────────────────────── */

export interface MonetizationStage {
  tahap: string;
  /** Nilai aset pada tahap tsb (Rp M). */
  nilaiRpM: number;
  /** Jumlah paket/aset. */
  jumlahPaket: number;
  /** Konversi terhadap tahap sebelumnya (%); tahap pertama = 100. */
  konversiPct: number;
  note?: string;
}

/**
 * Corong menyempit dari Rp 8.900 M (inventarisasi) ke Rp 400 M transaksi
 * tuntas YTD — selaras realisasi divestasi Rp 0,4 T pada astAlignment.
 * Tahap persetujuan Rp 1.800 M mencakup paket Rp 800 M yang sudah selesai
 * penilaian KJPP (astDecisions ast-data.ts).
 */
export const monetizationPipeline: MonetizationStage[] = [
  {
    tahap: "Identifikasi & Inventarisasi",
    nilaiRpM: 8900,
    jumlahPaket: 86,
    konversiPct: 100,
    note: "34,0 rb ha lahan + 128 unit bangunan non-inti.",
  },
  { tahap: "Penilaian KJPP", nilaiRpM: 4200, jumlahPaket: 38, konversiPct: 47.2 },
  {
    tahap: "Persetujuan (BOD/RUPS/Danantara)",
    nilaiRpM: 1800,
    jumlahPaket: 14,
    konversiPct: 42.9,
    note: "Termasuk paket divestasi Rp 800 M yang menunggu keputusan BOD.",
  },
  {
    tahap: "Transaksi Tuntas (YTD)",
    nilaiRpM: 400,
    jumlahPaket: 4,
    konversiPct: 22.2,
    note: "Setara realisasi divestasi Rp 0,4 T dari target FY Rp 1,2 T.",
  },
];

export const monetizationPipelineNote =
  "Konversi total inventarisasi → transaksi baru 4,5%. Penyempitan terbesar terjadi di penilaian KJPP (-52,8%) karena aset bersengketa tidak dapat dinilai secara final.";

/* ── 4. Kemitraan Aset (KSO/BOT) ──────────────────────────────────── */

export interface PartnershipDeal {
  nama: string;
  skema: "KSO" | "BOT" | "Sewa Jangka Panjang";
  mitra: string;
  /** Nilai kontrak sepanjang tenor (Rp M) — top 5 = 2.280 dari total 3.400. */
  nilaiKontrakRpM: number;
  tenorTahun: number;
  /** Pendapatan diakui YTD (Rp M) — top 5 = 219 dari total 310. */
  pendapatanYtdRpM: number;
}

export const PARTNERSHIP_DEALS_AKTIF = 28;
export const PARTNERSHIP_NILAI_TOTAL_RP_M = 3400;
export const PARTNERSHIP_TOP5_NILAI_RP_M = 2280;
export const PARTNERSHIP_TOP5_PENDAPATAN_RP_M = 219;

/** 28 KSO/BOT aktif bernilai Rp 3,4 T; 5 terbesar menguasai 67% nilai. */
export const partnershipDeals: PartnershipDeal[] = [
  {
    nama: "KSO Kawasan Industri Sei Mangkei",
    skema: "KSO",
    mitra: "Konsorsium industri hilir kelapa sawit",
    nilaiKontrakRpM: 680,
    tenorTahun: 30,
    pendapatanYtdRpM: 68,
  },
  {
    nama: "BOT Pabrik Minyak Goreng Sei Mangkei",
    skema: "BOT",
    mitra: "Mitra strategis hilir (BUMN pangan)",
    nilaiKontrakRpM: 520,
    tenorTahun: 25,
    pendapatanYtdRpM: 52,
  },
  {
    nama: "KSO Lahan Tebu Cinta Manis",
    skema: "KSO",
    mitra: "Koperasi petani tebu Ogan Ilir",
    nilaiKontrakRpM: 460,
    tenorTahun: 15,
    pendapatanYtdRpM: 44,
  },
  {
    nama: "Sewa Kawasan Wisata & Agro Jabar",
    skema: "Sewa Jangka Panjang",
    mitra: "Pengelola destinasi wisata swasta",
    nilaiKontrakRpM: 340,
    tenorTahun: 20,
    pendapatanYtdRpM: 31,
  },
  {
    nama: "KSO Pabrik Karet Remah Sumsel",
    skema: "KSO",
    mitra: "Prosesor karet berorientasi ekspor",
    nilaiKontrakRpM: 280,
    tenorTahun: 12,
    pendapatanYtdRpM: 24,
  },
];

export const partnershipNote =
  "23 kemitraan sisanya bernilai Rp 1.120 M dan menyumbang Rp 91 M pendapatan YTD — rata-rata Rp 4 M/kontrak, indikasi banyak kontrak kecil dengan biaya administrasi tidak sebanding.";

/* ── 5. Optimization Value Bridge ─────────────────────────────────── */

export interface ValueBridgeStep {
  komponen: string;
  /** Realisasi YTD (Rp M). */
  realisasiYtdRpM: number;
  /** Target FY 2026 (Rp M). */
  targetFyRpM: number;
  /** Capaian terhadap target FY (%). */
  capaianPct: number;
  jenis: "Pendapatan" | "Proceeds";
}

/**
 * Tiga komponen pendapatan menjumlah Rp 310 M YTD / Rp 780 M target FY
 * (pendapatan kemitraan). Divestasi dicatat terpisah sebagai proceeds:
 * Rp 400 M YTD / Rp 1.200 M target FY. Total nilai optimalisasi FY Rp 1.980 M.
 */
export const optimizationValueBridge: ValueBridgeStep[] = [
  { komponen: "Sewa Aset & Bangunan", realisasiYtdRpM: 86, targetFyRpM: 210, capaianPct: 41.0, jenis: "Pendapatan" },
  { komponen: "KSO / BOT Kemitraan", realisasiYtdRpM: 142, targetFyRpM: 360, capaianPct: 39.4, jenis: "Pendapatan" },
  { komponen: "Kerjasama Lahan (Tebu & Sawit Rakyat)", realisasiYtdRpM: 82, targetFyRpM: 210, capaianPct: 39.0, jenis: "Pendapatan" },
  { komponen: "Divestasi Aset Non-Inti", realisasiYtdRpM: 400, targetFyRpM: 1200, capaianPct: 33.3, jenis: "Proceeds" },
];

export const VALUE_BRIDGE_PENDAPATAN_YTD_RP_M = 310;
export const VALUE_BRIDGE_PENDAPATAN_TARGET_RP_M = 780;
export const VALUE_BRIDGE_TOTAL_TARGET_RP_M = 1980;

export const valueBridgeNote =
  "Seluruh komponen berada di bawah prorata 41,7%; divestasi paling tertinggal (33,3%). Total nilai optimalisasi FY Rp 1,98 T setara 22% potensi monetisasi Rp 8,9 T — sisanya belum tersentuh program.";

/* ── 6. Hold–Optimize–Divest Matrix ───────────────────────────────── */

export type HoldSellQuadrant = "Hold" | "Optimize" | "Divest" | "Kaji Ulang";

export interface HoldSellPoint {
  kelompokAset: string;
  /** Nilai strategis terhadap bisnis inti (skala 1–5) — sumbu X. */
  nilaiStrategis: number;
  /** Imbal hasil aset saat ini (%) — sumbu Y; ambang 4,6% (ROA grup). */
  returnPct: number;
  /** Nilai buku kelompok aset (Rp M). */
  nilaiBukuRpM: number;
  kuadran: HoldSellQuadrant;
  aksi: string;
}

/**
 * Ambang kuadran: nilai strategis 3,0 × return 4,6% (ROA grup).
 * Jumlah nilai buku 10 kelompok = Rp 71,0 T dari aset tetap Rp 78,3 T;
 * sisa Rp 7,3 T berupa sarana penunjang & aset dalam pembangunan.
 */
export const AOP_STRATEGIS_AMBANG = 3.0;
export const AOP_RETURN_AMBANG_PCT = 4.6;

export const holdSellMatrix: HoldSellPoint[] = [
  { kelompokAset: "Kebun Sawit Menghasilkan (Regional 1–3)", nilaiStrategis: 5.0, returnPct: 7.8, nilaiBukuRpM: 23100, kuadran: "Hold", aksi: "Pertahankan; prioritaskan perpanjangan HGU & replanting terjadwal." },
  { kelompokAset: "PKS & Fasilitas Hilir Sei Mangkei", nilaiStrategis: 4.8, returnPct: 9.2, nilaiBukuRpM: 8600, kuadran: "Hold", aksi: "Pertahankan; jadikan hub hilirisasi grup." },
  { kelompokAset: "Kebun Sawit Regional 6–7", nilaiStrategis: 3.8, returnPct: 2.0, nilaiBukuRpM: 11100, kuadran: "Optimize", aksi: "Perbaiki jalan produksi & percepat replanting sebelum menilai opsi lain." },
  { kelompokAset: "PG Klaster Jatim Besar", nilaiStrategis: 4.2, returnPct: 5.2, nilaiBukuRpM: 7400, kuadran: "Hold", aksi: "Pertahankan; basis proyek bioetanol & co-generation." },
  { kelompokAset: "PG Klaster Kecil (<3.300 TCD)", nilaiStrategis: 2.2, returnPct: -3.8, nilaiBukuRpM: 3500, kuadran: "Divest", aksi: "Konsolidasi giling; lepas aset pabrik & manfaatkan lahannya." },
  { kelompokAset: "Lahan Idle & Cadangan Belum Tertanam", nilaiStrategis: 2.6, returnPct: 0.4, nilaiBukuRpM: 4500, kuadran: "Divest", aksi: "KSO, kerjasama lahan, atau pelepasan bertahap sesuai nilai pasar." },
  { kelompokAset: "Bangunan & Perumahan Non-Inti", nilaiStrategis: 1.4, returnPct: 1.1, nilaiBukuRpM: 2320, kuadran: "Divest", aksi: "Sewa jangka panjang atau divestasi unit terpisah." },
  { kelompokAset: "Rumah Sakit & Layanan Sosial", nilaiStrategis: 1.8, returnPct: 5.4, nilaiBukuRpM: 780, kuadran: "Kaji Ulang", aksi: "Spin-off ke pengelola spesialis; pertahankan layanan bagi karyawan." },
  { kelompokAset: "Kawasan Industri & Infrastruktur", nilaiStrategis: 3.6, returnPct: 3.2, nilaiBukuRpM: 5400, kuadran: "Optimize", aksi: "Percepat tenant anchor; tingkatkan okupansi sebelum fase lanjutan." },
  { kelompokAset: "Kebun Karet & Teh PTPN I", nilaiStrategis: 2.8, returnPct: 1.6, nilaiBukuRpM: 4300, kuadran: "Divest", aksi: "Kaji divestasi parsial atau kemitraan operasi dengan mitra spesialis." },
];

export const holdSellNote =
  "Kelompok berkuadran Divest bernilai buku Rp 14,6 T — 12 kali lipat target divestasi FY Rp 1,2 T. Kapasitas eksekusi transaksi, bukan ketersediaan aset, yang menjadi batas program.";

/* ── 7. BOD Decision Center ───────────────────────────────────────── */

export const aopDecisions: AstDecision[] = [
  {
    title: "Eksekusi Paket Divestasi Non-Inti Rp 0,8 T",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Paket lahan idle + 54 bangunan non-inti senilai Rp 0,8 T telah selesai penilaian KJPP; realisasi divestasi baru Rp 0,4 T dari target FY Rp 1,2 T.",
    rekomendasi:
      "Setujui lanjut ke tahap transaksi mengikuti kaidah governance BUMN/Danantara — penilaian independen, keterbukaan proses & persetujuan berjenjang.",
    due: "Q3 2026",
  },
  {
    title: "Konsolidasi Giling & Pelepasan Aset 5 PG Kecil",
    impact: "High Impact",
    tone: "red",
    context:
      "Klaster PG <3.300 TCD bernilai buku Rp 3,5 T, berutilisasi 61,5% dan rugi Rp 252 M/tahun; tebunya dapat dialihkan ke PG efisien terdekat tanpa kehilangan volume gula.",
    rekomendasi:
      "Setujui roadmap konsolidasi giling 2027 disertai rencana pemanfaatan lahan eks-PG dan skema transisi tenaga kerja.",
    due: "Q4 2026",
  },
  {
    title: "Percepatan KSO Lahan Idle 19,5 Rb Ha",
    impact: "Medium Impact",
    tone: "amber",
    context:
      "Empat klaster lahan idle terbesar bernilai Rp 4,5 T hanya menghasilkan imbal hasil 0,4%; tiga di antaranya terhambat status legal/sengketa.",
    rekomendasi:
      "Setujui skema KSO/kerjasama lahan standar satu pintu, dengan prasyarat penyelesaian legal sebagai gate pertama tiap paket.",
    due: "Q4 2026",
  },
];

/* ── 8. Insights ──────────────────────────────────────────────────── */

export const aopInsights: AstInsight[] = [
  {
    title: "Rp 8,9 T Tidur di Neraca",
    text: `${AOP_IDLE_RB_HA.toString().replace(".", ",")} rb ha lahan idle dan ${AOP_IDLE_UNIT_BANGUNAN} unit bangunan non-inti bernilai 11,4% aset tetap namun nyaris tanpa imbal hasil — penarik utama ROA grup ke 4,6%.`,
    tone: "red",
  },
  {
    title: "Legalitas Adalah Gerbang Monetisasi",
    text: "Konversi inventarisasi → transaksi hanya 4,5%; penyempitan terbesar di tahap penilaian KJPP karena aset bersengketa tidak dapat dinilai final. Program sengketa lahan dan optimalisasi aset harus dijalankan sebagai satu agenda.",
    tone: "amber",
  },
  {
    title: "Kemitraan: Banyak Kontrak, Sedikit Nilai",
    text: "5 dari 28 kemitraan menguasai 67% nilai kontrak; 23 sisanya rata-rata hanya Rp 4 M pendapatan/tahun. Standardisasi & konsolidasi kontrak kecil akan menurunkan biaya administrasi lebih besar daripada pendapatannya.",
    tone: "blue",
  },
  {
    title: "Batasnya Eksekusi, Bukan Aset",
    text: "Aset berkuadran Divest bernilai Rp 14,6 T versus target FY Rp 1,2 T. Menambah target tanpa menambah kapasitas tim transaksi & penilaian hanya akan memperpanjang antrean.",
    tone: "amber",
  },
  {
    title: "Semua Komponen di Bawah Prorata",
    text: "Sewa 41,0%, KSO/BOT 39,4%, kerjasama lahan 39,0%, divestasi 33,3% — seluruhnya di bawah 41,7%. Beban H2 mencapai Rp 1,27 T atau 1,8x run-rate semester pertama.",
    tone: "red",
  },
];

/* ── 9. Footnote Governance ───────────────────────────────────────── */

export const aopGovernanceFootnote =
  "Seluruh rencana divestasi dan kerjasama aset tunduk pada kaidah governance BUMN dan kerangka pengelolaan Danantara: penilaian oleh KJPP independen, persetujuan berjenjang Direksi–Dewan Komisaris–Pemegang Saham sesuai batas nilai, proses seleksi mitra yang terbuka & terdokumentasi, serta pelaporan hasil transaksi. Aset berstatus sengketa, berperkara aktif, atau berfungsi sebagai jaminan pinjaman tidak dapat masuk tahap transaksi sebelum status hukumnya tuntas.";
