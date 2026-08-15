const features = [
  {
    title: "Portfolio Clarity",
    body: "See what you own, where risk is concentrated, and how each holding contributes to the whole portfolio."
  },
  {
    title: "Global Perspective",
    body: "Track multi-currency and multi-region exposure with valuation context built for modern investors."
  },
  {
    title: "Actionable Signals",
    body: "Turn data into clear next steps across diversification, performance, pricing, and allocation decisions."
  }
];

const metrics = [
  { label: "Holdings tracked", value: "916" },
  { label: "Snapshot coverage", value: "90d" },
  { label: "Currency layers", value: "3" }
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
            <a href="#insight">Insight</a>
            <a href="mailto:hello@assetopiainc.com">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Private portfolio intelligence</p>
            <h1>Assetopia Inc</h1>
            <p className="hero-text">
              A clearer way to understand investment portfolios, risk,
              diversification, and opportunity across accounts, markets, and
              currencies.
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
            <div className="visual-subline">Risk, exposure, and valuation in one view</div>
            <div className="allocation-bars" aria-hidden="true">
              <span style={{ width: "42%" }} />
              <span style={{ width: "28%" }} />
              <span style={{ width: "18%" }} />
              <span style={{ width: "12%" }} />
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
          <h2>Built for investors who want the full picture.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
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
    </main>
  );
}
