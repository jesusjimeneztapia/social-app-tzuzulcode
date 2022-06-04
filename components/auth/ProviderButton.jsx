import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsFacebook } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { providerLogin } from '../../libs/auth'

const providers = {
	[GoogleAuthProvider.PROVIDER_ID]: {
		text: 'Google',
		styles: 'bg-white text-black hover:shadow-gray-700',
		icon: <FcGoogle />,
		providerId: GoogleAuthProvider.PROVIDER_ID,
	},
	[FacebookAuthProvider.PROVIDER_ID]: {
		text: 'Facebook',
		styles: 'bg-blue-800 text-white hover:shadow-gray-700',
		icon: <BsFacebook />,
		providerId: FacebookAuthProvider.PROVIDER_ID,
	},
	[GithubAuthProvider.PROVIDER_ID]: {
		text: 'GitHub',
		styles: 'bg-black text-white hover:shadow-gray-800',
		icon: <BsGithub />,
		providerId: GithubAuthProvider.PROVIDER_ID,
	},
}

function useProvider({ provider }) {
	const router = useRouter()

	const loginWithProvider = async () => {
		try {
			await providerLogin(provider)
			router.replace('/')
		} catch (error) {
			console.log('error')
		}
	}
	return { ...providers[provider], loginWithProvider }
}

export default function ProviderButton({ provider }) {
	const { text, icon, styles, loginWithProvider } = useProvider({ provider })

	return (
		<button
			className={`font-bold text-xl rounded py-2 px-8 shadow-md flex items-center justify-center gap-4 ${styles}`}
			onClick={loginWithProvider}
		>
			{icon}
			{text}
		</button>
	)
}
