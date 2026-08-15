"use client";

import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function TiHeader() {
  return (
    <ModuleHeader
      title="Talent Intelligence"
      subtitle="Memahami, Mengembangkan, dan Menyiapkan Talenta Terbaik PTPN Group"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
    />
  );
}
