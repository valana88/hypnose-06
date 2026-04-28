'use client';

import styled from 'styled-components';

export const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.cream} 0%,
    ${({ theme }) => theme.colors.sand} 100%
  );
  padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.md}`};
  min-height: 80vh;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.media.md} {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.lg}`};
  }
`;

// Élément décoratif (cercle organique en arrière-plan)
export const Blob = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => theme.colors.sageLight}40 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const Blob2 = styled.div`
  position: absolute;
  bottom: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    ${({ theme }) => theme.colors.terracottaLight}30 0%,
    transparent 70%
  );
  pointer-events: none;
`;

export const Inner = styled.div`
  position: relative;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;

  display: grid;
  gap: ${({ theme }) => theme.spacing['2xl']};

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1.3fr 1fr;
    align-items: center;
  }
`;

export const Content = styled.div`
  max-width: 640px;
`;

export const Tagline = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: ${({ theme }) => theme.colors.sageDark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:before {
    content: '';
    width: 32px;
    height: 1px;
    background: ${({ theme }) => theme.colors.sage};
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.sageDark};
  }
`;

export const Lead = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 540px;

  ${({ theme }) => theme.media.md} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

// Visuel à droite (placeholder élégant en attendant une vraie photo)
export const Visual = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.colors.sandDark} 0%,
    ${({ theme }) => theme.colors.sageLight} 100%
  );
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
  display: none;

  ${({ theme }) => theme.media.lg} {
    display: block;
  }

  /* Citation flottante */
  &:after {
    content: '« L\\'inconscient sait ce dont vous avez besoin. »';
    position: absolute;
    bottom: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.cream};
    line-height: 1.4;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  }
`;
