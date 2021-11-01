//import type { CustomColorsOptions } from '../types'
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
//import createCustomPalette from './createCustomPalette'
//import base from '../customColors/base'
export default function createOverridedTheme(mode, overrides) {
    var overrider = {};
    //const customPalette = createCustomPalette(deepmerge(base, customColors))
    var fillMode = { palette: { mode: mode, /*...customPalette*/ } };
    if (overrides) {
        if (Array.isArray(overrides)) {
            overrides.forEach(function (override) {
                overrider = deepmerge(overrider, override);
            });
        }
        else {
            overrider = overrides;
        }
    }
    overrider = deepmerge(overrider, fillMode);
    return createTheme(overrider);
}
//# sourceMappingURL=createOverridedTheme.js.map