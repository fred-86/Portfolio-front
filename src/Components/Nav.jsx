import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
/**
 * Generic NavBar
 * @component
 * @prop {Array.<{name:String | element,path:String}>} links - array containing name and path
 * @prop {React.ElementType} component- the component to render instead of NavLink, if provided
 * @returns  {React.ReactElement}
 */
export function Nav({ links, customClass }) {
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav
            className={`navbar-wrapper ${showLinks ? 'show-nav' : ''} ${
                customClass ? customClass : ''
            }`}
        >
            <ul className="navbar_links">
                {links.map((link, index) => (
                    <li className="navbar_item" key={index}>
                        {link.component ? (
                            <link.component />
                        ) : (
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? 'active ' : 'navbar_link'
                                }
                                end
                                onClick={handleShowLinks}
                            >
                                {link.name}
                            </NavLink>
                        )}
                    </li>
                ))}
            </ul>
            <button className="navbar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}

Nav.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
            path: PropTypes.string,
            component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
        })
    ).isRequired,

    customClass: PropTypes.string,
}
