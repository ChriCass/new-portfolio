import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
const App = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#ededed] min-h-screen text-sm leading-[1.55]">
         <Header />
         <Hero></Hero>
    </main>
   
  )
}

export default App