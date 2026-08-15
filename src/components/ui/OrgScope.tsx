"use client";

import { toSubholdingId, type SubholdingId } from "@/lib/subholding";

/**
 * Pemetaan entitas legal PTPN → subholding induknya.
 *
 * Kartu SDM banyak yang memakai nama PT-nya ("PTPN IV", "PTPN III", "PTPN I
 * Regional 7") alih-alih nama subholding. `toSubholdingId` tidak bisa dipakai
 * langsung di sini karena alias generik "PTPN I" juga cocok sebagai substring
 * pada "PTPN II" dan "PTPN III", sehingga keduanya salah terbaca sebagai
 * SupportingCo. Fungsi ini mencocokkan angka romawi secara utuh.
 *
 * Entitas yang belum ditetapkan induknya di sumber data (PTPN II, V, VI)
 * mengembalikan `null` = tidak dapat diatribusikan ke subholding mana pun.
 */
const ENTITY_SUBHOLDING: Record<string, SubholdingId | null> = {
  IV: "palmco",
  III: "sugarco",
  I: "supportingco",
  II: null,
  V: null,
  VI: null,
};

/** Subholding pemilik sebuah label unit/entitas, atau null bila tidak jelas. */
export function orgScope(text?: string | null): SubholdingId | null {
  if (!text) return null;
  const m = /ptpn\s*(iv|iii|vi|ii|v|i)\b/i.exec(text);
  if (m) return ENTITY_SUBHOLDING[m[1].toUpperCase()] ?? null;
  // Label yang menyebut nama subholding langsung (PalmCo / SGN / SupportingCo).
  return toSubholdingId(text);
}

/**
 * Opasitas baris/seri pada kartu pembanding lintas entitas: 1 untuk entitas yang
 * sedang dilihat (dan untuk baris agregat grup), 0.25 untuk sisanya.
 */
export function orgDim(active: SubholdingId, text?: string | null, isTotal = false): number {
  if (active === "all" || isTotal) return 1;
  return orgScope(text) === active ? 1 : 0.25;
}
