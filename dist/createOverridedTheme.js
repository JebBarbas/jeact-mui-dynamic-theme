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
export default function createOverridedTheme(mode, overrides) {
    var finalOverrider = {};
    if (Array.isArray(overrides)) {
        overrides.forEach(function (override) {
            finalOverrider = __assign(__assign(__assign({}, finalOverrider), override), { palette: __assign(__assign(__assign({}, finalOverrider.palette), override.palette), { mode: mode }), mixins: __assign(__assign({}, finalOverrider.mixins), override.mixins), transitions: __assign(__assign({}, finalOverrider.transitions), override.transitions), typography: __assign(__assign({}, finalOverrider.typography), override.typography) });
        });
    }
    else {
        finalOverrider = __assign(__assign({}, overrides), { palette: __assign(__assign({}, overrides === null || overrides === void 0 ? void 0 : overrides.palette), { mode: mode }) });
    }
    return createTheme(finalOverrider);
}
//# sourceMappingURL=createOverridedTheme.js.map