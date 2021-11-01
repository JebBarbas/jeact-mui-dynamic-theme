import { MaterialUI } from '@jeact/colors';
import createPaletteOverride from '../utils/createPaletteOverride';
var _a = MaterialUI.defaultThemeColors, primary = _a.primary, secondary = _a.secondary, success = _a.success, warning = _a.warning, error = _a.error, info = _a.info;
/**
 * Use this override to avoid the change of colors when toggling from lightmode to darkmode
 * in the mui theme.
 */
var muiLightmodeOverride = createPaletteOverride(primary, secondary, success, warning, error, info);
export default muiLightmodeOverride;
//# sourceMappingURL=muiLightmodeOverride.js.map