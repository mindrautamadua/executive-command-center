/** Ilustrasi kelompok karyawan beragam, termasuk pengguna kursi roda. */

interface Orang {
  x: number;
  skin: string;
  shirt: string;
  pants: string;
  hair: string;
  /** rambut panjang / hijab */
  rambutPanjang?: boolean;
  hijab?: boolean;
  tinggi: number;
}

const ORANG: Orang[] = [
  {
    x: 18,
    skin: "#e8b48f",
    shirt: "#5b8def",
    pants: "#3b5b8f",
    hair: "#3a2c25",
    tinggi: 0,
  },
  {
    x: 52,
    skin: "#f0c39c",
    shirt: "#f5a524",
    pants: "#8a6a52",
    hair: "#6b4a33",
    rambutPanjang: true,
    tinggi: 4,
  },
  {
    x: 86,
    skin: "#d09b73",
    shirt: "#22a45d",
    pants: "#2f5d45",
    hair: "#241a15",
    hijab: true,
    tinggi: 2,
  },
  {
    x: 120,
    skin: "#f2cba7",
    shirt: "#a855f7",
    pants: "#4c3a6b",
    hair: "#4a3323",
    rambutPanjang: true,
    tinggi: 6,
  },
];

function Berdiri({ o }: { o: Orang }) {
  const top = 26 + o.tinggi;
  return (
    <g>
      {/* kaki */}
      <rect x={o.x + 5} y={top + 40} width="7" height="26" rx="3.5" fill={o.pants} />
      <rect x={o.x + 15} y={top + 40} width="7" height="26" rx="3.5" fill={o.pants} />
      {/* badan */}
      <path
        d={`M${o.x + 3} ${top + 18} c0-6 5-10 10.5-10 s10.5 4 10.5 10 v26 h-21 z`}
        fill={o.shirt}
      />
      {/* lengan */}
      <rect x={o.x - 1} y={top + 19} width="6" height="24" rx="3" fill={o.shirt} />
      <rect x={o.x + 22} y={top + 19} width="6" height="24" rx="3" fill={o.shirt} />
      <circle cx={o.x + 2} cy={top + 45} r="3.2" fill={o.skin} />
      <circle cx={o.x + 25} cy={top + 45} r="3.2" fill={o.skin} />
      {/* leher + kepala */}
      <rect x={o.x + 10} y={top + 4} width="7" height="7" fill={o.skin} />
      <circle cx={o.x + 13.5} cy={top - 1} r="9" fill={o.skin} />
      {/* rambut / hijab */}
      {o.hijab ? (
        <path
          d={`M${o.x + 3.6} ${top - 1} a10 10 0 0 1 19.8 0 c0 8 -2 13 -4.5 15 h-11 c-2.5 -2 -4.3 -7 -4.3 -15 z`}
          fill={o.hair}
        />
      ) : o.rambutPanjang ? (
        <path
          d={`M${o.x + 4} ${top - 2} a9.5 9.5 0 0 1 19 0 v11 h-4 v-9 h-11 v9 h-4 z`}
          fill={o.hair}
        />
      ) : (
        <path
          d={`M${o.x + 4.2} ${top - 3} a9.4 9.4 0 0 1 18.6 0 c-3 -3 -6 -4 -9.3 -4 s-6.3 1 -9.3 4 z`}
          fill={o.hair}
        />
      )}
    </g>
  );
}

export function InklusiIlustrasi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 210 108" className={className}>
      {ORANG.map((o) => (
        <Berdiri key={o.x} o={o} />
      ))}

      {/* pengguna kursi roda */}
      <g>
        {/* roda besar */}
        <circle
          cx="172"
          cy="82"
          r="17"
          fill="none"
          stroke="#5b7590"
          strokeWidth="3"
        />
        <circle cx="172" cy="82" r="3.4" fill="#5b7590" />
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1={172 + 14 * Math.cos((deg * Math.PI) / 180)}
            y1={82 + 14 * Math.sin((deg * Math.PI) / 180)}
            x2={172 - 14 * Math.cos((deg * Math.PI) / 180)}
            y2={82 - 14 * Math.sin((deg * Math.PI) / 180)}
            stroke="#9db3c6"
            strokeWidth="1.4"
          />
        ))}
        {/* roda kecil + rangka */}
        <circle cx="192" cy="92" r="6" fill="none" stroke="#5b7590" strokeWidth="2.6" />
        <path
          d="M160 62 h18 v22 M178 70 h13 v20"
          fill="none"
          stroke="#7f97ad"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* tungkai */}
        <path
          d="M170 68 h18 c2.6 0 4 1.8 4 4 s-1.6 4 -4 4 h-18 z"
          fill="#3b5b8f"
        />
        <circle cx="191" cy="72" r="4" fill="#e8b48f" />
        {/* badan */}
        <path d="M158 44 c0-6 5-10 10.5-10 s10.5 4 10.5 10 v26 h-21 z" fill="#00a19a" />
        <rect x="176" y="45" width="6" height="20" rx="3" fill="#00a19a" />
        <circle cx="179" cy="67" r="3.2" fill="#e8b48f" />
        {/* kepala */}
        <rect x="165" y="30" width="7" height="7" fill="#e8b48f" />
        <circle cx="168.5" cy="25" r="9" fill="#e8b48f" />
        <path
          d="M159.2 23 a9.4 9.4 0 0 1 18.6 0 c-3 -3 -6 -4 -9.3 -4 s-6.3 1 -9.3 4 z"
          fill="#2f2620"
        />
      </g>

      {/* garis lantai */}
      <ellipse cx="105" cy="103" rx="98" ry="4" fill="#cbd8e6" opacity="0.45" />
    </svg>
  );
}
