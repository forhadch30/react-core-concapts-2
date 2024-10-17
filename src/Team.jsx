import { useState } from "react";

const Team = () => {

    const [teamCount, setCount] = useState(11)


    const handleAdd = () => {
        setTimeout(() => {
            const newPlayers = teamCount + 1;
            setCount(newPlayers)
        }, 500);
    }
    const handleRemove = () => {
        setTimeout(() => {
            const newPlayers = teamCount - 1;
            setCount(newPlayers)
        }, 1000);
    }

    const teamStyle = {
        border: '2px solid green',
        margin: '15px',
        padding: '15px',
        borderRadius: '12px',
    }
    return (
        <div style={teamStyle}>
            <h2>Players: {teamCount}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Team;