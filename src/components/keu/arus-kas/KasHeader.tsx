"use client";

import { Banknote } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KasHeader() {
  return (
    <ModuleHeader
      icon={<Banknote size={19} strokeWidth={1.9} />}
      title="Arus Kas & Likuiditas"
      subtitle={<>Posisi Kas, Runway Likuiditas &amp; Modal Kerja PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Entitas" value="PTPN Group (Konsolidasi)" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
