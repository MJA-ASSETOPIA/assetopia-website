import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assetopia Inc | Financial services, data, and AI consulting",
  description:
    "Assetopia Inc provides specialist financial services, data, and AI consulting while building new AI-based financial services platforms.",
  metadataBase: new URL("https://assetopiainc.com"),
  openGraph: {
    title: "Assetopia Inc",
    description:
      "Financial services, data, and AI consulting, plus new AI-based financial platforms.",
    url: "https://assetopiainc.com",
    siteName: "Assetopia Inc",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Assetopia Inc",
    description:
      "Financial services, data, and AI consulting, plus new AI-based financial platforms."
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
