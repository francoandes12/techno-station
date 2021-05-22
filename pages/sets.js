import Head from 'next/head'
import dynamic from 'next/dynamic'

const sets = () => {
  const VideoWrapper = dynamic(() => import('../components/VideoWrapper'), {
    loading: () => <p>cargando..</p>,
  })
  const sets = {
    set1: 'https://www.youtube.com/embed/w2EKkovBGgM',
    set2: 'https://www.youtube.com/embed/JFy-0F2UCD0',
    set3: 'https://www.youtube.com/embed/WYgdfXFV1mM',
    set4: 'https://www.youtube.com/embed/LIZ18Wlrmp8',
    set5: 'https://www.youtube.com/embed/1_iJx_01_UQ',
    set6: 'https://www.youtube.com/embed/kFFS3KxPeHc',
    set7: 'https://www.youtube.com/embed/t3DEVR1XvVE',
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
