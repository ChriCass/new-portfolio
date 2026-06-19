import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SelectedWork from './components/selectedWork'
import Metrics from './components/Metrics'
import StackTerminal from './components/stackTerminal'
import Experience from './components/experience'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {
  return (
    <main className="bg-[#0a0a0a] text-[#ededed] min-h-screen text-sm leading-[1.55]">
      <Header />
      <Hero />
      <Metrics />
      <SelectedWork />
      <StackTerminal />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>

  )
}

export default App