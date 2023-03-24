import { configureStore } from '@reduxjs/toolkit'
import personsReducer from '../__features__/persons.slice'
import counterReducer from '../__features__/counter.slice'
import loginReducer from '../__features__/login.slice'

export const store = configureStore({
    reducer: {
        persons: personsReducer,
        counter: counterReducer,
        auth: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
