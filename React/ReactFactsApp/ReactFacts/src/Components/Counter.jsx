import { useState } from "react";
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        count >= 20 ? setCount(20) : setCount((count) => count+1);
        console.log(count);
        
    }
    
    const decrement = () => {
        count <= 0 ? setCount(0) : setCount((count) => count-1);
        console.log(count);
    }
    
    return (
        <>
            <div className="count-container">
                <h1 className="heading">Counter</h1>
                <button type="button" className="count-btn buttons" onClick = {increment}>
                    <h3>Count is : {count}</h3>
                </button>
                <button type="button" className="increment-btn buttons" onClick = {increment}>
                    <h3>Increase Count : {count}</h3>
                </button>
                <button type="button" className="decrement-btn buttons" onClick = {decrement}>
                    <h3>Decrease Count : {count}</h3>
                </button>
            </div>
        </>
    )
}