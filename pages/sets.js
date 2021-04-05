import Head from 'next/head'
import React from 'react'
import VideoWrapper from '../components/VideoWrapper'

const sets = () => {
  const sets = {
    set1: 'https://www.youtube.com/embed/2pnDnxL237c',
    set2: 'https://www.youtube.com/embed/soBP7fEKA3o',
    set3: 'https://www.youtube.com/embed/OyDg-VeCz6I',
    set4: 'https://www.youtube.com/embed/8gu52jo3qyY',
  }
  return (
    <>
      <Head>
        <title>Sets</title>
      </Head>
      <h2 className='text-center'>Los mejores sets</h2>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        <div className='col-5'>
          <VideoWrapper url={sets.set1} />
        </div>
        <div className='col-5'>
          <VideoWrapper url={sets.set2} />
        </div>
        <div className='col-5'>
          <VideoWrapper url={sets.set3} />
        </div>
        <div className='col-5'>
          <VideoWrapper url={sets.set4} />
        </div>
      </div>
    </>
  )
}

export default sets
