"use client";

import { FileSignature } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KontrakHeader() {
  return (
    <ModuleHeader
      icon={<FileSignature size={19} strokeWidth={1.9} />}
      title="Manajemen Kontrak"
      subtitle={<>Portofolio, Kedaluwarsa &amp; Kualitas Klausul Kontrak PTPN Group</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="Semua Subholding" width="180px" />
          <SelectBox label="Kategori Kontrak" value="Semua Kategori" width="180px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
