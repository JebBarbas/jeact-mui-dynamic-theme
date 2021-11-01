import type { Theme, PaletteMode, ThemeOptions } from '@mui/material'
import type { CustomColorsOptions } from '../types'

import { createTheme } from '@mui/material'
import { deepmerge } from '@mui/utils'

import createCustomPalette from './createCustomPalette'

export default function createOverridedTheme(
    mode:PaletteMode, 
    overrides?: ThemeOptions | ThemeOptions[],
    customColors?: CustomColorsOptions
):Theme {
    let overrider:ThemeOptions = {}
    const customPalette = customColors ? createCustomPalette(customColors) : {}
    const fillMode:ThemeOptions = {palette: {mode: mode, ...customPalette}}

    if(overrides){
        if(Array.isArray(overrides)){
            overrides.forEach(override => {
                overrider = deepmerge(overrider, override)
            })
        }
        else{
            overrider = overrides           
        }
    }

    overrider = deepmerge(overrider, fillMode)
    return createTheme(overrider)
}