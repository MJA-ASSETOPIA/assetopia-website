import type { Metadata } from "next";
import { PageIntro, ContactBand, SiteFooter } from "../components/SiteParts";

export const metadata: Metadata = { title: "Services | Assetopia Inc", description: "Financial services consulting, data architecture, AI workflow design, and product delivery." };

const services = [
  { title: "Financial services strategy", problem: "A business or operating challenge needs a clear plan.",
    work: "Review the current workflow, clarify priorities, and map the changes needed across people, systems, and data.",
    outputs: ["Current-state assessment", "Target operating model", "Prioritized delivery roadmap"] },
  { title: "Data architecture & analytics", problem: "Fragmented data makes reporting and analysis difficult.",
    work: "Define how holdings, securities, prices, and currencies fit together, with clear ownership and quality checks.",
    outputs: ["Data model and source mapping", "Data quality recommendations", "Reporting and analytics requirements"] },
  { title: "AI workflow design", problem: "There is interest in AI, but the right use cases and controls are unclear.",
    work: "Identify useful applications in research, review, and operations. Define the information, evaluation, and human oversight each requires.",
    outputs: ["Prioritized use cases", "Prototype and evaluation plan", "Review and governance requirements"] },
  { title: "Product & platform delivery", problem: "A financial product idea needs a practical route to implementation.",
    work: "Translate the business need into user journeys, product requirements, and a delivery plan that can be tested and refined.",
    outputs: ["Product scope and user journeys", "Prototype or MVP plan", "Implementation priorities"] }
];

export default function ServicesPage() {
  return <><main id="main-content" tabIndex={-1}>
    <PageIntro eyebrow="Services" title="Financial services, data & AI consulting"><p>Specialist support for investment teams, wealth businesses, fintech builders, and financial operators, from assessment through design and delivery.</p></PageIntro>
    <section className="section"><div className="container">
      <div className="section-heading"><p className="eyebrow">Where we can help</p><h2>Clear problems. Practical deliverables.</h2><p>Engagements are shaped around your needs. Typical work and outputs include:</p></div>
      <div className="service-list">{services.map((service, i) => <article className="service-row" key={service.title}>
        <div><span className="item-number">0{i + 1}</span><h3>{service.title}</h3><p className="service-problem">{service.problem}</p></div>
        <div><p>{service.work}</p><h4>Typical deliverables</h4><ul>{service.outputs.map(output => <li key={output}>{output}</li>)}</ul></div>
      </article>)}</div>
    </div></section>
    <section className="soft-band"><div className="container split-layout"><div><p className="eyebrow">Working together</p><h2>Start with a focused brief.</h2></div><div><p>Bring a specific challenge, an existing initiative, or an early product idea. We can help define the scope, identify dependencies, and agree what a useful outcome looks like.</p><p>Work can span an assessment, an advisory engagement, or support through design and delivery.</p></div></div></section>
    <ContactBand />
  </main><SiteFooter /></>;
}
