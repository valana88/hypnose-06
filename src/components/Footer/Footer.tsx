import { nav, site } from '@/data/site';
import {
  Block,
  Bottom,
  FooterBrand,
  FooterLink,
  FooterNav,
  FooterWrapper,
  Inner,
} from './Footer.styles';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Inner>
        <Block>
          <FooterBrand>{site.practitioner.fullName}</FooterBrand>
          <p>{site.practitioner.title}</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.7 }}>
            {site.practitioner.formation}
          </p>
        </Block>

        <Block>
          <h4>Cabinet</h4>
          <p>{site.contact.address.street}</p>
          <p>
            {site.contact.address.postalCode} {site.contact.address.city}
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            <a href={site.contact.phoneLink}>{site.contact.phone}</a>
          </p>
          <p style={{ marginTop: '0.25rem' }}>{site.hours}</p>
        </Block>

        <Block>
          <h4>Navigation</h4>
          <FooterNav>
            {nav.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </FooterNav>
        </Block>
      </Inner>

      <Bottom>
        © {year} {site.practitioner.fullName} — Tous droits réservés ·{' '}
        <FooterLink href="/mentions-legales">Mentions légales</FooterLink>
      </Bottom>
    </FooterWrapper>
  );
}
