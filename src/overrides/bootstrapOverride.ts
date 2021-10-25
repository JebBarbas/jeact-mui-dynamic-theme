import type { PaletteOverride } from '../types'
import { Bootstrap } from '@jeact/colors'

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
const bootstrapOverride:PaletteOverride = {
    primary,
    secondary,
    error: danger,
    info,
    success,
    warning
}

export default bootstrapOverride