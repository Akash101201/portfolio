import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profile } from "@/data/resume";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    "Software Engineer",
    "React",
    "Angular",
    "Next.js",
    "TypeScript",
    "Node.js",
    "GraphQL",
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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
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
