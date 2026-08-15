"use client";

import { FileText, Search } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function LndHeader() {
  return (
    <ModuleHeader
      title={<>Learning &amp; Development</>}
      subtitle={
        <>
          Learning &amp; Capability Intelligence — dari Aktivitas Pelatihan menuju Kesiapan
          Kapabilitas &amp; Dampak Bisnis
        </>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />

          <button
            className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-[#e3e9ef] bg-white text-ink-500 shadow-card transition-colors hover:text-ptpn-green"
            aria-label="Cari"
          >
            <Search size={16} strokeWidth={1.9} />
          </button>
        </>
      }
      actions={
        <>
          <ExportButton />
          <button className="flex items-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white px-3.5 py-[7px] text-[11px] font-semibold text-ink-700 shadow-card transition-colors hover:bg-[#f5f8fa]">
            <FileText size={14} className="text-ink-500" />
            Laporan Detail
          </button>
        </>
      }
    />
  );
}
