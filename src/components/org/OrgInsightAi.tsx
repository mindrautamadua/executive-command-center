import { ChevronRight, Sparkles } from "lucide-react";
import { orgInsightAi } from "@/lib/org-data";

function RobotMascot() {
  return (
    <svg viewBox="0 0 90 90" className="h-full w-full">
      <defs>
        <linearGradient id="org-bot" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#dcf3e6" />
          <stop offset="100%" stopColor="#a9dcc2" />
        </linearGradient>
        <linearGradient id="org-eye" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ef7e0" />
          <stop offset="100%" stopColor="#25c8b0" />
        </linearGradient>
      </defs>
      <line x1="45" y1="6" x2="45" y2="16" stroke="#8fc9ac" strokeWidth="2.5" />
      <circle cx="45" cy="5" r="3.5" fill="#37c26a" />
      <rect x="16" y="15" width="58" height="42" rx="17" fill="url(#org-bot)" />
      <rect x="23" y="22" width="44" height="28" rx="13" fill="#16232f" />
      <ellipse cx="36" cy="36" rx="6" ry="6.8" fill="url(#org-eye)" />
      <ellipse cx="54" cy="36" rx="6" ry="6.8" fill="url(#org-eye)" />
      <ellipse cx="34.6" cy="33.8" rx="2" ry="2.3" fill="#eafffb" />
      <ellipse cx="52.6" cy="33.8" rx="2" ry="2.3" fill="#eafffb" />
      <rect x="9" y="30" width="7" height="14" rx="3.5" fill="#b7dfc9" />
      <rect x="74" y="30" width="7" height="14" rx="3.5" fill="#b7dfc9" />
      <rect x="26" y="57" width="38" height="21" rx="10" fill="url(#org-bot)" />
      <circle cx="45" cy="67" r="3.4" fill="#25c8b0" />
      <ellipse cx="45" cy="82" rx="20" ry="3" fill="#8fc9ac" opacity="0.3" />
    </svg>
  );
}

export function OrgInsightAi() {
  return (
    <div
      className="card anim-rise relative flex h-full flex-col overflow-hidden px-4 pb-2.5 pt-3"
      style={{ "--d": "60ms" } as React.CSSProperties}
    >
      <div className="flex items-center gap-1.5">
        <Sparkles size={12} className="text-[#2f6fe4]" />
        <h3 className="card-title-navy">INSIGHT AI</h3>
        <span className="tone-blue rounded px-1.5 py-[1px] text-[9px] font-bold">
          Beta
        </span>
      </div>
      <p className="mt-[3px] text-[9px] text-ink-500">Temuan penting dari analisis organisasi Anda</p>

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2 pr-[76px]">
        {orgInsightAi.map((t) => (
          <div key={t} className="flex gap-1.5">
            <span className="tone-green mt-[1px] flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-[4px] text-[9px] font-bold">
              ✓
            </span>
            <p className="text-[9px] leading-[1.4] text-ink-700">{t}</p>
          </div>
        ))}
      </div>

      <span className="pointer-events-none absolute bottom-8 right-2 h-[74px] w-[74px] animate-floaty">
        <RobotMascot />
      </span>

      <button className="link-more mt-1 flex items-center gap-1 self-start">
        Lihat rekomendasi lengkap <ChevronRight size={11} />
      </button>
    </div>
  );
}
