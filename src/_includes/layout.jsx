export default ({ title, children, comp }) => (
	<html lang='es'>
		<head>
			<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			/>
			<meta name='author' content='Adrián Curto Sánchez' />
			<meta name='description' content='Web personal de Adrián Curto.' />
			<title>{title}</title>
			<link rel='stylesheet' href='../styles.css'></link>
		</head>
		<body>
			<comp.navigation.Nav />
			<main className='container mx-auto p-8 lg:px-60 xl:px-80'>
				<section>{children}</section>
			</main>
			<comp.footer.Footer />
		</body>
	</html>
);
