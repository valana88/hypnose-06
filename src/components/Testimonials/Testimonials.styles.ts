'use client';

import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Card = styled.figure`
  position: relative;
  background: ${({ theme }) => theme.colors.cream};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.sageLight};
  }

  /* Gros guillemet décoratif en haut à gauche */
  &:before {
    content: '\\201C';                     /* « */
    position: absolute;
    top: ${({ theme }) => theme.spacing.sm};
    left: ${({ theme }) => theme.spacing.md};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.sageLight};
    opacity: 0.5;
  }
`;

export const Quote = styled.blockquote`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.lg}`};
`;

export const Author = styled.figcaption`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.sageDark};
`;

export const Context = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.04em;
`;
