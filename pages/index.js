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
      title: 'Mr Diamond - Dance With Me',
      url: 'https://www.youtube.com/embed/zwhmBmMi-sw',
    },
    setDelMes: {
      title: 'Victor Ruiz (Brasil) @ Drumcode Radio 569 25.06.2021"',
      url: 'https://www.youtube.com/embed/R7KcoHS6TF4',
    },
  }
  const dj = {
    nombre: 'Bart Skils',
    pais: 'Paises Bajos',
    genero: 'Techno',
    track: 'Moby - Go (Bart Skils Remix)',
    trackLink:
      'https://www.youtube.com/watch?v=SAV1OmMKt98&ab_channel=drumcodeofficial',
    set: 'https://www.youtube.com/embed/avs7kmerglc',
    info: 'La carrera de Bart Skils comenzó en 1995 cuando se muda a Amsterdam y comienza a trabajar para Outland Records. Tras pinchar en el Mazzo por primera vez se convierte en residente con sus fiestas semanales llamadas VOLTT. A partir de ahí se empezó a crear un nombre en la escena de la "Venecia del norte" gracias a sus suaves mezclas y sus sets dinámicos que varían desde el techno más rítmico al minimal más deep, siempre con la pista de baile como meta. En la actualidad Bart Skils es residente y promotor de varias fiestas que se desarrollan mensualmente en diferentes clubs de la ciudad holandesa. Por un lado está Traffic en el Melkweg (Amsterdam) con el que se centra en el techno más clásico mientras que le dal al mínimal-techno con VOLTT en el Paradiso y Static en el Club 11.Como productor Bart Skils ha publicado en Pure Plastic (el sello de Mark Broom) y en 100% Pure (Amsterdam). Su deep techno ha sido charteado por djs de la talla de Guido Schneider, Luciano, Adam Beyer, Deep Dish, Villalobos, Loco Dice, Sven Vath, Mathew Dear, Richie Hawtin o Dominik Eulberg. Además de sus residencias mensuales, es un habitual de los mejores festivales de la zona como Awakenings, Lowlands, Innercity, Pinkpop, Dance Valley, Extrema o 10 Days Off.Fuente: Clubbing Spain',
    foto: 'https://www.edmtunes.com/wp-content/uploads/2021/07/wasted-heroes-bart-skils-techno_900x.jpeg',
    facebook: 'https://www.facebook.com/djbartskils',
    soundcloud: 'https://soundcloud.com/bart-skils',
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
              <div
                style={{
                  height: '400px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <img
                  className='rounded-circle mt-1'
                  src={dj.foto}
                  alt={dj.nombre}
                  style={{ width: '80%' }}
                />
              </div>
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
                        href={dj.trackLink}
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
