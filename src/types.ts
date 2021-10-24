import type { ThemeOptions } from '@mui/material'

export type ColorScheme = 'light' | 'dark' | 'default'

export type NewPaletteColors = Record<string, string>

export interface DynamicThemeProviderProps {
    localStorageKey?: string
    overrides?: ThemeOptions | ThemeOptions[]
    addedColors?: NewPaletteColors | NewPaletteColors[]
}