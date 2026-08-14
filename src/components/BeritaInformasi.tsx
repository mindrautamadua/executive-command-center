import { berita } from "@/lib/data";

function Thumb({ hue }: { hue: number }) {
  return (
    <svg viewBox="0 0 60 44" className="h-[32px] w-[44px] shrink-0 rounded-md">
      <defs>
        <linearGradient id={`th-${hue}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={`hsl(${hue} 42% 78%)`} />
          <stop offset="100%" stopColor={`hsl(${hue} 45% 34%)`} />
        </linearGradient>
      </defs>
      <rect width="60" height="44" rx="4" fill={`url(#th-${hue})`} />
      <path d="M0 26 L18 18 L34 26 L48 17 L60 24 V44 H0Z" fill={`hsl(${hue} 40% 30%)`} opacity="0.75" />
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d={`M${-6 + i * 15} 44 C ${4 + i * 15} 36, ${12 + i * 15} 32, ${24 + i * 15} 25`}
          stroke={`hsl(${hue} 45% 22%)`}
          strokeOpacity="0.4"
          strokeWidth="2"
          fill="none"
        />
      ))}
    </svg>
  );
}

export function BeritaInformasi() {
  return (
    <div className="card flex min-h-0 flex-1 flex-col px-4 pb-2 pt-2">
      <div className="flex items-center justify-between">
        <h3 className="card-title">BERITA &amp; INFORMASI</h3>
        <button className="link-more">Lihat semua</button>
      </div>

      <div className="mt-0.5 flex flex-1 flex-col justify-around">
        {berita.map((b, i) => (
          <div
            key={b.title}
            className={`flex items-center gap-2.5 py-[3px] ${
              i !== 0 ? "border-t border-[#f2f5f8]" : ""
            }`}
          >
            <Thumb hue={b.hue} />
            <div className="min-w-0">
              <div className="text-[9px] text-ink-400">{b.date}</div>
              <p className="mt-[2px] line-clamp-2 text-[10px] font-semibold leading-[1.3] text-ink-900">
                {b.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
