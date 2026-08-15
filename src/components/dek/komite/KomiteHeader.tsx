"use client";

import { Users } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KomiteHeader() {
  return (
    <ModuleHeader
      icon={<Users size={19} strokeWidth={1.9} />}
      title="Komite Dewan Komisaris"
      subtitle={<>Pemantauan Kerja Tiga Komite Penunjang Dewan Komisaris PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komite" value="Seluruh Komite" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
