export interface Tour {
  id: string;
  title: string;
  titleEn: string;
  image: string;
  duration: number;
  difficulty: 'easy' | 'moderate' | 'challenging';
  price: number;
  description: string;
  descriptionEn: string;
  highlights: string[];
  highlightsEn: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  textEn: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  tour: string;
  date: string;
  message: string;
}
