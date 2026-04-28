import type { Metadata } from 'next';

import { Section } from '@/components/Section/Section';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <Section tone="cream" narrow eyebrow="Informations" title="Mentions légales">
      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Éditeur</h3>
      <p>
        {site.practitioner.fullName}
        <br />
        {site.contact.address.street}
        <br />
        {site.contact.address.postalCode} {site.contact.address.city}
        <br />
        Téléphone : {site.contact.phone}
      </p>

      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>Hébergement</h3>
      <p>
        Vercel Inc. · 440 N Barranca Avenue #4133, Covina, CA 91723, USA
      </p>

      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>
        Propriété intellectuelle
      </h3>
      <p>
        L&apos;ensemble du contenu de ce site (textes, images, logos) est
        la propriété de {site.practitioner.fullName}. Toute reproduction
        sans autorisation préalable est interdite.
      </p>

      <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem' }}>
        Données personnelles
      </h3>
      <p>
        Les informations collectées via le formulaire de contact sont
        utilisées uniquement pour répondre à votre demande. Conformément
        au RGPD, vous disposez d&apos;un droit d&apos;accès, de
        rectification et de suppression de vos données.
      </p>
    </Section>
  );
}
