import React from 'react'

const VideoWrapper = ({ title, url, color, height }) => {
  return (
    <>
      {title && (
        <h3 className={`text-center ${color ? color : 'text-light'}`}>
          {title}
        </h3>
      )}
      <iframe
        width='100%'
        height={height ? height : '450'}
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
