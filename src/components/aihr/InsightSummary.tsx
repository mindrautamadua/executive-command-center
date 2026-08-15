import { ArrowRight } from "lucide-react";
import { intelligenceFeed, type FeedTier } from "@/lib/aihr-data";

const TIER: Record<FeedTier, { icon: string; badge: string }> = {
  Critical: { icon: "bg-[#fdecec] text-[#dc2626]", badge: "bg-[#fdecec] text-[#b91c1c]" },
  Watch: { icon: "bg-[#fdf3e0] text-[#d97706]", badge: "bg-[#fdf3e0] text-[#b45309]" },
  Emerging: { icon: "bg-[#fefce8] text-[#a16207]", badge: "bg-[#fefce8] text-[#854d0e]" },
  Positive: { icon: "bg-ptpn-greenLight text-ptpn-green", badge: "bg-ptpn-greenLight text-ptpn-green" },
};

export function InsightSummary() {
  return (
    <div className="card anim-rise px-3.5 pb-3 pt-3" style={{ "--d": "120ms" } as React.CSSProperties}>
      <div className="flex items-center justify-between">
        <span className="text-[10.5px] font-extrabold text-ink-900">HC Intelligence Feed</span>
        <button className="flex items-center gap-1 text-[8.5px] font-bold text-[#2f6fe4] transition-opacity hover:opacity-80">
          Lihat Semua <ArrowRight size={10} />
        </button>
      </div>

      <div className="mt-2.5 flex flex-col gap-2">
        {intelligenceFeed.map(({ tier, text, icon: Icon }) => (
          <div
            key={tier}
            className="flex items-start gap-2.5 rounded-lg border border-[#eef2f6] bg-[#fbfcfd] px-2.5 py-2"
          >
            <span
              className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-lg ${TIER[tier].icon}`}
            >
              <Icon size={13} strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <span
                className={`inline-block rounded px-1.5 py-[1px] text-[7.5px] font-extrabold uppercase tracking-[0.05em] ${TIER[tier].badge}`}
              >
                {tier}
              </span>
              <p className="mt-[3px] text-[8.5px] leading-[1.45] text-ink-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
