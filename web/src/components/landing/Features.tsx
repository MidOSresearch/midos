import { motion } from "framer-motion";
import {
  Search,
  ShieldCheck,
  Handshake,
  BookOpen,
  Plug,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Search,
    title: "Semantic Search",
    description:
      "Vector search powered by Gemini embeddings (3072-d). Find knowledge by meaning, not keywords. Hybrid mode combines keyword + semantic.",
  },
  {
    icon: ShieldCheck,
    title: "Source-Verified",
    description:
      "5-layer pipeline: Staging \u2192 Chunks \u2192 Truth \u2192 EUREKA \u2192 SOTA. Every piece validated, deduplicated, and scored.",
  },
  {
    icon: Handshake,
    title: "Agent Handshake",
    description:
      "Call agent_handshake once \u2014 get a personalized tool catalog based on your model, context window, and project goal.",
  },
  {
    icon: BookOpen,
    title: "104 Skills",
    description:
      "Pre-built skill packs for React 19, FastAPI, Django, NestJS, Go, Rust, K8s, security patterns, and more.",
  },
  {
    icon: Plug,
    title: "MCP Native",
    description:
      "Works with Claude Desktop, Cursor, Cline, Windsurf, VS Code, Zed, OpenCode \u2014 any MCP-compatible client.",
  },
  {
    icon: Layers,
    title: "Tiered Access",
    description:
      "Free: 9 tools, 100 queries/mo. Dev: full knowledge base, EUREKA, semantic search, 25K queries/mo.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <motion.div variants={cardVariants} whileHover={{ y: -2 }}>
      <div className="relative bg-card/50 border border-border/50 rounded-xl p-6 h-full hover:border-border transition-colors duration-300">
        {/* Top-left crosshair corner */}
        <div className="absolute top-0 left-0 w-4 h-px bg-primary/30" />
        <div className="absolute top-0 left-0 w-px h-4 bg-primary/30" />
        {/* Bottom-right crosshair corner */}
        <div className="absolute bottom-0 right-0 w-4 h-px bg-primary/30" />
        <div className="absolute bottom-0 right-0 w-px h-4 bg-primary/30" />

        <div className="bg-primary/10 rounded-lg p-2.5 w-fit">
          <Icon className="size-5 text-primary" />
        </div>
        <h3 className="text-base font-semibold text-foreground mt-4">
          {feature.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why MidOS?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Context7 gives you raw docs. MidOS gives you curated, validated
            knowledge &mdash; every chunk battle-tested through a 5-layer
            pipeline.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
