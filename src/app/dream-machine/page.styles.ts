'use client';

import styled, { keyframes } from 'styled-components';

// Animation lente de pulsation lumineuse — évoque la Dreamachine
const pulse = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%      { opacity: 1;    transform: scale(1.03); }
`;

// Visuel "lampe" hypnotique en haut de page
export const DreamVisual = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: radial-gradient(
      circle at 50% 50%,
      ${({ theme }) => theme.colors.terracottaLight} 0%,
      ${({ theme }) => theme.colors.sand} 35%,
      ${({ theme }) => theme.colors.sageDark} 100%
    );
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.md} {
    aspect-ratio: 21 / 9;
  }

  /* Halo pulsé au centre */
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: translate(-50%, -50%);
    animation: ${pulse} 4s ease-in-out infinite;
    pointer-events: none;
  }

  /* Citation discrète */
  &:after {
    content: '« Fermez les yeux. Laissez les formes venir à vous. »';
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.cream};
    text-align: center;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  }
`;

// Grille de bénéfices spécifiques à la Dreamachine
export const DreamGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const DreamCard = styled.article`
  background: ${({ theme }) => theme.colors.cream};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.sageLight};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.sageDark};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.7;
  }
`;

// Liste numérotée du déroulé
export const DreamSteps = styled.ol`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  counter-reset: step;
`;

export const DreamStep = styled.li`
  counter-increment: step;
  position: relative;
  padding-left: ${({ theme }) => theme.spacing['2xl']};

  &:before {
    content: counter(step, decimal-leading-zero);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.colors.sage};
    position: absolute;
    left: 0;
    top: -6px;
    line-height: 1;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.6;
  }
`;

// CTA final centré
export const FinalCTA = styled.div`
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-style: italic;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    opacity: 0.9;
  }
`;

export const CTAActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

// Encadré "bon à savoir / contre-indications"
export const Note = styled.aside`
  background: ${({ theme }) => theme.colors.sand};
  border-left: 3px solid ${({ theme }) => theme.colors.terracotta};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: ${({ theme }) => theme.colors.terracotta};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    line-height: 1.7;
  }
`;
