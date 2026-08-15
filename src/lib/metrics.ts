/**
 * Enterprise Metric Store — registri metrik yang muncul di lebih dari satu
 * halaman.
 *
 * Masalah yang dipecahkan: sebelum ini setiap halaman menulis angkanya sendiri,
 * sehingga satu komoditas bisa tampil dengan dua harga berbeda tergantung kartu
 * mana yang dilihat. Aturannya sekarang: metrik lintas-halaman didefinisikan
 * sekali di sini, lengkap dengan definisi, formula, sumber, dan pemiliknya.
 * Halaman hanya boleh membaca — tidak menulis ulang angkanya.
 *
 * Nilainya sendiri tetap berasal dari `group-baseline.ts` (angka mentah);
 * file ini menambahkan lapisan metadata yang dibutuhkan agar sebuah angka bisa
 * dipertanggungjawabkan: dari mana, siapa pemiliknya, seberapa sering
 * diperbarui, dan seberapa dipercaya.
 *
 * Menambah metrik: tambahkan entri di `METRICS`. Kalau metrik hanya dipakai di
 * satu halaman, biarkan di file `*-data.ts` halaman itu — registri ini khusus
 * untuk angka yang dikutip lintas-halaman.
 */

import {
  KEUANGAN,
  PEMASARAN,
  PRODUKSI,
  PROYEKSI_FY,
  RKAP_YTD,
  STEMPEL_DATA,
  hargaGrup,
} from "./group-baseline";

/** Sistem sumber tempat angka berasal. */
export type SumberData =
  | "SAP FI/CO"
  | "SAP MM"
  | "SAP HCM"
  | "Sistem Produksi"
  | "KPBN / Bursa"
  | "Bank Indonesia";

export type SatuanMetrik = "Rp T" | "Rp/kg" | "Juta Ton" | "%" | "IDR";

export type ArahPerubahan = "up" | "down";

/**
 * Perubahan sebuah metrik terhadap periode pembandingnya.
 *
 * Besaran dan arah disimpan terpisah, dan keduanya hanya ditulis di sini. Dulu
 * setiap kartu menulis deltanya sendiri, sehingga satu komoditas bisa tampil
 * naik di satu kartu dan turun di kartu lain — nilainya sama, arahnya
 * berlawanan. Selisih arah lebih merusak kepercayaan daripada selisih angka.
 */
export interface PerubahanMetrik {
  /** Besaran perubahan tanpa tanda; arah dibawa oleh `trend`. */
  pct: number;
  trend: ArahPerubahan;
  /** Pembanding yang dipakai, misalnya "YTD 2025". */
  basis: string;
  /** Nilai pembanding, sudah diformat, untuk baris "vs YTD 2025: …". */
  basisValue?: string;
  /** Metrik yang justru baik ketika turun, misalnya HPP. */
  turunItuBaik?: boolean;
}

export interface Metric {
  id: string;
  /** Nama yang ditampilkan ke pengguna. */
  name: string;
  /** Arti metrik dalam satu kalimat — dasar tooltip "apa ini?". */
  definition: string;
  /** Cara angka dihitung. Wajib agar Direksi bisa menelusuri "kenapa segini?". */
  formula: string;
  value: number;
  unit: SatuanMetrik;
  /** Rentang bisnis yang diwakili — bukan waktu tarik data. */
  periode: string;
  /** Tanggal potong data. */
  snapshot: string;
  /** Sinkronisasi sistem terakhir. */
  refresh: string;
  source: SumberData;
  /** Unit kerja yang bertanggung jawab atas kebenaran angka. */
  owner: string;
  refreshFrequency: "Harian" | "Mingguan" | "Bulanan";
  /** Skor kualitas data 0–100 (kelengkapan, validitas, konsistensi). */
  quality: number;
  /** Perubahan terhadap periode pembanding. */
  change?: PerubahanMetrik;
  /**
   * Beban RKAP sampai tanggal potong data, dalam satuan yang sama dengan
   * `value`. Tanpa ini kartu hanya bisa menjawab "tumbuh berapa?", bukan
   * "tercapai atau tidak?".
   */
  targetYtd?: number;
  /** Proyeksi tutup tahun (base case), satuan sama dengan `value`. */
  forecastFy?: number;
}

/** Field waktu identik untuk semua metrik yang bersumber dari baseline grup. */
const stempel = {
  periode: STEMPEL_DATA.periode,
  snapshot: STEMPEL_DATA.snapshot,
  refresh: STEMPEL_DATA.refresh,
} as const;

export const METRICS = {
  pendapatan: {
    id: "pendapatan",
    name: "Pendapatan Konsolidasi",
    definition:
      "Pendapatan bersih seluruh entitas PTPN Group setelah eliminasi transaksi antar-entitas.",
    formula: "Σ pendapatan entitas − eliminasi intercompany",
    value: KEUANGAN.pendapatanYtd,
    unit: "Rp T",
    source: "SAP FI/CO",
    owner: "Direktorat Keuangan",
    refreshFrequency: "Bulanan",
    quality: 98,
    change: { pct: 9.3, trend: "up", basis: "YTD 2025", basisValue: "Rp 22,51 T" },
    targetYtd: RKAP_YTD.pendapatanRpT,
    forecastFy: PROYEKSI_FY.pendapatanRpT,
    ...stempel,
  },
  ebitda: {
    id: "ebitda",
    name: "EBITDA",
    definition:
      "Laba sebelum bunga, pajak, depresiasi, dan amortisasi — ukuran kinerja operasional sebelum struktur pendanaan.",
    formula: "Laba usaha + depresiasi + amortisasi",
    value: KEUANGAN.ebitdaYtd,
    unit: "Rp T",
    source: "SAP FI/CO",
    owner: "Direktorat Keuangan",
    refreshFrequency: "Bulanan",
    quality: 98,
    change: { pct: 12.1, trend: "up", basis: "YTD 2025", basisValue: "Rp 6,08 T" },
    targetYtd: RKAP_YTD.ebitdaRpT,
    forecastFy: PROYEKSI_FY.ebitdaRpT,
    ...stempel,
  },
  labaBersih: {
    id: "labaBersih",
    name: "Laba Bersih",
    definition: "Laba setelah pajak yang diatribusikan kepada pemilik entitas induk.",
    formula: "Laba sebelum pajak − beban pajak − kepentingan non-pengendali",
    value: KEUANGAN.labaBersihYtd,
    unit: "Rp T",
    source: "SAP FI/CO",
    owner: "Direktorat Keuangan",
    refreshFrequency: "Bulanan",
    quality: 97,
    change: { pct: 14.8, trend: "up", basis: "YTD 2025", basisValue: "Rp 2,56 T" },
    targetYtd: RKAP_YTD.labaBersihRpT,
    forecastFy: PROYEKSI_FY.labaBersihRpT,
    ...stempel,
  },
  produksiCpo: {
    id: "produksiCpo",
    name: "Produksi CPO",
    definition: "Volume crude palm oil yang dihasilkan seluruh PKS grup.",
    formula: "Σ produksi CPO per PKS (TBS diolah × OER)",
    value: PRODUKSI.cpoYtdJtTon,
    unit: "Juta Ton",
    source: "Sistem Produksi",
    owner: "Direktorat Operasional",
    refreshFrequency: "Harian",
    quality: 96,
    change: { pct: 7.1, trend: "up", basis: "YTD 2025", basisValue: "0,92 Juta Ton" },
    targetYtd: RKAP_YTD.produksiCpoJtTon,
    forecastFy: PROYEKSI_FY.produksiCpoJtTon,
    ...stempel,
  },
  oer: {
    id: "oer",
    name: "Oil Extraction Rate",
    definition:
      "Persentase CPO yang berhasil diekstraksi dari tandan buah segar yang diolah.",
    formula: "(Produksi CPO ÷ TBS diolah) × 100",
    value: PRODUKSI.oerPct,
    unit: "%",
    source: "Sistem Produksi",
    owner: "Direktorat Operasional",
    refreshFrequency: "Harian",
    quality: 95,
    ...stempel,
  },
  hargaCpo: {
    id: "hargaCpo",
    name: "Harga Rata-rata CPO",
    definition: "Harga jual realisasi CPO tingkat grup, tertimbang seluruh regional.",
    formula: "Rata-rata harga realisasi CPO seluruh regional produsen",
    value: hargaGrup.CPO,
    unit: "Rp/kg",
    source: "KPBN / Bursa",
    owner: "Direktorat Pemasaran",
    refreshFrequency: "Harian",
    quality: 99,
    change: { pct: 9.1, trend: "up", basis: "YTD 2025", basisValue: "Rp 11.441 /kg" },
    targetYtd: RKAP_YTD.hargaCpoRpKg,
    forecastFy: PROYEKSI_FY.hargaCpoRpKg,
    ...stempel,
  },
  hargaPk: {
    id: "hargaPk",
    name: "Harga Rata-rata PK",
    definition: "Harga jual realisasi palm kernel tingkat grup.",
    formula: "Rata-rata harga realisasi PK seluruh regional produsen",
    value: hargaGrup.PK,
    unit: "Rp/kg",
    source: "KPBN / Bursa",
    owner: "Direktorat Pemasaran",
    refreshFrequency: "Harian",
    quality: 99,
    change: { pct: 6.75, trend: "up", basis: "YTD 2025" },
    ...stempel,
  },
  hargaKaret: {
    id: "hargaKaret",
    name: "Harga Rata-rata Karet",
    definition: "Harga jual realisasi karet SIR 20 tingkat grup.",
    formula: "Rata-rata harga realisasi karet seluruh regional produsen",
    value: hargaGrup.Karet,
    unit: "Rp/kg",
    source: "KPBN / Bursa",
    owner: "Direktorat Pemasaran",
    refreshFrequency: "Harian",
    quality: 97,
    change: { pct: 1.2, trend: "down", basis: "YTD 2025", basisValue: "Rp 18.877 /kg" },
    targetYtd: RKAP_YTD.hargaKaretRpKg,
    forecastFy: PROYEKSI_FY.hargaKaretRpKg,
    ...stempel,
  },
  hargaTebu: {
    id: "hargaTebu",
    name: "Harga Rata-rata Tebu",
    definition: "Harga jual realisasi tebu tingkat grup.",
    formula: "Rata-rata harga realisasi tebu seluruh regional produsen",
    value: hargaGrup.Tebu,
    unit: "Rp/kg",
    source: "KPBN / Bursa",
    owner: "Direktorat Pemasaran",
    refreshFrequency: "Harian",
    quality: 96,
    change: { pct: 3.45, trend: "up", basis: "YTD 2025" },
    ...stempel,
  },
  kursUsdIdr: {
    id: "kursUsdIdr",
    name: "Kurs USD/IDR",
    definition: "Kurs tengah rupiah terhadap dolar AS yang dipakai konversi pendapatan ekspor.",
    formula: "Kurs tengah Bank Indonesia",
    value: PEMASARAN.kursUsdIdr,
    unit: "IDR",
    source: "Bank Indonesia",
    owner: "Direktorat Keuangan",
    refreshFrequency: "Harian",
    quality: 100,
    change: { pct: 0.25, trend: "up", basis: "rata-rata YTD" },
    ...stempel,
  },
  hppCpo: {
    id: "hppCpo",
    name: "HPP CPO",
    definition: "Harga pokok produksi satu kilogram CPO, termasuk biaya kebun dan pabrik.",
    formula: "Total biaya produksi CPO ÷ volume CPO dihasilkan",
    value: PRODUKSI.hppCpoRpKg,
    unit: "Rp/kg",
    source: "SAP FI/CO",
    owner: "Direktorat Operasional",
    refreshFrequency: "Bulanan",
    quality: 94,
    ...stempel,
  },
} as const satisfies Record<string, Metric>;

export type MetricId = keyof typeof METRICS;

/* ── Pemformatan ──────────────────────────────────────────────────── */

const angkaId = (n: number, desimal = 0) =>
  n.toLocaleString("id-ID", {
    minimumFractionDigits: desimal,
    maximumFractionDigits: desimal,
  });

/** Format sebuah angka sesuai satuan metrik. */
export function formatNilai(value: number, unit: SatuanMetrik): string {
  switch (unit) {
    case "Rp T":
      return `Rp ${angkaId(value, 2)} T`;
    case "Rp/kg":
      return `Rp ${angkaId(value)}`;
    case "IDR":
      return angkaId(value);
    case "%":
      return `${angkaId(value, 1)}%`;
    case "Juta Ton":
      return angkaId(value, 2);
  }
}

/** Format nilai metrik sesuai satuannya. Dipakai semua kartu supaya seragam. */
export function formatMetric(id: MetricId): string {
  return formatNilai(METRICS[id].value, METRICS[id].unit);
}

/**
 * Akses satu metrik sebagai `Metric`. `METRICS` dideklarasikan `as const`
 * sehingga tiap entri menyempit ke tipe literalnya sendiri dan field opsional
 * yang tidak diisi hilang dari tipe — pelebaran ini mengembalikannya.
 */
const metrik = (id: MetricId): Metric => METRICS[id];

export interface PerubahanTampil {
  /** Besaran tanpa tanda, sudah diformat. */
  value: string;
  trend: ArahPerubahan;
  tone?: "good" | "bad";
  basis: string;
  /** Baris pembanding lengkap, misalnya "vs YTD 2025: Rp 22,51 T". */
  label: string;
}

/** Besaran + arah perubahan, siap dipakai komponen `Delta`. */
export function metricChange(id: MetricId): PerubahanTampil | null {
  const c = metrik(id).change;
  if (!c) return null;
  return {
    value: `${angkaId(c.pct, 2)}%`,
    trend: c.trend,
    tone: c.turunItuBaik ? (c.trend === "down" ? "good" : "bad") : undefined,
    basis: c.basis,
    label: c.basisValue ? `vs ${c.basis}: ${c.basisValue}` : `vs ${c.basis}`,
  };
}

export interface PencapaianTarget {
  /** Beban RKAP sampai tanggal potong, sudah diformat. */
  targetLabel: string;
  /**
   * Jarak ke target. Untuk metrik bersatuan persen dinyatakan dalam poin
   * persentase (ppts), bukan persen dari persen — dua hal yang sering
   * tertukar dan membuat pencapaian terlihat jauh lebih besar dari kenyataan.
   */
  gapLabel: string;
  onTrack: boolean;
  /** Proyeksi tutup tahun, sudah diformat. Kosong bila belum ada proyeksi. */
  forecastLabel: string | null;
}

/**
 * Pencapaian terhadap RKAP — pertanyaan yang berbeda dari pertumbuhan YoY.
 * Mengembalikan `null` untuk metrik yang memang tidak punya target, misalnya
 * kurs, supaya kartu tidak memaksakan target yang tidak pernah ditetapkan.
 */
export function metricTarget(id: MetricId): PencapaianTarget | null {
  const m = metrik(id);
  const target = m.targetYtd;
  if (target === undefined) return null;

  const persenSatuan = m.unit === "%";
  const selisih = persenSatuan
    ? m.value - target
    : ((m.value - target) / target) * 100;
  const tanda = selisih >= 0 ? "+" : "−";
  const besaran = angkaId(Math.abs(selisih), persenSatuan ? 2 : 1);

  return {
    targetLabel: formatNilai(target, m.unit),
    gapLabel: `${tanda}${besaran}${persenSatuan ? " ppts" : "%"}`,
    onTrack: selisih >= 0,
    forecastLabel: m.forecastFy === undefined ? null : formatNilai(m.forecastFy, m.unit),
  };
}

/** Metadata lengkap untuk panel "dari mana angka ini?". */
export function metricProvenance(id: MetricId) {
  const m = METRICS[id];
  return {
    definisi: m.definition,
    formula: m.formula,
    sumber: m.source,
    pemilik: m.owner,
    frekuensi: m.refreshFrequency,
    periode: m.periode,
    snapshot: m.snapshot,
    refresh: m.refresh,
    kualitas: `${m.quality}%`,
  };
}
