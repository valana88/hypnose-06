import type { Metadata } from 'next';

import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact & rendez-vous',
  description:
    'Contactez Guylaine Demarle — hypnothérapeute à Cannes (06). Cabinet 91-93 rue Georges Clémenceau · 06 80 41 41 72.',
};

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
            display: 'grid',
            gap: '3rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Au cabinet</h3>
            <p style={{ lineHeight: 2 }}>
              {site.contact.address.street}
              <br />
              {site.contact.address.postalCode} {site.contact.address.city}
            </p>
            <p style={{ marginTop: '1rem', color: '#5C6657' }}>
              {site.hours}
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>Par téléphone</h3>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2rem',
                color: '#5C6B4F',
                marginBottom: '1rem',
              }}
            >
              <a href={site.contact.phoneLink}>{site.contact.phone}</a>
            </p>
            <Button href={site.contact.phoneLink} variant="primary">
              Appeler maintenant
            </Button>
          </div>

          <div>
            <h3 style={{ marginBottom: '1rem' }}>À domicile</h3>
            <p style={{ lineHeight: 2 }}>
              {site.sessions.location}.
              <br />
              N&apos;hésitez pas à m&apos;en parler lors de notre premier
              échange.
            </p>
          </div>
        </div>
      </Section>

      {/* Placeholder pour un futur formulaire de contact */}
      <Section
        tone="sand"
        narrow
        eyebrow="Ou par message"
        title="Écrivez-moi"
        lead="Je vous réponds dans la journée. (Formulaire à connecter à un service d'envoi — Resend / Formspree.)"
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
      </Section>
    </>
  );
}
