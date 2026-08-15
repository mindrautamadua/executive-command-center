"use client";

import { FileSignature } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KontrakHeader() {
  return (
    <ModuleHeader
      icon={<FileSignature size={19} strokeWidth={1.9} />}
      title="Kontrak Pengadaan"
      subtitle={<>Portofolio Kontrak Aktif, Jatuh Tempo &amp; Kepatuhan Administratif</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Jenis Kontrak" value="Semua Jenis" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
