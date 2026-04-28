'use client';

import styled, { keyframes } from 'styled-components';

// Animation lente de pulsation lumineuse — évoque la Dreamachine
const pulse = keyframes`
  0%, 100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
  50%      { opacity: 1;    transform: translate(-50%, -50%) scale(1.03); }
`;

// Visuel "lampe" hypnotique en haut de page
// (gardé en styled-component car nécessite une animation @keyframes)
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
