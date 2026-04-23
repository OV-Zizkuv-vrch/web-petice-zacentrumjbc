import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME, SITE_URL, OG_IMAGE } from './config';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Petice proti vedení tramvajové trati středem historického centra Jablonce nad Nisou. Přidejte svůj hlas a podpořte hledání lepší varianty.',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'cs_CZ',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="841523de-0afd-4cce-9e7e-8963be62e3f5" />
      </body>
    </html>
  );
}
