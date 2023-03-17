import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
// import renderer from 'react-test-renderer'

// Import des composants à tester et des mocks
import { Home } from '../Pages/Home'
// import { Slider } from '../Components/Slider'

// jest.mock('../Components/Slider', () => {
//     return {
//         __esModule: true,
//         default: () => {
//             return <div data-testid="Swiper-testId">Mock Slider Component</div>
//         },
//     }
// })
jest.mock('swiper/react', () => ({
    Swiper: ({ children }) => <div data-testid="Swiper-testId">{children}</div>,
    SwiperSlide: ({ children }) => (
        <div data-testid="SwiperSlide-testId">{children}</div>
    ),
}))

jest.mock('swiper', () => {
    const Swiper = () => {}
    const SwiperSlide = () => {}
    const EffectCube = () => {}
    const Pagination = () => {}
    return { Swiper, SwiperSlide, EffectCube, Pagination }
})

// Ajout des mocks pour Firebase

// jest.mock('firebase/app', () => {
//     const auth = {
//         onAuthStateChanged: jest.fn(),
//         createUserWithEmailAndPassword: jest.fn(),
//         signInWithEmailAndPassword: jest.fn(),
//         signOut: jest.fn(),
//         currentUser: jest.fn(),
//     }
//     return {
//         initializeApp: jest.fn(),
//         auth: jest.fn(() => auth),
//     }
// })

// jest.mock('firebase/app', () => {
//     const auth = {
//         onAuthStateChanged: jest.fn(),
//         createUserWithEmailAndPassword: jest.fn(),
//         signInWithEmailAndPassword: jest.fn(),
//         signOut: jest.fn(),
//         currentUser: jest.fn(),
//     }
//     const options = {
//         apiKey: 'fake-key',
//         authDomain: 'fake-domain.firebaseapp.com',
//         databaseURL: 'https://fake-domain.firebaseio.com',
//         projectId: 'fake-project-id',
//         storageBucket: 'fake-domain.appspot.com',
//         messagingSenderId: '123456789',
//         appId: '1:123456789:web:0123456789abcdef',
//         measurementId: 'G-ABCDEF1234',
//     }
//     return {
//         initializeApp: jest.fn(() => ({
//             options,
//             auth: () => auth,
//         })),
//         auth: jest.fn(() => auth),
//     }
// // })
// jest.mock('firebase/app', () => {
//     const auth = {
//         onAuthStateChanged: jest.fn(),
//         createUserWithEmailAndPassword: jest.fn(),
//         signInWithEmailAndPassword: jest.fn(),
//         signOut: jest.fn(),
//         currentUser: jest.fn(),
//     }
//     const getAuth = jest.fn(() => auth)
//     return {
//         initializeApp: jest.fn(),
//         auth: getAuth,
//         getAuth: getAuth,
//     }
// })

// Définition des tests
describe('Home Page', () => {
    it('should render the Home component with Slider', () => {
        render(<Home />)
        const sliderElement = screen.getByTestId('Swiper-testId')
        expect(sliderElement).toBeInTheDocument()
    })
})
