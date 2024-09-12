import React from 'react'
import { Card } from 'react-bootstrap'

const nikePegasus = () => {
  return (
    <div>    <Card className='Card my-5 d-flex justify-content-center' style={{ width: '15rem', top: '0', marginLeft: '550px', marginTop: '12px', display:'flex', flexDirection: 'column', justifyContent: 'center',
        alignItems: 'center', position: 'absolute', }}>
        <Card.Img variant="top" src="https://nikeco.vtexassets.com/arquivos/ids/668510-800-auto?v=638572813897730000&width=800&height=auto&aspect=true" />
        <Card.Body>
          <Card.Title>Nike Pegasus 41 Electric</Card.Title>
          <Card.Text>
          Calzado de correr en carretera para mujer
          </Card.Text>
          <a variant="primary" href='/checkout' >Comprar!!</a>
        </Card.Body>
      </Card></div>
  )
}

export default nikePegasus