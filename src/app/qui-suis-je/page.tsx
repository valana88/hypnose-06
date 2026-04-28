import type { Metadata } from "next";

import { Button } from "@/components/Button/Button";
import { Section } from "@/components/Section/Section";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Guylaine Demarle, infirmière diplômée d'État et maître praticienne en hypnose ericksonienne formée à l'ESHE Aix-en-Provence. Cabinet à Cannes (06).",
};

export default function QuiSuisJePage() {
  return (
    <>
      <Section
        tone="cream"
        narrow
        eyebrow="Qui suis-je"
        title="Guylaine Demarle, soignante avant tout."
      >
        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          Infirmière diplômée d&apos;État, j&apos;ai consacré une grande partie
          de ma vie professionnelle au soin et à l&apos;écoute. Au fil des
          années, j&apos;ai ressenti le besoin d&apos;ajouter à ma pratique un
          accompagnement plus profond, capable de toucher ce qui se joue au-delà
          des mots — c&apos;est ce que m&apos;offre l&apos;hypnose
          ericksonienne.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          Je me suis formée à l&apos;
          <strong>
            École Supérieure d&apos;Hypnose Ericksonienne d&apos;Aix-en-Provence
          </strong>
          , où j&apos;ai obtenu le titre de maître praticienne. Cette approche,
          douce et respectueuse, fait appel aux ressources que chacun porte déjà
          en soi.
        </p>
        <p style={{ marginBottom: "2rem" }}>
          Je travaille en collaboration étroite avec des médecins et des
          psychologues. Je reçois à mon cabinet à Cannes ou je me déplace à
          votre domicile dans tout le département des Alpes-Maritimes (06).
        </p>
        <Button href="/contact" variant="primary">
          Me contacter
        </Button>
      </Section>

      <Section
        tone="sand"
        narrow
        eyebrow="Mon approche"
        title="Une hypnose qui respecte votre rythme."
      >
        <p style={{ marginBottom: "1.25rem" }}>
          L&apos;hypnose ericksonienne, développée par Milton H. Erickson, est
          une approche permissive : c&apos;est vous qui guidez. Mon rôle est de
          créer le cadre, la sécurité et les suggestions qui vous permettent
          d&apos;accéder à vos propres ressources intérieures.
        </p>
        <p>
          Je vous accompagne pour que <em>vous</em> fassiez ce changement, à
          votre manière, dans le respect total de qui vous êtes.
        </p>
      </Section>
    </>
  );
}
