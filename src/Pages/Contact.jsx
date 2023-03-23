import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPersons } from '../_helpers__/selectorPersons'
import { getPersons } from '../__services__/persons.action'
import { Banner } from '../Components/Banner'
import { Loader } from '../Components/Loader'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
    // if (person.personsInfo) {
    //     console.log('person', person.personsInfo[0])
    // }
    return (
        <main className="contact-wrapper">
            <Banner title="Contact" />

            {person.loading ? (
                <Loader />
            ) : person.personsInfo ? (
                <section className="contact-info info">
                    <ul className="info-list">
                        <li className="info-list-item">
                            <span className="item-name">
                                {person.personsInfo[0].lastName}
                            </span>
                            <span className="item-name">
                                {person.personsInfo[0].firstName}
                            </span>
                        </li>
                        <li className="info-list-item">
                            email:
                            <span className="item-email">
                                {person.personsInfo[0].email}
                            </span>
                        </li>
                        <li className="info-list-item">
                            tel:
                            <span className="item-phone">
                                {person.personsInfo[0].phone}
                            </span>
                        </li>
                        <li className="info-list-item">
                            <ul className="list-link">
                                <li className="info-list-item">Mes liens :</li>{' '}
                                {person.personsInfo[0].links.map((link) => {
                                    return (
                                        <li
                                            key={link.name}
                                            className="list-link-item"
                                        >
                                            {link.name} :
                                            <span className="item-link">
                                                {link.link}
                                            </span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                    <div className="download-cv">
                        <IconContext.Provider
                            value={{
                                className: 'arrow-cv',
                            }}
                        >
                            <FaLongArrowAltRight />
                        </IconContext.Provider>
                        <a href="/Lescure_Frederic_Mars23_CV.pdf" download>
                            Mon CV
                        </a>
                        <IconContext.Provider
                            value={{
                                className: 'arrow-cv',
                            }}
                        >
                            <FaLongArrowAltLeft />
                        </IconContext.Provider>
                    </div>
                </section>
            ) : (
                <p>OUps</p>
            )}
        </main>
    )
}
