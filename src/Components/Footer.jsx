import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
/**
 * Footer to the app
 * @returns  {React.ReactElement}
 */
export function Footer() {
    return (
        <footer className="footer-wrapper" data-testid="footer-wrapper">
            <section className="footer-copyright">
                <p>Copyright © 2023</p>
            </section>
            <section className="footer-logo">
                <Logo />
            </section>
            <section className="footer-link">
                <Link to="/Contact">Contact</Link>
            </section>
        </footer>
    )
}
