import { emisiInsights } from "@/lib/esg-data";
import { EsgInsightGrid } from "../EsgInsightGrid";

export function EmisiInsight() {
  return <EsgInsightGrid items={emisiInsights} cols="grid-cols-3" />;
}
