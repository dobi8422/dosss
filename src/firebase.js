import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXX'
}

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

export default db
