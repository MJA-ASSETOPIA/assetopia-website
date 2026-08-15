import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assetopia Inc | Intelligent portfolio insight",
  description:
    "Assetopia helps investors understand portfolio risk, diversification, valuation, and opportunity with clear financial intelligence.",
  metadataBase: new URL("https://assetopiainc.com"),
  openGraph: {
    title: "Assetopia Inc",
    description:
      "Clear portfolio intelligence for investors who want sharper decisions.",
    url: "https://assetopiainc.com",
    siteName: "Assetopia Inc",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Assetopia Inc",
    description:
      "Clear portfolio intelligence for investors who want sharper decisions."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
