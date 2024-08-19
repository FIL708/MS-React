import Player from './components/Player';
import './styles.css';

function App() {
    return (
        <main>
            <div id='game-container'>
                <ol id='players'>
                    <Player name='Filip' symbol='X' />
                    <Player name='Marta' symbol='O' />
                </ol>
            </div>
        </main>
    );
}

export default App;
