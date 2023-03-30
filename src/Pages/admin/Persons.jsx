import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPersons } from '../../__services__/persons.action'
import { Banner } from '../../Components/Banner'
import { selectPersons } from '../../_helpers__/selectorPersons'
import { Loader } from '../../Components/Loader'
import { MaterialTable } from '../../Components/Admin/MaterialTable'

/**
 * Persons for check  in  Dashboard
 * @returns  {React.ReactElement}
 */
export function Persons() {
    const dispatch = useDispatch()
    const flag = useRef(false)
    const person = useSelector(selectPersons)

    useEffect(() => {
        if (flag.current === false) {
            dispatch(getPersons())
        }
        return () => (flag.current = true)
    }, [])
    return (
        <main className="persons-wrapper">
            <Banner title=" Persons" />
            {person.loading ? (
                <Loader />
            ) : (
                <MaterialTable testdata={person.personsInfo} />
            )}
        </main>
    )
}
