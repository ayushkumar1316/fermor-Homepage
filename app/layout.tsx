import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Fermor — Your money, finally making sense.',
  description: 'Invest, track and plan in one place. No jargon. Just clarity. India\'s smartest financial engine for retail investors.',
  keywords: 'investment app, financial planning, stock market, mutual funds, SIP calculator, wealth management, India',
  authors: [{ name: 'Fermor' }],
  creator: 'Fermor',
  publisher: 'Fermor',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    title: 'Fermor — Your money, finally making sense.',
    description: 'Invest, track and plan in one place. No jargon. Just clarity.',
    url: 'https://fermor-homepage.vercel.app',
    siteName: 'Fermor',
    images: [
      {
        url: 'https://fermor-homepage.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fermor - Financial app for Indian investors',
        type: 'image/png',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fermor — Your money, finally making sense.',
    description: 'Invest, track and plan in one place. No jargon. Just clarity.',
    creator: '@fermor',
    images: ['https://fermor-homepage.vercel.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fermor-homepage.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6C3AE8" />
      </head>
      <body className="antialiased">
        {children}
        {/* PRIMARY SCHEMA: ORGANIZATION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fermor',
              url: 'https://fermor-homepage.vercel.app',
              description: 'Financial app for Indian retail investors - invest, track and plan in one place',
              logo: 'https://fermor-homepage.vercel.app/logo.png',
              sameAs: [
                'https://twitter.com/fermor',
                'https://instagram.com/fermor',
                'https://linkedin.com/company/fermor',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                email: 'support@fermor.app',
              },
            }),
          }}
        />

        {/* SECONDARY SCHEMA: WEB APPLICATION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Fermor',
              description: 'Invest, track and plan in one place. No jargon. Just clarity.',
              url: 'https://fermor-homepage.vercel.app',
              applicationCategory: 'FinanceApplication',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '50000',
                bestRating: '5',
                worstRating: '1',
              },
              operatingSystem: 'iOS, Android, Web',
            }),
          }}
        />

        {/* TERTIARY SCHEMA: BREADCRUMB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://fermor-homepage.vercel.app',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Products',
                  item: 'https://fermor-homepage.vercel.app#clarity',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Market Insights',
                  item: 'https://fermor-homepage.vercel.app#forecast',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
