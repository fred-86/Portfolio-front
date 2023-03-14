import { Link } from 'react-router-dom'
import { data } from '../Data/data'
import { Card } from './Card'
/**
 * Card for resume profil
 * @returns  {React.ReactElement}
 */
export function CardProfil() {
    return (
        <Link to="/Profil">
            <Card
                title={data[0].title}
                img={data[0].picture}
                customclass="img-profil "
            />
        </Link>
    )
}
