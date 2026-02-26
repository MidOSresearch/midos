import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("pip install midos");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="relative py-24 md:py-32 px-6 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-primary/4 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl text-center flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ready to build?
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg">
          Install MidOS in 30 seconds. Your agent will thank you.
        </p>

        {/* Install command block */}
        <div className="mt-8 w-full max-w-md">
          <div className="flex items-center justify-between bg-card border border-border rounded-lg px-6 py-4 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-primary select-none">$</span>
              <span className="text-foreground">pip install midos</span>
            </div>
            <button
              onClick={handleCopy}
              className="text-muted-foreground hover:text-foreground transition-colors ml-4 shrink-0"
              aria-label="Copy install command"
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="/quickstart/">Read the Docs</a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="https://github.com/MidOSresearch/midos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              View on GitHub
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
