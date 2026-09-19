import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

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
      "The homepage embeds a TradingView market ticker. When the ticker loads, your browser connects to TradingView and its service providers, which may receive technical information such as your IP address and browser details and may use cookies or similar technologies under their own policies. The ticker can be paused and hidden using its control. It does not load automatically when your browser indicates a preference for reduced motion.",
      "This website does not currently include a separate analytics integration. Any future analytics or additional cookie use will require an update to this policy."
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

export default function Page() {
  return <LegalPage title="Privacy Policy" sections={sections} contactText="For privacy questions or information requests," updated="September 19, 2026" />;
}
