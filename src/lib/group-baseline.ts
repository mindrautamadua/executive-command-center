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

export const BASELINE_TRUST = {
  asOf: "31 Mei 2026",
  lastRefresh: "14 Agu 2026 · 22:14 WIB",
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

export const PEMASARAN = {
  cpoKpbnSpotRpKg: 13680,
  cpoAvgYtdRpKg: 12482, // selaras data.ts
  cpoCifRotterdamUsdTon: 1085,
  kursUsdIdr: 16250,
  gulaLelangRpKg: 14850,
  karetSir20RpKg: 18650,
  penjualanYtdRpT: 19.9,
  eksporPctVolCpo: 22,
  stokCpoRbTon: 187,
  stokCpoHariJual: 24,
  porsiHilirPct: 14.8,
  marginBlendedPct: 24.1,
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
