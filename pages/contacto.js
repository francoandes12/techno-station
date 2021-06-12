import Head from 'next/head'
const contacto = () => {
  return (
    <>
      <Head>
        <title>Contacto</title>
        <meta name='description' content='contact to techno station cba' />
      </Head>
      <h2 className='text-center mt-2'>Contactanos</h2>
      <div className='row bg-secondary gx-0 d-flex justify-content-center'>
        <div className='col-12 col-md-6'>
          <div className='card text-center mt-3'>
            <div className='card-body'>
              <h5 className='card-title text-dark'>Team Andes</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                via email francoandes12@gmail.com
              </h6>
              <p className='card-text text-dark'>
                O tambien podes comunicarte via redes sociales
              </p>
              <div className='d-flex justify-content-center'>
                <button type='button' className='btn btn-primary'>
                  <a
                    rel='noopener'
                    target='_blank'
                    href='https://www.facebook.com/francoandes12'
                    className='card-link'
                  >
                    Facebook
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id='fixnavbar'></div>
      </div>
    </>
  )
}

export default contacto
