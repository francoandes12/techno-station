import Head from 'next/head'
import dynamic from 'next/dynamic'

const listas = () => {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => <p>cargando..</p>,
  })
  const listas = {
    house: {
      url:
        'https://www.youtube.com/embed/videoseries?list=PL6K4IVRzmkaBbgscpf2EGrSDPqBzfB2g8',
      title: 'House playlist, powered by Gaston Theiler.',
    },
    techno: {
      url:
        'https://www.youtube.com/embed/videoseries?list=PL6K4IVRzmkaBi_DxdBGiXiEaTLVJpRqVZ',
      title: 'Techno playlist, powered by Andes',
    },
    progress: {
      url:
        'https://www.youtube.com/embed/videoseries?list=PL6K4IVRzmkaAAR0MqSl_nZNyFgJMMYq3U',
      title: 'Progress playlist, powered by Andes',
    },
    clasicos: {
      url:
        'https://www.youtube.com/embed/videoseries?list=PL6K4IVRzmkaBjxF4API18YrjdnRf2Rmxt',
      title: 'Tracks Clasicos by Andes.',
    },
    selection: {
      url:
        'https://www.youtube.com/embed/videoseries?list=PL6K4IVRzmkaBXXIo99-Mwy7p6CocCZL5g',
      title: 'Selections by Andes',
    },
  }
  return (
    <>
      <Head>
        <title>Listas</title>
        <meta name='description' content='the best playlist, are here' />
      </Head>
      <h2 className='text-center mt-2'>Las mejores listas</h2>
      <h3 className='text-center'>con tracks finamente seleccionados.</h3>
      <h4 className='text-center'>Listas de Youtube y Spotify.</h4>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        <div className='col-11 col-md-12'>
          <VideoWrapper
            url={listas.clasicos.url}
            title={listas.clasicos.title}
          />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={listas.house.url} title={listas.house.title} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={listas.techno.url} title={listas.techno.title} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper
            url={listas.progress.url}
            title={listas.progress.title}
          />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper
            url={listas.selection.url}
            title={listas.selection.title}
          />
        </div>
      </div>
    </>
  )
}

export default listas
