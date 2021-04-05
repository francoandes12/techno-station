import Head from 'next/head'
import Image from 'next/image'
import VideoWrapper from './../components/VideoWrapper'

export default function Home() {
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
                  <i className='fas fa-headphones'></i>
                  Genero: {dj.genero}
                </li>
                <li className='list-group-item'>{dj.info}</li>
                <li className='list-group-item'>
                  <div className='d-flex'>
                    <p>Top Track:{dj.track}</p>
                    <p>
                      .You can listen it,
                      <a
                        href='https://www.youtube.com/watch?v=gCXfjw0JgT0&ab_channel=EskimoRecordings'
                        target='_blank'
                        className='text-info'
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
              <h1 className='text-dark text-center'>Set recomendado!</h1>
              <VideoWrapper url={dj.set} />
            </div>
            <div className='bg-white'>
              <h2 className='text-center text-secondary'>Set del mes!</h2>
              <VideoWrapper
                url={mes.setDelMes.url}
                title={mes.setDelMes.title}
              />
              <h2 className='text-center text-secondary'>Track del mes!</h2>
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
