'use client';

import { createGlobalStyle } from 'styled-components';

// Styles globaux : reset minimal + variables typographiques
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.cream};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.15;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: -0.01em;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.fontSizes['5xl']};
    }
    ${({ theme }) => theme.media.lg} {
      font-size: ${({ theme }) => theme.fontSizes['6xl']};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    ${({ theme }) => theme.media.md} {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  p {
    line-height: 1.75;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.sageDark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style-position: inside;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.sageLight};
    color: ${({ theme }) => theme.colors.text};
  }
`;
