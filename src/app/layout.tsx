import type { Metadata } from 'next';
import './globals.css';
import { getMarkdownContent } from '@/lib/markdown';

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = getMarkdownContent('profile/index.md');
  return {
    title: {
      default: frontmatter.seoTitle || 'Kayhan Ayas | Art Direktör & Tasarımcı',
      template: '%s | Kayhan Ayas',
    },
    description: frontmatter.seoDescription,
    keywords: frontmatter.seoKeywords,
    authors: [{ name: 'Kayhan Ayas', url: 'https://kayhanayas.com' }],
    creator: 'Kayhan Ayas',
    metadataBase: new URL('https://kayhanayas.com'),
    alternates: { canonical: 'https://kayhanayas.com' },
    openGraph: {
      type: 'website',
      locale: 'tr_TR',
      url: 'https://kayhanayas.com',
      siteName: 'Kayhan Ayas',
      title: frontmatter.seoTitle,
      description: frontmatter.seoDescription,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Kayhan Ayas Portfolio' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.seoTitle,
      description: frontmatter.seoDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
    verification: {
      google: 'YOUR_GOOGLE_SEARCH_CONSOLE_ID', // → Google Search Console'dan al
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Kayhan Ayas',
              jobTitle: 'Art Direktör, 3D Tasarımcı, Web Geliştirici',
              url: 'https://kayhanayas.com',
              sameAs: [],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sakarya',
                addressCountry: 'TR',
              },
              knowsAbout: [
                'Web Tasarımı',
                '3D Tasarım',
                'İç Mekan Tasarımı',
                'Blender',
                'Next.js',
                'Art Direktörlük',
              ],
              areaServed: ['Sakarya', 'İstanbul', 'Türkiye'],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
