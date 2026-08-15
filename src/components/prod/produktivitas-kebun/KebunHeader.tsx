"use client";

import { LandPlot } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KebunHeader() {
  return (
    <ModuleHeader
      icon={<LandPlot size={19} strokeWidth={1.9} />}
      title="Produktivitas Kebun per Regional"
      subtitle={<>Yield TBS, Profil Umur &amp; Gap vs Benchmark 7 Regional PalmCo</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="Semua Regional" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
