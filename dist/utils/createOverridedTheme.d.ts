import type { Theme, PaletteMode, ThemeOptions } from '@mui/material';
import type { NewPalette, MUIColorObjectKey } from '../types';
export default function createOverridedTheme(mode: PaletteMode, overrides?: ThemeOptions | ThemeOptions[], newPalettes?: NewPalette | NewPalette[], lightShade?: MUIColorObjectKey, darkShade?: MUIColorObjectKey): Theme;
