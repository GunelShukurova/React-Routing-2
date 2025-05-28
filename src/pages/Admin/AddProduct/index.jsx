import React, { useState } from 'react'

function AddProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        image: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()



        try {
            const response = await fetch('https://json-server-test-ruby.vercel.app/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    rating: { rate: 0, count: 0 }
                })
            })

            if (!response.ok) throw new Error('Failed to add product')

            alert('Product added successfully!')
            setFormData({ title: '', price: '', image: '', description: '' })

        } catch (error) {
            console.error('Error adding product:', error)
            alert('Failed to add product')
        }
    }


    return (
        <div className="max-w-2xl mt-16 mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-red-900">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block mb-1 font-medium text-red-900">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter product title"
                        className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-red-900">Price</label>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        name="price"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-red-900" >Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        required
                        placeholder="Enter Image URL"
                        className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-red-900">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Write product description..."
                        className="w-full border border-gray-300 px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-red-900 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded shadow"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddProduct
