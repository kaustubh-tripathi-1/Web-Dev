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
    const [toAmount, setToAmount] = useState(0);

    useEffect(() => {
        if (currencyData) {
            setCurrencies(Object.keys(currencyData));
        }
    }, [currencyData]);

    function swapFromAndTo() {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    }

    console.log(`re-rendered`);

    return (
        <main className="h-full w-full bg-[url(./assets/bgImages/17454.jpg)] bg-cover bg-no-repeat bg-center opacity-100 flex justify-center items-center">
            <section className="h-8/12 w-7/12 md:w-5/12 p-7 flex flex-col justify-center items-center gap-8 rounded-2xl backdrop-blur-md">
                <InputCurrency
                    currencyData={currencyData}
                    currencies={currencies}
                    fromCurrency={fromCurrency}
                    setFromCurrency={setFromCurrency}
                    toCurrency={toCurrency}
                    setToCurrency={setToCurrency}
                    fromAmount={fromAmount}
                    setFromAmount={setFromAmount}
                    toAmount={toAmount}
                    setToAmount={setToAmount}
                    selectName="from-select"
                    forLabel="from"
                />
                <button
                    className="w-28 h-15 bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 outline-none text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-xl cursor-pointer border-2 border-amber-300 hover:border-amber-500"
                    type="button"
                    onClick={swapFromAndTo}
                >
                    <img
                        className=" w-5 inline -mt-1"
                        src={swapIcon}
                        alt="swap-icon"
                    />{" "}
                    Swap
                </button>
                <InputCurrency
                    currencyData={currencyData}
                    currencies={currencies}
                    fromCurrency={fromCurrency}
                    setFromCurrency={setFromCurrency}
                    toCurrency={toCurrency}
                    setToCurrency={setToCurrency}
                    toAmount={toAmount}
                    setToAmount={setToAmount}
                    fromAmount={fromAmount}
                    setFromAmount={setFromAmount}
                    selectName="to-select"
                    forLabel="to"
                />
                {/* <button
                    className="w-full h-1/6  text-white text-2xl rounded-xl cursor-pointer bg-gradient-to-r from-blue-700  to-blue-500  hover:bg-gradient-to-r hover:from-blue-800 hover:via-blue-500 hover:to-blue-700 transform hover:scale-105 focus:scale-105 transition-transform ease-in-out duration-500 outline-none"
                    type="button"
                >
                    Convert {fromCurrency.toUpperCase()} to{" "}
                    {toCurrency.toUpperCase()}
                </button> */}
                {error && (
                    <p className="w-full h-fit text-lg text-center text-red-600 font-semibold bg-amber-300 rounded-lg">
                        {error}
                    </p>
                )}
            </section>
        </main>
    );
}
