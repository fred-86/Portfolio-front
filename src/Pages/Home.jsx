import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useDispatch, useSelector } from 'react-redux'
import { Banner } from '../Components/Banner'
import { Slider } from '../Components/Slider'
import { clearIdInterval } from '../__features__/counter.slice'

// import { selectPersons } from '../_helpers__/selectorPersons'
// import { getPersons } from '../__services__/persons.action'
// Only for fake Data
// import { addData } from '../__fakers__/addData'

export function Home() {
    const dispatch = useDispatch()
    // Only for fake Data
    // addData()
    // const dispatch = useDispatch()
    // // const persons = useSelector(selectPersons)

    useEffect(() => {
        const stopInterval = () => {
            dispatch(clearIdInterval())
        }
        stopInterval()
    }, [])
    return (
        <main className="home-wrapper">
            <Banner title="Hello !!!" />
            <Slider />
        </main>
    )
}
