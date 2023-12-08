import { useState } from 'react'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from './components/TabButton'

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button')

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)  
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts {...concept} key={concept.title} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  )
}

export default App
