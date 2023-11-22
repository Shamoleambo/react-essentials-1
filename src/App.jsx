import imgCoreConcepts from './assets/react-core-concepts.png'
import imgJSXUI from './assets/jsx-ui.png'
import imgStateMgmt from './assets/state-mgmt.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]

  return (
    <header>
      <img src={imgCoreConcepts} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcepts({ imagePath, imgAlt, title, content }) {
  return (
    <li>
      <img src={imagePath} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcepts
            imagePath={imgJSXUI}
            imgAlt='Image from Mano'
            title='Mano'
            content='Mano content'
          />
          <CoreConcepts
            imagePath={imgStateMgmt}
            imgAlt='Image from Truta'
            title='Truta'
            content='Truta content'
          />
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  )
}

export default App
