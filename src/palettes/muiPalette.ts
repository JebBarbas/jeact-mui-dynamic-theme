import type { NewPalette } from '../types'
import { MaterialUI } from '@jeact/colors'

const {
    blue,
    purple,
    red,
    lightBlue,
    green,
    orange
} = MaterialUI

/**
 * The same MUI colors, but with this the colors will use its 100% power
 */
const muiPalette:NewPalette = {
    primary: blue,
    secondary: purple,
    error: red,
    info: lightBlue,
    success: green,
    warning: orange
}

export default muiPalette