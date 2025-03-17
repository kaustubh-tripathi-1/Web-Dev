import { useState, useReducer } from "react";
import "./Counter.css";

function countReducer(state, action) {
    switch (action.type) {
        case "increment": {
            if (state.count >= 20) {
                return { count: 20 };
            }
            return { count: state.count + 1 };
        }
        case "decrement": {
            if (state.count <= 0) {
                return { count: 0 };
            }
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

    return (
        <main className="main-container">
            <h1>Counter</h1>
            <div className="card">
                <h2>Count is {state.count}</h2>
                <div className="btn-container">
                    <button onClick={() => dispatch({ type: "increment" })}>
                        +
                    </button>
                    <button onClick={() => dispatch({ type: "decrement" })}>
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
