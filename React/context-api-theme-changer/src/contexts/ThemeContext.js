import { createContext, useContext } from "react";

//$ Unnecessary complication of context
/* export const ThemeContext = createContext({
    themeMode: `light`,
    darkTheme() {},
    lightTheme() {},
}); */

//$ Simple creation of context for a theme changer
export const ThemeContext = createContext();

/* export function useTheme() {
    return useContext(ThemeContext);
} */
