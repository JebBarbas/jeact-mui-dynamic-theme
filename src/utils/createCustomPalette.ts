import type { CustomColorsOptions } from '../types'
import type { PaletteOptions } from '@mui/material'

export default function createCustomPalette(customColors:CustomColorsOptions):PaletteOptions {
    const paletteOptions:PaletteOptions = {
        ...(customColors.custom0 ? {custom0: {main: customColors.custom0}} : undefined),
        ...(customColors.custom1 ? {custom1: {main: customColors.custom1}} : undefined),
        ...(customColors.custom2 ? {custom2: {main: customColors.custom2}} : undefined),
        ...(customColors.custom3 ? {custom3: {main: customColors.custom3}} : undefined),

        ...(customColors.custom4 ? {custom4: {main: customColors.custom4}} : undefined),
        ...(customColors.custom5 ? {custom5: {main: customColors.custom5}} : undefined),
        ...(customColors.custom6 ? {custom6: {main: customColors.custom6}} : undefined),
        ...(customColors.custom7 ? {custom7: {main: customColors.custom7}} : undefined),

        ...(customColors.custom8 ? {custom8: {main: customColors.custom8}} : undefined),
        ...(customColors.custom9 ? {custom9: {main: customColors.custom9}} : undefined),
        ...(customColors.customA ? {customA: {main: customColors.customA}} : undefined),
        ...(customColors.customB ? {customB: {main: customColors.customB}} : undefined),

        ...(customColors.customC ? {customC: {main: customColors.customC}} : undefined),
        ...(customColors.customD ? {customD: {main: customColors.customD}} : undefined),
        ...(customColors.customE ? {customE: {main: customColors.customE}} : undefined),
        ...(customColors.customF ? {customF: {main: customColors.customF}} : undefined),
    }

    return paletteOptions
}