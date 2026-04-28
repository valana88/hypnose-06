import type { Metadata } from "next";

import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "L'hypnose ericksonienne",
  description:
    "Comprendre l'hypnose ericksonienne : un état naturel de conscience modifiée qui permet d'accéder à ses ressources intérieures pour transformer ce qui freine.",
};

const categories = [
  {
    icon: "◍",
    title: "Émotions & mental",
    items: [
      "Stress, anxiété, angoisses",
      "Manque de confiance en soi",
      "Deuil & émotions difficiles",
      "Préparation mentale (examen, prise de parole)",
    ],
  },
  {
    icon: "◉",
    title: "Habitudes & corps",
    items: [
      "Arrêt du tabac",
      "Comportements alimentaires",
      "Troubles du sommeil",
      "Douleurs chroniques (en complément médical)",
    ],
  },
  {
    icon: "↟",
    title: "Peurs & blocages",
    items: [
      "Phobies (avion, transports, animaux, foule…)",
      "Schémas répétitifs",
      "Inhibition, blocages personnels",
      "Estime de soi",
    ],
  },
];

export default function HypnosePage() {
  return (
    <>
      {/* Présentation de l'hypnose */}
      <Section
        tone="sage"
        narrow
        eyebrow="L'hypnose"
        title="Qu'est-ce que l'hypnose ericksonienne ?"
      >
        <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
          L&apos;hypnose est un{" "}
          <strong>état naturel de conscience modifiée</strong>, que nous
          traversons tous plusieurs fois par jour : quand on conduit en pilote
          automatique, quand on est absorbé par un livre, ou ces quelques
          secondes juste avant de s&apos;endormir.
        </p>
        <p style={{ marginBottom: "1.5rem" }}>
          L&apos;hypnose ericksonienne, développée par le psychiatre américain
          Milton H. Erickson, utilise cet état pour court-circuiter les schémas
          mentaux qui bloquent et s&apos;adresser directement aux ressources de
          l&apos;inconscient.
        </p>
      </Section>

      {/* Indications (anciennement page séparée — désormais intégrée ici) */}
      <Section
        tone="cream"
        narrow
        eyebrow="Indications"
        title="Pour qui, pour quoi ?"
        lead="L'hypnose ericksonienne s'adresse à toute personne — adulte, adolescent, enfant — qui souhaite avancer sur un point précis. Voici les motifs les plus fréquents."
      >
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.title}
              style={{
                background: "#FAF7F2",
                padding: "2rem",
                borderRadius: "16px",
                border: "1px solid #E8DDC9",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  background: "#F5EFE6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                }}
                aria-hidden="true"
              >
                {cat.icon}
              </div>
              <h3 style={{ color: "#5C6B4F", marginBottom: "0.75rem" }}>
                {cat.title}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  lineHeight: 2,
                  color: "#5C6657",
                  padding: 0,
                  margin: 0,
                }}
              >
                {cat.items.map((it) => (
                  <li key={it}>— {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: "2rem",
            fontStyle: "italic",
            color: "#5C6657",
          }}
        >
          Cette liste n&apos;est pas exhaustive. Si votre situation n&apos;y
          figure pas, n&apos;hésitez pas à m&apos;en parler.
        </p>
      </Section>

      {/* Idées reçues */}
      <Section
        tone="sand"
        narrow
        eyebrow="Idées reçues"
        title="Vous gardez le contrôle, toujours."
      >
        <p style={{ marginBottom: "1rem" }}>
          <strong>Non, vous ne dormez pas.</strong> Vous restez parfaitement
          conscient(e), vous entendez tout, vous pouvez parler, ouvrir les yeux
          à tout moment.
        </p>
        <p style={{ marginBottom: "1rem" }}>
          <strong>Non, je ne vous &quot;manipule&quot; pas.</strong> Aucune
          suggestion contraire à vos valeurs ne sera jamais acceptée par votre
          inconscient. Vous gardez le contrôle.
        </p>
        <p>
          <strong>Non, ce n&apos;est pas magique.</strong> C&apos;est un travail
          thérapeutique sérieux, qui s&apos;appuie sur ce que vous êtes prêt(e)
          à transformer.
        </p>
      </Section>

      {/* CTA final */}
      <Section tone="sage" narrow>
        <h2 style={{ marginBottom: "1rem", fontStyle: "italic" }}>
          Une question, un doute ?
        </h2>
        <p style={{ marginBottom: "2rem", fontSize: "1.125rem" }}>
          Le mieux, c&apos;est encore d&apos;en parler. Un premier échange ne
          vous engage à rien.
        </p>
        <Button href="/contact" variant="primary">
          Prendre contact
        </Button>
      </Section>
    </>
  );
}
