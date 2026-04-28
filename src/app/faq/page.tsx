import type { Metadata } from "next";

import { Section } from "@/components/Section/Section";

export const metadata: Metadata = {
  title: "Questions fréquentes",
  description:
    "Réponses aux questions les plus courantes sur l'hypnose ericksonienne : combien de séances, est-ce que ça marche sur tout le monde, est-ce risqué…",
};

const faqs = [
  {
    q: "Combien de séances faut-il en général ?",
    a: "Cela dépend de votre objectif et de votre rythme, mais la plupart des accompagnements se déroulent en 3 à 5 séances. Un arrêt du tabac peut parfois aboutir en une seule séance.",
  },
  {
    q: "Est-ce que l'hypnose marche sur tout le monde ?",
    a: "Tout le monde est hypnotisable, à condition d'être consentant. La seule chose qui peut bloquer, c'est de ne pas vouloir vraiment changer — l'hypnose ne forcera jamais quelque chose qui n'est pas désiré.",
  },
  {
    q: "Est-ce que je vais perdre le contrôle ?",
    a: "Non. Vous restez conscient(e) tout au long de la séance. Vous pouvez parler, bouger, ouvrir les yeux. Aucune suggestion contraire à vos valeurs ne sera acceptée par votre inconscient.",
  },

  {
    q: "Peut-on faire de l'hypnose à distance ?",
    a: "C'est possible en visioconférence pour certaines indications, mais pour un premier rendez-vous le présentiel reste préférable.",
  },
  {
    q: "L'hypnose remplace-t-elle un suivi médical ?",
    a: "Non, jamais. L'hypnose vient en complément de votre suivi médical, en collaboration avec votre médecin traitant si nécessaire.",
  },
];

export default function FAQPage() {
  return (
    <Section
      tone="cream"
      narrow
      eyebrow="FAQ"
      title="Questions fréquentes"
      lead="Vous ne trouvez pas votre réponse ? Posez-moi votre question directement."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqs.map((f) => (
          <details
            key={f.q}
            style={{
              background: "#F5EFE6",
              padding: "1.5rem",
              borderRadius: "12px",
              border: "1px solid #E8DDC9",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "1.375rem",
                color: "#2D3E2C",
                listStyle: "none",
              }}
            >
              {f.q}
            </summary>
            <p
              style={{
                marginTop: "1rem",
                color: "#5C6657",
                lineHeight: 1.8,
              }}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
