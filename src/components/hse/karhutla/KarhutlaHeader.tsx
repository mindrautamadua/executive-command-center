"use client";

import { Flame } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KarhutlaHeader() {
  return (
    <ModuleHeader
      icon={<Flame size={19} strokeWidth={1.9} />}
      title="Kebakaran Lahan & Tanggap Darurat"
      subtitle={<>Deteksi Hotspot, Kapabilitas Respons &amp; Kesiapsiagaan PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Cakupan" value="7 Regional (Grup)" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
