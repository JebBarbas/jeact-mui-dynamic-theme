var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import createCustomPalette from './createCustomPalette';
import base from '../customColors/base';
export default function createOverridedTheme(mode, overrides, customColors) {
    var overrider = {};
    var customPalette = createCustomPalette(deepmerge(base, customColors));
    var fillMode = { palette: __assign({ mode: mode }, customPalette) };
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