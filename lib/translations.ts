export const translations = {
  es: {
    nav: {
      home: "Inicio",
      tours: "Tours",
      about: "Nosotros",
      testimonials: "Testimonios",
      contact: "Contacto",
      bookNow: "Reservar Ahora",
      toursMenu: {
        title: "Explorar Tours",
        machu: "Machu Picchu",
        rainbow: "Montaña de 7 Colores",
        humantay: "Laguna Humantay",
        valley: "Valle Sagrado",
        allTours: "Ver Todos los Tours",
        categories: {
          adventure: "Aventura",
          cultural: "Cultural",
          nature: "Naturaleza"
        }
      },
      aboutMenu: {
        title: "Sobre Nosotros",
        company: "La Empresa",
        team: "Nuestro Equipo",
        values: "Valores",
        sustainability: "Sostenibilidad"
      }
    },
    hero: {
      title: "Descubre la Magia del Perú",
      subtitle: "Vive experiencias auténticas con guías expertos locales. Tours personalizados a Machu Picchu, Montaña de 7 Colores, Laguna Humantay y más.",
      ctaButton: "Explorar Tours",
      stat1: "500+ Clientes",
      stat2: "50+ Tours",
      stat3: "Guías Expertos"
    },
    tours: {
      title: "Nuestros Tours Destacados",
      subtitle: "Experiencias inolvidables diseñadas para todos los niveles",
      duration: "Duración",
      difficulty: "Dificultad",
      from: "Desde",
      perPerson: "por persona",
      viewDetails: "Ver Detalles",
      days: "días",
      day: "día",
      easy: "Fácil",
      moderate: "Moderado",
      challenging: "Desafiante"
    },
    about: {
      title: "¿Por Qué Elegir Amaiatours?",
      subtitle: "Tu aventura peruana comienza aquí",
      reason1Title: "Experiencia Local",
      reason1Desc: "Guías nativos con profundo conocimiento cultural e histórico",
      reason2Title: "Grupos Pequeños",
      reason2Desc: "Experiencias personalizadas con máximo 12 personas",
      reason3Title: "Precios Transparentes",
      reason3Desc: "Sin costos ocultos, todo incluido en el precio",
      reason4Title: "Turismo Sostenible",
      reason4Desc: "Comprometidos con el medio ambiente y comunidades locales",
      yearsExp: "Años de Experiencia",
      toursCompleted: "Tours Realizados",
      happyClients: "Clientes Satisfechos",
      successRate: "Tasa de Satisfacción"
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Experiencias reales de viajeros de todo el mundo"
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para planificar tu aventura perfecta",
      formTitle: "Envíanos un Mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono (WhatsApp)",
      tourInterest: "Tour de Interés",
      selectTour: "Selecciona un tour",
      date: "Fecha Estimada",
      message: "Mensaje",
      send: "Enviar Mensaje",
      infoTitle: "Información de Contacto",
      address: "Cusco, Perú",
      hours: "Lun - Dom: 7:00 AM - 10:00 PM",
      whatsappBtn: "Chatear por WhatsApp"
    },
    footer: {
      description: "Operador turístico especializado en experiencias auténticas en Perú",
      quickLinks: "Enlaces Rápidos",
      followUs: "Síguenos",
      payments: "Aceptamos",
      copyright: "Todos los derechos reservados"
    }
  },
  en: {
    nav: {
      home: "Home",
      tours: "Tours",
      about: "About",
      testimonials: "Testimonials",
      contact: "Contact",
      bookNow: "Book Now",
      toursMenu: {
        title: "Explore Tours",
        machu: "Machu Picchu",
        rainbow: "Rainbow Mountain",
        humantay: "Humantay Lake",
        valley: "Sacred Valley",
        allTours: "View All Tours",
        categories: {
          adventure: "Adventure",
          cultural: "Cultural",
          nature: "Nature"
        }
      },
      aboutMenu: {
        title: "About Us",
        company: "The Company",
        team: "Our Team",
        values: "Values",
        sustainability: "Sustainability"
      }
    },
    hero: {
      title: "Discover the Magic of Peru",
      subtitle: "Experience authentic adventures with expert local guides. Personalized tours to Machu Picchu, Rainbow Mountain, Humantay Lake and more.",
      ctaButton: "Explore Tours",
      stat1: "500+ Clients",
      stat2: "50+ Tours",
      stat3: "Expert Guides"
    },
    tours: {
      title: "Our Featured Tours",
      subtitle: "Unforgettable experiences designed for all levels",
      duration: "Duration",
      difficulty: "Difficulty",
      from: "From",
      perPerson: "per person",
      viewDetails: "View Details",
      days: "days",
      day: "day",
      easy: "Easy",
      moderate: "Moderate",
      challenging: "Challenging"
    },
    about: {
      title: "Why Choose Amaiatours?",
      subtitle: "Your Peruvian adventure starts here",
      reason1Title: "Local Experience",
      reason1Desc: "Native guides with deep cultural and historical knowledge",
      reason2Title: "Small Groups",
      reason2Desc: "Personalized experiences with maximum 12 people",
      reason3Title: "Transparent Pricing",
      reason3Desc: "No hidden costs, everything included in the price",
      reason4Title: "Sustainable Tourism",
      reason4Desc: "Committed to the environment and local communities",
      yearsExp: "Years of Experience",
      toursCompleted: "Tours Completed",
      happyClients: "Happy Clients",
      successRate: "Satisfaction Rate"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Real experiences from travelers around the world"
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to plan your perfect adventure",
      formTitle: "Send Us a Message",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone (WhatsApp)",
      tourInterest: "Tour of Interest",
      selectTour: "Select a tour",
      date: "Estimated Date",
      message: "Message",
      send: "Send Message",
      infoTitle: "Contact Information",
      address: "Cusco, Peru",
      hours: "Mon - Sun: 7:00 AM - 10:00 PM",
      whatsappBtn: "Chat on WhatsApp"
    },
    footer: {
      description: "Tour operator specialized in authentic experiences in Peru",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      payments: "We Accept",
      copyright: "All rights reserved"
    }
  }
};

export type Language = 'es' | 'en';
export type Translations = typeof translations.es;
