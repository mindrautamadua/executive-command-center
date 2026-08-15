"use client";

import { ShieldAlert } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function AsgHeader() {
  return (
    <ModuleHeader
      icon={<ShieldAlert size={19} strokeWidth={1.9} />}
      title="Sengketa Lahan"
      subtitle={<>Peta Konflik Lahan, Eksposur &amp; Penyelesaian PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Tipe Sengketa" value="Semua Tipe" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
