import { createSlice } from '@reduxjs/toolkit'

export const intervalSlice = createSlice({
    name: 'interval',
    initialState: {
        idInterval: 0,
    },
    reducers: {
        setIdInterval: (state, action) => {
            state.idInterval = action.payload
        },
        clearIdInterval: (state) => {
            clearInterval(state.idInterval)
            return { ...state, idInterval: 0 }
        },
    },
})

export const { setIdInterval, clearIdInterval } = intervalSlice.actions

export default intervalSlice.reducer
