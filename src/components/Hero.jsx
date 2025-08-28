
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#ffced7] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-[#1098c8]"
      >
        Welcome to 3D Print Shop
      </motion.h1>
      <p className="mt-4 max-w-xl">
        Your trusted partner for 3D Printing, Designing, Workshops, and Maintenance
      </p>
      <a href="#contact" className="mt-6 bg-[#1098c8] text-white px-6 py-2 rounded-lg">
        Get a Quote
      </a>
    </section>
  )
}

export default Hero
