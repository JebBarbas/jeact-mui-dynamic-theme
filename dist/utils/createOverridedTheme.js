import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import contrastColor from '@jeact/contrast-color';
import deepmergeOverrides from './deepmergeOverrides';
import deepmergeNewPalettes from './deepmergeNewPalettes';
import newPaletteToThemeOptions from './newPaletteToThemeOptions';
import changeCssSelection from './changeCssSelection';
export default function createOverridedTheme(mode, overrides, newPalettes, lightShade, darkShade, selectionShade, localization) {
    // Merges all the overrides in one, that makes the overrider
    var themeOptionsOverrided = deepmergeOverrides(overrides);
    // Merges all the newPalettes in one
    var mergedPalettes = deepmergeNewPalettes(newPalettes);
    // Creates a themeOptions with the palette
    // It always has the mode thanks to newPaletteToThemeOptions
    var themeOptionsWithPalette = newPaletteToThemeOptions(mode, mergedPalettes, lightShade, darkShade);
    // Using the selectionShade or default sets the CSS Variables
    // Only if there are a primary color
    var setCssSelection = function () {
        if (mergedPalettes.primary) {
            var s = (selectionShade !== null && selectionShade !== void 0 ? selectionShade : mode === 'light') ? 'A400' : 'A100';
            var bgColor = mergedPalettes.primary[s];
            changeCssSelection(bgColor, contrastColor(bgColor));
        }
    };
    setCssSelection();
    // Creates a final overrider with the theme options and the new palette overrided
    // (Colors from palette had priority of palette from overrides)
    var overrider = deepmerge(themeOptionsOverrided, themeOptionsWithPalette);
    // If Localization is providen, then its used, if not, then an empty object is passed
    return createTheme(overrider, localization !== null && localization !== void 0 ? localization : {});
}
//# sourceMappingURL=createOverridedTheme.js.map