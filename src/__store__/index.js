import { configureStore } from '@reduxjs/toolkit'
import personsReducer from '../__features__/persons.slice'

export const store = configureStore({
    reducer: {
        persons: personsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
