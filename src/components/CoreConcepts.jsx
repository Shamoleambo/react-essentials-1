import { CORE_CONCEPTS } from '../data'
import CoreConcept from './CoreConcept'
import Section from './Section'

export default function CoreConcepts() {
  return (
    <Section title='Core Concepts'>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept {...concept} key={concept.title} />
        ))}
      </ul>
    </Section>
  )
}
