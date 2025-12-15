interface MarqueeRowProps {
  children: React.ReactNode[];  // your cards
  speed?: number;               // duration of one loop in seconds
  reverse?: boolean;            // optional reverse direction
}

/**
 * Infinite marquee component
 * - No dragging
 * - Hover to pause
 * - Seamless loop with duplicated content
 */
export function MarqueeRow({ children, speed = 25, reverse = false }: MarqueeRowProps) {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {/* ORIGINAL TRACK */}
        <div
          className={`marquee-track ${reverse ? "reverse" : ""}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>

        {/* DUPLICATE TRACK for seamless loop */}
        <div
          className={`marquee-track ml-3 ${reverse ? "reverse" : ""}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
