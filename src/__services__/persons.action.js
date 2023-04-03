import { createAsyncThunk } from '@reduxjs/toolkit'
import { Database } from '../__services__/DataBase'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { addDoc, setDoc } from 'firebase/firestore'

const db = getFirestore(Database)
/**
 * Call async Api  for persons 's list
 * @function
 * @returns {Promise.<Void>}
 */
export const getPersons = createAsyncThunk('getPersons', async () => {
    try {
        const personsCol = collection(db, 'persons')
        const personsSnapshot = await getDocs(personsCol)
        const personsList = personsSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }))
        console.log(personsList)
        return personsList
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }
})

/**
 * call async Api for Register persons with addDoc
 * @function
 * @returns {Promise.<Void>}
 */
export const registerPersons = createAsyncThunk(
    '/createPersons',
    async (dataRegister) => {
        try {
            // let Ref = {}
            const personsCollection = collection(db, 'persons')
            const personsRef = await addDoc(personsCollection, dataRegister)
            // Ref = await addDoc(personsCollection, dataRegister)

            return personsRef
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
        }
    }
)
