export const title = 'Adrián Curto';
export const layout = 'layout.jsx';

export default ({ devTech, comp, jobs, softSkills }) => (
	<>
		<div className='mb-16'>
			<div className='flex text-4xl gap-2 justify-start'>
				<span className='text-green-500'>$</span>
				<span className='animate-typing overflow-hidden whitespace-nowrap'>
					whoami
				</span>
				<span className='animate-blink-caret border-r-[12px] border-inherit'>
				</span>
			</div>
			<h1 className='animate-opacity-out'>{title.split(' ')[0]}</h1>

			{
				/* <img
        className='md:float-right rounded-full h-52 w-52 m-auto mb-4 md:mx-8 m shadow-md'
        src='./img/profile.png'
        alt='Adrián Curto perfil'
        transform-images='avif webp png jpg 480'
      /> */
			}
			<p>
				Soy{' '}
				<b>desarrollador web</b>. Desde que descubrí el mundo de la web
				considero que es el futuro, solo hay que ver como las grandes
				empresas migran sus aplicaciones de escritorio a aplicaciones
				como servicio (
				<b>SaaS</b>) en la web.
			</p>
			<p>
				Actualmente me gustaría dar un giro en mi carrera profesional y
				poder trabajar con las siguientes tecnogías:
			</p>
			<ul className='flex flex-wrap gap-4 justify-center'>
				<li>
					<comp.card.TechCard
						icon={devTech.mongodb.icon}
						alt='mongodb icon'
						text='MongoDB'
					/>
				</li>
				<li>
					<comp.card.TechCard
						icon={devTech.express.icon}
						alt='express icon'
						text='Express'
					/>
				</li>
				<li>
					<comp.card.TechCard
						icon={devTech.react.icon}
						alt='react icon'
						text='React'
					/>
				</li>
				<li>
					<comp.card.TechCard
						icon={devTech.node.icon}
						alt='nodejs icon'
						text='Nodejs'
					/>
				</li>
				<li>
					<comp.card.TechCard
						icon={devTech.typescript.icon}
						alt='typescript icon'
						text='TypeScript'
					/>
				</li>
			</ul>
		</div>

		<div className='mb-16'>
			<h2>Experiencia laboral</h2>
			<comp.card.jobcard job={jobs[0]} />
		</div>

		<div className=''>
			<h2>Soft Skills</h2>
			<ul className='flex flex-wrap gap-4 justify-center'>
				{softSkills.map((skill) => {
					return (
						<li>
							<comp.skill.Skill>{skill}</comp.skill.Skill>
						</li>
					);
				})}
			</ul>
		</div>
	</>
);
