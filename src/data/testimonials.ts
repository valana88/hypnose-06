// Témoignages clients (récupérés du site Canva existant).

export type Testimonial = {
  quote: string;
  author: string;
  context?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Hypnothérapeute avec une posture professionnelle, efficace et empathique.',
    author: 'Nathalie N.',
  },
  {
    quote:
      'Je suis ravie d\'être allée à la rencontre de Guylaine et de sa méthode par hypnose et chronobiologie alimentaire. Aucune frustration pour la bonne vivante que je suis : un peu de patience au départ, et une belle confiance que ça allait fonctionner. J\'ai commencé à perdre au bout de 15 jours, puis le poids est vite descendu sur la balance. Presque 9 kg perdus en 3 mois. Je prends plaisir à choisir les bons aliments et à confectionner mes repas. Aucune frustration ressentie ces derniers mois — je sais aussi me faire plaisir. Merci Guylaine.',
    author: 'Céline M.',
    context: 'Hypnose & chronobiologie alimentaire',
  },
  {
    quote:
      'Personne à l\'écoute du patient. Séances étudiées pour chaque cas. Un vrai travail de pro, impliquée.',
    author: 'Christian Goletto',
  },
  {
    quote:
      'Très bon contact, bonne qualité de relation, méthode efficace. Je vous recommande vivement cet accompagnement.',
    author: 'Sylvie Leon',
  },
  {
    quote:
      'Beaucoup d\'empathie et de compréhension. Excellente thérapeute.',
    author: 'Marie-Claire Michaud',
  },
];
