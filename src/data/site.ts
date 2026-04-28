// Source unique de vérité pour les infos pratiques.
// On les importe partout (Header, Footer, Contact, SEO…) plutôt que de les recopier.

export const site = {
  name: 'Hypnose 06 — Guylaine Demarle',
  shortName: 'Hypnose 06',
  practitioner: {
    fullName: 'Guylaine Demarle',
    title: 'Infirmière diplômée d\'État · Maître praticienne en hypnose ericksonienne',
    formation: 'École Supérieure d\'Hypnose Ericksonienne — Aix-en-Provence',
  },
  contact: {
    phone: '06 80 41 41 72',
    phoneLink: 'tel:+33680414172',
    email: 'Guylaine.demarle@wanadoo.fr',
    emailLink: 'mailto:Guylaine.demarle@wanadoo.fr',
    address: {
      street: '91-93 rue Georges Clémenceau',
      postalCode: '06400',
      city: 'Cannes',
      country: 'France',
    },
  },
  hours: 'Sur rendez-vous, du lundi au samedi',
  sessions: {
    location: 'Au cabinet à Cannes ou à votre domicile (06)',
  },
  social: {
    facebookUrl: 'https://www.facebook.com/Guylaine.demarle',
    facebookHandle: 'Guylaine.demarle',
  },
} as const;

// Liens de navigation principale
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Qui suis-je', href: '/qui-suis-je' },
  { label: 'L\'hypnose', href: '/hypnose' },
  { label: 'Indications', href: '/indications' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;
