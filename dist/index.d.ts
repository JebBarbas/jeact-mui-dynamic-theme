import DynamicThemeProvider from "./DynamicThemeProvider";
import useDynamicTheme from "./useDynamicTheme";
import { createOverridedTheme, deepmergeNewPalettes, deepmergeOverrides, extractColorFromMUIColorObject, newPaletteToThemeOptions } from './utils';
import { bootstrapPalette } from './palettes';
export type { ColorScheme, DynamicThemeProviderProps, MUIColorObject, MUIColorObjectKey, NewPalette } from './types';
export { DynamicThemeProvider, useDynamicTheme, createOverridedTheme, deepmergeNewPalettes, deepmergeOverrides, extractColorFromMUIColorObject, newPaletteToThemeOptions, bootstrapPalette, };
