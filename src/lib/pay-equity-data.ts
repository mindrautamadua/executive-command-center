/**
 * Sumber kebenaran tunggal pay equity gender PTPN Group — dipakai
 * /compensation-benefits dan /diversity-inclusion agar tidak ada dua versi angka.
 *
 * Semua agregat DIHITUNG dari tabel per level (bukan hardcode):
 * - Unadjusted gap  = 1 − (rata-rata P / rata-rata L), tertimbang headcount.
 * - Within-level gap = rata-rata gap per level, tertimbang headcount level.
 *   Lebih BESAR dari unadjusted karena mix level perempuan sedikit lebih
 *   senior (Assistant Manager 34,5%) sehingga komposisi justru menutupi gap.
 * - Adjusted (unexplained) gap = residu model regresi setelah kontrol level,
 *   rumpun jabatan, tenur & lokasi — konstanta hasil model, bukan turunan tabel.
 *
 * Headcount konsisten dengan di-data: total 70.142, perempuan 21.604 (30,8%),
 * dan % perempuan per level mengikuti genderFunnel.
 */

export interface PayLevelRow {
  level: string;
  headcountL: number;
  headcountP: number;
  /** rata-rata gaji bulanan (Rp juta) */
  gajiL: number;
  gajiP: number;
}

export const payLevels: PayLevelRow[] = [
  { level: "Direksi", headcountL: 96, headcountP: 32, gajiL: 82.0, gajiP: 78.1 },
  { level: "Vice President", headcountL: 539, headcountP: 213, gajiL: 48.0, gajiP: 45.7 },
  { level: "Senior Manager", headcountL: 2377, headcountP: 1023, gajiL: 30.0, gajiP: 28.55 },
  { level: "Manager", headcountL: 5745, headcountP: 2855, gajiL: 20.0, gajiP: 19.05 },
  { level: "Assistant Manager", headcountL: 11659, headcountP: 6141, gajiL: 13.1, gajiP: 12.45 },
  { level: "Staff", headcountL: 28122, headcountP: 11340, gajiL: 8.44, gajiP: 8.04 },
];

const id = (v: number, d: number) => v.toFixed(d).replace(".", ",");

const totalL = payLevels.reduce((s, r) => s + r.headcountL, 0);
const totalP = payLevels.reduce((s, r) => s + r.headcountP, 0);

const rataL = payLevels.reduce((s, r) => s + r.headcountL * r.gajiL, 0) / totalL;
const rataP = payLevels.reduce((s, r) => s + r.headcountP * r.gajiP, 0) / totalP;
const rataAll =
  (rataL * totalL + rataP * totalP) / (totalL + totalP);

const unadjustedRatio = rataP / rataL;
const unadjustedGap = (1 - unadjustedRatio) * 100;

/** Gap per level (% terhadap gaji laki-laki). */
export const levelGapPct = (r: PayLevelRow) => (1 - r.gajiP / r.gajiL) * 100;

const withinLevelGap =
  payLevels.reduce((s, r) => s + (r.headcountL + r.headcountP) * levelGapPct(r), 0) /
  (totalL + totalP);

/** Hasil model regresi (kontrol level, rumpun jabatan, tenur, lokasi). */
const ADJUSTED_GAP = 1.2;

export const payEquityCanon = {
  periode: "Per 30 Jun 2026",

  totalL,
  totalP,
  rataLNum: rataL,
  rataPNum: rataP,
  rataAllNum: rataAll,
  rataL: `Rp ${id(rataL, 2)} Jt`,
  rataP: `Rp ${id(rataP, 2)} Jt`,
  rataAll: `Rp ${id(rataAll, 2)} Jt`,

  unadjustedGap: `${id(unadjustedGap, 1)}%`,
  unadjustedRatio: id(unadjustedRatio, 2),
  withinLevelGap: `${id(withinLevelGap, 1)}%`,
  adjustedGap: `${id(ADJUSTED_GAP, 1)}%`,
  adjustedRatio: id(1 - ADJUSTED_GAP / 100, 2),

  catatan:
    "Rasio unadjusted membandingkan rata-rata agregat tanpa kontrol posisi. Setelah dikontrol level, rumpun jabatan, tenur & lokasi, gap tersisa 1,2%.",
};

/** Waterfall unadjusted → within-level → unexplained untuk kartu remediation. */
export const equityBridgeCanon = [
  {
    label: "Unadjusted Gap",
    value: Number(id(unadjustedGap, 1).replace(",", ".")),
    note: "Rata-rata L vs P, seluruh populasi",
  },
  {
    label: "Efek komposisi level (masking)",
    value: Number((withinLevelGap - unadjustedGap).toFixed(1)),
    note: "Mix level perempuan sedikit lebih senior — menutupi gap dalam level",
  },
  {
    label: "Within-Level Gap",
    value: Number(id(withinLevelGap, 1).replace(",", ".")),
    note: "Rata-rata gap per level, tertimbang headcount",
  },
  {
    label: "Explainable (rumpun, tenur, lokasi)",
    value: -Number((withinLevelGap - ADJUSTED_GAP).toFixed(1)),
    note: "Faktor legitimate terukur",
  },
  {
    label: "Unexplained Gap",
    value: ADJUSTED_GAP,
    note: "Perlu targeted review",
  },
];
