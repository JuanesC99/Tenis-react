import React from 'react'
import zapatos from '../../assets/8533112-uhd_3840_2160_25fps.mp4'
const video = () => {
  return (
    <div className='main'>
        <video  className="videoinicio" src={zapatos} autoPlay loop muted/>
        <div className="content">
            <h1>Bienvenido</h1>
            <p>a mi tienda</p>
        </div>
    </div>
  )
}


export default video