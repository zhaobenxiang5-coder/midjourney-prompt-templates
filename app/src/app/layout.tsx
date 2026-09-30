import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "14,700+ Midjourney Prompt Templates - Free AI Visual Generator",
  description: "Browse 14,700+ curated Midjourney and Flux prompt templates. Copy high-converting e-commerce, realistic portraits, and cinematic aesthetics instantly.",
  keywords: ["midjourney prompt templates", "flux prompts free", "ai image prompt library", "midjourney v6 prompts 2026"],
  openGraph: {
    title: "14,700+ Midjourney Prompt Templates - Free AI Visual Generator",
    description: "Browse 14,700+ curated Midjourney and Flux prompt templates.",
    url: "https://zhaobenxiang5-coder.github.io/midjourney-prompt-templates/",
    siteName: "PromptTemplateHub",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Midjourney Prompt Templates Hub",
        "url": "https://zhaobenxiang5-coder.github.io/midjourney-prompt-templates/",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "description": "Extensive searchable library of 14,700+ production-ready Midjourney prompt templates."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to use Midjourney prompt templates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose a visual style, click 'Copy Prompt', and paste directly into Midjourney Discord or your favorite AI generation tool."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
