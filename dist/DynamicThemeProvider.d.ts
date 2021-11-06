import React from 'react';
import type { ColorScheme, DynamicThemeProviderProps } from './types';
export declare const contextDefaultValue: {
    appColorScheme: ColorScheme;
    theme: import("@mui/material").Theme;
    setDark: () => void;
    setDefault: () => void;
    setLight: () => void;
};
export declare const DynamicThemeContext: React.Context<{
    appColorScheme: ColorScheme;
    theme: import("@mui/material").Theme;
    setDark: () => void;
    setDefault: () => void;
    setLight: () => void;
}>;
declare const DynamicThemeProvider: React.FC<DynamicThemeProviderProps>;
export default DynamicThemeProvider;
