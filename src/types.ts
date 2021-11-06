import type { ThemeOptions } from '@mui/material'

export type ColorScheme = 'light' | 'dark' | 'default'

/*export interface CustomColorsOptions {
    custom0?: string
    custom1?: string
    custom2?: string
    custom3?: string
    custom4?: string
    custom5?: string
    custom6?: string
    custom7?: string
    custom8?: string
    custom9?: string
    customA?: string
    customB?: string
    customC?: string
    customD?: string
    customE?: string
    customF?: string
}*/

export interface MUIColorObject {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
    A100: string
    A200: string
    A400: string
    A700: string
}

export type MUIColorObjectKey = keyof MUIColorObject

export interface NewPalette {
    primary?: MUIColorObject
    secondary?: MUIColorObject

    success?: MUIColorObject
    warning?: MUIColorObject
    error?: MUIColorObject
    info?: MUIColorObject
}

export interface DynamicThemeProviderProps {
    localStorageKey?: string
    overrides?: ThemeOptions | ThemeOptions[]
    newPalettes?: NewPalette | NewPalette[]
    lightShade?: MUIColorObjectKey
    darkShade?: MUIColorObjectKey
}