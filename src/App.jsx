import { CORE_CONCEPTS } from './data'
import Header from './components/Header'
import CoreConcepts from './components/CoreConcepts'
import TabButton from './components/TabButton'

function App() {
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
            <TabButton>Components</TabButton>
            <TabButton>??</TabButton>
            <TabButton>??</TabButton>
          </menu>
        </section>
      </main>
    </div>
  )
}

export default App
