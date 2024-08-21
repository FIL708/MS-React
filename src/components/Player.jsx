import React, { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleToggleEditMode = () => setIsEditing((prev) => !prev);
    const changePlayerName = (event) => setPlayerName(event.target.value);

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {isEditing ? (
                    <input
                        type='text'
                        required
                        value={playerName}
                        onChange={changePlayerName}
                    ></input>
                ) : (
                    <span className='player-name'>{playerName}</span>
                )}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleToggleEditMode} type='button'>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
