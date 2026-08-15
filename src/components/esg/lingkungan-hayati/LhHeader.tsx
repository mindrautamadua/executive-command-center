"use client";

import { Droplets } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function LhHeader() {
  return (
    <ModuleHeader
      icon={<Droplets size={19} strokeWidth={1.9} />}
      title={<>Air, Limbah &amp; Biodiversitas</>}
      subtitle={<>Pengelolaan Air, Effluent, Sirkularitas Limbah &amp; Kawasan Konservasi</>}
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
