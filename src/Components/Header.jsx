import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { NavBar } from './NavBar'
/**
 * Header to the app
 * @returns  {React.ReactElement}
 */
export function Header() {
    return (
        <header className="header-wrapper">
            <section className="header-wrapper__title">
                <div className="header-logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="header-title">
                    <h1 className="title">Développeur Web </h1>
                </div>
            </section>
            <section className="header-wrapper__nav">
                <NavBar />
            </section>
        </header>
    )
}
