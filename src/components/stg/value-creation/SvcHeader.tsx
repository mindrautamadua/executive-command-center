"use client";

import { Gem } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SvcHeader() {
  return (
    <ModuleHeader
      icon={<Gem size={19} strokeWidth={1.9} />}
      title="Value Creation"
      subtitle={<>Realisasi EBITDA Uplift Inisiatif Strategis &amp; Jalur Nilai RJPP 2029</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Pengungkit" value="Semua Pengungkit" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
