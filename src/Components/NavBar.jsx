import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <Link className="navbar_link" to="/">
                        Mon Profil
                    </Link>
                </li>
                <li className="navbar_item">
                    <Link className="navbar_link" to="/">
                        Mes compétences
                    </Link>
                </li>
                <li className="navbar_item">
                    <Link className="navbar_link" to="/">
                        Mes projets
                    </Link>
                </li>
                <li className="navbar_item">
                    <Link className="navbar_link" to="/">
                        Secret
                    </Link>
                </li>
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

export default NavBar
