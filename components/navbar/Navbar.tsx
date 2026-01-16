"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ToursDropdown } from './ToursDropdown';
import { AboutDropdown } from './AboutDropdown';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 dark:bg-[#1F120A]/98 backdrop-blur-xl shadow-lg'
          : 'bg-white/95 dark:bg-[#1F120A]/95 backdrop-blur-md shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-16 h-16 group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Amaiatours Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#C62828] via-[#D32F2F] to-[#B71C1C] bg-clip-text text-transparent">
                  Amaiatours
                </span>
                <p className="text-xs text-stone-500 dark:text-stone-400 -mt-1">Authentic Peru</p>
              </div>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-stone-700 dark:text-stone-300 hover:text-[#C62828] font-medium transition-all duration-200 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 rounded-lg"
            >
              {t.nav.home}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('tours')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours"
                className="px-4 py-2 text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-[#C62828] font-medium transition-all duration-200 hover:bg-emerald-50 dark:hover:bg-[#C62828]/20 rounded-lg flex items-center space-x-1 group"
              >
                <span>{t.nav.tours}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'tours' ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {activeDropdown === 'tours' && <ToursDropdown onClose={() => setActiveDropdown(null)} />}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-stone-700 dark:text-stone-300 hover:text-emerald-600 dark:hover:text-[#C62828] font-medium transition-all duration-200 hover:bg-emerald-50 dark:hover:bg-[#C62828]/20 rounded-lg flex items-center space-x-1 group">
                <span>{t.nav.about}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'about' && <AboutDropdown onClose={() => setActiveDropdown(null)} />}
              </AnimatePresence>
            </div>

            <Link
              href="/testimonials"
              className="px-4 py-2 text-stone-700 dark:text-stone-300 hover:text-[#C62828] font-medium transition-all duration-200 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 rounded-lg"
            >
              {t.nav.testimonials}
            </Link>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-stone-700 dark:text-stone-300 hover:text-[#C62828] font-medium transition-all duration-200 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 rounded-lg"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-[#2C1A0F] transition-all duration-200"
                title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-[#C62828]" />
                ) : (
                  <Moon className="w-5 h-5 text-stone-700" />
                )}
              </button>
            )}

            <div className="flex items-center bg-gradient-to-r from-stone-100 to-stone-50 dark:from-[#2C1A0F] dark:to-[#1F120A] rounded-xl p-1 shadow-inner">
              <button
                onClick={() => setLanguage('es')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  language === 'es'
                    ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-md scale-105'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-[#2C1A0F]/50'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  language === 'en'
                    ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-md scale-105'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-[#2C1A0F]/50'
                }`}
              >
                EN
              </button>
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-[#C62828] via-[#D32F2F] to-[#B71C1C] hover:from-[#B71C1C] hover:via-[#C62828] hover:to-[#D32F2F] text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6"
            >
              {t.nav.bookNow}
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-[#2C1A0F] rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#1F120A] border-t border-stone-200 dark:border-[#2C1A0F] shadow-xl"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-stone-700 dark:text-stone-300 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 hover:text-[#C62828] rounded-xl transition-all font-medium"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/tours"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-stone-700 dark:text-stone-300 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 hover:text-[#C62828] rounded-xl transition-all font-medium"
              >
                {t.nav.tours}
              </Link>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-stone-700 dark:text-stone-300 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 hover:text-[#C62828] rounded-xl transition-all font-medium"
              >
                {t.nav.about}
              </button>
              <Link
                href="/testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 text-stone-700 dark:text-stone-300 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 hover:text-[#C62828] rounded-xl transition-all font-medium"
              >
                {t.nav.testimonials}
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-stone-700 dark:text-stone-300 hover:bg-[#C62828]/10 dark:hover:bg-[#C62828]/20 hover:text-[#C62828] rounded-xl transition-all font-medium"
              >
                {t.nav.contact}
              </button>

              <div className="pt-4 border-t border-stone-200 dark:border-[#2C1A0F]">
                {mounted && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between px-4 py-3 bg-stone-50 dark:bg-[#2C1A0F] rounded-xl">
                      <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
                        {theme === 'dark' ? 'Modo Oscuro' : 'Modo Claro'}
                      </span>
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-white dark:bg-[#1F120A] hover:bg-stone-100 dark:hover:bg-[#2C1A0F] transition-all"
                      >
                        {theme === 'dark' ? (
                          <Sun className="w-5 h-5 text-[#C62828]" />
                        ) : (
                          <Moon className="w-5 h-5 text-stone-700" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-2 mb-4">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      language === 'es'
                        ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-md'
                        : 'bg-stone-100 dark:bg-[#2C1A0F] text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-[#1F120A]'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      language === 'en'
                        ? 'bg-gradient-to-r from-[#C62828] to-[#B71C1C] text-white shadow-md'
                        : 'bg-stone-100 dark:bg-[#2C1A0F] text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-[#1F120A]'
                    }`}
                  >
                    English
                  </button>
                </div>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-[#C62828] to-[#B71C1C] hover:from-[#B71C1C] hover:to-[#D32F2F] text-white py-6 text-base font-semibold shadow-lg"
                >
                  {t.nav.bookNow}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
