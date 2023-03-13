// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAvTDMZQXd301gsQFjU8Vm5TRfg9CM3Uzc',
    authDomain: 'portfolio-c6dcd.firebaseapp.com',
    databaseURL:
        'https://portfolio-c6dcd-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'portfolio-c6dcd',
    storageBucket: 'portfolio-c6dcd.appspot.com',
    messagingSenderId: '755116820597',
    appId: '1:755116820597:web:21d442d0e04dd677a3503c',
    measurementId: 'G-X2NR21DQ52',
}

// Initialize Firebase
export const Database = initializeApp(firebaseConfig)
export const auth = getAuth(Database)
// const analytics = getAnalytics(app)
