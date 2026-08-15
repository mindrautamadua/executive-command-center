import { agroInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";

export function AgroInsight() {
  return <ProdInsightCard insights={agroInsights} cols={4} />;
}
