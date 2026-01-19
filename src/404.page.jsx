export const title = '404: Página No Encontrada';
export const layout = 'layout.jsx';

export default ({ comp }) => (
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
		<comp.ui.Button url='/'>Volver a la home</comp.ui.Button>
	</>
);
