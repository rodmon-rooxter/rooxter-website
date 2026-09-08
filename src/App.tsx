import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import SelectedWork from './sections/SelectedWork/SelectedWork'
import Statement from './sections/Statement/Statement'
import Team from './sections/Team/Team'
import WhatWeDo from './sections/WhatWeDo/WhatWeDo'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Projects />
        <About />
        <WhatWeDo />
        <Team />
        <Statement />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
