import { createSlice } from '@reduxjs/toolkit'
import {
    getPersons,
    registerPersons,
    updatePersons,
} from '../__services__/persons.action'

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
                        status: false,
                        links: [
                            {
                                name: action.meta.arg.links.name,
                                link: action.meta.arg.links.link,
                            },
                        ],
                        createdAT: new Date(),
                        updatedAt: null,
                    },
                ]
            })
            .addCase(registerPersons.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(updatePersons.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(updatePersons.fulfilled, (state, action) => {
                console.log('persons', state.personsInfo)
                console.log('action', action.meta.arg.dataUpdate.links)
                state.loading = false
                state.error = null
                state.personsInfo = [
                    ...state.personsInfo,
                    {
                        firstName: action.meta.arg.dataUpdate.firstName,
                        lastName: action.meta.arg.dataUpdate.lastName,
                        email: action.meta.arg.dataUpdate.email,
                        phone: action.meta.arg.dataUpdate.phone,
                        avatar: action.meta.arg.dataUpdate.avatar,
                        status: action.meta.arg.dataUpdate.status,
                        links: action.meta.arg.dataUpdate.links.map((link) => ({
                            name: link.name,
                            link: link.link,
                        })),
                        createdAT: action.meta.arg.dataUpdate.firstName,
                        updatedAt: action.meta.arg.dataUpdate.firstName,
                    },
                ]
            })
            .addCase(updatePersons.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    },
})
export default personsSlice.reducer
