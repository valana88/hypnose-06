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
  /* ========== MOBILE : panneau plein écran ========== */
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  position: fixed;
  inset: 0;                     /* couvre tout l'écran */
  z-index: 99;                  /* au-dessus du contenu, sous le HeaderWrapper (100) */
  background: ${({ theme }) => theme.colors.cream};  /* cream/beige, opaque */
  box-shadow: ${({ theme }) => theme.shadows.lg};

  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* Le menu commence SOUS la topbar (~72px) */
  padding: calc(72px + ${({ theme }) => theme.spacing.xl})
    ${({ theme }) => theme.spacing.lg}
    ${({ theme }) => theme.spacing['2xl']};
  gap: ${({ theme }) => theme.spacing.lg};

  /* Permet de scroller dans le menu si beaucoup de liens */
  overflow-y: auto;

  /* ========== DESKTOP ≥ lg : barre horizontale classique ========== */
  ${({ theme }) => theme.media.lg} {
    display: flex;
    position: static;
    inset: auto;
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
