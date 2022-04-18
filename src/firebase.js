import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA15yKwpwtquZLmednZ2Z6L4OiBdKsz_a4',
  authDomain: 'dosssblog.firebaseapp.com',
  projectId: 'dosssblog',
  storageBucket: 'dosssblog.appspot.com',
  messagingSenderId: '435745335729',
  appId: '1:435745335729:web:2c88c497d27aeeb77c3590'
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export default db
