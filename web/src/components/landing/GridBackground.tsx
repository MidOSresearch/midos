export default function GridBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: [
            // Layer 1: Fine grid (32px)
            `linear-gradient(to right, oklch(0.285 0 0 / 0.10) 1px, transparent 1px)`,
            `linear-gradient(to bottom, oklch(0.285 0 0 / 0.10) 1px, transparent 1px)`,
            // Layer 2: Large grid (128px)
            `linear-gradient(to right, oklch(0.285 0 0 / 0.20) 1px, transparent 1px)`,
            `linear-gradient(to bottom, oklch(0.285 0 0 / 0.20) 1px, transparent 1px)`,
          ].join(", "),
          backgroundSize: [
            "32px 32px",
            "32px 32px",
            "128px 128px",
            "128px 128px",
          ].join(", "),
        }}
      />

      {/* Large grid intersection dots */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 1px, oklch(0.8763 0.2235 147.2424 / 0.20) 1px, transparent 1px)`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Radial ambient glow */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, oklch(0.8763 0.2235 147.2424 / 0.03), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
