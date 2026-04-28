'use client';

// Registry Styled Components pour le SSR du Next.js App Router
// Ce fichier suit la doc officielle Next.js :
// https://nextjs.org/docs/app/building-your-application/styling/css-in-js

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // On crée un sheet par requête côté serveur
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  // Côté client, on rend juste les enfants
  if (typeof window !== 'undefined') {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    );
  }

  // Côté serveur, on collecte les styles
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyleSheetManager>
  );
}
