"use client";

import { Crown, FileText } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SuksesiHeader() {
  return (
    <ModuleHeader
      icon={<Crown size={19} strokeWidth={1.9} />}
      title="Succession Planning"
      subtitle="Memastikan keberlanjutan kepemimpinan untuk masa depan organisasi"
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="168px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="152px" />
          <SelectBox label="Level Jabatan" value="Semua Level" width="148px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
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
