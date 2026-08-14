/** Ilustrasi jenjang karier: kandidat menapaki tangga menuju piala kepemimpinan. */
export function SuksesiIlustrasi({ className = "" }: { className?: string }) {
  const STEPS = [
    { x: 6, w: 34, h: 26, fill: "#dbe6f5" },
    { x: 42, w: 34, h: 44, fill: "#cddcf1" },
    { x: 78, w: 34, h: 62, fill: "#bed2ee" },
    { x: 114, w: 40, h: 80, fill: "#a9c3e8" },
  ];

  return (
    <svg viewBox="0 0 168 132" className={className} aria-hidden>
      {/* tangga */}
      {STEPS.map((s) => (
        <rect
          key={s.x}
          x={s.x}
          y={118 - s.h}
          width={s.w}
          height={s.h}
          rx="3"
          fill={s.fill}
        />
      ))}

      {/* bendera di puncak */}
      <line x1="140" y1="14" x2="140" y2="38" stroke="#6b8bb5" strokeWidth="2" />
      <path d="M140 15 L162 21 L140 28 Z" fill="#22a45d" />

      {/* piala */}
      <g>
        <rect x="126" y="30" width="17" height="5" rx="2" fill="#e0a52a" />
        <rect x="130" y="24" width="9" height="7" fill="#f0b431" />
        <path d="M124 8h21v7c0 6-4.7 10-10.5 10S124 21 124 15Z" fill="#f5c33b" />
        <path
          d="M124 9h-4c0 5 1.8 7.6 4.6 8.2M145 9h4c0 5-1.8 7.6-4.6 8.2"
          fill="none"
          stroke="#f5c33b"
          strokeWidth="2.2"
        />
      </g>

      {/* kandidat menaiki tangga */}
      {[
        { x: 16, base: 92, skin: "#e8b48f", shirt: "#5b8def", hair: "#33261e" },
        { x: 52, base: 74, skin: "#f0c39c", shirt: "#22a45d", hair: "#5b3f2b" },
        { x: 88, base: 56, skin: "#d09b73", shirt: "#f5a524", hair: "#241a15" },
      ].map((p) => (
        <g key={p.x}>
          <rect x={p.x + 3} y={p.base + 12} width="4.5" height="14" rx="2" fill="#3b5b8f" />
          <rect x={p.x + 10} y={p.base + 12} width="4.5" height="14" rx="2" fill="#3b5b8f" />
          <path
            d={`M${p.x + 2} ${p.base} c0-4 3.5-6.5 7.5-6.5 s7.5 2.5 7.5 6.5 v13 h-15 z`}
            fill={p.shirt}
          />
          <circle cx={p.x + 9.5} cy={p.base - 9} r="5.6" fill={p.skin} />
          <path
            d={`M${p.x + 4} ${p.base - 10} a5.6 5.6 0 0 1 11 0 c-1.8 -1.8 -3.6 -2.6 -5.5 -2.6 s-3.7 .8 -5.5 2.6 z`}
            fill={p.hair}
          />
        </g>
      ))}

      {/* kandidat teratas menggapai piala */}
      <g>
        <rect x="124" y="66" width="5" height="14" rx="2.5" fill="#3b5b8f" />
        <rect x="132" y="66" width="5" height="14" rx="2.5" fill="#3b5b8f" />
        <path d="M122 52c0-4 3.7-7 8-7s8 3 8 7v14h-16z" fill="#3b7ded" />
        <path
          d="M136 54 l10 -14"
          stroke="#e8b48f"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <circle cx="130" cy="41" r="6" fill="#e8b48f" />
        <path
          d="M124 40a6 6 0 0 1 12 0c-2-2-3.9-2.8-6-2.8s-4 .8-6 2.8z"
          fill="#2f2620"
        />
      </g>

      {/* lantai */}
      <rect x="0" y="118" width="168" height="3" rx="1.5" fill="#9fb6d4" opacity="0.5" />
    </svg>
  );
}
