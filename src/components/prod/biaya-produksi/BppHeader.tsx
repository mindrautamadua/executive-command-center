"use client";

import { Calculator } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function BppHeader() {
  return (
    <ModuleHeader
      icon={<Calculator size={19} strokeWidth={1.9} />}
      title="Biaya Produksi & Cost Leadership"
      subtitle={<>HPP CPO, Benchmark Biaya &amp; Inisiatif Efisiensi PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Komoditas" value="CPO (Sawit)" width="160px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
