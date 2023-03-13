import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Data/data'
import { Card } from './Card'

export function CardProject() {
    return (
        <Link to="/profil">
            <Card title={data[1].title} img={data[1].picture} />
        </Link>
    )
}
