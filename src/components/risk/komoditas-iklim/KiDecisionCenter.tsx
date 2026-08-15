import { kiDecisions } from "@/lib/risk-data";
import { RiskBodDecisionCenter } from "../overview/RiskBodDecisionCenter";

/** Keputusan kebijakan hedging & transfer risiko iklim yang menunggu BOD. */
export function KiDecisionCenter() {
  return <RiskBodDecisionCenter items={kiDecisions} delay={420} fill />;
}
