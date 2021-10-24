import { createTheme } from '@mui/material'

import type { Theme, ThemeOptions, PaletteMode } from '@mui/material'

export default function createOverridedTheme(mode:PaletteMode, overrides?: ThemeOptions | ThemeOptions[]):Theme {
    let finalOverrider:ThemeOptions = {}

    if(Array.isArray(overrides)){
        overrides.forEach(override => {
            finalOverrider = {
                ...finalOverrider,
                ...override,

                palette: {
                    ...finalOverrider.palette,
                    ...override.palette,
                    mode: mode,
                },

                mixins: {
                    ...finalOverrider.mixins,
                    ...override.mixins
                },

                transitions: {
                    ...finalOverrider.transitions,
                    ...override.transitions
                },

                typography: {
                    ...finalOverrider.typography,
                    ...override.typography
                },
            }
        })
    }
    else{
        finalOverrider = {
            ...overrides,
            palette: {
                ...overrides?.palette,
                mode: mode,
            }
        }
    }

    return createTheme(finalOverrider)
}