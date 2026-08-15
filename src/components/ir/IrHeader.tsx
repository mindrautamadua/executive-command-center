"use client";

import { Handshake } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function IrHeader() {
  return (
    <ModuleHeader
      icon={<Handshake size={19} strokeWidth={1.9} />}
      title="Industrial Relations"
      subtitle="Memantau kondisi hubungan industrial yang harmonis, produktif, dan berkelanjutan"
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Level Organisasi" value="PTPN Group (Holding)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
