const pillars = [
  {
    title: "Specialist consulting",
    body: "Practical advisory for financial services firms, fintech builders, and investment teams working through data, analytics, AI adoption, and operating model change."
  },
  {
    title: "Data and intelligence infrastructure",
    body: "Design and delivery support for cleaner financial data models, reporting layers, decision workflows, and analytics foundations that teams can actually use."
  },
  {
    title: "AI-based financial platforms",
    body: "Building focused platforms that combine financial domain expertise, governed AI workflows, portfolio intelligence, and modern product experience."
  }
];

const metrics = [
  { label: "Services", value: "Advisory" },
  { label: "Data layer", value: "Trusted" },
  { label: "Platforms", value: "AI-led" }
];

const workflows = [
  {
    kicker: "01",
    title: "Clarify the problem",
    body: "Map the business objective, data reality, user workflow, governance needs, and commercial constraints before reaching for technology."
  },
  {
    kicker: "02",
    title: "Design the operating layer",
    body: "Shape the data model, analytics logic, AI interaction pattern, controls, and product experience into something teams can trust."
  },
  {
    kicker: "03",
    title: "Build and iterate",
    body: "Move from strategy into prototypes, platform components, automation workflows, and launch-ready services with tight feedback loops."
  }
];

const audiences = [
  "Financial services firms modernizing analytics and client experience",
  "Fintech founders turning domain insight into product",
  "Investment teams improving data, reporting, and decision workflows",
  "Private wealth, family office, and advisory teams exploring AI responsibly"
];

const roadmap = [
  "Financial data architecture",
  "AI workflow design",
  "Portfolio intelligence platforms",
  "Analytics and reporting products",
  "Governed automation",
  "Specialist financial services consulting"
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
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#insight">Insight</a>
            <a href="/privacy">Privacy</a>
            <a href="mailto:hello@assetopiainc.com">Contact</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Financial services, data, and AI</p>
            <h1>Assetopia Inc</h1>
            <p className="hero-text">
              A financial services, data, and AI consulting company helping
              clients solve complex investment and operating problems while
              building new AI-based financial platforms.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="mailto:hello@assetopiainc.com">
                Start a conversation
              </a>
              <a className="button secondary" href="#services">
                Explore services
              </a>
            </div>
          </div>

          <div className="product-visual" aria-label="Assetopia company capability preview">
            <div className="visual-topline">
              <span>Assetopia Capability Map</span>
              <span>Company</span>
            </div>
            <div className="visual-value">AI + Finance</div>
            <div className="visual-subline">
              Consulting, financial data, and product platforms in one operating model
            </div>
            <div className="allocation-bars" aria-hidden="true">
              <span style={{ width: "42%" }} />
              <span style={{ width: "28%" }} />
              <span style={{ width: "18%" }} />
              <span style={{ width: "12%" }} />
            </div>
            <div className="visual-list">
              <div>
                <span>Consulting</span>
                <strong>Strategy to delivery</strong>
              </div>
              <div>
                <span>Data</span>
                <strong>Financial intelligence layer</strong>
              </div>
              <div>
                <span>Platforms</span>
                <strong>AI-native services</strong>
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

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What Assetopia does</p>
          <h2>Specialist consulting now, with new AI-based financial platforms being built alongside it.</h2>
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

      <section className="split-section" id="approach">
        <div className="section-heading sticky-heading">
          <p className="eyebrow">Approach</p>
          <h2>Domain expertise first, then data architecture, AI workflows, and product delivery.</h2>
          <p>
            Assetopia is built around the idea that financial AI only works when
            it is grounded in real operating context, trusted data, and clear
            human decision points.
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
          <h2>Financial AI should make complex work clearer, safer, and more useful.</h2>
        </div>
        <p>
          The company combines specialist financial services experience with
          modern data and AI engineering. That means helping clients improve
          today&apos;s workflows while also creating new platforms for portfolio
          intelligence, analytics, automation, and decision support.
        </p>
      </section>

      <section className="section compact-section">
        <div className="two-column">
          <article className="content-panel">
            <p className="eyebrow">Who it is for</p>
            <h2>For teams turning financial expertise into better systems.</h2>
            <ul className="check-list">
              {audiences.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </article>
          <article className="content-panel">
            <p className="eyebrow">Capability areas</p>
            <h2>Consulting and platform work share the same foundation.</h2>
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
          <h2>Bring financial services expertise, data, and AI into sharper focus.</h2>
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
          Information on this site is for company, consulting, and product
          context only and is not individualized financial advice.
        </span>
      </footer>
    </main>
  );
}
