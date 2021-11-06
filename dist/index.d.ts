import DynamicThemeProvider from "./DynamicThemeProvider";
import useDynamicTheme from "./useDynamicTheme";
import { createOverridedTheme, deepmergeNewPalettes, deepmergeOverrides, extractColorFromMUIColorObject, newPaletteToThemeOptions, changeCssSelection } from './utils';
import { bootstrapPalette, muiPalette } from './palettes';
export type { ColorScheme, DynamicThemeProviderProps, MUIColorObject, MUIColorObjectKey, NewPalette, } from './types';
export { DynamicThemeProvider, useDynamicTheme, createOverridedTheme, deepmergeNewPalettes, deepmergeOverrides, extractColorFromMUIColorObject, newPaletteToThemeOptions, changeCssSelection, bootstrapPalette, muiPalette, };
