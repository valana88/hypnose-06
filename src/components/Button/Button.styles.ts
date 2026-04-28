'use client';

import Link from 'next/link';
import styled, { css } from 'styled-components';

import type { ButtonVariant } from './Button';

const baseStyles = css<{ $variant: ButtonVariant; $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 0.02em;
  text-decoration: none;
  white-space: nowrap;

  padding: 0.875rem 1.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1.5px solid transparent;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background: ${theme.colors.sageDark};
          color: ${theme.colors.cream};
          border-color: ${theme.colors.sageDark};

          &:hover {
            background: ${theme.colors.text};
            border-color: ${theme.colors.text};
            color: ${theme.colors.cream};
            transform: translateY(-1px);
            box-shadow: ${theme.shadows.md};
          }
        `;
      case 'secondary':
        return css`
          background: transparent;
          color: ${theme.colors.sageDark};
          border-color: ${theme.colors.sageDark};

          &:hover {
            background: ${theme.colors.sageDark};
            color: ${theme.colors.cream};
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${theme.colors.text};
          border-color: transparent;
          padding: 0.5rem 1rem;

          &:hover {
            color: ${theme.colors.sageDark};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;

export const StyledLink = styled(Link)<{
  $variant: ButtonVariant;
  $fullWidth?: boolean;
}>`
  ${baseStyles}
`;
