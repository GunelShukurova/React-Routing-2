import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <header>
    <nav className="flex justify-between items-center text-xl text-white bg-red-800 p-6">
      <span className="font-semibold">React App (Admin Side)</span>
      <ul className="flex gap-8 underline">
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        <li>
          <Link to="/admin/products/new">Add Product</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default AdminHeader
