import Head from 'next/head'
import dynamic from 'next/dynamic'

const sets = () => {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => <p>cargando..</p>,
  })
  const sets = {
    set1: 'https://www.youtube.com/embed/2pnDnxL237c',
    set2: 'https://www.youtube.com/embed/soBP7fEKA3o',
    set3: 'https://www.youtube.com/embed/OyDg-VeCz6I',
    set4: 'https://www.youtube.com/embed/8gu52jo3qyY',
    set5: 'https://www.youtube.com/embed/Dtpserl8CzU',
    set6: 'https://www.youtube.com/embed/erW4UP_cpnU',
    set7: 'https://www.youtube.com/embed/uQKbxwpeRl0',
  }
  return (
    <>
      <Head>
        <title>Sets</title>
        <meta name='description' content='the best electronic sets are here!' />
      </Head>
      <h2 className='text-center mt-2'>Los mejores sets de la web</h2>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        <div className='col-11 col-md-8 mt-2'>
          <VideoWrapper url={sets.set5} height={500} />
        </div>
        <div className='col-11 col-md-5 mt-2'>
          <VideoWrapper url={sets.set1} />
        </div>
        <div className='col-11 col-md-5 mt-2'>
          <VideoWrapper url={sets.set2} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={sets.set3} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={sets.set4} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={sets.set6} />
        </div>
        <div className='col-11 col-md-5'>
          <VideoWrapper url={sets.set7} />
        </div>
      </div>
    </>
  )
}

export default sets
