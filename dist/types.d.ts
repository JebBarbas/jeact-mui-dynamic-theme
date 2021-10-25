export declare type ColorScheme = 'light' | 'dark' | 'default';
export declare type NewPaletteColors = Record<string, string>;
export interface PaletteOverride {
    primary?: string;
    secondary?: string;
    error?: string;
    info?: string;
    success?: string;
    warning?: string;
}
export interface DynamicThemeProviderProps {
    localStorageKey?: string;
    paletteOverrides?: PaletteOverride | PaletteOverride[];
    addedColors?: NewPaletteColors | NewPaletteColors[];
}
