import { astInsights } from "@/lib/ast-data";
import { AsetRekomendasiGrid } from "../AsetInsightGrid";

export function AstInsight() {
  return <AsetRekomendasiGrid items={astInsights} cols="grid-cols-3" />;
}
