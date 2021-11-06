var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import styled from 'styled-components';
import { useLocalStorage } from '@jeact/hooks'; // Very useful hook :)
import createOverridedTheme from './utils/createOverridedTheme';
// Context Creation
export var contextDefaultValue = {
    appColorScheme: 'default',
    theme: createOverridedTheme('light'),
    setDark: function () { 0; },
    setDefault: function () { 0; },
    setLight: function () { 0; }
};
export var DynamicThemeContext = React.createContext(contextDefaultValue);
var DynamicSelectionDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    & ::selection {\n        background: var(--jmdt-bg);\n        color: var(--jmdt-fg)\n    }\n"], ["\n    & ::selection {\n        background: var(--jmdt-bg);\n        color: var(--jmdt-fg)\n    }\n"
    // Provider
])));
// Provider
var DynamicThemeProvider = function (props) {
    var _a;
    var _b = useLocalStorage((_a = props.localStorageKey) !== null && _a !== void 0 ? _a : '@jeact/mui-dynamic-theme/appColorScheme', 'default'), appColorScheme = _b[0], setAppColorScheme = _b[1];
    var deviceWantsDark = useMediaQuery('(prefers-color-scheme: dark)');
    var convertColorSchemeToPaletteMode = function (colorScheme) {
        if (colorScheme === 'light' || colorScheme === 'dark') {
            return colorScheme;
        }
        else if (colorScheme === 'default') {
            return deviceWantsDark ? 'dark' : 'light';
        }
        else {
            return 'light';
        }
    };
    var theme = createOverridedTheme(convertColorSchemeToPaletteMode(appColorScheme), props.overrides, props.newPalettes, props.lightShade, props.darkShade, props.selectionShade, props.localization);
    var setDefault = function () { return setAppColorScheme('default'); };
    var setLight = function () { return setAppColorScheme('light'); };
    var setDark = function () { return setAppColorScheme('dark'); };
    // Provider final value
    var value = {
        appColorScheme: appColorScheme,
        theme: theme,
        setDefault: setDefault,
        setLight: setLight,
        setDark: setDark
    };
    return (React.createElement(DynamicThemeContext.Provider, { value: value },
        React.createElement(ThemeProvider, { theme: theme },
            React.createElement(CssBaseline, null),
            React.createElement(DynamicSelectionDiv, null, props.children))));
};
export default DynamicThemeProvider;
var templateObject_1;
//# sourceMappingURL=DynamicThemeProvider.js.map