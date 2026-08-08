import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://enterprise.accredian.com'),
  title: {
    default: 'Accredian Enterprise | Corporate AI, Data Science & Tech Upskilling',
    template: '%s | Accredian Enterprise',
  },
  description:
    'Transform your workforce with bespoke corporate upskilling in Generative AI, Data Science, MLOps, Product Leadership, and Executive Strategy. Co-certified with premier academies including E&ICT Academy, IIT Guwahati.',
  keywords: [
    'Accredian Enterprise',
    'Corporate Training',
    'AI Upskilling',
    'Generative AI Training',
    'Data Science Enterprise',
    'CAT Framework',
    'Executive Tech Leadership',
    'IIT Guwahati Certification',
    'MLOps Upskilling'
  ],
  authors: [{ name: 'Accredian Enterprise' }],
  creator: 'Accredian Enterprise',
  publisher: 'Accredian Enterprise',
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
  openGraph: {
    title: 'Accredian Enterprise | Corporate AI & Data Upskilling Solutions',
    description: 'Transform your workforce with bespoke corporate upskilling programs co-branded with elite academic institutions like IIT Guwahati & XLRI.',
    url: 'https://enterprise.accredian.com',
    siteName: 'Accredian Enterprise',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://enterprise.accredian.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Accredian Enterprise Corporate Upskilling Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accredian Enterprise | Corporate AI & Data Upskilling',
    description: 'Bespoke enterprise training in GenAI, Data Science, and Executive Leadership.',
    creator: '@accredian',
  },
  alternates: {
    canonical: 'https://enterprise.accredian.com',
  },
};

// JSON-LD Structured Schema
const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Accredian Enterprise',
  url: 'https://enterprise.accredian.com',
  logo: 'https://enterprise.accredian.com/logo.png',
  description: 'Premier workforce upskilling partner for Fortune 500 tech companies and enterprises.',
  sameAs: [
    'https://www.linkedin.com/company/accredian',
    'https://twitter.com/accredian'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-555-2227',
    contactType: 'sales',
    areaServed: 'Worldwide',
    availableLanguage: 'English'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-[#168CFF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
