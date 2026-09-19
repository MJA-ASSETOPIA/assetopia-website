import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, ContactBand, SiteFooter } from "../components/SiteParts";

export const metadata: Metadata = { title: "Platforms | Assetopia Inc", description: "Assetopia App: a portfolio intelligence platform in development, bringing portfolio data and AI-assisted review together." };

const capabilities = [
  { title: "A connected portfolio view", detail: "Bring account and holding information into a consistent structure, with security identifiers and source details kept in context.", benefit: "Less fragmentation across accounts and imports." },
  { title: "Currency-aware analysis", detail: "Consider holdings in their original currencies and a common reporting currency, with pricing and conversion context.", benefit: "A clearer view of portfolios that span markets." },
  { title: "A closer look at exposure", detail: "Explore the securities and funds behind a portfolio, including underlying exposure where suitable data is available.", benefit: "More context for understanding concentration and overlap." },
  { title: "AI-assisted review", detail: "Connect assistance to structured portfolio information, with explanations and human review as part of the intended workflow.", benefit: "Insights that can be considered alongside their supporting information." }
];

export default function PlatformsPage() {
  return <><main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="Financial platforms" title="Assetopia App"><span className="status-label">In development</span><p>Portfolio intelligence built around your accounts, holdings, and financial decisions.</p><p className="intro-secondary">Our first platform brings together portfolio data, analytics, and AI-assisted review for investors and financial teams.</p><Link className="button primary" href="/contact">Discuss the platform <ArrowUpRight size={18} /></Link></PageIntro>
    <section className="section"><div className="container">
      <div className="section-heading"><p className="eyebrow">Development focus</p><h2>From portfolio data to a clearer view.</h2><p>These are the areas shaping the platform. Availability and scope will be confirmed as development progresses.</p></div>
      <div className="capability-grid">{capabilities.map((item, i) => <article key={item.title}><span className="item-number">0{i + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><p className="benefit">{item.benefit}</p></article>)}</div>
    </div></section>
    <section className="soft-band"><div className="container split-layout">
      <div><p className="eyebrow">Design priorities</p><h2>The context behind the numbers.</h2></div>
      <div className="detail-list"><article><h3>Financial detail stays visible</h3><p>Accounts, currencies, prices, and sources are part of the analysis, rather than detached from the result.</p></article><article><h3>Data and assistance work together</h3><p>The aim is to connect portfolio structure and analytical tools with assistance that can explain its context.</p></article><article><h3>Review remains a human decision</h3><p>The platform is being designed to support investigation and review, with people accountable for their financial decisions.</p></article></div>
    </div></section>
    <ContactBand title="Help shape what comes next." text="Talk to us about the portfolio workflows that matter to you." />
  </main><SiteFooter /></>;
}
