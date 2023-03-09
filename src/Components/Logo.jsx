import React from 'react'
import logo from '../Assets/Fred-Lescure.png'

export function Logo() {
    return (
        <div className="logo-Wrapper">
            <img
                className="logo logo--footer"
                src={logo}
                alt="logo Fred Lescure"
            />
        </div>
    )
}
