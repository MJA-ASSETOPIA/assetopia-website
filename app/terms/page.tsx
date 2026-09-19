import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | Assetopia Inc",
  description:
    "Terms of Service for Assetopia Inc, including acceptable use, disclaimers, and website terms."
};

const sections = [
  {
    title: "Acceptance Of Terms",
    body: [
      "These Terms of Service govern your access to and use of the Assetopia Inc website and any related public content. By using the website, you agree to these terms."
    ]
  },
  {
    title: "Informational Website",
    body: [
      "The website provides company, consulting, and product information. It does not create an advisory, fiduciary, broker, client, or professional relationship between you and Assetopia Inc."
    ]
  },
  {
    title: "No Financial Advice",
    body: [
      "Content on this website is for informational purposes only. It is not individualized financial, investment, tax, accounting, legal, brokerage, or trading advice.",
      "You are responsible for your own financial decisions and should consult qualified professionals before making investment or financial decisions."
    ]
  },
  {
    title: "Product Availability",
    body: [
      "Service descriptions, product descriptions, features, roadmap items, screenshots, examples, and metrics may describe current work, planned capabilities, or illustrative concepts. They do not guarantee that any service or feature will be available at a particular time or in a particular form."
    ]
  },
  {
    title: "Acceptable Use",
    body: [
      "You may not misuse the website, interfere with its operation, attempt unauthorized access, scrape or copy content at scale, introduce malicious code, or use the website in violation of law."
    ]
  },
  {
    title: "Intellectual Property",
    body: [
      "The website, brand elements, copy, design, and related materials are owned by Assetopia Inc or its licensors. You may not copy, modify, distribute, or create derivative works from them except as permitted by law or with written permission."
    ]
  },
  {
    title: "Third-Party Services",
    body: [
      "The website may link to or rely on third-party services such as hosting, analytics, communication, or product infrastructure. Assetopia Inc is not responsible for third-party websites or services."
    ]
  },
  {
    title: "Disclaimer Of Warranties",
    body: [
      "The website is provided on an as-is and as-available basis. Assetopia Inc disclaims warranties to the fullest extent permitted by law, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement."
    ]
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, Assetopia Inc will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for lost profits, revenues, data, goodwill, or business opportunities arising from use of the website."
    ]
  },
  {
    title: "Changes To These Terms",
    body: [
      "We may update these Terms of Service from time to time. The updated version will be posted on this page with a revised date."
    ]
  }
];

export default function Page() {
  return <LegalPage title="Terms of Service" sections={sections} contactText="For questions about these terms," />;
}
