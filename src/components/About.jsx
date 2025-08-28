
import React from 'react'

const About = () => {
  return (
    <section id="about" className="p-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">About Us</h2>
      <p>Phone: +962799458828</p>
      <p>Email: customer@3dprintshop.info</p>
      <p>Address: Amman, Jabal Alhussain</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.4245363366306!2d35.931!3d31.963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca08a2f6d3c6f%3A0x3c0!2sAmman!5e0!3m2!1sen!2sjo!4v0000000000"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}

export default About
