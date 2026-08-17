import {
  HARGA_REGIONAL_RP_KG,
  KEUANGAN,
  KOMPOSISI_SEGMEN,
  SDM,
  PEMASARAN,
  PRODUKSI,
  PROYEKSI_FY,
  RKAP_YTD,
  STEMPEL_DATA,
  hargaGrup,
} from "./group-baseline";
import { formatMetric, metricChange, metricTarget, type MetricId } from "./metrics";
import { CHOROPLETH_RAMP } from "./indonesia";

export type Trend = "up" | "down";

/**
 * Tanggal acuan tampilan dashboard (data demo). Nama hari diturunkan dari
 * tanggal ini, bukan ditulis manual, supaya keduanya tidak pernah berbeda.
 */
export const TANGGAL_DASHBOARD = new Date(2026, 7, 15);

const NAMA_HARI = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const NAMA_BULAN = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

export const tanggalDashboard = `${TANGGAL_DASHBOARD.getDate()} ${
  NAMA_BULAN[TANGGAL_DASHBOARD.getMonth()]
} ${TANGGAL_DASHBOARD.getFullYear()}`;

export const hariDashboard = NAMA_HARI[TANGGAL_DASHBOARD.getDay()];

export const jamDashboard = "09:41 WIB";

/**
 * Data trust dashboard korporat "/". Sebelumnya homepage memakai default HC
 * (sumber SAP HCM dkk.) — salah domain: skor quality bersifat per-domain dan
 * homepage adalah agregat korporat, bukan HC.
 */
export const coreDataTrust = {
  asOf: STEMPEL_DATA.snapshot,
  lastRefresh: STEMPEL_DATA.refresh,
  coverage: "97,8%",
  quality: "96,4%",
  sources: ["SAP S/4HANA", "e-RKAP", "KPBN", "SAP HCM", "ERM System"],
  domain: "Korporat",
  qualityBreakdown: [
    { label: "Completeness", value: "98%" },
    { label: "Accuracy", value: "96%" },
    { label: "Timeliness", value: "95%" },
    { label: "Consistency", value: "97%" },
  ],
};

export interface KpiStripItem {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  trend: Trend;
  /** Pembanding tahun lalu — menjawab "tumbuh berapa?". */
  compare: string;
  /**
   * Beban RKAP sampai tanggal potong, jarak ke target, dan proyeksi tutup
   * tahun — menjawab "tercapai atau tidak?" dan "akan sampai atau tidak?".
   * `null` untuk metrik yang memang tidak punya RKAP, misalnya kurs.
   */
  target: {
    label: string;
    gap: string;
    onTrack: boolean;
    forecast: string | null;
  } | null;
  color: string;
  series: number[];
}

const s = (arr: number[]) => arr;

export const komoditasTabs = ["Regional 1", "Regional 2", "Regional 3", "Regional 4", "Regional 5"];

export const rupiahPerKg = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

/**
 * Warna & bobot bar per komoditas — murni presentasi. Angkanya sendiri datang
 * dari `HARGA_REGIONAL_RP_KG` di group-baseline, jadi kartu ini tidak pernah
 * bisa menampilkan harga yang berbeda dari KPI atau Live Feed.
 */
const TAMPILAN_KOMODITAS: Record<string, { pct: number; color: string }> = {
  CPO: { pct: 92, color: "#22a45d" },
  PK: { pct: 64, color: "#2f9bf5" },
  Karet: { pct: 48, color: "#f5a524" },
  Tebu: { pct: 41, color: "#f5a524" },
  Teh: { pct: 37, color: "#f5a524" },
  Kopi: { pct: 44, color: "#f5a524" },
};

export const hargaRegional: Record<
  string,
  { name: string; price: number; pct: number; color: string }[]
> = Object.fromEntries(
  Object.entries(HARGA_REGIONAL_RP_KG).map(([regional, komoditas]) => [
    regional,
    Object.entries(komoditas).map(([name, price]) => ({
      name,
      price,
      ...TAMPILAN_KOMODITAS[name],
    })),
  ]),
);

/**
 * Bangun satu kartu KPI dari registri metrik. Nilai, delta, arah, pembanding,
 * RKAP, dan proyeksi semuanya ditarik dari `metrics.ts` — kartu ini hanya
 * menentukan label, warna, dan sparkline. Dengan begitu tidak mungkin lagi
 * kartu KPI dan Live Feed menampilkan arah yang berlawanan untuk metrik sama.
 */
function kartuMetrik(
  id: MetricId,
  tampilan: { label: string; unit?: string; color: string; series: number[] },
): KpiStripItem {
  const perubahan = metricChange(id);
  const target = metricTarget(id);

  return {
    label: tampilan.label,
    value: formatMetric(id),
    unit: tampilan.unit,
    delta: perubahan?.value ?? "—",
    trend: perubahan?.trend ?? "up",
    compare: perubahan?.label ?? "",
    target: target && {
      label: target.targetLabel,
      gap: target.gapLabel,
      onTrack: target.onTrack,
      forecast: target.forecastLabel,
    },
    color: tampilan.color,
    series: tampilan.series,
  };
}

export const kpiStrip: KpiStripItem[] = [
  kartuMetrik("pendapatan", {
    label: "PENDAPATAN KONSOLIDASI",
    color: "#22a45d",
    series: s([28, 26, 31, 29, 34, 33, 38, 36, 41, 44, 42, 48, 46, 52, 56]),
  }),
  kartuMetrik("ebitda", {
    label: "EBITDA",
    color: "#2f9bf5",
    series: s([22, 25, 23, 28, 26, 31, 29, 33, 36, 34, 39, 42, 40, 45, 49]),
  }),
  kartuMetrik("labaBersih", {
    label: "LABA BERSIH",
    color: "#8b5cf6",
    series: s([18, 21, 19, 24, 22, 27, 25, 30, 28, 34, 32, 38, 41, 44, 50]),
  }),
  {
    // ROA hanya tampil di dashboard korporat, jadi tetap didefinisikan di sini
    // — registri metrik khusus untuk angka yang dikutip lintas halaman.
    label: "ROA",
    value: "4,60%",
    delta: "0,40 ppts",
    trend: "up",
    compare: "vs YTD 2025: 4,20%",
    target: {
      label: `${RKAP_YTD.roaPct.toLocaleString("id-ID", { minimumFractionDigits: 2 })}%`,
      gap: "+0,10 ppts",
      onTrack: true,
      forecast: `${PROYEKSI_FY.roaPct.toLocaleString("id-ID", { minimumFractionDigits: 2 })}%`,
    },
    color: "#38b6ff",
    series: s([30, 28, 33, 31, 36, 34, 38, 36, 40, 38, 43, 41, 46, 44, 49]),
  },
  kartuMetrik("produksiCpo", {
    label: "PRODUKSI CPO",
    unit: "Juta Ton",
    color: "#f5a524",
    series: s([26, 29, 27, 32, 30, 35, 33, 37, 35, 40, 38, 42, 40, 45, 47]),
  }),
  kartuMetrik("hargaCpo", {
    label: "HARGA RATA-RATA CPO",
    unit: "/kg",
    color: "#5fbf5f",
    series: s([24, 27, 25, 30, 28, 33, 31, 36, 34, 39, 37, 42, 40, 45, 48]),
  }),
  kartuMetrik("hargaKaret", {
    label: "HARGA RATA-RATA KARET",
    unit: "/kg",
    color: "#ef4444",
    series: s([44, 42, 45, 41, 43, 39, 41, 37, 39, 35, 37, 33, 35, 31, 30]),
  }),
];

export const operasional = [
  { label: "Afdeling Aktif", value: "1.243", color: "#22a45d", bg: "#e8f7ef", icon: "sprout" },
  { label: "Pabrik Aktif", value: "64", color: "#2f9bf5", bg: "#e7f2fe", icon: "factory" },
  { label: "Karyawan Aktif", value: "70.142", color: "#f5a524", bg: "#fef4e3", icon: "users" },
  { label: "Kebun Plasma", value: "338", color: "#8b5cf6", bg: "#f1ecfe", icon: "layers" },
] as const;

/**
 * Rincian fasilitas per regional.
 *
 * Sumber tunggal untuk peta dan legendanya. Sebelumnya legenda menyebut 625
 * fasilitas sementara peta menggambar 18 titik lepas tanpa asal — dua angka
 * yang saling membantah di layar yang sama. Sekarang legenda dijumlahkan dari
 * tabel ini, jadi jumlah di legenda dan jumlah yang diwakili penanda peta
 * tidak mungkin lagi berselisih.
 */
const FASILITAS_REGIONAL: Record<
  number,
  { kebun: number; pabrik: number; terminal: number; pelabuhan: number }
> = {
  1: { kebun: 168, pabrik: 22, terminal: 7, pelabuhan: 2 },
  2: { kebun: 126, pabrik: 16, terminal: 5, pelabuhan: 2 },
  3: { kebun: 84, pabrik: 11, terminal: 4, pelabuhan: 1 },
  4: { kebun: 78, pabrik: 9, terminal: 4, pelabuhan: 1 },
  5: { kebun: 72, pabrik: 9, terminal: 3, pelabuhan: 1 },
};

const JENIS_FASILITAS = [
  { key: "kebun", label: "Kebun" },
  { key: "pabrik", label: "Pabrik" },
  { key: "terminal", label: "Terminal" },
  { key: "pelabuhan", label: "Pelabuhan" },
] as const;

/** Total fasilitas per jenis — dijumlahkan, tidak ditulis manual. */
export const mapLegend = JENIS_FASILITAS.map((j) => ({
  label: j.label,
  value: Object.values(FASILITAS_REGIONAL)
    .reduce((s, f) => s + f[j.key], 0)
    .toLocaleString("id-ID"),
}));

/** Total seluruh fasilitas grup, dipakai di keterangan ukuran penanda peta. */
export const totalFasilitas = Object.values(FASILITAS_REGIONAL).reduce(
  (s, f) => s + f.kebun + f.pabrik + f.terminal + f.pelabuhan,
  0,
);

/**
 * Pendapatan YTD per regional (Rp T) — jumlah 24,60 T sesuai kpiStrip.
 *
 * Regional yang tumbuh negatif membawa `diagnosis`: tautan ke halaman tempat
 * penyebabnya bisa ditelusuri. Angka merah di dashboard Direksi harus menjadi
 * pintu masuk investigasi, bukan sekadar penanda.
 */
const REGIONAL_DASAR: {
  id: number;
  name: string;
  /** Pendapatan YTD dalam Rp triliun — dipakai menskala warna choropleth. */
  rpT: number;
  delta: string;
  trend: Trend;
  /** Tautan diagnosis; hanya diisi untuk regional yang perlu ditelusuri. */
  diagnosis?: string;
}[] = [
  { id: 1, name: "Regional 1", rpT: 8.09, delta: "13,2%", trend: "up" as Trend },
  { id: 2, name: "Regional 2", rpT: 6.15, delta: "10,1%", trend: "up" as Trend },
  { id: 3, name: "Regional 3", rpT: 4.06, delta: "8,7%", trend: "up" as Trend },
  {
    id: 4,
    name: "Regional 4",
    rpT: 3.08,
    delta: "-2,3%",
    trend: "down" as Trend,
    diagnosis: "/produksi-operasi/produktivitas-kebun",
  },
  { id: 5, name: "Regional 5", rpT: 3.22, delta: "5,6%", trend: "up" as Trend },
];

const pendapatanTerbesar = Math.max(...REGIONAL_DASAR.map((r) => r.rpT));

/**
 * Warna regional = langkah pada skala sekuensial menurut pendapatan.
 *
 * Sebelumnya tiap regional punya rona sendiri (hijau/oranye/biru/merah/ungu).
 * Merah pada Regional 4 kebetulan bertepatan dengan pertumbuhan negatifnya,
 * tetapi tiga regional lain memakai rona yang tidak berarti apa-apa — dan
 * merah di dashboard ini sudah berarti "risiko". Satu rona bertingkat membuat
 * titik daftar, batang, dan warna peta semuanya membaca besaran yang sama.
 */
const langkahWarna = (rpT: number) =>
  CHOROPLETH_RAMP[
    Math.min(
      CHOROPLETH_RAMP.length - 1,
      Math.floor((rpT / pendapatanTerbesar) * CHOROPLETH_RAMP.length),
    )
  ];

export const regional = REGIONAL_DASAR.map((r) => ({
  ...r,
  color: langkahWarna(r.rpT),
  value: `Rp ${r.rpT.toLocaleString("id-ID", { minimumFractionDigits: 2 })} T`,
  /** Bagian dari pendapatan regional terbesar — dipakai untuk panjang batang. */
  pct: Math.round((r.rpT / pendapatanTerbesar) * 100),
  fasilitas: FASILITAS_REGIONAL[r.id],
  totalFasilitas:
    FASILITAS_REGIONAL[r.id].kebun +
    FASILITAS_REGIONAL[r.id].pabrik +
    FASILITAS_REGIONAL[r.id].terminal +
    FASILITAS_REGIONAL[r.id].pelabuhan,
}));

export type RegionalItem = (typeof regional)[number];

/* ── Kuantifikasi dampak ──────────────────────────────────────────────
 *
 * Alert tanpa angka dampak tidak bisa diprioritaskan: Direksi tidak punya
 * dasar memilih mana yang dibahas lebih dulu. Karena itu setiap alert membawa
 * satu angka rupiah — dan angka itu diturunkan di sini dari baseline grup,
 * bukan ditulis manual, supaya bisa ditelusuri dan ikut berubah ketika
 * baseline diperbarui.
 *
 * Satuan: volume dalam juta ton, harga dalam Rp/kg. Satu juta ton = 1 miliar
 * kg, jadi `jutaTon × rpKg` langsung menghasilkan nilai dalam miliar rupiah.
 */
const nilaiRpM = (jutaTon: number, rpKg: number) => jutaTon * rpKg;

const rpM = (n: number) => `Rp ${Math.round(n).toLocaleString("id-ID")} M`;

/** Marjin laba bersih realisasi YTD — dipakai menerjemahkan volume ke laba. */
const marjinLabaBersih = KEUANGAN.labaBersihYtd / KEUANGAN.pendapatanYtd;

/** Kekurangan produksi CPO terhadap RKAP sampai tanggal potong (juta ton). */
const gapProduksiCpo = RKAP_YTD.produksiCpoJtTon - PRODUKSI.cpoYtdJtTon;

/** Pendapatan yang belum terealisasi akibat gap produksi tersebut. */
const gapProduksiRpM = nilaiRpM(gapProduksiCpo, hargaGrup.CPO);

/**
 * Sensitivitas harga: volume CPO yang belum terjual sampai akhir tahun
 * (proyeksi FY − realisasi YTD) dikali pergerakan harga.
 */
const volumeCpoBelumTerjual = PROYEKSI_FY.produksiCpoJtTon - PRODUKSI.cpoYtdJtTon;
const sensitivitasHargaCpoRpM = nilaiRpM(volumeCpoBelumTerjual, 100);
const bandVolatilitasRpM = nilaiRpM(volumeCpoBelumTerjual, hargaGrup.CPO * 0.05);

/** Eksposur pungutan ekspor: porsi volume ekspor × tarif per ton × kurs. */
const volumeEksporCpo = (PROYEKSI_FY.produksiCpoJtTon * PEMASARAN.eksporPctVolCpo) / 100;
const eksposurPungutanRpM = (volumeEksporCpo * 10 * PEMASARAN.kursUsdIdr) / 1_000;

export interface Alert {
  level: string;
  tone: "danger" | "warning" | "info";
  time: string;
  title: string;
  /** Angka dampak beserta dasar hitungnya — tanpa ini alert tidak bisa diadu. */
  dampak: { label: string; value: string; basis: string };
  /** Tindakan yang diminta, bukan sekadar "perlu dievaluasi". */
  aksi: string;
  owner: string;
  tenggat: string;
}

export const alerts: Alert[] = [
  {
    level: "RISIKO TINGGI",
    tone: "danger",
    time: "08:30",
    title: "Fluktuasi harga CPO global meningkat signifikan",
    dampak: {
      label: "Eksposur pendapatan",
      value: `± ${rpM(bandVolatilitasRpM)}`,
      basis: `${volumeCpoBelumTerjual.toLocaleString("id-ID", {
        minimumFractionDigits: 2,
      })} juta ton belum terjual × ±5% harga · tiap Rp 100/kg = ${rpM(
        sensitivitasHargaCpoRpM,
      )}`,
    },
    aksi: "Kunci harga sebagian volume kuartal IV lewat kontrak berjangka",
    owner: "Direktorat Pemasaran",
    tenggat: "22 Agu 2026",
  },
  {
    level: "PERHATIAN",
    tone: "warning",
    time: "07:45",
    title: "Realisasi produksi Regional 4 di bawah target",
    dampak: {
      label: "Pendapatan tertunda",
      value: rpM(gapProduksiRpM),
      basis: `Gap ${(gapProduksiCpo * 1_000).toLocaleString("id-ID", {
        maximumFractionDigits: 0,
      })} ribu ton × ASP CPO Rp ${hargaGrup.CPO.toLocaleString("id-ID")}/kg · setara ${rpM(
        gapProduksiRpM * KEUANGAN.ebitdaMarginPct / 100,
      )} EBITDA`,
    },
    aksi: "Audit rotasi panen dan utilisasi PKS Regional 4",
    owner: "Direktorat Operasional",
    tenggat: "29 Agu 2026",
  },
  {
    level: "INFORMASI",
    tone: "info",
    time: "06:15",
    title: "Kebijakan ekspor CPO terbaru dari pemerintah",
    dampak: {
      label: "Eksposur pungutan",
      value: `${rpM(eksposurPungutanRpM)} / USD 10 per ton`,
      basis: `${PEMASARAN.eksporPctVolCpo}% volume CPO diekspor · kurs Rp ${PEMASARAN.kursUsdIdr.toLocaleString(
        "id-ID",
      )}`,
    },
    aksi: "Hitung ulang bauran ekspor–domestik untuk kuartal IV",
    owner: "Direktorat Pemasaran",
    tenggat: "05 Sep 2026",
  },
];

/* ── AI Insight ───────────────────────────────────────────────────────
 *
 * Rekomendasi AI di dashboard Direksi harus bisa dibongkar. Angka dampak di
 * sini dihitung dari rantai yang ditampilkan apa adanya di kartu — gap
 * produksi, harga jual, marjin — sehingga pertanyaan "angka ini dari mana?"
 * terjawab tanpa perlu membuka sistem lain.
 */

/** Gap produksi YTD (5 bulan) disetahunkan. */
const gapProduksiSetahun = (gapProduksiCpo * 12) / 5;
const potensiPendapatanRpM = nilaiRpM(gapProduksiSetahun, hargaGrup.CPO);
const potensiLabaRpM = potensiPendapatanRpM * marjinLabaBersih;

export const aiInsight = {
  judul: "Menutup gap produksi Regional 4 menambah laba bersih",
  dampakLabel: "Potensi laba bersih",
  dampak: rpM(potensiLabaRpM),
  /**
   * Keyakinan masih ditetapkan manual — belum ada skor dari model. Ditampilkan
   * apa adanya supaya tidak terbaca sebagai hasil perhitungan statistik.
   */
  keyakinan: "Sedang · asumsi manual",
  rantai: [
    `Gap produksi YTD ${(gapProduksiCpo * 1_000).toLocaleString("id-ID", {
      maximumFractionDigits: 0,
    })} ribu ton, disetahunkan jadi ${(gapProduksiSetahun * 1_000).toLocaleString("id-ID", {
      maximumFractionDigits: 0,
    })} ribu ton`,
    `× ASP CPO Rp ${hargaGrup.CPO.toLocaleString("id-ID")}/kg = ${rpM(potensiPendapatanRpM)} pendapatan`,
    `× marjin laba bersih ${(marjinLabaBersih * 100).toLocaleString("id-ID", {
      maximumFractionDigits: 1,
    })}% = ${rpM(potensiLabaRpM)}`,
  ],
  aksi: "Audit rotasi panen dan utilisasi PKS Regional 4",
};

export const inisiatif = [
  { label: "Transformasi Digital", value: 78 },
  { label: "Optimalisasi Portofolio Aset", value: 65 },
  { label: "Peningkatan Produktivitas", value: 82 },
  { label: "Pengembangan Talenta", value: 71 },
];

const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"];

/**
 * Pendapatan kumulatif 2026 (Rp T): Jan–Mei realisasi (Mei = Rp 24,6 T sesuai
 * group-baseline), Jun–Des proyeksi menuju RKAP FY Rp 58,4 T. `line` = target
 * RKAP prorata. Bar dipecah PalmCo vs subholding lain (70,7% / 29,3%).
 */
const pendapatanKumulatif = [4.4, 9.0, 14.0, 19.2, 24.6, 29.6, 34.8, 40.2, 45.5, 50.7, 55.1, 58.4];

export const trendKeuangan = bulan.map((m, i) => ({
  name: m,
  bar1: +(pendapatanKumulatif[i] * 0.707).toFixed(2),
  bar2: +(pendapatanKumulatif[i] * 0.293).toFixed(2),
  line: +((58.4 / 12) * (i + 1)).toFixed(2),
  dot: +((58.4 / 12) * (i + 1)).toFixed(2),
}));

/** Komposisi nilai penjualan YTD (%) — selaras revenueByKomoditas di pemasaran-data.ts. */
/**
 * Bauran pendapatan dan bauran EBITDA dari tabel segmen yang sama.
 *
 * Porsi EBITDA dihitung sebagai kontribusi tertimbang marjin tiap segmen —
 * bukan angka terpisah — sehingga selalu berjumlah 100% dan tidak pernah lepas
 * dari bauran pendapatannya. Perbedaan keduanya justru pesan utamanya:
 * Hilirisasi menyumbang 15% pendapatan tetapi seperempat EBITDA grup.
 */
const kontribusiEbitda = KOMPOSISI_SEGMEN.map(
  (s) => (s.pendapatanPct * s.marginEbitdaPct) / 100,
);
const totalKontribusiEbitda = kontribusiEbitda.reduce((a, b) => a + b, 0);

export const komposisiPenjualan = KOMPOSISI_SEGMEN.map((s) => ({
  name: s.nama,
  value: s.pendapatanPct,
  color: s.color,
}));

export const komposisiEbitda = KOMPOSISI_SEGMEN.map((s, i) => ({
  name: s.nama,
  value: +((kontribusiEbitda[i] / totalKontribusiEbitda) * 100).toFixed(1),
  color: s.color,
}));

/** Nilai EBITDA per segmen (Rp T) — dasar tooltip bauran EBITDA. */
export const ebitdaSegmenRpT = komposisiEbitda.map((s) => ({
  name: s.name,
  value: +((KEUANGAN.ebitdaYtd * s.value) / 100).toFixed(2),
}));

/* ── Intelijen eksekutif ──────────────────────────────────────────────
 *
 * Menggantikan daftar berita korporat. Judul rilis pers tidak mengubah satu
 * keputusan pun di ruang Direksi; yang mengubah keputusan adalah temuan yang
 * membawa angka dan arah tindakan. Nilainya diturunkan dari baseline yang sama
 * dengan kartu lain, jadi tidak ada intel yang bertentangan dengan KPI.
 */

/** Potensi tambahan CPO bila utilisasi PKS naik ke 85%. */
const targetUtilisasiPks = 85;
const tambahanTbs =
  (PRODUKSI.tbsDiolahYtdJtTon * (targetUtilisasiPks - PRODUKSI.utilisasiPksPct)) /
  PRODUKSI.utilisasiPksPct;
const potensiUtilisasiRpM = nilaiRpM((tambahanTbs * PRODUKSI.oerPct) / 100, hargaGrup.CPO);

/** Kontribusi EBITDA segmen hilirisasi (Rp T). */
const ebitdaHilirisasiRpT = ebitdaSegmenRpT.find((s) => s.name === "Hilirisasi")?.value ?? 0;

export const intelijen = [
  {
    date: "12 Agu 2026",
    title: "Hilirisasi menyumbang seperempat EBITDA dari 15% pendapatan",
    dampak: `Rp ${ebitdaHilirisasiRpT.toLocaleString("id-ID", {
      minimumFractionDigits: 2,
    })} T EBITDA`,
    relevansi: "Tinggi",
    hue: 120,
  },
  {
    date: "11 Agu 2026",
    title: `Utilisasi PKS ${PRODUKSI.utilisasiPksPct.toLocaleString("id-ID", {
      minimumFractionDigits: 1,
    })}% — jarak ke ${targetUtilisasiPks}% setara tambahan volume CPO`,
    dampak: `Potensi ${rpM(potensiUtilisasiRpM)}`,
    relevansi: "Tinggi",
    hue: 95,
  },
  {
    date: "09 Agu 2026",
    title: "Gap produksi Regional 4 menahan realisasi pendapatan",
    dampak: `Kebocoran ${rpM(gapProduksiRpM)}`,
    relevansi: "Sedang",
    hue: 20,
  },
];

/**
 * Produksi kumulatif 2026 (juta ton): Jan–Mei realisasi (CPO 0,99 · PK 0,203 ·
 * karet 0,0476 · gula 0,092 sesuai group-baseline), Jun–Des proyeksi menuju
 * RKAP FY (CPO 2,53 · PK 0,52 · karet 0,118 · gula 0,78). Gula nol sebelum
 * Mei karena musim giling baru dimulai bulan tersebut.
 */
const KUMULATIF = {
  CPO: [0.19, 0.39, 0.59, 0.79, 0.99, 1.2, 1.42, 1.65, 1.88, 2.1, 2.32, 2.53],
  PK: [0.039, 0.08, 0.122, 0.163, 0.203, 0.246, 0.291, 0.338, 0.385, 0.43, 0.475, 0.52],
  Karet: [0.0095, 0.019, 0.0286, 0.0381, 0.0476, 0.0575, 0.067, 0.077, 0.0865, 0.096, 0.107, 0.118],
  Gula: [0, 0, 0, 0, 0.092, 0.25, 0.41, 0.55, 0.66, 0.73, 0.77, 0.78],
};

export const produksiSeries = bulan.map((m, i) => ({
  name: m,
  CPO: KUMULATIF.CPO[i],
  PK: KUMULATIF.PK[i],
  Karet: KUMULATIF.Karet[i],
  Gula: KUMULATIF.Gula[i],
}));

export const produksiKpi = [
  { label: "CPO", value: "0,99", unit: "Juta Ton", delta: "7,10%", trend: "up" as Trend },
  { label: "PK", value: "203", unit: "Ribu Ton", delta: "6,40%", trend: "up" as Trend },
  { label: "KARET", value: "47,6", unit: "Ribu Ton", delta: "1,90%", trend: "down" as Trend },
  { label: "TEBU", value: "1,24", unit: "Juta Ton", delta: "5,45%", trend: "up" as Trend },
];

/**
 * Pendapatan per karyawan (Rp juta). Pendapatan dalam Rp triliun, jadi
 * dikali sejuta untuk mendapat Rp juta per orang.
 */
const pendapatanPerKaryawanJt = (KEUANGAN.pendapatanYtd * 1_000_000) / SDM.karyawanAktif;

/**
 * Tiga indikator SDM yang benar-benar strategis untuk Direksi: produktivitas,
 * kesiapan talenta, dan risiko orang.
 *
 * Jumlah karyawan sendiri dipindah ke keterangan kartu — angka itu tidak
 * menjawab pertanyaan Direksi kecuali dikaitkan dengan produktivitas atau
 * biaya, dan jumlahnya tetap terbaca di kartu Operasional Grup.
 */
export const sdmKpi = [
  {
    label: "Pendapatan / Karyawan",
    value: `Rp ${pendapatanPerKaryawanJt.toLocaleString("id-ID", {
      maximumFractionDigits: 1,
    })} Jt`,
    delta: "7,00%",
    trend: "up" as Trend,
  },
  {
    label: "Cakupan Suksesi",
    value: `${SDM.cakupanSuksesiPct}%`,
    delta: "3,00 ppts",
    trend: "up" as Trend,
  },
  {
    label: "Posisi Kritikal Kosong",
    value: `${SDM.posisiKritikalKosong}`,
    delta: "2",
    trend: "up" as Trend,
    /** Bertambahnya posisi kosong itu buruk meski angkanya naik. */
    tone: "bad" as const,
  },
];

/** Keterangan kaki kartu SDM — konteks jumlah orang di balik rasio di atas. */
export const sdmKonteks = `${SDM.karyawanAktif.toLocaleString("id-ID")} karyawan aktif · engagement ${SDM.engagementSkor
  .toLocaleString("id-ID", { minimumFractionDigits: 2 })}/5 · turnover ${SDM.turnoverPct.toLocaleString(
  "id-ID",
  { minimumFractionDigits: 2 },
)}%`;

export const komposisiKaryawan = [
  { name: "Operasional", value: 61, color: "#2f9bf5" },
  { name: "Staf", value: 25, color: "#22a45d" },
  { name: "Profesional", value: 10, color: "#14b8a6" },
  { name: "Manajerial", value: 4, color: "#cbd5e1" },
];

/** Selaras group-baseline: yield CPO/ha, HPP CPO, utilisasi PKS, ROE = laba FY ÷ ekuitas. */
export const kpiStrategis = [
  { label: "Market Share CPO Nasional", value: "5,4%", delta: "0,2 ppts", trend: "up" as Trend },
  { label: "Produktivitas CPO", value: "4,90", unit: "Ton/Ha", delta: "0,14", trend: "up" as Trend },
  {
    label: "Biaya Produksi CPO",
    value: "Rp 8.950",
    unit: "/kg",
    delta: "2,90%",
    trend: "up" as Trend,
    // HPP naik di atas target Rp 8.700 — kenaikan di sini berarti buruk.
    tone: "bad" as const,
  },
  { label: "Utilisasi Pabrik Kelapa Sawit", value: "78,4%", delta: "1,8 ppts", trend: "up" as Trend },
  { label: "Return on Equity (ROE)", value: "10,40%", delta: "0,95 ppts", trend: "up" as Trend },
];

/** Proyeksi tutup tahun 2026 — selaras fyForecast di kba-data.ts & RKAP produksi. */
/**
 * Proyeksi tutup tahun. Nilainya diambil dari `PROYEKSI_FY` di baseline —
 * proyeksi yang sama juga muncul sebagai "Proy. FY" pada kartu KPI, jadi
 * keduanya harus bersumber dari satu angka.
 */
export const analitikPrediktif = [
  {
    label: "Proyeksi Produksi CPO 2026",
    value: PROYEKSI_FY.produksiCpoJtTon.toLocaleString("id-ID", { minimumFractionDigits: 2 }),
    unit: "Juta Ton",
    delta: "6,8% vs 2025",
    color: "#22a45d",
    series: [20, 24, 22, 28, 26, 32, 30, 36, 34, 40, 44, 48],
  },
  {
    label: "Proyeksi Pendapatan 2026",
    value: `Rp ${PROYEKSI_FY.pendapatanRpT.toLocaleString("id-ID", { minimumFractionDigits: 1 })} T`,
    delta: "9,0% vs 2025",
    color: "#2f9bf5",
    series: [24, 22, 27, 25, 31, 29, 35, 33, 39, 37, 43, 47],
  },
  {
    label: "Proyeksi Laba Bersih 2026",
    value: `Rp ${PROYEKSI_FY.labaBersihRpT.toLocaleString("id-ID", { minimumFractionDigits: 1 })} T`,
    delta: "10,2% vs 2025",
    color: "#8b5cf6",
    series: [18, 22, 20, 26, 24, 30, 28, 34, 32, 38, 42, 46],
  },
];


/**
 * Delta ditulis sebagai besaran tanpa tanda; arah naik/turun dibawa oleh
 * `trend` dan dirender sebagai segitiga oleh komponen `Delta`.
 */
const tickerMetrik = (label: string, id: MetricId) => {
  const perubahan = metricChange(id);
  return {
    label,
    value: formatMetric(id),
    delta: perubahan?.value ?? "—",
    trend: (perubahan?.trend ?? "up") as Trend,
  };
};

export const liveFeed = [
  tickerMetrik("CPO", "hargaCpo"),
  tickerMetrik("PK", "hargaPk"),
  tickerMetrik("Karet", "hargaKaret"),
  tickerMetrik("Tebu", "hargaTebu"),
  tickerMetrik("Kurs: USD/IDR", "kursUsdIdr"),
  {
    // Brent tidak dikutip di halaman lain, jadi tidak masuk registri metrik.
    label: "Brent Oil",
    value: `$${PEMASARAN.brentUsdBarel.toLocaleString("id-ID", { minimumFractionDigits: 2 })}`,
    delta: "0,35%",
    trend: "down" as Trend,
  },
];
