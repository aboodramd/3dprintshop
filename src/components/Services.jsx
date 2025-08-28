
import React from 'react'

const services = [
  { title: "3D Printing", desc: "High-quality 3D printing for all your needs." },
  { title: "3D Designing", desc: "Professional CAD modeling and prototyping." },
  { title: "Workshops", desc: "Learn 3D design and printing in our workshops." },
  { title: "Maintenance", desc: "We maintain and repair 3D printers." },
]

const Services = () => {
  return (
    <section id="services" className="p-12 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-8">Our Services</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-6">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
