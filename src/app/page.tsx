import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { Hero } from "@/components/Hero/Hero";
import { Section } from "@/components/Section/Section";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import {
  BenefitCard,
  BenefitsGrid,
  CTAActions,
  FinalCTA,
  Icon,
  Portrait,
  ProfileLayout,
  ProfileText,
  Step,
  Steps,
} from "./page.styles";

const benefits = [
  {
    icon: "◯",
    title: "Arrêt du tabac",
    text: "Une libération durable, sans frustration ni manque, en quelques séances ciblées.",
  },
  {
    icon: "◍",
    title: "Stress & anxiété",
    text: "Apaiser le mental, retrouver du recul et un calme profond au quotidien.",
  },
  {
    icon: "☾",
    title: "Sommeil",
    text: "Renouer avec un sommeil réparateur et des nuits sereines.",
  },
  {
    icon: "✦",
    title: "Confiance en soi",
    text: "Lever les blocages, oser, prendre sa juste place — naturellement.",
  },
  {
    icon: "↟",
    title: "Phobies",
    text: "Désensibiliser les peurs irrationnelles : avion, transports, animaux, foule…",
  },
  {
    icon: "◉",
    title: "Comportements alimentaires",
    text: "Retrouver une relation apaisée avec la nourriture et son corps.",
  },
];

const steps = [
  {
    title: "Premier contact",
    text: "Un appel ou un message pour échanger sur votre situation et fixer un premier rendez-vous.",
  },
  {
    title: "Séance d'accueil",
    text: "On définit ensemble votre objectif, je vous explique l'hypnose, puis vous vivez votre première expérience.",
  },
  {
    title: "Accompagnement",
    text: "Quelques séances suffisent en général. Au cabinet à Cannes ou à votre domicile.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Présentation */}
      <Section tone="cream">
        <ProfileLayout>
          <Portrait>
            <Image
              src="/images/guylaine.jpg"
              alt="Guylaine Demarle, hypnothérapeute à Cannes"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </Portrait>
          <ProfileText>
            <p
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--accent, #5C6B4F)",
                marginBottom: "0.5rem",
              }}
            >
              Qui suis-je
            </p>
            <h2>Une présence soignante, un accompagnement humain.</h2>
            <p>
              Infirmière diplômée d&apos;État depuis de nombreuses années, je me
              suis formée à l&apos;hypnose ericksonienne à l&apos;École
              Supérieure d&apos;Hypnose Ericksonienne d&apos;Aix-en-Provence
              pour apporter à mes patients un accompagnement plus profond,
              respectueux du rythme de chacun.
            </p>
            <p>
              Je travaille en collaboration avec médecins et psychologues, et je
              reçois aussi bien à mon cabinet à Cannes qu&apos;à votre domicile
              dans tout le 06.
            </p>
            <Button href="/qui-suis-je" variant="secondary">
              En savoir plus sur mon parcours
            </Button>
          </ProfileText>
        </ProfileLayout>
      </Section>

      {/* Bénéfices / indications */}
      <Section
        tone="sand"
        eyebrow="Indications"
        title="L'hypnose peut vous aider à…"
        lead="Chaque accompagnement est personnalisé. Voici les motifs de consultation les plus fréquents."
      >
        <BenefitsGrid>
          {benefits.map((b) => (
            <BenefitCard key={b.title}>
              <Icon aria-hidden="true">{b.icon}</Icon>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      {/* Comment ça se passe */}
      <Section
        tone="cream"
        eyebrow="Le déroulement"
        title="Comment se passe une séance ?"
        lead="Une démarche simple et progressive, dans un cadre bienveillant."
      >
        <Steps>
          {steps.map((s) => (
            <Step key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Step>
          ))}
        </Steps>
      </Section>

      {/* Témoignages */}
      <Section
        tone="sand"
        eyebrow="Témoignages"
        title="Ils ont fait le pas !"
        lead="Quelques retours de personnes accompagnées par Guylaine."
      >
        <Testimonials />
      </Section>

      {/* CTA final */}
      <Section tone="sage" narrow>
        <FinalCTA>
          <h2>Prêt(e) à faire le premier pas ?</h2>
          <p>
            Un rendez-vous d&apos;information ne vous engage à rien. Échangeons
            simplement sur ce qui vous amène.
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
