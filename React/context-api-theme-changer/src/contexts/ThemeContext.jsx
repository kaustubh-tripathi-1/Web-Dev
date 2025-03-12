import { useState } from "react";
import { createContext, useContext } from "react";

//$ Simple creation of context for a theme changer
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(`light`);

    /* function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === `light` ? `dark` : `light`));
    } */

    return (
        <ThemeContext.Provider value={{ theme, setTheme /* , toggleTheme */ }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
