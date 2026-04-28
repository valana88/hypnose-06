import type { Metadata } from 'next';

import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';

export const metadata: Metadata = {
  title: 'Indications — Pour qui, pour quoi',
  description:
    'L\'hypnose ericksonienne accompagne efficacement : arrêt du tabac, stress, anxiété, sommeil, phobies, confiance en soi, comportements alimentaires, deuils, douleurs.',
};

const categories = [
  {
    title: 'Addictions & comportements',
    items: [
      'Arrêt du tabac',
      'Comportements alimentaires (compulsions, surpoids)',
      'Dépendances (sucre, écrans, alcool…)',
      'Tics, onychophagie',
    ],
  },
  {
    title: 'Émotions & mental',
    items: [
      'Stress, anxiété généralisée',
      'Burn-out, surmenage',
      'Manque de confiance en soi',
      'Crises d\'angoisse, panique',
      'Deuils, séparations difficiles',
    ],
  },
  {
    title: 'Sommeil & corps',
    items: [
      'Insomnies, troubles du sommeil',
      'Douleurs chroniques',
      'Préparation à un examen, à un accouchement',
      'Préparation mentale sportive',
    ],
  },
  {
    title: 'Peurs & phobies',
    items: [
      'Phobie de l\'avion, des transports',
      'Peur de parler en public',
      'Phobies animales',
      'Claustrophobie, agoraphobie',
    ],
  },
];

export default function IndicationsPage() {
  return (
    <>
      <Section
        tone="cream"
        eyebrow="Indications"
        title="Pour qui, pour quoi ?"
        lead="L'hypnose ericksonienne s'adresse à toute personne — adulte, adolescent, enfant — qui souhaite avancer sur un point précis. Voici les motifs les plus fréquents."
      >
        <div
          style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 style={{ marginBottom: '0.75rem' }}>{cat.title}</h3>
              <ul style={{ listStyle: 'none', lineHeight: 2 }}>
                {cat.items.map((it) => (
                  <li key={it}>— {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand" narrow>
        <p
          style={{
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--muted, #5C6657)',
            marginBottom: '1.5rem',
          }}
        >
          L&apos;hypnose ne se substitue jamais à un traitement médical en
          cours. Elle vient en complément, en accord avec votre médecin
          traitant si nécessaire.
        </p>
        <Button href="/contact" variant="primary">
          Discuter de votre situation
        </Button>
      </Section>
    </>
  );
}
