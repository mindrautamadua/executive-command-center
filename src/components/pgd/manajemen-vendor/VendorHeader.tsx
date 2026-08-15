"use client";

import { Users } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function VendorHeader() {
  return (
    <ModuleHeader
      icon={<Users size={19} strokeWidth={1.9} />}
      title="Manajemen Vendor"
      subtitle={<>Segmentasi, Kinerja, Konsentrasi &amp; Risiko 3.482 Vendor Aktif</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Segmen Vendor" value="Seluruh Segmen" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
