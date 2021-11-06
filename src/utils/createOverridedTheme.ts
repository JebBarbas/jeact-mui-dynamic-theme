import type { Theme, PaletteMode, ThemeOptions } from '@mui/material'
import type { Localization } from '@mui/material/locale'
import type { NewPalette, MUIColorObjectKey } from '../types'

import { createTheme } from '@mui/material'
import { deepmerge } from '@mui/utils'
import contrastColor from '@jeact/contrast-color'

import deepmergeOverrides from './deepmergeOverrides'
import deepmergeNewPalettes from './deepmergeNewPalettes'
import newPaletteToThemeOptions from './newPaletteToThemeOptions'
import changeCssSelection from './changeCssSelection'

export default function createOverridedTheme(
    mode:PaletteMode, 
    overrides?: ThemeOptions | ThemeOptions[],
    newPalettes?: NewPalette | NewPalette[],
    lightShade?: MUIColorObjectKey,
    darkShade?: MUIColorObjectKey,
    selectionShade?: MUIColorObjectKey,
    localization?: Localization
):Theme {
    // Merges all the overrides in one, that makes the overrider
    const themeOptionsOverrided = deepmergeOverrides(overrides)

    // Merges all the newPalettes in one
    const mergedPalettes = deepmergeNewPalettes(newPalettes)

    // Creates a themeOptions with the palette
    // It always has the mode thanks to newPaletteToThemeOptions
    const themeOptionsWithPalette = newPaletteToThemeOptions(
        mode, mergedPalettes, lightShade, darkShade
    )

    // Using the selectionShade or default sets the CSS Variables
    // Only if there are a primary color
    const setCssSelection = () => {
        if(mergedPalettes.primary){
            const s = selectionShade ?? mode === 'light' ? ('A400' as MUIColorObjectKey) : ('A100' as MUIColorObjectKey)
            const bgColor = mergedPalettes.primary[s]

            changeCssSelection(bgColor, contrastColor(bgColor))
        }
    }
    setCssSelection()

    // Creates a final overrider with the theme options and the new palette overrided
    // (Colors from palette had priority of palette from overrides)
    const overrider = deepmerge(themeOptionsOverrided, themeOptionsWithPalette)

    // If Localization is providen, then its used, if not, then an empty object is passed
    return createTheme(overrider, localization ?? {})
}