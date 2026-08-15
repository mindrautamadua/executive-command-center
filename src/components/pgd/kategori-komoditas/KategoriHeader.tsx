"use client";

import { Boxes } from "lucide-react";
import { ModuleHeader, SelectBox } from "@/components/ui/ModuleHeader";

export function KategoriHeader() {
  return (
    <ModuleHeader
      icon={<Boxes size={19} strokeWidth={1.9} />}
      title="Kategori & Komoditas"
      subtitle={<>Strategi Sourcing, Indeks Harga Input &amp; Risiko Pasokan per Kategori</>}
      controls={
        <>
          <SelectBox label="Periode" value="Mei 2026 (YTD)" width="170px" />
          <SelectBox label="Subholding" value="PTPN Group (Holding)" width="190px" />
          <SelectBox label="Kategori" value="Seluruh Kategori" width="170px" />
        </>
      }
      dataAsOf="Data per 31 Mei 2026 (YTD)"
    />
  );
}
