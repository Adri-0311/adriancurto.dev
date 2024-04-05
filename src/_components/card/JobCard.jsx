export default function ({ comp, job, devTech }) {
	return (
		<div className='border-2 border-gray-500 bg-stone-900 rounded-xl p-6 shadow-md shadow-stone-900'>
			<h3 className='border-b-2'>{job.company}</h3>
			<div>
				<p className='bg-stone-800 rounded-2xl w-fit py-1 px-3 mb-2'>
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
					{job.tech.map((x, index) => {
						const techLowCase = x.toLowerCase();
						return (
							<li key={index + techLowCase}>
								<comp.card.TechCard
									icon={devTech[techLowCase].icon}
									alt={`tecnología ${techLowCase}`}
									text={x}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
