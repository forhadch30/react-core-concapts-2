import { useState } from "react";

const Counter1 = () => {
    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newPhotos = count + 1;
        setCount(newPhotos)
    }
    const handleRemove = () => {
        const newPhotos = count - 1;
        setCount(newPhotos)
    }

    return (
        <div style={{border:'2px solid red',borderRadius:'10px',padding:'10px'}}>
            <h2>Counter:{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Counter1;