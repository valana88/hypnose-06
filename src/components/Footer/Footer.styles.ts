'use client';

import Link from 'next/link';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.textLight};
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1.4fr 1fr 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const Block = styled.div`
  h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${({ theme }) => theme.colors.sageLight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p, a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textLight};
    opacity: 0.85;
    line-height: 1.8;
  }

  a:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.sageLight};
  }
`;

export const FooterBrand = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.cream};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FooterLink = styled(Link)`
  display: inline-block;
`;

export const Bottom = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(245, 239, 230, 0.1);
  font-size: ${({ theme }) => theme.fontSizes.xs};
  opacity: 0.6;
  text-align: center;
`;
