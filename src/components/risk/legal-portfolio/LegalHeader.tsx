"use client";

import { Landmark } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function LegalHeader() {
  return (
    <ModuleHeader
      icon={<Landmark size={19} strokeWidth={1.9} />}
      title="Legal Case Portfolio"
      subtitle={<>Perkara Aktif, Eksposur Litigasi &amp; Kecukupan Provisi PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Perkara" value="Semua Jenis" width="175px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
