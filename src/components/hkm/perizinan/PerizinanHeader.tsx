"use client";

import { Stamp } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PerizinanHeader() {
  return (
    <ModuleHeader
      icon={<Stamp size={19} strokeWidth={1.9} />}
      title={<>Perizinan &amp; Lisensi</>}
      subtitle={<>Portofolio Izin, Kalender Kedaluwarsa &amp; Kepatuhan Perizinan PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="Semua Regional" width="180px" />
          <SelectBox label="Domain Izin" value="Semua Domain" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
