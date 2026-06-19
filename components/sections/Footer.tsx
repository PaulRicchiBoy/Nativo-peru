"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Facebook, Instagram, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const t = (es: string, en: string) => language === 'en' ? en : es;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const phoneNumber = "51972347781";

  return (
    <footer className={`pt-16 pb-8 transition-colors ${isDark ? 'bg-black border-t border-amber-900/30' : 'bg-stone-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo y Descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src="/heroNativo.png"
                  alt="Nativo Expedition Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="hidden sm:block">
                <span className="text-3xl font-bold tracking-tight text-white">NATIVO</span>
                <p className="text-xs font-bold uppercase tracking-[3px] text-amber-400 -mt-1">EXPEDITION</p>
              </div>
            </div>
            
            <p className="text-stone-400 leading-relaxed max-w-xs">
              {t(
                'Expediciones auténticas que conectan viajeros con la cultura andina, la selva y las montañas sagradas del Perú.',
                'Authentic expeditions connecting travelers with Andean culture, the jungle, and the sacred mountains of Peru.'
              )}
            </p>

            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://facebook.com/nativoexpeditions"
                target="_blank"
                className="bg-zinc-800 hover:bg-amber-600 p-3 rounded-xl transition-all"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://instagram.com/expeditionnativo"
                target="_blank"
                className="bg-zinc-800 hover:bg-amber-600 p-3 rounded-xl transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                className="bg-green-600 hover:bg-green-500 p-3 rounded-xl transition-all"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              {t('Explora', 'Explore')}
            </h3>
            <ul className="space-y-3 text-stone-400">
              <li>
                <button onClick={() => scrollToSection('tours')} className="hover:text-amber-400 transition-colors">
                  {t('Machu Picchu', 'Machu Picchu')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tours')} className="hover:text-amber-400 transition-colors">
                  {t('Cusco y Valle Sagrado', 'Cusco & Sacred Valley')}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('tours')} className="hover:text-amber-400 transition-colors">
                  {t('Trekking', 'Trekking')}
                </button>
              </li>
              <li>
                <Link href="/blog" className="hover:text-amber-400 transition-colors">
                  {t('Blog', 'Blog')}
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-amber-400 transition-colors">
                  {t('Nosotros', 'About Us')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold text-amber-400 mb-6">{t('Contacto', 'Contact')}</h3>
            <div className="space-y-5 text-stone-400">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`https://wa.me/${phoneNumber}`} className="hover:text-amber-400 transition-colors">
                    +51 972 347 781
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:expeditionnativo@gmail.com" className="hover:text-amber-400 transition-colors">
                  expeditionnativo@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>
                  Av. La Cultura 3er Paradero 290-A<br />
                  Cusco, Perú
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Nativo Expedition • {t('Todos los derechos reservados', 'All rights reserved')}
          </p>
          <p className="text-emerald-500/70 text-xs mt-2">
            Operamos con respeto a las comunidades andinas y la naturaleza del Perú
          </p>
        </div>
      </div>
    </footer>
  );
}