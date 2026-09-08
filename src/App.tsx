import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Seo from './components/Seo'

export default function App() {
  return (
    <>
      <Seo />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Capabilities />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
