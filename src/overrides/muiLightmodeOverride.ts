import type { PaletteOverride } from '../types'
import { MaterialUI } from '@jeact/colors'

/**
 * Use this override to avoid the change of colors when toggling from lightmode to darkmode
 * in the mui theme.
 */
const muiLightmodeOverride:PaletteOverride = {
    ...MaterialUI.defaultThemeColors
}

export default muiLightmodeOverride