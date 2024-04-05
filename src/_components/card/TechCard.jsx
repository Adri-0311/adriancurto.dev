export default function ({ icon, alt, text }) {
	return (
		<span className='flex gap-1 items-center bg-gray-700 rounded px-2 py-1 shadow-md shadow-gray-800/60'>
			<img
				className='h-5 w-5'
				src={icon}
				alt={alt}
			/>
			{text}
		</span>
	);
}
