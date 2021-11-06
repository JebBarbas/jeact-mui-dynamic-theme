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
import extractColorFromMUIColorObject from './extractColorFromMUIColorObject';
// "Rename" function to save space
var color = extractColorFromMUIColorObject;
export default function newPaletteToThemeOptions(mode, newPalette, lightShade, darkShade) {
    if (newPalette) {
        // "Rename" to save space
        var l = lightShade;
        var d = darkShade;
        return {
            palette: __assign(__assign(__assign(__assign(__assign(__assign({ mode: mode }, (newPalette.primary ? { primary: color(newPalette.primary, mode, l, d) } : undefined)), (newPalette.secondary ? { secondary: color(newPalette.secondary, mode, l, d) } : undefined)), (newPalette.success ? { success: color(newPalette.success, mode, l, d) } : undefined)), (newPalette.warning ? { warning: color(newPalette.warning, mode, l, d) } : undefined)), (newPalette.error ? { error: color(newPalette.error, mode, l, d) } : undefined)), (newPalette.info ? { info: color(newPalette.info, mode, l, d) } : undefined))
        };
    }
    else {
        return {
            palette: {
                mode: mode
            }
        };
    }
}
//# sourceMappingURL=newPaletteToThemeOptions.js.map