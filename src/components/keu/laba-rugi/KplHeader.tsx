"use client";

import { TrendingUp } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KplHeader() {
  return (
    <ModuleHeader
      icon={<TrendingUp size={19} strokeWidth={1.9} />}
      title="Laba Rugi & EBITDA"
      subtitle={<>Kinerja Laba Rugi Konsolidasi &amp; Bridge EBITDA PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Entitas" value="PTPN Group (Konsolidasi)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
