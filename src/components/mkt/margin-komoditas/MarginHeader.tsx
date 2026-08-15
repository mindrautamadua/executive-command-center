"use client";

import { Percent } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function MarginHeader() {
  return (
    <ModuleHeader
      icon={<Percent size={19} strokeWidth={1.9} />}
      title={<>Margin &amp; Profitabilitas Komoditas</>}
      subtitle={<>Struktur Margin ASP − HPP per Komoditas &amp; Subholding PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komoditas" value="Semua Komoditas" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
