"use client";

import { CloudSun } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KiHeader() {
  return (
    <ModuleHeader
      icon={<CloudSun size={19} strokeWidth={1.9} />}
      title={<>Risiko Komoditas &amp; Iklim</>}
      subtitle={<>Eksposur Harga CPO/Gula, El Nino, dan Program Adaptasi Iklim</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="160px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Komoditas" value="CPO & Gula" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
