import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      {/* User Layout (Home, products, carts etc we will routes under user) */}
      <Route path='/' element={<UserLayout></UserLayout>}></Route>

      {/* Admin layout */}
    </Routes>
   </BrowserRouter>
  )
}

export default App
