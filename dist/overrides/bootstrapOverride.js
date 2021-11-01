import { Bootstrap } from '@jeact/colors';
import createPaletteOverride from '../utils/createPaletteOverride';
var _a = Bootstrap.themeColors, primary = _a.primary, secondary = _a.secondary, danger = _a.danger, info = _a.info, success = _a.success, warning = _a.warning;
/**
 * Override the MUI default colors with the Bootstrap theme colors.
 */
var bootstrapOverride = createPaletteOverride(primary, secondary, success, warning, danger, info);
export default bootstrapOverride;
//# sourceMappingURL=bootstrapOverride.js.map