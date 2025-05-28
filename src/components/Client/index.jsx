import React from 'react'
import ClientHeader from '../../layout/Client/Header'
import { Outlet } from 'react-router-dom'

const ClientLayout = () => {
  return (
    <div>
      <ClientHeader/>
      <Outlet/>
    </div>
  )
}

export default ClientLayout
