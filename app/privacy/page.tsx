import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Assetopia Inc",
  description:
    "Privacy Policy for Assetopia Inc, including how we collect, use, protect, and handle personal information."
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "The public website currently collects limited information. If you contact us by email, we may receive your name, email address, company details, and the content of your message.",
      "If Assetopia provides consulting services or later offers account-based product access, we may collect engagement, project, account, portfolio, holdings, broker connection, transaction, pricing, analytics, and support information needed to provide those services."
    ]
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, operate and improve Assetopia, maintain security, understand product interest, provide support, and comply with legal obligations.",
      "We do not use public website contact information to provide individualized financial, investment, tax, or legal advice."
    ]
  },
  {
    title: "Cookies And Analytics",
    body: [
      "The current website is designed as a simple informational site. If analytics, cookies, or similar technologies are added later, this policy should be updated to explain what is collected, why it is used, and how visitors can control it."
    ]
  },
  {
    title: "Sharing Information",
    body: [
      "We may share information with service providers who help operate the website, host the product, manage communications, provide analytics, or support security and compliance.",
      "We do not sell personal information collected through the public website. If that changes, this policy should be updated before the change takes effect."
    ]
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No internet service can be guaranteed to be completely secure."
    ]
  },
  {
    title: "Data Retention",
    body: [
      "We keep information for as long as needed for the purposes described in this policy, unless a longer retention period is required or permitted by law."
    ]
  },
  {
    title: "Your Choices And Rights",
    body: [
      "Depending on where you live, you may have rights to request access, correction, deletion, portability, or limits on certain uses of personal information.",
      "California residents may have additional rights under California privacy laws, including rights to know, delete, correct, opt out of sale or sharing where applicable, limit certain sensitive personal information uses where applicable, and not be discriminated against for exercising privacy rights."
    ]
  },
  {
    title: "Children",
    body: [
      "Assetopia is not directed to children under 13, and we do not knowingly collect personal information from children under 13."
    ]
  },
  {
    title: "Changes To This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date."
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="Assetopia Inc home">
          <span className="brand-mark">A</span>
          <span>Assetopia Inc</span>
        </Link>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>
          Last updated: August 17, 2026. This starter policy should be reviewed
          by qualified legal counsel before launch, before collecting production
          customer data, or before beginning regulated client engagements.
        </p>
      </header>

      <section className="legal-content">
        {sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}

        <article>
          <h2>Contact</h2>
          <p>
            To ask a privacy question or submit a request, contact Assetopia at{" "}
            <a href="mailto:hello@assetopiainc.com">hello@assetopiainc.com</a>.
          </p>
        </article>
      </section>
    </main>
  );
}
