// Thème global du site — ambiance "Zen & Nature"
// Palette inspirée de la nature : sable, sauge, terracotta doux

export const theme = {
  colors: {
    // Fonds
    cream: '#FAF7F2',        // fond principal très doux
    sand: '#F5EFE6',         // sable clair (sections alternées)
    sandDark: '#E8DDC9',     // sable plus profond (cartes, accents)

    // Verts (sauge)
    sage: '#93A87E',         // vert sauge principal
    sageLight: '#B5C4A0',    // sauge clair (hover doux)
    sageDark: '#5C6B4F',     // sauge profond (texte sur fond clair)

    // Accents chauds
    terracotta: '#C97B5A',   // terracotta doux (CTA secondaire)
    terracottaLight: '#E0A989',

    // Texte
    text: '#2D3E2C',         // vert très foncé presque noir
    textMuted: '#5C6657',    // texte secondaire
    textLight: '#FAF7F2',    // texte sur fond sombre

    // Neutres
    white: '#FFFFFF',
    black: '#1A1F18',
    border: '#E8DDC9',
  },

  fonts: {
    heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3.5rem',  // 56px
    '6xl': '4.5rem',  // 72px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    xs: '0.5rem',    // 8px
    sm: '1rem',      // 16px
    md: '1.5rem',    // 24px
    lg: '2rem',      // 32px
    xl: '3rem',      // 48px
    '2xl': '4rem',   // 64px
    '3xl': '6rem',   // 96px
    '4xl': '8rem',   // 128px
  },

  radii: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px rgba(45, 62, 44, 0.04)',
    md: '0 4px 12px rgba(45, 62, 44, 0.06)',
    lg: '0 10px 30px rgba(45, 62, 44, 0.08)',
    xl: '0 20px 60px rgba(45, 62, 44, 0.12)',
  },

  transitions: {
    fast: '150ms ease',
    base: '250ms ease',
    slow: '400ms ease',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  // Helpers media queries — utilisation : ${({ theme }) => theme.media.md} { ... }
  media: {
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
  },

  layout: {
    maxWidth: '1200px',
    contentWidth: '720px', // pour les blocs texte
  },
} as const;

export type Theme = typeof theme;
