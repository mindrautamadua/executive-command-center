/**
 * Data panel CEO Decision Intelligence di dashboard utama ("/").
 * Periode acuan: 31 Mei 2026 (YTD). Semua angka diturunkan dari
 * group-baseline.ts dan sumber stg — tidak ada angka tandingan.
 */

import {
  KEUANGAN,
  PEMASARAN,
  PRODUKSI,
  PROYEKSI_FY,
  RISIKO,
  RKAP_YTD,
  SDM,
  STRATEGI,
  hargaGrup,
} from "./group-baseline";
import { stgDecisions } from "./stg-data";

export type CeoTone = "green" | "amber" | "red";

const rpM = (n: number) => `Rp ${Math.round(n).toLocaleString("id-ID")} M`;

/** juta ton × Rp/kg = Rp miliar (1 juta ton = 1 miliar kg). */
const nilaiRpM = (jutaTon: number, rpKg: number) => jutaTon * rpKg;

/* ── Turunan bersama (formula sama dengan data.ts) ────────────────── */

const gapProduksiCpo = RKAP_YTD.produksiCpoJtTon - PRODUKSI.cpoYtdJtTon;
const gapProduksiRpM = nilaiRpM(gapProduksiCpo, hargaGrup.CPO);
const volumeCpoBelumTerjual = PROYEKSI_FY.produksiCpoJtTon - PRODUKSI.cpoYtdJtTon;
const bandVolatilitasRpM = nilaiRpM(volumeCpoBelumTerjual, hargaGrup.CPO * 0.05);
const sensitivitasHargaCpoRpM = nilaiRpM(volumeCpoBelumTerjual, 100);
const volumeEksporCpo = (PROYEKSI_FY.produksiCpoJtTon * PEMASARAN.eksporPctVolCpo) / 100;
const eksposurPungutanRpM = (volumeEksporCpo * 10 * PEMASARAN.kursUsdIdr) / 1_000;
const marjinLabaBersih = KEUANGAN.labaBersihYtd / KEUANGAN.pendapatanYtd;

/* ── 1. CEO Morning Brief ─────────────────────────────────────────── */

export interface CeoTrafficLight {
  area: string;
  tone: CeoTone;
  note: string;
}

export const ceoMorningBrief = {
  trafficLights: [
    {
      area: "Keuangan",
      tone: "green",
      note: `EBITDA Rp ${KEUANGAN.ebitdaYtd.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })} T · di atas RKAP YTD`,
    },
    {
      area: "Operasi",
      tone: "amber",
      note: `Gap CPO ${(gapProduksiCpo * 1_000).toLocaleString("id-ID", {
        maximumFractionDigits: 0,
      })} rb ton · utilisasi PKS ${PRODUKSI.utilisasiPksPct.toLocaleString("id-ID", {
        minimumFractionDigits: 1,
      })}%`,
    },
    {
      area: "Strategi",
      tone: "amber",
      note: `${STRATEGI.inisiatifAtRisk} At Risk · ${STRATEGI.inisiatifOffTrack} Off Track dari ${STRATEGI.inisiatifTotal} inisiatif`,
    },
    {
      area: "SDM",
      tone: "green",
      note: `Engagement ${SDM.engagementSkor.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })} · suksesi ${SDM.cakupanSuksesiPct}%`,
    },
    {
      area: "Risiko",
      tone: "red",
      note: `${RISIKO.ekstrem} risiko ekstrem · El Niño ${RISIKO.elNinoProbabilitasPct}%`,
    },
  ] satisfies CeoTrafficLight[],

  /** Tiga hal yang berubah sejak brief sebelumnya. */
  changed: [
    `Eksposur volatilitas harga CPO naik ke ±${rpM(bandVolatilitasRpM)} (volume belum terjual ${volumeCpoBelumTerjual.toLocaleString("id-ID", { minimumFractionDigits: 2 })} jt ton)`,
    `Gap produksi Regional 4 melebar — pendapatan tertunda ${rpM(gapProduksiRpM)}`,
    "Refinery hilirisasi ahead of plan: progres 58% vs rencana 52%",
  ],

  /** Satu hal yang paling perlu dipantau CEO. */
  watch:
    "Swasembada gula adalah risiko eksekusi strategi tertinggi — perluasan areal tebu dan restrukturisasi 11 PG berstatus Off Track.",
};

/** Keputusan Direksi yang menunggu — sumber sama dengan Strategy Decision Center. */
export const ceoDecisions = stgDecisions;

/* ── 2. Value Creation: driver & leakage ──────────────────────────── */

export interface CeoValueDriver {
  label: string;
  rpT: number;
  kind: "driver" | "leakage";
}

/**
 * Dekomposisi value creation YTD: bruto driver Rp 2,31 T − leakage Rp 0,45 T
 * = netto Rp 1,86 T (baseline). Efisiensi biaya + yield = 59% netto, selaras
 * stgInsights; digital Rp 0,13 T selaras strategyIntelligence; harga & bauran
 * = ASP CPO YTD di atas asumsi RKAP (12.482 vs 12.100).
 */
export const ceoValueDrivers: CeoValueDriver[] = [
  { label: "Efisiensi biaya", rpT: 0.66, kind: "driver" },
  { label: "Yield & produktivitas", rpT: 0.44, kind: "driver" },
  { label: "Hilirisasi", rpT: 0.72, kind: "driver" },
  { label: "Harga & bauran penjualan", rpT: 0.36, kind: "driver" },
  { label: "Digital & lainnya", rpT: 0.13, kind: "driver" },
  { label: "Gap produksi Regional 4", rpT: -0.37, kind: "leakage" },
  { label: "Eksposur harga komoditas", rpT: -0.08, kind: "leakage" },
];

/** Jumlah bruto/leakage dihitung dari daftar — caption tidak boleh hardcode. */
export const ceoValueBrutoRpT = ceoValueDrivers
  .filter((d) => d.kind === "driver")
  .reduce((s, d) => s + d.rpT, 0);
export const ceoValueLeakageRpT = ceoValueDrivers
  .filter((d) => d.kind === "leakage")
  .reduce((s, d) => s + d.rpT, 0);
const ceoValueNettoRpT = ceoValueBrutoRpT + ceoValueLeakageRpT;

/**
 * Guard rekonsiliasi: netto dekomposisi wajib sama dengan angka baseline yang
 * jadi headline. Selisih > pembulatan = build gagal, bukan angka bohong tampil.
 */
if (Math.abs(ceoValueNettoRpT - STRATEGI.valueCreationYtdRpT) > 0.005) {
  throw new Error(
    `Dekomposisi value creation tidak reconcile: netto ${ceoValueNettoRpT.toFixed(2)} vs baseline ${STRATEGI.valueCreationYtdRpT}`,
  );
}

export const ceoValueSummary = {
  ytdRpT: STRATEGI.valueCreationYtdRpT,
  targetFyRpT: STRATEGI.valueCreationTargetFyRpT,
  pct: Math.round(
    (STRATEGI.valueCreationYtdRpT / STRATEGI.valueCreationTargetFyRpT) * 100,
  ),
};

/* ── 3. Enterprise Risk-to-Value ──────────────────────────────────── */

export interface EnterpriseRisk {
  risk: string;
  exposure: string;
  /** Probabilitas × velocity dalam satu label pendek. */
  likelihood: string;
  owner: string;
  action: string;
  tone: CeoTone;
}

/** Top 5 risiko enterprise, semuanya dikonversi ke eksposur rupiah. */
export const enterpriseRiskValue: EnterpriseRisk[] = [
  {
    risk: "Gap pendanaan portofolio inisiatif",
    exposure: "Rp 6,9 T",
    likelihood: "Pasti · lambat",
    owner: "Direktorat Keuangan",
    action: "Putuskan funding mix Q3",
    tone: "red",
  },
  {
    risk: "Eksposur perkara hukum & lahan",
    exposure: `Rp ${RISIKO.eksposurLegalRpT.toLocaleString("id-ID", {
      minimumFractionDigits: 1,
    })} T`,
    likelihood: "Sedang · lambat",
    owner: "Direktorat Hukum",
    action: `Prioritaskan ${RISIKO.perkaraAktif} perkara aktif bernilai terbesar`,
    tone: "amber",
  },
  {
    risk: "Volatilitas harga CPO global",
    exposure: `± ${rpM(bandVolatilitasRpM)}`,
    likelihood: "Tinggi · cepat",
    owner: "Direktorat Pemasaran",
    action: "Kunci harga sebagian volume Q4",
    tone: "red",
  },
  {
    risk: "Gap produksi Regional 4",
    exposure: rpM(gapProduksiRpM),
    likelihood: "Terjadi · sedang",
    owner: "Direktorat Operasional",
    action: "Audit rotasi panen & utilisasi PKS",
    tone: "amber",
  },
  {
    risk: "Pungutan ekspor CPO baru",
    exposure: `${rpM(eksposurPungutanRpM)} / USD 10 per ton`,
    likelihood: "Sedang · cepat",
    owner: "Direktorat Pemasaran",
    action: "Hitung ulang bauran ekspor–domestik",
    tone: "amber",
  },
];

/* ── 4. People Capability ─────────────────────────────────────────── */

const pendapatanPerKaryawanJt = (KEUANGAN.pendapatanYtd * 1_000_000) / SDM.karyawanAktif;

export const peopleCapability = {
  criticalVacant: SDM.posisiKritikalKosong,
  successionCoveragePct: SDM.cakupanSuksesiPct,
  revenuePerEmployee: `Rp ${pendapatanPerKaryawanJt.toLocaleString("id-ID", {
    maximumFractionDigits: 1,
  })} Jt`,
  /** Posisi kritikal yang mengancam eksekusi strategi bila tidak terisi. */
  criticalPositions: [
    { position: "Head of Sugar Operations (SGN)", tone: "red" as CeoTone },
    { position: "Regional Head 4 (PalmCo)", tone: "red" as CeoTone },
    { position: "Head of Downstream", tone: "amber" as CeoTone },
  ],
};

/* ── 5. AI Insight: jembatan ekonomi + copilot ────────────────────── */

const gapProduksiSetahun = (gapProduksiCpo * 12) / 5;
const potensiPendapatanRpM = nilaiRpM(gapProduksiSetahun, hargaGrup.CPO);
const potensiEbitdaRpM = (potensiPendapatanRpM * KEUANGAN.ebitdaMarginPct) / 100;
const potensiLabaRpM = potensiPendapatanRpM * marjinLabaBersih;

/**
 * Jembatan ekonomi rekomendasi AI: dari volume sampai laba bersih.
 * Angka akhirnya identik dengan `aiInsight.dampak` di data.ts karena
 * formulanya sama — jembatan ini hanya memecah langkah antaranya.
 */
export const aiInsightBridge: { label: string; value: string }[] = [
  {
    label: "Pemulihan volume (disetahunkan)",
    value: `+${(gapProduksiSetahun * 1_000).toLocaleString("id-ID", {
      maximumFractionDigits: 0,
    })} rb ton`,
  },
  { label: "Asumsi ASP CPO", value: `Rp ${hargaGrup.CPO.toLocaleString("id-ID")}/kg` },
  { label: "Dampak pendapatan", value: `+${rpM(potensiPendapatanRpM)}` },
  {
    label: `Konversi EBITDA (${KEUANGAN.ebitdaMarginPct.toLocaleString("id-ID", {
      minimumFractionDigits: 1,
    })}%)`,
    value: `+${rpM(potensiEbitdaRpM)}`,
  },
  {
    label: "Depresiasi, bunga & pajak",
    value: `−${rpM(potensiEbitdaRpM - potensiLabaRpM)}`,
  },
  { label: "Laba bersih", value: `+${rpM(potensiLabaRpM)}` },
];

/** Dampak laba per pergerakan volume 10 rb ton (juta ton = 0,01). */
const sensitivitasVolumeRpM = nilaiRpM(0.01, hargaGrup.CPO) * marjinLabaBersih;

/** Alternatif: naikkan utilisasi PKS ke 85% (formula sama dengan intelijen data.ts). */
const targetUtilisasiPks = 85;
const tambahanTbsUtilisasi =
  (PRODUKSI.tbsDiolahYtdJtTon * (targetUtilisasiPks - PRODUKSI.utilisasiPksPct)) /
  PRODUKSI.utilisasiPksPct;
const potensiUtilisasiRpM = nilaiRpM(
  (tambahanTbsUtilisasi * PRODUKSI.oerPct) / 100,
  hargaGrup.CPO,
);

/**
 * Skenario hasil rekomendasi: apa yang terjadi bila dieksekusi penuh,
 * sebagian, atau tidak sama sekali — melengkapi rantai
 * Evidence → Reasoning → Recommendation → Scenario → Decision.
 */
export const aiScenarios: { label: string; value: string; tone: CeoTone }[] = [
  {
    label: "Gap tertutup penuh (12 bln)",
    value: `+${rpM((gapProduksiCpo * 12 / 5) * hargaGrup.CPO * marjinLabaBersih)} laba`,
    tone: "green",
  },
  {
    label: "Tertutup 50%",
    value: `+${rpM(((gapProduksiCpo * 12) / 5) * hargaGrup.CPO * marjinLabaBersih * 0.5)} laba`,
    tone: "amber",
  },
  {
    label: "Tanpa intervensi",
    value: "Rp 0 · kebocoran berlanjut",
    tone: "red",
  },
];

/** Blok copilot: rekomendasi harus membawa asumsi & bukti, bukan hanya angka. */
export const aiCopilot = {
  /**
   * Keyakinan gabungan kelengkapan bukti & stabilitas asumsi — ditetapkan
   * analis, bukan skor model; ditampilkan agar bisa ditantang, bukan dipercaya buta.
   */
  confidencePct: 72,
  sensitivity: `±10 rb ton volume ≈ ±${rpM(sensitivitasVolumeRpM)} laba bersih; ±Rp 100/kg ASP ≈ ±Rp 9 M pada volume gap`,
  alternative: `Alternatif: naikkan utilisasi PKS ${PRODUKSI.utilisasiPksPct.toLocaleString(
    "id-ID",
    { minimumFractionDigits: 1 },
  )}% → ${targetUtilisasiPks}% — potensi pendapatan ${rpM(potensiUtilisasiRpM)} (laba ±${rpM(
    potensiUtilisasiRpM * marjinLabaBersih,
  )})`,
  reversibility: "Reversible — program operasional, tanpa capex permanen",
  owner: "Direktorat Operasional",
  deadline: "29 Agu 2026",
  decisionRequired: false,
  status: "Open" as const,
  assumptions: [
    `ASP CPO bertahan di Rp ${hargaGrup.CPO.toLocaleString("id-ID")}/kg`,
    `Marjin laba bersih YTD ${(marjinLabaBersih * 100).toLocaleString("id-ID", {
      maximumFractionDigits: 1,
    })}% tidak berubah`,
    "Gap produksi tertutup penuh dalam 12 bulan",
  ],
  evidence: [
    "Gap RKAP vs realisasi CPO per 31 Mei 2026",
    `Utilisasi PKS ${PRODUKSI.utilisasiPksPct.toLocaleString("id-ID", {
      minimumFractionDigits: 1,
    })}% vs target 85%`,
    "ASP tertimbang 5 regional (group-baseline)",
  ],
};

/* ── 6. External Signals ──────────────────────────────────────────── */

export interface ExternalSignal {
  date: string;
  kategori: string;
  title: string;
  dampak: string;
  /** Terjemahan sinyal menjadi konsekuensi bagi PTPN. */
  implikasi: string;
  relevansi: "Tinggi" | "Sedang" | "Rendah";
  hue: number;
}

/**
 * Sinyal eksternal (pasar, regulasi, iklim) yang diterjemahkan ke dampak PTPN.
 * Menggantikan framing berita korporat; item korporat disaring hanya yang
 * mengubah keputusan.
 */
export const externalSignals: ExternalSignal[] = [
  {
    date: "13 Agu 2026",
    kategori: "Regulasi",
    title: "Pemerintah mengkaji pungutan ekspor CPO tambahan USD 10/ton",
    dampak: `Eksposur ${rpM(eksposurPungutanRpM)}`,
    implikasi: "Hitung ulang bauran ekspor–domestik kuartal IV sebelum tarif final.",
    relevansi: "Tinggi",
    hue: 20,
  },
  {
    date: "12 Agu 2026",
    kategori: "Pasar",
    title: `CPO KPBN spot Rp ${PEMASARAN.cpoKpbnSpotRpKg.toLocaleString("id-ID")} — premium atas ASP YTD`,
    dampak: `Tiap Rp 100/kg = ${rpM(sensitivitasHargaCpoRpM)}`,
    implikasi: "Kunci harga sebagian volume Q4 selagi premium bertahan.",
    relevansi: "Tinggi",
    hue: 120,
  },
  {
    date: "11 Agu 2026",
    kategori: "Iklim",
    title: `Probabilitas El Niño semester II naik ke ${RISIKO.elNinoProbabilitasPct}%`,
    dampak: "Risiko yield TBS 2027",
    implikasi: "Amankan air & pupuk; uji ulang target produksi 2027 skenario kering.",
    relevansi: "Sedang",
    hue: 40,
  },
  {
    date: "09 Agu 2026",
    kategori: "Korporat",
    title: "Hilirisasi menyumbang seperempat EBITDA dari 15% pendapatan",
    dampak: "Marjin hilir 47% vs blended 27,7%",
    implikasi: "Prioritaskan capex hilirisasi tahap II pada realokasi pendanaan.",
    relevansi: "Sedang",
    hue: 95,
  },
];
