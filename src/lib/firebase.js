import Firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAh5dysThGqXt5uCwQEU2Ecp0q9b6nhs2E',
  authDomain: 'imstagran-c5956.firebaseapp.com',
  projectId: 'imstagran-c5956',
  storageBucket: 'imstagran-c5956.appspot.com',
  messagingSenderId: '671438778087',
  appId: '1:671438778087:web:58ce19746dbe3cfebc7c42',
  measurementId: 'G-DL4XJTSZDW'
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore
const storage = Firebase.storage()

export { firebase, FieldValue, storage }
