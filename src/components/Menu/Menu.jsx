import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import { EXAMPLES } from '../../data';

function Menu() {
    const [content, setContent] = useState(null);
    const clickHandler = (selectedButton) => setContent(selectedButton);
    return (
        <section id='examples'>
            <h2>Exmaples</h2>
            <menu>
                <TabButton onClick={() => clickHandler('components')}>Components</TabButton>
                <TabButton onClick={() => clickHandler('jsx')}>JSX</TabButton>
                <TabButton onClick={() => clickHandler('props')}>Props</TabButton>
                <TabButton onClick={() => clickHandler('state')}>State</TabButton>
            </menu>
            <div id='tab-content'>
                {content ? (
                    <>
                        <h3>{EXAMPLES[content].title}</h3>
                        <p>{EXAMPLES[content].description}</p>
                        <pre>
                            <code>{EXAMPLES[content].code}</code>
                        </pre>
                    </>
                ) : (
                    <p>Please select a topic</p>
                )}
            </div>
        </section>
    );
}

export default Menu;
