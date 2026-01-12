import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { Poppins } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Crowhub | Build, Showcase, and Connect',
  description:
    'The professional network for builders. Showcase your projects like a pro, and use our smart matching to find your perfect co-founder, developer, or designer today.',
  keywords: [
    'Professional Network',
    'Project Showcase',
    'Co-founder Finder',
    'Tech Hiring',
    'Developer Portfolio',
    'Crowhub',
  ],
  openGraph: {
    title: 'Crowhub - Where Projects Meet Talent',
    description:
      "More than just a resume. Showcase your code and projects, and get matched with the exact people you need—whether it's a Co-founder, PM, or Designer.",
    siteName: 'Crowhub',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crowhub | The Next-Gen Professional Network',
    description:
      'Find your team based on real skills. Showcase projects, find co-founders, and hire talent on Crowhub.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${poppins.variable} min-h-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
