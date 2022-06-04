import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { auth } from '../../config/firebase'

export function useAuthForm() {
	const router = useRouter()
	const [isLogin, setIsLogin] = useState(true)

	const handleIsLogin = () => {
		setIsLogin((value) => !value)
	}

	const handleSubmit = async ({ email, password }, { setSubmitting, setErrors }) => {
		try {
			if (isLogin) {
				await signInWithEmailAndPassword(auth, email, password)
			} else {
				await createUserWithEmailAndPassword(auth, email, password)
			}
			setSubmitting(false)
			return router.replace('/')
		} catch (error) {
			console.log({ error })
			setSubmitting(false)
			return setErrors({ credentials: 'The credentials are incorrect' })
		}
	}

	return { isLogin, handleIsLogin, handleSubmit }
}
