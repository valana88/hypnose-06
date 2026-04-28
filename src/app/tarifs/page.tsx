import type { Metadata } from "next";

import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Tarifs & déroulement",
  description:
    "Tarifs des séances d'hypnose à Cannes (06) — au cabinet ou à domicile. Durée d'une séance, nombre de séances, modalités de paiement.",
};

// ⚠ Tarifs à confirmer avec Guylaine — placeholders réalistes pour le 06.
const tarifs = [
  {
    name: "Séance individuelle",
    duration: "1 h à 1 h 30",
    price: "Sur demande",
    note: "Adulte, adolescent ou enfant accompagné",
  },

  {
    name: "Séance collective",
    duration: "1 h à 1 h 30",
    price: "Sur demande",
    note: "Adulte, adolescent ou enfant accompagné",
  },
  {
    name: "Séance à domicile",
    duration: "1 h à 1 h 30",
    price: "Sur demande",
    note: "Dans tout le département du 06",
  },

  {
    name: "Forfait arrêt du tabac",
    duration: "1 à 3 séances",
    price: "Sur demande",
    note: "Méthode adaptée selon votre profil",
  },
];

export default function TarifsPage() {
  return (
    <>
      <Section
        tone="cream"
        narrow
        eyebrow="Tarifs"
        title="Séances & honoraires"
        lead="Les séances durent en général entre 1h et 1h30. La plupart des accompagnements aboutissent en 3 à 5 séances."
      >
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {tarifs.map((t) => (
            <div
              key={t.name}
              style={{
                padding: "2rem",
                background: "#FAF7F2",
                border: "1px solid #E8DDC9",
                borderRadius: "16px",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{t.name}</h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#5C6657",
                  marginBottom: "1rem",
                }}
              >
                {t.duration}
              </p>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: "2rem",
                  color: "#5C6B4F",
                  marginBottom: "0.5rem",
                }}
              >
                {t.price}
              </p>
              <p style={{ fontSize: "0.875rem", color: "#5C6657" }}>{t.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand" narrow eyebrow="Bon à savoir">
        <ul style={{ listStyle: "none", lineHeight: 2 }}>
          <li>— Paiement par espèces, chèque ou virement</li>
          <li>— Une facture peut vous être remise sur simple demande</li>
          <li>— Les séances ne sont pas remboursées par la Sécurité sociale</li>
          <li>
            — Certaines mutuelles prennent en charge tout ou partie des séances
            : renseignez-vous auprès de la vôtre
          </li>
          <li>— Annulation possible jusqu&apos;à 24 h avant le rendez-vous</li>
        </ul>
      </Section>

      <Section tone="sage" narrow>
        <h2 style={{ marginBottom: "1rem" }}>
          Une question avant de réserver ?
        </h2>
        <Button href="/contact" variant="primary">
          Me contacter
        </Button>
      </Section>
    </>
  );
}
