import { useState } from "react";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo.js";
import InputCurrency from "./components/InputCurrency.jsx";

export default function App() {
    const [currencyData, error] = useCurrencyInfo(null);

    if (!error) {
    }

    return (
        <main className="h-full w-full bg-[url(./assets/bgImages/17454.jpg)] bg-cover bg-no-repeat bg-center opacity-100 flex justify-center items-center">
            <section className="h-8/12 w-7/12 md:w-5/12 p-7 flex flex-col justify-center items-center gap-4 rounded-2xl backdrop-blur-md">
                <InputCurrency />
                <button
                    className="w-20 h-10  bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 outline-none text-white text-md absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl cursor-pointer border-2 border-amber-300 hover:border-amber-500"
                    type="button"
                >
                    Swap
                </button>
                <InputCurrency />
                <button
                    className="w-full h-1/6  text-white text-2xl rounded-xl cursor-pointer bg-gradient-to-r from-blue-700  to-blue-500  hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-700 transform hover:scale-105 focus:scale-105 transition-transform ease-in-out duration-500 outline-none"
                    type="button"
                >
                    Convert USD to INR
                </button>
            </section>
        </main>
    );
}
