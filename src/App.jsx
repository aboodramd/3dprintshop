import React from "react";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brandBlue">3D Print Shop</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-brandBlue">About</a></li>
            <li><a href="#services" className="hover:text-brandBlue">Services</a></li>
            <li><a href="#store" className="hover:text-brandBlue">Store</a></li>
            <li><a href="#workshops" className="hover:text-brandBlue">Workshops</a></li>
            <li><a href="#contact" className="hover:text-brandBlue">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-brandBlue to-brandPink text-white text-center">
        <h2 className="text-5xl font-extrabold mb-6">Your 3D Printing Partner</h2>
        <p className="max-w-2xl mb-6">We provide professional 3D printing, design, and training services in Amman, Jordan.</p>
        <a href="#services" className="px-6 py-3 bg-white text-brandBlue font-semibold rounded-lg shadow hover:bg-gray-100">Explore Services</a>
      </section>

      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-brandBlue mb-4">About Us</h3>
        <p>We are a 3D printing company offering custom designs, student project support, and innovative workshops for all skill levels.</p>
      </section>

      <section id="services" className="py-20 bg-gray-50 px-6">
        <h3 className="text-3xl font-bold text-center text-brandBlue mb-12">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">3D Printing</h4>
            <p>High quality 3D printing for prototypes, models, and custom products.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">3D Designing</h4>
            <p>Custom 3D design services tailored to your project needs.</p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl font-semibold mb-2">Workshops & Courses</h4>
            <p>Hands-on learning experiences in 3D design and printing.</p>
          </div>
        </div>
      </section>

      <section id="store" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-brandBlue mb-12">Store</h3>
        <p className="text-center mb-6">Buy 3D printing materials, printers, and accessories.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h4 className="font-semibold">PLA Filament</h4>
            <p className="text-sm mb-4">High-quality PLA for everyday printing.</p>
            <button className="px-4 py-2 bg-brandBlue text-white rounded">Buy</button>
          </div>
          <div className="p-6 bg-white shadow rounded-xl text-center">
            <h4 className="font-semibold">3D Printer</h4>
            <p className="text-sm mb-4">Reliable printers for professionals and hobbyists.</p>
            <button className="px-4 py-2 bg-brandBlue text-white rounded">Buy</button>
          </div>
        </div>
      </section>

      <section id="workshops" className="py-20 bg-gray-50 px-6">
        <h3 className="text-3xl font-bold text-center text-brandBlue mb-12">Register for a Workshop</h3>
        <form action="https://formspree.io/f/mblkvkyk" method="POST" className="max-w-lg mx-auto bg-white p-8 shadow rounded-xl space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full border p-3 rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full border p-3 rounded" required />
          <textarea name="message" placeholder="Tell us about your goals" className="w-full border p-3 rounded" required></textarea>
          <button type="submit" className="w-full py-3 bg-brandBlue text-white rounded">Register</button>
        </form>
      </section>

      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-brandBlue mb-6">Contact Us</h3>
        <p>Email: customer@3dprintshop.info</p>
        <p>Phone: +962799458828</p>
        <p>Instagram: @3dprint.shop</p>
        <p>Address: عمان ، جبل الحسين ، شارع الجليل ، عمارة الجنيني مكتب 208</p>
      </section>

      <footer className="bg-brandBlue text-white py-6 text-center">
        <p>© 2025 3D Print Shop. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
