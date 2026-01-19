export default function Button({ children, url, blank=true }) {
	return (
		<a
			className='rounded-md shadow-md shadow-gray-500/20 bg-green-700 font-black text-2xl text-slate-200 hover:text-green-700 hover:bg-slate-200 p-2'
			href={url}
			target={blank ? '_blank' : ''}
		>
			{children}
		</a>
	);
}
