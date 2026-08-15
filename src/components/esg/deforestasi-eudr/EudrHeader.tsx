"use client";

import { TreePine } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function EudrHeader() {
  return (
    <ModuleHeader
      icon={<TreePine size={19} strokeWidth={1.9} />}
      title={<>Deforestasi, NDPE &amp; EUDR</>}
      subtitle={<>Kesiapan EUDR, Ketertelusuran Rantai Pasok &amp; Komitmen NDPE PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Cakupan Pasokan" value="Inti + Plasma + Pihak Ketiga" width="215px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
