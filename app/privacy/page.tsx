import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Assetopia Inc",
  description:
    "How Assetopia Inc handles website information and Assetopia.AI account, uploaded portfolio, transaction, and AI feature data."
};

const sections = [
  {
    title: "Scope Of This Policy",
    body: [
      "This policy describes how Assetopia Inc handles personal information in connection with this website, our consulting services, and the Assetopia.AI application, including portfolio uploads and related analysis. The information processed depends on the services and features you use.",
      "This policy includes information for users in the European Economic Area (EEA), including the European Union, and the United Kingdom. References to European data protection rights below cover the EU General Data Protection Regulation (EU GDPR) and the UK GDPR, as applicable."
    ]
  },
  {
    title: "Information We Collect",
    body: [
      "The public website currently collects limited information. If you contact us by email, we may receive your name, email address, company details, and the content of your message.",
      "When you use Assetopia.AI, we may process account and profile details, authentication and session information, preferences, support communications, and technical information needed to operate and secure the service. Consulting engagements may also involve project and business information you provide."
    ]
  },
  {
    title: "Uploaded Portfolios And Financial Information",
    body: [
      "When you upload a portfolio, transaction file, or other supported financial document, we receive the file and the information it contains. This can include account names or identifiers, broker details, security names and identifiers, holdings, quantities, purchase dates, cost basis, transactions, cash balances, prices, currencies, and valuations. Files may also contain personal information included in their contents or metadata.",
      "We process uploaded information to interpret and validate records, identify securities, organize accounts and holdings, and provide portfolio analysis. Saved information can include structured portfolio records, transaction history, historical snapshots, calculated metrics, and generated insights. Information may also be retained in diagnostic records used to investigate import or processing problems.",
      "Provide only information needed for the feature you are using. Remove unrelated personal information where practical, and do not include passwords, access tokens, or other authentication secrets in uploaded files. If you upload information about another person or organization, you must have authority to provide it to Assetopia."
    ]
  },
  {
    title: "How We Use Information",
    body: [
      "We use information to respond to inquiries, operate and improve Assetopia, maintain security, understand product interest, provide support, and comply with legal obligations.",
      "For Assetopia.AI, this includes saving and retrieving portfolios, reconciling imported records, obtaining relevant security and market information, calculating valuations and exposure, presenting historical analysis, and providing the insights and review features you use. Security identifiers or similar lookup information may be sent to market-data services to obtain information relevant to your holdings.",
      "We do not use public website contact information to provide individualized financial, investment, tax, or legal advice."
    ]
  },
  {
    title: "AI Features And External Processing",
    body: [
      "Assetopia.AI uses external AI services for supported features. Depending on the feature and configured provider, your questions, relevant conversation history, and portfolio context may be sent to an AI provider to generate a response. That context can include holdings, portfolio summaries, financial metrics, and previously generated insights.",
      "The information included depends on the feature and the context needed for the request. AI processing is not necessarily performed entirely within Assetopia's own systems. Provider retention and handling are governed by the applicable service arrangements and configuration; this policy does not promise that all AI processing has zero retention.",
      "Avoid including unrelated sensitive information in AI questions. Contact us before submitting information subject to restrictions that require particular processing, storage, or confidentiality arrangements."
    ]
  },
  {
    title: "Cookies And Analytics",
    body: [
      "This public website does not currently include a separate analytics integration. The Assetopia.AI application may use cookies or similar session technologies for authentication, security, and preferences. Browser controls can restrict these technologies, but doing so may prevent sign-in or other application features from working."
    ]
  },
  {
    title: "Sharing Information",
    body: [
      "We may share information with service providers who help operate the website, host the product, manage communications, provide analytics, or support security and compliance.",
      "For the application, these providers can include hosting, database, authentication, market-data, and AI processing services. They may receive uploaded or derived information relevant to the services they perform. Information may also be disclosed where required by law or to address fraud, security incidents, or legal claims.",
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
      "We keep information for as long as needed for the purposes described in this policy, unless a longer retention period is required or permitted by law. This applies to uploaded information, saved portfolios and transactions, historical records, generated analysis, support communications, and operational records.",
      "Removing a portfolio from the application should not be assumed to immediately remove every related copy from backups, diagnostic records, historical data, or service-provider systems. To request deletion of your account or associated portfolio information, contact us and describe the scope of your request. We may need to verify your identity and explain any information that must be retained for legal, security, or operational reasons."
    ]
  },
  {
    title: "Your Choices And Rights",
    body: [
      "Depending on where you live, you may have rights to request access, correction, deletion, portability, or limits on certain uses of personal information.",
      "These requests can include personal information contained in uploaded portfolios, transactions, and associated account records. Use the contact page to request access, correction, an available copy of your data, or deletion. Do not send your full portfolio or account credentials in an initial privacy request; we can establish the information needed to identify and process the request.",
      "California residents may have additional rights under California privacy laws, including rights to know, delete, correct, opt out of sale or sharing where applicable, limit certain sensitive personal information uses where applicable, and not be discriminated against for exercising privacy rights."
    ]
  },
  {
    title: "EEA And UK Privacy Rights",
    body: [
      "Where EU GDPR or UK GDPR applies to our processing of your personal information, you have rights to request access to your information, correction of inaccurate or incomplete information, erasure, and restriction of processing, subject to the conditions and exceptions in the applicable law. These rights also apply to personal information in uploaded portfolios, transaction records, and associated analysis.",
      "Where processing is based on consent or a contract and carried out by automated means, you may request portability of the personal information you provided, in a structured, commonly used, machine-readable format, and transmission to another controller where technically feasible.",
      "Where processing relies on legitimate interests, you may object on grounds relating to your particular situation. You may object to processing for direct marketing at any time, including related profiling. Where we rely on consent, you may withdraw it at any time without affecting the lawfulness of processing before withdrawal.",
      "You may also have rights and safeguards concerning decisions based solely on automated processing that have legal or similarly significant effects, including human intervention and the ability to contest a decision, where applicable under EU or UK law.",
      "To exercise your rights, contact hello@assetopiainc.com or use our contact page. Requests are normally free of charge. We may ask for information reasonably needed to verify your identity. Applicable law generally requires a response without undue delay and within one month, with permitted extensions or adjustments in certain circumstances. If an extension or refusal applies, we will explain the reasons and available complaint options."
    ]
  },
  {
    title: "Privacy Complaints",
    body: [
      "You can contact hello@assetopiainc.com with concerns about our handling of your personal information. This does not limit your right to complain to a data protection authority or seek a judicial remedy.",
      "In the EEA, you may lodge a complaint with a competent supervisory authority, in particular in the country of your habitual residence, place of work, or the alleged infringement. The European Data Protection Board lists national supervisory authorities on its website at edpb.europa.eu. In the United Kingdom, you may complain to the Information Commissioner's Office (ICO) at ico.org.uk."
    ]
  },
  {
    title: "Children",
    body: [
      "Assetopia's services and applications, including Assetopia.AI, are intended only for adults aged 18 or over. We do not offer services to children or knowingly collect their personal information. If you believe a child has provided personal information to us, please contact hello@assetopiainc.com so we can investigate and take appropriate steps to delete it."
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
  return <LegalPage title="Privacy Policy" sections={sections} contactText="For privacy questions or information requests," updated="September 25, 2026" />;
}
