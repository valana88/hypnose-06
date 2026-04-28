import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';

import StyledComponentsRegistry from '@/lib/registry';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { site } from '@/data/site';

// Polices chargées via next/font (optimisées, pas de FOUT)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hypnose-06-guylaine-demarle.fr'),
  title: {
    default: `${site.name} — Hypnothérapeute à Cannes`,
    template: `%s · ${site.shortName}`,
  },
  description:
    'Guylaine Demarle, infirmière diplômée d\'État et maître praticienne en hypnose ericksonienne à Cannes (06). Séances au cabinet ou à domicile : arrêt du tabac, gestion du stress, sommeil, phobies, confiance en soi.',
  keywords: [
    'hypnose Cannes',
    'hypnothérapeute 06',
    'hypnose ericksonienne',
    'arrêt tabac Cannes',
    'gestion du stress',
    'Guylaine Demarle',
  ],
  authors: [{ name: 'Guylaine Demarle' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://hypnose-06-guylaine-demarle.fr',
    siteName: site.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
