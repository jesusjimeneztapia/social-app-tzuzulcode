import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import {
	FIREBASE_APIKEY,
	FIREBASE_APPID,
	FIREBASE_AUTHDOMAIN,
	FIREBASE_MEASUREMENTID,
	FIREBASE_MESSAGESENDERID,
	FIREBASE_PROJECTID,
	FIREBASE_STORAGEBUCKET,
} from './environment'

const firebaseConfig = {
	apiKey: FIREBASE_APIKEY,
	authDomain: FIREBASE_AUTHDOMAIN,
	projectId: FIREBASE_PROJECTID,
	storageBucket: FIREBASE_STORAGEBUCKET,
	messagingSenderId: FIREBASE_MESSAGESENDERID,
	appId: FIREBASE_APPID,
	measurementId: FIREBASE_MEASUREMENTID,
}

const app = initializeApp(firebaseConfig)

export const database = getFirestore(app)
export const auth = getAuth(app)
