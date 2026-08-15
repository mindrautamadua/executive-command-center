"use client";

import { ShieldCheck } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function TkdnHeader() {
  return (
    <ModuleHeader
      icon={<ShieldCheck size={19} strokeWidth={1.9} />}
      title="TKDN & Integritas"
      subtitle={<>Komponen Dalam Negeri, Kasus Integritas &amp; Efektivitas Kontrol Pengadaan</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Kategori" value="Semua Kategori" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
