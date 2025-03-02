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
                <InputCurrency />
                <button
                    className="w-full h-1/6  text-white text-2xl rounded-xl cursor-pointer bg-gradient-to-r from-blue-800  to-blue-600  hover:bg-gradient-to-r hover:from-blue-700  hover:to-blue-500"
                    type="button"
                >
                    Convert USD to INR
                </button>
            </section>
        </main>
    );
}
