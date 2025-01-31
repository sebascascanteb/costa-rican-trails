import React from 'react';
import { ComponenteCarrousel } from './ComponenteCarrousel';
import { ComponenteContexto } from './ComponenteContexto';
import '../css/ComponenteContenido.css';


export const ComponenteContenido = () => {
  return (
    <div className='div-contenedor'>
            <ComponenteCarrousel
                carrusel1='destino1'
                carrusel2='destino1'
                carrusel3='destino1'
            />
            <ComponenteContexto 
            contexto ='aca va el contexto'
            />
        </div>
  )
}

