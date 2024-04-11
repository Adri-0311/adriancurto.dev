export const title = 'Mi setup';
export const layout = 'layout.jsx';

export default ({
	setup,
}) => (
	<>
		<h1>{title}.</h1>

		<h2>Sistema operativo.</h2>
		<p>
			Como sitema operativo utilizo <b>Pop!_OS 22.04 LTS</b>{' '}
			desarrollado por{' '}
			<a href={setup.setup_data.system76}>system76</a>, el cual hace uso
			de un entorno de escritorio{' '}
			<b>Gnome</b>. Aunque se encuentran desarrollando su propio
			escritorio basado en <b>Rust</b> llamado{' '}
			<a href={setup.setup_data.cosmic} target='_blank'>
				Cosmic
			</a>
			.
		</p>
		<img
			className='rounded mb-6 hover:scale-150 transition-transform duration-300 ease-in'
			src='/img/pop_os.png'
			alt='escritorio'
			transform-images='avif webp jpg 1080@2'
		/>

		<h3>Extensiones Gnome.</h3>
		<ul role='list' className='list-inside list-disc mb-5 p-2'>
			{setup.setup_data.extensionesGnome.map((extension, index) => {
				return (
					<li key={index + extension.text}>
						<a href={extension.path} target='_blank'>
							{extension.text}
						</a>
					</li>
				);
			})}
		</ul>

		<h2>Software.</h2>
		<ul role='list' className='list-inside list-disc'>
			<li>
				IDE{' '}
				<a href={setup.software_data.software.vscodium.path}>
					{setup.software_data.software.vscodium.text}
				</a>{' '}
				con las siguientes extensiones:{' '}
			</li>
			<ul role='list' className='list-inside list-disc ml-4'>
				{setup.setup_data.extensionesVscodium.map(
					(extension, index) => {
						return (
							<li key={index + extension.text}>
								<a href={extension.path} target='_blank'>
									{extension.text}
								</a>
							</li>
						);
					},
				)}
			</ul>
			<li>Navegador: Firefox</li>
			<li>
				Gestor de paquetes:{' '}
				<a
					href={setup.software_data.software.flatpak.path}
					target='_blank'
				>
					{setup.software_data.software.flatpak.text}
				</a>
			</li>
			<li>
				Herramienta para testing de APIs:{' '}
				<a
					href={setup.software_data.software.insomnia.path}
					target='_blank'
				>
					{setup.software_data.software.insomnia.text}
				</a>
			</li>
		</ul>
	</>
);
