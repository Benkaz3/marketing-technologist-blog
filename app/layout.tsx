import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nước Mắm OG: The Marketing Technologist's Playbook",
    template: "%s | Nước Mắm OG: The Marketing Technologist's Playbook",
  },
  description:
    'Meet Dũng—a seasoned marketer turned tech enthusiast, blending branding, consumer psychology, and creative strategy with a dash of computer science. Get ready for data-driven insights and cutting-edge digital marketing solutions that are shaking things up in Vietnam’s fast-paced market. Stay tuned for fresh perspectives on how tech is rewriting the marketing playbook.',
  openGraph: {
    title: "Nước Mắm OG: The Marketing Technologist's Playbook",
    description:
      'Meet Dũng—a seasoned marketer turned tech enthusiast, blending branding, consumer psychology, and creative strategy with a dash of computer science. Get ready for data-driven insights and cutting-edge digital marketing solutions that are shaking things up in Vietnam’s fast-paced market. Stay tuned for fresh perspectives on how tech is rewriting the marketing playbook.',
    url: baseUrl,
    siteName: "Nước Mắm OG: The Marketing Technologist's Playbook",
    locale: 'en_US',
    type: 'website',
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
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
