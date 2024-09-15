import type { Metadata } from 'next';
import { Noto_Sans as FontSans } from 'next/font/google';
import Head from 'next/head';

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
        <AppProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
