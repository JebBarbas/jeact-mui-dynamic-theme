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
import { MaterialUI } from '@jeact/colors';
/**
 * Use this override to avoid the change of colors when toggling from lightmode to darkmode
 * in the mui theme.
 */
var muiLightmodeOverride = __assign({}, MaterialUI.defaultThemeColors);
export default muiLightmodeOverride;
//# sourceMappingURL=muiLightmodeOverride.js.map