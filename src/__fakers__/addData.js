import {
    getFakeUsers,
    getFakePerson,
    getFakeSkills,
    getFakeProject,
    getFakeDegree,
    getFakeCareer,
    createData,
} from './fakers'
import { getFirestore } from 'firebase/firestore'
import { Database } from '../__services__/DataBase'
/**
 * function to add fake data in firebsae
 */
export function addData() {
    const db = getFirestore(Database)
    createData(db, 'users', getFakeUsers())
    createData(db, 'persons', getFakePerson())
    createData(db, 'projects', getFakeProject())
    createData(db, 'skills', getFakeSkills())
    createData(db, 'careers', getFakeCareer())
    createData(db, 'degrees', getFakeDegree())
}
