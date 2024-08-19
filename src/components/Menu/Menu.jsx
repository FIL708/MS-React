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
                <TabButton
                    isSelected={content === 'components'}
                    onClick={() => clickHandler('components')}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={content === 'jsx'}
                    onClick={() => clickHandler('jsx')}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={content === 'props'}
                    onClick={() => clickHandler('props')}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={content === 'state'}
                    onClick={() => clickHandler('state')}
                >
                    State
                </TabButton>
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
