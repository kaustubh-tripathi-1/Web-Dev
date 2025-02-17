import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);

    function decrement() {
        setCount((prevCount) => (prevCount <= 0 ? 0 : prevCount - 1));
    }
    function increment() {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <main className="h-screen bg-[#242424]">
            <h1 className="text-4xl text-white font-bold flex justify-center items-center h-1/6 ">
                How many times will you say "state" in this section?
            </h1>
            <div className="counter flex justify-center items-center gap-2">
                <button
                    onClick={decrement}
                    className="minus font-serif text-white text-4xl bg-gray-600 w-16 h-16 rounded-[50%] self-end -mr-7 z-10 pt-0 hover:bg-gray-800 hover:border-2 hover:border-blue-800"
                    aria-label="Decrease count"
                >
                    -
                </button>
                <h2 className="count h-32 w-32 bg-white text-black font-extrabold text-4xl flex justify-center items-center rounded-[50%]">
                    {count}
                </h2>
                <button
                    onClick={increment}
                    className="plus font-serif text-white text-4xl bg-gray-600 w-16 h-16 rounded-[50%] self-end -ml-7 z-10 pt-0 hover:bg-gray-800 hover:border-2 hover:border-blue-800"
                    aria-label="Increase count"
                >
                    +
                </button>
            </div>
        </main>
    );
}
