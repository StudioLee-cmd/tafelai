import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Caveat, Outfit } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteDetails } from '@/data/siteDetails';

import { Analytics } from "@vercel/analytics/next"

import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['700'], variable: '--font-caveat' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${sourceSans.className} ${outfit.variable} ${caveat.variable} antialiased`}
      >
        <ThemeProvider>
          {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <Analytics />
        </ThemeProvider>
          {/* De cookie-deur. Hangt aan `chatWidgetId` en NIET hardcoded zoals bij de zusjes, omdat
              tafelai nog geen chat heeft: de component toont z'n banner zodra 'ie mount (de
              useEffect kijkt niet naar widgetId), dus een lege prop zou hier een banner tonen die
              belooft dat we cookies zetten voor een chatfunctie die er niet is. Chat uit → geen
              cookies → geen banner. Vul `chatWidgetId` in siteDetails en de deur staat er meteen,
              vóór de widget laadt. Zelfde vorm als de GoogleAnalytics-regel hierboven. */}
          {siteDetails.chatWidgetId && <CookieBanner widgetId={siteDetails.chatWidgetId} />}
      </body>
    </html>
  );
}
// cookie-banner v4
