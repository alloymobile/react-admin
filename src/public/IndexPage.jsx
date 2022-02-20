import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import AppNavbar from '../shared/library/tissue/AppNavbar'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faUserLock, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

const appNavbar = {
    brand: {  id: 1, name: 'Microsoft', className: 'h3 d-flex align-items-center justify-content-center col-md-3 text-dark text-decoration-none',appIcon: { icon: faMicrosoft},href:'./'},
    actionLinks: [ 
        {  id: 1,className: 'btn btn-outline-dark btn-sm mx-1',appIcon: { icon: faUserPlus},href:'./register'},
        {  id: 2,className: 'btn btn-outline-dark btn-sm mx-1',appIcon: { icon: faUserLock},href:'./login'}
    ]
}

function IndexPage() {
  return (
    <>
        <AppNavbar appNavbar={appNavbar}/>
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterPage />}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default IndexPage