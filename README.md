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

WARNING: In previous versions, overrides prop were to override the colors, but now, to try follow material ui
rules, there are some changes, and, if you want to change the primary, secondary, success... etc. colors, you must
use the newPalettes prop. You can see it below.

If you want to change something from the original palette, you can use the `overrides` property, it accepts an object
of type MUI `ThemeOptions` (or an array of them). (Consider that if you want to change the colors, you must use
property newPalettes).

```jsx
import { DynamicThemeProvider } from '@jeact/mui-dynamic-theme'

// TODO: Create some screen that uses MUI components
import Screen from './Screen'

// TODO: If you want to override something, like the Typography, breakpoints, etc, this goes here
const typographyOverrider = {...}
const breakpointsOverrider = {...}

const App = () => {
    return (
        <DynamicThemeProvider overrides={[typographyOverrider, breakpointsOverrider]}>
            <Screen>
        </DynamicThemeProvider>
    )
}
```

## Changing Palette Colors

In versions 2.0 and upper, there is an easier way to change the palette colors (and even this ones change
when the darkmode is active), now you can only change the color with one of the built-in MUI colors, of the
MaterialUI colors from `@jeact/colors`, to make this, import the color object of your preference and put it
in the newPalettes property.

```jsx
import { DynamicThemeProvider } from '@jeact/mui-dynamic-theme'
import { red, purple } from '@mui/material/colors'
import { MaterialUI } from '@jeact/colors'

// TODO: Create some screen that uses MUI components
import Screen from './Screen'

const App = () => {
    return (
        <DynamicThemeProvider newPalettes={{primary: red, secondary: purple, success: MaterialUI.blue}}>
            <Screen>
        </DynamicThemeProvider>
    )
}
```

As the same case as overrides, `newPalettes` also accepts an array, this is awesome because, for example, if
you want to use the `bootstrapPalette` (gray to secondary and yellow to warning), and you also want the
color `pink` to be your primary, you can but this two in an array.

```jsx
import { DynamicThemeProvider, bootstrapPalette } from '@jeact/mui-dynamic-theme'
import { pink } from '@mui/material/colors'

// TODO: Create some screen that uses MUI components
import Screen from './Screen'

const App = () => {
    return (
        <DynamicThemeProvider newPalettes={[bootstrapPalette, {primary: pink} ]}>
            <Screen>
        </DynamicThemeProvider>
    )
}
```

***NOTE: Be aware of put the bootstrapPalette first, otherwise, the bootstrap primary color will override
your pink primary color.***