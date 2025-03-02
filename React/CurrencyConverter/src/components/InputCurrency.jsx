export default function InputCurrency(props) {
    return (
        <div className="w-full h-1/3 p-3 bg-white grid grid-cols-2 grid-rows-2 justify-between rounded-xl">
            <span className="text-gray-700 text-xl justify-self-start">
                From
            </span>
            <span className="text-gray-700 text-xl justify-self-end">
                Currency Type
            </span>
            <input className="" type="text" />
            <select
                className="bg-gray-200 w-4/12 h-8 self-end justify-self-end rounded-xl p-1"
                name="currency"
                id="currency"
            >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
            </select>
        </div>
    );
}
