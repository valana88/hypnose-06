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
