"use client";

import { Gauge } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function EvaluasiHeader() {
  return (
    <ModuleHeader
      icon={<Gauge size={19} strokeWidth={1.9} />}
      title="Evaluasi Kinerja Direksi"
      subtitle={<>Penilaian &amp; Pemantauan Dewan Komisaris atas Kinerja Direksi PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Direktorat" value="Seluruh Direktorat" width="195px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
