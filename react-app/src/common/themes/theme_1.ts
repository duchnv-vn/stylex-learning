import * as stylex from '@stylexjs/stylex';
import { colors } from '../styles/tokens.stylex';

// A constant can be used to avoid repeating the media query
const DARK = '@media (prefers-color-scheme: dark)';

// Dracula theme
export const dracula = stylex.createTheme(colors, {
  primaryText: { default: 'purple', [DARK]: 'lightpurple' },
  secondaryText: { default: 'pink', [DARK]: 'hotpink' },
  accent: 'red',
  background: { default: '#555', [DARK]: 'black' },
  lineColor: 'red',
});
