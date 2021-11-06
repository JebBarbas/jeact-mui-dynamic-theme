import type { NewPalette } from '../types'
import { MaterialUI } from '@jeact/colors'

const {
    blue, 
    grey, 
    red, 
    cyan,
    green,
    yellow
} = MaterialUI

/**
 * Override the MUI default colors with the Bootstrap theme colors.
 */
const bootstrapOverride:NewPalette = {
    primary: blue,
    secondary: grey,
    error: red,
    info: cyan,
    success: green,
    warning: yellow
}

export default bootstrapOverride