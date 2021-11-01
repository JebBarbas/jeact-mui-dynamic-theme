import { MaterialUI } from '@jeact/colors'
import createPaletteOverride from '../utils/createPaletteOverride'

const {
    primary, 
    secondary,
    success,
    warning,
    error,
    info
} = MaterialUI.defaultThemeColors

/**
 * Use this override to avoid the change of colors when toggling from lightmode to darkmode
 * in the mui theme.
 */
const muiLightmodeOverride = createPaletteOverride(
    primary, secondary, success, warning, error, info
)

export default muiLightmodeOverride