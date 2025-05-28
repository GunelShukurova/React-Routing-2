import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function Products() {

    const [products, setProducts] = useState(null)
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('default');

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

    const truncateText = (text, maxLength = 80) =>
        text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );


    const sortFunctions = {
        lowToHigh: (a, b) => a.price - b.price,
        highToLow: (a, b) => b.price - a.price,
    };


    if (sortFunctions[sort]) {
        filteredProducts.sort(sortFunctions[sort]);
    }

    return (
        <>    
          <div className="flex m-6 justify-around items-center mb-10 gap-4">
            <input
                type="text"
                placeholder="Search products..."
                className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-4 py-2 border border-gray-300 w-sm rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            >
                <option value="default">Sort by default</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>
        </div>


            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-600 text-lg">No products found.</p>) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 m-16">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-5 flex flex-col justify-between">
                            <img src={product.image} alt={product.title} className="h-48 object-contain mb-4"/>
                            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                            <p className="text-gray-600 text-sm mb-3">
                                {truncateText(product.description)}
                            </p>
                            <div className="text-red-900 font-bold text-xl mb-2">
                                ${product.price}
                            </div>
                            <div className="text-yellow-500 mb-4">
                                ⭐ {product.rating.rate} ({product.rating.count})
                            </div>
                           
                            <Link to={`${product.id}`}>
                             <button className="mt-auto bg-red-900 hover:bg-red-800 text-white px-4 py-2 rounded transition duration-200">
                             View Details
                         </button></Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}


export default Products
