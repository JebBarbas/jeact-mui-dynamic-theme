import type { ThemeOptions } from '@mui/material';
import type { Localization } from '@mui/material/locale';
export declare type ColorScheme = 'light' | 'dark' | 'default';
export interface MUIColorObject {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}
export declare type MUIColorObjectKey = keyof MUIColorObject;
export interface NewPalette {
    primary?: MUIColorObject;
    secondary?: MUIColorObject;
    success?: MUIColorObject;
    warning?: MUIColorObject;
    error?: MUIColorObject;
    info?: MUIColorObject;
}
export interface DynamicThemeProviderProps {
    localStorageKey?: string;
    overrides?: ThemeOptions | ThemeOptions[];
    newPalettes?: NewPalette | NewPalette[];
    lightShade?: MUIColorObjectKey;
    darkShade?: MUIColorObjectKey;
    selectionShade?: MUIColorObjectKey;
    localization?: Localization;
}
