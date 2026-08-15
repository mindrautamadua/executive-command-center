import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { nineBox } from "@/lib/succession-data";
import { NineBoxGrid as SharedNineBoxGrid } from "../shared/NineBoxGrid";

export function NineBoxGrid() {
  return (
    <SharedNineBoxGrid
      title="Peta Suksesi – 9 Box Talent Grid"
      subtitle="Berdasarkan Potensi vs Kinerja"
      values={nineBox}
      totalLabel="Total Karyawan yang Dinilai"
      delay={420}
      footer={
        <Link href="/succession-planning/nine-box" className="link-more flex cursor-pointer items-center gap-0.5">
          Lihat detail 9 box <ChevronRight size={12} />
        </Link>
      }
    />
  );
}
