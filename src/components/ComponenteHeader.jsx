import React from 'react'
import '../css/ComponenteHeader.css'

export const ComponenteHeader = () => {
  return (
    <header className='cabecera'>
        <nav className='barra-navegacion'>
            <img className='imagen-logo' src={require('../images/logo.png')} alt="" />
            <ul className='lista-menu'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li className='hamburguer'>
                    <a href="#">
                        <div className='bar'></div>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
