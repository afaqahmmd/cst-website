import React from "react";

/**
 * Bun/Mushroom Icon (SVG)
 * - Top: Elliptical cap
 * - Bottom: Bun-like base (wider, curved sides + flat bottom)
 */
export default function BunMushroomIcon({
  size = 64,
  topColor = "#FFF3E0",
  baseColor = "#FFFFFF",
}: {
  size?: number;
  topColor?: string;
  baseColor?: string;
}) {
  const id = React.useId();
  return (
    <div style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 64 64"
        width={size}
        height={size}
        role="img"
        aria-label="bun mushroom icon"
      >
        <defs>
          <radialGradient id={`top-${id}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor={topColor} stopOpacity="1" />
            <stop offset="100%" stopColor={topColor} stopOpacity="0.9" />
          </radialGradient>
        </defs>

        {/* Top ellipse (cap) */}
        <ellipse cx="32" cy="20" rx="22" ry="14" fill={`url(#top-${id})`} />

        {/* Outline for cap */}
        <ellipse
          cx="32"
          cy="20"
          rx="22"
          ry="14"
          fill="none"
          stroke="#000"
          strokeOpacity="0.05"
        />

        {/* Bun-like base: wider, curved sides and flat bottom */}
        <path
          d="M10 32
             Q10 22 32 22
             Q54 22 54 32
             Q54 46 32 46
             Q10 46 10 32
             Z"
          fill={baseColor}
        />

        {/* Subtle shadow under base */}
        <ellipse cx="32" cy="48" rx="20" ry="4" fill="#000" opacity="0.08" />
      </svg>
    </div>
  );
}
