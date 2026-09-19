import type { Metadata } from "next";
import { PageIntro, ContactBand, SiteFooter } from "../components/SiteParts";

export const metadata: Metadata = { title: "Approach | Assetopia Inc", description: "How Assetopia approaches financial services, data, and AI projects from discovery through delivery and review." };
const steps = [
  { title: "Understand", description: "Agree the business objective, users, constraints, and decisions the project should support.", output: "A focused brief with scope, priorities, and success criteria." },
  { title: "Design", description: "Map the data, workflows, system connections, and review points needed to support the work.", output: "A proposed design and an ordered delivery plan." },
  { title: "Build & test", description: "Develop the agreed prototype or implementation in manageable steps, using feedback to test assumptions.", output: "A working result evaluated against the agreed requirements." },
  { title: "Review & hand over", description: "Assess the result, document how it operates, and identify ownership and further improvements.", output: "Documentation, operating responsibilities, and next steps." }
];
export default function ApproachPage() {
  return <><main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="From brief to delivery" title="Our approach"><p>Financial context guides the design. Reliable data supports the analysis. People remain responsible for the decisions.</p></PageIntro>
    <section className="section"><div className="container">
      <div className="section-heading"><p className="eyebrow">The process</p><h2>A shared view of what comes next.</h2><p>The scope and deliverables are agreed for each engagement. These four stages provide a practical starting point.</p></div>
      <div className="process-list">{steps.map((step, i) => <article key={step.title}>
        <span className="step-number">0{i + 1}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><div className="step-output"><h4>What you receive</h4><p>{step.output}</p></div>
      </article>)}</div>
    </div></section>
    <section className="soft-band"><div className="container"><div className="section-heading"><p className="eyebrow">Principles</p><h2>Care in the details.</h2></div>
      <div className="principle-grid"><article><h3>Traceable data</h3><p>Understand where information comes from, how it changes, and where its limitations matter.</p></article><article><h3>Purposeful AI</h3><p>Choose AI where it supports a defined task, with clear ways to evaluate the result.</p></article><article><h3>Human oversight</h3><p>Make review points, responsibilities, and exceptions part of the workflow.</p></article></div>
    </div></section>
    <ContactBand title="Bring us the problem." text="We can help shape the brief and the next steps." />
  </main><SiteFooter /></>;
}
