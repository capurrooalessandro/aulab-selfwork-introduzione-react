import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const incrementByOne = () => {
        setCounter((prev) => prev + 1);
    }

    const decrementByOne = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <section className="counter-container">
            <p>Counter: {counter}</p>
            <button type="button" className="btn btn-increment" onClick={incrementByOne}>+</button>
            <button type="button" className="btn btn-decrement" onClick={decrementByOne}>-</button>
        </section>
    )
}