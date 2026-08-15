"use client";

import { Eye } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function DekHeader() {
  return (
    <ModuleHeader
      icon={<Eye size={19} strokeWidth={1.9} />}
      title="Dewan Komisaris"
      subtitle={<>Ruang Pengawasan Dewan Komisaris PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Bidang Pengawasan" value="Seluruh Bidang" width="190px" />
          <SelectBox label="Komite" value="Seluruh Komite" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
