import type { CustomColorsOptions } from '../types'

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

const base:CustomColorsOptions = {
    custom0: black,
    custom1: black,
    custom2: black,
    custom3: black,
    custom4: black,
    custom5: black,
    custom6: black,
    custom7: black,
    custom8: black,
    custom9: black,
    customA: black,
    customB: black,
    customC: black,
    customD: black,
    customE: black,
    customF: black,
}

export default base