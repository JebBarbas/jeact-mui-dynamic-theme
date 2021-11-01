import type { PaletteOptions } from '@mui/material'

const black = '#000000'

declare module '@mui/material/styles' {
    interface Palette {
        custom0: Palette['primary']
        custom1: Palette['primary']
        custom2: Palette['primary']
        custom3: Palette['primary']
        custom4: Palette['primary']
        custom5: Palette['primary']
        custom6: Palette['primary']
        custom7: Palette['primary']
        custom8: Palette['primary']
        custom9: Palette['primary']
        customA: Palette['primary']
        customB: Palette['primary']
        customC: Palette['primary']
        customD: Palette['primary']
        customE: Palette['primary']
        customF: Palette['primary']
    }

    interface PaletteOptions {
        custom0?: PaletteOptions['primary']
        custom1?: PaletteOptions['primary']
        custom2?: PaletteOptions['primary']
        custom3?: PaletteOptions['primary']
        custom4?: PaletteOptions['primary']
        custom5?: PaletteOptions['primary']
        custom6?: PaletteOptions['primary']
        custom7?: PaletteOptions['primary']
        custom8?: PaletteOptions['primary']
        custom9?: PaletteOptions['primary']
        customA?: PaletteOptions['primary']
        customB?: PaletteOptions['primary']
        customC?: PaletteOptions['primary']
        customD?: PaletteOptions['primary']
        customE?: PaletteOptions['primary']
        customF?: PaletteOptions['primary']
    }
}

const base:PaletteOptions = {
    custom0: {main: black},
    custom1: {main: black},
    custom2: {main: black},
    custom3: {main: black},
    custom4: {main: black},
    custom5: {main: black},
    custom6: {main: black},
    custom7: {main: black},
    custom8: {main: black},
    custom9: {main: black},
    customA: {main: black},
    customB: {main: black},
    customC: {main: black},
    customD: {main: black},
    customE: {main: black},
    customF: {main: black},
}

export default base