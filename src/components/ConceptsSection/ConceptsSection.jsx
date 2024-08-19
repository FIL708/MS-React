import CoreConcept from '../CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from '../../data';
import Section from '../Section/Section';

export default function ConceptsSection() {
    return (
        <Section id='core-concepts' title='Core Concepts'>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept {...concept} key={concept.title} />
                ))}
            </ul>
        </Section>
    );
}
