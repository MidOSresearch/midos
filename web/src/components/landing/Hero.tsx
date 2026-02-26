import { motion, useInView, animate } from "framer-motion";
import { Github, Copy, Check, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Animations ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.3 },
  },
} as const;

/* ── CountUp ── */
function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const ctrl = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v).toLocaleString();
      },
    });
    return () => ctrl.stop();
  }, [inView, target]);

  return <span ref={ref}>0</span>;
}

/* ── Terminal ── */
function TerminalBlock() {
  const [copied, setCopied] = useState(false);

  const configJson = `{
  "mcpServers": {
    "midos": {
      "command": "midos",
      "args": ["serve"]
    }
  }
}`;

  function handleCopy() {
    navigator.clipboard.writeText(
      `pip install midos\n\n# mcp_config.json\n${configJson}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="w-full rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/40">
        <div className="flex items-center gap-1.5">
          <div className="size-2.5 rounded-full bg-[#ff5f57]" />
          <div className="size-2.5 rounded-full bg-[#febc2e]" />
          <div className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] text-muted-foreground/60 font-mono">
          terminal
        </span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground/60 hover:text-foreground transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="size-3.5 text-primary" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-sm leading-relaxed text-left">
        <div className="flex items-center gap-2">
          <span className="text-primary select-none">$</span>
          <span className="text-foreground">pip install midos</span>
        </div>
        <div className="mt-4 text-muted-foreground/50 text-xs select-none">
          # mcp_config.json
        </div>
        <pre className="mt-1 text-foreground/80 text-xs leading-relaxed">
          {configJson}
        </pre>
      </div>
    </div>
  );
}

/* ── Stats ── */
const stats = [
  { value: 57, label: "Tools" },
  { value: 1284, label: "Chunks" },
  { value: 104, label: "Skills" },
  { value: 22900, label: "Vectors" },
] as const;

function StatsRow() {
  return (
    <div className="flex items-center gap-5 md:gap-6 flex-wrap">
      {stats.map((stat, i) => (
        <div key={stat.label} className="flex items-center gap-5 md:gap-6">
          {i > 0 && <div className="w-px h-6 bg-border/50 hidden sm:block" />}
          <div className="flex flex-col">
            <span className="text-foreground font-mono font-bold text-lg">
              <CountUp target={stat.value} />
            </span>
            <span className="text-muted-foreground text-[11px] uppercase tracking-wider">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Hero ── */
export default function Hero() {
  return (
    <section className="min-h-[92vh] pt-28 md:pt-36 pb-16 px-6">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ── Left column: Copy ── */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary text-xs tracking-wide"
            >
              Open Source &middot; MCP Native
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.92] text-foreground"
          >
            Your agent
            <br />
            guesses.
          </motion.h1>
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.92]"
          >
            Ours has{" "}
            <span className="text-primary">receipts.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
          >
            57 MCP tools. 1,284 knowledge chunks. 104 battle-tested skills.
            Every piece source-verified through a 5-layer pipeline.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" asChild className="group/btn">
                <a href="/quickstart/" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/MidOSresearch/midos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeUp} className="mt-10">
            <StatsRow />
          </motion.div>
        </motion.div>

        {/* ── Right column: Terminal ── */}
        <motion.div
          className="flex-1 w-full max-w-xl lg:max-w-none"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <div className="relative">
            {/* Ambient glow behind terminal */}
            <div className="absolute -inset-8 bg-primary/[0.04] blur-[60px] rounded-full pointer-events-none" />
            <TerminalBlock />
            {/* Decorative corner marks */}
            <div className="absolute -top-3 -left-3 w-6 h-px bg-border/40" />
            <div className="absolute -top-3 -left-3 w-px h-6 bg-border/40" />
            <div className="absolute -bottom-3 -right-3 w-6 h-px bg-border/40" />
            <div className="absolute -bottom-3 -right-3 w-px h-6 bg-border/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
