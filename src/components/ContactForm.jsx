
import React from 'react'

const ContactForm = () => {
  return (
    <section id="contact" className="p-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form action="https://formspree.io/f/mabcd123" method="POST" className="max-w-md mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="border p-2 w-full" />
        <input type="email" name="email" placeholder="Your Email" required className="border p-2 w-full" />
        <textarea name="message" placeholder="Tell us what you need..." required className="border p-2 w-full"></textarea>
        <button type="submit" className="bg-[#1098c8] text-white px-4 py-2 rounded">
          Send
        </button>
      </form>
    </section>
  )
}

export default ContactForm
