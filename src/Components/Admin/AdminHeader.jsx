import React from 'react'
import { Link, NavLink } from 'react-router-dom'
/**
 * Header for The Admin
 * @returns  {React.ReactElement}
 */
export function AdminHeader() {
    return (
        <header className="admin-header">
            <nav className="admin-nav">
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active ' : 'nav_link'
                            }
                            end
                            // onClick={handleShowLinks}
                        >
                            Acceuil
                        </NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink
                            to="/admin/dashboard"
                            className={({ isActive }) =>
                                isActive ? 'active ' : 'nav_link'
                            }
                            end
                            // onClick={handleShowLinks}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-list-item"></li>
                    <li className="nav-list-item">
                        <Link to="/admin">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
