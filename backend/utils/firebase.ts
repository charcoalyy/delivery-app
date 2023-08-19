import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'delivery-app-396404.firebaseapp.com',
  projectId: 'delivery-app-396404',
  storageBucket: 'delivery-app-396404.appspot.com',
  messagingSenderId: '815958744625',
  appId: '1:815958744625:web:3cfa2974ac35425d553f10',
  measurementId: 'G-W97EH7KT2M',
  databaseURL: 'https://delivery-app-396404-default-rtdb.firebaseio.com/',
}

const firebase = initializeApp(firebaseConfig)
const database = getDatabase(firebase)

export default firebase
