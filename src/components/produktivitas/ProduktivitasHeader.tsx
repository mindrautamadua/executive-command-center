"use client";

import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function ProduktivitasHeader() {
  return (
    <ModuleHeader
      title="People Productivity"
      subtitle="Mengukur Produktivitas Manusia dalam Menciptakan Nilai bagi Perusahaan"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="165px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="190px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
