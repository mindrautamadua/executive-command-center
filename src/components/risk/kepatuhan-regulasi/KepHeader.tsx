"use client";

import { Scale } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KepHeader() {
  return (
    <ModuleHeader
      icon={<Scale size={19} strokeWidth={1.9} />}
      title="Kepatuhan Regulasi"
      subtitle={<>386 Kewajiban Regulasi Enterprise pada 6 Domain Pengawasan</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="160px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Domain" value="Semua Domain" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
