import { esgInsights } from "@/lib/esg-data";
import { EsgInsightGrid } from "../EsgInsightGrid";

export function EsgInsight() {
  return <EsgInsightGrid items={esgInsights} cols="grid-cols-3" />;
}
