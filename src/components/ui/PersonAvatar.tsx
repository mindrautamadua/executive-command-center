const SKIN = ["#e0ac69", "#c68642", "#f1c27d", "#d8a05a", "#b97a4a"];
const HAIR = ["#2b2118", "#3b2b1d", "#1f1a15", "#4a3421"];
const SHIRT = ["#2a3b52", "#1f4e79", "#37474f", "#3d5a80", "#4a4e69", "#2f5d50"];

/** Avatar SVG deterministik dari `seed` — pengganti pasfoto pada mockup. */
export function PersonAvatar({
  seed = 0,
  size = 32,
  className = "",
}: {
  seed?: number;
  size?: number;
  className?: string;
}) {
  const skin = SKIN[seed % SKIN.length];
  const hair = HAIR[(seed * 3) % HAIR.length];
  const shirt = SHIRT[(seed * 5) % SHIRT.length];
  const female = seed % 2 === 1;

  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={`shrink-0 rounded-full ${className}`}
      aria-hidden
    >
      <rect width="40" height="40" fill="#e3eaf1" />
      {female && <ellipse cx="20" cy="17" rx="11" ry="12" fill={hair} />}
      <circle cx="20" cy="16" r="7.2" fill={skin} />
      <path d="M5 40c1.6-9 7.8-13.2 15-13.2S33.4 31 35 40Z" fill={shirt} />
      <path
        d="M20 26.8c2.7 0 5 1 6.2 2.7L20 40l-6.2-10.5c1.2-1.7 3.5-2.7 6.2-2.7Z"
        fill="#f2f4f7"
      />
      {!female && (
        <path
          d="M12.6 13.4c1.2-5.4 13.8-6.2 14.8 0 .6 3.6-1 4.8-1 4.8s-1.2-5.8-4.4-5.2c-3.2.6-7.4-1-7.4-1s-1 3.1-1 5.3-1.6-1.3-1-3.9Z"
          fill={hair}
        />
      )}
      {female && (
        <path d="M9 18c0-7 4.6-10 11-10s11 3 11 10c0-3.4-4-5.4-11-5.4S9 14.6 9 18Z" fill={hair} />
      )}
    </svg>
  );
}
