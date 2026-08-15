"use client";

import { Gauge } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SkcHeader() {
  return (
    <ModuleHeader
      icon={<Gauge size={19} strokeWidth={1.9} />}
      title="KPI Korporat & Scorecard"
      subtitle={<>Scorecard KPI Korporat PTPN Group &amp; Cascade Target Subholding</>}
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
