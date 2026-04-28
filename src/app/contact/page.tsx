import type { Metadata } from "next";

import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & rendez-vous",
  description:
    "Contactez Guylaine Demarle — hypnothérapeute à Cannes (06). Cabinet 91-93 rue Georges Clémenceau · 06 80 41 41 72 · Guylaine.demarle@wanadoo.fr.",
};

// Logo Facebook inline (SVG officiel, taille adaptable)
function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Section
        tone="cream"
        eyebrow="Contact"
        title="Prenons rendez-vous."
        lead="Le plus simple : un appel pour échanger sur votre situation et fixer une première séance."
      >
        <div
          style={{
            display: "grid",
            gap: "2.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          <div>
            <h3 style={{ marginBottom: "1rem" }}>Au cabinet</h3>
            <p style={{ lineHeight: 2 }}>
              {site.contact.address.street}
              <br />
              {site.contact.address.postalCode} {site.contact.address.city}
            </p>
            <p style={{ marginTop: "1rem", color: "#5C6657" }}>{site.hours}</p>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>Par téléphone</h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "2rem",
                color: "#5C6B4F",
                marginBottom: "1rem",
              }}
            >
              <a href={site.contact.phoneLink}>{site.contact.phone}</a>
            </p>
            <Button href={site.contact.phoneLink} variant="primary">
              Appeler maintenant
            </Button>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>Par email</h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: "1.5rem",
                color: "#5C6B4F",
                marginBottom: "1rem",
                wordBreak: "break-word",
              }}
            >
              <a href={site.contact.emailLink}>{site.contact.email}</a>
            </p>
            <Button href={site.contact.emailLink} variant="secondary">
              Écrire un email
            </Button>
          </div>

          <div>
            <h3 style={{ marginBottom: "1rem" }}>À domicile</h3>
            <p style={{ lineHeight: 2 }}>
              {site.sessions.location}.
              <br />
              N&apos;hésitez pas à m&apos;en parler lors de notre premier
              échange.
            </p>
          </div>
        </div>

        {/* Bloc Facebook */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #E8DDC9",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "0.875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5C6B4F",
              fontWeight: 500,
            }}
          >
            Suivez-moi sur Facebook
          </span>
          <a
            href={site.social.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              background: "#5C6B4F",
              color: "#FAF7F2",
              fontWeight: 500,
              transition: "all 250ms ease",
            }}
          >
            <FacebookIcon size={20} />
            {site.social.facebookHandle}
          </a>
        </div>
      </Section>

      {/* Formulaire de contact (à connecter à Resend / Formspree plus tard) */}
      {/* <Section
        tone="sand"
        narrow
        eyebrow="Ou par message"
        title="Écrivez-moi"
        lead="Je vous réponds dans la journée."
      >
        <form
          style={{
            display: 'grid',
            gap: '1rem',
            background: '#FAF7F2',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #E8DDC9',
          }}
        >
          <input
            type="text"
            placeholder="Votre nom"
            style={{
              padding: '0.875rem 1rem',
              border: '1px solid #E8DDC9',
              borderRadius: '8px',
              fontFamily: 'inherit',
              fontSize: '1rem',
            }}
          />
          <input
            type="email"
            placeholder="Votre email"
            style={{
              padding: '0.875rem 1rem',
              border: '1px solid #E8DDC9',
              borderRadius: '8px',
              fontFamily: 'inherit',
              fontSize: '1rem',
            }}
          />
          <textarea
            placeholder="Votre message"
            rows={5}
            style={{
              padding: '0.875rem 1rem',
              border: '1px solid #E8DDC9',
              borderRadius: '8px',
              fontFamily: 'inherit',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </form>
      </Section> */}
    </>
  );
}
