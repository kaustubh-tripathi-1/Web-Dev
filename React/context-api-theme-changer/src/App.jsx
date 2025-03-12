import { useState, createContext, useEffect } from "react";
import { ThemeContext /* , useTheme */ } from "./contexts/ThemeContext";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

export default function App() {
    const [theme, setTheme] = useState(`light`);

    /* function changeTheme() {
        setTheme((prevTheme) => (prevTheme === `light` ? `dark` : `light`));
    } */

    useEffect(() => {
        const html = document.querySelector(`html`);
        html.classList.remove(`light`, `dark`);
        html.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <main className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </main>
        </ThemeContext.Provider>
    );
}
