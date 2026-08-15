"use client";

import { Shovel } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AgroHeader() {
  return (
    <ModuleHeader
      icon={<Shovel size={19} strokeWidth={1.9} />}
      title="Agronomi & Replanting"
      subtitle={<>Profil Umur Tanaman, Roadmap Replanting, Pemupukan &amp; Iklim PTPN Group</>}
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
