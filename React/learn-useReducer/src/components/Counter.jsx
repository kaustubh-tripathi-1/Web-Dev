import { useState, useReducer, useRef } from "react";
import "./Counter.css";

function countReducer(state, action) {
    switch (action.type) {
        case "increment": {
            /* if (state.count >= 20) {
                return { count: 20 };
            } */
            return { count: state.count + 1 };
        }
        case "decrement": {
            /* if (state.count <= 0) {
                return { count: 0 };
            } */
            return { count: state.count - 1 };
        }

        case "reset":
            return { count: 0 };

        default:
            return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    const [animationClass, setAnimationClass] = useState("");
    const intervalIdRef = useRef(null);

    function handleMouseDownDecrement(e) {
        if (!intervalIdRef.current) {
            intervalIdRef.current = setInterval(() => {
                dispatch({ type: "decrement" });
                setAnimationClass("decrement"); // Apply decrement effect
                setTimeout(() => setAnimationClass(""), 200);
            }, 100);
        }
    }

    function handleMouseUpDecrement() {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    }
    function handleMouseDownIncrement(e) {
        if (!intervalIdRef.current) {
            intervalIdRef.current = setInterval(() => {
                dispatch({ type: "increment" });
                setAnimationClass("increment"); // Apply decrement effect
                setTimeout(() => setAnimationClass(""), 200);
            }, 100);
        }
    }

    function handleMouseUpIncrement() {
        if (intervalIdRef.current) {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    }

    return (
        <main className="main-container">
            <h1>Counter</h1>
            <div className="card">
                <h2 className={animationClass}>Count is {state.count}</h2>
                <div className="btn-container">
                    <button
                        onClick={() => {
                            dispatch({ type: "increment" });
                            setAnimationClass("increment"); // Apply increment effect
                            setTimeout(() => setAnimationClass(""), 200);
                        }}
                        onMouseDown={handleMouseDownIncrement}
                        onMouseUp={handleMouseUpIncrement}
                        onMouseLeave={handleMouseUpIncrement}
                    >
                        +
                    </button>
                    <button
                        onClick={() => {
                            dispatch({ type: "decrement" });
                            setAnimationClass("decrement"); // Apply decrement effect
                            setTimeout(() => setAnimationClass(""), 200);
                        }}
                        onMouseDown={handleMouseDownDecrement}
                        onMouseUp={handleMouseUpDecrement}
                        onMouseLeave={handleMouseUpDecrement}
                    >
                        -
                    </button>
                    <button onClick={() => dispatch({ type: "reset" })}>
                        Reset
                    </button>
                </div>
            </div>
        </main>
    );
}
