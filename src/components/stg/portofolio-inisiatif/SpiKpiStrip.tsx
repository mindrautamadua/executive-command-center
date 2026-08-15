import { spiKpi } from "@/lib/spi-data";
import { StgKpiCards } from "../StgKpiCards";

/** KPI strip halaman Portofolio Inisiatif — 4 kartu. */
export function SpiKpiStrip() {
  return <StgKpiCards items={spiKpi} cols="grid-cols-4" />;
}
