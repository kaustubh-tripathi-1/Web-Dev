export default function InputCurrency({
    currencies = [],
    currencyData,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    selectName,
    forLabel,
    className = ``,
}) {
    /**
     * @param {Event} event
     */
    function handleOnChange(event) {
        const inputValue = event.target.value;

        if (inputValue === "") {
            if (forLabel === "from") {
                setFromAmount("");
                setToAmount("");
            } else {
                setToAmount("");
                setFromAmount("");
            }
            return;
        }

        const numericValue = Number(inputValue);
        if (isNaN(numericValue) || numericValue < 0) return;

        if (forLabel === "from") {
            setFromAmount(numericValue);
        } else {
            setToAmount(numericValue);
        }
    }

    function handleOnChangeSelect(e) {
        if (selectName === "from-select") {
            setFromCurrency(e.target.value);
        } else {
            setToCurrency(e.target.value);
        }
    }

    return (
        <div
            className={`w-full min-h-40 p-3 sm:p-4 bg-white/90 shadow-md grid grid-cols-2 grid-rows-2 justify-between rounded-xl $transition-all duration-300 ease-in-out hover:bg-white ${className}`}
        >
            <label
                htmlFor={forLabel}
                className="text-gray-700 text-base sm:text-xl font-medium animate-pulse sm:w-1/4"
            >
                {forLabel === `from` ? "From" : "To"}
            </label>
            <p className="text-gray-700 text-base sm:text-xl font-medium animate-fade-in justify-self-end">
                Currency Type
            </p>
            <input
                className="md:w-9/6 self-center w-full sm:w-7/6 h-10 sm:h-12 px-3 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 focus:ring-2 focus:ring-blue-400 outline-none text-base sm:text-xl rounded-lg transition-colors duration-200 ease-in-out"
                type="number"
                id={forLabel}
                value={forLabel === `from` ? fromAmount : toAmount}
                onChange={handleOnChange}
            />
            {
                <select
                    className="w-5/6 sm:w-5/12 h-10 sm:h-12 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 focus:ring-2 focus:ring-blue-400 outline-none text-base sm:text-lg rounded-xl px-2 cursor-pointer transition-colors duration-200 ease-in-out self-center justify-self-end"
                    name={selectName}
                    value={
                        selectName === `from-select` ? fromCurrency : toCurrency
                    }
                    onChange={handleOnChangeSelect}
                >
                    {currencies.map((currency) => {
                        return (
                            <option
                                value={currency}
                                key={currency}
                                className="text-base sm:text-lg"
                            >
                                {currency.toUpperCase()}
                            </option>
                        );
                    })}
                </select>
            }
        </div>
    );
}
