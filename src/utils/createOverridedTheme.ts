import type { Theme, PaletteMode, ThemeOptions } from '@mui/material'
import type { NewPalette, MUIColorObjectKey } from '../types'

import { createTheme } from '@mui/material'
import { deepmerge } from '@mui/utils'

import deepmergeOverrides from './deepmergeOverrides'
import deepmergeNewPalettes from './deepmergeNewPalettes'
import newPaletteToThemeOptions from './newPaletteToThemeOptions'

export default function createOverridedTheme(
    mode:PaletteMode, 
    overrides?: ThemeOptions | ThemeOptions[],
    newPalettes?: NewPalette | NewPalette[],
    lightShade?: MUIColorObjectKey,
    darkShade?: MUIColorObjectKey
):Theme {
    // Merges all the overrides in one, that makes the overrider
    const themeOptionsOverrided = deepmergeOverrides(overrides)

    // Merges all the newPalettes in one palette with the mode 
    // It always has the mode thanks to newPaletteToThemeOptions
    const themeOptionsWithPalette = newPaletteToThemeOptions(
        mode, deepmergeNewPalettes(newPalettes), lightShade, darkShade
    )

    // Creates a final overrider with the theme options and the new palette overrided
    // (Colors from palette had priority of palette from overrides)
    const overrider = deepmerge(themeOptionsOverrided, themeOptionsWithPalette)

    return createTheme(overrider)
}