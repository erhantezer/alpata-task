import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/home' element={<PrivateRouter />}>
                    <Route path='' element={<Home />} />
                </Route>
                <Route path='register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter