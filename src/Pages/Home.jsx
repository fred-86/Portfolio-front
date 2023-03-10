import React from 'react'
import { Banner } from '../Components/Banner'
import {
    getFakeUsers,
    getFakePerson,
    getFakeSkills,
    createSkills,
} from '../__fakers__/fakers'
// import { getFirestore } from 'firebase/firestore'
// import { Database } from '../__services__/DataBase'

export function Home() {
    getFakeUsers()
    getFakePerson()
    getFakeSkills()
    // const db = getFirestore(Database)
    // createSkills(db)
    return (
        <main className="home-wrapper">
            <Banner title="Hello !!!" />
        </main>
    )
}
