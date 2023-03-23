import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../__services__/login.action'

const initialState = {
    loading: false,
    userToken: null, // for storing the JWT
    error: null,
    logged: false, // for monitoring the registration process.
}
export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogout: () => {
            localStorage.removeItem('userToken')
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = true
                state.error = null
            })

            .addCase(userLogin.fulfilled, (state, { payload }) => {
                state.loading = false
                state.logged = true
                state.userToken = payload.body.token
                state.error = null
            })
            .addCase(userLogin.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
    },
})

export default loginSlice.reducer
export const { setLogout } = loginSlice.actions
