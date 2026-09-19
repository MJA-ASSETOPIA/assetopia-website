import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SiteFooter } from "./components/SiteParts";

export default function Home() {
  return <>
    <main id="main-content" className="home-page" tabIndex={-1}>
      <section className="home-screen home-hero" aria-labelledby="home-title">
        <div className="container">
          <p className="eyebrow">Financial services / Data / AI</p>
          <h1 id="home-title">Assetopia Inc</h1>
          <p className="home-lead">Financial expertise.<br />Practical technology.</p>
          <p className="hero-description">We help financial services teams solve data and technology challenges, and build AI platforms for better portfolio decisions.</p>
          <div className="actions">
            <Link className="button primary" href="/services">Explore consulting <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className="button secondary" href="/platforms">Discover Assetopia App <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
        </div>
        <a className="section-next" href="#offerings" aria-label="Explore our services and platforms"><ArrowDown size={20} /></a>
      </section>
      <section id="offerings" className="home-screen offerings-screen" aria-labelledby="offerings-title">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">What we do</p><h2 id="offerings-title">Consulting expertise.<br />Financial platforms.</h2></div>
          <div className="offering-grid">
            <article className="offering"><span className="item-number">01 / Consulting</span><h3>Move your next project forward.</h3>
              <p>Specialist support across financial services strategy, data architecture, AI workflows, and product delivery.</p>
              <ul><li>Assess systems and data quality</li><li>Define practical AI use cases</li><li>Plan and deliver financial products</li></ul>
              <Link className="text-link" href="/services">Consulting services <ArrowUpRight size={18} /></Link></article>
            <article className="offering"><span className="item-number">02 / Platforms</span><h3>Make more of your portfolio data.</h3>
              <p>Assetopia App brings our financial and technical thinking into a portfolio intelligence platform under development.</p>
              <ul><li>Bring holdings and accounts together</li><li>Understand currencies and fund exposure</li><li>Review insights with financial context</li></ul>
              <Link className="text-link" href="/platforms">Explore Assetopia App <ArrowUpRight size={18} /></Link></article>
          </div>
        </div>
      </section>
      <section className="home-screen home-about" aria-labelledby="about-title">
        <div className="container about-inner">
          <div className="section-heading"><p className="eyebrow">How we work</p><h2 id="about-title">Start with the financial problem.</h2>
            <p>Understand the decisions people need to make. Establish the data they can rely on. Build the tools that help them act.</p></div>
          <div className="principle-grid">
            <article><span className="item-number">01</span><h3>Understand the work</h3><p>Business objectives, users, and operating constraints shape the brief.</p></article>
            <article><span className="item-number">02</span><h3>Make the data useful</h3><p>Clear definitions and traceable sources support sound analysis.</p></article>
            <article><span className="item-number">03</span><h3>Keep people accountable</h3><p>AI supports decisions with clear review points and human oversight.</p></article>
          </div>
          <div className="actions"><Link className="button primary" href="/contact">Start a conversation <ArrowUpRight size={18} /></Link><Link className="text-link" href="/approach">Our approach <ArrowUpRight size={18} /></Link></div>
        </div>
        <SiteFooter />
      </section>
    </main>
  </>;
}
