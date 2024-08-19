import ConceptsSection from './components/ConceptsSection/ConceptsSection';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import './styles.css';

function App() {
    return (
        <>
            <Header />
            <main>
                <ConceptsSection />
                <Menu />
            </main>
        </>
    );
}

export default App;
