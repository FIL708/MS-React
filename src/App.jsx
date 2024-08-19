import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import { CORE_CONCEPTS } from './data';
import './styles.css';

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map((concept) => (
                            <CoreConcept {...concept} key={concept.title} />
                        ))}
                    </ul>
                </section>
                <Menu />
            </main>
        </div>
    );
}

export default App;
