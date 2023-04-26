import { createAsyncThunk } from '@reduxjs/toolkit'
import { Database } from '../__services__/DataBase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import {
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    serverTimestamp,
} from 'firebase/firestore'

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from 'firebase/storage'
import { generateUniqueFilename } from './GenerateUniqueFileName'

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
            const fileName = generateUniqueFilename(file.name)

            const avatarRef = ref(storage, `avatar/${fileName}`)

            const uploadTask = uploadBytesResumable(avatarRef, file)
            await uploadTask
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
            console.log(downloadUrl)
            const personsCollection = collection(db, 'persons')
            const personsRef = await addDoc(personsCollection, {
                ...dataRegister,
                avatar: downloadUrl,
                createdAt: serverTimestamp(),
                updatedAt: null,
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
    async ({ id, dataUpdate, file }) => {
        console.log('id', id)
        try {
            const docRef = doc(db, 'persons', id)

            let downloadUrl = dataUpdate.avatar
            if (file) {
                const storage = getStorage()

                // Delete the old image
                if (dataUpdate.avatar) {
                    const oldAvatarRef = ref(storage, dataUpdate.avatar)
                    await deleteObject(oldAvatarRef)
                }

                // Upload the new image
                const formData = new FormData()
                formData.set('avatar', file)
                const fileName = generateUniqueFilename(file.name)
                const avatarRef = ref(storage, `avatar/${fileName}`)
                const uploadTask = uploadBytesResumable(avatarRef, file)
                await uploadTask
                downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
            }
            // Update the document with the new data and image URL
            await updateDoc(docRef, {
                ...dataUpdate,
                avatar: downloadUrl,
                updatedAt: serverTimestamp(),
            })
            return docRef
        } catch (error) {
            console.log(error)
            // return custom error message from API if any
            throw new Error(error.message)
        }
    }
)
/**
 *
 * @param {*} id
 * @returns
 */
export const deletePersons = createAsyncThunk(
    '/deletePersons',
    async (person) => {
        try {
            // Supprime le fichier image du stockage Firebase
            const storage = getStorage()
            const avatarRef = ref(storage, person.avatar)
            await deleteObject(avatarRef)

            const docRef = doc(db, 'persons', person.id)
            await deleteDoc(docRef)
            console.log('Document successfully deleted!')
        } catch (error) {
            console.error('Error removing document: ', error)
            throw new Error(error.message)
        }
    }
)
