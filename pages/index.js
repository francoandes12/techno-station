import Head from 'next/head'
import Image from 'next/image'
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
      title: 'Guy Mantzur - My Wild Flower',
      url: 'https://www.youtube.com/embed/8fRzicVlsq0',
    },
    setDelMes: {
      title: 'In the MOOD - Episode 361',
      url: 'https://www.youtube.com/embed/7TKGaz4_ELk',
    },
  }
  const dj = {
    nombre: 'Marc Romboy',
    pais: 'Alemania',
    genero: 'Techno',
    track: 'Phobos w/ Stephan Bodzin',
    set: 'https://www.youtube.com/embed/E_kl9_rAMtI',
    info: 'Marc Romboy has been in the music biz for over a decade working behind the scenes on dance music labels such as Alphabet City, Terminal M or PSI-49-Net. His latest project is Systematic Recordings which he set up in 2004 and has quickly become one of the top electrohouse imprints.Fuente: Resident Advisor',
    foto: 'https://www.clubbingspain.com/imagenes/Marc-Romboy-2019.jpg',
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
            <div className='card mb-5'>
              <Image
                className='rounded-circle mt-1'
                src={dj.foto}
                alt={dj.nombre}
                width={500}
                height={300}
                layout='responsive'
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
                    href='https://soundcloud.com/MARCROMBOY'
                    className='card-link'
                  >
                    Soundcloud
                  </a>
                </button>
                <button type='button' className='btn btn-primary'>
                  <a
                    rel='noopener'
                    target='_blank'
                    href='https://es-la.facebook.com/marcromboyfanpage'
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
