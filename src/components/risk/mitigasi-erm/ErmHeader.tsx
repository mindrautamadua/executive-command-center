"use client";

import { Shield } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function ErmHeader() {
  return (
    <ModuleHeader
      icon={<Shield size={19} strokeWidth={1.9} />}
      title="Asuransi, Mitigasi & Maturitas ERM"
      subtitle={<>Transfer Risiko, Portofolio Aksi Mitigasi &amp; Kematangan ERM Grup</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Kategori Risiko" value="Semua Kategori" width="185px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
