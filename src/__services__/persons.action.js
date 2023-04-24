import { createAsyncThunk } from '@reduxjs/toolkit'
import { Database } from '../__services__/DataBase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { addDoc, doc, updateDoc } from 'firebase/firestore'

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'

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
            console.log(dataRegister)
            // Upload the image to Firebase Storage
            const storage = getStorage()

            const file = dataRegister.avatar // récupère le premier fichier sélectionné

            // Crée une nouvelle instance de FormData et y ajoute le fichier sélectionné
            const formData = new FormData()
            formData.set('avatar', file)

            const avatarRef = ref(storage, `avatar/${file.name}`)

            const uploadTask = uploadBytesResumable(avatarRef, file)
            await uploadTask
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
            console.log(downloadUrl)
            const personsCollection = collection(db, 'persons')
            const personsRef = await addDoc(personsCollection, {
                ...dataRegister,
                avatar: downloadUrl,
            })

            return personsRef
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            throw new Error(error.message)
        }
    }
)

/**
 * call async Api for Update persons with addDoc
 * @function
 * @returns {Promise.<Void>}
 */
export const updatePersons = createAsyncThunk(
    '/updatePersons',
    async ({ id, dataUpdate }) => {
        console.log('id', id)
        try {
            const docRef = doc(db, 'persons', id)
            await updateDoc(docRef, dataUpdate)
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            throw new Error(error.message)
        }
    }
)
