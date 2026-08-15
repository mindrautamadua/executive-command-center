"use client";

import { FlaskConical } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function HilirHeader() {
  return (
    <ModuleHeader
      icon={<FlaskConical size={19} strokeWidth={1.9} />}
      title={<>Hilirisasi &amp; Produk Turunan</>}
      subtitle={<>Porsi Hilir, Produk Turunan &amp; Pipeline Refinery PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Lini Produk" value="Semua Produk Hilir" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
