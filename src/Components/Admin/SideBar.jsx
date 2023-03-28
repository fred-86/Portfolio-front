import React, { useState } from 'react'
import { FaTh, FaBars } from 'react-icons/fa'
import { GiSkills } from '@react-icons/all-files/gi/GiSkills'
import { GrProjects } from '@react-icons/all-files/gr/GrProjects'
import { IoIosLogOut } from '@react-icons/all-files/io/IoIosLogOut'
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setLogout } from '../../__features__/login.slice'

export const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const dispatch = useDispatch()
    const logout = () => {
        dispatch(setLogout())
    }
    const menuItem = [
        {
            path: '/admin/dashboard',
            name: 'Dashboard',
            icon: <FaTh />,
        },
        {
            path: '/admin/persons',
            name: 'Persons',
            icon: <IoPersonOutline />,
        },
        {
            path: '/admin/skills',
            name: 'skills',
            icon: <GiSkills />,
        },
        {
            path: '/admin/projects',
            name: 'Projects',
            icon: <GrProjects />,
        },

        {
            path: '/',
            name: 'Logout',
            icon: <IoIosLogOut />,
        },
    ]
    return (
        <div className="admin-wrapper">
            <div
                style={{ width: isOpen ? '200px' : '50px' }}
                className="sidebar"
            >
                <div className="sidebar-top">
                    <h1
                        style={{ display: isOpen ? 'block' : 'none' }}
                        className="logo"
                    >
                        Logo
                    </h1>
                    <div
                        style={{ marginLeft: isOpen ? '50px' : '0px' }}
                        className="bars"
                    >
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) =>
                            isActive ? 'active ' : 'sidebar-link'
                        }
                        onClick={item.name === 'Logout' ? logout : null}
                        end
                    >
                        <div className="icon">{item.icon}</div>
                        <div
                            style={{ display: isOpen ? 'block' : 'none' }}
                            className="link-text"
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main className="sidebar-contain">{children}</main>
        </div>
    )
}

SideBar.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}
