import type { NewPalette } from '../types'
import { MaterialUI } from '@jeact/colors'

const {
    blue, 
    grey, 
    red, 
    cyan,
    green,
    amber
} = MaterialUI

/**
 * Override the MUI default colors with the Bootstrap theme colors.
 */
const bootstrapPalette:NewPalette = {
    primary: blue,
    secondary: grey,
    error: red,
    info: cyan,
    success: green,
    warning: amber
}

export default bootstrapPalette