import { nineBox } from "@/lib/talent-data";
import { NineBoxGrid as SharedNineBoxGrid } from "../shared/NineBoxGrid";

export function NineBoxGrid() {
  return (
    <SharedNineBoxGrid
      title="9-BOX TALENT GRID"
      subtitle="Distribusi Talenta berdasarkan Kinerja & Potensi"
      values={nineBox}
      totalLabel="Total Talenta"
      delay={360}
    />
  );
}
