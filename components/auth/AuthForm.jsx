import { Form, Formik } from 'formik'
import Input from '../Input'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import Button from '../Button'

export default function AuthForm({ handleIsLogin, handleSubmit, isLogin }) {
	return (
		<Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
			{({ errors, handleChange, values: { email, password } }) => (
				<>
					<Form className='flex flex-col w-auto gap-2'>
						<Input
							id='email'
							label='Email'
							icon={<HiOutlineMail size={24} />}
							placeholder='Enter your email'
							type='email'
							value={email}
							onChange={handleChange}
							required
						/>
						<Input
							id='password'
							label='Password'
							icon={<RiLockPasswordLine size={24} />}
							placeholder='Enter your password'
							type='password'
							value={password}
							onChange={handleChange}
							required
						/>
						<Button type='submit'>{isLogin ? 'Login' : 'Sign up'}</Button>
						<small className='flex gap-1'>
							{isLogin ? 'You do not have an acount?' : 'Do you already have an account?'}
							<span className='underline text-blue-300 cursor-pointer' onClick={handleIsLogin}>
								{isLogin ? 'Sign Up' : 'Login'}
							</span>
						</small>
					</Form>
					{errors.credentials && (
						<small className='mt-2 inline-block py-2 px-4 bg-red-400'>{errors.credentials}</small>
					)}
				</>
			)}
		</Formik>
	)
}
