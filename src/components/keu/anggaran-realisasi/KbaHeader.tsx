"use client";

import { ClipboardCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KbaHeader() {
  return (
    <ModuleHeader
      icon={<ClipboardCheck size={19} strokeWidth={1.9} />}
      title="Anggaran vs Realisasi"
      subtitle={<>Monitoring RKAP 2026 &amp; Disiplin Eksekusi Anggaran PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
