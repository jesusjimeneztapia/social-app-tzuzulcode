export default function Button({ children, type = 'button' }) {
	return (
		<button
			className='text-lg uppercase font-medium py-2 px-8 rounded-full text-green-300 border-2 border-green-300 hover:border-transparent hover:shadow-sm hover:shadow-green-300 hover:text-inherit hover:bg-green-500'
			type={type}
		>
			{children}
		</button>
	)
}
