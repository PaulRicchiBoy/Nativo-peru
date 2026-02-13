import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nativo Expeditions - Expediciones Auténticas y de Conciencia en Perú',
  description: 'Conecta con la esencia de Perú a través de expediciones conscientes y auténticas. Trekking cultural, ecoturismo, experiencias ancestrales y viajes sostenibles con comunidades locales.',
  keywords: 'expediciones peru, turismo sostenible, ecoturismo, trekking cultural, comunidades nativas, viajes conscientes, peru auténtico, nativo expeditions',
  openGraph: {
    title: 'Nativo Expeditions - Expediciones Auténticas y de Conciencia',
    description: 'Experiencias profundas que conectan viajeros con la cultura, naturaleza y comunidades del Perú',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nativo Expeditions - Expediciones Auténticas y de Conciencia',
    description: 'Experiencias profundas que conectan viajeros con la cultura, naturaleza y comunidades del Perú',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}