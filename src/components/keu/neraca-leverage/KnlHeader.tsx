"use client";

import { Scale } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KnlHeader() {
  return (
    <ModuleHeader
      icon={<Scale size={19} strokeWidth={1.9} />}
      title="Neraca & Leverage"
      subtitle={<>Struktur Neraca, Profil Utang &amp; Covenant PTPN Group</>}
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
