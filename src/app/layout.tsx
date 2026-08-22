import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://syedsaimatasneem-syednizamuddin-wedding.vercel.app'),
  title: 'Syed Saima Tasneem & Syed Nizamuddin | Wedding Invitation',
  description:
    'With the blessings of Almighty Allah, we cordially invite you to celebrate the Nikah & Valima ceremony of Syed Saima Tasneem and Syed Nizamuddin.',
  authors: [{ name: 'Awesome Creation' }],
  icons: {
    icon: '/fav.png',
    apple: '/fav.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Syed Saima Tasneem & Syed Nizamuddin Wedding',
    title: 'Syed Saima Tasneem & Syed Nizamuddin | Wedding Invitation',
    description:
      'With joy in our hearts, we cordially invite you to celebrate our Nikah & Valima.',
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Syed Saima Tasneem & Syed Nizamuddin Wedding Invitation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Saima Tasneem & Syed Nizamuddin | Wedding Invitation',
    description:
      'With joy in our hearts, we cordially invite you to celebrate our Nikah & Valima.',
    images: ['/og-cover.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#e5a0ae',
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
