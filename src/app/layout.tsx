import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { OrganicAtmosphere } from "@/components/OrganicAtmosphere";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/resume";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} | ${profile.heroTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.seoDescription,
  keywords: [
    "Akash Shankar",
    "Full-Stack Engineer",
    "AI Engineer",
    "Software Engineer",
    "React",
    "Angular",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "LangChain",
    "RAG",
    "Bengaluru",
    "Portfolio",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title,
    description: profile.seoDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.seoDescription,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5faf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1a17" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${fraunces.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col font-sans text-[var(--text)]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="focus-organic sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-white"
            style={{ borderRadius: "1.25rem 1.75rem" }}
          >
            Skip to content
          </a>
          <OrganicAtmosphere />
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
