import React from 'react'
import{Routes,Route} from "react-router-dom"
import  {Home}  from './Home'
import { CartPage } from './cart'
import { CheckOutPage } from './checkOut'
import { Login } from './Login'
import { Register } from './Register'

export const AllRouters = () => {
  return (
    <div>
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
            <Route path="/checkout" element={<CheckOutPage/>}></Route>
        </Routes>
    </div>
  )
}
