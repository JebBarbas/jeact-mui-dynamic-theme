# @jeact/mui-dynamic-theme

Adds dynamism to the MUI theme, like dark-mode, theme togglers and more colors.

Currently, this module is in construction, so, although the theme togglers and the custom colors are not
available yet, you can use this module to easily override the MUI theme, apply the CssBaseline and
toggle between light and darkmode.

## Instalation

```
npm i @jeact/mui-dynamic-theme
```

## Use

Just import the `<DynamicThemeProvider>` component and use it as the normal ThemeProvider from MUI (DynamicThemeProvider
has inside the MUI ThemeProvider and the CssBaseline so you musn't put them inside).

```jsx
import { DynamicThemeProvider } from '@jeact/mui-dynamic-theme'
// TODO: Create some screen that uses MUI components
import Screen from './Screen'

const App = () => {
    return (
        <DynamicThemeProvider>
            <Screen>
        </DynamicThemeProvider>
    )
}
```

Now your MUI components will use the new theme. If your browser preffers the dark color scheme (you can run 
`matchMedia('(prefers-color-scheme: dark)')` to check this), you will see the dark theme immediatly, but
if not, you can change the theme manually.

## Changing Light and Dark theme

You can use the hook `useDynamicTheme` in any component inside the `DynamicThemeProvider` to use some functions
in the theme.

```jsx
import { useDynamicTheme } from '@jeact/mui-dynamic-theme'

const ThemeToggler = () => {
    const {
        appColorScheme,
        setDark,
        setLight,
        setDefault
    } = useDynamicTheme()

    return (
        <div>
            Current Color Scheme: {appColorScheme}
            <button onClick={setDark}>Set Darkmode</button>
            <button onClick={setLight}>Set Lightmode</button>
            <button onClick={setDefault}>Return to default</button>
        </div>
    )
}
```

***About Default:*** Default uses the media query `(prefers-color-scheme: dark)` to apply the theme, so, if this
media query matches in your browser, mui-dynamic-theme will use the dark theme as default, if the media doesn't match,
it uses the light theme.

## Overriding Theme

If you want to change something from the original palette, you can use the `overrides` property, it accepts an object
of type MUI `ThemeOptions` (or an array of them). mui-dynamic-theme has its own overrides, like `bootstrapOverride`
(the colors of bootstrap), so, if you want, for instance, to use the colors of bootstrap, and make the `primary`
color '#cc0000', you can make it like this:

```jsx
import { DynamicThemeProvider, bootstrapOverrider, createPaletteOverride } from '@jeact/mui-dynamic-theme'
// TODO: Create some screen that uses MUI components
import Screen from './Screen'

const App = () => {
    return (
        <DynamicThemeProvider overrides={[bootstrapOverrider, createPaletteOverride('#cc0000')]}>
            <Screen>
        </DynamicThemeProvider>
    )
}
```

***About `createPaletteOverride`***: It creates an `ThemeOptions` with only a palette, it has 6 optional
parameters that are the colors you want to override, in the next order: primary, secondary, success, warning, error
and info.

The available overrides are: 
- `bootstrapOverride`: Overrides MUI main colors with the bootstrap ones (for example, the MUI secondary color is a 
purple, with this, the new secondary color will be the Bootstrap one).
- `muiLightmodeOverride`: Normally when you toggle from lightmode to darkmode, the colors change, so, if you don't 
want that to happen, use this override to have always the lightmode colors.
- `muiDarkmodeOverride`: Use this override to have always the darkmode colors.