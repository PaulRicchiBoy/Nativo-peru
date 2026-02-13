// lib/data.ts
import { Tour, Testimonial } from '@/types';

export const tours: Tour[] = [
  
    
  {
    
    id: 'experiencia-lima-cusco',
    title: 'Experiencia Lima - Cusco 8d/7n',
    titleEn: 'Lima - Cusco Experience 8d/7n',
    image: '/lima.png',
    duration: 8,
    difficulty: 'moderate',
    price: 1499,
    description: 'Vive el Perú en una sola experiencia: desde la moderna Lima hasta la mágica ciudad imperial del Cusco.',
    descriptionEn: 'Experience Peru in one single journey: from modern Lima to the magical imperial city of Cusco.',
    highlights: [
      'City Tour Lima + Circuito Mágico del Agua',
      'Islas Ballestas y Huacachina',
      'City Tour Cusco completo',
      'Valle Sagrado de los Incas',
      'Machu Picchu - Maravilla del Mundo',
      'Montaña de 7 Colores',
      'Laguna Humantay'
    ],
    highlightsEn: [
      'Lima City Tour + Magic Water Circuit',
      'Ballestas Islands and Huacachina',
      'Complete Cusco City Tour',
      'Sacred Valley of the Incas',
      'Machu Picchu - World Wonder',
      'Rainbow Mountain',
      'Humantay Lake'
    ],
    hotelCategory: '3★',
    passengerType: 'Premium',
    inclusions: [
      'Todos los traslados aeropuerto-hotel',
      '7 noches de hotel 3★',
      'Desayunos diarios',
      'Almuerzos según itinerario',
      'Tickets de ingreso a todas las atracciones',
      'Guía profesional bilingüe',
      'Transporte turístico'
    ],
    inclusionsEn: [
      'All airport-hotel transfers',
      '7 nights in 3★ hotels',
      'Daily breakfasts',
      'Lunches according to itinerary',
      'Entrance tickets to all attractions',
      'Professional bilingual guide',
      'Tourist transportation'
    ]
  },
  {
  id: 'peru-bolivia-aventura',
  title: 'Aventura Perú - Bolivia 11 Días / 10 Noches',
  titleEn: 'Peru - Bolivia Adventure 11 Days / 10 Nights',
  image: '/bolivia.png',
  duration: 11,
  difficulty: 'moderate',
  price: 2199,
  description: 'Vive una experiencia inolvidable recorriendo lo mejor de Perú y Bolivia: Lima, Paracas, Cusco, Machu Picchu, Lago Titicaca, La Paz y el Salar de Uyuni.',
  descriptionEn: 'Live an unforgettable experience touring the best of Peru and Bolivia: Lima, Paracas, Cusco, Machu Picchu, Lake Titicaca, La Paz, and the Uyuni Salt Flat.',
  highlights: [
    'Lima City Tour + Circuito Mágico del Agua',
    'Islas Ballestas + Oasis de Huacachina',
    'Cusco y Valle Sagrado completo',
    'Machu Picchu - Maravilla del Mundo',
    'Opción Montaña de Colores o Laguna Humantay',
    'Lago Titicaca: Islas Uros y Taquile',
    'La Paz + Valle de la Luna + Teleféricos',
    'Salar de Uyuni + Isla Incahuasi',
    '10 noches de alojamiento en hoteles seleccionados',
    'Todas las entradas y transportes incluidos'
  ],
  highlightsEn: [
    'Lima City Tour + Magic Water Circuit',
    'Ballestas Islands + Huacachina Oasis',
    'Complete Cusco and Sacred Valley',
    'Machu Picchu - World Wonder',
    'Option: Rainbow Mountain or Humantay Lake',
    'Lake Titicaca: Uros and Taquile Islands',
    'La Paz + Moon Valley + Cable Cars',
    'Uyuni Salt Flat + Incahuasi Island',
    '10 nights accommodation in selected hotels',
    'All entrance fees and transportation included'
  ],
  hotelCategory: '2★ a 3★',
  passengerType: 'Aventureros',
  inclusions: [
    '10 noches de hotel (Lima, Cusco, Aguas Calientes, Puno, La Paz)',
    'Todos los traslados aeropuerto-hotel',
    'Tickets de ingreso a todas las atracciones',
    'Guía profesional bilingüe en todos los tours',
    'Desayunos diarios en los hoteles',
    'Almuerzos según itinerario (Valle Sagrado, Taquile, Uyuni)',
    'Transporte turístico terrestre',
    'Vuelo Lima - Cusco incluido',
    'Tren turístico a Machu Picchu',
    'Bus turístico Cusco - Puno - La Paz - Uyuni',
    'Tour en lancha en Islas Ballestas y Lago Titicaca',
    'Tour 4x4 en Salar de Uyuni',
    'Degustación de vinos y piscos en Ica',
    'Snack en el atardecer del Salar de Uyuni',
    'Asistencia permanente 24/7'
  ],
  inclusionsEn: [
    '10 nights hotel (Lima, Cusco, Aguas Calientes, Puno, La Paz)',
    'All airport-hotel transfers',
    'Entrance tickets to all attractions',
    'Professional bilingual guide on all tours',
    'Daily breakfasts at hotels',
    'Lunches according to itinerary (Sacred Valley, Taquile, Uyuni)',
    'Tourist land transportation',
    'Lima - Cusco flight included',
    'Tourist train to Machu Picchu',
    'Tourist bus Cusco - Puno - La Paz - Uyuni',
    'Boat tour to Ballestas Islands and Lake Titicaca',
    '4x4 tour in Uyuni Salt Flat',
    'Wine and pisco tasting in Ica',
    'Snack at Uyuni Salt Flat sunset',
    '24/7 permanent assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Llegada a Lima + City Tour',
      titleEn: 'Arrival in Lima + City Tour',
      description: 'Traslado aeropuerto-hotel. Por la tarde: City Tour Lima con visita a Huaca Pucllana, Centro Histórico, Catedral, Convento de San Francisco y Circuito Mágico del Agua.',
      descriptionEn: 'Airport-hotel transfer. Afternoon: Lima City Tour visiting Huaca Pucllana, Historic Center, Cathedral, San Francisco Convent, and Magic Water Circuit.',
      schedule: 'Todo el día',
      includes: ['Traslado aeropuerto', 'City Tour Lima', 'Entradas', 'Guía profesional', 'Noche en Lima'],
      includesEn: ['Airport transfer', 'Lima City Tour', 'Entrance tickets', 'Professional guide', 'Night in Lima']
    },
    {
      day: 2,
      title: 'Paracas & Islas Ballestas + Huacachina',
      titleEn: 'Paracas & Ballestas Islands + Huacachina',
      description: 'Salida temprano a Paracas. Tour en lancha a Islas Ballestas para ver fauna marina. Continúa a Ica para degustación de vinos y piscos, y aventura en buggys y sandboarding en el Oasis de Huacachina.',
      descriptionEn: 'Early departure to Paracas. Boat tour to Ballestas Islands to see marine wildlife. Continue to Ica for wine and pisco tasting, and buggy/sandboarding adventure at Huacachina Oasis.',
      schedule: '05:00 - 22:30',
      includes: ['Transporte Lima-Paracas-Ica', 'Lancha Islas Ballestas', 'Degustación vinos/piscos', 'Buggys y sandboarding', 'Retorno a Lima'],
      includesEn: ['Lima-Paracas-Ica transportation', 'Ballestas Islands boat', 'Wine/pisco tasting', 'Buggies and sandboarding', 'Return to Lima']
    },
    {
      day: 3,
      title: 'Vuelo a Cusco + City Tour',
      titleEn: 'Flight to Cusco + City Tour',
      description: 'Vuelo a Cusco. Recepción y traslado al hotel. Por la tarde: City Tour Cusco visitando Qoricancha, Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay.',
      descriptionEn: 'Flight to Cusco. Reception and hotel transfer. Afternoon: Cusco City Tour visiting Qoricancha, Sacsayhuamán, Q\'enqo, Puka Pukara, and Tambomachay.',
      schedule: 'Todo el día',
      includes: ['Vuelo Lima-Cusco', 'Traslados', 'City Tour Cusco', 'Boleto Turístico', 'Noche en Cusco'],
      includesEn: ['Lima-Cusco flight', 'Transfers', 'Cusco City Tour', 'Tourist Ticket', 'Night in Cusco']
    },
    {
      day: 4,
      title: 'Valle Sagrado de los Incas',
      titleEn: 'Sacred Valley of the Incas',
      description: 'Tour completo del Valle Sagrado: Mirador de Taray, Pisac, almuerzo buffet en Urubamba, Ollantaytambo. Tren a Aguas Calientes.',
      descriptionEn: 'Complete Sacred Valley tour: Taray Viewpoint, Pisac, buffet lunch in Urubamba, Ollantaytambo. Train to Aguas Calientes.',
      schedule: '08:00 - 19:00',
      includes: ['Transporte turístico', 'Visita a Pisac y Ollantaytambo', 'Almuerzo buffet', 'Tren a Aguas Calientes', 'Noche en Aguas Calientes'],
      includesEn: ['Tourist transportation', 'Visit to Pisac and Ollantaytambo', 'Buffet lunch', 'Train to Aguas Calientes', 'Night in Aguas Calientes']
    },
    {
      day: 5,
      title: 'Machu Picchu',
      titleEn: 'Machu Picchu',
      description: 'Bus a Machu Picchu para visita guiada de 2 horas. Tiempo libre para fotos. Retorno a Cusco.',
      descriptionEn: 'Bus to Machu Picchu for 2-hour guided visit. Free time for photos. Return to Cusco.',
      schedule: '06:00 - 21:00',
      includes: ['Bus subida/bajada', 'Entrada Machu Picchu', 'Guía profesional', 'Tren de retorno', 'Transporte a Cusco', 'Noche en Cusco'],
      includesEn: ['Roundtrip bus', 'Machu Picchu entrance', 'Professional guide', 'Return train', 'Transport to Cusco', 'Night in Cusco']
    },
    {
      day: 6,
      title: 'Opción 1: Montaña de Colores / Opción 2: Laguna Humantay',
      titleEn: 'Option 1: Rainbow Mountain / Option 2: Humantay Lake',
      description: 'Elección entre: 1) Trekking a la Montaña de 7 Colores o 2) Caminata a la Laguna Humantay. Retorno a Cusco y bus nocturno a Puno.',
      descriptionEn: 'Choose between: 1) Trekking to Rainbow Mountain or 2) Hike to Humantay Lake. Return to Cusco and overnight bus to Puno.',
      schedule: '04:30 - 22:00',
      includes: ['Desayuno y almuerzo', 'Transporte al tour', 'Entradas', 'Guía', 'Bus nocturno Cusco-Puno'],
      includesEn: ['Breakfast and lunch', 'Transport to tour', 'Entrance tickets', 'Guide', 'Overnight bus Cusco-Puno']
    },
    {
      day: 7,
      title: 'Lago Titicaca: Uros & Taquile',
      titleEn: 'Lake Titicaca: Uros & Taquile',
      description: 'Llegada a Puno y tour al Lago Titicaca: Islas flotantes de los Uros e Isla Taquile con almuerzo típico de trucha.',
      descriptionEn: 'Arrival in Puno and tour to Lake Titicaca: Floating Uros Islands and Taquile Island with typical trout lunch.',
      schedule: '07:00 - 17:00',
      includes: ['Traslados', 'Lancha turística', 'Visita Uros y Taquile', 'Almuerzo típico', 'Noche en Puno'],
      includesEn: ['Transfers', 'Tourist boat', 'Visit Uros and Taquile', 'Typical lunch', 'Night in Puno']
    },
    {
      day: 8,
      title: 'Puno → La Paz (Bolivia)',
      titleEn: 'Puno → La Paz (Bolivia)',
      description: 'Viaje en bus turístico cruzando la frontera Perú-Bolivia. Llegada a La Paz y traslado al hotel.',
      descriptionEn: 'Tourist bus journey crossing Peru-Bolivia border. Arrival in La Paz and hotel transfer.',
      schedule: '08:00 - 17:00',
      includes: ['Desayuno', 'Bus turístico Puno-La Paz', 'Traslado hotel', 'Noche en La Paz'],
      includesEn: ['Breakfast', 'Tourist bus Puno-La Paz', 'Hotel transfer', 'Night in La Paz']
    },
    {
      day: 9,
      title: 'La Paz + Teleféricos + Valle de la Luna',
      titleEn: 'La Paz + Cable Cars + Moon Valley',
      description: 'City tour por La Paz: Teleféricos, Plaza Murillo, Catedral, Mercado de las Brujas y Valle de la Luna. Bus nocturno a Uyuni.',
      descriptionEn: 'City tour of La Paz: Cable Cars, Murillo Square, Cathedral, Witches Market, and Moon Valley. Overnight bus to Uyuni.',
      schedule: '09:00 - 22:00',
      includes: ['Desayuno', 'City Tour La Paz', 'Teleféricos', 'Entrada Valle de la Luna', 'Bus La Paz-Uyuni'],
      includesEn: ['Breakfast', 'La Paz City Tour', 'Cable Cars', 'Moon Valley entrance', 'Bus La Paz-Uyuni']
    },
    {
      day: 10,
      title: 'Salar de Uyuni',
      titleEn: 'Uyuni Salt Flat',
      description: 'Tour completo 4x4 por el Salar: Cementerio de trenes, Colchani, Monumento Dakar, Isla Incahuasi, atardecer con vino y snacks. Bus nocturno a La Paz.',
      descriptionEn: 'Complete 4x4 tour of the Salt Flat: Train Cemetery, Colchani, Dakar Monument, Incahuasi Island, sunset with wine and snacks. Overnight bus to La Paz.',
      schedule: '10:00 - 20:00',
      includes: ['Jeep 4x4', 'Guía/conductor', 'Entradas', 'Almuerzo en hotel de sal', 'Snack atardecer', 'Bus Uyuni-La Paz'],
      includesEn: ['4x4 Jeep', 'Guide/driver', 'Entrance tickets', 'Lunch at salt hotel', 'Sunset snack', 'Bus Uyuni-La Paz']
    },
    {
      day: 11,
      title: 'La Paz Libre + Aeropuerto',
      titleEn: 'Free Day La Paz + Airport',
      description: 'Día libre en La Paz para compras y paseos. Traslado al aeropuerto para vuelo de retorno.',
      descriptionEn: 'Free day in La Paz for shopping and walks. Transfer to airport for return flight.',
      schedule: 'Flexible',
      includes: ['Desayuno', 'Traslado aeropuerto', 'Fin de servicios'],
      includesEn: ['Breakfast', 'Airport transfer', 'End of services']
    }
  ]
},{
  id: 'cuzco-inolvidable-3d2n',
  title: 'Cusco Inolvidable 3D/2N',
  titleEn: 'Unforgettable Cusco 3D/2N',
  image: '/cuscoInolvidable4d-3n.png',
  duration: 3,
  difficulty: 'easy',
  price: 599,
  description: 'Descubre la magia del Cusco Imperial en 3 días intensos: desde la llegada a la ciudad imperial con mate de coca hasta la majestuosa ciudadela de Machu Picchu. Tour completo con todos los tickets incluidos.',
  descriptionEn: 'Discover the magic of Imperial Cusco in 3 intense days: from arrival in the imperial city with coca tea to the majestic Machu Picchu citadel. Complete tour with all tickets included.',
  highlights: [
    'Traslado aeropuerto-hotel con bienvenida especial',
    'City Tour completo en Cusco Imperial',
    'Visita a Qoricancha (Templo del Sol)',
    'Tour a 4 sitios arqueológicos: Sacsayhuamán, Q\'enqo, Puka Pukara, Tambomachay',
    'Machu Picchu - Maravilla del Mundo',
    'Transporte en tren turístico panorámico',
    'Buses Consettur a Machu Picchu',
    'Guía profesional bilingüe'
  ],
  highlightsEn: [
    'Airport-hotel transfer with special welcome',
    'Complete City Tour in Imperial Cusco',
    'Visit to Qoricancha (Temple of the Sun)',
    'Tour to 4 archaeological sites: Sacsayhuamán, Q\'enqo, Puka Pukara, Tambomachay',
    'Machu Picchu - World Wonder',
    'Panoramic tourist train transportation',
    'Consettur buses to Machu Picchu',
    'Professional bilingual guide'
  ],
  hotelCategory: '3★',
  passengerType: 'Premium',
  inclusions: [
    'Traslado aeropuerto-hotel en Cusco',
    '1 botella de agua de bienvenida',
    'Mate de coca al llegar',
    'Charla informativa sobre itinerario',
    'Transporte turístico en todos los tours',
    'Ticket de ingreso a Catedral del Cusco',
    'Ticket de ingreso a Qoricancha',
    'Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos',
    'Guía profesional bilingüe',
    '2 noches de hotel en Cusco (categoría 3★)',
    'Desayunos en el hotel',
    'Traslado hotel-estación de tren',
    'Transporte Cusco-Ollantaytambo-Cusco',
    'Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)',
    'Ticket de bus Consettur (subida y bajada Aguas Calientes-Machu Picchu)',
    'Ticket de ingreso a Machu Picchu',
    'Traslado hotel-aeropuerto'
  ],
  inclusionsEn: [
    'Airport-hotel transfer in Cusco',
    '1 welcome water bottle',
    'Coca tea upon arrival',
    'Informative talk about itinerary',
    'Tourist transportation on all tours',
    'Entrance ticket to Cusco Cathedral',
    'Entrance ticket to Qoricancha',
    'Partial Tourist Ticket (BTP) for 4 archaeological sites',
    'Professional bilingual guide',
    '2 nights hotel in Cusco (3★ category)',
    'Breakfasts at hotel',
    'Hotel-train station transfer',
    'Cusco-Ollantaytambo-Cusco transportation',
    'Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)',
    'Consettur bus ticket (roundtrip Aguas Calientes-Machu Picchu)',
    'Machu Picchu entrance ticket',
    'Hotel-airport transfer'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Llegada a Cusco Imperial + Bienvenida',
      titleEn: 'Arrival in Imperial Cusco + Welcome',
      description: 'Bienvenida en el aeropuerto de Cusco con traslado al hotel. En el trayecto aprecie atractivos como el monumento a Pachacutec y el Qoricancha. En el hotel se servirá mate de coca y tendremos una charla informativa sobre el itinerario.',
      descriptionEn: 'Welcome at Cusco airport with transfer to hotel. During the journey appreciate attractions like the Pachacutec monument and Qoricancha. At the hotel, coca tea will be served and we\'ll have an informative talk about the itinerary.',
      schedule: 'Según horario de vuelo',
      includes: ['Traslado aeropuerto-hotel', '1 botella de agua', 'Mate de coca', 'Charla informativa', 'Noche en Cusco'],
      includesEn: ['Airport-hotel transfer', '1 water bottle', 'Coca tea', 'Informative talk', 'Night in Cusco']
    },
    {
      day: 2,
      title: 'City Tour Cusco + Sitios Arqueológicos',
      titleEn: 'Cusco City Tour + Archaeological Sites',
      description: 'Comienza en la Plaza de Armas visitando la Catedral y el Qoricancha (Templo del Sol). Luego visita a los sitios arqueológicos aledaños: Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay. Al finalizar retorno a Cusco.',
      descriptionEn: 'Starts at Main Square visiting the Cathedral and Qoricancha (Temple of the Sun). Then visit to nearby archaeological sites: Sacsayhuamán, Q\'enqo, Puka Pukara and Tambomachay. Return to Cusco at the end.',
      schedule: '08:30 - 17:30',
      includes: ['Recojo del hotel', 'Transporte turístico', 'Ticket Catedral', 'Ticket Qoricancha', 'Boleto Turístico BTP', 'Guía profesional', 'Noche en Cusco'],
      includesEn: ['Hotel pickup', 'Tourist transportation', 'Cathedral ticket', 'Qoricancha ticket', 'BTP Tourist Ticket', 'Professional guide', 'Night in Cusco']
    },
    {
      day: 3,
      title: 'Machu Picchu Full Day + Retorno',
      titleEn: 'Machu Picchu Full Day + Return',
      description: 'Salida temprano hacia Ollantaytambo (1h45m). Tren a Aguas Calientes (1h40m). Bus a Machu Picchu (30m). Visita guiada de 2 horas incluyendo Templo de las Tres Ventanas, Reloj Solar, etc. Tiempo libre para fotos. Retorno en bus a Aguas Calientes para almuerzo (por cuenta propia). Tren de retorno a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Early departure to Ollantaytambo (1h45m). Train to Aguas Calientes (1h40m). Bus to Machu Picchu (30m). 2-hour guided visit including Temple of the Three Windows, Sun Dial, etc. Free time for photos. Return bus to Aguas Calientes for lunch (on your own). Return train to Ollantaytambo and bus to Cusco.',
      schedule: '05:00 - 21:00',
      includes: ['Desayuno en hotel', 'Traslado hotel-estación', 'Transporte Cusco-Ollantaytambo', 'Ticket de tren turístico', 'Buses Consettur (ida/vuelta)', 'Ticket Machu Picchu', 'Guía profesional', 'Transporte Ollantaytambo-Cusco'],
      includesEn: ['Breakfast at hotel', 'Hotel-station transfer', 'Cusco-Ollantaytambo transportation', 'Tourist train ticket', 'Consettur buses (roundtrip)', 'Machu Picchu ticket', 'Professional guide', 'Ollantaytambo-Cusco transportation']
    }
  ]
},
{
  "id": "cuzco-inolvidable-4d3n",
  "title": "Cusco Inolvidable 4D/3N",
  "titleEn": "Unforgettable Cusco 4D/3N",
  "image": "",
  "duration": 4,
  "difficulty": "moderate",
  "price": 799,
  "description": "Experimenta lo mejor de Cusco en 4 días: la ciudad imperial, Machu Picchu y tu elección entre la mágica Montaña de 7 Colores o la turquesa Laguna Humantay. Todo incluido para una aventura completa.",
  "descriptionEn": "Experience the best of Cusco in 4 days: the imperial city, Machu Picchu, and your choice between the magical Rainbow Mountain or turquoise Humantay Lake. All included for a complete adventure.",
  "highlights": [
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Machu Picchu - Maravilla del Mundo (full day)",
    "Opción 1: Montaña de 7 Colores (Vinicunca)",
    "Opción 2: Laguna Humantay turquesa",
    "Tren turístico panorámico a Machu Picchu",
    "Visita a Qoricancha y 4 sitios arqueológicos",
    "Todas las comidas en tours de montaña",
    "3 noches de hotel en Cusco"
  ],
  "highlightsEn": [
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Machu Picchu - World Wonder (full day)",
    "Option 1: Rainbow Mountain (Vinicunca)",
    "Option 2: Turquoise Humantay Lake",
    "Panoramic tourist train to Machu Picchu",
    "Visit to Qoricancha and 4 archaeological sites",
    "All meals included on mountain tours",
    "3 nights hotel in Cusco"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida",
    "Mate de coca al llegar",
    "Charla informativa sobre itinerario",
    "3 noches de hotel en Cusco (categoría 3★)",
    "Desayunos diarios en el hotel",
    "Transporte turístico en todos los tours",
    "Ticket de ingreso a Catedral del Cusco",
    "Ticket de ingreso a Qoricancha",
    "Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos",
    "Guía profesional bilingüe en todos los tours",
    "Traslado hotel-estación de tren",
    "Transporte Cusco-Ollantaytambo-Cusco",
    "Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Ticket de bus Consettur (subida y bajada Aguas Calientes-Machu Picchu)",
    "Ticket de ingreso a Machu Picchu",
    "Desayuno y almuerzo en ruta (Día 3 - elección de tour)",
    "Ticket de ingreso a Montaña de Colores O Laguna Humantay",
    "Traslado hotel-aeropuerto"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle",
    "Coca tea upon arrival",
    "Informative talk about itinerary",
    "3 nights hotel in Cusco (3★ category)",
    "Daily breakfasts at hotel",
    "Tourist transportation on all tours",
    "Entrance ticket to Cusco Cathedral",
    "Entrance ticket to Qoricancha",
    "Partial Tourist Ticket (BTP) for 4 archaeological sites",
    "Professional bilingual guide on all tours",
    "Hotel-train station transfer",
    "Cusco-Ollantaytambo-Cusco transportation",
    "Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Consettur bus ticket (roundtrip Aguas Calientes-Machu Picchu)",
    "Machu Picchu entrance ticket",
    "Breakfast and lunch en route (Day 3 - tour choice)",
    "Entrance ticket to Rainbow Mountain OR Humantay Lake",
    "Hotel-airport transfer"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Cusco + City Tour Imperial",
      "titleEn": "Arrival in Cusco + Imperial City Tour",
      "description": "Bienvenida en el aeropuerto con traslado al hotel. Aprecie el monumento a Pachacutec y Qoricancha en el trayecto. Mate de coca y charla informativa. Por la tarde: City Tour comenzando en la Plaza de Armas, visitando la Catedral, Qoricancha (Templo del Sol), y los sitios arqueológicos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Airport welcome with hotel transfer. Appreciate Pachacutec monument and Qoricancha on the way. Coca tea and informative talk. Afternoon: City Tour starting at Main Square, visiting Cathedral, Qoricancha (Temple of the Sun), and archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "12:45 PM - 06:30 PM",
      "includes": [
        "Traslado aeropuerto-hotel",
        "1 botella agua",
        "Mate de coca",
        "City Tour Cusco",
        "Ticket Catedral",
        "Ticket Qoricancha",
        "Boleto Turístico BTP",
        "Guía profesional",
        "Noche en Cusco"
      ],
      "includesEn": [
        "Airport-hotel transfer",
        "1 water bottle",
        "Coca tea",
        "Cusco City Tour",
        "Cathedral ticket",
        "Qoricancha ticket",
        "BTP Tourist Ticket",
        "Professional guide",
        "Night in Cusco"
      ]
    },
    {
      "day": 2,
      "title": "Machu Picchu - Maravilla del Mundo",
      "titleEn": "Machu Picchu - World Wonder",
      "description": "Salida temprano hacia Ollantaytambo (1h45m). Tren panorámico a Aguas Calientes (1h40m). Bus a Machu Picchu (30m). Visita guiada de 2 horas: Templo de las Tres Ventanas, Reloj Solar, y más. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Tren de retorno a Ollantaytambo y bus a Cusco.",
      "descriptionEn": "Early departure to Ollantaytambo (1h45m). Panoramic train to Aguas Calientes (1h40m). Bus to Machu Picchu (30m). 2-hour guided visit: Temple of the Three Windows, Sun Dial, and more. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Return train to Ollantaytambo and bus to Cusco.",
      "schedule": "05:00 AM - 09:00 PM",
      "includes": [
        "Desayuno hotel",
        "Traslado hotel-estación",
        "Transporte Cusco-Ollantaytambo",
        "Ticket tren turístico",
        "Buses Consettur (ida/vuelta)",
        "Ticket Machu Picchu",
        "Guía profesional",
        "Transporte Ollantaytambo-Cusco",
        "Noche en Cusco"
      ],
      "includesEn": [
        "Hotel breakfast",
        "Hotel-station transfer",
        "Cusco-Ollantaytambo transportation",
        "Tourist train ticket",
        "Consettur buses (roundtrip)",
        "Machu Picchu ticket",
        "Professional guide",
        "Ollantaytambo-Cusco transportation",
        "Night in Cusco"
      ]
    },
    {
      "day": 3,
      "title": "Opción 1: Montaña de 7 Colores / Opción 2: Laguna Humantay",
      "titleEn": "Option 1: Rainbow Mountain / Option 2: Humantay Lake",
      "description": "OPCIÓN 1 (04:30 AM - 05:00 PM): Salida temprano a Cusipata para desayuno. Caminata de 1h45min a la Montaña de Colores. Explicación del guía, tiempo para fotos y experiencia única. Retorno para almuerzo y regreso a Cusco. OPCIÓN 2 (04:30 AM - 05:00 PM): Salida a Mollepata para desayuno. Caminata de 1h45min desde Soraypampa a la Laguna Humantay. Fotos con vista a nevados. Retorno para almuerzo y regreso a Cusco.",
      "descriptionEn": "OPTION 1 (04:30 AM - 05:00 PM): Early departure to Cusipata for breakfast. 1h45min hike to Rainbow Mountain. Guide explanation, photo time, unique experience. Return for lunch and back to Cusco. OPTION 2 (04:30 AM - 05:00 PM): Departure to Mollepata for breakfast. 1h45min hike from Soraypampa to Humantay Lake. Photos with mountain views. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": [
        "Desayuno y almuerzo en ruta",
        "Transporte turístico",
        "Guía profesional",
        "Ticket de ingreso (Montaña o Laguna)",
        "Noche en Cusco"
      ],
      "includesEn": [
        "Breakfast and lunch en route",
        "Tourist transportation",
        "Professional guide",
        "Entrance ticket (Mountain or Lake)",
        "Night in Cusco"
      ]
    },
    {
      "day": 4,
      "title": "Despedida + Traslado Aeropuerto",
      "titleEn": "Farewell + Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": [
        "Desayuno",
        "Traslado hotel-aeropuerto",
        "Fin de servicios"
      ],
      "includesEn": [
        "Breakfast",
        "Hotel-airport transfer",
        "End of services"
      ]
    }
  ]
},{
  "id": "cusco-inolvidable-6d5n",
  "title": "Cusco Inolvidable 6D/5N",
  "titleEn": "Unforgettable Cusco 6D/5N",
  "image": "/cuzco-montana-colores.png",
  "duration": 6,
  "difficulty": "moderate",
  "price": 1099,
  "description": "Descubre la esencia del Imperio Inca en 6 días completos: Cusco Imperial, Valle Sagrado, Machu Picchu, las salineras de Maras y Moray, y tu elección entre la Laguna Humantay o la Montaña de Colores. Una aventura integral con todo incluido.",
  "descriptionEn": "Discover the essence of the Inca Empire in 6 full days: Imperial Cusco, Sacred Valley, Machu Picchu, the Maras Salt Mines and Moray, and your choice between Humantay Lake or Rainbow Mountain. A comprehensive adventure with everything included.",
  "highlights": [
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Valle Sagrado con almuerzo buffet",
    "Machu Picchu - Maravilla del Mundo",
    "Tour a las Salineras de Maras y las Terrazas de Moray",
    "Opción 1: Laguna Humantay turquesa",
    "Opción 2: Montaña de 7 Colores (Vinicunca)",
    "Tren turístico panorámico a Machu Picchu",
    "Visita a Ollantaytambo, pueblo Inca viviente",
    "5 noches de hotel (Cusco y Aguas Calientes)"
  ],
  "highlightsEn": [
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Sacred Valley with buffet lunch",
    "Machu Picchu - World Wonder",
    "Tour to Maras Salt Mines and Moray Terraces",
    "Option 1: Turquoise Humantay Lake",
    "Option 2: Rainbow Mountain (Vinicunca)",
    "Panoramic tourist train to Machu Picchu",
    "Visit to Ollantaytambo, living Inca town",
    "5 nights hotel (Cusco and Aguas Calientes)"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida",
    "Mate de coca al llegar",
    "Charla informativa sobre itinerario",
    "4 noches de hotel en Cusco (categoría 3★)",
    "1 noche de hotel en Aguas Calientes",
    "Desayunos diarios en el hotel",
    "Transporte turístico en todos los tours",
    "Ticket de ingreso a Catedral del Cusco",
    "Ticket de ingreso a Qoricancha",
    "Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos (Día 1)",
    "Boleto Turístico Parcial (BTP) para Pisac y Ollantaytambo (Día 2)",
    "Almuerzo buffet en Urubamba (Día 2)",
    "Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Ticket de bus Consettur (subida y bajada Aguas Calientes-Machu Picchu)",
    "Ticket de ingreso a Machu Picchu",
    "Ticket de ingreso a Salineras de Maras y Moray (Día 4)",
    "Desayuno y almuerzo en ruta (Día 5 - elección de tour)",
    "Ticket de ingreso a Laguna Humantay O Montaña de Colores",
    "Traslado hotel-aeropuerto"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle",
    "Coca tea upon arrival",
    "Informative talk about itinerary",
    "4 nights hotel in Cusco (3★ category)",
    "1 night hotel in Aguas Calientes",
    "Daily breakfasts at hotel",
    "Tourist transportation on all tours",
    "Entrance ticket to Cusco Cathedral",
    "Entrance ticket to Qoricancha",
    "Partial Tourist Ticket (BTP) for 4 archaeological sites (Day 1)",
    "Partial Tourist Ticket (BTP) for Pisac and Ollantaytambo (Day 2)",
    "Buffet lunch in Urubamba (Day 2)",
    "Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Consettur bus ticket (roundtrip Aguas Calientes-Machu Picchu)",
    "Machu Picchu entrance ticket",
    "Entrance ticket to Maras Salt Mines and Moray (Day 4)",
    "Breakfast and lunch en route (Day 5 - tour choice)",
    "Entrance ticket to Humantay Lake OR Rainbow Mountain",
    "Hotel-airport transfer"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Cusco + City Tour Imperial",
      "titleEn": "Arrival in Cusco + Imperial City Tour",
      "description": "Bienvenida en el aeropuerto con traslado al hotel. Aprecie el monumento a Pachacutec y Qoricancha en el trayecto. Mate de coca y charla informativa. Por la tarde: City Tour comenzando en la Plaza de Armas, visitando la Catedral, Qoricancha (Templo del Sol), y los sitios arqueológicos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Airport welcome with hotel transfer. Appreciate Pachacutec monument and Qoricancha on the way. Coca tea and informative talk. Afternoon: City Tour starting at Main Square, visiting Cathedral, Qoricancha (Temple of the Sun), and archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "12:45 PM - 06:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "1 botella agua", "Mate de coca", "City Tour Cusco", "Ticket Catedral", "Ticket Qoricancha", "Boleto Turístico BTP", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Airport-hotel transfer", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral ticket", "Qoricancha ticket", "BTP Tourist Ticket", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 2,
      "title": "Valle Sagrado de los Incas + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley of the Incas + Train to Aguas Calientes",
      "description": "Recojo del hotel. Visita al mirador de Taray para apreciar el Valle Sagrado. Recorrido por el complejo arqueológico de Pisaq. Traslado a Urubamba para un almuerzo buffet. Por la tarde, visita a Ollantaytambo y su complejo arqueológico. Al finalizar, traslado a la estación para abordar el tren turístico hacia Aguas Calientes, donde se pernocta.",
      "descriptionEn": "Hotel pick-up. Visit to Taray viewpoint to appreciate the Sacred Valley. Tour of the Pisaq archaeological complex. Transfer to Urubamba for a buffet lunch. In the afternoon, visit to Ollantaytambo and its archaeological complex. Afterwards, transfer to the station to board the tourist train to Aguas Calientes for overnight stay.",
      "schedule": "07:35 AM - 06:30 PM (approx. train departure)",
      "includes": ["Desayuno hotel", "1 botella agua", "Almuerzo buffet", "Transporte turístico", "Ticket BTP (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "1 water bottle", "Buffet lunch", "Tourist transportation", "BTP Ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 3,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus a la ciudadela de Machu Picchu. Visita guiada de 2 horas por la maravilla, incluyendo el Templo de las Tres Ventanas y el Reloj Solar. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Toma del tren de retorno a Ollantaytambo y traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus transfer to Machu Picchu citadel. 2-hour guided tour of the wonder, including the Temple of the Three Windows and the Sun Dial. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Board return train to Ollantaytambo and bus transfer to Cusco.",
      "schedule": "08:00 AM - 09:00 PM (approx. arrival in Cusco)",
      "includes": ["Desayuno hotel", "Bus Consettur (ida y vuelta)", "Ticket Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus (roundtrip)", "Machu Picchu ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Tour a Maras, Moray y Chinchero",
      "titleEn": "Tour to Maras, Moray and Chinchero",
      "description": "Salida del hotel. Visita a las terrazas circulares de Moray, antiguo centro de investigación agrícola inca. Continuación a las famosas Salineras de Maras. Finalmente, visita a Chinchero para conocer su tradición textil y procesos de elaboración. Tarde libre en Cusco para actividades personales.",
      "descriptionEn": "Hotel departure. Visit to the circular terraces of Moray, an ancient Inca agricultural research center. Continue to the famous Maras Salt Mines. Finally, visit to Chinchero to learn about its textile tradition and production processes. Free afternoon in Cusco for personal activities.",
      "schedule": "08:30 AM - 02:30 PM",
      "includes": ["Desayuno hotel", "Transporte turístico", "Ticket ingreso a Salineras y Moray", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Tourist transportation", "Entrance ticket to Salt Mines and Moray", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Opción 1: Laguna Humantay / Opción 2: Montaña de 7 Colores",
      "titleEn": "Option 1: Humantay Lake / Option 2: Rainbow Mountain",
      "description": "OPCIÓN 1 (04:30 AM - 05:00 PM): Salida temprano a Mollepata para desayuno. Caminata de 1h45min desde Soraypampa a la Laguna Humantay. Explicación del guía, tiempo para fotos. Retorno para almuerzo y regreso a Cusco. OPCIÓN 2 (04:30 AM - 05:00 PM): Salida a Cusipata para desayuno. Caminata de 1h45min a la Montaña de Colores. Explicación, fotos y experiencia única. Retorno para almuerzo y regreso a Cusco.",
      "descriptionEn": "OPTION 1 (04:30 AM - 05:00 PM): Early departure to Mollepata for breakfast. 1h45min hike from Soraypampa to Humantay Lake. Guide explanation, photo time. Return for lunch and back to Cusco. OPTION 2 (04:30 AM - 05:00 PM): Departure to Cusipata for breakfast. 1h45min hike to Rainbow Mountain. Guide explanation, photos, unique experience. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso (Laguna o Montaña)", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket (Lake or Mountain)", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "Despedida + Traslado Aeropuerto",
      "titleEn": "Farewell + Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer", "End of services"]
    }
  ]
},{
  "id": "cusco-inolvidable-7d6n",
  "title": "Cusco Inolvidable 7D/6N",
  "titleEn": "Unforgettable Cusco 7D/6N",
  "image": "/cuzco-montana-colores.png",
  "duration": 7,
  "difficulty": "moderate",
  "price": 1299,
  "description": "La experiencia máxima en Cusco: 7 días para explorar la ciudad imperial, el Valle Sagrado, Machu Picchu, la Montaña de 7 Colores, la Laguna Humantay y las salineras de Maras con Moray. Una inmersión total en la cultura e historia inca.",
  "descriptionEn": "The ultimate Cusco experience: 7 days to explore the imperial city, Sacred Valley, Machu Picchu, Rainbow Mountain, Humantay Lake, and the Maras Salt Mines with Moray. A total immersion into Inca culture and history.",
  "highlights": [
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Valle Sagrado con almuerzo buffet en Urubamba",
    "Machu Picchu - Maravilla del Mundo",
    "Montaña de 7 Colores (Vinicunca) - experiencia Instagrameable",
    "Laguna Humantay turquesa",
    "Tour a las Salineras de Maras y las Terrazas de Moray",
    "Visita a Chinchero y su tradición textil",
    "Tren turístico panorámico a Machu Picchu",
    "6 noches de hotel (Cusco y Aguas Calientes)"
  ],
  "highlightsEn": [
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Sacred Valley with buffet lunch in Urubamba",
    "Machu Picchu - World Wonder",
    "Rainbow Mountain (Vinicunca) - Instagrammable experience",
    "Turquoise Humantay Lake",
    "Tour to Maras Salt Mines and Moray Terraces",
    "Visit to Chinchero and its textile tradition",
    "Panoramic tourist train to Machu Picchu",
    "6 nights hotel (Cusco and Aguas Calientes)"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida",
    "Mate de coca al llegar",
    "Charla informativa sobre itinerario",
    "5 noches de hotel en Cusco (categoría 3★)",
    "1 noche de hotel en Aguas Calientes",
    "Desayunos diarios en el hotel",
    "Transporte turístico en todos los tours",
    "Ticket de ingreso a Catedral del Cusco",
    "Ticket de ingreso a Qoricancha (Templo del Sol)",
    "Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos (Día 1)",
    "Boleto Turístico Parcial (BTP) para Pisac y Ollantaytambo (Día 2)",
    "Almuerzo buffet en Urubamba (Día 2)",
    "Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Ticket de bus Consettur (subida y bajada Aguas Calientes-Machu Picchu)",
    "Ticket de ingreso a Machu Picchu",
    "Ticket de ingreso a la Montaña de Colores (Día 4)",
    "Desayuno y almuerzo en ruta (Día 4)",
    "Ticket de ingreso a Salineras de Maras y Moray (Día 5)",
    "Ticket de ingreso a Laguna Humantay (Día 6)",
    "Desayuno y almuerzo en ruta (Día 6)",
    "Traslado hotel-aeropuerto"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle",
    "Coca tea upon arrival",
    "Informative talk about itinerary",
    "5 nights hotel in Cusco (3★ category)",
    "1 night hotel in Aguas Calientes",
    "Daily breakfasts at hotel",
    "Tourist transportation on all tours",
    "Entrance ticket to Cusco Cathedral",
    "Entrance ticket to Qoricancha (Temple of the Sun)",
    "Partial Tourist Ticket (BTP) for 4 archaeological sites (Day 1)",
    "Partial Tourist Ticket (BTP) for Pisac and Ollantaytambo (Day 2)",
    "Buffet lunch in Urubamba (Day 2)",
    "Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Consettur bus ticket (roundtrip Aguas Calientes-Machu Picchu)",
    "Machu Picchu entrance ticket",
    "Entrance ticket to Rainbow Mountain (Day 4)",
    "Breakfast and lunch en route (Day 4)",
    "Entrance ticket to Maras Salt Mines and Moray (Day 5)",
    "Entrance ticket to Humantay Lake (Day 6)",
    "Breakfast and lunch en route (Day 6)",
    "Hotel-airport transfer"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Cusco + City Tour Imperial",
      "titleEn": "Arrival in Cusco + Imperial City Tour",
      "description": "Bienvenida en el aeropuerto con traslado al hotel. Aprecie el monumento a Pachacutec y Qoricancha en el trayecto. Mate de coca y charla informativa. Por la tarde: City Tour comenzando en la Plaza de Armas, visitando la Catedral, Qoricancha (Templo del Sol), y los sitios arqueológicos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Airport welcome with hotel transfer. Appreciate Pachacutec monument and Qoricancha on the way. Coca tea and informative talk. Afternoon: City Tour starting at Main Square, visiting Cathedral, Qoricancha (Temple of the Sun), and archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "12:45 PM - 06:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "1 botella agua", "Mate de coca", "City Tour Cusco", "Ticket Catedral", "Ticket Qoricancha", "Boleto Turístico BTP", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Airport-hotel transfer", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral ticket", "Qoricancha ticket", "BTP Tourist Ticket", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 2,
      "title": "Valle Sagrado de los Incas + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley of the Incas + Train to Aguas Calientes",
      "description": "Recojo del hotel. Visita al mirador de Taray para apreciar el Valle Sagrado. Recorrido por el complejo arqueológico de Pisaq. Traslado a Urubamba para un almuerzo buffet. Por la tarde, visita a Ollantaytambo y su complejo arqueológico. Al finalizar, traslado a la estación para abordar el tren turístico hacia Aguas Calientes, donde se pernocta.",
      "descriptionEn": "Hotel pick-up. Visit to Taray viewpoint to appreciate the Sacred Valley. Tour of the Pisaq archaeological complex. Transfer to Urubamba for a buffet lunch. In the afternoon, visit to Ollantaytambo and its archaeological complex. Afterwards, transfer to the station to board the tourist train to Aguas Calientes for overnight stay.",
      "schedule": "07:35 AM - 06:30 PM (approx. train departure)",
      "includes": ["Desayuno hotel", "1 botella agua", "Almuerzo buffet", "Transporte turístico", "Ticket BTP (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "1 water bottle", "Buffet lunch", "Tourist transportation", "BTP Ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 3,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus a la ciudadela de Machu Picchu. Visita guiada de 2 horas por la maravilla, incluyendo el Templo de las Tres Ventanas y el Reloj Solar. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Toma del tren de retorno a Ollantaytambo y traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus transfer to Machu Picchu citadel. 2-hour guided tour of the wonder, including the Temple of the Three Windows and the Sun Dial. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Board return train to Ollantaytambo and bus transfer to Cusco.",
      "schedule": "08:00 AM - 09:00 PM (approx. arrival in Cusco)",
      "includes": ["Desayuno hotel", "Bus Consettur (ida y vuelta)", "Ticket Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus (roundtrip)", "Machu Picchu ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Montaña de 7 Colores (Vinicunca)",
      "titleEn": "Rainbow Mountain (Vinicunca)",
      "description": "Salida muy temprano hacia Cusipata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Phulawasipata hasta la Montaña de Colores. Explicación del guía, tiempo para fotografías y contemplación del paisaje único con montañas coloridas y nevados. Retorno para almorzar y regreso a Cusco.",
      "descriptionEn": "Very early departure to Cusipata for breakfast. Hike of approximately 1 hour 45 minutes from Phulawasipata to Rainbow Mountain. Guide explanation, time for photos and contemplation of the unique landscape with colorful mountains and snow-capped peaks. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Montaña", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Mountain", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Tour a Maras, Moray y Chinchero",
      "titleEn": "Tour to Maras, Moray and Chinchero",
      "description": "Salida del hotel. Visita a las terrazas circulares de Moray, antiguo centro de investigación agrícola inca. Continuación a las famosas Salineras de Maras. Finalmente, visita a Chinchero para conocer su tradición textil y procesos de elaboración. Tarde libre en Cusco para actividades personales.",
      "descriptionEn": "Hotel departure. Visit to the circular terraces of Moray, an ancient Inca agricultural research center. Continue to the famous Maras Salt Mines. Finally, visit to Chinchero to learn about its textile tradition and production processes. Free afternoon in Cusco for personal activities.",
      "schedule": "08:30 AM - 02:30 PM",
      "includes": ["Desayuno hotel", "Transporte turístico", "Ticket ingreso a Salineras y Moray", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Tourist transportation", "Entrance ticket to Salt Mines and Moray", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "Laguna Humantay (Conociendo la Laguna Turquesa)",
      "titleEn": "Humantay Lake (Discovering the Turquoise Lake)",
      "description": "Salida muy temprano hacia Mollepata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Soraypampa hasta la Laguna Humantay. Explicación del guía, tiempo para fotografías y contemplación del paisaje con la laguna turquesa y nevados circundantes. Retorno para almorzar y regreso a Cusco.",
      "descriptionEn": "Very early departure to Mollepata for breakfast. Hike of approximately 1 hour 45 minutes from Soraypampa to Humantay Lake. Guide explanation, time for photos and contemplation of the landscape with the turquoise lake and surrounding snow-capped peaks. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Laguna", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Lake", "Night in Cusco"]
    },
    {
      "day": 7,
      "title": "Despedida + Traslado Aeropuerto",
      "titleEn": "Farewell + Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer", "End of services"]
    }
  ]
},{
  "id": "experiencia-cusco-puno-8d7n",
  "title": "Experiencia Cusco-Puno 8D/7N",
  "titleEn": "Cusco-Puno Experience 8D/7N",
  "image": "/cuzco-montana-colores.png",
  "duration": 8,
  "difficulty": "moderate",
  "price": 1499,
  "description": "Un viaje épico que combina las maravillas del Imperio Inca en Cusco con la cultura viva del Lago Titicaca en Puno. Disfruta de Cusco imperial, Machu Picchu, Montaña de Colores, Laguna Humantay y una experiencia vivencial en las islas flotantes de los Uros, Amantaní y Taquile.",
  "descriptionEn": "An epic journey combining the wonders of the Inca Empire in Cusco with the living culture of Lake Titicaca in Puno. Enjoy Imperial Cusco, Machu Picchu, Rainbow Mountain, Humantay Lake, and an immersive experience on the floating islands of Uros, Amantaní, and Taquile.",
  "highlights": [
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Valle Sagrado con almuerzo buffet",
    "Machu Picchu - Maravilla del Mundo",
    "Montaña de 7 Colores (Vinicunca)",
    "Laguna Humantay turquesa",
    "Bus nocturno panorámico Cusco-Puno",
    "Experiencia vivencial en las Islas Flotantes de los Uros",
    "Pernocte en casa familiar en la isla de Amantaní",
    "Visita a la isla de Taquile y su cultura textil",
    "7 noches de alojamiento (hoteles y casa familiar)"
  ],
  "highlightsEn": [
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Sacred Valley with buffet lunch",
    "Machu Picchu - World Wonder",
    "Rainbow Mountain (Vinicunca)",
    "Turquoise Humantay Lake",
    "Panoramic overnight bus Cusco-Puno",
    "Immersive experience on the Floating Islands of Uros",
    "Overnight stay in family home on Amantaní Island",
    "Visit to Taquile Island and its textile culture",
    "7 nights accommodation (hotels and family home)"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida",
    "Mate de coca al llegar",
    "Charla informativa sobre itinerario",
    "4 noches de hotel en Cusco (categoría 3★)",
    "1 noche de hotel en Aguas Calientes",
    "1 noche en casa familiar en Amantaní",
    "1 noche de hotel en Puno (categoría 3★)",
    "Desayunos diarios en hotel/casa familiar",
    "Transporte turístico en todos los tours",
    "Ticket de ingreso a Catedral del Cusco",
    "Ticket de ingreso a Qoricancha (Templo del Sol)",
    "Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos (Día 1)",
    "Boleto Turístico Parcial (BTP) para Pisac y Ollantaytambo (Día 2)",
    "Almuerzo buffet en Urubamba (Día 2)",
    "Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Ticket de bus Consettur (subida y bajada Aguas Calientes-Machu Picchu)",
    "Ticket de ingreso a Machu Picchu",
    "Ticket de ingreso a la Montaña de Colores (Día 4)",
    "Desayuno y almuerzo en ruta (Día 4)",
    "Ticket de ingreso a Laguna Humantay (Día 5)",
    "Desayuno y almuerzo en ruta (Día 5)",
    "Bus turístico nocturno Cusco-Puno (Día 5)",
    "Ticket de ingreso a las Islas de Uros y Amantaní",
    "Almuerzo y cena en casa familiar en Amantaní (Día 6)",
    "Ticket de ingreso a la isla de Taquile",
    "Almuerzo en Taquile (Día 7)",
    "Traslado hotel-aeropuerto de Juliaca"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle",
    "Coca tea upon arrival",
    "Informative talk about itinerary",
    "4 nights hotel in Cusco (3★ category)",
    "1 night hotel in Aguas Calientes",
    "1 night in family home on Amantaní",
    "1 night hotel in Puno (3★ category)",
    "Daily breakfasts at hotel/family home",
    "Tourist transportation on all tours",
    "Entrance ticket to Cusco Cathedral",
    "Entrance ticket to Qoricancha (Temple of the Sun)",
    "Partial Tourist Ticket (BTP) for 4 archaeological sites (Day 1)",
    "Partial Tourist Ticket (BTP) for Pisac and Ollantaytambo (Day 2)",
    "Buffet lunch in Urubamba (Day 2)",
    "Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)",
    "Consettur bus ticket (roundtrip Aguas Calientes-Machu Picchu)",
    "Machu Picchu entrance ticket",
    "Entrance ticket to Rainbow Mountain (Day 4)",
    "Breakfast and lunch en route (Day 4)",
    "Entrance ticket to Humantay Lake (Day 5)",
    "Breakfast and lunch en route (Day 5)",
    "Tourist overnight bus Cusco-Puno (Day 5)",
    "Entrance ticket to Uros and Amantaní Islands",
    "Lunch and dinner in family home on Amantaní (Day 6)",
    "Entrance ticket to Taquile Island",
    "Lunch in Taquile (Day 7)",
    "Hotel-Juliaca airport transfer"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Cusco + City Tour Imperial",
      "titleEn": "Arrival in Cusco + Imperial City Tour",
      "description": "Bienvenida en el aeropuerto de Cusco y traslado al hotel. Aprecie el monumento a Pachacutec y Qoricancha en el trayecto. Mate de coca y charla informativa. Por la tarde: City Tour comenzando en la Plaza de Armas, visitando la Catedral, Qoricancha (Templo del Sol), y los sitios arqueológicos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Welcome at Cusco airport and transfer to hotel. Appreciate Pachacutec monument and Qoricancha on the way. Coca tea and informative talk. Afternoon: City Tour starting at Main Square, visiting Cathedral, Qoricancha (Temple of the Sun), and archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "12:45 PM - 06:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "1 botella agua", "Mate de coca", "City Tour Cusco", "Ticket Catedral", "Ticket Qoricancha", "Boleto Turístico BTP", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Airport-hotel transfer", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral ticket", "Qoricancha ticket", "BTP Tourist Ticket", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 2,
      "title": "Valle Sagrado de los Incas + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley of the Incas + Train to Aguas Calientes",
      "description": "Recojo del hotel. Visita al mirador de Taray para apreciar el Valle Sagrado. Recorrido por el complejo arqueológico de Pisaq. Traslado a Urubamba para un almuerzo buffet. Por la tarde, visita a Ollantaytambo y su complejo arqueológico. Al finalizar, traslado a la estación para abordar el tren turístico hacia Aguas Calientes, donde se pernocta.",
      "descriptionEn": "Hotel pick-up. Visit to Taray viewpoint to appreciate the Sacred Valley. Tour of the Pisaq archaeological complex. Transfer to Urubamba for a buffet lunch. In the afternoon, visit to Ollantaytambo and its archaeological complex. Afterwards, transfer to the station to board the tourist train to Aguas Calientes for overnight stay.",
      "schedule": "07:35 AM - 06:30 PM (approx. train departure)",
      "includes": ["Desayuno hotel", "1 botella agua", "Almuerzo buffet", "Transporte turístico", "Ticket BTP (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "1 water bottle", "Buffet lunch", "Tourist transportation", "BTP Ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 3,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus a la ciudadela de Machu Picchu. Visita guiada de 2 horas por la maravilla, incluyendo el Templo de las Tres Ventanas y el Reloj Solar. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Toma del tren de retorno a Ollantaytambo y traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus transfer to Machu Picchu citadel. 2-hour guided tour of the wonder, including the Temple of the Three Windows and the Sun Dial. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Board return train to Ollantaytambo and bus transfer to Cusco.",
      "schedule": "08:00 AM - 09:00 PM (approx. arrival in Cusco)",
      "includes": ["Desayuno hotel", "Bus Consettur (ida y vuelta)", "Ticket Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus (roundtrip)", "Machu Picchu ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Montaña de 7 Colores (Vinicunca)",
      "titleEn": "Rainbow Mountain (Vinicunca)",
      "description": "Salida muy temprano hacia Cusipata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Phulawasipata hasta la Montaña de Colores. Explicación del guía, tiempo para fotografías y contemplación del paisaje único. Retorno para almorzar y regreso a Cusco.",
      "descriptionEn": "Very early departure to Cusipata for breakfast. Hike of approximately 1 hour 45 minutes from Phulawasipata to Rainbow Mountain. Guide explanation, time for photos and contemplation of the unique landscape. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Montaña", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Mountain", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Laguna Humantay + Bus Nocturno a Puno",
      "titleEn": "Humantay Lake + Overnight Bus to Puno",
      "description": "Salida muy temprano hacia Mollepata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Soraypampa hasta la Laguna Humantay. Explicación del guía, tiempo para fotografías. Retorno para almorzar y regreso a Cusco. Por la noche (aprox. 21:00 hrs), traslado al terminal para abordar el bus turístico nocturno con destino a Puno.",
      "descriptionEn": "Very early departure to Mollepata for breakfast. Hike of approximately 1 hour 45 minutes from Soraypampa to Humantay Lake. Guide explanation, time for photos. Return for lunch and back to Cusco. In the evening (approx. 9:00 PM), transfer to the terminal to board the tourist overnight bus to Puno.",
      "schedule": "04:30 AM - 09:00 PM (salida del bus)",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Laguna", "Bus turístico nocturno Cusco-Puno"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Lake", "Tourist overnight bus Cusco-Puno"]
    },
    {
      "day": 6,
      "title": "Experiencia Vivencial: Islas Uros y Amantaní",
      "titleEn": "Immersive Experience: Uros and Amantaní Islands",
      "description": "Llegada a Puno y traslado al hotel para prepararse. Visita a las Islas Flotantes de los Uros, conociendo su historia y construcción. Traslado a la isla de Amantaní, donde una familia local le recibirá con un almuerzo típico. Por la tarde, caminata hacia los templos Pachatata y Pachamama. Cena y posible show cultural. Pernocte en casa familiar.",
      "descriptionEn": "Arrival in Puno and transfer to hotel to freshen up. Visit to the Floating Islands of Uros, learning about their history and construction. Transfer to Amantaní Island, where a local family will welcome you with a typical lunch. In the afternoon, hike to the Pachatata and Pachamama temples. Dinner and possible cultural show. Overnight in family home.",
      "schedule": "07:30 AM - 04:00 PM (actividades en islas)",
      "includes": ["Transporte turístico", "Ticket ingreso a las Islas", "Guía profesional", "Almuerzo y cena en casa familiar", "Noche en casa familiar (Amantaní)"],
      "includesEn": ["Tourist transportation", "Entrance ticket to the Islands", "Professional guide", "Lunch and dinner in family home", "Night in family home (Amantaní)"]
    },
    {
      "day": 7,
      "title": "Isla de Taquile + Retorno a Puno",
      "titleEn": "Taquile Island + Return to Puno",
      "description": "Desayuno en Amantaní. Traslado en lancha a la isla de Taquile. Caminata de aproximadamente 35 minutos para conocer su historia, costumbres y arcos de piedra tradicionales. Degustación de un delicioso almuerzo con vista al lago. Retorno en lancha a Puno y traslado al hotel.",
      "descriptionEn": "Breakfast in Amantaní. Boat transfer to Taquile Island. Approximately 35-minute walk to learn about its history, customs, and traditional stone arches. Enjoy a delicious lunch with lake view. Return by boat to Puno and transfer to hotel.",
      "schedule": "07:30 AM - 04:00 PM",
      "includes": ["Desayuno en Amantaní", "Ticket ingreso a Taquile", "Guía profesional", "Transporte en lancha", "Almuerzo en Taquile", "Noche en Puno"],
      "includesEn": ["Breakfast in Amantaní", "Entrance ticket to Taquile", "Professional guide", "Boat transportation", "Lunch in Taquile", "Night in Puno"]
    },
    {
      "day": 8,
      "title": "Despedida + Traslado al Aeropuerto de Juliaca",
      "titleEn": "Farewell + Transfer to Juliaca Airport",
      "description": "Desayuno en el hotel de Puno. Traslado al aeropuerto de Juliaca (el más cercano a Puno) 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel in Puno. Transfer to Juliaca airport (closest to Puno) 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto (Juliaca)", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer (Juliaca)", "End of services"]
    }
  ]
},{
  "id": "experiencia-lima-cusco-7d6n",
  "title": "Experiencia Lima-Cusco 7D/6N",
  "titleEn": "Lima-Cusco Experience 7D/6N",
  "image": "/cuzco-montana-colores.png",
  "duration": 7,
  "difficulty": "moderate",
  "price": 1399,
  "description": "Lo mejor de Perú en 7 días: desde la costa de Lima con sus misteriosas Islas Ballestas y el oasis de Huacachina, hasta la majestuosidad de Cusco, Machu Picchu y la elección entre la Montaña de Colores o la Laguna Humantay. Un viaje completo de costa a sierra.",
  "descriptionEn": "The best of Peru in 7 days: from the coast of Lima with its mysterious Ballestas Islands and Huacachina Oasis, to the majesty of Cusco, Machu Picchu, and your choice between Rainbow Mountain or Humantay Lake. A complete journey from coast to highlands.",
  "highlights": [
    "City Tour en Lima: Centro Histórico y Circuito Mágico del Agua",
    "Tour a las Islas Ballestas (Paracas) - fauna marina",
    "Aventura en el Oasis de Huacachina: buggies y sandboarding",
    "Degustación de piscos y vinos en Ica",
    "Vuelo Lima-Cusco incluido",
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Machu Picchu - Maravilla del Mundo (tour full day)",
    "Elección: Montaña de 7 Colores O Laguna Humantay turquesa",
    "6 noches de hotel en Lima y Cusco"
  ],
  "highlightsEn": [
    "Lima City Tour: Historic Center and Magic Water Circuit",
    "Tour to Ballestas Islands (Paracas) - marine wildlife",
    "Adventure at Huacachina Oasis: buggies and sandboarding",
    "Pisco and wine tasting in Ica",
    "Lima-Cusco flight included",
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Machu Picchu - World Wonder (full day tour)",
    "Choice: Rainbow Mountain OR Turquoise Humantay Lake",
    "6 nights hotel in Lima and Cusco"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Lima",
    "Transporte turístico en todos los tours",
    "2 noches de hotel en Lima (categoría 3★)",
    "City Tour Lima: transporte, guía, ticket Convento San Francisco, ticket Parque de las Aguas",
    "Tour Paracas e Ica: box breakfast, transporte Lima-Paracas-Ica-Lima, ticket Islas Ballestas, recorrido en lancha, guía, degustación de Tejas y Chocotejas",
    "Degustación de piscos y vinos en Ica (Bodega Nietto)",
    "Ingreso al Oasis de Huacachina y práctica de sandboarding/buggies",
    "Vuelo Lima-Cusco (no especificado en PDF, pero implícito en el itinerario)",
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida y mate de coca en Cusco",
    "4 noches de hotel en Cusco (categoría 3★)",
    "City Tour Cusco: recojoo, transporte, tickets Catedral y Qoricancha, Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos, guía",
    "Tour Machu Picchu full day: transporte Cusco-Ollantaytambo-Cusco, ticket tren turístico (ida y vuelta), ticket bus Consettur (subida/bajada), ticket ingreso a Machu Picchu, guía",
    "Tour Día 6: Elección entre Montaña de Colores O Laguna Humantay (incluye desayuno, almuerzo, transporte, guía, ticket de ingreso)",
    "Traslado hotel-aeropuerto en Cusco"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Lima",
    "Tourist transportation on all tours",
    "2 nights hotel in Lima (3★ category)",
    "Lima City Tour: transportation, guide, San Francisco Convent ticket, Water Park ticket",
    "Paracas and Ica Tour: box breakfast, Lima-Paracas-Ica-Lima transportation, Ballestas Islands ticket, boat tour, guide, Tejas and Chocotejas tasting",
    "Pisco and wine tasting in Ica (Nietto Winery)",
    "Entrance to Huacachina Oasis and sandboarding/buggies practice",
    "Lima-Cusco flight (not specified in PDF, but implied in itinerary)",
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle and coca tea in Cusco",
    "4 nights hotel in Cusco (3★ category)",
    "Cusco City Tour: pick-up, transportation, Cathedral and Qoricancha tickets, Partial Tourist Ticket (BTP) for 4 archaeological sites, guide",
    "Machu Picchu full day tour: Cusco-Ollantaytambo-Cusco transportation, tourist train ticket (roundtrip), Consettur bus ticket (roundtrip), Machu Picchu entrance ticket, guide",
    "Day 6 Tour: Choice between Rainbow Mountain OR Humantay Lake (includes breakfast, lunch, transportation, guide, entrance ticket)",
    "Hotel-airport transfer in Cusco"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Lima + City Tour Nocturno",
      "titleEn": "Arrival in Lima + Night City Tour",
      "description": "Bienvenida en el aeropuerto de Lima y traslado al hotel. Tarde libre para descansar. Por la tarde (2:00 PM), recogida para el City Tour. Visita panorámica a la Huaca Pucllana, las Catacumbas del Convento de San Francisco, el Centro Histórico (Catedral) y la Lima moderna (San Isidro, Miraflores). Finaliza con el espectacular show del Circuito Mágico del Agua.",
      "descriptionEn": "Welcome at Lima airport and transfer to hotel. Free afternoon to rest. In the afternoon (2:00 PM), pick-up for City Tour. Panoramic visit to Huaca Pucllana, the Catacombs of San Francisco Convent, the Historic Center (Cathedral), and modern Lima (San Isidro, Miraflores). Ends with the spectacular Magic Water Circuit show.",
      "schedule": "02:00 PM - 08:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "City Tour Lima", "Transporte", "Ticket Convento San Francisco", "Ticket Parque de las Aguas", "Guía profesional", "Noche en Lima"],
      "includesEn": ["Airport-hotel transfer", "Lima City Tour", "Transportation", "San Francisco Convent ticket", "Water Park ticket", "Professional guide", "Night in Lima"]
    },
    {
      "day": 2,
      "title": "Paracas: Islas Ballestas + Ica: Huacachina",
      "titleEn": "Paracas: Ballestas Islands + Ica: Huacachina",
      "description": "Salida muy temprano con box breakfast. Viaje de 3 horas a Paracas. Recorrido en lancha por las Islas Ballestas para ver leones marinos, pingüinos y el Candelabro. Degustación de Tejas y Chocotejas. Traslado a Ica. Almuerzo por cuenta propia con show de danzas. Degustación de piscos y vinos en bodega. Aventura en el Oasis de Huacachina con buggies y sandboarding. Retorno nocturno a Lima.",
      "descriptionEn": "Very early departure with box breakfast. 3-hour journey to Paracas. Boat tour of Ballestas Islands to see sea lions, penguins, and the Candelabra. Tejas and Chocotejas tasting. Transfer to Ica. Lunch on your own with dance show. Pisco and wine tasting at winery. Adventure at Huacachina Oasis with buggies and sandboarding. Night return to Lima.",
      "schedule": "05:00 AM - 10:30 PM",
      "includes": ["Box breakfast", "Transporte Lima-Paracas-Ica-Lima", "Ticket Islas Ballestas", "Recorrido en lancha", "Guía", "Degustación Tejas/Chocotejas", "Degustación Piscos/Vinos", "Ingreso Huacachina", "Buggies/Sandboarding", "Noche en Lima"],
      "includesEn": ["Box breakfast", "Lima-Paracas-Ica-Lima transportation", "Ballestas Islands ticket", "Boat tour", "Guide", "Tejas/Chocotejas tasting", "Pisco/Wine tasting", "Huacachina entrance", "Buggies/Sandboarding", "Night in Lima"]
    },
    {
      "day": 3,
      "title": "Vuelo a Cusco + City Tour Imperial",
      "titleEn": "Flight to Cusco + Imperial City Tour",
      "description": "Desayuno en el hotel. Traslado al aeropuerto para vuelo a Cusco. Bienvenida en Cusco con traslado al hotel, mate de coca y charla informativa. Por la tarde: City Tour visitando la Plaza de Armas, Catedral, Qoricancha (Templo del Sol) y los sitios arqueológicos cercanos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Breakfast at hotel. Transfer to airport for flight to Cusco. Welcome in Cusco with hotel transfer, coca tea and informative talk. Afternoon: City Tour visiting Main Square, Cathedral, Qoricancha (Temple of the Sun) and nearby archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "Vuelo matutino + 12:45 PM - 06:30 PM",
      "includes": ["Desayuno", "Vuelo Lima-Cusco (implícito)", "Traslado aeropuerto-hotel Cusco", "1 botella agua", "Mate de coca", "City Tour Cusco", "Tickets Catedral/Qoricancha/BTP", "Guía", "Noche en Cusco"],
      "includesEn": ["Breakfast", "Lima-Cusco flight (implied)", "Airport-hotel transfer Cusco", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral/Qoricancha/BTP tickets", "Guide", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Machu Picchu - Maravilla del Mundo (Full Day)",
      "titleEn": "Machu Picchu - World Wonder (Full Day)",
      "description": "Salida muy temprano (recojo ~3:50 AM). Traslado a Ollantaytambo (1h45m). Tren turístico a Aguas Calientes (1h30m). Bus a Machu Picchu (30m). Visita guiada de 2 horas por la ciudadela (Templo de las Tres Ventanas, Templo del Sol, etc.). Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Tren de retorno a Ollantaytambo y bus a Cusco.",
      "descriptionEn": "Very early departure (pick-up ~3:50 AM). Transfer to Ollantaytambo (1h45m). Tourist train to Aguas Calientes (1h30m). Bus to Machu Picchu (30m). 2-hour guided tour of the citadel (Temple of the Three Windows, Sun Temple, etc.). Free time for photos. Return bus to Aguas Calientes (lunch on your own). Return train to Ollantaytambo and bus to Cusco.",
      "schedule": "03:50 AM - 09:00 PM (approx. arrival)",
      "includes": ["Transporte Cusco-Ollantaytambo-Cusco", "Ticket tren turístico (ida/vuelta)", "Ticket bus Consettur (ida/vuelta)", "Ticket Machu Picchu", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Cusco-Ollantaytambo-Cusco transportation", "Tourist train ticket (roundtrip)", "Consettur bus ticket (roundtrip)", "Machu Picchu ticket", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Día Libre en Cusco o Tour Opcional",
      "titleEn": "Free Day in Cusco or Optional Tour",
      "description": "Día libre para explorar Cusco por su cuenta, descansar, comprar souvenirs o realizar actividades opcionales no incluidas (como el Valle Sagrado, Maras-Moray, etc.). Se sugiere aclimatación y descanso.",
      "descriptionEn": "Free day to explore Cusco on your own, rest, shop for souvenirs, or undertake optional activities not included (such as Sacred Valley, Maras-Moray, etc.). Acclimatization and rest are suggested.",
      "schedule": "Día libre",
      "includes": ["Desayuno hotel", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "Elección: Montaña de Colores O Laguna Humantay",
      "titleEn": "Choice: Rainbow Mountain OR Humantay Lake",
      "description": "OPCIÓN 1 - MONTANA DE COLORES (04:30 AM - 05:00 PM): Salida a Cusipata para desayuno. Caminata de 1h45min a la montaña colorida. Fotos y explicación. Retorno para almuerzo y regreso a Cusco. OPCIÓN 2 - LAGUNA HUMANTAY (04:30 AM - 05:00 PM): Salida a Mollepata para desayuno. Caminata de 1h45min desde Soraypampa a la laguna turquesa. Fotos y tiempo libre. Retorno para almuerzo y regreso a Cusco.",
      "descriptionEn": "OPTION 1 - RAINBOW MOUNTAIN (04:30 AM - 05:00 PM): Departure to Cusipata for breakfast. 1h45min hike to colorful mountain. Photos and explanation. Return for lunch and back to Cusco. OPTION 2 - HUMANTAY LAKE (04:30 AM - 05:00 PM): Departure to Mollepata for breakfast. 1h45min hike from Soraypampa to turquoise lake. Photos and free time. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso (Montaña o Laguna)", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket (Mountain or Lake)", "Night in Cusco"]
    },
    {
      "day": 7,
      "title": "Despedida + Traslado Aeropuerto Cusco",
      "titleEn": "Farewell + Cusco Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer", "End of services"]
    }
  ]
},{
  "id": "experiencia-lima-cusco-6d5n",
  "title": "Experiencia Lima-Cusco 6D/5N",
  "titleEn": "Lima-Cusco Experience 6D/5N",
  "image": "/cuzco-montana-colores.png",
  "duration": 6,
  "difficulty": "moderate",
  "price": 1199,
  "description": "Descubre dos caras de Perú en 6 días: la vibrante capital de Lima, las Islas Ballestas y la aventura en el oasis de Huacachina; luego vuela a la majestuosidad de Cusco para explorar la ciudad imperial, Machu Picchu y la icónica Montaña de Colores.",
  "descriptionEn": "Discover two faces of Peru in 6 days: the vibrant capital Lima, the Ballestas Islands, and adventure at Huacachina Oasis; then fly to the majesty of Cusco to explore the imperial city, Machu Picchu, and the iconic Rainbow Mountain.",
  "highlights": [
    "City Tour en Lima: Centro Histórico y Circuito Mágico del Agua",
    "Tour a las Islas Ballestas (Paracas) - fauna marina",
    "Aventura en el Oasis de Huacachina: buggies y sandboarding",
    "Degustación de piscos y vinos en Ica",
    "Vuelo Lima-Cusco incluido",
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Machu Picchu - Maravilla del Mundo (tour full day)",
    "Montaña de 7 Colores (Vinicunca) - experiencia Instagrameable",
    "5 noches de hotel en Lima y Cusco"
  ],
  "highlightsEn": [
    "Lima City Tour: Historic Center and Magic Water Circuit",
    "Tour to Ballestas Islands (Paracas) - marine wildlife",
    "Adventure at Huacachina Oasis: buggies and sandboarding",
    "Pisco and wine tasting in Ica",
    "Lima-Cusco flight included",
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Machu Picchu - World Wonder (full day tour)",
    "Rainbow Mountain (Vinicunca) - Instagrammable experience",
    "5 nights hotel in Lima and Cusco"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Lima",
    "Transporte turístico en todos los tours",
    "2 noches de hotel en Lima (categoría 3★)",
    "City Tour Lima: transporte, guía, ticket Convento San Francisco, ticket Parque de las Aguas",
    "Tour Paracas e Ica: degustación de piscos y vinos (Bodega Nietto), transporte Lima-Ica-Lima, ingreso al Oasis de Huacachina, práctica de sandboarding y buggies, guía profesional",
    "Vuelo Lima-Cusco (implícito en el itinerario)",
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida y mate de coca en Cusco",
    "3 noches de hotel en Cusco (categoría 3★)",
    "City Tour Cusco: recojoo, transporte, tickets Catedral y Qoricancha, Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos, guía",
    "Tour Machu Picchu full day: transporte Cusco-Ollantaytambo-Cusco, ticket tren turístico (ida y vuelta), ticket bus Consettur (subida/bajada), ticket ingreso a Machu Picchu, guía",
    "Tour Montaña de Colores: desayuno y almuerzo en ruta, transporte, guía, ticket de ingreso",
    "Traslado hotel-aeropuerto en Cusco"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Lima",
    "Tourist transportation on all tours",
    "2 nights hotel in Lima (3★ category)",
    "Lima City Tour: transportation, guide, San Francisco Convent ticket, Water Park ticket",
    "Paracas and Ica Tour: pisco and wine tasting (Nietto Winery), Lima-Ica-Lima transportation, entrance to Huacachina Oasis, sandboarding and buggies practice, professional guide",
    "Lima-Cusco flight (implied in itinerary)",
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle and coca tea in Cusco",
    "3 nights hotel in Cusco (3★ category)",
    "Cusco City Tour: pick-up, transportation, Cathedral and Qoricancha tickets, Partial Tourist Ticket (BTP) for 4 archaeological sites, guide",
    "Machu Picchu full day tour: Cusco-Ollantaytambo-Cusco transportation, tourist train ticket (roundtrip), Consettur bus ticket (roundtrip), Machu Picchu entrance ticket, guide",
    "Rainbow Mountain Tour: breakfast and lunch en route, transportation, guide, entrance ticket",
    "Hotel-airport transfer in Cusco"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Lima + City Tour Nocturno",
      "titleEn": "Arrival in Lima + Night City Tour",
      "description": "Bienvenida en el aeropuerto de Lima y traslado al hotel. Tarde libre. Por la tarde (2:00 PM), recogida para el City Tour. Visita panorámica a la Huaca Pucllana, las Catacumbas del Convento de San Francisco, el Centro Histórico (Catedral) y la Lima moderna (San Isidro, Miraflores). Finaliza con el show del Circuito Mágico del Agua.",
      "descriptionEn": "Welcome at Lima airport and transfer to hotel. Free afternoon. In the afternoon (2:00 PM), pick-up for City Tour. Panoramic visit to Huaca Pucllana, the Catacombs of San Francisco Convent, the Historic Center (Cathedral), and modern Lima (San Isidro, Miraflores). Ends with the Magic Water Circuit show.",
      "schedule": "02:00 PM - 08:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "City Tour Lima", "Transporte", "Ticket Convento San Francisco", "Ticket Parque de las Aguas", "Guía", "Noche en Lima"],
      "includesEn": ["Airport-hotel transfer", "Lima City Tour", "Transportation", "San Francisco Convent ticket", "Water Park ticket", "Guide", "Night in Lima"]
    },
    {
      "day": 2,
      "title": "Tour Full Day: Ica y Huacachina",
      "titleEn": "Full Day Tour: Ica and Huacachina",
      "description": "Salida muy temprano (5:00 AM) hacia Ica. Almuerzo por cuenta propia con show de danzas típicas. Degustación de piscos y vinos en una bodega local (Nietto). Aventura en el Oasis de Huacachina con paseo en buggies y práctica de sandboarding por las dunas. Tiempo para fotos. Retorno nocturno a Lima (~10:30 PM).",
      "descriptionEn": "Very early departure (5:00 AM) to Ica. Lunch on your own with typical dance show. Pisco and wine tasting at a local winery (Nietto). Adventure at Huacachina Oasis with buggy ride and sandboarding practice on the dunes. Time for photos. Night return to Lima (~10:30 PM).",
      "schedule": "05:00 AM - 10:30 PM",
      "includes": ["Transporte Lima-Ica-Lima", "Degustación Piscos/Vinos", "Ingreso Huacachina", "Buggies y Sandboarding", "Guía profesional", "Noche en Lima"],
      "includesEn": ["Lima-Ica-Lima transportation", "Pisco/Wine tasting", "Huacachina entrance", "Buggies and Sandboarding", "Professional guide", "Night in Lima"]
    },
    {
      "day": 3,
      "title": "Vuelo a Cusco + City Tour Imperial",
      "titleEn": "Flight to Cusco + Imperial City Tour",
      "description": "Desayuno en el hotel. Traslado al aeropuerto para vuelo a Cusco. Bienvenida en Cusco con traslado al hotel, mate de coca y charla informativa. Por la tarde: City Tour visitando la Plaza de Armas, Catedral, Qoricancha (Templo del Sol) y los sitios arqueológicos cercanos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Breakfast at hotel. Transfer to airport for flight to Cusco. Welcome in Cusco with hotel transfer, coca tea and informative talk. Afternoon: City Tour visiting Main Square, Cathedral, Qoricancha (Temple of the Sun) and nearby archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "Vuelo matutino + 12:45 PM - 06:30 PM",
      "includes": ["Desayuno", "Vuelo Lima-Cusco (implícito)", "Traslado aeropuerto-hotel Cusco", "1 botella agua", "Mate de coca", "City Tour Cusco", "Tickets Catedral/Qoricancha/BTP", "Guía", "Noche en Cusco"],
      "includesEn": ["Breakfast", "Lima-Cusco flight (implied)", "Airport-hotel transfer Cusco", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral/Qoricancha/BTP tickets", "Guide", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Machu Picchu - Maravilla del Mundo (Full Day)",
      "titleEn": "Machu Picchu - World Wonder (Full Day)",
      "description": "Salida muy temprano. Traslado a Ollantaytambo (1h45m). Tren turístico a Aguas Calientes (1h40m). Bus a Machu Picchu (30m). Visita guiada de 2 horas por la ciudadela (Templo de las Tres Ventanas, Reloj Solar, etc.). Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Tren de retorno a Ollantaytambo y bus a Cusco.",
      "descriptionEn": "Very early departure. Transfer to Ollantaytambo (1h45m). Tourist train to Aguas Calientes (1h40m). Bus to Machu Picchu (30m). 2-hour guided tour of the citadel (Temple of the Three Windows, Sun Dial, etc.). Free time for photos. Return bus to Aguas Calientes (lunch on your own). Return train to Ollantaytambo and bus to Cusco.",
      "schedule": "Salida muy temprano - Retorno nocturno",
      "includes": ["Transporte Cusco-Ollantaytambo-Cusco", "Ticket tren turístico (ida/vuelta)", "Ticket bus Consettur (ida/vuelta)", "Ticket Machu Picchu", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Cusco-Ollantaytambo-Cusco transportation", "Tourist train ticket (roundtrip)", "Consettur bus ticket (roundtrip)", "Machu Picchu ticket", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Montaña de 7 Colores (Vinicunca)",
      "titleEn": "Rainbow Mountain (Vinicunca)",
      "description": "Salida muy temprano (04:30 AM) hacia Cusipata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Phulawasipata hasta la Montaña de Colores. Explicación del guía, tiempo para fotografías y contemplación del paisaje único. Retorno para almorzar y regreso a Cusco.",
      "descriptionEn": "Very early departure (04:30 AM) to Cusipata for breakfast. Hike of approximately 1 hour 45 minutes from Phulawasipata to Rainbow Mountain. Guide explanation, time for photos and contemplation of the unique landscape. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Montaña", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Mountain", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "Despedida + Traslado Aeropuerto Cusco",
      "titleEn": "Farewell + Cusco Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer", "End of services"]
    }
  ]
},{
  "id": "experiencia-lima-cusco-9d8n",
  "title": "Experiencia Lima-Cusco 9D/8N",
  "titleEn": "Lima-Cusco Experience 9D/8N",
  "image": "/cuzco-montana-colores.png",
  "duration": 9,
  "difficulty": "moderate",
  "price": 1699,
  "description": "La experiencia más completa de Perú en 9 días: desde la costa de Lima con las Islas Ballestas y la aventura en Huacachina, hasta la majestuosidad total de Cusco, incluyendo el Valle Sagrado, Machu Picchu, la Montaña de Colores, la Laguna Humantay y las salineras de Maras con Moray. Un viaje inolvidable de costa a sierra.",
  "descriptionEn": "The most complete Peru experience in 9 days: from the coast of Lima with the Ballestas Islands and adventure in Huacachina, to the full majesty of Cusco, including the Sacred Valley, Machu Picchu, Rainbow Mountain, Humantay Lake, and the Maras Salt Mines with Moray. An unforgettable journey from coast to highlands.",
  "highlights": [
    "City Tour en Lima: Centro Histórico y Circuito Mágico del Agua",
    "Tour a las Islas Ballestas (Paracas) - fauna marina y el Candelabro",
    "Aventura en el Oasis de Huacachina: buggies y sandboarding",
    "Degustación de piscos, vinos, Tejas y Chocotejas",
    "Vuelo Lima-Cusco incluido",
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Valle Sagrado con almuerzo buffet en Urubamba",
    "Machu Picchu - Maravilla del Mundo",
    "Montaña de 7 Colores (Vinicunca)",
    "Tour a las Salineras de Maras y las Terrazas de Moray",
    "Laguna Humantay turquesa",
    "8 noches de hotel en Lima, Cusco y Aguas Calientes"
  ],
  "highlightsEn": [
    "Lima City Tour: Historic Center and Magic Water Circuit",
    "Tour to Ballestas Islands (Paracas) - marine wildlife and the Candelabra",
    "Adventure at Huacachina Oasis: buggies and sandboarding",
    "Tasting of piscos, wines, Tejas and Chocotejas",
    "Lima-Cusco flight included",
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Sacred Valley with buffet lunch in Urubamba",
    "Machu Picchu - World Wonder",
    "Rainbow Mountain (Vinicunca)",
    "Tour to Maras Salt Mines and Moray Terraces",
    "Turquoise Humantay Lake",
    "8 nights hotel in Lima, Cusco and Aguas Calientes"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Lima",
    "Transporte turístico en todos los tours",
    "2 noches de hotel en Lima (categoría 3★)",
    "City Tour Lima: transporte, guía, ticket Convento San Francisco, ticket Parque de las Aguas",
    "Tour Paracas: box breakfast, transporte Lima-Paracas, ticket Islas Ballestas, recorrido en lancha, guía, degustación de Tejas y Chocotejas",
    "Tour Ica y Huacachina: degustación de piscos y vinos (Bodega Nietto), transporte Paracas-Ica-Lima, ingreso al Oasis de Huacachina, práctica de sandboarding y buggies, guía",
    "Vuelo Lima-Cusco (implícito en el itinerario)",
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida y mate de coca en Cusco",
    "5 noches de hotel en Cusco (categoría 3★)",
    "1 noche de hotel en Aguas Calientes",
    "City Tour Cusco: recojoo, transporte, tickets Catedral y Qoricancha, Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos, guía",
    "Tour Valle Sagrado: desayuno, almuerzo buffet en Urubamba, transporte, ticket BTP (Pisac y Ollantaytambo), guía, ticket tren turístico (Ollantaytambo-Aguas Calientes)",
    "Tour Machu Picchu: desayuno, ticket bus Consettur (ida/vuelta), ticket ingreso a Machu Picchu, guía, ticket tren turístico (Aguas Calientes-Ollantaytambo), transporte Ollantaytambo-Cusco",
    "Tour Montaña de Colores: desayuno y almuerzo en ruta, transporte, guía, ticket de ingreso",
    "Tour Maras y Moray: desayuno, transporte, ticket ingreso a Salineras y Moray, guía",
    "Tour Laguna Humantay: desayuno y almuerzo en ruta, transporte, guía, ticket de ingreso",
    "Traslado hotel-aeropuerto en Cusco"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Lima",
    "Tourist transportation on all tours",
    "2 nights hotel in Lima (3★ category)",
    "Lima City Tour: transportation, guide, San Francisco Convent ticket, Water Park ticket",
    "Paracas Tour: box breakfast, Lima-Paracas transportation, Ballestas Islands ticket, boat tour, guide, Tejas and Chocotejas tasting",
    "Ica and Huacachina Tour: pisco and wine tasting (Nietto Winery), Paracas-Ica-Lima transportation, entrance to Huacachina Oasis, sandboarding and buggies practice, guide",
    "Lima-Cusco flight (implied in itinerary)",
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle and coca tea in Cusco",
    "5 nights hotel in Cusco (3★ category)",
    "1 night hotel in Aguas Calientes",
    "Cusco City Tour: pick-up, transportation, Cathedral and Qoricancha tickets, Partial Tourist Ticket (BTP) for 4 archaeological sites, guide",
    "Sacred Valley Tour: breakfast, buffet lunch in Urubamba, transportation, BTP ticket (Pisac and Ollantaytambo), guide, tourist train ticket (Ollantaytambo-Aguas Calientes)",
    "Machu Picchu Tour: breakfast, Consettur bus ticket (roundtrip), Machu Picchu entrance ticket, guide, tourist train ticket (Aguas Calientes-Ollantaytambo), Ollantaytambo-Cusco transportation",
    "Rainbow Mountain Tour: breakfast and lunch en route, transportation, guide, entrance ticket",
    "Maras and Moray Tour: breakfast, transportation, entrance ticket to Salt Mines and Moray, guide",
    "Humantay Lake Tour: breakfast and lunch en route, transportation, guide, entrance ticket",
    "Hotel-airport transfer in Cusco"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Lima + City Tour Nocturno",
      "titleEn": "Arrival in Lima + Night City Tour",
      "description": "Bienvenida en el aeropuerto de Lima y traslado al hotel. Tarde libre. Por la tarde (2:00 PM), recogida para el City Tour. Visita panorámica a la Huaca Pucllana, las Catacumbas del Convento de San Francisco, el Centro Histórico (Catedral) y la Lima moderna (San Isidro, Miraflores). Finaliza con el show del Circuito Mágico del Agua.",
      "descriptionEn": "Welcome at Lima airport and transfer to hotel. Free afternoon. In the afternoon (2:00 PM), pick-up for City Tour. Panoramic visit to Huaca Pucllana, the Catacombs of San Francisco Convent, the Historic Center (Cathedral), and modern Lima (San Isidro, Miraflores). Ends with the Magic Water Circuit show.",
      "schedule": "02:00 PM - 08:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "City Tour Lima", "Transporte", "Ticket Convento San Francisco", "Ticket Parque de las Aguas", "Guía", "Noche en Lima"],
      "includesEn": ["Airport-hotel transfer", "Lima City Tour", "Transportation", "San Francisco Convent ticket", "Water Park ticket", "Guide", "Night in Lima"]
    },
    {
      "day": 2,
      "title": "Paracas: Islas Ballestas + Ica: Huacachina (Full Day)",
      "titleEn": "Paracas: Ballestas Islands + Ica: Huacachina (Full Day)",
      "description": "Salida muy temprano con box breakfast. Viaje a Paracas (3h). Recorrido en lancha por las Islas Ballestas para ver leones marinos, pingüinos y el Candelabro. Degustación de Tejas y Chocotejas. Traslado a Ica. Almuerzo por cuenta propia con show de danzas. Degustación de piscos y vinos en bodega (Nietto). Aventura en el Oasis de Huacachina con buggies y sandboarding. Retorno nocturno a Lima.",
      "descriptionEn": "Very early departure with box breakfast. Journey to Paracas (3h). Boat tour of Ballestas Islands to see sea lions, penguins, and the Candelabra. Tejas and Chocotejas tasting. Transfer to Ica. Lunch on your own with dance show. Pisco and wine tasting at winery (Nietto). Adventure at Huacachina Oasis with buggies and sandboarding. Night return to Lima.",
      "schedule": "05:00 AM - 10:30 PM",
      "includes": ["Box breakfast", "Transporte Lima-Paracas-Ica-Lima", "Ticket Islas Ballestas", "Recorrido en lancha", "Guía", "Degustación Tejas/Chocotejas", "Degustación Piscos/Vinos", "Ingreso Huacachina", "Buggies/Sandboarding", "Noche en Lima"],
      "includesEn": ["Box breakfast", "Lima-Paracas-Ica-Lima transportation", "Ballestas Islands ticket", "Boat tour", "Guide", "Tejas/Chocotejas tasting", "Pisco/Wine tasting", "Huacachina entrance", "Buggies/Sandboarding", "Night in Lima"]
    },
    {
      "day": 3,
      "title": "Vuelo a Cusco + Bienvenida Imperial",
      "titleEn": "Flight to Cusco + Imperial Welcome",
      "description": "Desayuno en el hotel. Traslado al aeropuerto para vuelo a Cusco. Bienvenida en Cusco con traslado al hotel. En el trayecto apreciará el monumento a Pachacutec y Qoricancha. Recepción con mate de coca y charla informativa. Tarde libre para aclimatación.",
      "descriptionEn": "Breakfast at hotel. Transfer to airport for flight to Cusco. Welcome in Cusco with hotel transfer. On the way, appreciate Pachacutec monument and Qoricancha. Welcome with coca tea and informative talk. Free afternoon for acclimatization.",
      "schedule": "Vuelo matutino - Tarde libre",
      "includes": ["Desayuno", "Vuelo Lima-Cusco (implícito)", "Traslado aeropuerto-hotel Cusco", "1 botella agua", "Mate de coca", "Noche en Cusco"],
      "includesEn": ["Breakfast", "Lima-Cusco flight (implied)", "Airport-hotel transfer Cusco", "1 water bottle", "Coca tea", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "City Tour en Cusco Imperial",
      "titleEn": "City Tour in Imperial Cusco",
      "description": "Recojo del hotel para el City Tour. Comenzando en la majestuosa Plaza de Armas, visita a la Catedral y el Qoricancha (Templo del Sol). Continuación a los sitios arqueológicos aledaños: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay. Retorno a Cusco.",
      "descriptionEn": "Hotel pick-up for City Tour. Starting at the majestic Main Square, visit to the Cathedral and Qoricancha (Temple of the Sun). Continue to nearby archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay. Return to Cusco.",
      "schedule": "12:45 PM - 06:30 PM",
      "includes": ["Recojo hotel", "Transporte turístico", "Ticket Catedral", "Ticket Qoricancha", "Boleto Turístico BTP (4 sitios)", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Hotel pick-up", "Tourist transportation", "Cathedral ticket", "Qoricancha ticket", "BTP Tourist Ticket (4 sites)", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 5,
      "title": "Valle Sagrado + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley + Train to Aguas Calientes",
      "description": "Recojo del hotel. Visita al mirador de Taray para apreciar el Valle Sagrado. Recorrido por el complejo arqueológico de Pisaq. Traslado a Urubamba para un almuerzo buffet. Por la tarde, visita a Ollantaytambo y su complejo arqueológico. Al finalizar, traslado a la estación para abordar el tren turístico hacia Aguas Calientes, donde se pernocta.",
      "descriptionEn": "Hotel pick-up. Visit to Taray viewpoint to appreciate the Sacred Valley. Tour of the Pisaq archaeological complex. Transfer to Urubamba for a buffet lunch. In the afternoon, visit to Ollantaytambo and its archaeological complex. Afterwards, transfer to the station to board the tourist train to Aguas Calientes for overnight stay.",
      "schedule": "07:35 AM - 06:30 PM (approx. train departure)",
      "includes": ["Desayuno hotel", "1 botella agua", "Almuerzo buffet Urubamba", "Transporte turístico", "Ticket BTP (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "1 water bottle", "Buffet lunch Urubamba", "Tourist transportation", "BTP Ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 6,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus a la ciudadela de Machu Picchu. Visita guiada de 2 horas por la maravilla, incluyendo el Templo de las Tres Ventanas y el Reloj Solar. Tiempo libre para fotos. Retorno en bus a Aguas Calientes. Toma del tren de retorno a Ollantaytambo y traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus transfer to Machu Picchu citadel. 2-hour guided tour of the wonder, including the Temple of the Three Windows and the Sun Dial. Free time for photos. Return bus to Aguas Calientes. Board return train to Ollantaytambo and bus transfer to Cusco.",
      "schedule": "08:00 AM - 06:00 PM (retorno a Cusco aprox. 9 PM)",
      "includes": ["Desayuno hotel", "Bus Consettur (ida y vuelta)", "Ticket Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus (roundtrip)", "Machu Picchu ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 7,
      "title": "Montaña de 7 Colores (Vinicunca)",
      "titleEn": "Rainbow Mountain (Vinicunca)",
      "description": "Salida muy temprano (04:30 AM) hacia Cusipata para desayuno. Caminata de aproximadamente 1 hora 45 minutos desde Phulawasipata hasta la Montaña de Colores. Explicación del guía, tiempo para fotografías y contemplación del paisaje único. Retorno para almorzar y regreso a Cusco.",
      "descriptionEn": "Very early departure (04:30 AM) to Cusipata for breakfast. Hike of approximately 1 hour 45 minutes from Phulawasipata to Rainbow Mountain. Guide explanation, time for photos and contemplation of the unique landscape. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso a la Montaña", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket to the Mountain", "Night in Cusco"]
    },
    {
      "day": 8,
      "title": "Tour a Maras, Moray, Chinchero + Laguna Humantay",
      "titleEn": "Tour to Maras, Moray, Chinchero + Humantay Lake",
      "description": "Mañana: Salida del hotel. Visita a las terrazas circulares de Moray y las Salineras de Maras. Visita a Chinchero para conocer su tradición textil. Tarde libre en Cusco. (Nota: El PDF sugiere que la Laguna Humantay es parte de este día, pero típicamente es un tour separado de día completo; se asume como una actividad adicional opcional o error en el documento).",
      "descriptionEn": "Morning: Hotel departure. Visit to the circular terraces of Moray and the Maras Salt Mines. Visit to Chinchero to learn about its textile tradition. Free afternoon in Cusco. (Note: PDF suggests Humantay Lake is part of this day, but it's typically a separate full-day tour; assumed as an additional optional activity or document error).",
      "schedule": "Mañana: 08:30 AM - 02:30 PM (aprox. para Maras/Moray)",
      "includes": ["Desayuno hotel", "Transporte turístico", "Ticket ingreso a Salineras y Moray", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Tourist transportation", "Entrance ticket to Salt Mines and Moray", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 9,
      "title": "Despedida + Traslado Aeropuerto Cusco",
      "titleEn": "Farewell + Cusco Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Cusco 2 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco airport 2 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer", "End of services"]
    }
  ]
},{
  "id": "experiencia-lima-cusco-puno-10d9n",
  "title": "Experiencia Lima-Cusco-Puno 10D/9N",
  "titleEn": "Lima-Cusco-Puno Experience 10D/9N",
  "image": "/cuzco-montana-colores.png",
  "duration": 10,
  "difficulty": "moderate",
  "price": 1899,
  "description": "El viaje definitivo por Perú en 10 días: desde la costa de Lima con sus Islas Ballestas y el oasis de Huacachina, pasando por la majestuosidad inca de Cusco, Machu Picchu y la Montaña de Colores, hasta la cultura viva del Lago Titicaca en Puno con una experiencia vivencial en las islas de Uros, Amantaní y Taquile. Un recorrido integral de costa, sierra y altiplano.",
  "descriptionEn": "The definitive Peru journey in 10 days: from the coast of Lima with its Ballestas Islands and Huacachina Oasis, through the Inca majesty of Cusco, Machu Picchu and Rainbow Mountain, to the living culture of Lake Titicaca in Puno with an immersive experience on the islands of Uros, Amantaní and Taquile. A comprehensive tour of coast, highlands and altiplano.",
  "highlights": [
    "City Tour en Lima: Centro Histórico y Circuito Mágico del Agua",
    "Tour a las Islas Ballestas (Paracas) - fauna marina y el Candelabro",
    "Aventura en el Oasis de Huacachina: buggies y sandboarding",
    "Degustación de piscos, vinos, Tejas y Chocotejas",
    "Vuelo Lima-Cusco incluido",
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial",
    "Valle Sagrado con almuerzo buffet en Urubamba",
    "Machu Picchu - Maravilla del Mundo",
    "Elección: Montaña de 7 Colores O Laguna Humantay turquesa",
    "Tour a las Salineras de Maras y las Terrazas de Moray",
    "Bus turístico nocturno panorámico Cusco-Puno",
    "Experiencia vivencial en las Islas Flotantes de los Uros",
    "Pernocte en casa familiar en la isla de Amantaní",
    "Visita a la isla de Taquile y su cultura textil",
    "9 noches de alojamiento (hoteles y casa familiar)"
  ],
  "highlightsEn": [
    "Lima City Tour: Historic Center and Magic Water Circuit",
    "Tour to Ballestas Islands (Paracas) - marine wildlife and the Candelabra",
    "Adventure at Huacachina Oasis: buggies and sandboarding",
    "Tasting of piscos, wines, Tejas and Chocotejas",
    "Lima-Cusco flight included",
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco",
    "Sacred Valley with buffet lunch in Urubamba",
    "Machu Picchu - World Wonder",
    "Choice: Rainbow Mountain OR Turquoise Humantay Lake",
    "Tour to Maras Salt Mines and Moray Terraces",
    "Panoramic tourist overnight bus Cusco-Puno",
    "Immersive experience on the Floating Islands of Uros",
    "Overnight stay in family home on Amantaní Island",
    "Visit to Taquile Island and its textile culture",
    "9 nights accommodation (hotels and family home)"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Lima",
    "Transporte turístico en todos los tours",
    "2 noches de hotel en Lima (categoría 3★)",
    "City Tour Lima: transporte, guía, ticket Convento San Francisco, ticket Parque de las Aguas",
    "Tour Paracas e Ica: box breakfast, transporte Lima-Paracas-Ica-Lima, ticket Islas Ballestas, recorrido en lancha, guía, degustación de Tejas y Chocotejas",
    "Degustación de piscos y vinos en Ica",
    "Ingreso al Oasis de Huacachina y práctica de sandboarding/buggies",
    "Traslado hotel-aeropuerto en Lima",
    "Vuelo Lima-Cusco",
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua de bienvenida y mate de coca en Cusco",
    "4 noches de hotel en Cusco (categoría 3★)",
    "1 noche de hotel en Aguas Calientes",
    "City Tour Cusco: recojoo, transporte, tickets Catedral y Qoricancha, Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos, guía",
    "Tour Valle Sagrado: desayuno, almuerzo buffet en Urubamba, transporte, ticket BTP (Pisac y Ollantaytambo), guía, ticket tren turístico (Ollantaytambo-Aguas Calientes)",
    "Tour Machu Picchu: desayuno, ticket bus Consettur (ida/vuelta), ticket ingreso a Machu Picchu, guía, ticket tren turístico (Aguas Calientes-Ollantaytambo), transporte Ollantaytambo-Cusco",
    "Tour Día 6: Elección entre Montaña de Colores O Laguna Humantay (incluye desayuno, almuerzo, transporte, guía, ticket de ingreso)",
    "Tour Maras y Moray: desayuno, transporte, ticket ingreso a Salineras y Moray, guía, traslado hotel-terminal",
    "Bus turístico nocturno Cusco-Puno (servicio turístico)",
    "Tour Lago Titicaca (Día 8-9): transporte, tickets de ingreso a islas, guía, almuerzo y cena en casa familiar (Amantaní), desayuno en Amantaní, almuerzo en Taquile",
    "1 noche en casa familiar en Amantaní",
    "1 noche de hotel en Puno (categoría 3★)",
    "Traslado hotel-aeropuerto de Juliaca (Puno)"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Lima",
    "Tourist transportation on all tours",
    "2 nights hotel in Lima (3★ category)",
    "Lima City Tour: transportation, guide, San Francisco Convent ticket, Water Park ticket",
    "Paracas and Ica Tour: box breakfast, Lima-Paracas-Ica-Lima transportation, Ballestas Islands ticket, boat tour, guide, Tejas and Chocotejas tasting",
    "Pisco and wine tasting in Ica",
    "Entrance to Huacachina Oasis and sandboarding/buggies practice",
    "Hotel-airport transfer in Lima",
    "Lima-Cusco flight",
    "Airport-hotel transfer in Cusco",
    "1 welcome water bottle and coca tea in Cusco",
    "4 nights hotel in Cusco (3★ category)",
    "1 night hotel in Aguas Calientes",
    "Cusco City Tour: pick-up, transportation, Cathedral and Qoricancha tickets, Partial Tourist Ticket (BTP) for 4 archaeological sites, guide",
    "Sacred Valley Tour: breakfast, buffet lunch in Urubamba, transportation, BTP ticket (Pisac and Ollantaytambo), guide, tourist train ticket (Ollantaytambo-Aguas Calientes)",
    "Machu Picchu Tour: breakfast, Consettur bus ticket (roundtrip), Machu Picchu entrance ticket, guide, tourist train ticket (Aguas Calientes-Ollantaytambo), Ollantaytambo-Cusco transportation",
    "Day 6 Tour: Choice between Rainbow Mountain OR Humantay Lake (includes breakfast, lunch, transportation, guide, entrance ticket)",
    "Maras and Moray Tour: breakfast, transportation, entrance ticket to Salt Mines and Moray, guide, hotel-terminal transfer",
    "Tourist overnight bus Cusco-Puno (tourist service)",
    "Lake Titicaca Tour (Day 8-9): transportation, island entrance tickets, guide, lunch and dinner in family home (Amantaní), breakfast in Amantaní, lunch in Taquile",
    "1 night in family home on Amantaní",
    "1 night hotel in Puno (3★ category)",
    "Hotel-Juliaca airport transfer (Puno)"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Lima + City Tour Nocturno",
      "titleEn": "Arrival in Lima + Night City Tour",
      "description": "Bienvenida en el aeropuerto de Lima y traslado al hotel. Tarde libre. Por la tarde (2:00 PM), recogida para el City Tour. Visita panorámica a la Huaca Pucllana, las Catacumbas del Convento de San Francisco, el Centro Histórico (Catedral) y la Lima moderna (San Isidro, Miraflores). Finaliza con el show del Circuito Mágico del Agua.",
      "descriptionEn": "Welcome at Lima airport and transfer to hotel. Free afternoon. In the afternoon (2:00 PM), pick-up for City Tour. Panoramic visit to Huaca Pucllana, the Catacombs of San Francisco Convent, the Historic Center (Cathedral), and modern Lima (San Isidro, Miraflores). Ends with the Magic Water Circuit show.",
      "schedule": "02:00 PM - 08:30 PM",
      "includes": ["Traslado aeropuerto-hotel", "City Tour Lima", "Transporte", "Ticket Convento San Francisco", "Ticket Parque de las Aguas", "Guía", "Noche en Lima"],
      "includesEn": ["Airport-hotel transfer", "Lima City Tour", "Transportation", "San Francisco Convent ticket", "Water Park ticket", "Guide", "Night in Lima"]
    },
    {
      "day": 2,
      "title": "Paracas: Islas Ballestas + Ica: Huacachina (Full Day)",
      "titleEn": "Paracas: Ballestas Islands + Ica: Huacachina (Full Day)",
      "description": "Salida muy temprano (5:00 AM) con box breakfast. Viaje a Paracas (3h). Recorrido en lancha por las Islas Ballestas para ver leones marinos, pingüinos y el Candelabro. Degustación de Tejas y Chocotejas. Traslado a Ica. Almuerzo por cuenta propia con show de danzas. Degustación de piscos y vinos. Aventura en el Oasis de Huacachina con buggies y sandboarding. Retorno nocturno a Lima (~10:30 PM).",
      "descriptionEn": "Very early departure (5:00 AM) with box breakfast. Journey to Paracas (3h). Boat tour of Ballestas Islands to see sea lions, penguins, and the Candelabra. Tejas and Chocotejas tasting. Transfer to Ica. Lunch on your own with dance show. Pisco and wine tasting. Adventure at Huacachina Oasis with buggies and sandboarding. Night return to Lima (~10:30 PM).",
      "schedule": "05:00 AM - 10:30 PM",
      "includes": ["Box breakfast", "Transporte Lima-Paracas-Ica-Lima", "Ticket Islas Ballestas", "Recorrido en lancha", "Guía", "Degustación Tejas/Chocotejas", "Degustación Piscos/Vinos", "Ingreso Huacachina", "Buggies/Sandboarding", "Noche en Lima"],
      "includesEn": ["Box breakfast", "Lima-Paracas-Ica-Lima transportation", "Ballestas Islands ticket", "Boat tour", "Guide", "Tejas/Chocotejas tasting", "Pisco/Wine tasting", "Huacachina entrance", "Buggies/Sandboarding", "Night in Lima"]
    },
    {
      "day": 3,
      "title": "Vuelo a Cusco + City Tour Imperial",
      "titleEn": "Flight to Cusco + Imperial City Tour",
      "description": "Desayuno en el hotel. Traslado al aeropuerto para vuelo a Cusco. Bienvenida en Cusco con traslado al hotel, mate de coca y charla informativa. Por la tarde: City Tour visitando la Plaza de Armas, Catedral, Qoricancha (Templo del Sol) y los sitios arqueológicos cercanos: Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay.",
      "descriptionEn": "Breakfast at hotel. Transfer to airport for flight to Cusco. Welcome in Cusco with hotel transfer, coca tea and informative talk. Afternoon: City Tour visiting Main Square, Cathedral, Qoricancha (Temple of the Sun) and nearby archaeological sites: Sacsayhuamán, Q'enqo, Puka Pukara and Tambomachay.",
      "schedule": "Vuelo matutino + 12:45 PM - 06:30 PM",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto Lima", "Vuelo Lima-Cusco", "Traslado aeropuerto-hotel Cusco", "1 botella agua", "Mate de coca", "City Tour Cusco", "Tickets Catedral/Qoricancha/BTP", "Guía", "Noche en Cusco"],
      "includesEn": ["Breakfast", "Hotel-airport transfer Lima", "Lima-Cusco flight", "Airport-hotel transfer Cusco", "1 water bottle", "Coca tea", "Cusco City Tour", "Cathedral/Qoricancha/BTP tickets", "Guide", "Night in Cusco"]
    },
    {
      "day": 4,
      "title": "Valle Sagrado + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley + Train to Aguas Calientes",
      "description": "Recojo del hotel (7:30 AM). Visita al mirador de Taray para apreciar el Valle Sagrado. Recorrido por el complejo arqueológico de Pisaq. Traslado a Urubamba para un almuerzo buffet. Por la tarde, visita a Ollantaytambo y su complejo arqueológico. Al finalizar, traslado a la estación para abordar el tren turístico hacia Aguas Calientes, donde se pernocta.",
      "descriptionEn": "Hotel pick-up (7:30 AM). Visit to Taray viewpoint to appreciate the Sacred Valley. Tour of the Pisaq archaeological complex. Transfer to Urubamba for a buffet lunch. In the afternoon, visit to Ollantaytambo and its archaeological complex. Afterwards, transfer to the station to board the tourist train to Aguas Calientes for overnight stay.",
      "schedule": "07:30 AM - 06:30 PM (approx. train departure)",
      "includes": ["Desayuno hotel", "1 botella agua", "Almuerzo buffet Urubamba", "Transporte turístico", "Ticket BTP (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "1 water bottle", "Buffet lunch Urubamba", "Tourist transportation", "BTP Ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 5,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus a la ciudadela de Machu Picchu. Visita guiada de 2 horas por la maravilla, incluyendo el Templo de las Tres Ventanas y el Reloj Solar. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Toma del tren de retorno a Ollantaytambo y traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus transfer to Machu Picchu citadel. 2-hour guided tour of the wonder, including the Temple of the Three Windows and the Sun Dial. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Board return train to Ollantaytambo and bus transfer to Cusco.",
      "schedule": "08:00 AM - 06:30 PM (retorno a Cusco aprox. 9 PM)",
      "includes": ["Desayuno hotel", "Bus Consettur (ida y vuelta)", "Ticket Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus (roundtrip)", "Machu Picchu ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "Elección: Montaña de Colores O Laguna Humantay",
      "titleEn": "Choice: Rainbow Mountain OR Humantay Lake",
      "description": "OPCIÓN 1 - MONTANA DE COLORES (04:30 AM - 05:00 PM): Salida a Cusipata para desayuno. Caminata de 1h45min a la montaña colorida. Fotos y explicación. Retorno para almuerzo y regreso a Cusco. OPCIÓN 2 - LAGUNA HUMANTAY (04:30 AM - 05:00 PM): Salida a Mollepata para desayuno. Caminata de 1h45min desde Soraypampa a la laguna turquesa. Fotos y tiempo libre. Retorno para almuerzo y regreso a Cusco.",
      "descriptionEn": "OPTION 1 - RAINBOW MOUNTAIN (04:30 AM - 05:00 PM): Departure to Cusipata for breakfast. 1h45min hike to colorful mountain. Photos and explanation. Return for lunch and back to Cusco. OPTION 2 - HUMANTAY LAKE (04:30 AM - 05:00 PM): Departure to Mollepata for breakfast. 1h45min hike from Soraypampa to turquoise lake. Photos and free time. Return for lunch and back to Cusco.",
      "schedule": "04:30 AM - 05:00 PM",
      "includes": ["Desayuno y almuerzo en ruta", "Transporte turístico", "Guía profesional", "Ticket de ingreso (Montaña o Laguna)", "Noche en Cusco"],
      "includesEn": ["Breakfast and lunch en route", "Tourist transportation", "Professional guide", "Entrance ticket (Mountain or Lake)", "Night in Cusco"]
    },
    {
      "day": 7,
      "title": "Maras, Moray, Chinchero + Bus Nocturno a Puno",
      "titleEn": "Maras, Moray, Chinchero + Overnight Bus to Puno",
      "description": "Salida del hotel (8:10 AM). Visita a las terrazas circulares de Moray (centro de investigación agrícola inca) y las famosas Salineras de Maras. Visita a Chinchero para conocer su tradición textil. Tarde libre en Cusco. Por la noche (~21:00 hrs), traslado al terminal para abordar el bus turístico nocturno con destino a Puno.",
      "descriptionEn": "Hotel departure (8:10 AM). Visit to the circular terraces of Moray (Inca agricultural research center) and the famous Maras Salt Mines. Visit to Chinchero to learn about its textile tradition. Free afternoon in Cusco. In the evening (~9:00 PM), transfer to the terminal to board the tourist overnight bus to Puno.",
      "schedule": "08:10 AM - 09:00 PM (salida del bus)",
      "includes": ["Desayuno hotel", "Transporte turístico", "Ticket ingreso a Salineras y Moray", "Guía profesional", "Traslado hotel-terminal", "Bus turístico nocturno Cusco-Puno"],
      "includesEn": ["Hotel breakfast", "Tourist transportation", "Entrance ticket to Salt Mines and Moray", "Professional guide", "Hotel-terminal transfer", "Tourist overnight bus Cusco-Puno"]
    },
    {
      "day": 8,
      "title": "Experiencia Vivencial: Islas Uros y Amantaní",
      "titleEn": "Immersive Experience: Uros and Amantaní Islands",
      "description": "Llegada a Puno y traslado al hotel para prepararse. Visita a las Islas Flotantes de los Uros, conociendo su historia y construcción. Traslado a la isla de Amantaní, donde una familia local le recibirá con un almuerzo típico. Por la tarde, caminata hacia los templos Pachatata y Pachamama. Cena y posible show cultural. Pernocte en casa familiar.",
      "descriptionEn": "Arrival in Puno and transfer to hotel to freshen up. Visit to the Floating Islands of Uros, learning about their history and construction. Transfer to Amantaní Island, where a local family will welcome you with a typical lunch. In the afternoon, hike to the Pachatata and Pachamama temples. Dinner and possible cultural show. Overnight in family home.",
      "schedule": "07:30 AM - 04:00 PM (actividades en islas)",
      "includes": ["Transporte turístico", "Ticket ingreso a las Islas", "Guía profesional", "Almuerzo y cena en casa familiar", "Noche en casa familiar (Amantaní)"],
      "includesEn": ["Tourist transportation", "Entrance ticket to the Islands", "Professional guide", "Lunch and dinner in family home", "Night in family home (Amantaní)"]
    },
    {
      "day": 9,
      "title": "Isla de Taquile + Retorno a Puno",
      "titleEn": "Taquile Island + Return to Puno",
      "description": "Desayuno en Amantaní. Traslado en lancha a la isla de Taquile. Caminata de aproximadamente 35 minutos para conocer su historia, costumbres y arcos de piedra tradicionales. Degustación de un delicioso almuerzo con vista al lago. Retorno en lancha a Puno y traslado al hotel.",
      "descriptionEn": "Breakfast in Amantaní. Boat transfer to Taquile Island. Approximately 35-minute walk to learn about its history, customs, and traditional stone arches. Enjoy a delicious lunch with lake view. Return by boat to Puno and transfer to hotel.",
      "schedule": "07:30 AM - 04:00 PM",
      "includes": ["Desayuno en Amantaní", "Ticket ingreso a Taquile", "Guía profesional", "Transporte en lancha", "Almuerzo en Taquile", "Noche en Puno"],
      "includesEn": ["Breakfast in Amantaní", "Entrance ticket to Taquile", "Professional guide", "Boat transportation", "Lunch in Taquile", "Night in Puno"]
    },
    {
      "day": 10,
      "title": "Despedida + Traslado al Aeropuerto de Juliaca",
      "titleEn": "Farewell + Transfer to Juliaca Airport",
      "description": "Desayuno en el hotel de Puno. Traslado al aeropuerto de Juliaca (el más cercano a Puno) 3 horas antes de su vuelo. Despedida del equipo y fin de servicios.",
      "descriptionEn": "Breakfast at hotel in Puno. Transfer to Juliaca airport (closest to Puno) 3 hours before your flight. Farewell to the team and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto (Juliaca)", "Fin de servicios"],
      "includesEn": ["Breakfast", "Hotel-airport transfer (Juliaca)", "End of services"]
    }
  ]
},{
  "id": "experiencia-lima-nazca-cusco-10d9n",
  "title": "Experiencia Lima-Nazca-Cusco 10D/9N",
  "titleEn": "Lima-Nazca-Cusco Experience 10D/9N",
  "image": "/cuzco-montana-colores.png",
  "duration": 10,
  "difficulty": "moderate",
  "price": 1749,
  "description": "Una experiencia completa de 10 días que combina la costa peruana y la majestuosidad inca. Desde la Lima colonial y moderna, pasando por los misterios de Paracas, la aventura en Huacachina, el sobrevuelo de las líneas de Nazca, hasta sumergirte en el corazón del Imperio Inca en Cusco, el Valle Sagrado y la maravillosa Machu Picchu, culminando con la visita a los sitios arqueológicos de Moray y las salineras de Maras.",
  "descriptionEn": "A comprehensive 10-day experience combining the Peruvian coast and Inca majesty. From colonial and modern Lima, through the mysteries of Paracas, adventure in Huacachina, the flight over the Nazca lines, to immersing yourself in the heart of the Inca Empire in Cusco, the Sacred Valley and the wonderful Machu Picchu, culminating with a visit to the archaeological sites of Moray and the Maras salt mines.",
  "highlights": [
    "City Tour en Lima: Centro Histórico, Huaca Pucllana y Circuito Mágico del Agua",
    "Tour a las Islas Ballestas (Paracas) - fauna marina y el Candelabro",
    "Aventura en el Oasis de Huacachina: buggies y sandboarding",
    "Sobrevuelo a las misteriosas Líneas de Nazca (35 min en avioneta)",
    "Vuelo Lima-Cusco incluido",
    "Bienvenida en Cusco con mate de coca",
    "City Tour completo en Cusco Imperial: Sacsayhuamán, Q'enqo, Puka Pukara, Tambomachay",
    "Valle Sagrado: Pisac, almuerzo buffet en Urubamba, Ollantaytambo",
    "Machu Picchu - Maravilla del Mundo",
    "Tour a las Salineras de Maras y Moray (centro de experimentación agrícola inca)",
    "9 noches de hotel en Lima, Nazca, Aguas Calientes y Cusco"
  ],
  "highlightsEn": [
    "Lima City Tour: Historic Center, Huaca Pucllana and Magic Water Circuit",
    "Tour to Ballestas Islands (Paracas) - marine wildlife and the Candelabra",
    "Adventure at Huacachina Oasis: buggies and sandboarding",
    "Flight over the mysterious Nazca Lines (35 min by plane)",
    "Lima-Cusco flight included",
    "Welcome in Cusco with coca tea",
    "Complete City Tour in Imperial Cusco: Sacsayhuamán, Q'enqo, Puka Pukara, Tambomachay",
    "Sacred Valley: Pisac, buffet lunch in Urubamba, Ollantaytambo",
    "Machu Picchu - World Wonder",
    "Tour to Maras Salt Mines and Moray (Inca agricultural experimentation center)",
    "9 nights hotel in Lima, Nazca, Aguas Calientes and Cusco"
  ],
  "hotelCategory": "3★",
  "passengerType": "Premium",
  "inclusions": [
    "Traslado aeropuerto-hotel en Lima (Día 1)",
    "2 noches de hotel en Lima",
    "City Tour Lima: transporte, guía, ticket Convento San Francisco, ticket Parque de las Aguas",
    "Tour Paracas e Ica: transporte Lima-Paracas-Ica-Nazca, ticket Islas Ballestas, recorrido en lancha, guía, degustación de Tejas y Chocotejas, ingreso a Huacachina, práctica de sandboarding y buggies, degustación de piscos y vinos",
    "1 noche de hotel en Nazca",
    "Sobrevuelo Líneas de Nazca: desayuno, transporte hotel-aeródromo-hotel, ticket, guía, bus Nazca-Lima (servicio regular)",
    "Traslado hotel-aeropuerto en Lima",
    "Vuelo Lima-Cusco",
    "Traslado aeropuerto-hotel en Cusco",
    "1 botella de agua y mate de coca en Cusco",
    "4 noches de hotel en Cusco",
    "1 noche de hotel en Aguas Calientes",
    "City Tour Cusco: recojoo, transporte, tickets Catedral y Qoricancha, Boleto Turístico General (BTG) para 4 sitios arqueológicos, guía",
    "Tour Valle Sagrado: desayuno, almuerzo buffet en Urubamba, transporte, ticket BTG (Pisac y Ollantaytambo), guía, ticket tren turístico (Ollantaytambo-Aguas Calientes)",
    "Tour Machu Picchu: desayuno, ticket bus Consettur (ida/vuelta), ticket ingreso a Machu Picchu, guía, ticket tren turístico (Aguas Calientes-Ollantaytambo), transporte Ollantaytambo-Cusco",
    "Tour Salineras de Maras y Moray: desayuno, transporte, tickets de ingreso, guía",
    "Traslado hotel-aeropuerto en Cusco"
  ],
  "inclusionsEn": [
    "Airport-hotel transfer in Lima (Day 1)",
    "2 nights hotel in Lima",
    "Lima City Tour: transportation, guide, San Francisco Convent ticket, Water Park ticket",
    "Paracas and Ica Tour: Lima-Paracas-Ica-Nazca transportation, Ballestas Islands ticket, boat tour, guide, Tejas and Chocotejas tasting, entrance to Huacachina, sandboarding and buggies practice, pisco and wine tasting",
    "1 night hotel in Nazca",
    "Nazca Lines Flight: breakfast, hotel-airfield-hotel transportation, ticket, guide, Nazca-Lima bus (regular service)",
    "Hotel-airport transfer in Lima",
    "Lima-Cusco flight",
    "Airport-hotel transfer in Cusco",
    "1 water bottle and coca tea in Cusco",
    "4 nights hotel in Cusco",
    "1 night hotel in Aguas Calientes",
    "Cusco City Tour: pick-up, transportation, Cathedral and Qoricancha tickets, General Tourist Ticket (BTG) for 4 archaeological sites, guide",
    "Sacred Valley Tour: breakfast, buffet lunch in Urubamba, transportation, BTG ticket (Pisac and Ollantaytambo), guide, tourist train ticket (Ollantaytambo-Aguas Calientes)",
    "Machu Picchu Tour: breakfast, Consettur bus ticket (roundtrip), Machu Picchu entrance ticket, guide, tourist train ticket (Aguas Calientes-Ollantaytambo), Ollantaytambo-Cusco transportation",
    "Maras Salt Mines and Moray Tour: breakfast, transportation, entrance tickets, guide",
    "Hotel-airport transfer in Cusco"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Lima + Bienvenida",
      "titleEn": "Arrival in Lima + Welcome",
      "description": "Llegada al Aeropuerto Internacional Jorge Chávez en Lima. Traslado privado al hotel en Miraflores. Durante el trayecto, primeras vistas de la ciudad. En el hotel, charla informativa sobre el itinerario.",
      "descriptionEn": "Arrival at Jorge Chávez International Airport in Lima. Private transfer to hotel in Miraflores. First views of the city during the transfer. At the hotel, informative talk about the itinerary.",
      "schedule": "Según horario de vuelo",
      "includes": ["Traslado privado aeropuerto-hotel", "Noche en Lima", "Charla informativa"],
      "includesEn": ["Private airport-hotel transfer", "Night in Lima", "Informative talk"]
    },
    {
      "day": 2,
      "title": "City Tour en Lima Colonial y Moderna",
      "titleEn": "City Tour in Colonial and Modern Lima",
      "description": "Mañana libre. Por la tarde, recogida para el City Tour. Visita al Parque del Amor (vista al Pacífico), la Huaca Pucllana (centro ceremonial), las Catacumbas del Convento de San Francisco y el Centro Histórico (Catedral). Finaliza con el espectáculo del Circuito Mágico del Agua.",
      "descriptionEn": "Free morning. In the afternoon, pick-up for City Tour. Visit to Parque del Amor (Pacific view), Huaca Pucllana (ceremonial center), the Catacombs of San Francisco Convent and the Historic Center (Cathedral). Ends with the Magic Water Circuit show.",
      "schedule": "Tarde (horario por confirmar)",
      "includes": ["Transporte turístico", "Ticket Convento San Francisco", "Guía profesional", "Ticket Parque de las Aguas", "Noche en Lima"],
      "includesEn": ["Tourist transportation", "San Francisco Convent ticket", "Professional guide", "Water Park ticket", "Night in Lima"]
    },
    {
      "day": 3,
      "title": "Islas Ballestas (Paracas) + Oasis de Huacachina (Ica) + Noche en Nazca",
      "titleEn": "Ballestas Islands (Paracas) + Huacachina Oasis (Ica) + Night in Nazca",
      "description": "Salida temprano hacia Paracas. Parada para empanadas. En Paracas, embarque para recorrido en lancha por las Islas Ballestas (fauna marina y Candelabro). Degustación de Tejas y Chocotejas. Traslado a Ica. Almuerzo por cuenta propia. Degustación de piscos y vinos. Aventura en el Oasis de Huacachina con buggies y sandboarding. Traslado nocturno a Nazca para pernoctar.",
      "descriptionEn": "Early departure to Paracas. Stop for empanadas. In Paracas, boarding for boat tour of Ballestas Islands (marine wildlife and Candelabra). Tejas and Chocotejas tasting. Transfer to Ica. Lunch on your own. Pisco and wine tasting. Adventure at Huacachina Oasis with buggies and sandboarding. Night transfer to Nazca for overnight stay.",
      "schedule": "Salida temprano - Llegada nocturna a Nazca",
      "includes": ["Transporte turístico Lima-Paracas-Ica-Nazca", "Ticket Islas Ballestas", "Recorrido en lancha", "Guía", "Degustación Tejas/Chocotejas", "Degustación Piscos/Vinos", "Ingreso Huacachina", "Buggies/Sandboarding", "Noche en Nazca"],
      "includesEn": ["Lima-Paracas-Ica-Nazca tourist transportation", "Ballestas Islands ticket", "Boat tour", "Guide", "Tejas/Chocotejas tasting", "Pisco/Wine tasting", "Huacachina entrance", "Buggies/Sandboarding", "Night in Nazca"]
    },
    {
      "day": 4,
      "title": "Sobrevuelo Líneas de Nazca + Retorno a Lima",
      "titleEn": "Nazca Lines Flight + Return to Lima",
      "description": "Desayuno en el hotel. Traslado al aeródromo de Nazca. Charla informativa y sobrevuelo de ~35 minutos sobre las Líneas de Nazca. Tiempo libre. Por la tarde (~14:10), traslado al terminal para tomar bus regular de retorno a Lima. Llegada a Lima y noche en hotel.",
      "descriptionEn": "Breakfast at hotel. Transfer to Nazca airfield. Informative talk and ~35-minute flight over the Nazca Lines. Free time. In the afternoon (~14:10), transfer to bus terminal to take regular service bus back to Lima. Arrival in Lima and night at hotel.",
      "schedule": "Mañana (vuelo) - Tarde/noche (viaje en bus)",
      "includes": ["Desayuno hotel", "Sobrevuelo Nazca", "Guía profesional", "Transporte hotel-aeródromo-hotel", "Bus Nazca-Lima (servicio regular)", "Traslado terminal-hotel en Lima", "Noche en Lima"],
      "includesEn": ["Hotel breakfast", "Nazca Lines flight", "Professional guide", "Hotel-airfield-hotel transportation", "Nazca-Lima bus (regular service)", "Terminal-hotel transfer in Lima", "Night in Lima"]
    },
    {
      "day": 5,
      "title": "Vuelo a Cusco + Bienvenida Imperial",
      "titleEn": "Flight to Cusco + Imperial Welcome",
      "description": "Desayuno en el hotel. Traslado al aeropuerto de Lima para vuelo a Cusco. Llegada a Cusco, bienvenida y traslado al hotel. Durante el trayecto, vistas de monumentos como Pachacútec y Qoricancha. En el hotel, mate de coca y charla informativa.",
      "descriptionEn": "Breakfast at hotel. Transfer to Lima airport for flight to Cusco. Arrival in Cusco, welcome and transfer to hotel. During the transfer, views of monuments like Pachacútec and Qoricancha. At the hotel, coca tea and informative talk.",
      "schedule": "Vuelo matutino - Tarde (llegada a Cusco)",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto Lima", "Vuelo Lima-Cusco", "Traslado aeropuerto-hotel Cusco", "1 botella agua", "Mate de coca", "Charla informativa", "Noche en Cusco"],
      "includesEn": ["Breakfast", "Hotel-airport transfer Lima", "Lima-Cusco flight", "Airport-hotel transfer Cusco", "1 water bottle", "Coca tea", "Informative talk", "Night in Cusco"]
    },
    {
      "day": 6,
      "title": "City Tour en Cusco: Templos y Fortalezas Incas",
      "titleEn": "City Tour in Cusco: Inca Temples and Fortresses",
      "description": "Recojo del hotel. Visita a la Plaza de Armas y la Catedral. Recorrido por el Qoricancha (Templo del Sol). Transporte turístico a los alrededores: complejo ceremonial de Sacsayhuamán, Q'enqo (centro ceremonial), Puka Pukara (fortaleza) y Tambomachay (Baños del Inca). Retorno a Cusco.",
      "descriptionEn": "Hotel pick-up. Visit to Main Square and Cathedral. Tour of Qoricancha (Temple of the Sun). Tourist transportation to surroundings: Sacsayhuamán ceremonial complex, Q'enqo (ceremonial center), Puka Pukara (fortress) and Tambomachay (Inca Baths). Return to Cusco.",
      "schedule": "Horario por confirmar (mañana/tarde)",
      "includes": ["Desayuno hotel", "Recojo y transporte turístico", "Ticket Catedral", "Ticket Qoricancha", "Ticket BTG (para 4 sitios arqueológicos)", "Guía Profesional", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Pick-up and tourist transportation", "Cathedral ticket", "Qoricancha ticket", "BTG ticket (for 4 archaeological sites)", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 7,
      "title": "Valle Sagrado de los Incas + Tren a Aguas Calientes",
      "titleEn": "Sacred Valley of the Incas + Train to Aguas Calientes",
      "description": "Recojo del hotel. Visita al mirador de Taray. Recorrido por el complejo arqueológico de Pisaq. Almuerzo buffet en Urubamba. Visita a Ollantaytambo y su complejo arqueológico. Traslado a la estación para abordar tren turístico a Aguas Calientes. Noche en Aguas Calientes.",
      "descriptionEn": "Hotel pick-up. Visit to Taray viewpoint. Tour of Pisaq archaeological complex. Buffet lunch in Urubamba. Visit to Ollantaytambo and its archaeological complex. Transfer to station to board tourist train to Aguas Calientes. Night in Aguas Calientes.",
      "schedule": "07:30 AM aprox. - Llegada a Aguas Calientes (noche)",
      "includes": ["Desayuno hotel", "Almuerzo buffet en Urubamba", "Transporte turístico", "Ticket BTG (Pisaq y Ollantaytambo)", "Guía profesional", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Hotel breakfast", "Buffet lunch in Urubamba", "Tourist transportation", "BTG ticket (Pisac and Ollantaytambo)", "Professional guide", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 8,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Bus a Machu Picchu. Visita guiada de 2 horas por la ciudadela. Tiempo libre para fotos. Retorno en bus a Aguas Calientes (almuerzo por cuenta propia). Toma del tren de retorno a Ollantaytambo. Traslado en bus a Cusco.",
      "descriptionEn": "Breakfast at hotel. Bus to Machu Picchu. 2-hour guided tour of the citadel. Free time for photos. Return bus to Aguas Calientes (lunch on your own). Board return train to Ollantaytambo. Bus transfer to Cusco.",
      "schedule": "Mañana temprano - Noche (llegada a Cusco)",
      "includes": ["Desayuno hotel", "Ticket bus Consettur (ida/vuelta)", "Ticket ingreso Machu Picchu", "Guía profesional", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Consettur bus ticket (roundtrip)", "Machu Picchu entrance ticket", "Professional guide", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "Night in Cusco"]
    },
    {
      "day": 9,
      "title": "Experiencia Maras y Moray (Medio Día)",
      "titleEn": "Maras and Moray Experience (Half Day)",
      "description": "Recojo del hotel. Visita a las terrazas circulares de Moray, antiguo centro de experimentación agrícola inca. Luego, a las Salineras de Maras (más de 3000 pozas de sal). Demostración de arte textil andino en Chinchero. Retorno a Cusco.",
      "descriptionEn": "Hotel pick-up. Visit to the circular terraces of Moray, ancient Inca agricultural experimentation center. Then, to the Maras Salt Mines (over 3000 salt pools). Demonstration of Andean textile art in Chinchero. Return to Cusco.",
      "schedule": "Medio día (horario por confirmar)",
      "includes": ["Desayuno hotel", "Transporte turístico", "Ticket ingreso Salineras y Moray", "Guía profesional", "Noche en Cusco"],
      "includesEn": ["Hotel breakfast", "Tourist transportation", "Entrance ticket Salineras and Moray", "Professional guide", "Night in Cusco"]
    },
    {
      "day": 10,
      "title": "Despedida + Traslado Aeropuerto Cusco",
      "titleEn": "Farewell + Cusco Airport Transfer",
      "description": "Desayuno en el hotel. Traslado al Aeropuerto Internacional de Cusco con 2 horas de anticipación al vuelo. Despedida y fin de los servicios.",
      "descriptionEn": "Breakfast at hotel. Transfer to Cusco International Airport 2 hours before flight. Farewell and end of services.",
      "schedule": "Según horario de vuelo",
      "includes": ["Desayuno", "Traslado hotel-aeropuerto"],
      "includesEn": ["Breakfast", "Hotel-airport transfer"]
    }
  ]
},{
  "id": "machu-picchu-express-2d1n",
  "title": "Machu Picchu Express 2D/1N",
  "titleEn": "Machu Picchu Express 2D/1N",
  "image": "/machu-picchu-express.png",
  "duration": 2,
  "difficulty": "moderate",
  "price": 399,
  "description": "Una experiencia express diseñada para quienes tienen poco tiempo pero no quieren perderse la maravilla del mundo. Llegas a Cusco y te dirigimos directamente al Valle Sagrado para tomar el tren hacia Aguas Calientes. Al día siguiente, visitas Machu Picchu con una guía especializada y regresas a Cusco.",
  "descriptionEn": "An express experience designed for those with limited time who don't want to miss the world wonder. You arrive in Cusco and we take you directly to the Sacred Valley to board the train to Aguas Calientes. The next day, you visit Machu Picchu with a specialized guide and return to Cusco.",
  "highlights": [
    "Traslado directo desde el aeropuerto de Cusco a la estación de Ollantaytambo",
    "Viaje en tren turístico (Perú Rail o Inca Rail) con paisajes espectaculares",
    "Noche en Aguas Calientes, pueblo a los pies de Machu Picchu",
    "Visita guiada completa de 2 horas en Machu Picchu",
    "Ticket de bus Consettur (subida y bajada) entre Aguas Calientes y Machu Picchu",
    "Transporte de retorno desde Ollantaytambo a la ciudad de Cusco"
  ],
  "highlightsEn": [
    "Direct transfer from Cusco airport to Ollantaytambo station",
    "Tourist train journey (Perú Rail or Inca Rail) with spectacular landscapes",
    "Night in Aguas Calientes, town at the foot of Machu Picchu",
    "Complete 2-hour guided tour of Machu Picchu",
    "Consettur bus ticket (roundtrip) between Aguas Calientes and Machu Picchu",
    "Return transportation from Ollantaytambo to Cusco city"
  ],
  "hotelCategory": "3★",
  "passengerType": "Standard",
  "inclusions": [
    "Traslado privado desde el aeropuerto de Cusco a la estación de Ollantaytambo",
    "Transporte turístico Cusco-Ollantaytambo",
    "Ticket de tren turístico (Perú Rail o Inca Rail) Ollantaytambo - Aguas Calientes",
    "1 noche de hotel en Aguas Calientes (categoría 3★)",
    "Desayuno en el hotel en Aguas Calientes",
    "Ticket de bus Consettur (ida y vuelta) Aguas Calientes - Machu Picchu",
    "Ticket de ingreso a Machu Picchu",
    "Guía profesional bilingüe en Machu Picchu (2 horas de tour)",
    "Ticket de tren turístico (Perú Rail o Inca Rail) Aguas Calientes - Ollantaytambo",
    "Transporte turístico Ollantaytambo - Cusco"
  ],
  "inclusionsEn": [
    "Private transfer from Cusco airport to Ollantaytambo station",
    "Tourist transportation Cusco-Ollantaytambo",
    "Tourist train ticket (Perú Rail or Inca Rail) Ollantaytambo - Aguas Calientes",
    "1 night hotel in Aguas Calientes (3★ category)",
    "Breakfast at hotel in Aguas Calientes",
    "Consettur bus ticket (roundtrip) Aguas Calientes - Machu Picchu",
    "Machu Picchu entrance ticket",
    "Bilingual professional guide in Machu Picchu (2-hour tour)",
    "Tourist train ticket (Perú Rail or Inca Rail) Aguas Calientes - Ollantaytambo",
    "Tourist transportation Ollantaytambo - Cusco"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Llegada a Cusco + Tren a Aguas Calientes",
      "titleEn": "Arrival in Cusco + Train to Aguas Calientes",
      "description": "Bienvenida en el aeropuerto de Cusco. Nuestro conductor estará esperando con un cartel con su nombre. Traslado directo hacia Ollantaytambo en el Valle Sagrado (aproximadamente 1 hora y 40 minutos). En la estación de Ollantaytambo, abordará el tren turístico (Perú Rail o Inca Rail) con destino a Aguas Calientes. Llegada al pueblo, check-in en el hotel y noche libre para descansar o explorar.",
      "descriptionEn": "Welcome at Cusco airport. Our driver will be waiting with a sign with your name. Direct transfer to Ollantaytambo in the Sacred Valley (approx. 1 hour 40 minutes). At Ollantaytambo station, you will board the tourist train (Perú Rail or Inca Rail) bound for Aguas Calientes. Arrival in the town, hotel check-in and free night to rest or explore.",
      "schedule": "Según horario de vuelo de llegada a Cusco",
      "includes": ["Traslado aeropuerto-estación Ollantaytambo", "Transporte turístico", "Ticket tren turístico (Ollantaytambo-Aguas Calientes)", "Noche en Aguas Calientes"],
      "includesEn": ["Airport-Ollantaytambo station transfer", "Tourist transportation", "Tourist train ticket (Ollantaytambo-Aguas Calientes)", "Night in Aguas Calientes"]
    },
    {
      "day": 2,
      "title": "Machu Picchu - Maravilla del Mundo + Retorno a Cusco",
      "titleEn": "Machu Picchu - World Wonder + Return to Cusco",
      "description": "Desayuno en el hotel. Traslado en bus Consettur desde Aguas Calientes hasta la entrada de Machu Picchu. Visita guiada de 2 horas por la ciudadela inca, explorando lugares icónicos como el Templo de las Tres Ventanas, el Intihuatana (reloj solar) y más. Tiempo libre para fotos personales. Retorno en bus a Aguas Calientes. Tiempo para almorzar por cuenta propia (no incluido). Por la tarde, traslado a la estación para tomar el tren de retorno a Ollantaytambo. Al llegar, nuestro transporte lo estará esperando para llevarlo de regreso a la ciudad de Cusco.",
      "descriptionEn": "Breakfast at hotel. Consettur bus transfer from Aguas Calientes to Machu Picchu entrance. 2-hour guided tour of the Inca citadel, exploring iconic sites like the Temple of the Three Windows, the Intihuatana (sundial) and more. Free time for personal photos. Return bus to Aguas Calientes. Time for lunch on your own (not included). In the afternoon, transfer to the station to board the return train to Ollantaytambo. Upon arrival, our transportation will be waiting to take you back to Cusco city.",
      "schedule": "Mañana temprano (bus a MP) - Tarde/noche (llegada a Cusco)",
      "includes": ["Desayuno hotel", "Ticket bus Consettur (ida y vuelta)", "Ticket ingreso Machu Picchu", "Guía profesional (2h)", "Ticket tren turístico (Aguas Calientes-Ollantaytambo)", "Transporte Ollantaytambo-Cusco", "Fin de servicios"],
      "includesEn": ["Hotel breakfast", "Consettur bus ticket (roundtrip)", "Machu Picchu entrance ticket", "Professional guide (2h)", "Tourist train ticket (Aguas Calientes-Ollantaytambo)", "Ollantaytambo-Cusco transportation", "End of services"]
    }
  ]
},{
  "id": "machu-picchu-full-day",
  "title": "Machu Picchu Full Day",
  "titleEn": "Machu Picchu Full Day",
  "image": "/machu-picchu-full-day.png",
  "duration": 1,
  "difficulty": "moderate",
  "price": 299,
  "description": "La manera más intensiva de visitar la maravilla del mundo en un solo día. Un tour que comienza antes del amanecer y te lleva desde Cusco hasta Machu Picchu en tren, con una visita guiada completa, y te devuelve a Cusco al final del día.",
  "descriptionEn": "The most intensive way to visit the world wonder in a single day. A tour that starts before sunrise, takes you from Cusco to Machu Picchu by train, includes a complete guided visit, and returns you to Cusco by the end of the day.",
  "highlights": [
    "Recojo muy temprano desde su hotel en Cusco (03:50 AM)",
    "Transporte directo a la estación de tren en Ollantaytambo",
    "Viaje en tren turístico (Perú Rail o Inca Rail) por paisajes espectaculares",
    "Bus Consettur desde Aguas Calientes hasta la entrada de Machu Picchu",
    "Visita guiada completa de 2 horas en la ciudadela inca",
    "Tiempo libre para fotos y exploración personal",
    "Retorno en tren y bus a Cusco el mismo día"
  ],
  "highlightsEn": [
    "Very early pick-up from your hotel in Cusco (03:50 AM)",
    "Direct transportation to the train station in Ollantaytambo",
    "Tourist train journey (Perú Rail or Inca Rail) through spectacular landscapes",
    "Consettur bus from Aguas Calientes to Machu Picchu entrance",
    "Complete 2-hour guided tour of the Inca citadel",
    "Free time for photos and personal exploration",
    "Return by train and bus to Cusco on the same day"
  ],
  "hotelCategory": "No incluye",
  "passengerType": "Standard",
  "inclusions": [
    "Recojo desde su hotel en Cusco (zona céntrica)",
    "Transporte turístico Cusco - Ollantaytambo - Cusco",
    "Ticket de tren turístico ida y vuelta (Perú Rail o Inca Rail): Ollantaytambo - Aguas Calientes - Ollantaytambo",
    "Ticket de bus Consettur (subida y bajada): Aguas Calientes - Machu Picchu - Aguas Calientes",
    "Ticket de ingreso a Machu Picchu",
    "Guía profesional bilingüe durante la visita en Machu Picchu (2 horas)",
    "Asistencia durante todo el tour"
  ],
  "inclusionsEn": [
    "Pick-up from your hotel in Cusco (central area)",
    "Tourist transportation Cusco - Ollantaytambo - Cusco",
    "Roundtrip tourist train ticket (Perú Rail or Inca Rail): Ollantaytambo - Aguas Calientes - Ollantaytambo",
    "Consettur bus ticket (roundtrip): Aguas Calientes - Machu Picchu - Aguas Calientes",
    "Machu Picchu entrance ticket",
    "Bilingual professional guide during the Machu Picchu visit (2 hours)",
    "Assistance throughout the tour"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Machu Picchu Full Day (Día Completo)",
      "titleEn": "Machu Picchu Full Day",
      "description": "Recojo muy temprano (03:50 AM) desde su hotel en Cusco. Viaje en transporte turístico durante 1 hora y 45 minutos hacia la localidad de Ollantaytambo en el Valle Sagrado. Abordaje del tren turístico (Perú Rail o Inca Rail) con destino a Aguas Calientes (viaje de 1 hora y 40 minutos). Al llegar a Aguas Calientes, encuentro con el guía y traslado a la estación de buses. Viaje en bus Consettur (30 minutos) ascendiendo por un camino sinuoso con vistas espectaculares hasta la entrada de Machu Picchu. Visita guiada de 2 horas por la ciudadela, explorando el Templo de las Tres Ventanas, el Intihuatana (reloj solar) y otros lugares icónicos. Tiempo libre para fotos y exploración personal. Descenso en bus a Aguas Calientes. Tiempo para almorzar por cuenta propia (no incluido). Por la tarde, traslado a la estación para tomar el tren de retorno a Ollantaytambo. Al llegar, abordaje del transporte turístico de regreso a Cusco. Llegada aproximada a las 06:30 PM.",
      "descriptionEn": "Very early pick-up (03:50 AM) from your hotel in Cusco. Tourist transportation journey of 1 hour 45 minutes to the town of Ollantaytambo in the Sacred Valley. Boarding of the tourist train (Perú Rail or Inca Rail) bound for Aguas Calientes (1 hour 40 minute journey). Upon arrival in Aguas Calientes, meeting with the guide and transfer to the bus station. Consettur bus journey (30 minutes) ascending a winding road with spectacular views to the Machu Picchu entrance. 2-hour guided tour of the citadel, exploring the Temple of the Three Windows, the Intihuatana (sundial) and other iconic sites. Free time for photos and personal exploration. Bus descent to Aguas Calientes. Time for lunch on your own (not included). In the afternoon, transfer to the station to board the return train to Ollantaytambo. Upon arrival, boarding of tourist transportation back to Cusco. Approximate arrival at 06:30 PM.",
      "schedule": "03:50 AM - 06:30 PM",
      "includes": [
        "Recojo hotel en Cusco",
        "Transporte Cusco-Ollantaytambo-Cusco",
        "Ticket tren turístico ida y vuelta (Ollantaytambo-Aguas Calientes)",
        "Ticket bus Consettur (ida y vuelta)",
        "Ticket ingreso Machu Picchu",
        "Guía profesional (2h)",
        "Asistencia"
      ],
      "includesEn": [
        "Hotel pick-up in Cusco",
        "Transportation Cusco-Ollantaytambo-Cusco",
        "Roundtrip tourist train ticket (Ollantaytambo-Aguas Calientes)",
        "Consettur bus ticket (roundtrip)",
        "Machu Picchu entrance ticket",
        "Professional guide (2h)",
        "Assistance"
      ]
    }
  ]
},
{
  id: 'peru-completo-aventura',
  title: 'Aventuras en Perú — 15 Días / 14 Noches',
  titleEn: 'Peru Adventures — 15 Days / 14 Nights',
  image: '/aventura-peru-15.png',
  duration: 15,
  difficulty: 'moderate',
  price: 2799,
  description: 'Explora lo mejor del Perú en un viaje completo: Lima, Paracas, Huacachina, Nazca, Arequipa, Cañón del Colca, Lago Titicaca, Cusco, Machu Picchu y montañas andinas.',
  descriptionEn: 'Explore the best of Peru in a complete journey: Lima, Paracas, Huacachina, Nazca, Arequipa, Colca Canyon, Lake Titicaca, Cusco, Machu Picchu, and Andean mountains.',
  highlights: [
    'City Tour Lima + Circuito Mágico del Agua',
    'Islas Ballestas y Oasis de Huacachina',
    'Sobrevuelo Líneas de Nazca',
    'Arequipa + Monasterio Santa Catalina',
    'Cañón del Colca + Avistamiento de Cóndores',
    'Lago Titicaca: Islas Uros + Amantaní + Taquile',
    'Cusco + Valle Sagrado completo',
    'Machu Picchu - Maravilla del Mundo',
    'Montaña de 7 Colores',
    'Maras + Moray + Chinchero',
    'Laguna Humantay turquesa',
    '14 noches de alojamiento',
    'Todas las entradas y transportes incluidos',
    'Experiencia vivencial en Lago Titicaca'
  ],
  highlightsEn: [
    'Lima City Tour + Magic Water Circuit',
    'Ballestas Islands and Huacachina Oasis',
    'Nazca Lines Overflight',
    'Arequipa + Santa Catalina Monastery',
    'Colca Canyon + Condor Watching',
    'Lake Titicaca: Uros + Amantaní + Taquile Islands',
    'Complete Cusco + Sacred Valley',
    'Machu Picchu - World Wonder',
    'Rainbow Mountain',
    'Maras + Moray + Chinchero',
    'Turquoise Humantay Lake',
    '14 nights accommodation',
    'All entrance fees and transportation included',
    'Living experience at Lake Titicaca'
  ],
  hotelCategory: '2★ a 3★',
  passengerType: 'Exploradores',
  inclusions: [
    '14 noches de hotel (Lima, Nazca, Arequipa, Chivay, Puno, Cusco, Aguas Calientes)',
    'Traslados aeropuerto-hotel-aeropuerto',
    'Tickets de ingreso a todas las atracciones',
    'Guía profesional bilingüe en todos los tours',
    'Desayunos diarios en los hoteles',
    'Almuerzos según itinerario (Valle Sagrado, Colca, Titicaca)',
    'Cena show folclórico en Chivay',
    'Transporte turístico terrestre',
    'Bus turístico Nazca-Arequipa, Puno-Cusco',
    'Bus nocturno Arequipa-Puno (opcional día 7)',
    'Tren turístico a Machu Picchu',
    'Tour en lancha en Islas Ballestas y Lago Titicaca',
    'Sobrevuelo Líneas de Nazca (35 minutos)',
    'Experiencia vivencial en Amantaní con familia local',
    'Baños termales en Chivay',
    'Degustación de vinos y piscos en Ica',
    'Actividades aventura en Huacachina (buggys, sandboard)',
    'Asistencia permanente 24/7 durante todo el viaje'
  ],
  inclusionsEn: [
    '14 nights hotel (Lima, Nazca, Arequipa, Chivay, Puno, Cusco, Aguas Calientes)',
    'Airport-hotel-airport transfers',
    'Entrance tickets to all attractions',
    'Professional bilingual guide on all tours',
    'Daily breakfasts at hotels',
    'Lunches according to itinerary (Sacred Valley, Colca, Titicaca)',
    'Folklore dinner show in Chivay',
    'Tourist land transportation',
    'Tourist bus Nazca-Arequipa, Puno-Cusco',
    'Overnight bus Arequipa-Puno (optional day 7)',
    'Tourist train to Machu Picchu',
    'Boat tour to Ballestas Islands and Lake Titicaca',
    'Nazca Lines overflight (35 minutes)',
    'Living experience in Amantaní with local family',
    'Hot springs in Chivay',
    'Wine and pisco tasting in Ica',
    'Adventure activities in Huacachina (buggies, sandboarding)',
    '24/7 permanent assistance throughout the journey'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Llegada a Lima + City Tour',
      titleEn: 'Arrival in Lima + City Tour',
      description: 'Recepción en aeropuerto y traslado al hotel. Por la tarde: City Tour Lima con Huaca Pucllana, Centro Histórico, Catedral, Convento San Francisco y Circuito Mágico del Agua.',
      descriptionEn: 'Airport reception and hotel transfer. Afternoon: Lima City Tour with Huaca Pucllana, Historic Center, Cathedral, San Francisco Convent, and Magic Water Circuit.',
      schedule: '14:00 - 20:30',
      includes: ['Traslado aeropuerto', 'City Tour Lima', 'Entradas', 'Guía', 'Noche Lima'],
      includesEn: ['Airport transfer', 'Lima City Tour', 'Entrance tickets', 'Guide', 'Night in Lima']
    },
    {
      day: 2,
      title: 'Paracas + Islas Ballestas → Huacachina → Nazca',
      titleEn: 'Paracas + Ballestas Islands → Huacachina → Nazca',
      description: 'Salida temprano a Paracas. Tour en lancha a Islas Ballestas. Continúa a Ica para degustación de vinos/piscos y aventura en Huacachina (buggys, sandboarding). Traslado a Nazca.',
      descriptionEn: 'Early departure to Paracas. Boat tour to Ballestas Islands. Continue to Ica for wine/pisco tasting and adventure in Huacachina (buggies, sandboarding). Transfer to Nazca.',
      schedule: '05:00 - 20:00',
      includes: ['Box breakfast', 'Transporte', 'Lancha Ballestas', 'Degustación', 'Actividades Huacachina', 'Noche Nazca'],
      includesEn: ['Box breakfast', 'Transportation', 'Ballestas boat', 'Tasting', 'Huacachina activities', 'Night in Nazca']
    },
    {
      day: 3,
      title: 'Sobrevuelo Líneas de Nazca → Arequipa',
      titleEn: 'Nazca Lines Overflight → Arequipa',
      description: 'Traslado al aeródromo para sobrevuelo de 35 minutos sobre las Líneas de Nazca. Luego bus a Arequipa.',
      descriptionEn: 'Transfer to airfield for 35-minute overflight over Nazca Lines. Then bus to Arequipa.',
      schedule: '08:00 - 18:00',
      includes: ['Desayuno', 'Sobrevuelo Nazca', 'Traslados', 'Bus Nazca-Arequipa', 'Noche Arequipa'],
      includesEn: ['Breakfast', 'Nazca overflight', 'Transfers', 'Bus Nazca-Arequipa', 'Night in Arequipa']
    },
    {
      day: 4,
      title: 'Arequipa Libre + Monasterio Santa Catalina',
      titleEn: 'Free Day Arequipa + Santa Catalina Monastery',
      description: 'Día libre para explorar la Ciudad Blanca. Entrada incluida al Monasterio Santa Catalina. Visita opcional a Plaza de Armas y arquitectura en sillar.',
      descriptionEn: 'Free day to explore the White City. Included entrance to Santa Catalina Monastery. Optional visit to Main Square and sillar architecture.',
      schedule: 'Día libre',
      includes: ['Desayuno', 'Entrada Santa Catalina', 'Noche Arequipa'],
      includesEn: ['Breakfast', 'Santa Catalina entrance', 'Night in Arequipa']
    },
    {
      day: 5,
      title: 'Arequipa → Chivay (Cañón del Colca)',
      titleEn: 'Arequipa → Chivay (Colca Canyon)',
      description: 'Viaje a Chivay pasando por Reserva Aguada Blanca (vicuñas) y mirador de volcanes. Tarde libre para baños termales. Cena con show folclórico.',
      descriptionEn: 'Journey to Chivay passing through Aguada Blanca Reserve (vicuñas) and volcano viewpoint. Free afternoon for hot springs. Dinner with folklore show.',
      schedule: '08:00 - 20:00',
      includes: ['Desayuno', 'Transporte', 'Entradas', 'Guía', 'Almuerzo y cena', 'Noche Chivay'],
      includesEn: ['Breakfast', 'Transportation', 'Entrance tickets', 'Guide', 'Lunch and dinner', 'Night in Chivay']
    },
    {
      day: 6,
      title: 'Cañón del Colca → Puno',
      titleEn: 'Colca Canyon → Puno',
      description: 'Visita a Cruz del Cóndor para avistamiento de cóndores. Recorrido por pueblos andinos y andenerías. Almuerzo y viaje a Puno.',
      descriptionEn: 'Visit to Cruz del Cóndor for condor watching. Tour of Andean villages and terraces. Lunch and journey to Puno.',
      schedule: '06:00 - 18:00',
      includes: ['Desayuno', 'Transporte', 'Entradas', 'Guía', 'Almuerzo', 'Bus a Puno', 'Noche Puno'],
      includesEn: ['Breakfast', 'Transportation', 'Entrance tickets', 'Guide', 'Lunch', 'Bus to Puno', 'Night in Puno']
    },
    {
      day: 7,
      title: 'Lago Titicaca: Uros + Amantaní (Vivencial)',
      titleEn: 'Lake Titicaca: Uros + Amantaní (Living Experience)',
      description: 'Tour a Islas flotantes de los Uros. Navegación a Isla Amantaní para experiencia vivencial con familia local. Ceremonia Pachamama y alojamiento en casa familiar.',
      descriptionEn: 'Tour to floating Uros Islands. Navigation to Amantaní Island for living experience with local family. Pachamama ceremony and homestay.',
      schedule: '08:00 - Alojamiento familiar',
      includes: ['Transporte', 'Entradas', 'Guía', 'Almuerzo y cena', 'Noche en Amantaní'],
      includesEn: ['Transportation', 'Entrance tickets', 'Guide', 'Lunch and dinner', 'Night in Amantaní']
    },
    {
      day: 8,
      title: 'Taquile → Bus nocturno a Cusco',
      titleEn: 'Taquile → Overnight bus to Cusco',
      description: 'Caminata cultural en Isla Taquile. Visita a comunidad textilera. Almuerzo con vista al lago. Retorno a Puno y bus nocturno a Cusco.',
      descriptionEn: 'Cultural walk on Taquile Island. Visit to textile community. Lunch with lake view. Return to Puno and overnight bus to Cusco.',
      schedule: '08:00 - 22:00',
      includes: ['Desayuno', 'Almuerzo', 'Entradas', 'Transporte', 'Bus nocturno Puno-Cusco'],
      includesEn: ['Breakfast', 'Lunch', 'Entrance tickets', 'Transportation', 'Overnight bus Puno-Cusco']
    },
    {
      day: 9,
      title: 'Llegada Cusco + City Tour',
      titleEn: 'Arrival Cusco + City Tour',
      description: 'Llegada a Cusco, traslado al hotel y mate de coca. Por la tarde: City Tour Cusco visitando Catedral, Qoricancha, Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay.',
      descriptionEn: 'Arrival in Cusco, hotel transfer and coca tea. Afternoon: Cusco City Tour visiting Cathedral, Qoricancha, Sacsayhuamán, Q\'enqo, Puka Pukara, and Tambomachay.',
      schedule: '09:00 - 18:30',
      includes: ['Traslado terminal', 'City Tour Cusco', 'Entradas', 'Guía', 'Noche Cusco'],
      includesEn: ['Terminal transfer', 'Cusco City Tour', 'Entrance tickets', 'Guide', 'Night in Cusco']
    },
    {
      day: 10,
      title: 'Valle Sagrado de los Incas',
      titleEn: 'Sacred Valley of the Incas',
      description: 'Tour completo del Valle Sagrado: Mirador de Taray, Pisac, almuerzo buffet en Urubamba, Ollantaytambo. Tren a Aguas Calientes.',
      descriptionEn: 'Complete Sacred Valley tour: Taray Viewpoint, Pisac, buffet lunch in Urubamba, Ollantaytambo. Train to Aguas Calientes.',
      schedule: '08:00 - 19:00',
      includes: ['Desayuno', 'Visita Pisac y Ollantaytambo', 'Almuerzo buffet', 'Tren a Aguas Calientes', 'Noche Aguas Calientes'],
      includesEn: ['Breakfast', 'Visit Pisac and Ollantaytambo', 'Buffet lunch', 'Train to Aguas Calientes', 'Night in Aguas Calientes']
    },
    {
      day: 11,
      title: 'Machu Picchu',
      titleEn: 'Machu Picchu',
      description: 'Bus a Machu Picchu para visita guiada de 2 horas. Tiempo libre para fotos. Retorno en tren a Ollantaytambo y transporte a Cusco.',
      descriptionEn: 'Bus to Machu Picchu for 2-hour guided visit. Free time for photos. Return train to Ollantaytambo and transport to Cusco.',
      schedule: '06:00 - 21:00',
      includes: ['Bus subida/bajada', 'Entrada Machu Picchu', 'Guía', 'Tren de retorno', 'Transporte a Cusco', 'Noche Cusco'],
      includesEn: ['Roundtrip bus', 'Machu Picchu entrance', 'Guide', 'Return train', 'Transport to Cusco', 'Night in Cusco']
    },
    {
      day: 12,
      title: 'Montaña de 7 Colores',
      titleEn: 'Rainbow Mountain',
      description: 'Trekking a la Montaña Vinicunca (5,200 msnm). Desayuno en ruta, caminata de 1.5-2 horas, tiempo para fotos y almuerzo. Retorno a Cusco.',
      descriptionEn: 'Trekking to Vinicunca Mountain (5,200 masl). Breakfast en route, 1.5-2 hour hike, photo time, and lunch. Return to Cusco.',
      schedule: '04:30 - 17:00',
      includes: ['Transporte', 'Desayuno y almuerzo', 'Guía', 'Entradas', 'Noche Cusco'],
      includesEn: ['Transportation', 'Breakfast and lunch', 'Guide', 'Entrance tickets', 'Night in Cusco']
    },
    {
      day: 13,
      title: 'Maras + Moray + Chinchero',
      titleEn: 'Maras + Moray + Chinchero',
      description: 'Visita a terrazas circulares de Moray, salineras de Maras y centro textil de Chinchero. Experiencia cultural y demostración textil.',
      descriptionEn: 'Visit to circular terraces of Moray, Maras salt mines, and textile center of Chinchero. Cultural experience and textile demonstration.',
      schedule: '09:00 - 17:00',
      includes: ['Transporte', 'Entradas', 'Guía', 'Noche Cusco'],
      includesEn: ['Transportation', 'Entrance tickets', 'Guide', 'Night in Cusco']
    },
    {
      day: 14,
      title: 'Laguna Humantay',
      titleEn: 'Humantay Lake',
      description: 'Caminata a la laguna turquesa de Humantay (4,200 msnm). Desayuno en ruta, tiempo para fotos panorámicas y almuerzo. Retorno a Cusco.',
      descriptionEn: 'Hike to turquoise Humantay Lake (4,200 masl). Breakfast en route, time for panoramic photos, and lunch. Return to Cusco.',
      schedule: '05:00 - 17:00',
      includes: ['Transporte', 'Desayuno y almuerzo', 'Guía', 'Entradas', 'Noche Cusco'],
      includesEn: ['Transportation', 'Breakfast and lunch', 'Guide', 'Entrance tickets', 'Night in Cusco']
    },
    {
      day: 15,
      title: 'Traslado Aeropuerto',
      titleEn: 'Airport Transfer',
      description: 'Desayuno en hotel. Traslado al aeropuerto de Cusco para vuelo de retorno. Fin de servicios.',
      descriptionEn: 'Breakfast at hotel. Transfer to Cusco airport for return flight. End of services.',
      schedule: 'Según vuelo',
      includes: ['Desayuno', 'Traslado aeropuerto'],
      includesEn: ['Breakfast', 'Airport transfer']
    }
  ]
},// MACHU PICCHU EXPRESS - Tour de 1 día
{
  id: 'machu-picchu-express-1d',
  title: 'Machu Picchu Express',
  titleEn: 'Machu Picchu Express',
  image: '/machuPicchuExpress1d.png',
  duration: 1,
  difficulty: 'easy',
  price: 449,
  description: 'Vive la experiencia Machu Picchu en un solo día. Salida desde Cusco en tren turístico panorámico, visita guiada a la ciudadela Inca y retorno el mismo día. Ideal para viajeros con poco tiempo.',
  descriptionEn: 'Live the Machu Picchu experience in just one day. Departure from Cusco on panoramic tourist train, guided visit to the Inca citadel and return the same day. Ideal for travelers with limited time.',
  highlights: [
    'Tren turístico panorámico ida y vuelta',
    'Visita guiada a Machu Picchu (2 horas)',
    'Buses Consettur subida y bajada',
    'Ticket de ingreso a Machu Picchu incluido',
    'Guía profesional bilingüe',
    'Salida y retorno el mismo día'
  ],
  highlightsEn: [
    'Roundtrip panoramic tourist train',
    'Guided visit to Machu Picchu (2 hours)',
    'Consettur buses up and down',
    'Machu Picchu entrance ticket included',
    'Professional bilingual guide',
    'Same day departure and return'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Express',
  inclusions: [
    'Transporte Cusco-Ollantaytambo-Cusco',
    'Ticket de tren turístico (Ollantaytambo-Aguas Calientes-Ollantaytambo)',
    'Ticket de bus Consettur (subida y bajada)',
    'Ticket de ingreso a Machu Picchu',
    'Guía profesional bilingüe',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Cusco-Ollantaytambo-Cusco transportation',
    'Tourist train ticket (Ollantaytambo-Aguas Calientes-Ollantaytambo)',
    'Consettur bus ticket (roundtrip)',
    'Machu Picchu entrance ticket',
    'Professional bilingual guide',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Machu Picchu Full Day',
      titleEn: 'Machu Picchu Full Day',
      description: 'Salida temprano desde Cusco hacia Ollantaytambo (1h45m). Abordamos el tren panorámico con destino a Aguas Calientes (1h40m). Ascenso en bus Consettur a Machu Picchu (30m). Recorrido guiado de 2 horas por la ciudadela Inca. Tiempo libre para fotos. Retorno en bus a Aguas Calientes, almuerzo libre y tren de regreso a Ollantaytambo. Bus a Cusco.',
      descriptionEn: 'Early departure from Cusco to Ollantaytambo (1h45m). Board panoramic train to Aguas Calientes (1h40m). Ascent by Consettur bus to Machu Picchu (30m). 2-hour guided tour of the Inca citadel. Free time for photos. Return bus to Aguas Calientes, free lunch and return train to Ollantaytambo. Bus to Cusco.',
      schedule: '05:00 - 21:00',
      includes: [
        'Transporte Cusco-Ollantaytambo',
        'Ticket tren turístico',
        'Buses Consettur (ida/vuelta)',
        'Ticket Machu Picchu',
        'Guía profesional'
      ],
      includesEn: [
        'Cusco-Ollantaytambo transportation',
        'Tourist train ticket',
        'Consettur buses (roundtrip)',
        'Machu Picchu ticket',
        'Professional guide'
      ]
    }
  ]
},

// MACHU PICCHU EXPRESS 2D/1N
{
  id: 'machu-picchu-express-2d1n',
  title: 'Machu Picchu Express 2D/1N',
  titleEn: 'Machu Picchu Express 2D/1N',
  image: '/machuPicchuExpress2d1n.png',
  duration: 2,
  difficulty: 'easy',
  price: 599,
  description: 'Descubre Machu Picchu sin prisas. Noche en Aguas Calientes para disfrutar del atardecer y amanecer en la montaña. Visita guiada a la ciudadela con tiempo para explorar y tomar las mejores fotos.',
  descriptionEn: 'Discover Machu Picchu without rush. Overnight in Aguas Calientes to enjoy sunset and sunrise in the mountain. Guided visit to the citadel with time to explore and take the best photos.',
  highlights: [
    'Noche de hotel en Aguas Calientes',
    'Visita a Machu Picchu en horario extendido',
    'Tren turístico panorámico',
    'Atardecer y amanecer en la montaña',
    'Guía profesional bilingüe',
    'Experiencia más relajada'
  ],
  highlightsEn: [
    'Hotel night in Aguas Calientes',
    'Extended visit to Machu Picchu',
    'Panoramic tourist train',
    'Sunset and sunrise in the mountain',
    'Professional bilingual guide',
    'More relaxed experience'
  ],
  hotelCategory: '3★ en Aguas Calientes',
  passengerType: 'Express',
  inclusions: [
    'Transporte Cusco-Ollantaytambo-Cusco',
    'Ticket de tren turístico (ida y vuelta)',
    '1 noche de hotel en Aguas Calientes (3★)',
    'Desayuno en hotel',
    'Ticket de bus Consettur (subida y bajada)',
    'Ticket de ingreso a Machu Picchu',
    'Guía profesional bilingüe',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Cusco-Ollantaytambo-Cusco transportation',
    'Roundtrip tourist train ticket',
    '1 night hotel in Aguas Calientes (3★)',
    'Breakfast at hotel',
    'Consettur bus ticket (roundtrip)',
    'Machu Picchu entrance ticket',
    'Professional bilingual guide',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Aguas Calientes - Atardecer en Machu Picchu',
      titleEn: 'Cusco - Aguas Calientes - Sunset at Machu Picchu',
      description: 'Salida por la mañana hacia Ollantaytambo. Tren panorámico a Aguas Calientes. Almuerzo libre. Por la tarde, ascenso en bus a Machu Picchu para disfrutar del atardecer en la ciudadela con menos visitantes. Retorno a Aguas Calientes y check-in en hotel.',
      descriptionEn: 'Morning departure to Ollantaytambo. Panoramic train to Aguas Calientes. Free lunch. Afternoon ascent by bus to Machu Picchu to enjoy sunset at the citadel with fewer visitors. Return to Aguas Calientes and hotel check-in.',
      schedule: '08:00 - 19:00',
      includes: [
        'Transporte Cusco-Ollantaytambo',
        'Ticket tren turístico',
        'Buses Consettur (ida)',
        'Ticket Machu Picchu (turno tarde)',
        'Guía profesional',
        'Noche en Aguas Calientes'
      ],
      includesEn: [
        'Cusco-Ollantaytambo transportation',
        'Tourist train ticket',
        'Consettur buses (one way)',
        'Machu Picchu ticket (afternoon shift)',
        'Professional guide',
        'Night in Aguas Calientes'
      ]
    },
    {
      day: 2,
      title: 'Amanecer en Machu Picchu - Retorno a Cusco',
      titleEn: 'Sunrise at Machu Picchu - Return to Cusco',
      description: 'Desayuno en hotel. Ascenso en bus a Machu Picchu para ver el amanecer. Segunda visita guiada complementaria. Tiempo libre para explorar y fotografías. Retorno a Aguas Calientes, almuerzo libre. Tren de regreso a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Breakfast at hotel. Ascent by bus to Machu Picchu to see the sunrise. Complementary second guided visit. Free time to explore and take photos. Return to Aguas Calientes, free lunch. Return train to Ollantaytambo and bus to Cusco.',
      schedule: '06:00 - 21:00',
      includes: [
        'Desayuno en hotel',
        'Buses Consettur (ida)',
        'Ticket Machu Picchu (turno mañana)',
        'Guía profesional',
        'Transporte Ollantaytambo-Cusco',
        'Ticket tren retorno'
      ],
      includesEn: [
        'Breakfast at hotel',
        'Consettur buses (one way)',
        'Machu Picchu ticket (morning shift)',
        'Professional guide',
        'Ollantaytambo-Cusco transportation',
        'Return train ticket'
      ]
    }
  ]
},

// SUNSET & SUNRISE 2D/1N
{
  id: 'machu-picchu-sunset-sunrise-2d1n',
  title: 'Sunset & Sunrise 2D/1N',
  titleEn: 'Sunset & Sunrise 2D/1N',
  image: '/machuPicchuSunsetSunrise.png',
  duration: 2,
  difficulty: 'easy',
  price: 649,
  description: 'La experiencia fotográfica definitiva en Machu Picchu. Disfruta de los dos momentos más mágicos del día en la ciudadela Inca: el atardecer dorado y el amanecer místico. Noche en Aguas Calientes.',
  descriptionEn: 'The ultimate photographic experience at Machu Picchu. Enjoy the two most magical moments of the day at the Inca citadel: golden sunset and mystical sunrise. Overnight in Aguas Calientes.',
  highlights: [
    'Experiencia exclusiva atardecer + amanecer',
    '2 ingresos a Machu Picchu',
    'Horarios premium con menos visitantes',
    'Noche en Aguas Calientes 3★',
    'Guía especializado en fotografía',
    'Tren panorámico ejecutivo'
  ],
  highlightsEn: [
    'Exclusive sunset + sunrise experience',
    '2 Machu Picchu entrances',
    'Premium shifts with fewer visitors',
    '3★ night in Aguas Calientes',
    'Photography specialized guide',
    'Executive panoramic train'
  ],
  hotelCategory: '3★ Superior en Aguas Calientes',
  passengerType: 'Premium',
  inclusions: [
    'Transporte Cusco-Ollantaytambo-Cusco',
    'Ticket de tren ejecutivo panorámico',
    '1 noche de hotel en Aguas Calientes (3★ Superior)',
    'Desayuno en hotel',
    'Buses Consettur (múltiples ascensos)',
    '2 tickets de ingreso a Machu Picchu',
    'Guía especializado en fotografía',
    'Asistencia personalizada 24/7'
  ],
  inclusionsEn: [
    'Cusco-Ollantaytambo-Cusco transportation',
    'Executive panoramic train ticket',
    '1 night hotel in Aguas Calientes (3★ Superior)',
    'Breakfast at hotel',
    'Consettur buses (multiple ascents)',
    '2 Machu Picchu entrance tickets',
    'Photography specialized guide',
    '24/7 personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Atardecer Dorado en Machu Picchu',
      titleEn: 'Cusco - Golden Sunset at Machu Picchu',
      description: 'Salida al mediodía hacia Ollantaytambo. Tren ejecutivo panorámico a Aguas Calientes. Traslado y ascenso en bus a Machu Picchu para la sesión de atardecer (15:00-17:00). Guía especializado para fotografías con la mejor luz dorada. Retorno a Aguas Calientes y check-in en hotel.',
      descriptionEn: 'Noon departure to Ollantaytambo. Executive panoramic train to Aguas Calientes. Transfer and bus ascent to Machu Picchu for sunset session (3:00 PM - 5:00 PM). Specialized guide for photography with the best golden light. Return to Aguas Calientes and hotel check-in.',
      schedule: '12:00 - 20:00',
      includes: [
        'Transporte Cusco-Ollantaytambo',
        'Ticket tren ejecutivo',
        'Buses Consettur',
        'Ticket Machu Picchu (turno tarde)',
        'Guía fotografía',
        'Noche en Aguas Calientes'
      ],
      includesEn: [
        'Cusco-Ollantaytambo transportation',
        'Executive train ticket',
        'Consettur buses',
        'Machu Picchu ticket (afternoon shift)',
        'Photography guide',
        'Night in Aguas Calientes'
      ]
    },
    {
      day: 2,
      title: 'Amanecer Místico en Machu Picchu - Retorno',
      titleEn: 'Mystical Sunrise at Machu Picchu - Return',
      description: 'Desayuno muy temprano en hotel. Ascenso en bus a Machu Picchu para ver el amanecer (06:00-08:00). Segunda sesión guiada con enfoque en la salida del sol sobre las montañas. Tiempo libre para explorar. Retorno a Aguas Calientes, almuerzo libre. Tren ejecutivo de regreso a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Very early breakfast at hotel. Bus ascent to Machu Picchu to see the sunrise (6:00 AM - 8:00 AM). Second guided session focusing on sunrise over the mountains. Free time to explore. Return to Aguas Calientes, free lunch. Executive return train to Ollantaytambo and bus to Cusco.',
      schedule: '05:00 - 21:00',
      includes: [
        'Desayuno en hotel',
        'Buses Consettur',
        'Ticket Machu Picchu (turno mañana)',
        'Guía fotografía',
        'Transporte Ollantaytambo-Cusco',
        'Ticket tren ejecutivo retorno'
      ],
      includesEn: [
        'Breakfast at hotel',
        'Consettur buses',
        'Machu Picchu ticket (morning shift)',
        'Photography guide',
        'Ollantaytambo-Cusco transportation',
        'Executive return train ticket'
      ]
    }
  ]
},

// SACRED VALLEY TO MACHU PICCHU 2D/1N
{
  id: 'sacred-valley-machu-picchu-2d1n',
  title: 'Sacred Valley to Machu Picchu 2D/1N',
  titleEn: 'Sacred Valley to Machu Picchu 2D/1N',
  image: '/sacredValleyMachuPicchu.png',
  duration: 2,
  difficulty: 'moderate',
  price: 699,
  description: 'Combinación perfecta: explora los mercados y fortalezas del Valle Sagrado, conecta con la cultura viva de Ollantaytambo y culmina con una visita inolvidable a Machu Picchu. Noche en Aguas Calientes.',
  descriptionEn: 'Perfect combination: explore the markets and fortresses of the Sacred Valley, connect with the living culture of Ollantaytambo, and culminate with an unforgettable visit to Machu Picchu. Overnight in Aguas Calientes.',
  highlights: [
    'Tour completo por el Valle Sagrado',
    'Mercado de Pisac y ruinas',
    'Fortaleza de Ollantaytambo',
    'Noche en Aguas Calientes',
    'Machu Picchu full day',
    'Experiencia cultural auténtica'
  ],
  highlightsEn: [
    'Complete Sacred Valley tour',
    'Pisac market and ruins',
    'Ollantaytambo fortress',
    'Night in Aguas Calientes',
    'Machu Picchu full day',
    'Authentic cultural experience'
  ],
  hotelCategory: '3★ en Aguas Calientes',
  passengerType: 'Premium',
  inclusions: [
    'Tour completo Valle Sagrado',
    'Tickets de ingreso a sitios arqueológicos',
    'Guía profesional en Valle Sagrado',
    'Transporte turístico',
    '1 noche de hotel en Aguas Calientes (3★)',
    'Ticket de tren a Machu Picchu',
    'Ticket de bus Consettur',
    'Ticket de ingreso a Machu Picchu',
    'Guía profesional en Machu Picchu',
    'Desayuno en hotel'
  ],
  inclusionsEn: [
    'Complete Sacred Valley tour',
    'Entrance tickets to archaeological sites',
    'Professional guide in Sacred Valley',
    'Tourist transportation',
    '1 night hotel in Aguas Calientes (3★)',
    'Train ticket to Machu Picchu',
    'Consettur bus ticket',
    'Machu Picchu entrance ticket',
    'Professional guide in Machu Picchu',
    'Breakfast at hotel'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Valle Sagrado: Pisac - Urubamba - Ollantaytambo',
      titleEn: 'Sacred Valley: Pisac - Urubamba - Ollantaytambo',
      description: 'Recojo en hotel (08:00). Visita al mirador y ruinas de Pisac. Tiempo libre en el mercado artesanal de Pisac. Almuerzo buffet en Urubamba (incluido). Visita a la fortaleza de Ollantaytambo. Tren a Aguas Calientes. Check-in en hotel y noche libre.',
      descriptionEn: 'Hotel pickup (8:00 AM). Visit to Pisac viewpoint and ruins. Free time at Pisac artisan market. Buffet lunch in Urubamba (included). Visit to Ollantaytambo fortress. Train to Aguas Calientes. Hotel check-in and free night.',
      schedule: '08:00 - 20:00',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Guía profesional',
        'Tickets sitios arqueológicos',
        'Almuerzo buffet',
        'Ticket tren a Aguas Calientes',
        'Noche en Aguas Calientes'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Professional guide',
        'Archaeological sites tickets',
        'Buffet lunch',
        'Train ticket to Aguas Calientes',
        'Night in Aguas Calientes'
      ]
    },
    {
      day: 2,
      title: 'Machu Picchu - Retorno a Cusco',
      titleEn: 'Machu Picchu - Return to Cusco',
      description: 'Desayuno en hotel. Ascenso en bus a Machu Picchu. Visita guiada de 2 horas por la ciudadela Inca. Tiempo libre para explorar. Retorno a Aguas Calientes, almuerzo libre. Tren de regreso a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Breakfast at hotel. Bus ascent to Machu Picchu. 2-hour guided tour of the Inca citadel. Free time to explore. Return to Aguas Calientes, free lunch. Return train to Ollantaytambo and bus to Cusco.',
      schedule: '06:00 - 21:00',
      includes: [
        'Desayuno en hotel',
        'Buses Consettur',
        'Ticket Machu Picchu',
        'Guía profesional',
        'Transporte Ollantaytambo-Cusco',
        'Ticket tren retorno'
      ],
      includesEn: [
        'Breakfast at hotel',
        'Consettur buses',
        'Machu Picchu ticket',
        'Professional guide',
        'Ollantaytambo-Cusco transportation',
        'Return train ticket'
      ]
    }
  ]
},// SHORT INCA TRAIL 2D/1N
{
  id: 'short-inca-trail-2d1n',
  title: 'Short Inca Trail 2D/1N',
  titleEn: 'Short Inca Trail 2D/1N',
  image: '/shortIncaTrail.png',
  duration: 2,
  difficulty: 'moderate',
  price: 699,
  description: 'La versión corta del camino Inca perfecta para quienes tienen poco tiempo pero no quieren perderse la experiencia de llegar caminando a Machu Picchu. Recorre 12km de senderos ancestrales, visita Wiñay Wayna y entra a Machu Picchu por la Puerta del Sol al amanecer.',
  descriptionEn: 'The short version of the Inca Trail, perfect for those with limited time who don\'t want to miss the experience of arriving at Machu Picchu on foot. Hike 12km of ancestral paths, visit Wiñay Wayna, and enter Machu Picchu through the Sun Gate at sunrise.',
  highlights: [
    'Experiencia única de trekking Inca',
    'Ingreso a Machu Picchu por la Puerta del Sol (Inti Punku)',
    'Visita al increíble sitio arqueológico de Wiñay Wayna',
    'Amanecer espectacular desde la montaña',
    'Campamento a pocos kilómetros de Machu Picchu',
    'Grupos reducidos'
  ],
  highlightsEn: [
    'Unique Inca trekking experience',
    'Entry to Machu Picchu through the Sun Gate (Inti Punku)',
    'Visit to the incredible archaeological site of Wiñay Wayna',
    'Spectacular sunrise from the mountain',
    'Camp just kilometers from Machu Picchu',
    'Small groups'
  ],
  hotelCategory: 'Campamento + 1 noche hotel',
  passengerType: 'Aventura',
  inclusions: [
    'Transporte Cusco-Km 104',
    'Ingreso al Camino Inca y Machu Picchu',
    'Guía profesional bilingüe especializado en trekking',
    'Carguero porteador (7kg por pasajero)',
    'Alimentación durante el trek: 1 almuerzo, 1 cena, 1 desayuno',
    'Equipo de camping (carpa 4 estaciones, colchoneta)',
    'Botiquín de primeros auxilios y oxígeno',
    '1 noche de hotel en Aguas Calientes (3★)',
    'Ticket de bus Consettur (bajada)',
    'Ticket de tren retorno Aguas Calientes-Ollantaytambo',
    'Transporte Ollantaytambo-Cusco'
  ],
  inclusionsEn: [
    'Cusco-Km 104 transportation',
    'Inca Trail and Machu Picchu permits',
    'Professional bilingual trekking guide',
    'Porter (7kg per passenger)',
    'Meals during trek: 1 lunch, 1 dinner, 1 breakfast',
    'Camping equipment (4-season tent, sleeping pad)',
    'First aid kit and oxygen',
    '1 night hotel in Aguas Calientes (3★)',
    'Consettur bus ticket (down)',
    'Return train ticket Aguas Calientes-Ollantaytambo',
    'Ollantaytambo-Cusco transportation'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Km 104 - Wiñay Wayna - Inti Punku - Aguas Calientes',
      titleEn: 'Km 104 - Wiñay Wayna - Inti Punku - Aguas Calientes',
      description: 'Salida muy temprano hacia Ollantaytambo. Tren a Km 104 (Chachabamba). Inicio del trek (10:00 am). Ascenso gradual de 2 horas hasta Wiñay Wayna, impresionante complejo arqueológico con terrazas incas. Almuerzo con vista panorámica. Caminata de 2 horas adicionales hasta la Puerta del Sol (Inti Punku). Primera vista espectacular de Machu Picchu desde las alturas. Descenso en bus a Aguas Calientes. Cena libre y noche en hotel.',
      descriptionEn: 'Very early departure to Ollantaytambo. Train to Km 104 (Chachabamba). Trek start (10:00 am). Gradual 2-hour ascent to Wiñay Wayna, impressive archaeological complex with Inca terraces. Lunch with panoramic view. Additional 2-hour hike to the Sun Gate (Inti Punku). First spectacular view of Machu Picchu from above. Bus descent to Aguas Calientes. Free dinner and night at hotel.',
      schedule: '04:00 - 19:00',
      includes: [
        'Transporte Cusco-Ollantaytambo',
        'Ticket tren Ollantaytambo-Km 104',
        'Ingreso Camino Inca',
        'Guía especializado',
        'Almuerzo',
        'Cena libre',
        'Noche en Aguas Calientes'
      ],
      includesEn: [
        'Cusco-Ollantaytambo transportation',
        'Train ticket Ollantaytambo-Km 104',
        'Inca Trail permit',
        'Specialized guide',
        'Lunch',
        'Free dinner',
        'Night in Aguas Calientes'
      ]
    },
    {
      day: 2,
      title: 'Machu Picchu Full Day - Retorno a Cusco',
      titleEn: 'Machu Picchu Full Day - Return to Cusco',
      description: 'Desayuno en hotel. Ascenso en bus a Machu Picchu. Opcional: segundo ingreso por Inti Punku (consultar disponibilidad). Visita guiada de 2.5 horas por la ciudadela Inca. Tiempo libre para explorar. Retorno en bus a Aguas Calientes. Almuerzo libre. Tren de retorno a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Breakfast at hotel. Bus ascent to Machu Picchu. Optional: second entry through Inti Punku (subject to availability). 2.5-hour guided tour of the Inca citadel. Free time to explore. Return bus to Aguas Calientes. Free lunch. Return train to Ollantaytambo and bus to Cusco.',
      schedule: '06:00 - 21:00',
      includes: [
        'Desayuno en hotel',
        'Buses Consettur (ida)',
        'Ticket Machu Picchu',
        'Guía profesional',
        'Bus bajada Aguas Calientes',
        'Ticket tren retorno',
        'Transporte Ollantaytambo-Cusco'
      ],
      includesEn: [
        'Breakfast at hotel',
        'Consettur buses (up)',
        'Machu Picchu ticket',
        'Professional guide',
        'Bus down to Aguas Calientes',
        'Return train ticket',
        'Ollantaytambo-Cusco transportation'
      ]
    }
  ]
},

// CLASSIC INCA TRAIL 4D/3N
{
  id: 'classic-inca-trail-4d3n',
  title: 'Classic Inca Trail 4D/3N',
  titleEn: 'Classic Inca Trail 4D/3N',
  image: '/classicIncaTrail.png',
  duration: 4,
  difficulty: 'challenging',
  price: 899,
  description: 'La experiencia de trekking más famosa de Sudamérica. 43km de camino ancestral atravesando bosques de neblina, montañas y sitios arqueológicos impresionantes. Llegada a Machu Picchu por la Puerta del Sol en el amanecer del cuarto día. Una aventura única en la vida.',
  descriptionEn: 'The most famous trekking experience in South America. 43km of ancestral path through cloud forests, mountains, and impressive archaeological sites. Arrival at Machu Picchu through the Sun Gate on the fourth day sunrise. A once-in-a-lifetime adventure.',
  highlights: [
    '43km de trekking por el Camino Inca original',
    'Ascenso al Abra de Muerto (4,200 msnm)',
    'Visita a 7 sitios arqueológicos incas',
    'Amanecer en Inti Punku sobre Machu Picchu',
    'Bosque de nubes y ecosistemas únicos',
    'Experiencia grupal inolvidable'
  ],
  highlightsEn: [
    '43km trekking on the original Inca Trail',
    'Ascent to Dead Woman\'s Pass (4,200 masl)',
    'Visit to 7 Inca archaeological sites',
    'Sunrise at Inti Punku over Machu Picchu',
    'Cloud forest and unique ecosystems',
    'Unforgettable group experience'
  ],
  hotelCategory: 'Camping (3 noches) + 1 noche hotel',
  passengerType: 'Aventura',
  inclusions: [
    'Transporte Cusco-Km 82',
    'Permisos de ingreso al Camino Inca y Machu Picchu',
    'Guía profesional bilingüe especializado en alta montaña',
    'Cargueros porteadores (7kg por pasajero)',
    'Cocinero especializado en trekking',
    'Alimentación completa: 4 desayunos, 4 almuerzos, 3 cenas',
    'Snacks y té de coca diario',
    'Equipo de camping de alta montaña',
    'Carpa comedor y cocina',
    'Colchoneta inflable',
    'Botiquín profesional y oxígeno',
    '1 noche de hotel en Aguas Calientes (3★)',
    'Ticket de bus Consettur (bajada)',
    'Ticket de tren retorno Aguas Calientes-Ollantaytambo',
    'Transporte Ollantaytambo-Cusco'
  ],
  inclusionsEn: [
    'Cusco-Km 82 transportation',
    'Inca Trail and Machu Picchu permits',
    'Professional bilingual high mountain guide',
    'Porter (7kg per passenger)',
    'Trekking specialized cook',
    'Full meals: 4 breakfasts, 4 lunches, 3 dinners',
    'Daily snacks and coca tea',
    'High mountain camping equipment',
    'Dining tent and kitchen',
    'Inflatable sleeping pad',
    'Professional first aid kit and oxygen',
    '1 night hotel in Aguas Calientes (3★)',
    'Consettur bus ticket (down)',
    'Return train ticket Aguas Calientes-Ollantaytambo',
    'Ollantaytambo-Cusco transportation'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Km 82 - Llactapata - Ayapata',
      titleEn: 'Cusco - Km 82 - Llactapata - Ayapata',
      description: 'Salida muy temprano desde Cusco. Llegada al Km 82 (08:30). Cruce del puente y registro de permisos. Inicio del trekking. Visita a Llactapata, primer complejo arqueológico. Caminata de 6 horas aproximadamente por terreno ondulado. Almuerzo en ruta. Llegada al campamento Ayapata (3,300 msnm). Cena y descanso.',
      descriptionEn: 'Very early departure from Cusco. Arrival at Km 82 (08:30). Bridge crossing and permit registration. Start of trekking. Visit to Llactapata, first archaeological complex. Approximately 6-hour hike through rolling terrain. Lunch en route. Arrival at Ayapata camp (3,300 masl). Dinner and rest.',
      schedule: '05:00 - 17:00',
      includes: [
        'Transporte Cusco-Km 82',
        'Ingreso Camino Inca',
        'Guía especializado',
        'Almuerzo',
        'Cena',
        'Campamento Ayapata'
      ],
      includesEn: [
        'Cusco-Km 82 transportation',
        'Inca Trail permit',
        'Specialized guide',
        'Lunch',
        'Dinner',
        'Ayapata camp'
      ]
    },
    {
      day: 2,
      title: 'Ayapata - Abra de Muerto - Pacaymayu - Runkurakay',
      titleEn: 'Ayapata - Dead Woman\'s Pass - Pacaymayu - Runkurakay',
      description: 'Día más desafiante. Desayuno (05:30). Ascenso de 3 horas al Abra de Muerto (4,200 msnm), punto más alto del trek. Descenso a Pacaymayu (3,550 msnm). Almuerzo. Ascenso al segundo paso, Abra de Runkurakay (3,970 msnm). Visita al sitio arqueológico de Runkurakay. Descenso al campamento (3,800 msnm). Cena.',
      descriptionEn: 'Most challenging day. Breakfast (05:30). 3-hour ascent to Dead Woman\'s Pass (4,200 masl), highest point of the trek. Descent to Pacaymayu (3,550 masl). Lunch. Ascent to the second pass, Runkurakay Pass (3,970 masl). Visit to Runkurakay archaeological site. Descent to camp (3,800 masl). Dinner.',
      schedule: '05:30 - 16:00',
      includes: [
        'Desayuno',
        'Almuerzo',
        'Cena',
        'Guía especializado',
        'Campamento Chaquicocha'
      ],
      includesEn: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Specialized guide',
        'Chaquicocha camp'
      ]
    },
    {
      day: 3,
      title: 'Chaquicocha - Phuyupatamarca - Wiñay Wayna',
      titleEn: 'Chaquicocha - Phuyupatamarca - Wiñay Wayna',
      description: 'Desayuno (06:00). Caminata de 3 horas al complejo arqueológico de Phuyupatamarca (3,600 msnm), "Pueblo sobre las nubes". Vistas espectaculares. Descenso por escalinatas incas de 1,500 gradas. Almuerzo. Visita a Wiñay Wayna (2,650 msnm), impresionante complejo con terrazas ceremoniales. Campamento junto al sitio. Cena de despedida con equipo.',
      descriptionEn: 'Breakfast (06:00). 3-hour hike to Phuyupatamarca archaeological complex (3,600 masl), "Town above the clouds". Spectacular views. Descent on 1,500-step Inca stairway. Lunch. Visit to Wiñay Wayna (2,650 masl), impressive complex with ceremonial terraces. Camp next to the site. Farewell dinner with the team.',
      schedule: '06:00 - 17:00',
      includes: [
        'Desayuno',
        'Almuerzo',
        'Cena',
        'Guía especializado',
        'Campamento Wiñay Wayna'
      ],
      includesEn: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Specialized guide',
        'Wiñay Wayna camp'
      ]
    },
    {
      day: 4,
      title: 'Inti Punku - Machu Picchu - Retorno Cusco',
      titleEn: 'Inti Punku - Machu Picchu - Return Cusco',
      description: 'Desayuno (04:00). Caminata final de 1 hora a Inti Punku (Puerta del Sol). Amanecer espectacular sobre Machu Picchu (06:00). Descenso a la ciudadela (30 min). Visita guiada de 2.5 horas por Machu Picchu. Tiempo libre. Descenso en bus a Aguas Calientes. Almuerzo libre. Tren de retorno a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Breakfast (04:00). Final 1-hour hike to Inti Punku (Sun Gate). Spectacular sunrise over Machu Picchu (06:00). Descent to the citadel (30 min). 2.5-hour guided tour of Machu Picchu. Free time. Bus descent to Aguas Calientes. Free lunch. Return train to Ollantaytambo and bus to Cusco.',
      schedule: '04:00 - 21:00',
      includes: [
        'Desayuno',
        'Guía especializado',
        'Ticket Machu Picchu',
        'Bus bajada Aguas Calientes',
        'Ticket tren retorno',
        'Transporte Ollantaytambo-Cusco'
      ],
      includesEn: [
        'Breakfast',
        'Specialized guide',
        'Machu Picchu ticket',
        'Bus down to Aguas Calientes',
        'Return train ticket',
        'Ollantaytambo-Cusco transportation'
      ]
    }
  ]
},

// SALKANTAY TREK 5D/4N
{
  id: 'salkantay-trek-5d4n',
  title: 'Salkantay Trek 5D/4N',
  titleEn: 'Salkantay Trek 5D/4N',
  image: '/salkantayTrek.png',
  duration: 5,
  difficulty: 'challenging',
  price: 799,
  description: 'Considerada una de las 25 mejores caminatas del mundo. Rodea el imponente nevado Salkantay (6,271 msnm), desciende a la ceja de selva y culmina en Machu Picchu. Paisajes increíblemente diversos: montañas, lagunas, bosque nublado y selva alta.',
  descriptionEn: 'Considered one of the 25 best treks in the world. Circumnavigate the imposing Salkantay snow-capped mountain (6,271 masl), descend to the high jungle, and culminate at Machu Picchu. Incredibly diverse landscapes: mountains, lagoons, cloud forest, and high jungle.',
  highlights: [
    'Aproximación al nevado Salkantay (6,271 msnm)',
    'Cambio radical de paisaje: Andes a selva',
    'Laguna Humantay turquesa',
    'Termas de Cocalmayo',
    'Coffee farm y cultivos de café orgánico',
    'Llegada a Machu Picchu por hidroeléctrica',
    'Experiencia fuera de lo convencional'
  ],
  highlightsEn: [
    'Approach to Salkantay snow peak (6,271 masl)',
    'Radical landscape change: Andes to jungle',
    'Turquoise Humantay Lake',
    'Cocalmayo hot springs',
    'Coffee farm and organic coffee crops',
    'Arrival to Machu Picchu by hydroelectric',
    'Off the beaten path experience'
  ],
  hotelCategory: 'Camping (3 noches) + 2 noches hostal',
  passengerType: 'Aventura',
  inclusions: [
    'Transporte Cusco-Mollepata-Soraypampa',
    'Guía profesional bilingüe especializado',
    'Cargueros porteadores para equipo común',
    'Caballos de carga para equipo',
    'Alimentación completa durante el trek',
    'Snacks y bebidas calientes diarias',
    'Equipo de camping de montaña',
    'Carpa comedor y cocina',
    'Colchoneta inflable',
    'Botiquín profesional y oxígeno',
    '1 noche de hostal en Santa Teresa',
    '1 noche de hostal en Aguas Calientes',
    'Ticket de bus Consettur',
    'Ticket de ingreso a Machu Picchu',
    'Ticket de tren retorno Aguas Calientes-Ollantaytambo',
    'Transporte Ollantaytambo-Cusco'
  ],
  inclusionsEn: [
    'Cusco-Mollepata-Soraypampa transportation',
    'Professional bilingual specialized guide',
    'Porters for common equipment',
    'Pack horses for equipment',
    'Full meals during the trek',
    'Daily snacks and hot drinks',
    'Mountain camping equipment',
    'Dining tent and kitchen',
    'Inflatable sleeping pad',
    'Professional first aid kit and oxygen',
    '1 night hostel in Santa Teresa',
    '1 night hostel in Aguas Calientes',
    'Consettur bus ticket',
    'Machu Picchu entrance ticket',
    'Return train ticket Aguas Calientes-Ollantaytambo',
    'Ollantaytambo-Cusco transportation'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Mollepata - Soraypampa - Laguna Humantay',
      titleEn: 'Cusco - Mollepata - Soraypampa - Humantay Lake',
      description: 'Salida (04:30) hacia Mollepata (2,800 msnm). Desayuno. Continuación a Soraypampa (3,900 msnm). Aclimatación. Caminata de 1.5 horas a Laguna Humantay (4,200 msnm). Vista espectacular del nevado Humantay. Retorno a Soraypampa. Instalación de campamento. Cena.',
      descriptionEn: 'Departure (04:30) to Mollepata (2,800 masl). Breakfast. Continue to Soraypampa (3,900 masl). Acclimatization. 1.5-hour hike to Humantay Lake (4,200 masl). Spectacular view of Humantay snow peak. Return to Soraypampa. Camp setup. Dinner.',
      schedule: '04:30 - 17:00',
      includes: [
        'Transporte Cusco-Mollepata',
        'Desayuno en Mollepata',
        'Almuerzo',
        'Cena',
        'Guía especializado',
        'Campamento Soraypampa'
      ],
      includesEn: [
        'Cusco-Mollepata transportation',
        'Breakfast in Mollepata',
        'Lunch',
        'Dinner',
        'Specialized guide',
        'Soraypampa camp'
      ]
    },
    {
      day: 2,
      title: 'Soraypampa - Abra Salkantay - Wayracmachay',
      titleEn: 'Soraypampa - Salkantay Pass - Wayracmachay',
      description: 'Desayuno (05:00). Inicio del ascenso al Abra Salkantay (4,650 msnm). Aproximación al imponente nevado. Descenso gradual a Wayracmachay (3,900 msnm). Almuerzo. Continuación a Huayracpampa (3,800 msnm). Campamento. Cena.',
      descriptionEn: 'Breakfast (05:00). Start of ascent to Salkantay Pass (4,650 masl). Approach to the imposing snow peak. Gradual descent to Wayracmachay (3,900 masl). Lunch. Continue to Huayracpampa (3,800 masl). Camp. Dinner.',
      schedule: '05:00 - 16:00',
      includes: [
        'Desayuno',
        'Almuerzo',
        'Cena',
        'Guía especializado',
        'Campamento Huayracpampa'
      ],
      includesEn: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Specialized guide',
        'Huayracpampa camp'
      ]
    },
    {
      day: 3,
      title: 'Wayracmachay - Chaullay - Playa Sahuayaco',
      titleEn: 'Wayracmachay - Chaullay - Playa Sahuayaco',
      description: 'Desayuno. Descenso gradual a Chaullay (2,900 msnm). Cambio radical de paisaje: entrada a ceja de selva. Vegetación exuberante. Almuerzo. Caminata a Playa Sahuayaco (2,200 msnm). Opcional: visita a termas de Cocalmayo (entrada no incluida). Campamento. Cena.',
      descriptionEn: 'Breakfast. Gradual descent to Chaullay (2,900 masl). Radical landscape change: entrance to high jungle. Exuberant vegetation. Lunch. Hike to Playa Sahuayaco (2,200 masl). Optional: visit to Cocalmayo hot springs (entrance not included). Camp. Dinner.',
      schedule: '06:00 - 17:00',
      includes: [
        'Desayuno',
        'Almuerzo',
        'Cena',
        'Guía especializado',
        'Campamento Sahuayaco'
      ],
      includesEn: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'Specialized guide',
        'Sahuayaco camp'
      ]
    },
    {
      day: 4,
      title: 'Playa Sahuayaco - Santa Teresa - Hidroeléctrica - Aguas Calientes',
      titleEn: 'Playa Sahuayaco - Santa Teresa - Hydroelectric - Aguas Calientes',
      description: 'Desayuno. Transporte a Santa Teresa (1,550 msnm). Visita a finca de café orgánico. Explicación del proceso. Degustación. Almuerzo. Transporte a Hidroeléctrica. Caminata de 3 horas (10km) paralela a las vías del tren, bordeando el río Vilcanota. Llegada a Aguas Calientes. Check-in hostal. Cena libre.',
      descriptionEn: 'Breakfast. Transportation to Santa Teresa (1,550 masl). Visit to organic coffee farm. Explanation of the process. Tasting. Lunch. Transportation to Hydroelectric. 3-hour hike (10km) parallel to train tracks, bordering the Vilcanota river. Arrival in Aguas Calientes. Hostel check-in. Free dinner.',
      schedule: '07:00 - 18:00',
      includes: [
        'Desayuno',
        'Almuerzo',
        'Transporte Santa Teresa-Hidroeléctrica',
        'Guía especializado',
        'Noche en hostal Aguas Calientes'
      ],
      includesEn: [
        'Breakfast',
        'Lunch',
        'Santa Teresa-Hydroelectric transportation',
        'Specialized guide',
        'Night in Aguas Calientes hostel'
      ]
    },
    {
      day: 5,
      title: 'Machu Picchu - Retorno a Cusco',
      titleEn: 'Machu Picchu - Return to Cusco',
      description: 'Desayuno (04:30). Ascenso en bus a Machu Picchu. Amanecer en la ciudadela. Visita guiada de 2.5 horas por los sectores principales. Tiempo libre para explorar o subir a Huayna Picchu/Montaña (según disponibilidad). Retorno en bus a Aguas Calientes. Almuerzo libre. Tren de retorno a Ollantaytambo y bus a Cusco.',
      descriptionEn: 'Breakfast (04:30). Bus ascent to Machu Picchu. Sunrise at the citadel. 2.5-hour guided tour of main sectors. Free time to explore or climb Huayna Picchu/Mountain (subject to availability). Return bus to Aguas Calientes. Free lunch. Return train to Ollantaytambo and bus to Cusco.',
      schedule: '04:30 - 21:00',
      includes: [
        'Desayuno',
        'Buses Consettur',
        'Ticket Machu Picchu',
        'Guía profesional',
        'Ticket tren retorno',
        'Transporte Ollantaytambo-Cusco'
      ],
      includesEn: [
        'Breakfast',
        'Consettur buses',
        'Machu Picchu ticket',
        'Professional guide',
        'Return train ticket',
        'Ollantaytambo-Cusco transportation'
      ]
    }
  ]
},// CITY TOUR CUSCO - Medio Día
{
  id: 'city-tour-cusco',
  title: 'City Tour Cusco',
  titleEn: 'Cusco City Tour',
  image: '/cityTourCusco.png',
  duration: 0.5,
  difficulty: 'easy',
  price: 89,
  description: 'Descubre la riqueza histórica y arquitectónica del Cusco Imperial. Recorre la Plaza de Armas, visita la majestuosa Catedral y el impresionante Templo del Sol (Qoricancha). Explora los 4 sitios arqueológicos cercanos: Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay. Ideal para tu primer día en Cusco.',
  descriptionEn: 'Discover the historical and architectural richness of Imperial Cusco. Tour the Main Square, visit the majestic Cathedral and the impressive Temple of the Sun (Qoricancha). Explore the 4 nearby archaeological sites: Sacsayhuamán, Q\'enqo, Puka Pukara, and Tambomachay. Ideal for your first day in Cusco.',
  highlights: [
    'Visita a la Catedral del Cusco',
    'Ingreso a Qoricancha (Templo del Sol)',
    'Recorrido por Sacsayhuamán y sus enormes muros',
    'Exploración de Q\'enqo, el anfiteatro ceremonial',
    'Fotografías en Puka Pukara, fortaleza roja',
    'Visita a Tambomachay, templo del agua'
  ],
  highlightsEn: [
    'Visit to Cusco Cathedral',
    'Entrance to Qoricancha (Temple of the Sun)',
    'Tour of Sacsayhuamán and its enormous walls',
    'Exploration of Q\'enqo, the ceremonial amphitheater',
    'Photos at Puka Pukara, red fortress',
    'Visit to Tambomachay, water temple'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Classic',
  inclusions: [
    'Recojo del hotel (según ubicación)',
    'Transporte turístico',
    'Guía profesional bilingüe',
    'Ticket de ingreso a Catedral del Cusco',
    'Ticket de ingreso a Qoricancha',
    'Boleto Turístico Parcial (BTP) para 4 sitios arqueológicos',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Hotel pickup (subject to location)',
    'Tourist transportation',
    'Professional bilingual guide',
    'Cusco Cathedral entrance ticket',
    'Qoricancha entrance ticket',
    'Partial Tourist Ticket (BTP) for 4 archaeological sites',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'City Tour Cusco Imperial',
      titleEn: 'Imperial Cusco City Tour',
      description: 'Recojo en hotel (12:45 PM). Inicio en la Plaza de Armas. Visita guiada a la Catedral del Cusco, joya del arte colonial. Continuación a Qoricancha, el Templo del Sol inca, sobre el cual se construyó el Convento de Santo Domingo. Salida a las afueras de la ciudad. Visita a Sacsayhuamán, fortaleza ceremonial con muros ciclópeos. Continuación a Q\'enqo, centro ceremonial con galerías subterráneas. Parada fotográfica en Puka Pukara, fortaleza roja. Final en Tambomachay, templo dedicado al agua y culto al dios Sol. Retorno a Cusco (17:30).',
      descriptionEn: 'Hotel pickup (12:45 PM). Start at Main Square. Guided visit to Cusco Cathedral, jewel of colonial art. Continue to Qoricancha, the Inca Temple of the Sun, upon which the Santo Domingo Convent was built. Departure to the outskirts of the city. Visit to Sacsayhuamán, ceremonial fortress with cyclopean walls. Continue to Q\'enqo, ceremonial center with underground galleries. Photo stop at Puka Pukara, red fortress. End at Tambomachay, temple dedicated to water and worship of the Sun God. Return to Cusco (5:30 PM).',
      schedule: '12:45 - 17:30',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Guía profesional',
        'Ticket Catedral',
        'Ticket Qoricancha',
        'Boleto Turístico BTP'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Professional guide',
        'Cathedral ticket',
        'Qoricancha ticket',
        'BTP Tourist Ticket'
      ]
    }
  ]
},

// SACRED VALLEY TOUR - Día Completo
{
  id: 'sacred-valley-tour',
  title: 'Sacred Valley Tour',
  titleEn: 'Sacred Valley Tour',
  image: '/sacredValleyTour.png',
  duration: 1,
  difficulty: 'easy',
  price: 129,
  description: 'Sumérgete en el corazón del Valle Sagrado de los Incas. Visita el colorido mercado de Pisac, explora sus impresionantes ruinas en la montaña y maravíllate con la fortaleza de Ollantaytambo. Conoce la tierra del maíz gigante y los pueblos con tradición viva.',
  descriptionEn: 'Immerse yourself in the heart of the Sacred Valley of the Incas. Visit the colorful Pisac market, explore its impressive mountain ruins, and marvel at the Ollantaytambo fortress. Discover the land of giant corn and towns with living traditions.',
  highlights: [
    'Mirador panorámico del Valle Sagrado',
    'Ruinas arqueológicas de Pisac',
    'Mercado artesanal de Pisac',
    'Almuerzo buffet con comida típica',
    'Fortaleza de Ollantaytambo',
    'Conexión con tren a Machu Picchu (opcional)'
  ],
  highlightsEn: [
    'Panoramic viewpoint of the Sacred Valley',
    'Pisac archaeological ruins',
    'Pisac artisan market',
    'Buffet lunch with typical food',
    'Ollantaytambo fortress',
    'Connection to Machu Picchu train (optional)'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Classic',
  inclusions: [
    'Recojo del hotel (08:00 - 08:30)',
    'Transporte turístico',
    'Guía profesional bilingüe',
    'Boleto Turístico para Valle Sagrado',
    'Almuerzo buffet en Urubamba',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Hotel pickup (08:00 - 08:30)',
    'Tourist transportation',
    'Professional bilingual guide',
    'Sacred Valley Tourist Ticket',
    'Buffet lunch in Urubamba',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Pisac - Urubamba - Ollantaytambo',
      titleEn: 'Cusco - Pisac - Urubamba - Ollantaytambo',
      description: 'Recojo en hotel (08:00). Viaje panorámico al Valle Sagrado. Primera parada: mirador de Taray con vista espectacular del valle. Visita a las ruinas de Pisac, impresionante complejo arqueológico en la montaña con terrazas, templos y acueductos. Descenso al pueblo de Pisac. Tiempo libre en el mercado artesanal (1 hora). Traslado a Urubamba. Almuerzo buffet con variedad de comida peruana. Continuación a Ollantaytambo, único pueblo inca vivo. Visita guiada a la fortaleza-templo. Opcional: tomar tren a Machu Picchu desde Ollantaytambo. Retorno a Cusco (18:30).',
      descriptionEn: 'Hotel pickup (08:00). Panoramic journey to the Sacred Valley. First stop: Taray viewpoint with spectacular valley views. Visit to Pisac ruins, impressive mountain archaeological complex with terraces, temples, and aqueducts. Descent to Pisac town. Free time at the artisan market (1 hour). Transfer to Urubamba. Buffet lunch with variety of Peruvian food. Continue to Ollantaytambo, the only living Inca town. Guided visit to the fortress-temple. Optional: take train to Machu Picchu from Ollantaytambo. Return to Cusco (6:30 PM).',
      schedule: '08:00 - 18:30',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Guía profesional',
        'Ticket sitios arqueológicos',
        'Almuerzo buffet'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Professional guide',
        'Archaeological sites ticket',
        'Buffet lunch'
      ]
    }
  ]
},

// RAINBOW MOUNTAIN - Día Completo
{
  id: 'rainbow-mountain',
  title: 'Rainbow Mountain',
  titleEn: 'Rainbow Mountain',
  image: '/rainbowMountain.png',
  duration: 1,
  difficulty: 'moderate',
  price: 149,
  description: 'Aventura a 5,200 metros sobre el nivel del mar. Descubre la Montaña de 7 Colores (Vinicunca), formación geológica única con estratos minerales en tonos rojos, verdes, amarillos y turquesas. Una experiencia desafiante y gratificante en los Andes peruanos.',
  descriptionEn: 'Adventure at 5,200 meters above sea level. Discover the 7-Color Mountain (Vinicunca), a unique geological formation with mineral strata in red, green, yellow, and turquoise tones. A challenging and rewarding experience in the Peruvian Andes.',
  highlights: [
    'Montaña arcoíris de Vinicunca',
    'Paisaje andino con llamas y alpacas',
    'Vista de nevados circundantes',
    'Fotografías únicas en el mundo',
    'Experiencia de alta montaña',
    'Cultura viva de comunidades altoandinas'
  ],
  highlightsEn: [
    'Rainbow Mountain of Vinicunca',
    'Andean landscape with llamas and alpacas',
    'View of surrounding snow-capped mountains',
    'Unique world-class photographs',
    'High mountain experience',
    'Living culture of high Andean communities'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Classic',
  inclusions: [
    'Recojo del hotel (04:30 - 05:00)',
    'Transporte turístico',
    'Desayuno andino en Cusipata',
    'Guía profesional bilingüe',
    'Almuerzo buffet',
    'Bastones de trekking',
    'Botiquín de primeros auxilios y oxígeno',
    'Ticket de ingreso a Montaña de Colores'
  ],
  inclusionsEn: [
    'Hotel pickup (04:30 - 05:00)',
    'Tourist transportation',
    'Andean breakfast in Cusipata',
    'Professional bilingual guide',
    'Buffet lunch',
    'Trekking poles',
    'First aid kit and oxygen',
    'Rainbow Mountain entrance ticket'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Cusco - Cusipata - Vinicunca - Retorno',
      titleEn: 'Cusco - Cusipata - Vinicunca - Return',
      description: 'Salida muy temprano (04:30) desde Cusco. Viaje de 2 horas a Cusipata. Desayuno andino. Continuación a Phulawasipata (4,800 msnm), inicio del trekking. Caminata de 1h45min (aprox 3km) con ascenso gradual hasta la Montaña de 7 Colores (5,200 msnm). Explicación geológica y cultural del guía. Tiempo para fotografías y contemplación. Opción de caballo de subida/bajada (adicional). Retorno caminando a Phulawasipata. Transporte a Cusipata. Almuerzo buffet. Regreso a Cusco (17:00).',
      descriptionEn: 'Very early departure (04:30) from Cusco. 2-hour journey to Cusipata. Andean breakfast. Continue to Phulawasipata (4,800 masl), trek start. 1h45min hike (approx 3km) with gradual ascent to Rainbow Mountain (5,200 masl). Geological and cultural explanation from guide. Time for photos and contemplation. Optional horse up/down (additional cost). Walk back to Phulawasipata. Transportation to Cusipata. Buffet lunch. Return to Cusco (5:00 PM).',
      schedule: '04:30 - 17:00',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Desayuno andino',
        'Guía profesional',
        'Ticket Montaña de Colores',
        'Almuerzo buffet',
        'Bastones de trekking'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Andean breakfast',
        'Professional guide',
        'Rainbow Mountain ticket',
        'Buffet lunch',
        'Trekking poles'
      ]
    }
  ]
},

// COMBO: CITY TOUR + SACRED VALLEY + RAINBOW MOUNTAIN
{
  id: 'cusco-classic-combo-3d',
  title: 'Cusco Classic Combo 3D',
  titleEn: 'Cusco Classic Combo 3D',
  image: '/cuscoClassicCombo.png',
  duration: 3,
  difficulty: 'moderate',
  price: 349,
  description: 'El paquete completo de los tours clásicos de Cusco. City Tour por la ciudad imperial, Valle Sagrado de los Incas y la increíble Montaña de 7 Colores. Ideal para aclimatación y conocer lo mejor de la región en 3 días.',
  descriptionEn: 'The complete package of Cusco classic tours. City Tour through the imperial city, Sacred Valley of the Incas, and the incredible Rainbow Mountain. Ideal for acclimatization and discovering the best of the region in 3 days.',
  highlights: [
    'City Tour Cusco: Catedral, Qoricancha y 4 ruinas',
    'Valle Sagrado: Pisac, mercado, almuerzo buffet y Ollantaytambo',
    'Montaña de 7 Colores: experiencia a 5,200 msnm',
    '3 días consecutivos de tours',
    'Todos los tickets incluidos',
    'Ahorro especial en combo'
  ],
  highlightsEn: [
    'Cusco City Tour: Cathedral, Qoricancha and 4 ruins',
    'Sacred Valley: Pisac, market, buffet lunch and Ollantaytambo',
    'Rainbow Mountain: experience at 5,200 masl',
    '3 consecutive days of tours',
    'All tickets included',
    'Special combo savings'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Classic',
  inclusions: [
    'City Tour Cusco (medio día)',
    'Valle Sagrado Tour (día completo)',
    'Rainbow Mountain Tour (día completo)',
    'Todos los tickets de ingreso',
    'Transporte turístico',
    'Guía profesional bilingüe',
    'Almuerzo buffet en Valle Sagrado',
    'Desayuno andino y almuerzo buffet en Rainbow Mountain',
    'Bastones de trekking',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Cusco City Tour (half day)',
    'Sacred Valley Tour (full day)',
    'Rainbow Mountain Tour (full day)',
    'All entrance tickets',
    'Tourist transportation',
    'Professional bilingual guide',
    'Buffet lunch in Sacred Valley',
    'Andean breakfast and buffet lunch at Rainbow Mountain',
    'Trekking poles',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'City Tour Cusco Imperial',
      titleEn: 'Imperial Cusco City Tour',
      description: 'Recojo en hotel (12:45 PM). Visita a Catedral del Cusco y Qoricancha (Templo del Sol). Recorrido por Sacsayhuamán, Q\'enqo, Puka Pukara y Tambomachay. Retorno a Cusco (17:30).',
      descriptionEn: 'Hotel pickup (12:45 PM). Visit to Cusco Cathedral and Qoricancha (Temple of the Sun). Tour of Sacsayhuamán, Q\'enqo, Puka Pukara and Tambomachay. Return to Cusco (5:30 PM).',
      schedule: '12:45 - 17:30',
      includes: [
        'Transporte turístico',
        'Guía profesional',
        'Ticket Catedral',
        'Ticket Qoricancha',
        'Boleto Turístico BTP'
      ],
      includesEn: [
        'Tourist transportation',
        'Professional guide',
        'Cathedral ticket',
        'Qoricancha ticket',
        'BTP Tourist Ticket'
      ]
    },
    {
      day: 2,
      title: 'Valle Sagrado: Pisac - Urubamba - Ollantaytambo',
      titleEn: 'Sacred Valley: Pisac - Urubamba - Ollantaytambo',
      description: 'Recojo en hotel (08:00). Ruinas y mercado de Pisac. Almuerzo buffet en Urubamba. Visita a fortaleza de Ollantaytambo. Retorno a Cusco (18:30).',
      descriptionEn: 'Hotel pickup (08:00). Pisac ruins and market. Buffet lunch in Urubamba. Visit to Ollantaytambo fortress. Return to Cusco (6:30 PM).',
      schedule: '08:00 - 18:30',
      includes: [
        'Transporte turístico',
        'Guía profesional',
        'Ticket sitios arqueológicos',
        'Almuerzo buffet'
      ],
      includesEn: [
        'Tourist transportation',
        'Professional guide',
        'Archaeological sites ticket',
        'Buffet lunch'
      ]
    },
    {
      day: 3,
      title: 'Montaña de 7 Colores - Vinicunca',
      titleEn: 'Rainbow Mountain - Vinicunca',
      description: 'Salida (04:30). Desayuno andino en Cusipata. Trekking de 1h45min a Montaña de Colores (5,200 msnm). Tiempo para fotos. Retorno y almuerzo buffet. Regreso a Cusco (17:00).',
      descriptionEn: 'Departure (04:30). Andean breakfast in Cusipata. 1h45min trek to Rainbow Mountain (5,200 masl). Photo time. Return and buffet lunch. Back to Cusco (5:00 PM).',
      schedule: '04:30 - 17:00',
      includes: [
        'Transporte turístico',
        'Desayuno andino',
        'Guía profesional',
        'Ticket Montaña de Colores',
        'Almuerzo buffet',
        'Bastones de trekking'
      ],
      includesEn: [
        'Tourist transportation',
        'Andean breakfast',
        'Professional guide',
        'Rainbow Mountain ticket',
        'Buffet lunch',
        'Trekking poles'
      ]
    }
  ]
},// CITY TOUR LIMA - Medio Día
{
  id: 'city-tour-lima',
  title: 'City Tour Lima',
  titleEn: 'Lima City Tour',
  image: '/cityTourLima.png',
  duration: 0.5,
  difficulty: 'easy',
  price: 79,
  description: 'Descubre la Ciudad de los Reyes, capital del Perú y joya del virreinato. Recorre el centro histórico, Patrimonio de la Humanidad, visitando la Plaza Mayor, la Catedral y el Convento de San Francisco con sus famosas catacumbas. Ideal para escalas o primer día en Lima.',
  descriptionEn: 'Discover the City of Kings, capital of Peru and jewel of the viceroyalty. Tour the historic center, World Heritage Site, visiting the Main Square, the Cathedral, and the San Francisco Convent with its famous catacombs. Ideal for layovers or your first day in Lima.',
  highlights: [
    'Plaza Mayor de Lima (Plaza de Armas)',
    'Catedral de Lima y tumba de Francisco Pizarro',
    'Convento de San Francisco y catacumbas',
    'Palacio de Gobierno (cambio de guardia)',
    'Palacio Municipal',
    'Balcones virreinales'
  ],
  highlightsEn: [
    'Lima Main Square (Plaza de Armas)',
    'Lima Cathedral and Francisco Pizarro\'s tomb',
    'San Francisco Convent and catacombs',
    'Government Palace (guard change)',
    'Municipal Palace',
    'Viceroyalty balconies'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Classic',
  inclusions: [
    'Recojo del hotel (Miraflores, San Isidro, Barranco)',
    'Transporte turístico',
    'Guía profesional bilingüe',
    'Ticket de ingreso al Convento de San Francisco',
    'Ticket de ingreso a Catacumbas',
    'Asistencia personalizada',
    'Botella de agua'
  ],
  inclusionsEn: [
    'Hotel pickup (Miraflores, San Isidro, Barranco)',
    'Tourist transportation',
    'Professional bilingual guide',
    'San Francisco Convent entrance ticket',
    'Catacombs entrance ticket',
    'Personalized assistance',
    'Water bottle'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Lima Histórica: Centro Mundial y Catacumbas',
      titleEn: 'Historic Lima: World Heritage Center and Catacombs',
      description: 'Recojo en hotel (14:00). Inicio del tour por el Centro Histórico. Visita a la Plaza Mayor, corazón de la ciudad, rodeada por el Palacio de Gobierno, Catedral y Palacio Municipal. Ingreso a la Catedral de Lima para conocer la tumba de Francisco Pizarro y hermosos retablos. Caminata por calles con balcones virreinales. Visita guiada al Convento de San Francisco, joya de la arquitectura colonial, y recorrido por las misteriosas catacumbas subterráneas. Retorno a Miraflores (17:30).',
      descriptionEn: 'Hotel pickup (2:00 PM). Start of the Historic Center tour. Visit to Main Square, heart of the city, surrounded by Government Palace, Cathedral, and Municipal Palace. Entry to Lima Cathedral to see Francisco Pizarro\'s tomb and beautiful altarpieces. Walk through streets with viceroyalty balconies. Guided visit to San Francisco Convent, jewel of colonial architecture, and tour through the mysterious underground catacombs. Return to Miraflores (5:30 PM).',
      schedule: '14:00 - 17:30',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Guía profesional',
        'Ticket San Francisco',
        'Ticket Catacumbas'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Professional guide',
        'San Francisco ticket',
        'Catacombs ticket'
      ]
    }
  ]
},

// LIMA MODERNA + PARACAS Y BALLESTAS - 2D/1N
{
  id: 'lima-paracas-ballestas-2d1n',
  title: 'Lima - Paracas & Ballestas 2D/1N',
  titleEn: 'Lima - Paracas & Ballestas 2D/1N',
  image: '/paracasBallestas.png',
  duration: 2,
  difficulty: 'easy',
  price: 299,
  description: 'Escápate de Lima hacia la costa sur peruana. Descubre la Reserva Nacional de Paracas, el "Desierto Costero del Perú", y navega hacia las Islas Ballestas, el "Galápagos peruano", hogar de lobos marinos, pingüinos de Humboldt y aves guaneras. Experiencia única de naturaleza y desierto junto al mar.',
  descriptionEn: 'Escape from Lima to the Peruvian south coast. Discover the Paracas National Reserve, the "Coastal Desert of Peru", and sail to the Ballestas Islands, the "Peruvian Galapagos", home to sea lions, Humboldt penguins, and guano birds. Unique nature and desert-by-the-sea experience.',
  highlights: [
    'Navegación a Islas Ballestas',
    'Lobos marinos y pingüinos de Humboldt',
    'Geoglifo del Candelabro',
    'Reserva Nacional de Paracas',
    'Playa Roja y acantilados',
    'Gastronomía marina en Paracas'
  ],
  highlightsEn: [
    'Navigation to Ballestas Islands',
    'Sea lions and Humboldt penguins',
    'Candelabra geoglyph',
    'Paracas National Reserve',
    'Red Beach and cliffs',
    'Seafood gastronomy in Paracas'
  ],
  hotelCategory: '3★ en Paracas',
  passengerType: 'Classic',
  inclusions: [
    'Transporte Lima - Paracas - Lima',
    '1 noche de hotel en Paracas (3★)',
    'Desayuno en hotel',
    'Tour de medio día a Islas Ballestas',
    'Ticket de ingreso a Reserva Nacional de Paracas',
    'Guía profesional en Islas Ballestas',
    'Transporte en el tour de Paracas',
    'Asistencia personalizada',
    'Botella de agua'
  ],
  inclusionsEn: [
    'Lima - Paracas - Lima transportation',
    '1 night hotel in Paracas (3★)',
    'Breakfast at hotel',
    'Half-day tour to Ballestas Islands',
    'Paracas National Reserve entrance ticket',
    'Professional guide at Ballestas Islands',
    'Transportation on Paracas tour',
    'Personalized assistance',
    'Water bottle'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Lima - Paracas - Islas Ballestas',
      titleEn: 'Lima - Paracas - Ballestas Islands',
      description: 'Salida temprano desde Lima (06:00). Viaje de 3.5 horas por la Panamericana Sur hacia Paracas. Llegada y embarque en lancha rápida para tour a Islas Ballestas (2 horas). Avistamiento del geoglifo El Candelabro en la península. Navegación alrededor de las islas observando lobos marinos, pingüinos de Humboldt, aves guaneras (piqueros, pelícanos, guanayes). Retorno a Paracas. Almuerzo libre (recomendación: restaurante de mariscos). Check-in en hotel. Tarde libre para explorar el malecón o tour opcional a Reserva Nacional (atardecer).',
      descriptionEn: 'Early departure from Lima (06:00). 3.5-hour journey along the Panamericana Sur to Paracas. Arrival and boarding on speedboat for Ballestas Islands tour (2 hours). Sightseeing of the Candelabra geoglyph on the peninsula. Navigation around the islands observing sea lions, Humboldt penguins, guano birds (boobies, pelicans, guanays). Return to Paracas. Free lunch (seafood restaurant recommendation). Hotel check-in. Free afternoon to explore the boardwalk or optional tour to National Reserve (sunset).',
      schedule: '06:00 - 15:00',
      includes: [
        'Transporte Lima-Paracas',
        'Tour Islas Ballestas',
        'Guía en lancha',
        'Noche en Paracas'
      ],
      includesEn: [
        'Lima-Paracas transportation',
        'Ballestas Islands tour',
        'Boat guide',
        'Night in Paracas'
      ]
    },
    {
      day: 2,
      title: 'Reserva Nacional de Paracas - Retorno a Lima',
      titleEn: 'Paracas National Reserve - Return to Lima',
      description: 'Desayuno en hotel. Tour por la Reserva Nacional de Paracas (3 horas). Visita a Playa Roja, de arena rojiza por oxidación de minerales. Mirador de los Acantilados, impresionante vista del océano Pacífico. Yumaque y Playa Supay. Interpretación del ecosistema desértico-costero. Retorno a Paracas. Almuerzo libre. Salida a Lima (15:00). Llegada a Miraflores (19:00).',
      descriptionEn: 'Breakfast at hotel. Tour of Paracas National Reserve (3 hours). Visit to Red Beach, with reddish sand from mineral oxidation. Cliffs Viewpoint, impressive view of the Pacific Ocean. Yumaque and Supay Beach. Interpretation of the coastal-desert ecosystem. Return to Paracas. Free lunch. Departure to Lima (3:00 PM). Arrival in Miraflores (7:00 PM).',
      schedule: '09:00 - 19:00',
      includes: [
        'Desayuno',
        'Tour Reserva Nacional',
        'Ticket Reserva Nacional',
        'Transporte Paracas-Lima'
      ],
      includesEn: [
        'Breakfast',
        'National Reserve tour',
        'National Reserve ticket',
        'Paracas-Lima transportation'
      ]
    }
  ]
},

// LIMA COMPLETA + PARACAS, BALLESTAS E HUACACHINA 3D/2N
{
  id: 'lima-paracas-huacachina-3d2n',
  title: 'Lima - Paracas & Huacachina 3D/2N',
  titleEn: 'Lima - Paracas & Huacachina 3D/2N',
  image: '/paracasHuacachina.png',
  duration: 3,
  difficulty: 'moderate',
  price: 449,
  description: 'El combo perfecto de la costa peruana: historia colonial en Lima, vida marina en las Islas Ballestas y aventura en el desierto de Huacachina. Navega con lobos marinos, deslízate en buggy por dunas y practica sandboarding en el oasis de América.',
  descriptionEn: 'The perfect combo of the Peruvian coast: colonial history in Lima, marine life at the Ballestas Islands, and adventure in the Huacachina desert. Sail with sea lions, ride buggies through sand dunes, and practice sandboarding in the oasis of America.',
  highlights: [
    'City Tour completo en Lima',
    'Navegación a Islas Ballestas',
    'Reserva Nacional de Paracas',
    'Oasis de Huacachina',
    'Tubulares (buggies) en dunas',
    'Sandboarding en desierto'
  ],
  highlightsEn: [
    'Complete Lima City Tour',
    'Navigation to Ballestas Islands',
    'Paracas National Reserve',
    'Huacachina Oasis',
    'Buggy rides in sand dunes',
    'Sandboarding in the desert'
  ],
  hotelCategory: '3★ en Paracas + 3★ en Huacachina/Ica',
  passengerType: 'Premium',
  inclusions: [
    'Transporte Lima - Paracas - Ica - Lima',
    'City Tour Lima (medio día)',
    '1 noche de hotel en Paracas (3★)',
    '1 noche de hotel en Huacachina/Ica (3★)',
    'Desayunos en hoteles',
    'Tour a Islas Ballestas',
    'Ticket Reserva Nacional de Paracas',
    'Tour de Tubulares y Sandboarding en Huacachina',
    'Ticket de ingreso a Huacachina',
    'Guía profesional',
    'Asistencia personalizada'
  ],
  inclusionsEn: [
    'Lima - Paracas - Ica - Lima transportation',
    'Lima City Tour (half day)',
    '1 night hotel in Paracas (3★)',
    '1 night hotel in Huacachina/Ica (3★)',
    'Breakfasts at hotels',
    'Ballestas Islands tour',
    'Paracas National Reserve ticket',
    'Buggy and Sandboarding tour in Huacachina',
    'Huacachina entrance ticket',
    'Professional guide',
    'Personalized assistance'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Lima Histórica - City Tour',
      titleEn: 'Historic Lima - City Tour',
      description: 'Recojo en hotel (14:00). City Tour Lima: Plaza Mayor, Catedral, Convento de San Francisco y Catacumbas. Balcones virreinales. Retorno a hotel (17:30). Noche libre para disfrutar gastronomía peruana.',
      descriptionEn: 'Hotel pickup (2:00 PM). Lima City Tour: Main Square, Cathedral, San Francisco Convent and Catacombs. Viceroyalty balconies. Return to hotel (5:30 PM). Free night to enjoy Peruvian gastronomy.',
      schedule: '14:00 - 17:30',
      includes: [
        'Recojo del hotel',
        'Transporte turístico',
        'Guía profesional',
        'Ticket San Francisco y Catacumbas',
        'Noche en Lima'
      ],
      includesEn: [
        'Hotel pickup',
        'Tourist transportation',
        'Professional guide',
        'San Francisco and Catacombs ticket',
        'Night in Lima'
      ]
    },
    {
      day: 2,
      title: 'Lima - Paracas - Islas Ballestas',
      titleEn: 'Lima - Paracas - Ballestas Islands',
      description: 'Salida temprano (06:00) hacia Paracas. Tour en lancha a Islas Ballestas: Candelabro, lobos marinos, pingüinos y aves. Almuerzo libre en Paracas. Tour por Reserva Nacional: Playa Roja, Acantilados, Yumaque. Traslado a Ica/Huacachina. Check-in en hotel.',
      descriptionEn: 'Early departure (06:00) to Paracas. Speedboat tour to Ballestas Islands: Candelabra, sea lions, penguins, and birds. Free lunch in Paracas. National Reserve tour: Red Beach, Cliffs, Yumaque. Transfer to Ica/Huacachina. Hotel check-in.',
      schedule: '06:00 - 19:00',
      includes: [
        'Transporte Lima-Paracas',
        'Tour Islas Ballestas',
        'Tour Reserva Nacional',
        'Ticket Reserva',
        'Transporte Paracas-Ica',
        'Noche en Huacachina'
      ],
      includesEn: [
        'Lima-Paracas transportation',
        'Ballestas Islands tour',
        'National Reserve tour',
        'Reserve ticket',
        'Paracas-Ica transportation',
        'Night in Huacachina'
      ]
    },
    {
      day: 3,
      title: 'Huacachina: Oasis, Dunas y Sandboarding - Retorno Lima',
      titleEn: 'Huacachina: Oasis, Dunes and Sandboarding - Return Lima',
      description: 'Desayuno en hotel. Mañana libre para disfrutar el oasis de Huacachina: paseo en bote, fotos, alquiler de tablas. Almuerzo libre. Tour de aventura (16:00): tubulares (buggies) por las dunas del desierto y sandboarding. Experiencia única de adrenalina. Retorno a Lima (18:00). Llegada a Miraflores (21:00).',
      descriptionEn: 'Breakfast at hotel. Free morning to enjoy Huacachina oasis: boat ride, photos, board rental. Free lunch. Adventure tour (4:00 PM): buggy rides through the desert dunes and sandboarding. Unique adrenaline experience. Return to Lima (6:00 PM). Arrival in Miraflores (9:00 PM).',
      schedule: '09:00 - 21:00',
      includes: [
        'Desayuno',
        'Tour de Tubulares',
        'Sandboarding',
        'Transporte Ica-Lima'
      ],
      includesEn: [
        'Breakfast',
        'Buggy tour',
        'Sandboarding',
        'Ica-Lima transportation'
      ]
    }
  ]
},

// LIMA EXPRESS - Para escalas o conexiones
{
  id: 'lima-express',
  title: 'Lima Express',
  titleEn: 'Lima Express',
  image: '/limaExpress.png',
  duration: 0.5,
  difficulty: 'easy',
  price: 59,
  description: 'Perfecto para viajeros con escalas en Lima o poco tiempo. Tour exprés por el centro histórico con visita a la Catedral y el Convento de San Francisco. Incluye traslado aeropuerto-hotel-aeropuerto.',
  descriptionEn: 'Perfect for travelers with layovers in Lima or limited time. Express tour of the historic center with visit to the Cathedral and San Francisco Convent. Includes airport-hotel-airport transfer.',
  highlights: [
    'Traslado aeropuerto incluido',
    'Visita rápida al Centro Histórico',
    'Catedral de Lima',
    'Convento de San Francisco y Catacumbas',
    'Fotografías en Plaza Mayor',
    'Ideal para escalas de 6-8 horas'
  ],
  highlightsEn: [
    'Airport transfer included',
    'Quick visit to Historic Center',
    'Lima Cathedral',
    'San Francisco Convent and Catacombs',
    'Photos at Main Square',
    'Ideal for 6-8 hour layovers'
  ],
  hotelCategory: 'Sin alojamiento',
  passengerType: 'Express',
  inclusions: [
    'Recojo en aeropuerto',
    'Transporte turístico',
    'Guía profesional',
    'Ticket Convento San Francisco',
    'Ticket Catacumbas',
    'Traslado aeropuerto',
    'Guardamaleta en aeropuerto'
  ],
  inclusionsEn: [
    'Airport pickup',
    'Tourist transportation',
    'Professional guide',
    'San Francisco Convent ticket',
    'Catacombs ticket',
    'Airport transfer',
    'Luggage storage at airport'
  ],
  itinerary: [
    {
      day: 1,
      title: 'Lima Express: Aeropuerto - Centro Histórico - Aeropuerto',
      titleEn: 'Lima Express: Airport - Historic Center - Airport',
      description: 'Recojo en Aeropuerto Internacional Jorge Chávez. Traslado directo al Centro Histórico de Lima. Visita rápida a Plaza Mayor, Catedral y Convento de San Francisco con catacumbas. Tiempo para fotografías. Almuerzo rápido opcional. Retorno al aeropuerto 2 horas antes del vuelo.',
      descriptionEn: 'Pickup at Jorge Chávez International Airport. Direct transfer to Lima\'s Historic Center. Quick visit to Main Square, Cathedral, and San Francisco Convent with catacombs. Time for photos. Optional quick lunch. Return to airport 2 hours before flight.',
      schedule: 'Según horario de vuelo',
      includes: [
        'Recojo aeropuerto',
        'Transporte turístico',
        'Guía profesional',
        'Ticket San Francisco',
        'Traslado aeropuerto'
      ],
      includesEn: [
        'Airport pickup',
        'Tourist transportation',
        'Professional guide',
        'San Francisco ticket',
        'Airport transfer'
      ]
    }
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