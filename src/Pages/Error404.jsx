import React from 'react'
import error404 from '../Assets/img/error404.jpg'

export function Error404() {
    return (
        <main className="error404-wrapper">
            <h1>Oups</h1>
            <img src={error404} alt="" />
        </main>
    )
}
