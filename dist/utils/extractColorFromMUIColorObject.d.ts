import type { MUIColorObject, MUIColorObjectKey } from '../types';
import type { PaletteMode, PaletteColorOptions } from '@mui/material';
export default function extractColorFromMUIColorObject(colorObject: MUIColorObject, mode: PaletteMode, lightShade?: MUIColorObjectKey, darkShade?: MUIColorObjectKey): PaletteColorOptions;
