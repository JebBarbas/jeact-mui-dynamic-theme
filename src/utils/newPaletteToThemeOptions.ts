import type { ThemeOptions, PaletteMode } from '@mui/material'
import type { MUIColorObjectKey, NewPalette } from '../types'

import extractColorFromMUIColorObject from './extractColorFromMUIColorObject'

// "Rename" function to save space
const color = extractColorFromMUIColorObject

export default function newPaletteToThemeOptions(
    mode:PaletteMode, 
    newPalette?:NewPalette,
    lightShade?: MUIColorObjectKey,
    darkShade?: MUIColorObjectKey
):ThemeOptions {
    if(newPalette){
        // "Rename" to save space
        const l = lightShade
        const d = darkShade

        return {
            palette: {
                mode: mode,
                ...(newPalette.primary ? {primary: color(newPalette.primary, mode, l, d)} : undefined),
                ...(newPalette.secondary ? {secondary: color(newPalette.secondary, mode, l, d)} : undefined),
                ...(newPalette.success ? {success: color(newPalette.success, mode, l, d)} : undefined),
                ...(newPalette.warning ? {warning: color(newPalette.warning, mode, l, d)} : undefined),
                ...(newPalette.error ? {error: color(newPalette.error, mode, l, d)} : undefined),
                ...(newPalette.info ? {info: color(newPalette.info, mode, l, d)} : undefined)
            }
        }
    }
    else{
        return {
            palette: {
                mode: mode
            }
        }
    }
}