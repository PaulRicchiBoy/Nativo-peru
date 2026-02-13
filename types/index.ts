// types.ts
export type Tour = {
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
  hotelCategory?: string; // Opcional
  passengerType?: string; // Opcional
  itinerary?: Array<{
    day: number;
    title: string;
    titleEn: string;
    description: string;
    descriptionEn: string;
    schedule?: string;
    includes: string[];
    includesEn: string[];
  }>;
  inclusions?: string[];
  inclusionsEn?: string[];
};

export type Testimonial = {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  textEn: string;
  image: string;
};
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  tour: string;
  date: string;
  message: string;
}
