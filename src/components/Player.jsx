import React, { useState } from 'react';

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleToggleEditgMode = () => setIsEditing((prev) => !prev);
    return (
        <li>
            <span className='player'>
                {isEditing ? <input></input> : <span className='player-name'>{name}</span>}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleToggleEditMode} type='button'>
                {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    );
}
