import type { ThemeOptions } from '@mui/material'

export default function createPaletteOverride(
    primary?: string,
    secondary?: string,
    success?: string,
    warning?: string,
    error?: string,
    info?: string
):ThemeOptions {
    return {
        palette: {
            ...(primary ? {primary: {main: primary}} : undefined),
            ...(secondary ? {secondary: {main: secondary}} : undefined),
            ...(success ? {success: {main: success}} : undefined),
            ...(warning ? {warning: {main: warning}} : undefined),
            ...(error ? {error: {main: error}} : undefined),
            ...(info ? {info: {main: info}} : undefined)
        }
    }
}