import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainHeader from './mainHeader'
import DashBoard from './DashBoard'
import Api from './Api'
import HomePage from './HomePage'


export default function App() {
  return (
   <BrowserRouter>
   <MainHeader />
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/dashboard' element={<DashBoard/>}/>
    <Route path='/api' element={<Api/>}/>
   </Routes>
   </BrowserRouter>
  )
}

