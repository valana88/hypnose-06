import type { Metadata } from 'next';

import { Section } from '@/components/Section/Section';
import { Button } from '@/components/Button/Button';

export const metadata: Metadata = {
  title: 'L\'hypnose ericksonienne',
  description:
    'Comprendre l\'hypnose ericksonienne : un état naturel de conscience modifiée qui permet d\'accéder à ses ressources intérieures pour transformer ce qui freine.',
};

export default function HypnosePage() {
  return (
    <>
      <Section
        tone="cream"
        narrow
        eyebrow="L'hypnose"
        title="Qu'est-ce que l'hypnose ericksonienne ?"
      >
        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
          L&apos;hypnose est un <strong>état naturel de conscience modifiée</strong>,
          que nous traversons tous plusieurs fois par jour : quand on
          conduit en pilote automatique, quand on est absorbé par un livre,
          ou ces quelques secondes juste avant de s&apos;endormir.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          L&apos;hypnose ericksonienne, développée par le psychiatre américain
          Milton H. Erickson, utilise cet état pour court-circuiter les
          schémas mentaux qui bloquent et s&apos;adresser directement aux
          ressources de l&apos;inconscient.
        </p>
      </Section>

      <Section
        tone="sand"
        narrow
        eyebrow="Idées reçues"
        title="Vous gardez le contrôle, toujours."
      >
        <p style={{ marginBottom: '1rem' }}>
          <strong>Non, vous ne dormez pas.</strong> Vous restez parfaitement
          conscient(e), vous entendez tout, vous pouvez parler, ouvrir les
          yeux à tout moment.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Non, je ne vous &quot;manipule&quot; pas.</strong> Aucune
          suggestion contraire à vos valeurs ne sera jamais acceptée par
          votre inconscient. Vous gardez le contrôle.
        </p>
        <p>
          <strong>Non, ce n&apos;est pas magique.</strong> C&apos;est un
          travail thérapeutique sérieux, qui s&apos;appuie sur ce que vous
          êtes prêt(e) à transformer.
        </p>
      </Section>

      <Section tone="sage" narrow>
        <h2 style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
          Une question, un doute ?
        </h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.125rem' }}>
          Le mieux, c&apos;est encore d&apos;en parler. Un premier échange
          ne vous engage à rien.
        </p>
        <Button href="/contact" variant="primary">
          Prendre contact
        </Button>
      </Section>
    </>
  );
}
