import { useState } from "react";

export default function Pad({ on, setPads, color }) {
    const [isButtonOn, setIsButtonOn] = useState(on);

    function handleButtonState() {
        setIsButtonOn((prevState) => !prevState);
    }

    return (
        <button
            className={`h-full w-full cursor-pointer rounded-2xl border-2 border-rose-400 ${isButtonOn ? `opacity-[1]` : `opacity-[0.1]`}`}
            style={{ backgroundColor: color }}
            type="button"
            onClick={handleButtonState}
        ></button>
    );
}
