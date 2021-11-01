import { MaterialUI } from '@jeact/colors'
import createPaletteOverride from '../utils/createPaletteOverride'

const {
    primary, 
    secondary,
    success,
    warning,
    error,
    info
} = MaterialUI.darkThemeColors

/**
 * Use this override to use always the dark theme colors
 */
const muiDarkmodeOverride = createPaletteOverride(
    primary, secondary, success, warning, error, info
)

export default muiDarkmodeOverride