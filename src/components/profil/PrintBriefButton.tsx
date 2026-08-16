"use client";

import { Printer } from "lucide-react";

/** Tombol cetak/simpan PDF via dialog print browser. */
export function PrintBriefButton() {
  return (
    <button
      onClick={() => window.print()}
      className="flex items-center gap-1.5 rounded-lg bg-ptpn-green px-3 py-[7px] text-[10px] font-semibold text-white shadow-pill transition-opacity hover:opacity-90 print:hidden"
    >
      <Printer size={12} />
      Cetak / Simpan PDF
    </button>
  );
}
