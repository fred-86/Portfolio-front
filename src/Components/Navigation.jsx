import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Profil } from '../Pages/Profil'
import { Layout } from './Layout'

function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/Profil" element={<Profil />} />
            </Route>
        </Routes>
    )
}

export default Navigation
