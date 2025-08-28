
import React from 'react'
import products from '../data/products'

const Store = () => {
  return (
    <section id="store" className="p-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-8">Our Store</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-50 shadow rounded-xl p-6">
            <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-lg font-bold mt-2">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-[#1098c8] font-bold mt-2">{p.price}</p>
            <button className="bg-[#ffced7] text-black px-3 py-2 mt-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Store
