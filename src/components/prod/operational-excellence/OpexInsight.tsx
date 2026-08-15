import { opexInsights } from "@/lib/biaya-opex-data";
import { ProdInsightCard } from "../ProdInsightCard";

export function OpexInsight() {
  return <ProdInsightCard insights={opexInsights} cols={3} />;
}
