import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <h2 className='text-white text-center mt-2 p-2'>
          Techno Station Reloaded
        </h2>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='text-white me-3'>coming soon</p>
        <div className='spinner-border text-light' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    </>
  )
}
