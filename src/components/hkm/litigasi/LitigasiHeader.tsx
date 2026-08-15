"use client";

import { Gavel } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function LitigasiHeader() {
  return (
    <ModuleHeader
      icon={<Gavel size={19} strokeWidth={1.9} />}
      title={<>Litigasi &amp; Advokasi</>}
      subtitle={<>Ringkasan Perkara, Firma Eksternal, Belanja Hukum &amp; Advokasi Kebijakan</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Perkara" value="Seluruh Jenis Perkara" width="200px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
