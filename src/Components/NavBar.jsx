import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
/**
 *
 * @returns
 */
export function NavBar() {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`navbar-wrapper ${showLinks ? 'show-nav' : ' '}`}>
            <ul className="navbar_links">
                <li className="navbar_item">
                    <NavLink
                        to="/profil"
                        className={({ isActive }) =>
                            isActive ? '  active ' : 'navbar_link'
                        }
                        end
                    >
                        Mon Profil
                    </NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active ' : 'navbar_link'
                        }
                        end
                    >
                        Mes Compétences
                    </NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active ' : 'navbar_link'
                        }
                        end
                    >
                        Mes Projets
                    </NavLink>
                </li>
                <li className="navbar_item">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'active ' : 'navbar_link'
                        }
                        end
                    >
                        Secret
                    </NavLink>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default NavBar
