import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav } from '../Nav'
/**
 * Header for The Admin
 * @returns  {React.ReactElement}
 */
export function AdminHeader() {
    const links = [
        { name: 'Acceuil', path: '/' },
        { name: 'Admin', path: '/admin/dashboard' },
        {
            name: 'Logout',
            path: '',
            component: () => <Link to="/logout">logout</Link>,
        },
    ]
    return (
        <header className="admin-header">
            <Nav links={links} customClass="admin" />
        </header>
    )
}
