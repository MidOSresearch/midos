import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Tier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaVariant: "default" | "outline";
  highlighted?: boolean;
  href: string;
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "For exploring and small projects",
    features: [
      "9 MCP tools",
      "100 queries/month",
      "Basic knowledge search",
      "Community support",
    ],
    cta: "Start Free",
    ctaVariant: "outline",
    href: "/quickstart/",
  },
  {
    name: "Dev",
    price: "$29",
    period: "/month",
    description: "For serious development workflows",
    features: [
      "Everything in Free",
      "Full knowledge base (1,284 chunks)",
      "EUREKA discoveries",
      "Semantic search",
      "25,000 queries/month",
      "Priority support",
    ],
    cta: "Get Started",
    ctaVariant: "default",
    highlighted: true,
    href: "/quickstart/",
  },
  {
    name: "Ops",
    price: "$79",
    period: "/month",
    description: "For teams and production systems",
    features: [
      "Everything in Dev",
      "SOTA validated patterns",
      "Advanced analytics",
      "Custom skill packs",
      "Unlimited queries",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline",
    href: "mailto:contact@midos.run",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

function TierCard({ tier }: { tier: Tier }) {
  return (
    <motion.div variants={cardVariants} className={cn("flex", tier.highlighted && "md:-mt-4 md:mb-[-16px]")}>
      <div
        className={cn(
          "relative flex flex-col rounded-xl border p-8 w-full",
          "bg-card",
          tier.highlighted
            ? "border-primary/50 shadow-[0_0_40px_-12px] shadow-primary/10"
            : "border-border"
        )}
      >
        {tier.highlighted && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs px-3 py-1">
              Most Popular
            </Badge>
          </div>
        )}

        <div className="mb-6">
          <Badge
            className={cn(
              "text-xs px-2.5 py-0.5 mb-4",
              tier.highlighted
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-secondary text-secondary-foreground"
            )}
          >
            {tier.name}
          </Badge>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-4xl font-bold font-mono text-foreground">
              {tier.price}
            </span>
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {tier.description}
          </p>
        </div>

        <div className="flex-1">
          <ul className="space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check className="size-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Button
            variant={tier.ctaVariant}
            className="w-full"
            asChild
          >
            <a href={tier.href}>{tier.cta}</a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start free. Scale when you need to.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {tiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
