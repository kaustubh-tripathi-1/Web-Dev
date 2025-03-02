export default function InputCurrency(props) {
    return (
        <div className="w-full h-1/3 p-3 bg-white grid grid-cols-2 grid-rows-2 justify-between rounded-xl">
            <span className="text-gray-700 text-xl justify-self-start">
                From
            </span>
            <span className="text-gray-700 text-xl justify-self-end">
                Currency Type
            </span>
            <input
                className="h-5/6 w-9/6 px-2 bg-blue-200 hover:bg-blue-300 focus:bg-blue-300 self-center outline-none text-xl rounded-xl "
                type="number"
            />
            <select
                className="bg-blue-200 w-4/12 h-5/6 hover:bg-blue-300 focus:bg-blue-300 self-center justify-self-end rounded-xl px-2 cursor-pointer outline-none"
                name="currency"
                id="currency"
            >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
            </select>
        </div>
    );
}
