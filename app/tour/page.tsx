// app/tour/page.tsx (o app/tours/page.tsx según tu estructura)
import Link from 'next/link';
import Image from 'next/image';
import { 
  Castle, 
  MapPinned, 
  Footprints, 
  Globe2, 
  Waves,
  ArrowRight,
  Train,
  TentTree,
  Compass,
  Palmtree,
  Landmark,
  Utensils,
  Camera,
  Users,
  Star,
  Clock,
  Shield,
  Heart,
  Award,
  Map,
  Sunrise,
  Sunset,
  Coffee,
  Wifi,
  Bus,
  CreditCard
} from 'lucide-react';

// Definición de categorías principales con imágenes reales
const categories = [
  {
    id: 'machupicchu',
    name: 'Machu Picchu',
    description: 'Descubre la ciudadela inca, una de las 7 maravillas del mundo',
    shortDesc: 'La joya del Imperio Inca',
    icon: Castle,
    color: 'from-amber-500 to-amber-700',
    lightColor: 'from-amber-400 to-amber-600',
    bgImage: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { name: 'Machu Picchu Express', path: '/tour/machupicchu/machu-picchu-express', duration: '1 día', price: 'desde $350' },
      { name: 'Machu Picchu by Train', path: '/tour/machupicchu/machu-picchu-train', duration: '2 días', price: 'desde $450' }
    ]
  },
  {
    id: 'cusco',
    name: 'Cusco',
    description: 'La capital arqueológica de América, llena de historia y cultura',
    shortDesc: 'El ombligo del mundo',
    icon: MapPinned,
    color: 'from-emerald-500 to-emerald-700',
    lightColor: 'from-emerald-400 to-emerald-600',
    bgImage: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { name: 'Cusco Packages', path: '/tour/cusco/cusco-packages', duration: '3-6 días', price: 'desde $250' },
      { name: 'Classic Tours', path: '/tour/cusco/classic-tours', duration: '1 día', price: 'desde $80' }
    ]
  },
  {
    id: 'trekking',
    name: 'Trekking',
    description: 'Rutas ancestrales y paisajes espectaculares en los Andes',
    shortDesc: 'Aventura en los Andes',
    icon: Footprints,
    color: 'from-blue-500 to-blue-700',
    lightColor: 'from-blue-400 to-blue-600',
    bgImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { name: 'Inca Trail', path: '/tour/trekking/inca-trail', duration: '4 días', price: 'desde $650' },
      { name: 'Salkantay', path: '/tour/trekking/salkantay', duration: '5 días', price: 'desde $550' }
    ]
  },
  {
    id: 'paquetes-peru',
    name: 'Paquetes Perú',
    description: 'Experiencias completas combinando lo mejor de Perú',
    shortDesc: 'Lo mejor de Perú en un solo viaje',
    icon: Globe2,
    color: 'from-purple-500 to-purple-700',
    lightColor: 'from-purple-400 to-purple-600',
    bgImage: 'https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { name: 'Lima + Cusco', path: '/tour/paquetes-peru/lima-cusco', duration: '6-8 días', price: 'desde $850' },
      { name: 'Perú Completo', path: '/tour/paquetes-peru/peru-completo', duration: '15 días', price: 'desde $1,850' }
    ]
  },
  {
    id: 'costa',
    name: 'Costa Peruana',
    description: 'Playas, desiertos y la mejor gastronomía de Sudamérica',
    shortDesc: 'Sol, arena y sabor',
    icon: Waves,
    color: 'from-sky-500 to-sky-700',
    lightColor: 'from-sky-400 to-sky-600',
    bgImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subcategories: [
      { name: 'Lima Tours', path: '/tour/costa/lima', duration: '1-3 días', price: 'desde $120' }
    ]
  }
];

// Categorías adicionales (blog, nosotros)
const additionalPages = [
  {
    id: 'blog',
    name: 'Blog',
    description: 'Consejos, guías y novedades sobre viajes en Perú',
    icon: Camera,
    color: 'from-pink-500 to-pink-700',
    lightColor: 'from-pink-400 to-pink-600',
    bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/tour/blog'
  },
  {
    id: 'nosotros',
    name: 'Nosotros',
    description: 'Conoce a nuestro equipo y nuestra historia',
    icon: Users,
    color: 'from-indigo-500 to-indigo-700',
    lightColor: 'from-indigo-400 to-indigo-600',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    path: '/tour/nosotros'
  }
];

// Testimonios
const testimonials = [
  {
    name: 'María González',
    country: 'España',
    text: 'Una experiencia inolvidable. Machu Picchu es aún más impresionante en persona.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108777-2961285f4ab0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'John Smith',
    country: 'USA',
    text: 'El Camino Inca fue desafiante pero increíble. Guías excelentes y organización perfecta.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Claire Dubois',
    country: 'Francia',
    text: 'Cusco es mágico. Los paquetes todo incluido nos facilitaron mucho el viaje.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }
];

// Características mejoradas
const features = [
  {
    icon: Users,
    title: 'Guías Locales Expertos',
    description: 'Profesionales apasionados que conocen cada rincón',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Compass,
    title: 'Rutas Exclusivas',
    description: 'Acceso a lugares únicos y experiencias auténticas',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Utensils,
    title: 'Gastronomía Premium',
    description: 'Incluye lo mejor de la cocina peruana',
    color: 'from-orange-500 to-amber-500'
  },
  {
    icon: Camera,
    title: 'Fotos Profesionales',
    description: 'Captura los momentos más espectaculares',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Viaja con tranquilidad y confianza',
    color: 'from-red-500 to-rose-500'
  },
  {
    icon: Award,
    title: 'Mejor Precio',
    description: 'Calidad asegurada al mejor precio del mercado',
    color: 'from-yellow-500 to-amber-500'
  }
];

// Destinos destacados
const featuredDestinations = [
  {
    name: 'Machu Picchu',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tours: 12,
    color: 'amber'
  },
  {
    name: 'Montaña de Colores',
    image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tours: 5,
    color: 'pink'
  },
  {
    name: 'Laguna Humantay',
    image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tours: 4,
    color: 'blue'
  },
  {
    name: 'Valle Sagrado',
    image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    tours: 8,
    color: 'green'
  }
];

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section Mejorado */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video/Imagen de fondo con overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1526392060935-9d621c5c46b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Peru landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            {/* Badge animado */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Star className="w-4 h-4 text-yellow-400 mr-2 fill-yellow-400" />
              <span className="text-white/90 text-sm font-medium">
                ✦ 15 años de experiencia ✦
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Descubre el 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                Perú Auténtico
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto lg:mx-0">
              Vive experiencias únicas en el corazón de los Andes. 
              Machu Picchu, Cusco, Trekking y la mejor gastronomía.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="#categorias"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                Explorar Tours
                <Compass className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link 
                href="/contacto"
                className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 flex items-center"
              >
                Contactar Asesor
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>

            {/* Stats flotantes */}
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">+5000</p>
                <p className="text-white/70 text-sm">Viajeros felices</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">+50</p>
                <p className="text-white/70 text-sm">Tours únicos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-white/70 text-sm">Recomendado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="currentColor" 
              className="text-gray-50 dark:text-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Destinos Destacados */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Destinos Destacados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Los lugares más impresionantes que no puedes perderte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, index) => (
              <div key={index} className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm mb-3">{dest.tours} tours disponibles</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías Principales - Versión mejorada con imágenes */}
      <section id="categorias" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Nuestros tours
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-2">
              Categorías de Tours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explora nuestras diferentes categorías y encuentra la aventura perfecta para ti
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Imagen de fondo con overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.bgImage}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80 mix-blend-multiply`} />
                  
                  {/* Icono flotante */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-xl border border-white/30">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Badge de oferta */}
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {category.shortDesc}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {category.description}
                  </p>

                  {/* Subcategorías con precios */}
                  <div className="space-y-3 mb-6">
                    {category.subcategories.map((sub) => (
                      <Link 
                        key={sub.path}
                        href={sub.path}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors group/item"
                      >
                        <div>
                          <span className="text-gray-900 dark:text-white font-medium group-hover/item:text-emerald-600 dark:group-hover/item:text-emerald-400">
                            {sub.name}
                          </span>
                          <div className="flex items-center mt-1">
                            <Clock className="w-3 h-3 text-gray-400 mr-1" />
                            <span className="text-xs text-gray-500 dark:text-gray-400">{sub.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                            {sub.price}
                          </span>
                          <ArrowRight className="w-4 h-4 text-emerald-600 opacity-0 group-hover/item:opacity-100 transition-all ml-auto mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Ver todos link */}
                  <Link 
                    href={`/tour/${category.id}`}
                    className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 group/link"
                  >
                    Ver todos los tours
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características con iconos animados */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              La excelencia nos define en cada detalle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Fondo degradado animado */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icono con animación */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* Decoración */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-700 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Información Adicional - Versión con imágenes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalPages.map((page) => (
              <Link 
                key={page.id}
                href={page.path}
                className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer"
              >
                {/* Imagen de fondo */}
                <Image
                  src={page.bgImage}
                  alt={page.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-t ${page.color} opacity-90 group-hover:opacity-95 transition-opacity`} />
                
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <page.icon className="w-12 h-12 text-white mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all" />
                  <h3 className="text-3xl font-bold text-white mb-2">{page.name}</h3>
                  <p className="text-white/90 text-lg mb-4 max-w-md">{page.description}</p>
                  <div className="flex items-center text-white font-semibold group/link">
                    Conocer más 
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lo que dicen nuestros viajeros
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experiencias reales de personas como tú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contacta a nuestros asesores y comienza a planificar el viaje de tus sueños
          </p>
          <Link 
            href="/contacto"
            className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Heart className="w-5 h-5 mr-2" />
            Reservar Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}