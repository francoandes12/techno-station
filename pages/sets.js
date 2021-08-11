import Head from 'next/head'
import dynamic from 'next/dynamic'

const sets = () => {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => <p>cargando..</p>,
  })
  const sets = [
    {
      id: 1,
      link: 'https://www.youtube.com/embed/pYA5m779WYc',
    },
    {
      id: 2,
      link: 'https://www.youtube.com/embed/GqJEupIlMps',
    },
    {
      id: 3,
      link: 'https://www.youtube.com/embed/_jrwLhQtbHQ',
    },
    {
      id: 4,
      link: 'https:/www.youtube.com/embed/nJy5NbTjbFo',
    },
    {
      id: 5,
      link: 'https://www.youtube.com/embed/6Bbw9ovb7SI',
    },
    {
      id: 6,
      link: 'https://www.youtube.com/embed/rXoS_d-KVEQ',
    },
    {
      id: 7,
      link: 'https://www.youtube.com/embed/mln57Xdonc8',
    },
    {
      id: 8,
      link: 'https://www.youtube.com/embed/4NlsWnI0AvM',
    },
  ]
  return (
    <>
      <Head>
        <title>Sets</title>
        <meta name='description' content='the best electronic sets are here!' />
      </Head>
      <h2 className='text-center mt-2'>Los mejores sets de la web</h2>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        {sets &&
          sets.length > 0 &&
          sets.map((set) => (
            <div className='col-11 col-md-5 mt-2' key={set.id}>
              <VideoWrapper url={set.link} />
            </div>
          ))}
      </div>
    </>
  )
}

export default sets
