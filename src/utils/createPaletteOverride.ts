import type { ThemeOptions } from '@mui/material'

export default function createPaletteOverride(
    primary: string,
    secondary: string,
    success: string,
    warning: string,
    error: string,
    info: string
):ThemeOptions {
    return {
        palette: {
            primary: {main: primary},
            secondary: {main: secondary},
            success: {main: success},
            warning: {main: warning},
            error: {main: error},
            info: {main: info},
        }
    }
}