import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from './Nav'
/**
 * Nav Bar public
 *@component
 * @returns {React.ReactElement}
 */
export function NavBar() {
    const links = [
        { name: 'Acceuil', path: '/' },
        { name: 'Mon Profil', path: '/Profil' },
        { name: 'Mes Compétences', path: '/Skills' },
        { name: 'Mes Projets', path: '/Projects' },
        { name: 'Admin', path: '/admin/dashboard' },
    ]
    return <Nav links={links} />
}
