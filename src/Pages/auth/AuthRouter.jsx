import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../../Components/Layout'
import { Error404 } from '../Error404'
import { Login } from './Login'

export function AuthRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Login />} />
                <Route path="sign-in" element={<Login />} />
            </Route>
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}
