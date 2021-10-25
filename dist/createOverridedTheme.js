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
export default function createOverridedTheme(mode, paletteOverrides) {
    var overrider = {};
    var colors = {};
    if (paletteOverrides) {
        if (Array.isArray(paletteOverrides)) {
            paletteOverrides.forEach(function (paletteOverride) {
                colors = __assign(__assign({}, colors), paletteOverride);
            });
        }
        else {
            colors = paletteOverrides;
        }
        overrider = {
            palette: __assign(__assign(__assign(__assign(__assign(__assign({}, (colors.primary ? { primary: { main: colors.primary } } : undefined)), (colors.secondary ? { secondary: { main: colors.secondary } } : undefined)), (colors.success ? { success: { main: colors.success } } : undefined)), (colors.error ? { error: { main: colors.error } } : undefined)), (colors.warning ? { warning: { main: colors.warning } } : undefined)), (colors.info ? { info: { main: colors.info } } : undefined))
        };
    }
    overrider = {
        palette: __assign(__assign({}, overrider.palette), { mode: mode })
    };
    return createTheme(overrider);
}
//# sourceMappingURL=createOverridedTheme.js.map