import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Profil } from '../Pages/Profil'
import { Projects } from '../Pages/Projects'
import { Skills } from '../Pages/Skills'
import { Layout } from './Layout'

function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/Profil" element={<Profil />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Skills" element={<Skills />} />
            </Route>
        </Routes>
    )
}

export default Navigation
