"use client";

import { Landmark } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KcxHeader() {
  return (
    <ModuleHeader
      icon={<Landmark size={19} strokeWidth={1.9} />}
      title="Capex & Pendanaan"
      subtitle={<>Realisasi Belanja Modal &amp; Struktur Pendanaan PTPN Group</>}
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
