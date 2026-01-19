export default function ({ icon, alt, text }) {
	return (
		<span className='flex gap-2 items-center font-semibold px-3 py-2 border border-emerald-500 bg-gray-600 rounded shadow-md shadow-gray-600/40'>
			<img
				className='h-6 w-6'
				src={icon}
				alt={alt}
			/>
			{text}
		</span>
	);
}
