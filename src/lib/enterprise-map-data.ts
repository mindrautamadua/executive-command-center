import {
  KEUANGAN,
  PEMASARAN,
  PRODUKSI,
  RISIKO,
  SDM,
  STRATEGI,
  TIK,
  hargaGrup,
} from "./group-baseline";

/**
 * Enterprise Map: PTPN sebagai satu sistem penciptaan nilai, bukan kumpulan
 * dashboard. Semua angka ditarik dari group-baseline — node map tidak boleh
 * menampilkan nilai yang berbeda dari modul yang dirujuknya.
 */

const rpT = (n: number, desimal = 2) =>
  `Rp ${n.toLocaleString("id-ID", { minimumFractionDigits: desimal, maximumFractionDigits: desimal })} T`;

export interface MapNode {
  /** Nama tahap dalam rantai nilai. */
  label: string;
  /** Metrik utama tahap ini (dari baseline). */
  metric: string;
  /** Satu kalimat: apa peran tahap ini dalam sistem. */
  role: string;
  href: string;
}

/** Sinyal lingkungan eksternal yang menekan/menggerakkan seluruh rantai. */
export interface ExternalForce {
  kategori: string;
  label: string;
  href: string;
}

export const externalForces: ExternalForce[] = [
  {
    kategori: "Pasar",
    label: `CPO spot Rp ${PEMASARAN.cpoKpbnSpotRpKg.toLocaleString("id-ID")} — premium atas ASP YTD Rp ${hargaGrup.CPO.toLocaleString("id-ID")}`,
    href: "/pemasaran-penjualan",
  },
  {
    kategori: "Regulasi",
    label: "Kajian pungutan ekspor CPO tambahan USD 10/ton",
    href: "/risiko-kepatuhan",
  },
  {
    kategori: "Iklim",
    label: `Probabilitas El Niño H2 ${RISIKO.elNinoProbabilitasPct}% — risiko yield 2027`,
    href: "/produksi-operasi",
  },
  {
    kategori: "Kurs",
    label: `USD/IDR ${PEMASARAN.kursUsdIdr.toLocaleString("id-ID")} (spot)`,
    href: "/keuangan",
  },
];

/** Rantai nilai inti: dari strategi sampai nilai tercipta. */
export const valueChain: MapNode[] = [
  {
    label: "Strategi (RJPP)",
    metric: `${STRATEGI.inisiatifTotal} inisiatif · KPI ${STRATEGI.skorKpiKorporat.toLocaleString("id-ID")}`,
    role: "Menetapkan ke mana nilai akan dicari — portofolio inisiatif & target.",
    href: "/strategi-kinerja",
  },
  {
    label: "Alokasi Kapital",
    metric: `Capex ${rpT(KEUANGAN.capexRealisasiYtd)} / RKAP ${rpT(KEUANGAN.capexRkapFy, 1)} (${KEUANGAN.capexRealisasiPct.toLocaleString("id-ID")}%)`,
    role: "Mendanai strategi — capex hari ini adalah kapasitas earning masa depan.",
    href: "/aset-investasi",
  },
  {
    label: "Operasi",
    metric: `${PRODUKSI.pabrikAktif}/${PRODUKSI.pabrikTotal} pabrik · utilisasi PKS ${PRODUKSI.utilisasiPksPct.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`,
    role: "Mengubah aset & kapital menjadi kapasitas produksi.",
    href: "/produksi-operasi",
  },
  {
    label: "Produksi",
    metric: `CPO ${PRODUKSI.cpoYtdJtTon.toLocaleString("id-ID", { minimumFractionDigits: 2 })} jt ton YTD · OER ${PRODUKSI.oerPct.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%`,
    role: "Volume & yield — sumber fisik seluruh pendapatan.",
    href: "/produksi-operasi",
  },
  {
    label: "Penjualan & Pasar",
    metric: `Penjualan ${rpT(PEMASARAN.penjualanYtdRpT, 1)} · ASP CPO Rp ${hargaGrup.CPO.toLocaleString("id-ID")}/kg`,
    role: "Mengubah volume menjadi rupiah — harga, bauran, dan hilirisasi.",
    href: "/pemasaran-penjualan",
  },
  {
    label: "Pendapatan",
    metric: rpT(KEUANGAN.pendapatanYtd, 1),
    role: `Komoditas ${rpT(PEMASARAN.penjualanYtdRpT, 1)} + hilir/jasa & lain-lain = konsolidasi.`,
    href: "/keuangan",
  },
  {
    label: "EBITDA",
    metric: `${rpT(KEUANGAN.ebitdaYtd)} (marjin ${KEUANGAN.ebitdaMarginPct.toLocaleString("id-ID", { minimumFractionDigits: 1 })}%)`,
    role: "Profitabilitas operasi — sebelum struktur modal & pajak.",
    href: "/keuangan",
  },
  {
    label: "Kas",
    metric: `${rpT(KEUANGAN.kas, 1)} · Net Debt/EBITDA ${KEUANGAN.netDebtEbitda.toLocaleString("id-ID", { minimumFractionDigits: 2 })}x`,
    role: "Bahan bakar keputusan: capex, dividen, pelunasan utang.",
    href: "/keuangan",
  },
  {
    label: "Value Creation",
    metric: `${rpT(STRATEGI.valueCreationYtdRpT)} netto (${Math.round((STRATEGI.valueCreationYtdRpT / STRATEGI.valueCreationTargetFyRpT) * 100)}% target FY)`,
    role: "Ujung rantai: nilai yang benar-benar tercipta di atas baseline.",
    href: "/strategi-kinerja/value-creation",
  },
];

/** Enabler: memperkuat seluruh rantai; lemah di sini = lemah di mana-mana. */
export const enablers: MapNode[] = [
  {
    label: "People",
    metric: `${SDM.karyawanAktif.toLocaleString("id-ID")} karyawan · suksesi ${SDM.cakupanSuksesiPct}%`,
    role: "Kapabilitas & kapasitas eksekusi di tiap tahap rantai.",
    href: "/sdm-talenta",
  },
  {
    label: "Teknologi",
    metric: `${TIK.aplikasiInti} aplikasi inti · capex TI ${rpT(TIK.capexFyRpT, 1)} FY`,
    role: "Data, otomasi, dan visibilitas yang menyatukan rantai.",
    href: "/teknologi-informasi",
  },
];

/** Control layer: menjaga nilai tidak bocor di sepanjang rantai. */
export const controls: MapNode[] = [
  {
    label: "Risiko",
    metric: `${RISIKO.ekstrem} ekstrem · ${RISIKO.tinggi} tinggi dari ${RISIKO.registerTotal} register`,
    role: "Apa yang bisa menghancurkan nilai — dikonversi ke eksposur rupiah.",
    href: "/risiko-kepatuhan",
  },
  {
    label: "Tata Kelola",
    metric: `${STRATEGI.keputusanOverdue} keputusan overdue dari ${STRATEGI.keputusanBodYtd} YTD`,
    role: "Kecepatan & kualitas keputusan — penghambat atau pemercepat eksekusi.",
    href: "/dewan-komisaris",
  },
  {
    label: "Hukum",
    metric: `Eksposur ${rpT(RISIKO.eksposurLegalRpT, 1)} · ${RISIKO.perkaraAktif} perkara aktif`,
    role: "Kepastian hak atas aset — lahan, HGU, kontrak.",
    href: "/hukum",
  },
  {
    label: "ESG",
    metric: "Sertifikasi, dekarbonisasi, lisensi sosial",
    role: "Lisensi beroperasi & akses pasar premium jangka panjang.",
    href: "/esg-sustainability",
  },
];

/**
 * Cara membaca map — tiga pertanyaan sistemik yang menghubungkan node,
 * ditulis eksplisit supaya map jadi alat berpikir, bukan hiasan.
 */
export const mapReadingNotes: string[] = [
  "Gangguan di hulu merambat ke hilir: gap produksi Regional 4 (node Produksi) tampil sebagai pendapatan tertunda Rp 374 M (node Pendapatan) dan leakage di Value Creation.",
  "Enabler bekerja di semua node sekaligus: 12 posisi kritikal kosong (People) adalah risiko eksekusi untuk Operasi, Produksi, dan Strategi — bukan isu HC saja.",
  "Control layer menentukan seberapa banyak nilai selamat: 3 keputusan overdue (Tata Kelola) menahan ± Rp 2,82 T nilai yang menunggu di ujung rantai.",
];
