import type { MUIColorObject, MUIColorObjectKey } from '../types'
import type { PaletteMode, PaletteColorOptions } from '@mui/material'

export default function extractColorFromMUIColorObject(
    colorObject:MUIColorObject, 
    mode:PaletteMode,
    lightShade?:MUIColorObjectKey,
    darkShade?:MUIColorObjectKey,
):PaletteColorOptions{
    const light = lightShade ?? 600
    const dark = darkShade ?? 300
    
    return {
        main: (mode == 'dark' ? colorObject[dark] : colorObject[light])
    }
}