import { createTheme } from '@mui/material'
import type { Theme, PaletteMode, ThemeOptions } from '@mui/material'
import type { PaletteOverride } from './types'

export default function createOverridedTheme(mode:PaletteMode, paletteOverrides?: PaletteOverride | PaletteOverride[]):Theme {
    let overrider:ThemeOptions = {}
    let colors:PaletteOverride = {}

    if(paletteOverrides){
        if(Array.isArray(paletteOverrides)){
            paletteOverrides.forEach(paletteOverride => {
                colors = {
                    ...colors,
                    ...paletteOverride
                }
            })
        }
        else{
            colors = paletteOverrides           
        }

        overrider = {
            palette: {
                ...(colors.primary ? {primary: {main: colors.primary}} : undefined),
                ...(colors.secondary ? {secondary: {main: colors.secondary}} : undefined),
                ...(colors.success ? {success: {main: colors.success}} : undefined),
                ...(colors.error ? {error: {main: colors.error}} : undefined),
                ...(colors.warning ? {warning: {main: colors.warning}} : undefined),
                ...(colors.info ? {info: {main: colors.info}} : undefined)
            }
        }
    }

    overrider = {
        palette: {
            ...overrider.palette,
            mode: mode
        }
    }

    return createTheme(overrider)
}