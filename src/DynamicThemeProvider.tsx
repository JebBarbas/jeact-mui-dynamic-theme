import React from 'react'
import { 
    CssBaseline, 
    ThemeProvider, 
    useMediaQuery 
} from '@mui/material'

import { useLocalStorage } from '@jeact/hooks' // Very useful hook :)
import createOverridedTheme from './utils/createOverridedTheme'

// Types
import type { ColorScheme, DynamicThemeProviderProps } from './types'
import type { PaletteMode } from '@mui/material'


// Context Creation
export const contextDefaultValue = {
    appColorScheme: 'default' as ColorScheme,
    theme: createOverridedTheme('light'),
    setDark: () => {0},
    setDefault: () => {0},
    setLight: () => {0}
}
export const DynamicThemeContext = React.createContext(contextDefaultValue)

// Provider
const DynamicThemeProvider:React.FC<DynamicThemeProviderProps> = (props) => {
    const [appColorScheme, setAppColorScheme] = useLocalStorage<ColorScheme>(
        props.localStorageKey ?? '@jeact/mui-dynamic-theme/appColorScheme', 
        'default'
    )

    const deviceWantsDark = useMediaQuery('(prefers-color-scheme: dark)')

    const convertColorSchemeToPaletteMode = (colorScheme:ColorScheme):PaletteMode => {
        if(colorScheme === 'light' || colorScheme === 'dark'){
            return colorScheme as PaletteMode
        }
        else if(colorScheme === 'default'){
            return deviceWantsDark ? 'dark' : 'light'
        }
        else{
            return 'light'
        }
    }

    const theme = createOverridedTheme(
        convertColorSchemeToPaletteMode(appColorScheme),
        props.overrides,
        props.customColors
    )

    const setDefault = () => setAppColorScheme('default')
    const setLight = () => setAppColorScheme('light')
    const setDark = () => setAppColorScheme('dark')

    // Provider final value
    const value = {
        appColorScheme,
        theme,
        setDefault,
        setLight,
        setDark
    }

    return (
        <DynamicThemeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </DynamicThemeContext.Provider>
    )
}

export default DynamicThemeProvider