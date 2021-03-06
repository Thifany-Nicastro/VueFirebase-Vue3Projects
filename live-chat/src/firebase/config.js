import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCgC3Jvgv1Kyk9_1SY_bbHaLPfIuzkBI3E",
    authDomain: "udemy-vue-firebase-4afed.firebaseapp.com",
    projectId: "udemy-vue-firebase-4afed",
    storageBucket: "udemy-vue-firebase-4afed.appspot.com",
    messagingSenderId: "967679652520",
    appId: "1:967679652520:web:c050b90477fb458302c89d"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }