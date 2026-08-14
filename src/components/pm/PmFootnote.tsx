import { Info } from "lucide-react";
import { pmFootnote } from "@/lib/pm-data";

export function PmFootnote() {
  return (
    <div
      className="anim-rise flex items-center gap-2 rounded-xl border border-[#d9e6f8] bg-[#f2f7fe] px-4 py-2.5"
      style={{ "--d": "160ms" } as React.CSSProperties}
    >
      <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#2f6fe4] text-white">
        <Info size={11} />
      </span>
      <p className="text-[9px] text-ink-700">
        {pmFootnote.parts.map((part, i) =>
          part.bold ? (
            <span key={i} className="font-extrabold text-ink-900">
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>
    </div>
  );
}
