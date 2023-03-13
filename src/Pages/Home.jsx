import React from 'react'
import { Banner } from '../Components/Banner'
// Only for fake Data
// import { addData } from '../__fakers__/addData'

export function Home() {
    // Only for fake Data
    // addData()
    return (
        <main className="home-wrapper">
            <Banner title="Hello !!!" />
        </main>
    )
}
