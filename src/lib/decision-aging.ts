import { TANGGAL_DASHBOARD } from "./data";

/**
 * Umur keputusan dihitung, bukan ditulis manual. Tanpa ini tenggat yang sudah
 * lewat tetap tampil netral ("Due: Jul 2026") padahal tanggal acuan dashboard
 * sudah Agustus — inkonsistensi yang langsung merusak kepercayaan Direksi.
 * HC sudah menghitung overdue; util ini menyeragamkannya untuk semua modul.
 */

const BULAN: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mei: 4, Jun: 5,
  Jul: 6, Agu: 7, Agt: 7, Sep: 8, Okt: 9, Nov: 10, Des: 11,
};

/** Hari terakhir bulan/kuartal yang disebut label; null bila format tak dikenal. */
function batasAkhir(due: string): Date | null {
  const kuartal = due.match(/^Q([1-4])\s+(\d{4})$/);
  if (kuartal) {
    return new Date(Number(kuartal[2]), Number(kuartal[1]) * 3, 0);
  }
  const bulanTahun = due.match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (bulanTahun && BULAN[bulanTahun[1]] !== undefined) {
    return new Date(Number(bulanTahun[2]), BULAN[bulanTahun[1]] + 1, 0);
  }
  const lengkap = due.match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);
  if (lengkap && BULAN[lengkap[2]] !== undefined) {
    return new Date(Number(lengkap[3]), BULAN[lengkap[2]], Number(lengkap[1]));
  }
  return null;
}

export interface DecisionAging {
  label: string;
  overdue: boolean;
}

/**
 * Label umur keputusan terhadap tanggal acuan dashboard.
 * "Jul 2026" → { label: "Overdue 15 hari", overdue: true }
 * "Agu 2026" → { label: "Due Agu 2026", overdue: false } (bulan berjalan)
 */
export function decisionAging(due: string): DecisionAging {
  const batas = batasAkhir(due);
  if (!batas) return { label: `Due ${due}`, overdue: false };

  const selisihHari = Math.floor(
    (TANGGAL_DASHBOARD.getTime() - batas.getTime()) / 86_400_000,
  );
  if (selisihHari <= 0) return { label: `Due ${due}`, overdue: false };
  return { label: `Overdue ${selisihHari} hari`, overdue: true };
}
