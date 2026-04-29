'use client';

import styled, { css } from 'styled-components';

import type { SectionTone } from './Section';

export const SectionWrapper = styled.section<{ $tone: SectionTone }>`
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.lg}`};
  }

  ${({ $tone, theme }) => {
    switch ($tone) {
      case 'cream':
        return css`
          background: ${theme.colors.cream};
        `;
      case 'sand':
        return css`
          background: ${theme.colors.sand};
        `;
      case 'sage':
        return css`
          background: ${theme.colors.sageDark};
          color: ${theme.colors.cream};

          h1, h2, h3, h4, p {
            color: ${theme.colors.cream};
          }

          /* CTA — fort contraste sur fond vert sauge */
          a[data-variant='primary'],
          button[data-variant='primary'] {
            background: ${theme.colors.cream};
            color: ${theme.colors.sageDark};
            border-color: ${theme.colors.cream};
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);

            &:hover {
              background: ${theme.colors.sageLight};
              color: ${theme.colors.text};
              border-color: ${theme.colors.sageLight};
              transform: translateY(-1px);
              box-shadow: 0 10px 28px rgba(0, 0, 0, 0.22);
            }

            &:focus-visible {
              outline: 2px solid ${theme.colors.cream};
              outline-offset: 3px;
            }
          }

          /* Variante "ghost" (ex. numéro de téléphone) — texte clair lisible */
          a[data-variant='ghost'],
          button[data-variant='ghost'] {
            color: ${theme.colors.cream};
            border-color: rgba(250, 247, 242, 0.4);
            text-decoration: underline;
            text-decoration-color: rgba(250, 247, 242, 0.5);
            text-underline-offset: 4px;

            &:hover {
              color: ${theme.colors.cream};
              background: rgba(250, 247, 242, 0.08);
              text-decoration-color: ${theme.colors.cream};
            }
          }

          /* Variante "secondary" si jamais utilisée sur fond vert */
          a[data-variant='secondary'],
          button[data-variant='secondary'] {
            background: transparent;
            color: ${theme.colors.cream};
            border-color: ${theme.colors.cream};

            &:hover {
              background: ${theme.colors.cream};
              color: ${theme.colors.sageDark};
            }
          }
        `;
      case 'dark':
        return css`
          background: ${theme.colors.text};
          color: ${theme.colors.cream};

          h1, h2, h3, h4, p {
            color: ${theme.colors.cream};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Container = styled.div<{ $narrow?: boolean }>`
  max-width: ${({ theme, $narrow }) =>
    $narrow ? theme.layout.contentWidth : theme.layout.maxWidth};
  margin: 0 auto;
`;

export const Eyebrow = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: ${({ theme }) => theme.colors.sageDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  max-width: 720px;
`;

export const SectionLead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 640px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;
