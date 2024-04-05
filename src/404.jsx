export const title = '404: Página No Encontrada';
export const layout = 'layout.jsx';

export default () => (
	<>
		<h2>
			Error 404:
			<br />
			Página no encontrada.
		</h2>
		<p>
			¿Desea volver a la página principal?
			<br />
		</p>
		<a
			href='/'
			className='rounded bg-green-700 font-black text-2xl text-slate-200 hover:text-green-700 hover:bg-slate-200 p-2'
		>
			Volver a la home
		</a>
	</>
);
