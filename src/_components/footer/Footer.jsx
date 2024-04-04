export default function ({ lumeLand, denoDeploy, proyectCode }) {
  return (
    <footer className='container mx-auto p-10 flex flex-col justify-center items-center text-center sm:text-left'>
      <p>
        <a href='/license'>GNU General Public License</a>, creado por{' '}
        <b>Adrián Curto</b>.
      </p>
      <p>
        Construido con{' '}
        <a href={lumeLand} target='_blank'>
          🔥Lume
        </a>{' '}
        y desplegado en{' '}
        <a href={denoDeploy} target='_blank'>
          Deno deploy
        </a>
        .
      </p>
      <p>
        Código fuente disponible en{' '}
        <a href={proyectCode} target='_blank'>
          GitHub
        </a>
        .
      </p>
    </footer>
  );
}
