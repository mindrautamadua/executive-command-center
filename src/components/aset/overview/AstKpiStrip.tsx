import { astKpi } from "@/lib/ast-data";
import { AsetKpiCards } from "../AsetKpiCards";

export function AstKpiStrip() {
  return <AsetKpiCards items={astKpi} cols="grid-cols-6" />;
}
