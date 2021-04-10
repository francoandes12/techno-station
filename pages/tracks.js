import Head from 'next/head'
import VideoWrapper from '../components/VideoWrapper'
import { tracks as tracksData } from './../data/tracks'
const tracks = () => {
  return (
    <>
      <Head>
        <title>Tracks</title>
      </Head>
      <h2 className='text-center mt-2'>Top fresh tracks, encontralos aca</h2>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        {tracksData.map((track, i) => (
          <div className='col-11 col-md-5 mt-2' key={i}>
            <VideoWrapper url={track.url} title={track.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default tracks
