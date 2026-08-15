"use client";

import { Factory } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PabHeader() {
  return (
    <ModuleHeader
      icon={<Factory size={19} strokeWidth={1.9} />}
      title="Kinerja Pabrik & Utilisasi"
      subtitle={<>Utilisasi, Losses &amp; Keandalan 64 Pabrik Aktif PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Pabrik" value="Semua Jenis" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
