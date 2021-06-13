import { useState } from 'react'
import VideoWrapper from './../components/VideoWrapper'

const crear = () => {
  const [track, setTrack] = useState({
    id: new Date().getMilliseconds(),
    name: '',
    link: '',
  })
  const [tracks, setTracks] = useState([])
  const handleClick = (e) => {
    e.preventDefault()
    setTracks((prev) => [...prev, track])
    setTrack({
      id: new Date().getMilliseconds(),
      name: '',
      link: '',
    })
  }
  const handleChange = (e, field) => {
    if (field === 'name') {
      setTrack((prev) => {
        return {
          ...prev,
          name: e.target.value,
        }
      })
    } else {
      setTrack((prev) => {
        return {
          ...prev,
          link: e.target.value,
        }
      })
    }
  }
  console.log(tracks)
  return (
    <div>
      <h1>crear track</h1>
      <form>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          name='name'
          onChange={(e) => handleChange(e, 'name')}
          value={track.name}
        />
        <label htmlFor='link'>Enlace</label>
        <input
          type='text'
          name='link'
          onChange={(e) => handleChange(e)}
          value={track.link}
        />
        <button onClick={(e) => handleClick(e)}>Agregar track</button>
      </form>
      {tracks &&
        tracks.map((t) => (
          <div key={t.id}>
            <VideoWrapper title={t.name} url={t.link} />
          </div>
        ))}
    </div>
  )
}

export default crear
