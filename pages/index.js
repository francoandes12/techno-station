import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
export default function Home() {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => <p>cargando..</p>,
  })
  const mes = {
    trackDelMes: {
      title: 'Tripppin (Maksim Dark Remix)',
      url: 'https://www.youtube.com/embed/C_PZHK_Hz9k',
    },
    setDelMes: {
      title: 'Guy J - Echos (Live) LF044',
      url: 'https://www.youtube.com/embed/dAVCAya_t1U',
    },
  }
  const dj = {
    nombre: 'Eelke Kleijn',
    pais: 'Holanda',
    genero: 'Melodico/Progress',
    track: 'Lovely Sweet Divine',
    set: 'https://www.youtube.com/embed/isWT118zd4g',
    info:
      'Eelke Kleijn is a rare talent. With work stretching across movie trailer scores, deep live shows and incredibly well formed production, he crosses a boundary from electronic producer and in to a true modern day composer.-Fuente: Resident Advisor',
    foto:
      'https://ege.electronicgroove.com/wp-content/uploads/2020/06/Eelke-Kleijn-I.jpg',
  }
  return (
    <>
      <Head>
        <title>Techno Station</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-center mt-3 mb-4'>Bienvenidos a Techno Station</h1>
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
                      .Listen it,
                      <a
                        href='https://www.youtube.com/watch?v=gCXfjw0JgT0&ab_channel=EskimoRecordings'
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
                <a
                  target='_blank'
                  href='https://soundcloud.com/eelke-kleijn'
                  className='card-link'
                  style={{ color: 'orange' }}
                >
                  Soundcloud
                </a>
                <a
                  target='_blank'
                  href='https://www.facebook.com/eelkekleijn/'
                  className='card-link text-primary'
                >
                  Facebook
                </a>
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
        <div className='bg-secondary col-12'>
          <div className='bg-dark p-1'>
            <h2 className='text-center'>Set del mes!</h2>
          </div>
          <VideoWrapper url={mes.setDelMes.url} title={mes.setDelMes.title} />
        </div>
        <div className='bg-dark p-1'>
          <h2 className='text-center'>Track del mes!</h2>
        </div>
        <VideoWrapper url={mes.trackDelMes.url} title={mes.trackDelMes.title} />
      </div>
    </>
  )
}
