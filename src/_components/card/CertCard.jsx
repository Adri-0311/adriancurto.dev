export default function CertCard({ comp, title, image, alt, url }) {
	return (
		<div className='flex flex-col gap-6 items-center max-w-80 bg-stone-900 rounded-xl p-6 shadow-md shadow-stone-900'>
			<h3 className='mb-0'>{title}</h3>
			<hr className='w-full' />
			<img
				className=''
				src={image}
				alt={alt}
				transform-images='avif webp jpg 300@2'
			/>
			<comp.ui.Button url={url} blank={true}>
				Ver certificado
			</comp.ui.Button>
		</div>
	);
}
