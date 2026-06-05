"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Menu, X, Sun, Moon, Globe, ChevronDown, Phone, 
  Mountain, Footprints, Train,
  BookOpen, Users, Compass,
  Map, Package, MapPinned, Navigation,
  TentTree, Castle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { getRoute } from '@/lib/routes';

// ============================================
// TYPES
// ============================================
interface SubItem {
  id: string;
  label: string;
  path: string;
}

interface DropdownItem {
  id: string;
  label: string;
  path: string;
  icon?: any;
  items?: SubItem[];
}

interface MenuItem {
  id: string;
  label: string;
  icon: any;
  path: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

// ============================================
// NAVBAR - NATIVO EXPEDITION
// ============================================
export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // ============================================
  // EFFECTS
  // ============================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setActiveDropdown(null);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // ============================================
  // HANDLERS
  // ============================================
  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '51987654321';
    const message = language === 'es' 
      ? '¡Hola! Estoy interesado en obtener más información sobre sus tours. ¿Podrían ayudarme?'
      : 'Hello! I am interested in getting more information about your tours. Can you help me?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleMobileDropdown = (itemId: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === itemId ? null : itemId);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  };

  // ============================================
  // MENU ITEMS
  // ============================================
  const menuItems: MenuItem[] = [
    {
      id: 'machu-picchu',
      label: 'Machu Picchu',
      icon: Castle,
      path: '/tour/machupicchu',
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'machu-picchu-express',
          label: 'Machu Picchu Express',
          path: '/tour/machupicchu/machu-picchu-express',
          icon: Navigation,
          items: [
            { id: 'machu-picchu-express-1d', label: 'Machu Picchu Express 1D', path: getRoute('machu-picchu-express-1d') },
            { id: 'machu-picchu-express-2d1n', label: 'Machu Picchu Express 2D/1N', path: getRoute('machu-picchu-express-2d1n') }
          ]
        },
        {
          id: 'machu-picchu-tren',
          label: 'Machu Picchu by Train',
          path: '/tour/machupicchu/machu-picchu-train',
          icon: Train,
          items: [
            { id: 'machu-picchu-full-day', label: 'Machu Picchu Full Day', path: getRoute('machu-picchu-full-day') },
            { id: 'machu-picchu-sunset-sunrise-2d1n', label: 'Sunset & Sunrise 2D/1N', path: getRoute('machu-picchu-sunset-sunrise-2d1n') },
            { id: 'sacred-valley-machu-picchu-2d1n', label: 'Sacred Valley to Machu Picchu 2D/1N', path: getRoute('sacred-valley-machu-picchu-2d1n') }
          ]
        }
      ]
    },
    
    {
      id: 'cusco',
      label: 'Cusco',
      icon: MapPinned,
      path: '/tour/cusco',
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'cusco-packages',
          label: 'Cusco Packages',
          path: '/tour/cusco/cusco-packages',
          icon: Package,
          items: [
            { id: 'cuzco-inolvidable-3d2n', label: 'Cusco Inolvidable 3D/2N', path: getRoute('cuzco-inolvidable-3d2n') },
            { id: 'cuzco-inolvidable-4d3n', label: 'Cusco Inolvidable 4D/3N', path: getRoute('cuzco-inolvidable-4d3n') },
            { id: 'cusco-inolvidable-6d5n', label: 'Cusco Inolvidable 6D/5N', path: getRoute('cusco-inolvidable-6d5n') }
          ]
        },
        {
          id: 'cusco-classic',
          label: 'Classic Tours',
          path: '/tour/cusco/classic-tours',
          icon: Map,
          items: [
            { id: 'city-tour-cusco', label: 'City Tour Cusco', path: getRoute('city-tour-cusco') },
            { id: 'sacred-valley-tour', label: 'Sacred Valley Tour', path: getRoute('sacred-valley-tour') },
            { id: 'rainbow-mountain', label: 'Rainbow Mountain', path: getRoute('rainbow-mountain') }
          ]
        }
      ]
    },
    
    {
      id: 'trekking',
      label: 'Trekking',
      icon: Footprints,
      path: '/tour/trekking',
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'inca-trail',
          label: 'Inca Trail',
          path: '/tour/trekking/inca-trail',
          icon: TentTree,
          items: [
            { id: 'short-inca-trail-2d1n', label: 'Short Inca Trail 2D/1N', path: getRoute('short-inca-trail-2d1n') },
            { id: 'classic-inca-trail-4d3n', label: 'Classic Inca Trail 4D', path: getRoute('classic-inca-trail-4d3n') }
          ]
        },
        {
          id: 'salkantay',
          label: 'Salkantay',
          path: '/tour/trekking/salkantay',
          icon: Mountain,
          items: [
            { id: 'salkantay-trek-5d4n', label: 'Salkantay Trek 5D', path: getRoute('salkantay-trek-5d4n') }
          ]
        }
      ]
    },
    
    {
      id: 'blogs',
      label: 'Blog',
      icon: BookOpen,
      path: '/blog',
      hasDropdown: false
    },
    
    {
      id: 'about',
      label: language === 'es' ? 'Nosotros' : 'About Us',
      icon: Users,
      path: '/nosotros', 
      hasDropdown: false
    }
  ];

  // ============================================
  // RENDER DESKTOP DROPDOWN
  // ============================================
  const renderDesktopDropdown = (item: MenuItem) => {
    if (!item.hasDropdown || !item.dropdownItems) return null;

    return (
      <div 
        className={`absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl min-w-[280px] max-w-[340px] transition-all duration-200 ${
          activeDropdown === item.id 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 max-h-[70vh] overflow-y-auto">
          {item.dropdownItems[0]?.items ? (
            <div className="space-y-4">
              {item.dropdownItems.map((group: DropdownItem) => (
                <div key={group.id}>
                  <div className="flex items-center mb-2">
                    {group.icon && <group.icon className="w-4 h-4 mr-2 text-orange-600 dark:text-orange-400" />}
                    <Link 
                      href={group.path}
                      className="text-sm font-semibold text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300"
                      onClick={closeAll}
                    >
                      {group.label}
                    </Link>
                  </div>
                  <ul className="ml-6 space-y-1.5">
                    {group.items?.map((subItem: SubItem) => (
                      <li key={subItem.id}>
                        <Link 
                          href={subItem.path}
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 block py-1.5 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          onClick={closeAll}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="space-y-1">
              {item.dropdownItems.map((dropdownItem: DropdownItem) => (
                <li key={dropdownItem.id}>
                  <Link 
                    href={dropdownItem.path}
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 py-2.5 px-3 block rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center"
                    onClick={closeAll}
                  >
                    {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 mr-2" />}
                    {dropdownItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  // ============================================
  // MAIN RENDER
  // ============================================
  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-100 dark:border-gray-800'
            : 'bg-white dark:bg-gray-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - NATIVO EXPEDITION */}
            <Link 
              href="/" 
              className="flex items-center group flex-shrink-0"
              onClick={closeAll}
            >
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src="/logoLibre.jpg"   
                  alt="NATIVO EXPEDITION Logo"
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 640px) 40px, 56px, 64px"
                  quality={90}
                />
              </div>
              <div className="ml-2 sm:ml-3 md:ml-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-none group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  NATIVO
                </h1>
                <span className="text-xs font-bold uppercase tracking-[2px] text-amber-600 dark:text-amber-400 block mt-0.5">
                  EXPEDITION
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center justify-center flex-1 mx-4">
              <div className="flex items-center space-x-1">
                {menuItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-xl whitespace-nowrap ${
                        activeDropdown === item.id 
                          ? 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-gray-800' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                      )}
                    </Link>
                    {renderDesktopDropdown(item)}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Language Selector */}
              <div className="hidden xl:block relative group">
                <button 
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'es' ? 'ES' : 'EN'}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => { setLanguage('es'); closeAll(); }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'es' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); closeAll(); }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'en' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              )}

              {/* Book Now Button */}
              <Button
                onClick={handleWhatsApp}
                className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {language === 'es' ? 'Reservar' : 'Book Now'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="px-5 py-6 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.hasDropdown ? '#' : item.path}
                      className="flex items-center py-4 px-4 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 font-medium flex-1 rounded-xl active:bg-gray-100 dark:active:bg-gray-800"
                      onClick={(e) => {
                        if (!item.hasDropdown) setMobileMenuOpen(false);
                        else {
                          e.preventDefault();
                          toggleMobileDropdown(item.id);
                        }
                      }}
                    >
                      <item.icon className="w-5 h-5 mr-4 flex-shrink-0" />
                      <span className="text-base">{item.label}</span>
                    </Link>
                    
                    {item.hasDropdown && (
                      <button onClick={() => toggleMobileDropdown(item.id)} className="p-4">
                        <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen === item.id ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.hasDropdown && item.dropdownItems && mobileDropdownOpen === item.id && (
                    <div className="ml-9 mt-1 mb-4 space-y-3 border-l border-gray-200 dark:border-gray-700 pl-5">
                      {item.dropdownItems.map((group: DropdownItem) => (
                        <div key={group.id} className="space-y-2">
                          <Link 
                            href={group.path}
                            className="flex items-center text-orange-700 dark:text-orange-400 font-medium text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {group.icon && <group.icon className="w-4 h-4 mr-2" />}
                            {group.label}
                          </Link>
                          {group.items && (
                            <ul className="space-y-1 ml-6">
                              {group.items.map((subItem: SubItem) => (
                                <li key={subItem.id}>
                                  <Link 
                                    href={subItem.path}
                                    className="block py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Extras */}
              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => { setLanguage('es'); setMobileMenuOpen(false); }}
                    className={`py-3 rounded-xl text-sm font-medium ${language === 'es' ? 'bg-orange-600 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => { setLanguage('en'); setMobileMenuOpen(false); }}
                    className={`py-3 rounded-xl text-sm font-medium ${language === 'en' ? 'bg-orange-600 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}
                  >
                    English
                  </button>
                </div>

                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-xl"
                  >
                    <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                )}

                <Button
                  onClick={() => { handleWhatsApp(); setMobileMenuOpen(false); }}
                  className="w-full bg-orange-600 hover:bg-orange-700 py-3.5 text-base font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}