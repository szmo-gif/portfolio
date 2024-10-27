import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import NavLink from './components/NavLink'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <NavLink />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
