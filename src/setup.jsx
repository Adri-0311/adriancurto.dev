export const title = 'Mi setup';
export const layout = 'layout.jsx';

export default ({
  system76,
  extensionesGnome,
  software,
  extensionesVscodium,
  cosmic,
}) => (
  <>
    <h1>{title}.</h1>

    <h2>Sistema operativo.</h2>
    <p>
      Como sitema operativo utilizo <b>Pop!_OS 22.04 LTS</b> desarrollado por{' '}
      <a href={system76}>system76</a>, el cual hace uso de un entorno de
      escritorio <b>Gnome</b>. Aunque se encuentran desarrollando su propio
      escritorio basado en <b>Rust</b> llamado{' '}
      <a href={cosmic} target='_blank'>
        Cosmic
      </a>
      .
    </p>
    <img
      className='rounded mb-6 hover:scale-150 transition-transform duration-300 ease-in'
      src='../img/pop_os.png'
      alt='escritorio'
      transform-images='avif webp png jpg 1080'
    />

    <h3>Extensiones Gnome.</h3>
    <ul role='list' className='list-inside list-disc mb-5 p-2'>
      {extensionesGnome.map((extension, index) => {
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
        IDE <a href={software.vscodium.path}>{software.vscodium.text}</a> con
        las siguientes extensiones:{' '}
      </li>
      <ul role='list' className='list-inside list-disc ml-4'>
        {extensionesVscodium.map((extension, index) => {
          return (
            <li key={index + extension.text}>
              <a href={extension.path} target='_blank'>
                {extension.text}
              </a>
            </li>
          );
        })}
      </ul>
      <li>Navegador: Firefox</li>
      <li>
        Gestor de paquetes:{' '}
        <a href={software.flatpak.path} target='_blank'>
          {software.flatpak.text}
        </a>
      </li>
      <li>
        Herramienta para testing de APIs:{' '}
        <a href={software.insomnia.path} target='_blank'>
          {software.insomnia.text}
        </a>
      </li>
    </ul>
  </>
);
