import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


 const Nikemujer = () => {
  return (
    <center>
      <Card className='Card my-5 d-flex justify-content-center' style={{ width: '15rem', top: '0', marginTop: '12px', display:'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', }}>
        <Card.Img variant="top" src="https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/127146394_01/w=800,h=800,fit=pad" />
        <Card.Body>
          <Card.Title>Nike Jordan</Card.Title>
          <Card.Text>
                  Color negro con blanco. Para mujer. comodos
          </Card.Text>
            <Link to={'/checkout'}>Comprar!!</Link>
        </Card.Body>
      </Card>
      </center>
  )
}

export default Nikemujer

