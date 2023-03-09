import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Layout } from './Layout'

function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Navigation
