import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// export const userLogin = createAsyncThunk(
//     'userLogin',
//     async (email, password) => {
//         console.log('yes')
//         try {
//             const auth = getAuth()
//             const userCredentials = await signInWithEmailAndPassword(
//                 auth,
//                 email,
//                 password
//             )
//             const user = userCredentials.user
//             console.log(user)
//         } catch (error) {
//             const errorCode = error.code
//             const errorMessage = error.message
//             return { errorCode: errorCode, errorMessage: errorMessage }
//         }
//     }
// )
export const userLogin = createAsyncThunk(
    'userLogin',
    async (credentials, { rejectWithValue }) => {
        try {
            const auth = getAuth()
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
            const user = userCredentials.user
            return user
        } catch (error) {
            const errorCode = error.code
            const errorMessage = error.message
            return rejectWithValue({ errorCode, errorMessage })
        }
    }
)
