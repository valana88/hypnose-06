'use client';

import { useState } from 'react';

import { Button } from '@/components/Button/Button';
import { nav } from '@/data/site';
import {
  Brand,
  Burger,
  HeaderWrapper,
  Inner,
  Nav,
  NavLink,
} from './Header.styles';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Inner>
        <Brand href="/" onClick={() => setOpen(false)}>
          <span>Guylaine Demarle</span>
          <span>Hypnose · Cannes 06</span>
        </Brand>

        <Nav $open={open}>
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Button href="/contact" variant="primary">
            Prendre rendez-vous
          </Button>
        </Nav>

        <Burger
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </Burger>
      </Inner>
    </HeaderWrapper>
  );
}
