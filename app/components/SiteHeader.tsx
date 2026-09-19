"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export const navigation = [
  ["/", "Home"], ["/services", "Services"], ["/platforms", "Platforms"],
  ["/approach", "Approach"], ["/privacy", "Privacy"], ["/terms", "Terms"], ["/contact", "Contact"]
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
    if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Assetopia Inc home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">A</span><span>Assetopia Inc</span>
        </Link>
        <button ref={toggle} className="icon-button menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="site-navigation" className={`site-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
          {navigation.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
