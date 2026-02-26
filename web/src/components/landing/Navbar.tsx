import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Museum", href: "/museum/" },
  { label: "Docs", href: "/quickstart/" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
    >
      {/* Outer wrapper — handles the top padding when scrolled */}
      <nav
        className={cn(
          "transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]",
          scrolled
            ? "w-full max-w-[calc(72rem+2.5rem)] mx-auto mt-2.5 px-5 rounded-xl border border-border/50 bg-background/70 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.35),0_0_1px_rgba(255,255,255,0.05)_inset]"
            : "w-full bg-transparent"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between h-16 transition-all duration-500",
            scrolled ? "" : "px-6 max-w-6xl mx-auto"
          )}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <img
                src={logoSrc.src}
                alt="MidOS"
                className={cn(
                  "h-14 w-auto transition-transform duration-500 group-hover:scale-105"
                )}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 blur-xl rounded-full transition-all duration-500 -z-10" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-mono font-bold text-lg text-foreground tracking-tighter">
                MidOS
              </span>
              <span className="text-[10px] font-mono text-primary/60 tracking-wider">
                v2
              </span>
            </div>
          </a>

          {/* Center — Pill nav (visible when NOT scrolled) */}
          <div
            className={cn(
              "hidden md:flex items-center transition-all duration-500",
              scrolled ? "opacity-0 pointer-events-none absolute" : "opacity-100"
            )}
          >
            <div className="flex items-center gap-1 rounded-full border border-border/40 bg-card/30 backdrop-blur-xl px-1.5 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-foreground/[0.06]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Center — Compact links (visible when scrolled) */}
          <div
            className={cn(
              "hidden md:flex items-center gap-5 transition-all duration-500",
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none absolute"
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right — CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href="#login"
              className={cn(
                "text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-1.5"
              )}
            >
              Log in
            </a>
            <a
              href="/quickstart/"
              className={cn(
                "group/cta relative flex items-center gap-1.5 text-[13px] font-medium rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(134,239,172,0.25)] hover:brightness-110 px-4 py-1.5"
              )}
            >
              Get Started
              <ArrowRight className="size-3 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                "md:hidden overflow-hidden bg-background/95 backdrop-blur-3xl",
                scrolled
                  ? "border-t border-border/30 rounded-b-2xl"
                  : "border-b border-border/30"
              )}
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/[0.04] rounded-lg transition-all duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-border/30 flex flex-col gap-2">
                  <a
                    href="#login"
                    className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                  >
                    Log in
                  </a>
                  <a
                    href="/quickstart/"
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all"
                  >
                    Get Started
                    <ArrowRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
