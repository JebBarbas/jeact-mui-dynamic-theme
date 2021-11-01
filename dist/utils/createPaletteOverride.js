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
export default function createPaletteOverride(primary, secondary, success, warning, error, info) {
    return {
        palette: __assign(__assign(__assign(__assign(__assign(__assign({}, (primary ? { primary: { main: primary } } : undefined)), (secondary ? { secondary: { main: secondary } } : undefined)), (success ? { success: { main: success } } : undefined)), (warning ? { warning: { main: warning } } : undefined)), (error ? { error: { main: error } } : undefined)), (info ? { info: { main: info } } : undefined))
    };
}
//# sourceMappingURL=createPaletteOverride.js.map