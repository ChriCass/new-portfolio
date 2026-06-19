import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import SelectedWork from './components/selectedWork'
import Metrics from './components/metrics'
import StackTerminal from './components/stackTerminal'
import Experience from './components/experience'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {
  return (
    <main className="bg-[#0a0a0a] text-[#ededed] min-h-screen text-sm leading-[1.55]">
      <Header        variant="frontend" />
      <Hero          variant="frontend" />
      <Metrics       variant="frontend" />
      <SelectedWork  variant="shopify" />
      <StackTerminal variant="frontend" />
      <Experience    variant="frontend" />
      <About         variant="frontend" />
      <Contact />
      <Footer        variant="frontend" />
    </main>

  )
}

export default App