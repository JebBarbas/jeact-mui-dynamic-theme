import type { ThemeOptions } from '@mui/material';
export declare type ColorScheme = 'light' | 'dark' | 'default';
export interface DynamicThemeProviderProps {
    localStorageKey?: string;
    overrides?: ThemeOptions | ThemeOptions[];
}
