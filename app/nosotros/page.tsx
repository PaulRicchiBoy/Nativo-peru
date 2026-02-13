"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, Heart, Handshake, Leaf, Globe2, 
  Camera, MapPin, ArrowRight, ChevronRight,
  Facebook, Instagram, Mail, Phone, MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NosotrosPage() {
  const { language } = useLanguage();

  // Comunidades con las que trabajamos
  const comunidades = [
    {
      nombre: { es: 'Comunidad de Patacancha', en: 'Patacancha Community' },
      ubicacion: { es: 'Ollantaytambo - Valle Sagrado', en: 'Ollantaytambo - Sacred Valley' },
      descripcion: {
        es: 'Tejedores tradicionales que mantienen vivas las técnicas ancestrales textiles. Visitamos sus talleres y aprendemos de su sabiduría.',
        en: 'Traditional weavers who keep ancestral textile techniques alive. We visit their workshops and learn from their wisdom.'
      },
      imagen: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actividad: { es: 'Textilería tradicional', en: 'Traditional textiles' }
    },
    {
      nombre: { es: 'Comunidad de Amantaní', en: 'Amantaní Community' },
      ubicacion: { es: 'Lago Titicaca - Puno', en: 'Lake Titicaca - Puno' },
      descripcion: {
        es: 'Familias que abren las puertas de sus hogares para compartir su día a día, su comida y sus tradiciones en una experiencia vivencial única.',
        en: 'Families that open their homes to share their daily life, food and traditions in a unique living experience.'
      },
      imagen: 'https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actividad: { es: 'Experiencia vivencial', en: 'Living experience' }
    },
    {
      nombre: { es: 'Comunidad de Raqchi', en: 'Raqchi Community' },
      ubicacion: { es: 'Cusco - Andahuaylillas', en: 'Cusco - Andahuaylillas' },
      descripcion: {
        es: 'Alfareros que trabajan el barro como sus ancestros. Conocemos su proceso y apoyamos la comercialización directa de sus artesanías.',
        en: 'Potters who work with clay like their ancestors. We learn about their process and support direct marketing of their crafts.'
      },
      imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      actividad: { es: 'Alfarería tradicional', en: 'Traditional pottery' }
    }
  ];

  // Valores de turismo responsable
  const valores = [
    {
      icon: Handshake,
      title: { es: 'Comercio Justo', en: 'Fair Trade' },
      desc: {
        es: 'Pagamos precios justos directamente a las comunidades por sus servicios y artesanías.',
        en: 'We pay fair prices directly to communities for their services and crafts.'
      }
    },
    {
      icon: Heart,
      title: { es: 'Respeto Cultural', en: 'Cultural Respect' },
      desc: {
        es: 'Visitamos con respeto, aprendiendo de sus costumbres sin imponer las nuestras.',
        en: 'We visit with respect, learning from their customs without imposing ours.'
      }
    },
    {
      icon: Leaf,
      title: { es: 'Turismo Sostenible', en: 'Sustainable Tourism' },
      desc: {
        es: 'Promovemos prácticas que protegen el medio ambiente y la cultura local.',
        en: 'We promote practices that protect the environment and local culture.'
      }
    },
    {
      icon: Globe2,
      title: { es: 'Preservación Cultural', en: 'Cultural Preservation' },
      desc: {
        es: 'Ayudamos a mantener vivas las tradiciones ancestrales.',
        en: 'We help keep ancestral traditions alive.'
      }
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section - Imagen de comunidad */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Comunidad Andina"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 backdrop-blur-md rounded-full border border-emerald-500/30 mb-6">
              <Heart className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-white/90 text-sm">
                {language === 'es' ? 'Turismo Vivencial y Comunitario' : 'Experiential and Community Tourism'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {language === 'es' ? 'Nativo con las Comunidades' : 'Nativo with Communities'}
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mb-8">
              {language === 'es' 
                ? 'No somos solo una agencia de viajes. Somos un puente entre viajeros del mundo y las comunidades originarias del Perú.'
                : 'We are not just a travel agency. We are a bridge between travelers from around the world and the native communities of Peru.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/tour"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                {language === 'es' ? 'Conoce Nuestros Tours' : 'Check Our Tours'}
              </Link>
              <Link 
                href="#comunidades"
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-lg border border-white/30"
              >
                {language === 'es' ? 'Comunidades Amigas' : 'Friend Communities'}
              </Link>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white rotate-90" />
        </div>
      </section>

      {/* Nuestra Filosofía */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                {language === 'es' ? 'Nuestra Filosofía' : 'Our Philosophy'}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                {language === 'es' 
                  ? 'Turismo que Transforma' 
                  : 'Tourism that Transforms'}
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  {language === 'es'
                    ? 'En Nativo Expeditions creemos que el turismo puede ser una fuerza positiva para las comunidades originarias. No queremos ser simples observadores de su cultura, queremos ser aliados que ayudan a preservarla y valorarla.'
                    : 'At Nativo Expeditions we believe that tourism can be a positive force for native communities. We don\'t want to be mere observers of their culture, we want to be allies that help preserve and value it.'}
                </p>
                <p>
                  {language === 'es'
                    ? 'Trabajamos directamente con familias y comunidades en Cusco, el Valle Sagrado, el Lago Titicaca y más. Cada visita está diseñada con respeto, donde el viajero no solo observa, sino que comparte, aprende y contribuye.'
                    : 'We work directly with families and communities in Cusco, the Sacred Valley, Lake Titicaca and beyond. Each visit is designed with respect, where the traveler not only observes, but shares, learns and contributes.'}
                </p>
                <p className="font-medium text-emerald-600">
                  {language === 'es'
                    ? 'El 15% de lo que pagas en nuestros tours vivenciales va directamente a las comunidades.'
                    : '15% of what you pay in our experiential tours goes directly to the communities.'}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598977123118-4e30ba3a0134?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mujer tejiendo tradición"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                <Heart className="w-8 h-8 mb-2" />
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">{language === 'es' ? 'Comunidades' : 'Communities'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                  <valor.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {valor.title[language]}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {valor.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunidades */}
      <section id="comunidades" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              {language === 'es' ? 'Nuestros Amigos' : 'Our Friends'}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              {language === 'es' ? 'Comunidades con las que trabajamos' : 'Communities we work with'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {language === 'es'
                ? 'Más que destinos turísticos, son familias que nos reciben con los brazos abiertos para compartir su vida, su sabiduría y su cultura.'
                : 'More than tourist destinations, they are families that welcome us with open arms to share their life, wisdom and culture.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comunidades.map((comunidad, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={comunidad.imagen}
                    alt={comunidad.nombre[language]}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-emerald-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                      {comunidad.actividad[language]}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {comunidad.nombre[language]}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {comunidad.ubicacion[language]}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {comunidad.descripcion[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencias Vivenciales */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {language === 'es' ? 'Vive una experiencia vivencial' : 'Live an experiential experience'}
              </h2>
              <p className="text-lg text-emerald-100 mb-6">
                {language === 'es'
                  ? 'Comparte un día con familias locales. Aprende a tejer, cocina con ellas, participa en sus ceremonias y descubre su verdadera forma de vida.'
                  : 'Spend a day with local families. Learn to weave, cook with them, participate in their ceremonies and discover their true way of life.'}
              </p>
              <Link
                href="/tour"
                className="inline-flex items-center bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {language === 'es' ? 'Ver experiencias' : 'View experiences'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold">100%</p>
                <p className="text-sm text-emerald-200">
                  {language === 'es' ? 'Auténtico' : 'Authentic'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold">15+</p>
                <p className="text-sm text-emerald-200">
                  {language === 'es' ? 'Familias' : 'Families'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Handshake className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold">100%</p>
                <p className="text-sm text-emerald-200">
                  {language === 'es' ? 'Comercio justo' : 'Fair trade'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Leaf className="w-8 h-8 mx-auto mb-3" />
                <p className="font-bold">100%</p>
                <p className="text-sm text-emerald-200">
                  {language === 'es' ? 'Sostenible' : 'Sustainable'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Invitación */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Camera className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'es'
              ? 'Ven a conocer a nuestros amigos'
              : 'Come meet our friends'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'es'
              ? 'En Nativo no solo te mostramos Perú, te conectamos con su gente. Cada visita a una comunidad es una experiencia que transforma tanto al viajero como a la familia que recibe.'
              : 'At Nativo we don\'t just show you Peru, we connect you with its people. Each visit to a community is an experience that transforms both the traveler and the host family.'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact us'}
            </Link>
            <Link
              href="/tour"
              className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold transition-all"
            >
              {language === 'es' ? 'Ver tours vivenciales' : 'View experiential tours'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}