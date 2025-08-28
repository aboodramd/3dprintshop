
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Store from './components/Store'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Store />
      <About />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
