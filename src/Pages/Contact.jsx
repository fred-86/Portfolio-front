import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPersons } from '../_helpers__/selectorPersons'
import { getPersons } from '../__services__/persons.action'
import { Banner } from '../Components/Banner'
import { Loader } from '../Components/Loader'

export function Contact() {
    const dispatch = useDispatch()
    const flag = useRef(false)

    const person = useSelector(selectPersons)
    useEffect(() => {
        if (flag.current === false) {
            dispatch(getPersons())
        }
        return () => (flag.current = true)
    }, [])
    if (person.personsInfo) {
        console.log('person', person.personsInfo[0])
    }
    return (
        <main className="contact-wrapper">
            <Banner title="Contact" />

            {person.loading ? (
                <Loader />
            ) : person.personsInfo ? (
                <section className="contact-info info">
                    <ul className="info-list">
                        <li className="info-list-item">
                            {person.personsInfo[0].lastName}
                            {person.personsInfo[0].firstName}
                        </li>
                        <li className="info-list-item">
                            {person.personsInfo[0].email}
                        </li>
                        <li className="info-list-item">
                            {person.personsInfo[0].phone}
                        </li>
                        <li className="info-list-item">
                            <ul>
                                {' '}
                                {person.personsInfo[0].links.map((link) => {
                                    return (
                                        <li
                                            key={link.name}
                                            className="info-list-item"
                                        >
                                            {link.name}
                                            {link.link}
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                    <a href="/Lescure_Frederic_Mars23_CV.pdf" download>
                        Télécharger le fichier
                    </a>
                </section>
            ) : (
                <p>OUps</p>
            )}
        </main>
    )
}
