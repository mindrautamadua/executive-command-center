"use client";

import { BarChart3 } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function WaHeader() {
  return (
    <ModuleHeader
      icon={<BarChart3 size={19} strokeWidth={1.9} />}
      title="Workforce Analytics"
      subtitle={<>Overview Komposisi &amp; Dinamika Workforce PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
