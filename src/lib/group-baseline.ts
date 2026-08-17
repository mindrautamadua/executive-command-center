/**
 * Baseline angka konsolidasi PTPN Group — satu sumber kebenaran untuk seluruh
 * dimensi non-SDM (Keuangan, Produksi, Pemasaran, Strategi, Aset, ESG, Risiko).
 * Periode acuan: 31 Mei 2026 (YTD). Semua file *-data.ts dimensi wajib
 * mengutip angka dari sini, bukan hardcode nilai tandingan.
 *
 * Dashboard korporat "/" (src/lib/data.ts) sudah diselaraskan ke baseline ini:
 * kpiStrip, regional, trendKeuangan, produksiSeries, produksiKpi,
 * komposisiPenjualan, kpiStrategis, analitikPrediktif, dan liveFeed.
 */

export const PERIODE_LABEL = "Data per 31 Mei 2026 (YTD)";

/**
 * Tiga stempel waktu yang harus dibedakan di seluruh aplikasi. Menggabungkan
 * ketiganya jadi satu kalimat "data terakhir diperbarui" membuat pembaca tidak
 * bisa tahu apakah angka berlaku sampai Mei atau sampai Agustus.
 *
 * - `periode`  — rentang bisnis yang diwakili angka.
 * - `snapshot` — tanggal potong data; angka tidak berubah setelah tanggal ini.
 * - `refresh`  — kapan sistem terakhir menarik data. Tidak menambah periode.
 */
export const STEMPEL_DATA = {
  periode: "YTD Jan–Mei 2026",
  snapshot: "31 Mei 2026",
  refresh: "14 Agu 2026 · 22:14 WIB",
  /** Tanggal sinkronisasi terakhir feed harga pasar (Market Pulse). */
  pasarSinkron: "14 Agu 2026",
  /** Tanggal sinyal eksternal terbaru (External Signals). */
  sinyalTerbaru: "15 Agu 2026",
  /** Tanggal run terakhir model forecast. */
  forecastRun: "13 Agu 2026",
} as const;

export const BASELINE_TRUST = {
  asOf: STEMPEL_DATA.snapshot,
  lastRefresh: STEMPEL_DATA.refresh,
} as const;

/* ── Keuangan (Rp Triliun kecuali disebut lain) ───────────────────── */

export const KEUANGAN = {
  pendapatanYtd: 24.6,
  rkapPendapatanFy: 58.4,
  pendapatanFy2025: 54.2,
  ebitdaYtd: 6.82,
  ebitdaMarginPct: 27.7,
  rkapEbitdaFy: 15.2,
  labaBersihYtd: 2.94,
  rkapLabaFy: 6.1,
  hppYtd: 15.8,
  totalAset: 132.4,
  ekuitas: 58.7,
  utangBerbunga: 28.4,
  kas: 7.9,
  der: 0.48,
  netDebtEbitda: 1.38,
  icr: 4.6,
  capexRkapFy: 9.6,
  capexRealisasiYtd: 3.08,
  capexRealisasiPct: 32.1,
  /** Pendapatan segmen YTD (Rp T). */
  segmen: { palmco: 17.4, sgn: 4.9, ptpn1: 2.3 },
} as const;

/* ── Produksi & agronomi ──────────────────────────────────────────── */

export const PRODUKSI = {
  /** Luas tertanam sawit inti (ribu ha). */
  sawitTertanamRbHa: 508.7,
  tbsDiolahYtdJtTon: 4.42,
  tbsDiolahFyJtTon: 11.3,
  cpoYtdJtTon: 0.99,
  cpoFyJtTon: 2.53,
  oerPct: 22.4,
  oerTargetPct: 22.8,
  yieldTbsTonHa: 21.9,
  hppCpoRpKg: 8950,
  gulaFyRbTon: 780, // musim giling mulai Mei
  rendemenGulaPct: 7.45,
  karetFyRbTon: 118,
  tehFyRbTon: 24.5,
  /** Fasilitas — selaras data.ts (map legend & OperasionalCard). */
  pabrikTotal: 67,
  pabrikAktif: 64,
  pks: 36,
  pg: 17,
  pabrikKaret: 9,
  pabrikTeh: 5,
  utilisasiPksPct: 78.4,
  kebun: 528,
  kebunPlasma: 338,
  afdelingAktif: 1243,
  terminal: 23,
  pelabuhan: 7,
} as const;

/* ── Harga & pemasaran ────────────────────────────────────────────── */

/**
 * Harga jual rata-rata YTD per regional (Rp/kg). Ini satu-satunya tempat harga
 * komoditas ditulis; harga tingkat grup dihitung darinya lewat `hargaGrup()`
 * sehingga tidak mungkin ada regional yang melebihi rata-ratanya sendiri.
 */
export const HARGA_REGIONAL_RP_KG: Record<string, Record<string, number>> = {
  "Regional 1": { CPO: 12744, PK: 2648, Karet: 18790 },
  "Regional 2": { CPO: 12560, PK: 2560, Tebu: 1238 },
  "Regional 3": { CPO: 12482, PK: 2512, Teh: 9870 },
  "Regional 4": { CPO: 12360, Karet: 18510, Tebu: 1212 },
  "Regional 5": { CPO: 12264, PK: 2472, Kopi: 32400 },
};

/** Rata-rata harga lintas regional yang memproduksi komoditas bersangkutan. */
export const hargaGrup = (() => {
  const akumulasi: Record<string, number[]> = {};
  for (const regional of Object.values(HARGA_REGIONAL_RP_KG)) {
    for (const [komoditas, harga] of Object.entries(regional)) {
      (akumulasi[komoditas] ??= []).push(harga);
    }
  }
  return Object.fromEntries(
    Object.entries(akumulasi).map(([komoditas, harga]) => [
      komoditas,
      Math.round(harga.reduce((a, b) => a + b, 0) / harga.length),
    ]),
  ) as Record<string, number>;
})();

export const PEMASARAN = {
  cpoKpbnSpotRpKg: 13680,
  cpoAvgYtdRpKg: hargaGrup.CPO,
  cpoCifRotterdamUsdTon: 1085,
  kursUsdIdr: 16250,
  gulaLelangRpKg: 14850,
  karetSir20RpKg: hargaGrup.Karet,
  penjualanYtdRpT: 19.9,
  eksporPctVolCpo: 22,
  stokCpoRbTon: 187,
  stokCpoHariJual: 24,
  porsiHilirPct: 14.8,
  marginBlendedPct: 24.1,
  brentUsdBarel: 82.45,
} as const;

/* ── Target & proyeksi ────────────────────────────────────────────── */

/**
 * Beban RKAP sampai tanggal potong data (31 Mei 2026). Angka ini sengaja tidak
 * dihitung prorata kalender (5/12 × RKAP setahun): panen sawit memuncak di
 * semester II dan musim giling tebu baru mulai Mei, sehingga porsi RKAP yang
 * jatuh pada Jan–Mei lebih kecil daripada porsi bulannya.
 *
 * Dipakai untuk menjawab "apakah kita on-track terhadap target?", yang berbeda
 * dari pertumbuhan YoY. Sebuah metrik bisa tumbuh dua digit terhadap tahun lalu
 * dan tetap di bawah RKAP — dua pertanyaan berbeda, dua angka berbeda.
 */
export const RKAP_YTD = {
  pendapatanRpT: 23.9,
  ebitdaRpT: 6.6,
  labaBersihRpT: 2.85,
  roaPct: 4.5,
  produksiCpoJtTon: 1.02,
  hargaCpoRpKg: 12100,
  hargaKaretRpKg: 19200,
} as const;

/**
 * Proyeksi tutup tahun 2026 (base case). Diselaraskan dengan kartu Analitik
 * Prediktif di dashboard korporat supaya proyeksi yang sama tidak muncul dengan
 * dua nilai berbeda di dua kartu.
 */
export const PROYEKSI_FY = {
  pendapatanRpT: 59.1,
  ebitdaRpT: 16.1,
  labaBersihRpT: 6.3,
  roaPct: 4.8,
  produksiCpoJtTon: PRODUKSI.cpoFyJtTon,
  hargaCpoRpKg: 12650,
  hargaKaretRpKg: 18900,
} as const;

/**
 * Kontribusi tiap segmen terhadap penjualan, beserta marjin EBITDA-nya.
 *
 * Porsi pendapatan saja menyesatkan: segmen bisa besar di pendapatan tetapi
 * kecil di penciptaan nilai, dan sebaliknya. Marjin di sini yang menerjemahkan
 * bauran pendapatan menjadi bauran EBITDA. Rata-rata tertimbangnya menghasilkan
 * `KEUANGAN.ebitdaMarginPct` (27,7%), jadi kedua angka tidak bisa saling
 * bertentangan.
 */
export const KOMPOSISI_SEGMEN = [
  { nama: "CPO", pendapatanPct: 61, marginEbitdaPct: 26.5, color: "#3fb56f" },
  { nama: "Hilirisasi", pendapatanPct: 15, marginEbitdaPct: 47.0, color: "#57c8e8" },
  { nama: "Gula & Tetes", pendapatanPct: 9, marginEbitdaPct: 19.0, color: "#f2c94c" },
  { nama: "PK & PKO", pendapatanPct: 8, marginEbitdaPct: 23.0, color: "#8b7cf6" },
  { nama: "Karet, Teh & Lainnya", pendapatanPct: 7, marginEbitdaPct: 13.0, color: "#c9b8f7" },
] as const;

/* ── Sumber daya manusia ──────────────────────────────────────────── */

/**
 * Angka SDM tingkat grup yang dikutip dashboard korporat. Jumlah karyawan
 * disimpan sebagai bilangan, bukan string berformat, supaya bisa dipakai
 * menghitung produktivitas (pendapatan per karyawan).
 */
export const SDM = {
  karyawanAktif: 70142,
  engagementSkor: 4.21,
  turnoverPct: 2.45,
  /** Posisi kritikal yang sudah punya suksesor siap. */
  cakupanSuksesiPct: 68,
  /** Posisi kritikal tanpa suksesor Ready Now. */
  posisiKritikalKosong: 12,
  flightRiskPct: 5.0,
} as const;

/* ── Aset & investasi ─────────────────────────────────────────────── */

export const ASET = {
  landBankJtHa: 1.081,
  sengketaRbHa: 82.4,
  sengketaKasus: 214,
  hguHabis5ThnRbHa: 212,
  asetTetapRpT: 78.3,
  pipelineInvestasiRpT: 21.8,
  proyekAktif: 42,
} as const;

/* ── Strategi & kinerja ───────────────────────────────────────────── */

export const STRATEGI = {
  inisiatifTotal: 28,
  inisiatifOnTrack: 17,
  inisiatifAtRisk: 8,
  inisiatifOffTrack: 3,
  skorKpiKorporat: 87.4,
  skorPalmco: 91.2,
  skorSgn: 82.6,
  skorPtpn1: 84.8,
  valueCreationYtdRpT: 1.86,
  valueCreationTargetFyRpT: 4.2,
  milestoneTotal: 142,
  milestoneSelesai: 58,
  milestoneTerlambat: 19,
  keputusanBodYtd: 46,
  keputusanSelesai: 31,
  keputusanBerjalan: 12,
  keputusanOverdue: 3,
} as const;

/* ── Risiko & kepatuhan (enterprise) ──────────────────────────────── */

export const RISIKO = {
  registerTotal: 142,
  ekstrem: 4,
  tinggi: 13,
  ermMaturity: 3.42,
  ermTarget: 4.0,
  eksposurLegalRpT: 4.2,
  perkaraAktif: 87,
  elNinoProbabilitasPct: 62,
} as const;

/* ── Teknologi Informasi ──────────────────────────────────────────── */

export const TIK = {
  /** Belanja TI FY (Rp T): capex 0,5 (selaras kcx "Digital & IT") + opex 0,42. */
  capexFyRpT: 0.5,
  capexRealisasiYtdRpT: 0.16,
  opexFyRpT: 0.42,
  belanjaTotalFyRpT: 0.92,
  /** Belanja TI terhadap pendapatan RKAP FY — benchmark agribisnis 1,2–2,0%. */
  belanjaPctPendapatan: 1.6,
  adopsiDigitalPct: 68,
  adopsiTargetPct: 80,
  erpHealth: 71,
  aplikasiInti: 68,
  aplikasiLegacy: 12,
  ketersediaanSistemPct: 99.2,
  ketersediaanTargetPct: 99.5,
  insidenSiberYtd: 34,
  insidenSiberKritis: 2,
  /** Kepatuhan SLA patch — memicu limit breach di risk-data. */
  patchSlaPct: 78,
  patchSlaTargetPct: 95,
  maturitasSiber: 3.1,
  maturitasSiberTarget: 4.0,
  pdpReadinessPct: 76,
  konektivitasMemadaiPct: 82,
} as const;

/* ── Pengadaan ────────────────────────────────────────────────────── */

export const PENGADAAN = {
  /** Total belanja pengadaan YTD (Rp T) — bagian dari HPP & capex. */
  spendYtdRpT: 12.4,
  spendRkapFyRpT: 29.8,
  vendorAktif: 3482,
  vendorKritikal: 128,
  tkdnPct: 68.4,
  tkdnTargetPct: 65,
  penghematanYtdRpM: 386,
  penghematanTargetFyRpM: 850,
  siklusRataHari: 42,
  siklusTargetHari: 35,
  eProcCoveragePct: 84,
  kontrakAktif: 1246,
  kontrakJatuhTempo90Hari: 87,
  /** Konsentrasi belanja pada 20 vendor terbesar. */
  top20SpendPct: 43,
  /** Selaras caseByType "pengadaan" di risk-data (fraud & WBS). */
  laporanIntegritasYtd: 14,
} as const;

/* ── Hukum ────────────────────────────────────────────────────────── */

export const HUKUM = {
  kontrakAktif: 1842,
  nilaiKontrakRpT: 34.6,
  kontrakJatuhTempo90Hari: 112,
  izinAktif: 612,
  izinBerakhir6Bulan: 43,
  /** Entitas anak & afiliasi di luar 3 subholding. */
  entitasAnak: 24,
  legalSpendYtdRpM: 96,
  permintaanLegalYtd: 348,
  slaLegalHari: 5,
  slaOnTimePct: 82,
  /** Perkara & sertifikat mengacu RISIKO.perkaraAktif dan HGU di risk-data. */
  sertifikatHgu: 512,
} as const;

/* ── Dewan Komisaris (organ pengawasan) ───────────────────────────── */

export const DEKOM = {
  anggota: 6,
  anggotaIndependen: 2,
  rapatDekomYtd: 12,
  rapatGabunganDireksiYtd: 5,
  kehadiranRataPct: 94,
  rekomendasiYtd: 68,
  rekomendasiSelesai: 51,
  rekomendasiOverdue: 9,
  /** Komite: Audit, Manajemen Risiko & GCG, Nominasi & Remunerasi. */
  komite: 3,
  rapatKomiteYtd: 24,
  persetujuanYtd: 22,
  persetujuanMenunggu: 4,
  /** Skor evaluasi kinerja Direksi = skor KPI korporat (STRATEGI). */
  skorEvaluasiDireksi: 87.4,
  /** Selaras skor GCG di esg-data (SK-16 BUMN). */
  skorGcg: 92.1,
} as const;

/* ── K3 & Keamanan (HSE) ──────────────────────────────────────────── */

export const HSE = {
  /** Lost Time Injury Frequency Rate per satu juta jam kerja. */
  ltifr: 1.42,
  ltifrTarget: 1.2,
  kecelakaanYtd: 84,
  fatalityYtd: 2,
  jamKerjaAmanJt: 62.4,
  severityRate: 38,
  /** Unit tersertifikasi SMK3 dari 76 unit (basis sama dengan sertifikasi ESG). */
  smk3Tersertifikasi: 68,
  unitTotal: 76,
  hotspotYtd: 214,
  titikKebakaranYtd: 18,
  luasTerbakarHa: 142,
  reguPemadam: 96,
  menaraPantau: 84,
  pencurianTbsKasus: 312,
  kerugianPencurianRpM: 8.4,
  personelPengamanan: 1240,
  pesertaPelatihanK3Ytd: 12400,
  inspeksiK3Ytd: 1860,
  temuanK3Terbuka: 214,
} as const;

/* ── ESG & sustainability ─────────────────────────────────────────── */

export const ESG = {
  ispoCoveragePct: 88.2,
  intensitasEmisiTco2ePerTonCpo: 1.82,
  eudrReadiness: 78,
  skorKomposit: 72.4,
  tjslYtdRpM: 186,
} as const;
