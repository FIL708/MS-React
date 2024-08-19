import CoreConcept from './components/CoreConcept/CoreConcept';
import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './data';
import Menu from './components/Menu/Menu';
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
                            <CoreConcept
                                title={concept.title}
                                description={concept.description}
                                image={concept.image}
                                {...concept}
                            />
                        ))}
                    </ul>
                </section>
                <Menu />
            </main>
        </div>
    );
}

export default App;
