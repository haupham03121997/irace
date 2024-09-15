import type { Metadata } from 'next';
import { Noto_Sans as FontSans } from 'next/font/google';
import Head from 'next/head';
import NextTopLoader from 'nextjs-toploader';

import { ErrorBoundary } from '@/components/error-boundary';
import { SEO_TAG } from '@/constants/seo';
import AppProvider from '@/libs/app-provider';
import { cn } from '@/libs/utils';

import { envConfig } from '../../config';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: SEO_TAG.TITLE,
  description: SEO_TAG.DESCRIPTION,
};

console.log(envConfig);
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)} suppressHydrationWarning>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <AppProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
