"use client";

import { Stamp } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PersetujuanHeader() {
  return (
    <ModuleHeader
      icon={<Stamp size={19} strokeWidth={1.9} />}
      title="Persetujuan & Kewenangan"
      subtitle={<>Tanggapan Tertulis Dewan Komisaris atas Usulan Direksi &amp; Ambang Kewenangan</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Status" value="Seluruh Status" width="175px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
