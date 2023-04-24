import React, { useEffect } from 'react'
import { Banner } from '../../Components/Banner'
// import { testAddData } from '../../__fakers__/addData'

export function DashBoard() {
    // useEffect(() => {
    //     testAddData()
    // }, [])
    return (
        <main className="dashboard-wrapper">
            <Banner title="Bienvenue sur le Dashboard" />
        </main>
    )
}
