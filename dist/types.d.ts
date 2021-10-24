import type { ThemeOptions } from '@mui/material';
export declare type ColorScheme = 'light' | 'dark' | 'default';
export declare type NewPaletteColors = Record<string, string>;
export interface DynamicThemeProviderProps {
    localStorageKey?: string;
    overrides?: ThemeOptions | ThemeOptions[];
    addedColors?: NewPaletteColors | NewPaletteColors[];
}
