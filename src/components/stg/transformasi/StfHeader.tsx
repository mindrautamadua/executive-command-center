"use client";

import { Rocket } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function StfHeader() {
  return (
    <ModuleHeader
      icon={<Rocket size={19} strokeWidth={1.9} />}
      title="Program Transformasi"
      subtitle={<>Kesehatan &amp; Realisasi Benefit 6 Program Transformasi Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Program" value="Semua Program" width="180px" />
          <SelectBox label="Horizon" value="RJPP 2025-2029" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
