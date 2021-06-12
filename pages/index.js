import Head from 'next/head'
import dynamic from 'next/dynamic'
export default function Home() {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => (
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    ),
  })
  const mes = {
    trackDelMes: {
      title: 'Maceo Plex Vs Faithless - Insomnia 2021 (Epic Mix)',
      url: 'https://www.youtube.com/embed/vhg2JH1DVBU',
    },
    setDelMes: {
      title: 'Josh Butler Live Sunrise DJ Set From Arataki, New Zealand',
      url: 'https://www.youtube.com/embed/3sxBEDlk4iQ',
    },
  }
  const dj = {
    nombre: 'Sébastien Léger',
    pais: 'Francia',
    genero: 'Progress',
    track: 'Sebastien Leger - Lanarka',
    trackLink: 'https://www.youtube.com/watch?v=-2qWVnT5Jok',
    set: 'https://www.youtube.com/embed/jfRYBufKFJA',
    info: 'Sebastien Leger es de esos productores que mamaron mucho french filter house y que ahora quieren rememorar ese sonido sin necesidad de recurrir a los mismos clichés que sus maestros. Precursores como Ian Pooley, Daft Punk o Dj Sneak que le hicieron bailar y soñar de bien joven y que con el paso del tiempk le han empujado a dedicarse a la música house que tanto le apasiona. Su estilo bascula siempre entre la pasión del house y la presencia descarada del electro-clash más desvergonzado y hedonista. También ha trabajado para sellos de techno y house como Defected, Ovum o Intec. Junto a su compañero Jimmy Van del Velde lleva por delante los sellos Cyclik, Subkroniq y el más reciente BITS..Fuente: Clubbing Spain',
    foto: 'https://i1.sndcdn.com/avatars-ySgaNsEi8bjLhtEE-6Sqk3Q-t500x500.jpg',
    facebook: 'https://es-la.facebook.com/sebastienleger',
    soundcloud: 'https://soundcloud.com/sebastienleger'
  }
  return (
    <>
      <Head>
        <title>Techno Station Cba</title>
        <meta
          name='description'
          content='the best techno music in the web, is here'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-center mt-3 mb-4'>
        Bienvenidos a Techno Station Cba
      </h1>
      <div className='row gx-0'>
        <div className='d-flex justify-content-center'>
          <div className='col-12 col-md-6'>
            <div className='card mb-5 d-flex justify-content-center'>
              <img
                className='rounded-circle mt-1'
                src={dj.foto}
                alt={dj.nombre}
                width={500}
                height={300}
              />
              <div className='card-body text-center'>
                <h5 className='card-title text-dark'>{dj.nombre}</h5>
                <p className='card-text text-dark'>DJ del mes</p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Pais: {dj.pais}</li>
                <li className='list-group-item'>
                  Genero: {dj.genero}
                  <i className='fas fa-headphones ms-1'></i>
                </li>
                <li className='list-group-item'>{dj.info}</li>
                <li className='list-group-item'>
                  <div className='d-flex'>
                    <p>Top Track:{dj.track}</p>
                    <p>
                      .You can Listen,
                      <a
                        rel='noopener'
                        href='https://www.youtube.com/watch?v=quY5Vky6vZI'
                        target='_blank'
                        className='text-info ms-1'
                      >
                        here
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
              <div className='card-body d-flex justify-content-between'>
                <button
                  type='button'
                  className='btn'
                  style={{ backgroundColor: 'orange' }}
                >
                  <a
                    id='sound'
                    rel='noopener'
                    target='_blank'
                    href={dj.soundcloud}
                    className='card-link'
                  >
                    Soundcloud
                  </a>
                </button>
                <button type='button' className='btn btn-primary'>
                  <a
                    rel='noopener'
                    target='_blank'
                    href={dj.facebook}
                    className='card-link'
                  >
                    Facebook
                  </a>
                </button>
              </div>
              <div className='bg-dark'>
                <h1 className='text-center mb-2 border-bottom border-light'>
                  Set recomendado!
                </h1>
                <VideoWrapper url={dj.set} />
              </div>
            </div>
          </div>
        </div>
        <div className='row gx-0'>
          <div className='d-flex justify-content-center'>
            <div className='col-12 col-md-6'>
              <div className='bg-dark p-1'>
                <h2 className='text-center'>Set del mes!</h2>
              </div>
              <VideoWrapper
                url={mes.setDelMes.url}
                title={mes.setDelMes.title}
              />
              <div className='bg-dark p-1'>
                <h2 className='text-center'>Track del mes!</h2>
              </div>
              <VideoWrapper
                url={mes.trackDelMes.url}
                title={mes.trackDelMes.title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
