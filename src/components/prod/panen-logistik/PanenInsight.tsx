import { panenInsights } from "@/lib/agro-data";
import { ProdInsightCard } from "../ProdInsightCard";

export function PanenInsight() {
  return <ProdInsightCard insights={panenInsights} cols={3} />;
}
