import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail () {

const [product, setProduct]= useState(null)
const {id}= useParams()
const navigate = useNavigate()


const getProduct = async () => {

try {
    
const response = await fetch (`https://json-server-test-ruby.vercel.app/products/${id}`)

if (!response.ok) throw new Error('Network response was not ok!')

    const data = await response.json()
    setProduct(data)

} catch (error) {
    console.error("Error fetching product:", error)
}


}
 useEffect(()=>{

getProduct()

 },[])
 if (!product) {
    return (
        <div className="text-center p-6 text-2xl">
            Loading product details...
        </div>
    )
}

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden md:flex">
      <div className="md:w-1/2 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-red-900">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <div className="text-gray-800 text-xl font-semibold mb-4">
            ${product.price}
          </div>
          <div className="text-yellow-500 mb-2">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </div>
          <div className="text-sm text-gray-500 mb-4">Category: {product.category}</div>
        </div>
        <button onClick={()=>navigate(-1)} className="bg-red-900 hover:bg-red-800 w-25 text-white px-2 py-2 rounded transition">
         Go Back
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductDetail
