import { useEffect, useState } from "react";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo.js";
import InputCurrency from "./components/InputCurrency.jsx";
import swapIcon from "./assets/sort.png";

export default function App() {
    const [fromCurrency, setFromCurrency] = useState(`usd`);
    const [toCurrency, setToCurrency] = useState(`inr`);
    const [currencies, setCurrencies] = useState([]);
    const [currencyData, error] = useCurrencyInfo(fromCurrency);
    const [fromAmount, setFromAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    // const [showConvertedAmount, setShowConvertedAmount] = useState(false);

    useEffect(() => {
        if (currencyData) {
            setCurrencies(Object.keys(currencyData));
        }
    }, [currencyData]);

    console.log(`re-rendered`);

    return (
        <main className="h-full w-full bg-[url(./assets/bgImages/17454.jpg)] bg-cover bg-no-repeat bg-center opacity-100 flex justify-center items-center">
            <section className="h-8/12 w-7/12 md:w-5/12 p-7 flex flex-col justify-center items-center gap-4 rounded-2xl backdrop-blur-md">
                <InputCurrency
                    currencies={currencies}
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    setFromCurrency={setFromCurrency}
                    setToCurrency={setToCurrency}
                    selectName="from-select"
                    forLabel="from"
                />
                <button
                    className="w-22 h-10 bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 outline-none text-white text-md absolute top-5/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl cursor-pointer border-2 border-amber-300 hover:border-amber-500"
                    type="button"
                >
                    <img
                        className=" w-5 inline -mt-1"
                        src={swapIcon}
                        alt="swap-icon"
                    />{" "}
                    Swap
                </button>
                <InputCurrency
                    currencies={currencies}
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    setFromCurrency={setFromCurrency}
                    setToCurrency={setToCurrency}
                    selectName="to-select"
                    forLabel="to"
                />
                <button
                    className="w-full h-1/6  text-white text-2xl rounded-xl cursor-pointer bg-gradient-to-r from-blue-700  to-blue-500  hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-700 transform hover:scale-105 focus:scale-105 transition-transform ease-in-out duration-500 outline-none"
                    type="button"
                >
                    Convert USD to INR
                </button>
                {error && (
                    <p className="w-full h-fit text-lg text-center text-red-600 font-semibold bg-amber-300 rounded-lg">
                        There is an issue with the API. Please Try again
                        later...
                    </p>
                )}
                {/* {showConvertedAmount && (
                    <p className="w-full h-fit text-lg text-center text-white font-semibold bg-blue-600 rounded-lg">
                        {fromAmount} {fromCurrency.toUpperCase()} ={" "}
                        {convertedAmount}
                    </p>
                )}
                {} */}
            </section>
        </main>
    );
}
