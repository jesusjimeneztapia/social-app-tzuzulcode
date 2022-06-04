export default function Input({
	id,
	label,
	placeholder,
	icon,
	iconRight = false,
	type = 'text',
	required = false,
	onChange,
	value,
}) {
	return (
		<div className='flex flex-col items-start w-fit gap-1'>
			<label className='cursor-pointer' htmlFor={id}>
				{label}
			</label>
			<div className='relative overflow-hidden rounded-md'>
				<input
					className={`bg-transparent w-72 py-2 px-4 rounded-md border border-gray-100 placeholder:text-gray-500 focus:outline-purple-600 focus:border-transparent ${
						icon && iconRight ? 'pr-12' : 'pl-12'
					}`}
					id={id}
					name={id}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					type={type}
					required={required}
				/>
				{icon && (
					<span className={`absolute top-1/2 -translate-y-1/2 ${iconRight ? 'right-4' : 'left-4'}`}>
						{icon}
					</span>
				)}
			</div>
		</div>
	)
}
