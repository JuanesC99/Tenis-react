import React from 'react'


const checkout = () => {
  return (
    <div>
        <center>
            <input style={{margin: '11px'}} type="text" placeholder='Escribe aqui'/>
            <input style={{margin: '11px', justifyItems: 'center'}} type="number" placeholder='telefono aqui'/>
            <input style={{margin: '11px'}} type="email" placeholder='Email aqui'/>
        </center>

        <center><a href="/">Enviar</a></center>
    </div>
  )
}

export default checkout
