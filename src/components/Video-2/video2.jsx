import React from 'react'
import run from '../../assets/854008-hd_1920_1080_30fps.mp4'

 const video2 = () => {
  return (
    <div className='main2'>
                <video  className="video2" src={run} autoPlay loop muted/>
    </div>
  )
}

export default video2
