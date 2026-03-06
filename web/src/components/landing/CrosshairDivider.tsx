import { cn } from "@/lib/utils";

interface CrosshairDividerProps {
  className?: string;
  showCenter?: boolean;
}

function Crosshair() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
    >
      {/* Horizontal line */}
      <line
        x1="0"
        y1="8"
        x2="16"
        y2="8"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {/* Vertical line */}
      <line
        x1="8"
        y1="0"
        x2="8"
        y2="16"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {/* Center dot with glow */}
      <circle
        cx="8"
        cy="8"
        r="1.5"
        fill="oklch(0.8763 0.2235 147.2424 / 0.50)"
      />
      <circle
        cx="8"
        cy="8"
        r="1.5"
        fill="none"
        style={{
          filter: "drop-shadow(0 0 6px oklch(0.8763 0.2235 147.2424 / 0.30))",
        }}
      />
    </svg>
  );
}

export default function CrosshairDivider({
  className,
  showCenter = true,
}: CrosshairDividerProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-6xl mx-auto px-6 py-2 flex items-center",
        className
      )}
    >
      <Crosshair />
      <div className="flex-1 h-px bg-border" />
      {showCenter && (
        <>
          <Crosshair />
          <div className="flex-1 h-px bg-border" />
        </>
      )}
      <Crosshair />
    </div>
  );
}
