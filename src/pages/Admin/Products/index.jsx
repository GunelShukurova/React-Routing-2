import React, { useEffect, useState } from 'react'

function AdminProducts () {

    const [products, setProducts] = useState(null)

const getBooks = async () => {
        try {
            const response = await fetch("https://json-server-test-ruby.vercel.app/products/")
            if (!response.ok) throw new Error('Network response was not ok!')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    };

    useEffect(() => {
        getBooks()
    }, [])
    if (!products) return <div className="text-center mt-10 text-2xl">Loading...</div>;

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://json-server-test-ruby.vercel.app/products/${id}`, {
              method: 'DELETE',
            });
            if (!response.ok) throw new Error('Failed to delete product');
      
            setProducts(products.filter(product => product.id !== id));
          } catch (error) {
            console.error('Error deleting product:', error);
            alert('Failed to delete the product. Please try again.');
          }
        };



  return (
    <div className="p-6">
    <table className="w-11/12 mx-auto  border border-gray-300">
      <thead className="bg-red-800 text-white">
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Image</th>
          <th className="border px-4 py-2">Title</th>
          <th className="border px-4 py-2">Price</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id} className="text-center align-top">
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">
              <img src={product.image} alt={product.title} className="h-20 mx-auto object-contain" />
            </td>
            <td className="border px-4 py-2">{product.title}</td>
            <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
            <td className="border px-4 py-2 text-left max-w-xs">
              {product.description.length > 100 
                ? product.description.slice(0, 100) + '...' 
                : product.description}
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-700 transition"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
        {products.length === 0 && (
          <tr>
            <td colSpan="6" className="text-center py-4">
              No products available.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>

  )
}

export default AdminProducts
