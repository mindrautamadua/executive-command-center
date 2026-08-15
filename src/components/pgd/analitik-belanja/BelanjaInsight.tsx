import { belanjaInsights } from "@/lib/pgd-data";
import { PgdInsightGrid } from "../PgdInsightGrid";

export function BelanjaInsight() {
  return <PgdInsightGrid items={belanjaInsights} cols="grid-cols-3" />;
}
