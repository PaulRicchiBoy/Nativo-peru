import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amaiatours - Tours Auténticos en Perú',
  description: 'Descubre la magia de Perú con Amaiatours. Tours a Machu Picchu, Montaña de 7 Colores, Laguna Humantay y más. Experiencias auténticas con guías expertos.',
  keywords: 'tours peru, machu picchu, cusco, rainbow mountain, tours cusco, amaiatours',
  openGraph: {
    title: 'Amaiatours - Tours Auténticos en Perú',
    description: 'Descubre la magia de Perú con tours auténticos y experiencias únicas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amaiatours - Tours Auténticos en Perú',
    description: 'Descubre la magia de Perú con tours auténticos y experiencias únicas',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200',
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
