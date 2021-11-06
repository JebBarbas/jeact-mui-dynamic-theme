import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import deepmergeOverrides from './deepmergeOverrides';
import deepmergeNewPalettes from './deepmergeNewPalettes';
import newPaletteToThemeOptions from './newPaletteToThemeOptions';
export default function createOverridedTheme(mode, overrides, newPalettes, lightShade, darkShade) {
    // Merges all the overrides in one, that makes the overrider
    var themeOptionsOverrided = deepmergeOverrides(overrides);
    // Merges all the newPalettes in one palette with the mode 
    // It always has the mode thanks to newPaletteToThemeOptions
    var themeOptionsWithPalette = newPaletteToThemeOptions(mode, deepmergeNewPalettes(newPalettes), lightShade, darkShade);
    // Creates a final overrider with the theme options and the new palette overrided
    // (Colors from palette had priority of palette from overrides)
    var overrider = deepmerge(themeOptionsOverrided, themeOptionsWithPalette);
    return createTheme(overrider);
}
//# sourceMappingURL=createOverridedTheme.js.map