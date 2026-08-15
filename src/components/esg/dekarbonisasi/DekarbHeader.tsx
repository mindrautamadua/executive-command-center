"use client";

import { Zap } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function DekarbHeader() {
  return (
    <ModuleHeader
      icon={<Zap size={19} strokeWidth={1.9} />}
      title="Program Dekarbonisasi"
      subtitle={<>Portofolio Lever &amp; Eksekusi Jalur -30% Intensitas Emisi 2030</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Lever" value="Semua Lever" width="150px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
