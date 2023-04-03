import {
    getFakeUsers,
    getFakePerson,
    getFakeSkills,
    getFakeProject,
    getFakeDegree,
    getFakeCareer,
    createData,
} from './fakers'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
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
export async function testAddData() {
    const testValues = {
        firstName: 'Fred',
        lastName: 'bob',
        email: 'bob@gmail.com',
        phone: '0645254178',
        avatar: 'image.png',
        status: true,
        links: [
            {
                name: 'facebook',
                link: 'http://localhost:3000/admin/persons',
            },
        ],
        createdAT: new Date().toLocaleDateString('fr'),
        updatedAt: new Date().toLocaleDateString('fr'),
    }
    const db = getFirestore(Database)
    let Ref = {}
    const personsCollection = collection(db, 'persons')
    // const personsRef = await addDoc(personsCollection, dataRegister)
    Ref = await addDoc(personsCollection, testValues)
    console.log(Ref)
    return Ref
}
