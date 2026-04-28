// Augmentation TypeScript du thème pour styled-components
// Permet d'avoir l'autocomplétion sur ${({ theme }) => theme.colors.sage}

import 'styled-components';
import type { Theme } from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
