import Head from 'next/head'
const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name='description' content='about techno station' />
      </Head>
      <h2 className='text-center mt-2'>Acerca de Techno station cba</h2>
      <div className='row bg-secondary d-flex gx-0 justify-content-around'>
        <div class='card'>
          <div class='card-body text-dark'>
            Es una pagina para escuchar la mejor musica electronica de toda la
            web.Desde tracks viejos hasta tracks recien salidos del horno, hasta
            sets maratonicos. Y por supuesto las mejores playlist para que estes
            siempre acompañado/a de buena musica!
          </div>
        </div>
      </div>
    </>
  )
}

export default about
