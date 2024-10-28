import './App.css'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import NavLink from './components/navLink/NavLink'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

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
