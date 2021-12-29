import 'styled-components';
import theme from '../styles/themes';

export type Theme = typeof theme.light;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
