const pillars = [
  {
    title: "One view of the whole portfolio",
    body: "Bring holdings, accounts, pricing, currencies, and performance context into a single, readable investment picture."
  },
  {
    title: "Risk that is easier to explain",
    body: "Understand concentration, region, sector, currency, and fund look-through exposure without stitching together manual spreadsheets."
  },
  {
    title: "Decision support, not noise",
    body: "Surface practical insights for rebalancing, diversification, broker activity, and portfolio review conversations."
  }
];

const metrics = [
  { label: "Portfolio value", value: "$2.48M" },
  { label: "Risk score", value: "72" },
  { label: "FX impact", value: "+1.8%" }
];

const workflows = [
  {
    kicker: "01",
    title: "Connect and consolidate",
    body: "Start with imported portfolios and connected accounts, then normalize the data into a structure you can trust."
  },
  {
    kicker: "02",
    title: "Analyze exposure",
    body: "Review holdings through account, portfolio, security, currency, sector, region, and fund-transparency lenses."
  },
  {
    kicker: "03",
    title: "Act with context",
    body: "Use explainable recommendations, price history, order visibility, and scenario thinking to guide next steps."
  }
];

const audiences = [
  "Private investors managing multi-account wealth",
  "Families who want cleaner portfolio conversations",
  "Advisers and operators preparing investment reviews",
  "Builders who believe financial software should feel calmer"
];

const roadmap = [
  "Portfolio import and normalized holdings",
  "Multi-currency valuation layers",
  "Security master and price history",
  "Broker account connectivity",
  "Order visibility and trading workflows",
  "Fund look-through analytics"
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Assetopia Inc home">
            <span className="brand-mark">A</span>
            <span>Assetopia Inc</span>
          </a>
          <div className="nav-links">
            <a href="#platform">Platform</a>
            <a href="#workflow">Workflow</a>
            <a href="#insight">Insight</a>
            <a href="/privacy">Privacy</a>
            <a href="mailto:hello@assetopiainc.com">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Private portfolio intelligence</p>
            <h1>Assetopia Inc</h1>
            <p className="hero-text">
              Intelligent portfolio software for investors who want a calmer,
              clearer way to understand wealth across accounts, markets,
              currencies, and decisions.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:hello@assetopiainc.com">
                Start a conversation
              </a>
              <a className="button secondary" href="#platform">
                Explore the platform
              </a>
            </div>
          </div>

          <div className="product-visual" aria-label="Assetopia portfolio dashboard preview">
            <div className="visual-topline">
              <span>Portfolio Overview</span>
              <span>Live</span>
            </div>
            <div className="visual-value">$2.48M</div>
            <div className="visual-subline">
              Risk, exposure, pricing, and allocation in one view
            </div>
            <div className="allocation-bars" aria-hidden="true">
              <span style={{ width: "42%" }} />
              <span style={{ width: "28%" }} />
              <span style={{ width: "18%" }} />
              <span style={{ width: "12%" }} />
            </div>
            <div className="visual-list">
              <div>
                <span>Largest exposure</span>
                <strong>US technology</strong>
              </div>
              <div>
                <span>Review flag</span>
                <strong>GBP/USD drift</strong>
              </div>
              <div>
                <span>Next action</span>
                <strong>Rebalance watchlist</strong>
              </div>
            </div>
            <div className="visual-grid">
              {metrics.map((metric) => (
                <div className="metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="platform">
        <div className="section-heading">
          <p className="eyebrow">The platform</p>
          <h2>Built for investors who want the full picture before they make the next move.</h2>
        </div>
        <div className="feature-grid">
          {pillars.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section" id="workflow">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">How it works</p>
          <h2>From scattered portfolio data to a review-ready investment picture.</h2>
          <p>
            Assetopia is designed around the practical jobs investors return to:
            importing, reconciling, reviewing, comparing, and deciding what to do next.
          </p>
        </div>
        <div className="workflow-list">
          {workflows.map((item) => (
            <article className="workflow-step" key={item.title}>
              <span>{item.kicker}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="insight-band" id="insight">
        <div>
          <p className="eyebrow">Why Assetopia</p>
          <h2>Financial data should help decisions feel calmer, not noisier.</h2>
        </div>
        <p>
          Assetopia is being designed around consolidated portfolio views,
          security master data, pricing history, broker connectivity, and
          explainable analytics. The goal is simple: fewer spreadsheets, fewer
          blind spots, and better investment conversations.
        </p>
      </section>

      <section className="section compact-section">
        <div className="two-column">
          <article className="content-panel">
            <p className="eyebrow">Who it is for</p>
            <h2>Serious investors, without the institutional clutter.</h2>
            <ul className="check-list">
              {audiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </article>
          <article className="content-panel">
            <p className="eyebrow">In progress</p>
            <h2>Core capabilities are being shaped into a focused platform.</h2>
            <div className="tag-cloud">
              {roadmap.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow">Assetopia Inc</p>
          <h2>Build better investment conversations from better portfolio intelligence.</h2>
        </div>
        <a className="button primary" href="mailto:hello@assetopiainc.com">
          Contact Assetopia
        </a>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <span>Assetopia Inc</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <span>
          Information on this site is for product and company context only and
          is not individualized financial advice.
        </span>
      </footer>
    </main>
  );
}
