import type { ThemeOptions } from '@mui/material'

export type ColorScheme = 'light' | 'dark' | 'default'

export interface CustomColorsOptions {
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
}

export interface DynamicThemeProviderProps {
    localStorageKey?: string
    overrides?: ThemeOptions | ThemeOptions[]
    customColors?: CustomColorsOptions
}