import { Bootstrap } from '@jeact/colors'
import createPaletteOverride from '../utils/createPaletteOverride'

const {
    primary, 
    secondary, 
    danger, 
    info,
    success,
    warning
} = Bootstrap.themeColors

/**
 * Override the MUI default colors with the Bootstrap theme colors.
 */
const bootstrapOverride = createPaletteOverride(
    primary, secondary, success, warning, danger, info
)

export default bootstrapOverride