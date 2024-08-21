import React, { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelect, turn }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectCell = (rowIndex, colIndex) => {
        if (!gameBoard[rowIndex][colIndex]) {
            setGameBoard((prev) => {
                const updatedBoard = [...prev.map((inner) => [...inner])];
                updatedBoard[rowIndex][colIndex] = turn;

                return updatedBoard;
            });

            onSelect();
        }
    };

    return (
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectCell(rowIndex, colIndex)}>
                                    {col}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
