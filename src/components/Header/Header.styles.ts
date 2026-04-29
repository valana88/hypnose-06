'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.cream};
  /* IMPORTANT : pas de backdrop-filter ici — ça casse le position:fixed du Nav mobile */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }
`;

export const Brand = styled(Link)`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  & > span:first-child {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    color: ${({ theme }) => theme.colors.sageDark};
  }

  & > span:last-child {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
    margin-top: 2px;
  }
`;

export const Nav = styled.nav<{ $open: boolean }>`
  /* ========== MOBILE : panneau qui tient exactement sur 1 écran ========== */
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  position: fixed;
  inset: 0;                     /* couvre tout l'écran */
  /* Hauteur figée à 1 viewport : 100dvh prend en compte la barre d'adresse mobile,
     100vh sert de fallback pour les navigateurs plus anciens */
  height: 100vh;
  height: 100dvh;
  max-height: 100vh;
  max-height: 100dvh;
  z-index: 99;                  /* au-dessus du contenu, sous le HeaderWrapper (100) */
  background: ${({ theme }) => theme.colors.cream};  /* cream/beige, opaque */
  box-shadow: ${({ theme }) => theme.shadows.lg};

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* Le menu commence juste sous la topbar (~72px) — catégories remontées */
  padding: calc(72px + ${({ theme }) => theme.spacing.xs})
    ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.md};
  /* Écart entre catégories réduit pour tout faire tenir sur 100vh */
  gap: ${({ theme }) => theme.spacing.sm};

  /* Sécurité pour les très petits écrans : on autorise un scroll discret
     plutôt que de couper le contenu */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  /* ========== DESKTOP ≥ lg : barre horizontale classique ========== */
  ${({ theme }) => theme.media.lg} {
    display: flex;
    position: static;
    inset: auto;
    height: auto;
    max-height: none;
    z-index: auto;
    background: transparent;
    box-shadow: none;
    flex-direction: row;
    padding: 0;
    gap: ${({ theme }) => theme.spacing.lg};
    overflow-y: visible;
  }
`;

export const NavLink = styled(Link)`
  /* MOBILE : liens plus gros, plus aérés, alignés au centre */
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  text-align: center;

  ${({ theme }) => theme.media.lg} {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    padding: 4px 0;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.sage};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;

export const Burger = styled.button<{ $open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  /* Toujours cliquable, même quand le menu est ouvert */
  position: relative;
  z-index: 101;

  span {
    display: block;
    width: 24px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.text};
    transition: transform ${({ theme }) => theme.transitions.base},
      opacity ${({ theme }) => theme.transitions.base};
    transform-origin: center;
  }

  /* espacement entre les 3 traits quand fermé */
  span + span {
    margin-top: 5px;
  }

  /* ===== Animation burger → croix ===== */
  ${({ $open }) =>
    $open &&
    `
      span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
        transform: scaleX(0);
      }
      span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
      }
    `}

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;
