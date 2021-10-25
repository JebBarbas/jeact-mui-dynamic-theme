import DynamicThemeProvider from "./DynamicThemeProvider";
import useDynamicTheme from "./useDynamicTheme";
import createOverridedTheme from './createOverridedTheme';

import {
    bootstrapOverride,
    muiDarkmodeOverride,
    muiLightmodeOverride
} from './overrides'

export type {
    ColorScheme,
    DynamicThemeProviderProps,
    NewPaletteColors,
    PaletteOverride
} from './types'

export {
    DynamicThemeProvider,
    useDynamicTheme,
    createOverridedTheme,

    bootstrapOverride,
    muiDarkmodeOverride,
    muiLightmodeOverride,
}