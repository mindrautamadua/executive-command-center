/**
 * Definisi subholding PTPN Group dan utilitas penyaringan lintas dimensi.
 *
 * Filter subholding berlaku global: dipilih sekali di header, berlaku di seluruh
 * dimensi selama satu sesi. Tidak semua kartu punya pecahan per subholding —
 * kartu yang tidak punya tetap menampilkan angka konsolidasi grup dan wajib
 * menandainya lewat <ScopeNote /> agar pembaca tidak salah menyimpulkan.
 */

export type SubholdingId = "all" | "palmco" | "sugarco" | "supportingco";

export interface SubholdingDef {
  id: SubholdingId;
  /** Label pendek untuk kontrol filter. */
  label: string;
  /** Nama lengkap untuk keterangan cakupan. */
  fullLabel: string;
  /** Alias yang mungkin dipakai sebagai nilai di file *-data.ts. */
  aliases: string[];
}

export const SUBHOLDINGS: SubholdingDef[] = [
  {
    id: "all",
    label: "Semua Subholding",
    fullLabel: "PTPN Group (Konsolidasi)",
    aliases: ["Group", "PTPN Group", "Konsolidasi", "Holding"],
  },
  {
    id: "palmco",
    label: "PalmCo",
    fullLabel: "PalmCo — PTPN IV",
    aliases: ["PalmCo", "PTPN IV", "Palm Co"],
  },
  {
    id: "sugarco",
    label: "SugarCo",
    fullLabel: "SugarCo — Sinergi Gula Nusantara",
    aliases: ["SugarCo", "SGN", "Sinergi Gula Nusantara", "PTPN III (SGN)"],
  },
  {
    id: "supportingco",
    label: "SupportingCo",
    fullLabel: "SupportingCo — PTPN I",
    aliases: ["SupportingCo", "PTPN I", "Supporting Co"],
  },
];

export const SUBHOLDING_BY_ID: Record<SubholdingId, SubholdingDef> = Object.fromEntries(
  SUBHOLDINGS.map((s) => [s.id, s]),
) as Record<SubholdingId, SubholdingDef>;

/** Konversi nilai apa pun dari file data menjadi SubholdingId, bila cocok. */
export function toSubholdingId(value: string | undefined | null): SubholdingId | null {
  if (!value) return null;
  const needle = value.trim().toLowerCase();
  for (const s of SUBHOLDINGS) {
    if (s.id === "all") continue;
    if (s.aliases.some((a) => needle.includes(a.toLowerCase()))) return s.id;
  }
  return null;
}

/**
 * Saring baris data berdasarkan subholding aktif.
 *
 * `getLabel` mengambil teks yang menyebut subholding dari sebuah baris (mis.
 * `r.subholding`, `r.unit`, atau `r.name`). Baris yang labelnya tidak mengacu
 * ke subholding mana pun dianggap milik semua cakupan sehingga tetap tampil.
 */
export function filterBySubholding<T>(
  rows: readonly T[],
  active: SubholdingId,
  getLabel: (row: T) => string | undefined | null,
): T[] {
  if (active === "all") return [...rows];
  return rows.filter((row) => {
    const id = toSubholdingId(getLabel(row));
    return id === null || id === active;
  });
}

/** true bila baris data memang punya pecahan untuk subholding aktif. */
export function hasSubholdingBreakdown<T>(
  rows: readonly T[],
  getLabel: (row: T) => string | undefined | null,
): boolean {
  return rows.some((row) => toSubholdingId(getLabel(row)) !== null);
}
