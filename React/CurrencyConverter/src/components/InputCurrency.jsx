export default function InputCurrency({
    fromCurrency /* = `usd` */,
    toCurrency,
    currencies,
    setFromCurrency,
    setToCurrency,
    selectName,
    forLabel,
}) {
    return (
        <div className="w-full h-1/3 p-3 bg-white grid grid-cols-2 grid-rows-2 justify-between rounded-xl">
            <label
                htmlFor={forLabel}
                className="text-gray-700 text-xl justify-self-start"
            >
                {forLabel === `from` ? "From" : "To"}
            </label>
            <p className="text-gray-700 text-xl justify-self-end">
                Currency Type
            </p>
            <input
                className="h-5/6 w-9/6 px-2 bg-blue-200 hover:bg-blue-300 focus:bg-blue-300 self-center outline-none text-xl rounded-xl "
                type="number"
                id={forLabel}
            />
            {
                <select
                    className="bg-blue-200 w-4/12 h-5/6 hover:bg-blue-300 focus:bg-blue-300 self-center justify-self-end rounded-xl px-2 cursor-pointer outline-none"
                    name={selectName}
                    value={
                        selectName === `from-select` ? fromCurrency : toCurrency
                    }
                    onChange={(e) => {
                        selectName === `from-select`
                            ? setFromCurrency(e.target.value)
                            : setToCurrency(e.target.value);
                    }}
                >
                    {currencies.map((currency, index) => {
                        return (
                            <option value={currency} key={index}>
                                {currency.toUpperCase()}
                            </option>
                        );
                    })}
                </select>
            }
        </div>
    );
}
