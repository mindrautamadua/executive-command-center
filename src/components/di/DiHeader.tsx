"use client";

import { FileText } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function DiHeader() {
  return (
    <ModuleHeader
      title={<>Diversity, Equity &amp; Inclusion</>}
      subtitle={
        <>
          Siapa yang terwakili, siapa yang mendapat kesempatan setara, dan siapa yang merasa
          dilibatkan — bagi seluruh insan PTPN
        </>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="152px" />
          <SelectBox label="Lokasi" value="Semua Lokasi" width="148px" />
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
