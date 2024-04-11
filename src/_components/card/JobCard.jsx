export default function ({ comp, job, dev }) {
	return (
		<div className='border-2 border-gray-500 bg-stone-900 rounded-xl p-6 shadow-md shadow-stone-900'>
			<h3 className=''>{job.company}</h3>
			<hr />
			<div>
				<p className='bg-stone-800 rounded-2xl w-fit py-1 px-3 my-4'>
					{job.date} <b>({job.position})</b>
				</p>
				<p
					dangerouslySetInnerHTML={{
						__html: job.content,
					}}
				>
				</p>
				<hr />
				<ul className='flex justify-center flex-wrap gap-4 mt-6'>
					{job.tech.map((tech, index) => {
						const techLowCase = tech.toLowerCase();
						return (
							<li key={index + techLowCase}>
								<comp.card.TechCard
									icon={dev.tech_data.devTech[techLowCase].icon}
									alt={`tecnología ${techLowCase}`}
									text={tech}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
