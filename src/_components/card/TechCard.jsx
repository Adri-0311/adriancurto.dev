export default function ({ icon, alt, text }) {
	return (
		<span className='flex gap-2 items-center font-semibold bg-gray-600 rounded px-3 py-2 shadow-md shadow-gray-800/60'>
			<img
				className='h-6 w-6'
				src={icon}
				alt={alt}
			/>
			{text}
		</span>
	);
}
