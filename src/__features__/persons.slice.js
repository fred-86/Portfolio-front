import { createSlice } from '@reduxjs/toolkit'
import { getPersons } from '../__services__/persons.action'

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
                console.log(payload)
                state.loading = false
                state.personsInfo = payload
                state.error = null
            })
            .addCase(getPersons.rejected, (state, payload) => {
                state.loading = false
                state.error = payload
            })
    },
})
export default personsSlice.reducer
