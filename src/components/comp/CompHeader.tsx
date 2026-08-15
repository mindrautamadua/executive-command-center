"use client";

import { FileText, Sparkles, Wallet } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function CompHeader() {
  return (
    <ModuleHeader
      icon={<Wallet size={19} strokeWidth={1.9} />}
      title={<>Compensation &amp; Benefits</>}
      subtitle="Kelola Strategi Remunerasi yang Kompetitif, Adil dan Berkelanjutan"
      controls={
        <>
          <SelectBox label="Periode" value="Q2 2026 (Apr - Jun)" width="164px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="152px" />
          <SelectBox label="Bandingkan dengan" value="Q1 2026" width="146px" />

          <button
            className="ml-1 text-[#2f6fe4] transition-opacity hover:opacity-75"
            aria-label="Insight AI"
          >
            <Sparkles size={17} strokeWidth={1.8} />
          </button>
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
      actions={
        <>
          <ExportButton />
          <button className="flex items-center gap-1.5 rounded-lg border border-[#e3e9ef] bg-white px-3 py-[7px] text-[10px] font-semibold text-ink-700 shadow-card transition-colors hover:bg-[#f5f8fa]">
            <FileText size={12} className="text-ink-500" />
            Laporan
          </button>
        </>
      }
    />
  );
}
