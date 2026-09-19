import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageIntro, SiteFooter } from "../components/SiteParts";

export const metadata: Metadata = { title: "Contact | Assetopia Inc", description: "Contact Assetopia Inc about consulting, financial data, AI, or Assetopia App." };
export default function ContactPage() {
  return <><main id="main-content" className="contact-page" tabIndex={-1}>
    <PageIntro eyebrow="Let's talk" title="Contact Assetopia"><p>Tell us what you are working on, where you need help, or what you would like to know about Assetopia App.</p></PageIntro>
    <section className="section"><div className="container contact-layout">
      <div><p className="eyebrow">Email Assetopia</p><h2 className="email-address">hello@assetopiainc.com</h2><p>Include your name, organization, and a short description of your project or question.</p><a className="button primary" href="mailto:hello@assetopiainc.com"><Mail size={18} aria-hidden="true" />Email Assetopia</a></div>
      <aside className="contact-topics"><h3>Good starting points</h3><ul><li>Financial services consulting</li><li>Data architecture and analytics</li><li>AI use cases and workflow design</li><li>Assetopia App and platform development</li></ul></aside>
    </div></section>
  </main><SiteFooter /></>;
}
