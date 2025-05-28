import React from 'react'
import { NavLink } from 'react-router-dom'

const ClientHeader = () => {
    return (
        <div>
            <header>
                <nav className="flex justify-between  text-xl text-white  bg-red-800 p-6">
                <span>React App (Client Side)</span>
                    <ul className='flex  gap-8 underline ' > 
           
                        <li>
                            <NavLink className={({ isActive }) => isActive ? "text-red-100 " : "text-red-300 underline"} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ?  "text-red-100 " : "text-red-200 underline"}  to={"/contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ?  "text-red-100 " : "text-red-200 underline"}  to={"/products"}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ?  "text-red-100 " : "text-red-200 underline"}  to={"/favorites"}>Favorites</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default ClientHeader
