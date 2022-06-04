import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import AuthForm from './AuthForm'
import { useAuthForm } from './authHooks'
import ProviderButton from './ProviderButton'

export default function AuthPage() {
	const { isLogin, ...rest } = useAuthForm()

	return (
		<div className='p-4 w-80 min-h-screen m-auto flex flex-col justify-center gap-5'>
			<div className='flex flex-col w-auto gap-3'>
				<p className='text-center text-3xl'>{isLogin ? 'Login' : 'Sign up'} with</p>
				<ProviderButton provider={GoogleAuthProvider.PROVIDER_ID} />
				<ProviderButton provider={FacebookAuthProvider.PROVIDER_ID} />
				<ProviderButton provider={GithubAuthProvider.PROVIDER_ID} />
			</div>
			<p className='text-xl'>Or with email</p>
			<AuthForm isLogin={isLogin} {...rest} />
		</div>
	)
}
