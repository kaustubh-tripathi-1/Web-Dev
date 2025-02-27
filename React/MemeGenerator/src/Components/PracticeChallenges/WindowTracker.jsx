import { useState, useEffect } from "react";

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            // console.log(window.innerWidth);
        }
        window.addEventListener(`resize`, handleResize);

        return () => {
            window.removeEventListener(`resize`, handleResize);
        };
    }, [width, height]);

    return (
        <>
            <h1 className="text-2xl font-bold text-white">
                Window Width : {width}
            </h1>
            <h1 className="text-2xl font-bold text-white">
                Window Height : {height}
            </h1>
        </>
    );
}
