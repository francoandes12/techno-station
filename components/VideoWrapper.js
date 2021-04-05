import React from 'react'

const VideoWrapper = ({ title, url }) => {
  return (
    <>
      {title && <h3 className='text-dark text-center'>{title}</h3>}
      <iframe
        width='100%'
        height='450'
        src={url}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </>
  )
}

export default VideoWrapper
