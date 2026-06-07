import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cortex Signals | Neurotechnology Intelligence",
  description:
    "Cortex Signals is an independent intelligence brief focused on neurotechnology, neurogenetics, neuromodulation, BCI, neurodiagnostics, and clinically relevant brain-health tools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id="beehiiv-attribution"
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
