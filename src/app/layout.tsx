import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TrustLens | Spot Hidden Subscriptions & TOS Traps with AI",
  description: "An AI Chrome extension that instantly audits Terms of Service. Protect your money, your data, and your copyright before you click \"Accept\".",
  openGraph: {
    title: "TrustLens | Don’t sign away your rights blindly.",
    description: "Instantly spot auto-renewals, data brokers, and copyright traps in any Terms of Service using AI. Join the waitlist.",
    url: "https://gettrustlens.com",
    siteName: "TrustLens",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TrustLens AI Chrome Extension",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrustLens | Spot Hidden Subscriptions & TOS Traps with AI",
    description: "Instantly spot auto-renewals, data brokers, and copyright traps in any Terms of Service using AI.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased selection:bg-brand-100 selection:text-brand-900 bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
