import { Tour, Testimonial } from '@/types';

export const tours: Tour[] = [
  {
    id: '1',
    title: 'Machu Picchu Clásico',
    titleEn: 'Classic Machu Picchu',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000',
    duration: 1,
    difficulty: 'easy',
    price: 180,
    description: 'Descubre la maravilla del mundo en un tour guiado completo. Incluye transporte, entrada y guía experto.',
    descriptionEn: 'Discover the wonder of the world on a complete guided tour. Includes transportation, entrance and expert guide.',
    highlights: [
      'Tour guiado por experto local',
      'Transporte desde Cusco',
      'Entrada a Machu Picchu',
      'Almuerzo incluido'
    ],
    highlightsEn: [
      'Tour guided by local expert',
      'Transport from Cusco',
      'Machu Picchu entrance',
      'Lunch included'
    ]
  },
  {
    id: '2',
    title: 'Montaña de 7 Colores',
    titleEn: 'Rainbow Mountain',
    image: 'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?q=80&w=1000',
    duration: 1,
    difficulty: 'challenging',
    price: 85,
    description: 'Caminata espectacular a 5,200 msnm. Una experiencia única con paisajes de ensueño.',
    descriptionEn: 'Spectacular hike at 17,060 ft. A unique experience with dreamlike landscapes.',
    highlights: [
      'Desayuno y almuerzo',
      'Guía profesional',
      'Transporte ida y vuelta',
      'Entrada al parque'
    ],
    highlightsEn: [
      'Breakfast and lunch',
      'Professional guide',
      'Round trip transport',
      'Park entrance'
    ]
  },
  {
    id: '3',
    title: 'Laguna Humantay',
    titleEn: 'Humantay Lake',
    image: 'https://images.unsplash.com/photo-1583338982726-44a6c5d644c2?q=80&w=1000',
    duration: 1,
    difficulty: 'moderate',
    price: 75,
    description: 'Laguna turquesa a 4,200 msnm rodeada de glaciares. Perfecta para amantes de la naturaleza.',
    descriptionEn: 'Turquoise lake at 13,780 ft surrounded by glaciers. Perfect for nature lovers.',
    highlights: [
      'Desayuno buffet',
      'Almuerzo tradicional',
      'Guía bilingüe',
      'Bastones de trekking'
    ],
    highlightsEn: [
      'Buffet breakfast',
      'Traditional lunch',
      'Bilingual guide',
      'Trekking poles'
    ]
  },
  {
    id: '4',
    title: 'Valle Sagrado',
    titleEn: 'Sacred Valley',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1000',
    duration: 1,
    difficulty: 'easy',
    price: 95,
    description: 'Recorre Pisac, Ollantaytambo y Chinchero. Cultura, historia y artesanía en un solo día.',
    descriptionEn: 'Visit Pisac, Ollantaytambo and Chinchero. Culture, history and crafts in one day.',
    highlights: [
      'Tres sitios arqueológicos',
      'Mercado artesanal',
      'Almuerzo buffet',
      'Guía certificado'
    ],
    highlightsEn: [
      'Three archaeological sites',
      'Craft market',
      'Buffet lunch',
      'Certified guide'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    country: 'USA',
    rating: 5,
    text: 'Una experiencia increíble. Nuestro guía fue muy profesional y conocedor. Machu Picchu fue aún más impresionante de lo que imaginaba.',
    textEn: 'An incredible experience. Our guide was very professional and knowledgeable. Machu Picchu was even more impressive than I imagined.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200'
  },
  {
    id: '2',
    name: 'Marco Rossi',
    country: 'Italy',
    rating: 5,
    text: 'La Montaña de 7 Colores fue desafiante pero totalmente valió la pena. El paisaje es de otro mundo. Altamente recomendado.',
    textEn: 'Rainbow Mountain was challenging but totally worth it. The landscape is out of this world. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200'
  },
  {
    id: '3',
    name: 'Emma Schmidt',
    country: 'Germany',
    rating: 5,
    text: 'Servicio excelente desde la reserva hasta el final del tour. Todo estaba perfectamente organizado. Volveremos pronto.',
    textEn: 'Excellent service from booking to the end of the tour. Everything was perfectly organized. We will be back soon.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200'
  },
  {
    id: '4',
    name: 'Carlos Mendoza',
    country: 'Mexico',
    rating: 5,
    text: 'La mejor agencia de tours en Cusco. Precios justos, guías expertos y experiencias auténticas. 100% recomendado.',
    textEn: 'The best tour agency in Cusco. Fair prices, expert guides and authentic experiences. 100% recommended.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200'
  }
];
