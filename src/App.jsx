import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import componentImg from './assets/components.png';
import './styles.css';
import { CORE_CONCEPTS } from './data';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept {...concept} />
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
