import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
/**
 * Header to the app
 * @returns  {React.ReactElement}
 */
export function Header() {
    return (
        <header className="header-wrapper">
            <div className="header-logo">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <div className="header-title">
                <h1 className="title">Développeur Web Junior</h1>
            </div>
        </header>
    )
}
