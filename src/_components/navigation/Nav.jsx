export default function ({ menu, githubUrl, linkedinUrl }) {
	return (
		<header className='md:sticky top-0 bg-gradient-to-b from-neutral-900 from-80%'>
			<nav className='max-w-7xl mx-auto grid grid-row-3 justify-items-center gap-4  md:grid-cols-3 md:gap-0 md:justify-items-stretch place-content-center px-8 px-md-32 pt-6 pb-12 md:pb-10 w-full'>
				<a className='text-green-500 text-4xl font-bold' href='/'>
					Adrián Curto
				</a>

				<ul className='flex justify-center items-center gap-2'>
					{menu.map((elemento, index) => {
						return (
							<li key={index + elemento.text}>
								<a
									className='px-2 py-1 rounded-md text-2xl font-semibold text-slate-200 hover:text-neutral-800 hover:bg-slate-200 hover:shadow-md hover:shadow-neutral-800/90 hover:transition-colors duration-200'
									href={elemento.path}
								>
									{elemento.text}
								</a>
							</li>
						);
					})}
				</ul>

				<div className='md:justify-self-end flex items-center gap-2'>
					<a
						href={githubUrl}
						target='_blank'
						aria-label='Accede a mis repositorios en GitHub'
					>
						<svg
							className='h-6 w-6 fill-slate-300 hover:fill-green-400'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>GitHub</title>
							<path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
						</svg>
					</a>
					<a
						href={linkedinUrl}
						target='_blank'
						aria-label='Accede a mi perfil de Linkedin'
					>
						<svg
							className='h-6 w-6 fill-slate-300 hover:fill-green-400'
							role='img'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>LinkedIn</title>
							<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
						</svg>
					</a>
					<a
						href='./static/Adrian_Curto_Sanchez-CV_2023.pdf'
						download=''
						target='_self'
						aria-label='Descarga mi curriculum'
					>
						<svg
							className='h-6 w-6 fill-slate-300 hover:fill-green-400'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 45.057 45.057'
						>
							<g>
								<g id='_x35_8_24_'>
									<g>
										<path d='M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301     c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541     c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853     c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203     c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414     c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895     c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416     c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422     s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312     c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593     C19.68,25.023,19.627,25.214,19.558,25.389z' />
										<polygon points='26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616         ' />
										<path d='M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z' />
									</g>
								</g>
							</g>
						</svg>
					</a>
				</div>
			</nav>
		</header>
	);
}
