import { createSlice } from '@reduxjs/toolkit'
import { getPersons, registerPersons } from '../__services__/persons.action'

const initialState = {
    loading: true,
    personsInfo: [],
    error: null,
}

export const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPersons.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getPersons.fulfilled, (state, { payload }) => {
                state.loading = false
                state.personsInfo = payload
                state.error = null
            })
            .addCase(getPersons.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
            .addCase(registerPersons.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerPersons.fulfilled, (state, action) => {
                console.log('persons', state.personsInfo)
                console.log('action', action.meta)
                state.loading = false
                state.error = null
                state.personsInfo = [
                    ...state.personsInfo,
                    {
                        firstName: action.meta.arg.firstName,
                        lastName: action.meta.arg.lastName,
                        email: action.meta.arg.email,
                        phone: action.meta.arg.phone,
                        avatar: action.meta.arg.avatar,
                        status: action.meta.arg.status,
                        links: [
                            {
                                name: action.meta.arg.links.name,
                                link: action.meta.arg.links.link,
                            },
                        ],
                        createdAT: action.meta.arg.firstName,
                        updatedAt: action.meta.arg.firstName,
                    },
                ]
            })
            .addCase(registerPersons.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})
export default personsSlice.reducer
