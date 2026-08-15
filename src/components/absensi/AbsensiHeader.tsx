"use client";

import { FileText } from "lucide-react";
import { ExportButton, ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AbsensiHeader() {
  return (
    <ModuleHeader
      title={<>Absensi &amp; Kehadiran</>}
      subtitle={
        <>
          Workforce Attendance Intelligence — kehadiran, kapasitas, lembur, biaya, dan
          risiko workforce
        </>
      }
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026" width="150px" />
          <SelectBox label="Unit Organisasi" value="Semua Unit" width="158px" />
          <SelectBox label="Lokasi" value="Semua Lokasi" width="158px" />
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
