"use client";

import { Gem } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function TiHeader() {
  return (
    <ModuleHeader
      icon={<Gem size={19} strokeWidth={1.9} />}
      title="Talent Intelligence"
      subtitle="Memahami, Mengembangkan, dan Menyiapkan Talenta Terbaik PTPN Group"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
