import { liveFeed } from "@/lib/data";
import { Delta } from "./ui/Delta";
import { DataStamp } from "./shared/DataStamp";

function Items() {
  return (
    <div className="flex shrink-0 items-center gap-7 pr-7">
      {liveFeed.map((f) => (
        <span key={f.label} className="flex items-center gap-1.5 whitespace-nowrap">
          <span className="text-[10.5px] text-ink-500">{f.label}:</span>
          <span className="text-[10.5px] font-bold text-ink-900">{f.value}</span>
          <Delta value={f.delta} trend={f.trend} size={10} />
        </span>
      ))}
    </div>
  );
}

export function LiveFeed() {
  return (
    <div className="flex h-[36px] items-center border-t border-[#e9eef3] bg-white">
      <div className="relative flex h-full shrink-0 items-center bg-gradient-to-r from-[#7ed957] to-[#1a9c5b] pl-5 pr-7 text-[10px] font-bold tracking-[0.05em] text-white">
        LIVE FEED
        <span className="absolute -right-[10px] top-0 h-full w-[20px] skew-x-[-14deg] bg-[#1a9c5b]" />
      </div>

      <div className="relative ml-4 flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <Items />
          <Items />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 pl-6 pr-5">
        <DataStamp size={10} ringkas className="whitespace-nowrap" />
        <span className="flex items-center gap-1.5 text-[10px] text-ink-500">
          <span className="h-[7px] w-[7px] rounded-full bg-[#22a45d] animate-pulseDot" />
          Connected
        </span>
      </div>
    </div>
  );
}
