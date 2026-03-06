const columns = [
  {
    label: "Product",
    links: [
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" },
      { text: "Museum", href: "/museum/" },
      { text: "Changelog", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Documentation", href: "/quickstart/" },
      { text: "Tool Catalog", href: "/tools/overview/" },
      { text: "Architecture", href: "/architecture/" },
      { text: "API Reference", href: "#" },
    ],
  },
  {
    label: "Community",
    links: [
      {
        text: "GitHub",
        href: "https://github.com/MidOSresearch/midos",
        external: true,
      },
      { text: "Discord", href: "#" },
      { text: "Twitter/X", href: "#" },
      { text: "Contributing", href: "#" },
    ],
  },
  {
    label: "Legal",
    links: [
      { text: "Privacy Policy", href: "#" },
      { text: "Terms of Service", href: "#" },
      { text: "License", href: "#" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((column) => (
            <div key={column.label}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {column.label}
              </h4>
              <ul className="space-y-0">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block py-1.5"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="font-mono font-bold text-foreground">MidOS</span>
            <span>&copy; 2025 MidOS Research</span>
          </div>
          <span className="text-xs text-muted-foreground">
            Built with FastAPI, LanceDB &amp; Gemini
          </span>
        </div>
      </div>
    </footer>
  );
}
