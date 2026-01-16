"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { Mountain, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 dark:bg-[#1F120A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-[#C62828] to-[#B71C1C] p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Amaiatours</span>
            </div>
            <p className="text-stone-400 dark:text-stone-500 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-[#2C1A0F] p-3 rounded-lg hover:bg-[#C62828] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-[#2C1A0F] p-3 rounded-lg hover:bg-[#B71C1C] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 dark:bg-[#2C1A0F] p-3 rounded-lg hover:bg-[#C62828] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-stone-400 dark:text-stone-500 hover:text-[#C62828] dark:hover:text-[#D32F2F] transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tours')}
                  className="text-stone-400 dark:text-stone-500 hover:text-[#C62828] dark:hover:text-[#D32F2F] transition-colors"
                >
                  {t.nav.tours}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-stone-400 dark:text-stone-500 hover:text-[#C62828] dark:hover:text-[#D32F2F] transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-stone-400 dark:text-stone-500 hover:text-[#C62828] dark:hover:text-[#D32F2F] transition-colors"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-stone-400 dark:text-stone-500 hover:text-[#C62828] dark:hover:text-[#D32F2F] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-stone-400 dark:text-stone-500">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C62828] dark:text-[#D32F2F]" />
                <span>info@amaiatours.com</span>
              </li>
              <li className="flex items-start space-x-2 text-stone-400 dark:text-stone-500">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C62828] dark:text-[#D32F2F]" />
                <span>+51 987 654 321</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t.footer.payments}</h3>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Visa
              </div>
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Mastercard
              </div>
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                PayPal
              </div>
              <div className="bg-white rounded-lg px-4 py-2 text-stone-800 font-semibold text-sm">
                Yape
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-400">
          <p>
            © {new Date().getFullYear()} Amaiatours. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
