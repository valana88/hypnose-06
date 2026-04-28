import type { Metadata } from 'next';

import { Button } from '@/components/Button/Button';
import { Section } from '@/components/Section/Section';
import {
  CTAActions,
  DreamCard,
  DreamGrid,
  DreamStep,
  DreamSteps,
  DreamVisual,
  FinalCTA,
  Note,
} from './page.styles';

export const metadata: Metadata = {
  title: 'La Dreamachine — Une expérience sensorielle',
  description:
    'Découvrez la Dreamachine, une expérience de relaxation profonde par stimulation lumineuse, en complément de l\'hypnose ericksonienne — Cabinet de Guylaine Demarle, Cannes (06).',
};

const benefits = [
  {
    title: 'Détente profonde',
    text: 'Un lâcher-prise rapide, idéal en complément ou en préparation d\'une séance d\'hypnose.',
  },
  {
    title: 'Apaisement mental',
    text: 'La pulsation lumineuse calme l\'agitation mentale et invite à un état méditatif naturel.',
  },
  {
    title: 'Créativité & imaginaire',
    text: 'Les yeux fermés, des formes géométriques apparaissent : un voyage intérieur unique à chacun.',
  },
  {
    title: 'Sommeil & récupération',
    text: 'Particulièrement indiquée en cas de fatigue, troubles du sommeil ou stress accumulé.',
  },
];

const steps = [
  {
    title: 'Installation',
    text: 'Vous vous installez confortablement, allongé(e) ou semi-assis(e), dans une lumière tamisée. On en profite pour échanger sur vos attentes.',
  },
  {
    title: 'Mise en place',
    text: 'La Dreamachine est positionnée à courte distance. Yeux fermés, vous percevez la pulsation lumineuse à travers les paupières — sans aucun effort.',
  },
  {
    title: 'Voyage intérieur',
    text: 'Pendant 15 à 25 minutes, vous laissez venir : couleurs, formes, sensations. Chaque expérience est différente, et toutes sont valides.',
  },
  {
    title: 'Retour & échange',
    text: 'On reprend doucement contact avec l\'instant, et on partage si vous le souhaitez. La séance peut se prolonger par un temps d\'hypnose ericksonienne.',
  },
];

export default function DreamMachinePage() {
  return (
    <>
      {/* Hero / présentation */}
      <Section
        tone="cream"
        eyebrow="Une expérience sensorielle"
        title="La Dreamachine"
        lead="Un voyage intérieur par la lumière, en douceur, à mi-chemin entre la méditation et l'hypnose."
      >
        <DreamVisual aria-hidden="true" />

        <p style={{ fontSize: '1.125rem', lineHeight: 1.8, maxWidth: '720px' }}>
          Inspirée du dispositif imaginé par Brion Gysin dans les années 60,
          la Dreamachine produit une pulsation lumineuse régulière qui,
          perçue les yeux fermés, induit un état modifié de conscience
          comparable à une méditation profonde. Aucun effort de
          concentration n&apos;est demandé : vous vous laissez simplement
          porter.
        </p>

        <p
          style={{
            fontSize: '1.125rem',
            lineHeight: 1.8,
            maxWidth: '720px',
            marginTop: '1rem',
          }}
        >
          Je vous propose cette expérience en séance individuelle, seule ou
          en complément d&apos;une démarche d&apos;hypnose ericksonienne,
          selon ce qui résonne pour vous.
        </p>
      </Section>

      {/* Bénéfices */}
      <Section
        tone="sand"
        eyebrow="Pour qui, pour quoi"
        title="Les apports d'une séance"
        lead="Une parenthèse, un reset — accessible à toutes les personnes en bonne santé qui cherchent à ralentir."
      >
        <DreamGrid>
          {benefits.map((b) => (
            <DreamCard key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </DreamCard>
          ))}
        </DreamGrid>
      </Section>

      {/* Déroulé */}
      <Section
        tone="cream"
        eyebrow="Le déroulé"
        title="Comment se passe une séance ?"
        lead="Environ 45 minutes, dans un cadre calme et sécurisé."
        narrow
      >
        <DreamSteps>
          {steps.map((s) => (
            <DreamStep key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </DreamStep>
          ))}
        </DreamSteps>

        <Note>
          <h4>Bon à savoir</h4>
          <p>
            La Dreamachine n&apos;est pas recommandée aux personnes
            épileptiques ou photosensibles. En cas de doute,
            n&apos;hésitez pas à m&apos;en parler avant la séance — nous
            adapterons l&apos;accompagnement.
          </p>
        </Note>
      </Section>

      {/* CTA final */}
      <Section tone="sage" narrow>
        <FinalCTA>
          <h2>Envie de tester l&apos;expérience ?</h2>
          <p>
            Réservez une séance découverte ou échangeons simplement par
            téléphone pour voir si la Dreamachine vous correspond.
          </p>
          <CTAActions>
            <Button href="/contact" variant="primary">
              Réserver une séance
            </Button>
            <Button href="tel:+33680414172" variant="ghost">
              06 80 41 41 72
            </Button>
          </CTAActions>
        </FinalCTA>
      </Section>
    </>
  );
}
