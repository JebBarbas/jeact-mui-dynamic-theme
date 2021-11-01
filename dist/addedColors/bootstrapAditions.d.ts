import type { PaletteOptions } from '@mui/material';
declare module '@mui/material/styles' {
    interface Palette {
        bPrimary: Palette['primary'];
        bSecondary: Palette['primary'];
        bSuccess: Palette['primary'];
        bWarning: Palette['primary'];
        bDanger: Palette['primary'];
        bInfo: Palette['primary'];
        bLight: Palette['primary'];
        bDark: Palette['primary'];
    }
    interface PaletteOptions {
        bPrimary?: PaletteOptions['primary'];
        bSecondary?: PaletteOptions['primary'];
        bSuccess?: PaletteOptions['primary'];
        bWarning?: PaletteOptions['primary'];
        bDanger?: PaletteOptions['primary'];
        bInfo?: PaletteOptions['primary'];
        bLight?: PaletteOptions['primary'];
        bDark?: PaletteOptions['primary'];
    }
}
declare const bootstrapAditions: PaletteOptions;
export default bootstrapAditions;
