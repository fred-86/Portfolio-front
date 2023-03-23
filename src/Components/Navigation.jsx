import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact } from '../Pages/Contact'
import { Error404 } from '../Pages/Error404'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Profil } from '../Pages/Profil'
import { Projects } from '../Pages/Projects'
import { Skills } from '../Pages/Skills'
import { Layout } from './Layout'

/**
 *  router to the public app
 * @component
 * @returns  {React.ReactElement}
 */
export function Navigation() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="Profil" element={<Profil />} />
                <Route path="Projects" element={<Projects />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="Sign-in" element={<Login />} />
            </Route>
            <Route path="/*" element={<Error404 />} />
        </Routes>
    )
}
