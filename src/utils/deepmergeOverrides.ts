import type { ThemeOptions } from '@mui/material'

import { deepmerge } from '@mui/utils'

export default function deepmergeOverrides(overrides?:ThemeOptions|ThemeOptions[]):ThemeOptions{
    if(overrides){
        let finalOverride:ThemeOptions = {}

        if(Array.isArray(overrides)){
            overrides.forEach(override => {
                finalOverride = deepmerge(finalOverride, override)
            })
        }
        else{
            finalOverride = deepmerge(finalOverride, overrides)
        }

        return finalOverride
    }
    return {}
}