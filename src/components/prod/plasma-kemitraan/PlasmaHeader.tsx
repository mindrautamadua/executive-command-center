"use client";

import { Handshake } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function PlasmaHeader() {
  return (
    <ModuleHeader
      icon={<Handshake size={19} strokeWidth={1.9} />}
      title="Plasma & Kemitraan"
      subtitle={<>Pasokan TBS Plasma, Yield Gap, PSR &amp; Risiko Kemitraan PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Regional" value="Semua Regional (7)" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
