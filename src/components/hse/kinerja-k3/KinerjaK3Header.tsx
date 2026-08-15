"use client";

import { HardHat } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KinerjaK3Header() {
  return (
    <ModuleHeader
      icon={<HardHat size={19} strokeWidth={1.9} />}
      title="Kinerja K3"
      subtitle={<>LTIFR, Keparahan Insiden &amp; Pembelajaran Kecelakaan Kerja</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="7 Regional (Konsolidasi)" width="200px" />
          <SelectBox label="Jenis Unit" value="Seluruh Jenis Unit" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
