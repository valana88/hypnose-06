'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => `${theme.colors.cream}F2`}; /* alpha 95% */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
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
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  position: fixed;
  inset: 64px 0 0 0;
  background: ${({ theme }) => theme.colors.cream};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) => theme.media.lg} {
    display: flex;
    position: static;
    inset: auto;
    background: transparent;
    flex-direction: row;
    padding: 0;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  padding: 4px 0;

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

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
  background: transparent;
  border: none;

  span {
    width: 24px;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.text};
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;
