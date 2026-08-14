/** Maskot AI Performance Coach — varian hijau, opsional melambaikan tangan. */
export function CoachRobot({
  waving = false,
  className = "",
}: {
  waving?: boolean;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 130 140" className={className} aria-hidden>
      <defs>
        <linearGradient id="cr-body" x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e6eef4" />
          <stop offset="100%" stopColor="#bccddb" />
        </linearGradient>
        <linearGradient id="cr-eye" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8bf7c8" />
          <stop offset="100%" stopColor="#22c07e" />
        </linearGradient>
        <radialGradient id="cr-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#7fe3b0" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7fe3b0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="65" cy="70" rx="60" ry="58" fill="url(#cr-glow)" />

      {/* antena */}
      <line x1="65" y1="10" x2="65" y2="22" stroke="#a9bccb" strokeWidth="3" />
      <circle cx="65" cy="9" r="5" fill="#34d399" />

      {/* kepala */}
      <rect x="22" y="20" width="86" height="60" rx="24" fill="url(#cr-body)" />
      <rect x="31" y="30" width="68" height="40" rx="18" fill="#132430" />
      <ellipse cx="51" cy="50" rx="9" ry="10" fill="url(#cr-eye)" />
      <ellipse cx="79" cy="50" rx="9" ry="10" fill="url(#cr-eye)" />
      <ellipse cx="48.6" cy="46.6" rx="3" ry="3.4" fill="#eafff5" />
      <ellipse cx="76.6" cy="46.6" rx="3" ry="3.4" fill="#eafff5" />
      {/* pipi */}
      <ellipse cx="36" cy="62" rx="5" ry="3" fill="#7fe3b0" opacity="0.5" />
      <ellipse cx="94" cy="62" rx="5" ry="3" fill="#7fe3b0" opacity="0.5" />

      {/* telinga */}
      <rect x="13" y="40" width="10" height="20" rx="5" fill="#c9d8e5" />
      <rect x="107" y="40" width="10" height="20" rx="5" fill="#c9d8e5" />

      {/* badan */}
      <rect x="33" y="80" width="64" height="42" rx="19" fill="url(#cr-body)" />
      <rect x="52" y="90" width="26" height="15" rx="7" fill="#dfeaf2" />
      <circle cx="65" cy="97.5" r="4" fill="#22c07e" />

      {/* lengan */}
      {waving ? (
        <g transform="rotate(-32 24 92)">
          <rect x="12" y="80" width="15" height="30" rx="7.5" fill="#d3e0ea" />
          <circle cx="19.5" cy="78" r="8" fill="#e6eef4" />
        </g>
      ) : (
        <rect x="14" y="84" width="15" height="28" rx="7.5" fill="#d3e0ea" />
      )}
      <rect x="101" y="84" width="15" height="28" rx="7.5" fill="#d3e0ea" />

      <ellipse cx="65" cy="130" rx="32" ry="5" fill="#8fb0c8" opacity="0.28" />
    </svg>
  );
}
