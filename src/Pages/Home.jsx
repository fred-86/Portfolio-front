import React, { useEffect, useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Banner } from '../Components/Banner'
import { Slider } from '../Components/Slider'
import { useLocation } from 'react-router-dom'
// import { selectPersons } from '../_helpers__/selectorPersons'
// import { getPersons } from '../__services__/persons.action'
// Only for fake Data
// import { addData } from '../__fakers__/addData'

export function Home() {
    const location = useLocation()
    console.log(location)
    // Only for fake Data
    // addData()
    // const dispatch = useDispatch()
    // // const persons = useSelector(selectPersons)

    // const flag = useRef(false)
    // // if (!isEmpty(employees)) {
    // //     console.log('employees', employees)
    // // }

    // useEffect(() => {
    //     if (flag.current === false) {
    //         dispatch(getPersons())
    //     }
    //     return () => (flag.current = true)
    // }, [])
    return (
        <main className="home-wrapper">
            <Banner title="Hello !!!" />
            <Slider />
        </main>
    )
}
