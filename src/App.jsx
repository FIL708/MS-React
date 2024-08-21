import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import './styles.css';

function App() {
    const [turn, setTurn] = useState('X');

    const handleSelectCell = () => {
        setTurn((prev) => (prev === 'X' ? 'O' : 'X'));
    };

    return (
        <main>
            <div id='game-container'>
                <ol id='players' className='highlight-player'>
                    <Player initialName='Filip' symbol='X' isActive={turn === 'X'} />
                    <Player initialName='Marta' symbol='O' isActive={turn === 'O'} />
                </ol>
                <GameBoard turn={turn} onSelect={handleSelectCell} />
            </div>
        </main>
    );
}

export default App;
