import { Route, Routes } from 'react-router-dom'
import './App.css'
import ClientLayout from './components/Client'
import Home from './pages/Client/Home'
import Contact from './pages/Client/Contact'
import Favorites from './pages/Client/Favorites'
import Products from './pages/Client/Products'
import ProductDetail from './pages/Client/ProductDetail'
import AdminLayout from './components/Admin'
import AdminProducts from './pages/Admin/Products'
import AddProduct from './pages/Admin/AddProduct'
import Dashboard from './pages/Admin/Dashboard'

function App() {


  return (
    <>
      <Routes>
        {/* client layout */}
        <Route path={'/'} element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path={'contact'} element={<Contact />} />
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path={'favorites'} element={<Favorites />} />
        </Route>
        {/* admin layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products">
            <Route index element={<AdminProducts />} />
            <Route path="new" element={<AddProduct />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
