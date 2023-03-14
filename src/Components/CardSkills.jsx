import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../Data/data'
import { Card } from './Card'
/**
 *  Card for resume  skills
 * @returns  {React.ReactElement}
 */
export function CardSkills() {
    return (
        <Link to="/Skills">
            <Card title={data[2].title} img={data[2].picture} />
        </Link>
    )
}
