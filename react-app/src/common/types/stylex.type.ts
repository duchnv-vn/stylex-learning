import { UserAuthoredStyles } from '@stylexjs/stylex/lib/StyleXTypes';

export type StylexCreateArgument = {
  [key: string]: UserAuthoredStyles | ((...args: any) => UserAuthoredStyles);
};
