import { configureStore } from '@reduxjs/toolkit'
import personsReducer from '../__features__/persons.slice'
import counterReducer from '../__features__/counter.slice'

export const store = configureStore({
    reducer: {
        persons: personsReducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
