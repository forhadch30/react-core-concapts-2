import { useState } from "react";
const Counter = () => {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: "2px solid purple", borderRadius: '15px' }}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Counter;