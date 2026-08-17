/* ── Direktori Karyawan ──────────────────────────────────────
 * Daftar karyawan untuk halaman pencarian profil. Data dummy
 * dibangun deterministik (tanpa Math.random) agar hasil render
 * di server dan client selalu identik.
 * ---------------------------------------------------------- */

import { genderFromName } from "./avatar-gender";

export type StatusKaryawan = "Karyawan Tetap" | "Kontrak (PKWT)" | "Calon Karyawan";
export type TalentBadge = "Rising Star" | "Core Contributor" | "Solid Performer" | "Needs Support";

export interface Karyawan {
  id: string;
  nik: string;
  nama: string;
  jabatan: string;
  fungsi: string;
  unit: string;
  lokasi: string;
  grade: string;
  status: StatusKaryawan;
  gender: "Laki-laki" | "Perempuan";
  pendidikan: string;
  usia: number;
  masaKerja: number;
  kinerja: number;
  talent: TalentBadge;
  email: string;
  telepon: string;
  seed: number;
}

const DEPAN = [
  "Rizky", "Ahmad", "Siti", "Budi", "Dewi", "Andi", "Rina", "Fajar",
  "Nurul", "Hendra", "Maya", "Agus", "Lestari", "Bayu", "Indah", "Doni",
  "Ratna", "Ilham", "Yuni", "Reza", "Sari", "Taufik", "Wulan", "Gunawan",
];

const BELAKANG = [
  "Putra", "Fauzi", "Maharani", "Santoso", "Anggraini", "Nugroho", "Wijaya", "Hasibuan",
  "Simanjuntak", "Pratama", "Ramadhan", "Siregar", "Kusuma", "Halim", "Nasution", "Wibowo",
  "Purnama", "Lubis", "Saputra", "Hartono",
];

const JABATAN: Array<{ nama: string; fungsi: string; grade: string }> = [
  { nama: "Mandor Panen", fungsi: "Operasional - Tanaman", grade: "G5" },
  { nama: "Asisten Mandor", fungsi: "Operasional - Tanaman", grade: "G6" },
  { nama: "Asisten Afdeling", fungsi: "Operasional - Tanaman", grade: "G7" },
  { nama: "Afdeling Manager", fungsi: "Operasional - Tanaman", grade: "G8" },
  { nama: "Manager Kebun", fungsi: "Operasional - Tanaman", grade: "G9" },
  { nama: "Asisten Teknik Pabrik", fungsi: "Operasional - Pengolahan", grade: "G6" },
  { nama: "Asisten Pengolahan", fungsi: "Operasional - Pengolahan", grade: "G7" },
  { nama: "Manager Pabrik", fungsi: "Operasional - Pengolahan", grade: "G9" },
  { nama: "Staf SDM", fungsi: "SDM & Umum", grade: "G6" },
  { nama: "Officer Rekrutmen", fungsi: "SDM & Umum", grade: "G7" },
  { nama: "Manager SDM Regional", fungsi: "SDM & Umum", grade: "G9" },
  { nama: "Staf Akuntansi", fungsi: "Keuangan", grade: "G6" },
  { nama: "Officer Anggaran", fungsi: "Keuangan", grade: "G7" },
  { nama: "Manager Keuangan Regional", fungsi: "Keuangan", grade: "G9" },
  { nama: "Officer Pengadaan", fungsi: "Pengadaan", grade: "G7" },
  { nama: "Staf Gudang", fungsi: "Pengadaan", grade: "G5" },
  { nama: "Officer K3", fungsi: "K3 & Keamanan", grade: "G7" },
  { nama: "Officer Teknologi Informasi", fungsi: "Teknologi Informasi", grade: "G7" },
  { nama: "Analis Data Produksi", fungsi: "Teknologi Informasi", grade: "G7" },
  { nama: "Officer Hukum & Kepatuhan", fungsi: "Hukum & Kepatuhan", grade: "G7" },
];

const UNIT = [
  "PTPN IV Regional 1",
  "PTPN IV Regional 2",
  "PTPN IV Regional 3",
  "PTPN IV Regional 4",
  "PTPN IV Regional 5",
  "PTPN I Regional 1",
  "PTPN III Holding",
];

const LOKASI = [
  "Kebun Tanah Jawa",
  "Kebun Bah Jambi",
  "Kebun Dolok Sinumbah",
  "Kebun Pabatu",
  "Kebun Adolina",
  "PKS Sawit Langkat",
  "PKS Pasir Mandoge",
  "Kantor Regional Medan",
  "Kantor Pusat Jakarta",
  "Kebun Sungai Lengi",
];

const PENDIDIKAN = ["SLTA", "D3", "S1 - Agronomi", "S1 - Teknik", "S1 - Ekonomi", "S1 - Hukum", "S2 - Manajemen"];

const STATUS: StatusKaryawan[] = ["Karyawan Tetap", "Karyawan Tetap", "Karyawan Tetap", "Kontrak (PKWT)", "Calon Karyawan"];

const TOTAL = 132;

/** Slug email dari nama, mis. "Rizky Putra" → "rizky.putra". */
function emailSlug(nama: string) {
  return nama.toLowerCase().replace(/\s+/g, ".");
}

function buatKaryawan(i: number): Karyawan {
  const depan = DEPAN[i % DEPAN.length];
  const belakang = BELAKANG[(i * 7) % BELAKANG.length];
  const nama = `${depan} ${belakang}`;
  const jab = JABATAN[(i * 3) % JABATAN.length];
  const unit = UNIT[(i * 5) % UNIT.length];
  const lokasi = LOKASI[(i * 11) % LOKASI.length];
  const status = STATUS[i % STATUS.length];
  const usia = 24 + ((i * 13) % 33);
  const masaKerja = Math.min(usia - 22, 1 + ((i * 17) % 28));
  /* Skor kinerja 3.2 – 5.0 dengan langkah 0.1. */
  const kinerja = Math.round((3.2 + ((i * 7) % 19) / 10) * 10) / 10;
  const talent: TalentBadge =
    kinerja >= 4.7 ? "Rising Star" : kinerja >= 4.3 ? "Core Contributor" : kinerja >= 3.8 ? "Solid Performer" : "Needs Support";
  const nomor = String(i + 1).padStart(4, "0");

  return {
    id: `EMP-${nomor}`,
    nik: `12730${String(400000 + i * 137).slice(0, 6)}${nomor}`,
    nama,
    jabatan: jab.nama,
    fungsi: jab.fungsi,
    unit,
    lokasi,
    grade: jab.grade,
    status,
    // Gender diturunkan dari nama, bukan modulo indeks — supaya "Siti"
    // tidak pernah tercatat Laki-laki dan foto selalu selaras nama.
    gender: genderFromName(nama) === "wanita" ? "Perempuan" : "Laki-laki",
    pendidikan: PENDIDIKAN[(i * 3) % PENDIDIKAN.length],
    usia,
    masaKerja,
    kinerja,
    talent,
    email: `${emailSlug(nama)}${i}@ptpn4.co.id`,
    telepon: `0812-${String(3000 + i).slice(0, 4)}-${String(1000 + ((i * 37) % 9000))}`,
    seed: i + 1,
  };
}

/** Karyawan pertama disamakan dengan profil spotlight (`profil-data.ts`). */
const SPOTLIGHT: Karyawan = {
  id: "EMP-0001",
  nik: "1801123400987001",
  nama: "Rizky Putra",
  jabatan: "Asisten Afdeling",
  fungsi: "Operasional - Tanaman",
  unit: "PTPN IV Regional 1",
  lokasi: "Kebun Tanah Jawa",
  grade: "G7",
  status: "Karyawan Tetap",
  gender: "Laki-laki",
  pendidikan: "S1 - Agronomi",
  usia: 31,
  masaKerja: 7,
  kinerja: 4.8,
  talent: "Rising Star",
  email: "rizky.putra@ptpn4.co.id",
  telepon: "0812-3456-7890",
  seed: 9,
};

export const karyawanList: Karyawan[] = [
  SPOTLIGHT,
  ...Array.from({ length: TOTAL - 1 }, (_, k) => buatKaryawan(k + 1)),
];

/* ── Opsi filter ─────────────────────────────────────────── */

const uniq = (v: string[]) => [...new Set(v)].sort();

export const UNIT_OPTIONS = uniq(karyawanList.map((k) => k.unit));
export const LOKASI_OPTIONS = uniq(karyawanList.map((k) => k.lokasi));
export const FUNGSI_OPTIONS = uniq(karyawanList.map((k) => k.fungsi));
export const GRADE_OPTIONS = uniq(karyawanList.map((k) => k.grade));
export const STATUS_OPTIONS = uniq(karyawanList.map((k) => k.status));
export const TALENT_OPTIONS: TalentBadge[] = [
  "Rising Star",
  "Core Contributor",
  "Solid Performer",
  "Needs Support",
];

/* ── Ringkasan header ────────────────────────────────────── */

export const direktoriRingkasan = {
  total: karyawanList.length,
  tetap: karyawanList.filter((k) => k.status === "Karyawan Tetap").length,
  perempuan: karyawanList.filter((k) => k.gender === "Perempuan").length,
  risingStar: karyawanList.filter((k) => k.talent === "Rising Star").length,
  rataKinerja:
    Math.round((karyawanList.reduce((s, k) => s + k.kinerja, 0) / karyawanList.length) * 100) / 100,
};

/* Kelas tone (globals.css) — sudah punya pasangan mode gelap. */
export const TALENT_STYLE: Record<TalentBadge, string> = {
  "Rising Star": "tone-green",
  "Core Contributor": "tone-blue",
  "Solid Performer": "tone-slate",
  "Needs Support": "tone-amber",
};
