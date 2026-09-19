import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro"><div className="container">
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div>
  </div></section>;
}

export function ContactBand({ title = "What are you working on?", text = "Tell us about your financial services, data, or AI project." }: { title?: string; text?: string }) {
  return <section className="contact-band"><div className="container contact-band-inner">
    <div><h2>{title}</h2><p>{text}</p></div>
    <Link className="button primary" href="/contact">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link>
  </div></section>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><Link className="footer-brand" href="/">Assetopia Inc</Link><p>Financial services. Data. AI.</p></div>
    <nav aria-label="Footer navigation"><Link href="/services">Services</Link><Link href="/platforms">Platforms</Link>
      <Link href="/approach">Approach</Link><Link href="/contact">Contact</Link>
      <Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></nav>
    <p className="footer-note">Company and product information only. Nothing on this website constitutes individualized financial advice.</p>
  </div></footer>;
}
