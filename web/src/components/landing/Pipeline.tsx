import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Database,
  Layers,
  ShieldCheck,
  Lightbulb,
  Trophy,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stage {
  name: string;
  count: number | null;
  display: string;
  label: string;
  icon: LucideIcon;
  step: string;
}

const stages: Stage[] = [
  { name: "Staging", count: null, display: "∞", label: "Raw Sources", icon: Database, step: "01" },
  { name: "Chunks", count: 1284, display: "1,284", label: "Curated", icon: Layers, step: "02" },
  { name: "Truth", count: 47, display: "47", label: "Verified", icon: ShieldCheck, step: "03" },
  { name: "Eureka", count: 168, display: "168", label: "Discoveries", icon: Lightbulb, step: "04" },
  { name: "SOTA", count: 32, display: "32", label: "Validated", icon: Trophy, step: "05" },
];

/* ── Animated counter ── */
function AnimatedCount({
  target,
  display,
  active,
}: {
  target: number | null;
  display: string;
  active: boolean;
}) {
  const [value, setValue] = useState(target === null ? "∞" : "0");

  useEffect(() => {
    if (!active || target === null) return;
    const ctrl = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(v) {
        setValue(
          target >= 1000
            ? Math.round(v).toLocaleString("en-US")
            : Math.round(v).toString()
        );
      },
      onComplete() {
        setValue(display);
      },
    });
    return () => ctrl.stop();
  }, [active, target, display]);

  return <>{value}</>;
}

/* ── Beam connector (horizontal desktop) ── */
function BeamH({ delay }: { delay: number }) {
  return (
    <div className="hidden md:flex items-center w-12 lg:w-16 relative shrink-0">
      <div className="h-px w-full bg-gradient-to-r from-border via-border/60 to-border" />
      <ChevronRight className="absolute -right-1.5 size-3 text-border" />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.8763 0.2235 147.2424), transparent)",
          width: "60%",
        }}
        initial={{ left: "-60%", opacity: 0 }}
        animate={{ left: ["-60%", "160%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.8,
          delay,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 size-1.5 rounded-full bg-primary"
        style={{ boxShadow: "0 0 8px 2px oklch(0.8763 0.2235 147.2424 / 0.6)" }}
        initial={{ left: "-10%", opacity: 0 }}
        animate={{ left: ["-10%", "110%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.8,
          delay,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ── Beam connector (vertical mobile) ── */
function BeamV({ delay }: { delay: number }) {
  return (
    <div className="flex md:hidden items-center justify-center h-12 relative">
      <div className="w-px h-full bg-gradient-to-b from-border via-border/60 to-border" />
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, oklch(0.8763 0.2235 147.2424), transparent)",
          height: "60%",
        }}
        initial={{ top: "-60%", opacity: 0 }}
        animate={{ top: ["-60%", "160%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.4,
          delay,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-primary"
        style={{ boxShadow: "0 0 8px 2px oklch(0.8763 0.2235 147.2424 / 0.6)" }}
        initial={{ top: "-10%", opacity: 0 }}
        animate={{ top: ["-10%", "110%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.4,
          delay,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

/* ── Stage card ── */
function StageCard({
  stage,
  index,
  active,
}: {
  stage: Stage;
  index: number;
  active: boolean;
}) {
  const Icon = stage.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative flex-1 min-w-[140px] max-w-[200px]"
    >
      <div className="relative rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-5 flex flex-col items-center text-center transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
        <span className="absolute top-3 right-3 text-[10px] font-mono text-muted-foreground/40 tracking-wider">
          {stage.step}
        </span>

        <div className="relative mb-4">
          <div className="size-12 rounded-full border border-primary/20 bg-primary/[0.06] flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(134,239,172,0.12)]">
            <Icon className="size-5 text-primary" />
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-[1.35] transition-all duration-700 pointer-events-none" />
        </div>

        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 mb-2">
          {stage.name}
        </span>

        <span className="text-2xl font-bold font-mono text-foreground leading-none">
          <AnimatedCount target={stage.count} display={stage.display} active={active} />
        </span>

        <span className="text-xs text-muted-foreground mt-1.5">{stage.label}</span>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

/* ── Main Pipeline ── */
export default function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pipeline" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.25em] text-primary/60 mb-3">
            5-Layer Quality Pipeline
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            From raw source to agent-ready
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Every piece of knowledge is validated, deduplicated, and scored
            before it reaches your agent.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-0">
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              className="flex flex-col md:flex-row items-center"
            >
              <StageCard stage={stage} index={i} active={inView} />
              {i < stages.length - 1 && (
                <>
                  <BeamH delay={i * 0.45} />
                  <BeamV delay={i * 0.35} />
                </>
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground/60 font-mono"
        >
          <div className="w-8 h-px bg-border" />
          <span>∞ sources → 32 validated patterns</span>
          <div className="w-8 h-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
}
