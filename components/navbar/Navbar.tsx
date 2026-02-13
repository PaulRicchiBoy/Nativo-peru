"use client";

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Menu, X, Sun, Moon, Globe, ChevronDown, Phone, 
  Mountain, Footprints, Train,
  BookOpen, Users, Compass,
  Map, Package, MapPinned, Navigation,
  TentTree, Waves, Castle, Palmtree, Car, Globe2
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
// COMPONENTE NAVBAR
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
      window.removeEventListener('mousedown', handleClickOutside);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // ============================================
  // HANDLERS
  // ============================================
  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
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
  // MENU ITEMS - ACTUALIZADO CON RUTAS JERÁRQUICAS EN /TOUR
  // ============================================
  const menuItems: MenuItem[] = [
    // ===== MACHU PICCHU =====
    {
      id: 'machu-picchu',
      label: 'Machu Picchu',
      icon: Castle,
      path: '/tour/machupicchu', // ← Cambiado a ruta jerárquica
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'machu-picchu-express',
          label: 'Machu Picchu Express',
          path: '/tour/machupicchu/machu-picchu-express', // ← Ruta jerárquica
          icon: Navigation,
          items: [
            { 
              id: 'machu-picchu-express-1d', 
              label: 'Machu Picchu Express 1D', 
              path: getRoute('machu-picchu-express-1d')
            },
            { 
              id: 'machu-picchu-express-2d1n', 
              label: 'Machu Picchu Express 2D/1N', 
              path: getRoute('machu-picchu-express-2d1n')
            }
          ]
        },
        {
          id: 'machu-picchu-tren',
          label: 'Machu Picchu by Train',
          path: '/tour/machupicchu/machu-picchu-train', // ← Ruta jerárquica
          icon: Train,
          items: [
            { 
              id: 'machu-picchu-full-day', 
              label: 'Machu Picchu Full Day', 
              path: getRoute('machu-picchu-full-day')
            },
            { 
              id: 'machu-picchu-sunset-sunrise-2d1n', 
              label: 'Sunset & Sunrise 2D/1N', 
              path: getRoute('machu-picchu-sunset-sunrise-2d1n')
            },
            { 
              id: 'sacred-valley-machu-picchu-2d1n', 
              label: 'Sacred Valley to Machu Picchu 2D/1N', 
              path: getRoute('sacred-valley-machu-picchu-2d1n')
            }
          ]
        }
      ]
    },
    
    // ===== CUSCO =====
    {
      id: 'cusco',
      label: 'Cusco',
      icon: MapPinned,
      path: '/tour/cusco', // ← Cambiado a ruta jerárquica
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'cusco-packages',
          label: 'Cusco Packages',
          path: '/tour/cusco/cusco-packages', // ← Ruta jerárquica
          icon: Package,
          items: [
            { 
              id: 'cuzco-inolvidable-3d2n', 
              label: 'Cusco Inolvidable 3D/2N', 
              path: getRoute('cuzco-inolvidable-3d2n')
            },
            { 
              id: 'cuzco-inolvidable-4d3n', 
              label: 'Cusco Inolvidable 4D/3N', 
              path: getRoute('cuzco-inolvidable-4d3n')
            },
            { 
              id: 'cusco-inolvidable-6d5n', 
              label: 'Cusco Inolvidable 6D/5N', 
              path: getRoute('cusco-inolvidable-6d5n')
            }
          ]
        },
        {
          id: 'cusco-classic',
          label: 'Classic Tours',
          path: '/tour/cusco/classic-tours', // ← Ruta jerárquica
          icon: Map,
          items: [
            { 
              id: 'city-tour-cusco', 
              label: 'City Tour Cusco', 
              path: getRoute('city-tour-cusco')
            },
            { 
              id: 'sacred-valley-tour', 
              label: 'Sacred Valley Tour', 
              path: getRoute('sacred-valley-tour')
            },
            { 
              id: 'rainbow-mountain', 
              label: 'Rainbow Mountain', 
              path: getRoute('rainbow-mountain')
            }
          ]
        }
      ]
    },
    
    // ===== TREKKING =====
    {
      id: 'trekking',
      label: 'Trekking',
      icon: Footprints,
      path: '/tour/trekking', // ← Cambiado a ruta jerárquica
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'inca-trail',
          label: 'Inca Trail',
          path: '/tour/trekking/inca-trail', // ← Ruta jerárquica
          icon: TentTree,
          items: [
            { 
              id: 'short-inca-trail-2d1n', 
              label: 'Short Inca Trail 2D/1N', 
              path: getRoute('short-inca-trail-2d1n')
            },
            { 
              id: 'classic-inca-trail-4d3n', 
              label: 'Classic Inca Trail 4D', 
              path: getRoute('classic-inca-trail-4d3n')
            }
          ]
        },
        {
          id: 'salkantay',
          label: 'Salkantay',
          path: '/tour/trekking/salkantay', // ← Ruta jerárquica
          icon: Mountain,
          items: [
            { 
              id: 'salkantay-trek-5d4n', 
              label: 'Salkantay Trek 5D', 
              path: getRoute('salkantay-trek-5d4n')
            }
          ]
        }
      ]
    },
    
    // ===== PAQUETES PERÚ =====
    {
      id: 'paquetes-peru',
      label: language === 'es' ? 'Paquetes Perú' : 'Peru Packages',
      icon: Globe2,
      path: '/tour/paquetes-peru', // ← Cambiado a ruta jerárquica
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'lima-cusco',
          label: 'Lima + Cusco',
          path: '/tour/paquetes-peru/lima-cusco', // ← Ruta jerárquica
          icon: Car,
          items: [
            { 
              id: 'experiencia-lima-cusco-6d5n', 
              label: 'Lima-Cusco 6D/5N', 
              path: getRoute('experiencia-lima-cusco-6d5n')
            },
            { 
              id: 'experiencia-lima-cusco-8d7n', 
              label: 'Lima-Cusco 8D/7N', 
              path: getRoute('experiencia-lima-cusco-8d7n')
            }
          ]
        },
        {
          id: 'peru-completo',
          label: language === 'es' ? 'Perú Completo' : 'Complete Peru',
          path: '/tour/paquetes-peru/peru-completo', // ← Ruta jerárquica
          icon: Compass,
          items: [
            {
              id: 'peru-completo-aventura',
              label: 'Perú Completo 15D/14N',
              path: getRoute('peru-completo-aventura')
            },
            {
              id: 'peru-bolivia-aventura',
              label: 'Perú - Bolivia 11D/10N',
              path: getRoute('peru-bolivia-aventura')
            }
          ]
        }
      ]
    },
    
    // ===== TOURS COSTA =====
    {
      id: 'tours-costa',
      label: language === 'es' ? 'Costa Peruana' : 'Coast Tours',
      icon: Waves,
      path: '/tour/costa', // ← Cambiado a ruta jerárquica
      hasDropdown: true,
      dropdownItems: [
        {
          id: 'lima-tours',
          label: 'Lima',
          path: '/tour/costa/lima', // ← Ruta jerárquica
          icon: Palmtree,
          items: [
            { 
              id: 'city-tour-lima', 
              label: 'City Tour Lima', 
              path: getRoute('city-tour-lima')
            },
            { 
              id: 'lima-paracas-ballestas-2d1n', 
              label: 'Paracas & Ballestas', 
              path: getRoute('lima-paracas-ballestas-2d1n')
            },
            { 
              id: 'lima-paracas-huacachina-3d2n', 
              label: 'Paracas & Huacachina 3D/2N', 
              path: getRoute('lima-paracas-huacachina-3d2n')
            },
            { 
              id: 'lima-express', 
              label: 'Lima Express', 
              path: getRoute('lima-express')
            }
          ]
        }
      ]
    },
    
    // ===== BLOG =====
    {
      id: 'blogs',
      label: 'Blog',
      icon: BookOpen,
      path: '/blog', // ← Cambiado a /tour/blog
      hasDropdown: false
    },
    
    // ===== NOSOTROS =====
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
        className={`absolute top-full left-0 transform mt-2 z-50 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl min-w-[280px] max-w-[320px] transition-all duration-200 ${
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
                    {group.icon && <group.icon className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />}
                    <Link 
                      href={group.path}
                      className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
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
                          className="text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 block py-1.5 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
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
                    className="text-sm text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 py-2.5 px-3 block rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center"
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
  // RENDER
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
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group flex-shrink-0"
              onClick={closeAll}
            >
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
                <Image
                  src="/logoLibre.jpg"
                  alt="Nativo Expeditions Logo"
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  priority
                  sizes="(max-width: 640px) 40px, 56px, 64px"
                  quality={90}
                />
              </div>
              <div className="ml-2 sm:ml-3 md:ml-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  NATIVO
                </h1>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block leading-tight mt-0.5">
                  EXPEDITIONS
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
                      className={`flex items-center px-3 py-2.5 text-sm font-medium transition-colors duration-200 rounded-lg whitespace-nowrap ${
                        activeDropdown === item.id 
                          ? 'text-emerald-600 dark:text-emerald-400 bg-gray-100 dark:bg-gray-800' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-3 h-3 ml-1 flex-shrink-0 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`} />
                      )}
                    </Link>
                    
                    {renderDesktopDropdown(item)}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center space-x-2">
              {/* Language Selector */}
              <div className="hidden xl:block relative group">
                <button 
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 text-sm"
                  onClick={() => setActiveDropdown(null)}
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'es' ? 'ES' : 'EN'}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 py-2 w-32 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <button
                    onClick={() => {
                      setLanguage('es');
                      closeAll();
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'es'
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      closeAll();
                    }}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                      language === 'en'
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
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
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              {/* Book Now Button */}
              <Button
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold flex items-center whitespace-nowrap"
              >
                <Phone className="w-4 h-4 mr-2" />
                {language === 'es' ? 'Reservar' : 'Book Now'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl">
            <div className="px-4 py-3 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.id} className="mb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.hasDropdown ? '#' : item.path}
                      className="flex items-center py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium flex-1"
                      onClick={(e) => {
                        if (!item.hasDropdown) {
                          setMobileMenuOpen(false);
                        } else {
                          e.preventDefault();
                          toggleMobileDropdown(item.id);
                        }
                      }}
                    >
                      <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{item.label}</span>
                    </Link>
                    
                    {item.hasDropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.id)}
                        className="p-2"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          mobileDropdownOpen === item.id ? 'rotate-180' : ''
                        }`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && item.dropdownItems && mobileDropdownOpen === item.id && (
                    <div className="ml-8 mt-1 mb-3 space-y-2 border-l border-gray-200 dark:border-gray-700 pl-3">
                      {item.dropdownItems.map((group: DropdownItem) => (
                        <div key={group.id} className="space-y-1">
                          <div className="flex items-center">
                            {group.icon && <group.icon className="w-3 h-3 mr-2 text-emerald-600 dark:text-emerald-400" />}
                            <Link 
                              href={group.path}
                              className="text-xs font-medium text-emerald-700 dark:text-emerald-400 block py-1"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {group.label}
                            </Link>
                          </div>
                          {group.items && (
                            <ul className="space-y-0.5 ml-5">
                              {group.items.map((subItem: SubItem) => (
                                <li key={subItem.id}>
                                  <Link 
                                    href={subItem.path}
                                    className="text-xs text-gray-600 dark:text-gray-400 block py-1 hover:text-emerald-600 dark:hover:text-emerald-400 pl-2"
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

              {/* Mobile Language & Theme */}
              <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setLanguage('es');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      language === 'es'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      language === 'en'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    English
                  </button>
                </div>

                {mounted && (
                  <div className="flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <span className="text-xs sm:text-sm">
                      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-4 h-4" />
                      ) : (
                        <Moon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}

                {/* Book Now Button - Mobile */}
                <Button
                  onClick={() => {
                    handleWhatsApp();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm font-semibold flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {language === 'es' ? 'Reservar Ahora' : 'Book Now'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}