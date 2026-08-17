import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platforms | Assetopia Inc",
  description:
    "Assetopia platforms combine financial services expertise, trusted data infrastructure, and governed AI workflows, starting with the Assetopia portfolio intelligence app."
};

const differentiators = [
  {
    title: "Built around financial reality",
    body: "Assetopia is shaped around holdings, accounts, lots, currencies, price sources, broker data, fund exposure, and the messy edges that generic tools usually flatten."
  },
  {
    title: "Data model first",
    body: "The platform treats clean security, pricing, currency, account, and portfolio data as the foundation for useful AI, not as an afterthought."
  },
  {
    title: "Explainable intelligence",
    body: "Recommendations and insights are designed to show the data context behind them, so users can understand why something is being highlighted."
  },
  {
    title: "Consulting feedback loop",
    body: "Assetopia Inc's consulting work keeps the platform close to real financial services workflows, operating constraints, and decision environments."
  }
];

const capabilities = [
  "Portfolio import and normalization",
  "Multi-currency valuation layers",
  "Security master and price history",
  "Broker connectivity and order visibility",
  "Fund look-through analytics",
  "AI-assisted recommendations and review workflows"
];

const marketRows = [
  {
    label: "Generic AI tools",
    detail: "Useful for broad reasoning, but usually disconnected from live portfolio structure, financial data lineage, and operational controls."
  },
  {
    label: "Traditional portfolio tools",
    detail: "Often strong at reporting, but less flexible around AI-native workflows, explainability, and modern data/product integration."
  },
  {
    label: "Assetopia",
    detail: "Combines portfolio intelligence, financial data infrastructure, and governed AI assistance inside a purpose-built platform."
  }
];

export default function PlatformsPage() {
  return (
    <main className="platform-page">
      <section className="platform-hero">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="/" aria-label="Assetopia Inc home">
            <span className="brand-mark">A</span>
            <span>Assetopia Inc</span>
          </Link>
          <div className="nav-links">
            <Link href="/#services">Services</Link>
            <Link href="/platforms">Platforms</Link>
            <Link href="/#approach">Approach</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="mailto:hello@assetopiainc.com">Contact</a>
          </div>
        </nav>

        <div className="platform-hero-grid">
          <div>
            <p className="eyebrow">Platforms</p>
            <h1>Assetopia App</h1>
            <p className="hero-text">
              The first Assetopia platform is being built as an AI-assisted
              portfolio intelligence app for investors, advisers, operators, and
              financial teams who need clearer decisions from complex data.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:hello@assetopiainc.com">
                Discuss the platform
              </a>
              <a className="button secondary" href="#differentiation">
                What makes it different
              </a>
            </div>
          </div>

          <div className="platform-visual" aria-label="Assetopia app platform layers">
            <div className="visual-topline">
              <span>Assetopia App</span>
              <span>In development</span>
            </div>
            <div className="platform-stack">
              <div>
                <span>Financial Data Layer</span>
                <strong>Holdings, pricing, currencies, brokers, funds</strong>
              </div>
              <div>
                <span>Portfolio Intelligence Layer</span>
                <strong>Risk, exposure, performance, valuation context</strong>
              </div>
              <div>
                <span>AI Workflow Layer</span>
                <strong>Explainable insights, recommendations, review support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="differentiation">
        <div className="section-heading">
          <p className="eyebrow">Differentiation</p>
          <h2>Not just a portfolio tracker. Not just an AI wrapper.</h2>
          <p>
            Assetopia is intended to sit where financial data, portfolio
            operations, and AI-assisted decision support meet. The difference is
            the combination: specialist financial context, structured data, and
            product workflows designed for repeat use.
          </p>
        </div>
        <div className="feature-grid">
          {differentiators.map((item) => (
            <article className="feature" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Platform capabilities</p>
          <h2>A financial operating layer for portfolio intelligence.</h2>
          <p>
            The app is being shaped from real implementation work: imports,
            normalized security data, multi-currency valuation, broker
            connectivity, fund transparency, and AI-assisted review.
          </p>
        </div>
        <div className="capability-list">
          {capabilities.map((capability) => (
            <div className="capability-row" key={capability}>
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-heading">
          <p className="eyebrow">Market position</p>
          <h2>Assetopia is designed for the gap between software, data, and judgement.</h2>
        </div>
        <div className="market-panel">
          {marketRows.map((row) => (
            <article key={row.label}>
              <h3>{row.label}</h3>
              <p>{row.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Assetopia platforms</p>
          <h2>Built from consulting insight. Designed as scalable financial software.</h2>
        </div>
        <a className="button primary" href="mailto:hello@assetopiainc.com">
          Contact Assetopia
        </a>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <span>Assetopia Inc</span>
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
        <span>
          Platform information is for company and product context only and is
          not individualized financial advice.
        </span>
      </footer>
    </main>
  );
}
