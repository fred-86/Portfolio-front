import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import error404 from '../Assets/img/error404.jpg'

import { Rainfall } from '../Components/RainFall'
import { useLocation } from 'react-router-dom'

export function Error404() {
    const location = useLocation()
    const [error, setError] = useState(false)
    console.log(location)

    useEffect(() => {
        if (location.key === 'default') {
            setError(!error)
        }
    }, [location])
    return (
        <main className="error404-wrapper">
            <div className="error404-title">
                <h1 className="title" data-testid="title-error">
                    Oups , je crois que quelque chose est cassé 😵‍💫
                </h1>
            </div>
            <div className="error404-message message">
                <img
                    className="message-img"
                    src={error404}
                    alt="Extrait de film  les Visteurs"
                />
                <div className="message-link">
                    <h2>Deux choix s'offrent à vous :</h2>
                    <ul className="link-list">
                        <li className="link-item">
                            Soit retourner à la page d'acceuil
                        </li>
                        <li className="link-item">
                            <Link className="link " to="/">
                                Acceuil
                            </Link>
                        </li>
                        <li className="link-item">
                            Soit regarder la pluie tomber
                        </li>
                        <li className="link-item">{error && <Rainfall />}</li>
                    </ul>
                    <p>C'est vous qui voyez 😃</p>
                </div>
            </div>
        </main>
    )
}
