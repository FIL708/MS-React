import { useState } from 'react';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import { EXAMPLES } from '../../data';

function Menu() {
    const [content, setContent] = useState(null);
    const clickHandler = (selectedButton) => setContent(selectedButton);
    return (
        <Section id='examples' title='Examples'>
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
        </Section>
    );
}

export default Menu;
