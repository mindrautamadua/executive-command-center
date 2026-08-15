/**
 * Data statis dimensi Risiko & Kepatuhan (ENTERPRISE) — bagian 2.
 * Halaman: Kepatuhan Regulasi, Audit & Temuan, Whistleblowing & Fraud,
 * Asuransi Mitigasi & ERM, Legal Case Portfolio. Bagian 1 (Overview,
 * Register, Appetite, Komoditas & Iklim) ada di risk-data.ts.
 *
 * Periode acuan: 31 Mei 2026 (YTD). Angka induk dari group-baseline.ts.
 *
 * Guard konsistensi lintas modul:
 * - WBS enterprise 47 laporan ⊇ 31 laporan scope ketenagakerjaan
 *   (rc-data.ts speakUp.reports) — superset, bukan angka tandingan.
 * - Sengketa lahan selaras dimensi Aset: 214 kasus / 82,4 rb ha
 *   (ASET.sengketaKasus / ASET.sengketaRbHa); 52 perkara lahan aktif di sini
 *   = subset yang sudah berperkara di pengadilan.
 * - Eksposur legal Rp 4,2 T & 87 perkara aktif = RISIKO.eksposurLegalRpT /
 *   RISIKO.perkaraAktif; ERM maturity 3,42 target 4,0 = RISIKO.ermMaturity.
 */

import { PALETTE } from "./chart-palette";
import { ASET, RISIKO } from "./group-baseline";
import { speakUp } from "./rc-data";
import type { RiskDecision, RiskInsight, RiskPageKpi } from "./risk-data";

/* ══════════════════════════════════════════════════════════════════════
   #region KEPATUHAN-REGULASI — /risiko-kepatuhan/kepatuhan-regulasi
   ══════════════════════════════════════════════════════════════════════ */

export const kepKpi: RiskPageKpi[] = [
  {
    label: "Kewajiban Regulasi Enterprise",
    value: "386",
    sub: "6 Domain · Register terpusat Sekretariat Korporat",
    tone: "blue",
  },
  {
    label: "Tingkat Kepatuhan",
    value: "91,2%",
    sub: "352 Patuh · 28 Parsial · 6 Non-Compliant",
    tone: "green",
  },
  {
    label: "DMO CPO",
    value: "100%",
    sub: "Pemenuhan kewajiban pasar domestik YTD",
    tone: "teal",
  },
  {
    label: "Export Levy YTD",
    value: "Rp 1,84 T",
    sub: "Pungutan ekspor BPDPKS dibayar tepat waktu",
    tone: "amber",
  },
  {
    label: "Sanksi Berjalan",
    value: "1",
    sub: "Sanksi administratif lingkungan — dalam pemenuhan",
    subDanger: true,
    tone: "red",
  },
];

/* ── Kewajiban per domain ─────────────────────────────────────────── */

export interface ObligationDomain {
  domain: string;
  total: number;
  patuh: number;
  parsial: number;
  non: number;
  /** Cross-link modul detail bila ada. */
  href?: string;
  catatan?: string;
}

/**
 * Total 84+62+58+44+52+86 = 386; patuh 352 (91,2%) · parsial 28 · non 6.
 * Domain ketenagakerjaan di-drill-down di /risk-compliance (scope SDM,
 * 214 sub-kewajiban operasional diagregasi menjadi 86 kewajiban induk).
 */
export const obligationByDomain: ObligationDomain[] = [
  { domain: "BUMN & Kementerian", total: 84, patuh: 78, parsial: 5, non: 1 },
  { domain: "Agraria & HGU", total: 62, patuh: 53, parsial: 7, non: 2, catatan: "Termasuk kewajiban perpanjangan & tata batas" },
  { domain: "Lingkungan", total: 58, patuh: 52, parsial: 5, non: 1, catatan: "PROPER, limbah cair PKS/PG, emisi" },
  { domain: "Perdagangan & Ekspor", total: 44, patuh: 42, parsial: 2, non: 0, catatan: "DMO, pungutan ekspor, perizinan PE" },
  { domain: "Pajak & Cukai", total: 52, patuh: 50, parsial: 2, non: 0 },
  {
    domain: "Ketenagakerjaan",
    total: 86,
    patuh: 77,
    parsial: 7,
    non: 2,
    href: "/risk-compliance",
    catatan: "Detail operasional di modul Risk & Compliance (scope SDM)",
  },
];

/* ── Regulatory Change Radar ──────────────────────────────────────── */

export interface RegChangePipeline {
  name: string;
  status: "RUU/RPP" | "Harmonisasi" | "Berlaku Bertahap";
  effective: string;
  impact: string;
  readiness: number;
  action: string;
  href?: string;
}

export const regChangeRadar: RegChangePipeline[] = [
  {
    name: "Permen BUMN — penajaman tata kelola risiko (turunan PER-2/MBU/03/2023)",
    status: "Harmonisasi",
    effective: "Q4 2026 (est.)",
    impact: "Pelaporan risiko ke Dekom & kewajiban KRI kuantitatif",
    readiness: 74,
    action: "Gap assessment ERM + penyesuaian charter Komite Risiko",
  },
  {
    name: "Revisi tarif pungutan ekspor CPO (BPDPKS)",
    status: "RUU/RPP",
    effective: "H2 2026 (est.)",
    impact: "±Rp 120–180 M/tahun beban levy tambahan bila tarif progresif naik",
    readiness: 62,
    action: "Simulasi tarif pada model harga; advokasi via GAPKI & Kementerian BUMN",
  },
  {
    name: "EUDR — due diligence bebas deforestasi pasar UE",
    status: "Berlaku Bertahap",
    effective: "Des 2027 (operator besar)",
    impact: "Ekspor UE 18% · geolokasi rantai pasok inti & plasma",
    readiness: 78,
    action: "Taskforce EUDR lintas dimensi — detail di ESG & Sustainability",
    href: "/esg-sustainability/deforestasi-eudr",
  },
];

/* ── DMO Tracker bulanan ──────────────────────────────────────────── */

export interface DmoMonth {
  bulan: string;
  kewajibanRbTon: number;
  realisasiRbTon: number;
  pct: number;
}

export const dmoTracker: DmoMonth[] = [
  { bulan: "Jan 26", kewajibanRbTon: 28, realisasiRbTon: 28, pct: 100 },
  { bulan: "Feb 26", kewajibanRbTon: 27, realisasiRbTon: 27, pct: 100 },
  { bulan: "Mar 26", kewajibanRbTon: 30, realisasiRbTon: 30, pct: 100 },
  { bulan: "Apr 26", kewajibanRbTon: 31, realisasiRbTon: 31, pct: 100 },
  { bulan: "Mei 26", kewajibanRbTon: 33, realisasiRbTon: 33, pct: 100 },
];

/* ── Portofolio HGU ───────────────────────────────────────────────── */

/**
 * Catatan konsistensi: 9 sengketa di sini = sengketa ADMINISTRATIF proses
 * perpanjangan HGU (keberatan tata batas/tumpang tindih izin) — bukan
 * 214 kasus sengketa lahan dimensi Aset (ASET.sengketaKasus) yang merupakan
 * sengketa fisik/okupasi; subset yang berperkara ada di Legal Portfolio.
 */
export const hguPortfolio = {
  sertifikat: 512,
  perpanjanganProses: 23,
  sengketaAdministratif: 9,
  habisLima5ThnRbHa: ASET.hguHabis5ThnRbHa, // 212
  sengketaLahanAsetKasus: ASET.sengketaKasus, // 214 — referensi dimensi Aset
  note: "Puncak jatuh tempo HGU 2028 (68 rb ha); keterlambatan perpanjangan menaikkan risiko okupasi & gugatan pihak ketiga.",
} as const;

/* ── Kepatuhan per subholding (heat) ──────────────────────────────── */

export interface ComplianceSubholdingRow {
  name: string;
  skor: number;
  patuhPct: number;
  parsial: number;
  non: number;
  trend: "up" | "down" | "flat";
  trendTone: "good" | "bad" | "neutral";
}

export const complianceBySubholding: ComplianceSubholdingRow[] = [
  { name: "PalmCo", skor: 90, patuhPct: 91.8, parsial: 11, non: 2, trend: "up", trendTone: "good" },
  { name: "SGN", skor: 86, patuhPct: 88.9, parsial: 9, non: 2, trend: "flat", trendTone: "neutral" },
  { name: "PTPN I (SupportingCo)", skor: 88, patuhPct: 90.4, parsial: 5, non: 1, trend: "up", trendTone: "good" },
  { name: "Holding", skor: 94, patuhPct: 95.6, parsial: 3, non: 1, trend: "up", trendTone: "good" },
];

/* ── Log sanksi ───────────────────────────────────────────────────── */

export interface SanctionRow {
  instansi: string;
  perkara: string;
  nilai: string;
  status: string;
  target: string;
}

export const sanctionLog: SanctionRow[] = [
  {
    instansi: "KLHK (Dinas LH Provinsi)",
    perkara: "Sanksi administratif — baku mutu limbah cair 1 PKS Regional 4",
    nilai: "Paksaan pemerintah + denda administratif Rp 2,1 M",
    status: "Perbaikan IPAL 72% — dalam tenggat pemenuhan",
    target: "Sep 2026",
  },
];

export const kepInsights: RiskInsight[] = [
  {
    insight:
      "Non-compliance tersisa 6 kewajiban dan terkonsentrasi di domain Agraria (2) dan Ketenagakerjaan (2) — dua domain dengan proses birokrasi terpanjang.",
    rekomendasi:
      "Perlakukan 6 item non-compliant sebagai program dengan milestone bulanan ke Komite Risiko, bukan sekadar baris register.",
  },
  {
    insight:
      "DMO 100% dan levy Rp 1,84 T tepat waktu — kepatuhan perdagangan jadi modal advokasi saat revisi tarif pungutan ekspor dibahas.",
    rekomendasi:
      "Gunakan track record kepatuhan sebagai posisi tawar formal dalam konsultasi publik revisi tarif BPDPKS.",
  },
  {
    insight:
      "Kepatuhan grup 91,2% enterprise vs 92,4% scope ketenagakerjaan (rc-data) — konsisten arah; gap terbesar justru di domain agraria (85,5%).",
    rekomendasi:
      "Alokasikan tambahan tenaga legal-agraria ke Regional 3–4 yang memegang mayoritas kewajiban HGU parsial.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region AUDIT-TEMUAN — /risiko-kepatuhan/audit-temuan
   ══════════════════════════════════════════════════════════════════════ */

export const auditKpi: RiskPageKpi[] = [
  {
    label: "Temuan BPK",
    value: "23",
    sub: "Tindak lanjut selesai 17 (73,9%)",
    tone: "blue",
  },
  {
    label: "Temuan SPI YTD",
    value: "214",
    sub: "Closed 173 (81%) · 41 terbuka",
    tone: "teal",
  },
  {
    label: "Temuan KAP",
    value: "6",
    sub: "Opini audit LK 2025: WTP",
    tone: "green",
  },
  {
    label: "Temuan Overdue",
    value: "11",
    sub: "Dari 49 temuan terbuka lintas sumber",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Cakupan PKPT",
    value: "68%",
    sub: "120 dari 176 auditable unit selesai diaudit",
    tone: "amber",
  },
];

/* ── Temuan per sumber (donut) ────────────────────────────────────── */

export interface FindingSource {
  source: string;
  total: number;
  closed: number;
  open: number;
  color: string;
}

/** Total temuan 243 (23+214+6); terbuka 49 (6+41+2). */
export const bySource: FindingSource[] = [
  { source: "BPK", total: 23, closed: 17, open: 6, color: PALETTE.red },
  { source: "SPI (Internal)", total: 214, closed: 173, open: 41, color: PALETTE.blue },
  { source: "KAP (Eksternal)", total: 6, closed: 4, open: 2, color: PALETTE.teal },
];

/* ── Aging temuan terbuka ─────────────────────────────────────────── */

export interface FindingAgingBucket {
  label: string;
  count: number;
  color: string;
}

/** Total = 49 temuan terbuka; overdue 11 = 7 (90–180) + 4 (>180). */
export const agingBuckets: FindingAgingBucket[] = [
  { label: "< 30 hari", count: 14, color: PALETTE.green },
  { label: "30–90 hari", count: 19, color: PALETTE.amber },
  { label: "90–180 hari", count: 12, color: "#f0662d" },
  { label: "> 180 hari", count: 4, color: PALETTE.red },
];

/* ── Temuan per kategori ──────────────────────────────────────────── */

export interface FindingCategory {
  kategori: string;
  count: number;
  color: string;
}

/** Total = 243 temuan (seluruh sumber). */
export const findingByCategory: FindingCategory[] = [
  { kategori: "Keuangan & Pelaporan", count: 52, color: PALETTE.blue },
  { kategori: "Pengadaan", count: 61, color: PALETTE.red },
  { kategori: "Aset & Lahan", count: 43, color: PALETTE.amber },
  { kategori: "Operasional", count: 64, color: PALETTE.teal },
  { kategori: "Teknologi Informasi", count: 23, color: PALETTE.purple },
];

/* ── Tren tindak lanjut 12 bulan ──────────────────────────────────── */

export interface TlTrendPoint {
  bulan: string;
  /** % temuan closed kumulatif on-time. */
  closedPct: number;
}

export const tlTrend: TlTrendPoint[] = [
  { bulan: "Jun 25", closedPct: 66 },
  { bulan: "Jul 25", closedPct: 68 },
  { bulan: "Agu 25", closedPct: 67 },
  { bulan: "Sep 25", closedPct: 70 },
  { bulan: "Okt 25", closedPct: 72 },
  { bulan: "Nov 25", closedPct: 73 },
  { bulan: "Des 25", closedPct: 75 },
  { bulan: "Jan 26", closedPct: 74 },
  { bulan: "Feb 26", closedPct: 76 },
  { bulan: "Mar 26", closedPct: 78 },
  { bulan: "Apr 26", closedPct: 79 },
  { bulan: "Mei 26", closedPct: 81 },
];

/* ── Temuan berulang (8) ──────────────────────────────────────────── */

export interface RepeatFinding {
  temuan: string;
  unit: string;
  kali: number;
  sumber: string;
}

export const repeatFindings: RepeatFinding[] = [
  { temuan: "Kelemahan dokumentasi HPS pengadaan", unit: "PalmCo Regional 2", kali: 3, sumber: "SPI" },
  { temuan: "Piutang plasma tidak didukung rekonsiliasi", unit: "PalmCo Regional 4", kali: 3, sumber: "BPK" },
  { temuan: "Stock opname CPO tidak tepat waktu", unit: "SGN & terminal", kali: 2, sumber: "SPI" },
  { temuan: "Aset tetap belum bersertifikat", unit: "PTPN I", kali: 3, sumber: "BPK" },
  { temuan: "Akses user ERP tidak di-review berkala", unit: "Holding TI", kali: 2, sumber: "KAP" },
  { temuan: "Denda keterlambatan kontraktor tidak dipungut", unit: "SGN", kali: 2, sumber: "SPI" },
  { temuan: "Bahan kimia pabrik tanpa berita acara pemakaian", unit: "PalmCo Regional 3", kali: 2, sumber: "SPI" },
  { temuan: "Perjalanan dinas tidak sesuai ketentuan", unit: "Lintas unit", kali: 2, sumber: "SPI" },
];

/** Cakupan Program Kerja Pengawasan Tahunan. */
export const pkptCoverage = { pct: 68, audited: 120, auditableUnits: 176 } as const;

/* ── Top findings (nilai) ─────────────────────────────────────────── */

export interface TopFindingRow {
  temuan: string;
  sumber: string;
  unit: string;
  nilai: string;
  status: "Selesai" | "Proses TL" | "Overdue";
  due: string;
}

/** Top-6 = Rp 600 M dari total nilai temuan Rp 640 M; disetor kembali Rp 210 M. */
export const topFindings: TopFindingRow[] = [
  { temuan: "Kekurangan volume pekerjaan revitalisasi PG", sumber: "BPK", unit: "SGN", nilai: "Rp 185 M", status: "Proses TL", due: "Okt 2026" },
  { temuan: "Kelebihan bayar kontrak angkutan TBS", sumber: "SPI", unit: "PalmCo Regional 3", nilai: "Rp 128 M", status: "Proses TL", due: "Sep 2026" },
  { temuan: "Piutang plasma macet tanpa agunan memadai", sumber: "BPK", unit: "PalmCo Regional 4", nilai: "Rp 96 M", status: "Overdue", due: "Jun 2026" },
  { temuan: "Selisih stok CPO terminal", sumber: "SPI", unit: "Logistik", nilai: "Rp 84 M", status: "Selesai", due: "—" },
  { temuan: "Denda kontraktor belum dipungut", sumber: "SPI", unit: "SGN", nilai: "Rp 62 M", status: "Proses TL", due: "Agu 2026" },
  { temuan: "Sewa aset tanpa perjanjian diperbarui", sumber: "KAP", unit: "PTPN I", nilai: "Rp 45 M", status: "Proses TL", due: "Sep 2026" },
];

export const topFindingStats = {
  nilaiTotal: "Rp 640 M",
  disetorKembali: "Rp 210 M",
  note: "Nilai temuan seluruh sumber YTD; Rp 210 M telah disetor kembali ke kas perusahaan/negara.",
} as const;

export const auditInsights: RiskInsight[] = [
  {
    insight:
      "Pengadaan adalah kategori temuan terbesar (61 dari 243) dan sumber 3 dari 8 temuan berulang — akar masalah di dokumentasi HPS & pengawasan kontrak.",
    rekomendasi:
      "Wajibkan e-procurement fase 2 untuk seluruh paket > Rp 1 M dan review HPS berlapis sebelum tender.",
  },
  {
    insight:
      "Closure rate naik 12 bulan berturut (66%→81%), tetapi 11 temuan overdue bernilai besar — termasuk piutang plasma Rp 96 M yang juga limit breach appetite.",
    rekomendasi:
      "Satukan penanganan temuan piutang plasma dengan program restrukturisasi breach appetite agar tidak dikerjakan dua jalur.",
  },
  {
    insight:
      "PKPT baru 68% dengan sisa 56 auditable unit di H2 — beban SPI menumpuk bersamaan musim giling.",
    rekomendasi:
      "Prioritaskan unit berisiko tinggi (register Ekstrem/Tinggi) dan geser unit rendah risiko ke PKPT 2027.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region FRAUD-WBS — /risiko-kepatuhan/fraud-wbs
   ══════════════════════════════════════════════════════════════════════ */

/**
 * Guard konsistensi: 47 laporan WBS enterprise ⊇ 31 laporan scope
 * ketenagakerjaan yang tampil di /risk-compliance (rc-data speakUp.reports);
 * 16 sisanya bukan scope tenaga kerja (pengadaan vendor, aset, dll.).
 */
export const LABOR_WBS_REPORTS = speakUp.reports; // 31

export const wbsKpi: RiskPageKpi[] = [
  {
    label: "Laporan WBS Enterprise",
    value: "47",
    sub: `YTD — superset ${LABOR_WBS_REPORTS} laporan scope ketenagakerjaan (Risk & Compliance SDM)`,
    tone: "blue",
  },
  {
    label: "Substantiated",
    value: "38%",
    sub: "18 dari 47 laporan terbukti",
    tone: "amber",
  },
  {
    label: "Kerugian Fraud Teridentifikasi",
    value: "Rp 18,6 M",
    sub: "Recovery Rp 6,3 M (34%)",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Rata-rata Investigasi",
    value: "41",
    valueSuffix: " hari",
    sub: "SLA 60 hari · 3 kasus melewati SLA",
    tone: "teal",
  },
  {
    label: "Retaliasi Pelapor",
    value: "0",
    sub: "Zero retaliasi — perlindungan pelapor terjaga",
    tone: "green",
  },
];

/* ── Tren 12 bulan + kanal ────────────────────────────────────────── */

export interface WbsTrendPoint {
  bulan: string;
  laporan: number;
}

/** Jan–Mei 26 menjumlah 47 (YTD); Jun–Des 25 = konteks historis. */
export const wbsTrend: WbsTrendPoint[] = [
  { bulan: "Jun 25", laporan: 6 },
  { bulan: "Jul 25", laporan: 7 },
  { bulan: "Agu 25", laporan: 8 },
  { bulan: "Sep 25", laporan: 6 },
  { bulan: "Okt 25", laporan: 7 },
  { bulan: "Nov 25", laporan: 8 },
  { bulan: "Des 25", laporan: 9 },
  { bulan: "Jan 26", laporan: 8 },
  { bulan: "Feb 26", laporan: 9 },
  { bulan: "Mar 26", laporan: 10 },
  { bulan: "Apr 26", laporan: 9 },
  { bulan: "Mei 26", laporan: 11 },
];

export interface WbsChannel {
  channel: string;
  count: number;
  color: string;
}

/** Total = 47 laporan YTD. */
export const wbsChannels: WbsChannel[] = [
  { channel: "Portal Web WBS", count: 19, color: PALETTE.blue },
  { channel: "Hotline Telepon", count: 12, color: PALETTE.teal },
  { channel: "Email Khusus", count: 10, color: PALETTE.amber },
  { channel: "Surat/Kotak Fisik", count: 6, color: PALETTE.slate },
];

/* ── Kasus per tipe ───────────────────────────────────────────────── */

export interface WbsCaseType {
  tipe: string;
  count: number;
  color: string;
}

/** Total = 47 laporan YTD. */
export const caseByType: WbsCaseType[] = [
  { tipe: "Fraud Pengadaan", count: 14, color: PALETTE.red },
  { tipe: "Penggelapan Aset", count: 9, color: "#f0662d" },
  { tipe: "Benturan Kepentingan", count: 8, color: PALETTE.amber },
  { tipe: "Gratifikasi", count: 6, color: PALETTE.purple },
  { tipe: "Lainnya (etika, pelayanan)", count: 10, color: PALETTE.slate },
];

/* ── Heat fraud per subholding ────────────────────────────────────── */

export interface FraudHeatRow {
  name: string;
  laporan: number;
  substantiated: number;
  loss: string;
}

/** Laporan menjumlah 47; substantiated 18; loss menjumlah Rp 18,6 M. */
export const fraudHeat: FraudHeatRow[] = [
  { name: "PalmCo", laporan: 21, substantiated: 8, loss: "Rp 8,4 M" },
  { name: "SGN", laporan: 14, substantiated: 6, loss: "Rp 6,2 M" },
  { name: "PTPN I (SupportingCo)", laporan: 8, substantiated: 3, loss: "Rp 3,1 M" },
  { name: "Holding", laporan: 4, substantiated: 1, loss: "Rp 0,9 M" },
];

/* ── Funnel investigasi ───────────────────────────────────────────── */

export interface InvestigationStage {
  stage: string;
  count: number;
}

/** 18 terbukti = substantiated KPI; sanksi 15 = 12 disiplin + 3 APH. */
export const investigationFunnel: InvestigationStage[] = [
  { stage: "Laporan Masuk", count: 47 },
  { stage: "Lolos Telaah Awal", count: 41 },
  { stage: "Investigasi Penuh", count: 26 },
  { stage: "Terbukti (Substantiated)", count: 18 },
  { stage: "Sanksi / Diserahkan ke APH", count: 15 },
];

export const sanksiSummary = {
  disiplin: 12,
  aph: 3,
  prosesSanksi: 3, // terbukti namun sanksi belum final
  note: "12 sanksi disiplin (SP hingga PHK) dan 3 kasus diserahkan ke Aparat Penegak Hukum; 3 kasus terbukti masih dalam proses penetapan sanksi.",
} as const;

/* ── Gratifikasi & UPG ────────────────────────────────────────────── */

export const gratifikasiUpg = {
  lhkpnPct: 98.4,
  lhkpnWajib: 1240,
  lhkpnLapor: 1220,
  laporanGratifikasiYtd: 34,
  diteruskanKpk: 5,
  note: "Kepatuhan LHKPN 98,4% (1.220 dari 1.240 wajib lapor); 34 laporan gratifikasi ke UPG YTD, 5 diteruskan ke KPK.",
} as const;

export const wbsInsights: RiskInsight[] = [
  {
    insight:
      "Volume laporan naik (11 di Mei, tertinggi 12 bulan) tetapi substantiation rate stabil 38% — indikasi meningkatnya kepercayaan pada kanal, bukan memburuknya fraud.",
    rekomendasi:
      "Pertahankan kampanye speak-up; publikasi statistik penanganan (tanpa identitas) untuk menjaga momentum kepercayaan.",
  },
  {
    insight:
      "Fraud pengadaan mendominasi (14 dari 47) dan selaras dengan temuan audit pengadaan (61 temuan) — dua sinyal independen menunjuk area yang sama.",
    rekomendasi:
      "Jadikan pengadaan target audit forensik terarah H2 2026 dengan data analytics pada vendor berulang.",
  },
  {
    insight:
      "Recovery 34% (Rp 6,3 M dari Rp 18,6 M) tertahan karena 3 kasus APH masih berproses — aset belum bisa dieksekusi.",
    rekomendasi:
      "Daftarkan tuntutan ganti rugi perdata paralel pada 3 kasus APH untuk mengamankan hak recovery.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region MITIGASI-ERM — /risiko-kepatuhan/mitigasi-erm
   ══════════════════════════════════════════════════════════════════════ */

export const ermKpi: RiskPageKpi[] = [
  {
    label: "Total Sum Insured (TSI)",
    value: "Rp 128 T",
    sub: "5 lini asuransi korporat aktif",
    tone: "blue",
  },
  {
    label: "Premi Tahunan",
    value: "Rp 340 M",
    sub: "Loss ratio blended 42%",
    tone: "teal",
  },
  {
    label: "Aksi Mitigasi On-Track",
    value: "78%",
    sub: "75 dari 96 aksi register · 7 terlambat",
    tone: "green",
  },
  {
    label: "ERM Maturity",
    value: "3,42",
    valueSuffix: "/5",
    sub: `Level Managed · target ${String(RISIKO.ermTarget).replace(".", ",")} pada 2027`,
    tone: "amber",
  },
];

/* ── Lini asuransi ────────────────────────────────────────────────── */

export interface InsuranceLine {
  line: string;
  tsiRpT: number;
  premiRpM: number;
  lossRatioPct: number;
  catatan?: string;
}

/**
 * TSI menjumlah 128,0 T; premi menjumlah Rp 340 M.
 * Loss ratio blended tertimbang premi ≈ 42%.
 */
export const insuranceLines: InsuranceLine[] = [
  { line: "Property All Risk / PAR (pabrik & aset)", tsiRpT: 104.0, premiRpM: 236, lossRatioPct: 46 },
  { line: "Marine Cargo (CPO, gula, karet)", tsiRpT: 12.4, premiRpM: 38, lossRatioPct: 38 },
  { line: "D&O (Direksi & Dekom)", tsiRpT: 4.0, premiRpM: 20, lossRatioPct: 20 },
  { line: "Cyber Insurance", tsiRpT: 2.6, premiRpM: 18, lossRatioPct: 0, catatan: "Lini baru 2026 — belum ada klaim" },
  { line: "Kendaraan & Alat Berat", tsiRpT: 5.0, premiRpM: 28, lossRatioPct: 62 },
];

/* ── Riwayat klaim 3 tahun ────────────────────────────────────────── */

export interface ClaimYear {
  tahun: string;
  klaimRpM: number;
  premiRpM: number;
  lossRatioPct: number;
}

export const claimHistory: ClaimYear[] = [
  { tahun: "2024", klaimRpM: 148, premiRpM: 310, lossRatioPct: 48 },
  { tahun: "2025", klaimRpM: 132, premiRpM: 325, lossRatioPct: 41 },
  { tahun: "2026 YTD", klaimRpM: 59, premiRpM: 142, lossRatioPct: 42 },
];

/* ── Portofolio aksi mitigasi (96 aksi, RAG) ──────────────────────── */

export interface MitigationCategoryRow {
  kategori: string;
  total: number;
  onTrack: number;
  atRisk: number;
  late: number;
}

/** Total 96 aksi = 75 on-track (78%) + 14 at-risk + 7 late. */
export const mitigationPortfolio: MitigationCategoryRow[] = [
  { kategori: "Strategis", total: 8, onTrack: 6, atRisk: 1, late: 1 },
  { kategori: "Keuangan", total: 18, onTrack: 15, atRisk: 2, late: 1 },
  { kategori: "Operasional", total: 34, onTrack: 27, atRisk: 5, late: 2 },
  { kategori: "Kepatuhan", total: 20, onTrack: 16, atRisk: 3, late: 1 },
  { kategori: "Reputasi", total: 8, onTrack: 6, atRisk: 1, late: 1 },
  { kategori: "Proyek", total: 8, onTrack: 5, atRisk: 2, late: 1 },
];

/* ── ERM Maturity Spider (8 dimensi) ──────────────────────────────── */

export interface ErmDimension {
  dimensi: string;
  skor: number;
  target: number;
}

/**
 * Komposit ERM 3,42 (RISIKO.ermMaturity) adalah rata-rata TERTIMBANG
 * (bobot governance/proses/pelaporan lebih besar sesuai metodologi asesor),
 * bukan rata-rata sederhana 8 dimensi.
 */
export const ermSpider: ErmDimension[] = [
  { dimensi: "Governance & Struktur", skor: 3.8, target: 4.2 },
  { dimensi: "Budaya Risiko", skor: 3.0, target: 3.8 },
  { dimensi: "Kuantifikasi Risiko", skor: 2.9, target: 3.8 },
  { dimensi: "Teknologi & Data", skor: 3.1, target: 4.0 },
  { dimensi: "Proses & Metodologi", skor: 3.6, target: 4.0 },
  { dimensi: "Risk Appetite", skor: 3.5, target: 4.0 },
  { dimensi: "Pelaporan & Monitoring", skor: 3.7, target: 4.2 },
  { dimensi: "Integrasi Bisnis", skor: 3.2, target: 4.0 },
];

/* ── Tren efektivitas kontrol ─────────────────────────────────────── */

export interface ControlEffPoint {
  periode: string;
  pct: number;
}

export const controlEffectiveness: ControlEffPoint[] = [
  { periode: "S1 2024", pct: 61 },
  { periode: "S2 2024", pct: 64 },
  { periode: "S1 2025", pct: 68 },
  { periode: "S2 2025", pct: 71 },
  { periode: "Q1 2026", pct: 73 },
  { periode: "Q2 2026", pct: 75 },
];

/* ── Pilot asuransi parametrik ────────────────────────────────────── */

export interface ParametricPilotRow {
  regional: string;
  indeks: string;
  pemicu: string;
  payoutMaks: string;
  status: "Aktif" | "Proses Penutupan Polis";
}

export const parametricPilot: ParametricPilotRow[] = [
  {
    regional: "Regional 3 (Riau & Sumbar)",
    indeks: "Curah hujan kumulatif 90 hari",
    pemicu: "≤ 60% dari normal stasiun acuan",
    payoutMaks: "Rp 120 M",
    status: "Aktif",
  },
  {
    regional: "Regional 4 (Sumsel & Jambi)",
    indeks: "Curah hujan kumulatif 90 hari",
    pemicu: "≤ 60% dari normal stasiun acuan",
    payoutMaks: "Rp 95 M",
    status: "Aktif",
  },
];

export const ermDecisions: RiskDecision[] = [
  {
    title: "Strategi Renewal Asuransi 2027",
    situation: "Hard market properti: indikasi kenaikan rate PAR 8–12% saat renewal; loss ratio grup 42% relatif sehat.",
    decision: "Setujui strategi renewal: naikkan deductible PAR + long-term agreement 2 tahun untuk mengunci rate.",
    exposure: "Premi Rp 340 M/tahun",
    due: "Okt 2026",
    tone: "amber",
  },
  {
    title: "Uplift ERM — Kuantifikasi & Teknologi",
    situation: "Dua dimensi terlemah (kuantifikasi 2,9; teknologi 3,1) menahan komposit menuju target 4,0 pada 2027.",
    decision: "Setujui program ERM-IT: risk quantification engine + integrasi KRI real-time ke ERM System.",
    exposure: "Capex Rp 46 M",
    due: "Sep 2026",
    tone: "amber",
  },
];

export const ermInsights: RiskInsight[] = [
  {
    insight:
      "Loss ratio kendaraan & alat berat 62% jauh di atas blended 42% — subsidi silang dari lini PAR & marine.",
    rekomendasi:
      "Renegosiasi premi kendaraan dengan telematics/driver scoring atau naikkan deductible per kejadian.",
  },
  {
    insight:
      "7 aksi mitigasi terlambat tersebar merata di 6 kategori (1–2 per kategori) — masalahnya disiplin eksekusi lintas owner, bukan satu unit.",
    rekomendasi:
      "Ikat penyelesaian aksi mitigasi ke KPI direktorat pemilik risiko mulai siklus penilaian H2.",
  },
  {
    insight:
      "Cyber insurance TSI Rp 2,6 T masih kecil dibanding profil risiko siber (register Ekstrem) — coverage gap signifikan.",
    rekomendasi:
      "Review limit cyber saat renewal 2027 setelah program uplift keamanan TI menurunkan residual.",
  },
];

/* #endregion */

/* ══════════════════════════════════════════════════════════════════════
   #region LEGAL-PORTFOLIO — /risiko-kepatuhan/legal-portfolio
   ══════════════════════════════════════════════════════════════════════ */

export const legalKpi: RiskPageKpi[] = [
  {
    label: "Perkara Aktif",
    value: String(RISIKO.perkaraAktif), // 87
    sub: "Seluruh forum: PN, PTUN, arbitrase, PHI",
    tone: "blue",
  },
  {
    label: "Sengketa Lahan / HGU",
    value: "52",
    sub: `Subset berperkara dari ${ASET.sengketaKasus} kasus sengketa lahan (dimensi Aset)`,
    tone: "amber",
  },
  {
    label: "Eksposur Legal",
    value: "Rp 4,2 T",
    sub: "Nilai gugatan agregat · provisi Rp 380 M",
    subDanger: true,
    tone: "red",
  },
  {
    label: "Win Rate 3 Tahun",
    value: "71%",
    sub: "41 menang dari 58 putusan inkracht 2023–2026",
    tone: "green",
  },
  {
    label: "Perkara Baru YTD",
    value: "14",
    sub: "9 lahan · 3 komersial · 2 ketenagakerjaan",
    tone: "teal",
  },
];

/* ── Perkara per tipe (donut) ─────────────────────────────────────── */

export interface LegalCaseType {
  tipe: string;
  count: number;
  color: string;
  /** Cross-link modul terkait. */
  href?: string;
}

/** Total = 87 perkara aktif (RISIKO.perkaraAktif). */
export const legalCaseByType: LegalCaseType[] = [
  { tipe: "Sengketa Lahan / HGU", count: 52, color: PALETTE.red },
  { tipe: "Komersial & Kontrak", count: 17, color: PALETTE.blue },
  { tipe: "Ketenagakerjaan (PHI)", count: 9, color: PALETTE.amber, href: "/industrial-relations" },
  { tipe: "Pajak & Bea", count: 6, color: PALETTE.teal },
  { tipe: "Lainnya", count: 3, color: PALETTE.slate },
];

/* ── Top 10 eksposur ──────────────────────────────────────────────── */

export interface ExposureCase {
  perkara: string;
  jenis: string;
  lokasi: string;
  eksposur: string;
  tahap: string;
  prognosis: "Menang" | "Berimbang" | "Berisiko";
}

/** Top-10 = Rp 3,40 T dari total eksposur Rp 4,2 T. */
export const exposureTop10: ExposureCase[] = [
  { perkara: "Gugatan pembatalan HGU eks-okupasi", jenis: "Lahan/HGU", lokasi: "Regional 3 — Riau", eksposur: "Rp 1,10 T", tahap: "Banding", prognosis: "Berimbang" },
  { perkara: "Sengketa tata batas HGU vs izin kehutanan", jenis: "Lahan/HGU", lokasi: "Sumut", eksposur: "Rp 620 M", tahap: "Kasasi", prognosis: "Menang" },
  { perkara: "Klaim wanprestasi kontraktor revitalisasi PG", jenis: "Komersial", lokasi: "Jawa Timur", eksposur: "Rp 480 M", tahap: "Arbitrase (BANI)", prognosis: "Berimbang" },
  { perkara: "Gugatan masyarakat adat atas areal inti", jenis: "Lahan/HGU", lokasi: "Sumsel", eksposur: "Rp 310 M", tahap: "Pengadilan Negeri", prognosis: "Berisiko" },
  { perkara: "Sengketa pajak — koreksi biaya replanting", jenis: "Pajak", lokasi: "Pengadilan Pajak", eksposur: "Rp 240 M", tahap: "Banding Pajak", prognosis: "Menang" },
  { perkara: "Gugatan pembatalan pelepasan aset non-produktif", jenis: "Komersial", lokasi: "Sumut", eksposur: "Rp 180 M", tahap: "Pengadilan Negeri", prognosis: "Menang" },
  { perkara: "Okupasi lahan eks-HGU belum diperpanjang", jenis: "Lahan/HGU", lokasi: "Jambi", eksposur: "Rp 150 M", tahap: "Mediasi", prognosis: "Berimbang" },
  { perkara: "Klaim kualitas CPO kontrak ekspor", jenis: "Komersial", lokasi: "Arbitrase SIAC", eksposur: "Rp 120 M", tahap: "Arbitrase", prognosis: "Menang" },
  { perkara: "Sengketa ganti rugi jalur infrastruktur publik", jenis: "Lahan/HGU", lokasi: "Jawa Tengah", eksposur: "Rp 110 M", tahap: "Pengadilan Negeri", prognosis: "Berimbang" },
  { perkara: "Gugatan class action limbah PKS", jenis: "Lainnya", lokasi: "Regional 4", eksposur: "Rp 90 M", tahap: "Pengadilan Negeri", prognosis: "Berisiko" },
];

/* ── Funnel tahapan perkara ───────────────────────────────────────── */

export interface CaseStage {
  stage: string;
  count: number;
}

/** Total = 87 perkara aktif. */
export const stageFunnel: CaseStage[] = [
  { stage: "Mediasi / Non-Litigasi", count: 14 },
  { stage: "Pengadilan Tingkat I", count: 31 },
  { stage: "Banding", count: 17 },
  { stage: "Kasasi", count: 12 },
  { stage: "Peninjauan Kembali", count: 6 },
  { stage: "Eksekusi Putusan", count: 7 },
];

/* ── Konsentrasi geografis ────────────────────────────────────────── */

export interface GeoConcentrationRow {
  provinsi: string;
  count: number;
}

/** Total = 87 perkara aktif. */
export const geoConcentration: GeoConcentrationRow[] = [
  { provinsi: "Sumatera Utara", count: 24 },
  { provinsi: "Riau", count: 11 },
  { provinsi: "Jawa Timur", count: 10 },
  { provinsi: "Sumatera Selatan", count: 7 },
  { provinsi: "Jambi", count: 6 },
  { provinsi: "Jawa Tengah", count: 6 },
  { provinsi: "Aceh", count: 5 },
  { provinsi: "Sumatera Barat", count: 4 },
  { provinsi: "Kalimantan Selatan", count: 3 },
  { provinsi: "Provinsi Lainnya", count: 11 },
];

/* ── Okupasi (compact) ────────────────────────────────────────────── */

/**
 * 18,4 rb ha okupasi aktif yang SUDAH berperkara — subset dari total
 * sengketa lahan 82,4 rb ha / 214 kasus di dimensi Aset (ASET.sengketaRbHa /
 * ASET.sengketaKasus); sisanya ditangani non-litigasi (mediasi, sertipikasi,
 * pengamanan aset).
 */
export const okupasiCompact = {
  okupasiBerperkaraRbHa: 18.4,
  totalSengketaRbHa: ASET.sengketaRbHa, // 82,4
  totalSengketaKasus: ASET.sengketaKasus, // 214
  perkaraLahanAktif: 52,
  note: "Okupasi berperkara terkonsentrasi di Sumut & Riau; percepatan perpanjangan HGU adalah pencegahan okupasi baru paling efektif.",
} as const;

/* ── Kecukupan provisi ────────────────────────────────────────────── */

export interface ProvisionRow {
  jenis: string;
  eksposurRpM: number;
  expectedLossRpM: number;
  provisiRpM: number;
}

/**
 * Provisi menjumlah Rp 380 M; expected loss (tertimbang probabilitas)
 * Rp 410 M → rasio kecukupan 92,7%. Eksposur bruto total Rp 4,2 T.
 */
export const provisionAdequacy: ProvisionRow[] = [
  { jenis: "Sengketa Lahan / HGU", eksposurRpM: 2960, expectedLossRpM: 230, provisiRpM: 210 },
  { jenis: "Komersial & Kontrak", eksposurRpM: 820, expectedLossRpM: 95, provisiRpM: 95 },
  { jenis: "Ketenagakerjaan (PHI)", eksposurRpM: 110, expectedLossRpM: 32, provisiRpM: 30 },
  { jenis: "Pajak & Bea", eksposurRpM: 260, expectedLossRpM: 38, provisiRpM: 35 },
  { jenis: "Lainnya", eksposurRpM: 50, expectedLossRpM: 15, provisiRpM: 10 },
];

export const provisionStats = {
  provisiTotal: "Rp 380 M",
  expectedLoss: "Rp 410 M",
  adequacyPct: 92.7,
  note: "Provisi mengikuti PSAK 57 (kewajiban diestimasi bila probable & terukur); gap Rp 30 M direview pada penutupan buku semester.",
} as const;

/** Basis win rate: putusan inkracht 3 tahun terakhir. */
export const winRate = { putusan: 58, menang: 41, pct: 71 } as const;

export const legalInsights: RiskInsight[] = [
  {
    insight:
      "60% perkara aktif (52 dari 87) dan 70% eksposur adalah lahan/HGU — profil litigasi grup pada dasarnya adalah risiko agraria.",
    rekomendasi:
      "Geser sumber daya legal dari reaktif ke preventif: dukung penuh 23 perpanjangan HGU & sertipikasi aset sebelum berperkara.",
  },
  {
    insight:
      "Satu perkara (HGU Riau Rp 1,1 T) menyumbang 26% total eksposur — konsentrasi risiko pada satu putusan banding.",
    rekomendasi:
      "Susun skenario putusan (menang/kalah/sebagian) dengan opsi settlement terukur sebelum putusan banding terbit.",
  },
  {
    insight:
      "Win rate 71% sehat, tetapi provisi Rp 380 M sedikit di bawah expected loss Rp 410 M (kecukupan 92,7%).",
    rekomendasi:
      "Top-up provisi Rp 30 M pada reviu semester agar tidak menjadi temuan KAP pada audit LK 2026.",
  },
];

/* #endregion */
