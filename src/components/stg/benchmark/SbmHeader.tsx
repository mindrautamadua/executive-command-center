"use client";

import { BarChart3 } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function SbmHeader() {
  return (
    <ModuleHeader
      icon={<BarChart3 size={19} strokeWidth={1.9} />}
      title="Benchmark Industri"
      subtitle={<>Posisi Kompetitif PTPN Group vs Peers Sawit &amp; Produsen Gula Global</>}
      controls={
        <>
          <SelectBox label="Periode" value="LTM Mei 2026" width="160px" />
          <SelectBox label="Kelompok Peer" value="Emiten Sawit + Global" width="190px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
