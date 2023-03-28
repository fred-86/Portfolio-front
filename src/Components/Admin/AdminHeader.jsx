import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setLogout } from '../../__features__/login.slice'
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
            component: () => (
                <Link className="navbar_link" to="/" onClick={logout}>
                    logout
                </Link>
            ),
        },
    ]

    const dispatch = useDispatch()
    const logout = () => {
        dispatch(setLogout())
    }

    return (
        <header className="admin-header">
            <Nav links={links} customClass="admin" />
        </header>
    )
}
