import Link from "next/link";
import { PageIntro, SiteFooter } from "./SiteParts";

type Section = { title: string; body: string[] };
export default function LegalPage({ title, sections, contactText, updated = "August 17, 2026" }: { title: string; sections: Section[]; contactText: string; updated?: string }) {
  const entries = [...sections, { title: "Contact", body: [] }];
  return <><main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="Legal" title={title}><p>Last updated: {updated}.</p>
    </PageIntro>
    <div className="container legal-layout">
      <nav className="contents-nav" aria-label={`${title} contents`}><p className="eyebrow">On this page</p>
        {entries.map((section, i) => <a key={section.title} href={`#section-${i + 1}`}>{section.title}</a>)}
      </nav>
      <div className="legal-copy">
        {sections.map((section, i) => <section id={`section-${i + 1}`} key={section.title}>
          <h2><span>{String(i + 1).padStart(2, "0")}</span>{section.title}</h2>
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>)}
        <section id={`section-${sections.length + 1}`}><h2><span>{String(sections.length + 1).padStart(2, "0")}</span>Contact</h2>
          <p>{contactText} <Link href="/contact">Contact Assetopia</Link>.</p></section>
      </div>
    </div>
  </main><SiteFooter /></>;
}
