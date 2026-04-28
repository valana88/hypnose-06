'use client';

import styled from 'styled-components';

// Grille de bénéfices (Pour qui ? Pour quoi ?)
export const BenefitsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  grid-template-columns: 1fr;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BenefitCard = styled.article`
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
  }
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.sand};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Section "Comment ça se passe" — étapes
export const Steps = styled.ol`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  counter-reset: step;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Step = styled.li`
  counter-increment: step;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.lg};

  &:before {
    content: counter(step, decimal-leading-zero);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    color: ${({ theme }) => theme.colors.sage};
    line-height: 1;
    position: absolute;
    top: -12px;
    left: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

// Section profil (Qui suis-je résumé)
export const ProfileLayout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 1.4fr;
  }
`;

// Conteneur du portrait — accueille une <Image fill> de next/image
// Le dégradé sert de fallback pendant le chargement.
export const Portrait = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.sandDark},
    ${({ theme }) => theme.colors.sageLight}
  );
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
`;

export const ProfileText = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

// CTA final
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
