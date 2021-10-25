import type { PaletteOverride } from '../types'
import { MaterialUI } from '@jeact/colors'

/**
 * Use this override to use always the dark theme colors
 */
const muiDarkmodeOverride:PaletteOverride = {
    ...MaterialUI.darkThemeColors
}

export default muiDarkmodeOverride