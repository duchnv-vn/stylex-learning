import * as stylex from '@stylexjs/stylex';

export const tokens = stylex.defineVars({
  primaryText: 'black',
  secondaryText: '#333',
  accent: 'blue',
  background: 'white',
  lineColor: 'gray',
  borderRadius: '4px',
  fontFamily: 'system-ui, sans-serif',
  fontSize: '16px',
});

const DARK = '@media (prefers-color-scheme: dark)';

export const colors = stylex.defineVars({
  primaryText: { default: 'black', [DARK]: 'white' },
  secondaryText: { default: '#333', [DARK]: '#ccc' },
  accent: { default: 'blue', [DARK]: 'lightblue' },
  background: { default: 'white', [DARK]: 'black' },
  lineColor: { default: 'gray', [DARK]: 'lightgray' },
});
