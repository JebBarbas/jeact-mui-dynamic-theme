import { useContext } from "react";
import { DynamicThemeContext, contextDefaultValue } from "./DynamicThemeProvider";

export default function useDynamicTheme(){
    return useContext(DynamicThemeContext) as typeof contextDefaultValue
}