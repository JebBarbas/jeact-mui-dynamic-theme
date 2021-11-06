import type { NewPalette } from '../types'

import { deepmerge } from '@mui/utils'

export default function deepmergeNewPalettes(newPalettes?:NewPalette|NewPalette[]):NewPalette{
    if(newPalettes){
        let finalNewPalette:NewPalette = {}

        if(Array.isArray(newPalettes)){
            newPalettes.forEach(newPalette => {
                finalNewPalette = deepmerge(finalNewPalette, newPalette)
            })
        }
        else{
            finalNewPalette = deepmerge(finalNewPalette, newPalettes)
        }

        return finalNewPalette
    }
    return {}
}